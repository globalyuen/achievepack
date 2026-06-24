import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, Users, Globe2, Clock, ArrowUpRight, 
  ChevronRight, ExternalLink, Search, Filter, 
  Calendar, MapPin, MousePointer2, Loader2, AlertCircle,
  TrendingUp, Activity, MessageSquare, History, List, Grid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, WebhookLog } from '../../lib/supabase';
import { useTranslation, Trans } from "react-i18next";

const ADMIN_PIN = "8888****"; // Matching existing admin PIN pattern

const QuoteAnalyticsPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.quoteAnalytics';
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_quote_analytics_auth') === 'true';
  });
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [logs, setLogs] = useState<WebhookLog[]>([]);
  const [generatorLogs, setGeneratorLogs] = useState<WebhookLog[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'timeline' | 'summary'>('summary');
  const [sortMode, setSortMode] = useState<'views' | 'recent' | 'name'>('recent');

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return;
    setLoading(true);
    if (pin === (import.meta.env.VITE_ADMIN_PIN || ADMIN_PIN)) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_quote_analytics_auth', 'true');
      fetchLogs();
    } else {
      setErrorMsg('Incorrect Secure PIN');
    }
    setLoading(false);
  };

  const fetchLogs = async () => {
    setFetching(true);
    try {
      // Fetch tracking logs
      const { data: trackingData, error: trackingError } = await supabase
        .from('webhook_logs')
        .select('*')
        .eq('source', 'Quote Tracking')
        .order('created_at', { ascending: false });

      if (trackingError) throw trackingError;

      // Fetch generator logs to extract specifications
      const { data: generatorData, error: generatorError } = await supabase
        .from('webhook_logs')
        .select('*')
        .eq('source', 'Quote Generator')
        .order('created_at', { ascending: false });

      if (generatorError) throw generatorError;

      setLogs(trackingData || []);
      setGeneratorLogs(generatorData || []);
    } catch (err: any) {
      console.error("Fetch error:", err);
      setErrorMsg("Failed to fetch analytics: " + err.message);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLogs();
    }
  }, [isAuthenticated]);

  const stats = useMemo(() => {
    if (!logs.length) return { totalViews: 0, uniqueQuotes: 0, topCountry: 'N/A', recentTrend: 0 };
    
    const uniqueIds = new Set(logs.map(l => l.raw_data?.quoteId));
    const countries = logs.reduce((acc: any, curr) => {
      const c = curr.raw_data?.country || 'Unknown';
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});
    
    const topCountry = Object.entries(countries).sort((a: any, b: any) => b[1] - a[1])[0]?.[0] || 'N/A';
    
    // Simple trend calculation (views in last 24h)
    const now = new Date();
    const last24h = logs.filter(l => {
      const d = new Date(l.created_at);
      return (now.getTime() - d.getTime()) < 24 * 60 * 60 * 1000;
    }).length;

    return {
      totalViews: logs.length,
      uniqueQuotes: uniqueIds.size,
      topCountry,
      recentTrend: last24h
    };
  }, [logs]);

  const specsMap = useMemo(() => {
    const map: Record<string, {
      text: string;
      customer: string;
      materials: string[];
      sizes: string[];
      productNames: string[];
      rawContent: string;
    }> = {};

    generatorLogs.forEach(g => {
      if (!g.id) return;
      const raw = g.raw_data || {};
      const customer = raw.customer || '';
      const text = raw.text || '';
      
      const materials: string[] = [];
      const sizes: string[] = [];
      const productNames: string[] = [];

      if (Array.isArray(raw.pricingData)) {
        raw.pricingData.forEach((item: any) => {
          if (item?.material) materials.push(item.material.toLowerCase());
          if (item?.size) sizes.push(item.size.toLowerCase());
          if (item?.product_name) productNames.push(item.product_name.toLowerCase());
        });
      }

      const rawContent = JSON.stringify(raw).toLowerCase();

      map[g.id] = {
        text: text.toLowerCase(),
        customer: customer.toLowerCase(),
        materials,
        sizes,
        productNames,
        rawContent
      };
    });

    return map;
  }, [generatorLogs]);

  const filteredLogs = useMemo(() => {
    if (!searchTerm) return logs;
    const s = searchTerm.toLowerCase();
    return logs.filter(l => {
      const qid = l.raw_data?.quoteId;
      const spec = qid ? specsMap[qid] : null;
      
      return (
        l.raw_data?.customerName?.toLowerCase().includes(s) || 
        l.raw_data?.quoteId?.toLowerCase().includes(s) ||
        l.raw_data?.country?.toLowerCase().includes(s) ||
        l.raw_data?.city?.toLowerCase().includes(s) ||
        (spec && (
          spec.text.includes(s) ||
          spec.customer.includes(s) ||
          spec.materials.some(m => m.includes(s)) ||
          spec.sizes.some(sz => sz.includes(s)) ||
          spec.productNames.some(pn => pn.includes(s)) ||
          spec.rawContent.includes(s)
        ))
      );
    });
  }, [logs, searchTerm, specsMap]);

  const countryStats = useMemo(() => {
    const counts = logs.reduce((acc: any, curr) => {
      const c = curr.raw_data?.country || 'Unknown';
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a: any, b: any) => b[1] - a[1]).slice(0, 5);
  }, [logs]);

  const quoteSummary = useMemo(() => {
    const summary: Record<string, { id: string, name: string, count: number, lastView: Date | null, uniqueIps: Set<string> }> = {};
    
    // Initialize with all generated quotes first
    generatorLogs.forEach(g => {
      if (!g.id) return;
      summary[g.id] = {
        id: g.id,
        name: g.raw_data?.customer || 'Prospect',
        count: 0,
        lastView: null,
        uniqueIps: new Set()
      };
    });

    // Populate tracking details
    logs.forEach(l => {
      const qid = l.raw_data?.quoteId;
      if (!qid) return;
      
      if (!summary[qid]) {
        summary[qid] = {
          id: qid,
          name: l.raw_data?.customerName || 'Prospect',
          count: 0,
          lastView: null,
          uniqueIps: new Set()
        };
      }
      
      summary[qid].count++;
      const date = new Date(l.created_at);
      if (!summary[qid].lastView || date > summary[qid].lastView) {
        summary[qid].lastView = date;
      }
      if (l.raw_data?.ip) {
        summary[qid].uniqueIps.add(l.raw_data.ip);
      }
    });
    
    return Object.values(summary);
  }, [logs, generatorLogs]);

  const sortedSummary = useMemo(() => {
    let filtered = quoteSummary;
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      filtered = filtered.filter(q => {
        const spec = specsMap[q.id];
        return (
          q.name.toLowerCase().includes(s) || 
          q.id.toLowerCase().includes(s) ||
          (spec && (
            spec.text.includes(s) ||
            spec.customer.includes(s) ||
            spec.materials.some(m => m.includes(s)) ||
            spec.sizes.some(sz => sz.includes(s)) ||
            spec.productNames.some(pn => pn.includes(s)) ||
            spec.rawContent.includes(s)
          ))
        );
      });
    }
    return filtered.sort((a, b) => {
      if (sortMode === 'views') return b.count - a.count;
      if (sortMode === 'recent') {
        const timeA = a.lastView ? a.lastView.getTime() : 0;
        const timeB = b.lastView ? b.lastView.getTime() : 0;
        return timeB - timeA;
      }
      return a.name.localeCompare(b.name);
    });
  }, [quoteSummary, searchTerm, sortMode, specsMap]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 font-sans">
        <Helmet>
          <title>{t(`${p}.adminAuthQuoteAnalytics`)}</title>
        </Helmet>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-[#111] border border-white/10 p-8 rounded-3xl shadow-2xl"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/30">
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">{t(`${p}.quoteAnalytics`)}</h1>
            <p className="text-gray-500 text-sm mt-1">{t(`${p}.authorizedPersonnelOnly`)}</p>
          </div>

          <form onSubmit={handleVerifyPin} className="space-y-4">
            <div className="relative">
              <input 
                type="password" 
                value={pin}
                onChange={e => setPin(e.target.value)}
                placeholder="Enter Secure PIN"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-center text-lg font-black tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:tracking-normal placeholder:font-medium placeholder:text-gray-600"
                autoFocus
              />
            </div>
            {errorMsg && (
              <p className="text-red-500 text-xs font-bold text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                {errorMsg}
              </p>
            )}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  {t(`${p}.unlockDashboard`)}<ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>{t(`${p}.quoteAnalyticsDashboardAchieve`)}</title>
      </Helmet>

      {/* Header */}
      <header className="border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20">
              <Activity className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight">{t(`${p}.engagementIntel`)}</h1>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t(`${p}.realTimeQuoteTracking`)}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search quotes, customers..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full pl-11 pr-6 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 md:w-80 transition-all"
              />
            </div>
            <button 
              onClick={fetchLogs}
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
              title="Refresh Data"
            >
              <History className={`w-5 h-5 text-gray-400 ${fetching ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Views', value: stats.totalViews, icon: MousePointer2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { label: 'Unique Quotes', value: stats.uniqueQuotes, icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
            { label: 'Top Market', value: stats.topCountry, icon: Globe2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            { label: 'Last 24h Activity', value: stats.recentTrend, icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-500/10' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 ${stat.bg} rounded-2xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-[10px] font-black text-gray-500 bg-white/5 px-2 py-1 rounded-md uppercase tracking-widest">
                  {t(`${p}.live`)}</div>
              </div>
              <div className="text-3xl font-black mb-1 group-hover:scale-105 transition-transform origin-left">
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
              <div className="px-8 py-6 border-b border-white/5 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white/[0.02]">
                <h3 className="font-black text-lg flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  {viewMode === 'timeline' ? 'Recent Engagements' : 'Quote Summaries'}
                </h3>
                <div className="flex items-center gap-4">
                  {viewMode === 'summary' && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-500 font-bold uppercase tracking-widest">{t(`${p}.sort`)}</span>
                      <select 
                        value={sortMode}
                        onChange={(e) => setSortMode(e.target.value as any)}
                        className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="recent">{t(`${p}.mostRecent`)}</option>
                        <option value="views">{t(`${p}.mostViews`)}</option>
                        <option value="name">{t(`${p}.customerName`)}</option>
                      </select>
                    </div>
                  )}
                  <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden p-1">
                    <button 
                      onClick={() => setViewMode('timeline')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center gap-2 ${viewMode === 'timeline' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                      <List className="w-3.5 h-3.5" /> {t(`${p}.timeline`)}</button>
                    <button 
                      onClick={() => setViewMode('summary')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center gap-2 ${viewMode === 'summary' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                    >
                      <Grid className="w-3.5 h-3.5" /> {t(`${p}.summary`)}</button>
                  </div>
                  <span className="text-xs font-bold text-gray-500 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5">
                    {viewMode === 'timeline' ? filteredLogs.length : sortedSummary.length} {t(`${p}.records`)}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                {viewMode === 'timeline' ? (
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black text-gray-500 uppercase tracking-[0.1em] border-b border-white/5">
                      <th className="px-8 py-5">{t(`${p}.timestamp`)}</th>
                      <th className="px-6 py-5">{t(`${p}.customerQuote`)}</th>
                      <th className="px-6 py-5">{t(`${p}.location`)}</th>
                      <th className="px-6 py-5">{t(`${p}.details`)}</th>
                      <th className="px-8 py-5 text-right">{t(`${p}.action`)}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {fetching ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-20 text-center">
                          <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" />
                          <p className="text-gray-500 font-bold">{t(`${p}.synchronizingGlobalData`)}</p>
                        </td>
                      </tr>
                    ) : filteredLogs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-20 text-center text-gray-500 font-bold italic">
                          {t(`${p}.noEngagementDataMatchingYourSe`)}</td>
                      </tr>
                    ) : (
                      filteredLogs.map((log, i) => (
                        <motion.tr 
                          key={log.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.02 }}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5">
                            <div className="text-sm font-black text-gray-300">
                              {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                            <div className="text-[10px] font-bold text-gray-600 mt-0.5 uppercase tracking-tighter">
                              {new Date(log.created_at).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">
                              {log.raw_data?.customerName || 'Prospect'}
                            </div>
                            <div className="text-[10px] font-bold text-gray-600 mt-0.5 font-mono">
                              {t(`${p}.id`)}{log.raw_data?.quoteId?.substring(0, 8)}...
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
                              <span className="text-lg leading-none">
                                {getCountryFlag(log.raw_data?.country)}
                              </span>
                              {log.raw_data?.country || 'Unknown'}
                            </div>
                            <div className="text-[10px] font-bold text-gray-600 mt-0.5 flex items-center gap-1 uppercase tracking-tighter">
                              <MapPin className="w-2.5 h-2.5" />
                              {log.raw_data?.city || 'Private'}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-black px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded border border-blue-500/20 w-fit uppercase">
                                {t(`${p}.ip`)}{log.raw_data?.ip?.replace('::ffff:', '') || 'N/A'}
                              </span>
                              <span className="text-[9px] font-bold text-gray-600 truncate max-w-[150px]" title={log.raw_data?.userAgent}>
                                {log.raw_data?.userAgent || 'Browser Unknown'}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-5 text-right">
                            <a 
                              href={`/view-quote/${log.raw_data?.quoteId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-all"
                            >
                              {t(`${p}.quote`)}<ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
                ) : (
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[10px] font-black text-gray-500 uppercase tracking-[0.1em] border-b border-white/5">
                        <th className="px-8 py-5">{t(`${p}.customerQuote`)}</th>
                        <th className="px-6 py-5 text-center">{t(`${p}.totalViews`)}</th>
                        <th className="px-6 py-5 text-center">{t(`${p}.uniqueIps`)}</th>
                        <th className="px-6 py-5">{t(`${p}.lastActive`)}</th>
                        <th className="px-8 py-5 text-right">{t(`${p}.action`)}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {sortedSummary.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-8 py-20 text-center text-gray-500 font-bold italic">
                            {t(`${p}.noQuoteSummariesMatchingYourSe`)}</td>
                        </tr>
                      ) : (
                        sortedSummary.map((q, i) => (
                          <motion.tr 
                            key={q.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.02 }}
                            className="hover:bg-white/[0.03] transition-colors group"
                          >
                            <td className="px-8 py-5">
                              <div className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">
                                {q.name}
                              </div>
                              <div className="text-[10px] font-bold text-gray-600 mt-0.5 font-mono">
                                {t(`${p}.id`)}{q.id.substring(0, 8)}...
                              </div>
                            </td>
                            <td className="px-6 py-5 text-center">
                              <span className="text-lg font-black text-blue-500 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                                {q.count}
                              </span>
                            </td>
                            <td className="px-6 py-5 text-center">
                              <span className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                                {q.uniqueIps.size}
                              </span>
                            </td>
                            <td className="px-6 py-5">
                              {q.lastView ? (
                                <>
                                  <div className="text-sm font-bold text-gray-300">
                                    {q.lastView.toLocaleDateString()}
                                  </div>
                                  <div className="text-[10px] font-bold text-gray-600 mt-0.5 uppercase tracking-tighter">
                                    {q.lastView.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </div>
                                </>
                              ) : (
                                <div className="text-xs font-bold text-gray-600 italic">
                                  {t(`${p}.notViewedYet`)}</div>
                              )}
                            </td>
                            <td className="px-8 py-5 text-right">
                              <a 
                                href={`/view-quote/${q.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-all"
                              >
                                {t(`${p}.view`)}<ExternalLink className="w-3 h-3" />
                              </a>
                            </td>
                          </motion.tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Analytics */}
          <div className="space-y-8">
            {/* Top Countries Card */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
              <h3 className="font-black text-sm uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-emerald-500" />
                {t(`${p}.globalBreakdown`)}</h3>
              <div className="space-y-6">
                {countryStats.map(([country, count]: any, i) => (
                  <div key={country} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{getCountryFlag(country)}</span>
                        <span className="text-sm font-black text-gray-300 group-hover:text-white transition-colors">{country}</span>
                      </div>
                      <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {count} {t(`${p}.views`)}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(count / stats.totalViews) * 100}%` }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips / AI Insights Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl shadow-blue-900/20 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-24 h-24 text-white" />
              </div>
              <h3 className="font-black text-lg text-white mb-4 flex items-center gap-2 relative z-10">
                <TrendingUp className="w-6 h-6" />
                {t(`${p}.followUpTips`)}</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex gap-3 text-sm text-blue-100/80 leading-relaxed font-bold">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-[10px] text-white">1</div>
                  {t(`${p}.quotesOpenedMultipleTimesFromT`)}</li>
                <li className="flex gap-3 text-sm text-blue-100/80 leading-relaxed font-bold">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-[10px] text-white">2</div>
                  {t(`${p}.followUpWithin15MinutesOfAnOpe`)}</li>
                <li className="flex gap-3 text-sm text-blue-100/80 leading-relaxed font-bold">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-[10px] text-white">3</div>
                  {t(`${p}.checkTheLocationDataToTailorYo`)}</li>
              </ul>
              <button className="w-full mt-8 bg-white text-blue-700 font-black py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                {t(`${p}.generateHotLeadsReport`)}<ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Recent Quotes Search Card */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
              <h3 className="font-black text-sm uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                {t(`${p}.quotePopularity`)}</h3>
              <div className="space-y-4">
                {Array.from(new Set(logs.map(l => l.raw_data?.quoteId))).slice(0, 5).map((qid: string) => {
                  const count = logs.filter(l => l.raw_data?.quoteId === qid).length;
                  const name = logs.find(l => l.raw_data?.quoteId === qid)?.raw_data?.customerName || 'Unknown';
                  return (
                    <div key={qid} className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-transparent hover:border-white/10 transition-all cursor-pointer">
                      <div className="flex flex-col">
                        <span className="text-xs font-black truncate max-w-[120px]">{name}</span>
                        <span className="text-[10px] font-bold text-gray-600 font-mono mt-0.5">{qid.substring(0, 8)}...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-gray-400">{count} {t(`${p}.views1`)}</span>
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Helper for flags
function getCountryFlag(countryName: string) {
  const flags: Record<string, string> = {
    'United States': '🇺🇸',
    'United Kingdom': '🇬🇧',
    'Australia': '🇦🇺',
    'Canada': '🇨🇦',
    'Germany': '🇩🇪',
    'France': '🇫🇷',
    'Italy': '🇮🇹',
    'Japan': '🇯🇵',
    'China': '🇨🇳',
    'Hong Kong': '🇭🇰',
    'Singapore': '🇸🇬',
    'Malaysia': '🇲🇾',
    'Thailand': '🇹🇭',
    'Vietnam': '🇻🇳',
    'Philippines': '🇵🇭',
    'Indonesia': '🇮🇩',
    'India': '🇮🇳',
    'Netherlands': '🇳🇱',
    'United Arab Emirates': '🇦🇪',
    'Saudi Arabia': '🇸🇦',
    'Israel': '🇮🇱',
    'Switzerland': '🇨🇭',
    'Spain': '🇪🇸',
    'Mexico': '🇲🇽',
    'Brazil': '🇧🇷',
    'Ireland': '🇮🇪',
    'Norway': '🇳🇴',
    'Sweden': '🇸🇪',
    'Denmark': '🇩🇰',
    'Finland': '🇫🇮',
    'New Zealand': '🇳🇿',
    'South Africa': '🇿🇦',
    'Turkey': '🇹🇷'
  };
  return flags[countryName] || '🌐';
}

const Sparkles: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default QuoteAnalyticsPage;
