import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Wind } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchVacuumPouchesPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const p = 'seoPages.pages.pouchVacuumPouches'

  const localTranslations = {
    en: {
      sectionTitle: "5 Common Vacuum Pouches Problems (And Solutions)",
      p1Title: "Loss of Vacuum Integrity",
      p1Desc: "Punctures or micro-leaks cause vacuum failure. We solve this using multi-layer co-extruded films with high puncture resistance.",
      p2Title: "Freezer Burn & Moisture Loss",
      p2Desc: "Improper barrier properties lead to product degradation. We use high barrier EVOH layers to block oxygen and moisture.",
      p3Title: "Subpar Clarity",
      p3Desc: "Cloudy films obscure the product. We provide ultra-clear, high-gloss film formulations for maximum visibility.",
      p4Title: "Poor Seal Through Contamination",
      p4Desc: "Liquids or fats in the seal area cause leaks. Our advanced sealant layers seal securely through contaminants.",
      p5Title: "Curling and Deformation",
      p5Desc: "Films curl after thermoforming or sealing. We engineer balanced film structures for perfect flatness."
    },
    zh: {
      sectionTitle: "5個常見的真空袋問題（及解決方案）",
      p1Title: "真空完整性喪失",
      p1Desc: "刺穿或微漏導致真空失效。我們使用具有高抗穿刺性的多層共擠薄膜來解決這個問題。",
      p2Title: "凍傷與水分流失",
      p2Desc: "阻隔性能不佳導致產品變質。我們使用高阻隔 EVOH 層來阻擋氧氣和水分。",
      p3Title: "透明度不佳",
      p3Desc: "渾濁的薄膜會遮擋產品。我們提供超高清晰度和高光澤度的薄膜配方，實現最佳能見度。",
      p4Title: "污染物導致密封不良",
      p4Desc: "密封區的液體或脂肪會導致洩漏。我們先進的密封層可穿透污染物實現牢固密封。",
      p5Title: "捲曲與變形",
      p5Desc: "薄膜在熱成型或密封後捲曲。我們設計了平衡的薄膜結構，確保完美的平整度。"
    },
    fr: {
      sectionTitle: "5 Problèmes Courants des Sachets Sous Vide (Et Solutions)",
      p1Title: "Perte d'Intégrité du Vide",
      p1Desc: "Les perforations causent des fuites. Nous utilisons des films co-extrudés multicouches très résistants.",
      p2Title: "Brûlure de Congélation",
      p2Desc: "De mauvaises barrières dégradent le produit. Nous utilisons des couches EVOH haute barrière.",
      p3Title: "Mauvaise Transparence",
      p3Desc: "Les films troubles masquent le produit. Nous offrons des films ultra-transparents et brillants.",
      p4Title: "Mauvaise Étanchéité via Contamination",
      p4Desc: "Les liquides causent des fuites. Nos couches scellantes avancées scellent même à travers les contaminants.",
      p5Title: "Enroulement et Déformation",
      p5Desc: "Les films se déforment. Nous concevons des structures équilibrées pour une planéité parfaite."
    },
    es: {
      sectionTitle: "5 Problemas Comunes de las Bolsas al Vacío (Y Soluciones)",
      p1Title: "Pérdida de Integridad del Vacío",
      p1Desc: "Los pinchazos causan fugas. Usamos películas coextruidas multicapa con alta resistencia.",
      p2Title: "Quemadura por Congelación",
      p2Desc: "Las malas barreras degradan el producto. Usamos capas de EVOH de alta barrera.",
      p3Title: "Mala Claridad",
      p3Desc: "Las películas opacas ocultan el producto. Ofrecemos películas ultraclaras y de alto brillo.",
      p4Title: "Mal Sellado por Contaminación",
      p4Desc: "Los líquidos causan fugas. Nuestras capas selladoras avanzadas sellan a través de contaminantes.",
      p5Title: "Ondulación y Deformación",
      p5Desc: "Las películas se deforman. Diseñamos estructuras equilibradas para una planitud perfecta."
    }
  }

  const getTranslation = (key: keyof typeof localTranslations.en) => {
    if (lang === 'zh-TW' || lang === 'zh') return localTranslations.zh[key]
    if (lang === 'fr') return localTranslations.fr[key]
    if (lang === 'es') return localTranslations.es[key]
    return localTranslations.en[key]
  }

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroClass`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.heroTitleVacuum`)}<br/>
                {t(`${p}.heroTitleSeal`)}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitlePreserve`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t(`${p}.heroBullet1`)}<br/>
                &gt; {t(`${p}.heroBullet2`)}<br/>
                &gt; {t(`${p}.heroBullet3`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroBtnExplore`)}</NeoButton>
                <NeoButton variant="secondary">{t(`${p}.heroBtnDownload`)}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-[#D4FF00] to-[#00FFFF] flex items-center justify-center relative">
                  <Wind className="w-64 h-64 text-black opacity-80 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" strokeWidth={1.5} />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    {t(`${p}.heroBadge`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#FF00FF] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <h3 className="font-black text-3xl mb-4 uppercase text-black">{t(`${p}.card1Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-black">
              {t(`${p}.card1Desc`)}
            </p>
            <NeoBadge color="bg-[#00FFFF]">{t(`${p}.card1Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <h3 className="font-black text-3xl mb-4 uppercase text-black">{t(`${p}.card2Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-black">
              {t(`${p}.card2Desc`)}
            </p>
            <NeoBadge color="bg-[#FF00FF]">{t(`${p}.card2Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <h3 className="font-black text-3xl uppercase text-white mb-4">{t(`${p}.card3Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              {t(`${p}.card3Desc`)}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t(`${p}.card3Badge`)}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black text-4xl md:text-5xl uppercase text-black mb-8">
                {getTranslation('sectionTitle')}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-8 h-8 text-[#FF00FF]" />,
                    title: getTranslation('p1Title'),
                    desc: getTranslation('p1Desc')
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-[#D4FF00]" />,
                    title: getTranslation('p2Title'),
                    desc: getTranslation('p2Desc')
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8 text-[#00FFFF]" />,
                    title: getTranslation('p3Title'),
                    desc: getTranslation('p3Desc')
                  },
                  {
                    icon: <Award className="w-8 h-8 text-[#FF00FF]" />,
                    title: getTranslation('p4Title'),
                    desc: getTranslation('p4Desc')
                  },
                  {
                    icon: <Package className="w-8 h-8 text-[#D4FF00]" />,
                    title: getTranslation('p5Title'),
                    desc: getTranslation('p5Desc')
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#fafafa]">
                    <div className="shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-1 text-black">{item.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-black">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <NeoCard className="bg-[#00FFFF] rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/vacuum-pouches-pain-points.jpg" 
                  alt="Vacuum Pouches Solutions" 
                  className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                />
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.ctaTitle`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtnConsult`)}</NeoButton>
            <NeoButton variant="dark">{t(`${p}.ctaBtnPrice`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
