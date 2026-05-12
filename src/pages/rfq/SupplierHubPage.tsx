import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { 
  Lock, CheckCircle, AlertCircle, Clock, 
  Upload, FileText, ChevronRight, Send, Download 
} from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface RFQBatch {
  id: string
  name: string
  status: string
}

interface RFQItem {
  id: string
  product_name: string
  style: string
  dimensions: string
  material_spec: string
  print_type: string
  target_quantities: number[]
}

interface RFQParticipant {
  id: string
  supplier_name: string
}

const SupplierHubPage: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>()
  
  // Auth state
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  
  // Data state
  const [batch, setBatch] = useState<RFQBatch | null>(null)
  const [items, setItems] = useState<RFQItem[]>([])
  const [participant, setParticipant] = useState<RFQParticipant | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Submission state
  const [prices, setPrices] = useState<Record<string, Record<number, string>>>({}) // { itemId: { qty: price } }
  const [fileUrl, setFileUrl] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (batchId) {
      fetchData()
    }
  }, [batchId])

  const fetchData = async () => {
    try {
      const { data: batchData, error: batchError } = await supabase
        .from('rfq_batches')
        .select('*')
        .eq('id', batchId)
        .single()
      if (batchError) throw batchError
      setBatch(batchData)

      const { data: itemsData, error: itemsError } = await supabase
        .from('rfq_items')
        .select('*')
        .eq('batch_id', batchId)
      if (itemsError) throw itemsError
      setItems(itemsData || [])
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async () => {
    if (!password.trim()) return
    try {
      const { data, error } = await supabase
        .from('rfq_participants')
        .select('*')
        .eq('batch_id', batchId)
        .eq('access_password', password.trim())
        .single()
      
      if (error || !data) {
        setPasswordError('访问密码错误，请重试。')
        return
      }

      setParticipant(data)
      setAuthenticated(true)
      
      // Update last accessed
      await supabase.from('rfq_participants').update({ last_accessed: new Date().toISOString() }).eq('id', data.id)
    } catch (err) {
      console.error('Login error:', err)
    }
  }

  const handlePriceChange = (itemId: string, qty: number, value: string) => {
    setPrices(prev => ({
      ...prev,
      [itemId]: {
        ...(prev[itemId] || {}),
        [qty]: value
      }
    }))
  }

  const handleSubmit = async () => {
    if (!participant || !batchId) return
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('rfq_submissions')
        .insert({
          batch_id: batchId,
          participant_id: participant.id,
          prices,
          file_url: fileUrl,
          supplier_comment: comment
        })
      
      if (error) throw error
      setIsSuccess(true)
    } catch (err) {
      console.error('Submission failed:', err)
      alert('提交失败，请检查网络后重试。')
    }   if (loading) return (
    <div className="min-h-screen bg-[#fcfcfc] text-black flex items-center justify-center font-sans">
      <div className="text-center">
        <Clock className="h-10 w-10 text-black animate-spin mx-auto mb-4" />
        <p className="font-black italic uppercase">正在加载数据...</p>
      </div>
    </div>
  )

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] text-black flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black text-white w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-black mb-2 text-center italic uppercase tracking-tighter">供应商入口</h1>
          <p className="text-neutral-500 text-center mb-8 font-bold">{batch?.name || 'RFQ HUB'}</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-neutral-400 mb-2">访问密码 (Access Password)</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full bg-neutral-50 border-2 border-black p-4 font-mono text-center focus:bg-white outline-none transition-colors"
              />
              {passwordError && <p className="text-red-500 text-xs mt-2 font-bold">{passwordError}</p>}
            </div>
            <button 
              onClick={handleLogin}
              className="w-full py-4 bg-black text-white font-black uppercase italic hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              验证登录
            </button>
          </div>
          <p className="mt-8 text-center text-[10px] text-neutral-300 font-bold uppercase tracking-widest">Powered by Achieve Pack AI</p>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] text-black flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CheckCircle className="h-16 w-16 text-green-600 mb-6 mx-auto" />
          <h1 className="text-3xl font-black mb-4 text-center italic uppercase">提交成功!</h1>
          <p className="text-neutral-600 mb-8 text-center font-medium">您的报价已成功上传至 Achieve Pack 系统。我们会尽快审核并与您联系。</p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-black text-white font-black uppercase italic hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            返回修改
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black font-sans">
      <header className="border-b-4 border-black sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-black text-white font-black p-1 text-xs">ACHIEVE</div>
            <h1 className="text-xl font-black italic uppercase tracking-tighter hidden sm:block">供应商报价门户</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase text-neutral-400">当前供应商:</span>
            <span className="bg-black text-white px-2 py-0.5 text-xs font-black italic">{participant?.supplier_name}</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">{batch?.name}</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white px-4 py-2 border-2 border-black flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="h-4 w-4 text-neutral-500" />
              <span className="text-xs font-bold uppercase text-neutral-400">项目编号:</span>
              <span className="text-xs font-mono">{batchId?.substring(0, 8).toUpperCase()}</span>
            </div>
            <div className="bg-white px-4 py-2 border-2 border-black flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="h-4 w-4 text-neutral-500" />
              <span className="text-xs font-bold uppercase text-neutral-400">状态:</span>
              <span className="text-xs font-black uppercase text-green-600">进行中 (ACTIVE)</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {items.map((item, i) => (
            <div key={item.id} className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Specs */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black italic">0{i+1}</div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tight">{item.product_name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <span className="block text-[10px] font-black uppercase text-neutral-400 mb-1">袋型样式 (Bag Style)</span>
                      <p className="font-bold text-sm uppercase">{item.style || '-'}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase text-neutral-400 mb-1">尺寸大小 (Dimensions)</span>
                      <p className="font-bold text-sm uppercase">{item.dimensions || '-'}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase text-neutral-400 mb-1">物料规格 (Materials)</span>
                      <p className="font-bold text-sm uppercase text-neutral-700">{item.material_spec || '-'}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase text-neutral-400 mb-1">印刷工艺 (Print)</span>
                      <p className="font-bold text-sm uppercase">{item.print_type || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Pricing Input */}
                <div>
                  <label className="block text-[10px] font-black uppercase text-green-600 mb-4 tracking-widest">报单价 (Unit Price RMB)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.target_quantities.map(qty => (
                      <div key={qty} className="bg-neutral-50 border-2 border-black p-4 hover:bg-white transition-colors">
                        <span className="block text-[10px] font-black uppercase text-neutral-400 mb-2">{qty.toLocaleString()} PCS</span>
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-400 font-bold">¥</span>
                          <input 
                            type="number"
                            step="0.001"
                            placeholder="0.000"
                            value={prices[item.id]?.[qty] || ''}
                            onChange={(e) => handlePriceChange(item.id, qty, e.target.value)}
                            className="bg-transparent border-none w-full font-mono text-xl text-black outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <label className="block text-xs font-black uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
              备注说明 (Additional Comments)
            </label>
            <textarea 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="如有任何其他建议或备注，请在此填写..."
              className="w-full h-40 bg-neutral-50 border-2 border-black p-4 font-bold text-sm focus:bg-white outline-none transition-colors resize-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="space-y-6">
            <div className="border-4 border-dashed border-neutral-200 p-8 text-center hover:border-black transition-colors bg-white">
              <Upload className="h-8 w-8 text-neutral-300 mx-auto mb-4" />
              <p className="text-[10px] font-black uppercase text-neutral-400 mb-4">上传 PDF 报价单 (Official Quote)</p>
              <button className="bg-black text-white px-6 py-2 text-[10px] font-black uppercase italic hover:bg-neutral-800 transition-colors">
                选择文件
              </button>
            </div>
            
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting || items.length === 0}
              className="w-full py-6 bg-green-500 text-black font-black uppercase italic text-xl border-4 border-black flex items-center justify-center gap-3 hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
            >
              {isSubmitting ? '正在提交...' : '确认提交报价'}
              {!isSubmitting && <Send className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t-4 border-black py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">© 2026 Achieve Pack Multi-Supplier Portal</p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest cursor-pointer hover:text-black transition-colors">隐私政策</span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest cursor-pointer hover:text-black transition-colors">服务条款</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SupplierHubPage

export default SupplierHubPage
