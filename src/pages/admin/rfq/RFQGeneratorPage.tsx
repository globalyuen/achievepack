import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, Plus, Trash2, Send, Check, AlertCircle, 
  ChevronRight, Lock, Users, FileText, Package, Clock 
} from 'lucide-react'
import { supabase } from '../../../lib/supabase'

interface RFQItem {
  id?: string
  product_name: string
  style: string
  dimensions: string
  material_spec: string
  print_type: string
  target_quantities: number[]
}

interface Supplier {
  name: string
  password: string
}

interface Batch {
  id: string
  name: string
  created_at: string
}

const RFQGeneratorPage: React.FC = () => {
  const [rawText, setRawText] = useState('')
  const [batchName, setBatchName] = useState('')
  const [items, setItems] = useState<RFQItem[]>([])
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    { name: 'CWL', password: 'CWL' },
    { name: 'KHH', password: 'KHH' }
  ])
  const [isParsing, setIsParsing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [successLink, setSuccessLink] = useState<string | null>(null)
  const [recentBatches, setRecentBatches] = useState<Batch[]>([])

  React.useEffect(() => {
    fetchRecentBatches()
  }, [])

  const fetchRecentBatches = async () => {
    const { data } = await supabase
      .from('rfq_batches')
      .select('id, name, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
    if (data) setRecentBatches(data)
  }

  const handleParse = async () => {
    if (!rawText.trim()) return
    setIsParsing(true)
    try {
      const res = await fetch('/api/admin-parse-rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: rawText })
      })
      const data = await res.json()
      if (data.success) {
        setBatchName(data.parsed.batch_name)
        setItems(data.parsed.items)
      }
    } catch (err) {
      console.error('Parse failed:', err)
      alert('AI Parsing failed. Please try again.')
    } finally {
      setIsParsing(false)
    }
  }

  const handleSave = async () => {
    if (!batchName || items.length === 0) {
      alert('Please provide a batch name and at least one item.')
      return
    }
    setIsSaving(true)
    try {
      // 1. Create Batch
      const { data: batchData, error: batchError } = await supabase
        .from('rfq_batches')
        .insert({ name: batchName, raw_text: rawText })
        .select()
        .single()
      
      if (batchError) throw batchError

      // 2. Create Items
      const itemsToInsert = items.map(item => ({
        batch_id: batchData.id,
        product_name: item.product_name,
        style: item.style,
        dimensions: item.dimensions,
        material_spec: item.material_spec,
        print_type: item.print_type,
        target_quantities: item.target_quantities
      }))
      const { error: itemsError } = await supabase.from('rfq_items').insert(itemsToInsert)
      if (itemsError) throw itemsError

      // 3. Create Participants
      const participantsToInsert = suppliers.map(s => ({
        batch_id: batchData.id,
        supplier_name: s.name,
        access_password: s.password
      }))
      const { error: participantsError } = await supabase.from('rfq_participants').insert(participantsToInsert)
      if (participantsError) throw participantsError

      setSuccessLink(`/hub/${batchData.id}`)
    } catch (err) {
      console.error('Save failed:', err)
      alert('Failed to save RFQ Batch.')
    } finally {
      setIsSaving(false)
    }
  }

  const addItem = () => {
    setItems([...items, { product_name: '', style: '', dimensions: '', material_spec: '', print_type: '', target_quantities: [10000, 25000, 50000] }])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, field: keyof RFQItem, value: any) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  if (successLink) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] text-black flex items-center justify-center p-6">
        <div className="max-w-md w-full border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Check className="h-16 w-16 text-green-600 mb-6 mx-auto" />
          <h1 className="text-3xl font-black mb-4 text-center italic uppercase">Batch Created!</h1>
          <p className="text-neutral-600 mb-8 text-center font-medium">
            Your multi-supplier RFQ hub is live. Share this link with suppliers:
          </p>
          <div className="bg-neutral-50 p-4 border-2 border-black break-all text-black font-mono mb-8 text-sm">
            {window.location.origin}{successLink}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-black text-white font-black uppercase italic hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            Create Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black p-4 sm:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-black text-white p-1">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">AI RFQ Generator</h1>
          </div>
          <p className="text-neutral-500 font-medium">Paste raw text to generate a supplier hub in seconds.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Input */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <label className="block text-xs font-black uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
                <FileText className="h-3 w-3" /> Raw RFQ Text
              </label>
              <textarea 
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="Paste email, chat, or PDF text here..."
                className="w-full h-80 bg-neutral-50 border-2 border-black p-4 font-mono text-sm focus:bg-white outline-none transition-colors resize-none"
              />
              <button 
                onClick={handleParse}
                disabled={isParsing || !rawText.trim()}
                className="w-full mt-6 py-4 bg-black text-white font-black uppercase italic flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors disabled:opacity-50"
              >
                {isParsing ? 'Parsing...' : 'Analyze with AI'}
                {!isParsing && <ChevronRight className="h-4 w-4" />}
              </button>
            </div>

            <div className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <label className="block text-xs font-black uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
                <Users className="h-3 w-3" /> Suppliers & Passwords
              </label>
              <div className="space-y-3">
                {suppliers.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <input 
                      value={s.name}
                      onChange={(e) => {
                        const newS = [...suppliers]; newS[i].name = e.target.value; setSuppliers(newS);
                      }}
                      className="flex-1 bg-white border-2 border-black p-2 text-xs font-bold"
                    />
                    <div className="bg-neutral-100 p-2 flex items-center border-y-2 border-l-2 border-black">
                      <Lock className="h-3 w-3 text-neutral-500" />
                    </div>
                    <input 
                      value={s.password}
                      onChange={(e) => {
                        const newS = [...suppliers]; newS[i].password = e.target.value; setSuppliers(newS);
                      }}
                      className="w-24 bg-white border-2 border-black p-2 text-xs font-mono"
                    />
                  </div>
                ))}
                <button 
                  onClick={() => setSuppliers([...suppliers, { name: '', password: '' }])}
                  className="w-full py-2 border-2 border-dashed border-neutral-300 text-neutral-400 text-xs font-bold uppercase hover:border-black hover:text-black transition-colors"
                >
                  + Add Supplier
                </button>
              </div>
            </div>
          </div>

          {/* Right: Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-end gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-xs font-black uppercase tracking-widest text-neutral-500 mb-2">Batch Name</label>
                <input 
                  value={batchName}
                  onChange={(e) => setBatchName(e.target.value)}
                  placeholder="e.g. Pet Food RFQ May 2024"
                  className="w-full bg-white border-2 border-black p-4 text-xl font-black italic uppercase placeholder:text-neutral-300 focus:bg-neutral-50 outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
              <button 
                onClick={handleSave}
                disabled={isSaving || items.length === 0}
                className="bg-green-500 text-black px-8 py-[1.125rem] font-black uppercase italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Generate Hub'}
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="group border-2 border-black bg-white p-6 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <button 
                    onClick={() => removeItem(i)}
                    className="absolute top-4 right-4 text-neutral-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-400 mb-1">Product Name</label>
                      <input 
                        value={item.product_name}
                        onChange={(e) => updateItem(i, 'product_name', e.target.value)}
                        className="w-full bg-neutral-50 border-2 border-black p-2 text-sm font-bold focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-400 mb-1">Bag Style</label>
                      <input 
                        value={item.style}
                        onChange={(e) => updateItem(i, 'style', e.target.value)}
                        className="w-full bg-neutral-50 border-2 border-black p-2 text-sm font-bold focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-400 mb-1">Dimensions</label>
                      <input 
                        value={item.dimensions}
                        onChange={(e) => updateItem(i, 'dimensions', e.target.value)}
                        className="w-full bg-neutral-50 border-2 border-black p-2 text-sm font-bold focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-400 mb-1">Material Spec</label>
                      <input 
                        value={item.material_spec}
                        onChange={(e) => updateItem(i, 'material_spec', e.target.value)}
                        className="w-full bg-neutral-50 border-2 border-black p-2 text-sm font-bold focus:bg-white outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-black uppercase text-neutral-400 mb-1">Quantities (Comma separated)</label>
                      <input 
                        value={item.target_quantities.join(', ')}
                        onChange={(e) => updateItem(i, 'target_quantities', e.target.value.split(',').map(n => parseInt(n.trim()) || 0))}
                        className="w-full bg-neutral-50 border-2 border-black p-2 text-sm font-mono text-green-700 focus:bg-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button 
                onClick={addItem}
                className="w-full py-6 border-2 border-dashed border-neutral-300 text-neutral-400 font-black uppercase italic hover:border-black hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" /> Add Manual Item
              </button>
            </div>

            {/* Recent Batches Section */}
            {recentBatches.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-black italic uppercase mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5" /> Recent Batches
                </h3>
                <div className="space-y-3">
                  {recentBatches.map(b => (
                    <div key={b.id} className="bg-white border-2 border-black p-4 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div>
                        <div className="font-black italic uppercase text-sm">{b.name}</div>
                        <div className="text-[10px] text-neutral-400 font-bold">{new Date(b.created_at).toLocaleDateString()}</div>
                      </div>
                      <div className="flex gap-2">
                        <Link 
                          to={`/ctrl-x9k7m/rfq/${b.id}/comparison`}
                          className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase italic hover:bg-neutral-800 transition-colors"
                        >
                          Comparison
                        </Link>
                        <button 
                          onClick={() => window.open(`${window.location.origin}/hub/${b.id}`, '_blank')}
                          className="border-2 border-black px-4 py-1.5 text-[10px] font-black uppercase italic hover:bg-neutral-50 transition-colors"
                        >
                          Hub Link
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RFQGeneratorPage
