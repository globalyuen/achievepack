import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers, Leaf, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation, Trans } from 'react-i18next'

const localTranslations = {
  en: {
    title: "5 Common Sustainable Packaging Pillars Problems (And Solutions)",
    badge: "Troubleshooting",
    problems: [
      { title: "Balancing Sustainability with Barrier Performance", desc: "Eco-materials like kraft paper often fail to provide adequate oxygen and moisture barriers.", solution: "Utilize mono-material PE pouches with EVOH barrier coatings that maintain high barrier properties while being 100% recyclable." },
      { title: "Sourcing Authentic PCR Content", desc: "It's difficult to verify the origin and food safety of post-consumer recycled plastics.", solution: "Partner with certified suppliers providing GRS-certified PCR materials that undergo strict decontamination processes." },
      { title: "Confusing End-of-Life Disposal", desc: "Mixed materials or unclear labeling lead to improper recycling or composting by consumers.", solution: "Implement a clear, single-pillar strategy and print explicit disposal instructions with QR code guides." },
      { title: "The 'Green Premium' Cost", desc: "Transitioning to sustainable packaging often involves significant cost increases that hurt margins.", solution: "Apply 'source reduction' techniques—using thinner, high-performance films and optimizing pouch dimensions to reduce material usage." },
      { title: "Compromised Aesthetic and Print Quality", desc: "Many sustainable films struggle with vibrant, high-resolution printing for premium branding.", solution: "Employ advanced digital printing on treated mono-material or compostable films to achieve photo-quality results." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Pilares de Empaque Sostenible (y Soluciones)",
    badge: "Solución de problemas",
    problems: [
      { title: "Equilibrar la sostenibilidad con el rendimiento de la barrera", desc: "Los materiales ecológicos suelen no proporcionar barreras adecuadas contra el oxígeno y la humedad.", solution: "Utilice bolsas de PE monomaterial con recubrimientos de barrera EVOH que mantienen altas propiedades de barrera y son 100% reciclables." },
      { title: "Obtención de contenido PCR auténtico", desc: "Es difícil verificar el origen y la seguridad alimentaria de los plásticos reciclados.", solution: "Asóciese con proveedores certificados que ofrezcan materiales PCR con certificación GRS y procesos estrictos de descontaminación." },
      { title: "Eliminación confusa al final de su vida útil", desc: "Los materiales mixtos o el etiquetado poco claro conducen a un reciclaje o compostaje inadecuados.", solution: "Implemente una estrategia clara y única, imprimiendo instrucciones explícitas de eliminación con guías de códigos QR." },
      { title: "El costo de la prima ecológica", desc: "La transición a envases sostenibles a menudo implica aumentos de costos que afectan los márgenes.", solution: "Aplique técnicas de 'reducción en la fuente', utilizando películas más delgadas de alto rendimiento para reducir el uso de material." },
      { title: "Calidad de impresión y estética comprometidas", desc: "Muchas películas sostenibles tienen dificultades con la impresión vibrante y de alta resolución.", solution: "Emplee impresión digital avanzada en películas monomateriales o compostables tratadas para lograr resultados de calidad fotográfica." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Piliers d'Emballage Durable (et Solutions)",
    badge: "Dépannage",
    problems: [
      { title: "Équilibrer la durabilité et la performance barrière", desc: "Les matériaux écologiques ne fournissent souvent pas de barrières adéquates contre l'oxygène et l'humidité.", solution: "Utilisez des sachets PE mono-matériau avec des revêtements barrières EVOH qui maintiennent des propriétés élevées tout en étant 100 % recyclables." },
      { title: "Trouver du contenu PCR authentique", desc: "Il est difficile de vérifier l'origine et la sécurité alimentaire des plastiques recyclés.", solution: "Associez-vous à des fournisseurs certifiés proposant des matériaux PCR certifiés GRS avec des processus de décontamination stricts." },
      { title: "Élimination en fin de vie confuse", desc: "Les matériaux mixtes ou un étiquetage flou entraînent un mauvais recyclage ou compostage.", solution: "Mettez en œuvre une stratégie claire et unique, et imprimez des instructions d'élimination explicites avec des guides par code QR." },
      { title: "Le coût de la prime écologique", desc: "La transition vers des emballages durables implique souvent des augmentations de coûts qui affectent les marges.", solution: "Appliquez des techniques de 'réduction à la source' avec des films plus fins et performants pour réduire l'utilisation de matériaux." },
      { title: "Esthétique et qualité d'impression compromises", desc: "De nombreux films durables ont des difficultés avec l'impression vibrante à haute résolution.", solution: "Utilisez l'impression numérique avancée sur des films mono-matériaux ou compostables traités pour obtenir des résultats de qualité photo." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的永續包裝支柱問題（與解決方案）",
    badge: "疑難排解",
    problems: [
      { title: "在永續性與阻隔性能之間取得平衡", desc: "環保材料（如牛皮紙）通常無法提供足夠的氧氣和水分阻隔。", solution: "使用帶有 EVOH 阻隔塗層的單一材質 PE 軟袋，在保持高阻隔性能的同時達到 100% 可回收。" },
      { title: "採購真實的 PCR 材料", desc: "很難驗證回收塑膠的來源和食品安全性。", solution: "與提供 GRS 認證 PCR 材料的認證供應商合作，這些材料經過嚴格的去汙處理。" },
      { title: "令消費者困惑的報廢處理", desc: "混合材料或標示不清會導致不正確的回收或堆肥。", solution: "實施清晰的單一支柱策略，並印製帶有 QR 碼指南的明確丟棄指示。" },
      { title: "「綠色溢價」成本", desc: "過渡到永續包裝通常會帶來顯著的成本增加，從而損害利潤。", solution: "採用「源頭減量」技術——使用更薄、高性能的薄膜並優化軟袋尺寸，以減少材料使用。" },
      { title: "美觀與列印品質受損", desc: "許多永續薄膜難以進行鮮豔、高解析度的列印。", solution: "在經過處理的單一材質或可堆肥薄膜上採用先進的數位印刷，實現照片級品質。" }
    ]
  }
}

const PouchSustainablePackagingPillarPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language && localTranslations[i18n.language as keyof typeof localTranslations]) ? (i18n.language as keyof typeof localTranslations) : 'en'
  const localeData = localTranslations[currentLang]
  const p = 'seoPages.pages.pouchSustainablePackagingPillar'
  
  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/sustainable-packaging`} />
        <meta name="keywords" content="sustainable packaging pillars, source reduction, mono-material recycling, PCR packaging, carbon neutral packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">{t(`${p}.hero.headlinePrefix`)}<br/>{t(`${p}.hero.headlineMid`)}<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.headlineSuffix`)}</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subheading`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.primaryBtn`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.secondaryBtn`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/sustainable-lifecycle-pillar.png" 
                alt={t(`${p}.hero.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The 5 Pillar Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/pfas-free-lab-hero.png" 
                alt={t(`${p}.engineering.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.engineering.titleLine1`)}<br/>{t(`${p}.engineering.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                <Trans i18nKey={`${p}.engineering.description`} components={[<strong key="0" />, <strong key="1" />, <strong key="2" />, <strong key="3" />, <strong key="4" />, <strong key="5" />]} />
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{t(`${p}.metrics.${i}.label`)}</h4>
                    <p className="text-xl font-black">{t(`${p}.metrics.${i}.value`)} <span className="text-[10px] opacity-60 font-normal">{t(`${p}.metrics.${i}.unit`)}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{t(`${p}.metrics.${i}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The 5 Pillar Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.technical.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">{t(`${p}.technical.titleLine1`)}<br/>{t(`${p}.technical.titleLine2`)}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="border-l-4 border-[#D4FF00] pl-8 py-4">
                <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.technical.sections.${idx}.title`)}</h3>
                <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                  {t(`${p}.technical.sections.${idx}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Science Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.material.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.material.titleLine1`)}<br/>{t(`${p}.material.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                <Trans i18nKey={`${p}.material.description`} components={[<strong key="0" />, <strong key="1" />]} />
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <BarChart3 className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.material.points.0.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.material.points.0.desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Shield className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.material.points.1.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.material.points.1.desc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.material.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">{localeData.badge}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {localeData.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {localeData.problems.map((prob, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-black flex-shrink-0" />
                    {prob.title}
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">{prob.desc}</p>
                  <div className="bg-[#D4FF00] p-4 border-2 border-black">
                    <p className="font-black uppercase text-sm mb-1">Solution:</p>
                    <p className="font-['JetBrains_Mono'] font-bold">{prob.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/sustainable-packaging-pillars-pain-points.jpg" 
                alt="Sustainable Packaging Pillars Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Pillar Strategy */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t(`${p}.faq.titleLine1`)}<br/>{t(`${p}.faq.titleLine2`)}</h2>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {t(`${p}.faq.questions.${i}.q`)}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{t(`${p}.faq.questions.${i}.a`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.cta.titleLine1`)}<br/>{t(`${p}.cta.titleLine2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.primaryBtn`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.secondaryBtn`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchSustainablePackagingPillarPage
