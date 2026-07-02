import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Layout, Leaf, Droplets, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Refill Pouch Problems (And Solutions)",
    p1: { title: "Leakage at the Spout", desc: "Solution: Reinforced spout sealing and leak-proof thread design." },
    p2: { title: "Poor Stand-up Stability", desc: "Solution: Engineered bottom gusset geometry for optimal center of gravity." },
    p3: { title: "Delamination of Layers", desc: "Solution: Advanced adhesive lamination and structural integrity testing." },
    p4: { title: "Difficult to Pour", desc: "Solution: Ergonomically angled spouts and directional flow control." },
    p5: { title: "Low Eco-Friendliness", desc: "Solution: Mono-material compostable or recyclable films replacing multi-layer foil." }
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas de Recarga (y Soluciones)",
    p1: { title: "Fugas en la Boquilla", desc: "Solución: Sellado de boquilla reforzado y diseño de rosca a prueba de fugas." },
    p2: { title: "Mala Estabilidad Vertical", desc: "Solución: Geometría de fuelle inferior diseñada para un centro de gravedad óptimo." },
    p3: { title: "Delaminación de Capas", desc: "Solución: Laminación adhesiva avanzada y pruebas de integridad estructural." },
    p4: { title: "Dificultad para Verter", desc: "Solución: Boquillas con ángulo ergonómico y control de flujo direccional." },
    p5: { title: "Baja Sostenibilidad", desc: "Solución: Películas monomaterial compostables o reciclables que reemplazan el papel de aluminio multicapa." }
  },
  fr: {
    title: "5 Problèmes Courants des Poches de Recharge (et Solutions)",
    p1: { title: "Fuites au Bec Verseur", desc: "Solution : Scellage renforcé du bec et conception de filetage étanche." },
    p2: { title: "Mauvaise Stabilité Verticale", desc: "Solution : Géométrie du soufflet de fond conçue pour un centre de gravité optimal." },
    p3: { title: "Délaminage des Couches", desc: "Solution : Lamination adhésive avancée et tests d'intégrité structurelle." },
    p4: { title: "Difficile à Verser", desc: "Solution : Becs inclinés de manière ergonomique et contrôle du flux directionnel." },
    p5: { title: "Faible Éco-responsabilité", desc: "Solution : Films mono-matériaux compostables ou recyclables remplaçant les feuilles multicouches." }
  },
  'zh-TW': {
    title: "補充包的 5 個常見問題 (與解決方案)",
    p1: { title: "吸嘴處漏液", desc: "解決方案：加強吸嘴密封和防漏螺紋設計。" },
    p2: { title: "直立穩定性差", desc: "解決方案：優化底部折邊幾何形狀，達到最佳重心。" },
    p3: { title: "材料層分層", desc: "解決方案：先進的粘合劑複合和結構完整性測試。" },
    p4: { title: "傾倒困難", desc: "解決方案：人體工學角度吸嘴和定向流量控制。" },
    p5: { title: "環保性不足", desc: "解決方案：單一材料可堆肥或可回收薄膜取代多層鋁箔。" }
  },
  zh: {
    title: "补充包的 5 个常见问题 (与解决方案)",
    p1: { title: "吸嘴处漏液", desc: "解决方案：加强吸嘴密封和防漏螺纹设计。" },
    p2: { title: "直立稳定性差", desc: "解决方案：优化底部折边几何形状，达到最佳重心。" },
    p3: { title: "材料层分层", desc: "解决方案：先进的粘合剂复合和结构完整性测试。" },
    p4: { title: "倾倒困难", desc: "解决方案：人体工学角度吸嘴和定向流量控制。" },
    p5: { title: "环保性不足", desc: "解决方案：单一材料可堆肥或可回收薄膜取代多层铝箔。" }
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
          <img src="/imgs/knowledge/refill-pouches-pain-points.jpg" alt="Refill Pouches Pain Points" className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6" />
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <ul className="space-y-4 text-lg font-medium">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <strong>{tLocal[`p${num}`].title}:</strong> {tLocal[`p${num}`].desc}
                  </div>
                </li>
              ))}
            </ul>
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
