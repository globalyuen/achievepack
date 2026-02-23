import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Lock, Download, CheckCircle, XCircle, Calendar, User, Building, Mail, Package, FileText, Printer } from 'lucide-react'
import { supabase, QuotationBatch, QuotationItem } from '../lib/supabase'

const QuotationViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [searchParams] = useSearchParams()
  const passwordParam = searchParams.get('p')
  
  const [batch, setBatch] = useState<QuotationBatch | null>(null)
  const [items, setItems] = useState<QuotationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState(passwordParam || '')
  const [authenticated, setAuthenticated] = useState(false)

  const fetchQuotation = async () => {
    if (!id) return
    setLoading(true)
    try {
      const { data: batchData, error: batchError } = await supabase
        .from('quotation_batches')
        .select('*')
        .eq('id', id)
        .single()
      
      if (batchError) throw batchError
      
      if (batchData.password !== password) {
        setError('Invalid password')
        setAuthenticated(false)
        setLoading(false)
        return
      }
      
      setBatch(batchData)
      setAuthenticated(true)
      
      const { data: itemsData, error: itemsError } = await supabase
        .from('quotation_items')
        .select('*')
        .eq('batch_id', id)
        .order('created_at', { ascending: true })
      
      if (itemsError) throw itemsError
      setItems(itemsData || [])
    } catch (err: any) {
      console.error('Error fetching quotation:', err)
      setError(err.message || 'Failed to load quotation')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (password) fetchQuotation()
    else setLoading(false)
  }, [id, password])

  const handleResponse = async (accept: boolean) => {
    if (!batch) return
    try {
      await supabase.from('quotation_batches').update({ 
        status: accept ? 'accepted' : 'rejected',
        accepted_at: accept ? new Date().toISOString() : null
      }).eq('id', batch.id)
      setBatch(prev => prev ? { ...prev, status: accept ? 'accepted' : 'rejected' } : null)
      alert(accept ? 'Thank you! We will contact you shortly.' : 'Quote declined. Contact us if you have questions.')
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border p-8 max-w-md w-full text-center">
          <Lock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Password Required</h1>
          <p className="text-gray-500 mb-6">Enter the password to view this quotation</p>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full border rounded-lg px-4 py-3 mb-4 text-center text-lg"
            onKeyDown={(e) => e.key === 'Enter' && fetchQuotation()}
          />
          <button
            onClick={fetchQuotation}
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            View Quotation
          </button>
        </div>
      </div>
    )
  }

  if (!batch) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Quotation Not Found</h1>
          <p className="text-gray-500">This quotation may have been deleted or expired.</p>
        </div>
      </div>
    )
  }

  const StatusBadge = ({ status }: { status: string }) => {
    const config: Record<string, { color: string; label: string }> = {
      draft: { color: 'bg-gray-100 text-gray-700', label: 'Draft' },
      sent: { color: 'bg-blue-100 text-blue-700', label: 'Awaiting Response' },
      accepted: { color: 'bg-green-100 text-green-700', label: 'Accepted' },
      rejected: { color: 'bg-red-100 text-red-700', label: 'Declined' },
      expired: { color: 'bg-yellow-100 text-yellow-700', label: 'Expired' }
    }
    const { color, label } = config[status] || config.draft
    return <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>{label}</span>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto">
        {/* Print Header */}
        <div className="bg-white rounded-xl border p-8 mb-6 print:border-0 print:shadow-none">
          <div className="flex items-start justify-between mb-8">
            <div>
              <img src="/ap-logo-black.svg" alt="Achieve Pack" className="h-10 mb-4" />
              <h1 className="text-3xl font-bold">Quotation</h1>
              <p className="text-gray-500 text-lg">{batch.quote_number}</p>
            </div>
            <div className="text-right">
              <StatusBadge status={batch.status} />
              {batch.valid_until && (
                <p className="text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Valid until: {new Date(batch.valid_until).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">PREPARED FOR</h3>
              {batch.customer_name && (
                <p className="font-medium text-lg flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  {batch.customer_name}
                </p>
              )}
              {batch.customer_company && (
                <p className="text-gray-600 flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  {batch.customer_company}
                </p>
              )}
              {batch.customer_email && (
                <p className="text-gray-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {batch.customer_email}
                </p>
              )}
            </div>
            <div className="text-right">
              <h3 className="text-sm font-medium text-gray-500 mb-2">FROM</h3>
              <p className="font-medium">Achieve Pack</p>
              <p className="text-gray-600">www.achievepack.com</p>
              <p className="text-gray-600">hello@achievepack.com</p>
            </div>
          </div>

          {/* AI Summary */}
          {batch.ai_summary && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-8">
              <p className="text-gray-700">{batch.ai_summary}</p>
            </div>
          )}

          {/* Items Table */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Quote Items</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Item</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Specifications</th>
                    <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">Qty</th>
                    <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">Unit Price</th>
                    <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {items.map((item, idx) => (
                    <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-4">
                        <p className="font-medium">{item.item_name}</p>
                        {item.ai_analysis?.description && (
                          <p className="text-sm text-gray-500 mt-1">{item.ai_analysis.description}</p>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1">
                          {item.shape && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{item.shape}</span>}
                          {item.material && <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">{item.material}</span>}
                          {item.size && <span className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-xs">{item.size}</span>}
                          {item.closure && <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">{item.closure}</span>}
                        </div>
                        {item.structure_spec && (
                          <p className="text-xs text-gray-500 mt-1">Structure: {item.structure_spec}</p>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right">{item.quantity?.toLocaleString()}</td>
                      <td className="px-4 py-4 text-right">${item.unit_price?.toFixed(4)}</td>
                      <td className="px-4 py-4 text-right font-medium">${item.line_total?.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${batch.subtotal?.toFixed(2)}</span>
              </div>
              {batch.discount_percent > 0 && (
                <div className="flex justify-between py-2 text-green-600">
                  <span>Discount ({batch.discount_percent}%)</span>
                  <span>-${(batch.subtotal * batch.discount_percent / 100).toFixed(2)}</span>
                </div>
              )}
              {batch.tax_percent > 0 && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tax ({batch.tax_percent}%)</span>
                  <span>${(batch.subtotal * batch.tax_percent / 100).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between py-3 border-t-2 border-black text-xl font-bold">
                <span>Total ({batch.currency})</span>
                <span>${batch.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {batch.notes && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <h4 className="font-medium mb-2">Notes</h4>
              <p className="text-gray-600 text-sm whitespace-pre-wrap">{batch.notes}</p>
            </div>
          )}

          {/* Terms */}
          <div className="text-sm text-gray-500 mb-8">
            <h4 className="font-medium text-gray-700 mb-2">Terms & Conditions</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Prices are valid for the period specified above</li>
              <li>Production time: 4-6 weeks after artwork approval</li>
              <li>Payment terms: 50% deposit, 50% before shipping</li>
              <li>Prices are FOB China, shipping costs calculated separately</li>
            </ul>
          </div>

          {/* Actions (hidden in print) */}
          <div className="flex items-center justify-between pt-8 border-t print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            
            {batch.status === 'sent' && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleResponse(false)}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 font-medium"
                >
                  <XCircle className="w-5 h-5" />
                  Decline
                </button>
                <button
                  onClick={() => handleResponse(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                >
                  <CheckCircle className="w-5 h-5" />
                  Accept Quote
                </button>
              </div>
            )}
            
            {batch.status === 'accepted' && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Quote Accepted</span>
              </div>
            )}
            
            {batch.status === 'rejected' && (
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="w-5 h-5" />
                <span className="font-medium">Quote Declined</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer (hidden in print) */}
        <div className="text-center text-gray-500 text-sm print:hidden">
          <p>Questions? Contact us at hello@achievepack.com</p>
          <p className="mt-1">© {new Date().getFullYear()} Achieve Pack. All rights reserved.</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:bg-white { background-color: white !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .print\\:border-0 { border: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}

export default QuotationViewPage
