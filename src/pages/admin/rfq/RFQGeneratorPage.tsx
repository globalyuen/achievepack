import React, { useState } from 'react'
import { 
  Sparkles, Plus, Trash2, Send, Check, AlertCircle, 
  ChevronRight, Lock, Users, FileText, Package 
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full border-4 border-green-500 p-8 bg-neutral-900 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]">
          <Check className="h-16 w-16 text-green-500 mb-6 mx-auto" />
          <h1 className="text-3xl font-black mb-4 text-center italic uppercase">Batch Created!</h1>
          <p className="text-neutral-400 mb-8 text-center font-medium">
            Your multi-supplier RFQ hub is live. Share this link with suppliers:
          </p>
          <div className="bg-black p-4 border border-neutral-700 break-all text-green-400 font-mono mb-8 text-sm">
            {window.location.origin}{successLink}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-green-500 text-black font-black uppercase italic hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            Create Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-500 text-black p-1">
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">AI RFQ Generator</h1>
          </div>
          <p className="text-neutral-500 font-medium">Paste raw text to generate a supplier hub in seconds.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Input */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border-2 border-neutral-800 p-6 bg-neutral-900/50">
              <label className="block text-xs font-black uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
                <FileText className="h-3 w-3" /> Raw RFQ Text
              </label>
              <textarea 
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="Paste email, chat, or PDF text here..."
                className="w-full h-80 bg-black border border-neutral-800 p-4 font-mono text-sm focus:border-green-500 outline-none transition-colors resize-none"
              />
              <button 
                onClick={handleParse}
                disabled={isParsing || !rawText.trim()}
                className="w-full mt-6 py-4 bg-white text-black font-black uppercase italic flex items-center justify-center gap-2 hover:bg-green-500 transition-colors disabled:opacity-50"
              >
                {isParsing ? 'Parsing...' : 'Analyze with AI'}
                {!isParsing && <ChevronRight className="h-4 w-4" />}
              </button>
            </div>

            <div className="border-2 border-neutral-800 p-6 bg-neutral-900/50">
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
                      className="flex-1 bg-black border border-neutral-800 p-2 text-xs font-bold"
                    />
                    <div className="bg-neutral-800 p-2 flex items-center">
                      <Lock className="h-3 w-3 text-neutral-500" />
                    </div>
                    <input 
                      value={s.password}
                      onChange={(e) => {
                        const newS = [...suppliers]; newS[i].password = e.target.value; setSuppliers(newS);
                      }}
                      className="w-24 bg-black border border-neutral-800 p-2 text-xs font-mono"
                    />
                  </div>
                ))}
                <button 
                  onClick={() => setSuppliers([...suppliers, { name: '', password: '' }])}
                  className="w-full py-2 border border-dashed border-neutral-700 text-neutral-500 text-xs font-bold uppercase hover:border-neutral-500 hover:text-white transition-colors"
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
                  className="w-full bg-black border-2 border-neutral-800 p-4 text-xl font-black italic uppercase placeholder:text-neutral-800 focus:border-green-500 outline-none"
                />
              </div>
              <button 
                onClick={handleSave}
                disabled={isSaving || items.length === 0}
                className="bg-green-500 text-black px-8 py-4 font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Generate Hub'}
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="group border-2 border-neutral-800 bg-neutral-900/30 p-6 relative">
                  <button 
                    onClick={() => removeItem(i)}
                    className="absolute top-4 right-4 text-neutral-700 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-600 mb-1">Product Name</label>
                      <input 
                        value={item.product_name}
                        onChange={(e) => updateItem(i, 'product_name', e.target.value)}
                        className="w-full bg-black border border-neutral-800 p-2 text-sm font-bold focus:border-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-600 mb-1">Bag Style</label>
                      <input 
                        value={item.style}
                        onChange={(e) => updateItem(i, 'style', e.target.value)}
                        className="w-full bg-black border border-neutral-800 p-2 text-sm font-bold focus:border-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-600 mb-1">Dimensions</label>
                      <input 
                        value={item.dimensions}
                        onChange={(e) => updateItem(i, 'dimensions', e.target.value)}
                        className="w-full bg-black border border-neutral-800 p-2 text-sm font-bold focus:border-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-600 mb-1">Material Spec</label>
                      <input 
                        value={item.material_spec}
                        onChange={(e) => updateItem(i, 'material_spec', e.target.value)}
                        className="w-full bg-black border border-neutral-800 p-2 text-sm font-bold focus:border-white outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-black uppercase text-neutral-600 mb-1">Quantities (Comma separated)</label>
                      <input 
                        value={item.target_quantities.join(', ')}
                        onChange={(e) => updateItem(i, 'target_quantities', e.target.value.split(',').map(n => parseInt(n.trim()) || 0))}
                        className="w-full bg-black border border-neutral-800 p-2 text-sm font-mono text-green-400 focus:border-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button 
                onClick={addItem}
                className="w-full py-6 border-2 border-dashed border-neutral-800 text-neutral-600 font-black uppercase italic hover:border-neutral-500 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" /> Add Manual Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RFQGeneratorPage
