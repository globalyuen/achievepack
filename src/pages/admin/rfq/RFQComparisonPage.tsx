import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  BarChart3, FileText, Download, ChevronLeft, 
  ArrowUpRight, TrendingDown, DollarSign, Award 
} from 'lucide-react'
import { supabase } from '../../../lib/supabase'

interface RFQBatch {
  id: string
  name: string
  created_at: string
}

interface RFQItem {
  id: string
  product_name: string
  target_quantities: number[]
}

interface Submission {
  id: string
  supplier_name: string
  prices: Record<string, Record<number, string>>
  file_url: string
  supplier_comment: string
  submitted_at: string
}

const RFQComparisonPage: React.FC = () => {
  const { batchId } = useParams<{ batchId: string }>()
  const [batch, setBatch] = useState<RFQBatch | null>(null)
  const [items, setItems] = useState<RFQItem[]>([])
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  const [isManualModalOpen, setIsManualModalOpen] = useState(false)
  const [manualText, setManualText] = useState('')
  const [manualSupplierName, setManualSupplierName] = useState('')
  const [isParsingManual, setIsParsingManual] = useState(false)
  const [manualPrices, setManualPrices] = useState<Record<string, Record<number, string>>>({})

  useEffect(() => {
    if (batchId) {
      fetchData()
    }
  }, [batchId])

  const fetchData = async () => {
    try {
      const { data: batchData } = await supabase.from('rfq_batches').select('*').eq('id', batchId).single()
      setBatch(batchData)

      const { data: itemsData } = await supabase.from('rfq_items').select('*').eq('batch_id', batchId)
      setItems(itemsData || [])

      const { data: subsData } = await supabase
        .from('rfq_submissions')
        .select('*, rfq_participants(supplier_name)')
        .eq('batch_id', batchId)
      
      const formattedSubs = (subsData || []).map(s => ({
        ...s,
        supplier_name: (s as any).rfq_participants?.supplier_name || 'Unknown'
      }))
      setSubmissions(formattedSubs)
    } catch (err) {
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleParseManual = async () => {
    if (!manualText.trim()) return
    setIsParsingManual(true)
    try {
      // Use Grok to match text to the batch's items and quantities
      const res = await fetch('/api/admin-parse-vendor-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: manualText,
          context: {
            items: items.map(it => ({ id: it.id, name: it.product_name, quantities: it.target_quantities }))
          }
        })
      })
      
      if (!res.ok) {
        if (res.status === 504) throw new Error('AI Timeout: The quote is too complex or long. Try pasting a shorter section.')
        throw new Error('Failed to parse quote')
      }

      const data = await res.json()
      if (data.success && data.extracted) {
        setManualPrices(data.extracted.prices || {})
        if (data.extracted.supplier_name && !manualSupplierName) {
          setManualSupplierName(data.extracted.supplier_name)
        }
      }
    } catch (err: any) {
      console.error('Manual parse failed:', err)
      alert(err.message || 'AI Parsing failed. Please input prices manually.')
    } finally {
      setIsParsingManual(false)
    }
  }

  const handleSaveManual = async () => {
    if (!manualSupplierName) {
      alert('Please provide a supplier name.')
      return
    }

    try {
      // 1. Ensure participant exists or create new one
      let participantId: string
      const { data: existingPart } = await supabase
        .from('rfq_participants')
        .select('id')
        .eq('batch_id', batchId)
        .eq('supplier_name', manualSupplierName)
        .single()
      
      if (existingPart) {
        participantId = existingPart.id
      } else {
        const { data: newPart, error: partError } = await supabase
          .from('rfq_participants')
          .insert({
            batch_id: batchId,
            supplier_name: manualSupplierName,
            access_password: manualSupplierName.substring(0, 4).toUpperCase() + Math.floor(1000 + Math.random() * 9000)
          })
          .select()
          .single()
        if (partError) throw partError
        participantId = newPart.id
      }

      // 2. Insert Submission
      const { error: subError } = await supabase
        .from('rfq_submissions')
        .insert({
          batch_id: batchId,
          participant_id: participantId,
          prices: manualPrices,
          supplier_comment: `Manual Entry: ${manualText.substring(0, 100)}...`
        })
      
      if (subError) throw subError
      
      setIsManualModalOpen(false)
      setManualText('')
      setManualSupplierName('')
      setManualPrices({})
      fetchData()
    } catch (err) {
      console.error('Save manual failed:', err)
      alert('Failed to save manual submission.')
    }
  }

  const getLowestPrice = (itemId: string, qty: number) => {
    let lowest = Infinity
    let supplier = ''
    submissions.forEach(sub => {
      const price = parseFloat(sub.prices[itemId]?.[qty])
      if (price && price < lowest) {
        lowest = price
        supplier = sub.supplier_name
      }
    })
    return lowest === Infinity ? null : { price: lowest, supplier }
  }

  if (loading) return <div className="min-h-screen bg-[#fcfcfc] text-black flex items-center justify-center font-black italic uppercase">Loading...</div>

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link to="/ctrl-x9k7m/rfq-generator" className="text-neutral-400 hover:text-black flex items-center gap-1 text-xs font-black uppercase mb-4 transition-colors">
              <ChevronLeft className="h-3 w-3" /> Back to Generator
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-black text-white p-1">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black italic uppercase tracking-tighter">RFQ Comparison</h1>
            </div>
            <p className="text-neutral-500 font-medium">Comparing {submissions.length} supplier quotes for "{batch?.name}".</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsManualModalOpen(true)}
              className="bg-white text-black px-6 py-3 text-xs font-black uppercase italic border-2 border-black hover:bg-neutral-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              + Manual Input
            </button>
            <button className="bg-black text-white px-6 py-3 text-xs font-black uppercase italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all">
              Export Excel
            </button>
          </div>
        </header>

        {submissions.length === 0 ? (
          <div className="border-4 border-dashed border-neutral-200 p-20 text-center bg-white">
            <TrendingDown className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
            <h2 className="text-2xl font-black italic uppercase text-neutral-300">No submissions yet</h2>
            <p className="text-neutral-400 mt-2">Waiting for suppliers to submit their quotes.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {items.map(item => (
              <section key={item.id} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-4 mb-8">
                  <Package className="h-6 w-6 text-black" />
                  <h3 className="text-2xl font-black italic uppercase tracking-tight">{item.product_name}</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-4 bg-neutral-50 border-2 border-black text-left text-[10px] font-black uppercase text-neutral-500">Supplier</th>
                        {item.target_quantities.map(qty => (
                          <th key={qty} className="p-4 bg-neutral-50 border-2 border-black text-right text-[10px] font-black uppercase text-neutral-500">
                            {qty.toLocaleString()} PCS
                          </th>
                        ))}
                        <th className="p-4 bg-neutral-50 border-2 border-black text-left text-[10px] font-black uppercase text-neutral-500">Docs / Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map(sub => (
                        <tr key={sub.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="p-4 border-2 border-black font-black italic uppercase bg-white">{sub.supplier_name}</td>
                          {item.target_quantities.map(qty => {
                            const price = parseFloat(sub.prices[item.id]?.[qty])
                            const lowest = getLowestPrice(item.id, qty)
                            const isLowest = lowest && price === lowest.price
                            return (
                              <td key={qty} className={`p-4 border-2 border-black text-right font-mono text-lg ${isLowest ? 'text-green-700 bg-green-50' : 'text-neutral-600 bg-white'}`}>
                                {price ? `¥${price.toFixed(3)}` : '-'}
                                {isLowest && <Award className="inline-block h-4 w-4 ml-2 mb-1" />}
                              </td>
                            )
                          })}
                          <td className="p-4 border-2 border-black bg-white">
                            <div className="flex items-center gap-4">
                              {sub.file_url && (
                                <a href={sub.file_url} target="_blank" rel="noreferrer" className="bg-black text-white p-2 hover:bg-neutral-800 transition-colors">
                                  <FileText className="h-4 w-4" />
                                </a>
                              )}
                              <p className="text-[10px] text-neutral-400 font-medium truncate max-w-[200px]">{sub.supplier_comment || 'No comment'}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* Manual Input Modal */}
      {isManualModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border-4 border-black w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-black italic uppercase">Add Manual Quote</h2>
                <p className="text-neutral-500 font-medium text-sm">Paste vendor's text or input prices directly.</p>
              </div>
              <button onClick={() => setIsManualModalOpen(false)} className="bg-black text-white p-2 hover:bg-red-500 transition-colors">
                <ChevronLeft className="h-6 w-6 rotate-180" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Input Text */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase text-neutral-400 mb-2">Supplier Name</label>
                  <input 
                    value={manualSupplierName}
                    onChange={(e) => setManualSupplierName(e.target.value)}
                    placeholder="e.g. CWL Factory"
                    className="w-full bg-neutral-50 border-2 border-black p-3 font-bold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-neutral-400 mb-2">Quote Text (Paste from WhatsApp/Email)</label>
                  <textarea 
                    value={manualText}
                    onChange={(e) => setManualText(e.target.value)}
                    placeholder="Paste the raw quote text here..."
                    className="w-full h-64 bg-neutral-50 border-2 border-black p-4 font-mono text-xs outline-none"
                  />
                </div>
                <button 
                  onClick={handleParseManual}
                  disabled={isParsingManual || !manualText.trim()}
                  className="w-full py-4 bg-black text-white font-black uppercase italic hover:bg-neutral-800 disabled:opacity-50 transition-colors"
                >
                  {isParsingManual ? 'AI Parsing...' : 'Parse with AI'}
                </button>
              </div>

              {/* Right: Price Matrix */}
              <div className="space-y-6">
                <h3 className="text-sm font-black uppercase border-b-2 border-black pb-2">Verified Prices</h3>
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.id} className="border-2 border-neutral-100 p-4">
                      <div className="text-xs font-black uppercase mb-3 flex items-center gap-2">
                        <Package className="h-3 w-3" /> {item.product_name}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {item.target_quantities.map(qty => (
                          <div key={qty}>
                            <label className="block text-[8px] font-black text-neutral-400 mb-1">{qty.toLocaleString()}</label>
                            <input 
                              type="number"
                              step="0.001"
                              value={manualPrices[item.id]?.[qty] || ''}
                              onChange={(e) => {
                                const newP = { ...manualPrices }
                                if (!newP[item.id]) newP[item.id] = {}
                                newP[item.id][qty] = e.target.value
                                setManualPrices(newP)
                              }}
                              className="w-full bg-neutral-50 border border-black p-1.5 text-xs font-mono"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={handleSaveManual}
                  className="w-full py-6 bg-green-500 text-black font-black uppercase italic text-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  Save Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const Package = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
)

export default RFQComparisonPage
