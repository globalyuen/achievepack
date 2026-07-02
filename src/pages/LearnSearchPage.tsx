import { useState, useMemo, useEffect, useCallback, useTransition } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { Search, ArrowRight, ShoppingCart, Leaf, Package, Factory, FileText, Users, Award, ShoppingBag, Boxes, Beaker, BookOpen, AlertTriangle, CheckCircle } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { LEARN_PAGES } from '../components/LearnNavigation'
import { useTranslation } from 'react-i18next'

// Categories for filtering - dynamically include all categories from LEARN_PAGES
const CATEGORY_MAPPING: Record<string, string> = {
  company: 'Company',
  packaging: 'Packaging',
  materials: 'Materials',
  industries: 'Industries',
  products: 'Products',
  knowledge: 'Knowledge',
  support: 'Support',
  composting: 'Topics',
  biope: 'Materials',
  pcr: 'Materials',
  freeService: 'Free Service',
  options: 'Features',
  solutions: 'Solutions',
  topics: 'Topics',
  caseStudies: 'Case Studies',
  function: 'Function',
  lab: 'Lab',
  usa: 'USA Market',
  spec: 'Spec',
  recyclable: 'Materials',
}

const translations = {
  en: [
    {
      title: "Information Overload",
      description: "Finding the right packaging material among hundreds of options can be overwhelming and time-consuming.",
      solution: "A centralized, searchable knowledge base categorizes packaging solutions by material, feature, and industry for rapid discovery."
    },
    {
      title: "Unclear Material Specs",
      description: "Technical specifications for sustainable materials (like PCR or Bio-PE) are often buried in dense PDFs.",
      solution: "Filtering by 'Materials' and 'Spec' surfaces technical details, barrier properties, and thickness instantly."
    },
    {
      title: "Choosing Between Solutions",
      description: "Brands struggle to decide whether standard or custom packaging better suits their launch timeline.",
      solution: "Case studies and direct comparisons highlight practical performance differences to guide your decision-making."
    },
    {
      title: "Compliance and Regulations Confusion",
      description: "Global recycling standards and compostability certifications vary widely and change frequently.",
      solution: "Dedicated topics cover up-to-date global recycling standards and regional compliance regulations."
    },
    {
      title: "Uncertainty on Product Suitability",
      description: "It's difficult to know which eco-friendly material works best for specific products like liquids or powders.",
      solution: "Filtering by 'Industries' matches packaging types to specific sector requirements, ensuring optimal product protection."
    }
  ],
  es: [
    {
      title: "Sobrecarga de Información",
      description: "Encontrar el material de embalaje adecuado entre cientos de opciones puede ser abrumador y llevar mucho tiempo.",
      solution: "Una base de conocimientos centralizada y buscable clasifica las soluciones por material, característica e industria para un descubrimiento rápido."
    },
    {
      title: "Especificaciones de Material Poco Claras",
      description: "Las especificaciones técnicas de materiales sostenibles a menudo están ocultas en PDFs densos.",
      solution: "Filtrar por 'Materiales' y 'Especificaciones' muestra los detalles técnicos y propiedades de barrera al instante."
    },
    {
      title: "Elegir Entre Soluciones",
      description: "Las marcas luchan por decidir si el embalaje estándar o personalizado se adapta mejor a su línea de tiempo.",
      solution: "Los estudios de caso y las comparaciones directas destacan las diferencias prácticas de rendimiento."
    },
    {
      title: "Confusión sobre Cumplimiento y Regulaciones",
      description: "Los estándares globales de reciclaje y certificaciones de compostabilidad varían y cambian frecuentemente.",
      solution: "Temas dedicados cubren los estándares de reciclaje actualizados y las regulaciones de cumplimiento regional."
    },
    {
      title: "Incertidumbre sobre la Idoneidad del Producto",
      description: "Es difícil saber qué material ecológico funciona mejor para productos específicos como líquidos o polvos.",
      solution: "Filtrar por 'Industrias' adapta los tipos de embalaje a los requisitos de sectores específicos."
    }
  ],
  fr: [
    {
      title: "Surcharge d'Informations",
      description: "Trouver le bon matériau d'emballage parmi des centaines d'options peut être accablant et chronophage.",
      solution: "Une base de connaissances centralisée classe les solutions d'emballage par matériau, caractéristique et industrie."
    },
    {
      title: "Spécifications de Matériaux Floues",
      description: "Les spécifications techniques pour les matériaux durables sont souvent enfouies dans des PDF denses.",
      solution: "Le filtrage par 'Matériaux' et 'Spécifications' fait ressortir instantanément les détails techniques et les propriétés de barrière."
    },
    {
      title: "Choisir Entre les Solutions",
      description: "Les marques ont du mal à décider si l'emballage standard ou personnalisé convient mieux à leur calendrier.",
      solution: "Les études de cas et les comparaisons directes soulignent les différences de performances pratiques."
    },
    {
      title: "Confusion sur la Conformité et les Réglementations",
      description: "Les normes mondiales de recyclage et les certifications de compostabilité varient et changent fréquemment.",
      solution: "Des sujets dédiés couvrent les normes de recyclage à jour et les réglementations de conformité régionales."
    },
    {
      title: "Incertitude sur l'Adéquation du Produit",
      description: "Il est difficile de savoir quel matériau écologique convient le mieux à des produits spécifiques.",
      solution: "Le filtrage par 'Industries' fait correspondre les types d'emballage aux exigences spécifiques du secteur."
    }
  ],
  "zh-TW": [
    {
      title: "資訊超載",
      description: "在數百種選項中尋找合適的包裝材料可能會令人不知所措且耗時。",
      solution: "集中且可搜尋的知識庫依材料、特徵和行業對包裝解決方案進行分類，實現快速探索。"
    },
    {
      title: "材料規格不清楚",
      description: "永續材料的技術規格通常隱藏在密集的 PDF 文件中。",
      solution: "透過「材料」和「規格」進行篩選，可立即顯示技術細節和阻隔特性。"
    },
    {
      title: "在解決方案之間做出選擇",
      description: "品牌難以決定標準或客製化包裝哪個更適合他們的上市時間表。",
      solution: "案例研究和直接比較突出了實際效能差異，以指導您的決策。"
    },
    {
      title: "合規與法規的困惑",
      description: "全球回收標準和可堆肥認證差異很大且經常變化。",
      solution: "專屬主題涵蓋了最新的全球回收標準和區域合規法規。"
    },
    {
      title: "對產品適用性的不確定性",
      description: "很難知道哪種環保材料最適合液體或粉末等特定產品。",
      solution: "透過「行業」篩選，將包裝類型與特定行業需求進行匹配，確保最佳的產品保護。"
    }
  ]
};

export const sectionsForPouch = translations;
export const sectionsForAchieve = translations;

// Generate categories from LEARN_PAGES keys
const CATEGORIES = [
  'All',
  'Company',
  'Materials',
  'Packaging',
  'Features',
  'Industries',
  'Products',
  'Solutions',
  'Topics',
  'Case Studies',
  'Knowledge',
  'Free Service',
  'Function',
  'Lab',
  'USA Market',
  'Spec',
  'Support',
]

// Default keywords and descriptions based on category
const getDefaultKeywords = (name: string, category: string): string[] => {
  const words = name.toLowerCase().split(/\s+/)
  return [...words, category.toLowerCase()]
}

const getDefaultDescription = (name: string, category: string): string => {
  return `Learn about ${name} - ${category} packaging solutions from Achieve Pack`
}

// Convert LEARN_PAGES to flat array for search
const ALL_PAGES = Object.entries(LEARN_PAGES).flatMap(([key, category]) =>
  category.pages.map(page => ({
    name: page.name,
    link: page.link,
    image: page.image,
    category: CATEGORY_MAPPING[key] || category.title,
    description: getDefaultDescription(page.name, category.title),
    keywords: getDefaultKeywords(page.name, category.title),
  }))
)

export default function LearnSearchPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.learnSearch'
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
      <SEO 
        title={searchQuery ? `${t(`${p}.seo.titlePrefix`, "Search: ")}${searchQuery}${t(`${p}.seo.titleSuffix`, " | Achieve Pack")}` : t(`${p}.seo.titleDefault`, "Learn Center | Achieve Pack")} 
        description={t(`${p}.seo.description`, "Explore our comprehensive knowledge base on sustainable packaging materials, shapes, features, and industry solutions.")} 
        url="https://achievepack.com/learn" 
      />

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-primary-600 text-white fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" onClick={handleNavigation('/')} className="flex items-center gap-3 hover:opacity-90 transition cursor-pointer">
                <img src="/ap-logo-white.png" alt="Achieve Pack" className="h-10 w-auto" loading="eager" width="133" height="40" />
                <span className="text-2xl font-bold hidden sm:inline">{t(`${p}.header.title`, "Learn Center")}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/store" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">{t(`${p}.header.store`, "Store")}</span>
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
                {t(`${p}.hero.title`, "Packaging Knowledge Center")}
              </h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                {t(`${p}.hero.desc`, "Everything you need to know about sustainable packaging materials, shapes, and solutions")}
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
                  placeholder={t(`${p}.filters.searchPlaceholder`, "Search materials, shapes, features...")}
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
                    {t(`${p}.categories.${category}`, category)}
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
                <>{t(`${p}.results.found`, "Found ")}<strong>{filteredPages.length}</strong>{t(`${p}.results.results`, " results")}</>
              ) : (
                <>{t(`${p}.results.browseAll`, "Browse all ")}<strong>{filteredPages.length}</strong>{t(`${p}.results.pages`, " pages")}</>
              )}
            </p>
            
            {filteredPages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-500 text-lg">{t(`${p}.results.noPages`, "No pages found matching your criteria.")}</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSearchParams({}) }}
                  className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                >
                  {t(`${p}.results.clearFilters`, "Clear Filters")}
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
                        {t(`${p}.categories.${page.category}`, page.category)}
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
                        {t(`${p}.results.learnMore`, "Learn More")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900">
                5 Common Packaging Knowledge Problems (And Solutions)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/imgs/knowledge/packaging-knowledge-search-pain-points.jpg" 
                  alt="Packaging Knowledge Search Solutions" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                {(translations[i18n.language as keyof typeof translations] || translations.en).map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{item.description}</p>
                    <div className="flex items-start gap-2 bg-primary-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <p className="text-primary-900 font-medium">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t(`${p}.cta.title`, "Ready to Get Started?")}
            </h2>
            <p className="text-primary-100 mb-6">
              {t(`${p}.cta.desc`, "Explore our sustainable packaging options. Low MOQ from 100 pieces.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                {t(`${p}.cta.button1`, "Shop Now")}
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t(`${p}.cta.button2`, "Get Custom Quote")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
