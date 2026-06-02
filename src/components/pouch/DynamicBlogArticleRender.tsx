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
    content?: {
      sections?: Array<{
        title: string
        icon?: string
        content: string
      }>
      faqs?: Array<{
        q: string
        a: string
      }>
      cta?: {
        title?: string
        description?: string
      }
    }
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

  // Parse sections
  const sections = (post.content?.sections || []).map((s, idx) => ({
    id: `section-${idx}`,
    title: s.title,
    icon: getIcon(s.icon),
    content: (
      <div 
        className="space-y-4"
        dangerouslySetInnerHTML={{ __html: s.content }}
      />
    )
  }))

  // Parse FAQs
  const faqSections = (post.content?.faqs || []).map(f => ({
    q: f.q,
    a: f.a
  }))

  return (
    <BlogArticleTemplate
      title={`${post.title} | Certified Compostable | POUCH.ECO`}
      metaDescription={post.meta_description || post.excerpt || ''}
      canonicalUrl={`https://pouch.eco/blog/${post.slug}`}
      heroTitle={post.title}
      heroSubtitle={post.excerpt || ''}
      heroImage={post.image_url}
      categoryTag={post.category}
      publishedDate={post.published_at}
      modifiedDate={post.updated_at}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={post.content?.cta?.title}
      ctaDescription={post.content?.cta?.description}
      achievePackLink={post.source_url}
    />
  )
}
