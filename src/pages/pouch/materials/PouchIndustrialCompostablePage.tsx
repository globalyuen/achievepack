import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Factory, Shield, Zap, CheckCircle, Award, BarChart3, Thermometer, Box, Truck, XCircle, CheckCircle2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const localTranslations: Record<string, Record<string, string>> = {
  en: {
    sectionTitle: "5 Common Industrial Compostable Packaging Problems (And Solutions)",
    p1Title: "1. Premature Degradation",
    p1Desc: "Problem: Pouches break down on shelves due to humidity.\nSolution: Multi-layer high-barrier structures ensure a stable 12-month shelf life while still being industrially compostable.",
    p2Title: "2. Poor Heat Sealing",
    p2Desc: "Problem: Weak seals lead to leaks during transit.\nSolution: Advanced bio-based sealant layers provide secure, heavy-duty seals comparable to traditional plastics.",
    p3Title: "3. Low Print Quality",
    p3Desc: "Problem: Eco-friendly inks bleed or fade.\nSolution: We use specialized compostable inks and treated surfaces for vibrant, high-definition flexographic printing.",
    p4Title: "4. Brittleness in Cold Temperatures",
    p4Desc: "Problem: Materials crack in refrigerated conditions.\nSolution: Custom biopolymer blending maintains flexibility and strength across a wide temperature range.",
    p5Title: "5. High Cost Barriers",
    p5Desc: "Problem: Sustainable materials are often too expensive.\nSolution: Optimized manufacturing processes and scale offer cost-effective pricing without compromising eco-credentials."
  },
  es: {
    sectionTitle: "5 Problemas Comunes de Empaques Compostables Industriales (Y Soluciones)",
    p1Title: "1. Degradación Prematura",
    p1Desc: "Problema: Las bolsas se degradan en los estantes debido a la humedad.\nSolución: Las estructuras multicapa de alta barrera garantizan una vida útil estable de 12 meses sin dejar de ser compostables industrialmente.",
    p2Title: "2. Sellado Térmico Deficiente",
    p2Desc: "Problema: Los sellos débiles causan fugas durante el tránsito.\nSolución: Las capas selladoras avanzadas de base biológica proporcionan sellados seguros y resistentes comparables a los plásticos tradicionales.",
    p3Title: "3. Baja Calidad de Impresión",
    p3Desc: "Problema: Las tintas ecológicas se desvanecen o se corren.\nSolución: Utilizamos tintas compostables especializadas y superficies tratadas para una impresión flexográfica vibrante y de alta definición.",
    p4Title: "4. Fragilidad en Temperaturas Frías",
    p4Desc: "Problema: Los materiales se agrietan en condiciones refrigeradas.\nSolución: La mezcla personalizada de biopolímeros mantiene la flexibilidad y la fuerza en un amplio rango de temperaturas.",
    p5Title: "5. Barreras de Alto Costo",
    p5Desc: "Problema: Los materiales sostenibles a menudo son demasiado caros.\nSolución: Los procesos de fabricación optimizados ofrecen precios rentables sin comprometer las credenciales ecológicas."
  },
  fr: {
    sectionTitle: "5 Problèmes Courants des Emballages Compostables Industriels (Et Solutions)",
    p1Title: "1. Dégradation Prématurée",
    p1Desc: "Problème : Les sachets se dégradent en rayon à cause de l'humidité.\nSolution : Les structures multicouches à haute barrière assurent une durée de conservation stable de 12 mois tout en restant compostables industriellement.",
    p2Title: "2. Mauvais Thermoscellage",
    p2Desc: "Problème : Des scellages faibles entraînent des fuites pendant le transport.\nSolution : Des couches scellantes biosourcées avancées offrent des scellages sûrs et très résistants comparables aux plastiques traditionnels.",
    p3Title: "3. Faible Qualité d'Impression",
    p3Desc: "Problème : Les encres écologiques bavent ou s'estompent.\nSolution : Nous utilisons des encres compostables spécialisées et des surfaces traitées pour une impression flexographique éclatante et haute définition.",
    p4Title: "4. Fragilité à Basse Température",
    p4Desc: "Problème : Les matériaux se fissurent au froid.\nSolution : Le mélange personnalisé de biopolymères maintient la flexibilité et la résistance sur une large plage de températures.",
    p5Title: "5. Obstacles Liés aux Coûts Élevés",
    p5Desc: "Problème : Les matériaux durables sont souvent trop chers.\nSolution : Des processus de fabrication optimisés offrent des prix rentables sans compromettre les atouts écologiques."
  },
  'zh-TW': {
    sectionTitle: "5個常見的工業可堆肥包裝問題（及解決方案）",
    p1Title: "1. 過早降解",
    p1Desc: "問題：包裝袋在貨架上因濕氣而降解。\n解決方案：多層高阻隔結構確保穩定的12個月保質期，同時保持工業可堆肥特性。",
    p2Title: "2. 熱封不良",
    p2Desc: "問題：封口不牢導致運輸過程中洩漏。\n解決方案：先進的生物基密封層提供安全、耐用的密封，可與傳統塑料媲美。",
    p3Title: "3. 印刷品質低",
    p3Desc: "問題：環保油墨容易暈染或褪色。\n解決方案：我們採用專用可堆肥油墨和處理過的表面，實現鮮豔的高清柔版印刷。",
    p4Title: "4. 低溫變脆",
    p4Desc: "問題：材料在冷藏條件下會破裂。\n解決方案：客製化的生物聚合物混合技術能在廣泛的溫度範圍內保持靈活性和強度。",
    p5Title: "5. 成本過高",
    p5Desc: "問題：可持續材料通常過於昂貴。\n解決方案：優化的製造工藝和規模化生產提供了高性價比的價格，同時不損害環保屬性。"
  }
}

const PouchIndustrialCompostablePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchIndustrialCompostable'

  const lang = i18n.language || 'en'
  const locT = localTranslations[lang] || localTranslations['en']

  const baseUrl = getBaseUrl()
  
  const INDUSTRIAL_CAPABILITIES = [
    { label: t(`${p}.capabilities.shelfStability.label`), value: t(`${p}.capabilities.shelfStability.value`), desc: t(`${p}.capabilities.shelfStability.desc`) },
    { label: t(`${p}.capabilities.heatResistance.label`), value: t(`${p}.capabilities.heatResistance.value`), desc: t(`${p}.capabilities.heatResistance.desc`) },
    { label: t(`${p}.capabilities.printingClarity.label`), value: t(`${p}.capabilities.printingClarity.value`), desc: t(`${p}.capabilities.printingClarity.desc`) },
    { label: t(`${p}.capabilities.globalCompliance.label`), value: t(`${p}.capabilities.globalCompliance.value`), desc: t(`${p}.capabilities.globalCompliance.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/industrial-compostable`} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-[#D4FF00]">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-white max-w-3xl mx-auto border-4 border-[#D4FF00] p-6 shadow-[12px_12px_0px_0px_rgba(212,255,0,1)]">
            {t(`${p}.heroDescription`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-[#D4FF00] !text-[#D4FF00]" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Grid of Industrial Stats */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIAL_CAPABILITIES.map((cap, i) => (
              <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
                <h3 className="font-black text-xl uppercase mb-1">{cap.label}</h3>
                <div className="text-3xl font-black text-green-600 mb-4 italic">{cap.value}</div>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{cap.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Context */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/compost.webp" 
                alt={t(`${p}.lifecycleImageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.lifecycleBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.lifecycleTitle1`)}<br/>{t(`${p}.lifecycleTitle2`)}<br/>{t(`${p}.lifecycleTitleHighlight`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.lifecycleDescription`)}
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4">
                  <Factory className="text-green-600 w-6 h-6 mb-2" />
                  <h4 className="font-black uppercase text-xs">{t(`${p}.facilityTitle`)}</h4>
                  <p className="text-[10px] font-bold">{t(`${p}.facilityDesc`)}</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <Thermometer className="text-orange-500 w-6 h-6 mb-2" />
                  <h4 className="font-black uppercase text-xs">{t(`${p}.fillTitle`)}</h4>
                  <p className="text-[10px] font-bold">{t(`${p}.fillDesc`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white text-black border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-tight italic">{locT.sectionTitle}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {[
                { title: locT.p1Title, desc: locT.p1Desc },
                { title: locT.p2Title, desc: locT.p2Desc },
                { title: locT.p3Title, desc: locT.p3Desc },
                { title: locT.p4Title, desc: locT.p4Desc },
                { title: locT.p5Title, desc: locT.p5Desc },
              ].map((item, i) => (
                <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
                  <h3 className="font-black text-xl uppercase mb-3 text-red-600">{item.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm font-['JetBrains_Mono'] text-gray-700">{item.desc.split('\n')[0]}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <p className="text-sm font-['JetBrains_Mono'] font-bold text-gray-900">{item.desc.split('\n')[1]}</p>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-red-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/industrial-compostable-pain-points.jpg" 
                alt="Industrial Compostable Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Certifications */}
      <section className="py-24 bg-black text-white border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00]">{t(`${p}.certTitle`)}</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70 italic text-white">{t(`${p}.certSubtitle`)}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">{t(`${p}.cert1Title`)}</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">{t(`${p}.cert1Desc`)}</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">{t(`${p}.cert2Title`)}</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">{t(`${p}.cert2Desc`)}</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">{t(`${p}.cert3Title`)}</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">{t(`${p}.cert3Desc`)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] text-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchIndustrialCompostablePage
