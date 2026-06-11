import React, { useState } from 'react'
import { Package, Zap, DollarSign, Settings, Gauge, Layers, ShoppingBag, Award, Users, Globe, FileCheck, Building2, Sparkles, Leaf, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import { useTranslation } from 'react-i18next'

const PreZipperedRollstockPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  const isPouchDomain = getDomain() === 'pouch'
  const { t } = useTranslation()
  const p = 'seoPages.pages.preZippered'
  
  const rollstockGallery = [
    { src: '/imgs/function/roll/hero.webp', title: t(`${p}.gallery.0.title`), desc: t(`${p}.gallery.0.desc`) },
    { src: '/imgs/function/roll/a_kv2_how_it_works_7440796.webp', title: t(`${p}.gallery.1.title`), desc: t(`${p}.gallery.1.desc`) },
    { src: '/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp', title: t(`${p}.gallery.2.title`), desc: t(`${p}.gallery.2.desc`) },
    { src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp', title: t(`${p}.gallery.3.title`), desc: t(`${p}.gallery.3.desc`) },
    { src: '/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp', title: t(`${p}.gallery.4.title`), desc: t(`${p}.gallery.4.desc`) },
    { src: '/imgs/function/roll/a_kv6_efficiency_9836360.webp', title: t(`${p}.gallery.5.title`), desc: t(`${p}.gallery.5.desc`) },
    { src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp', title: t(`${p}.gallery.6.title`), desc: t(`${p}.gallery.6.desc`) },
    { src: '/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp', title: t(`${p}.gallery.7.title`), desc: t(`${p}.gallery.7.desc`) },
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = rollstockGallery.length - 1
    if (newIndex >= rollstockGallery.length) newIndex = 0
    setGalleryEnlarged({ src: rollstockGallery[newIndex].src, index: newIndex })
  }

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
      title: t(`${p}.secIntroTitle`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t(`${p}.secIntroBadgeText`)}</strong> — {t(`${p}.secIntroBadgeDesc`)}
            </p>
            <p className="text-neutral-700">
              {t(`${p}.secIntroDesc`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/roll/hero.webp"
            imageAlt="Achieve Pack Pre-Zippered Rollstock Hero"
            title={t(`${p}.secIntroAltTitle`)}
            content={t(`${p}.secIntroAltContent`)}
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.secWorksTitle`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv2_how_it_works_7440796.webp"
            imageAlt="How Pre-Zippered Rollstock Works"
            title={t(`${p}.secWorksAltTitle`)}
            content={t(`${p}.secWorksAltContent`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Zap className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.secWorksPoint1`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secWorksPoint1Sub`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Settings className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.secWorksPoint2`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secWorksPoint2Sub`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Package className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.secWorksPoint3`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secWorksPoint3Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'production-sample',
      title: t(`${p}.secVideoTitle`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.secVideoH3`)}</h3>
            <p className="text-neutral-700 mb-6">
              {t(`${p}.secVideoDesc`)}
            </p>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <video 
                src="/imgs/function/roll/production-sample.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-md border border-neutral-100 bg-black"
                poster="/imgs/function/roll/production-sample.jpg"
              />
              <img 
                src="/imgs/function/roll/production-sample.jpg" 
                alt="Pre-Zippered Rollstock Production Sample" 
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-md border border-neutral-100 hidden md:block"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-detail',
      title: t(`${p}.secZipperTitle`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp"
            imageAlt="Pre-Applied Zipper Zone Detail"
            title={t(`${p}.secZipperAltTitle`)}
            content={t(`${p}.secZipperAltContent`)}
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'no-equipment',
      title: t(`${p}.secEquipTitle`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv4_no_equipment_5802224.webp"
            imageAlt="No New Equipment Required"
            title={t(`${p}.secEquipAltTitle`)}
            content={t(`${p}.secEquipAltContent`)}
            imageLeft={false}
            index={3}
          />
          
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">✓ {t(`${p}.secEquipCompat`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-amber-700"><strong>{t(`${p}.secEquipVffs`)}</strong></p>
                <p className="text-amber-600">{t(`${p}.secEquipVffsSub`)}</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>{t(`${p}.secEquipHffs`)}</strong></p>
                <p className="text-amber-600">{t(`${p}.secEquipHffsSub`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-savings',
      title: t(`${p}.secCostTitle`),
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp"
            imageAlt="Cost and Material Savings"
            title={t(`${p}.secCostAltTitle`)}
            content={t(`${p}.secCostAltContent`)}
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.secCostCard1`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secCostCard1Sub`)}</p>
              <p className="text-xs text-green-600 mt-1">{t(`${p}.secCostCard1Desc`)}</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.secCostCard2`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.secCostCard2Sub`)}</p>
              <p className="text-xs text-green-600 mt-1">{t(`${p}.secCostCard2Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'efficiency',
      title: t(`${p}.secSpeedTitle`),
      icon: <Gauge className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv6_efficiency_9836360.webp"
            imageAlt="Production Efficiency and Speed"
            title={t(`${p}.secSpeedAltTitle`)}
            content={t(`${p}.secSpeedAltContent`)}
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Gauge className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.secSpeedPoint1`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.secSpeedPoint1Sub`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.secSpeedPoint2`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.secSpeedPoint2Sub`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Settings className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.secSpeedPoint3`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.secSpeedPoint3Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.secAppsTitle`),
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_versatility_9776242.webp"
            imageAlt="Flexible Applications"
            title={t(`${p}.secAppsAltTitle`)}
            content={t(`${p}.secAppsAltContent`)}
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🍿</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.secAppsCard1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard1Sub`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">❄️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.secAppsCard2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard2Sub`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🐕</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.secAppsCard3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard3Sub`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥤</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.secAppsCard4`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secAppsCard4Sub`)}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.secAppsStyles`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">{t(`${p}.secAppsStyle1`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">{t(`${p}.secAppsStyle2`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">{t(`${p}.secAppsStyle3`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consumer-experience',
      title: t(`${p}.secConsumerTitle`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.secConsumerH3`)}</h3>
            <p className="text-neutral-700 mb-4">
              {t(`${p}.secConsumerP1`)}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secConsumerCard1`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.secConsumerCard1Sub`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secConsumerCard2`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.secConsumerCard2Sub`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secConsumerCard3`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.secConsumerCard3Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-system',
      title: t(`${p}.secDesignTitle`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp"
            imageAlt="Design Your System with Achieve Pack"
            title={t(`${p}.secDesignAltTitle`)}
            content={t(`${p}.secDesignAltContent`)}
            imageLeft={false}
            index={7}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">{t(`${p}.secDesign3Steps`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">1</div>
                <h5 className="font-medium text-neutral-800">{t(`${p}.secDesignStep1`)}</h5>
                <p className="text-sm text-neutral-600">{t(`${p}.secDesignStep1Sub`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">2</div>
                <h5 className="font-medium text-neutral-800">{t(`${p}.secDesignStep2`)}</h5>
                <p className="text-sm text-neutral-600">{t(`${p}.secDesignStep2Sub`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">3</div>
                <h5 className="font-medium text-neutral-800">{t(`${p}.secDesignStep3`)}</h5>
                <p className="text-sm text-neutral-600">{t(`${p}.secDesignStep3Sub`)}</p>
              </div>
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
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Layers className="h-4 w-4" /> Reclosure Options
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
      icon: <Package className="h-5 w-5 text-white" />,
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
              <a href="mailto:ryan@achievepack.com?subject=Pre-Zippered Rollstock Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
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
    if (sec.id === 'zero-machinery-investment') {
      contentNode = (
        <div className="space-y-6 font-sans">
          <p className="text-neutral-700">{sec.p1}</p>
          {sec.blockquote && (
            <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
                <strong>"{sec.blockquote}"</strong>
              </p>
              <p className="text-sm text-neutral-800 leading-relaxed font-semibold">{sec.p2}</p>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_kv4_no_equipment_5802224.webp" alt="No expensive packaging machinery upgrades required" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-3 font-sans">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{sec.h4}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">{sec.p3}</p>
            </div>
          </div>
        </div>
      )
    } else if (sec.id === 'how-pre-applied-works') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 font-sans">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{sec.h4}</h4>
              <ul className="text-sm space-y-2 text-neutral-600 font-semibold">
                {sec.bullet1 && (
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: sec.bullet1 }} />
                  </li>
                )}
                {sec.bullet2 && (
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: sec.bullet2 }} />
                  </li>
                )}
                {sec.bullet3 && (
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: sec.bullet3 }} />
                  </li>
                )}
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp', index: 2 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp" alt="Pre-applied zipper zone details" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
          </div>
        </div>
      )
    } else if (sec.id === 'startup-moq-digital') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          {sec.h4 && (
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{sec.h4}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-semibold">{sec.p2}</p>
            </div>
          )}
          <div className="grid md:grid-cols-3 gap-4 mt-6 font-sans">
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{sec.card1_title}</h5>
              <p className="text-xs text-black">{sec.card1_desc}</p>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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
    } else if (sec.id === 'freshness-branding-lock') {
      contentNode = (
        <div className="space-y-6">
          <p className="text-neutral-700">{sec.p1}</p>
          <div className="grid md:grid-cols-2 gap-8 items-center font-sans">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp', index: 6 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_achievepack_versatility_9776242.webp" alt="DTC Brand loyalty and packaging freshness" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase font-semibold">{sec.h4}</h4>
              <ul className="text-sm space-y-2 text-neutral-700 font-semibold">
                {sec.bullet1 && <li dangerouslySetInnerHTML={{ __html: sec.bullet1 }} />}
                {sec.bullet2 && <li dangerouslySetInnerHTML={{ __html: sec.bullet2 }} />}
                {sec.bullet3 && <li dangerouslySetInnerHTML={{ __html: sec.bullet3 }} />}
              </ul>
            </div>
          </div>
        </div>
      )
    }

    return {
      id: sec.id,
      title: sec.title,
      icon: sec.id === 'zero-machinery-investment' ? <Sparkles className="h-5 w-5 text-black" /> :
            sec.id === 'how-pre-applied-works' ? <Layers className="h-5 w-5 text-black" /> :
            sec.id === 'startup-moq-digital' ? <Gauge className="h-5 w-5 text-black" /> :
            <ShoppingBag className="h-5 w-5 text-black" />,
      content: contentNode
    }
  })

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []
  const relatedLinks = t(`${p}.relatedLinks`, { returnObjects: true }) as Array<{ title: string; description: string }> || []
  const formattedRelatedLinks = relatedLinks.map(link => {
    let url = '/'
    if (link.title.toLowerCase().includes('compostable')) url = '/materials/compostable'
    else if (link.title.toLowerCase().includes('mono-pe')) url = '/materials/recyclable-mono-pe'
    else if (link.title.toLowerCase().includes('pcr')) url = '/materials/pcr'
    else if (link.title.toLowerCase().includes('stand up')) url = '/packaging/stand-up-pouches'
    else if (link.title.toLowerCase().includes('flat bottom')) url = '/packaging/flat-bottom-bags'
    else if (link.title.toLowerCase().includes('pillow')) url = '/packaging/pillow-bags'
    else if (link.title.toLowerCase().includes('reclosure')) url = '/features/reclosure-options'
    else if (link.title.toLowerCase().includes('barrier')) url = '/features/barrier-options'
    else if (link.title.toLowerCase().includes('surface')) url = '/features/surface-finish'
    else if (link.title.toLowerCase().includes('child-resistant')) url = '/function/child-resistant-bags'
    else if (link.title.toLowerCase().includes('carbon neutral')) url = '/function/carbon-neutral-bags'
    else if (link.title.toLowerCase().includes('snack')) url = '/industry/snacks'
    else if (link.title.toLowerCase().includes('pet food')) url = '/industry/pet-food'
    else if (link.title.toLowerCase().includes('frozen food')) url = '/industry/frozen-food'
    else if (link.title.toLowerCase().includes('certificates')) url = '/company/certificates'
    else if (link.title.toLowerCase().includes('faqs')) url = '/support/faqs'
    return { title: link.title, url, description: link.description }
  })

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title="Pre-Zippered Rollstock | Resealable Film for Startups | POUCH.ECO"
        metaDescription="Upgrade standard packaging into resealable pouches on your existing VFFS/HFFS lines with ZERO equipment investment. Low MOQs from 500-1000m!"
        canonicalUrl="https://pouch.eco/function/pre-zippered-rollstock"
        keywords={['pre-zippered rollstock', 'resealable roll film', 'HFFS VFFS rollstock', 'low MOQ flexible packaging', 'startup roll film']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author="POUCH.ECO Editorial Team"
        heroTitle={
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
              <span>/</span>
              <Link to="/function" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Packaging Functions</Link>
              <span>/</span>
              <span className="bg-[#D4FF00] text-black px-1.5 py-0.5 border border-black font-bold font-semibold">Pre-Zippered Rollstock</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-black text-[#D4FF00] border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold">
                🚀 Zero Machine Capital Required
              </span>
              <Link 
                to="/packaging/stand-up-pouches" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold"
              >
                🔄 View Premade Pouches →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Pre-Zippered<br />
              <span className="text-[#10b981]">Roll Film</span><br />
              Startup Guide
            </h1>
          </div>
        }
        heroSubtitle="Resealable convenience without the expensive machine upgrades. Feed our pre-zippered rollstock directly into your standard HFFS/VFFS form-fill benders and generate gorgeous zipper pouches on day one."
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt="POUCH.ECO pre-zippered rollstock film guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="8 min read"
        sections={b2cSections}
        ctaTitle={t(`${p}.secCtaTitle`)}
        ctaDescription={t(`${p}.secCtaTitleBox`)}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/pre-zippered-rollstock"
        achievePackText="Need enterprise-level volume discounts or heavy B2B chemical compliant specs?"
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
        canonicalUrl="https://achievepack.com/function/pre-zippered-rollstock"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt="Achieve Pack Pre-Zippered Rollstock"
        introSummary={t(`${p}.secIntroDesc`)}
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
          <img src={galleryEnlarged.src} alt={rollstockGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{rollstockGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{rollstockGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {rollstockGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PreZipperedRollstockPage
