import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Microscope, Truck, AlertCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const LOCAL_TRANSLATIONS = {
  en: {
    title: "5 Common Food Packaging Supplier Problems (And Solutions)",
    p1_title: "1. Oxygen & Moisture Barrier Failure",
    p1_desc: "Poor barrier films lead to food spoilage and reduced shelf life. Solution: We use high-barrier EVOH and foil laminations.",
    p2_title: "2. Delamination During Transport",
    p2_desc: "Weak adhesives cause layers to separate under stress. Solution: Solventless lamination with strict curing protocols.",
    p3_title: "3. Inconsistent Seal Integrity",
    p3_desc: "Leaking pouches due to poor heat sealing. Solution: Automated 100% seal inspection and custom sealing polymers.",
    p4_title: "4. Slow Lead Times",
    p4_desc: "Production delays causing out-of-stock scenarios. Solution: Agile manufacturing with 10-14 day rapid turnaround.",
    p5_title: "5. Non-Compliant Materials",
    p5_desc: "Using films not certified for food contact. Solution: FDA and BRCGS certified cleanroom production."
  },
  es: {
    title: "5 Problemas Comunes de los Proveedores de Empaques para Alimentos (Y Soluciones)",
    p1_title: "1. Fallo de Barrera de Oxígeno y Humedad",
    p1_desc: "Las películas de barrera deficiente provocan el deterioro de los alimentos y reducen la vida útil. Solución: Utilizamos laminaciones de EVOH y aluminio de alta barrera.",
    p2_title: "2. Delaminación Durante el Transporte",
    p2_desc: "Los adhesivos débiles causan que las capas se separen bajo estrés. Solución: Laminación sin solventes con estrictos protocolos de curado.",
    p3_title: "3. Integridad de Sellado Inconsistente",
    p3_desc: "Bolsas con fugas debido a un sellado térmico deficiente. Solución: Inspección automatizada del 100% del sellado y polímeros de sellado personalizados.",
    p4_title: "4. Tiempos de Entrega Lentos",
    p4_desc: "Retrasos en la producción que causan escenarios de falta de stock. Solución: Fabricación ágil con un tiempo de respuesta rápido de 10 a 14 días.",
    p5_title: "5. Materiales No Conformes",
    p5_desc: "Uso de películas no certificadas para contacto con alimentos. Solución: Producción en sala limpia certificada por FDA y BRCGS."
  },
  fr: {
    title: "5 Problèmes Courants des Fournisseurs d'Emballages Alimentaires (Et Solutions)",
    p1_title: "1. Défaillance de la Barrière à l'Oxygène et à l'Humidité",
    p1_desc: "De mauvais films barrières entraînent la détérioration des aliments et réduisent leur durée de conservation. Solution: Nous utilisons des laminages EVOH et aluminium à haute barrière.",
    p2_title: "2. Délamination Pendant le Transport",
    p2_desc: "Les adhésifs faibles provoquent la séparation des couches sous contrainte. Solution: Laminage sans solvant avec des protocoles de durcissement stricts.",
    p3_title: "3. Intégrité de Scellage Incohérente",
    p3_desc: "Sachets qui fuient à cause d'un mauvais thermoscellage. Solution: Inspection automatisée de 100 % des scellages et polymères de scellage personnalisés.",
    p4_title: "4. Délais de Livraison Lents",
    p4_desc: "Retards de production provoquant des ruptures de stock. Solution: Fabrication agile avec un délai de production rapide de 10 à 14 jours.",
    p5_title: "5. Matériaux Non Conformes",
    p5_desc: "Utilisation de films non certifiés pour le contact alimentaire. Solution: Production en salle blanche certifiée FDA et BRCGS."
  },
  'zh-TW': {
    title: "5 個常見的食品包裝供應商問題（及其解決方案）",
    p1_title: "1. 氧氣和水分阻隔失效",
    p1_desc: "阻隔性差的薄膜會導致食品腐敗並縮短保質期。解決方案：我們使用高阻隔EVOH和鋁箔複合材料。",
    p2_title: "2. 運輸過程中的分層",
    p2_desc: "黏合劑強度不足會導致層間在受力時分離。解決方案：採用嚴格固化方案的無溶劑複合技術。",
    p3_title: "3. 密封完整性不一致",
    p3_desc: "由於熱封不良導致袋子洩漏。解決方案：100%自動化密封檢測和定制密封聚合物。",
    p4_title: "4. 交貨期過長",
    p4_desc: "生產延遲導致缺貨情況。解決方案：敏捷製造，實現10-14天的快速交付。",
    p5_title: "5. 材料不合規",
    p5_desc: "使用未經食品接觸認證的薄膜。解決方案：通過FDA和BRCGS認證的無塵室生產。"
  }
}

export const sectionsForPouch = ["5 Common Food Packaging Supplier Problems (And Solutions)"]
export const sectionsForAchieve = ["5 Common Food Packaging Supplier Problems (And Solutions)"]

const PouchFoodPackagingSupplierServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en') as keyof typeof LOCAL_TRANSLATIONS
  const localT = LOCAL_TRANSLATIONS[lang] || LOCAL_TRANSLATIONS.en
  
  const SUPPLIER_METRICS = [
    { label: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m1.label'), value: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m1.value'), unit: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m1.unit'), desc: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m1.desc') },
    { label: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m2.label'), value: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m2.value'), unit: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m2.unit'), desc: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m2.desc') },
    { label: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m3.label'), value: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m3.value'), unit: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m3.unit'), desc: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m3.desc') },
    { label: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m4.label'), value: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m4.value'), unit: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m4.unit'), desc: t('pouchFoodPackagingSupplierServicePage.engineering.metrics.m4.desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchFoodPackagingSupplierServicePage.meta.title')}</title>
        <meta name="description" content={t('pouchFoodPackagingSupplierServicePage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/food-packaging-supplier`} />
        <meta name="keywords" content={t('pouchFoodPackagingSupplierServicePage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#7c2d12_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t('pouchFoodPackagingSupplierServicePage.hero.badge')}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic" dangerouslySetInnerHTML={{ __html: t('pouchFoodPackagingSupplierServicePage.hero.title') }} />
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchFoodPackagingSupplierServicePage.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t('pouchFoodPackagingSupplierServicePage.hero.browse')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('pouchFoodPackagingSupplierServicePage.hero.order')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
                alt={t('pouchFoodPackagingSupplierServicePage.hero.title').replace(/<br\s*\/?>/gi, ' ')} 
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
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t('pouchFoodPackagingSupplierServicePage.engineering.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchFoodPackagingSupplierServicePage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchFoodPackagingSupplierServicePage.engineering.title') }} />
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchFoodPackagingSupplierServicePage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SUPPLIER_METRICS.map((p, i) => (
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

      {/* Technical: The Manufacturing Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchFoodPackagingSupplierServicePage.tech.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16" dangerouslySetInnerHTML={{ __html: t('pouchFoodPackagingSupplierServicePage.tech.title') }} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchFoodPackagingSupplierServicePage.tech.t1.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchFoodPackagingSupplierServicePage.tech.t1.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchFoodPackagingSupplierServicePage.tech.t2.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchFoodPackagingSupplierServicePage.tech.t2.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchFoodPackagingSupplierServicePage.tech.t3.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchFoodPackagingSupplierServicePage.tech.t3.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchFoodPackagingSupplierServicePage.tech.t4.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchFoodPackagingSupplierServicePage.tech.t4.desc')}
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
              <NeoBadge color="blue">{t('pouchFoodPackagingSupplierServicePage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchFoodPackagingSupplierServicePage.lab.title') }} />
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchFoodPackagingSupplierServicePage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchFoodPackagingSupplierServicePage.lab.f1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchFoodPackagingSupplierServicePage.lab.f1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Truck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchFoodPackagingSupplierServicePage.lab.f2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchFoodPackagingSupplierServicePage.lab.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t('pouchFoodPackagingSupplierServicePage.lab.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">PAIN POINTS & SOLUTIONS</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-16">{localT.title}</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {[
                { title: localT.p1_title, desc: localT.p1_desc },
                { title: localT.p2_title, desc: localT.p2_desc },
                { title: localT.p3_title, desc: localT.p3_desc },
                { title: localT.p4_title, desc: localT.p4_desc },
                { title: localT.p5_title, desc: localT.p5_desc }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">{item.title}</h4>
                    <p className="font-['JetBrains_Mono'] text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative lg:sticky lg:top-24">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/food-packaging-supplier-pain-points.jpg" 
                alt={localT.title} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Supplier Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchFoodPackagingSupplierServicePage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12" dangerouslySetInnerHTML={{ __html: t('pouchFoodPackagingSupplierServicePage.faq.title') }} />
          <div className="space-y-4">
            {[
              { q: t('pouchFoodPackagingSupplierServicePage.faq.q1_q'), a: t('pouchFoodPackagingSupplierServicePage.faq.q1_a') },
              { q: t('pouchFoodPackagingSupplierServicePage.faq.q2_q'), a: t('pouchFoodPackagingSupplierServicePage.faq.q2_a') },
              { q: t('pouchFoodPackagingSupplierServicePage.faq.q3_q'), a: t('pouchFoodPackagingSupplierServicePage.faq.q3_a') },
              { q: t('pouchFoodPackagingSupplierServicePage.faq.q4_q'), a: t('pouchFoodPackagingSupplierServicePage.faq.q4_a') }
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
          <NeoBadge color="lime">{t('pouchFoodPackagingSupplierServicePage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic" dangerouslySetInnerHTML={{ __html: t('pouchFoodPackagingSupplierServicePage.cta.title') }} />
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchFoodPackagingSupplierServicePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t('pouchFoodPackagingSupplierServicePage.cta.samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchFoodPackagingSupplierServicePage.cta.engineer')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchFoodPackagingSupplierServicePage
