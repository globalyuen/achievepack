import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { Loader2, AlertCircle, ArrowLeft, Package, Info, CheckCircle, HelpCircle } from 'lucide-react'
import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
)

export default function PouchBlogArticlePage() {
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
          <h1 className="text-2xl font-black uppercase mb-4 text-red-900">Article Not Found</h1>
          <p className="text-red-700 mb-8">{error || "The article you're looking for doesn't exist or has been moved."}</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 border-4 border-black font-black uppercase hover:bg-red-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
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
      sections={sections}
      faqSections={post.content?.faqs || []}
      ctaTitle={post.content?.cta?.title}
      ctaDescription={post.content?.cta?.description}
      achievePackLink={post.source_url}
      videoUrl={post.content?.video_url}
      hideVideoAndImage={!!post.content?.hide_media || !!post.content?.no_video_and_image}
    />
  )
}
