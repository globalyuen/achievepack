import React from 'react'
import BlogArticleTemplate from './BlogArticleTemplate'
import { 
  Package, 
  Info, 
  CheckCircle, 
  HelpCircle, 
  Award, 
  FileCheck, 
  DollarSign, 
  Target, 
  Briefcase, 
  FileText, 
  Shield 
} from 'lucide-react'

interface DynamicBlogArticleRenderProps {
  post: {
    title: string
    meta_description?: string
    excerpt?: string
    slug: string
    image_url?: string
    category?: string
    published_at?: string
    updated_at?: string
    source_url?: string
    content?: any
  }
}

export default function DynamicBlogArticleRender({ post }: DynamicBlogArticleRenderProps) {
  // Helper to map icons from string to Lucide ReactNode
  const getIcon = (iconName?: string) => {
    const name = iconName?.toLowerCase() || ''
    switch (name) {
      case 'award':
      case 'achievement':
        return <Award className="w-6 h-6" />
      case 'filecheck':
      case 'checkcircle':
      case 'check':
      case 'verify':
        return <FileCheck className="w-6 h-6" />
      case 'dollarsign':
      case 'dollar':
      case 'pricing':
      case 'cost':
        return <DollarSign className="w-6 h-6" />
      case 'target':
      case 'goal':
        return <Target className="w-6 h-6" />
      case 'briefcase':
      case 'industry':
      case 'business':
        return <Briefcase className="w-6 h-6" />
      case 'filetext':
      case 'document':
      case 'guide':
        return <FileText className="w-6 h-6" />
      case 'helpcircle':
      case 'help':
      case 'faq':
      case 'question':
        return <HelpCircle className="w-6 h-6" />
      case 'shield':
      case 'safety':
      case 'fda':
      case 'security':
        return <Shield className="w-6 h-6" />
      case 'package':
      case 'box':
      case 'bag':
      case 'pouch':
        return <Package className="w-6 h-6" />
      default:
        return <Package className="w-6 h-6" />
    }
  }

  // Resolve B2C active content (either from pouch subkey or root content)
  const activeContent = post.content?.pouch || post.content

  // Parse sections
  const sections = (activeContent?.sections || []).map((s: any, idx: number) => ({
    id: `section-${idx}`,
    title: s.title,
    icon: getIcon(s.icon),
    paragraphs: s.paragraphs,
    keyTakeaways: s.key_takeaways,
    specsTable: s.specs_table,
    content: s.content ? (
      <div 
        className="space-y-4"
        dangerouslySetInnerHTML={{ __html: s.content }}
      />
    ) : undefined
  }))

  // Parse FAQs
  const faqSections = (activeContent?.faqs || []).map((f: any) => ({
    q: f.q || f.question || f.Question || '',
    a: f.a || f.answer || f.Answer || ''
  }))

  const hideVideoAndImage = !!activeContent?.hide_media || !!activeContent?.no_video_and_image

  return (
    <BlogArticleTemplate
      title={`${activeContent?.title || post.title} | Certified Compostable | POUCH.ECO`}
      metaDescription={post.meta_description || activeContent?.excerpt || post.excerpt || ''}
      canonicalUrl={`https://pouch.eco/blog/${post.slug}`}
      heroTitle={activeContent?.title || post.title}
      heroSubtitle={activeContent?.excerpt || post.excerpt || ''}
      heroImage={activeContent?.image_url || post.image_url}
      categoryTag={post.category}
      publishedDate={post.published_at}
      modifiedDate={post.updated_at}
      videoUrl={activeContent?.video_url}
      hideVideoAndImage={hideVideoAndImage}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={activeContent?.cta?.title}
      ctaDescription={activeContent?.cta?.description}
      achievePackLink={post.source_url}
    />
  )
}
