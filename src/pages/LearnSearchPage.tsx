import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, ArrowLeft, Leaf, Package, Factory, FileText, BookOpen, Users, Award, ShoppingBag, Globe, Boxes, Beaker } from 'lucide-react'

// All SEO pages for search
const ALL_PAGES = [
  // Materials
  { name: 'Compostable Overview', link: '/materials/compostable', image: '/imgs/illustrated/a_compostable_v3_9254998.webp', category: 'Materials', keywords: ['compostable', 'biodegradable', 'eco', 'sustainable'] },
  { name: 'Home Compostable', link: '/materials/home-compostable', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp', category: 'Materials', keywords: ['home', 'compost', 'backyard', 'garden'] },
  { name: 'Industrial Compostable', link: '/materials/industrial-compostable', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp', category: 'Materials', keywords: ['industrial', 'facility', 'commercial'] },
  { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp', category: 'Materials', keywords: ['recyclable', 'mono', 'PE', 'polyethylene'] },
  { name: 'Recyclable Mono PP', link: '/materials/recyclable-mono-pp', image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp', category: 'Materials', keywords: ['recyclable', 'mono', 'PP', 'polypropylene'] },
  { name: 'Bio-PE', link: '/materials/bio-pe', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp', category: 'Materials', keywords: ['bio', 'sugarcane', 'plant-based', 'renewable'] },
  { name: 'PCR Recycled', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp', category: 'Materials', keywords: ['pcr', 'recycled', 'post-consumer'] },
  
  // Packaging Shapes
  { name: 'Stand Up Pouches', link: '/packaging/stand-up-pouches', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', category: 'Packaging', keywords: ['stand up', 'standup', 'pouch', 'bag'] },
  { name: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp', category: 'Packaging', keywords: ['flat bottom', 'box pouch', 'coffee bag'] },
  { name: 'Side Gusset Bags', link: '/packaging/side-gusset-bags', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp', category: 'Packaging', keywords: ['side gusset', 'quad seal'] },
  { name: 'Flat Pouches', link: '/packaging/flat-pouches', image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp', category: 'Packaging', keywords: ['flat', 'sachet', '3 side seal'] },
  { name: 'Spout Pouches', link: '/packaging/spout-pouches', image: '/imgs/illustrated/a_achievepack_spout_pouches_4058117.webp', category: 'Packaging', keywords: ['spout', 'liquid', 'pour', 'cap'] },
  { name: 'Vacuum Pouches', link: '/packaging/vacuum-pouches', image: '/imgs/illustrated/a_monomaterial_warm_4127359.webp', category: 'Packaging', keywords: ['vacuum', 'seal', 'food storage'] },
  { name: 'Custom Boxes', link: '/packaging/custom-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp', category: 'Packaging', keywords: ['box', 'carton', 'corrugated'] },
  
  // Options & Features
  { name: 'Digital Printing', link: '/printing/digital-printing', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp', category: 'Features', keywords: ['digital', 'print', 'low moq', 'full color'] },
  { name: 'Plate Printing', link: '/printing/plate-printing', image: '/imgs/illustrated/a_plate_printing_close_detail_b_8707945.webp', category: 'Features', keywords: ['plate', 'rotogravure', 'flexo', 'high volume'] },
  { name: 'Reclosure Options', link: '/features/reclosure-options', image: '/imgs/illustrated/a_reclosure_options_close_detail_b_4502553.webp', category: 'Features', keywords: ['zipper', 'resealable', 'closure'] },
  { name: 'Surface Finishes', link: '/features/surface-finish', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp', category: 'Features', keywords: ['matte', 'glossy', 'finish', 'coating'] },
  { name: 'Barrier Options', link: '/features/barrier-options', image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp', category: 'Features', keywords: ['barrier', 'oxygen', 'moisture', 'protection'] },
  { name: 'Low Barrier', link: '/features/low-barrier', image: '/imgs/illustrated/a_lowbarrier_presentation_c_9188452.webp', category: 'Features', keywords: ['low barrier', 'dry goods', 'short shelf'] },
  { name: 'Medium Barrier', link: '/features/medium-barrier', image: '/imgs/illustrated/a_mediumbarrier_presentation_c_5439721.webp', category: 'Features', keywords: ['medium barrier', 'coffee', 'snacks'] },
  { name: 'High Barrier', link: '/features/high-barrier', image: '/imgs/illustrated/a_highbarrier_presentation_c_3827146.webp', category: 'Features', keywords: ['high barrier', 'aluminum', 'foil'] },
  
  // Industries
  { name: 'Coffee & Tea', link: '/industry/coffee-tea', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp', category: 'Industries', keywords: ['coffee', 'tea', 'roaster', 'beans'] },
  { name: 'Snacks & Food', link: '/industry/snacks-food', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp', category: 'Industries', keywords: ['snacks', 'food', 'chips', 'crackers'] },
  { name: 'Pet Food', link: '/industry/pet-food', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp', category: 'Industries', keywords: ['pet', 'dog', 'cat', 'treats'] },
  { name: 'Supplements', link: '/industry/supplements-powders', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp', category: 'Industries', keywords: ['supplements', 'powder', 'protein', 'vitamins'] },
  { name: 'Baby Food', link: '/industry/baby-food', image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp', category: 'Industries', keywords: ['baby', 'infant', 'puree', 'food'] },
  { name: 'Frozen Food', link: '/industry/frozen-food', image: '/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp', category: 'Industries', keywords: ['frozen', 'ice', 'cold chain'] },
  { name: 'Sauces & Condiments', link: '/industry/sauces-condiments', image: '/imgs/illustrated/a_sauces_condiments_hero_v1_6823941.webp', category: 'Industries', keywords: ['sauce', 'condiment', 'ketchup', 'liquid'] },
  
  // Products
  { name: 'Compostable Coffee Bags', link: '/products/compostable-coffee-bags', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', category: 'Products', keywords: ['compostable', 'coffee', 'bag', 'valve'] },
  { name: 'Compostable Stand Up Pouches', link: '/products/compostable-stand-up-pouches', image: '/imgs/illustrated/a_compostable_v3_9254998.webp', category: 'Products', keywords: ['compostable', 'stand up', 'pouch'] },
  { name: 'Recyclable Mono Pouches', link: '/products/recyclable-mono-material-pouches', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp', category: 'Products', keywords: ['recyclable', 'mono', 'pouch'] },
  { name: 'Coffee Bags with Valve', link: '/products/coffee-bags-degassing-valve', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp', category: 'Products', keywords: ['coffee', 'valve', 'degassing', 'one-way'] },
  { name: 'Low MOQ Packaging', link: '/products/low-moq-packaging', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp', category: 'Products', keywords: ['low moq', 'small order', 'minimum'] },
  { name: 'Labels & Stickers', link: '/products/labels-and-stickers', image: '/imgs/label/custom-label/hero.webp', category: 'Products', keywords: ['label', 'sticker', 'die cut', 'roll'] },
  { name: 'Lab Bags', link: '/products/lab-bags', image: '/imgs/lab/filter/hero.webp', category: 'Products', keywords: ['lab', 'blender', 'filter', 'sterile'] },
  
  // Solutions
  { name: 'Startup Founder', link: '/solutions/startup-founder', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp', category: 'Solutions', keywords: ['startup', 'founder', 'entrepreneur'] },
  { name: 'Ecommerce Brand', link: '/solutions/ecommerce-brand', image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp', category: 'Solutions', keywords: ['ecommerce', 'online', 'dtc'] },
  { name: 'Corporate Sustainability', link: '/solutions/corporate-sustainability', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp', category: 'Solutions', keywords: ['corporate', 'sustainability', 'esg'] },
  { name: 'Coffee Roaster', link: '/solutions/coffee-roaster', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', category: 'Solutions', keywords: ['coffee', 'roaster', 'roastery'] },
  
  // Topics
  { name: 'Eco Food Packaging', link: '/topics/eco-friendly-food-packaging', image: '/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp', category: 'Topics', keywords: ['eco', 'food', 'packaging', 'sustainable'] },
  { name: 'DTC Packaging', link: '/topics/dtc-sustainable-packaging', image: '/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp', category: 'Topics', keywords: ['dtc', 'direct to consumer', 'ecommerce'] },
  { name: 'Coffee Materials', link: '/topics/green-coffee-materials', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp', category: 'Topics', keywords: ['coffee', 'materials', 'green'] },
  { name: 'Recyclable Snack Packaging', link: '/topics/recyclable-snack-packaging', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp', category: 'Topics', keywords: ['recyclable', 'snack', 'packaging'] },
  
  // Case Studies
  { name: 'Coffee Roastery Case Study', link: '/case-studies/coffee-roastery', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp', category: 'Case Studies', keywords: ['case study', 'coffee', 'roastery'] },
  { name: 'Tea Brand Case Study', link: '/case-studies/tea-brand', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp', category: 'Case Studies', keywords: ['case study', 'tea', 'brand'] },
  { name: 'Pet Treats Case Study', link: '/case-studies/pet-treats', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp', category: 'Case Studies', keywords: ['case study', 'pet', 'treats'] },
  
  // Knowledge
  { name: 'Pouch Sizing Guide', link: '/knowledge/pouch-sizing', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp', category: 'Knowledge', keywords: ['size', 'sizing', 'dimensions', 'capacity'] },
  { name: 'All Options', link: '/knowledge/all-options', image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp', category: 'Knowledge', keywords: ['options', 'features', 'customization'] },
]

export default function LearnSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialQuery = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  
  // Sync input with URL param
  useEffect(() => {
    const q = searchParams.get('q') || ''
    setSearchQuery(q)
  }, [searchParams])
  
  const filteredPages = useMemo(() => {
    if (!searchQuery.trim()) return ALL_PAGES
    
    const query = searchQuery.toLowerCase()
    return ALL_PAGES.filter(page => {
      const matchesName = page.name.toLowerCase().includes(query)
      const matchesCategory = page.category.toLowerCase().includes(query)
      const matchesKeywords = page.keywords.some(kw => kw.toLowerCase().includes(query))
      return matchesName || matchesCategory || matchesKeywords
    })
  }, [searchQuery])
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery })
    }
  }

  return (
    <>
      <Helmet>
        <title>{searchQuery ? `Search: ${searchQuery}` : 'Learn Center Search'} | Achieve Pack</title>
        <meta name="description" content="Search our comprehensive packaging knowledge base for materials, shapes, features, and industry-specific solutions." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-primary-600 text-white fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
                <img src="/ap-logo-white.png" alt="Achieve Pack" className="h-10 w-auto" loading="eager" />
                <span className="text-xl font-bold hidden sm:inline">Learn Center</span>
              </Link>
            </div>
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/80 hover:text-white transition">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
          </div>
        </header>

        <div className="h-[72px]"></div>

        {/* Search Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Search Packaging Solutions</h1>
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search materials, packaging shapes, features..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-neutral-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                autoFocus
              />
            </form>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-neutral-600 mb-6">
              {searchQuery ? (
                <>Found <strong>{filteredPages.length}</strong> results for "<strong>{searchQuery}</strong>"</>
              ) : (
                <>Browse all <strong>{filteredPages.length}</strong> packaging solutions</>
              )}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredPages.map((page) => (
                <Link
                  key={page.link}
                  to={page.link}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-neutral-100"
                >
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    <img
                      src={page.image}
                      alt={page.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-primary-600 font-medium mb-1">{page.category}</p>
                    <h3 className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition line-clamp-2">
                      {page.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredPages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-neutral-500 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-neutral-400 mt-2">Try different keywords or browse all options</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                >
                  Show All Pages
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
