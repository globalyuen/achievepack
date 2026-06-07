import React, { useState } from 'react'
import { Sticker, Layers, Leaf, Palette, Printer, Sparkles, Settings, Truck, Building2, Package, CheckCircle, Star, Calendar, Mail, X, ChevronLeft, ChevronRight, Globe, Award, Zap, FileCheck, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const CustomStickersPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  // Gallery images from /imgs/label/custom-sticker/
  const customStickerGallery = [
    { src: '/imgs/label/custom-sticker/hero.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item1.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item1.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item2.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item2.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item3.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item3.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_materials_swatch_wall_2342788.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item4.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item4.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item5.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item5.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_printing_methods_detail_2866450.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item6.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item6.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_ink_types_effects_1477402.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item7.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item7.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item8.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item8.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_order_config_interface_2146544.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item9.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item9.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_ordering_process_steps_1608220.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item10.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item10.desc') },
    { src: '/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp', title: t('seoPages.pages.customStickers.achievePack.gallery.item11.title'), desc: t('seoPages.pages.customStickers.achievePack.gallery.item11.desc') },
  ]
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = customStickerGallery.length - 1
    if (newIndex >= customStickerGallery.length) newIndex = 0
    setGalleryEnlarged({ src: customStickerGallery[newIndex].src, index: newIndex })
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
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.customStickers.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}</div>
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
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">{t('seoPages.pages.customStickers.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: t('seoPages.pages.customStickers.achievePack.sections.intro.title'),
      icon: <Sticker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.customStickers.achievePack.sections.intro.summaryStrong')}</strong>{t('seoPages.pages.customStickers.achievePack.sections.intro.summaryText')}
            </p>
            <p className="text-neutral-700 mb-4">
              <strong>{t('seoPages.pages.customStickers.achievePack.sections.intro.summaryStrongCn')}</strong>{t('seoPages.pages.customStickers.achievePack.sections.intro.summaryTextCn')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customStickers.achievePack.sections.intro.badgeCut')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customStickers.achievePack.sections.intro.badgeRoll')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customStickers.achievePack.sections.intro.badgeSheet')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">{t('seoPages.pages.customStickers.achievePack.sections.intro.badgeKiss')}</span>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp"
            imageAlt="Four types of custom stickers"
            title={t('seoPages.pages.customStickers.achievePack.sections.intro.item1.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.intro.item1.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.intro.item1.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.intro.item1.descCn')}
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp"
            imageAlt="Custom shapes and sizes for stickers"
            title={t('seoPages.pages.customStickers.achievePack.sections.intro.item2.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.intro.item2.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.intro.item2.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.intro.item2.descCn')}
            imageLeft={false}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'materials',
      title: t('seoPages.pages.customStickers.achievePack.sections.materials.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_materials_swatch_wall_2342788.webp"
            imageAlt="Material options swatch wall"
            title={t('seoPages.pages.customStickers.achievePack.sections.materials.item3.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.materials.item3.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.materials.item3.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.materials.item3.descCn')}
            imageLeft={true}
            index={3}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-5 w-5 text-amber-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customStickers.achievePack.sections.materials.card1.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.materials.card1.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.materials.card1.sub')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customStickers.achievePack.sections.materials.card2.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.materials.card2.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.materials.card2.sub')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Layers className="h-5 w-5 text-neutral-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customStickers.achievePack.sections.materials.card3.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.materials.card3.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.materials.card3.sub')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-5 w-5 text-gray-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customStickers.achievePack.sections.materials.card4.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.materials.card4.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.materials.card4.sub')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-5 w-5 text-orange-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">{t('seoPages.pages.customStickers.achievePack.sections.materials.card5.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.materials.card5.desc')}</p>
              <p className="text-xs text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.materials.card5.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco',
      title: t('seoPages.pages.customStickers.achievePack.sections.eco.title'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp"
            imageAlt="Eco-friendly PLA and paper-based stickers"
            title={t('seoPages.pages.customStickers.achievePack.sections.eco.item4.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.eco.item4.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.eco.item4.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.eco.item4.descCn')}
            imageLeft={false}
            index={4}
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              {t('seoPages.pages.customStickers.achievePack.sections.eco.boxTitle')}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.customStickers.achievePack.sections.eco.box1Title')}</p>
                  <p className="text-sm text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.eco.box1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.customStickers.achievePack.sections.eco.box2Title')}</p>
                  <p className="text-sm text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.eco.box2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">{t('seoPages.pages.customStickers.achievePack.sections.eco.box3Title')}</p>
                  <p className="text-sm text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.eco.box3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'printing',
      title: t('seoPages.pages.customStickers.achievePack.sections.printing.title'),
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_printing_methods_detail_2866450.webp"
            imageAlt="Professional printing methods detail"
            title={t('seoPages.pages.customStickers.achievePack.sections.printing.item5.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.printing.item5.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.printing.item5.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.printing.item5.descCn')}
            imageLeft={true}
            index={5}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_ink_types_effects_1477402.webp"
            imageAlt="Ink types and special effects"
            title={t('seoPages.pages.customStickers.achievePack.sections.printing.item6.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.printing.item6.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.printing.item6.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.printing.item6.descCn')}
            imageLeft={false}
            index={6}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.printing.card1.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.printing.card1.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.printing.card1.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.printing.card2.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.printing.card2.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.printing.card2.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.printing.card3.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.printing.card3.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.printing.card3.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.printing.card4.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.printing.card4.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.printing.card4.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'finishes',
      title: t('seoPages.pages.customStickers.achievePack.sections.finishes.title'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp"
            imageAlt="Surface finish comparison matte gloss UV foil"
            title={t('seoPages.pages.customStickers.achievePack.sections.finishes.item7.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.finishes.item7.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.finishes.item7.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.finishes.item7.descCn')}
            imageLeft={true}
            index={7}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card1.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card1.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card1.sub')}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card2.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card2.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card2.sub')}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card3.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card3.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card3.sub')}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card4.title')}</div>
              <p className="text-xs text-neutral-600">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card4.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.finishes.card4.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ordering',
      title: t('seoPages.pages.customStickers.achievePack.sections.ordering.title'),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_order_config_interface_2146544.webp"
            imageAlt="Order configuration interface"
            title={t('seoPages.pages.customStickers.achievePack.sections.ordering.item8.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.ordering.item8.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.ordering.item8.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.ordering.item8.descCn')}
            imageLeft={false}
            index={8}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_ordering_process_steps_1608220.webp"
            imageAlt="Four-step ordering process"
            title={t('seoPages.pages.customStickers.achievePack.sections.ordering.item9.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.ordering.item9.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.ordering.item9.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.ordering.item9.descCn')}
            imageLeft={true}
            index={9}
          />

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-xl text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step1.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step1.desc')}</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step2.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step2.desc')}</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step3.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step3.desc')}</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h5 className="font-semibold mb-2">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step4.title')}</h5>
                <p className="text-sm text-white/80">{t('seoPages.pages.customStickers.achievePack.sections.ordering.step4.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t('seoPages.pages.customStickers.achievePack.sections.applications.title'),
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp"
            imageAlt="Brand application collage showing stickers on various products"
            title={t('seoPages.pages.customStickers.achievePack.sections.applications.item10.title')}
            titleCn={t('seoPages.pages.customStickers.achievePack.sections.applications.item10.titleCn')}
            content={t('seoPages.pages.customStickers.achievePack.sections.applications.item10.desc')}
            contentCn={t('seoPages.pages.customStickers.achievePack.sections.applications.item10.descCn')}
            imageLeft={false}
            index={10}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Package className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">{t('seoPages.pages.customStickers.achievePack.sections.applications.card1.title')}</h5>
              <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.applications.card1.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.applications.card1.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <FileCheck className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">{t('seoPages.pages.customStickers.achievePack.sections.applications.card2.title')}</h5>
              <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.applications.card2.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.applications.card2.sub')}</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Zap className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">{t('seoPages.pages.customStickers.achievePack.sections.applications.card3.title')}</h5>
              <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.applications.card3.desc')}</p>
              <p className="text-xs text-primary-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.applications.card3.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related',
      title: t('seoPages.pages.customStickers.achievePack.sections.related.title'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{t('seoPages.pages.customStickers.achievePack.sections.related.desc')}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/products/custom-labels" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Sticker className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.related.link1.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.related.link1.desc')}</p>
            </Link>
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.related.link2.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.related.link2.desc')}</p>
            </Link>
            <Link to="/features/surface-finish" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Palette className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.related.link3.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.related.link3.desc')}</p>
            </Link>
            <Link to="/materials/compostable" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Award className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">{t('seoPages.pages.customStickers.achievePack.sections.related.link4.title')}</h5>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customStickers.achievePack.sections.related.link4.desc')}</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.customStickers.achievePack.sections.faq.title'),
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customStickers.achievePack.sections.faq.q1.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customStickers.achievePack.sections.faq.q1.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customStickers.achievePack.sections.faq.q2.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customStickers.achievePack.sections.faq.q2.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customStickers.achievePack.sections.faq.q3.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customStickers.achievePack.sections.faq.q3.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customStickers.achievePack.sections.faq.q4.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customStickers.achievePack.sections.faq.q4.a')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customStickers.achievePack.sections.faq.q5.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.customStickers.achievePack.sections.faq.q5.a')}</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.customStickers.achievePack.sections.cta.title'),
      icon: <Sticker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t('seoPages.pages.customStickers.achievePack.sections.cta.header')}</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            {t('seoPages.pages.customStickers.achievePack.sections.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.customStickers.achievePack.sections.cta.btnCall')}
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              {t('seoPages.pages.customStickers.achievePack.sections.cta.btnWa')}
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Stickers Quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              {t('seoPages.pages.customStickers.achievePack.sections.cta.btnMail')}
            </a>
          </div>
        </div>
      )
    }
  ]

  const achieveKeywords = t('seoPages.pages.customStickers.achievePack.seo.keywords', { returnObjects: true }) as string[]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.customStickers.achievePack.seo.title')}
        description={t('seoPages.pages.customStickers.achievePack.seo.description')}
        canonicalUrl="https://achievepack.com/products/custom-stickers"
        heroTitle={t('seoPages.pages.customStickers.achievePack.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.customStickers.achievePack.seo.heroSubtitle')}
        introSummary={t('seoPages.pages.customStickers.achievePack.seo.introSummary')}
        heroImage="/imgs/label/custom-sticker/hero.webp"
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
            alt={customStickerGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{customStickerGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{customStickerGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {customStickerGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomStickersPage
