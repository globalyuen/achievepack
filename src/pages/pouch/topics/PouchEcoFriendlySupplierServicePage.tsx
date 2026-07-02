import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Truck, ClipboardCheck, Users, ShieldCheck, Leaf, Search, ShieldAlert, BadgeCheck, PackageSearch } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoFriendlySupplierServicePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchEcoFriendlySupplierServicePage'
  const baseUrl = getBaseUrl()
  
  const translations = {
    en: {
      problemsTitle1: "5 Common Problems",
      problemsTitle2: "And Solutions",
      problem1Title: "1. Greenwashing vs. Genuine Sustainability",
      problem1Desc: "Problem: Many suppliers claim eco-friendliness without backing it up. Solution: Rigorous third-party certification audits like EcoVadis and FSC.",
      problem2Title: "2. Lack of Material Traceability",
      problem2Desc: "Problem: Difficulty tracking sustainable materials to their source. Solution: Implementing end-to-end supply chain tracking systems.",
      problem3Title: "3. Inconsistent Quality in Recycled Materials",
      problem3Desc: "Problem: Recycled plastics or paper may vary in strength. Solution: Strict QA protocols and ISO-certified material testing.",
      problem4Title: "4. Unreliable Supplier Compliance",
      problem4Desc: "Problem: Suppliers may drift from environmental standards over time. Solution: Scheduled and surprise on-site environmental and ethical audits.",
      problem5Title: "5. High MOQs for Eco-Materials",
      problem5Desc: "Problem: Sustainable options often require massive minimum orders. Solution: Supplier consolidation networks and shared inventory programs."
    },
    es: {
      problemsTitle1: "5 Problemas Comunes",
      problemsTitle2: "Y Soluciones",
      problem1Title: "1. Lavado Verde vs. Sostenibilidad Real",
      problem1Desc: "Problema: Muchos afirman ser ecológicos sin pruebas. Solución: Auditorías de certificación de terceros como EcoVadis.",
      problem2Title: "2. Falta de Trazabilidad",
      problem2Desc: "Problema: Dificultad para rastrear materiales sostenibles. Solución: Sistemas de seguimiento de la cadena de suministro de extremo a extremo.",
      problem3Title: "3. Calidad Inconsistente",
      problem3Desc: "Problema: Los materiales reciclados varían en resistencia. Solución: Protocolos estrictos de QA y pruebas de materiales certificadas por ISO.",
      problem4Title: "4. Cumplimiento Poco Fiable",
      problem4Desc: "Problema: Los proveedores pueden desviarse de los estándares. Solución: Auditorías ambientales y éticas in situ programadas y sorpresa.",
      problem5Title: "5. Altos MOQs para Eco-Materiales",
      problem5Desc: "Problema: Las opciones sostenibles requieren pedidos masivos. Solución: Redes de consolidación de proveedores y programas de inventario compartido."
    },
    fr: {
      problemsTitle1: "5 Problèmes Courants",
      problemsTitle2: "Et Solutions",
      problem1Title: "1. Écoblanchiment vs. Véritable Durabilité",
      problem1Desc: "Problème: Beaucoup se disent écologiques sans preuves. Solution: Audits de certification tiers rigoureux comme EcoVadis.",
      problem2Title: "2. Manque de Traçabilité",
      problem2Desc: "Problème: Difficulté à tracer les matériaux durables. Solution: Mise en œuvre de systèmes de suivi de bout en bout.",
      problem3Title: "3. Qualité Inconstante",
      problem3Desc: "Problème: La résistance des matériaux recyclés peut varier. Solution: Protocoles d'AQ stricts et tests de matériaux certifiés ISO.",
      problem4Title: "4. Conformité Peu Fiable",
      problem4Desc: "Problème: Les fournisseurs peuvent s'écarter des normes. Solution: Audits environnementaux et éthiques sur site programmés et surprises.",
      problem5Title: "5. MOQ Élevés pour les Éco-Matériaux",
      problem5Desc: "Problème: Les options durables exigent des commandes massives. Solution: Réseaux de consolidation des fournisseurs."
    },
    'zh-TW': {
      problemsTitle1: "5 個常見問題",
      problemsTitle2: "與解決方案",
      problem1Title: "1. 漂綠與真正的永續性",
      problem1Desc: "問題：許多供應商聲稱環保但缺乏證明。解決方案：嚴格的第三方認證審核，如 EcoVadis 和 FSC。",
      problem2Title: "2. 缺乏材料可追溯性",
      problem2Desc: "問題：難以追蹤永續材料的來源。解決方案：實施端到端的供應鏈追蹤系統。",
      problem3Title: "3. 回收材料品質不一致",
      problem3Desc: "問題：回收塑膠或紙張的強度可能有所不同。解決方案：嚴格的品質保證協議和 ISO 認證材料測試。",
      problem4Title: "4. 供應商合規性不可靠",
      problem4Desc: "問題：供應商可能會逐漸偏離環保標準。解決方案：定期與突擊性的現場環境和道德審核。",
      problem5Title: "5. 環保材料的最低訂購量過高",
      problem5Desc: "問題：永續選擇通常需要龐大的最低訂購量。解決方案：供應商整合網絡和共享庫存計劃。"
    }
  }

  const currentLang = i18n.language || 'en'
  const langContent = (translations as any)[currentLang] || translations.en
  
  const SUPPLIER_METRICS = [
    { label: t(`${p}.metrics.ethicalAudit.label`), value: t(`${p}.metrics.ethicalAudit.value`), unit: t(`${p}.metrics.ethicalAudit.unit`), desc: t(`${p}.metrics.ethicalAudit.desc`) },
    { label: t(`${p}.metrics.environment.label`), value: t(`${p}.metrics.environment.value`), unit: t(`${p}.metrics.environment.unit`), desc: t(`${p}.metrics.environment.desc`) },
    { label: t(`${p}.metrics.ecoVadis.label`), value: t(`${p}.metrics.ecoVadis.value`), unit: t(`${p}.metrics.ecoVadis.unit`), desc: t(`${p}.metrics.ecoVadis.desc`) },
    { label: t(`${p}.metrics.traceability.label`), value: t(`${p}.metrics.traceability.value`), unit: t(`${p}.metrics.traceability.unit`), desc: t(`${p}.metrics.traceability.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-supplier-verification`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<br/>
                <span className="text-emerald-900 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
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
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Supplier Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
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
                {SUPPLIER_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-800">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Audit Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.titlePart1`)}<br/>
            {t(`${p}.tech.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item1Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
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
                  <ClipboardCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.science.item1Title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.science.item1Desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <ShieldCheck className="w-12 h-12 flex-shrink-0" />
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
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">Pain Points</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {langContent.problemsTitle1}<br/>
                {langContent.problemsTitle2}
              </h2>
              <div className="mt-12 space-y-6">
                {[
                  { title: langContent.problem1Title, desc: langContent.problem1Desc, Icon: Leaf },
                  { title: langContent.problem2Title, desc: langContent.problem2Desc, Icon: Search },
                  { title: langContent.problem3Title, desc: langContent.problem3Desc, Icon: ShieldAlert },
                  { title: langContent.problem4Title, desc: langContent.problem4Desc, Icon: BadgeCheck },
                  { title: langContent.problem5Title, desc: langContent.problem5Desc, Icon: PackageSearch }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-emerald-50 border-4 border-black p-4">
                    <item.Icon className="w-8 h-8 text-emerald-800 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-lg">{item.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/eco-friendly-supplier-verification-pain-points.jpg" 
                alt="5 Common Problems" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Supplier Intelligence */}
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
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
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
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-950">{t(`${p}.cta.btnReview`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlySupplierServicePage
