import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, Plus, Search, Trash2, Eye, Copy, Check, 
  RefreshCw, Sparkles, X, Lock, Mail, Wand2, AlertCircle,
  Clock, FileText, Package, Send, Calendar, User, Building, Loader2, ChevronDown, ChevronUp, Edit3
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { supabase, QuotationBatch, QuotationItem } from '../lib/supabase'
import { generateQuotationItemAnalysis, generateQuotationSummary, parsePriceTable, parseQuotationInput, ParsedQuotationInput } from '../lib/quotationAnalysis'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const SHAPE_OPTIONS = ['Stand Up Pouch', '3-Side Seal', 'Flat Bottom', 'Side Gusset', 'Spout Pouch', 'Retort Pouch', 'Vacuum Pouch', 'Rollstock']
const MATERIAL_OPTIONS = ['Kraft Paper / PLA', 'MDOPE / PLA', 'PET / PE', 'BOPP / CPP', 'Nylon / PE', 'Aluminum Foil', 'Metalized PET', 'PCR PE']
const CLOSURE_OPTIONS = ['Press-to-Close Zipper', 'Child Resistant', 'Slider Zipper', 'Tin Tie', 'Spout Cap', 'Heat Seal Only', 'Velcro']
const BARRIER_OPTIONS = ['High Barrier (Aluminum)', 'Medium Barrier (Metalized)', 'Standard Barrier', 'Ultra-High Barrier (EVOH)']
const SURFACE_OPTIONS = ['Matte', 'Gloss', 'Soft Touch', 'Spot UV', 'Embossed', 'Metallic']

const QuotationBatchesPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()
  
  const [batches, setBatches] = useState<QuotationBatch[]>([])
  const [selectedBatch, setSelectedBatch] = useState<QuotationBatch | null>(null)
  const [batchItems, setBatchItems] = useState<QuotationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newBatch, setNewBatch] = useState({
    batch_name: '', password: '', customer_name: '', customer_email: '',
    customer_company: '', customer_phone: '', valid_until: '', currency: 'USD', notes: ''
  })
  const [creating, setCreating] = useState(false)
  
  const [showAddItemModal, setShowAddItemModal] = useState(false)
  const [newItem, setNewItem] = useState({
    item_name: '', shape: '', size: '', material: '', closure: '', barrier: '',
    surface: '', structure_spec: '', quantity: 0, unit_price: 0, setup_cost: 0,
    shipping_cost: 0, price_table_raw: '', notes: ''
  })
  const [addingItem, setAddingItem] = useState(false)
  
  const [analyzingId, setAnalyzingId] = useState<string | null>(null)
  const [generatingSummary, setGeneratingSummary] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  
  // AI Smart Input states
  const [aiInputText, setAiInputText] = useState('')
  const [aiParsing, setAiParsing] = useState(false)
  const [aiParsedResult, setAiParsedResult] = useState<ParsedQuotationInput | null>(null)
  const [showAiInput, setShowAiInput] = useState(true)
  const [aiError, setAiError] = useState<string | null>(null)

  const fetchBatches = useCallback(async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from('quotation_batches').select('*').order('created_at', { ascending: false })
      if (error) throw error
      setBatches(data || [])
    } catch (err) {
      console.error('Error fetching batches:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchBatchItems = useCallback(async (batchId: string) => {
    try {
      const { data, error } = await supabase.from('quotation_items').select('*').eq('batch_id', batchId).order('created_at', { ascending: true })
      if (error) throw error
      setBatchItems(data || [])
    } catch (err) {
      console.error('Error fetching batch items:', err)
    }
  }, [])

  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) fetchBatches()
  }, [user, fetchBatches])

  useEffect(() => {
    if (selectedBatch) fetchBatchItems(selectedBatch.id)
  }, [selectedBatch, fetchBatchItems])

  const handleCreateBatch = async () => {
    if (!newBatch.batch_name.trim()) return
    setCreating(true)
    try {
      const quoteNumber = `Q-${Date.now().toString(36).toUpperCase()}`
      const password = newBatch.password || Math.random().toString(36).substring(2, 8).toUpperCase()
      
      const { data, error } = await supabase.from('quotation_batches').insert({
        batch_name: newBatch.batch_name, password, quote_number: quoteNumber,
        customer_name: newBatch.customer_name, customer_email: newBatch.customer_email,
        customer_company: newBatch.customer_company, customer_phone: newBatch.customer_phone,
        valid_until: newBatch.valid_until || null, currency: newBatch.currency, notes: newBatch.notes,
        status: 'draft', subtotal: 0, discount_percent: 0, tax_percent: 0, total: 0, total_items: 0, created_by: user?.id
      }).select().single()
      
      if (error) throw error
      setBatches(prev => [data, ...prev])
      setSelectedBatch(data)
      setShowCreateModal(false)
      setNewBatch({ batch_name: '', password: '', customer_name: '', customer_email: '', customer_company: '', customer_phone: '', valid_until: '', currency: 'USD', notes: '' })
    } catch (err) {
      console.error('Error creating batch:', err)
      alert('Failed to create quotation')
    } finally {
      setCreating(false)
    }
  }

  // Handle AI Smart Input parsing
  const handleAiParse = async () => {
    if (!aiInputText.trim()) return
    setAiParsing(true)
    setAiError(null)
    setAiParsedResult(null)
    
    try {
      const result = await parseQuotationInput(aiInputText)
      setAiParsedResult(result)
      
      // Auto-fill the form with parsed results
      if (result.item_name) setNewItem(p => ({ ...p, item_name: result.item_name || p.item_name }))
      if (result.shape) setNewItem(p => ({ ...p, shape: result.shape || p.shape }))
      if (result.size) setNewItem(p => ({ ...p, size: result.size || p.size }))
      if (result.material) setNewItem(p => ({ ...p, material: result.material || p.material }))
      if (result.closure) setNewItem(p => ({ ...p, closure: result.closure || p.closure }))
      if (result.barrier) setNewItem(p => ({ ...p, barrier: result.barrier || p.barrier }))
      if (result.surface) setNewItem(p => ({ ...p, surface: result.surface || p.surface }))
      if (result.structure_spec) setNewItem(p => ({ ...p, structure_spec: result.structure_spec || p.structure_spec }))
      if (result.quantity) setNewItem(p => ({ ...p, quantity: result.quantity || p.quantity }))
      if (result.unit_price) setNewItem(p => ({ ...p, unit_price: result.unit_price || p.unit_price }))
      if (result.setup_cost) setNewItem(p => ({ ...p, setup_cost: result.setup_cost || p.setup_cost }))
      if (result.shipping_cost) setNewItem(p => ({ ...p, shipping_cost: result.shipping_cost || p.shipping_cost }))
      if (result.notes) setNewItem(p => ({ ...p, notes: result.notes || p.notes }))
      if (result.price_table && result.price_table.quantities.length > 0) {
        const priceTableStr = result.price_table.quantities.map((qty, i) => 
          `${qty.toLocaleString()} - $${result.price_table!.prices[i]}`
        ).join('\n')
        setNewItem(p => ({ ...p, price_table_raw: priceTableStr }))
      }
      
      // Collapse AI input after successful parse
      if (result.confidence > 0.5) {
        setShowAiInput(false)
      }
    } catch (err) {
      console.error('AI parse error:', err)
      setAiError('Failed to analyze input. Please try again or enter manually.')
    } finally {
      setAiParsing(false)
    }
  }

  // Reset AI input when modal closes
  const resetAiInput = () => {
    setAiInputText('')
    setAiParsedResult(null)
    setAiError(null)
    setShowAiInput(true)
  }

  const handleAddItem = async () => {
    if (!selectedBatch || !newItem.item_name.trim()) return
    setAddingItem(true)
    try {
      const priceTableParsed = newItem.price_table_raw ? parsePriceTable(newItem.price_table_raw) : null
      const lineTotal = (newItem.quantity * newItem.unit_price) + (newItem.setup_cost || 0) + (newItem.shipping_cost || 0)
      
      const { data, error } = await supabase.from('quotation_items').insert({
        batch_id: selectedBatch.id, item_name: newItem.item_name, shape: newItem.shape, size: newItem.size,
        material: newItem.material, closure: newItem.closure, barrier: newItem.barrier, surface: newItem.surface,
        structure_spec: newItem.structure_spec, quantity: newItem.quantity, unit_price: newItem.unit_price,
        setup_cost: newItem.setup_cost, shipping_cost: newItem.shipping_cost, line_total: lineTotal,
        price_table_raw: newItem.price_table_raw, price_table_parsed: priceTableParsed, notes: newItem.notes
      }).select().single()
      
      if (error) throw error
      
      const newSubtotal = (selectedBatch.subtotal || 0) + lineTotal
      const newTotal = newSubtotal * (1 - (selectedBatch.discount_percent || 0) / 100) * (1 + (selectedBatch.tax_percent || 0) / 100)
      
      await supabase.from('quotation_batches').update({ 
        subtotal: newSubtotal, total: newTotal, total_items: (selectedBatch.total_items || 0) + 1, updated_at: new Date().toISOString()
      }).eq('id', selectedBatch.id)
      
      setBatchItems(prev => [...prev, data])
      setSelectedBatch(prev => prev ? { ...prev, subtotal: newSubtotal, total: newTotal, total_items: (prev.total_items || 0) + 1 } : null)
      setShowAddItemModal(false)
      resetAiInput()
      setNewItem({ item_name: '', shape: '', size: '', material: '', closure: '', barrier: '', surface: '', structure_spec: '', quantity: 0, unit_price: 0, setup_cost: 0, shipping_cost: 0, price_table_raw: '', notes: '' })
    } catch (err) {
      console.error('Error adding item:', err)
      alert('Failed to add item')
    } finally {
      setAddingItem(false)
    }
  }

  const handleAnalyzeItem = async (item: QuotationItem) => {
    setAnalyzingId(item.id)
    try {
      const analysis = await generateQuotationItemAnalysis({
        shape: item.shape, size: item.size, material: item.material, closure: item.closure,
        barrier: item.barrier, surface: item.surface, structure_spec: item.structure_spec,
        quantity: item.quantity, unit_price: item.unit_price
      })
      await supabase.from('quotation_items').update({ ai_analysis: analysis }).eq('id', item.id)
      setBatchItems(prev => prev.map(i => i.id === item.id ? { ...i, ai_analysis: analysis } : i))
    } catch (err) {
      console.error('Error analyzing item:', err)
    } finally {
      setAnalyzingId(null)
    }
  }

  const handleGenerateSummary = async () => {
    if (!selectedBatch) return
    setGeneratingSummary(true)
    try {
      const summary = await generateQuotationSummary(batchItems, selectedBatch.customer_name, selectedBatch.total)
      await supabase.from('quotation_batches').update({ ai_summary: summary.summary, ai_recommendations: summary.recommendations.join('\n') }).eq('id', selectedBatch.id)
      setSelectedBatch(prev => prev ? { ...prev, ai_summary: summary.summary, ai_recommendations: summary.recommendations.join('\n') } : null)
    } catch (err) {
      console.error('Error generating summary:', err)
    } finally {
      setGeneratingSummary(false)
    }
  }

  const handleCopyLink = () => {
    if (!selectedBatch) return
    const link = `${window.location.origin}/quote/${selectedBatch.id}?p=${selectedBatch.password}`
    navigator.clipboard.writeText(link)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleDeleteItem = async (itemId: string) => {
    if (!confirm('Delete this item?')) return
    try {
      const item = batchItems.find(i => i.id === itemId)
      if (!item) return
      await supabase.from('quotation_items').delete().eq('id', itemId)
      const newSubtotal = (selectedBatch?.subtotal || 0) - (item.line_total || 0)
      const newTotal = newSubtotal * (1 - (selectedBatch?.discount_percent || 0) / 100)
      await supabase.from('quotation_batches').update({ subtotal: newSubtotal, total: newTotal, total_items: Math.max(0, (selectedBatch?.total_items || 0) - 1) }).eq('id', selectedBatch?.id)
      setBatchItems(prev => prev.filter(i => i.id !== itemId))
      setSelectedBatch(prev => prev ? { ...prev, subtotal: newSubtotal, total: newTotal, total_items: Math.max(0, (prev.total_items || 0) - 1) } : null)
    } catch (err) {
      console.error('Error deleting item:', err)
    }
  }

  const handleDeleteBatch = async (batchId: string) => {
    if (!confirm('Delete this quotation and all items?')) return
    try {
      await supabase.from('quotation_batches').delete().eq('id', batchId)
      setBatches(prev => prev.filter(b => b.id !== batchId))
      if (selectedBatch?.id === batchId) { setSelectedBatch(null); setBatchItems([]) }
    } catch (err) {
      console.error('Error deleting batch:', err)
    }
  }

  const handleSendQuote = async () => {
    if (!selectedBatch?.customer_email) { alert('Please add customer email first'); return }
    try {
      await supabase.from('quotation_batches').update({ status: 'sent', sent_at: new Date().toISOString() }).eq('id', selectedBatch.id)
      setSelectedBatch(prev => prev ? { ...prev, status: 'sent' } : null)
      setBatches(prev => prev.map(b => b.id === selectedBatch.id ? { ...b, status: 'sent' } : b))
      alert('Quote marked as sent!')
    } catch (err) {
      console.error('Error sending quote:', err)
    }
  }

  const filteredBatches = useMemo(() => {
    if (!searchQuery.trim()) return batches
    const q = searchQuery.toLowerCase()
    return batches.filter(b => b.batch_name.toLowerCase().includes(q) || b.customer_name?.toLowerCase().includes(q) || b.customer_company?.toLowerCase().includes(q) || b.quote_number?.toLowerCase().includes(q))
  }, [batches, searchQuery])

  if (authLoading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><RefreshCw className="w-8 h-8 animate-spin text-gray-400" /></div>
  
  if (!user || user.email !== ADMIN_EMAIL) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Lock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Access Required</h1>
        <Link to="/login" className="text-blue-600 hover:underline">Sign In</Link>
      </div>
    </div>
  )

  const StatusBadge = ({ status }: { status: string }) => {
    const colors: Record<string, string> = { draft: 'bg-gray-100 text-gray-700', sent: 'bg-blue-100 text-blue-700', accepted: 'bg-green-100 text-green-700', rejected: 'bg-red-100 text-red-700', expired: 'bg-yellow-100 text-yellow-700' }
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || colors.draft}`}>{status.toUpperCase()}</span>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/ctrl-x9k7m" className="text-gray-400 hover:text-gray-600"><ArrowLeft className="w-5 h-5" /></Link>
            <h1 className="text-xl font-bold">Quotation Manager</h1>
          </div>
          <button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            <Plus className="w-4 h-4" />New Quote
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="bg-white rounded-xl border p-4">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search quotes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 outline-none text-sm" />
              </div>
              {loading ? (
                <div className="text-center py-8"><RefreshCw className="w-6 h-6 animate-spin text-gray-400 mx-auto" /></div>
              ) : filteredBatches.length === 0 ? (
                <div className="text-center py-8 text-gray-400"><FileText className="w-12 h-12 mx-auto mb-2 opacity-50" /><p>No quotations yet</p></div>
              ) : (
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredBatches.map(batch => (
                    <div key={batch.id} onClick={() => setSelectedBatch(batch)} className={`p-3 rounded-lg cursor-pointer border transition-all ${selectedBatch?.id === batch.id ? 'border-black bg-gray-50' : 'border-transparent hover:bg-gray-50'}`}>
                      <div className="flex items-start justify-between">
                        <div><p className="font-medium">{batch.batch_name}</p><p className="text-xs text-gray-500">{batch.quote_number}</p></div>
                        <StatusBadge status={batch.status} />
                      </div>
                      {batch.customer_name && <p className="text-sm text-gray-600 mt-1"><User className="w-3 h-3 inline mr-1" />{batch.customer_name}</p>}
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                        <span>{batch.total_items} items</span>
                        <span className="font-medium text-gray-700">${batch.total?.toFixed(2) || '0.00'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col-span-8">
            {selectedBatch ? (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div><h2 className="text-2xl font-bold">{selectedBatch.batch_name}</h2><p className="text-gray-500">{selectedBatch.quote_number}</p></div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={selectedBatch.status} />
                      <button onClick={handleCopyLink} className="p-2 hover:bg-gray-100 rounded-lg" title="Copy share link">{copiedLink ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}</button>
                      <button onClick={() => window.open(`/quote/${selectedBatch.id}?p=${selectedBatch.password}`, '_blank')} className="p-2 hover:bg-gray-100 rounded-lg" title="Preview"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteBatch(selectedBatch.id)} className="p-2 hover:bg-red-50 text-red-500 rounded-lg" title="Delete"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {selectedBatch.customer_name && <div className="flex items-center gap-2"><User className="w-4 h-4 text-gray-400" /><span>{selectedBatch.customer_name}</span></div>}
                    {selectedBatch.customer_company && <div className="flex items-center gap-2"><Building className="w-4 h-4 text-gray-400" /><span>{selectedBatch.customer_company}</span></div>}
                    {selectedBatch.customer_email && <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-400" /><span>{selectedBatch.customer_email}</span></div>}
                    {selectedBatch.valid_until && <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-400" /><span>Valid until: {new Date(selectedBatch.valid_until).toLocaleDateString()}</span></div>}
                  </div>
                  {selectedBatch.ai_summary && <div className="mt-4 p-3 bg-purple-50 rounded-lg"><p className="text-sm text-purple-800">{selectedBatch.ai_summary}</p></div>}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                    <button onClick={() => setShowAddItemModal(true)} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"><Plus className="w-4 h-4" />Add Item</button>
                    <button onClick={handleGenerateSummary} disabled={generatingSummary || batchItems.length === 0} className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"><Sparkles className="w-4 h-4" />{generatingSummary ? 'Generating...' : 'AI Summary'}</button>
                    <button onClick={handleSendQuote} disabled={selectedBatch.status === 'sent' || batchItems.length === 0} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"><Send className="w-4 h-4" />Send Quote</button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border">
                  <div className="p-4 border-b"><h3 className="font-semibold">Quote Items ({batchItems.length})</h3></div>
                  {batchItems.length === 0 ? (
                    <div className="p-8 text-center text-gray-400"><Package className="w-12 h-12 mx-auto mb-2 opacity-50" /><p>No items yet. Click "Add Item" to start.</p></div>
                  ) : (
                    <div className="divide-y">
                      {batchItems.map(item => (
                        <div key={item.id} className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium">{item.item_name || 'Unnamed Item'}</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {item.shape && <span className="px-2 py-1 bg-gray-100 rounded text-xs">{item.shape}</span>}
                                {item.material && <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{item.material}</span>}
                                {item.closure && <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{item.closure}</span>}
                                {item.size && <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">{item.size}</span>}
                              </div>
                              {item.ai_analysis?.description && <p className="text-sm text-gray-600 mt-2 italic">{item.ai_analysis.description}</p>}
                              {item.price_table_parsed && item.price_table_parsed.quantities?.length > 0 && (
                                <div className="mt-2 text-xs text-gray-500">
                                  <span className="font-medium">Price breaks: </span>
                                  {item.price_table_parsed.quantities.map((qty, i) => <span key={i} className="mr-2">{qty.toLocaleString()} @ ${item.price_table_parsed?.prices[i]?.toFixed(4)}</span>)}
                                </div>
                              )}
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-lg font-bold">${item.line_total?.toFixed(2) || '0.00'}</p>
                              <p className="text-xs text-gray-500">{item.quantity?.toLocaleString()} × ${item.unit_price?.toFixed(4)}</p>
                              <div className="flex items-center gap-1 mt-2">
                                <button onClick={() => handleAnalyzeItem(item)} disabled={analyzingId === item.id} className="p-1 hover:bg-purple-50 text-purple-600 rounded" title="AI Analyze"><Sparkles className={`w-4 h-4 ${analyzingId === item.id ? 'animate-spin' : ''}`} /></button>
                                <button onClick={() => handleDeleteItem(item.id)} className="p-1 hover:bg-red-50 text-red-500 rounded" title="Delete"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {batchItems.length > 0 && (
                    <div className="p-4 bg-gray-50 border-t">
                      <div className="flex justify-between text-sm mb-1"><span>Subtotal</span><span>${selectedBatch.subtotal?.toFixed(2)}</span></div>
                      {selectedBatch.discount_percent > 0 && <div className="flex justify-between text-sm mb-1 text-green-600"><span>Discount ({selectedBatch.discount_percent}%)</span><span>-${(selectedBatch.subtotal * selectedBatch.discount_percent / 100).toFixed(2)}</span></div>}
                      <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t"><span>Total</span><span>${selectedBatch.total?.toFixed(2)}</span></div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border p-12 text-center text-gray-400"><FileText className="w-16 h-16 mx-auto mb-4 opacity-50" /><p className="text-lg">Select a quotation or create a new one</p></div>
            )}
          </div>
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between"><h2 className="text-xl font-bold">Create New Quotation</h2><button onClick={() => setShowCreateModal(false)}><X className="w-5 h-5" /></button></div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium mb-1">Quote Name *</label><input type="text" value={newBatch.batch_name} onChange={(e) => setNewBatch(p => ({ ...p, batch_name: e.target.value }))} placeholder="e.g., Coffee Brand Q1 2025" className="w-full border rounded-lg px-3 py-2" /></div>
              <div><label className="block text-sm font-medium mb-1">Password (auto-generated if empty)</label><input type="text" value={newBatch.password} onChange={(e) => setNewBatch(p => ({ ...p, password: e.target.value }))} placeholder="Leave empty for auto-generate" className="w-full border rounded-lg px-3 py-2" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Customer Name</label><input type="text" value={newBatch.customer_name} onChange={(e) => setNewBatch(p => ({ ...p, customer_name: e.target.value }))} className="w-full border rounded-lg px-3 py-2" /></div>
                <div><label className="block text-sm font-medium mb-1">Company</label><input type="text" value={newBatch.customer_company} onChange={(e) => setNewBatch(p => ({ ...p, customer_company: e.target.value }))} className="w-full border rounded-lg px-3 py-2" /></div>
              </div>
              <div><label className="block text-sm font-medium mb-1">Customer Email</label><input type="email" value={newBatch.customer_email} onChange={(e) => setNewBatch(p => ({ ...p, customer_email: e.target.value }))} className="w-full border rounded-lg px-3 py-2" /></div>
              <div><label className="block text-sm font-medium mb-1">Valid Until</label><input type="date" value={newBatch.valid_until} onChange={(e) => setNewBatch(p => ({ ...p, valid_until: e.target.value }))} className="w-full border rounded-lg px-3 py-2" /></div>
              <div><label className="block text-sm font-medium mb-1">Notes</label><textarea value={newBatch.notes} onChange={(e) => setNewBatch(p => ({ ...p, notes: e.target.value }))} rows={3} className="w-full border rounded-lg px-3 py-2" /></div>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={handleCreateBatch} disabled={creating || !newBatch.batch_name.trim()} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50">{creating ? 'Creating...' : 'Create Quotation'}</button>
            </div>
          </div>
        </div>
      )}

      {showAddItemModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Add Quote Item</h2>
              <button onClick={() => { setShowAddItemModal(false); resetAiInput() }}><X className="w-5 h-5" /></button>
            </div>
            
            {/* AI Smart Input Section */}
            <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <button 
                onClick={() => setShowAiInput(!showAiInput)} 
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">AI Smart Input</span>
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">Paste specs, let AI fill the form</span>
                </div>
                {showAiInput ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-purple-600" />}
              </button>
              
              {showAiInput && (
                <div className="mt-4 space-y-3">
                  <textarea
                    value={aiInputText}
                    onChange={(e) => setAiInputText(e.target.value)}
                    placeholder={`Paste product specifications, customer email, or describe the product in natural language...\n\nExample:\n"Looking for 5000 stand up pouches, 150x250+100mm, kraft paper with zipper, matte finish, for coffee packaging. Price around $0.25-0.30 each."`}
                    rows={5}
                    className="w-full border border-purple-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleAiParse}
                      disabled={aiParsing || !aiInputText.trim()}
                      className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-all"
                    >
                      {aiParsing ? (
                        <><Loader2 className="w-4 h-4 animate-spin" />Analyzing...</>
                      ) : (
                        <><Sparkles className="w-4 h-4" />Analyze & Fill Form</>
                      )}
                    </button>
                    {aiInputText.trim() && (
                      <button
                        onClick={() => { setAiInputText(''); setAiParsedResult(null); setAiError(null) }}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  
                  {/* AI Analysis Results */}
                  {aiError && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{aiError}</span>
                    </div>
                  )}
                  
                  {aiParsedResult && (
                    <div className="p-4 bg-white rounded-lg border border-purple-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-purple-900">Analysis Complete</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${aiParsedResult.confidence > 0.7 ? 'bg-green-100 text-green-700' : aiParsedResult.confidence > 0.4 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                          {Math.round(aiParsedResult.confidence * 100)}% confidence
                        </span>
                      </div>
                      
                      {/* Extracted Fields Preview */}
                      <div className="flex flex-wrap gap-2">
                        {aiParsedResult.shape && <span className="px-2 py-1 bg-gray-100 rounded text-xs">Shape: {aiParsedResult.shape}</span>}
                        {aiParsedResult.material && <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Material: {aiParsedResult.material}</span>}
                        {aiParsedResult.closure && <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">Closure: {aiParsedResult.closure}</span>}
                        {aiParsedResult.size && <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Size: {aiParsedResult.size}</span>}
                        {aiParsedResult.barrier && <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Barrier: {aiParsedResult.barrier}</span>}
                        {aiParsedResult.surface && <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded text-xs">Surface: {aiParsedResult.surface}</span>}
                        {aiParsedResult.quantity && <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">Qty: {aiParsedResult.quantity.toLocaleString()}</span>}
                        {aiParsedResult.unit_price && <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">Price: ${aiParsedResult.unit_price}</span>}
                      </div>
                      
                      {/* Suggestions */}
                      {aiParsedResult.suggestions && aiParsedResult.suggestions.length > 0 && (
                        <div className="text-xs text-purple-700 bg-purple-50 rounded-lg p-2">
                          <span className="font-medium">Suggestions:</span>
                          <ul className="list-disc list-inside mt-1">
                            {aiParsedResult.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                          </ul>
                        </div>
                      )}
                      
                      {/* Warnings */}
                      {aiParsedResult.warnings && aiParsedResult.warnings.length > 0 && (
                        <div className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                          <span className="font-medium">Please review:</span>
                          <ul className="list-disc list-inside mt-1">
                            {aiParsedResult.warnings.map((w, i) => <li key={i}>{w}</li>)}
                          </ul>
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Edit3 className="w-3 h-3" />
                        Form fields below have been auto-filled. Review and adjust as needed.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Manual Form Section */}
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium mb-1">Item Name *</label><input type="text" value={newItem.item_name} onChange={(e) => setNewItem(p => ({ ...p, item_name: e.target.value }))} placeholder="e.g., Stand Up Pouch 500g" className="w-full border rounded-lg px-3 py-2" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Shape</label><select value={newItem.shape} onChange={(e) => setNewItem(p => ({ ...p, shape: e.target.value }))} className="w-full border rounded-lg px-3 py-2"><option value="">Select shape...</option>{SHAPE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-1">Size</label><input type="text" value={newItem.size} onChange={(e) => setNewItem(p => ({ ...p, size: e.target.value }))} placeholder="e.g., 150mm x 250mm + 100mm" className="w-full border rounded-lg px-3 py-2" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Material</label><select value={newItem.material} onChange={(e) => setNewItem(p => ({ ...p, material: e.target.value }))} className="w-full border rounded-lg px-3 py-2"><option value="">Select material...</option>{MATERIAL_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-1">Closure</label><select value={newItem.closure} onChange={(e) => setNewItem(p => ({ ...p, closure: e.target.value }))} className="w-full border rounded-lg px-3 py-2"><option value="">Select closure...</option>{CLOSURE_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Barrier</label><select value={newItem.barrier} onChange={(e) => setNewItem(p => ({ ...p, barrier: e.target.value }))} className="w-full border rounded-lg px-3 py-2"><option value="">Select barrier...</option>{BARRIER_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-1">Surface</label><select value={newItem.surface} onChange={(e) => setNewItem(p => ({ ...p, surface: e.target.value }))} className="w-full border rounded-lg px-3 py-2"><option value="">Select surface...</option>{SURFACE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
              </div>
              <div><label className="block text-sm font-medium mb-1">Structure Specification</label><input type="text" value={newItem.structure_spec} onChange={(e) => setNewItem(p => ({ ...p, structure_spec: e.target.value }))} placeholder="e.g., PET12/AL7/PE80" className="w-full border rounded-lg px-3 py-2" /></div>
              <div className="border-t pt-4"><h3 className="font-medium mb-3">Pricing</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div><label className="block text-sm font-medium mb-1">Quantity</label><input type="number" value={newItem.quantity || ''} onChange={(e) => setNewItem(p => ({ ...p, quantity: parseInt(e.target.value) || 0 }))} className="w-full border rounded-lg px-3 py-2" /></div>
                  <div><label className="block text-sm font-medium mb-1">Unit Price ($)</label><input type="number" step="0.0001" value={newItem.unit_price || ''} onChange={(e) => setNewItem(p => ({ ...p, unit_price: parseFloat(e.target.value) || 0 }))} className="w-full border rounded-lg px-3 py-2" /></div>
                  <div><label className="block text-sm font-medium mb-1">Setup Cost ($)</label><input type="number" value={newItem.setup_cost || ''} onChange={(e) => setNewItem(p => ({ ...p, setup_cost: parseFloat(e.target.value) || 0 }))} className="w-full border rounded-lg px-3 py-2" /></div>
                  <div><label className="block text-sm font-medium mb-1">Shipping ($)</label><input type="number" value={newItem.shipping_cost || ''} onChange={(e) => setNewItem(p => ({ ...p, shipping_cost: parseFloat(e.target.value) || 0 }))} className="w-full border rounded-lg px-3 py-2" /></div>
                </div>
              </div>
              <div><label className="block text-sm font-medium mb-1">Paste Price Table (optional) <span className="text-gray-400 font-normal ml-2">Format: "1000 - $0.25" per line</span></label><textarea value={newItem.price_table_raw} onChange={(e) => setNewItem(p => ({ ...p, price_table_raw: e.target.value }))} rows={4} placeholder={`1000 - $0.35\n5000 - $0.28\n10000 - $0.22\n50000 - $0.18`} className="w-full border rounded-lg px-3 py-2 font-mono text-sm" /></div>
              <div><label className="block text-sm font-medium mb-1">Notes</label><textarea value={newItem.notes} onChange={(e) => setNewItem(p => ({ ...p, notes: e.target.value }))} rows={2} className="w-full border rounded-lg px-3 py-2" /></div>
              <div className="bg-gray-50 rounded-lg p-4"><div className="flex justify-between text-lg font-bold"><span>Line Total:</span><span>${((newItem.quantity * newItem.unit_price) + newItem.setup_cost + newItem.shipping_cost).toFixed(2)}</span></div></div>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button onClick={() => { setShowAddItemModal(false); resetAiInput() }} className="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={handleAddItem} disabled={addingItem || !newItem.item_name.trim()} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50">{addingItem ? 'Adding...' : 'Add Item'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuotationBatchesPage
