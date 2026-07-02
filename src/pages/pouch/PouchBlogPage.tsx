import { useState, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, TrendingUp, Leaf, Coffee, Package, Search, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    problemsTitle: "5 Common Sustainable Packaging Problems (And Solutions)",
    prob1Title: "Overwhelmed by Eco-Certifications",
    prob1Desc: "Navigating BPI, ASTM D6400, and state laws (like CA AB 1201) is confusing.",
    prob1Sol: "We provide clear compliance guides and pre-certified materials to ensure your packaging meets all legal requirements.",
    prob2Title: "High Minimum Order Quantities (MOQs)",
    prob2Desc: "Traditional packaging requires 10,000+ units, tying up cash flow.",
    prob2Sol: "Our digital printing technology enables low MOQs starting at just 100 units with zero plate fees.",
    prob3Title: "Compostable Material Failures",
    prob3Desc: "Eco-friendly bags often crack or lose barrier properties during transit.",
    prob3Sol: "We use advanced high-barrier structures and professional humidity control to maintain material integrity.",
    prob4Title: "Material Confusion",
    prob4Desc: "Brands struggle to choose the right sustainable material for their specific product.",
    prob4Sol: "Our experts match your product needs (barrier, shelf life, disposal) with the optimal mono-material or compostable film.",
    prob5Title: "Hidden Costs & Plate Fees",
    prob5Desc: "Unexpected setup fees and printing plates destroy profit margins.",
    prob5Sol: "Transparent pricing models powered by digital printing mean no hidden fees and exact cost predictability."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Empaques Sostenibles (Y Soluciones)",
    prob1Title: "Abrumado por las Eco-Certificaciones",
    prob1Desc: "Navegar por BPI, ASTM D6400 y leyes estatales es confuso.",
    prob1Sol: "Proporcionamos guías de cumplimiento claras y materiales precertificados.",
    prob2Title: "Altas Cantidades Mínimas (MOQ)",
    prob2Desc: "El embalaje tradicional requiere más de 10,000 unidades.",
    prob2Sol: "La impresión digital permite MOQs desde 100 unidades sin gastos de planchas.",
    prob3Title: "Fallos en Materiales Compostables",
    prob3Desc: "Las bolsas ecológicas a menudo se agrietan o pierden barrera.",
    prob3Sol: "Utilizamos estructuras de alta barrera y control de humedad profesional.",
    prob4Title: "Confusión de Materiales",
    prob4Desc: "Las marcas dudan entre materiales reciclables y compostables.",
    prob4Sol: "Nuestros expertos adaptan las necesidades de su producto con el film óptimo.",
    prob5Title: "Costos Ocultos y Planchas",
    prob5Desc: "Las tarifas de configuración inesperadas destruyen los márgenes.",
    prob5Sol: "Precios transparentes y previsibilidad exacta de costos mediante impresión digital."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants d'Emballages Durables (Et Solutions)",
    prob1Title: "Submergé par les Éco-Certifications",
    prob1Desc: "Naviguer dans les normes BPI, ASTM D6400 et les lois locales est complexe.",
    prob1Sol: "Nous fournissons des guides de conformité et des matériaux pré-certifiés.",
    prob2Title: "Quantités Minimales de Commande Élevées",
    prob2Desc: "L'emballage traditionnel nécessite plus de 10 000 unités.",
    prob2Sol: "L'impression numérique permet des MOQ à partir de 100 unités sans frais de plaques.",
    prob3Title: "Défaillances des Matériaux Compostables",
    prob3Desc: "Les sacs écologiques se fissurent souvent ou perdent leur barrière.",
    prob3Sol: "Nous utilisons des structures à haute barrière et un contrôle professionnel de l'humidité.",
    prob4Title: "Confusion des Matériaux",
    prob4Desc: "Les marques peinent à choisir entre recyclable et compostable.",
    prob4Sol: "Nos experts adaptent vos besoins avec le film mono-matériau ou compostable optimal.",
    prob5Title: "Coûts Cachés et Frais de Plaques",
    prob5Desc: "Les frais de mise en route inattendus détruisent les marges.",
    prob5Sol: "Une tarification transparente grâce à l'impression numérique, sans frais cachés."
  },
  'zh-TW': {
    problemsTitle: "5 個常見的永續包裝問題 (及其解決方案)",
    prob1Title: "環保認證繁雜",
    prob1Desc: "了解 BPI、ASTM D6400 及各州法律令人困惑。",
    prob1Sol: "我們提供清晰的合規指南和預先認證的材料。",
    prob2Title: "最低起訂量 (MOQ) 過高",
    prob2Desc: "傳統包裝需要一萬個以上的數量，佔用現金流。",
    prob2Sol: "我們的數位印刷技術可實現低至 100 個的起訂量，免版費。",
    prob3Title: "可堆肥材料失效",
    prob3Desc: "環保袋在運輸過程中經常破裂或失去阻隔性能。",
    prob3Sol: "我們採用先進的高阻隔結構和專業的濕度控制。",
    prob4Title: "材料選擇困惑",
    prob4Desc: "品牌很難在可回收和可堆肥材料之間做出正確選擇。",
    prob4Sol: "我們的專家會根據您的產品需求，匹配最適合的單一材料或可堆肥薄膜。",
    prob5Title: "隱藏成本與版費",
    prob5Desc: "意想不到的設置費和印刷版費會降低利潤。",
    prob5Sol: "由數位印刷支援的透明定價模式意味著沒有隱藏費用。"
  }
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
)

export default function PouchBlogPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.split('-')[0] || 'en'
  const tl = (key: string) => {
    const l = i18n.language.startsWith('zh') ? 'zh-TW' : (['es', 'fr', 'en'].includes(lang) ? lang : 'en');
    return (localTranslations as any)[l]?.[key] || (localTranslations as any)['en'][key];
  }

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [dynamicPosts, setDynamicPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDynamicPosts() {
      try {
        const { data, error } = await supabase
          .from('pouch_seo_blog')
          .select('slug, title, excerpt, image_url, published_at, category, content->approved')
          .order('published_at', { ascending: false })
        
        if (error) throw error
        
        const approvedPosts = (data || []).filter(p => p.approved !== false)
        setDynamicPosts(approvedPosts)
      } catch (err) {
        console.error('Error fetching dynamic posts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchDynamicPosts()
  }, [])

  const featured = {
    title: 'USA Compostable Packaging Guide: Certifications, State Laws & Low MOQ',
    excerpt: 'Complete guide for US brands: ASTM D6400, BPI certification, state-by-state regulations, and where to buy with MOQ from 100 pieces.',
    image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp',
    date: '2026-01-30',
    category: 'Sustainability Guide',
    readTime: '12 min',
    link: '/blog/usa-compostable-packaging-guide'
  }

  const hardcodedPosts = [
    {
      title: 'Compostable Humidity Control: Stop Packaging from Cracking',
      excerpt: 'Professional humidity control solutions to prevent compostable packaging from becoming brittle and cracking during ocean freight. Essential for cellulose-based bags.',
      image: '/imgs/samples/humidity-control-sample.png',
      date: '2026-03-01',
      category: 'Tips',
      readTime: '5 min',
      link: '/blog/compostable-humidity-control-guide'
    },
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
      title: 'Low MOQ Packaging Guide 2026',
      excerpt: 'How to launch your food brand without going broke. Visual guide to 100-unit minimums, zero plate fees, and digital printing economics.',
      image: '/imgs/seo-photos/a_minimalist_eco_pouch_workspace_2025_8541573.webp',
      date: '2026-02-11',
      category: 'Startup Guide',
      readTime: '10 min',
      link: '/blog/low-moq-packaging-guide'
    },
    {
      title: 'Green Coffee Packaging Guide 2026',
      excerpt: 'Stop sacrificing freshness for sustainability. Guide to high-barrier compostable coffee bags, biodegradable valves, and recyclable Mono-PE options.',
      image: '/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp',
      date: '2026-02-11',
      category: 'Coffee & Tea',
      readTime: '13 min',
      link: '/blog/green-coffee-materials-guide'
    },

    {
      title: 'Eco Packaging Regulations Guide 2026',
      excerpt: 'Navigating the legal minefield of sustainable packaging. EU PPWR, UK Plastic Tax, California SB 54, and why certifications are mandatory.',
      image: '/imgs/seo-photos/a_achievepack_home_compostable_balcony_9883994.webp',
      date: '2026-02-11',
      category: 'Legal & Compliance',
      readTime: '15 min',
      link: '/blog/eco-packaging-regulations-guide'
    },

    {
      title: 'Organic & Non-GMO Compliance Support',
      excerpt: 'Maintain your USDA Organic and EU Organic certifications. Download our Transparency Kit with Non-GMO affidavits and TÜV certificates for your auditor.',
      image: '/imgs/seo-photos/organic/organic_dried_mango_pouch.webp',
      date: '2026-03-12',
      category: 'Legal & Compliance',
      readTime: '5 min',
      link: '/blog/organic-compliance-support-guide'
    },

    {
      title: 'Digital Printing Eco Packaging Guide 2026',
      excerpt: 'Why digital printing is the sustainable choice. Zero setup waste, no plate fees, and 15-day turnaround. HP Indigo 1200 DPI quality on compostable films.',
      image: '/imgs/seo-photos/a_digital_printing_customization_2717640.webp',
      date: '2026-02-11',
      category: 'Tech & Process',
      readTime: '11 min',
      link: '/blog/digital-printing-eco-packaging-guide'
    },

    {
      title: 'Custom Printed Sustainable Packaging Guide 2026',
      excerpt: 'Full color digital printing on compostable and recyclable pouches. No plate fees, low MOQs, and premium finishes like soft touch and spot UV.',
      image: '/imgs/seo-photos/a_digital_printing_customization_2717640.webp',
      date: '2026-02-11',
      category: 'Design & Print',
      readTime: '12 min',
      link: '/blog/custom-printed-materials-guide'
    },

    {
      title: 'Custom Compostable Pouch Suppliers Guide',
      excerpt: 'How to choose a compostable pouch supplier. Red flags to avoid, certification checklists, and why low MOQ digital printing is the future.',
      image: '/imgs/company/bpi/bpipouch.webp',
      date: '2026-02-11',
      category: 'Sourcing Guide',
      readTime: '15 min',
      link: '/blog/custom-compostable-pouch-suppliers-guide'
    },

    {
      title: 'Compostable Baby Food Packaging Guide 2026',
      excerpt: 'Safe, certified compostable packaging for baby food. FDA compliant, BPA-free spout pouches and snack bags. Build trust with eco-conscious parents.',
      image: '/imgs/seo-photos/organic/organic_dried_mango_pouch.webp',
      date: '2026-02-11',
      category: 'Baby & Kids',
      readTime: '12 min',
      link: '/blog/compostable-baby-food-packaging-guide'
    },
    {
      title: 'Eco-Friendly Food Packaging Guide 2026',
      excerpt: 'Comprehensive guide to sustainable food packaging. Compare compostable vs recyclable options, understand certifications, and choose the right barrier for freshness.',
      image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp',
      date: '2026-02-10',
      category: 'Sustainable Solutions',
      readTime: '14 min',
      link: '/blog/eco-friendly-food-packaging-guide'
    },
    {
      title: 'DTC Sustainable Packaging Guide 2026',
      excerpt: 'Scale your DTC brand with sustainable packaging. Low MOQ (100 units), fast digital printing, and e-commerce ready durability.',
      image: '/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp',
      date: '2026-02-10',
      category: 'Direct to Consumer',
      readTime: '12 min',
      link: '/blog/dtc-sustainable-packaging-guide'
    },
    {
      title: 'Recyclable Snack Packaging Guide 2026',
      excerpt: 'Switch to recyclable mono-material snack packaging. High barrier protection for chips, nuts, and jerky. How2Recycle store drop-off compliant.',
      image: '/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp',
      date: '2026-02-10',
      category: 'Recyclable Tech',
      readTime: '10 min',
      link: '/blog/recyclable-snack-packaging-guide'
    },
    {
      title: 'Coffee Bags Degassing Valve Guide: One-Way vs Two-Way vs Aroma Valves',
      excerpt: 'Complete guide to coffee bag degassing valves. Learn one-way vs two-way vs aroma valves, material compatibility, pricing ($0.08-$0.22/bag), and 309% ROI case study.',
      image: '/imgs/store/additional/valve.webp',
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
      image: '/imgs/store/additional/valve.webp',
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

  // Combine hardcoded and dynamic posts
  const posts = useMemo(() => {
    const formattedDynamic = dynamicPosts.map(p => ({
      title: p.title,
      excerpt: p.excerpt,
      image: p.image_url || '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp',
      date: new Date(p.published_at).toISOString().split('T')[0],
      category: p.category,
      readTime: '10 min',
      link: `/blog/${p.slug}`
    }))

    // Filter out hardcoded posts that are now dynamic (if any match by link)
    const dynamicLinks = new Set(formattedDynamic.map(p => p.link))
    const filteredHardcoded = hardcodedPosts.filter(p => !dynamicLinks.has(p.link))

    return [...formattedDynamic, ...filteredHardcoded]
  }, [dynamicPosts])

  const categories = [
    { name: t('pouchBlogPage.categories.all', 'All Posts'), count: posts.length + 1, icon: BookOpen },
    { name: t('pouchBlogPage.categories.sustain', 'Sustainability Guide'), count: 1, icon: Leaf },
    { name: t('pouchBlogPage.categories.pack', 'Packaging Guide'), count: 1, icon: Package },
    { name: t('pouchBlogPage.categories.materials', 'Materials Guide'), count: 3, icon: Leaf },
    { name: t('pouchBlogPage.categories.coffee', 'Coffee Industry'), count: 3, icon: Coffee },
    { name: t('pouchBlogPage.categories.coffeeUsa', 'Coffee USA'), count: 1, icon: Coffee },
    { name: t('pouchBlogPage.categories.design', 'Design Tips'), count: 2, icon: Package },
    { name: t('pouchBlogPage.categories.startup', 'Startup Guide'), count: 1, icon: TrendingUp }
  ]

  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== t('pouchBlogPage.categories.all', 'All Posts')) {
      filtered = filtered.filter(post => {
        // Handle category name variations
        if (selectedCategory === t('pouchBlogPage.categories.materials', 'Materials Guide')) {
          return post.category === 'Materials' || post.category === 'Materials Guide'
        }
        if (selectedCategory === t('pouchBlogPage.categories.sustain', 'Sustainability Guide')) {
          return post.category === 'Sustainability' || post.category === 'Sustainability Guide'
        }
        if (selectedCategory === t('pouchBlogPage.categories.pack', 'Packaging Guide')) {
          return post.category === 'Packaging' || post.category === 'Packaging Guide'
        }
        if (selectedCategory === t('pouchBlogPage.categories.coffeeUsa', 'Coffee USA')) {
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
  }, [posts, selectedCategory, searchQuery, t])

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchBlogPage.meta.title', 'Packaging Blog | Guides, Tips & Industry Insights | POUCH.ECO')}</title>
        <meta 
          name="description" 
          content={t('pouchBlogPage.meta.description', 'Learn about sustainable packaging: compostable vs recyclable, coffee bag barriers, low MOQ tips, and design guides. Expert advice for eco brands.')} 
        />
        <link rel="canonical" href="https://pouch.eco/blog" />
        <meta property="og:title" content={t('pouchBlogPage.meta.ogTitle', 'Packaging Blog & Guides | POUCH.ECO')} />
        <meta property="og:description" content={t('pouchBlogPage.meta.ogDesc', 'Expert guides on sustainable packaging, materials, and design')} />
        <meta property="og:url" content="https://pouch.eco/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
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
            <span className="font-['JetBrains_Mono'] font-bold">{t('pouchBlogPage.hero.badge', 'KNOWLEDGE_BASE')}</span>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchBlogPage.hero.title1', 'Learn About')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {t('pouchBlogPage.hero.titleHighlight', 'Sustainable Packaging')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            {t('pouchBlogPage.hero.subtitle', 'Honest guides, real comparisons, and actionable tips for eco brands launching or scaling their packaging.')}
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
                placeholder={t('pouchBlogPage.search.placeholder', 'SEARCH_GUIDES_AND_TIPS...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-4 border-black pl-12 pr-6 py-4 font-['JetBrains_Mono'] font-bold focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              />
            </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isSelected = selectedCategory === cat.name
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-5 py-3 border-4 border-black font-['JetBrains_Mono'] font-bold text-sm whitespace-nowrap transition-all ${
                    isSelected 
                      ? 'bg-black text-[#D4FF00] -translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                      : 'bg-white hover:bg-neutral-100 hover:text-black'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <NeoCard
            className="grid md:grid-cols-2 gap-0 !p-0 overflow-hidden"
          >
            <div className="h-96 md:h-full border-r-0 md:border-r-4 border-b-4 md:border-b-0 border-black">
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 flex flex-col justify-center bg-[#F0F0F0]">
              <NeoBadge color="lime" className="mb-4">
                {t('pouchBlogPage.featured.badge', 'FEATURED')}
              </NeoBadge>

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
                <span>{featured.readTime} {t('pouchBlogPage.featured.readTime', 'read')}</span>
              </div>

              <NeoButton
                to={featured.link}
              >
                {t('pouchBlogPage.featured.btn', 'Read Guide')}
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </NeoButton>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 bg-[#F0F0F0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-black text-4xl uppercase">
              {selectedCategory === t('pouchBlogPage.categories.all', 'All Posts') ? t('pouchBlogPage.grid.latest', 'Latest Posts') : selectedCategory}
            </h2>
            <div className="font-['JetBrains_Mono'] text-sm font-bold">
              {t('pouchBlogPage.grid.showing', 'Showing {{filtered}} of {{total}} posts', { filtered: filteredPosts.length, total: posts.length })}
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-[#10b981] mb-4" />
              <p className="font-['JetBrains_Mono'] font-bold text-gray-500 uppercase">{t('pouchBlogPage.loading', 'Synchronizing knowledge base...')}</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white border-4 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="font-black text-2xl mb-3">{t('pouchBlogPage.empty.title', 'No Posts Found')}</h3>
                <p className="font-['JetBrains_Mono'] text-sm mb-6 text-gray-600">
                  {t('pouchBlogPage.empty.desc', 'Try adjusting your search or filter to find what you\'re looking for.')}
                </p>
                <NeoButton
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory(t('pouchBlogPage.categories.all', 'All Posts'))
                  }}
                >
                  {t('pouchBlogPage.empty.btn', 'Reset Filters')}
                </NeoButton>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <NeoCard
                  key={idx}
                  className="flex flex-col h-full !p-0 overflow-hidden group"
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
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <NeoBadge color="lime">
                        {post.category}
                      </NeoBadge>
                    </div>

                    <h3 className="font-black text-xl mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-sm mb-4 font-['Space_Grotesk'] text-gray-700 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] font-bold mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime} {t('pouchBlogPage.featured.readTime', 'read')}</span>
                    </div>

                    <NeoButton
                      to={post.link}
                      variant="secondary"
                      className="!py-2 !text-xs !w-fit"
                    >
                      {t('pouchBlogPage.grid.readMore', 'Read More')}
                      <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                    </NeoButton>
                  </div>
                </NeoCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="font-black text-4xl mb-8 uppercase">
                {tl('problemsTitle')}
              </h2>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="bg-[#F0F0F0] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
                    <div className="flex-shrink-0 mt-1 text-black">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-['JetBrains_Mono']">{tl(`prob${num}Title`)}</h3>
                      <p className="text-gray-700 text-sm mt-1 mb-2 font-['Space_Grotesk']">{tl(`prob${num}Desc`)}</p>
                      <div className="flex gap-2 items-start text-green-700 bg-green-50 p-2 border border-green-200">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold">{tl(`prob${num}Sol`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#D4FF00] p-4 transform rotate-1">
                <img 
                  src="/imgs/knowledge/sustainable-packaging-pain-points.jpg" 
                  alt="Sustainable Packaging Solutions" 
                  className="w-full h-auto border-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl mb-6 uppercase">
            {t('pouchBlogPage.newsletter.title1', 'Get Packaging')}<br/>
            {t('pouchBlogPage.newsletter.title2', 'Tips Weekly')}
          </h2>

          <p className="text-xl mb-8 font-['Space_Grotesk']">
            {t('pouchBlogPage.newsletter.subtitle', 'Industry updates, material guides, and exclusive startup tips. No spam, unsubscribe anytime.')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={t('pouchBlogPage.newsletter.placeholder', 'YOUR_EMAIL@BRAND.COM')}
              className="flex-1 bg-white border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
            />
            <NeoButton 
              className="px-8 py-4"
              onClick={() => alert('Subscription logic here')}
            >
              {t('pouchBlogPage.newsletter.btn', 'Subscribe')}
            </NeoButton>
          </div>

          <p className="mt-4 text-sm font-['JetBrains_Mono']">
            {t('pouchBlogPage.newsletter.footer', '📧 Join 1,200+ founders learning about sustainable packaging')}
          </p>
        </div>
      </section>
    </PouchLayout>
  )
}
