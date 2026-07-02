import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Layout, Leaf, Droplets, AlertTriangle, Shield, Droplet } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const sectionsForPouch = [
  { id: 'pain-points', translationKey: 'title' }
]

export const sectionsForAchieve = [
  { id: 'pain-points', translationKey: 'title' }
]

const translations: Record<string, any> = {
  en: {
    title: "5 Common Refill Pouch Problems (And Solutions)",
    desc: "Don't let poor packaging compromise your brand. Here are the top 5 pain points and how AchievePack engineering solves them.",
    points: [
      {
        title: "1. Spout Leakage & Fitment Failure",
        problem: "Weak fitment seals leading to liquid leakage under shipping pressure.",
        solution: "Low-temperature ultrasonic spout sealing and dual-seal threaded caps."
      },
      {
        title: "2. Poor Stand-up Stability",
        problem: "Improper bottom gussets causing pouches to tip over or sag on store shelves.",
        solution: "Precision-engineered bottom gusset geometry for optimal center of gravity."
      },
      {
        title: "3. Layer Delamination",
        problem: "Chemical reaction between surfactant-rich contents and lamination adhesives.",
        solution: "Advanced chemical-resistant solventless polyurethane adhesive lamination."
      },
      {
        title: "4. Puncture & Tear Risks",
        problem: "High compression and impact during courier transit leading to puncture or burst.",
        solution: "Multi-layer co-extrusion incorporating high-tensile BOPA (Nylon) barrier layers."
      },
      {
        title: "5. Difficult or Gluggy Pouring",
        problem: "High-viscosity liquids glugging or splashing during the refilling process.",
        solution: "Ergonomically angled spouts and directional venting channels for continuous air flow."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas de Recarga (y Soluciones)",
    desc: "No permita que un embalaje deficiente comprometa su marca. Aquí están los 5 principales problemas y cómo AchievePack los resuelve.",
    points: [
      {
        title: "1. Fugas en la Boquilla y Falla de Ajuste",
        problem: "Sellos de ajuste débiles que provocan fugas de líquido bajo la presión del envío.",
        solution: "Sellado de boquilla ultrasónico a baja temperatura y tapones roscados de doble sello."
      },
      {
        title: "2. Mala Estabilidad Vertical",
        problem: "Fuelles inferiores inadecuados que hacen que las bolsas se caigan o se doblen en los estantes.",
        solution: "Geometría de fuelle inferior diseñada con precisión para un centro de gravedad óptimo."
      },
      {
        title: "3. Delaminación de Capas",
        problem: "Reacción química entre contenidos ricos en tensioactivos y adhesivos de laminación.",
        solution: "Laminación avanzada con adhesivos de poliuretano sin disolventes resistentes a químicos."
      },
      {
        title: "4. Riesgos de Perforación y Rotura",
        problem: "Alta compresión e impacto durante el transporte que provocan perforaciones o roturas.",
        solution: "Coextrusión multicapa que incorpora capas de barrera de BOPA (Nailon) de alta resistencia."
      },
      {
        title: "5. Vertido Difícil o Irregular",
        problem: "Líquidos de alta viscosidad que salpican o fluyen de forma irregular durante la recarga.",
        solution: "Boquillas con ángulo ergonómico y canales de ventilación direccionales para un flujo de aire continuo."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Poches de Recharge (et Solutions)",
    desc: "Ne laissez pas un mauvais emballage compromettre votre marque. Voici les 5 principaux points faibles et comment AchievePack les résout.",
    points: [
      {
        title: "1. Fuite au Bec Verseur & Défaut de Fixation",
        problem: "Des joints de bec fragiles entraînant des fuites de liquide sous la pression du transport.",
        solution: "Scellage par ultrasons du bec à basse température et bouchons filetés à double étanchéité."
      },
      {
        title: "2. Mauvaise Stabilité Verticale",
        problem: "Des soufflets de fond inadéquats faisant basculer ou s'affaisser les poches sur les étagères.",
        solution: "Géométrie du soufflet de fond conçue de précision pour un centre de gravité optimal."
      },
      {
        title: "3. Délaminage des Couches",
        problem: "Réaction chimique entre les composants tensioactifs et les adhésifs de lamination.",
        solution: "Lamination avancée avec adhésifs polyuréthane sans solvant résistants aux produits chimiques."
      },
      {
        title: "4. Risques de Perforation & d'Éclatement",
        problem: "Forte compression et chocs pendant le transport routier provoquant des perforations.",
        solution: "Coextrusion multicouche intégrant des couches de barrière BOPA (Nylon) à haute résistance."
      },
      {
        title: "5. Versage Difficile ou Irrégulier",
        problem: "Liquides à haute viscosité qui éclaboussent ou s'écoulent difficilement lors de la recharge.",
        solution: "Becs inclinés ergonomiques et canaux de ventilation directionnels pour un flux d'air continu."
      }
    ]
  },
  'zh-TW': {
    title: "補充包的 5 個常見問題 (與解決方案)",
    desc: "不要讓劣質包裝損害您的品牌。以下是 5 個主要痛點以及 AchievePack 的工程解決方案。",
    points: [
      {
        title: "1. 吸嘴處漏液與配件失效",
        problem: "配件封口強度不足，導致在運輸壓力下液體發生滲漏。",
        solution: "採用低溫超音波吸嘴封合技術與雙重密封螺紋蓋設計。"
      },
      {
        title: "2. 直立穩定性差",
        problem: "底部折邊設計不當，導致包裝袋在貨架上傾倒或下塌。",
        solution: "精密設計的底部折邊幾何形狀，以實現最佳的重心分佈。"
      },
      {
        title: "3. 材料層分層",
        problem: "富含表面活性劑的內容物與複合黏合劑發生化學反應導致分層。",
        solution: "使用先進的耐化學性無溶劑聚氨酯黏合劑進行複合。"
      },
      {
        title: "4. 穿刺與破袋風險",
        problem: "快遞運輸過程中的高擠壓和衝擊，導致包裝被刺破或脹破。",
        solution: "多層共擠複合技術，並加入高抗拉強度的 BOPA (尼龍) 阻隔層。"
      },
      {
        title: "5. 傾倒困難與噴濺",
        problem: "高粘度液體在重複灌裝過程中產生噴濺或流動不暢。",
        solution: "符合人體工學的傾斜吸嘴與定向排氣通道，確保空氣流暢對流。"
      }
    ]
  },
  zh: {
    title: "補充包的 5 个常见问题 (与解决方案)",
    desc: "不要让劣质包装损害您的品牌。以下是 5 个主要痛点以及 AchievePack 的工程解决方案。",
    points: [
      {
        title: "1. 吸嘴处漏液与配件失效",
        problem: "配件封口强度不足，导致在运输压力下液体发生渗漏。",
        solution: "采用低温超音波吸嘴封合技术与双重密封螺纹盖设计。"
      },
      {
        title: "2. 直立稳定性差",
        problem: "底部折边设计不当，导致包装袋在货架上倾倒或下塌。",
        solution: "精密设计的底部折边几何形状，以实现最佳的重心分布。"
      },
      {
        title: "3. 材料层分层",
        problem: "富含表面活性剂的内容物与复合黏合剂发生化学反应导致分层。",
        solution: "使用先进的耐化学性无溶剂聚氨酯黏合剂进行复合。"
      },
      {
        title: "4. 穿刺与破袋风险",
        problem: "快递运输过程中的高挤压和冲击，导致包装被刺破或胀破。",
        solution: "多层共挤复合技术，并加入高抗拉强度的 BOPA (尼龙) 阻隔层。"
      },
      {
        title: "5. 倾倒困难与喷溅",
        problem: "高粘度液体在重复灌装过程中产生喷溅或流动不畅。",
        solution: "符合人体工学的倾斜吸嘴与定向排气通道，确保空气流畅对流。"
      }
    ]
  }
}





export default function RefillPouchesPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const tLocal = translations[lang] || translations['en']

  const sections = [
    {
      id: 'circular-model',
      title: t('refillPouchesPage.s1.title'),
      icon: <Layout className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('refillPouchesPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('refillPouchesPage.s1.advTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('refillPouchesPage.s1.adv1Title')}</strong> {t('refillPouchesPage.s1.adv1Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('refillPouchesPage.s1.adv2Title')}</strong> {t('refillPouchesPage.s1.adv2Desc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('refillPouchesPage.s1.adv3Title')}</strong> {t('refillPouchesPage.s1.adv3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('refillPouchesPage.s2.title'),
      icon: <Leaf className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('refillPouchesPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('refillPouchesPage.s2.structTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('refillPouchesPage.s2.s1Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.s2Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.s3Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.s4Item')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('refillPouchesPage.s2.prodTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('refillPouchesPage.s2.p1Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.p2Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.p3Item')}</li>
                <li>✓ {t('refillPouchesPage.s2.p4Item')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'carbon-freight',
      title: t('refillPouchesPage.s3.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('refillPouchesPage.s3.p1')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-green-600 mb-1">{t('refillPouchesPage.s3.metrics.m1')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('refillPouchesPage.s3.metrics.m1Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-blue-600 mb-1">{t('refillPouchesPage.s3.metrics.m2')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('refillPouchesPage.s3.metrics.m2Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-purple-600 mb-1">{t('refillPouchesPage.s3.metrics.m3')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('refillPouchesPage.s3.metrics.m3Label')}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal.title,
      icon: <AlertTriangle className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">{tLocal.desc}</p>
          
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/imgs/knowledge/refill-pouches-pain-points.jpg" 
              alt="5 Common Refill Pouch Problems" 
              className="w-full h-auto border-b-4 border-black object-cover"
            />
            <div className="p-6 bg-white space-y-6">
              {tLocal.points.map((point: any, idx: number) => {
                const icons = [
                  <AlertTriangle className="w-6 h-6 text-red-500" />,
                  <Layout className="w-6 h-6 text-blue-500" />,
                  <Leaf className="w-6 h-6 text-green-500" />,
                  <Shield className="w-6 h-6 text-purple-500" />,
                  <Droplet className="w-6 h-6 text-cyan-500" />
                ];
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">{icons[idx] || <AlertTriangle className="w-6 h-6 text-red-500" />}</div>
                    <div>
                      <h4 className="font-black text-lg text-black">{point.title}</h4>
                      <p className="text-red-600 font-medium text-sm mt-1">
                        <span className="font-bold">Problem:</span> {point.problem}
                      </p>
                      <p className="text-green-700 font-bold text-sm mt-1">
                        <span className="font-black text-black">Solution:</span> {point.solution}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('refillPouchesPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('refillPouchesPage.title')}
      metaDescription={t('refillPouchesPage.metaDesc')}
      canonicalUrl="https://pouch.eco/sustainable-packaging-revolution-glass-bottles-paired-with-compostable-refill-pouches-for-an-eco-friendly-lifestyle"
      heroTitle={
        <>
          {t('refillPouchesPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('refillPouchesPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('refillPouchesPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="CIRCULAR_REFILL"
      categoryColor="#10b981"
      readTime={t('refillPouchesPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('refillPouchesPage.cta.title')}
      ctaDescription={t('refillPouchesPage.cta.desc')}
      achievePackLink="https://achievepack.com/materials/compostable"
      achievePackText={t('refillPouchesPage.cta.achieveText')}
    />
  )
}
