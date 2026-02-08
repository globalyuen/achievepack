import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, TrendingUp, Leaf, Coffee, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import PouchLayout from '../../components/pouch/PouchLayout'

export default function PouchBlogPage() {
  const featured = {
    title: 'The Ultimate Guide to Compostable Packaging in 2025',
    excerpt: 'Everything you need to know about industrial vs. home compostable materials, certifications, and choosing the right option for your brand.',
    image: '/imgs/4-infograhic/compost.webp',
    date: '2025-01-25',
    category: 'Materials Guide',
    readTime: '8 min',
    link: '/products/compostable-stand-up-pouches'
  }

  const posts = [
    {
      title: 'Low MOQ Packaging: How to Launch with Just 500 Units',
      excerpt: 'A complete guide for startups and small brands on launching sustainably without huge MOQ commitments.',
      image: '/imgs/infographic-low-moq.webp',
      date: '2025-01-20',
      category: 'Startup Guide',
      readTime: '6 min',
      link: '/products/low-moq-packaging'
    },
    {
      title: 'Coffee Bag Barrier Options: What You Actually Need',
      excerpt: 'Confused about high vs. medium vs. low barrier? Here\'s how to choose the right protection for your coffee beans.',
      image: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp',
      date: '2025-01-18',
      category: 'Coffee Industry',
      readTime: '7 min',
      link: '/products/coffee-bags-degassing-valve'
    },
    {
      title: 'Degassing Valves Explained: One-Way Valve for Fresh Coffee',
      excerpt: 'Why your coffee bags need degassing valves, how they work, and which type is best for your roast profile.',
      image: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp',
      date: '2025-01-15',
      category: 'Coffee Industry',
      readTime: '5 min',
      link: '/products/coffee-bags-degassing-valve'
    },
    {
      title: 'Recyclable vs. Compostable: Which is Better for Your Brand?',
      excerpt: 'The honest truth about recyclable mono-material and compostable packaging. Pros, cons, and which customers prefer.',
      image: '/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp',
      date: '2025-01-12',
      category: 'Materials Guide',
      readTime: '6 min',
      link: '/products/recyclable-mono-material-pouches'
    },
    {
      title: 'Surface Finishes 101: Matte, Gloss, or Soft-Touch?',
      excerpt: 'Visual comparison and tactile differences between finish options. See which one matches your brand aesthetic.',
      image: '/imgs/surface/a_matte_finish_detail_7483118.webp',
      date: '2025-01-10',
      category: 'Design Tips',
      readTime: '4 min',
      link: '/options/surface-finish'
    },
    {
      title: '6 Reclosure Options for Stand-Up Pouches',
      excerpt: 'Zippers, spouts, tin-ties, and more. A complete breakdown of reclosure mechanisms and their best use cases.',
      image: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp',
      date: '2025-01-08',
      category: 'Design Tips',
      readTime: '6 min',
      link: '/options/reclosure'
    }
  ]

  const categories = [
    { name: 'All Posts', count: posts.length + 1, icon: BookOpen },
    { name: 'Materials Guide', count: 3, icon: Leaf },
    { name: 'Coffee Industry', count: 2, icon: Coffee },
    { name: 'Design Tips', count: 2, icon: Package },
    { name: 'Startup Guide', count: 1, icon: TrendingUp }
  ]

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

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
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

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-white hover:bg-[#D4FF00] transition-colors whitespace-nowrap font-['JetBrains_Mono'] font-bold text-sm"
              >
                <cat.icon className="w-4 h-4" />
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
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
          <h2 className="font-black text-4xl mb-12 uppercase">Latest Posts</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
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
