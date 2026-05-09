import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, 
  Search, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Image as ImageIcon, 
  Edit3, 
  Zap, 
  TrendingUp, 
  Target,
  FileText,
  Clock,
  ExternalLink,
  ChevronRight,
  MoreVertical,
  Plus
} from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import en from '../../locales/en.json'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
)

interface PageStatus {
  key: string
  title: string
  slug: string
  status: 'migrated' | 'pending' | 'draft'
  seoScore: number
  aieoScore: number
  lastUpdated?: string
  sourceUrl: string
  pouchUrl: string
  imagesCount: number
}

export default function SeoMigrationDashboard() {
  const [pages, setPages] = useState<PageStatus[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'migrated' | 'pending'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPage, setSelectedPage] = useState<PageStatus | null>(null)

  // Fetch data from Supabase and merge with en.json
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        const { data: migratedData, error } = await supabase
          .from('pouch_seo_blog')
          .select('*')
        
        if (error) throw error

        const seoPages = (en as any).seoPages?.pages || {}
        const allPages: PageStatus[] = Object.keys(seoPages).map(key => {
          const page = seoPages[key]
          const slug = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
          const migrated = migratedData?.find(p => p.slug === slug)

          return {
            key,
            title: page.title || page.heroTitle || key,
            slug,
            status: migrated ? 'migrated' : 'pending',
            seoScore: migrated ? 85 : 0, // Mock scores
            aieoScore: migrated ? 70 : 0,
            lastUpdated: migrated?.updated_at,
            sourceUrl: `https://achievepack.com/${slug}`,
            pouchUrl: `https://pouch.eco/blog/${slug}`,
            imagesCount: migrated?.content?.images?.length || (page.heroImage ? 1 : 0)
          }
        })

        setPages(allPages)
      } catch (err) {
        console.error('Error loading SEO data:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const filteredPages = useMemo(() => {
    return pages.filter(p => {
      const matchesFilter = filter === 'all' || p.status === filter
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.slug.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [pages, filter, searchQuery])

  const stats = useMemo(() => {
    const total = pages.length
    const migrated = pages.filter(p => p.status === 'migrated').length
    const pending = total - migrated
    const avgSeo = pages.reduce((acc, p) => acc + p.seoScore, 0) / (migrated || 1)
    return { total, migrated, pending, avgSeo }
  }, [pages])

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Pages" value={stats.total} icon={FileText} color="blue" />
        <StatCard title="Migrated" value={stats.migrated} icon={CheckCircle} color="green" />
        <StatCard title="Pending" value={stats.pending} icon={Clock} color="amber" />
        <StatCard title="Avg SEO Score" value={`${Math.round(stats.avgSeo)}%`} icon={TrendingUp} color="purple" />
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2">
          {['all', 'migrated', 'pending'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 border-2 border-black font-bold text-sm uppercase transition-all ${
                filter === f ? 'bg-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-2 border-black font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-black">
              <th className="p-4 font-black uppercase text-xs">Page / Slug</th>
              <th className="p-4 font-black uppercase text-xs">Status</th>
              <th className="p-4 font-black uppercase text-xs">SEO / AIEO</th>
              <th className="p-4 font-black uppercase text-xs">Images</th>
              <th className="p-4 font-black uppercase text-xs">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredPages.map((page) => (
                <motion.tr
                  layout
                  key={page.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-bold text-sm">{page.title}</div>
                    <div className="text-xs text-gray-500 font-mono">/{page.slug}</div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 border-2 border-black text-[10px] font-black uppercase ${
                      page.status === 'migrated' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {page.status === 'migrated' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {page.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <ScoreBadge value={page.seoScore} label="SEO" />
                      <ScoreBadge value={page.aieoScore} label="AIEO" />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-gray-400" />
                      <span className="text-xs font-bold">{page.imagesCount}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedPage(page)}
                        className="p-1.5 border-2 border-black hover:bg-[#D4FF00] transition-colors"
                        title="Optimize Content"
                      >
                        <Zap className="w-4 h-4" />
                      </button>
                      <a 
                        href={page.pouchUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 border-2 border-black hover:bg-blue-100 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Optimization Panel (Slide-over) */}
      <AnimatePresence>
        {selectedPage && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPage(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="relative w-full max-w-2xl bg-white border-l-4 border-black shadow-2xl h-full flex flex-col"
            >
              <div className="p-6 border-b-4 border-black bg-[#F0F0F0] flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black uppercase">Optimization Tool</h2>
                  <p className="text-xs font-mono text-gray-500">Target: {selectedPage.slug}</p>
                </div>
                <button onClick={() => setSelectedPage(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Plus className="w-6 h-6 rotate-45" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* AIEO & SEO Insights */}
                <section>
                  <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-600" /> AIEO Analysis (AI Search Ready)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
                      <div className="text-xs font-bold text-purple-700 mb-1 uppercase">Conversational Index</div>
                      <div className="text-2xl font-black text-purple-900">High</div>
                      <p className="text-[10px] text-purple-600 mt-2">Content matches "Natural Language" query patterns.</p>
                    </div>
                    <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                      <div className="text-xs font-bold text-blue-700 mb-1 uppercase">Entity Graph</div>
                      <div className="text-2xl font-black text-blue-900">Strong</div>
                      <p className="text-[10px] text-blue-600 mt-2">Clearly defines relationships between "Sustainable" and "Low MOQ".</p>
                    </div>
                  </div>
                </section>

                {/* Content Rephrasing Idea */}
                <section>
                  <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-green-600" /> SEO Rephrasing Ideas
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 border-2 border-black bg-gray-50 italic text-sm">
                      "Traditional packaging takes 500 years to decompose. Our compostable pouches break down in 180 days."
                    </div>
                    <ArrowRight className="w-4 h-4 mx-auto text-gray-400" />
                    <div className="p-4 border-2 border-black bg-[#D4FF00]/10 text-sm font-bold">
                      "Why wait 500 years for traditional plastic to disappear? Switch to certified compostable pouches that return to the earth in just 6 months—without leaving microplastics behind."
                    </div>
                  </div>
                </section>

                {/* Image Recommendations */}
                <section>
                  <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-blue-600" /> Visual Strategy
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 font-bold uppercase">
                      Infographic
                    </div>
                    <div className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 font-bold uppercase">
                      Lifestyle
                    </div>
                    <button className="aspect-square bg-white border-2 border-black flex flex-col items-center justify-center gap-1 hover:bg-[#D4FF00] transition-colors">
                      <Plus className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase">Add Image</span>
                    </button>
                  </div>
                </section>

                {/* Next Page Idea */}
                <section className="p-4 bg-black text-white">
                  <h3 className="text-xs font-black uppercase mb-2 text-[#D4FF00]">New Content Opportunity</h3>
                  <div className="font-bold text-lg mb-2">Sustainable Packaging for Liquid & Sauces</div>
                  <p className="text-xs text-gray-400 mb-4">High search volume for "eco-friendly spout pouches" in the USA market. Recommended next target.</p>
                  <button className="text-xs font-black uppercase bg-[#D4FF00] text-black px-4 py-2 hover:opacity-90 transition-opacity">
                    Create Draft
                  </button>
                </section>
              </div>

              <div className="p-6 border-t-4 border-black bg-white">
                <button 
                  onClick={() => alert('Migration started: 1 hour per page simulation')}
                  className="w-full bg-[#D4FF00] border-4 border-black py-4 font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Migrate & Optimize Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, color }: any) {
  const colors: any = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200'
  }

  return (
    <div className={`p-4 border-2 rounded-lg ${colors[color]} flex items-center gap-4`}>
      <div className="p-2 bg-white rounded-lg border-2 border-current">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-[10px] font-black uppercase opacity-60">{title}</div>
        <div className="text-2xl font-black">{value}</div>
      </div>
    </div>
  )
}

function ScoreBadge({ value, label }: { value: number; label: string }) {
  const color = value > 80 ? 'text-green-600' : value > 50 ? 'text-amber-600' : 'text-gray-400'
  return (
    <div className="text-center">
      <div className={`text-lg font-black ${color}`}>{value}%</div>
      <div className="text-[10px] font-bold text-gray-500 uppercase">{label}</div>
    </div>
  )
}
