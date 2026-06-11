import React, { useState } from 'react'
import { Beaker, Layers, Settings, Award, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Droplets, Filter, Zap, ClipboardCheck, Factory, FileCheck, FlaskConical, Microscope, Package } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const LateralFilterBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  const { t } = useTranslation()
  const p = 'seoPages.pages.lateralFilter'

  const filterBagGallery = [
    { src: '/imgs/lab/filter/hero.webp', title: t(`${p}.gallery.0.title`), desc: t(`${p}.gallery.0.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: t(`${p}.gallery.1.title`), desc: t(`${p}.gallery.1.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp', title: t(`${p}.gallery.2.title`), desc: t(`${p}.gallery.2.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_structure_infographic_0840540.webp', title: t(`${p}.gallery.3.title`), desc: t(`${p}.gallery.3.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_film_material_detail_8198598.webp', title: t(`${p}.gallery.4.title`), desc: t(`${p}.gallery.4.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_pouring_scene_9028758.webp', title: t(`${p}.gallery.5.title`), desc: t(`${p}.gallery.5.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_packaging_display_1648666.webp', title: t(`${p}.gallery.6.title`), desc: t(`${p}.gallery.6.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_blender_compatible_6617683.webp', title: t(`${p}.gallery.7.title`), desc: t(`${p}.gallery.7.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_applications_infographic_4799610.webp', title: t(`${p}.gallery.8.title`), desc: t(`${p}.gallery.8.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_weld_particle_detail_9222606.webp', title: t(`${p}.gallery.9.title`), desc: t(`${p}.gallery.9.desc`) },
    { src: '/imgs/lab/filter/a_achieve_pack_400ml_capacity_visualization_8316877.webp', title: t(`${p}.gallery.10.title`), desc: t(`${p}.gallery.10.desc`) },
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = filterBagGallery.length - 1
    if (newIndex >= filterBagGallery.length) newIndex = 0
    setGalleryEnlarged({ src: filterBagGallery[newIndex].src, index: newIndex })
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
            image="/imgs/lab/filter/hero.webp"
            imageAlt="AchievePack Lateral Filter Blender Bags Hero"
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
      id: 'filter-technology',
      title: t(`${p}.secFilterTitle`),
      icon: <Filter className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp"
            imageAlt="Lateral Non-woven Filter Detail"
            title={t(`${p}.secFilterAltTitle`)}
            titleCn={t(`${p}.secFilterAltTitleCn`)}
            content={t(`${p}.secFilterAltContent`)}
            contentCn={t(`${p}.secFilterAltContentCn`)}
            imageLeft={false}
            index={2}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Filter className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secFilterCardTitle1`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secFilterCardDesc1`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secFilterCardDesc1Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secFilterCardTitle2`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secFilterCardDesc2`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secFilterCardDesc2Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secFilterCardTitle3`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secFilterCardDesc3`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secFilterCardDesc3Cn`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.secSpecsTitle`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_structure_infographic_0840540.webp"
            imageAlt="400mL Blender Bag Specifications"
            title={t(`${p}.secSpecsAltTitle`)}
            titleCn={t(`${p}.secSpecsAltTitleCn`)}
            content={t(`${p}.secSpecsAltContent`)}
            contentCn={t(`${p}.secSpecsAltContentCn`)}
            imageLeft={true}
            index={3}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secSpecsLabel1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secSpecsSub1`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secSpecsLabel2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secSpecsSub2`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Settings className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secSpecsLabel3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secSpecsSub3`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Droplets className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secSpecsLabel4`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secSpecsSub4`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-quality',
      title: t(`${p}.secMaterialTitle`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_film_material_detail_8198598.webp"
            imageAlt="Multilayer Reinforced Film Material"
            title={t(`${p}.secMaterialAltTitle`)}
            titleCn={t(`${p}.secMaterialAltTitleCn`)}
            content={t(`${p}.secMaterialAltContent`)}
            contentCn={t(`${p}.secMaterialAltContentCn`)}
            imageLeft={false}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'sterilization',
      title: t(`${p}.secSterilityTitle`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_packaging_display_1648666.webp"
            imageAlt="Sterile Packaging Clean Room"
            title={t(`${p}.secSterilityAltTitle`)}
            titleCn={t(`${p}.secSterilityAltTitleCn`)}
            content={t(`${p}.secSterilityAltContent`)}
            contentCn={t(`${p}.secSterilityAltContentCn`)}
            imageLeft={true}
            index={5}
          />
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-semibold text-indigo-800 mb-3">{t(`${p}.secQaTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Factory className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-indigo-800 font-medium">{t(`${p}.secQaCardTitle1`)}</span>
                  <p className="text-indigo-600 text-xs">{t(`${p}.secQaCardDesc1`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-indigo-800 font-medium">{t(`${p}.secQaCardTitle2`)}</span>
                  <p className="text-indigo-600 text-xs">{t(`${p}.secQaCardDesc2`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ClipboardCheck className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-indigo-800 font-medium">{t(`${p}.secQaCardTitle3`)}</span>
                  <p className="text-indigo-600 text-xs">{t(`${p}.secQaCardDesc3`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'blender-compatibility',
      title: t(`${p}.secBlenderTitle`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_blender_compatible_6617683.webp"
            imageAlt="Lab Blender Compatibility"
            title={t(`${p}.secBlenderAltTitle`)}
            titleCn={t(`${p}.secBlenderAltTitleCn`)}
            content={t(`${p}.secBlenderAltContent`)}
            contentCn={t(`${p}.secBlenderAltContentCn`)}
            imageLeft={false}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'operation',
      title: t(`${p}.secPourTitle`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_pouring_scene_9028758.webp"
            imageAlt="Pouring Particle-free Filtrate"
            title={t(`${p}.secPourAltTitle`)}
            titleCn={t(`${p}.secPourAltTitleCn`)}
            content={t(`${p}.secPourAltContent`)}
            contentCn={t(`${p}.secPourAltContentCn`)}
            imageLeft={true}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.secAppsTitle`),
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_applications_infographic_4799610.webp"
            imageAlt="Multi-industry Applications"
            title={t(`${p}.secAppsAltTitle`)}
            titleCn={t(`${p}.secAppsAltTitleCn`)}
            content={t(`${p}.secAppsAltContent`)}
            contentCn={t(`${p}.secAppsAltContentCn`)}
            imageLeft={false}
            index={8}
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
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 text-center">
              <span className="text-2xl mb-2 block">💄</span>
              <h4 className="font-semibold text-pink-800 text-sm">{t(`${p}.secAppsCardTitle3`)}</h4>
              <p className="text-xs text-pink-600">{t(`${p}.secAppsCardDesc3`)}</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
              <span className="text-2xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-teal-800 text-sm">{t(`${p}.secAppsCardTitle4`)}</h4>
              <p className="text-xs text-teal-600">{t(`${p}.secAppsCardDesc4`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'brand-upgrade',
      title: t(`${p}.secBrandTitle`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_weld_particle_detail_9222606.webp"
            imageAlt="AchievePack Brand Endorsement"
            title={t(`${p}.secBrandAltTitle`)}
            titleCn={t(`${p}.secBrandAltTitleCn`)}
            content={t(`${p}.secBrandAltContent`)}
            contentCn={t(`${p}.secBrandAltContentCn`)}
            imageLeft={true}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              {t(`${p}.secBrandAdvTitle`)}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">{t(`${p}.secBrandAdv1`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">{t(`${p}.secBrandAdv2`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">{t(`${p}.secBrandAdv3`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust',
      title: t(`${p}.secTrustTitle`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.secTrustCardTitle1`)}</h4>
                  <p className="text-sm text-neutral-500">{t(`${p}.secTrustCardDesc1`)}</p>
                </div>
              </div>
              <p className="text-neutral-700 text-sm">{t(`${p}.secTrustCardText1`)}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.secTrustCardTitle2`)}</h4>
                  <p className="text-sm text-neutral-500">{t(`${p}.secTrustCardDesc2`)}</p>
                </div>
              </div>
              <p className="text-neutral-700 text-sm">{t(`${p}.secTrustCardText2`)}</p>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-neutral-600 mb-4">{t(`${p}.secTrustFooter`)}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">{t(`${p}.secTrustTag1`)}</span>
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">{t(`${p}.secTrustTag2`)}</span>
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">{t(`${p}.secTrustTag3`)}</span>
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">{t(`${p}.secTrustTag4`)}</span>
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
    { question: t(`${p}.faqs.6.question`), answer: t(`${p}.faqs.6.answer`) },
    { question: t(`${p}.faqs.7.question`), answer: t(`${p}.faqs.7.answer`) },
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: '/materials/home-compostable', description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: '/materials/industrial-compostable', description: t(`${p}.relatedLinks.1.description`) },
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
        canonicalUrl="https://achievepack.com/lab/lateral-filter-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp"
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
              alt={filterBagGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{filterBagGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{filterBagGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {filterBagGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LateralFilterBagsPage
