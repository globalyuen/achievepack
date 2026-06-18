import React, { useState } from 'react'
import { Shield, Lock, Package, Leaf, AlertTriangle, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Baby, Droplets, Factory, Award, Users, Globe, FileCheck, Building2, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import { useTranslation } from 'react-i18next'

// Gallery images from /imgs/function/child/
const childResistantGallery = [
  { src: '/imgs/function/child/a_hero_kv_child_resistant_6350351.webp' },
  { src: '/imgs/function/child/a_info_why_child_resistant_2579617.webp' },
  { src: '/imgs/function/child/a_manual_instruction_sequence_1396492.webp' },
  { src: '/imgs/function/child/a_detail_adult_usability_1537698.webp' },
  { src: '/imgs/function/child/a_detail_high_barrier_1342803.webp' },
  { src: '/imgs/function/child/a_detail_odor_tamper_2823302.webp' },
  { src: '/imgs/function/child/a_detail_eco_friendly_0335391.webp' },
  { src: '/imgs/function/child/child-resistant-zipper-application.webp' },
  { src: '/imgs/function/child/child-resistant-zipper-Stand-out branding with full compliance.webp' },
  { src: '/imgs/function/child/a_hero_card_sustainability_1266701.webp' },
]

const ChildResistantBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'
  const p = 'seoPages.pages.childResistantBags'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = childResistantGallery.length - 1
    if (newIndex >= childResistantGallery.length) newIndex = 0
    setGalleryEnlarged({ src: childResistantGallery[newIndex].src, index: newIndex })
  }

  // Alternating layout component
  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    content, 
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    content: string
    imageLeft?: boolean
    index: number
  }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      {imageLeft ? (
        <>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t(`${p}.clickToEnlarge`)}</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-neutral-700">{content}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-neutral-700">{content}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t(`${p}.clickToEnlarge`)}</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: t(`${p}.sections.intro.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900">
              <strong>{t(`${p}.sections.intro.highlight`)}</strong> — {t(`${p}.sections.intro.desc`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
            imageAlt="Child-Resistant Zipper Bags Hero"
            title={t(`${p}.sections.intro.altTitle`)}
            content={t(`${p}.sections.intro.altContent`)}
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'why-child-resistant',
      title: t(`${p}.sections.whyChildResistant.title`),
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_info_why_child_resistant_2579617.webp"
            imageAlt="Why Child-Resistant Packaging Matters"
            title={t(`${p}.sections.whyChildResistant.subTitle`)}
            content={t(`${p}.sections.whyChildResistant.desc`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Shield className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.whyChildResistant.col1Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.whyChildResistant.col1Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <AlertTriangle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.whyChildResistant.col2Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.whyChildResistant.col2Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.whyChildResistant.col3Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.whyChildResistant.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-mechanism',
      title: t(`${p}.sections.zipperMechanism.title`),
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_manual_instruction_sequence_1396492.webp"
            imageAlt="Child-Resistant Zipper Mechanism Detail"
            title={t(`${p}.sections.zipperMechanism.subTitle`)}
            content={t(`${p}.sections.zipperMechanism.desc`)}
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'adult-friendly',
      title: t(`${p}.sections.adultFriendly.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_adult_usability_1537698.webp"
            imageAlt="Adult-Friendly Usability"
            title={t(`${p}.sections.adultFriendly.subTitle`)}
            content={t(`${p}.sections.adultFriendly.desc`)}
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'high-barrier',
      title: t(`${p}.sections.highBarrier.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_high_barrier_1342803.webp"
            imageAlt="High Barrier Mylar Structure"
            title={t(`${p}.sections.highBarrier.subTitle`)}
            content={t(`${p}.sections.highBarrier.desc`)}
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'odor-tamper',
      title: t(`${p}.sections.odorTamper.title`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_odor_tamper_2823302.webp"
            imageAlt="Odor Control and Tamper-Evidence"
            title={t(`${p}.sections.odorTamper.subTitle`)}
            content={t(`${p}.sections.odorTamper.desc`)}
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'eco-friendly',
      title: t(`${p}.sections.ecoFriendly.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_eco_friendly_0335391.webp"
            imageAlt="Eco-Friendly Material Options"
            title={t(`${p}.sections.ecoFriendly.subTitle`)}
            content={t(`${p}.sections.ecoFriendly.desc`)}
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.ecoFriendly.col1Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.ecoFriendly.col1Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.ecoFriendly.col2Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.ecoFriendly.col2Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/child-resistant-zipper-application.webp"
            imageAlt="Child-Resistant Bags Applications"
            title={t(`${p}.sections.applications.subTitle`)}
            content={t(`${p}.sections.applications.desc`)}
            imageLeft={false}
            index={7}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.applications.col1Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.col1Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.applications.col2Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.col2Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.applications.col3Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.col3Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.applications.col4Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.col4Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'branding-compliance',
      title: t(`${p}.sections.brandingCompliance.title`),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/child-resistant-zipper-Stand-out branding with full compliance.webp"
            imageAlt="On-Shelf Branding and Compliance"
            title={t(`${p}.sections.brandingCompliance.subTitle`)}
            content={t(`${p}.sections.brandingCompliance.desc`)}
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'design-system',
      title: t(`${p}.sections.designSystem.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_hero_card_sustainability_1266701.webp"
            imageAlt="Design Your Child-Resistant System"
            title={t(`${p}.sections.designSystem.subTitle`)}
            content={t(`${p}.sections.designSystem.desc`)}
            imageLeft={false}
            index={9}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">1</div>
              <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.sections.designSystem.step1`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.designSystem.step1Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">2</div>
              <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.sections.designSystem.step2`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.designSystem.step2Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
              <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.sections.designSystem.step3`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.designSystem.step3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t(`${p}.sections.trustEeat.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.sections.trustEeat.subTitle`)}</h3>
            <p className="text-neutral-700 mb-4">{t(`${p}.sections.trustEeat.desc`)}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.trustEeat.col1Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.trustEeat.col1Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.trustEeat.col2Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.trustEeat.col2Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.trustEeat.col3Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.trustEeat.col3Desc`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.trustEeat.col4Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.trustEeat.col4Desc`)}</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.trustEeat.relatedSolutions`)}</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkCompostable`)}
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkBarrier`)}
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkStandUp`)}
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkCerts`)}
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkCarbonNeutral`)}
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkFaqs`)}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('common.cta.title', 'Ready to Get Started?'),
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('common.cta.connectHeader', "Choose How You'd Like to Connect")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('common.cta.bookCall', 'Book a Call')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('common.cta.freeConsultation', '30-min free consultation')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t('common.cta.scheduleNow', 'Schedule Now')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('common.cta.emailQuote', 'Email Quote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('common.cta.response24h', 'Get response within 24hrs')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Child-Resistant Zipper Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t('common.cta.sendEmail', 'Send Email')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [0, 1, 2, 3, 4, 5, 6, 7].map(idx => ({
    question: t(`${p}.faqs.${idx}.q`),
    answer: t(`${p}.faqs.${idx}.a`)
  }))

  const relatedLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(idx => ({
    title: t(`${p}.relatedLinks.${idx}.title`),
    url: t(`${p}.relatedLinks.${idx}.url`),
    description: t(`${p}.relatedLinks.${idx}.description`)
  }))

  // B2C Specific Content & Layout
  const b2cSections = [
    {
      id: 'safety-first',
      title: t(`${p}.sections.b2cSafetyFirst.title`),
      icon: <Lock className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cSafetyFirst.desc1`)}
          </p>
          <div className="bg-amber-50 p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t(`${p}.sections.b2cSafetyFirst.calloutTitle`)}</strong>
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t(`${p}.sections.b2cSafetyFirst.calloutDesc`)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/child/a_manual_instruction_sequence_1396492.webp', index: 2 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/child/a_manual_instruction_sequence_1396492.webp" alt="Child Resistant mechanism instructions" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t(`${p}.sections.b2cSafetyFirst.standardTitle`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.sections.b2cSafetyFirst.standardDesc`)}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-protection',
      title: t(`${p}.sections.b2cBarrierProtection.title`),
      icon: <Shield className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cBarrierProtection.desc1`)}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t(`${p}.sections.b2cBarrierProtection.compositeTitle`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.sections.b2cBarrierProtection.compositeDesc`)}
              </p>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.b2cBarrierProtection.listItem1`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.b2cBarrierProtection.listItem2`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.b2cBarrierProtection.listItem3`)}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/child/a_detail_odor_tamper_2823302.webp', index: 5 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/child/a_detail_odor_tamper_2823302.webp" alt="Odor proof Mylar bag" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'low-moq-digital',
      title: t(`${p}.sections.b2cLowMoqDigital.title`),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cLowMoqDigital.desc1`)}
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t(`${p}.sections.b2cLowMoqDigital.hackTitle`)}</h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t(`${p}.sections.b2cLowMoqDigital.hackDesc`)}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t(`${p}.sections.b2cLowMoqDigital.grid1Title`)}</h5>
              <p className="text-xs text-black">{t(`${p}.sections.b2cLowMoqDigital.grid1Desc`)}</p>
            </div>
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t(`${p}.sections.b2cLowMoqDigital.grid2Title`)}</h5>
              <p className="text-xs text-black">{t(`${p}.sections.b2cLowMoqDigital.grid2Desc`)}</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t(`${p}.sections.b2cLowMoqDigital.grid3Title`)}</h5>
              <p className="text-xs text-neutral-700">{t(`${p}.sections.b2cLowMoqDigital.grid3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco-friendly-cr',
      title: t(`${p}.sections.b2cEcoFriendlyCr.title`),
      icon: <Leaf className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cEcoFriendlyCr.desc1`)}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/child/a_detail_eco_friendly_0335391.webp', index: 6 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/child/a_detail_eco_friendly_0335391.webp" alt="Eco friendly child resistant bags" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t(`${p}.sections.b2cEcoFriendlyCr.pathTitle`)}</h4>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm">
                  <strong>{t(`${p}.sections.b2cEcoFriendlyCr.box1Title`)}</strong>{t(`${p}.sections.b2cEcoFriendlyCr.box1Desc`)}
                </div>
                <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm">
                  <strong>{t(`${p}.sections.b2cEcoFriendlyCr.box2Title`)}</strong>{t(`${p}.sections.b2cEcoFriendlyCr.box2Desc`)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t(`${p}.b2cTitle`)}
        metaDescription={t(`${p}.b2cMetaDescription`)}
        canonicalUrl="https://pouch.eco/function/child-resistant-bags"
        keywords={['child-resistant bags', 'child-resistant pouches', 'child safety packaging', 'CR zipper bags', 'compliant supplement packaging']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author={t(`${p}.b2cAuthor`)}
        heroTitle={
          <div className="space-y-4">
            {/* Neo-brutalist Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('common.home', 'Home')}</Link>
              <span>/</span>
              <Link to="/materials" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('common.ecoFriendlyMaterials', 'Eco-Friendly Materials')}</Link>
              <span>/</span>
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t(`${p}.heroTitle`)}</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                🔒 U.S. 16 CFR 1700 Certified
              </span>
              <Link 
                to="/products/compostable-side-gusset-bags" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Gusset Bags →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              {t(`${p}.b2cHeroTitleLine1`)}<br />
              <span className="text-[#10b981]">{t(`${p}.b2cHeroTitleLine2`)}</span><br />
              {t(`${p}.b2cHeroTitleLine3`)}
            </h1>
          </div>
        }
        heroSubtitle={t(`${p}.b2cHeroSubtitle`)}
        heroImage="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
        heroImageAlt="POUCH.ECO child-resistant safety packaging guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="7 min read"
        sections={b2cSections}
        ctaTitle={t(`${p}.b2cCtaTitle`)}
        ctaDescription={t(`${p}.b2cCtaDescription`)}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/child-resistant-bags"
        achievePackText={t(`${p}.b2cAchievePackText`)}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t(`${p}.relatedArticles.0.title`),
            url: t(`${p}.relatedArticles.0.url`),
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          },
          {
            title: t(`${p}.relatedArticles.1.title`),
            url: t(`${p}.relatedArticles.1.url`),
            image: '/imgs/store/products/compostable-side-gusset-collection.png'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['child-resistant bags', 'child-resistant pouches', 'cannabis packaging', 'pharmaceutical pouches', 'CPSC certified bags', 'child-proof packaging', 'push-to-open bags', 'child safety packaging', 'CR zipper bags', 'compliant cannabis bags', 'supplement safety pouches', '16 CFR 1700 bags', 'tamper evident pouches', 'odor proof cannabis bags', 'eco friendly child resistant']}
        canonicalUrl="https://achievepack.com/function/child-resistant-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
        heroImageAlt="Achieve Pack Child-Resistant Zipper Bags"
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t(`${p}.ctaTitle`)}
        ctaDescription={t(`${p}.ctaDescription`)}
        ctaButtonText={t(`${p}.ctaButtonText`)}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={t(`${p}.gallery.${galleryEnlarged.index}.title`) || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{t(`${p}.gallery.${galleryEnlarged.index}.title`)}</p>
            <p className="text-sm text-neutral-300">{t(`${p}.gallery.${galleryEnlarged.index}.desc`)}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {childResistantGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ChildResistantBagsPage
