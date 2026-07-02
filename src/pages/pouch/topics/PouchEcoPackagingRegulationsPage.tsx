import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Scale, Gavel, FileText } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    problems: {
      title: "5 Common Eco Packaging Regulations Problems (And Solutions)",
      items: [
        { q: "1. Greenwashing & False Claims", a: "Solution: Use strict third-party certifications and ensure ISO/ASTM standard compliance." },
        { q: "2. PCR Content Mandates", a: "Solution: Validate supplier chain-of-custody and utilize verified PCR materials (like GRS)." },
        { q: "3. Extended Producer Responsibility (EPR) Taxes", a: "Solution: Optimize packaging weight and switch to mono-material structures to lower EPR fees." },
        { q: "4. Navigating Conflicting Regional Regulations", a: "Solution: Adopt a globally compliant baseline standard (like EU PPWR) as your minimum specification." },
        { q: "5. Decreased Shelf Life with Eco-Materials", a: "Solution: Implement high-barrier sustainable coatings (e.g., AlOx/SiOx) to maintain freshness and recyclability." }
      ]
    }
  },
  es: {
    problems: {
      title: "5 Problemas Comunes de Regulaciones de Empaques Ecológicos (Y Soluciones)",
      items: [
        { q: "1. Lavado Verde (Greenwashing) y Afirmaciones Falsas", a: "Solución: Utilice certificaciones estrictas de terceros y garantice el cumplimiento de las normas ISO/ASTM." },
        { q: "2. Mandatos de Contenido Reciclado (PCR)", a: "Solución: Valide la cadena de custodia del proveedor y utilice materiales PCR verificados (como GRS)." },
        { q: "3. Impuestos de Responsabilidad Extendida del Productor (EPR)", a: "Solución: Optimice el peso del empaque y cambie a estructuras monomateriales para reducir las tarifas de EPR." },
        { q: "4. Navegación por Regulaciones Regionales Conflictivas", a: "Solución: Adopte un estándar base que cumpla con los requisitos globales (como EU PPWR) como su especificación mínima." },
        { q: "5. Disminución de la Vida Útil con Eco-Materiales", a: "Solución: Implemente recubrimientos sostenibles de alta barrera (ej. AlOx/SiOx) para mantener la frescura y la reciclabilidad." }
      ]
    }
  },
  fr: {
    problems: {
      title: "5 Problèmes Courants liés aux Réglementations sur les Emballages Écologiques (Et Solutions)",
      items: [
        { q: "1. Écoblanchiment (Greenwashing) et Fausses Déclarations", a: "Solution : Utilisez des certifications tierces strictes et assurez la conformité aux normes ISO/ASTM." },
        { q: "2. Obligations de Contenu Recyclé (PCR)", a: "Solution : Validez la chaîne de traçabilité des fournisseurs et utilisez des matériaux PCR vérifiés (comme GRS)." },
        { q: "3. Taxes de Responsabilité Élargie des Producteurs (REP)", a: "Solution : Optimisez le poids des emballages et passez aux structures mono-matériaux pour réduire les frais de REP." },
        { q: "4. Naviguer dans des Réglementations Régionales Conflictuelles", a: "Solution : Adoptez une norme de base conforme à l'échelle mondiale (comme le PPWR de l'UE) comme spécification minimale." },
        { q: "5. Durée de Conservation Réduite avec les Éco-Matériaux", a: "Solution : Mettez en œuvre des revêtements durables à haute barrière (par ex. AlOx/SiOx) pour maintenir la fraîcheur et la recyclabilité." }
      ]
    }
  },
  'zh-TW': {
    problems: {
      title: "環保包裝法規的 5 個常見問題 (及解決方案)",
      items: [
        { q: "1. 漂綠與虛假宣傳", a: "解決方案：使用嚴格的第三方認證並確保符合 ISO/ASTM 標準。" },
        { q: "2. 消费後回收 (PCR) 含量要求", a: "解決方案：驗證供應商的監管鏈並使用經過驗證的 PCR 材料（如 GRS）。" },
        { q: "3. 延伸生產者責任 (EPR) 稅", a: "解決方案：優化包裝重量並轉向單一材質結構以降低 EPR 費用。" },
        { q: "4. 應對相互衝突的地區法規", a: "解決方案：採用全球通用的合規基準標準（例如歐盟 PPWR）作為您的最低規格。" },
        { q: "5. 環保材料導致保質期縮短", a: "解決方案：採用高阻隔性可持續塗層（例如 AlOx/SiOx）以保持產品新鮮度和可回收性。" }
      ]
    }
  }
};

export const sectionsForPouch = ["5 Common Eco Packaging Regulations Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Eco Packaging Regulations Problems (And Solutions)"];

const PouchEcoPackagingRegulationsPage: React.FC = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    Object.keys(translations).forEach(lang => {
      i18n.addResourceBundle(lang, 'translation', { pouchEcoPackagingRegulationsPage: translations[lang as keyof typeof translations] }, true, true)
    })
  }, [i18n])

  const currentLang = i18n.language || 'en';
  const pageT = translations[currentLang as keyof typeof translations] || translations.en;

  const p = 'pouchEcoPackagingRegulationsPage'
  const baseUrl = getBaseUrl()
  
  const REG_METRICS = [
    { label: t(`${p}.metrics.ppwr.label`), value: t(`${p}.metrics.ppwr.value`), unit: t(`${p}.metrics.ppwr.unit`), desc: t(`${p}.metrics.ppwr.desc`) },
    { label: t(`${p}.metrics.sourceRed.label`), value: t(`${p}.metrics.sourceRed.value`), unit: t(`${p}.metrics.sourceRed.unit`), desc: t(`${p}.metrics.sourceRed.desc`) },
    { label: t(`${p}.metrics.recycledCont.label`), value: t(`${p}.metrics.recycledCont.value`), unit: t(`${p}.metrics.recycledCont.unit`), desc: t(`${p}.metrics.recycledCont.desc`) },
    { label: t(`${p}.metrics.claimsVerif.label`), value: t(`${p}.metrics.claimsVerif.value`), unit: t(`${p}.metrics.claimsVerif.unit`), desc: t(`${p}.metrics.claimsVerif.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/eco-packaging-regulations`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<br/>
                <span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subtitle`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/sustainable-lifecycle-pillar.png" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Regulatory Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_pcr_card_v1_0334493.webp" 
                alt={t(`${p}.engineering.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.engineering.titlePart1`)}<br/>
                {t(`${p}.engineering.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.description`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {REG_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Regulatory Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.titlePart1`)}<br/>
            {t(`${p}.tech.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item1Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.science.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.science.titlePart1`)}<br/>
                {t(`${p}.science.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.science.description`)}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <FileText className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.item1Title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.item1Desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.item2Title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.item2Desc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.science.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <NeoBadge color="blue">Insights</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12 text-center">
            {pageT.problems.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {pageT.problems.items.map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xl mb-2 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>{item.q}</span>
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-gray-700 pl-9">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/eco-packaging-regulations-pain-points.jpg" 
                alt="Eco Packaging Regulations Pain Points" 
                className="relative z-10 border-4 border-black w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Regulatory Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}<br/>
            {t(`${p}.faq.titlePart2`)}
          </h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.q1.q`), a: t(`${p}.faq.q1.a`) },
              { q: t(`${p}.faq.q2.q`), a: t(`${p}.faq.q2.a`) },
              { q: t(`${p}.faq.q3.q`), a: t(`${p}.faq.q3.a`) },
              { q: t(`${p}.faq.q4.q`), a: t(`${p}.faq.q4.a`) }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t(`${p}.cta.titlePart1`)}<br/>
            {t(`${p}.cta.titlePart2`)}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.btnReview`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoPackagingRegulationsPage
