import React, { useState } from 'react'
import { Tag, Package, Clock, CheckCircle, Star, Droplets, Pencil, Layers, Palette, Shield, Award, Users, Globe, Calendar, Mail, X, ChevronLeft, ChevronRight, FileCheck, Sparkles, Truck, Zap, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const CustomLabelsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  // Gallery images from /imgs/label/custom-label/
  const customLabelGallery = [
    { src: '/imgs/label/custom-label/hero.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item1.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item1.desc') },
    { src: '/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item2.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item2.desc') },
    { src: '/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item3.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item3.desc') },
    { src: '/imgs/label/custom-label/a_man_applying_label_multi_pouch_7579483.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item4.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item4.desc') },
    { src: '/imgs/label/custom-label/a_multi_material_pouch_labels_2396520.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item5.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item5.desc') },
    { src: '/imgs/label/custom-label/a_adhesive_strength_detail_2027653.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item6.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item6.desc') },
    { src: '/imgs/label/custom-label/a_multi_design_discount_6714708.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item7.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item7.desc') },
    { src: '/imgs/label/custom-label/a_custom_process_flow_8911882.webp', title: t('seoPages.pages.customLabels.achievePack.gallery.item8.title'), desc: t('seoPages.pages.customLabels.achievePack.gallery.item8.desc') },
  ]
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = customLabelGallery.length - 1
    if (newIndex >= customLabelGallery.length) newIndex = 0
    setGalleryEnlarged({ src: customLabelGallery[newIndex].src, index: newIndex })
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
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.customLabels.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}</div>
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
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.customLabels.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: t('seoPages.pages.customLabels.achievePack.sections.intro.title'),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.customLabels.achievePack.sections.intro.summaryStrong')}</strong>{t('seoPages.pages.customLabels.achievePack.sections.intro.summaryText')}
            </p>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.customLabels.achievePack.sections.intro.summaryStrongCn')}{t('seoPages.pages.customLabels.achievePack.sections.intro.summaryTextCn')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customLabels.achievePack.sections.intro.badgeNoMoq')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customLabels.achievePack.sections.intro.badgeTurnaround')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customLabels.achievePack.sections.intro.badgeReview')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customLabels.achievePack.sections.intro.badgeRating')}</span>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp"
            imageAlt="Custom sheet labels brand overview"
            title={t('seoPages.pages.customLabels.achievePack.sections.intro.item1.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.intro.item1.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.intro.item1.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.intro.item1.descCn')}
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp"
            imageAlt="Custom labels applied on stand-up pouches"
            title={t('seoPages.pages.customLabels.achievePack.sections.intro.item2.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.intro.item2.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.intro.item2.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.intro.item2.descCn')}
            imageLeft={false}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'features',
      title: t('seoPages.pages.customLabels.achievePack.sections.features.title'),
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.card1.title')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.features.card1.desc')}</p>
              <p className="text-xs text-primary-600 mt-2">{t('seoPages.pages.customLabels.achievePack.sections.features.card1.sub')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.card2.title')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.features.card2.desc')}</p>
              <p className="text-xs text-primary-600 mt-2">{t('seoPages.pages.customLabels.achievePack.sections.features.card2.sub')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <FileCheck className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.card3.title')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.features.card3.desc')}</p>
              <p className="text-xs text-primary-600 mt-2">{t('seoPages.pages.customLabels.achievePack.sections.features.card3.sub')}</p>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/label/custom-label/a_man_applying_label_multi_pouch_7579483.webp"
            imageAlt="Easy label application process"
            title={t('seoPages.pages.customLabels.achievePack.sections.features.item3.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.features.item3.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.features.item3.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.features.item3.descCn')}
            imageLeft={true}
            index={3}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <Layers className="h-6 w-6 text-blue-600 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.inner1.title')}</h4>
              <p className="text-sm text-neutral-700 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.inner1.desc')}</p>
              <p className="text-xs text-blue-700">{t('seoPages.pages.customLabels.achievePack.sections.features.inner1.sub')}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <Palette className="h-6 w-6 text-green-600 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.inner2.title')}</h4>
              <p className="text-sm text-neutral-700 mb-2">{t('seoPages.pages.customLabels.achievePack.sections.features.inner2.desc')}</p>
              <p className="text-xs text-green-700">{t('seoPages.pages.customLabels.achievePack.sections.features.inner2.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('seoPages.pages.customLabels.achievePack.sections.materials.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_multi_material_pouch_labels_2396520.webp"
            imageAlt="Multiple material options for custom labels"
            title={t('seoPages.pages.customLabels.achievePack.sections.materials.item4.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.materials.item4.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.materials.item4.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.materials.item4.descCn')}
            imageLeft={false}
            index={4}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-neutral-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customLabels.achievePack.sections.materials.card1.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.materials.card1.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.materials.card1.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customLabels.achievePack.sections.materials.card2.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.materials.card2.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.materials.card2.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customLabels.achievePack.sections.materials.card3.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.materials.card3.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.materials.card3.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Pencil className="h-6 w-6 text-green-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customLabels.achievePack.sections.materials.card4.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.materials.card4.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.materials.card4.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'adhesive',
      title: t('seoPages.pages.customLabels.achievePack.sections.adhesive.title'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_adhesive_strength_detail_2027653.webp"
            imageAlt="Strong permanent adhesive demonstration"
            title={t('seoPages.pages.customLabels.achievePack.sections.adhesive.item5.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.adhesive.item5.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.adhesive.item5.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.adhesive.item5.descCn')}
            imageLeft={true}
            index={5}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              {t('seoPages.pages.customLabels.achievePack.sections.adhesive.performanceTitle')}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-medium text-neutral-800">{t('seoPages.pages.customLabels.achievePack.sections.adhesive.row1Label')}</p>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.adhesive.row1Desc')}</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800">{t('seoPages.pages.customLabels.achievePack.sections.adhesive.row2Label')}</p>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.adhesive.row2Desc')}</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800">{t('seoPages.pages.customLabels.achievePack.sections.adhesive.row3Label')}</p>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.adhesive.row3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'multi-design',
      title: t('seoPages.pages.customLabels.achievePack.sections.multiDesign.title'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_multi_design_discount_6714708.webp"
            imageAlt="Multiple design options on same label sheet"
            title={t('seoPages.pages.customLabels.achievePack.sections.multiDesign.item6.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.multiDesign.item6.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.multiDesign.item6.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.multiDesign.item6.descCn')}
            imageLeft={false}
            index={6}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border-2 border-primary-200 text-center">
              <div className="text-2xl font-bold text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card1.title')}</div>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card1.desc')}</p>
              <p className="text-xs text-neutral-500 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card1.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-2 border-primary-300 text-center">
              <div className="text-2xl font-bold text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card2.title')}</div>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card2.desc')}</p>
              <p className="text-xs text-green-600 mt-1 font-medium">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card2.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-2 border-primary-400 text-center">
              <div className="text-2xl font-bold text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card3.title')}</div>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card3.desc')}</p>
              <p className="text-xs text-green-600 mt-1 font-medium">{t('seoPages.pages.customLabels.achievePack.sections.multiDesign.card3.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: t('seoPages.pages.customLabels.achievePack.sections.process.title'),
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_custom_process_flow_8911882.webp"
            imageAlt="Custom label ordering process flow"
            title={t('seoPages.pages.customLabels.achievePack.sections.process.item7.title')}
            titleCn={t('seoPages.pages.customLabels.achievePack.sections.process.item7.titleCn')}
            content={t('seoPages.pages.customLabels.achievePack.sections.process.item7.desc')}
            contentCn={t('seoPages.pages.customLabels.achievePack.sections.process.item7.descCn')}
            imageLeft={true}
            index={7}
          />

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-xl text-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customLabels.achievePack.sections.process.step1.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customLabels.achievePack.sections.process.step1.desc')}</p>
                <p className="text-xs text-white/60 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.process.step1.sub')}</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customLabels.achievePack.sections.process.step2.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customLabels.achievePack.sections.process.step2.desc')}</p>
                <p className="text-xs text-white/60 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.process.step2.sub')}</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customLabels.achievePack.sections.process.step3.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customLabels.achievePack.sections.process.step3.desc')}</p>
                <p className="text-xs text-white/60 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.process.step3.sub')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reviews',
      title: t('seoPages.pages.customLabels.achievePack.sections.reviews.title'),
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <span className="text-2xl font-bold text-neutral-900">4.7/5</span>
              <span className="text-neutral-600 ml-2">{t('seoPages.pages.customLabels.achievePack.sections.reviews.stats')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 italic">{t('seoPages.pages.customLabels.achievePack.sections.reviews.card1.review')}</p>
              <p className="text-xs text-neutral-500 mt-2">{t('seoPages.pages.customLabels.achievePack.sections.reviews.card1.author')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 italic">{t('seoPages.pages.customLabels.achievePack.sections.reviews.card2.review')}</p>
              <p className="text-xs text-neutral-500 mt-2">{t('seoPages.pages.customLabels.achievePack.sections.reviews.card2.author')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 italic">{t('seoPages.pages.customLabels.achievePack.sections.reviews.card3.review')}</p>
              <p className="text-xs text-neutral-500 mt-2">{t('seoPages.pages.customLabels.achievePack.sections.reviews.card3.author')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related',
      title: t('seoPages.pages.customLabels.achievePack.sections.related.title'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{t('seoPages.pages.customLabels.achievePack.sections.related.desc')}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.related.link1.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.related.link1.desc')}</p>
            </Link>
            <Link to="/packaging/flat-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.related.link2.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.related.link2.desc')}</p>
            </Link>
            <Link to="/features/surface-finish" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Palette className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.related.link3.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.related.link3.desc')}</p>
            </Link>
            <Link to="/materials/eco-friendly" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Award className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customLabels.achievePack.sections.related.link4.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customLabels.achievePack.sections.related.link4.desc')}</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.customLabels.achievePack.sections.faq.title'),
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customLabels.achievePack.sections.faq.q1.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customLabels.achievePack.sections.faq.q1.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customLabels.achievePack.sections.faq.q2.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customLabels.achievePack.sections.faq.q2.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customLabels.achievePack.sections.faq.q3.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customLabels.achievePack.sections.faq.q3.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customLabels.achievePack.sections.faq.q4.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customLabels.achievePack.sections.faq.q4.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customLabels.achievePack.sections.faq.q5.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customLabels.achievePack.sections.faq.q5.a')}</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.customLabels.achievePack.sections.cta.title'),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('seoPages.pages.customLabels.achievePack.sections.cta.header')}</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            {t('seoPages.pages.customLabels.achievePack.sections.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.customLabels.achievePack.sections.cta.btnCall')}
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20labels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              {t('seoPages.pages.customLabels.achievePack.sections.cta.btnWa')}
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Labels Quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              {t('seoPages.pages.customLabels.achievePack.sections.cta.btnMail')}
            </a>
          </div>
        </div>
      )
    }
  ]

  const achieveKeywords = t('seoPages.pages.customLabels.achievePack.seo.keywords', { returnObjects: true }) as string[]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.customLabels.achievePack.seo.title')}
        description={t('seoPages.pages.customLabels.achievePack.seo.description')}
        canonicalUrl="https://achievepack.com/products/custom-labels"
        heroTitle={t('seoPages.pages.customLabels.achievePack.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.customLabels.achievePack.seo.heroSubtitle')}
        introSummary={t('seoPages.pages.customLabels.achievePack.seo.introSummary')}
        heroImage="/imgs/label/custom-label/hero.webp"
        sections={sections}
        keywords={achieveKeywords}
        schemaType="Product"
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={customLabelGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{customLabelGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{customLabelGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {customLabelGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomLabelsPage
