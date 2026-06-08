import React, { useState } from 'react'
import { Beaker, FlaskConical, Microscope, Package, Layers, Settings, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Globe, Award, Zap, FileCheck, Building2, Sparkles, Filter, Factory, ClipboardCheck, Droplets, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

// Combined gallery images from lab folders - raw fallback data
const labBagGallery = [
  // Filter bags
  { src: '/imgs/lab/filter/hero.webp', title: 'Lateral Filter Blender Bags', desc: 'Side Filter Membrane Homogenizer Bags', category: 'filter' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Sterile Lab Bag Collection', desc: 'NoBacteriaLaboratoryHomogenizerBagSeries', category: 'filter' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp', title: 'Filter Membrane Detail', desc: 'Filter MembraneDetailsClose-Up', category: 'filter' },
  // Blender bags
  { src: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp', title: 'Lab Blender Bags', desc: 'LaboratoryHomogenizerBag', category: 'blend' },
  { src: '/imgs/lab/blend/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Standard Blender Bags', desc: 'StandardHomogenizerBag', category: 'blend' },
  // Wire closure bags
  { src: '/imgs/lab/wire/hero.webp', title: 'Wire Closure Bags', desc: 'Wire Tie Closure Bags', category: 'wire' },
  { src: '/imgs/lab/wire/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Wire Closure Collection', desc: 'Iron WireSealSeries', category: 'wire' },
]

const LabBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const translatedGallery = labBagGallery.map((item, idx) => ({
    ...item,
    title: t(`seoPages.pages.labBags.achievePack.gallery.item${idx + 1}.title`, { defaultValue: item.title }),
    desc: t(`seoPages.pages.labBags.achievePack.gallery.item${idx + 1}.desc`, { defaultValue: item.desc }),
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = translatedGallery.length - 1
    if (newIndex >= translatedGallery.length) newIndex = 0
    setGalleryEnlarged({ src: translatedGallery[newIndex].src, index: newIndex })
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
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">
              {t('seoPages.pages.labBags.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}
            </div>
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
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">
              {t('seoPages.pages.labBags.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}
            </div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.labBags.achievePack.sections.overview.title'),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.labBags.achievePack.sections.overview.summaryStrong')}</strong>{t('seoPages.pages.labBags.achievePack.sections.overview.summaryText')}
            </p>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.labBags.achievePack.sections.overview.summaryStrongCn')}{t('seoPages.pages.labBags.achievePack.sections.overview.summaryTextCn')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                {t('seoPages.pages.labBags.achievePack.sections.overview.badgeFilter')}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                {t('seoPages.pages.labBags.achievePack.sections.overview.badgeStandard')}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                {t('seoPages.pages.labBags.achievePack.sections.overview.badgeWire')}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                {t('seoPages.pages.labBags.achievePack.sections.overview.badgeGamma')}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/lab/lateral-filter-bags" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/lab/filter/hero.webp" alt={t('seoPages.pages.labBags.achievePack.sections.overview.cardFilter.title')} className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 mb-2">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardFilter.title')}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-2">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardFilter.titleCn')}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardFilter.desc')}
              </p>
            </Link>
            <Link to="/lab/lab-blender-bags" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp" alt={t('seoPages.pages.labBags.achievePack.sections.overview.cardStandard.title')} className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 mb-2">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardStandard.title')}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-2">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardStandard.titleCn')}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardStandard.desc')}
              </p>
            </Link>
            <Link to="/lab/wire-closure-bags" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/lab/wire/hero.webp" alt={t('seoPages.pages.labBags.achievePack.sections.overview.cardWire.title')} className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 mb-2">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardWire.title')}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-2">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardWire.titleCn')}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.overview.cardWire.desc')}
              </p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'filter-bags',
      title: t('seoPages.pages.labBags.achievePack.sections.filterBags.title'),
      icon: <Filter className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp"
            imageAlt={t('seoPages.pages.labBags.achievePack.sections.filterBags.section1.title')}
            title={t('seoPages.pages.labBags.achievePack.sections.filterBags.section1.title')}
            titleCn={t('seoPages.pages.labBags.achievePack.sections.filterBags.section1.titleCn')}
            content={t('seoPages.pages.labBags.achievePack.sections.filterBags.section1.content')}
            contentCn={t('seoPages.pages.labBags.achievePack.sections.filterBags.section1.contentCn')}
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp"
            imageAlt={t('seoPages.pages.labBags.achievePack.sections.filterBags.section2.title')}
            title={t('seoPages.pages.labBags.achievePack.sections.filterBags.section2.title')}
            titleCn={t('seoPages.pages.labBags.achievePack.sections.filterBags.section2.titleCn')}
            content={t('seoPages.pages.labBags.achievePack.sections.filterBags.section2.content')}
            contentCn={t('seoPages.pages.labBags.achievePack.sections.filterBags.section2.contentCn')}
            imageLeft={false}
            index={2}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Filter className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeFilter.title')}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeFilter.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeFilter.descCn')}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeSterile.title')}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeSterile.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeSterile.descCn')}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Factory className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeClean.title')}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeClean.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeClean.descCn')}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeFree.title')}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeFree.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.filterBags.badgeFree.descCn')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'blender-bags',
      title: t('seoPages.pages.labBags.achievePack.sections.blenderBags.title'),
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
            imageAlt={t('seoPages.pages.labBags.achievePack.sections.blenderBags.section1.title')}
            title={t('seoPages.pages.labBags.achievePack.sections.blenderBags.section1.title')}
            titleCn={t('seoPages.pages.labBags.achievePack.sections.blenderBags.section1.titleCn')}
            content={t('seoPages.pages.labBags.achievePack.sections.blenderBags.section1.content')}
            contentCn={t('seoPages.pages.labBags.achievePack.sections.blenderBags.section1.contentCn')}
            imageLeft={true}
            index={3}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statCapacity.val')}
              </div>
              <p className="text-sm text-neutral-700">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statCapacity.title')}
              </p>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statCapacity.titleCn')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statFilm.val')}
              </div>
              <p className="text-sm text-neutral-700">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statFilm.title')}
              </p>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statFilm.titleCn')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statGamma.val')}
              </div>
              <p className="text-sm text-neutral-700">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statGamma.title')}
              </p>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labBags.achievePack.sections.blenderBags.statGamma.titleCn')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'wire-bags',
      title: t('seoPages.pages.labBags.achievePack.sections.wireBags.title'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/hero.webp"
            imageAlt={t('seoPages.pages.labBags.achievePack.sections.wireBags.section1.title')}
            title={t('seoPages.pages.labBags.achievePack.sections.wireBags.section1.title')}
            titleCn={t('seoPages.pages.labBags.achievePack.sections.wireBags.section1.titleCn')}
            content={t('seoPages.pages.labBags.achievePack.sections.wireBags.section1.content')}
            contentCn={t('seoPages.pages.labBags.achievePack.sections.wireBags.section1.contentCn')}
            imageLeft={false}
            index={5}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Settings className="h-6 w-6 text-blue-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featClosure.title')}
              </h5>
              <p className="text-sm text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featClosure.desc')}
              </p>
              <p className="text-xs text-primary-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featClosure.descCn')}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Shield className="h-6 w-6 text-blue-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featSeal.title')}
              </h5>
              <p className="text-sm text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featSeal.desc')}
              </p>
              <p className="text-xs text-primary-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featSeal.descCn')}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <ClipboardCheck className="h-6 w-6 text-blue-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featStorage.title')}
              </h5>
              <p className="text-sm text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featStorage.desc')}
              </p>
              <p className="text-xs text-primary-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.wireBags.featStorage.descCn')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t('seoPages.pages.labBags.achievePack.sections.applications.title'),
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.labBags.achievePack.sections.applications.intro')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Beaker className="h-6 w-6 text-green-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardFood.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardFood.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardFood.descCn')}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Microscope className="h-6 w-6 text-blue-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardMicro.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardMicro.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardMicro.descCn')}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <FlaskConical className="h-6 w-6 text-purple-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardPharm.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardPharm.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardPharm.descCn')}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-amber-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardEnv.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardEnv.desc')}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.applications.cardEnv.descCn')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'quality',
      title: t('seoPages.pages.labBags.achievePack.sections.quality.title'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              {t('seoPages.pages.labBags.achievePack.sections.quality.sectionTitle')}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">
                    {t('seoPages.pages.labBags.achievePack.sections.quality.certIso.title')}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t('seoPages.pages.labBags.achievePack.sections.quality.certIso.desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">
                    {t('seoPages.pages.labBags.achievePack.sections.quality.certClean.title')}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t('seoPages.pages.labBags.achievePack.sections.quality.certClean.desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">
                    {t('seoPages.pages.labBags.achievePack.sections.quality.certGamma.title')}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t('seoPages.pages.labBags.achievePack.sections.quality.certGamma.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related',
      title: t('seoPages.pages.labBags.achievePack.sections.related.title'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.labBags.achievePack.sections.related.intro')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkPouches.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkPouches.desc')}
              </p>
            </Link>
            <Link to="/packaging/vacuum-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Layers className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkVacuum.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkVacuum.desc')}
              </p>
            </Link>
            <Link to="/products/labels-and-stickers" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <FileCheck className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkLabels.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkLabels.desc')}
              </p>
            </Link>
            <Link to="/materials/compostable" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Sparkles className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkEco.title')}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labBags.achievePack.sections.related.linkEco.desc')}
              </p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.labBags.achievePack.sections.faq.title'),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labBags.achievePack.sections.faq.q1.q')}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labBags.achievePack.sections.faq.q1.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labBags.achievePack.sections.faq.q2.q')}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labBags.achievePack.sections.faq.q2.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labBags.achievePack.sections.faq.q3.q')}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labBags.achievePack.sections.faq.q3.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labBags.achievePack.sections.faq.q4.q')}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labBags.achievePack.sections.faq.q4.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labBags.achievePack.sections.faq.q5.q')}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labBags.achievePack.sections.faq.q5.a')}
            </div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.labBags.achievePack.sections.cta.title'),
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('seoPages.pages.labBags.achievePack.sections.cta.header')}
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {t('seoPages.pages.labBags.achievePack.sections.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.labBags.achievePack.sections.cta.btnCall')}
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20lab%20blender%20bags"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              {t('seoPages.pages.labBags.achievePack.sections.cta.btnWa')}
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Lab Bags Quote Request"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              {t('seoPages.pages.labBags.achievePack.sections.cta.btnMail')}
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.labBags.achievePack.seo.title')}
        description={t('seoPages.pages.labBags.achievePack.seo.description')}
        canonicalUrl="https://achievepack.com/products/lab-bags"
        heroTitle={t('seoPages.pages.labBags.achievePack.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.labBags.achievePack.seo.heroSubtitle')}
        introSummary={t('seoPages.pages.labBags.achievePack.seo.introSummary')}
        heroImage="/imgs/lab/filter/hero.webp"
        sections={sections}
        keywords={t('seoPages.pages.labBags.achievePack.seo.keywords', { returnObjects: true }) as string[]}
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
            alt={translatedGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{translatedGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{translatedGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {translatedGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LabBagsPage
