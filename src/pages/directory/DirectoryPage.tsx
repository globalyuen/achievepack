import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  Package, Leaf, Recycle, Box, Shield, Printer, Star, Sparkles, Zap, 
  CheckCircle, Search, Gift, Layers, Sprout, ArrowRight, Download, 
  Sliders, Award, FileText, ChevronRight, Filter, Eye, RefreshCw, Boxes
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getDomain } from '../../utils/domain'
import { SortableOptionsTable } from '../../components/SortableOptionsTable'
import ProductSpecModal from '../../components/ProductSpecModal'

// Directory Shapes & Boxes Data
export const DIRECTORY_SHAPES = [
  { id: 'stand-up', name: 'Stand Up Pouch / Doypack', category: 'Pouches', desc: 'Versatile self-standing format with bottom gusset for maximum shelf appeal.', link: '/directory/compostable-standup-coffee-pouch', image: '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp', badge: 'Popular' },
  { id: 'box-bottom', name: 'Box Bottom / Flat Bottom Pouch', category: 'Pouches', desc: '5-panel box structure offering maximum volume and 360-degree branding.', link: '/directory/recyclable-pe-boxbottom-pouch', image: '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp', badge: 'High Volume' },
  { id: 'rigid-box', name: 'Custom Rigid Gift & Magnetic Closure Box', category: 'Boxes', desc: 'Luxury heavy-board gift boxes with custom magnetic flap lids.', link: '/directory/custom-rigid-magnetic-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', badge: 'Luxury' },
  { id: 'folding-carton', name: 'Folding Paper Carton & Retail Display Box', category: 'Boxes', desc: 'Eco-friendly folding paperboard cartons for retail display and subscription boxes.', link: '/directory/folding-paper-carton-display-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', badge: 'Retail' },
  { id: 'quad-seal', name: 'Quad Seal & Side Gusset Bag', category: 'Pouches', desc: 'Four corner seals providing reinforced structure for heavy products.', link: '/directory/quad-seal-side-gusset-petfood-bag', image: '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp', badge: 'Heavy Duty' },
  { id: 'spout-pouch', name: 'Spout & Fitment Pouch', category: 'Liquids', desc: 'Pour spout fitments for liquids, juices, oils, and semi-liquid purees.', link: '/directory/spout-pouch-liquid-packaging-guide', image: '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp', badge: 'Liquid Safe' },
  { id: '3-side-seal', name: '3-Side Seal & Sachet Pouch', category: 'Pouches', desc: 'Flat sachet format ideal for single-serve samples, powders, and cosmetics.', link: '/directory/compostable-standup-coffee-pouch', image: '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp', badge: 'Samples' },
  { id: 'rollstock', name: 'Rollstock Film & Automated VFFS Roll', category: 'Rolls', desc: 'Continuous printed film rolls for automated form-fill-seal packaging lines.', link: '/directory/spout-pouch-liquid-packaging-guide', image: '/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp', badge: 'Automation' },
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

export const DirectoryPage: React.FC = () => {
  const { t } = useTranslation()
  const isPouch = getDomain() === 'pouch'
  const [activeTab, setActiveTab] = useState<'shapes' | 'materials' | 'surfaces' | 'closures' | 'industries'>('shapes')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)

  // Filtered subpages
  const filteredSubpages = useMemo(() => {
    return DIRECTORY_SUBPAGES.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      if (activeTab === 'shapes') return matchesSearch
      return matchesSearch && item.category === activeTab
    })
  }, [searchQuery, activeTab])

  const content = (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2026 Packaging Decision Engine & Spec Directory</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Packaging Options & Specifications Directory
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 mb-6 leading-relaxed">
                Explore our comprehensive B2B/B2C directory of packaging shapes, eco-materials, surface finishes, functional closures, and industry-specific barrier standards.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Generate Full Spec Report PDF</span>
                </button>
                <Link
                  to="/store/product/eco-standup"
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl border border-neutral-700 transition-all text-sm flex items-center gap-2"
                >
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span>View Eco Stand-Up Pouch Store</span>
                </Link>
              </div>
            </div>

            {/* Quick Spec Highlights Card */}
            <div className="w-full md:w-auto bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md min-w-[280px]">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>Directory Engineering Metrics</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Canonical Materials:</span>
                  <span className="font-mono font-bold text-white">38 Certified Structures</span>
                </li>
                <li className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Default Unit Order:</span>
                  <span className="font-mono font-bold text-emerald-400">Inches (in) first, mm second</span>
                </li>
                <li className="flex items-center justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Reference Scale Can:</span>
                  <span className="font-mono font-bold text-white">355ml (2.6" x 4.8")</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-neutral-400">Digital Print MOQ:</span>
                  <span className="font-mono font-bold text-white">From 100 pcs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Search & Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search shapes, materials, finishes, valves..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {[
              { id: 'shapes', label: 'All Shapes & Boxes', icon: <Boxes className="w-3.5 h-3.5" /> },
              { id: 'materials', label: 'Eco Materials', icon: <Leaf className="w-3.5 h-3.5" /> },
              { id: 'surfaces', label: 'Surface Finishes', icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: 'closures', label: 'Closures & Valves', icon: <Shield className="w-3.5 h-3.5" /> },
              { id: 'industries', label: 'Industry Applications', icon: <Package className="w-3.5 h-3.5" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Shapes & Boxes Showcase Matrix */}
        {activeTab === 'shapes' && (
          <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Boxes className="w-5 h-5 text-emerald-400" />
              <span>Shapes & Boxes Directory Matrix</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIRECTORY_SHAPES.map(item => (
                <div key={item.id} className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500 text-neutral-950 shadow">
                        {item.badge}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm text-white mb-1.5 group-hover:text-emerald-400 transition-colors">{item.name}</h3>
                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link to={item.link} className="w-full py-2 bg-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5">
                      <span>Explore {item.category} Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Subpage Topic Clusters Grid (22 Pages) */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span>Long-Tail Directory Topic Subpages ({filteredSubpages.length})</span>
          </h2>
          <p className="text-xs text-neutral-400 mb-6">In-depth technical guides with Ryan Wong's engineering logs, 38 material structure benchmarks, and live spec generators.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubpages.map(sub => (
              <Link
                key={sub.slug}
                to={`/directory/${sub.slug}`}
                className="bg-neutral-900/40 border border-neutral-800 hover:border-emerald-500/50 p-5 rounded-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {sub.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-800 text-emerald-400 border border-neutral-700/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {sub.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold pt-3 border-t border-neutral-800/60">
                  <span>Read Full Tech Spec</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3: Technical Options & Finishes Interactive Table */}
        <div className="mb-16 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <span>Surface Treatments & Closures Option Catalog</span>
              </h2>
              <p className="text-xs text-neutral-400 mt-1">Interactive overview of available surface finishes, resealable zippers, and oxygen barriers.</p>
            </div>
            <button
              onClick={() => setIsSpecModalOpen(true)}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Spec Sheet PDF</span>
            </button>
          </div>

          <SortableOptionsTable />
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
