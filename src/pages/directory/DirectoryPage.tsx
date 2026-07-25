import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Package, Leaf, Recycle, Box, Shield, Printer, Star, Sparkles, Zap, 
  CheckCircle, Search, Gift, Layers, Sprout, ArrowRight, Download, 
  Sliders, Award, FileText, ChevronRight, ChevronLeft, Filter, Eye, RefreshCw, Boxes
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getDomain } from '../../utils/domain'
import { SortableOptionsTable, SURFACE_OPTIONS, CLOSURE_OPTIONS, BARRIER_OPTIONS } from '../../components/SortableOptionsTable'
import ProductSpecModal from '../../components/ProductSpecModal'

// Directory Shapes & Boxes Data
export const DIRECTORY_SHAPES = [
  { id: 'stand-up', name: 'Stand Up Pouch / Doypack', category: 'Pouches', desc: 'Versatile self-standing format with bottom gusset for maximum shelf appeal.', link: '/directory/compostable-standup-coffee-pouch', image: '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp', badge: 'Popular' },
  { id: 'box-bottom', name: 'Box Bottom / Flat Bottom Pouch', category: 'Pouches', desc: '5-panel box structure offering maximum volume and 360-degree branding.', link: '/directory/recyclable-pe-boxbottom-pouch', image: '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp', badge: 'High Volume' },
  { id: 'rigid-box', name: 'Custom Rigid Gift & Magnetic Closure Box', category: 'Boxes', desc: 'Luxury heavy-board gift boxes with custom magnetic flap lids.', link: '/directory/custom-rigid-magnetic-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', badge: 'Luxury' },
  { id: 'folding-carton', name: 'Folding Paper Carton & Retail Display Box', category: 'Boxes', desc: 'Eco-friendly folding paperboard cartons for retail display and subscription boxes.', link: '/directory/folding-paper-carton-display-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', badge: 'Retail' },
  { id: 'quad-seal', name: 'Quad Seal & Side Gusset Bag', category: 'Pouches', desc: 'Four corner seals providing reinforced structure for heavy products.', link: '/directory/quad-seal-side-gusset-petfood-bag', image: '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp', badge: 'Heavy Duty' },
  { id: 'spout-pouch', name: 'Spout & Fitment Pouch', category: 'Liquids', desc: 'Pour spout fitments for liquids, juices, oils, and semi-liquid purees.', link: '/directory/spout-pouch-liquid-packaging-guide', image: '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp', badge: 'Liquid Safe' },
]

// 22 Directory Subpages Directory Map
export const DIRECTORY_SUBPAGES = [
  // Cluster A: Materials
  { slug: 'compostable-standup-coffee-pouch', title: 'Compostable Stand-Up Coffee Pouches', category: 'materials', tags: ['EN 13432', 'ASTM D6400', 'Coffee'], desc: '100% certified home & industrial compostable pouches with degassing valves.' },
  { slug: 'recyclable-pe-boxbottom-pouch', title: 'Recyclable PE Mono-Material Box Bottom Pouches', category: 'materials', tags: ['Recycle #4', 'Mono-PE', 'Circular'], desc: '100% mono-material recyclable PE bags passing standard store drop-off loops.' },
  { slug: 'pcr-recycled-plastic-packaging', title: 'PCR Post-Consumer Recycled Plastic Pouches', category: 'materials', tags: ['GRS 4.0', '30%/50% PCR', 'Eco'], desc: 'Global Recycled Standard certified post-consumer recycled flexible packaging.' },
  { slug: 'bio-pe-sustainably-sourced-bags', title: 'Bio-PE Sugarcane Derived Packaging', category: 'materials', tags: ["I'm Green™", 'Sugarcane', 'Net-Zero'], desc: 'Renewable sugarcane-derived bio-polyethylene lowering carbon footprints.' },
  { slug: 'kraft-paper-barrier-pouches', title: 'High-Barrier Natural Kraft Paper Pouches', category: 'materials', tags: ['FSC Kraft', 'Natural', 'Tactile'], desc: 'Premium unbleached Kraft paper pouches fused with high-barrier plant films.' },
  
  // Cluster B: Surface Finishes
  { slug: 'softtouch-matte-premium-packaging', title: 'Soft-Touch Velvet Matte Finish Pouches', category: 'surfaces', tags: ['Velvet', 'Luxury', 'Anti-Scratch'], desc: 'Ultra-soft tactile velvet coating for high-end sensory branding.' },
  { slug: 'gloss-vs-matte-packaging-finish', title: 'Gloss vs Matte Packaging Finish Guide', category: 'surfaces', tags: ['Color Shift', 'Varnish', 'Comparison'], desc: 'In-depth comparison of gloss reflectance vs non-reflective matte color pop.' },
  { slug: 'metallic-gold-foil-stamped-pouches', title: 'Hot Foil Stamping & Metallic Gold Accent Bags', category: 'surfaces', tags: ['Foil Stamping', 'Gold/Silver', 'Premium'], desc: 'Precision metallic gold and silver hot foil accents for luxury products.' },
  { slug: 'embossed-texture-custom-pouches', title: '3D Embossed Tactile Patterned Pouches', category: 'surfaces', tags: ['3D Texture', 'Embossing', 'Custom'], desc: 'Raised dimensional textures creating tactile brand engagement.' },
  { slug: 'spot-uv-varnish-packaging', title: 'Spot UV High-Gloss Accent Packaging', category: 'surfaces', tags: ['Spot UV', 'Contrast', 'Selective'], desc: 'Selective high-gloss spot varnish contrasted against smooth matte backdrops.' },

  // Cluster C: Closures & Functions
  { slug: 'spout-pouch-liquid-packaging-guide', title: 'Spout & Fitment Pouches for Liquids & Juices', category: 'closures', tags: ['BPA-Free', 'Spout Cap', 'Liquid'], desc: 'Leakproof pour spouts designed for cold brew, oils, juices, and sauces.' },
  { slug: 'one-way-degassing-valve-coffee-bags', title: 'One-Way Degassing Valve Coffee Bags', category: 'closures', tags: ['CO2 Exhaust', 'Freshness', 'Coffee'], desc: 'Essential degassing valves releasing CO2 while locking out oxygen.' },
  { slug: 'child-resistant-zipper-pouches', title: 'Child-Resistant CR Zipper Safety Bags', category: 'closures', tags: ['ASTM D3475', 'Child Safe', 'CR Lock'], desc: 'Certified two-hand release safety zippers for regulated products.' },
  { slug: 'tin-tie-coffee-bakery-bags', title: 'Reclosable Tin Tie Coffee & Bakery Pouches', category: 'closures', tags: ['Tin Tie', 'Bakery', 'Vintage'], desc: 'Classic fold-down tin ties providing easy reclosure for artisanal goods.' },
  { slug: 'pocket-zipper-box-bottom-pouches', title: 'Top-Open Front Pocket Zipper Box Bottom Bags', category: 'closures', tags: ['Pocket Zip', 'Easy Fill', 'VFFS'], desc: 'Pull-tab front pocket zippers allowing wide top filling on automatic lines.' },

  // Cluster D: Industries & Boxes
  { slug: 'high-barrier-evoh-powders-supplements', title: 'High-Barrier EVOH Pouches for Whey & Powders', category: 'industries', tags: ['EVOH Barrier', 'OTR < 0.5', 'Supplements'], desc: 'Ultra-low oxygen & moisture permeability preventing powder clumping.' },
  { slug: 'quad-seal-side-gusset-petfood-bag', title: 'Quad Seal Side Gusset Heavy-Duty Pet Food Bags', category: 'industries', tags: ['5kg-15kg', 'Puncture Resistant', 'Pet Food'], desc: 'Reinforced multi-layer structures built to withstand heavy bulk weights.' },
  { slug: 'vacuum-sealed-frozen-food-pouches', title: 'Low-Temperature Cold Resistant Frozen Food Bags', category: 'industries', tags: ['-40°C Safe', 'Vacuum', 'Frozen Food'], desc: 'Cold-crack resistant films engineered for sub-zero freezer storage.' },
  { slug: 'retort-autoclave-sterilization-pouches', title: 'High-Temperature Retort Autoclave Pouches', category: 'industries', tags: ['121°C Retort', 'Shelf-Stable', 'Ready-Meal'], desc: 'High-heat resistant foil laminates replacing traditional metal tin cans.' },
  { slug: 'baby-food-puree-spout-pouches', title: 'BPA-Free Food Grade Baby Food Puree Spout Pouches', category: 'industries', tags: ['FDA 21 CFR', 'Choke-Safe', 'Baby Food'], desc: 'Ultra-pure food-grade materials with anti-choke safety caps for infants.' },
  { slug: 'custom-rigid-magnetic-boxes', title: 'Custom Rigid Magnetic Closure Gift Boxes', category: 'industries', tags: ['Rigid Board', 'Magnetic Flap', 'Luxury Box'], desc: 'Heavyweight rigid gift boxes with concealed magnetic flap closures.' },
  { slug: 'folding-paper-carton-display-boxes', title: 'Folding Paperboard Cartons & Display Boxes', category: 'industries', tags: ['FSC Paper', 'Retail Box', 'Subscription'], desc: 'Custom printed folding paper boxes for retail shelves and subscription kits.' },
]

// Multilingual Dictionary
const localDict: Record<string, Record<string, string>> = {
  en: {
    heroTag: '2026 Packaging Decision Engine & Spec Directory',
    heroTitle: 'Packaging Directory & Spec Finder',
    heroDesc: 'Explore shapes, eco-materials, surface finishes, functional closures, and certified packaging specifications.',
    pdfBtn: 'Generate Full Spec Report PDF',
    storeBtn: 'View Eco Stand-Up Pouch Store',
    subpagesTitle: 'Technical Spec Guides & Deep Dives',
    subpagesDesc: 'Browse 22 specialized engineering guides across materials, finishes, closures, and box formats.',
    allCategory: 'All Guides',
    materialsTab: '🌱 Eco Materials',
    surfacesTab: '✨ Surface Finishes',
    closuresTab: '🔒 Closures & Valves',
    industriesTab: '📦 Industry & Boxes',
    readSpec: 'Read Tech Spec →'
  },
  'zh-tw': {
    heroTag: '2026 包裝全選項決策引擎與規格目錄',
    heroTitle: '包裝全選項與技術規格目錄',
    heroDesc: '探索袋型盒型、環保材質、表面工藝、封口功能及國際認證包裝規格。',
    pdfBtn: '一鍵生成 Full Spec PDF 報告',
    storeBtn: '前往 Eco 立體袋產品頁',
    subpagesTitle: '專題技術規格與深入指南',
    subpagesDesc: '瀏覽 22 個涵蓋材質、工藝、封口及盒型的專業工程指南。',
    allCategory: '全部指南',
    materialsTab: '🌱 環保材質',
    surfacesTab: '✨ 表面工藝',
    closuresTab: '🔒 封口功能',
    industriesTab: '📦 行業與盒型',
    readSpec: '閱讀技術規格 →'
  },
  es: {
    heroTag: 'Motor de Decisión y Directorio de Especificaciones 2026',
    heroTitle: 'Directorio de Opciones y Especificaciones de Empaque',
    heroDesc: 'Explore formas, materiales ecológicos, acabados superficiales y cierres funcionales.',
    pdfBtn: 'Generar Reporte Full Spec PDF',
    storeBtn: 'Ver Tienda de Bolsas Eco Stand-Up',
    subpagesTitle: 'Guías de Especificaciones Técnicas',
    subpagesDesc: 'Explore 22 guías especializadas de ingeniería en materiales, acabados y cierres.',
    allCategory: 'Todas las Guías',
    materialsTab: '🌱 Materiales Ecológicos',
    surfacesTab: '✨ Acabados Superficiales',
    closuresTab: '🔒 Cierres y Válvulas',
    industriesTab: '📦 Industrias y Cajas',
    readSpec: 'Leer Especificación →'
  },
  fr: {
    heroTag: "Moteur de Décision et Répertoire d'Spécifications 2026",
    heroTitle: "Répertoire des Options et Spécifications d'Emballage",
    heroDesc: "Explorez les formes, matériaux écologiques, finitions de surface et fermetures.",
    pdfBtn: "Générer Rapport Full Spec PDF",
    storeBtn: "Voir la Boutique Pouches Eco",
    subpagesTitle: "Guides de Spécifications Techniques",
    subpagesDesc: "Parcourez 22 guides d'ingénierie spécialisés sur les matériaux et finitions.",
    allCategory: "Tous les Guides",
    materialsTab: "🌱 Matériaux Écolo",
    surfacesTab: "✨ Finitions Surface",
    closuresTab: "🔒 Fermetures & Valves",
    industriesTab: "📦 Industries & Boîtes",
    readSpec: "Lire Spécification →"
  }
}

export const DirectoryPage: React.FC = () => {
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'en').toLowerCase()
  const d = localDict[lang] || localDict.en

  const isPouch = getDomain() === 'pouch'
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)

  // Filtered subpages for 23A Carousel
  const filteredSubpages = useMemo(() => {
    if (activeCategory === 'all') return DIRECTORY_SUBPAGES
    return DIRECTORY_SUBPAGES.filter(s => s.category === activeCategory)
  }, [activeCategory])

  const content = (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-14 overflow-hidden border-b border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{d.heroTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                {d.heroTitle}
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed mb-6">
                {d.heroDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 text-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>{d.pdfBtn}</span>
                </button>
                <Link
                  to="/store/product/eco-standup"
                  className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl border border-neutral-700 transition-all text-xs flex items-center gap-2"
                >
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span>{d.storeBtn}</span>
                </Link>
              </div>
            </div>

            {/* Scale & Barrier Reference Badge */}
            <div className="w-full md:w-auto bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 min-w-[260px] text-xs">
              <div className="font-bold text-emerald-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Engineering Standards</span>
              </div>
              <div className="space-y-1.5 text-neutral-300 font-mono text-[11px]">
                <div className="flex justify-between"><span>Default Unit:</span><span className="text-white font-bold">Inches (in) first</span></div>
                <div className="flex justify-between"><span>355ml Can Scale:</span><span className="text-white font-bold">2.6" x 4.8" (66x122mm)</span></div>
                <div className="flex justify-between"><span>Barrier Rating:</span><span className="text-emerald-400 font-bold">OTR &lt; 0.5 cc/m²/24h</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shapes & Boxes Directory Matrix */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Boxes className="w-5 h-5 text-emerald-400" />
          <span>Shapes &amp; Boxes Directory Matrix</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DIRECTORY_SHAPES.map(item => (
            <div key={item.id} className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all group flex flex-col justify-between p-4">
              <div>
                <div className="aspect-video bg-neutral-950 rounded-lg overflow-hidden mb-3 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500 text-neutral-950 shadow">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-white mb-1 group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <Link to={item.link} className="w-full py-2 bg-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 text-xs font-semibold rounded-lg text-center transition-colors flex items-center justify-center gap-1">
                <span>View {item.category} Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* 23A Horizontal Scroll Carousel presentation for Subpages */}
        <div className="mb-16 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>{d.subpagesTitle}</span>
              </h2>
              <p className="text-xs text-neutral-400 mt-1">{d.subpagesDesc}</p>
            </div>

            {/* Category Filter Tabs for Carousel */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
              {[
                { id: 'all', label: d.allCategory },
                { id: 'materials', label: d.materialsTab },
                { id: 'surfaces', label: d.surfacesTab },
                { id: 'closures', label: d.closuresTab },
                { id: 'industries', label: d.industriesTab },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === tab.id
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 23A Sleek Horizontal Carousel */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth">
            {filteredSubpages.map(sub => (
              <Link
                key={sub.slug}
                to={`/directory/${sub.slug}`}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-neutral-950 border border-neutral-800 hover:border-emerald-500/60 p-4 rounded-xl transition-all group flex flex-col justify-between flex-shrink-0"
              >
                <div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {sub.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[9px] font-mono bg-neutral-900 text-emerald-400 border border-neutral-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xs text-white group-hover:text-emerald-400 transition-colors mb-1.5 leading-snug line-clamp-2">
                    {sub.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                    {sub.desc}
                  </p>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold flex items-center justify-between pt-2 border-t border-neutral-900">
                  <span>{d.readSpec}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Technical Option Tables */}
        <div className="space-y-8">
          <SortableOptionsTable
            options={SURFACE_OPTIONS}
            title="Surface Treatments & Finishes Catalog"
            categoryColor="green"
            type="surface"
          />
          <SortableOptionsTable
            options={CLOSURE_OPTIONS}
            title="Resealable Zipper & Fitment Closures"
            categoryColor="blue"
            type="closure"
          />
          <SortableOptionsTable
            options={BARRIER_OPTIONS}
            title="Oxygen & Moisture Barrier Film Layers"
            categoryColor="purple"
            type="barrier"
          />
        </div>
      </section>

      {/* Full Spec Generator Modal */}
      <ProductSpecModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
      />
    </div>
  )

  return isPouch ? (
    <PouchLayout>{content}</PouchLayout>
  ) : (
    <SEOPageLayout>{content}</SEOPageLayout>
  )
}

export default DirectoryPage
