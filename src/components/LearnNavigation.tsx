import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, ChevronDown, Leaf, Package, Factory, FileText, BookOpen, Users, Award, ShoppingBag, Globe, Boxes, HelpCircle, Search, Zap, Beaker, Layers, Sprout, Recycle } from 'lucide-react'

// All SEO pages mapped with illustrated images - COMPLETE LIST
const LEARN_PAGES = {
  materials: {
    title: 'Materials',
    icon: <Leaf className="h-4 w-4" />,
    pages: [
      { name: 'Compostable Overview', link: '/materials/compostable', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Home Compostable', link: '/materials/home-compostable', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Industrial Compostable', link: '/materials/industrial-compostable', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp' },
      { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Recyclable Mono PP', link: '/materials/recyclable-mono-pp', image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp' },
      { name: 'Bio-PE', link: '/materials/bio-pe', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp' },
      { name: 'PCR Recycled', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
    ]
  },
  packaging: {
    title: 'Packaging Shapes',
    icon: <Boxes className="h-4 w-4" />,
    pages: [
      { name: 'Stand Up Pouches', link: '/packaging/stand-up-pouches', image: '/imgs/illustrated/a_achievepack_standup_pouches_9884402.webp' },
      { name: 'Flat Bottom Bags', link: '/packaging/flat-bottom-bags', image: '/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp' },
      { name: 'Side Gusset Bags', link: '/packaging/side-gusset-bags', image: '/imgs/illustrated/a_achievepack_sidegusset_bags_7074883.webp' },
      { name: 'Flat Pouches', link: '/packaging/flat-pouches', image: '/imgs/illustrated/a_achievepack_flat_pouches_0260646.webp' },
      { name: 'Spout Pouches', link: '/packaging/spout-pouches', image: '/imgs/illustrated/a_achievepack_spout_pouches_4058117.webp' },
      { name: 'Vacuum Pouches', link: '/packaging/vacuum-pouches', image: '/imgs/illustrated/a_monomaterial_warm_4127359.webp' },
      { name: 'Custom Boxes', link: '/packaging/custom-boxes', image: '/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp' },
    ]
  },
  options: {
    title: 'Options & Features',
    icon: <Package className="h-4 w-4" />,
    pages: [
      { name: 'Digital Printing', link: '/printing/digital-printing', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp' },
      { name: 'Plate Printing', link: '/printing/plate-printing', image: '/imgs/illustrated/a_plate_printing_close_detail_b_8707945.webp' },
      { name: 'Reclosure Options', link: '/features/reclosure-options', image: '/imgs/illustrated/a_reclosure_options_close_detail_b_4502553.webp' },
      { name: 'Surface Finishes', link: '/features/surface-finish', image: '/imgs/illustrated/a_surface_finish_close_detail_b_2163248.webp' },
      { name: 'Barrier Options', link: '/features/barrier-options', image: '/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp' },
      { name: 'Low Barrier', link: '/features/low-barrier', image: '/imgs/seo-photos/a_low_barrier_fresh_produce_5877816.webp' },
      { name: 'Medium Barrier', link: '/features/medium-barrier', image: '/imgs/seo-photos/a_medium_barrier_balanced_freshness_1094166.webp' },
      { name: 'High Barrier', link: '/features/high-barrier', image: '/imgs/seo-photos/a_high_barrier_premium_protection_0120312.webp' },
    ]
  },
  industries: {
    title: 'Industries',
    icon: <Factory className="h-4 w-4" />,
    pages: [
      { name: 'Coffee & Tea', link: '/industry/coffee-tea', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp' },
      { name: 'Snacks & Food', link: '/industry/snacks-food', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Pet Food', link: '/industry/pet-food', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp' },
      { name: 'Supplements', link: '/industry/supplements-powders', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Baby Food', link: '/industry/baby-food', image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp' },
      { name: 'Frozen Food', link: '/industry/frozen-food', image: '/imgs/illustrated/a_frozen_food_hero_v2_0166133.webp' },
      { name: 'Sauces & Condiments', link: '/industry/sauces-condiments', image: '/imgs/illustrated/a_sauces_condiments_hero_v1_6823941.webp' },
    ]
  },
  products: {
    title: 'Products',
    icon: <ShoppingBag className="h-4 w-4" />,
    pages: [
      { name: 'Compostable Coffee Bags', link: '/products/compostable-coffee-bags', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Compostable Stand Up Pouches', link: '/products/compostable-stand-up-pouches', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Recyclable Mono Pouches', link: '/products/recyclable-mono-material-pouches', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Coffee Bags with Valve', link: '/products/coffee-bags-degassing-valve', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'Low MOQ Packaging', link: '/products/low-moq-packaging', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
    ]
  },
  solutions: {
    title: 'Solutions',
    icon: <Users className="h-4 w-4" />,
    pages: [
      { name: 'Startup Founder', link: '/solutions/startup-founder', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp' },
      { name: 'Ecommerce Brand', link: '/solutions/ecommerce-brand', image: '/imgs/illustrated/a_ecommerce_brand_variation_2_5348466.webp' },
      { name: 'Corporate Sustainability', link: '/solutions/corporate-sustainability', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Food Manufacturer', link: '/solutions/food-manufacturer', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Product Developer', link: '/solutions/product-developer', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Coffee Roaster', link: '/solutions/coffee-roaster', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Artisan Producer', link: '/solutions/artisan-producer', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Snack Brand Manager', link: '/solutions/snack-brand-manager', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
    ]
  },
  topics: {
    title: 'Topics',
    icon: <FileText className="h-4 w-4" />,
    pages: [
      { name: 'Eco Food Packaging', link: '/topics/eco-friendly-food-packaging', image: '/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp' },
      { name: 'DTC Packaging', link: '/topics/dtc-sustainable-packaging', image: '/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp' },
      { name: 'Coffee Materials', link: '/topics/green-coffee-materials', image: '/imgs/illustrated/a_topic_03_coffee_materials_var_c_6491567.webp' },
      { name: 'Digital Printing Guide', link: '/topics/digital-printing-eco-packaging', image: '/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp' },
      { name: 'Recyclable Snack Packaging', link: '/topics/recyclable-snack-packaging', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
      { name: 'Custom Printed Pouches', link: '/topics/custom-printed-sustainable-pouches', image: '/imgs/illustrated/a_digital_printing_close_detail_b_7761926.webp' },
      { name: 'Packaging Regulations', link: '/topics/eco-packaging-regulations', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Compostable Suppliers', link: '/topics/compostable-pouch-suppliers', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Low MOQ Startup', link: '/topics/low-moq-startup-packaging', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp' },
      { name: 'Baby Food Bags', link: '/topics/compostable-baby-food-bags', image: '/imgs/illustrated/a_baby_food_hero_v1_7008467.webp' },
    ]
  },
  caseStudies: {
    title: 'Case Studies',
    icon: <Award className="h-4 w-4" />,
    pages: [
      { name: 'Coffee Roastery', link: '/case-studies/coffee-roastery', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Tea Brand', link: '/case-studies/tea-brand', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp' },
      { name: 'Superfood Brand', link: '/case-studies/superfood-brand', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Pet Treats', link: '/case-studies/pet-treats', image: '/imgs/illustrated/a_pet_food_hero_v3_7652587.webp' },
      { name: 'Chocolate Brand', link: '/case-studies/chocolate-brand', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Candle Brand', link: '/case-studies/candle-brand', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Bakery', link: '/case-studies/bakery', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
      { name: 'Wellness Brand', link: '/case-studies/wellness-brand', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Organic Nuts', link: '/case-studies/organic-nuts', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Bath Products', link: '/case-studies/bath-products', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Adaptogens', link: '/case-studies/adaptogens', image: '/imgs/illustrated/a_supplements_hero_v1_0434970.webp' },
      { name: 'Outdoor Snacks', link: '/case-studies/outdoor-snacks', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
    ]
  },
  knowledge: {
    title: 'Knowledge Base',
    icon: <BookOpen className="h-4 w-4" />,
    pages: [
      { name: 'All Options', link: '/knowledge/all-options', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Pouch Sizing', link: '/knowledge/pouch-sizing', image: '/imgs/illustrated/a_pouch_sizing_guide_card_v3_5278730.webp' },
      { name: 'Size Guide', link: '/knowledge/size-guide', image: '/imgs/illustrated/a_size_guide_card_v2_9433535.webp' },
      { name: 'Printing Types', link: '/knowledge/printing-types', image: '/imgs/illustrated/a_printing_types_card_v2_6243973.webp' },
      { name: 'Workflow', link: '/knowledge/workflow', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
    ]
  },
  support: {
    title: 'Support',
    icon: <HelpCircle className="h-4 w-4" />,
    pages: [
      { name: 'FAQs', link: '/support/faqs', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
      { name: 'Lead Time', link: '/support/lead-time', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
    ]
  },
  function: {
    title: 'Function',
    icon: <Zap className="h-4 w-4" />,
    pages: [
      { name: 'Microwave Steam Bags', link: '/function/microwave-steam-bags', image: '/imgs/function/microwave/a_microwavebag_hero_main_kitchen_2543693.webp' },
      { name: 'Carbon Neutral Bags', link: '/function/carbon-neutral-bags', image: '/imgs/function/carbon/a_hero_card_1_carbon_neutral_materials_3157781.webp' },
      { name: 'Spout Pouches Juice', link: '/function/spout-pouches-juice', image: '/imgs/function/spout/a_hero_kv_juice_pouch_7892714.webp' },
      { name: 'Child-Resistant Bags', link: '/function/child-resistant-bags', image: '/imgs/function/child/child-resistant-hero-learn-center.webp' },
      { name: 'Digital Printed Retort Bags', link: '/function/digital-printed-retort-bags', image: '/imgs/function/retort/retort-hero.webp' },
      { name: 'Pre-Zippered Rollstock', link: '/function/pre-zippered-rollstock', image: '/imgs/function/roll/hero.webp' },
      { name: 'Rice Paper Bags', link: '/function/rice-paper-bags', image: '/imgs/function/rice/hero.webp' },
      { name: 'PVA Water-Soluble Bags', link: '/function/pva-water-soluble-bags', image: '/imgs/function/water/hero.webp' },
    ]
  },
  lab: {
    title: 'Lab Bag',
    icon: <Beaker className="h-4 w-4" />,
    pages: [
      { name: 'Lateral Filter Bags', link: '/lab/lateral-filter-bags', image: '/imgs/lab/filter/hero.webp' },
      { name: 'Wire Closure Bags', link: '/lab/wire-closure-bags', image: '/imgs/lab/wire/hero.webp' },
      { name: 'Lab Blender Bags', link: '/lab/lab-blender-bags', image: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp' },
    ]
  },
  usa: {
    title: 'USA Market',
    icon: <Globe className="h-4 w-4" />,
    pages: [
      { name: 'Compostable Packaging USA', link: '/usa/compostable-packaging', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Coffee Packaging USA', link: '/usa/coffee-packaging', image: '/imgs/illustrated/a_coffee_tea_hero_v1_1905321.webp' },
      { name: 'Snacks Packaging USA', link: '/usa/snacks-packaging', image: '/imgs/illustrated/a_snacks_food_hero_v1_9854447.webp' },
      { name: 'Labeling Guide USA', link: '/usa/labeling-guide', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
    ]
  },
  company: {
    title: 'Company',
    icon: <Award className="h-4 w-4" />,
    pages: [
      { name: 'About Us', link: '/company/about', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Factory Tour', link: '/company/factory-tour', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
      { name: 'Certificates', link: '/company/certificates', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
    ]
  },
  spec: {
    title: 'Structure Spec',
    icon: <Layers className="h-4 w-4" />,
    pages: [
      { name: 'PCR PET Duplex Clear', link: '/spec/pcr-pet-duplex-clear', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Bio-PE PET Duplex Clear', link: '/spec/biope-pet-duplex-clear', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp' },
      { name: 'Bio-Cello Duplex Clear', link: '/spec/bio-cello-duplex-clear', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
      { name: 'Mono PE Duplex Clear', link: '/spec/mono-pe-duplex-clear', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
    ]
  },
  composting: {
    title: 'Composting',
    icon: <Leaf className="h-4 w-4" />,
    pages: [
      { name: 'Commercial Composting', link: '/composting/commercial-composting', image: '/imgs/composting/commercial/hero.webp' },
      { name: 'Composting Benefits', link: '/composting/composting-benefits', image: '/imgs/composting/benefits/a_achievepack_composting_locator_hero_9733153.webp' },
      { name: 'Composting Service Finder', link: '/composting/composting-services', image: '/imgs/composting/finder/a_achievepack_composting_locator_hero_9733153.webp' },
      { name: 'Biodegradable vs Compostable', link: '/composting/biodegradable-vs-compostable', image: '/imgs/composting/vs/a_hero_biodegradable_vs_compostable_8031695.webp' },
      { name: 'Home vs Industrial Compostable', link: '/composting/home-vs-industrial-compostable', image: '/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp' },
    ]
  },
  biope: {
    title: 'BioPE',
    icon: <Sprout className="h-4 w-4" />,
    pages: [
      { name: 'What is Bio-PE', link: '/biope/what-is-bio-pe', image: '/imgs/biope/what/a_hero_bio_pe_article_2212774.webp' },
      { name: 'Bio-PE vs Compostable', link: '/biope/bio-pe-vs-compostable', image: '/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp' },
      { name: 'Bio-PE & EPR Regulations', link: '/biope/bio-pe-epr-regulations', image: '/imgs/biope/epr/a_biope_epr_hero_image_8632332.webp' },
      { name: 'Inside I\'m green™ Bio-PE', link: '/biope/inside-im-green-bio-pe', image: '/imgs/biope/inside/hero.webp' },
    ]
  },
  pcr: {
    title: 'PCR',
    icon: <Recycle className="h-4 w-4" />,
    pages: [
      { name: 'What Is PCR Plastic?', link: '/pcr/pcr-plastic-guide', image: '/imgs/pcr/guide/hero.webp' },
      { name: '7-Point PCR Checklist', link: '/pcr/7-checklist', image: '/imgs/PCR/7/hero.webp' },
      { name: 'Realistic PCR Content', link: '/pcr/realistic-pcr-content', image: '/imgs/pcr/real/hero.webp' },
      { name: 'PCR Materials', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
    ]
  },
}

// Get first page of each category for featured rotation
const FEATURED_PAGES = Object.values(LEARN_PAGES).map(cat => cat.pages[0])

// Flatten all pages for navigation
const ALL_PAGES = Object.values(LEARN_PAGES).flatMap(cat => cat.pages)

interface LearnNavigationProps {
  currentPath?: string
}

export default function LearnNavigation({ currentPath }: LearnNavigationProps) {
  const location = useLocation()
  const path = currentPath || location.pathname
  
  const [activeCategory, setActiveCategory] = useState<string | null>('materials')
  const [currentSlide, setCurrentSlide] = useState(() => Math.floor(Math.random() * FEATURED_PAGES.length))
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Auto-rotate featured images - only first page of each category
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_PAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])
  
  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])
  
  const toggleCategory = (catKey: string) => {
    setActiveCategory(activeCategory === catKey ? null : catKey)
  }
  
  // Get current featured page
  const currentPage = FEATURED_PAGES[currentSlide]

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile: Featured Categories Header */}
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
            Featured Categories
          </h3>
          
          {/* Mobile: Hero Image - Compact aspect ratio */}
          <Link 
            to={currentPage.link}
            className="block relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group mb-3"
          >
            <img
              src={currentPage.image}
              alt={currentPage.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h4 className="text-base font-bold text-white mb-0.5">{currentPage.name}</h4>
              <span className="inline-flex items-center gap-1 text-xs text-white/80">
                Read more <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
          
          {/* Mobile: Thumbnail Carousel - Larger touch targets */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {FEATURED_PAGES.map((page, i) => (
              <button
                key={`mobile-thumb-${page.link}-${i}`}
                onClick={() => handleThumbnailClick(i)}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  i === currentSlide
                    ? 'border-primary-500 ring-2 ring-primary-200'
                    : 'border-neutral-200'
                }`}
              >
                <img
                  src={page.image}
                  alt={page.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          
          {/* Mobile: Search Box */}
          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search packaging solutions..."
                className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const query = (e.target as HTMLInputElement).value
                    if (query.trim()) {
                      window.location.href = `/learn?q=${encodeURIComponent(query)}`
                    }
                  }
                }}
              />
            </div>
          </div>
          
          {/* Mobile: Popular Search Tags */}
          <div className="mt-2 flex gap-1.5 overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
            {[
              { term: 'Compostable', link: '/materials/compostable' },
              { term: 'Coffee Bags', link: '/products/compostable-coffee-bags' },
              { term: 'Stand Up', link: '/packaging/stand-up-pouches' },
              { term: 'Low MOQ', link: '/products/low-moq-packaging' },
              { term: 'Pet Food', link: '/industry/pet-food' },
            ].map((item) => (
              <Link
                key={item.term}
                to={item.link}
                className="flex-shrink-0 px-2.5 py-1.5 text-xs bg-white border border-neutral-200 text-neutral-600 rounded-full whitespace-nowrap hover:bg-primary-50 hover:border-primary-300"
              >
                {item.term}
              </Link>
            ))}
          </div>
          
          {/* Mobile: Learn Center Categories */}
          <div className="mt-4 pt-3 border-t border-neutral-200">
            <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Learn Center
            </h3>
            
            {/* Category Chips */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {Object.entries(LEARN_PAGES).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => toggleCategory(key)}
                  className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    activeCategory === key
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-neutral-600 border border-neutral-200'
                  }`}
                >
                  {category.icon}
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* Selected category pages */}
            {activeCategory && (
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-1.5">
                  {LEARN_PAGES[activeCategory as keyof typeof LEARN_PAGES]?.pages.map((page) => (
                    <Link
                      key={page.link}
                      to={page.link}
                      className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-colors truncate ${
                        path === page.link
                          ? 'bg-primary-500 text-white'
                          : 'bg-white text-neutral-700 border border-neutral-200'
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          {/* Desktop: Category Navigation */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Learn Center
            </h3>
            <div className="space-y-1">
              {Object.entries(LEARN_PAGES).map(([key, category]) => (
                <div key={key}>
                  <button
                    onClick={() => toggleCategory(key)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === key
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.icon}
                      {category.title}
                      <span className="text-xs text-neutral-400">({category.pages.length})</span>
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeCategory === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeCategory === key && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {category.pages.map((page) => (
                        <Link
                          key={page.link}
                          to={page.link}
                          className={`block px-3 py-1.5 text-sm rounded transition-colors ${
                            path === page.link
                              ? 'bg-primary-500 text-white'
                              : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                          }`}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop: Featured Image Carousel */}
          <div className="lg:col-span-8">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
              Featured Categories
            </h3>
            
            {/* Main Featured Image */}
            <Link 
              to={currentPage.link}
              className="block relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg group mb-4"
            >
              <img
                src={currentPage.image}
                alt={currentPage.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white mb-2">{currentPage.name}</h4>
                <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-primary-300 transition-colors">
                  Read more <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
            
            {/* Thumbnail Carousel */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {FEATURED_PAGES.map((page, i) => (
                <button
                  key={`desktop-thumb-${page.link}-${i}`}
                  onClick={() => handleThumbnailClick(i)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentSlide
                      ? 'border-primary-500 ring-2 ring-primary-200'
                      : 'border-transparent hover:border-primary-300'
                  }`}
                >
                  <img
                    src={page.image}
                    alt={page.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            
            {/* Search Box */}
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search packaging solutions..."
                  className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const query = (e.target as HTMLInputElement).value
                      if (query.trim()) {
                        window.location.href = `/learn?q=${encodeURIComponent(query)}`
                      }
                    }
                  }}
                />
              </div>
              
              {/* Popular Search Terms */}
              <div className="mt-3">
                <span className="text-xs text-neutral-500 mr-2">Popular:</span>
                <div className="inline-flex flex-wrap gap-2 mt-1">
                  {[
                    { term: 'Compostable', link: '/materials/compostable' },
                    { term: 'Coffee Bags', link: '/products/compostable-coffee-bags' },
                    { term: 'Stand Up Pouch', link: '/packaging/stand-up-pouches' },
                    { term: 'Recyclable', link: '/materials/recyclable-mono-pe' },
                    { term: 'Low MOQ', link: '/products/low-moq-packaging' },
                    { term: 'Digital Print', link: '/printing/digital-printing' },
                    { term: 'Pet Food', link: '/industry/pet-food' },
                    { term: 'Flat Bottom', link: '/packaging/flat-bottom-bags' },
                  ].map((item) => (
                    <Link
                      key={item.term}
                      to={item.link}
                      className="px-2.5 py-1 text-xs bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-700 rounded-full transition-colors"
                    >
                      {item.term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export the pages data for use in other components
export { LEARN_PAGES, ALL_PAGES, FEATURED_PAGES }
