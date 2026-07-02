import { Shield, Clock, Target, Zap, Package, TrendingUp, HelpCircle, CheckCircle, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

const LOCAL_TRANSLATIONS = {
  en: {
    problemsTitle: "5 Common Pouch Barrier Problems (And Solutions)",
    p1Title: "Premature Spoilage (High OTR)",
    p1Desc: "Oxygen enters the pouch, causing food to spoil faster. Solution: Implement high-barrier EVOH or aluminum foil layers to dramatically reduce the Oxygen Transmission Rate.",
    p2Title: "Moisture Clumping (High MVTR)",
    p2Desc: "Powders and dry goods absorb moisture and clump together. Solution: Add Metallized PET (VMPET) or AL layers to effectively block water vapor.",
    p3Title: "UV Light Degradation",
    p3Desc: "Light-sensitive products degrade or change color when exposed to UV. Solution: Use opaque, printed, or fully metallized barrier films to block 100% of UV exposure.",
    p4Title: "Flavor and Aroma Loss",
    p4Desc: "Volatile aromatic compounds escape, leaving products tasting bland. Solution: Utilize Nylon (PA) layers or specialized sealants to lock in flavors and prevent aroma scalping.",
    p5Title: "Puncture-induced Barrier Failure",
    p5Desc: "Sharp edges cause pinholes, instantly destroying the barrier. Solution: Reinforce the laminate structure with BOPA (Nylon) to increase puncture resistance and flex-crack resistance."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Barrera (Y Soluciones)",
    p1Title: "Deterioro Prematuro (Alta Tasa OTR)",
    p1Desc: "El oxígeno entra en la bolsa, provocando que los alimentos se estropeen más rápido. Solución: Implementar capas de alta barrera de EVOH o papel de aluminio para reducir drásticamente la tasa de transmisión de oxígeno.",
    p2Title: "Aglutinación por Humedad (Alta Tasa MVTR)",
    p2Desc: "Los polvos y productos secos absorben la humedad y se aglutinan. Solución: Añadir capas de PET metalizado (VMPET) o aluminio para bloquear eficazmente el vapor de agua.",
    p3Title: "Degradación por Luz UV",
    p3Desc: "Los productos sensibles a la luz se degradan o cambian de color al exponerse a los rayos UV. Solución: Utilizar películas de barrera opacas, impresas o totalmente metalizadas para bloquear el 100% de la exposición UV.",
    p4Title: "Pérdida de Sabor y Aroma",
    p4Desc: "Los compuestos aromáticos volátiles escapan, dejando los productos sin sabor. Solución: Utilizar capas de Nylon (PA) o selladores especializados para conservar los sabores y evitar la pérdida de aroma.",
    p5Title: "Falla de Barrera por Perforación",
    p5Desc: "Los bordes afilados causan agujeros, destruyendo instantáneamente la barrera. Solución: Reforzar la estructura laminada con BOPA (Nylon) para aumentar la resistencia a las perforaciones y al agrietamiento por flexión."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants de Barrière (Et Solutions)",
    p1Title: "Détérioration Prématurée (OTR Élevé)",
    p1Desc: "L'oxygène pénètre dans le sachet, accélérant la détérioration des aliments. Solution: Intégrer des couches haute barrière en EVOH ou en feuille d'aluminium pour réduire considérablement le taux de transmission d'oxygène.",
    p2Title: "Agglomération due à l'Humidité (MVTR Élevé)",
    p2Desc: "Les poudres et les produits secs absorbent l'humidité et s'agglutinent. Solution: Ajouter des couches de PET métallisé (VMPET) ou d'aluminium pour bloquer efficacement la vapeur d'eau.",
    p3Title: "Dégradation par les Rayons UV",
    p3Desc: "Les produits sensibles à la lumière se dégradent ou changent de couleur lorsqu'ils sont exposés aux UV. Solution: Utiliser des films barrières opaques, imprimés ou entièrement métallisés pour bloquer 100 % de l'exposition aux UV.",
    p4Title: "Perte de Saveur et d'Arôme",
    p4Desc: "Les composés aromatiques volatils s'échappent, rendant les produits fades. Solution: Utiliser des couches de Nylon (PA) ou des scellants spécialisés pour retenir les saveurs et empêcher la perte d'arômes.",
    p5Title: "Rupture de la Barrière par Perforation",
    p5Desc: "Les bords tranchants provoquent des micro-perforations, détruisant instantanément la barrière. Solution: Renforcer la structure stratifiée avec du BOPA (Nylon) pour augmenter la résistance à la perforation et aux fissures de flexion."
  },
  'zh-TW': {
    problemsTitle: "5個常見的阻隔包裝問題 (與解決方案)",
    p1Title: "提早變質 (高透氧率 OTR)",
    p1Desc: "氧氣進入袋內，導致食品加速變質。解決方案：採用高阻隔 EVOH 或鋁箔層，大幅降低氧氣穿透率。",
    p2Title: "受潮結塊 (高透濕率 MVTR)",
    p2Desc: "粉末和乾燥產品吸收水分並結塊。解決方案：添加鍍鋁 PET (VMPET) 或純鋁層，有效阻擋水氣。",
    p3Title: "紫外線降解",
    p3Desc: "光敏產品在紫外線照射下會降解或變色。解決方案：使用不透明、印刷或全金屬化的阻隔膜，阻擋 100% 的紫外線照射。",
    p4Title: "風味與香氣流失",
    p4Desc: "揮發性芳香化合物逸出，導致產品味道變淡。解決方案：利用尼龍 (PA) 層或專用密封層鎖住風味，防止香氣流失。",
    p5Title: "穿刺導致阻隔失效",
    p5Desc: "尖銳邊緣產生針孔，瞬間破壞阻隔層。解決方案：使用 BOPA (尼龍) 強化複合結構，增加抗穿刺和抗折裂性。"
  }
}

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

// ============================================
// MAIN PAGE
// ============================================

export default function PouchBarrierOverviewPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const trans = LOCAL_TRANSLATIONS[currentLang as keyof typeof LOCAL_TRANSLATIONS] || LOCAL_TRANSLATIONS.en

  const BARRIER_LEVELS = [
    {
      id: 'low',
      name: t('pouchBarrierOverviewPage.compare.levels.low.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.low.shelf'),
      otr: '50-100 cc/m²/day',
      mvtr: '10-20 g/m²/day',
      cost: '$',
      color: 'bg-green-100',
      borderColor: 'border-green-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.low.examples', { returnObjects: true }) as string[] || [],
      icon: Zap,
      tagline: t('pouchBarrierOverviewPage.compare.levels.low.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.low.desc')
    },
    {
      id: 'medium',
      name: t('pouchBarrierOverviewPage.compare.levels.medium.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.medium.shelf'),
      otr: '5-20 cc/m²/day',
      mvtr: '2-5 g/m²/day',
      cost: '$$',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.medium.examples', { returnObjects: true }) as string[] || [],
      icon: Package,
      tagline: t('pouchBarrierOverviewPage.compare.levels.medium.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.medium.desc')
    },
    {
      id: 'high',
      name: t('pouchBarrierOverviewPage.compare.levels.high.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.high.shelf'),
      otr: '<1 cc/m²/day',
      mvtr: '<1 g/m²/day',
      cost: '$$$',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.high.examples', { returnObjects: true }) as string[] || [],
      icon: Shield,
      tagline: t('pouchBarrierOverviewPage.compare.levels.high.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.high.desc')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchBarrierOverviewPage.title')}</title>
        <meta name="description" content={t('pouchBarrierOverviewPage.metaDesc')} />
        <link rel="canonical" href="https://pouch.eco/barriers/overview" />
        <meta property="og:title" content={t('pouchBarrierOverviewPage.title')} />
        <meta property="og:description" content={t('pouchBarrierOverviewPage.metaDesc')} />
        <meta property="og:url" content="https://pouch.eco/barriers/overview" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchBarrierOverviewPage.title')} />
        <meta name="twitter:description" content={t('pouchBarrierOverviewPage.metaDesc')} />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">{t('pouchBarrierOverviewPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchBarrierOverviewPage.hero.title')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('pouchBarrierOverviewPage.hero.titleColored')}</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            {t('pouchBarrierOverviewPage.hero.desc')}
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchBarrierOverviewPage.hero.btnHelp')}
            </NeoButton>
            <NeoButton variant="secondary">{t('pouchBarrierOverviewPage.hero.btnQuiz')}</NeoButton>
          </div>
        </div>
      </section>

      {/* What is Barrier? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchBarrierOverviewPage.whatIs.title')}</h2>
          
          <NeoCard color="bg-[#00FFFF]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-2xl mb-4">{t('pouchBarrierOverviewPage.whatIs.sunscreenTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('pouchBarrierOverviewPage.whatIs.sunscreenDesc')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🌬️ {t('pouchBarrierOverviewPage.whatIs.oxygen')}</li>
                  <li>💧 {t('pouchBarrierOverviewPage.whatIs.moisture')}</li>
                  <li>☀️ {t('pouchBarrierOverviewPage.whatIs.light')}</li>
                  <li>👃 {t('pouchBarrierOverviewPage.whatIs.odors')}</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-6">
                <h4 className="font-black text-lg mb-4">{t('pouchBarrierOverviewPage.whatIs.ruleTitle')}</h4>
                <p className="text-gray-700 mb-4">
                  <strong>{t('pouchBarrierOverviewPage.whatIs.ruleText')}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  {t('pouchBarrierOverviewPage.whatIs.ruleSub')}
                </p>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">{t('pouchBarrierOverviewPage.compare.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {BARRIER_LEVELS.map((level) => (
              <NeoCard key={level.id} color={level.color} className={`${level.borderColor}`}>
                <div className="flex items-start justify-between mb-4">
                  <level.icon className="w-10 h-10" />
                  <div className="font-mono font-black text-lg">{level.cost}</div>
                </div>

                <h3 className="font-black text-2xl mb-2">{level.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{level.tagline}</p>
                
                <div className="bg-white border-2 border-black p-3 mb-4">
                  <p className="font-black text-3xl text-center">{level.shelf}</p>
                  <p className="text-xs text-center text-gray-600">{t('pouchBarrierOverviewPage.compare.typicalShelfLife')}</p>
                </div>

                <p className="text-sm text-gray-700 mb-4">{level.desc}</p>

                <div className="space-y-2 mb-4 font-mono text-xs">
                  <div>
                    <span className="font-bold">OTR:</span> {level.otr}
                  </div>
                  <div>
                    <span className="font-bold">MVTR:</span> {level.mvtr}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-sm mb-2">{t('pouchBarrierOverviewPage.compare.bestFor')}</p>
                  <div className="space-y-1">
                    {level.examples.map((ex, idx) => (
                      <div key={idx} className="text-xs bg-white border border-black px-2 py-1">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Decision Tool */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchBarrierOverviewPage.whichOne.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-green-100" className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c1.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c1.desc')}</p>
              <NeoBadge color="bg-green-300">{t('pouchBarrierOverviewPage.whichOne.c1.badge')}</NeoBadge>
              <p className="text-xs text-gray-606 mt-3">{t('pouchBarrierOverviewPage.whichOne.c1.sub')}</p>
            </NeoCard>

            <NeoCard color="bg-blue-100" className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c2.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c2.desc')}</p>
              <NeoBadge color="bg-blue-300">{t('pouchBarrierOverviewPage.whichOne.c2.badge')}</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">{t('pouchBarrierOverviewPage.whichOne.c2.sub')}</p>
            </NeoCard>

            <NeoCard color="bg-purple-100" className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c3.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c3.desc')}</p>
              <NeoBadge color="bg-purple-300">{t('pouchBarrierOverviewPage.whichOne.c3.badge')}</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">{t('pouchBarrierOverviewPage.whichOne.c3.sub')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchBarrierOverviewPage.examples.title')}</h2>
          
          <div className="space-y-6">
            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">LOW</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l1.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l1.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l1.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l1.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">MED</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l2.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l2.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l2.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l2.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">HIGH</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l3.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l3.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l3.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l3.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section className="py-16 px-4 bg-white border-y-4 border-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-black text-4xl mb-8 uppercase">{trans.problemsTitle}</h2>
              <div className="space-y-6">
                {[
                  { title: trans.p1Title, desc: trans.p1Desc },
                  { title: trans.p2Title, desc: trans.p2Desc },
                  { title: trans.p3Title, desc: trans.p3Desc },
                  { title: trans.p4Title, desc: trans.p4Desc },
                  { title: trans.p5Title, desc: trans.p5Desc }
                ].map((prob, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Target className="w-8 h-8 flex-shrink-0 text-red-500 mt-1" />
                    <div>
                      <h3 className="font-black text-xl mb-1">{prob.title}</h3>
                      <p className="text-gray-700">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative border-4 border-black bg-[#D4FF00] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/imgs/knowledge/pouch-barrier-pain-points.jpg" 
                alt="Pouch Barrier Pain Points"
                className="w-full h-auto object-cover border-2 border-black filter contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">{t('pouchBarrierOverviewPage.unsure.title')}</h2>
            <p className="text-xl text-gray-700 mb-6">
              {t('pouchBarrierOverviewPage.unsure.desc')}
            </p>
            <div className="bg-gray-50 border-2 border-black p-4 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-bold mb-2">{t('pouchBarrierOverviewPage.unsure.testHeading')}</h4>
              <ul className="text-sm space-y-1">
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t1')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t2')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t3')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t4')}</li>
              </ul>
            </div>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchBarrierOverviewPage.unsure.btn')}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            {t('pouchBarrierOverviewPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('pouchBarrierOverviewPage.cta.desc')}
          </p>
          <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
            {t('pouchBarrierOverviewPage.cta.btn')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
