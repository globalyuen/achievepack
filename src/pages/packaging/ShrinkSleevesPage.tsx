import React, { useState } from 'react'
import { Package, CheckCircle, Recycle, Zap, Factory, AlertTriangle, HelpCircle, ArrowRight, Sun, Flame, Droplets, ChevronLeft, ChevronRight, X } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations: Record<string, any> = {
  en: {
    painPointsTitle: 'Comprehensive Troubleshooting Guide for Packers',
    painPoints: [
      { 
        title: 'Graphic Distortion (Smileys & Frowns)', 
        desc: 'Occurs when the film shrinks unevenly around bottle curves, bending lines and text. Solution: Implement advanced prepress 3D digital grid modeling to apply reverse distortion to the flat artwork before printing.' 
      },
      { 
        title: 'Wrinkles, Smiles, and Air Bubbles', 
        desc: 'Usually caused by sudden heat shocks or uneven temperature zones inside the tunnel. Solution: Grade the heat profile across multiple tunnel chambers, starting with low pre-heat (70°C) and ramping up gradually.' 
      },
      { 
        title: 'Recycling Stream Contamination', 
        desc: 'PET sleeves on PET bottles can contaminate the flake sort if not separated. Solution: Use wash-off inks (ink detaches in a 85°C caustic bath) and dual micro-perforations so consumers or automated de-labelers can peel off the sleeve.' 
      },
      { 
        title: 'Scuffing and Ink Peeling', 
        desc: 'Severe abrasion during shipping or automatic sorting. Solution: Utilize gravure or digital reverse printing, sandwiching the inks behind a protective 40-micron PET-G layer so the surface remains pristine.' 
      },
      { 
        title: 'Seam Splitting and Bursting', 
        desc: 'Weak solvent bonding breaks under high-speed automatic container insertion. Solution: Enforce continuous inline seam-weld monitoring and optical inspection systems during label conversion.' 
      },
    ],
  },
  es: {
    painPointsTitle: 'Guía Completa de Resolución de Problemas para Envasadores',
    painPoints: [
      { 
        title: 'Distorsión Gráfica (Efecto Sonrisa o Tristeza)', 
        desc: 'Ocurre cuando la película se encoge de forma desigual. Solución: Implementar pre-distorsión 3D digital en preprensa para compensar las curvas antes de la impresión.' 
      },
      { 
        title: 'Arrugas y Burbujas de Aire', 
        desc: 'Causadas por choques térmicos o zonas de temperatura desiguales. Solución: Graduar el perfil de calor en múltiples cámaras de túnel de vapor.' 
      },
      { 
        title: 'Contaminación en el Flujo de Reciclaje', 
        desc: 'Las mangas PET no separadas contaminan las hojuelas de PET. Solución: Utilizar tintas lavables (a 85°C) y microperforaciones duales.' 
      },
      { 
        title: 'Rozaduras y Pelado de Tinta', 
        desc: 'Abrasión durante el transporte. Solución: Impresión en reverso que sella las tintas detrás de una capa de 40 micras de PET-G.' 
      },
      { 
        title: 'Rotura de Costura', 
        desc: 'Fallo de pegado solvente en aplicadoras automáticas de alta velocidad. Solución: Monitoreo continuo y pruebas de soldadura de costura.' 
      },
    ],
  },
  fr: {
    painPointsTitle: 'Guide de Dépannage Complet pour les Conditionneurs',
    painPoints: [
      { 
        title: 'Distorsion Graphique (Smileys et Frowns)', 
        desc: "Se produit lorsque le film rétrécit de manière inégale. Solution : Utiliser un modèle de grille numérique 3D en prépresse pour pré-distordre l'œuvre d'art." 
      },
      { 
        title: 'Plis et Bulles d\'Air', 
        desc: 'Généralement causés par des chocs thermiques. Solution : Graduer la température dans le tunnel en utilisant plusieurs zones de chauffe.' 
      },
      { 
        title: 'Recyclabilité et Valorisation', 
        desc: 'Les manchons contaminent le PET recyclé. Solution : Utiliser des encres lavables et des micro-perforations pour un pelage facile.' 
      },
      { 
        title: 'Éraflures et Usure de l\'Encre', 
        desc: 'Abrasion pendant le transport. Solution : L\'impression verso emprisonne l\'encre sous une couche de film PET-G protecteur de 40 microns.' 
      },
      { 
        title: 'Fissuration de la Soudure', 
        desc: 'Rupture de la couture de colle lors de l\'application à grande vitesse. Solution : Contrôles qualité en ligne réguliers de la résistance du joint solvant.' 
      },
    ],
  },
  'zh-TW': {
    painPointsTitle: '包裝商收縮標籤全面排障指南',
    painPoints: [
      { 
        title: '圖稿變形與曲率失真', 
        desc: '當收縮膜在瓶身弧度處不均勻收縮時會彎曲字體。解決方案：在印前進行 3D 數值網格模擬，將補償性反向扭曲預先套用在平面圖稿中。' 
      },
      { 
        title: '皺褶、拉扯與氣泡形成', 
        desc: '通常由收縮隧道內瞬間熱衝擊或風速不均引起。解決方案：採用多段式溫度調節，從低溫預熱（70°C）逐漸升溫至收縮區。' 
      },
      { 
        title: '回收流交叉污染', 
        desc: 'PET 瓶身上的收縮膜會干擾光學分選。解決方案：採用可水洗脫墨技術（可在 85°C 鹼水槽中脫墨）並設計雙排微型撕裂線以便人工剝離。' 
      },
      { 
        title: '墨層刮傷與脫落', 
        desc: '高速輸送帶磨擦或裝箱運輸摩擦。解決方案：採用裡印（Reverse Printing）工藝，將油墨保護在 40 微米 PET-G 薄膜下方。' 
      },
      { 
        title: '合掌縫線開裂與爆開', 
        desc: '溶劑合掌強度不足，在套標機高速撐開套入時斷裂。解決方案：於合掌機上配備線上溶劑塗佈紅外線檢測與動態拉力測試。' 
      },
    ],
  }
}

const ShrinkSleevesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const tLocal = localTranslations[lang] || localTranslations['en']
  const p = 'seoPages.pages.shrinkSleeves'

  const [activePhoto, setActivePhoto] = useState<number | null>(null)

  const studioGallery = [
    {
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-11.jpg',
      title: 'Flat Unrolled PET-G Label (Lemon Zest)',
      desc: 'Unrolled flexible label showing the pre-distorted artwork design prior to application and heat tunnel shrinkage.'
    },
    {
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-12.jpg',
      title: 'Conformed Tropical Rush Beverage Bottle',
      desc: 'Perfect 360-degree wrinkle-free conformability matching the extreme curves of a plastic beverage bottle.'
    },
    {
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-13.jpg',
      title: 'Premium Cosmetic Glass Jars',
      desc: 'High-end cosmetic jars decorated with custom matte-coated and hot-stamped PET-G sleeves.'
    },
    {
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-14.jpg',
      title: 'Steam Shrink Tunnel Technical Layout',
      desc: 'Technical engineering diagram displaying multi-stage nozzle zone control inside an industrial steam tunnel.'
    },
    {
      src: '/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-15.jpg',
      title: 'Multiple Flat Label Prototypes Flat Lay',
      desc: 'A collection of custom-designed food, beverage, and supplement unrolled shrink label films showing print options.'
    }
  ]

  const faqsVal = t(`${p}.faqs`, { returnObjects: true })
  const faqs = Array.isArray(faqsVal)
    ? faqsVal.map((item: any) => ({ question: item.question, answer: item.answer }))
    : [
        {
          question: 'Is PET shrink sleeve packaging recyclable?',
          answer: 'Yes! PET-G (Polyethylene Terephthalate Glycol) belongs to the general PET family (Resin Code ♻️ 1), which is the most widely recycled plastic globally. To prevent sorting conflicts, Achieve Pack recommends using floatable films, wash-off inks, or micro-perforations so consumers can easily tear off the label before depositing it in the recycling bin.',
        },
        {
          question: 'What is the main difference between PET-G and PVC shrink sleeves?',
          answer: 'PET-G offers higher shrinkage capacity (up to 78%), superior optical clarity, zero stress-whitening, and is fully recyclable. PVC is a lower-cost option with 50-60% shrinkage, but releases hazardous chlorine compounds when incinerated and is banned by many modern eco-conscious brands.',
        },
        {
          question: 'Do you offer tamper-evident features?',
          answer: 'Yes. We can integrate horizontal or vertical micro-perforations near the neck area. When the bottle cap is twisted, the sleeve breaks cleanly, providing proof of tamper-evidence for food, beverage, and medical products.',
        },
        {
          question: 'What printing technologies are supported?',
          answer: 'We support high-definition flexographic printing for large-scale runs and high-resolution digital printing for short-run production starting from 1,000 units with zero cylinder plate setup fees.',
        },
      ]

  const tablesVal = t(`${p}.tables`, { returnObjects: true })
  const tables = Array.isArray(tablesVal)
    ? tablesVal.map((item: any) => ({ title: item.title, data: { headers: item.headers, rows: item.rows } }))
    : [
        {
          title: 'Shrink Sleeve Technical Specifications',
          data: {
            headers: ['Parameter', 'Specification / Range', 'Impact on Packer / Machine Performance'],
            rows: [
              ['Material Base', 'Premium PET-G (Polyethylene Terephthalate Glycol) or PVC', 'Ensures high clarity, toughness, and uniform shrinkage in heat tunnels.'],
              ['Shrinkage Ratio', 'TD: 60%–78% (Transverse) | MD: 1%–3% (Machine Direction)', 'Transverse shrinkage conforms to curves; low machine direction prevents label vertical crawling.'],
              ['Thickness Gauge', '30, 40, or 50 Micron options (standard: 40μ)', 'Thin films save material; thicker films improve running speeds on high-speed automatic applicators.'],
              ['Specialty Finishes', 'Matte coat, glossy, metallic foils, transparent windows', 'Enhances tactile appeal on retail shelves and allows contents visualization.'],
            ],
          },
        },
        {
          title: 'Comparison of Application Shrinking Methods',
          data: {
            headers: ['Method', 'Process Medium', 'Conformity Quality', 'Best Use Case'],
            rows: [
              ['Steam Tunnel', 'Saturated Steam (100°C–105°C)', 'Excellent (Zero wrinkles, uniform temperature)', 'Contoured beverage bottles, full-body sleeves, high-speed automated lines'],
              ['Hot Air Tunnels / Blowers', 'Forced Hot Air (130°C–220°C)', 'Good / Moderate (Risk of hot spots or burn marks)', 'Symmetrical shapes, neck bands, moisture-sensitive containers'],
              ['Water Baths', 'Hot Water Immersion (80°C–90°C)', 'Specialized / Testing (Requires post-drying)', 'Laboratory verification, heavy glass container warm-ups, specialty items'],
            ],
          },
        },
      ]

  const relatedLinksVal = t(`${p}.relatedLinks`, { returnObjects: true })
  const relatedLinks = Array.isArray(relatedLinksVal)
    ? relatedLinksVal
    : [
        { title: 'Stand-Up Pouches', url: '/packaging/stand-up-pouches', description: 'Classic shelf-standing pouches' },
        { title: 'Custom Labels & Stickers', url: '/products/labels-and-stickers', description: 'Flat label alternatives' },
        { title: 'Spout Pouches', url: '/packaging/spout-pouches', description: 'Liquid packaging solutions' },
      ]

  const metaKeywordsVal = t(`${p}.metaKeywords`, { returnObjects: true })
  const metaKeywords = Array.isArray(metaKeywordsVal)
    ? metaKeywordsVal
    : [
        'custom shrink sleeves',
        'heat shrink labels',
        'shrink sleeve labels',
        'PET shrink sleeve',
        'recyclable bottle labels',
        '360 degree branding',
        'bottle label printing',
        'achieve pack shrink',
      ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'What is a Shrink Sleeve?'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`, 'A shrink sleeve is a full-body label made from PET-G or PVC film that conforms to any complex container shape when exposed to controlled heat.')}</strong>{' '}
            {t(`${p}.sections.overview.desc`, 'Unlike pressure-sensitive labels limited to flat surfaces, shrink sleeves wrap 360 degrees around bottles, cans, jars, and specialty containers — providing maximum branding real estate and tamper-evidence.')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: <Recycle className="w-5 h-5" />, label: '100% Recyclable PET', desc: 'Resin Code #1 compatible' },
              { icon: <Zap className="w-5 h-5" />, label: '360° Real Estate', desc: 'No dead surface on containers' },
              { icon: <CheckCircle className="w-5 h-5" />, label: 'Tamper-Evident', desc: 'Perforated neck seals for safety' },
              { icon: <Factory className="w-5 h-5" />, label: 'High-Speed Applicators', desc: 'Engineered for packaging lines' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <div className="text-primary-600">{item.icon}</div>
                <div className="font-semibold text-sm text-neutral-800">{item.label}</div>
                <div className="text-xs text-neutral-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'application-methods',
      title: 'Heat Shrinking Application Technologies',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            To achieve a perfect wrinkle-free shrink fit on contoured containers, packers use different heat transfer systems. Understanding which method fits your production line is critical to reducing rejects:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary-700 font-bold">
                <Droplets className="w-5 h-5 text-primary-600" />
                <span>Steam Heat Tunnels</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Uses saturated steam (100°C–105°C) to heat the film. Saturated steam transfers heat 30 times faster than air, distributing energy uniformly.
              </p>
              <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 mt-auto">
                Best for: Extreme curvatures & high-speed lines.
              </div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary-700 font-bold">
                <Sun className="w-5 h-5 text-primary-600" />
                <span>Hot Air Tunnels / Blowers</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Uses forced hot air (130°C–220°C) inside a chamber or through direct nozzles. Easier to install and maintain as no boiler/water treatment is required.
              </p>
              <div className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-100 mt-auto">
                Best for: Neck bands & moisture-sensitive products.
              </div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary-700 font-bold">
                <Flame className="w-5 h-5 text-primary-600" />
                <span>Hot Water Baths</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Involves dipping or spraying hot water (80°C–90°C). Primarily used in laboratories for shrink rate calibration, and warm-ups of glass/metal heavy thermal sinks.
              </p>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 mt-auto">
                Best for: Heavy glass test runs & thermal warmups.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'gallery',
      title: 'Shrink Sleeve Studio Gallery',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-sm text-neutral-600">
            Click on any image to enlarge and view technical descriptors of our unrolled and conformed labels.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {studioGallery.map((img, idx) => (
              <div 
                key={idx}
                className="border border-neutral-200 p-2 bg-white rounded-lg cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setActivePhoto(idx)}
              >
                <img src={img.src} alt={img.title} className="w-full h-32 object-cover rounded-md border border-neutral-100" />
                <h4 className="font-bold text-xs text-neutral-800 mt-2 truncate">{img.title}</h4>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'painPoints',
      title: tLocal.painPointsTitle,
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          {tLocal.painPoints.map((item: any, idx: number) => (
            <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-neutral-50 flex gap-3">
              <div className="bg-primary-500/20 text-primary-700 font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ]

  const nextPhoto = () => {
    if (activePhoto === null) return
    setActivePhoto((activePhoto + 1) % studioGallery.length)
  }

  const prevPhoto = () => {
    if (activePhoto === null) return
    setActivePhoto((activePhoto - 1 + studioGallery.length) % studioGallery.length)
  }

  return (
    <>
      <SEOPageLayout
        title={t(`${p}.title`, 'Custom Shrink Sleeves | 360° Bottle Labels | Achieve Pack')}
        description={t(`${p}.metaDescription`, 'B2B high-volume custom printed heat shrink sleeve labels in PET-G (♻️ 1) and PVC. Complete 360-degree surface branding for bottles, cans, and jars. Direct factory pricing from 1,000 units.')}
        keywords={metaKeywords}
        heroTitle={t(`${p}.heroTitle`, 'Shrink Sleeve Labels')}
        heroSubtitle={t(`${p}.heroSubtitle`, 'Maximum 360° branding real estate on any bottle shape. Recyclable PET-G (♻️ 1) available. Low MOQ from 1,000 units with digital print technology.')}
        heroImage="/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-12.jpg"
        heroImageAlt={t(`${p}.heroImageAlt`, 'Custom printed PET shrink sleeve bottle labels')}
        introSummary={t(`${p}.introSummary`, 'Shrink sleeves provide full-body 360-degree printed coverage that conforms perfectly to complex bottle curvatures. Made from recyclable PET (♻️ #1), they transform ordinary containers into visually striking retail products while meeting modern sustainability mandates.')}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Product"
        relatedLinks={relatedLinks}
        ctaTitle={t(`${p}.cta.title`, 'Spec Your Shrink Sleeves')}
        ctaDescription={t(`${p}.cta.description`, 'Our prepress team is ready to assist with pre-distortion alignment to ensure your design looks flawless on complex container contours.')}
        ctaButtonText={t(`${p}.cta.button`, 'Request Factory Quote')}
        ctaButtonUrl="/store/product/eco-shrinksleeve"
        breadcrumbs={[
          { label: 'Home', url: '/' },
          { label: 'Packaging Shapes', url: '/store?category=eco-digital' },
          { label: 'Shrink Sleeves', url: '/packaging/shrink-sleeves' },
        ]}
        materialType="recyclable"
      />

      {/* Lightbox / Enlarged Photo Carousel */}
      {activePhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl w-full flex flex-col items-center gap-4">
            <button 
              onClick={prevPhoto}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full z-45 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="bg-white p-3 rounded-lg border-2 border-neutral-700 shadow-2xl max-w-full">
              <img 
                src={studioGallery[activePhoto].src} 
                alt={studioGallery[activePhoto].title} 
                className="max-h-[60vh] max-w-full w-auto object-contain mx-auto"
              />
            </div>

            <button 
              onClick={nextPhoto}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full z-45 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="text-center text-white space-y-1 mt-2 px-6">
              <h4 className="font-['Outfit'] font-bold text-lg text-primary-400 uppercase">
                {studioGallery[activePhoto].title}
              </h4>
              <p className="text-sm text-neutral-300 max-w-2xl mx-auto">
                {studioGallery[activePhoto].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ShrinkSleevesPage
