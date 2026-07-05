import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { ShoppingBag, Package, Zap, ShieldAlert, Wrench, Droplets, Scissors, Crosshair } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { ThreeFloatingBackground } from '../../components/ThreeFloatingBackground'

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Pouch Packaging Problems (And Solutions)",
    problems: [
      { id: 1, title: "Poor Barrier Properties", description: "Standard single-layer films fail to prevent oxygen and moisture transmission, leading to premature food spoilage and shortened shelf life.", solution: "Deploy co-extruded multi-layer laminates incorporating EVOH, ALOX, or metalized films to establish near-zero transmission barriers." },
      { id: 2, title: "Zipper & Closure Failure", description: "Weak zipper seals or misalignment can cause the bag to split open or fail to reclose properly, ruining product freshness.", solution: "Incorporate precision-molded PE/PP zippers utilizing ultrasonic seal technology and tactile feedback grooves to ensure a reliable seal." },
      { id: 3, title: "Seam Splitting & Leaking", description: "Insufficient heat sealing parameters cause pouch side seams to rupture during filling, packaging, or drop impacts.", solution: "Increase seal width parameters and utilize specialized metallocene-catalyzed PE sealants to expand the thermal sealing window." },
      { id: 4, title: "Inconsistent Tear Propagation", description: "Users struggle to open the pouch cleanly, causing jagged tears that bypass the resealable zipper or spill content.", solution: "Implement precise laser-scoring along the tear line, paired with ergonomic tear notches, ensuring a straight and clean tear." },
      { id: 5, title: "Puncture & Flex Cracking", description: "Abrasive products or rough transport cause micro-punctures or pinholes, destroying the package vacuum or barrier.", solution: "Integrate a high-tenacity nylon (BOPA) or oriented polyester (PET) intermediate layer to absorb mechanical stresses and drop impacts." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas de Empaque (Y Soluciones)",
    problems: [
      { id: 1, title: "Malas Propiedades de Barrera", description: "Las películas estándar de una sola capa no logran evitar la transmisión de oxígeno y humedad, lo que provoca el deterioro prematuro de los alimentos y reduce su vida útil.", solution: "Utilice laminados multicapa coextruidos que incorporen películas de EVOH, ALOX o metalizadas para establecer barreras de transmisión cercanas a cero." },
      { id: 2, title: "Fallo del Cierre (Zipper)", description: "Los sellados débiles de la cremallera o la desalineación pueden hacer que la bolsa se abra o no se vuelva a cerrar correctamente, arruinando la frescura del producto.", solution: "Incorpore cremalleras de PE/PP moldeadas con precisión mediante tecnología de sellado ultrasónico y ranuras de retroalimentación táctil para garantizar un sellado confiable." },
      { id: 3, title: "Fugas y Desgarro de Costuras", description: "Los parámetros de sellado térmico insuficientes provocan la ruptura de las costuras laterales de la bolsa durante el llenado, envasado o impactos por caídas.", solution: "Aumente los parámetros de ancho de sellado y utilice selladores de PE especializados catalizados por metalloceno para ampliar la ventana de sellado térmico." },
      { id: 4, title: "Propagación Inconsistente del Desgarro", description: "Los usuarios tienen dificultades para abrir la bolsa de manera limpia, lo que provoca desgarros irregulares que omiten la cremallera resellable o derraman el contenido.", solution: "Implemente un marcado láser preciso a lo largo de la línea de desgarro, junto con muescas de desgarro ergonómicas, garantizando un desgarro recto y limpio." },
      { id: 5, title: "Perforación y Agrietamiento por Flexión", description: "Los productos abrasivos o el transporte brusco provocan microperforaciones o poros, destruyendo el vacío o la barrera del paquete.", solution: "Integre una capa intermedia de nailon de alta tenacidad (BOPA) o poliéster orientado (PET) para absorber los esfuerzos mecánicos y los impactos por caídas." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets d'Emballage (Et Solutions)",
    problems: [
      { id: 1, title: "Mauvaises Propriétés de Barrière", description: "Les films monocouches standard ne parviennent pas à empêcher la transmission de l'oxygène et de l'humidité, ce qui entraîne une détérioration prématurée des aliments et raccourcit la durée de conservation.", solution: "Déployez des stratifiés multicouches coextrudés intégrant des films EVOH, ALOX ou métallisés pour établir des barrières de transmission proches de zéro." },
      { id: 2, title: "Défaillance de la Fermeture Éclair", description: "Des joints de fermeture éclair faibles ou un mauvais alignement peuvent provoquer l'ouverture du sachet ou l'impossibilité de le refermer correctement, ruinant la fraîcheur du produit.", solution: "Incorporez des fermetures éclair en PE/PP moulées de précision utilisant la technologie de scellage par ultrasons et des rainures de retour tactile pour assurer une fermeture fiable." },
      { id: 3, title: "Rupture des Soudures et Fuites", description: "Des paramètres de thermoscellage insuffisants provoquent la rupture des soudures latérales du sachet lors du remplissage, du conditionnement ou des impacts de chute.", solution: "Augmentez les paramètres de largeur de scellage et utilisez des agents de scellage PE spécialisés catalisés par métallocène pour élargir la fenêtre de thermoscellage." },
      { id: 4, title: "Propagation Inégale de la Déchirure", description: "Les utilisateurs ont du mal à ouvrir le sachet proprement, ce qui provoque des déchirures irrégulières qui contournent la fermeture éclair refermable ou renversent le contenu.", solution: "Mettez en œuvre un traçage laser précis le long de la ligne de déchirure, associé à des encoches de déchirure ergonomiques, garantissant une déchirure droite et propre." },
      { id: 5, title: "Perforation et Fissuration par Flexion", description: "Les produits abrasifs ou les transports rugueux provoquent des micro-perforations ou des trous d'épingle, détruisant le vide ou la barrière de l'emballage.", solution: "Intégrez une couche intermédiaire en nylon haute ténacité (BOPA) ou en polyester orienté (PET) pour absorber les contraintes mécaniques et les impacts de chute." }
    ]
  },
  'zh-TW': {
    title: "5 個常見軟包裝袋問題 (與解決方案)",
    problems: [
      { id: 1, title: "阻隔性能不佳", description: "標準單層薄膜無法有效阻隔氧氣與水氣滲透，導致食品過早變質並縮短保質期。", solution: "採用結合 EVOH、ALOX 或鍍鋁薄膜的共擠多層複合結構，建立近乎零滲透的阻隔層。" },
      { id: 2, title: "夾鏈結構失效", description: "夾鏈密封強度不足或對齊不良，容易導致包裝袋裂開或無法重新密封，從而破壞產品新鮮度。", solution: "採用精密模塑的 PE/PP 夾鏈，配合超聲波熱封技術與觸覺反饋凹槽，確保可靠的密封效果。" },
      { id: 3, title: "封口處開裂洩漏", description: "熱封參數設定不當會導致包裝袋側邊熱封強度不足，在充填、包裝或跌落時破裂漏氣。", solution: "增加熱封寬度參數，並使用特殊的茂金屬催化 PE 密封材料，以拓寬熱封溫度窗口。" },
      { id: 4, title: "易撕引導不均勻", description: "使用者難以整齊地撕開包裝袋，導致撕裂口呈鋸齒狀，甚至避開夾鏈或使內容物灑出。", solution: "沿撕裂線進行精確的雷射打孔定位，並搭配符合人體工學的易撕口，確保撕開時平整且筆直。" },
      { id: 5, title: "刺破與撓曲開裂", description: "具棱角的產品或粗暴的運輸過程會造成微小的刺破或針孔，破壞包裝的真空或阻隔狀態。", solution: "結合高韌性雙向拉伸尼龍 (BOPA) 或定向聚酯 (PET) 中間層，以吸收機械應力與跌落衝擊。" }
    ]
  }
};

// Target sections for Pouch page layout integration
export const sectionsForPouch = [
  { id: 'pouch-problems', translationKey: 'title' }
];

// Target sections for Achieve page layout integration
export const sectionsForAchieve = [
  { id: 'pouch-problems', translationKey: 'title' }
];

const getIcon = (id: number) => {
  switch (id) {
    case 1: return <ShieldAlert className="w-6 h-6" />;
    case 2: return <Wrench className="w-6 h-6" />;
    case 3: return <Droplets className="w-6 h-6" />;
    case 4: return <Scissors className="w-6 h-6" />;
    case 5: return <Crosshair className="w-6 h-6" />;
    default: return <ShieldAlert className="w-6 h-6" />;
  }
};

export default function PouchProductsPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en').startsWith('zh') ? 'zh-TW' : (i18n.language || 'en').substring(0, 2)
  const safeLang = ['en', 'es', 'fr', 'zh-TW'].includes(lang) ? lang : 'en'
  const tLocal = translations[safeLang] || translations['en']

  const PRODUCTS = [
    {
      id: 'stand-up',
      name: 'STAND_UP_POUCH',
      description: 'The industry standard for shelf presence. Perfect for snacks, granola, and supplements.',
      problem: 'Your brand needs to stand out, but custom printing usually requires ordering 10,000+ bags and paying expensive plate fees.',
      solution: 'Our digital print Stand Up Pouches let you launch with pro-level packaging from just 500 units—no plate fees, fast turnaround.',
      price: '$0.50',
      stats: { moq: '500', material: 'BIO/PCR', barrier: 'HIGH' },
      features: ['Self-Standing Design', 'Resealable Zipper', 'Maximum Shelf Appeal'],
      color: 'bg-[#D4FF00]', // Yellow
      image: '/3d/2d-pouch/pouch2.webp',
      link: '/packaging/stand-up-pouches'
    },
    {
      id: 'flat-bottom',
      name: 'FLAT_BOTTOM_POUCH',
      description: 'The premium choice for coffee and high-end goods. Box-like stability with flexible benefits.',
      problem: 'Premium coffee and tea need stability on the shelf and distinct branding, which standard pouches often lack.',
      solution: 'Our Flat Bottom Pouch (Box Bottom) offers 5 printable faces and maximum stability—giving your product a top-tier look.',
      price: '$0.65',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'MAX' },
      features: ['5 Printable Faces', 'Box-Like Stability', 'Premium Look & Feel'],
      color: 'bg-[#00FFFF]', // Cyan
      image: '/3d/2d-pouch/pouch1.webp',
      link: '/packaging/flat-bottom-bags'
    },
    {
      id: 'spouted',
      name: 'SPOUTED_POUCH',
      description: 'The modern alternative to rigid bottles. Lighter, unbreakable, and eco-friendly.',
      problem: 'Selling liquids in bottles is heavy, fragile, and expensive to ship—eating into your margins.',
      solution: 'Switch to flexible Spouted Pouches—lighter, durable, and uses 80% less plastic than rigid bottles. Perfect for refills.',
      price: '$0.90',
      stats: { moq: '1K', material: 'MONO-PE', barrier: 'LIQUID' },
      features: ['Leak-Proof Spout', '80% Less Plastic', 'Cheaper Shipping'],
      color: 'bg-[#FF00FF]', // Magenta
      image: '/3d/2d-pouch/pouch4.webp',
      link: '/packaging/spout-pouches'
    },
    {
      id: 'sachet',
      name: 'SACHET',
      description: 'The conversion engine. 3-side seal flat pouches perfect for single-serves and samples.',
      problem: 'Customers want to try before they buy, but generic sample packaging cheapens your brand.',
      solution: 'Our custom-printed 3-Side Seal Sachets provide a premium unboxing experience even for trial sizes. Convert browsers into buyers.',
      price: '$0.40',
      stats: { moq: '500', material: 'ANY', barrier: 'HIGH' },
      features: ['Cost-Effective', 'Mail-Friendly', 'High Conversion'],
      color: 'bg-white', // White
      image: '/3d/2d-pouch/pouch3.webp',
      link: '/packaging/flat-pouches'
    },
    {
      id: 'side-gusset',
      name: 'SIDE_GUSSET_BAG',
      description: 'The classic coffee format. Quad seal structure with expandable side panels.',
      problem: 'Roasters need a classic blocky shape that holds maximum volume without taking up too much width on the shelf.',
      solution: 'Our Side Gusset Bags offer a quad seal for rigid structure and large capacity, with no plate fees.',
      price: '$0.55',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'HIGH' },
      features: ['Classic Coffee Shape', 'High Volume Capacity', 'Quad Seal Rigidity'],
      color: 'bg-[#FF00FF]', // Magenta
      image: '/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp',
      link: '/packaging/side-gusset-bags'
    },
    {
      id: 'vacuum',
      name: 'VACUUM_POUCH',
      description: 'Heavy-duty vacuum sealer bags. Perfect for frozen food, meats, and long-term storage.',
      problem: 'Fresh food, meats, and cheese spoil quickly without an airtight seal that can withstand freezing and rough handling.',
      solution: 'Our multi-layer co-extruded Vacuum Pouches offer an absolute hermetic oxygen and moisture barrier, designed to withstand deep-freezing and sous-vide cooking.',
      price: '$0.35',
      stats: { moq: '1K', material: 'PA_PE', barrier: 'HERMETIC' },
      features: ['Oxygen & Moisture Protection', 'High Puncture Resistance', 'Sous-Vide Grade'],
      color: 'bg-[#00FFFF]', // Cyan
      image: '/imgs/pouch-shape/vacuum-pouch-eco.jpg',
      link: '/packaging/vacuum-pouches'
    },
    {
      id: 'custom-box',
      name: 'CUSTOM_BOX',
      description: 'Premium folding cartons and mailer boxes. Perfect for retail display and subscription boxes.',
      problem: 'Setting up custom retail paper boxes and mailers is complicated, requiring high setup plate/die fees and slow delivery times.',
      solution: 'Get custom-printed folding cartons and mailers from low MOQs with soy-based inks on sustainable paperboard.',
      price: '$0.75',
      stats: { moq: '100', material: 'FSC_CARD', barrier: 'RIGID' },
      features: ['Custom Structural Design', 'Soy-Based Inks', 'Biodegradable Board'],
      color: 'bg-white', // White
      image: '/imgs/pouch-shape/custom-box-eco.jpg',
      link: '/packaging/custom-boxes'
    },
    {
      id: 'shrink-sleeve',
      name: 'SHRINK_SLEEVE',
      description: 'Full-body heat shrink labels. Perfect for 360-degree bottle branding with spot varnishes.',
      problem: 'Standard bottles have non-print zones and cannot display branding on irregular or tapered geometries.',
      solution: 'Our 360-degree heat-shrinkable sleeve labels fit any bottle shape seamlessly, supporting high-contrast matte and spot gloss finishes.',
      price: '$0.15',
      stats: { moq: '5K', material: 'rPET_PETG', barrier: '360_COVER' },
      features: ['Contour-Matched Fit', 'Tactile Spot Varnish', 'No Non-Print Zone'],
      color: 'bg-[#FF00FF]', // Magenta
      image: '/imgs/pouch-shape/shrink-sleeve-label-eco.jpg',
      link: '/packaging/shrink-sleeves'
    },
    {
      id: 'custom-labels',
      name: 'CUSTOM_LABELS_AND_STICKERS',
      description: 'Premium roll labels and sheet stickers. Elevate your jar, pouch, or box branding.',
      problem: 'Custom sheet and roll labels often have high minimums or lack premium finishing options like gold foil or spot UV.',
      solution: 'Order custom labels and stickers from 100 units. Available in bio-degradable, water-resistant, or paper stocks with premium foil/UV options.',
      price: '$0.10',
      stats: { moq: '100', material: 'BIO/PAPER', barrier: 'WATERPROOF' },
      features: ['Spot UV & Foil Options', 'Roll or Sheet Formats', 'Biodegradable Options'],
      color: 'bg-[#D4FF00]', // Yellow
      image: '/imgs/pouch-shape/custom-labels-eco.jpg',
      link: '/products/labels-and-stickers'
    },
    {
      id: 'compostable-mailers',
      name: 'COMPOSTABLE_MAILER_BAGS',
      description: '100% biodegradable shipping bags. Durable reclosure for sustainable e-commerce shipping.',
      problem: 'Single-use plastic shipping mailers generate massive non-recyclable landfill waste for online brands.',
      solution: 'Switch to fully certified compostable mailers that break down in 90 days. Dual adhesive strips make return shipping easy.',
      price: '$0.30',
      stats: { moq: '500', material: 'PLA+PBAT', barrier: 'TOUGH_SHELL' },
      features: ['Dual Adhesive Strip', 'Durable & Waterproof', 'Decomposes in 90 Days'],
      color: 'bg-[#00FFFF]', // Cyan
      image: '/imgs/pouch-shape/compostable-mailer-eco.jpg',
      link: '/store?category=mailer'
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchProductsPage.meta.title')}
        description={t('pouchProductsPage.meta.description')}
      />

      {/* Hero Section with Video Background */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-products"
          >
            <source src="/video/pouch-eco-marketing-videos/use.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-2">
            {t('pouchProductsPage.hero.badge')}
          </div>
          <h1 className="font-black text-6xl md:text-8xl uppercase mb-8 leading-none">
            {t('pouchProductsPage.hero.titleLine1')}<br />{t('pouchProductsPage.hero.titleLine2')}
          </h1>
          <p className="font-['JetBrains_Mono'] text-xl max-w-2xl mx-auto">
            {t('pouchProductsPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 bg-[#F0F0F0] relative overflow-hidden">
        {/* Floating 3D Pouch Background Animation */}
        <ThreeFloatingBackground opacity={0.07} tint={0x8898bb} countPerModel={2} />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12">
            {PRODUCTS.map((product, index) => (
              <NeoCard key={product.id} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center bg-white !p-6`}>
                
                {/* Image Side - Make it full width on mobile, half on desktop */}
                <div className="w-full md:w-1/2">
                   <NeoCard className={`!p-0 overflow-hidden aspect-square relative group ${product.color} w-full`}>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-110"
                     />
                     <div className="absolute top-4 left-4 z-20">
                       <NeoBadge color="bg-black text-white">{product.stats.material}_TECH</NeoBadge>
                     </div>
                   </NeoCard>
                </div>

                {/* Content Side - Ensure it wraps correctly */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="font-black text-3xl md:text-5xl uppercase break-words">{t(`pouchProductsPage.products.${index}.name`, product.name.replace(/_/g, ' '))}</h2>
                  <div className="flex flex-wrap gap-2 font-['JetBrains_Mono'] font-bold text-xs md:text-sm">
                    <span className="bg-black text-white px-2 py-1">{t('pouchProductsPage.labels.moq')} {product.stats.moq}</span>
                    <span className="border-2 border-black px-2 py-1">{t('pouchProductsPage.labels.barrier')} {product.stats.barrier}</span>
                  </div>
                  
                  <div className="space-y-4 font-['JetBrains_Mono'] text-xs md:text-sm border-y-2 border-black py-4">
                    <div>
                      <span className="font-bold block bg-black text-white px-2 inline-block mb-1">{t('pouchProductsPage.labels.theProblem')}</span>
                      <p className="leading-relaxed text-gray-700">{t(`pouchProductsPage.products.${index}.problem`)}</p>
                    </div>
                    <div>
                      <span className="font-bold block bg-[#D4FF00] text-black px-2 inline-block mb-1 border-2 border-black">{t('pouchProductsPage.labels.theSolution')}</span>
                      <p className="leading-relaxed font-bold">{t(`pouchProductsPage.products.${index}.solution`)}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 font-['JetBrains_Mono'] text-xs md:text-sm">
                    {product.features.map((feature, fIndex) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 min-w-[16px]" /> {t(`pouchProductsPage.products.${index}.features.${fIndex}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="font-black text-2xl md:text-3xl">{t('pouchProductsPage.labels.from')} {product.price}+</div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      {product.link && (
                        <NeoButton className="w-full sm:w-auto !bg-white !text-black" href={product.link}>
                          {t('pouchProductsPage.labels.viewDetails')}
                        </NeoButton>
                      )}
                      <NeoButton className="w-full sm:w-auto" href="https://calendly.com/30-min-free-packaging-consultancy">
                        {t('pouchProductsPage.labels.bookCall')}
                      </NeoButton>
                    </div>
                  </div>
                </div>

              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden border-t-4 border-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-6xl uppercase leading-none">
              {tLocal.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image generated by Imagen */}
            <div className="w-full">
              <NeoCard className="!p-0 overflow-hidden aspect-[4/3] bg-zinc-900 border-2 border-white">
                <img 
                  src="/imgs/knowledge/pouch-products-pain-points-v2.jpg" 
                  alt="Pouch Packaging Challenges" 
                  className="w-full h-full object-cover"
                />
              </NeoCard>
            </div>
            
            {/* List of problems */}
            <div className="space-y-6">
              {tLocal.problems.map((item: any) => (
                <div key={item.id} className="bg-zinc-900 border-2 border-white p-6 hover:bg-zinc-800 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4FF00] text-black p-3 rounded-full flex-shrink-0">
                      {getIcon(item.id)}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl uppercase mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="font-['JetBrains_Mono'] text-sm text-zinc-400 mb-2">
                          {item.description}
                        </p>
                      )}
                      <p className="font-['JetBrains_Mono'] text-sm text-[#D4FF00] font-bold">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
