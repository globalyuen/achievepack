import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Droplets, Shield, TrendingUp, AlertTriangle, Droplet, Zap, Maximize, Crosshair } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const translations = {
  en: {
    sectionTitle: "5 Common Drink Liquid Pouch Problems (And Solutions)",
    desc: "Don't let poor packaging compromise your beverage. Here are the top 5 pain points and how AchievePack engineering solves them.",
    points: [
      {
        title: "1. Leaking at the Seams or Spout",
        problem: "Weak seals cause liquids to leak during transit or storage.",
        solution: "We use reinforced heat sealing and a dual-layer barrier for maximum durability."
      },
      {
        title: "2. Punctures During Transit",
        problem: "Sharp objects or rough handling can easily puncture standard pouches.",
        solution: "A high-tensile strength nylon (BOPA) layer prevents tearing and punctures."
      },
      {
        title: "3. Oxygen & UV Degradation",
        problem: "Exposure to light and oxygen ruins the flavor and shelf life of drinks.",
        solution: "Our pouches feature AL (Aluminum foil) or EVOH layers for ultimate barrier protection."
      },
      {
        title: "4. Difficulty in Pouring",
        problem: "Poorly designed spouts lead to spilling or choking hazards.",
        solution: "We integrate ergonomic, anti-choke spouts for smooth and safe liquid flow."
      },
      {
        title: "5. Pouches Not Standing Upright",
        problem: "Improper bottom gussets cause pouches to tip over on store shelves.",
        solution: "Precision bottom gusset engineering ensures a stable, self-standing profile."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes de las Bolsas de Líquidos (Y Soluciones)",
    desc: "No deje que un embalaje deficiente comprometa su bebida. Estos son los 5 principales problemas y cómo AchievePack los resuelve.",
    points: [
      { title: "1. Fugas en Costuras o Boquilla", problem: "Los sellos débiles causan fugas.", solution: "Usamos sellado térmico reforzado y barrera de doble capa." },
      { title: "2. Perforaciones en Tránsito", problem: "Manejo brusco puede perforar la bolsa.", solution: "Capa de nailon de alta resistencia (BOPA) evita desgarros." },
      { title: "3. Degradación por Oxígeno y UV", problem: "Luz y oxígeno arruinan el sabor.", solution: "Capas de aluminio o EVOH para máxima barrera." },
      { title: "4. Dificultad al Verter", problem: "Boquillas mal diseñadas causan derrames.", solution: "Boquillas ergonómicas anti-ahogo para flujo suave." },
      { title: "5. Bolsas que No se Mantienen de Pie", problem: "Fuelle inferior inadecuado causa que se caigan.", solution: "Fuelle inferior de precisión asegura estabilidad." }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants des Poches Liquides (Et Solutions)",
    desc: "Ne laissez pas un mauvais emballage compromettre votre boisson. Voici les 5 principaux points faibles et comment AchievePack les résout.",
    points: [
      { title: "1. Fuites aux Coutures ou au Bec", problem: "Les joints faibles provoquent des fuites.", solution: "Nous utilisons un thermoscellage renforcé et une barrière double couche." },
      { title: "2. Perforations Pendant le Transport", problem: "Une manipulation brutale peut percer la poche.", solution: "Une couche de nylon haute résistance (BOPA) empêche les déchirures." },
      { title: "3. Dégradation par Oxygène et UV", problem: "L'oxygène ruine la saveur et la durée de conservation.", solution: "Couches en aluminium ou EVOH pour une protection ultime." },
      { title: "4. Difficulté à Verser", problem: "Becs mal conçus entraînent des déversements.", solution: "Becs ergonomiques anti-étouffement pour un écoulement fluide." },
      { title: "5. Poches Qui Ne Tiennent Pas Debout", problem: "Un mauvais soufflet de fond fait basculer la poche.", solution: "Conception de précision du soufflet de fond pour une stabilité." }
    ]
  },
  'zh-TW': {
    sectionTitle: "5個常見的液體包裝袋問題 (及解決方案)",
    desc: "不要讓劣質包裝影響您的飲品。以下是5個主要痛點以及AchievePack的工程解決方案。",
    points: [
      { title: "1. 接縫或吸嘴漏液", problem: "密封不牢導致運輸中漏液。", solution: "我們採用強化熱封和雙層阻隔以實現最大耐用性。" },
      { title: "2. 運輸過程中被刺破", problem: "粗暴搬運容易刺破普通包裝袋。", solution: "高抗拉強度尼龍(BOPA)層可防止撕裂和刺破。" },
      { title: "3. 氧氣和紫外線降解", problem: "光線和氧氣會破壞風味和保質期。", solution: "我們的包裝袋採用鋁箔(AL)或EVOH層提供終極阻隔保護。" },
      { title: "4. 傾倒困難", problem: "吸嘴設計不良導致溢出或嗆到。", solution: "我們整合符合人體工學的防嗆吸嘴，確保液體順暢流出。" },
      { title: "5. 包裝袋無法直立", problem: "底部立體設計不當導致在貨架上傾倒。", solution: "精密的底部立體工程設計確保穩定自立。" }
    ]
  }
}

export default function DrinkLiquidPouchPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const tLocal = translations[currentLang as keyof typeof translations] || translations.en

  const sections = [
    {
      id: 'barrier-tech',
      title: t('drinkLiquidPouchPage.s1.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('drinkLiquidPouchPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black text-2xl uppercase mb-4 text-black">{t('drinkLiquidPouchPage.s1.profileTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('drinkLiquidPouchPage.s1.l1Title')}</strong> {t('drinkLiquidPouchPage.s1.l1Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('drinkLiquidPouchPage.s1.l2Title')}</strong> {t('drinkLiquidPouchPage.s1.l2Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('drinkLiquidPouchPage.s1.l3Title')}</strong> {t('drinkLiquidPouchPage.s1.l3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'seam-engineering',
      title: t('drinkLiquidPouchPage.s2.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('drinkLiquidPouchPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('drinkLiquidPouchPage.s2.sealTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('drinkLiquidPouchPage.s2.s1Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.s2Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.s3Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.s4Item')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('drinkLiquidPouchPage.s2.appTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('drinkLiquidPouchPage.s2.a1Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.a2Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.a3Item')}</li>
                <li>✓ {t('drinkLiquidPouchPage.s2.a4Item')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'drop-tests',
      title: t('drinkLiquidPouchPage.s3.title'),
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('drinkLiquidPouchPage.s3.p1')}
          </p>
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-lg uppercase mb-4 font-['JetBrains_Mono'] text-black">{t('drinkLiquidPouchPage.s3.logTitle')}</h4>
            <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-green-600 mb-1">{t('drinkLiquidPouchPage.s3.m1')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('drinkLiquidPouchPage.s3.m1Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-blue-600 mb-1">{t('drinkLiquidPouchPage.s3.m2')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('drinkLiquidPouchPage.s3.m2Label')}</div>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <div className="text-3xl font-black text-amber-600 mb-1">{t('drinkLiquidPouchPage.s3.m3')}</div>
                <div className="text-xs font-bold uppercase text-neutral-500">{t('drinkLiquidPouchPage.s3.m3Label')}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal.sectionTitle,
      icon: <AlertTriangle className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">{tLocal.desc}</p>
          
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/imgs/knowledge/drink-liquid-pouch-pain-points.jpg" 
              alt="Drink Liquid Pouch Pain Points" 
              className="w-full h-64 object-cover border-b-4 border-black"
            />
            <div className="p-6 bg-white space-y-6">
              {tLocal.points.map((point, idx) => {
                const icons = [<AlertTriangle className="w-6 h-6 text-red-500" />, <Droplet className="w-6 h-6 text-blue-500" />, <Zap className="w-6 h-6 text-yellow-500" />, <Maximize className="w-6 h-6 text-purple-500" />, <Crosshair className="w-6 h-6 text-green-500" />]
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">{icons[idx]}</div>
                    <div>
                      <h4 className="font-black text-lg text-black">{point.title}</h4>
                      <p className="text-red-600 font-medium text-sm mt-1"><span className="font-bold">Problem:</span> {point.problem}</p>
                      <p className="text-green-700 font-bold text-sm mt-1"><span className="font-black text-black">Solution:</span> {point.solution}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing-matrix',
      title: t('drinkLiquidPouchPage.s4.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('drinkLiquidPouchPage.s4.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('drinkLiquidPouchPage.s4.table.thQty')}</th>
                  <th className="p-4">{t('drinkLiquidPouchPage.s4.table.thDigital')}</th>
                  <th className="p-4">{t('drinkLiquidPouchPage.s4.table.thGravure')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('drinkLiquidPouchPage.s4.table.r1.q')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r1.d')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r1.g')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('drinkLiquidPouchPage.s4.table.r2.q')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r2.d')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r2.g')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('drinkLiquidPouchPage.s4.table.r3.q')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r3.d')}</td>
                  <td className="p-4">{t('drinkLiquidPouchPage.s4.table.r3.g')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('drinkLiquidPouchPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('drinkLiquidPouchPage.title')}
      metaDescription={t('drinkLiquidPouchPage.metaDesc')}
      canonicalUrl="https://pouch.eco/100-compostable-3-side-sealed-pouch-for-drink-liquid-alcohol-etc"
      heroTitle={
        <>
          {t('drinkLiquidPouchPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('drinkLiquidPouchPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('drinkLiquidPouchPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="LIQUID_PACKAGING"
      categoryColor="#10b981"
      readTime={t('drinkLiquidPouchPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('drinkLiquidPouchPage.cta.title')}
      ctaDescription={t('drinkLiquidPouchPage.cta.desc')}
      achievePackLink="https://achievepack.com/packaging/flat-pouches"
      achievePackText={t('drinkLiquidPouchPage.cta.achieveText')}
    />
  )
}
