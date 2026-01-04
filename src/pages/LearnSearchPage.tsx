import { useState, useMemo, useEffect, useCallback, useTransition } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, ArrowRight, ShoppingCart, Leaf, Package, Factory, FileText, Users, Award, ShoppingBag, Boxes, Beaker, BookOpen } from 'lucide-react'
import { useStore } from '../store/StoreContext'

// Categories for filtering
const CATEGORIES = [
  'All',
  'Materials',
  'Packaging',
  'Features',
  'Industries',
  'Products',
  'Solutions',
  'Topics',
  'Case Studies',
  'Knowledge'
]

// All SEO pages for search
const ALL_PAGES = [
  // Materials
  { name: 'Compostable Overview', link: '/materials/compostable', image: '/imgs/illustrated/a_compostable_v3_9254998.webp', category: 'Materials', description: 'Complete guide to compostable packaging materials and certifications', keywords: ['compostable', 'biodegradable', 'eco', 'sustainable'] },
  { name: 'Home Compostable', link: '/materials/home-compostable', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp', category: 'Materials', description: 'Home compostable pouches that break down in backyard compost', keywords: ['home', 'compost', 'backyard', 'garden'] },
  { name: 'Industrial Compostable', link: '/materials/industrial-compostable', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp', category: 'Materials', description: 'Industrial compostable materials for commercial facilities', keywords: ['industrial', 'facility', 'commercial'] },
  { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp', category: 'Materials', description: 'Mono-material PE pouches for easy recycling', keywords: ['recyclable', 'mono', 'PE', 'polyethylene'] },
  { name: 'Recyclable Mono PP', link: '/materials/recyclable-mono-pp', image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp', category: 'Materials', description: 'Mono-material PP pouches with excellent clarity', keywords: ['recyclable', 'mono', 'PP', 'polypropylene'] },
  { name: 'Bio-PE', link: '/materials/bio-pe', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp', category: 'Materials', description: 'Plant-based PE from renewable sugarcane resources', keywords: ['bio', 'sugarcane', 'plant-based', 'renewable'] },
  { name: 'PCR Recycled', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp', category: 'Materials', description: 'Post-consumer recycled plastic reducing virgin material use', keywords: ['pcr', 'recycled', 'post-consumer'] },
  
  // Packaging Shapes
  { name: 'Stand Up Pouches', link: '/packaging/stand-up-pouches', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', category: 'Packaging', description: 'Self-standing pouches with excellent shelf presence', keywords: ['stand up', 'standup', 'pouch', 'bag'] },
  { name: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp', category: 'Packaging', description: 'Premium box pouches with flat bottom for stability', keywords: ['flat bottom', 'box pouch', 'coffee bag'] },
  { name: 'Side Gusset Bags', link: '/packaging/side-gusset-bags', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp', category: 'Packaging', description: 'Classic side gusset bags for bulk products', keywords: ['side gusset', 'quad seal'] },
  { name: 'Flat Pouches', link: '/packaging/flat-pouches', image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp', category: 'Packaging', description: 'Simple 3-side seal sachets for samples and single-serve', keywords: ['flat', 'sachet', '3 side seal'] },
  { name: 'Spout Pouches', link: '/packaging/spout-pouches', image: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp', category: 'Packaging', description: 'Pouches with pour spout for liquids and gels', keywords: ['spout', 'liquid', 'pour', 'cap'] },
  { name: 'Vacuum Pouches', link: '/packaging/vacuum-pouches', image: '/imgs/illustrated/a_monomaterial_warm_4127359.webp', category: 'Packaging', description: 'Vacuum sealable pouches for extended freshness', keywords: ['vacuum', 'seal', 'food storage'] },
  { name: 'Custom Boxes', link: '/packaging/custom-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', category: 'Packaging', description: 'Custom printed boxes and cartons', keywords: ['box', 'carton', 'corrugated'] },
  
  // Options & Features
  { name: 'Digital Printing', link: '/printing/digital-printing', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp', category: 'Features', description: 'Low MOQ digital printing with vibrant full-color graphics', keywords: ['digital', 'print', 'low moq', 'full color'] },
  { name: 'Plate Printing', link: '/printing/plate-printing', image: '/imgs/illustrated/a_plate_printing_close_detail_b_8707945.webp', category: 'Features', description: 'High-volume rotogravure and flexo printing', keywords: ['plate', 'rotogravure', 'flexo', 'high volume'] },
  { name: 'Reclosure Options', link: '/features/reclosure-options', image: '/imgs/illustrated/a_reclosure_options_close_detail_b_4502553.webp', category: 'Features', description: 'Zippers, sliders, and resealable closures', keywords: ['zipper', 'resealable', 'closure'] },
  { name: 'Surface Finishes', link: '/features/surface-finish', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp', category: 'Features', description: 'Matte, glossy, and soft-touch surface options', keywords: ['matte', 'glossy', 'finish', 'coating'] },
  { name: 'Barrier Options', link: '/features/barrier-options', image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp', category: 'Features', description: 'Understanding oxygen and moisture barrier levels', keywords: ['barrier', 'oxygen', 'moisture', 'protection'] },
  { name: 'Low Barrier', link: '/features/low-barrier', image: '/imgs/barrier/ads/a_transparent_options_3839456.webp', category: 'Features', description: 'Low barrier options for dry goods with short shelf life', keywords: ['low barrier', 'dry goods', 'short shelf'] },
  { name: 'Medium Barrier', link: '/features/medium-barrier', image: '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp', category: 'Features', description: 'Medium barrier for coffee, snacks, and everyday products', keywords: ['medium barrier', 'coffee', 'snacks'] },
  { name: 'High Barrier', link: '/features/high-barrier', image: '/imgs/barrier/ads/a_kraft_high_max_4456348.webp', category: 'Features', description: 'Maximum protection with aluminum foil barrier', keywords: ['high barrier', 'aluminum', 'foil'] },
  
  // Industries
  { name: 'Coffee & Tea', link: '/industry/coffee-tea', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp', category: 'Industries', description: 'Specialty packaging for coffee roasters and tea brands', keywords: ['coffee', 'tea', 'roaster', 'beans'] },
  { name: 'Snacks & Food', link: '/industry/snacks-food', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp', category: 'Industries', description: 'Food-safe packaging for snacks and dry foods', keywords: ['snacks', 'food', 'chips', 'crackers'] },
  { name: 'Pet Food', link: '/industry/pet-food', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp', category: 'Industries', description: 'Durable packaging for pet food and treats', keywords: ['pet', 'dog', 'cat', 'treats'] },
  { name: 'Supplements', link: '/industry/supplements-powders', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp', category: 'Industries', description: 'Protective packaging for supplements and powders', keywords: ['supplements', 'powder', 'protein', 'vitamins'] },
  { name: 'Baby Food', link: '/industry/baby-food', image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp', category: 'Industries', description: 'Safe, certified packaging for infant nutrition', keywords: ['baby', 'infant', 'puree', 'food'] },
  { name: 'Frozen Food', link: '/industry/frozen-food', image: '/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp', category: 'Industries', description: 'Freeze-resistant packaging for cold chain products', keywords: ['frozen', 'ice', 'cold chain'] },
  { name: 'Sauces & Condiments', link: '/industry/sauces-condiments', image: '/imgs/illustrated/a_achievepack_spout_pouches_1062736.webp', category: 'Industries', description: 'Liquid-safe packaging for sauces and condiments', keywords: ['sauce', 'condiment', 'ketchup', 'liquid'] },
  
  // Products
  { name: 'Compostable Coffee Bags', link: '/products/compostable-coffee-bags', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', category: 'Products', description: 'Eco-friendly coffee bags with degassing valve', keywords: ['compostable', 'coffee', 'bag', 'valve'] },
  { name: 'Compostable Stand Up Pouches', link: '/products/compostable-stand-up-pouches', image: '/imgs/illustrated/a_compostable_v3_9254998.webp', category: 'Products', description: 'Certified compostable stand up pouches', keywords: ['compostable', 'stand up', 'pouch'] },
  { name: 'Recyclable Mono Pouches', link: '/products/recyclable-mono-material-pouches', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp', category: 'Products', description: 'Easy-to-recycle mono-material pouches', keywords: ['recyclable', 'mono', 'pouch'] },
  { name: 'Coffee Bags with Valve', link: '/products/coffee-bags-degassing-valve', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp', category: 'Products', description: 'Premium coffee bags with one-way degassing valve', keywords: ['coffee', 'valve', 'degassing', 'one-way'] },
  { name: 'Low MOQ Packaging', link: '/products/low-moq-packaging', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp', category: 'Products', description: 'Small batch packaging from 100 pieces', keywords: ['low moq', 'small order', 'minimum'] },
  { name: 'Labels & Stickers', link: '/products/labels-and-stickers', image: '/imgs/label/custom-label/hero.webp', category: 'Products', description: 'Custom printed labels and die-cut stickers', keywords: ['label', 'sticker', 'die cut', 'roll'] },
  { name: 'Lab Bags', link: '/products/lab-bags', image: '/imgs/lab/filter/hero.webp', category: 'Products', description: 'Sterile lab blender bags for microbiology testing', keywords: ['lab', 'blender', 'filter', 'sterile'] },
  
  // Solutions
  { name: 'Startup Founder', link: '/solutions/startup-founder', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp', category: 'Solutions', description: 'Packaging solutions for startup brands', keywords: ['startup', 'founder', 'entrepreneur'] },
  { name: 'Ecommerce Brand', link: '/solutions/ecommerce-brand', image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp', category: 'Solutions', description: 'DTC and ecommerce packaging solutions', keywords: ['ecommerce', 'online', 'dtc'] },
  { name: 'Corporate Sustainability', link: '/solutions/corporate-sustainability', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp', category: 'Solutions', description: 'ESG and sustainability packaging programs', keywords: ['corporate', 'sustainability', 'esg'] },
  { name: 'Coffee Roaster', link: '/solutions/coffee-roaster', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', category: 'Solutions', description: 'Specialty packaging for coffee roasters', keywords: ['coffee', 'roaster', 'roastery'] },
  
  // Topics
  { name: 'Eco Food Packaging', link: '/topics/eco-friendly-food-packaging', image: '/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp', category: 'Topics', description: 'Complete guide to sustainable food packaging', keywords: ['eco', 'food', 'packaging', 'sustainable'] },
  { name: 'DTC Packaging', link: '/topics/dtc-sustainable-packaging', image: '/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp', category: 'Topics', description: 'Direct-to-consumer sustainable packaging', keywords: ['dtc', 'direct to consumer', 'ecommerce'] },
  { name: 'Coffee Materials', link: '/topics/green-coffee-materials', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp', category: 'Topics', description: 'Eco-friendly materials for coffee packaging', keywords: ['coffee', 'materials', 'green'] },
  { name: 'Recyclable Snack Packaging', link: '/topics/recyclable-snack-packaging', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp', category: 'Topics', description: 'Recyclable options for snack brands', keywords: ['recyclable', 'snack', 'packaging'] },
  { name: 'Biodegradable vs Compostable', link: '/composting/biodegradable-vs-compostable', image: '/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp', category: 'Topics', description: 'How to tell the difference and avoid greenwashing in packaging', keywords: ['biodegradable', 'compostable', 'greenwashing', 'EN 13432', 'ASTM D6400', 'certification'] },
  { name: 'Composting Service Finder', link: '/composting/composting-services', image: '/imgs/composting/vs/a_lifecycle_compostable_infographic_2163778.webp', category: 'Topics', description: 'Find local composting facilities and drop-off locations across the USA', keywords: ['composting', 'compost service', 'drop-off', 'facility', 'disposal', 'end-of-life'] },
  { name: 'Composting Benefits for Our Planet', link: '/composting/composting-benefits', image: '/imgs/composting/benefits/a_achievepack_composting_locator_hero_9733153.webp', category: 'Topics', description: 'How composting cuts emissions, protects soil and water, and what it means for your packaging', keywords: ['composting benefits', 'emissions', 'soil health', 'environment', 'circular economy', 'sustainable packaging'] },
    { name: 'How Commercial Composting Works', link: '/composting/commercial-composting', image: '/imgs/composting/commercial/hero.webp', category: 'Topics', description: 'A practical guide to windrow, aerated static pile and in-vessel composting from Achievepack® experts', keywords: ['commercial composting', 'industrial composting', 'windrow', 'aerated static pile', 'in-vessel', 'composting facility', 'EN 13432', 'ASTM D6400'] },
      { name: 'Home vs Industrial Compostable', link: '/composting/home-vs-industrial-compostable', image: '/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp', category: 'Topics', description: 'Guide to home compostable vs industrial compostable packaging: certifications, conditions, and procurement decisions', keywords: ['home compostable', 'industrial compostable', 'OK Compost HOME', 'EN 13432', 'backyard composting', 'composting facility', 'certification', 'procurement'] },
  
  // Bio-PE
  { name: 'What is Bio-PE', link: '/biope/what-is-bio-pe', image: '/imgs/biope/what/a_hero_bio_pe_article_2212774.webp', category: 'Materials', description: 'Bio-PE sustainable flexible packaging: plant-based polyethylene with carbon benefits and recyclability', keywords: ['bio-PE', 'bio-based polyethylene', 'sugarcane PE', 'plant-based plastic', 'recyclable', 'carbon footprint', 'ASTM D6866'] },
  { name: 'Bio-PE vs Compostable', link: '/biope/bio-pe-vs-compostable', image: '/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp', category: 'Materials', description: 'Bio-PE vs compostable films comparison: infrastructure fit, product residue, climate impact and portfolio strategy guide', keywords: ['bio-PE', 'compostable', 'comparison', 'recyclable', 'infrastructure', 'EPR', 'sustainability', 'portfolio strategy'] },
  { name: 'Bio-PE & EPR Regulations', link: '/biope/bio-pe-epr-regulations', image: '/imgs/biope/epr/a_biope_epr_hero_image_8632332.webp', category: 'Materials', description: 'How bio-PE helps brands navigate EPR regulations: lower fees, full recyclability, and carbon benefits for sustainable packaging compliance', keywords: ['bio-PE', 'EPR', 'extended producer responsibility', 'recyclable packaging', 'EPR fees', 'mono-material', 'regulatory compliance'] },
  { name: 'Inside I\'m green™ Bio-PE', link: '/biope/inside-im-green-bio-pe', image: '/imgs/biope/inside/hero.webp', category: 'Materials', description: 'Technical guide to I\'m green™ Bio-PE: sugarcane-based polyethylene with full recyclability, ASTM D6866 verification, and drop-in processing', keywords: ['I\'m green', 'bio-PE', 'sugarcane PE', 'ASTM D6866', 'drop-in', 'recyclable', 'plant-based', 'Braskem'] },
  
  // PCR
  { name: 'What Is PCR Plastic?', link: '/pcr/pcr-plastic-guide', image: '/imgs/pcr/guide/hero.webp', category: 'Materials', description: 'Complete guide to PCR (Post-Consumer Recycled) plastic: what it is, how it affects packaging quality, food safety considerations, and practical implementation for SME brands', keywords: ['PCR plastic', 'post-consumer recycled', 'recycled plastic', 'PCR quality', 'PCR food safety', 'recycled content', 'sustainable packaging'] },
  { name: '7 PCR Checklist for SMEs', link: '/pcr/7-checklist', image: '/imgs/PCR/7/hero.webp', category: 'Materials', description: '7 practical things SME brands must check before switching to PCR flexible packaging: quality, supply, line testing, recyclability and communication', keywords: ['PCR checklist', 'PCR switch', 'PCR evaluation', 'PCR supply', 'PCR line testing', 'SME packaging', 'recycled packaging'] },
  
  // Case Studies
  { name: 'Coffee Roastery', link: '/case-studies/coffee-roastery', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', category: 'Case Studies', description: 'How a specialty roaster switched to compostable', keywords: ['case study', 'coffee', 'roastery'] },
  { name: 'Tea Brand', link: '/case-studies/tea-brand', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp', category: 'Case Studies', description: 'Premium tea brand sustainability journey', keywords: ['case study', 'tea', 'brand'] },
  { name: 'Pet Treats', link: '/case-studies/pet-treats', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp', category: 'Case Studies', description: 'Pet brand eco-packaging transformation', keywords: ['case study', 'pet', 'treats'] },
  
  // Knowledge
  { name: 'Pouch Sizing Guide', link: '/knowledge/pouch-sizing', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', category: 'Knowledge', description: 'How to choose the right pouch size for your product', keywords: ['size', 'sizing', 'dimensions', 'capacity'] },
  { name: 'All Options', link: '/knowledge/all-options', image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp', category: 'Knowledge', description: 'Complete overview of all packaging options', keywords: ['options', 'features', 'customization'] },
  { name: 'Printing Types', link: '/knowledge/printing-types', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp', category: 'Knowledge', description: 'Digital vs plate printing comparison', keywords: ['printing', 'digital', 'plate', 'rotogravure'] },
]

export default function LearnSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { cartCount } = useStore()
  const [, startTransition] = useTransition()
  
  const initialQuery = searchParams.get('q') || ''
  const initialCategory = searchParams.get('category') || 'All'
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  
  // Sync with URL params
  useEffect(() => {
    const q = searchParams.get('q') || ''
    const cat = searchParams.get('category') || 'All'
    setSearchQuery(q)
    setSelectedCategory(cat)
  }, [searchParams])
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const params: Record<string, string> = {}
    if (searchQuery) params.q = searchQuery
    if (category !== 'All') params.category = category
    setSearchParams(params)
  }
  
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const params: Record<string, string> = {}
    if (query) params.q = query
    if (selectedCategory !== 'All') params.category = selectedCategory
    setSearchParams(params)
  }

  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    startTransition(() => {
      navigate(to)
    })
  }, [navigate])
  
  const filteredPages = useMemo(() => {
    return ALL_PAGES.filter(page => {
      const matchesCategory = selectedCategory === 'All' || page.category === selectedCategory
      const query = searchQuery.toLowerCase()
      const matchesSearch = !searchQuery || 
        page.name.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query) ||
        page.category.toLowerCase().includes(query) ||
        page.keywords.some(kw => kw.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <Helmet>
        <title>{searchQuery ? `Search: ${searchQuery}` : 'Learn Center'} | Achieve Pack</title>
        <meta name="description" content="Explore our comprehensive knowledge base on sustainable packaging materials, shapes, features, and industry solutions." />
        <link rel="canonical" href="https://achievepack.com/learn" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-primary-600 text-white fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" onClick={handleNavigation('/')} className="flex items-center gap-3 hover:opacity-90 transition cursor-pointer">
                <img src="/ap-logo-white.png" alt="Achieve Pack" className="h-10 w-auto" loading="eager" width="133" height="40" />
                <span className="text-2xl font-bold hidden sm:inline">Learn Center</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/store" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Store</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </header>

        <div className="h-[72px]"></div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Packaging Knowledge Center
              </h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Everything you need to know about sustainable packaging materials, shapes, and solutions
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white border-b sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search materials, shapes, features..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results count */}
            <p className="text-neutral-600 mb-6">
              {searchQuery || selectedCategory !== 'All' ? (
                <>Found <strong>{filteredPages.length}</strong> results</>
              ) : (
                <>Browse all <strong>{filteredPages.length}</strong> pages</>
              )}
            </p>
            
            {filteredPages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-500 text-lg">No pages found matching your criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSearchParams({}) }}
                  className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPages.map(page => (
                  <article
                    key={page.link}
                    className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Image */}
                    <Link to={page.link} className="block aspect-video bg-neutral-100 overflow-hidden">
                      <img 
                        src={page.image} 
                        alt={page.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                        {page.category}
                      </span>

                      {/* Title */}
                      <Link to={page.link}>
                        <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {page.name}
                        </h2>
                      </Link>

                      {/* Description */}
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                        {page.description}
                      </p>

                      {/* Read More */}
                      <Link
                        to={page.link}
                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 mb-6">
              Explore our sustainable packaging options. Low MOQ from 100 pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
