import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Ruler, Box, Maximize2, Package, Calculator, Settings, ArrowRightLeft, CheckCircle, Eye, X, Layers, ShoppingCart, ArrowRight, Download, Sparkles, Send, Loader2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import SortableSizesTable, { STAND_UP_SIZES, FLAT_BOTTOM_SIZES } from '../../components/SortableSizesTable'
import { DIELINE_CATALOG, type DielineItem } from '../../data/dielineCatalog'

// Volumetric density database for standard B2B packaging products
const PRODUCT_DENSITIES = [
  { id: 'coffee-beans', name: 'Coffee Beans ☕', density: 0.38, unit: 'g/ml', desc: 'Whole roasted specialty coffee beans' },
  { id: 'coffee-ground', name: 'Ground Coffee ☕', density: 0.45, unit: 'g/ml', desc: 'Finely ground coffee powder' },
  { id: 'fine-powder', name: 'Powders / Supplements 💊', density: 0.55, unit: 'g/ml', desc: 'Protein powders, collagen, flour, matcha' },
  { id: 'tea-leaves', name: 'Tea Leaves 🌿', density: 0.15, unit: 'g/ml', desc: 'Loose whole leaf teas' },
  { id: 'pet-food', name: 'Pet Food / Treats 🐕', density: 0.35, unit: 'g/ml', desc: 'Dry kibbles, organic jerky treats' },
  { id: 'granola-oats', name: 'Granola & Oats 🥜', density: 0.42, unit: 'g/ml', desc: 'Granola blends, rolled oats, cereals' },
  { id: 'liquids-gels', name: 'Liquids & Gels 💧', density: 1.0, unit: 'g/ml', desc: 'Purees, sauces, cosmetics, syrups' },
  { id: 'nuts-seeds', name: 'Nuts & Seeds 🌰', density: 0.50, unit: 'g/ml', desc: 'Almonds, cashews, chia, flax seeds' }
];

// Volumetric size brackets matching the Achieve Pack inventory catalog
const POUCH_SIZE_BRACKETS = [
  { code: 'XS', maxVol: 180, dims: '100 × 150 + 60 mm', inDims: '3.9" × 5.9" + 2.4"', label: 'Extra Small (XS)', storeId: 'eco-3side', recommendedDieline: '/dielines/ap-dieline-100x150.pdf' },
  { code: 'S', maxVol: 400, dims: '130 × 200 + 70 mm', inDims: '5.1" × 7.9" + 2.8"', label: 'Small (S)', storeId: 'eco-standup', recommendedDieline: '/dielines/ap-dieline-130x200.pdf' },
  { code: 'M', maxVol: 850, dims: '160 × 230 + 80 mm', inDims: '6.3" × 9.1" + 3.1"', label: 'Medium (M)', storeId: 'eco-standup', recommendedDieline: '/dielines/ap-dieline-160x230.pdf' },
  { code: 'L', maxVol: 1400, dims: '190 × 260 + 90 mm', inDims: '7.5" × 10.2" + 3.5"', label: 'Large (L)', storeId: 'eco-standup', recommendedDieline: '/dielines/ap-dieline-190x260.pdf' },
  { code: 'XL', maxVol: 2800, dims: '230 × 340 + 100 mm', inDims: '9.1" × 13.4" + 3.9"', label: 'Extra Large (XL)', storeId: 'eco-standup', recommendedDieline: '/dielines/ap-dieline-230x340.pdf' },
  { code: 'XXL', maxVol: 99999, dims: '300 × 400 + 120 mm', inDims: '11.8" × 15.7" + 4.7"', label: 'Double Extra Large (XXL)', storeId: 'eco-standup', recommendedDieline: '/dielines/ap-dieline-300x400.pdf' }
];

const REFERENCE_DIMENSIONS: Record<string, { w: number, h: number }> = {
  XS: { w: 100, h: 150 },
  S: { w: 130, h: 200 },
  M: { w: 160, h: 230 },
  L: { w: 190, h: 260 },
  XL: { w: 230, h: 340 },
  XXL: { w: 300, h: 400 }
};

const PouchSizingPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchSizing'

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Sizing Calculator States
  const [productType, setProductType] = useState('coffee-beans')
  const [weightInput, setWeightInput] = useState<number>(250)
  const [weightUnit, setWeightUnit] = useState<'g' | 'oz'>('g')
  const [bagShape, setBagShape] = useState<'stand-up' | 'flat-bottom'>('stand-up')
  const [headspacePercent, setHeadspacePercent] = useState<number>(25)

  // Email Lead Gate & CAPTCHA States
  const [clientEmail, setClientEmail] = useState('')
  const [emailDielineFilename, setEmailDielineFilename] = useState('')
  const [selectedEmailDieline, setSelectedEmailDieline] = useState<DielineItem | null>(null)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const turnstileWidgetId = useRef<string | null>(null)

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

  // Use the newly generated stunning B2B studio reference image as our primary hero
  const heroImage = '/imgs/pouch_size_ref_guide.png'

  // Dynamic Calculator Engine
  const calcResult = useMemo(() => {
    const selectedProd = PRODUCT_DENSITIES.find(p => p.id === productType) || PRODUCT_DENSITIES[0];
    
    // 1. Convert input to grams
    const weightInGrams = weightUnit === 'oz' ? weightInput * 28.3495 : weightInput;
    
    // 2. Compute base volume (ml = g / density)
    const baseVolumeMl = weightInGrams / selectedProd.density;
    
    // 3. Add safety headspace factor (default 25%)
    const totalVolumeMl = baseVolumeMl * (1 + headspacePercent / 100);
    
    // 4. Match the closest catalog size bracket
    const matchedBracket = POUCH_SIZE_BRACKETS.find(b => totalVolumeMl <= b.maxVol) || POUCH_SIZE_BRACKETS[POUCH_SIZE_BRACKETS.length - 1];
    
    // 5. Calculate display ratios for the visual preview outline
    let aspectHeight = 100;
    let aspectWidth = 70;
    let aspectGusset = 25;
    
    if (matchedBracket.code === 'XS') { aspectHeight = 120; aspectWidth = 80; aspectGusset = 20; }
    else if (matchedBracket.code === 'S') { aspectHeight = 140; aspectWidth = 90; aspectGusset = 24; }
    else if (matchedBracket.code === 'M') { aspectHeight = 160; aspectWidth = 110; aspectGusset = 28; }
    else if (matchedBracket.code === 'L') { aspectHeight = 180; aspectWidth = 130; aspectGusset = 32; }
    else if (matchedBracket.code === 'XL') { aspectHeight = 200; aspectWidth = 140; aspectGusset = 36; }
    else if (matchedBracket.code === 'XXL') { aspectHeight = 220; aspectWidth = 160; aspectGusset = 40; }

    return {
      grams: weightInGrams,
      baseVol: baseVolumeMl,
      totalVol: totalVolumeMl,
      size: matchedBracket.code,
      dimensions: matchedBracket.dims,
      inchDims: matchedBracket.inDims,
      sizeLabel: matchedBracket.label,
      storeId: matchedBracket.storeId,
      dieline: matchedBracket.recommendedDieline,
      visuals: {
        h: aspectHeight,
        w: aspectWidth,
        g: aspectGusset
      }
    };
  }, [productType, weightInput, weightUnit, headspacePercent]);

  // Load similar dielines based on current matched sizing code and shape
  const similarDielines = useMemo(() => {
    const shapeFilter = bagShape === 'stand-up' ? 'Stand Up Pouch' : 'Flat Bottom'
    const ref = REFERENCE_DIMENSIONS[calcResult?.size || 'M'] || { w: 160, h: 230 }
    
    return DIELINE_CATALOG
      .filter(item => item.shape === shapeFilter && item.unit === 'mm')
      .map(item => {
        const dist = Math.pow(item.width - ref.w, 2) + Math.pow(item.height - ref.h, 2)
        return { item, dist }
      })
      .sort((a, b) => a.dist - b.dist)
      .map(entry => entry.item)
      .slice(0, 5)
  }, [bagShape, calcResult?.size])

  // Auto-select first matching similar dieline when catalog shifts
  useEffect(() => {
    if (similarDielines.length > 0) {
      const alreadySelected = similarDielines.some(d => d.filename === emailDielineFilename)
      if (!alreadySelected) {
        setSelectedEmailDieline(similarDielines[0])
        setEmailDielineFilename(similarDielines[0].filename)
      }
    } else {
      setSelectedEmailDieline(null)
      setEmailDielineFilename('')
    }
  }, [similarDielines, emailDielineFilename])

  // Prefill email from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('dieline_finder_email')
    if (savedEmail) {
      setClientEmail(savedEmail)
    }
  }, [])

  // Load Cloudflare Turnstile Script Dynamically & Initialize Widget
  useEffect(() => {
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
  }, [calcResult?.size, bagShape])

  const handleEmailDielineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!clientEmail || !turnstileToken || !selectedEmailDieline) return

    setSendingEmail(true)
    try {
      const response = await fetch('/api/send-dieline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: clientEmail,
          dielineFilename: selectedEmailDieline.filename,
          dielineUrl: selectedEmailDieline.url,
          dielineDisplayName: selectedEmailDieline.displayName,
          turnstileToken,
          shape: selectedEmailDieline.shape,
          width: selectedEmailDieline.width,
          height: selectedEmailDieline.height,
          gusset: selectedEmailDieline.gusset,
          unit: selectedEmailDieline.unit,
          capacity: selectedEmailDieline.capacity
        })
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setEmailSuccess(true)
        localStorage.setItem('dieline_finder_email', clientEmail)
      } else {
        alert(result.error || 'Failed to send email.')
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

  const sections = [
    {
      id: 'interactive-calculator',
      title: 'Stand Up Pouch Volume & Sizing Calculator',
      icon: <Calculator className="h-5 w-5 text-primary-600 animate-pulse" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 md:p-8 rounded-2xl border border-neutral-700 text-white shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Input Controls Panel */}
            <div className="flex-1 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-amber-400 flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5" /> {t(`${p}.enterDetails`)}
                </h4>
                <p className="text-xs text-neutral-300">Our algorithm maps volumetric density instantly to compute the perfect envelope size.</p>
              </div>

              {/* Product Category Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">{t(`${p}.whatPackaging`)}</label>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCT_DENSITIES.map(prod => (
                    <button
                      key={prod.id}
                      onClick={() => setProductType(prod.id)}
                      className={`text-left px-3 py-2.5 rounded-xl border text-xs font-medium transition ${
                        productType === prod.id
                          ? 'bg-amber-500 border-amber-400 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20'
                          : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-200'
                      }`}
                    >
                      {prod.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Input Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">{t(`${p}.targetFillWeight`)}</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weightInput}
                      onChange={(e) => setWeightInput(Math.max(1, parseFloat(e.target.value) || 0))}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">{t(`${p}.unit`)}</label>
                  <div className="flex bg-neutral-800 rounded-xl p-1 border border-neutral-700">
                    <button
                      onClick={() => setWeightUnit('g')}
                      className={`flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition ${
                        weightUnit === 'g' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Grams (g)
                    </button>
                    <button
                      onClick={() => setWeightUnit('oz')}
                      className={`flex-1 text-center py-1.5 rounded-lg text-xs font-semibold transition ${
                        weightUnit === 'oz' ? 'bg-neutral-700 text-white' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Ounces (oz)
                    </button>
                  </div>
                </div>
              </div>

              {/* Headspace Control Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{t(`${p}.headspaceAllowance`)}</label>
                  <span className="text-xs font-bold text-amber-400">{headspacePercent}% {t(`${p}.highlyRecommended`)}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={headspacePercent}
                  onChange={(e) => setHeadspacePercent(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>15% (Tight fit)</span>
                  <span>25% (Standard)</span>
                  <span>40% (Loose/Fluffy)</span>
                </div>
              </div>

            </div>

            {/* Live Visual Result Display */}
            <div className="w-full lg:w-[320px] bg-neutral-950 p-6 rounded-xl border border-neutral-700 flex flex-col justify-between items-stretch">
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">{t(`${p}.yourRecommendedSize`)}</span>
                <div className="text-4xl font-extrabold text-amber-400 my-1">{calcResult.size}</div>
                <div className="text-xs text-neutral-400 font-medium">{calcResult.sizeLabel}</div>
              </div>

              {/* Interactive Visual Pouch Model Renders */}
              <div className="my-6 flex items-center justify-center relative min-h-[180px]">
                <div 
                  className="border-2 border-amber-500/80 rounded-2xl relative shadow-2xl transition-all duration-300 flex items-end justify-center overflow-hidden"
                  style={{
                    height: `${calcResult.visuals.h}px`,
                    width: `${calcResult.visuals.w}px`,
                    backgroundColor: 'rgba(245, 158, 11, 0.05)',
                    boxShadow: '0 0 20px rgba(245,158,11,0.1)'
                  }}
                >
                  {/* Internal product level visualization based on density & headspace */}
                  <div 
                    className="w-full bg-gradient-to-t from-amber-600/60 to-amber-500/40 border-t border-amber-400/80 transition-all duration-500"
                    style={{
                      height: `${100 - (headspacePercent * 1.5)}%`
                    }}
                  />
                  {/* Size code badge inside preview */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xl font-bold tracking-widest text-white/10">{calcResult.size}</span>
                  </div>
                  {/* Gusset indicator marker */}
                  <div className="absolute bottom-1 right-2 left-2 border-t border-dashed border-white/20 text-[9px] text-white/40 text-center py-0.5">
                    Gusset: {calcResult.visuals.g}mm
                  </div>
                </div>
              </div>

              {/* Exact Metrics List */}
              <div className="space-y-2 text-xs border-t border-neutral-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t(`${p}.dimensions`)}</span>
                  <span className="font-bold text-neutral-200">{calcResult.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t(`${p}.imperial`)}</span>
                  <span className="font-semibold text-neutral-400">{calcResult.inchDims}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{t(`${p}.requiredVol`)}</span>
                  <span className="font-semibold text-neutral-400">~{Math.round(calcResult.totalVol)} ml</span>
                </div>
              </div>

              {/* Conversion and Sourcing Actions */}
              <div className="mt-5 space-y-2">
                <Link
                  to={`/store/product/${calcResult.storeId}?size=${calcResult.size}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl text-xs transition"
                >
                  <ShoppingCart className="h-4.5 w-4.5" /> Order Eco Pouches Now
                </Link>
                <a
                  href={`${calcResult.dieline}`}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-2 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-neutral-200 font-semibold rounded-xl text-xs transition"
                >
                  <Download className="h-3.5 w-3.5 text-amber-500" /> Download Vector Dieline (.PDF)
                </a>
              </div>

              {/* Interactive Sizing Email Dieline Form */}
              <div className="mt-6 border-t border-neutral-850 pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <Mail className="h-4 w-4" /> Email Dieline Template to Me
                </div>
                
                {/* Similar Dielines Selector */}
                <div className="mb-4">
                  <label className="block text-[10px] uppercase text-neutral-450 font-semibold mb-1.5">Choose Dieline Template</label>
                  <select
                    value={emailDielineFilename}
                    onChange={(e) => {
                      const found = similarDielines.find(d => d.filename === e.target.value)
                      if (found) {
                        setSelectedEmailDieline(found)
                        setEmailDielineFilename(found.filename)
                      }
                    }}
                    className="w-full bg-neutral-900 border border-neutral-750 text-xs rounded-lg px-2.5 py-2 text-white outline-none focus:border-amber-400 transition"
                  >
                    {similarDielines.map((d) => (
                      <option key={d.filename} value={d.filename}>
                        {d.displayName} ({d.width}x{d.height}mm {d.ext})
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Email Form fields */}
                {emailSuccess ? (
                  <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 text-center">
                    <CheckCircle className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-xs font-bold text-emerald-200">Email Sent Successfully!</div>
                    <p className="text-[10px] text-neutral-400 mt-1">We emailed the template link to <strong>{clientEmail}</strong>. Please check your inbox.</p>
                    <button 
                      type="button"
                      onClick={() => setEmailSuccess(false)}
                      className="text-[10px] text-amber-400 font-bold uppercase mt-3 hover:underline"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEmailDielineSubmit} className="space-y-3">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="designer@company.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-750 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition"
                      />
                    </div>
                    
                    {/* Cloudflare Turnstile CAPTCHA container */}
                    <div ref={turnstileRef} className="cf-turnstile w-full flex justify-center scale-90 -my-1" />
                    
                    <button
                      type="submit"
                      disabled={sendingEmail || !turnstileToken}
                      className="w-full flex items-center justify-center gap-1.5 py-2 bg-amber-500 hover:bg-amber-600 disabled:bg-neutral-850 disabled:text-neutral-500 disabled:border-neutral-750 text-neutral-950 font-bold rounded-xl text-xs transition"
                    >
                      {sendingEmail ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" /> Sending Email...
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" /> Email Dieline Template
                        </>
                      )}
                    </button>
                    
                    <p className="text-[9px] text-neutral-500 leading-normal text-center">
                      🔒 We value privacy. Your email is strictly used to deliver custom dielines. We do not spam.
                    </p>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      )
    },
    {
      id: 'all-sizes-overview',
      title: 'Standard Stand Up Pouch Sizes & Capacity Catalog',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-600">Our stock stand up pouches are cataloged in 6 primary sizing standard brackets. Use the filterable matrix below to inspect dimensions, bulk capacities, and dieline templates.</p>
          <SortableSizesTable
            sizes={STAND_UP_SIZES}
            title="Stand Up Pouch Sizes - Sortable & Filterable"
            categoryColor="blue"
            productLink="/store/product/eco-standup"
          />
        </div>
      )
    },
    {
      id: 'flat-bottom-sizes',
      title: 'Flat Bottom Bag / Box Pouch Sizes',
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm text-neutral-600">Flat Bottom Bags utilize an eight-sided box bottom sealing technique that increases filling capacity by up to 30% compared to equivalent flat panels.</p>
          <SortableSizesTable
            sizes={FLAT_BOTTOM_SIZES}
            title="Flat Bottom Bag Sizes - Sortable & Filterable"
            categoryColor="amber"
            productLink="/packaging/flat-bottom-bags"
          />
        </div>
      )
    },
    {
      id: 'understanding-dimensions',
      title: 'Understanding Pouch Dimensions & Structural Folds',
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Choosing the right pouch size is crucial for product presentation, shipping efficiency, and cost optimization.</strong> This guide explains how pouch dimensions work.
          </p>
          
          <div className="bg-primary-50 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">How We Measure Pouches</h4>
            <p className="text-sm mb-3">Dimensions are expressed as <strong>Width × Height + Gusset</strong></p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">Width</span>
                <p className="text-xs text-neutral-600 mt-1">Measured flat, left to right edge</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">Height</span>
                <p className="text-xs text-neutral-600 mt-1">Bottom seal to top seal/zipper</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">Gusset</span>
                <p className="text-xs text-neutral-600 mt-1">Fold depth creating volume (stand up pouches)</p>
              </div>
            </div>
          </div>
          
          {/* Pouch Shape Reference Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Pouch Shape Reference</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch with bottom gusset" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Stand-Up Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" 
                alt="Flat bottom bag with box-shaped base" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Flat Bottom Bag"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp" 
                alt="Three side seal flat pouch" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="3-Side Seal Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" 
                alt="Side gusset pouch for coffee" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Side Gusset"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">Stand Up Pouch</h5>
              <p className="text-sm text-blue-700">Uses bottom gusset to stand upright on shelves. Best for retail display.</p>
              <p className="text-xs text-blue-600 mt-2">Example: 150 × 200 + 80mm</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h5 className="font-semibold text-amber-800 mb-2">Flat Bottom Bag</h5>
              <p className="text-sm text-amber-700">Box-shaped bottom for premium shelf presence and more volume.</p>
              <p className="text-xs text-amber-600 mt-2">Example: 120 × 250 × 70mm</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'size-by-product',
      title: 'Size Selection by Product Type',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Not sure what size you need? Here's our recommendation based on your product:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☕</span>
                <h4 className="font-semibold text-amber-800">Coffee</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>100g / 3.5oz</span>
                  <span className="font-medium text-amber-700">XS</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>250g / 8.8oz</span>
                  <span className="font-medium text-amber-700">S or M</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>500g / 1lb</span>
                  <span className="font-medium text-amber-700">L or XL</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>1kg / 2.2lb</span>
                  <span className="font-medium text-amber-700">XL or XXL</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🥜</span>
                <h4 className="font-semibold text-green-800">Nuts & Snacks</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>50g Sample</span>
                  <span className="font-medium text-green-700">XS</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>100g Retail</span>
                  <span className="font-medium text-green-700">S</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>250g Standard</span>
                  <span className="font-medium text-green-700">M</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>500g Family</span>
                  <span className="font-medium text-green-700">L</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🐕</span>
                <h4 className="font-semibold text-blue-800">Pet Food</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>100g Treats</span>
                  <span className="font-medium text-blue-700">S</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>500g Pack</span>
                  <span className="font-medium text-blue-700">L</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>1kg Bag</span>
                  <span className="font-medium text-blue-700">XL</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>2kg+ Bulk</span>
                  <span className="font-medium text-blue-700">XXL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'unit-conversion',
      title: 'Metric to Imperial Conversion Guide',
      icon: <ArrowRightLeft className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Quick reference for <strong>metric to imperial conversions</strong>:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Millimeters → Inches</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>100mm</span><span className="font-medium text-blue-700">= 3.94 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>150mm</span><span className="font-medium text-blue-700">= 5.91 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>200mm</span><span className="font-medium text-blue-700">= 7.87 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>250mm</span><span className="font-medium text-blue-700">= 9.84 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>300mm</span><span className="font-medium text-blue-700">= 11.81 in</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">Grams → Ounces/Pounds</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>100g</span><span className="font-medium text-emerald-700">= 3.5 oz</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>250g</span><span className="font-medium text-emerald-700">= 8.8 oz</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>500g</span><span className="font-medium text-emerald-700">= 1.1 lb</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>1kg</span><span className="font-medium text-emerald-700">= 2.2 lb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'custom-sizes',
      title: 'Custom Sizes Available',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Cannot find the perfect size? We offer <strong>fully custom dimensions</strong>:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Size Limits</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Width Range:</span>
                  <span className="font-medium">50mm - 500mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Height Range:</span>
                  <span className="font-medium">80mm - 500mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Gusset:</span>
                  <span className="font-medium">Custom depths OK</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-5 rounded-xl border border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-3">MOQ Requirements</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Digital Printing:</span>
                  <span className="font-medium text-primary-700">1,000 pieces</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Plate Printing:</span>
                  <span className="font-medium text-primary-700">5,000 pieces</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Lead Time:</span>
                  <span className="font-medium text-primary-700">+1-2 weeks</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition"
            >
              Request Custom Size Quote
              <Ruler className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'sizing-directory',
      title: 'Pouch Sizing & Format Directory',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Correctly sizing your pouch is only the first step. To understand how different formats compare on the retail shelf, read our guide comparing <Link to="/knowledge/flat-bottom-vs-gusset" className="text-primary-600 font-semibold hover:underline">Flat Bottom vs. Side Gusset Pouches</Link>, or explore the heavy-duty stability characteristics of <Link to="/knowledge/k-seal-stand-up-pouches" className="text-primary-600 font-semibold hover:underline">K-Seal Stand Up Pouches</Link>.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    { 
      question: 'What size pouch do I need for 250g of coffee?', 
      answer: 'For 250g (8.8oz) of roasted coffee beans, we recommend Size M (160 × 230 + 80mm). If your beans are exceptionally light roasted and bulky, Size L (190 × 260 + 90mm) provides superior headspace. Ground coffee can comfortably utilize Size S or M.' 
    },
    { 
      question: 'How do I measure my product to find the right size?', 
      answer: 'Place your product in a measuring container or bag and note the volume it occupies. Add 20-30% for headspace (needed for sealing and zipper closure). Our size guide shows approximate capacity in grams and milliliters for each size.' 
    },
    { 
      question: 'Can I order custom sizes not listed here?', 
      answer: 'Yes! We offer fully custom dimensions from 50mm to 500mm in width and height. Custom sizes have a minimum order of 1,000 pieces for digital printing and 5,000 for plate printing. Contact us with your specifications for a quote.' 
    },
    { 
      question: 'What is the difference between Stand Up and Flat Bottom pouches?', 
      answer: 'Stand Up Pouches have a bottom gusset that expands when filled, allowing the pouch to stand upright. They are cost-effective and popular for snacks, coffee, and pet treats. Flat Bottom Bags have a box-shaped bottom with more volume and premium shelf presence, ideal for specialty coffee and premium products.' 
    },
    { 
      question: 'How accurate are the capacity estimates?', 
      answer: 'Capacity depends on product density. Light fluffy products (like puffed snacks) need larger sizes, while dense products (like nuts or powder) need smaller ones. Our estimates are based on average product densities. We recommend ordering samples to test fill before large orders.' 
    }
  ]

  const relatedLinks = [
    { title: "Shop Eco Stand Up Pouches", url: "/store/product/eco-standup", description: "Browse all stand up sizes" },
    { title: "Shop Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-shaped bags" },
    { title: "Materials Guide", url: "/materials/pcr", description: "Learn about eco materials" },
    { title: "Contact for Custom", url: "/contact", description: "Request custom dimensions" }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#0f172a"
        title={t(`${p}.metaTitle`)}
        description={t(`${p}.metaDesc`)}
        keywords={[
          'pouch sizes',
          'packaging dimensions',
          'bag size guide',
          'pouch capacity',
          'custom pouch sizes',
          'stand up pouch sizes',
          'coffee bag sizes',
          'flexible packaging dimensions',
          'pouch volume calculator'
        ]}
        heroTitle="Pouch Sizing & Volume Guide"
        heroSubtitle="Interactive Volume Density Calculator & Visual Sizing Templates"
        heroImage={heroImage}
        heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
        heroLogoAlt="Eco Packaging"
        sections={sections}
        introSummary="Find the perfect pouch size for your product with our comprehensive visual guide and density calculator. Input your product details and target weight to calculate required volumes and match your sizing code. Compare all sizes side-by-side with our high-fidelity reference mockups, exact dimensions, and download free Illustrator/PDF dielines."
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order?"
        ctaDescription="Choose your size and order eco-friendly printed pouches with low MOQ starting from 1,000 pieces."
        ctaButtonText="Shop Pouches Now"
        ctaButtonUrl="/store/product/eco-standup"
        canonicalUrl="https://achievepack.com/knowledge/pouch-sizing"
      />

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Size comparison full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default PouchSizingPage
