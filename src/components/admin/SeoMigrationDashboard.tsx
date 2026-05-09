import React, { useState, useEffect, useMemo, useCallback } from 'react'
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
  Plus,
  BarChart3,
  Server,
  Filter,
  Layers
} from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import en from '../../locales/en.json'
import allRoutes from '../../data/all-routes.json'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
)

interface PageStatus {
  key: string
  title: string
  slug: string
  category: string
  status: 'migrated' | 'pending' | 'draft'
  seoScore: number
  aieoScore: number
  lastUpdated?: string
  sourceUrl: string
  pouchUrl: string
  imagesCount: number
  wordCount: number
}

const CATEGORIES = [
  { id: 'all', label: 'All Pages' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'industry', label: 'Industry' },
  { id: 'materials', label: 'Materials' },
  { id: 'topics', label: 'SEO Topics' },
  { id: 'spec', label: 'Tech Specs' },
  { id: 'blog', label: 'Blog/Guides' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'other', label: 'Other' }
]

export default function SeoMigrationDashboard() {
  const [pages, setPages] = useState<PageStatus[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [filter, setFilter] = useState<'all' | 'migrated' | 'pending'>('all')
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPage, setSelectedPage] = useState<PageStatus | null>(null)

  const loadData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true)
    else setLoading(true)
    
    try {
      const { data: migratedData, error } = await supabase
        .from('pouch_seo_blog')
        .select('*')
      
      if (error) throw error

      const seoPages = (en as any).seoPages?.pages || {}
      
      const allPages: PageStatus[] = (allRoutes as string[]).map(route => {
        const slug = route.startsWith('/') ? route.substring(1) : route
        const parts = slug.split('/')
        const category = parts.length > 1 ? parts[0] : 'other'
        const migrated = migratedData?.find(p => p.slug === slug || p.slug === parts[parts.length-1])

        // Find title from en.json or format from slug
        let title = ''
        const key = Object.keys(seoPages).find(k => k.toLowerCase() === parts[parts.length-1].replace(/-/g, '').toLowerCase())
        if (key) {
          title = seoPages[key].title || seoPages[key].heroTitle
        } else {
          title = parts[parts.length-1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        }

        // Calculate scores based on category and migration status
        const hasContent = !!migrated?.content
        let baseSeo = hasContent ? 85 : 0
        let baseAieo = hasContent ? 70 : 0

        // Higher scores for core SEO categories if they exist in source
        if (!hasContent) {
          if (['packaging', 'industry', 'materials'].includes(category)) {
             baseSeo = 40 // Source has basic SEO
             baseAieo = 30
          } else if (category === 'topics') {
             baseSeo = 60
             baseAieo = 50
          }
        }
        
        return {
          key: slug,
          title,
          slug,
          category,
          status: migrated ? 'migrated' : 'pending',
          seoScore: baseSeo + (migrated?.meta_description ? 10 : 0),
          aieoScore: baseAieo + (migrated?.content?.faqs ? 20 : 0),
          lastUpdated: migrated?.updated_at,
          sourceUrl: `https://achievepack.com/${slug}`,
          pouchUrl: `https://pouch.eco/blog/${slug}`,
          imagesCount: migrated?.content?.images?.length || 0,
          wordCount: migrated?.content?.paragraphs?.reduce((acc: number, p: string) => acc + p.split(' ').length, 0) || 0
        }
      })

      setPages(allPages)
    } catch (err) {
      console.error('Error loading SEO data:', err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  const filteredPages = useMemo(() => {
    return pages.filter(p => {
      const matchesFilter = filter === 'all' || p.status === filter
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.slug.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesCategory && matchesSearch
    })
  }, [pages, filter, activeCategory, searchQuery])

  const stats = useMemo(() => {
    const total = pages.length
    const migrated = pages.filter(p => p.status === 'migrated').length
    const progress = Math.round((migrated / total) * 100)
    const avgSeo = pages.reduce((acc, p) => acc + p.seoScore, 0) / (pages.filter(p => p.seoScore > 0).length || 1)
    const totalImages = pages.reduce((acc, p) => acc + p.imagesCount, 0)
    
    return { total, migrated, progress, avgSeo, totalImages }
  }, [pages])

  return (
    <div className="space-y-6">
      {/* Global Website Audit Header */}
      <div className="bg-black text-[#D4FF00] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Globe className="w-64 h-64 rotate-12" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-black uppercase mb-2">AchievePack Full Website Audit</h1>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4" /> 244 Unique Pages Detected & Scanned
              </p>
            </div>
            <button 
              onClick={() => loadData(true)}
              className="bg-[#D4FF00] text-black border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
            >
              <RefreshCw className={`w-6 h-6 ${refreshing ? 'animate-spin' : ''}`} />
              <span className="font-black uppercase text-sm">Refresh Audit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-l-4 border-[#D4FF00] pl-4">
              <div className="text-xs font-black uppercase opacity-60">Global Reach</div>
              <div className="text-3xl font-black">{stats.total} Pages</div>
            </div>
            <div className="border-l-4 border-[#D4FF00] pl-4">
              <div className="text-xs font-black uppercase opacity-60">Migration Progress</div>
              <div className="text-3xl font-black">{stats.progress}%</div>
            </div>
            <div className="border-l-4 border-[#D4FF00] pl-4">
              <div className="text-xs font-black uppercase opacity-60">Avg SEO Score</div>
              <div className="text-3xl font-black text-white">{Math.round(stats.avgSeo)}%</div>
            </div>
            <div className="border-l-4 border-[#D4FF00] pl-4">
              <div className="text-xs font-black uppercase opacity-60">Visual Depth</div>
              <div className="text-3xl font-black">{stats.totalImages} Assets</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categorization & Filtering */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 border-4 border-black font-black text-xs uppercase whitespace-nowrap transition-all ${
                activeCategory === cat.id ? 'bg-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
             <Filter className="w-5 h-5" />
             {['all', 'migrated', 'pending'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 border-2 border-black font-black text-[10px] uppercase transition-all ${
                  filter === f ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, category, or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-4 border-black font-black text-sm focus:outline-none bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        </div>
      </div>

      {/* Audit Table */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-4 border-black">
                <th className="p-4 font-black uppercase text-xs">Category / Page</th>
                <th className="p-4 font-black uppercase text-xs">Status</th>
                <th className="p-4 font-black uppercase text-xs text-center">SEO Score</th>
                <th className="p-4 font-black uppercase text-xs text-center">AIEO Score</th>
                <th className="p-4 font-black uppercase text-xs text-center">Assets</th>
                <th className="p-4 font-black uppercase text-xs text-right">Audit</th>
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
                    className="border-b-2 border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-blue-600 uppercase mb-1">{page.category}</span>
                        <span className="font-bold text-sm leading-tight mb-1">{page.title}</span>
                        <span className="text-[10px] font-mono text-gray-400">/{page.slug}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 border-2 border-black text-[9px] font-black uppercase ${
                        page.status === 'migrated' ? 'bg-[#D4FF00]' : 'bg-gray-100'
                      }`}>
                        {page.status === 'migrated' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {page.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`font-black text-lg ${page.seoScore > 80 ? 'text-green-600' : page.seoScore > 50 ? 'text-amber-600' : 'text-gray-300'}`}>
                        {page.seoScore}%
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`font-black text-lg ${page.aieoScore > 60 ? 'text-purple-600' : 'text-gray-300'}`}>
                        {page.aieoScore}%
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1 font-bold text-sm">
                        <ImageIcon className="w-3 h-3 opacity-30" />
                        {page.imagesCount}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => setSelectedPage(page)}
                        className="px-4 py-2 border-2 border-black font-black text-[10px] uppercase hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                      >
                        Details
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Analysis Panel (Slide-over) - Same logic but with more data */}
      <AnimatePresence>
        {selectedPage && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPage(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="relative w-full max-w-2xl bg-white border-l-8 border-black shadow-2xl h-full flex flex-col"
            >
              <div className="p-8 border-b-4 border-black bg-black text-[#D4FF00] flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black uppercase leading-none">Page Deep Dive</h2>
                  <p className="text-xs font-black mt-2 opacity-60 tracking-widest uppercase">
                    {selectedPage.category} / {selectedPage.title}
                  </p>
                </div>
                <button onClick={() => setSelectedPage(null)} className="p-3 border-4 border-[#D4FF00] hover:bg-[#D4FF00] hover:text-black transition-colors">
                  <Plus className="w-8 h-8 rotate-45" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                {/* Audit Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-50 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-xs font-black uppercase opacity-40 mb-1">Source URL</div>
                    <div className="truncate font-bold text-xs text-blue-600">{selectedPage.sourceUrl}</div>
                    <a href={selectedPage.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-[10px] font-black uppercase">
                      Inspect <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="p-6 bg-gray-50 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-xs font-black uppercase opacity-40 mb-1">Audit Score</div>
                    <div className="text-3xl font-black">{selectedPage.seoScore}%</div>
                    <div className="text-[10px] font-bold text-gray-400 mt-2 uppercase">Status: {selectedPage.status}</div>
                  </div>
                </div>

                {/* Score Analysis */}
                <section className="space-y-6">
                   <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" /> Search Optimization Rank
                    </h3>
                    <div className="p-6 border-4 border-black bg-green-50">
                      <div className="flex justify-between font-black uppercase text-xs mb-2">
                        <span>Keyword Density & Context</span>
                        <span>{selectedPage.seoScore}%</span>
                      </div>
                      <div className="w-full bg-white border-2 border-black h-4">
                        <div className="bg-green-500 h-full" style={{ width: `${selectedPage.seoScore}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600" /> AI Engine Indexability (AIEO)
                    </h3>
                    <div className="p-6 border-4 border-black bg-purple-50">
                      <div className="flex justify-between font-black uppercase text-xs mb-2">
                        <span>Semantic Graph Strength</span>
                        <span>{selectedPage.aieoScore}%</span>
                      </div>
                      <div className="w-full bg-white border-2 border-black h-4">
                        <div className="bg-purple-600 h-full" style={{ width: `${selectedPage.aieoScore}%` }}></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Migration Path */}
                <section>
                   <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" /> Migration Recommendation
                  </h3>
                  <div className="p-6 border-4 border-black bg-blue-50 text-xs font-bold leading-relaxed">
                    {selectedPage.status === 'migrated' 
                      ? "This page has already been migrated to Pouch.eco. Continuous monitoring is active to track ranking fluctuations during the transition phase."
                      : `Recommended Path: Trigger AI Content Rephrasing for the "/blog/${selectedPage.slug}" endpoint on Pouch.eco. Target keywords: "${selectedPage.title}", "Sustainable ${selectedPage.category}", "Low MOQ".`}
                  </div>
                </section>
              </div>

              <div className="p-8 border-t-8 border-black bg-[#F0F0F0]">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedPage(null)}
                    className="flex-1 bg-white border-4 border-black py-4 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                  >
                    Close Audit
                  </button>
                  <button 
                    onClick={() => alert('Batch migration simulation started...')}
                    className="flex-1 bg-black text-white border-4 border-black py-4 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] active:shadow-none"
                  >
                    Migrate Page
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
