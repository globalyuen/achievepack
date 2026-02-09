import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, TrendingUp, Leaf, Coffee, Package, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import PouchLayout from '../../components/pouch/PouchLayout'

export default function PouchBlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const featured = {
    title: 'USA Compostable Packaging Guide: Certifications, State Laws & Low MOQ',
    excerpt: 'Complete guide for US brands: ASTM D6400, BPI certification, state-by-state regulations, and where to buy with MOQ from 100 pieces.',
    image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp',
    date: '2026-01-30',
    category: 'Sustainability Guide',
    readTime: '12 min',
    link: '/blog/usa-compostable-packaging-guide'
  }

  const posts = [
    {
      title: 'Home Compostable Packaging Guide: OK Home, AS 5810, TÜV Certification',
      excerpt: 'Complete guide to home compostable packaging for Australia, UK, and EU markets. Learn OK Home vs AS 5810 certifications, material options (Kraft/PLA, PBAT, NatureFlex), transparent pricing (+25-35% cost), and real ROI case study from Melbourne tea brand.',
      image: '/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp',
      date: '2026-01-30',
      category: 'Materials',
      readTime: '15 min',
      link: '/blog/home-compostable-guide'
    },
    {
      title: 'Coffee Bags Degassing Valve Guide: One-Way vs Two-Way vs Aroma Valves',
      excerpt: 'Complete guide to coffee bag degassing valves. Learn one-way vs two-way vs aroma valves, material compatibility, pricing ($0.08-$0.22/bag), and 309% ROI case study.',
      image: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp',
      date: '2026-01-30',
      category: 'Coffee',
      readTime: '15 min',
      link: '/blog/coffee-degassing-valve-guide'
    },
    {
      title: 'BPI Certified Guide: How to Get Your Packaging BPI-Certified in 2026',
      excerpt: 'Complete guide to BPI certification. Learn the 4-step process, costs ($11K-$20K), timeline (4-6 months), BPI vs EN 13432 comparison, and real case studies from Intelligentsia Coffee.',
      image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp',
      date: '2026-01-30',
      category: 'Certification',
      readTime: '16 min',
      link: '/blog/bpi-certified-guide'
    },
    {
      title: 'Industrial Compostable Guide: EN 13432 and ASTM D6400 Certification',
      excerpt: 'Complete guide to industrial compostable packaging. Learn EN 13432 vs ASTM D6400 certifications, material options (PLA, PBAT, Bio-PBS), pricing, and real case studies.',
      image: '/imgs/seo-photos/a_industrial_compostable_facility_2850870.webp',
      date: '2026-01-30',
      category: 'Materials',
      readTime: '14 min',
      link: '/blog/industrial-compostable-guide'
    },
    {
      title: 'USA Labeling Guide: California, Washington & Colorado Compliance',
      excerpt: 'Avoid the $10K/day fine: Complete guide to California AB 1201/SB 343, Washington HB 1569, Colorado HB 22-1355 compliance. ASTM D6400 certification explained.',
      image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp',
      date: '2026-01-30',
      category: 'USA Compliance',
      readTime: '12 min',
      link: '/blog/usa-labeling-guide'
    },
    {
      title: 'USA Snacks Packaging Guide: State Laws, Materials & Real Pricing',
      excerpt: 'Complete guide for US snack brands: Compostable vs recyclable, California/Washington/Colorado compliance, transparent pricing, startup case study.',
      image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp',
      date: '2026-01-30',
      category: 'Snacks USA',
      readTime: '14 min',
      link: '/blog/usa-snacks-packaging-guide'
    },
    {
      title: 'Low MOQ Packaging Guide: Start with Just 100 Pieces',
      excerpt: 'Digital print vs plate print economics, transparent pricing breakdown, complete timeline. Perfect for small brands, coffee roasters, and e-commerce startups.',
      image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp',
      date: '2026-01-30',
      category: 'Startup Guide',
      readTime: '16 min',
      link: '/blog/low-moq-packaging-guide'
    },
    {
      title: 'Compostable Stand-Up Pouches Guide: Materials, Sizes & Real Pricing',
      excerpt: 'Everything you need to know: ASTM D6400 material science, size-to-product matching, transparent pricing from 100 pieces.',
      image: '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp',
      date: '2026-01-30',
      category: 'Packaging Guide',
      readTime: '18 min',
      link: '/blog/compostable-stand-up-pouches-guide'
    },
    {
      title: 'USA Coffee Packaging: Compostable vs Recyclable + State Laws',
      excerpt: 'Complete guide for US specialty roasters: ASTM D6400 vs recyclable mono-PE, California/Washington compliance, transparent pricing from 100 pieces.',
      image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp',
      date: '2026-01-30',
      category: 'Coffee USA',
      readTime: '15 min',
      link: '/blog/usa-coffee-packaging'
    },
    {
      title: 'Coffee Packaging Guide: Compostable vs Recyclable (Low MOQ from 100)',
      excerpt: 'Everything specialty roasters need to know about barrier performance, degassing valves, and ordering sustainable coffee bags.',
      image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp',
      date: '2026-01-30',
      category: 'Coffee Industry',
      readTime: '8 min',
      link: '/blog/coffee-packaging-guide'
    },
    {
      title: 'The Ultimate Guide to Compostable Packaging in 2026',
      excerpt: 'Everything you need to know about industrial vs. home compostable materials, certifications, and choosing the right option for your brand.',
      image: '/imgs/4-infograhic/compost.webp',
      date: '2026-01-25',
      category: 'Materials Guide',
      readTime: '8 min',
      link: '/products/compostable-stand-up-pouches'
    },
    {
      title: 'Low MOQ Packaging: How to Launch with Just 500 Units',
      excerpt: 'A complete guide for startups and small brands on launching sustainably without huge MOQ commitments.',
      image: '/imgs/infographic-low-moq.webp',
      date: '2026-01-20',
      category: 'Startup Guide',
      readTime: '6 min',
      link: '/products/low-moq-packaging'
    },
    {
      title: 'Coffee Bag Barrier Options: What You Actually Need',
      excerpt: 'Confused about high vs. medium vs. low barrier? Here\'s how to choose the right protection for your coffee beans.',
      image: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp',
      date: '2026-01-18',
      category: 'Coffee Industry',
      readTime: '7 min',
      link: '/products/coffee-bags-degassing-valve'
    },
    {
      title: 'Degassing Valves Explained: One-Way Valve for Fresh Coffee',
      excerpt: 'Why your coffee bags need degassing valves, how they work, and which type is best for your roast profile.',
      image: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp',
      date: '2026-01-15',
      category: 'Coffee Industry',
      readTime: '5 min',
      link: '/products/coffee-bags-degassing-valve'
    },
    {
      title: 'Recyclable vs. Compostable: Which is Better for Your Brand?',
      excerpt: 'The honest truth about recyclable mono-material and compostable packaging. Pros, cons, and which customers prefer.',
      image: '/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp',
      date: '2026-01-12',
      category: 'Materials Guide',
      readTime: '6 min',
      link: '/products/recyclable-mono-material-pouches'
    },
    {
      title: 'Surface Finishes 101: Matte, Gloss, or Soft-Touch?',
      excerpt: 'Visual comparison and tactile differences between finish options. See which one matches your brand aesthetic.',
      image: '/imgs/surface/a_matte_finish_detail_7483118.webp',
      date: '2026-01-10',
      category: 'Design Tips',
      readTime: '4 min',
      link: '/options/surface-finish'
    },
    {
      title: '6 Reclosure Options for Stand-Up Pouches',
      excerpt: 'Zippers, spouts, tin-ties, and more. A complete breakdown of reclosure mechanisms and their best use cases.',
      image: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp',
      date: '2026-01-08',
      category: 'Design Tips',
      readTime: '6 min',
      link: '/options/reclosure'
    }
  ]

  const categories = [
    { name: 'All Posts', count: posts.length + 1, icon: BookOpen },
    { name: 'Sustainability Guide', count: 1, icon: Leaf },
    { name: 'Packaging Guide', count: 1, icon: Package },
    { name: 'Materials Guide', count: 3, icon: Leaf },
    { name: 'Coffee Industry', count: 3, icon: Coffee },
    { name: 'Coffee USA', count: 1, icon: Coffee },
    { name: 'Design Tips', count: 2, icon: Package },
    { name: 'Startup Guide', count: 1, icon: TrendingUp }
  ]

  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'All Posts') {
      filtered = filtered.filter(post => {
        // Handle category name variations
        if (selectedCategory === 'Materials Guide') {
          return post.category === 'Materials' || post.category === 'Materials Guide'
        }
        if (selectedCategory === 'Sustainability Guide') {
          return post.category === 'Sustainability' || post.category === 'Sustainability Guide'
        }
        if (selectedCategory === 'Packaging Guide') {
          return post.category === 'Packaging' || post.category === 'Packaging Guide'
        }
        if (selectedCategory === 'Coffee USA') {
          return post.category === 'Snacks USA' || post.category === 'Coffee USA'
        }
        return post.category === selectedCategory || post.category.includes(selectedCategory.split(' ')[0])
      })
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [posts, selectedCategory, searchQuery])

  return (
    <PouchLayout>
      <Helmet>
        <title>Packaging Blog | Guides, Tips & Industry Insights | POUCH.ECO</title>
        <meta 
          name="description" 
          content="Learn about sustainable packaging: compostable vs recyclable, coffee bag barriers, low MOQ tips, and design guides. Expert advice for eco brands." 
        />
        <link rel="canonical" href="https://pouch.eco/blog" />
        <meta property="og:title" content="Packaging Blog & Guides | POUCH.ECO" />
        <meta property="og:description" content="Expert guides on sustainable packaging, materials, and design" />
        <meta property="og:url" content="https://pouch.eco/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-blog"
          >
            <source src="/video/pouch-eco-marketing-videos/lowmoq.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <span className="font-['JetBrains_Mono'] font-bold">KNOWLEDGE_BASE</span>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            Learn About<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Sustainable Packaging
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            <strong>Honest guides, real comparisons, and actionable tips</strong> for eco brands launching or scaling their packaging.
          </p>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-8 px-4 bg-white border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, tags, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black font-['JetBrains_Mono'] font-bold text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold hover:text-[#10b981] transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 border-2 border-black transition-colors whitespace-nowrap font-['JetBrains_Mono'] font-bold text-sm ${
                  selectedCategory === cat.name 
                    ? 'bg-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-white hover:bg-[#D4FF00]'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mt-4 font-['JetBrains_Mono'] text-sm">
              Found <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'post' : 'posts'} matching "{searchQuery}"
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F0F0F0] border-4 border-black grid md:grid-cols-2 overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="border-2 border-black overflow-hidden">
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block bg-[#D4FF00] border-2 border-black px-3 py-1 text-xs font-['JetBrains_Mono'] font-bold w-fit mb-4">
                FEATURED
              </div>

              <h2 className="font-black text-3xl md:text-4xl mb-4 leading-tight">
                {featured.title}
              </h2>

              <p className="text-lg mb-6 font-['Space_Grotesk']">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm mb-6 font-['JetBrains_Mono']">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featured.date}
                </span>
                <span>•</span>
                <span>{featured.readTime} read</span>
              </div>

              <Link
                to={featured.link}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-black uppercase hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all w-fit"
              >
                Read Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 bg-[#F0F0F0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-black text-4xl uppercase">
              {selectedCategory === 'All Posts' ? 'Latest Posts' : selectedCategory}
            </h2>
            <div className="font-['JetBrains_Mono'] text-sm font-bold">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white border-4 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="font-black text-2xl mb-3">No Posts Found</h3>
                <p className="font-['JetBrains_Mono'] text-sm mb-6 text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All Posts')
                  }}
                  className="bg-black text-white px-6 py-3 font-black uppercase border-4 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden group"
                >
                  {/* Image */}
                  <div className="border-b-4 border-black overflow-hidden h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#D4FF00] border-2 border-black px-2 py-1 text-xs font-['JetBrains_Mono'] font-bold">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="font-black text-xl mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-sm mb-4 font-['Space_Grotesk'] text-gray-700">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] font-bold mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime} read</span>
                    </div>

                    <Link
                      to={post.link}
                      className="inline-flex items-center gap-2 text-sm font-black uppercase hover:text-[#10b981] transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl mb-6 uppercase">
            Get Packaging<br/>Tips Weekly
          </h2>

          <p className="text-xl mb-8 font-['Space_Grotesk']">
            <strong>Industry updates, material guides, and exclusive startup tips.</strong> No spam, unsubscribe anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="YOUR_EMAIL@BRAND.COM"
              className="flex-1 bg-white border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            />
            <button className="bg-black text-white px-8 py-4 font-black uppercase border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              Subscribe
            </button>
          </div>

          <p className="mt-4 text-sm font-['JetBrains_Mono']">
            📧 Join 1,200+ founders learning about sustainable packaging
          </p>
        </div>
      </section>
    </PouchLayout>
  )
}
