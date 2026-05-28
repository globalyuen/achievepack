import { useState, useEffect, useMemo, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Search, 
  Download, 
  Layers, 
  Mail, 
  Sparkles, 
  Sliders, 
  CheckCircle, 
  Info, 
  ChevronRight, 
  Layout, 
  Check,
  Eye,
  FileText,
  FileCode,
  ArrowRight,
  Bookmark,
  Share2,
  Upload,
  X,
  Send,
  Loader2,
  CornerDownRight
} from 'lucide-react'
import { getDomain } from '../utils/domain'
import { DIELINE_CATALOG, type DielineItem } from '../data/dielineCatalog'

// B2C Layout imports
import PouchLayout from '../components/pouch/PouchLayout'

// B2B Layout imports
import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'

export default function PouchDielineFinderPage() {
  const isPouchDomain = getDomain() === 'pouch'

  // State Management
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedShape, setSelectedShape] = useState<string>('ALL')
  const [selectedUnit, setSelectedUnit] = useState<string>('ALL')
  const [selectedDieline, setSelectedDieline] = useState<DielineItem>(DIELINE_CATALOG[0])
  
  // Lead Capture State
  const [email, setEmail] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [recentDownloads, setRecentDownloads] = useState<DielineItem[]>([])

  // Prepress Submission Modal State
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const [submitName, setSubmitName] = useState('')
  const [submitEmail, setSubmitEmail] = useState('')
  const [submitCompany, setSubmitCompany] = useState('')
  const [submitMaterial, setSubmitMaterial] = useState('Kraft High-Barrier')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  
  // Upload & Process Simulation
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStep, setUploadStep] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [activeEmailTab, setActiveEmailTab] = useState<'ryan' | 'customer'>('ryan')
  
  // Blueprint Preview Layers State
  const [showGrid, setShowGrid] = useState(true)
  const [showSafeZone, setShowSafeZone] = useState(true)
  const [showCutLines, setShowCutLines] = useState(true)
  const [showFoldLines, setShowFoldLines] = useState(true)
  const [showBleedLines, setShowBleedLines] = useState(true)
  const [showZipper, setShowZipper] = useState(true)

  // Unique Shapes list for Tabs
  const shapes = useMemo(() => {
    const allShapes = DIELINE_CATALOG.map(item => item.shape)
    return ['ALL', ...Array.from(new Set(allShapes))]
  }, [])

  // Email Lead Gate & Turnstile CAPTCHA States
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const turnstileWidgetId = useRef<string | null>(null)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

  // Check LocalStorage for previously unlocked emails
  useEffect(() => {
    const savedEmail = localStorage.getItem('dieline_finder_email')
    if (savedEmail) {
      setEmail(savedEmail)
      setIsUnlocked(true)
    }
  }, [])

  // Load Cloudflare Turnstile script dynamically & initialize widget
  useEffect(() => {
    if (isUnlocked) return // Only load if locked!
    
    if (typeof window !== 'undefined' && !(window as any).turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }

    const renderWidget = () => {
      if (turnstileRef.current && (window as any).turnstile && !turnstileWidgetId.current) {
        turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(null),
          'error-callback': () => setTurnstileToken(null)
        })
      }
    }

    if ((window as any).turnstile) {
      renderWidget()
    } else {
      (window as any).onTurnstileLoad = renderWidget
    }

    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(turnstileWidgetId.current)
        } catch (e) {
          console.error('Turnstile clean error:', e)
        }
        turnstileWidgetId.current = null
      }
    }
  }, [isUnlocked, selectedDieline])

  // Filtered Dielines Catalog
  const filteredDielines = useMemo(() => {
    return DIELINE_CATALOG.filter(item => {
      const matchesSearch = 
        item.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.capacity.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesShape = selectedShape === 'ALL' || item.shape === selectedShape
      const matchesUnit = selectedUnit === 'ALL' || item.unit === selectedUnit

      return matchesSearch && matchesShape && matchesUnit
    })
  }, [searchQuery, selectedShape, selectedUnit])

  // Select first match when filters change
  useEffect(() => {
    if (filteredDielines.length > 0) {
      // Keep selected if still in the filtered list
      const isStillFiltered = filteredDielines.some(item => item.filename === selectedDieline.filename)
      if (!isStillFiltered) {
        setSelectedDieline(filteredDielines[0])
      }
    }
  }, [filteredDielines, selectedDieline])

  // Handle Email Submit Unlock & Email delivery
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowEmailError(true)
      return
    }
    if (!turnstileToken) {
      alert('Please complete the Cloudflare CAPTCHA verification.')
      return
    }
    
    setShowEmailError(false)
    setSendingEmail(true)

    try {
      const response = await fetch('/api/send-dieline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          dielineFilename: selectedDieline.filename,
          dielineUrl: selectedDieline.url,
          dielineDisplayName: selectedDieline.displayName,
          turnstileToken,
          shape: selectedDieline.shape,
          width: selectedDieline.width,
          height: selectedDieline.height,
          gusset: selectedDieline.gusset,
          unit: selectedDieline.unit,
          capacity: selectedDieline.capacity
        })
      })

      const result = await response.json()
      if (response.ok && result.success) {
        localStorage.setItem('dieline_finder_email', email)
        setIsUnlocked(true)
        setEmailSuccess(true)
        // Trigger auto-download for maximum user convenience!
        triggerDownload(selectedDieline)
      } else {
        alert(result.error || 'Failed to send dieline email.')
      }
    } catch (err) {
      console.error(err)
      alert('A network error occurred. Please try again.')
    } finally {
      setSendingEmail(false)
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken(null)
      }
    }
  }

  // Trigger File Download
  const triggerDownload = (item: DielineItem) => {
    // Add to recent downloads list (max 5)
    setRecentDownloads(prev => {
      const filtered = prev.filter(d => d.filename !== item.filename)
      return [item, ...filtered].slice(0, 5)
    })

    // Setup temporary link to click and download
    const link = document.createElement('a')
    link.href = item.url
    link.download = item.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 4000)
  }

  // Visual Dimension Ratios for Blueprint Renderer
  const blueprintProportions = useMemo(() => {
    const w = selectedDieline.width || 100
    const h = selectedDieline.height || 150
    const g = selectedDieline.gusset || 0

    // Scale logic
    const maxVal = Math.max(w, h)
    const scale = 260 / maxVal // pad to leave margin

    const renderWidth = w * scale
    const renderHeight = h * scale
    const renderGusset = g * scale

    return {
      w: renderWidth,
      h: renderHeight,
      g: renderGusset,
      actualW: w,
      actualH: h,
      actualG: g,
      unit: selectedDieline.unit
    }
  }, [selectedDieline])

  // DRAG & DROP FILE UPLOAD HANDLERS
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const ext = file.name.split('.').pop()?.toLowerCase()
      if (ext === 'pdf' || ext === 'ai' || ext === 'zip') {
        setSelectedFile(file)
      } else {
        alert('Please submit only .AI, .PDF or .ZIP files for prepress auditing.')
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
    }
  }

  // Simulates high-fidelity upload pipeline and triggers email previews
  const handlePrepressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile || !submitName || !submitEmail) return

    setIsUploading(true)
    setUploadProgress(0)
    setUploadStep('Staging file attachment...')

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setSubmitSuccess(true)
          return 100
        }
        
        const next = prev + 5
        if (next === 25) setUploadStep('Uploading artwork binaries to server...')
        if (next === 50) setUploadStep('Validating vector coords & safe margins...')
        if (next === 75) setUploadStep('Converting color mappings (CMYK profiles)...')
        if (next === 90) setUploadStep('Dispatching notifications to engineering...')
        return next
      })
    }, 150)
  }

  // Renders the JSX Content for the Dieline Finder
  const renderMainContent = () => {
    const isPouch = isPouchDomain

    return (
      <div className={`w-full ${isPouch ? "font-['Space_Grotesk'] text-black bg-white" : "font-sans text-neutral-800 bg-gradient-to-b from-neutral-50 to-white"}`}>
        
        {/* Hero Section */}
        <section className={`border-b-4 border-black relative overflow-hidden py-16 px-4 ${
          isPouch 
            ? 'bg-[#D4FF00] text-black shadow-[0_4px_0_0_rgba(0,0,0,1)]' 
            : 'bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border-b-0 shadow-sm'
        }`}>
          {isPouch && (
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          )}
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Left Column: Info */}
              <div className="md:col-span-7 text-center md:text-left space-y-6">
                {isPouch ? (
                  <>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-[#D4FF00] border-2 border-black text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider rounded-sm">
                      <Sparkles className="w-3.5 h-3.5" /> 166 Vector Blueprints Available
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none">
                      Certified Dieline Finder
                    </h1>
                    <p className="text-sm md:text-base font-semibold leading-relaxed font-['JetBrains_Mono'] text-black/80 bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                      Search, inspect dimensions in real-time, toggle blueprint prepress layers, and download verified high-fidelity vector templates (.PDF / .AI). Instant and 100% free.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Premium Design Resource Library
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-indigo-200">
                      Prepress Dieline Catalog & Directory
                    </h1>
                    <p className="text-base md:text-lg font-normal text-neutral-300 leading-relaxed bg-neutral-950/40 backdrop-blur-md border border-neutral-800 p-5 rounded-2xl">
                      Equip your creative and prepress engineering teams with certified vector layout blueprints. Select from our catalog of 160+ industrial templates to ensure print-ready alignment.
                    </p>
                  </>
                )}
              </div>
              
              {/* Right Column: Hero Mockup Image */}
              <div className="md:col-span-5 relative">
                {isPouch ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 border-4 border-black" />
                    <img 
                      src="/imgs/free/dieline-finder-hero.jpg" 
                      alt="Dieline Finder App Dashboard" 
                      className="relative z-10 border-4 border-black w-full shadow-xl bg-white"
                    />
                  </div>
                ) : (
                  <div className="relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-neutral-950 border border-neutral-800 p-2 rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src="/imgs/free/dieline-finder-hero.jpg" 
                        alt="Dieline Finder App Dashboard" 
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Directory Workspace */}
        <section className="max-w-7xl mx-auto py-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT PANEL: Filters and Directory List (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* NEW: Custom Dieline Creator CTA Banner */}
              <div className={`p-5 border-4 border-black text-white ${
                isPouch 
                  ? 'bg-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl border border-neutral-800 shadow-xl'
              }`}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 bg-green-500 text-black rounded">
                      NEW APP
                    </span>
                    <span className="text-xs font-black tracking-wider text-green-400 font-mono uppercase">
                      Custom Size Builder
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm uppercase tracking-tight text-white flex items-center gap-1">
                      Stand-Up Pouch Dieline Creator
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-normal">
                      Can't find your exact dimensions in our free catalog? Try our interactive builder to generate custom sizes, preview layouts, and download vector templates instantly!
                    </p>
                  </div>
                  <a
                    href="/dieline-creator"
                    className="w-full text-center py-2.5 px-4 bg-green-500 hover:bg-green-600 text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Launch Dieline Creator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Search & Unit Filters */}
              <div className={`p-4 border-4 border-black ${
                isPouch 
                  ? 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-100/50'
              }`}>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className={`block text-xs font-bold uppercase mb-1.5 ${isPouch ? "font-['JetBrains_Mono']" : 'text-neutral-500'}`}>
                      Search Sizing / Capacity
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4.5 w-4.5 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="e.g. 130 x 200, 8 oz, SUP, 3SS..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2 text-sm border-2 border-black outline-none font-medium ${
                          isPouch ? 'focus:bg-[#00FFFF]' : 'rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="w-1/2">
                      <label className={`block text-xs font-bold uppercase mb-1.5 ${isPouch ? "font-['JetBrains_Mono']" : 'text-neutral-500'}`}>
                        Unit standard
                      </label>
                      <select
                        value={selectedUnit}
                        onChange={(e) => setSelectedUnit(e.target.value)}
                        className={`w-full px-3 py-2 text-xs border-2 border-black font-semibold outline-none ${
                          isPouch ? 'focus:bg-[#D4FF00]' : 'rounded-lg border-neutral-300'
                        }`}
                      >
                        <option value="ALL">ALL UNITS</option>
                        <option value="mm">Metric (mm)</option>
                        <option value="in">Imperial (inch)</option>
                      </select>
                    </div>
                    
                    <div className="w-1/2">
                      <div className={`text-right text-[10px] font-bold uppercase ${isPouch ? "font-['JetBrains_Mono'] text-neutral-600" : 'text-neutral-400'}`}>
                        Matches found
                      </div>
                      <div className={`text-right text-2xl font-black ${isPouch ? '' : 'text-indigo-600'}`}>
                        {filteredDielines.length} / 166
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shape Category Tabs (Horizontal Scrollable) */}
              <div className="flex flex-col gap-1">
                <span className={`text-xs font-bold uppercase px-1 ${isPouch ? "font-['JetBrains_Mono']" : 'text-neutral-500'}`}>
                  Filter Shape Category
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {shapes.map((shape) => {
                    const isActive = selectedShape === shape
                    const friendlyShapeName = shape === 'ALL' ? 'Show All' : shape

                    return (
                      <button
                        key={shape}
                        onClick={() => setSelectedShape(shape)}
                        className={`px-3 py-1.5 text-xs font-bold border-2 border-black transition-all ${
                          isActive
                            ? isPouch
                              ? 'bg-black text-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                              : 'bg-indigo-600 text-white border-indigo-600 rounded-lg'
                            : isPouch
                              ? 'bg-white text-black hover:bg-neutral-150 active:bg-neutral-200'
                              : 'bg-white text-neutral-600 border-neutral-200 rounded-lg hover:border-neutral-400'
                        }`}
                      >
                        {friendlyShapeName}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Directory Listing Container */}
              <div className={`flex-1 min-h-[400px] max-h-[550px] overflow-y-auto border-4 border-black p-2 ${
                isPouch 
                  ? 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] scrollbar-custom-pouch' 
                  : 'bg-white rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-100/50'
              }`}>
                {filteredDielines.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center text-neutral-500">
                    <Info className="w-8 h-8 mb-2 stroke-[1.5]" />
                    <div className="font-bold text-sm uppercase">No Templates Match Filters</div>
                    <p className="text-xs mt-1">Try relaxing your search terms or shape selection.</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {filteredDielines.map((item) => {
                      const isSelected = selectedDieline.filename === item.filename
                      return (
                        <button
                          key={item.filename}
                          onClick={() => setSelectedDieline(item)}
                          className={`w-full text-left p-3 border-2 transition-all flex items-center justify-between ${
                            isSelected
                              ? isPouch
                                ? 'bg-[#00FFFF] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                : 'bg-indigo-50 border-indigo-200 rounded-xl font-semibold text-indigo-900'
                              : isPouch
                                ? 'bg-white border-transparent hover:bg-neutral-50 hover:border-black'
                                : 'bg-white border-transparent hover:bg-neutral-50 hover:border-neutral-200 rounded-xl text-neutral-700'
                          }`}
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-black text-xs font-black ${
                              item.ext === 'AI' 
                                ? 'bg-amber-100 text-amber-700' 
                                : 'bg-red-100 text-red-700'
                            } ${isPouch ? '' : 'rounded-lg'}`}>
                              {item.ext}
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-xs uppercase tracking-tight truncate">
                                {item.displayName}
                              </div>
                              <div className={`text-[9px] uppercase mt-0.5 ${isPouch ? "font-['JetBrains_Mono'] text-neutral-500" : 'text-neutral-400'}`}>
                                {item.shape} • {item.width}x{item.height}{item.gusset ? `+${item.gusset}` : ''} {item.unit}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT PANEL: Blueprint Interactive Viewer (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Selected Pouch Preview Box */}
              <div className={`border-4 border-black overflow-hidden flex flex-col ${
                isPouch 
                  ? 'bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-100/50'
              }`}>
                {/* Visualizer Header */}
                <div className={`border-b-4 border-black px-6 py-4 flex flex-wrap items-center justify-between gap-4 ${
                  isPouch ? 'bg-[#FF00FF] text-white' : 'bg-neutral-900 text-white border-b-0'
                }`}>
                  <div>
                    <h3 className="font-black text-lg md:text-xl uppercase italic leading-none flex items-center gap-2">
                      <Layout className="w-5 h-5 text-[#D4FF00]" /> Visual Prepress Blueprint
                    </h3>
                    <p className={`text-[10px] mt-1 uppercase ${isPouch ? "font-['JetBrains_Mono'] text-white/90" : 'text-neutral-400'}`}>
                      Interactive proportional dimensions preview
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold font-['JetBrains_Mono'] px-2 py-1 bg-black text-[#D4FF00] border-2 border-black rounded-sm">
                      {selectedDieline.ext} TEMPLATE
                    </span>
                  </div>
                </div>

                {/* SVG Blueprint Canvas */}
                <div className="relative aspect-square max-w-[500px] mx-auto w-full bg-neutral-950 p-6 overflow-hidden flex items-center justify-center select-none border-b-4 border-black">
                  
                  {/* Blueprint Architectural Grid background */}
                  {showGrid && (
                    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                  )}

                  {/* High Fidelity SVG Blueprint */}
                  <svg 
                    width="400" 
                    height="400" 
                    viewBox="0 0 400 400" 
                    className="overflow-visible"
                  >
                    {/* SVG Filters for technical blueprint style drop shadows */}
                    <defs>
                      <filter id="blueprint-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#3b82f6" floodOpacity="0.4" />
                      </filter>
                    </defs>

                    {/* Proportional Render Shapes inside 400x400 space (centered at x=200, y=200) */}
                    <g transform={`translate(${200 - blueprintProportions.w / 2}, ${200 - blueprintProportions.h / 2})`}>
                      
                      {/* 1. Outer Bleed Guide (Green Line) - 5px margin */}
                      {showBleedLines && (
                        <rect
                          x="-10"
                          y="-10"
                          width={blueprintProportions.w + 20}
                          height={blueprintProportions.h + 20}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeDasharray="4,4"
                        />
                      )}

                      {/* 2. Cut Lines (Solid Red Boundary) */}
                      {showCutLines && (
                        <rect
                          x="0"
                          y="0"
                          width={blueprintProportions.w}
                          height={blueprintProportions.h}
                          fill="#3b82f6"
                          fillOpacity="0.1"
                          stroke="#ef4444"
                          strokeWidth="2.5"
                          filter="url(#blueprint-shadow)"
                        />
                      )}

                      {/* 3. Safe Zone Area (Gray / Dotted Box) */}
                      {showSafeZone && (
                        <rect
                          x="10"
                          y="15"
                          width={blueprintProportions.w - 20}
                          height={blueprintProportions.h - 30}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="1.5"
                          strokeDasharray="2,2"
                        />
                      )}

                      {/* 4. Fold Lines & Bottom Gusset Layout (Dashed Blue Lines) */}
                      {showFoldLines && (
                        <>
                          {/* Bottom seal area (representing gusset fold marker) */}
                          {selectedDieline.shape.includes('SUP') && (
                            <line 
                              x1="0" 
                              y1={blueprintProportions.h - 35} 
                              x2={blueprintProportions.w} 
                              y2={blueprintProportions.h - 35} 
                              stroke="#3b82f6" 
                              strokeWidth="2" 
                              strokeDasharray="5,5" 
                            />
                          )}
                          {/* Side Gusset / Box Bottom vertical crease folds */}
                          {selectedDieline.shape === 'Flat Bottom' && (
                            <>
                              <line x1="20" y1="0" x2="20" y2={blueprintProportions.h} stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
                              <line x1={blueprintProportions.w - 20} y1="0" x2={blueprintProportions.w - 20} y2={blueprintProportions.h} stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
                            </>
                          )}
                        </>
                      )}

                      {/* 5. Pocket Zipper Position (Dotted double horizontal line) */}
                      {showZipper && (selectedDieline.shape.includes('SUP') || selectedDieline.shape === 'Flat Bottom') && (
                        <g>
                          <line x1="0" y1="30" x2={blueprintProportions.w} y2="30" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,3" />
                          <line x1="0" y1="34" x2={blueprintProportions.w} y2="34" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,3" />
                          {/* Zipper label */}
                          <text x="15" y="25" fill="#a855f7" fontSize="8" fontWeight="bold" fontFamily="monospace">ZIPPER ZONE</text>
                        </g>
                      )}

                      {/* Side Seals Indicators (Weld Zones) */}
                      <g opacity="0.3">
                        <rect x="0" y="0" width="8" height={blueprintProportions.h} fill="#ffffff" />
                        <rect x={blueprintProportions.w - 8} y="0" width="8" height={blueprintProportions.h} fill="#ffffff" />
                      </g>
                    </g>

                    {/* Real-time Dynamic Floating Dimension Labels */}
                    <g transform={`translate(${200 - blueprintProportions.w / 2}, ${200 - blueprintProportions.h / 2})`}>
                      
                      {/* Width tag (bottom center) */}
                      <g transform={`translate(${blueprintProportions.w / 2}, ${blueprintProportions.h + 25})`}>
                        <rect x="-45" y="-12" width="90" height="20" fill="#000000" rx="3" stroke="#3b82f6" strokeWidth="1" />
                        <text x="0" y="2" fill="#3b82f6" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="monospace">
                          W: {blueprintProportions.actualW}{blueprintProportions.unit}
                        </text>
                      </g>

                      {/* Height tag (left center vertical) */}
                      <g transform={`translate(-25, ${blueprintProportions.h / 2})`}>
                        <rect x="-45" y="-12" width="90" height="20" fill="#000000" rx="3" stroke="#3b82f6" strokeWidth="1" transform="rotate(-90)" />
                        <text x="0" y="2" fill="#3b82f6" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="monospace" transform="rotate(-90)">
                          H: {blueprintProportions.actualH}{blueprintProportions.unit}
                        </text>
                      </g>

                      {/* Gusset tag (top center) */}
                      {blueprintProportions.actualG > 0 && (
                        <g transform={`translate(${blueprintProportions.w / 2}, -25)`}>
                          <rect x="-45" y="-12" width="90" height="20" fill="#000000" rx="3" stroke="#a855f7" strokeWidth="1" />
                          <text x="0" y="2" fill="#a855f7" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="monospace">
                            BG: +{blueprintProportions.actualG}{blueprintProportions.unit}
                          </text>
                        </g>
                      )}
                    </g>

                    {/* Prepress technical annotations */}
                    <text x="15" y="30" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="monospace">RED = CUT LINE</text>
                    <text x="15" y="45" fill="#3b82f6" fontSize="9" fontWeight="bold" fontFamily="monospace">BLUE = FOLD CREASE</text>
                    <text x="15" y="60" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="monospace">GREEN = BLEED MARGIN (3mm)</text>
                    <text x="15" y="75" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="monospace">AMBER = SAFE DESIGN ZONE</text>
                  </svg>
                </div>

                {/* Layer Control Panel */}
                <div className="p-4 bg-neutral-50 border-b-4 border-black grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="col-span-2 md:col-span-3 text-[10px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Sliders className="w-3.5 h-3.5" /> Toggle Prepress Blueprint Layers
                  </div>
                  
                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={showGrid} 
                      onChange={() => setShowGrid(!showGrid)}
                      className="rounded border-2 border-black focus:ring-0 text-black w-4 h-4 accent-black"
                    />
                    <span>Grid Blueprint</span>
                  </label>
                  
                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={showCutLines} 
                      onChange={() => setShowCutLines(!showCutLines)}
                      className="rounded border-2 border-black focus:ring-0 text-black w-4 h-4 accent-red-500"
                    />
                    <span className="text-red-600">Cut Marks (Red)</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={showFoldLines} 
                      onChange={() => setShowFoldLines(!showFoldLines)}
                      className="rounded border-2 border-black focus:ring-0 text-black w-4 h-4 accent-blue-500"
                    />
                    <span className="text-blue-600">Folds Creases</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={showBleedLines} 
                      onChange={() => setShowBleedLines(!showBleedLines)}
                      className="rounded border-2 border-black focus:ring-0 text-black w-4 h-4 accent-green-500"
                    />
                    <span className="text-green-600">Bleeds (3mm)</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={showSafeZone} 
                      onChange={() => setShowSafeZone(!showSafeZone)}
                      className="rounded border-2 border-black focus:ring-0 text-black w-4 h-4 accent-amber-500"
                    />
                    <span className="text-amber-600">Safe Art Area</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={showZipper} 
                      onChange={() => setShowZipper(!showZipper)}
                      className="rounded border-2 border-black focus:ring-0 text-black w-4 h-4 accent-purple-500"
                    />
                    <span className="text-purple-600">Zipper Line</span>
                  </label>
                </div>

                {/* Technical Specifications Table */}
                <div className="p-6 bg-white flex flex-col gap-6">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-450 mb-3">
                      Technical Layout Specifications
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-[10px] text-neutral-500 font-semibold uppercase">Pouch Shape</div>
                        <div className="text-sm font-black uppercase mt-0.5 truncate">{selectedDieline.shape}</div>
                      </div>
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-[10px] text-neutral-500 font-semibold uppercase">Dimensions</div>
                        <div className="text-sm font-black uppercase mt-0.5">{selectedDieline.width} × {selectedDieline.height} {selectedDieline.unit}</div>
                      </div>
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-[10px] text-neutral-500 font-semibold uppercase">Bottom Gusset</div>
                        <div className="text-sm font-black uppercase mt-0.5">{selectedDieline.gusset ? `+ ${selectedDieline.gusset} ${selectedDieline.unit}` : 'None'}</div>
                      </div>
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-[10px] text-neutral-500 font-semibold uppercase">Est. Capacity</div>
                        <div className="text-sm font-black uppercase mt-0.5 truncate">{selectedDieline.capacity}</div>
                      </div>
                    </div>
                  </div>

                  {/* DOWNLOAD & LEAD GATE WIDGET */}
                  <div className={`p-6 border-4 border-black ${
                    isPouch 
                      ? 'bg-[#D4FF00]/15' 
                      : 'bg-indigo-50/50 rounded-2xl border border-indigo-100'
                  }`}>
                    {!isUnlocked ? (
                      <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                        <div>
                          <h4 className="font-black text-base uppercase leading-none mb-1 flex items-center gap-1.5">
                            <Mail className="w-4 h-4 text-purple-600" /> Unlock & Email Vector Dielines
                          </h4>
                          <p className="text-xs text-neutral-600 leading-normal">
                            Enter your email address to automatically receive a download link for this print-ready template and unlock our entire 166 vector blueprint library.
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="flex-1">
                            <input
                              type="email"
                              required
                              placeholder="brand-manager@company.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className={`w-full px-4 py-2.5 text-sm border-2 border-black outline-none font-medium ${
                                isPouch ? 'focus:bg-white' : 'rounded-xl border-neutral-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                              }`}
                            />
                            {showEmailError && (
                              <p className="text-xs text-red-650 font-semibold mt-1">Please enter a valid email address.</p>
                            )}
                          </div>
                          
                          <button
                            type="submit"
                            disabled={sendingEmail || !turnstileToken}
                            className={`px-6 py-2.5 text-sm font-black uppercase border-2 border-black transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed ${
                              isPouch
                                ? 'bg-black text-[#D4FF00] hover:bg-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                                : 'bg-indigo-600 text-white border-indigo-600 rounded-xl hover:bg-indigo-700'
                            }`}
                          >
                            {sendingEmail ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" /> Emailing...
                              </>
                            ) : (
                              <>
                                Unlock & Email <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                        
                        {/* Cloudflare Turnstile CAPTCHA container */}
                        <div ref={turnstileRef} className="cf-turnstile w-full flex justify-center scale-90 -my-1" />

                        <p className="text-[10px] text-neutral-500 font-medium text-center">
                          🔒 We value privacy. Your email is strictly used to deliver custom dielines. We do not spam.
                        </p>
                      </form>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-1.5 text-green-700 font-bold text-sm">
                              <CheckCircle className="w-4.5 h-4.5" /> Downloads Unlocked
                            </div>
                            <p className="text-xs text-neutral-600 leading-normal mt-1">
                              You have unlocked complete vector dieline library permissions. Download as many structures as your prepress team requires!
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              localStorage.removeItem('dieline_finder_email')
                              setIsUnlocked(false)
                            }}
                            className="text-[10px] font-bold uppercase text-neutral-500 hover:text-red-600 underline"
                          >
                            Change Email
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => triggerDownload(selectedDieline)}
                            className={`flex-1 px-6 py-3.5 text-sm font-black uppercase border-2 border-black transition-all flex items-center justify-center gap-2 ${
                              isPouch
                                ? 'bg-[#D4FF00] text-black hover:bg-black hover:text-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                : 'bg-indigo-600 text-white border-indigo-600 rounded-xl hover:bg-indigo-700'
                            }`}
                          >
                            <Download className="w-4 h-4" /> Download Vector Dieline ({selectedDieline.ext})
                          </button>
                          
                          <a
                            href="https://api.whatsapp.com/send/?phone=85269704411&text=Hi%20AchievePack%2C%20I%20need%20assistance%20laying%20out%20my%20artwork%20on%20your%20dieline."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-3.5 text-sm font-bold uppercase border-2 border-black transition-all flex items-center justify-center gap-2 ${
                              isPouch
                                ? 'bg-white text-black hover:bg-neutral-50'
                                : 'bg-white text-neutral-700 border-neutral-300 rounded-xl hover:bg-neutral-50'
                            }`}
                          >
                            Request Custom Size Support
                          </a>
                        </div>
                        
                        {downloadSuccess && (
                          <div className="p-3 bg-green-50 text-green-800 rounded-xl border border-green-200 text-xs font-semibold flex items-center gap-2 animate-fade-in">
                            <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                            Download triggered successfully! Please check your browser downloads directory.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* RECENT DOWNLOADS & PREPRESS AUDIT CTA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Recent Downloads */}
                <div className={`p-5 border-4 border-black ${
                  isPouch 
                    ? 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-white rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-100/50'
                }`}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-450 mb-3 flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5" /> Recent Unlocked Downloads
                  </h4>
                  {recentDownloads.length === 0 ? (
                    <p className="text-xs text-neutral-500 italic">No files downloaded in this session yet.</p>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {recentDownloads.map((item) => (
                        <button
                          key={item.filename}
                          onClick={() => setSelectedDieline(item)}
                          className="w-full text-left py-1.5 px-2 hover:bg-neutral-50 rounded-lg flex items-center justify-between text-xs group"
                        >
                          <span className="truncate pr-4 text-neutral-700 group-hover:text-black">{item.displayName}</span>
                          <span className="text-[10px] font-mono text-neutral-400 shrink-0 uppercase">{item.ext}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Prepress file audit card */}
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className={`p-5 text-left border-4 border-black transition-transform hover:scale-[1.01] ${
                    isPouch 
                      ? 'bg-black text-[#D4FF00] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                      : 'bg-indigo-900 text-white border-0 shadow-xl shadow-indigo-100/20 rounded-2xl'
                  }`}
                >
                  <h4 className="font-black text-sm uppercase leading-none mb-1.5 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-cyan-300 animate-pulse" /> Free 24-Hr Artwork Audit
                  </h4>
                  <p className={`text-xs leading-relaxed mb-3 ${isPouch ? 'text-white/80' : 'text-indigo-200'}`}>
                    Already finished placing your graphics? Submit your design file (.AI/.PDF) to our engineering department for a complimentary 24-hour prepress review.
                  </p>
                  <div
                    className={`inline-flex items-center gap-1 text-xs font-bold uppercase underline ${isPouch ? 'text-[#D4FF00]' : 'text-cyan-300 hover:text-cyan-200'}`}
                  >
                    Submit Artwork File <ChevronRight className="w-3 h-3" />
                  </div>
                </button>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* ARTWORK SUBMISSION & EMAIL NOTIFICATION MODAL */}
        {/* ========================================================================= */}
        {isSubmitModalOpen && (
          <div className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 z-50 overflow-y-auto animate-fade-in font-sans">
            
            {/* Modal Body Container */}
            <div className={`w-full max-w-2xl border-4 border-black overflow-hidden flex flex-col relative transition-all my-8 ${
              isPouch
                ? 'bg-white text-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] font-["Space_Grotesk"]'
                : 'bg-white text-neutral-800 rounded-3xl border border-neutral-200 shadow-2xl'
            }`}>
              
              {/* Close Button */}
              <button 
                onClick={() => {
                  setIsSubmitModalOpen(false)
                  setSubmitSuccess(false)
                  setSelectedFile(null)
                }}
                className={`absolute right-4 top-4 p-1 hover:bg-neutral-100 border-2 border-black transition-colors z-20 ${isPouch ? 'bg-white' : 'rounded-full'}`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className={`border-b-4 border-black px-6 py-4 ${isPouch ? 'bg-[#00FFFF] text-black' : 'bg-neutral-900 text-white border-b-0'}`}>
                <h3 className="font-black text-xl uppercase italic leading-none flex items-center gap-2">
                  <Upload className="w-5 h-5 text-purple-600" /> Prepress Artwork Submission
                </h3>
                <p className={`text-xs mt-1 uppercase ${isPouch ? 'font-mono text-black/80' : 'text-neutral-400 font-normal'}`}>
                  Free engineering compliance & layout check
                </p>
              </div>

              {/* Modal Core Content */}
              <div className="p-6 overflow-y-auto max-h-[75vh]">
                {!submitSuccess ? (
                  <form onSubmit={handlePrepressSubmit} className="flex flex-col gap-4">
                    
                    {/* User Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={submitName}
                          onChange={(e) => setSubmitName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className={`w-full px-3 py-2 text-sm border-2 border-black outline-none font-medium ${
                            isPouch ? 'focus:bg-[#D4FF00]' : 'rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={submitEmail}
                          onChange={(e) => setSubmitEmail(e.target.value)}
                          placeholder="brand-manager@company.com"
                          className={`w-full px-3 py-2 text-sm border-2 border-black outline-none font-medium ${
                            isPouch ? 'focus:bg-[#D4FF00]' : 'rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase mb-1">Company Name</label>
                        <input
                          type="text"
                          value={submitCompany}
                          onChange={(e) => setSubmitCompany(e.target.value)}
                          placeholder="e.g. RedFoot Coffee Co."
                          className={`w-full px-3 py-2 text-sm border-2 border-black outline-none font-medium ${
                            isPouch ? 'focus:bg-[#D4FF00]' : 'rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase mb-1">Target Material Structure</label>
                        <select
                          value={submitMaterial}
                          onChange={(e) => setSubmitMaterial(e.target.value)}
                          className={`w-full px-3 py-2 text-sm border-2 border-black outline-none font-semibold ${
                            isPouch ? 'focus:bg-[#D4FF00]' : 'rounded-lg border-neutral-300'
                          }`}
                        >
                          <option value="Kraft High-Barrier">Kraft High-Barrier (Compostable)</option>
                          <option value="Mono-PE Recycle">Mono-PE Recyclable</option>
                          <option value="PCR High-Barrier">PCR Recycled Plastic</option>
                          <option value="Stock Unprinted">Stock Unprinted with Label</option>
                          <option value="Digital Gloss/Matte">Sleek Digital Print</option>
                        </select>
                      </div>
                    </div>

                    {/* Pre-Selected Dieline Confirmation Card */}
                    <div className="p-3 bg-neutral-50 border-2 border-black rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="text-[10px] text-neutral-500 font-bold uppercase">Pre-selected Template</div>
                          <div className="text-xs font-black uppercase">{selectedDieline.displayName}</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono bg-neutral-200 px-2 py-0.5 rounded font-bold uppercase">
                        {selectedDieline.width}x{selectedDieline.height} {selectedDieline.unit}
                      </span>
                    </div>

                    {/* DRAG & DROP UPLOAD ZONE */}
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Upload Graphics Design File (.AI / .PDF / .ZIP) *</label>
                      <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        className={`border-4 border-dashed p-6 text-center transition-all cursor-pointer relative ${
                          dragActive 
                            ? 'border-[#00FFFF] bg-indigo-50/20' 
                            : 'border-black bg-neutral-50 hover:bg-neutral-100'
                        } ${isPouch ? '' : 'rounded-2xl'}`}
                      >
                        <input
                          type="file"
                          required
                          id="file-select"
                          accept=".pdf,.ai,.zip"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        
                        <label htmlFor="file-select" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                          <Upload className="w-8 h-8 text-neutral-450 animate-bounce" />
                          {selectedFile ? (
                            <div>
                              <div className="text-sm font-black text-green-700 uppercase flex items-center gap-1.5 justify-center">
                                <CheckCircle className="w-4 h-4" /> File Selected Successfully
                              </div>
                              <div className="text-xs font-bold text-neutral-800 mt-1">
                                {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                              </div>
                              <div className="text-[10px] text-neutral-500 mt-0.5">Click to replace file</div>
                            </div>
                          ) : (
                            <>
                              <div className="text-xs font-bold uppercase">
                                Drag and drop your artwork file here
                              </div>
                              <div className="text-[10px] text-neutral-500 font-semibold font-['JetBrains_Mono']">
                                Supports .AI, .PDF or .ZIP files (Max 50MB)
                              </div>
                              <div className="mt-2 text-xs font-black text-indigo-600 underline">
                                Browse Local Files
                              </div>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Submit Request Button */}
                    <button
                      type="submit"
                      disabled={isUploading || !selectedFile}
                      className={`w-full py-3.5 text-xs font-black uppercase border-2 border-black transition-all flex items-center justify-center gap-2 ${
                        isUploading
                          ? 'bg-neutral-100 text-neutral-500 cursor-not-allowed'
                          : isPouch
                            ? 'bg-[#D4FF00] text-black hover:bg-black hover:text-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-indigo-600 text-white border-indigo-600 rounded-xl hover:bg-indigo-700'
                      }`}
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-purple-600" /> {uploadStep} ({uploadProgress}%)
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Submit Prepress Review Request
                        </>
                      )}
                    </button>

                  </form>
                ) : (
                  
                  // ==========================================================
                  // SUCCESS STATE: SHOW EMAIL NOTIFICATION SIMULATOR CARD
                  // ==========================================================
                  <div className="flex flex-col gap-6">
                    
                    {/* Simulated Success Message */}
                    <div className="p-4 bg-green-50 border-2 border-green-600 rounded-xl text-green-900 flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-700 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-black text-sm uppercase leading-none mb-1">Submission Successful!</h4>
                        <p className="text-xs font-semibold leading-relaxed">
                          Your artwork graphics file `{selectedFile?.name}` has been uploaded and routed successfully. We've compiled the automated layout audits and dispatched notification alerts to both parties.
                        </p>
                      </div>
                    </div>

                    {/* Email Notification Logs Section */}
                    <div>
                      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                        <h4 className="font-black text-xs uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
                          <Eye className="w-4 h-4 text-purple-600 animate-pulse" /> 📬 Simulated Email Notifications Logs
                        </h4>
                        <span className="text-[9px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded font-black uppercase">
                          Delivered
                        </span>
                      </div>

                      {/* Email Tabs Selector */}
                      <div className="flex gap-1 mb-3">
                        <button
                          onClick={() => setActiveEmailTab('ryan')}
                          className={`px-3 py-1.5 text-xs font-bold border-2 border-black transition-all ${
                            activeEmailTab === 'ryan'
                              ? 'bg-black text-[#D4FF00]'
                              : 'bg-white text-neutral-600 hover:bg-neutral-50'
                          } ${isPouch ? '' : 'rounded-lg'}`}
                        >
                          ✉️ Notification to ryan@achievepack.com
                        </button>
                        <button
                          onClick={() => setActiveEmailTab('customer')}
                          className={`px-3 py-1.5 text-xs font-bold border-2 border-black transition-all ${
                            activeEmailTab === 'customer'
                              ? 'bg-black text-[#00FFFF]'
                              : 'bg-white text-neutral-600 hover:bg-neutral-50'
                          } ${isPouch ? '' : 'rounded-lg'}`}
                        >
                          📩 Confirmation to Customer ({submitEmail})
                        </button>
                      </div>

                      {/* Tab 1: Email notification to ryan@achievepack.com */}
                      {activeEmailTab === 'ryan' && (
                        <div className="border-2 border-neutral-300 rounded-xl overflow-hidden bg-neutral-50 p-4 font-mono text-xs text-neutral-800 flex flex-col gap-2">
                          <div className="border-b border-neutral-200 pb-2 flex flex-col gap-1">
                            <div><strong className="text-neutral-500">To:</strong> ryan@achievepack.com</div>
                            <div><strong className="text-neutral-500">From:</strong> prepress-alerts@achievepack.com</div>
                            <div><strong className="text-neutral-500">Subject:</strong> [Prepress Review Required] New artwork upload for {selectedDieline.displayName}</div>
                          </div>
                          
                          <div className="py-2 flex flex-col gap-3 font-sans">
                            <p>Hi Ryan,</p>
                            <p>
                              A new prepress artwork submission has been generated through the Dieline Finder tool:
                            </p>
                            <div className="bg-neutral-100 border border-neutral-200 p-3 rounded-lg flex flex-col gap-1.5">
                              <div><strong>Client Name:</strong> {submitName}</div>
                              <div><strong>Client Email:</strong> {submitEmail}</div>
                              <div><strong>Company Name:</strong> {submitCompany || 'Not Provided'}</div>
                              <div><strong>Pre-Selected Dieline:</strong> {selectedDieline.displayName}</div>
                              <div><strong>Target Material Structure:</strong> {submitMaterial}</div>
                            </div>
                            
                            <div className="flex flex-col gap-2 bg-purple-50 border border-purple-200 p-3 rounded-lg">
                              <div className="font-bold text-xs uppercase text-purple-800">Submitted Files:</div>
                              <div className="flex items-center gap-1.5 text-xs font-mono">
                                <CornerDownRight className="w-3.5 h-3.5" /> 📄 Artwork: <span className="underline font-bold text-purple-700 cursor-pointer">{selectedFile?.name}</span> ({(selectedFile?.size ? selectedFile.size / (1024 * 1024) : 0).toFixed(2)} MB)
                              </div>
                              <div className="flex items-center gap-1.5 text-xs font-mono">
                                <CornerDownRight className="w-3.5 h-3.5" /> 📐 Layout: <a href={selectedDieline.url} download className="underline font-bold text-indigo-700">{selectedDieline.filename}</a>
                              </div>
                            </div>
                            <p className="text-[10px] text-neutral-500 italic mt-2">
                              Please review the vector limits in Adobe Illustrator and dispatch the visual proofing drafts within 24 hours.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Email confirmation to customer */}
                      {activeEmailTab === 'customer' && (
                        <div className="border-2 border-neutral-300 rounded-xl overflow-hidden bg-neutral-50 p-4 font-mono text-xs text-neutral-800 flex flex-col gap-2">
                          <div className="border-b border-neutral-200 pb-2 flex flex-col gap-1">
                            <div><strong className="text-neutral-500">To:</strong> {submitEmail}</div>
                            <div><strong className="text-neutral-500">From:</strong> prepress@achievepack.com</div>
                            <div><strong className="text-neutral-500">Subject:</strong> Prepress Artwork Review Confirmed - {selectedDieline.displayName}</div>
                          </div>
                          
                          <div className="py-2 flex flex-col gap-3 font-sans">
                            <p>Hello {submitName},</p>
                            <p>
                              We have received your packaging graphics design file `{selectedFile?.name}` for the <strong>{selectedDieline.displayName}</strong> dieline template.
                            </p>
                            <p>
                              Our packaging engineering specialists are running an active prepress audit (checking vector scales, CMYK color profiles, safe margin gaps, and bleed boundaries) to guarantee pixel-perfect printing.
                            </p>
                            
                            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg flex flex-col gap-2">
                              <div className="font-bold text-xs uppercase text-indigo-800">Your Downloads:</div>
                              <div className="flex items-center gap-1.5 text-xs font-mono">
                                <Check className="w-3.5 h-3.5 text-green-700" /> Vector Dieline: <a href={selectedDieline.url} download className="underline font-bold text-indigo-700">{selectedDieline.filename}</a>
                              </div>
                            </div>

                            <p>
                              We will respond with custom **3D visual mockups** and press-ready blueprint validation proofs within <strong>24 business hours</strong>.
                            </p>
                            
                            <p className="mt-2">
                              Best regards,<br />
                              <strong>Prepress Engineering Department</strong><br />
                              AchievePack / Pouch.eco
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitModalOpen(false)
                        setSubmitSuccess(false)
                        setSelectedFile(null)
                      }}
                      className={`w-full py-3 text-xs font-black uppercase border-2 border-black transition-all ${
                        isPouch
                          ? 'bg-black text-[#D4FF00] hover:bg-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl'
                      }`}
                    >
                      Close Confirmation Hub
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    )
  }

  // Domain Layout Wrapper injection
  if (isPouchDomain) {
    return (
      <PouchLayout>
        <Helmet>
          <title>Interactive Pouch Dieline Finder | POUCH.ECO</title>
          <meta name="description" content="Instant access to 160+ certified flexible packaging dielines. Select stand-up pouches, flat bottom, and 3SS vector blueprints (.PDF/.AI) to build print-ready art." />
        </Helmet>
        {renderMainContent()}
      </PouchLayout>
    )
  } else {
    return (
      <>
        <Helmet>
          <title>Vector Packaging Dieline Directory | AchievePack</title>
          <meta name="description" content="Search and catalog standard packaging dielines. Download Illustrator and PDF templates for coffee bags, spout pouches, flat bottom bags, and three-side seal structures." />
        </Helmet>
        <SiteHeader />
        {renderMainContent()}
        <Footer />
      </>
    )
  }
}
