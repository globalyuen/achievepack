import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, ChevronDown, Leaf, Package, Factory, Coffee, FileText, BookOpen, Users, Award } from 'lucide-react'

// All SEO pages mapped with illustrated images
const LEARN_PAGES = {
  materials: {
    title: 'Materials',
    icon: <Leaf className="h-4 w-4" />,
    pages: [
      { name: 'Home Compostable', link: '/materials/home-compostable', image: '/imgs/illustrated/a_home_compostable_card_v1_2166648.webp' },
      { name: 'Industrial Compostable', link: '/materials/industrial-compostable', image: '/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp' },
      { name: 'Recyclable Mono PE', link: '/materials/recyclable-mono-pe', image: '/imgs/illustrated/a_recyclable_mono_pe_card_v1_2991486.webp' },
      { name: 'Recyclable Mono PP', link: '/materials/recyclable-mono-pp', image: '/imgs/illustrated/a_recyclable_mono_pp_card_v2_2805205.webp' },
      { name: 'Bio-PE', link: '/materials/bio-pe', image: '/imgs/illustrated/a_bio_pe_card_v3_4603248.webp' },
      { name: 'PCR Recycled', link: '/materials/pcr', image: '/imgs/illustrated/a_pcr_card_v1_0334493.webp' },
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
      { name: 'All Options', link: '/features/all-options', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },
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
    ]
  },
  knowledge: {
    title: 'Knowledge Base',
    icon: <BookOpen className="h-4 w-4" />,
    pages: [
      { name: 'Pouch Sizing', link: '/knowledge/pouch-sizing', image: '/imgs/illustrated/a_pouch_sizing_guide_card_v3_5278730.webp' },
      { name: 'Size Guide', link: '/knowledge/size-guide', image: '/imgs/illustrated/a_size_guide_card_v2_9433535.webp' },
      { name: 'Printing Types', link: '/knowledge/printing-types', image: '/imgs/illustrated/a_printing_types_card_v2_6243973.webp' },
      { name: 'Workflow', link: '/knowledge/workflow', image: '/imgs/illustrated/a_lowmoq_warm_3372406.webp' },
    ]
  },
  caseStudies: {
    title: 'Case Studies',
    icon: <Users className="h-4 w-4" />,
    pages: [
      { name: 'Coffee Roastery', link: '/case-studies/coffee-roastery', image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp' },
      { name: 'Snack Brand', link: '/solutions/snack-brand-manager', image: '/imgs/illustrated/a_snack_brand_variation_1_5605894.webp' },
      { name: 'Artisan Producer', link: '/solutions/artisan-producer', image: '/imgs/illustrated/a_artisan_producer_variation_1_5454378.webp' },
      { name: 'Startup Founder', link: '/solutions/startup-founder', image: '/imgs/illustrated/a_startup_founder_variation_3_2900816.webp' },
    ]
  },
  company: {
    title: 'Company',
    icon: <Award className="h-4 w-4" />,
    pages: [
      { name: 'About Us', link: '/company/about', image: '/imgs/illustrated/a_corporate_sustainability_variation_1_1739210.webp' },
      { name: 'Certificates', link: '/company/certificates', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
    ]
  },
}

// Flatten all pages for rotation
const ALL_PAGES = Object.values(LEARN_PAGES).flatMap(cat => cat.pages)

interface LearnNavigationProps {
  currentPath?: string
}

export default function LearnNavigation({ currentPath }: LearnNavigationProps) {
  const location = useLocation()
  const path = currentPath || location.pathname
  
  const [activeCategory, setActiveCategory] = useState<string | null>('materials')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Auto-rotate featured images
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ALL_PAGES.length)
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
  
  // Get current page info
  const currentPage = ALL_PAGES[currentSlide]
  
  // Get 6 thumbnails centered around current slide
  const getThumbnails = () => {
    const total = ALL_PAGES.length
    const thumbs = []
    for (let i = -3; i <= 2; i++) {
      const idx = (currentSlide + i + total) % total
      thumbs.push({ ...ALL_PAGES[idx], index: idx })
    }
    return thumbs
  }

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Category Navigation */}
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
          
          {/* Right: Featured Image Carousel */}
          <div className="lg:col-span-8">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
              Featured Articles
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
              {getThumbnails().map((page, i) => (
                <button
                  key={`${page.link}-${i}`}
                  onClick={() => handleThumbnailClick(page.index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    page.index === currentSlide
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
          </div>
        </div>
      </div>
    </div>
  )
}

// Export the pages data for use in other components
export { LEARN_PAGES, ALL_PAGES }
