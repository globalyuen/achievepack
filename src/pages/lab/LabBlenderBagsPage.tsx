import React, { useState } from 'react'
import { Beaker, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Microscope, Droplets, Zap, Award, FileCheck, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const LabBlenderBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  const { t } = useTranslation()
  const p = 'seoPages.pages.labBlender'

  const blenderBagsGallery = [
    { src: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp', title: t(`${p}.gallery.0.title`), desc: t(`${p}.gallery.0.desc`) },
    { src: '/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp', title: t(`${p}.gallery.1.title`), desc: t(`${p}.gallery.1.desc`) },
    { src: '/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp', title: t(`${p}.gallery.2.title`), desc: t(`${p}.gallery.2.desc`) },
    { src: '/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp', title: t(`${p}.gallery.3.title`), desc: t(`${p}.gallery.3.desc`) },
    { src: '/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp', title: t(`${p}.gallery.4.title`), desc: t(`${p}.gallery.4.desc`) },
    { src: '/imgs/lab/blend/a_kv_microbiology_application_2438663.webp', title: t(`${p}.gallery.5.title`), desc: t(`${p}.gallery.5.desc`) },
    { src: '/imgs/lab/blend/a_kv_transparency_observation_4148902.webp', title: t(`${p}.gallery.6.title`), desc: t(`${p}.gallery.6.desc`) },
    { src: '/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp', title: t(`${p}.gallery.7.title`), desc: t(`${p}.gallery.7.desc`) },
    { src: '/imgs/lab/blend/a_kv_specifications_summary_8537834.webp', title: t(`${p}.gallery.8.title`), desc: t(`${p}.gallery.8.desc`) },
    { src: '/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp', title: t(`${p}.gallery.9.title`), desc: t(`${p}.gallery.9.desc`) },
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = blenderBagsGallery.length - 1
    if (newIndex >= blenderBagsGallery.length) newIndex = 0
    setGalleryEnlarged({ src: blenderBagsGallery[newIndex].src, index: newIndex })
  }

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
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.secIntroBadgeText`) }} />
            <p className="text-neutral-700">
              {t(`${p}.secIntroBadgeTextCn`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
            imageAlt="AchievePack Lab Blender Bags Hero"
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
      id: 'capacity',
      title: t(`${p}.secCapacityTitle`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp"
            imageAlt="Capacity and Dimensions"
            title={t(`${p}.secCapacityAltTitle`)}
            titleCn={t(`${p}.secCapacityAltTitleCn`)}
            content={t(`${p}.secCapacityAltContent`)}
            contentCn={t(`${p}.secCapacityAltContentCn`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCapacityLabel1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secCapacitySub1`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCapacityLabel2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secCapacitySub2`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCapacityLabel3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secCapacitySub3`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCapacityLabel4`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secCapacitySub4`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material',
      title: t(`${p}.secMaterialTitle`),
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp"
            imageAlt="Material and Thickness Detail"
            title={t(`${p}.secMaterialAltTitle`)}
            titleCn={t(`${p}.secMaterialAltTitleCn`)}
            content={t(`${p}.secMaterialAltContent`)}
            contentCn={t(`${p}.secMaterialAltContentCn`)}
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'sterility',
      title: t(`${p}.secSterilityTitle`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp"
            imageAlt="Gamma Sterilization"
            title={t(`${p}.secSterilityAltTitle`)}
            titleCn={t(`${p}.secSterilityAltTitleCn`)}
            content={t(`${p}.secSterilityAltContent`)}
            contentCn={t(`${p}.secSterilityAltContentCn`)}
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secSterilityCardTitle1`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secSterilityCardDesc1`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secSterilityCardDesc1Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secSterilityCardTitle2`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secSterilityCardDesc2`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secSterilityCardDesc2Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <CheckCircle className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secSterilityCardTitle3`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secSterilityCardDesc3`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secSterilityCardDesc3Cn`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'strength',
      title: t(`${p}.secStrengthTitle`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp"
            imageAlt="Strength and Impact Resistance"
            title={t(`${p}.secStrengthAltTitle`)}
            titleCn={t(`${p}.secStrengthAltTitleCn`)}
            content={t(`${p}.secStrengthAltContent`)}
            contentCn={t(`${p}.secStrengthAltContentCn`)}
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.secAppsTitle`),
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_microbiology_application_2438663.webp"
            imageAlt="Microbiology Applications"
            title={t(`${p}.secAppsAltTitle`)}
            titleCn={t(`${p}.secAppsAltTitleCn`)}
            content={t(`${p}.secAppsAltContent`)}
            contentCn={t(`${p}.secAppsAltContentCn`)}
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <span className="text-2xl mb-2 block">🥗</span>
              <h4 className="font-semibold text-green-800 text-sm">{t(`${p}.secAppsCardTitle1`)}</h4>
              <p className="text-xs text-green-600">{t(`${p}.secAppsCardDesc1`)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <span className="text-2xl mb-2 block">💊</span>
              <h4 className="font-semibold text-purple-800 text-sm">{t(`${p}.secAppsCardTitle2`)}</h4>
              <p className="text-xs text-purple-600">{t(`${p}.secAppsCardDesc2`)}</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
              <span className="text-2xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-teal-800 text-sm">{t(`${p}.secAppsCardTitle3`)}</h4>
              <p className="text-xs text-teal-600">{t(`${p}.secAppsCardDesc3`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <span className="text-2xl mb-2 block">🔬</span>
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.secAppsCardTitle4`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.secAppsCardDesc4`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transparency',
      title: t(`${p}.secClarityTitle`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_transparency_observation_4148902.webp"
            imageAlt="High Clarity Visual Observation"
            title={t(`${p}.secClarityAltTitle`)}
            titleCn={t(`${p}.secClarityAltTitleCn`)}
            content={t(`${p}.secClarityAltContent`)}
            contentCn={t(`${p}.secClarityAltContentCn`)}
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'packaging',
      title: t(`${p}.secPkgTitle`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp"
            imageAlt="Bulk Packaging"
            title={t(`${p}.secPkgAltTitle`)}
            titleCn={t(`${p}.secPkgAltTitleCn`)}
            content={t(`${p}.secPkgAltContent`)}
            contentCn={t(`${p}.secPkgAltContentCn`)}
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.secSpecsTitle`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_specifications_summary_8537834.webp"
            imageAlt="Technical Specifications"
            title={t(`${p}.secSpecsAltTitle`)}
            titleCn={t(`${p}.secSpecsAltTitleCn`)}
            content={t(`${p}.secSpecsAltContent`)}
            contentCn={t(`${p}.secSpecsAltContentCn`)}
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'brand',
      title: t(`${p}.secBrandTitle`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp"
            imageAlt="AchievePack Lab Solutions"
            title={t(`${p}.secBrandAltTitle`)}
            titleCn={t(`${p}.secBrandAltTitleCn`)}
            content={t(`${p}.secBrandAltContent`)}
            contentCn={t(`${p}.secBrandAltContentCn`)}
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              {t(`${p}.secBrandQaTitle`)}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">{t(`${p}.secBrandQa1`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">{t(`${p}.secBrandQa2`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">{t(`${p}.secBrandQa3`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.secCtaTitle`),
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">{t(`${p}.secCtaBoxTitle`)}</h3>
              <p className="text-primary-100 mb-2">{t(`${p}.secCtaBoxSubtitle`)}</p>
              <p className="text-white/90 mb-6">{t(`${p}.secCtaBoxDesc`)}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                >
                  <Calendar className="h-5 w-5" />
                  {t(`${p}.secCtaBtnConsult`)}
                </button>
                <a
                  href="mailto:ryan@achievepack.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <Mail className="h-5 w-5" />
                  {t(`${p}.secCtaBtnQuote`)}
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faqs.0.question`), answer: t(`${p}.faqs.0.answer`) },
    { question: t(`${p}.faqs.1.question`), answer: t(`${p}.faqs.1.answer`) },
    { question: t(`${p}.faqs.2.question`), answer: t(`${p}.faqs.2.answer`) },
    { question: t(`${p}.faqs.3.question`), answer: t(`${p}.faqs.3.answer`) },
    { question: t(`${p}.faqs.4.question`), answer: t(`${p}.faqs.4.answer`) },
    { question: t(`${p}.faqs.5.question`), answer: t(`${p}.faqs.5.answer`) },
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: '/lab/lateral-filter-bags', description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: '/lab/wire-closure-bags', description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: '/company/certificates', description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: '/company/about', description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: '/company/factory-tour', description: t(`${p}.relatedLinks.4.description`) },
    { title: t(`${p}.relatedLinks.5.title`), url: '/packaging/stand-up-pouches', description: t(`${p}.relatedLinks.5.description`) },
    { title: t(`${p}.relatedLinks.6.title`), url: '/packaging/flat-pouches', description: t(`${p}.relatedLinks.6.description`) },
    { title: t(`${p}.relatedLinks.7.title`), url: '/features/barrier-options', description: t(`${p}.relatedLinks.7.description`) },
    { title: t(`${p}.relatedLinks.8.title`), url: '/printing/digital-printing', description: t(`${p}.relatedLinks.8.description`) },
    { title: t(`${p}.relatedLinks.9.title`), url: '/support/faqs', description: t(`${p}.relatedLinks.9.description`) },
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.metaTitle`)}
        description={t(`${p}.metaDescription`)}
        keywords={t(`${p}.keywords`, { returnObjects: true }) as string[]}
        canonicalUrl="https://achievepack.com/lab/lab-blender-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
      />
      
      {/* Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
            onClick={() => setGalleryEnlarged(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 transition p-2 bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 transition p-2 bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryEnlarged.src} 
              alt={blenderBagsGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{blenderBagsGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{blenderBagsGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {blenderBagsGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LabBlenderBagsPage
