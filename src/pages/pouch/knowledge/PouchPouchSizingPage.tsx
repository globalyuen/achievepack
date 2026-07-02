import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Ruler, Maximize2, Package, CheckCircle, ArrowRight, Mail, Send, Loader2, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import SortableSizesTable, { STAND_UP_SIZES, FLAT_BOTTOM_SIZES } from '../../../components/SortableSizesTable'
import { DIELINE_CATALOG, type DielineItem } from '../../../data/dielineCatalog'
import { useTranslation } from 'react-i18next'

export default function PouchPouchSizingPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchPouchSizing'

  const localTranslations: Record<string, any> = {
    en: {
      problemsTitle: "5 Common Pouch Sizing Problems (And Solutions)",
      p1Title: "Volume vs. Weight Mismatch",
      p1Desc: "Problem: Specifying a pouch based solely on weight (e.g., 500g) without accounting for product density. Solution: Use volumetric testing and density-based capacity charts for your specific product type.",
      p2Title: "Inadequate Seal Area Allowances",
      p2Desc: "Problem: Failing to leave sufficient margin for thermal sealing and zip-locks, reducing usable space. Solution: Include a minimum 10-15mm top seal and side seal allowance in final dimension calculations.",
      p3Title: "Gusset Expansion Limitations",
      p3Desc: "Problem: The bottom gusset does not fully open if the pouch is under-filled or poorly dimensioned. Solution: Utilize 3D prototyping and ensure the gusset width is proportional to the pouch height (typically 1:3 ratio).",
      p4Title: "Artwork Distortion at the Base",
      p4Desc: "Problem: Graphics placed too close to the bottom gusset become distorted or hidden when the pouch is filled. Solution: Apply safety margins (typically 15-20mm from the bottom fold) and use 3D rendering to preview the filled shape.",
      p5Title: "Center of Gravity Instability",
      p5Desc: "Problem: Tall, narrow pouches tip over easily when displayed on retail shelves. Solution: Optimize the aspect ratio and choose a flat-bottom (box pouch) design for taller items to lower the center of gravity."
    },
    es: {
      problemsTitle: "5 Problemas Comunes de Tamaño de Bolsas (Y Soluciones)",
      p1Title: "Desajuste de Volumen vs. Peso",
      p1Desc: "Problema: Especificar una bolsa basándose únicamente en el peso (ej. 500g) sin considerar la densidad del producto. Solución: Use pruebas volumétricas y tablas de capacidad basadas en la densidad.",
      p2Title: "Márgenes de Sellado Inadecuados",
      p2Desc: "Problema: No dejar margen suficiente para el sellado térmico y el cierre zip, reduciendo el espacio útil. Solución: Incluya una tolerancia mínima de 10-15mm para el sellado superior y lateral.",
      p3Title: "Limitaciones de Expansión del Fuelle",
      p3Desc: "Problema: El fuelle inferior no se abre completamente si la bolsa está poco llena o mal dimensionada. Solución: Utilice prototipos 3D y asegúrese de que el ancho del fuelle sea proporcional a la altura.",
      p4Title: "Distorsión del Diseño en la Base",
      p4Desc: "Problema: Los gráficos colocados muy cerca del fuelle inferior se distorsionan al llenar la bolsa. Solución: Aplique márgenes de seguridad (15-20mm desde el doblez) y use renderizado 3D.",
      p5Title: "Inestabilidad del Centro de Gravedad",
      p5Desc: "Problema: Las bolsas altas y estrechas se vuelcan fácilmente en los estantes. Solución: Optimice la relación de aspecto y elija un diseño de fondo plano para artículos más altos."
    },
    fr: {
      problemsTitle: "5 Problèmes Courants de Dimensionnement des Sachets (Et Solutions)",
      p1Title: "Décalage Volume vs Poids",
      p1Desc: "Problème: Spécifier un sachet uniquement en fonction du poids (ex. 500g) sans tenir compte de la densité du produit. Solution: Utilisez des tests volumétriques et des tableaux de capacité basés sur la densité.",
      p2Title: "Marges de Scellage Inadéquates",
      p2Desc: "Problème: Ne pas laisser une marge suffisante pour le scellage thermique et les fermetures zip. Solution: Prévoyez une tolérance minimale de 10 à 15 mm pour les joints supérieurs et latéraux.",
      p3Title: "Limites d'Expansion du Soufflet",
      p3Desc: "Problème: Le soufflet de fond ne s'ouvre pas complètement si le sachet est mal dimensionné. Solution: Utilisez le prototypage 3D et assurez-vous que la largeur du soufflet est proportionnelle à la hauteur.",
      p4Title: "Déformation de l'Illustration à la Base",
      p4Desc: "Problème: Les graphiques placés trop près du soufflet inférieur sont déformés lorsque le sachet est rempli. Solution: Appliquez des marges de sécurité (15-20 mm) et utilisez le rendu 3D.",
      p5Title: "Instabilité du Centre de Gravité",
      p5Desc: "Problème: Les sachets hauts et étroits se renversent facilement sur les étagères. Solution: Optimisez le rapport d'aspect et choisissez une conception à fond plat pour les articles plus grands."
    },
    'zh-TW': {
      problemsTitle: "5個常見的包裝袋尺寸問題（及解決方案）",
      p1Title: "體積與重量不匹配",
      p1Desc: "問題：僅根據重量（如500克）指定包裝袋，而沒有考慮產品密度。解決方案：使用體積測試和基於密度的容量表。",
      p2Title: "密封區預留不足",
      p2Desc: "問題：沒有為熱封和拉鍊預留足夠的邊緣，減少了可用空間。解決方案：在尺寸計算中包括最小10-15毫米的頂部和側邊密封餘量。",
      p3Title: "底部折邊展開限制",
      p3Desc: "問題：如果包裝袋尺寸不當，底部折邊無法完全打開。解決方案：利用3D打樣，確保折邊寬度與包裝袋高度成比例。",
      p4Title: "底部圖案變形",
      p4Desc: "問題：圖形太靠近底部折邊，裝滿後會扭曲或被隱藏。解決方案：應用安全邊距（距離底部折痕15-20毫米）並使用3D渲染預覽。",
      p5Title: "重心不穩",
      p5Desc: "問題：又高又窄的袋子在貨架上很容易翻倒。解決方案：優化長寬比，對於較高的產品選擇平底袋設計以降低重心。"
    }
  }
  const currentLang = localTranslations[i18n.language] || localTranslations.en

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  // Email Lead Gate & CAPTCHA States
  const [selectedShape, setSelectedShape] = React.useState<'stand-up' | 'flat-bottom'>('stand-up')
  const [clientEmail, setClientEmail] = React.useState('')
  const [selectedDieline, setSelectedDieline] = React.useState<DielineItem | null>(null)
  const [emailDielineFilename, setEmailDielineFilename] = React.useState('')
  const [sendingEmail, setSendingEmail] = React.useState(false)
  const [emailSuccess, setEmailSuccess] = React.useState(false)
  
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null)
  const turnstileRef = React.useRef<HTMLDivElement>(null)
  const turnstileWidgetId = React.useRef<string | null>(null)

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

  // Available dielines filtered by shape
  const availableDielines = React.useMemo(() => {
    const catalogShape = selectedShape === 'stand-up' ? 'Stand Up Pouch' : 'Flat Bottom'
    return DIELINE_CATALOG.filter(d => d.shape === catalogShape && d.unit === 'mm')
  }, [selectedShape])

  // Auto-select first dieline when list changes
  React.useEffect(() => {
    if (availableDielines.length > 0) {
      const alreadySelected = availableDielines.some(d => d.filename === emailDielineFilename)
      if (!alreadySelected) {
        setSelectedDieline(availableDielines[0])
        setEmailDielineFilename(availableDielines[0].filename)
      }
    } else {
      setSelectedDieline(null)
      setEmailDielineFilename('')
    }
  }, [availableDielines, emailDielineFilename])

  // Prefill email from localStorage on mount
  React.useEffect(() => {
    const savedEmail = localStorage.getItem('dieline_finder_email')
    if (savedEmail) {
      setClientEmail(savedEmail)
    }
  }, [])

  // Load Cloudflare Turnstile script & render widget dynamically
  React.useEffect(() => {
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
  }, [selectedShape])

  const handleEmailDielineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!clientEmail || !turnstileToken || !selectedDieline) return

    setSendingEmail(true)
    try {
      const response = await fetch('/api/send-dieline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: clientEmail,
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
        setEmailSuccess(true)
        localStorage.setItem('dieline_finder_email', clientEmail)
      } else {
        alert(result.error || t(`${p}.leadGate.form.errorFailed`))
      }
    } catch (err) {
      console.error(err)
      alert(t(`${p}.leadGate.form.errorNetwork`))
    } finally {
      setSendingEmail(false)
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken(null)
      }
    }
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/pouch-sizing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.tag`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.title`)} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.subtitle`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                   <img 
                    src="/imgs/seo-photos/a_size_reference_dimensions_7506199.webp" 
                    alt={t(`${p}.hero.imageAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute bottom-4 left-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    {t(`${p}.hero.volumeFormula`)}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content & Tables */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                 <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                   {t(`${p}.content.standUp.title`)} <span className="text-[#10b981]">{t(`${p}.content.standUp.titleHighlight`)}</span>
                 </h2>
                 <p className="font-['JetBrains_Mono'] text-gray-700 mb-6">
                   {t(`${p}.content.standUp.desc`)}
                 </p>
                 <div className="border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                   <SortableSizesTable sizes={STAND_UP_SIZES} title={t(`${p}.content.standUp.tableTitle`)} />
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                   {t(`${p}.content.flatBottom.title`)} <span className="text-purple-500">{t(`${p}.content.flatBottom.titleHighlight`)}</span>
                 </h2>
                 <p className="font-['JetBrains_Mono'] text-gray-700 mb-6">
                   {t(`${p}.content.flatBottom.desc`)}
                 </p>
                 <div className="border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                   <SortableSizesTable sizes={FLAT_BOTTOM_SIZES} title={t(`${p}.content.flatBottom.tableTitle`)} categoryColor="purple" />
                 </div>
              </div>
            </div>

            <div className="space-y-8">
                {/* Neo-Brutalist Dieline Auto-Sender Lead Gate */}
                <NeoCard className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-3 flex items-center gap-2 text-black">
                    <Mail className="w-6 h-6 stroke-[2]" /> {t(`${p}.leadGate.title`)}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-700 mb-4 leading-normal">
                    {t(`${p}.leadGate.desc`)}
                  </p>

                  <div className="flex bg-gray-100 border-2 border-black p-1 mb-4">
                    <button
                      type="button"
                      onClick={() => setSelectedShape('stand-up')}
                      className={`flex-1 text-center py-2 text-xs font-black uppercase transition-all ${
                        selectedShape === 'stand-up' ? 'bg-black text-[#D4FF00]' : 'text-black'
                      }`}
                    >
                      {t(`${p}.leadGate.shapes.standUp`)}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedShape('flat-bottom')}
                      className={`flex-1 text-center py-2 text-xs font-black uppercase transition-all ${
                        selectedShape === 'flat-bottom' ? 'bg-black text-[#D4FF00]' : 'text-black'
                      }`}
                    >
                      {t(`${p}.leadGate.shapes.flatBottom`)}
                    </button>
                  </div>

                  {emailSuccess ? (
                    <div className="border-4 border-emerald-600 bg-emerald-50 p-4 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                      <div className="font-['Space_Grotesk'] font-black text-emerald-800 uppercase text-sm">{t(`${p}.leadGate.success.title`)}</div>
                      <p className="font-['JetBrains_Mono'] text-[11px] text-emerald-700 mt-1 leading-normal">
                        {t(`${p}.leadGate.success.desc1`)} <strong>{clientEmail}</strong>{t(`${p}.leadGate.success.desc2`)}
                      </p>
                      <button
                        type="button"
                        onClick={() => setEmailSuccess(false)}
                        className="font-['JetBrains_Mono'] text-xs text-black font-extrabold uppercase mt-4 underline"
                      >
                        {t(`${p}.leadGate.success.sendAnother`)}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailDielineSubmit} className="space-y-4">
                      <div>
                        <label className="block font-['Space_Grotesk'] font-bold text-xs uppercase mb-1.5">{t(`${p}.leadGate.form.selectTemplate`)}</label>
                        <select
                          value={emailDielineFilename}
                          onChange={(e) => {
                            const found = availableDielines.find(d => d.filename === e.target.value)
                            if (found) {
                              setSelectedDieline(found)
                              setEmailDielineFilename(found.filename)
                            }
                          }}
                          className="w-full bg-white border-2 border-black text-xs font-bold font-['JetBrains_Mono'] px-3 py-2 text-black outline-none focus:bg-[#D4FF00] transition"
                        >
                          {availableDielines.map((d) => (
                            <option key={d.filename} value={d.filename}>
                              {d.displayName} ({d.width}x{d.height}mm {d.ext})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-['Space_Grotesk'] font-bold text-xs uppercase mb-1.5">{t(`${p}.leadGate.form.yourEmail`)}</label>
                        <input
                          type="email"
                          required
                          placeholder={t(`${p}.leadGate.form.emailPlaceholder`)}
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full bg-white border-2 border-black text-xs font-bold font-['JetBrains_Mono'] px-3 py-2.5 text-black outline-none focus:bg-yellow-50 transition"
                        />
                      </div>

                      {/* Cloudflare Turnstile */}
                      <div ref={turnstileRef} className="cf-turnstile w-full flex justify-center scale-90 -my-1" />

                      <button
                        type="submit"
                        disabled={sendingEmail || !turnstileToken}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-black text-[#D4FF00] disabled:bg-neutral-200 disabled:text-neutral-450 disabled:border-neutral-300 hover:bg-neutral-800 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-wider transition-all"
                      >
                        {sendingEmail ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> {t(`${p}.leadGate.form.btnEmailing`)}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> {t(`${p}.leadGate.form.btnEmailDieline`)}
                          </>
                        )}
                      </button>

                      <p className="font-['JetBrains_Mono'] text-[9px] text-neutral-500 text-center leading-normal">
                        {t(`${p}.leadGate.form.spamNotice`)}
                      </p>
                    </form>
                  )}
                </NeoCard>

               <NeoCard className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">{t(`${p}.whyStandardSizes.title`)}</h3>
                 <ul className="font-['JetBrains_Mono'] text-sm space-y-4 text-black">
                   {[0, 1, 2].map((idx) => (
                     <li key={idx} className="flex items-start gap-2">
                       <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                       <span><strong>{t(`${p}.whyStandardSizes.reasons.${idx}.title`)}</strong> {t(`${p}.whyStandardSizes.reasons.${idx}.desc`)}</span>
                     </li>
                   ))}
                 </ul>
               </NeoCard>

               <div className="bg-black text-white p-6 border-4 border-black">
                 <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">{t(`${p}.needCustomSize.title`)}</h3>
                 <p className="font-['JetBrains_Mono'] text-sm text-gray-300 mb-4">
                   {t(`${p}.needCustomSize.desc`)}
                 </p>
                 <NeoButton href="/quote" variant="secondary" className="w-full justify-center !bg-white !text-black hover:!bg-gray-200">
                   {t(`${p}.needCustomSize.btn`)}
                 </NeoButton>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-black uppercase mb-6">
                {currentLang.problemsTitle}
              </h2>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex gap-4 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-50">
                    <AlertTriangle className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-['Space_Grotesk'] font-black text-lg uppercase">{currentLang[`p${num}Title`]}</h4>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-2">{currentLang[`p${num}Desc`]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-100 overflow-hidden">
                <img 
                  src="/imgs/knowledge/pouch-sizing-pain-points.jpg" 
                  alt="Pouch sizing pain points and engineering solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.title`)} <span className="text-[#10b981]">{t(`${p}.faq.titleHighlight`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3, 4].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-black flex-shrink-0">Q:</span>
                  {t(`${p}.faq.items.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-black">A:</span> {t(`${p}.faq.items.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.btn`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
