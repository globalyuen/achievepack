import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { Loader2, AlertCircle, ArrowLeft, Package, Info, CheckCircle, HelpCircle, AlertTriangle, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'

// Local translations for common pain points and engineering solutions
const translations = {
  en: {
    problemsTitle: "5 Common Compostable Packaging Problems (And Solutions)",
    problem1: "Poor Moisture Barrier",
    solution1: "Advanced biopolymer lamination.",
    problem2: "Weak Seal Strength",
    solution2: "Optimized heat sealing profiles.",
    problem3: "Short Shelf Life",
    solution3: "High-barrier metallized compostable films.",
    problem4: "Tearing During Transit",
    solution4: "Reinforced film structures and impact-resistant materials.",
    problem5: "Incomplete Degradation",
    solution5: "Certified industrial/home compostable materials strictly adhering to EN 13432."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Empaques Compostables (Y Soluciones)",
    problem1: "Barrera de humedad deficiente",
    solution1: "Laminación avanzada de biopolímeros.",
    problem2: "Resistencia de sellado débil",
    solution2: "Perfiles de termosellado optimizados.",
    problem3: "Vida útil corta",
    solution3: "Películas compostables metalizadas de alta barrera.",
    problem4: "Desgarro durante el tránsito",
    solution4: "Estructuras de película reforzadas y materiales resistentes a impactos.",
    problem5: "Degradación incompleta",
    solution5: "Materiales compostables certificados que cumplen estrictamente con EN 13432."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants d'Emballage Compostable (Et Solutions)",
    problem1: "Mauvaise barrière à l'humidité",
    solution1: "Stratification avancée de biopolymères.",
    problem2: "Faible résistance de scellage",
    solution2: "Profils de thermoscellage optimisés.",
    problem3: "Courte durée de conservation",
    solution3: "Films compostables métallisés à haute barrière.",
    problem4: "Déchirure pendant le transport",
    solution4: "Structures de film renforcées et matériaux résistants aux chocs.",
    problem5: "Dégradation incomplète",
    solution5: "Matériaux compostables certifiés strictement conformes à la norme EN 13432."
  },
  'zh-TW': {
    problemsTitle: "5個常見的可堆肥包裝問題（及解決方案）",
    problem1: "防潮性差",
    solution1: "先進的生物聚合物複合技術。",
    problem2: "封口強度弱",
    solution2: "優化的熱封曲線。",
    problem3: "保質期短",
    solution3: "高阻隔金屬化可堆肥薄膜。",
    problem4: "運輸過程中破裂",
    solution4: "加強型薄膜結構和抗衝擊材料。",
    problem5: "降解不完全",
    solution5: "嚴格遵守EN 13432的認證工業/家庭可堆肥材料。"
  }
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
)

export default function PouchBlogArticlePage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const langData = translations[currentLang as keyof typeof translations] || translations.en
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase
          .from('pouch_seo_blog')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) throw error
        if (!data) throw new Error('Post not found')
        
        const urlParams = new URLSearchParams(window.location.search)
        const isPreview = urlParams.get('preview') === 'true'
        if (data.content?.approved === false && !isPreview) {
          throw new Error('Post is not published yet')
        }
        
        setPost(data)
      } catch (err: any) {
        console.error('Error fetching post:', err)
        setError(err.message || 'Failed to load article')
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-12 h-12 animate-spin text-[#10b981]" />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 text-center">
        <div className="bg-red-50 border-4 border-red-500 p-8 max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black uppercase mb-4 text-red-900">
            {t('pouchBlogArticlePage.notFound.title', 'Article Not Found')}
          </h1>
          <p className="text-red-700 mb-8">
            {error || t('pouchBlogArticlePage.notFound.description', "The article you're looking for doesn't exist or has been moved.")}
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 border-4 border-black font-black uppercase hover:bg-red-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('pouchBlogArticlePage.notFound.back', 'Back to Blog')}
          </Link>
        </div>
      </div>
    )
  }

  // Helper to map icons from string to component
  const getIcon = (iconName: string) => {
    switch (iconName?.toLowerCase()) {
      case 'package': return <Package className="w-6 h-6" />
      case 'info': return <Info className="w-6 h-6" />
      case 'check': return <CheckCircle className="w-6 h-6" />
      case 'help': return <HelpCircle className="w-6 h-6" />
      default: return <Package className="w-6 h-6" />
    }
  }

  const sections = (post.content?.sections || []).map((s: any, idx: number) => ({
    id: `section-${idx}`,
    title: s.title,
    icon: getIcon(s.icon),
    content: s.content ? (
      <div 
        className="space-y-4"
        dangerouslySetInnerHTML={{ __html: s.content }}
      />
    ) : undefined,
    paragraphs: s.paragraphs || undefined,
    keyTakeaways: s.key_takeaways || undefined,
    specsTable: s.specs_table || undefined
  }))

  const problemSection = {
    id: 'common-problems',
    title: langData.problemsTitle,
    icon: <AlertTriangle className="w-6 h-6" />,
    content: (
      <div className="space-y-6">
        <img 
          src="/imgs/knowledge/compostable-packaging-pain-points.jpg" 
          alt="Compostable Packaging Pain Points" 
          className="w-full h-auto rounded-lg shadow-lg my-6"
        />
        <ul className="space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <li key={num} className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <strong className="block text-gray-900">{langData[`problem${num}` as keyof typeof langData]}</strong>
                <span className="text-gray-600">{langData[`solution${num}` as keyof typeof langData]}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const sectionsForPouch = [...sections, problemSection]
  const sectionsForAchieve = [...sections, problemSection]

  return (
    <BlogArticleTemplate
      title={`${post.title} | Certified Compostable | POUCH.ECO`}
      metaDescription={post.meta_description || post.excerpt}
      canonicalUrl={`https://pouch.eco/blog/${post.slug}`}
      heroTitle={post.title}
      heroSubtitle={post.excerpt}
      heroImage={post.image_url}
      categoryTag={post.category}
      publishedDate={post.published_at}
      modifiedDate={post.updated_at}
      sections={sectionsForPouch}
      faqSections={post.content?.faqs || []}
      ctaTitle={post.content?.cta?.title}
      ctaDescription={post.content?.cta?.description}
      achievePackLink={post.source_url}
      videoUrl={post.content?.video_url}
      hideVideoAndImage={!!post.content?.hide_media || !!post.content?.no_video_and_image}
    />
  )
}
