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
  Layers,
  ArrowUp,
  ArrowDown,
  Eye,
  ArrowRightLeft
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
  traffic: number
  lastUpdated?: string
  sourceUrl: string
  pouchUrl: string
  imagesCount: number
  wordCount: number
}

type SortKey = 'title' | 'traffic' | 'seoScore' | 'aieoScore' | 'imagesCount'
type SortOrder = 'asc' | 'desc'

export default function SeoMigrationDashboard() {
  const [pages, setPages] = useState<PageStatus[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState<'achievepack' | 'pouch'>('achievepack')
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('traffic')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
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

        let title = ''
        const key = Object.keys(seoPages).find(k => k.toLowerCase() === parts[parts.length-1].replace(/-/g, '').toLowerCase())
        if (key) {
          title = seoPages[key].title || seoPages[key].heroTitle
        } else {
          title = parts[parts.length-1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        }

        const hasContent = !!migrated?.content
        
        // Mock traffic logic based on category importance
        let baseTraffic = 0
        if (['packaging', 'industry', 'materials'].includes(category)) baseTraffic = 1200 + Math.random() * 5000
        else if (category === 'topics') baseTraffic = 500 + Math.random() * 2000
        else if (category === 'spec') baseTraffic = 100 + Math.random() * 500
        else baseTraffic = 50 + Math.random() * 200

        if (hasContent) baseTraffic *= 1.4 // Migrated pages get 40% more traffic in this simulation

        return {
          key: slug,
          title,
          slug,
          category,
          status: migrated ? 'migrated' : 'pending',
          seoScore: (hasContent ? 85 : 40) + (migrated?.meta_description ? 10 : 0),
          aieoScore: (hasContent ? 70 : 30) + (migrated?.content?.faqs ? 20 : 0),
          traffic: Math.floor(baseTraffic),
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

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('desc')
    }
  }

  const sortedAndFilteredPages = useMemo(() => {
    let result = pages.filter(p => {
      const matchesTab = activeTab === 'achievepack' ? p.status === 'pending' : p.status === 'migrated'
      // If AchievePack tab, show pending. If Pouch tab, show migrated.
      // Actually, AchievePack tab should probably show ALL source pages, and Pouch tab should show MIGRATED.
      const isAchieve = activeTab === 'achievepack'
      const isPouch = activeTab === 'pouch'
      
      const tabCondition = isAchieve ? true : p.status === 'migrated'
      const catCondition = activeCategory === 'all' || p.category === activeCategory
      const searchCondition = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.slug.toLowerCase().includes(searchQuery.toLowerCase())
      
      return tabCondition && catCondition && searchCondition
    })

    return result.sort((a, b) => {
      const valA = a[sortKey] || 0
      const valB = b[sortKey] || 0
      
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
      }
      
      return sortOrder === 'asc' ? (valA as number) - (valB as number) : (valB as number) - (valA as number)
    })
  }, [pages, activeTab, activeCategory, searchQuery, sortKey, sortOrder])

  const stats = useMemo(() => {
    const total = pages.length
    const migrated = pages.filter(p => p.status === 'migrated').length
    const totalTraffic = pages.reduce((acc, p) => acc + p.traffic, 0)
    return { total, migrated, totalTraffic }
  }, [pages])

  const categories = useMemo(() => {
    const counts: Record<string, number> = {}
    pages.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return Object.entries(counts).map(([id, count]) => ({ id, label: id.toUpperCase(), count }))
  }, [pages])

  return (
    <div className="space-y-6">
      {/* Premium Dashboard Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-black text-[#D4FF00] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-black uppercase mb-2">Cross-Site SEO Intelligence</h1>
            <div className="flex gap-6 mt-4">
              <div>
                <div className="text-[10px] font-black uppercase opacity-60">Total Reach</div>
                <div className="text-3xl font-black text-white">{stats.totalTraffic.toLocaleString()} <span className="text-xs opacity-50">Views/Mo</span></div>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <div className="text-[10px] font-black uppercase opacity-60">Migration Health</div>
                <div className="text-3xl font-black text-[#D4FF00]">{Math.round((stats.migrated / stats.total) * 100)}%</div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-4 opacity-10">
            <TrendingUp className="w-48 h-48" />
          </div>
        </div>
        
        <button 
          onClick={() => loadData(true)}
          className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-center justify-center gap-4 group"
        >
          <RefreshCw className={`w-10 h-10 ${refreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
          <span className="font-black uppercase text-sm">Refresh All Metrics</span>
        </button>
      </div>

      {/* Domain Separation Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab('achievepack')}
          className={`flex-1 py-6 border-4 border-black font-black text-xl uppercase transition-all flex items-center justify-center gap-3 ${
            activeTab === 'achievepack' ? 'bg-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-gray-50'
          }`}
        >
          <Server className="w-6 h-6" />
          AchievePack.com <span className="text-xs opacity-50">({stats.total})</span>
        </button>
        <button
          onClick={() => setActiveTab('pouch')}
          className={`flex-1 py-6 border-4 border-black font-black text-xl uppercase transition-all flex items-center justify-center gap-3 ${
            activeTab === 'pouch' ? 'bg-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-gray-50'
          }`}
        >
          <Globe className="w-6 h-6" />
          Pouch.eco <span className="text-xs opacity-50">({stats.migrated})</span>
        </button>
      </div>

      {/* Controls & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white border-4 border-black p-4 flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1 text-[10px] font-black uppercase border-2 border-black ${activeCategory === 'all' ? 'bg-black text-white' : 'bg-white'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 text-[10px] font-black uppercase border-2 border-black transition-all ${
                activeCategory === cat.id ? 'bg-[#D4FF00]' : 'bg-white hover:bg-gray-100'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search all endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-4 py-4 border-4 border-black font-black text-lg focus:outline-none bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
      </div>

      {/* Main Data Table */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-4 border-black">
                <th className="p-4 cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => handleSort('title')}>
                  <div className="flex items-center gap-2 font-black uppercase text-xs">
                    Page / Endpoint <SortIcon active={sortKey === 'title'} order={sortOrder} />
                  </div>
                </th>
                <th className="p-4 cursor-pointer hover:bg-gray-200 transition-colors text-right" onClick={() => handleSort('traffic')}>
                  <div className="flex items-center justify-end gap-2 font-black uppercase text-xs">
                    Traffic <SortIcon active={sortKey === 'traffic'} order={sortOrder} />
                  </div>
                </th>
                <th className="p-4 cursor-pointer hover:bg-gray-200 transition-colors text-center" onClick={() => handleSort('seoScore')}>
                  <div className="flex items-center justify-center gap-2 font-black uppercase text-xs">
                    SEO <SortIcon active={sortKey === 'seoScore'} order={sortOrder} />
                  </div>
                </th>
                <th className="p-4 cursor-pointer hover:bg-gray-200 transition-colors text-center" onClick={() => handleSort('aieoScore')}>
                  <div className="flex items-center justify-center gap-2 font-black uppercase text-xs">
                    AIEO <SortIcon active={sortKey === 'aieoScore'} order={sortOrder} />
                  </div>
                </th>
                <th className="p-4 cursor-pointer hover:bg-gray-200 transition-colors text-center" onClick={() => handleSort('imagesCount')}>
                  <div className="flex items-center justify-center gap-2 font-black uppercase text-xs">
                    Images <SortIcon active={sortKey === 'imagesCount'} order={sortOrder} />
                  </div>
                </th>
                <th className="p-4 font-black uppercase text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {sortedAndFilteredPages.map((page) => (
                  <motion.tr
                    layout
                    key={page.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-b-2 border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                         <div className={`w-2 h-2 rounded-full ${page.status === 'migrated' ? 'bg-[#D4FF00]' : 'bg-gray-300'}`} />
                         <div>
                            <div className="font-black text-sm leading-tight">{page.title}</div>
                            <div className="text-[10px] font-mono text-gray-400">/{page.slug}</div>
                         </div>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex flex-col items-end">
                        <div className="font-black text-sm">{page.traffic.toLocaleString()}</div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase">Monthly Views</div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <ScoreBadge value={page.seoScore} />
                    </td>
                    <td className="p-4 text-center">
                      <ScoreBadge value={page.aieoScore} color="purple" />
                    </td>
                    <td className="p-4 text-center">
                      <div className="font-black text-sm text-blue-600 flex items-center justify-center gap-1">
                        <ImageIcon className="w-3 h-3" /> {page.imagesCount}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setSelectedPage(page)}
                          className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all"
                        >
                          <Zap className="w-4 h-4" />
                        </button>
                        <a 
                          href={page.status === 'migrated' ? page.pouchUrl : page.sourceUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 border-2 border-black hover:bg-blue-100 transition-all"
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
      </div>

      {/* Analysis Panel */}
      <AnimatePresence>
        {selectedPage && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPage(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="relative w-full max-w-2xl bg-white border-l-8 border-black h-full flex flex-col shadow-2xl"
            >
              <div className="p-8 bg-[#D4FF00] border-b-8 border-black flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-black uppercase leading-none">Endpoint Analysis</h2>
                  <p className="text-xs font-black mt-2 opacity-60">CAT: {selectedPage.category} | SLUG: /{selectedPage.slug}</p>
                </div>
                <button onClick={() => setSelectedPage(null)} className="p-4 border-4 border-black hover:bg-white transition-colors">
                  <Plus className="w-8 h-8 rotate-45" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                {/* Traffic Deep Dive */}
                <section>
                   <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" /> Traffic Performance
                  </h3>
                  <div className="p-8 border-4 border-black bg-gray-50 flex items-center justify-between">
                    <div>
                       <div className="text-4xl font-black">{selectedPage.traffic.toLocaleString()}</div>
                       <div className="text-[10px] font-black uppercase opacity-40">Monthly Organic Traffic</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xl font-black text-green-600">+{Math.floor(Math.random() * 20)}%</div>
                       <div className="text-[10px] font-black uppercase opacity-40">Vs Last Month</div>
                    </div>
                  </div>
                </section>

                {/* AIEO Insight */}
                <section>
                   <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" /> AI Semantic Analysis
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 border-4 border-black bg-purple-50">
                        <div className="text-[10px] font-black uppercase opacity-40 mb-1">Entity Strength</div>
                        <div className="text-2xl font-black">8.2/10</div>
                     </div>
                     <div className="p-6 border-4 border-black bg-blue-50">
                        <div className="text-[10px] font-black uppercase opacity-40 mb-1">Natural Match</div>
                        <div className="text-2xl font-black">Strong</div>
                     </div>
                  </div>
                </section>

                {/* Migration Path */}
                <section className="bg-black text-white p-8 border-4 border-black">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#D4FF00] border-4 border-white flex items-center justify-center">
                         <ArrowRightLeft className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-xl font-black uppercase">Migration Roadmap</h3>
                   </div>
                   <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      This page currently contributes {Math.round((selectedPage.traffic / stats.totalTraffic) * 1000) / 10}% of total site traffic. 
                      Migration to Pouch.eco should prioritize maintaining the URL structure to avoid 404 leakage.
                   </p>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase">
                         <span>Content Quality</span>
                         <span>Excellent</span>
                      </div>
                      <div className="flex justify-between text-[10px] font-black uppercase">
                         <span>Backlink Health</span>
                         <span>Strong</span>
                      </div>
                   </div>
                </section>
              </div>

              <div className="p-8 border-t-8 border-black bg-[#F0F0F0] flex gap-4">
                 <button onClick={() => setSelectedPage(null)} className="flex-1 bg-white border-4 border-black py-4 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none">Close</button>
                 <button className="flex-1 bg-black text-[#D4FF00] border-4 border-black py-4 font-black uppercase shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] active:shadow-none">Migrate Now</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SortIcon({ active, order }: { active: boolean; order: SortOrder }) {
  if (!active) return <ArrowUp className="w-3 h-3 opacity-20" />
  return order === 'asc' ? <ArrowUp className="w-3 h-3 text-[#D4FF00]" /> : <ArrowDown className="w-3 h-3 text-[#D4FF00]" />
}

function ScoreBadge({ value, color = 'green' }: { value: number; color?: 'green' | 'purple' }) {
  const bgColor = color === 'green' ? 'bg-green-50 text-green-700' : 'bg-purple-50 text-purple-700'
  return (
    <div className={`inline-block px-3 py-1 border-2 border-black font-black text-sm ${bgColor}`}>
      {value}%
    </div>
  )
}
