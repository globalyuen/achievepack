import React, { useState, useEffect, useMemo } from 'react'
import { supabase } from '../../lib/supabase'
import { Search, Globe, Clock, Filter, Trash2, Calendar, LayoutGrid, Terminal, MapPin, Copy, Check, ChevronLeft, ChevronRight, BarChart3, TrendingUp, Sparkles, RefreshCw } from 'lucide-react'

interface SearchLog {
  id: string
  query: string
  domain: string
  ip_address: string
  user_agent: string
  country: string
  city: string
  created_at: string
}

interface TrendingItem {
  query: string
  count: number
  pouchCount: number
  achieveCount: number
}

export default function SearchAnalyticsDashboard() {
  const [logs, setLogs] = useState<SearchLog[]>([])
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState<'all' | '24h' | '7d' | '30d'>('all')
  const [domainFilter, setDomainFilter] = useState<'all' | 'achievepack.com' | 'pouch.eco'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 20

  useEffect(() => {
    fetchSearchAnalytics()
  }, [])

  const fetchSearchAnalytics = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('search_analytics')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('Error fetching search analytics:', error)
      } else {
        setLogs((data as SearchLog[]) || [])
      }
    } catch (err) {
      console.error('Failed to load search analytics:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAll = async () => {
    if (confirm('⚠️ WARNING: Are you sure you want to clear ALL search analytics history? This cannot be undone.')) {
      setLoading(true)
      try {
        const { error } = await supabase
          .from('search_analytics')
          .delete()
          .neq('query', '') // deletes all rows

        if (error) {
          alert('Failed to delete logs: ' + error.message)
        } else {
          setLogs([])
          alert('All search analytics logs cleared successfully.')
        }
      } catch (err: any) {
        alert('Error: ' + err.message)
      } finally {
        setLoading(false)
      }
    }
  }

  // Filter logs
  const filteredLogs = useMemo(() => {
    const now = new Date()
    return logs.filter(log => {
      // Search term filter
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim()
        if (!log.query.toLowerCase().includes(q) &&
            !(log.city || '').toLowerCase().includes(q) &&
            !(log.country || '').toLowerCase().includes(q) &&
            !(log.ip_address || '').includes(q)) {
          return false
        }
      }

      // Domain filter
      if (domainFilter !== 'all' && log.domain !== domainFilter) {
        return false
      }

      // Date filter
      if (dateRange !== 'all') {
        const createdAt = new Date(log.created_at)
        const diffMs = now.getTime() - createdAt.getTime()
        const diffHours = diffMs / (1000 * 60 * 60)
        
        if (dateRange === '24h' && diffHours > 24) return false
        if (dateRange === '7d' && diffHours > 24 * 7) return false
        if (dateRange === '30d' && diffHours > 24 * 30) return false
      }

      return true
    })
  }, [logs, searchTerm, domainFilter, dateRange])

  // KPIs calculations
  const kpis = useMemo(() => {
    const total = filteredLogs.length
    const uniqueQueries = new Set(filteredLogs.map(l => l.query.toLowerCase().trim())).size
    
    const achieveCount = filteredLogs.filter(l => l.domain === 'achievepack.com').length
    const pouchCount = filteredLogs.filter(l => l.domain === 'pouch.eco').length

    // Average searches per day
    let avgPerDay = 0
    if (filteredLogs.length > 0) {
      const dates = filteredLogs.map(l => l.created_at.substring(0, 10))
      const uniqueDays = new Set(dates).size || 1
      avgPerDay = parseFloat((total / uniqueDays).toFixed(1))
    }

    return {
      total,
      uniqueQueries,
      achieveCount,
      pouchCount,
      avgPerDay
    }
  }, [filteredLogs])

  // Trending Queries
  const trendingQueries = useMemo(() => {
    const groups: Record<string, TrendingItem> = {}
    
    filteredLogs.forEach(log => {
      const q = log.query.trim()
      const key = q.toLowerCase()
      if (!groups[key]) {
        groups[key] = { query: q, count: 0, pouchCount: 0, achieveCount: 0 }
      }
      groups[key].count++
      if (log.domain === 'pouch.eco') groups[key].pouchCount++
      if (log.domain === 'achievepack.com') groups[key].achieveCount++
    })

    return Object.values(groups)
      .sort((a, b) => b.count - a.count)
      .slice(0, 8)
  }, [filteredLogs])

  // Paginated Logs
  const paginatedLogs = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredLogs.slice(start, start + pageSize)
  }, [filteredLogs, currentPage])

  const totalPages = Math.ceil(filteredLogs.length / pageSize) || 1

  // Handle Copy IP
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  }

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-xl border shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            🔍 Global Search Analytics
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Real-time telemetry and reporting on what customers are searching for across B2B & B2C platforms.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            onClick={fetchSearchAnalytics}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={handleDeleteAll}
            disabled={logs.length === 0}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 disabled:opacity-50 transition text-sm font-medium"
          >
            <Trash2 className="h-4 w-4" />
            Clear All History
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Total Searches */}
        <div className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Searches</span>
            <Search className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{kpis.total}</h3>
            <p className="text-xs text-gray-500 mt-1">Filtered catalog queries</p>
          </div>
        </div>

        {/* Card 2: Unique Queries */}
        <div className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Unique Queries</span>
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{kpis.uniqueQueries}</h3>
            <p className="text-xs text-gray-500 mt-1">Distinct keyword terms</p>
          </div>
        </div>

        {/* Card 3: achievepack.com B2B */}
        <div className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">achievepack.com (B2B)</span>
            <Globe className="h-5 w-5 text-teal-500" />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-teal-600">{kpis.achieveCount}</h3>
            <p className="text-xs text-gray-500 mt-1">
              {kpis.total > 0 ? ((kpis.achieveCount / kpis.total) * 100).toFixed(1) : 0}% of volume
            </p>
          </div>
        </div>

        {/* Card 4: pouch.eco B2C */}
        <div className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">pouch.eco (B2C)</span>
            <Globe className="h-5 w-5 text-lime-500" />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-lime-600">{kpis.pouchCount}</h3>
            <p className="text-xs text-gray-500 mt-1">
              {kpis.total > 0 ? ((kpis.pouchCount / kpis.total) * 100).toFixed(1) : 0}% of volume
            </p>
          </div>
        </div>

        {/* Card 5: Daily Frequency */}
        <div className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-between col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Queries / Day</span>
            <Clock className="h-5 w-5 text-purple-500" />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900">{kpis.avgPerDay}</h3>
            <p className="text-xs text-gray-500 mt-1">Average daily volume</p>
          </div>
        </div>
      </div>

      {/* Grid: Trending + Filter Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Logs Table with Filters */}
        <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden">
          {/* Filters Area */}
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/55">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search search queries, IPs, locations..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Domain filter */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <Globe className="h-3.5 w-3.5 text-gray-400" />
                <select
                  value={domainFilter}
                  onChange={(e) => {
                    setDomainFilter(e.target.value as any)
                    setCurrentPage(1)
                  }}
                  className="py-1.5 px-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Domains</option>
                  <option value="achievepack.com">achievepack.com</option>
                  <option value="pouch.eco">pouch.eco</option>
                </select>
              </div>

              {/* Time filter */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                <select
                  value={dateRange}
                  onChange={(e) => {
                    setDateRange(e.target.value as any)
                    setCurrentPage(1)
                  }}
                  className="py-1.5 px-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Time</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="flex-1 overflow-x-auto min-h-[480px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-80">
                <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
                <span className="text-sm text-gray-500 mt-2 font-medium">Fetching telemetry database...</span>
              </div>
            ) : paginatedLogs.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-100 text-sm">
                <thead>
                  <tr className="bg-gray-50/70 text-gray-500 font-bold uppercase text-[10px] tracking-wider">
                    <th className="px-6 py-3 text-left">Search Term</th>
                    <th className="px-4 py-3 text-left">Domain</th>
                    <th className="px-4 py-3 text-left">Visitor Geo / Network</th>
                    <th className="px-6 py-3 text-left">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {paginatedLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-neutral-50/50 transition">
                      <td className="px-6 py-3.5">
                        <span className="font-bold text-gray-900 bg-neutral-100 px-2 py-1 rounded">
                          {log.query}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {log.domain === 'pouch.eco' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 border border-black rounded text-xs font-mono font-black text-black bg-[#D4FF00]">
                            ⚡ pouch.eco
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100">
                            🏢 achievepack
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-medium text-gray-800 flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            {log.city && log.city !== 'Unknown' ? `${log.city}, ` : ''}{log.country || 'Unknown Location'}
                          </span>
                          <span className="text-[10px] text-gray-400 flex items-center gap-1">
                            <button
                              onClick={() => copyToClipboard(log.ip_address, log.id)}
                              className="hover:text-gray-600 transition flex items-center gap-0.5 group"
                            >
                              {copiedId === log.id ? (
                                <Check className="h-2.5 w-2.5 text-green-500" />
                              ) : (
                                <Copy className="h-2.5 w-2.5 group-hover:scale-105" />
                              )}
                              {log.ip_address || '0.0.0.0'}
                            </button>
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 whitespace-nowrap text-xs text-gray-400 font-medium">
                        {formatDate(log.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center h-80 text-gray-400 bg-neutral-50/50">
                <Search className="h-10 w-10 opacity-30 mb-2" />
                <p className="font-bold text-sm">No search logs match filters</p>
                <p className="text-xs mt-1">Try broadening your search term or date range.</p>
              </div>
            )}
          </div>

          {/* Pagination Footer */}
          {totalPages > 1 && (
            <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/40">
              <span className="text-xs text-gray-500 font-medium">
                Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, filteredLogs.length)} of {filteredLogs.length} entries
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-1 px-2.5 border rounded-lg bg-white disabled:opacity-40 hover:bg-gray-50 text-xs font-semibold"
                >
                  <ChevronLeft className="h-3.5 w-3.5 inline mr-0.5" />
                  Prev
                </button>
                <span className="text-xs px-3 font-bold text-gray-800">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1 px-2.5 border rounded-lg bg-white disabled:opacity-40 hover:bg-gray-50 text-xs font-semibold"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5 inline ml-0.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Trending Keywords */}
        <div className="bg-white rounded-xl border shadow-sm p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4 border-b pb-3">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            <h3 className="font-bold text-gray-900">Trending Searches</h3>
          </div>

          {trendingQueries.length > 0 ? (
            <div className="space-y-4 flex-1">
              {trendingQueries.map((item, index) => {
                const total = filteredLogs.length
                const percentage = total > 0 ? ((item.count / total) * 100).toFixed(1) : 0
                return (
                  <div key={item.query + index} className="space-y-2 border-b pb-3.5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="font-bold text-gray-900 bg-neutral-50 px-2 py-0.5 border rounded">
                          {item.query}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-gray-500">
                        {item.count} {item.count === 1 ? 'search' : 'searches'} ({percentage}%)
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                      {item.achieveCount > 0 && (
                        <div 
                          className="h-full bg-teal-500 transition-all" 
                          style={{ width: `${(item.achieveCount / item.count) * 100}%` }}
                          title={`B2B achievepack.com: ${item.achieveCount} searches`}
                        />
                      )}
                      {item.pouchCount > 0 && (
                        <div 
                          className="h-full bg-lime-400 transition-all" 
                          style={{ width: `${(item.pouchCount / item.count) * 100}%` }}
                          title={`B2C pouch.eco: ${item.pouchCount} searches`}
                        />
                      )}
                    </div>
                    {/* Domain subtext breakdowns */}
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono font-medium">
                      <span>B2B: {item.achieveCount}</span>
                      <span>B2C: {item.pouchCount}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center py-12 text-gray-400 text-center">
              <TrendingUp className="h-8 w-8 opacity-30 mb-1" />
              <p className="font-bold text-sm">No trending data</p>
              <p className="text-xs mt-0.5">Telemetry data is empty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
