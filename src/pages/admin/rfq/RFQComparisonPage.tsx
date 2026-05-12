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
            <Link to="/ctrl-x9k7m" className="text-neutral-400 hover:text-black flex items-center gap-1 text-xs font-black uppercase mb-4 transition-colors">
              <ChevronLeft className="h-3 w-3" /> Back to Dashboard
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
            <button className="bg-white text-black px-6 py-3 text-xs font-black uppercase italic border-2 border-black hover:bg-neutral-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Export Excel
            </button>
            <button className="bg-black text-white px-6 py-3 text-xs font-black uppercase italic border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none transition-all">
              Notify Award
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

export default RFQComparisonPage
