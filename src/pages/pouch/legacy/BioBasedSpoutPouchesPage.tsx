import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Leaf, Droplets, Settings, Shield, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const localTranslations: Record<string, any> = {
  en: {
    title: "5 Common Bio-Based Spout Pouch Problems (And Solutions)",
    items: [
      { q: "Leakage at Spout Seal", a: "Bio-based films often have narrower sealing windows. Solution: Advanced low-temperature ultrasonic sealing technology." },
      { q: "Compromised Barrier Properties", a: "Bio-plastics can be permeable. Solution: Applying invisible AlOx/SiOx high-barrier coatings." },
      { q: "Layer Delamination", a: "Adhesives failing under liquid weight. Solution: Proprietary bio-compatible strong lamination adhesives." },
      { q: "Reduced Puncture Resistance", a: "Increased risk of bursting during transport. Solution: Multi-layer co-extrusion with strengthening bio-polymers." },
      { q: "Slower Filling Speeds", a: "Material stiffness affecting spout alignment. Solution: High-precision automated filling machinery adjustments." }
    ]
  },
  es: {
    title: "5 problemas comunes de las bolsas con pico de base biológica (y soluciones)",
    items: [
      { q: "Fugas en el sello del pico", a: "Las películas biológicas tienen ventanas de sellado más estrechas. Solución: Tecnología avanzada de sellado ultrasónico a baja temperatura." },
      { q: "Propiedades de barrera comprometidas", a: "Los bioplásticos pueden ser permeables. Solución: Aplicación de recubrimientos invisibles de alta barrera AlOx/SiOx." },
      { q: "Delaminación de capas", a: "Los adhesivos fallan bajo el peso del líquido. Solución: Adhesivos de laminación fuertes y biocompatibles exclusivos." },
      { q: "Resistencia a la perforación reducida", a: "Mayor riesgo de estallido durante el transporte. Solución: Coextrusión multicapa con biopolímeros de refuerzo." },
      { q: "Velocidades de llenado más lentas", a: "La rigidez del material afecta la alineación del pico. Solución: Ajustes de maquinaria de llenado automatizada de alta precisión." }
    ]
  },
  fr: {
    title: "5 problèmes courants des sachets à bec biosourcés (et solutions)",
    items: [
      { q: "Fuites au niveau du bouchon", a: "Les films biosourcés ont des fenêtres de scellage plus étroites. Solution: Technologie avancée de scellage par ultrasons à basse température." },
      { q: "Propriétés barrière compromises", a: "Les bioplastiques peuvent être perméables. Solution: Application de revêtements barrières invisibles AlOx/SiOx." },
      { q: "Délamination des couches", a: "Les adhésifs cèdent sous le poids du liquide. Solution: Adhésifs de lamination exclusifs et biocompatibles." },
      { q: "Résistance à la perforation réduite", a: "Risque accru d'éclatement pendant le transport. Solution: Coextrusion multicouche avec des biopolymères de renforcement." },
      { q: "Vitesses de remplissage plus lentes", a: "La rigidité du matériau affecte l'alignement du bouchon. Solution: Ajustements de machines de remplissage automatisées de haute précision." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的生物基吸嘴袋問題與解決方案",
    items: [
      { q: "吸嘴封口洩漏", a: "生物基薄膜的封合窗口通常較窄。解決方案：先進的低溫超音波封合技術。" },
      { q: "阻隔性能下降", a: "生物塑料可能具透氣性。解決方案：應用高阻隔的透明 AlOx/SiOx 塗層。" },
      { q: "薄膜分層", a: "黏合劑在液體重量下失效。解決方案：專有生物相容性強效複合黏合劑。" },
      { q: "抗穿刺性降低", a: "運輸過程中破裂風險增加。解決方案：加強型生物聚合物的多層共擠技術。" },
      { q: "灌裝速度較慢", a: "材料硬度影響吸嘴對齊。解決方案：高精度自動化灌裝設備調整。" }
    ]
  }
}

export default function BioBasedSpoutPouchesPage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const tLocal = localTranslations[currentLang] || localTranslations['en']

  const sections = [
    {
      id: 'sugarcane-pe',
      title: t('bioBasedSpoutPouchesPage.s1.title'),
      icon: <Leaf className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('bioBasedSpoutPouchesPage.s1.highlightTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('bioBasedSpoutPouchesPage.s1.perfTitle')}</strong> {t('bioBasedSpoutPouchesPage.s1.perfDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('bioBasedSpoutPouchesPage.s1.recyTitle')}</strong> {t('bioBasedSpoutPouchesPage.s1.recyDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('bioBasedSpoutPouchesPage.s1.eprTitle')}</strong> {t('bioBasedSpoutPouchesPage.s1.eprDesc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'compostable-laminations',
      title: t('bioBasedSpoutPouchesPage.s2.title'),
      icon: <Droplets className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s2.p1')}
          </p>
          
          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl uppercase mb-3 text-neutral-900">{t('bioBasedSpoutPouchesPage.s2.specTitle')}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-xs font-mono bg-neutral-50 p-4 border-2 border-black">
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.coreLaminate')}</strong> {t('bioBasedSpoutPouchesPage.s2.coreLaminateVal')}</div>
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.waterRes')}</strong> {t('bioBasedSpoutPouchesPage.s2.waterResVal')}</div>
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.otr')}</strong> {t('bioBasedSpoutPouchesPage.s2.otrVal')}</div>
              <div><strong>{t('bioBasedSpoutPouchesPage.s2.wvtr')}</strong> {t('bioBasedSpoutPouchesPage.s2.wvtrVal')}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spout-fitments',
      title: t('bioBasedSpoutPouchesPage.s3.title'),
      icon: <Settings className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s3.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.thDiam')}</th>
                  <th className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.thConfig')}</th>
                  <th className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.thApp')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">{t('bioBasedSpoutPouchesPage.s3.table.r1.d')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r1.c')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r1.a')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">{t('bioBasedSpoutPouchesPage.s3.table.r2.d')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r2.c')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r2.a')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">{t('bioBasedSpoutPouchesPage.s3.table.r3.d')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r3.c')}</td>
                  <td className="p-4">{t('bioBasedSpoutPouchesPage.s3.table.r3.a')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'carbon-metrics',
      title: t('bioBasedSpoutPouchesPage.s4.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('bioBasedSpoutPouchesPage.s4.p1')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 font-mono text-center text-black">
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-green-600 mb-1">{t('bioBasedSpoutPouchesPage.s4.metrics.m1')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('bioBasedSpoutPouchesPage.s4.metrics.m1Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-blue-600 mb-1">{t('bioBasedSpoutPouchesPage.s4.metrics.m2')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('bioBasedSpoutPouchesPage.s4.metrics.m2Label')}</div>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <div className="text-3xl font-black text-purple-600 mb-1">{t('bioBasedSpoutPouchesPage.s4.metrics.m3')}</div>
              <div className="text-xs font-bold uppercase text-neutral-500">{t('bioBasedSpoutPouchesPage.s4.metrics.m3Label')}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal.title,
      icon: <Wrench className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <img 
            src="/imgs/knowledge/bio-based-spout-pouches-pain-points.jpg" 
            alt="Bio-based Spout Pouch Engineering Illustration" 
            className="w-full h-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] object-cover rounded-md"
          />
          <div className="space-y-4">
            {tLocal.items.map((item: { q: string, a: string }, index: number) => (
              <div key={index} className="bg-white p-4 border-l-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-lg text-neutral-900 mb-1">{item.q}</h4>
                <p className="text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('bioBasedSpoutPouchesPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('bioBasedSpoutPouchesPage.title')}
      metaDescription={t('bioBasedSpoutPouchesPage.metaDesc')}
      canonicalUrl="https://pouch.eco/eco-friendly-packaging-revolution-introducing-bio-based-spout-pouches-for-liquid"
      heroTitle={
        <>
          {t('bioBasedSpoutPouchesPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('bioBasedSpoutPouchesPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('bioBasedSpoutPouchesPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="SUSTAINABLE_MATERIALS"
      categoryColor="#10b981"
      readTime={t('bioBasedSpoutPouchesPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('bioBasedSpoutPouchesPage.cta.title')}
      ctaDescription={t('bioBasedSpoutPouchesPage.cta.desc')}
      achievePackLink="https://achievepack.com/packaging/spout-pouches"
      achievePackText={t('bioBasedSpoutPouchesPage.cta.achieveText')}
    />
  )
}
