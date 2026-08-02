import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, ChevronRight, BookOpen, Sparkles, ArrowRight, Filter } from 'lucide-react'
import { LEARN_PAGES } from '../components/LearnNavigation'
import SEOPageLayout from '../components/SEOPageLayout'

interface CategoryOverviewPageProps {
  categoryKey?: string
}

export default function CategoryOverviewPage({ categoryKey: propCategoryKey }: CategoryOverviewPageProps) {
  const params = useParams<{ categoryKey?: string }>()
  
  // Resolve category key from prop or URL param or fallback
  const rawKey = propCategoryKey || params.categoryKey || 'materials'
  const categoryKey = Object.keys(LEARN_PAGES).includes(rawKey) ? rawKey : 'materials'
  
  const categoryData = LEARN_PAGES[categoryKey as keyof typeof LEARN_PAGES]
  const [searchQuery, setSearchQuery] = useState('')

  // Filter pages by search
  const filteredPages = useMemo(() => {
    if (!categoryData) return []
    if (!searchQuery.trim()) return categoryData.pages
    return categoryData.pages.filter(page =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [categoryData, searchQuery])

  if (!categoryData) {
    return null
  }

  return (
    <SEOPageLayout
      title={`${categoryData.title} Packaging Guide & Directory | Achieve Pack`}
      description={`Explore all ${categoryData.pages.length} ${categoryData.title} packaging options, guides, specs, and sustainable solutions.`}
    >
      <Helmet>
        <title>{categoryData.title} Packaging Directory | Achieve Pack</title>
        <meta name="description" content={`Comprehensive directory of ${categoryData.title} packaging solutions, materials, specifications, and customization guides.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-900 via-primary-800 to-neutral-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-primary-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/learn" className="hover:text-white transition-colors">Learn Center</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white font-semibold">{categoryData.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold mb-4">
                {categoryData.icon}
                <span>Category Overview ({categoryData.pages.length} Subpages)</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                {categoryData.title} <span className="text-primary-400">Packaging Directory</span>
              </h1>
              
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Discover our complete collection of certified sustainable solutions, technical specifications, and expert guides for <strong className="text-white">{categoryData.title}</strong>.
              </p>
            </div>

            {/* Quick Search Widget */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
              <label className="block text-xs font-bold text-primary-200 uppercase mb-2">
                Filter {categoryData.title} Pages
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder={`Search ${categoryData.title.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white/90 text-neutral-900 placeholder-neutral-500 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <p className="text-[11px] text-neutral-400 mt-2">
                Showing {filteredPages.length} of {categoryData.pages.length} articles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          {filteredPages.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 shadow-sm">
              <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-3 opacity-50" />
              <h3 className="text-lg font-bold text-neutral-800 mb-1">No matching articles found</h3>
              <p className="text-sm text-neutral-500 mb-4">Try searching for a different keyword or clear your query.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-primary-600 text-white rounded-xl text-xs font-semibold hover:bg-primary-700 transition-colors"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPages.map((page, idx) => (
                <Link
                  key={`${page.link}-${idx}`}
                  to={page.link}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Page Image */}
                    <div className="aspect-[4/3] relative bg-neutral-100 overflow-hidden">
                      <img
                        src={page.image}
                        alt={page.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-primary-700 shadow-sm">
                        {categoryData.title}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="font-bold text-base text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                        {page.name}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                        Comprehensive packaging specifications, sustainable material composition, and commercial application details.
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-primary-600 group-hover:text-primary-700">
                    <span>Explore Guide</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Need Custom {categoryData.title} Specifications?
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Our packaging engineers work directly with your team to design, sample, and scale custom eco-friendly pouches tailored to your target volume and compliance requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-primary-700 hover:bg-neutral-100 font-bold rounded-xl text-sm text-center transition-all shadow-md"
              >
                Book Free Consultation
              </a>
              <Link
                to="/store"
                className="w-full sm:w-auto px-6 py-3.5 bg-primary-700 hover:bg-primary-800 border border-white/20 text-white font-bold rounded-xl text-sm text-center transition-all"
              >
                Explore Store Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SEOPageLayout>
  )
}
