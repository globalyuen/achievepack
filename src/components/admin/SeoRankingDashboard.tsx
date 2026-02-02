import React, { useState, useEffect } from 'react'
import { BarChart, Search, TrendingUp, Filter, AlertTriangle, ExternalLink, ArrowUp, ArrowDown, Globe, Tag, ChevronDown, ChevronRight } from 'lucide-react'

// Types for API response
interface TrafficPage {
  path: string
  title: string
  views: number
  users: number
}

interface SeoPage {
  url: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

interface Keyword {
  query: string
  clicks: number
  impressions: number
  position: number
}

interface PageKeywords {
  url: string
  totalClicks: number
  totalImpressions: number
  keywords: Keyword[]
}

const SeoRankingDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'seo' | 'keywords'>('traffic')
  const [trafficData, setTrafficData] = useState<TrafficPage[]>([])
  const [seoData, setSeoData] = useState<SeoPage[]>([])
  const [keywordsData, setKeywordsData] = useState<PageKeywords[]>([])
  const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [days, setDays] = useState(30)

  useEffect(() => {
    fetchData()
  }, [activeTab, days])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      let endpoint = ''
      if (activeTab === 'traffic') {
        endpoint = `/api/analytics/page-traffic?days=${days}&limit=200`
      } else if (activeTab === 'seo') {
        endpoint = `/api/analytics/page-seo?days=${days}&limit=200`
      } else {
        endpoint = `/api/analytics/page-keywords?days=${days}&limit=200`
      }
      
      const res = await fetch(endpoint)
      // Check if response is not ok (e.g. 404, 500)
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(`Server error ${res.status}: ${text.slice(0, 100)}`)
      }

      const contentType = res.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text().catch(() => '')
        throw new Error(`Expected JSON but got ${contentType}: ${text.slice(0, 100)}`)
      }

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch data')
      }

      if (activeTab === 'traffic') {
        setTrafficData(data.data)
      } else if (activeTab === 'seo') {
        setSeoData(data.data)
      } else {
        setKeywordsData(data.data)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const togglePageExpand = (url: string) => {
    const newExpanded = new Set(expandedPages)
    if (newExpanded.has(url)) {
      newExpanded.delete(url)
    } else {
      newExpanded.add(url)
    }
    setExpandedPages(newExpanded)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            SEO & Page Ranking
          </h2>
          <p className="text-gray-500 mt-1">Monitor your website's performance and search visibility.</p>
        </div>
        
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'traffic' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              Traffic Ranking
            </div>
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'seo' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search Ranking
            </div>
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === 'keywords' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Keywords
            </div>
          </button>
        </div>
      </div>

      {/* Date Filter */}
      <div className="flex justify-end">
        <select 
          value={days} 
          onChange={(e) => setDays(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
          <option value="365">Last Year</option>
        </select>
      </div>

      {/* Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            Loading data...
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block mb-4 max-w-2xl text-left">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5" />
                Connection Error
              </h4>
              <p className="text-sm">{error}</p>
              {error.includes('not configured') && (
                <div className="mt-4 text-xs bg-white p-3 rounded border border-red-200 text-gray-700">
                  <p className="font-semibold mb-1">How to fix:</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Install required libraries: <code>pip install google-analytics-data google-api-python-client</code></li>
                    <li>Get a <strong>Service Account JSON key</strong> from Google Cloud Console.</li>
                    <li>Save it as <code>service-account.json</code> in your backend folder.</li>
                    <li>Set <code>GOOGLE_APPLICATION_CREDENTIALS</code> and IDs in your .env file.</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        ) : activeTab === 'traffic' ? (
          // Traffic Table
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Page Title</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Path</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Views</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Active Users</th>
                </tr>
              </thead>
              <tbody>
                {trafficData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">No traffic data found for this period.</td>
                  </tr>
                ) : (
                  trafficData.map((page, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                      <td className="p-4 text-gray-900 font-medium truncate max-w-xs" title={page.title}>{page.title || '(No Title)'}</td>
                      <td className="p-4 text-gray-500 text-sm font-mono truncate max-w-xs" title={page.path}>
                        <a href={page.path} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                          {page.path}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      </td>
                      <td className="p-4 text-right font-medium text-gray-900">
                        {page.views.toLocaleString()}
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="bg-blue-500 h-full rounded-full" 
                            style={{ width: `${Math.min((page.views / Math.max(...trafficData.map(d => d.views))) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-600">{page.users.toLocaleString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : activeTab === 'seo' ? (
          // SEO Table
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Page URL</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-center">Avg Position</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Clicks</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Impressions</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">CTR</th>
                </tr>
              </thead>
              <tbody>
                {seoData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">No search console data found for this period.</td>
                  </tr>
                ) : (
                  seoData.map((page, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-green-50/50 transition-colors">
                      <td className="p-4 text-gray-900 text-sm font-medium truncate max-w-md">
                        <a href={page.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-400" />
                          {page.url.replace('https://achievepack.com', '')}
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-bold ${
                          page.position <= 3 ? 'bg-green-100 text-green-700' :
                          page.position <= 10 ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {page.position.toFixed(1)}
                        </span>
                      </td>
                      <td className="p-4 text-right font-bold text-gray-900">
                        {page.clicks.toLocaleString()}
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="bg-green-500 h-full rounded-full" 
                            style={{ width: `${Math.min((page.clicks / Math.max(...seoData.map(d => d.clicks))) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-4 text-right text-gray-600">{page.impressions.toLocaleString()}</td>
                      <td className="p-4 text-right text-gray-600">{(page.ctr * 100).toFixed(2)}%</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          // Keywords Table with expandable rows
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Page URL</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Total Clicks</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Impressions</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-center">Top Keywords</th>
                </tr>
              </thead>
              <tbody>
                {keywordsData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">No keyword data found for this period.</td>
                  </tr>
                ) : (
                  keywordsData.map((page, idx) => (
                    <React.Fragment key={idx}>
                      <tr 
                        className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors cursor-pointer"
                        onClick={() => togglePageExpand(page.url)}
                      >
                        <td className="p-4 text-gray-900 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            {expandedPages.has(page.url) ? (
                              <ChevronDown className="w-4 h-4 text-purple-500" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                            <Globe className="w-4 h-4 text-gray-400" />
                            <span className="truncate max-w-md">{page.url.replace('https://achievepack.com', '') || '/'}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right font-bold text-gray-900">
                          {page.totalClicks.toLocaleString()}
                        </td>
                        <td className="p-4 text-right text-gray-600">
                          {page.totalImpressions.toLocaleString()}
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-flex px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-700">
                            {page.keywords.length} keywords
                          </span>
                        </td>
                      </tr>
                      {expandedPages.has(page.url) && (
                        <tr>
                          <td colSpan={4} className="bg-purple-50/30 p-0">
                            <div className="p-4 pl-12">
                              <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Top Search Keywords</div>
                              <div className="flex flex-wrap gap-2">
                                {page.keywords.map((kw, kidx) => (
                                  <div 
                                    key={kidx} 
                                    className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm"
                                    title={`Clicks: ${kw.clicks}, Impressions: ${kw.impressions}, Position: ${kw.position.toFixed(1)}`}
                                  >
                                    <Tag className="w-3 h-3 text-purple-500" />
                                    <span className="font-medium text-gray-700">{kw.query}</span>
                                    <span className="text-xs text-gray-400">({kw.clicks} clicks)</span>
                                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                                      kw.position <= 3 ? 'bg-green-100 text-green-700' :
                                      kw.position <= 10 ? 'bg-blue-100 text-blue-700' :
                                      'bg-gray-100 text-gray-500'
                                    }`}>
                                      #{kw.position.toFixed(0)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default SeoRankingDashboard
