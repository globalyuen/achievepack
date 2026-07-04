import React from 'react'
import { Package, CheckCircle, Recycle, Zap, Factory } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const localTranslations: Record<string, any> = {
  en: {
    painPointsTitle: '5 Common Shrink Sleeve Problems (And Solutions)',
    painPoints: [
      { title: 'Smiley / Frowning Graphics', desc: 'Precision pre-distortion prepress engineering corrects artwork distortion during heat shrinkage.' },
      { title: 'Wrinkles During Tunneling', desc: 'Adjusting steam tunnel zone temperatures ensures uniform heat distribution and wrinkle-free application.' },
      { title: 'Recyclability Issues', desc: 'Wash-off inks and micro-perforations allow sleeves to be easily separated from the PET bottle at MRF.' },
      { title: 'Scuffing & Scratching', desc: 'Reverse printing sandwiches ink between film layers, completely protecting it from transit scuffs.' },
      { title: 'Seam Splitting', desc: 'High-strength solvent welding and continuous seam testing withstand automatic high-speed application.' },
    ],
  },
  es: {
    painPointsTitle: '5 Problemas Comunes de Mangas Termoretráctiles (Y Soluciones)',
    painPoints: [
      { title: 'Gráficos Ondulados', desc: 'Preprogramación de distorsión precisa para corregir el arte durante el encogimiento.' },
      { title: 'Arrugas en el Túnel', desc: 'Calibración de zonas de temperatura en el túnel de vapor para calor uniforme.' },
      { title: 'Problemas de Reciclabilidad', desc: 'Tintas lavables y micro-perforaciones facilitan la separación de las mangas del envase PET.' },
      { title: 'Rozaduras y Rayones', desc: 'Impresión en reverso protege las tintas entre capas de film.' },
      { title: 'Rotura de Costura', desc: 'Soldadura de solventes de alta resistencia para velocidades altas de aplicación automática.' },
    ],
  },
  fr: {
    painPointsTitle: '5 Problèmes Courants des Manchons Rétractables (Et Solutions)',
    painPoints: [
      { title: 'Graphiques Déformés', desc: "Pré-distorsion prepress pour corriger l'artwork pendant le rétrécissement." },
      { title: 'Plis Pendant le Tunneling', desc: 'Calibrage des zones de tunnel vapeur pour une distribution uniforme de la chaleur.' },
      { title: 'Problèmes de Recyclabilité', desc: 'Encres lavables et micro-perforations permettent une séparation facile au centre de tri.' },
      { title: 'Égratignures', desc: "Impression inversée protège l'encre entre les couches de film." },
      { title: 'Fissuration des Coutures', desc: 'Soudure par solvant haute résistance pour applications automatiques haute vitesse.' },
    ],
  },
  'zh-TW': {
    painPointsTitle: '5 種常見收縮膜問題（與解決方案）',
    painPoints: [
      { title: '笑臉/哭臉圖形變形', desc: '精密預扭曲印前工程修正熱縮過程中的圖稿變形。' },
      { title: '熱縮隧道產生皺褶', desc: '調整蒸汽隧道區域溫度剖面，確保均勻加熱、零皺褶貼附。' },
      { title: '回收性問題', desc: '可沖洗油墨與微穿孔設計，方便在 MRF 中輕易分離收縮膜與 PET 瓶。' },
      { title: '刮傷與磨損', desc: '反向印刷將油墨夾在薄膜層之間，完全保護其免受運輸磨擦。' },
      { title: '縫合線開裂', desc: '高強度溶劑焊接與持續接縫測試，承受高速自動貼標機的壓力。' },
    ],
  },
}

const ShrinkSleevesPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const tLocal = localTranslations[lang] || localTranslations['en']
  const p = 'seoPages.pages.shrinkSleeves'

  const faqsVal = t(`${p}.faqs`, { returnObjects: true })
  const faqs = Array.isArray(faqsVal)
    ? faqsVal.map((item: any) => ({ question: item.question, answer: item.answer }))
    : [
        {
          question: 'Is PET shrink sleeve packaging recyclable?',
          answer: 'Yes! PET (Polyethylene Terephthalate) is recognized as Recyclable #1 (♻️ 1), the most widely recycled plastic resin globally. For optimal sorting, we recommend using wash-off inks or perforations so consumers can easily peel the sleeve before recycling the bottle.',
        },
        {
          question: 'What is the main difference between PET-G and PVC shrink sleeves?',
          answer: 'PET-G offers superior shrinkage control (up to 78%), excellent clarity, and is highly recyclable (#1). PVC is more cost-effective with standard shrinkage (50–60%), but is less environmentally friendly and harder to process in standard municipal recycling lines.',
        },
        {
          question: 'Do you offer tamper-evident features?',
          answer: 'Yes. We integrate horizontal or vertical perforations near the cap region. When the bottle cap is twisted, the seal breaks cleanly, providing tamper-evidence for food, beverage, and pharmaceutical safety.',
        },
        {
          question: 'What printing technologies are supported?',
          answer: 'We support high-definition flexographic printing for large runs (low unit cost) and premium digital printing for short runs starting at 1,000 units with zero cylinder plate setup fees.',
        },
      ]

  const tablesVal = t(`${p}.tables`, { returnObjects: true })
  const tables = Array.isArray(tablesVal)
    ? tablesVal.map((item: any) => ({ title: item.title, data: { headers: item.headers, rows: item.rows } }))
    : [
        {
          title: 'Shrink Sleeve Technical Specifications',
          data: {
            headers: ['Parameter', 'Specification', 'Business Value'],
            rows: [
              ['Material Base', 'Premium PET-G or Cost-effective PVC', 'High optical clarity and uniform shrink performance across gas, steam, or electric heat tunnels.'],
              ['Shrinkage Ratio', 'Horizontal: 60%–78% | Vertical: 1%–3%', 'Calibrated for extreme bottle curvatures, preventing graphic distortion or smiley effects.'],
              ['Thickness Gauge', '30 to 50 Micron film thickness options', 'Balances tensile strength for automatic high-speed applicators with material efficiency.'],
              ['Specialty Finishes', 'Matte coating, metallic foil hot-stamping, window elements', 'Premium tactile finishes and window cutouts showcase product color or level.'],
            ],
          },
        },
        {
          title: 'Application Type Comparison',
          data: {
            headers: ['Application Type', 'Shrink Material', 'Shrinkage Rate', 'Ideal Use Case'],
            rows: [
              ['Full-Body Sleeve', 'PET-G / PVC', 'Up to 78%', '360-degree branding on contoured juice, beverage, and dairy bottles'],
              ['Neck Band & Seal', 'PET / PVC', 'Up to 60%', 'Tamper-evident neck seals, hot-fill sauces, and cosmetic jars'],
              ['Multipacks / Combo', 'PET-G', 'Up to 70%', 'Bogo promotional bundles, twin-packs, and multi-tier product packs'],
              ['Pre-forms', 'PET-G', 'Up to 75%', 'Pre-shaped cap/neck sleeves for high-volume automated line speeds'],
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
              { icon: <Recycle className="w-5 h-5" />, label: 'Recyclable #1 PET', desc: 'Most widely recycled resin globally' },
              { icon: <Zap className="w-5 h-5" />, label: '360° Coverage', desc: 'No dead surface on any container' },
              { icon: <CheckCircle className="w-5 h-5" />, label: 'Tamper-Evident', desc: 'Perforated cap seals for safety' },
              { icon: <Factory className="w-5 h-5" />, label: 'High-Speed Ready', desc: 'Automatic applicator compatible' },
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
      id: 'applications',
      title: t(`${p}.sections.applications.title`, 'Common Applications'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">
            {t(`${p}.sections.applications.desc`, 'Shrink sleeves are the preferred labeling format for beverage, food, dairy, cosmetics, and pharmaceutical brands that demand premium shelf presence on complex container shapes.')}
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {((): string[] => {
              const val = t(`${p}.sections.applications.items`, { returnObjects: true })
              return Array.isArray(val) ? val : [
                'Beverages & Juice Bottles',
                'Dairy & Yogurt Containers',
                'Cosmetics & Skincare Jars',
                'Pharmaceutical Tamper Seals',
                'Sauce & Condiment Bottles',
                'Promotional Multipacks',
                'Craft Beer & Cider Cans',
                'Sports Nutrition Bottles',
                'Household Cleaner Bottles',
              ]
            })().map((item: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'painPoints',
      title: tLocal.painPointsTitle,
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          {tLocal.painPoints.map((item: any, idx: number) => (
            <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
              <h3 className="font-semibold text-neutral-800 mb-1">{item.title}</h3>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`, 'Sustainability & Recyclability'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.sustainability.desc`, 'Our PET shrink sleeves carry Resin Code ♻️ 1 — the most widely accepted plastic in global municipal recycling programs. We recommend wash-off inks and micro-perforations near the label seam so end consumers can peel the sleeve before placing the bottle in the recycling bin, ensuring full compatibility with standard MRF sorting equipment.')}
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 flex gap-3 items-start">
            <Recycle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-neutral-800 text-sm">♻️ Recyclable #1 PET — Most Accepted Resin</div>
              <div className="text-xs text-neutral-600 mt-1">Accepted by 94% of curbside recycling programs in North America. No special drop-off required.</div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <SEOPageLayout
      title={t(`${p}.title`, 'Custom Shrink Sleeves | 360° Bottle Labels | Achieve Pack')}
      description={t(`${p}.metaDescription`, 'B2B high-volume custom printed heat shrink sleeve labels in PET-G (♻️ 1) and PVC. Complete 360-degree surface branding for bottles, cans, and jars. Direct factory pricing from 1,000 units.')}
      keywords={metaKeywords}
      heroTitle={t(`${p}.heroTitle`, 'Shrink Sleeve Labels')}
      heroSubtitle={t(`${p}.heroSubtitle`, 'Maximum 360° branding real estate on any bottle shape. Recyclable PET-G (♻️ 1) available. Low MOQ from 1,000 units with digital print technology.')}
      heroImage="/imgs/store/products/shrink-sleeve-labels-shrink-sleeve-thumbnail-2.jpg"
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
  )
}

export default ShrinkSleevesPage
