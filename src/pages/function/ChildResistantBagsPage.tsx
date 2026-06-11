import React, { useState } from 'react'
import { Shield, Lock, Package, Leaf, AlertTriangle, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Baby, Droplets, Factory, Award, Users, Globe, FileCheck, Building2, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import { useTranslation } from 'react-i18next'

const ChildResistantBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'
  const { t } = useTranslation()
  const p = 'seoPages.pages.childResistant'

  const childResistantGallery = [
    { src: '/imgs/function/child/a_hero_kv_child_resistant_6350351.webp', title: t(`${p}.gallery.0.title`), desc: t(`${p}.gallery.0.desc`) },
    { src: '/imgs/function/child/a_info_why_child_resistant_2579617.webp', title: t(`${p}.gallery.1.title`), desc: t(`${p}.gallery.1.desc`) },
    { src: '/imgs/function/child/a_manual_instruction_sequence_1396492.webp', title: t(`${p}.gallery.2.title`), desc: t(`${p}.gallery.2.desc`) },
    { src: '/imgs/function/child/a_detail_adult_usability_1537698.webp', title: t(`${p}.gallery.3.title`), desc: t(`${p}.gallery.3.desc`) },
    { src: '/imgs/function/child/a_detail_high_barrier_1342803.webp', title: t(`${p}.gallery.4.title`), desc: t(`${p}.gallery.4.desc`) },
    { src: '/imgs/function/child/a_detail_odor_tamper_2823302.webp', title: t(`${p}.gallery.5.title`), desc: t(`${p}.gallery.5.desc`) },
    { src: '/imgs/function/child/a_detail_eco_friendly_0335391.webp', title: t(`${p}.gallery.6.title`), desc: t(`${p}.gallery.6.desc`) },
    { src: '/imgs/function/child/child-resistant-zipper-application.webp', title: t(`${p}.gallery.7.title`), desc: t(`${p}.gallery.7.desc`) },
    { src: '/imgs/function/child/child-resistant-zipper-Stand-out branding with full compliance.webp', title: t(`${p}.gallery.8.title`), desc: t(`${p}.gallery.8.desc`) },
    { src: '/imgs/function/child/a_hero_card_sustainability_1266701.webp', title: t(`${p}.gallery.9.title`), desc: t(`${p}.gallery.9.desc`) },
  ]

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
    titleCn, 
    content, 
    contentCn,
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    titleCn: string
    content: string
    contentCn: string
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
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
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
      title: t(`${p}.secIntroTitle`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.secIntroBadgeText`) }} />
            <p className="text-neutral-700">
              {t(`${p}.secIntroBadgeTextCn`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
            imageAlt="Child-Resistant Zipper Bags Hero"
            title={t(`${p}.secIntroAltTitle`)}
            titleCn={t(`${p}.secIntroAltTitleCn`)}
            content={t(`${p}.secIntroAltContent`)}
            contentCn={t(`${p}.secIntroAltContentCn`)}
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'why-child-resistant',
      title: t(`${p}.secWhyTitle`),
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_info_why_child_resistant_2579617.webp"
            imageAlt="Why Child-Resistant Packaging Matters"
            title={t(`${p}.secWhyAltTitle`)}
            titleCn={t(`${p}.secWhyAltTitleCn`)}
            content={t(`${p}.secWhyAltContent`)}
            contentCn={t(`${p}.secWhyAltContentCn`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Shield className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.secWhyPoint1`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secWhyPoint1Sub`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <AlertTriangle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.secWhyPoint2`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secWhyPoint2Sub`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.secWhyPoint3`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secWhyPoint3Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-mechanism',
      title: t(`${p}.secMechanismTitle`),
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_manual_instruction_sequence_1396492.webp"
            imageAlt="Child-Resistant Zipper Mechanism Detail"
            title={t(`${p}.secMechanismAltTitle`)}
            titleCn={t(`${p}.secMechanismAltTitleCn`)}
            content={t(`${p}.secMechanismAltContent`)}
            contentCn={t(`${p}.secMechanismAltContentCn`)}
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'adult-friendly',
      title: t(`${p}.secAdultTitle`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_adult_usability_1537698.webp"
            imageAlt="Adult-Friendly Usability"
            title={t(`${p}.secAdultAltTitle`)}
            titleCn={t(`${p}.secAdultAltTitleCn`)}
            content={t(`${p}.secAdultAltContent`)}
            contentCn={t(`${p}.secAdultAltContentCn`)}
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'high-barrier',
      title: t(`${p}.secBarrierTitle`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_high_barrier_1342803.webp"
            imageAlt="High Barrier Mylar Structure"
            title={t(`${p}.secBarrierAltTitle`)}
            titleCn={t(`${p}.secBarrierAltTitleCn`)}
            content={t(`${p}.secBarrierAltContent`)}
            contentCn={t(`${p}.secBarrierAltContentCn`)}
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'odor-tamper',
      title: t(`${p}.secOdorTitle`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_odor_tamper_2823302.webp"
            imageAlt="Odor Control and Tamper-Evidence"
            title={t(`${p}.secOdorAltTitle`)}
            titleCn={t(`${p}.secOdorAltTitleCn`)}
            content={t(`${p}.secOdorAltContent`)}
            contentCn={t(`${p}.secOdorAltContentCn`)}
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'eco-friendly',
      title: t(`${p}.secEcoTitle`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_eco_friendly_0335391.webp"
            imageAlt="Eco-Friendly Material Options"
            title={t(`${p}.secEcoAltTitle`)}
            titleCn={t(`${p}.secEcoAltTitleCn`)}
            content={t(`${p}.secEcoAltContent`)}
            contentCn={t(`${p}.secEcoAltContentCn`)}
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.secEcoOpt1`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secEcoOpt1Sub`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.secEcoOpt2`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secEcoOpt2Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.secAppsTitle`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/child-resistant-zipper-application.webp"
            imageAlt="Child-Resistant Bags Applications"
            title={t(`${p}.secAppsAltTitle`)}
            titleCn={t(`${p}.secAppsAltTitleCn`)}
            content={t(`${p}.secAppsAltContent`)}
            contentCn={t(`${p}.secAppsAltContentCn`)}
            imageLeft={false}
            index={7}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secAppsCard1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard1Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secAppsCard2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard2Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secAppsCard3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard3Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secAppsCard4`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard4Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'branding-compliance',
      title: t(`${p}.secBrandingTitle`),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/child-resistant-zipper-Stand-out branding with full compliance.webp"
            imageAlt="On-Shelf Branding and Compliance"
            title={t(`${p}.secBrandingAltTitle`)}
            titleCn={t(`${p}.secBrandingAltTitleCn`)}
            content={t(`${p}.secBrandingAltContent`)}
            contentCn={t(`${p}.secBrandingAltContentCn`)}
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'design-system',
      title: t(`${p}.secDesignTitle`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_hero_card_sustainability_1266701.webp"
            imageAlt="Design Your Child-Resistant System"
            title={t(`${p}.secDesignAltTitle`)}
            titleCn={t(`${p}.secDesignAltTitleCn`)}
            content={t(`${p}.secDesignAltContent`)}
            contentCn={t(`${p}.secDesignAltContentCn`)}
            imageLeft={false}
            index={9}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">1</div>
              <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.secDesignStep1`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.secDesignStep1Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">2</div>
              <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.secDesignStep2`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.secDesignStep2Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
              <h4 className="font-semibold text-neutral-800 mb-1">{t(`${p}.secDesignStep3`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.secDesignStep3Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t(`${p}.secTrustTitle`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.secTrustH3`)}</h3>
            <p className="text-neutral-700 mb-4">
              {t(`${p}.secTrustP1`)}
            </p>
            <p className="text-neutral-600 text-sm">
              {t(`${p}.secTrustP1Cn`)}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secTrustCard1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secTrustCard1Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secTrustCard2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secTrustCard2Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secTrustCard3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secTrustCard3Sub`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secTrustCard4`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secTrustCard4Sub`)}</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.secTrustExplore`)}</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Our Certifications
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> Carbon Neutral Bags
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> FAQs
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.secCtaTitle`),
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.secCtaTitleBox`)}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.secCtaCard1`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.secCtaCard1Sub`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t(`${p}.secCtaCard1Btn`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.secCtaCard2`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.secCtaCard2Sub`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=Child-Resistant Zipper Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t(`${p}.secCtaCard2Btn`)}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const b2cSectionsObj = t(`${p}.b2cSections`, { returnObjects: true }) as Array<{
    id: string
    title: string
    p1: string
    blockquote?: string
    p2?: string
    h4?: string
    p3?: string
    bullet1?: string
    bullet2?: string
    bullet3?: string
    card1_title?: string
    card1_desc?: string
    card2_title?: string
    card2_desc?: string
    card3_title?: string
    card3_desc?: string
  }> || []

  const b2cSections = b2cSectionsObj.map((sec) => {
    let contentNode: React.ReactNode = null
    if (sec.id === 'safety-first') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          {sec.blockquote && (
            <div className="bg-amber-50 p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
                <strong>"{sec.blockquote}"</strong>
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">{sec.p2}</p>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/child/a_manual_instruction_sequence_1396492.webp', index: 2 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/child/a_manual_instruction_sequence_1396492.webp" alt="Child Resistant mechanism instructions" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{sec.h4}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">{sec.p3}</p>
            </div>
          </div>
        </div>
      )
    } else if (sec.id === 'barrier-protection') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{sec.h4}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">{sec.p2}</p>
              <ul className="text-sm space-y-2 text-neutral-600">
                {sec.bullet1 && (
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: sec.bullet1 }} />
                  </li>
                )}
                {sec.bullet2 && (
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: sec.bullet2 }} />
                  </li>
                )}
                {sec.bullet3 && (
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: sec.bullet3 }} />
                  </li>
                )}
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
    } else if (sec.id === 'low-moq-digital') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          {sec.h4 && (
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{sec.h4}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: sec.p2 || '' }} />
            </div>
          )}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{sec.card1_title}</h5>
              <p className="text-xs text-black">{sec.card1_desc}</p>
            </div>
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{sec.card2_title}</h5>
              <p className="text-xs text-black">{sec.card2_desc}</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{sec.card3_title}</h5>
              <p className="text-xs text-neutral-700">{sec.card3_desc}</p>
            </div>
          </div>
        </div>
      )
    } else if (sec.id === 'eco-friendly-cr') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/child/a_detail_eco_friendly_0335391.webp', index: 6 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/child/a_detail_eco_friendly_0335391.webp" alt="Eco friendly child resistant bags" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{sec.h4}</h4>
              <div className="space-y-3 text-sm text-neutral-700">
                {sec.bullet1 && (
                  <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm" dangerouslySetInnerHTML={{ __html: sec.bullet1 }} />
                )}
                {sec.bullet2 && (
                  <div className="p-3 bg-neutral-50 border-l-4 border-black rounded shadow-sm" dangerouslySetInnerHTML={{ __html: sec.bullet2 }} />
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return {
      id: sec.id,
      title: sec.title,
      icon: sec.id === 'safety-first' ? <Lock className="h-5 w-5 text-black" /> :
            sec.id === 'barrier-protection' ? <Shield className="h-5 w-5 text-black" /> :
            sec.id === 'low-moq-digital' ? <Sparkles className="h-5 w-5 text-black" /> :
            <Leaf className="h-5 w-5 text-black" />,
      content: contentNode
    }
  })

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []
  const relatedLinks = t(`${p}.relatedLinks`, { returnObjects: true }) as Array<{ title: string; description: string }> || []
  const formattedRelatedLinks = relatedLinks.map(link => {
    // map titles to urls
    let url = '/'
    if (link.title.toLowerCase().includes('compostable')) url = '/materials/compostable'
    else if (link.title.toLowerCase().includes('mono-pe')) url = '/materials/recyclable-mono-pe'
    else if (link.title.toLowerCase().includes('pcr')) url = '/materials/pcr'
    else if (link.title.toLowerCase().includes('stand up')) url = '/packaging/stand-up-pouches'
    else if (link.title.toLowerCase().includes('flat bottom')) url = '/packaging/flat-bottom-bags'
    else if (link.title.toLowerCase().includes('side gusset')) url = '/packaging/side-gusset-bags'
    else if (link.title.toLowerCase().includes('reclosure')) url = '/features/reclosure-options'
    else if (link.title.toLowerCase().includes('barrier')) url = '/features/barrier-options'
    else if (link.title.toLowerCase().includes('surface')) url = '/features/surface-finish'
    else if (link.title.toLowerCase().includes('carbon neutral')) url = '/function/carbon-neutral-bags'
    else if (link.title.toLowerCase().includes('microwave')) url = '/function/microwave-steam-bags'
    else if (link.title.toLowerCase().includes('supplements')) url = '/industry/supplements-powders'
    else if (link.title.toLowerCase().includes('pet food')) url = '/industry/pet-food'
    else if (link.title.toLowerCase().includes('certificates')) url = '/company/certificates'
    else if (link.title.toLowerCase().includes('faqs')) url = '/support/faqs'
    return { title: link.title, url, description: link.description }
  })

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t(`${p}.pouchTitle`)}
        metaDescription={t(`${p}.pouchMetaDescription`)}
        canonicalUrl="https://pouch.eco/function/child-resistant-bags"
        keywords={t(`${p}.pouchKeywords`, { returnObjects: true }) as string[] || []}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author="POUCH.ECO Editorial Team"
        heroTitle={
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
              <span>/</span>
              <Link to="/materials" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Friendly Materials</Link>
              <span>/</span>
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Child-Resistant Bags</span>
            </div>

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
              Child-Resistant<br />
              <span className="text-[#10b981]">Safety Pouches</span><br />
              DTC Startup Guide
            </h1>
          </div>
        }
        heroSubtitle={t(`${p}.pouchHeroSubtitle`)}
        heroImage="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
        heroImageAlt="POUCH.ECO child-resistant safety packaging guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="7 min read"
        sections={b2cSections}
        ctaTitle={t(`${p}.pouchCtaTitle`)}
        ctaDescription={t(`${p}.pouchCtaDescription`)}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/child-resistant-bags"
        achievePackText={t(`${p}.pouchAchievePackText`)}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: 'Writabl & Stampable Eco Pouches: SKU Agility for Craft Brands',
            url: '/knowledge/writable-stampable-pouches',
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          },
          {
            title: 'Compostable Side Gusset Pouches: Thermal Pouring & Rigidity',
            url: '/products/compostable-side-gusset-bags',
            image: '/imgs/store/products/compostable-side-gusset-collection.png'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.metaTitle`)}
        description={t(`${p}.metaDescription`)}
        keywords={t(`${p}.keywords`, { returnObjects: true }) as string[] || []}
        canonicalUrl="https://achievepack.com/function/child-resistant-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={`${t(`${p}.heroSubtitle`)} / ${t(`${p}.heroSubtitleCn`)}`}
        heroImage="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
        heroImageAlt="Achieve Pack Child-Resistant Zipper Bags"
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        relatedLinks={formattedRelatedLinks}
        ctaTitle={t(`${p}.secCtaTitle`)}
        ctaDescription={t(`${p}.secCtaTitleBox`)}
        ctaButtonText={t(`${p}.secCtaCard1Btn`)}
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
          <img src={galleryEnlarged.src} alt={childResistantGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{childResistantGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{childResistantGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {childResistantGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ChildResistantBagsPage
