import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import * as LucideIcons from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

// This will be populated by the migration script
import migrationsData from '../../../data/pouch-migrations.json'

interface MigrationContent {
  title: string
  subtitle: string
  description: string
  keywords: string[]
  badge: string
  badgeColor: string
  heroTitle?: string
  heroBgColor?: string
  heroImage?: string
  accentColor: string
  heroPattern?: string
  sections: Array<{
    title: string
    content: string
    icon: string
    image?: string
    badge?: string
    badgeColor?: string
  }>
  faqs: Array<{ q: string, a: string }>
  ctaTitle: string
  ctaSubtitle: string
}

const DynamicPouchTopicPage: React.FC = () => {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const baseUrl = getBaseUrl()
  
  const content = (migrationsData as Record<string, MigrationContent>)[slug || '']

  if (!content) {
    // If we haven't migrated this yet, or it doesn't exist
    return <Navigate to="/" replace />
  }

  const Icon = (name: string) => {
    const LucideIcon = (LucideIcons as any)[name] || LucideIcons.HelpCircle
    return <LucideIcon className="w-6 h-6" />
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{content.title} | Pouch.eco</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={`${baseUrl}/topics/${slug}`} />
        <meta name="keywords" content={content.keywords.join(', ')} />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative pt-12 pb-24 border-b-4 border-black"
        style={{ 
          backgroundColor: content.heroBgColor || 'white',
          backgroundImage: `radial-gradient(${content.accentColor || '#000'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color={content.badgeColor as any}>{content.badge}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase">
            {content.heroTitle || content.title}
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {content.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/sample">{t('dynamicPouchTopicPage.requestSamples')}</NeoButton>
            <NeoButton variant="secondary" to="/materials/catalog">{t('dynamicPouchTopicPage.materialCatalog')}</NeoButton>
          </div>
        </div>
      </section>

      {/* Sections */}
      {content.sections.map((section, idx) => (
        <section key={idx} className={`py-24 border-b-4 border-black ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F0F0F0]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                {section.badge && <NeoBadge color={section.badgeColor as any}>{section.badge}</NeoBadge>}
                <h2 className="font-black text-5xl mt-6 uppercase leading-tight">{section.title}</h2>
                <div 
                  className="mt-6 text-xl text-gray-600 font-['JetBrains_Mono'] prose"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
              <div className={`relative ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                <div className="absolute inset-0 bg-black/5 translate-x-4 translate-y-4 border-4 border-black" />
                {section.image ? (
                  <ClickableImage 
                    src={section.image} 
                    alt={section.title} 
                    className="relative z-10 border-4 border-black w-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="relative z-10 border-4 border-black w-full aspect-video bg-black flex items-center justify-center">
                    <span className="text-[#D4FF00] font-black text-4xl uppercase tracking-widest">{slug}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl text-center mb-16 uppercase italic">{t('dynamicPouchTopicPage.aiFaqTitle')}</h2>
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h4 className="font-black text-xl mb-4 flex items-center gap-2">
                  <span className="bg-black text-[#D4FF00] px-2 py-0.5 text-xs">{t('dynamicPouchTopicPage.aiIntel')}</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm border-l-4 border-black pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white leading-none">{content.ctaTitle}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeoButton variant="primary" to="/sample">{t('dynamicPouchTopicPage.requestSamples')}</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('dynamicPouchTopicPage.freeConsultation')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default DynamicPouchTopicPage
