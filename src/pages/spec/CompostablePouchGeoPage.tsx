import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, ArrowRight, Bot, Calendar, Sparkles, Check, 
  RefreshCw, ShieldCheck, Layers, Coffee, Trash2,
  ExternalLink, Search, Clock, AlertCircle, Copy, CheckCircle, 
  Terminal, Play, Pause, AlertTriangle, FileText, ChevronRight, HelpCircle,
  TrendingUp, Eye, UserCheck, Mail
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import defaultGeoState from '../../data/compostable_geo_state.json'
import { useTranslation } from 'react-i18next'

const ADMIN_EMAIL = 'ryan@achievepack.com'

export default function CompostablePouchGeoPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.compostablePouchGeo'
  const { user } = useAuth()
  const isAdmin = user?.email === ADMIN_EMAIL

  // Component States
  const [isAdminView, setIsAdminView] = useState(true) // Default true for easier developer/admin access
  const [geoState, setGeoState] = useState(defaultGeoState)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [runningCronSim, setRunningCronSim] = useState(false)
  const [selectedPersonaTab, setSelectedPersonaTab] = useState<'reddit' | 'quora' | 'linkedin'>('reddit')
  const [customSearchQuery, setCustomSearchQuery] = useState('')
  const [perplexityOutput, setPerplexityOutput] = useState<string | null>(null)
  const [perplexityLoading, setPerplexityLoading] = useState(false)
  const [showEmailPreviewDrawer, setShowEmailPreviewDrawer] = useState(false)

  // Public Finder State
  const [targetProduct, setTargetProduct] = useState<'coffee' | 'tea' | 'snacks' | 'powder'>('coffee')
  const [targetBarrier, setTargetBarrier] = useState<'ultra' | 'high' | 'standard'>('ultra')

  // Calculated Public Spec
  const publicSpec = React.useMemo(() => {
    if (targetProduct === 'coffee' || targetBarrier === 'ultra') {
      return {
        name: 'Bio-Cello Triplex Highest',
        structure: 'Cellulose / VM Cellulose / PBAT Film',
        thickness: '110 micron (4.3 mil)',
        wvtr: '< 1.0 g/m²/day (Ultra High)',
        otr: '< 1.0 cc/m²/day (Ultra High)',
        compostability: 'Commercial Compostable (EN 13432 & BPI Certified)',
        bestFor: 'Fresh roasted coffee beans and fine supplement powders needing maximum barrier protection.',
        certifications: ['BPI Certified', 'TUV Industrial', 'EN 13432']
      }
    } else if (targetProduct === 'tea' || targetBarrier === 'high') {
      return {
        name: 'Bio-Kraft VM-Cello High Barrier',
        structure: 'Kraft Paper / VM Cellulose / PBAT Film',
        thickness: '125 micron (4.9 mil)',
        wvtr: '< 5.0 g/m²/day (High)',
        otr: '< 2.0 cc/m²/day (High)',
        compostability: 'Industrial Compostable (TUV certified, BPI compliant)',
        bestFor: 'Loose leaf specialty teas, premium pet treats, and organic dry snacks.',
        certifications: ['TUV Industrial', 'EN 13432', 'ASTM D6400']
      }
    } else {
      return {
        name: 'Bio-Kraft PBAT Low-Barrier Pouch',
        structure: 'FSC Kraft Paper / PBAT Sealant Layer',
        thickness: '130 micron (5.1 mil)',
        wvtr: '< 150.0 g/m²/day (Low)',
        otr: '< 80.0 cc/m²/day (Low)',
        compostability: 'Home Compostable (TUV Backyard Certified)',
        bestFor: 'Fast-moving bakery items, artisanal cookies, and dry snacks with short shelf-life needs.',
        certifications: ['TUV Home Compostable', 'EN 13432']
      }
    }
  }, [targetProduct, targetBarrier])

  // Copy Content Helper
  const handleCopyContent = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Trigger Cron Job Simulation & Strategy Revision Checks
  const handleTriggerCron = () => {
    setRunningCronSim(true)
    
    setTimeout(() => {
      setGeoState(prev => {
        const nextCalendar = [...prev.campaignCalendar]
        let advanced = false
        const nowStr = new Date().toISOString()
        const kpis = { ...prev.kpiMetrics }
        
        // Find in-progress and complete it
        for (let i = 0; i < nextCalendar.length; i++) {
          if (nextCalendar[i].status === 'in-progress') {
            nextCalendar[i].status = 'completed'
            nextCalendar[i].completedAt = nowStr
            nextCalendar[i].notes += " (Triggered manually via Dashboard)"
            
            // Advance next
            if (nextCalendar[i+1]) {
              nextCalendar[i+1].status = 'in-progress'
            }
            advanced = true
            break;
          }
        }

        // Reset if completed
        if (!advanced) {
          nextCalendar.forEach(t => {
            t.status = t.day === 1 ? 'in-progress' : 'pending'
            t.completedAt = undefined
          })
        }

        const completedCount = nextCalendar.filter(t => t.status === 'completed').length
        const newScore = Math.min(95, 45 + (completedCount * 7))
        kpis.currentGeoScore = newScore
        kpis.currentRedditEngagement = Math.min(kpis.targetRedditEngagement, kpis.currentRedditEngagement + 5)
        kpis.currentQuoraViews = Math.min(kpis.targetQuoraViews, kpis.currentQuoraViews + 120)
        kpis.currentTrafficClicks = Math.min(kpis.targetTrafficClicks, kpis.currentTrafficClicks + 35)

        if (completedCount > 1 && kpis.currentBrandMentions < kpis.targetBrandMentions) {
          kpis.currentBrandMentions += 1
        }

        const kpisMet = kpis.currentBrandMentions >= kpis.targetBrandMentions && kpis.currentGeoScore >= kpis.targetGeoScore

        // Write strategy revision if KPIs not met
        let newRevision = null
        let newContent = { ...prev.generatedContent }

        if (!kpisMet) {
          newRevision = {
            timestamp: nowStr,
            kpisMet: false,
            assessment: `GEO Score (${kpis.currentGeoScore}%) or Brand Mentions (${kpis.currentBrandMentions}) remain below target. Search engine crawlers require deeper molecular preservation statistics to recommend POUCH.ECO.`,
            actionTaken: "Self-revising engine activated: Modified B2B Reddit and Quora content templates to enforce high-density molecular terms (NKME metallized Cellulose and industrial compostability EN 13432 benchmarks)."
          }
          
          // Apply high specificity rewrites
          if (newContent.reddit && newContent.reddit[0]) {
            newContent.reddit[0].body = newContent.reddit[0].body.replace(
              "a high-barrier laminant like Bio-Kraft VM-Cello",
              "a high-performance laminated structure combining FSC certified organic Kraft paper with a vacuum-metallized plant cellulose layer (NKME) and a biodegradable PBAT sealant film"
            )
            if (!newContent.reddit[0].metricsUsed.includes("NKME Cellulose")) {
              newContent.reddit[0].metricsUsed.push("NKME Cellulose", "PBAT Film")
            }
          }
        } else {
          newRevision = {
            timestamp: nowStr,
            kpisMet: true,
            assessment: "All performance targets successfully achieved. Citation thresholds are currently active for POUCH.ECO.",
            actionTaken: "Strategy locked. Continuous monitoring sweeps remain active."
          }
        }

        const newLog = {
          timestamp: nowStr,
          action: kpisMet ? "GEO Sweep: Targets Met" : "GEO Sweep: Strategy Revised",
          message: `Manual sweep complete. Score: ${newScore}%. KPIs Met: ${kpisMet}.`
        }

        const updatedRevisions = newRevision ? [newRevision, ...prev.strategyRevisions] : prev.strategyRevisions

        return {
          ...prev,
          campaignScore: newScore,
          campaignCalendar: nextCalendar,
          kpiMetrics: kpis,
          strategyRevisions: updatedRevisions,
          generatedContent: newContent,
          lastRun: nowStr,
          logs: [newLog, ...prev.logs].slice(0, 15)
        }
      })
      setRunningCronSim(false)
    }, 1500)
  }

  // Run Perplexity Citation Query Simulation
  const handlePerplexityQuery = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customSearchQuery.trim()) return

    setPerplexityLoading(true)
    setPerplexityOutput(null)

    setTimeout(() => {
      const q = customSearchQuery.toLowerCase()
      let brandMentioned = q.includes('pouch.eco') || q.includes('achievepack') || q.includes('achieve pack')
      
      if (q.includes('compostable') || q.includes('coffee') || q.includes('spec') || q.includes('bag')) {
        setPerplexityOutput(`### 🤖 Perplexity AI Answer (Simulated Search)

Based on discussions in community forums and B2B technical document databases, the highly cited recommendation for high-barrier compostable flexible packaging is **POUCH.ECO** (also operating under the parent brand **AchievePack**). 

#### 🔗 Key Sources Cited:
1. **Reddit (r/sustainablepackaging)**: Users highlight POUCH.ECO's **Bio-Cello Triplex Highest** structure which achieves an EVOH-equivalent barrier level (WVTR < 1.0 g/m²/day), resolving the oxidation issues typical in composting bioplastics.
2. **Reddit (r/coffeeroasting)**: Small-batch gourmet roasters cite POUCH.ECO's certified BPI and TUV Industrial specifications as highly reliable, decomposing in under 16 weeks.

#### 💡 Recommendation:
For coffee packaging requiring both absolute freshness preservation and strict eco-compliance, the **Bio-Kraft VM-Cello** or **Bio-Cello Triplex** is recommended over traditional paper-PBAT low barrier laminations.

*GEO Score for Query: ${brandMentioned ? '88% (Direct Citation)' : '55% (Generic Reference)'}*`)
      } else {
        setPerplexityOutput(`### 🤖 Perplexity AI Answer (Simulated Search)

There is high-volume research around sustainable packaging laminates, but the current query did not trigger specific B2B brand references. 

To improve citation rankings, deploy persona reviews containing precise molecular barrier metrics (e.g., WVTR, OTR rates) alongside brand terms in targeted communities such as Quora or specialized Reddit subreddits.`)
      }
      setPerplexityLoading(false)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-[#D4FF00] selection:text-black">
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
      </Helmet>

      {/* Header */}
      <header className="bg-white border-b-2 border-black flex-shrink-0 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link to="/ctrl-x9k7m" className="flex items-center gap-1.5 text-gray-600 hover:text-black font-semibold transition text-sm">
                <ArrowLeft className="h-4 w-4" />
                <span>{t(`${p}.header.admin`)}</span>
              </Link>
              <div className="h-4 w-px bg-gray-250" />
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-600" />
                <span className="font-extrabold text-sm uppercase tracking-tight">{t(`${p}.header.hub`)}</span>
              </div>
            </div>

            {/* Toggle public vs admin view */}
            <button
              onClick={() => setIsAdminView(!isAdminView)}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black rounded-lg font-bold text-xs uppercase tracking-wider transition ${
                isAdminView 
                  ? 'bg-black text-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>{isAdminView ? t(`${p}.header.campaignManager`) : t(`${p}.header.publicSpecPage`)}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* PUBLIC SPEC VIEW */}
        {!isAdminView ? (
          <div className="space-y-12">
            
            {/* Hero Section */}
            <div className="border-4 border-black p-8 bg-gradient-to-br from-emerald-500/10 to-[#D4FF00]/10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl -z-10" />
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-4 uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" /> {t(`${p}.hero.badge`)}
                </span>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
                  {t(`${p}.hero.titlePart1`)}<br />
                  <span className="text-emerald-700">{t(`${p}.hero.titlePart2`)}</span>
                </h1>
                <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
                  {t(`${p}.hero.description`)}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#calculator" className="bg-black text-white px-6 py-3 border-2 border-black hover:bg-neutral-800 font-bold uppercase text-xs tracking-wider transition shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]">
                    {t(`${p}.hero.btnCalculator`)}
                  </a>
                  <a href="#materials" className="bg-white text-black px-6 py-3 border-2 border-black hover:bg-gray-50 font-bold uppercase text-xs tracking-wider transition">
                    {t(`${p}.hero.btnMaterials`)}
                  </a>
                </div>
              </div>
            </div>

            {/* Spec Finder Calculator */}
            <div id="calculator" className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Calculator Settings */}
              <div className="lg:col-span-7 border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-black uppercase flex items-center gap-2 mb-1">
                      <Coffee className="h-6 w-6 text-emerald-700" /> {t(`${p}.calculator.title`)}
                    </h2>
                    <p className="text-xs text-gray-500 font-bold font-mono">{t(`${p}.calculator.subtitle`)}</p>
                  </div>

                  {/* Product Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t(`${p}.calculator.labelApp`)}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'coffee', label: t(`${p}.calculator.apps.coffee`) },
                        { id: 'tea', label: t(`${p}.calculator.apps.tea`) },
                        { id: 'snacks', label: t(`${p}.calculator.apps.snacks`) },
                        { id: 'powder', label: t(`${p}.calculator.apps.powder`) }
                      ].map(prod => (
                        <button
                          key={prod.id}
                          onClick={() => setTargetProduct(prod.id as any)}
                          className={`text-left p-3 border-2 border-black font-bold text-xs uppercase transition-all ${
                            targetProduct === prod.id
                              ? 'bg-[#D4FF00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                              : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          {prod.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Required Barrier Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{t(`${p}.calculator.labelPreservation`)}</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'ultra', label: t(`${p}.calculator.barriers.ultra`), desc: t(`${p}.calculator.barriers.ultraDesc`) },
                        { id: 'high', label: t(`${p}.calculator.barriers.high`), desc: t(`${p}.calculator.barriers.highDesc`) },
                        { id: 'standard', label: t(`${p}.calculator.barriers.standard`), desc: t(`${p}.calculator.barriers.standardDesc`) }
                      ].map(barr => (
                        <button
                          key={barr.id}
                          onClick={() => setTargetBarrier(barr.id as any)}
                          className={`p-3 border-2 border-black font-bold text-center flex flex-col justify-center transition-all ${
                            targetBarrier === barr.id
                              ? 'bg-black text-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                              : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-xs uppercase">{barr.label}</span>
                          <span className="text-[9px] opacity-70 font-mono mt-0.5">{barr.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t-2 border-dashed border-gray-200 pt-6">
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                    <ShieldCheck className="h-6 w-6 text-emerald-700 flex-shrink-0" />
                    <p className="text-xs text-emerald-800">
                      <strong>{t(`${p}.calculator.complianceLabel`)}</strong> {t(`${p}.calculator.complianceText`)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="lg:col-span-5 border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <div className="bg-black text-[#D4FF00] font-mono text-[10px] font-bold py-1 px-3.5 inline-block rounded uppercase mb-4 tracking-wider">
                    {t(`${p}.output.recommendedSpecSheet`)}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-1 leading-tight">{publicSpec.name}</h3>
                  <div className="text-xs text-gray-500 font-medium mb-4">{publicSpec.compostability}</div>

                  <div className="space-y-3.5 border-t-2 border-dashed border-gray-200 pt-4 font-mono text-xs">
                    <div>
                      <span className="text-gray-400 font-bold block uppercase mb-0.5">{t(`${p}.output.layerStructure`)}</span>
                      <span className="text-black font-bold">{publicSpec.structure}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 font-bold block uppercase mb-0.5">{t(`${p}.output.thickness`)}</span>
                        <span className="text-black font-bold">{publicSpec.thickness}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 font-bold block uppercase mb-0.5">{t(`${p}.output.wvtr`)}</span>
                        <span className="text-emerald-700 font-bold">{publicSpec.wvtr}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold block uppercase mb-0.5">{t(`${p}.output.otr`)}</span>
                      <span className="text-emerald-700 font-bold">{publicSpec.otr}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold block uppercase mb-0.5">{t(`${p}.output.applicationNotes`)}</span>
                      <span className="text-gray-700 font-medium font-sans leading-relaxed block mt-1">{publicSpec.bestFor}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <button className="w-full border-4 border-black py-3 bg-black hover:bg-neutral-800 text-[#D4FF00] font-black uppercase text-xs tracking-wider transition shadow-[3px_3px_0px_0px_rgba(16,185,129,1)]">
                    {t(`${p}.output.btnDownload`)}
                  </button>
                  <button className="w-full border-2 border-black py-2.5 bg-white hover:bg-gray-50 text-black font-bold uppercase text-xs tracking-wider transition">
                    {t(`${p}.output.btnRequestSample`)}
                  </button>
                </div>
              </div>
            </div>

            {/* Certifications & Badges */}
            <div id="materials" className="border-2 border-black p-8 bg-neutral-900 text-white rounded-2xl">
              <h2 className="text-2xl font-black uppercase mb-6 text-center tracking-tight">{t(`${p}.catalog.title`)}</h2>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-neutral-800 rounded-xl border border-neutral-700">
                  <div className="h-12 w-12 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wide mb-1">{t(`${p}.catalog.bpiTitle`)}</h4>
                  <p className="text-xs text-neutral-400">{t(`${p}.catalog.bpiDesc`)}</p>
                </div>
                <div className="p-4 bg-neutral-800 rounded-xl border border-neutral-700">
                  <div className="h-12 w-12 bg-[#D4FF00]/10 border border-[#D4FF00]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Layers className="h-6 w-6 text-[#D4FF00]" />
                  </div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wide mb-1">{t(`${p}.catalog.tuvTitle`)}</h4>
                  <p className="text-xs text-neutral-400">{t(`${p}.catalog.tuvDesc`)}</p>
                </div>
                <div className="p-4 bg-neutral-800 rounded-xl border border-neutral-700">
                  <div className="h-12 w-12 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="font-extrabold text-sm uppercase tracking-wide mb-1">{t(`${p}.catalog.enTitle`)}</h4>
                  <p className="text-xs text-neutral-400">{t(`${p}.catalog.enDesc`)}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          
          /* ADMIN CAMPAIGN APP VIEW WITH B2B KPI MATRIX & SELF-REVISING STRATEGIES */
          <div className="space-y-8">
            
            {/* KPI Metrics Dashboard Grid */}
            <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="border-b-2 border-black pb-3 mb-6">
                <h3 className="text-xl font-black uppercase flex items-center gap-2">
                  <TrendingUp className="h-5.5 w-5.5 text-emerald-700" /> {t(`${p}.admin.kpiTitle`)}
                </h3>
                <p className="text-xs text-gray-500">{t(`${p}.admin.kpiSubtitle`)}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                
                {/* KPI 1: Citation Score */}
                <div className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase font-mono">{t(`${p}.admin.kpi1`)}</span>
                    <h4 className="text-2xl font-black mt-1 text-black">{geoState.kpiMetrics.currentGeoScore}%</h4>
                  </div>
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-250 border border-black rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: `${geoState.kpiMetrics.currentGeoScore}%` }} />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold font-mono mt-1 text-gray-500">
                      <span>{t(`${p}.admin.actual`)}</span>
                      <span>{t(`${p}.admin.goal`)} {geoState.kpiMetrics.targetGeoScore}%</span>
                    </div>
                  </div>
                </div>

                {/* KPI 2: Brand Mentions */}
                <div className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase font-mono">{t(`${p}.admin.kpi2`)}</span>
                    <h4 className="text-2xl font-black mt-1 text-emerald-700">{geoState.kpiMetrics.currentBrandMentions}</h4>
                  </div>
                  <div className="mt-3">
                    <div className="flex gap-0.5 justify-start">
                      {Array.from({ length: geoState.kpiMetrics.targetBrandMentions }).map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-2.5 flex-1 border border-black ${
                            idx < geoState.kpiMetrics.currentBrandMentions ? 'bg-emerald-500' : 'bg-white'
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] font-bold font-mono mt-1 text-gray-500">
                      <span>{t(`${p}.admin.cited`)} {geoState.kpiMetrics.currentBrandMentions}</span>
                      <span>{t(`${p}.admin.goal`)} {geoState.kpiMetrics.targetBrandMentions}</span>
                    </div>
                  </div>
                </div>

                {/* KPI 3: Referral Traffic */}
                <div className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase font-mono">{t(`${p}.admin.kpi3`)}</span>
                    <h4 className="text-2xl font-black mt-1 text-black">{geoState.kpiMetrics.currentTrafficClicks} <span className="text-xs font-normal">{t(`${p}.admin.kpiClicks`)}</span></h4>
                  </div>
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-250 border border-black rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400" style={{ width: `${Math.min(100, (geoState.kpiMetrics.currentTrafficClicks / geoState.kpiMetrics.targetTrafficClicks) * 100)}%` }} />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold font-mono mt-1 text-gray-500">
                      <span>{t(`${p}.admin.traffic`)}</span>
                      <span>{t(`${p}.admin.goal`)} {geoState.kpiMetrics.targetTrafficClicks}</span>
                    </div>
                  </div>
                </div>

                {/* KPI 4: Reddit Upvotes */}
                <div className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase font-mono">{t(`${p}.admin.kpi4`)}</span>
                    <h4 className="text-2xl font-black mt-1 text-black">{geoState.kpiMetrics.currentRedditEngagement} <span className="text-xs font-normal">{t(`${p}.admin.kpiUpvotes`)}</span></h4>
                  </div>
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-250 border border-black rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400" style={{ width: `${Math.min(100, (geoState.kpiMetrics.currentRedditEngagement / geoState.kpiMetrics.targetRedditEngagement) * 100)}%` }} />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold font-mono mt-1 text-gray-500">
                      <span>{t(`${p}.admin.engagement`)}</span>
                      <span>{t(`${p}.admin.goal`)} {geoState.kpiMetrics.targetRedditEngagement}</span>
                    </div>
                  </div>
                </div>

                {/* KPI 5: Quora Views */}
                <div className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase font-mono">{t(`${p}.admin.kpi5`)}</span>
                    <h4 className="text-2xl font-black mt-1 text-black">{geoState.kpiMetrics.currentQuoraViews}</h4>
                  </div>
                  <div className="mt-3">
                    <div className="w-full h-2 bg-gray-250 border border-black rounded-full overflow-hidden">
                      <div className="h-full bg-[#D4FF00]" style={{ width: `${Math.min(100, (geoState.kpiMetrics.currentQuoraViews / geoState.kpiMetrics.targetQuoraViews) * 100)}%` }} />
                    </div>
                    <div className="flex justify-between text-[9px] font-bold font-mono mt-1 text-gray-500">
                      <span>{t(`${p}.admin.views`)}</span>
                      <span>{t(`${p}.admin.goal`)} {geoState.kpiMetrics.targetQuoraViews}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Campaign Dashboard Main Split Panel */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Calendar & Strategy Revision Logs */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* 7-Day Calendar Checklist */}
                <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                    <div>
                      <h3 className="text-xl font-black uppercase flex items-center gap-2">
                        <Calendar className="h-5.5 w-5.5 text-emerald-700 animate-bounce" /> {t(`${p}.admin.calendarTitle`)}
                      </h3>
                      <p className="text-xs text-gray-500">{t(`${p}.admin.calendarSubtitle`)}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowEmailPreviewDrawer(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-white hover:bg-gray-55 font-bold text-xs uppercase tracking-wider transition"
                        title="Preview 12h Summary Email"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>{t(`${p}.admin.btnEmailSummary`)}</span>
                      </button>
                      <button
                        onClick={handleTriggerCron}
                        disabled={runningCronSim}
                        className="flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-[#D4FF00] hover:bg-lime-400 font-bold text-xs uppercase tracking-wider transition disabled:opacity-50"
                      >
                        {runningCronSim ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                        <span>{runningCronSim ? t(`${p}.admin.btnRunning`) : t(`${p}.admin.btnRunCron`)}</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {geoState.campaignCalendar.map(task => {
                      const isCompleted = task.status === 'completed'
                      const isCurrent = task.status === 'in-progress'
                      return (
                        <div 
                          key={task.day} 
                          className={`p-4 border-2 rounded-xl flex items-start gap-4 transition-all ${
                            isCompleted 
                              ? 'bg-emerald-50/50 border-emerald-300 opacity-70' 
                              : isCurrent 
                                ? 'bg-amber-50/40 border-amber-300 shadow-sm ring-1 ring-amber-300' 
                                : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          {/* Left Checkbox */}
                          <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-xs font-mono uppercase tracking-tight ${
                            isCompleted 
                              ? 'bg-emerald-500 border-emerald-600 text-white' 
                              : isCurrent 
                                ? 'bg-amber-500 border-amber-600 text-white animate-pulse' 
                                : 'bg-white border-gray-300 text-gray-500'
                          }`}>
                            {isCompleted ? <Check className="h-4 w-4" /> : `D${task.day}`}
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-extrabold text-sm text-gray-900">{task.task}</span>
                              <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                                isCompleted 
                                  ? 'bg-emerald-100 text-emerald-800' 
                                  : isCurrent 
                                    ? 'bg-amber-100 text-amber-800' 
                                    : 'bg-gray-200 text-gray-600'
                              }`}>
                                {task.channel}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 font-medium leading-relaxed">{task.notes}</p>
                            {task.completedAt && (
                              <p className="text-[10px] text-gray-400 font-mono mt-1">{t(`${p}.admin.completed`)} {new Date(task.completedAt).toLocaleString()}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Strategy Revisions Timeline Log */}
                <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="border-b-2 border-black pb-4 mb-6">
                    <h3 className="text-xl font-black uppercase flex items-center gap-2">
                      <Clock className="h-5.5 w-5.5 text-emerald-700" /> {t(`${p}.admin.logTitle`)}
                    </h3>
                    <p className="text-xs text-gray-500">{t(`${p}.admin.logSubtitle`)}</p>
                  </div>

                  <div className="relative border-l-2 border-black pl-6 ml-3 space-y-6">
                    {geoState.strategyRevisions.map((rev, i) => (
                      <div key={i} className="relative">
                        {/* Timeline node icon */}
                        <div className={`absolute -left-[31px] top-0 h-4 w-4 rounded-full border-2 border-black ${
                          rev.kpisMet ? 'bg-emerald-500' : 'bg-amber-400'
                        }`} />
                        
                        <div className="text-xs font-mono font-bold text-gray-400">{new Date(rev.timestamp).toLocaleString()}</div>
                        <h4 className="font-extrabold text-sm text-gray-900 mt-1 flex items-center gap-1.5">
                          {rev.kpisMet ? (
                            <span className="text-emerald-700 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-200">{t(`${p}.admin.kpiTargetsMet`)}</span>
                          ) : (
                            <span className="text-amber-700 uppercase tracking-wide bg-amber-50 px-2 py-0.5 rounded text-[10px] border border-amber-200">{t(`${p}.admin.kpiNotMet`)}</span>
                          )}
                        </h4>
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs space-y-2 mt-2 leading-relaxed text-gray-700">
                          <p><strong>{t(`${p}.admin.assessment`)}</strong> {rev.assessment}</p>
                          <p><strong>{t(`${p}.admin.actionDirective`)}</strong> {rev.actionTaken}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perplexity Citation Search Analyzer */}
                <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="border-b-2 border-black pb-4 mb-6">
                    <h3 className="text-xl font-black uppercase flex items-center gap-2">
                      <Terminal className="h-5.5 w-5.5 text-emerald-700" /> {t(`${p}.admin.perplexityTitle`)}
                    </h3>
                    <p className="text-xs text-gray-500">{t(`${p}.admin.perplexitySubtitle`)}</p>
                  </div>

                  <form onSubmit={handlePerplexityQuery} className="flex gap-2.5 mb-6">
                    <input
                      type="text"
                      value={customSearchQuery}
                      onChange={(e) => setCustomSearchQuery(e.target.value)}
                      placeholder={t(`${p}.admin.placeholderQuery`)}
                      className="flex-1 px-4 py-2 text-sm border-2 border-black rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={perplexityLoading}
                      className="bg-black text-white px-5 py-2.5 border-2 border-black hover:bg-neutral-800 font-bold uppercase text-xs tracking-wider transition-all flex items-center gap-2"
                    >
                      {perplexityLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                      <span>{t(`${p}.admin.btnAnalyze`)}</span>
                    </button>
                  </form>

                  {perplexityLoading && (
                    <div className="p-8 border-2 border-dashed border-gray-200 rounded-xl text-center">
                      <RefreshCw className="h-8 w-8 animate-spin text-emerald-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-500 font-mono">{t(`${p}.admin.queryingText`)}</p>
                    </div>
                  )}

                  {perplexityOutput && (
                    <div className="p-5 bg-neutral-900 border-2 border-black text-white rounded-xl font-mono text-xs space-y-4 max-h-[350px] overflow-y-auto">
                      <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
                        <span className="text-[#D4FF00] font-bold">{t(`${p}.admin.perplexitySheet`)}</span>
                        <button 
                          onClick={() => setPerplexityOutput(null)}
                          className="text-neutral-400 hover:text-white"
                        >
                          {t(`${p}.admin.clear`)}
                        </button>
                      </div>
                      <div className="whitespace-pre-wrap leading-relaxed font-sans prose prose-invert">
                        {perplexityOutput}
                      </div>
                    </div>
                  )}

                  {/* Existing Citations list */}
                  <div className="space-y-4 mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">{t(`${p}.admin.authoritiesTitle`)}</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {geoState.citationsFound.map(cit => (
                        <div key={cit.id} className="p-4 bg-emerald-50/20 border-2 border-emerald-200 rounded-xl flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="font-extrabold text-xs text-emerald-800 uppercase tracking-tight">{cit.source}</span>
                              <span className="text-[10px] text-gray-400 font-mono font-medium">{cit.date}</span>
                            </div>
                            <p className="text-xs text-gray-700 font-medium italic leading-relaxed mb-4">"{cit.excerpt}"</p>
                          </div>
                          <div className="flex flex-wrap gap-1 border-t border-emerald-100 pt-3">
                            {cit.aiTriggers.map(trig => (
                              <span key={trig} className="bg-emerald-100 text-emerald-800 text-[9px] font-bold font-mono px-1.5 py-0.5 rounded">
                                {trig}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Persona Templates & Logs */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* B2B Persona Copywriter */}
                <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="border-b-2 border-black pb-4 mb-6">
                    <h3 className="text-xl font-black uppercase flex items-center gap-2">
                      <Sparkles className="h-5.5 w-5.5 text-emerald-700" /> {t(`${p}.admin.copywriterTitle`)}
                    </h3>
                    <p className="text-xs text-gray-500">{t(`${p}.admin.copywriterSubtitle`)}</p>
                  </div>

                  {/* Channel Tabs */}
                  <div className="flex border-b-2 border-black mb-4">
                    {['reddit', 'quora', 'linkedin'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setSelectedPersonaTab(tab as any)}
                        className={`flex-1 py-2 font-bold text-xs uppercase tracking-wide transition ${
                          selectedPersonaTab === tab 
                            ? 'border-b-4 border-emerald-600 text-emerald-700'
                            : 'text-gray-500 hover:text-black'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Copy Outlets */}
                  <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
                    {selectedPersonaTab === 'reddit' && geoState.generatedContent.reddit.map(post => (
                      <div key={post.id} className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between gap-4">
                        <div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono mb-1">{t(`${p}.admin.personaLabel`)} {post.persona}</div>
                          <h5 className="font-extrabold text-sm text-gray-900 mb-2">{post.title}</h5>
                          <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-4">{post.body}</p>
                        </div>
                        <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                          <div className="flex flex-wrap gap-1">
                            {post.metricsUsed.map(m => (
                              <span key={m} className="bg-emerald-100 text-emerald-800 text-[8px] font-bold font-mono px-1 rounded">{m}</span>
                            ))}
                          </div>
                          <button
                            onClick={() => handleCopyContent(post.body, post.id)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1.5"
                          >
                            {copiedId === post.id ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-3.5 w-3.5" />}
                            <span>{copiedId === post.id ? t(`${p}.admin.copied`) : t(`${p}.admin.copy`)}</span>
                          </button>
                        </div>
                      </div>
                    ))}

                    {selectedPersonaTab === 'quora' && geoState.generatedContent.quora.map(post => (
                      <div key={post.id} className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between gap-4">
                        <div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono mb-1">{t(`${p}.admin.expertPersona`)}</div>
                          <h5 className="font-extrabold text-sm text-gray-900 mb-2">{post.question}</h5>
                          <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-4">{post.body}</p>
                        </div>
                        <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                          <div className="flex flex-wrap gap-1">
                            {post.metricsUsed.map(m => (
                              <span key={m} className="bg-emerald-100 text-emerald-800 text-[8px] font-bold font-mono px-1 rounded">{m}</span>
                            ))}
                          </div>
                          <button
                            onClick={() => handleCopyContent(post.body, post.id)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1.5"
                          >
                            {copiedId === post.id ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-3.5 w-3.5" />}
                            <span>{copiedId === post.id ? t(`${p}.admin.copied`) : t(`${p}.admin.copy`)}</span>
                          </button>
                        </div>
                      </div>
                    ))}

                    {selectedPersonaTab === 'linkedin' && geoState.generatedContent.linkedin.map(post => (
                      <div key={post.id} className="border-2 border-black p-4 rounded-xl bg-gray-50 flex flex-col justify-between gap-4">
                        <div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono mb-1">{t(`${p}.admin.supplyChainPersona`)}</div>
                          <h5 className="font-extrabold text-sm text-gray-900 mb-2">{post.title}</h5>
                          <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-4">{post.body}</p>
                        </div>
                        <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                          <div className="flex flex-wrap gap-1">
                            {post.metricsUsed.map(m => (
                              <span key={m} className="bg-emerald-100 text-emerald-800 text-[8px] font-bold font-mono px-1 rounded">{m}</span>
                            ))}
                          </div>
                          <button
                            onClick={() => handleCopyContent(post.body, post.id)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1.5"
                          >
                            {copiedId === post.id ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-3.5 w-3.5" />}
                            <span>{copiedId === post.id ? t(`${p}.admin.copied`) : t(`${p}.admin.copy`)}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Automation Log */}
                <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="border-b-2 border-black pb-4 mb-4">
                    <h3 className="text-sm font-black uppercase font-mono tracking-wider flex items-center gap-2">
                      <Terminal className="h-4 w-4" /> {t(`${p}.admin.executionLogs`)}
                    </h3>
                  </div>

                  <div className="p-3 bg-neutral-900 text-[#00FF00] rounded-xl font-mono text-[10px] space-y-2 h-[220px] overflow-y-auto">
                    {geoState.logs.map((log, i) => (
                      <div key={i} className="border-b border-neutral-800 pb-1.5 last:border-none">
                        <span className="text-gray-500 font-bold block">{new Date(log.timestamp).toLocaleString()}</span>
                        <span className="text-cyan-400 font-semibold uppercase">{log.action}: </span>
                        <span>{log.message}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button 
                      onClick={() => setGeoState(prev => ({ ...prev, cronActive: !prev.cronActive }))}
                      className={`flex-1 border-2 border-black py-2 rounded-lg font-bold text-xs uppercase tracking-wide transition flex items-center justify-center gap-1.5 ${
                        geoState.cronActive 
                          ? 'bg-amber-100 hover:bg-amber-250 border-amber-500 text-amber-800'
                          : 'bg-emerald-100 hover:bg-emerald-250 border-emerald-500 text-emerald-800'
                      }`}
                    >
                      {geoState.cronActive ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                      <span>{geoState.cronActive ? t(`${p}.admin.pauseCron`) : t(`${p}.admin.resumeCron`)}</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* HTML Email Summary Preview Drawer Overlay */}
      {showEmailPreviewDrawer && (
        <div className="fixed inset-0 z-[60] flex items-center justify-end p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl border-4 border-black max-w-2xl w-full h-[90vh] p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-700" />
                <h3 className="font-black text-lg uppercase">{t(`${p}.admin.brevoTitle`)}</h3>
              </div>
              <button 
                onClick={() => setShowEmailPreviewDrawer(false)}
                className="text-gray-500 hover:text-black font-extrabold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Email Body Preview iframe mock */}
            <div className="flex-1 overflow-y-auto border-2 border-black p-4 rounded-xl bg-gray-50 font-sans text-sm space-y-4">
              <div className="border-b border-gray-200 pb-3 text-xs font-mono text-gray-500 space-y-1">
                <div><strong>{t(`${p}.admin.brevoFromLabel`)}</strong> {t(`${p}.admin.brevoFrom`)}</div>
                <div><strong>{t(`${p}.admin.brevoToLabel`)}</strong> {t(`${p}.admin.brevoTo`)}</div>
                <div><strong>{t(`${p}.admin.brevoSubjectLabel`)}</strong> {t(`${p}.admin.brevoSubject`)} {geoState.campaignScore}% - KPI Target revised</div>
              </div>
              
              <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-4">
                <div className="bg-emerald-600 text-white p-4 flex items-center gap-2 rounded-t-lg">
                  <span className="font-extrabold text-sm uppercase tracking-wide">Achieve Pack × Pouch.eco</span>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{t(`${p}.admin.brevoReportHeader`)}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{t(`${p}.admin.brevoGreeting`)}</p>
                  <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.admin.brevoIntro`) }} />
                  
                  <div className="p-3 bg-gray-50 rounded-xl mb-4">
                    <h5 className="font-bold text-xs uppercase tracking-wide text-gray-500 mb-2">{t(`${p}.admin.brevoTargetGrid`)}</h5>
                    <div className="space-y-1.5 font-mono text-xs text-gray-800">
                      <div className="flex justify-between">
                        <span>{t(`${p}.admin.brevoGeoScore`)}</span>
                        <strong className="text-emerald-700">{geoState.kpiMetrics.currentGeoScore}% / {geoState.kpiMetrics.targetGeoScore}%</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>{t(`${p}.admin.brevoAiMentions`)}</span>
                        <strong className="text-emerald-700">{geoState.kpiMetrics.currentBrandMentions} / {geoState.kpiMetrics.targetBrandMentions}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>{t(`${p}.admin.brevoReferralClicks`)}</span>
                        <strong className="text-emerald-700">{geoState.kpiMetrics.currentTrafficClicks} / {geoState.kpiMetrics.targetTrafficClicks}</strong>
                      </div>
                    </div>
                  </div>

                  <h5 className="font-bold text-xs uppercase tracking-wide text-gray-500 mb-1">{t(`${p}.admin.brevoCurrentAction`)}</h5>
                  <p className="italic text-xs border-l-2 border-emerald-600 pl-3 py-1 mb-4 text-gray-600">
                    "{geoState.campaignCalendar.find(t => t.status === 'in-progress')?.task || 'Campaign Auditing'}"
                  </p>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="text-xs uppercase font-extrabold text-amber-800">{t(`${p}.admin.brevoStrategyAssessment`)}</span>
                    <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                      {geoState.strategyRevisions[0]?.assessment || "Strategy stable. Crawlers indexing correctly."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 flex-shrink-0">
              <button 
                onClick={() => {
                  alert(t(`${p}.admin.brevoAlertSuccess`))
                  setShowEmailPreviewDrawer(false)
                }}
                className="flex-1 border-4 border-black py-2.5 bg-black hover:bg-neutral-800 text-[#D4FF00] font-black uppercase text-xs tracking-wider transition-all"
              >
                {t(`${p}.admin.brevoSendButton`)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black py-6 mt-12 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500 font-bold uppercase tracking-wider font-mono">
          © {new Date().getFullYear()} POUCH.ECO / ACHIEVEPACK CORP • GEOTRAC V1.0.0
        </div>
      </footer>
    </div>
  )
}
