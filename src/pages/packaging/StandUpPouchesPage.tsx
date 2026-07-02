import React, { useState } from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap, Award, ChevronDown, ChevronLeft, ChevronRight, X, Heart, HelpCircle, Sparkles, MessageCircle, BookOpen, Target, Calendar, Phone, Mail, Factory, BarChart3, ArrowLeftRight, ShoppingBag, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'

const StandUpPouchesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.standUpPouches'

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  // Safe array fallbacks to prevent runtime crashes
  const b2cHeadersVal = t(`${p}.b2c.table.headers`, { returnObjects: true });
  const b2cHeaders = Array.isArray(b2cHeadersVal) ? b2cHeadersVal : [
    "Size (W x H + G)", "Volumetric Capacity", "Barrier Performance", "Best Application"
  ];

  const b2cRowsVal = t(`${p}.b2c.table.rows`, { returnObjects: true });
  const b2cRows = Array.isArray(b2cRowsVal) ? b2cRowsVal : [
    ["70 x 110 + 40mm", "20g - 50g", "OTR & WVTR < 1.0", "DTC single-serve samples, gourmet spice pods, cosmetic powder sachets"],
    ["100 x 150 + 60mm", "50g - 100g", "OTR & WVTR < 1.0", "Organic tea leaf bundles, visual candy displays, premium pet treats"],
    ["120 x 200 + 80mm", "100g - 250g", "OTR & WVTR < 0.5", "Specialty coffee beans with degassing valve, loose granola, protein chips"],
    ["150 x 230 + 90mm", "250g - 500g", "OTR & WVTR < 0.5", "Bulk snack bags, raw superfoods, powdered ingredients, supplement pouches"],
    ["180 x 280 + 100mm", "500g - 1kg", "OTR & WVTR < 0.1", "Professional wholesale kibble pet food, premium retail bath salts, bulk seeds"]
  ];

  const b2cFaqsVal = t(`${p}.b2c.faqs`, { returnObjects: true });
  const b2cFaqs = Array.isArray(b2cFaqsVal) ? b2cFaqsVal : [
    { question: 'Are stand-up pouches really compostable or recyclable?', answer: 'Yes! We offer two distinct eco paths. Our compostable pouches feature BPI and TÜV certified bio-films (like plant-starch PLA and NatureFlex wood pulp) that safely decompose in 90-180 days under organic conditions. Our recyclable pouches use mono-material PE or PP structures that are fully compatible with store drop-off and standard circular recycling lines.' },
    { question: 'Will these pouches keep our dry food or coffee fresh?', answer: 'Absolutely. We apply high-barrier barrier films providing OTR & WVTR under 1.0 (some metallized cellulose stacks drop below 0.1). Combined with our certified one-way degassing valves, your product is protected from oxidation and moisture ingress for up to 12 months.' },
    { question: 'What bottom gusset formats do you support?', answer: 'We support standard round bottom gussets for light products, K-seal diagonal bases that push heavy loads outwards for maximum standing structure, and plow bottom gussets for single-source continuous rolls.' },
    { question: 'Do you offer custom sizes and shape tooling?', answer: 'Yes. Beyond standard sizes (from 20g to 5kg), we build custom dielines down to the millimeter scale. We also manufacture custom shapes (like round flasks or bottle shapes) with custom die-cut tooling to give your DTC brand unique shelf presence.' }
  ];

  const overviewKpisVal = t(`${p}.sections.overview.kpis`, { returnObjects: true });
  const overviewKpis = Array.isArray(overviewKpisVal) ? overviewKpisVal : [
    "75% Lighter Footprint – Drastically reduces warehousing storage space and long-haul shipping emissions vs glass jars or metal tins.",
    "360° Branding Real Estate – Full-width digital layout coverage printed with certified soy-based plant inks.",
    "Resealable Integration – Durable zip locks and sliders that prevent product shelf degradation.",
    "Automatic Line Compatibility – Engineered roll width tolerance allowing seamless integration on auto VFFS/HFFS lines."
  ];

  const specTableRowsVal = t(`${p}.sections.specifications.tableRows`, { returnObjects: true });
  const specTableRows = Array.isArray(specTableRowsVal) ? specTableRowsVal : [
    ["Barrier Layer", "NatureFlex™ MetCellulose or Recyclable EVOH (OTR < 1.0, WVTR < 1.0)", "Creates an absolute gas and water lock, preserving coffee aroma, snack crispness, and powder integrity for 12+ months."],
    ["Dimensions & Base", "Bespoke Millimeter Dielines (70-300mm width, plow/oval/K-seal gusset bases)", "Calibrated to volumetric density blueprint, preventing bottom seal rupture and ensuring flawless standing structure."],
    ["Sealing Strength", "Seal strength > 35 N/15mm (engineered low-temp PBAT/Mono-PE seal resins)", "Guarantees zero burst leakage under high-pressure automated packing lines operating up to **65 bags per minute**."],
    ["Export Packaging", "Triple-layer double-wall export carton containing secondary moisture barriers", "Protects rollstock and finished bags against ocean-humidity degradation and high-stack shipping box damage."]
  ];

  const faqsVal = t(`${p}.faqs`, { returnObjects: true });
  const faqs = Array.isArray(faqsVal) ? faqsVal.map((item: any) => ({
    question: item.question,
    answer: item.answer
  })) : [];

  const tablesVal = t(`${p}.tables`, { returnObjects: true });
  const tables = Array.isArray(tablesVal) ? tablesVal.map((item: any) => ({
    title: item.title,
    data: {
      headers: item.headers,
      rows: item.rows
    }
  })) : [];


  const supPhotoGallery = [
    { 
      src: '/imgs/pouch-shape/achieve-pack-sup-hero.png', 
      title: t(`${p}.b2c.showcase.gallery.0.title`, 'Premium Printed Stand-Up Pouch'), 
      desc: t(`${p}.b2c.showcase.gallery.0.desc`, 'Custom printed stand-up pouch showcasing beautiful digital printing with high contrast and vibrant eco-inks.')
    },
    { 
      src: '/imgs/pouch-shape/achieve-pack-sup-lifestyle.png', 
      title: t(`${p}.b2c.showcase.gallery.1.title`, 'Stand-Up Pouch Lifestyle Use'), 
      desc: t(`${p}.b2c.showcase.gallery.1.desc`, 'Sustainable stand-up pouch presented in a modern, organic B2B food branding scene.') 
    },
    { 
      src: '/imgs/pouch-shape/achieve-pack-k-seal.png', 
      title: t(`${p}.b2c.showcase.gallery.2.title`, 'Heavy-Duty K-Seal Pouch Base'), 
      desc: t(`${p}.b2c.showcase.gallery.2.desc`, 'diagonal K-seal bottom structure engineered to carry heavier items (up to 5kg) with extreme base stability.') 
    },
    { 
      src: '/imgs/pouch-shape/eco-stand-up-pouch.png', 
      title: t(`${p}.b2c.showcase.gallery.3.title`, 'Zero Waste Compostable Kraft SUP'), 
      desc: t(`${p}.b2c.showcase.gallery.3.desc`, 'Official FSC-certified natural kraft paper stand-up pouch supporting high moisture protection and resealable zippers.') 
    }
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = supPhotoGallery.length - 1
    if (newIndex >= supPhotoGallery.length) newIndex = 0
    setGalleryEnlarged({ src: supPhotoGallery[newIndex].src, index: newIndex })
  }

  const localTranslations: Record<string, { title: string, problems: { q: string, a: string }[] }> = {
    en: {
      title: "5 Common Stand-Up Pouch Problems (And Solutions)",
      problems: [
        { q: "1. Puncture & Tear Risks", a: "Solution: High-barrier laminated films with nylon layers for maximum puncture resistance." },
        { q: "2. Leaking Seals", a: "Solution: Reinforced bottom gussets and ultrasonic sealing technology to prevent ruptures." },
        { q: "3. Poor Shelf Stability", a: "Solution: Precision dieline engineering for optimal weight distribution to prevent tipping." },
        { q: "4. Loss of Freshness", a: "Solution: EVOH barrier layers and one-way degassing valves blocking oxygen and moisture." },
        { q: "5. Zipper Failures", a: "Solution: Heavy-duty press-to-close zippers with powder-proof technology for reliable resealing." }
      ]
    },
    es: {
      title: "5 Problemas Comunes de las Bolsas Stand-Up (Y Soluciones)",
      problems: [
        { q: "1. Riesgos de Perforación", a: "Solución: Películas laminadas de alta barrera con capas de nailon." },
        { q: "2. Sellos con Fugas", a: "Solución: Fuelles inferiores reforzados y tecnología de sellado ultrasónico." },
        { q: "3. Mala Estabilidad", a: "Solución: Ingeniería de precisión para una distribución óptima del peso." },
        { q: "4. Pérdida de Frescura", a: "Solución: Capas EVOH y válvulas que bloquean el oxígeno y la humedad." },
        { q: "5. Fallos en el Cierre", a: "Solución: Cierres de alta resistencia con tecnología a prueba de polvo." }
      ]
    },
    fr: {
      title: "5 Problèmes Courants des Sachets Doypack (Et Solutions)",
      problems: [
        { q: "1. Risques de Perforation", a: "Solution: Films laminés haute barrière avec couches de nylon." },
        { q: "2. Fuites des Soudures", a: "Solution: Soufflets renforcés et technologie de soudage par ultrasons." },
        { q: "3. Mauvaise Stabilité", a: "Solution: Ingénierie de précision pour une répartition optimale du poids." },
        { q: "4. Perte de Fraîcheur", a: "Solution: Couches barrières EVOH et valves bloquant l'oxygène." },
        { q: "5. Défaillances du Zip", a: "Solution: Fermetures à glissière robustes avec technologie anti-poussière." }
      ]
    },
    'zh-TW': {
      title: "自立袋的 5 個常見問題 (與解決方案)",
      problems: [
        { q: "1. 穿刺與撕裂風險", a: "解決方案：採用尼龍層的高阻隔複合薄膜，提供最大抗穿刺能力。" },
        { q: "2. 封口洩漏", a: "解決方案：加固的底部折邊和超音波封口技術，防止破裂。" },
        { q: "3. 貨架穩定性差", a: "解決方案：精密的刀模工程實現最佳的重量分佈，防止傾倒。" },
        { q: "4. 失去新鮮度", a: "解決方案：EVOH 阻隔層和單向排氣閥阻擋氧氣和水分。" },
        { q: "5. 夾鏈失效", a: "解決方案：採用防粉末技術的重型夾鏈，確保可靠的重複密封。" }
      ]
    }
  };
  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations;
  const localT = localTranslations[currentLang] || localTranslations['en'];

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (1): pouch.eco (B2C)
  // ----------------------------------------------------
  if (isPouch()) {
    return (
      <PouchLayout>
        <DualDomainSEOHead 
          title={t(`${p}.b2c.metaTitle`, "Custom Stand-Up Pouches | Eco-Friendly Stand Up Bags | Pouch.eco")}
          description={t(`${p}.b2c.metaDescription`, "Certified compostable & recyclable custom printed stand-up pouches. Low MOQ 500 pcs, organic ink, plant PLA or recyclable Mono-PE barriers. Free design mockups.")}
          keywords={['custom stand up pouches', 'eco stand up bags', 'compostable stand up pouches', 'recyclable coffee bags', 'pouch.eco', 'sustainable flexible packaging']}
          schemaType="Product"
        />

        {/* Hero Section */}
        <section className="bg-[#10b981] text-black py-24 px-6 border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-block bg-[#D4FF00] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.b2c.heroBadge`)}
              </div>
              <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl leading-none uppercase tracking-tight">
                {t(`${p}.b2c.heroTitleLine1`)}<br/>
                <span className="text-[#D4FF00] bg-black px-4 py-1 border-4 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                  {t(`${p}.b2c.heroTitleLine2`)}
                </span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                {t(`${p}.b2c.heroSubtitle`)}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t(`${p}.b2c.btnCall`)}
                </NeoButton>
                <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20stand%20up%20pouches" variant="secondary">
                  {t(`${p}.b2c.btnWhatsapp`)}
                </NeoButton>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="relative border-4 border-black p-4 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/imgs/pouch-shape/achieve-pack-sup-hero.png" 
                  alt="Premium Eco Stand-Up Pouch" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -top-6 -right-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 text-sm">
                  {t(`${p}.b2c.badgeMoq`)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Benefits */}
        <section className="py-20 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              {t(`${p}.b2c.bento.title`)}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <NeoCard color="bg-[#D4FF00]">
                <Leaf className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.c1Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t(`${p}.b2c.bento.c1Desc`)}
                </p>
              </NeoCard>
              
              <NeoCard color="bg-white">
                <Shield className="w-8 h-8 text-[#10b981] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.c2Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t(`${p}.b2c.bento.c2Desc`)}
                </p>
              </NeoCard>

              <NeoCard color="bg-[#00FFFF]">
                <Package className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.c3Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t(`${p}.b2c.bento.c3Desc`)}
                </p>
              </NeoCard>

              <NeoCard color="bg-black text-[#D4FF00]">
                <Zap className="w-8 h-8 text-[#D4FF00] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.c4Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-white">
                  {t(`${p}.b2c.bento.c4Desc`)}
                </p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* Real-world Product Photo Showcases */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="mb-4">
                <NeoBadge color="magenta">{t(`${p}.b2c.showcase.badge`)}</NeoBadge>
              </div>
              <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl uppercase mt-2 tracking-tight">
                {t(`${p}.b2c.showcase.title`)}
              </h2>
              <p className="font-['JetBrains_Mono'] text-neutral-600 mt-2">
                {t(`${p}.b2c.showcase.desc`)}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {supPhotoGallery.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryEnlarged({ src: photo.src, index: i })}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all text-left w-full group"
                >
                  <div className="aspect-square bg-neutral-100 border-2 border-black overflow-hidden mb-2">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-black text-sm uppercase truncate">{photo.title}</h4>
                  <p className="text-[10px] text-neutral-500 font-['JetBrains_Mono'] truncate mt-1">{photo.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications & Pricing */}
        <section className="py-24 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-12 tracking-tight">
              {t(`${p}.b2c.specPricing.title`)}
            </h2>
            <NeoCard color="bg-white" className="!p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-['JetBrains_Mono'] text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-black text-[#D4FF00] border-b-4 border-black">
                      {b2cHeaders.map((h, i) => (
                        <th key={i} className="border-2 border-black p-4 font-black uppercase">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b2cRows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? "bg-neutral-50/50" : ""}>
                        <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">{row[0]}</td>
                        <td className="border-2 border-black p-4 text-black font-semibold">{row[1]}</td>
                        <td className="border-2 border-black p-4 text-emerald-600 font-bold">{row[2]}</td>
                        <td className="border-2 border-black p-4 text-xs text-neutral-700">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </NeoCard>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <NeoCard color="bg-[#D4FF00]" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">{t(`${p}.b2c.specPricing.moqVal`)}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {t(`${p}.b2c.specPricing.moqTitle`)}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.b2c.specPricing.moqDesc`)}</p>
              </NeoCard>
              <NeoCard color="bg-[#00FFFF]" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">{t(`${p}.b2c.specPricing.dielinesVal`)}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {t(`${p}.b2c.specPricing.dielinesTitle`)}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.b2c.specPricing.dielinesDesc`)}</p>
              </NeoCard>
              <NeoCard color="bg-[#FF00FF] text-white" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1 text-[#D4FF00]">{t(`${p}.b2c.specPricing.samplesVal`)}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
                  {t(`${p}.b2c.specPricing.samplesTitle`)}
                </p>
                <p className="text-[10px] text-neutral-200 mt-1">{t(`${p}.b2c.specPricing.samplesDesc`)}</p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* 5 Common Problems and Solutions */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-5xl uppercase tracking-tight">
                {localT.title}
              </h2>
              <div className="space-y-4">
                {localT.problems.map((prob, idx) => (
                  <NeoCard key={idx} color="bg-[#F0F0F0]" className="border-2 border-black">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-black text-lg">{prob.q}</h4>
                        <p className="font-['JetBrains_Mono'] text-sm mt-1">{prob.a}</p>
                      </div>
                    </div>
                  </NeoCard>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/stand-up-pouches-pain-points.jpg" 
                  alt="Common Stand-up Pouches Problems and Solutions" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global B2C FAQ */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              {t('standUpPouchesPage.b2c.faqTitle', 'Frequently Asked Questions')}
            </h2>
            <div className="space-y-6">
              {b2cFaqs.map((item, idx) => (
                <NeoCard key={idx} color="bg-[#F0F0F0]/50" className="border-4">
                  <h3 className="font-black text-lg mb-2 uppercase">{item.question}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed">{item.answer}</p>
                </NeoCard>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Lightbox */}
        {galleryEnlarged && (
          <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
            <button
              onClick={() => setGalleryEnlarged(null)}
              className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <img
              src={galleryEnlarged.src}
              alt={supPhotoGallery[galleryEnlarged.index]?.title}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
              <p className="font-bold text-lg">{supPhotoGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-sm text-white/80 mt-1 leading-relaxed">{supPhotoGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {supPhotoGallery.length}</p>
            </div>
          </div>
        )}
      </PouchLayout>
    )
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (2): achievepack.com (B2B)
  // ----------------------------------------------------

  const breadcrumbs = [
    { label: t('breadcrumbs.home', 'Home'), url: '/' },
    { label: t('breadcrumbs.packagingShapes', 'Packaging Shapes'), url: '/store' },
    { label: t('breadcrumbs.customStandUpPouches', 'Custom Stand-Up Pouches'), url: '/packaging/stand-up-pouches' }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            <strong>{t(`${p}.sections.overview.text`)}</strong>
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-bold text-primary-800 text-lg mb-2">{t(`${p}.sections.overview.kpisTitle`)}</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                {overviewKpis.map((kpi, idx) => (
                  <li key={idx}>• {kpi}</li>
                ))}
              </ul>
            </div>
            <div>
              <ClickableImage 
                src="/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" 
                alt="Achieve Pack custom stand-up pouches wholesale direct supplier" 
                className="w-full rounded-lg shadow-md border border-neutral-100"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.sections.specifications.text`)}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden border border-neutral-200">
              <thead>
                <tr className="bg-primary-600 text-white font-semibold">
                  <th className="p-3 text-left">{t(`${p}.sections.specifications.tableHeaders.0`, 'Technical Dimension')}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.specifications.tableHeaders.1`, 'Raw Specs & Materials')}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.specifications.tableHeaders.2`, 'B2B Purchasing Utility & Value')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {specTableRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-neutral-50" : ""}>
                    <td className="p-3 font-semibold text-neutral-900">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.sections.applications.text`)}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-amber-200 bg-amber-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-amber-900 mb-2">{t(`${p}.sections.applications.coffee.title`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {t(`${p}.sections.applications.coffee.desc`)}
              </p>
              <span className="text-[10px] bg-white text-amber-700 border border-amber-300 px-2 py-0.5 rounded font-semibold">{t(`${p}.sections.applications.coffee.badge`)}</span>
            </div>
            <div className="border border-green-200 bg-green-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">{t(`${p}.sections.applications.organic.title`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {t(`${p}.sections.applications.organic.desc`)}
              </p>
              <span className="text-[10px] bg-white text-green-700 border border-green-300 px-2 py-0.5 rounded font-semibold">{t(`${p}.sections.applications.organic.badge`)}</span>
            </div>
            <div className="border border-blue-200 bg-blue-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">{t(`${p}.sections.applications.petFood.title`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {t(`${p}.sections.applications.petFood.desc`)}
              </p>
              <span className="text-[10px] bg-white text-blue-700 border border-blue-300 px-2 py-0.5 rounded font-semibold">{t(`${p}.sections.applications.petFood.badge`)}</span>
            </div>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.sections.applications.kSealTitle`)}</h4>
              <p className="text-sm text-neutral-600 mb-3">
                {t(`${p}.sections.applications.kSealDesc`)}
              </p>
              <Link to="/knowledge/k-seal-stand-up-pouches" className="inline-flex items-center gap-1 text-primary-700 font-bold hover:underline text-xs">
                {t(`${p}.sections.applications.kSealLink`)}
              </Link>
            </div>
            <div className="w-full md:w-1/4">
              <ClickableImage 
                src="/imgs/pouch-shape/achieve-pack-k-seal.png" 
                alt="Achieve Pack K-seal stand up pouches wholesale" 
                className="w-full rounded-lg bg-white p-2 border border-neutral-100 shadow-sm"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: t(`${p}.sections.gallery.title`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 text-sm">
            {t(`${p}.sections.gallery.text`)}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {supPhotoGallery.map((photo, i) => (
              <button
                key={i}
                onClick={() => setGalleryEnlarged({ src: photo.src, index: i })}
                className="block text-left w-full border border-neutral-200 rounded-xl p-2 bg-white hover:shadow-md transition cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral-50 mb-2">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                </div>
                <h5 className="font-bold text-xs text-neutral-800 truncate">{photo.title}</h5>
                <p className="text-[10px] text-neutral-500 truncate mt-0.5">{photo.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'problems',
      title: localT.title,
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {localT.problems.map((prob, idx) => (
                <div key={idx} className="flex gap-3 bg-neutral-50 p-4 border border-neutral-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-neutral-900">{prob.q}</h5>
                    <p className="text-sm text-neutral-600 mt-1">{prob.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src="/imgs/knowledge/stand-up-pouches-pain-points.jpg" 
                alt="Stand Up Pouch Pain Points" 
                className="w-full rounded-xl shadow-md border border-neutral-200"
              />
            </div>
          </div>
        </div>
      )
    }
  ]

  // variables faqs and tables are declared at the top now!

  const relatedLinks = [
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Stable 5-panel box-gusset alternative" },
    { title: "Coffee & Tea Solutions", url: "/industry/coffee-tea", description: "Bags with degassing valves and tin-ties" },
    { title: "Compostable Material Spec", url: "/materials/compostable", description: "Compare OK Compost biopolymer specs" }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#166534"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        canonicalUrl="https://achievepack.com/packaging/stand-up-pouches"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        heroImage="/imgs/pouch-shape/achieve-pack-sup-hero.png"
        sections={sections}
        keywords={['custom stand up pouches', 'wholesale stand up bags', 'compostable stand up pouches', 'BRC certified flexible packaging', 'achieve pack stand up pouch']}
        schemaType="Product"
        faqs={faqs}
        tables={tables}
        relatedLinks={relatedLinks}
        breadcrumbs={breadcrumbs}
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={supPhotoGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
            <p className="font-bold text-lg">{supPhotoGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/80 mt-1 leading-relaxed">{supPhotoGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default StandUpPouchesPage
