import React, { useState } from 'react'
import { Package, Zap, DollarSign, Settings, Gauge, Layers, ShoppingBag, Award, Users, Globe, FileCheck, Building2, Sparkles, Leaf, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import { useTranslation } from 'react-i18next'

// Gallery images from /imgs/function/roll/
const rollstockGallery = [
  { src: '/imgs/function/roll/hero.webp' },
  { src: '/imgs/function/roll/a_kv2_how_it_works_7440796.webp' },
  { src: '/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp' },
  { src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp' },
  { src: '/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp' },
  { src: '/imgs/function/roll/a_kv6_efficiency_9836360.webp' },
  { src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp' },
  { src: '/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp' },
]

const PreZipperedRollstockPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  const isPouchDomain = getDomain() === 'pouch'
  const p = 'seoPages.pages.preZipperedRollstock'
  
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
      title: t(`${p}.sections.intro.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900">
              <strong>{t(`${p}.sections.intro.highlight`)}</strong> — {t(`${p}.sections.intro.desc`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/roll/hero.webp"
            imageAlt="Achieve Pack Pre-Zippered Rollstock Hero"
            title={t(`${p}.sections.intro.altTitle`)}
            content={t(`${p}.sections.intro.altContent`)}
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.sections.howItWorks.title`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv2_how_it_works_7440796.webp"
            imageAlt="How Pre-Zippered Rollstock Works"
            title={t(`${p}.sections.howItWorks.altTitle`)}
            content={t(`${p}.sections.howItWorks.altContent`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Zap className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.howItWorks.col1Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.howItWorks.col1Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Settings className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.howItWorks.col2Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.howItWorks.col2Desc`)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Package className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.howItWorks.col3Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.howItWorks.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'production-sample',
      title: t(`${p}.sections.productionSample.title`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.sections.productionSample.altTitle`)}</h3>
            <p className="text-neutral-700 mb-6">
              {t(`${p}.sections.productionSample.altContent`)}
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
      title: t(`${p}.sections.zipperDetail.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp"
            imageAlt="Pre-Applied Zipper Zone Detail"
            title={t(`${p}.sections.zipperDetail.altTitle`)}
            content={t(`${p}.sections.zipperDetail.altContent`)}
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'no-equipment',
      title: t(`${p}.sections.noEquipment.title`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv4_no_equipment_5802224.webp"
            imageAlt="No New Equipment Required"
            title={t(`${p}.sections.noEquipment.altTitle`)}
            content={t(`${p}.sections.noEquipment.altContent`)}
            imageLeft={false}
            index={3}
          />
          
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">{t(`${p}.sections.noEquipment.compatibility`)}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-amber-700"><strong>{t(`${p}.sections.noEquipment.vffsTitle`)}</strong></p>
                <p className="text-amber-600">{t(`${p}.sections.noEquipment.vffsDesc`)}</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>{t(`${p}.sections.noEquipment.hffsTitle`)}</strong></p>
                <p className="text-amber-600">{t(`${p}.sections.noEquipment.hffsDesc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-savings',
      title: t(`${p}.sections.costSavings.title`),
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp"
            imageAlt="Cost and Material Savings"
            title={t(`${p}.sections.costSavings.altTitle`)}
            content={t(`${p}.sections.costSavings.altContent`)}
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.costSavings.col1Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.costSavings.col1Desc`)}</p>
              <p className="text-xs text-green-600 mt-1">{t(`${p}.sections.costSavings.col1Desc2`)}</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.costSavings.col2Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.costSavings.col2Desc`)}</p>
              <p className="text-xs text-green-600 mt-1">{t(`${p}.sections.costSavings.col2Desc2`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'efficiency',
      title: t(`${p}.sections.efficiency.title`),
      icon: <Gauge className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv6_efficiency_9836360.webp"
            imageAlt="Production Efficiency and Speed"
            title={t(`${p}.sections.efficiency.altTitle`)}
            content={t(`${p}.sections.efficiency.altContent`)}
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Gauge className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.sections.efficiency.col1Title`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.sections.efficiency.col1Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.sections.efficiency.col2Title`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.sections.efficiency.col2Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Settings className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">{t(`${p}.sections.efficiency.col3Title`)}</h4>
              <p className="text-xs text-blue-600">{t(`${p}.sections.efficiency.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_versatility_9776242.webp"
            imageAlt="Flexible Applications"
            title={t(`${p}.sections.applications.altTitle`)}
            content={t(`${p}.sections.applications.altContent`)}
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🍿</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.sections.applications.snacks`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.snacksDesc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">❄️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.sections.applications.frozen`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.frozenDesc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🐕</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.sections.applications.pet`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.petDesc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥤</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t(`${p}.sections.applications.powders`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.applications.powdersDesc`)}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.sections.applications.pouchStyles`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">{t(`${p}.sections.applications.style1`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">{t(`${p}.sections.applications.style2`)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">{t(`${p}.sections.applications.style3`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consumer-experience',
      title: t(`${p}.sections.consumerExperience.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.sections.consumerExperience.altTitle`)}</h3>
            <p className="text-neutral-700 mb-4">
              {t(`${p}.sections.consumerExperience.altContent`)}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.consumerExperience.col1Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.consumerExperience.col1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.consumerExperience.col2Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.consumerExperience.col2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.consumerExperience.col3Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.consumerExperience.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-system',
      title: t(`${p}.sections.designSystem.title`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp"
            imageAlt="Design Your System with Achieve Pack"
            title={t(`${p}.sections.designSystem.altTitle`)}
            content={t(`${p}.sections.designSystem.altContent`)}
            imageLeft={false}
            index={7}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">{t(`${p}.sections.designSystem.stepsTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">1</div>
                <h5 className="font-medium text-neutral-800">{t(`${p}.sections.designSystem.step1Title`)}</h5>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.designSystem.step1Desc`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">2</div>
                <h5 className="font-medium text-neutral-800">{t(`${p}.sections.designSystem.step2Title`)}</h5>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.designSystem.step2Desc`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">3</div>
                <h5 className="font-medium text-neutral-800">{t(`${p}.sections.designSystem.step3Title`)}</h5>
                <p className="text-sm text-neutral-600">{t(`${p}.sections.designSystem.step3Desc`)}</p>
              </div>
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
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.sections.trustEeat.altTitle`)}</h3>
            <p className="text-neutral-700 mb-4">{t(`${p}.sections.trustEeat.altContent`)}</p>
          </div>
          
          {/* Trust Badges Grid */}
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
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.trustEeat.exploreTitle`)}</h4>
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
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Layers className="h-4 w-4" /> {t(`${p}.sections.trustEeat.linkReclosure`)}
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
      icon: <Package className="h-5 w-5 text-white" />,
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
              <a href="mailto:ryan@achievepack.com?subject=Pre-Zippered Rollstock Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
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

  // Enhanced related links for internal linking SEO
  const relatedLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(idx => ({
    title: t(`${p}.relatedLinks.${idx}.title`),
    url: t(`${p}.relatedLinks.${idx}.url`),
    description: t(`${p}.relatedLinks.${idx}.description`)
  }))

  const b2cSections = [
    {
      id: 'zero-machinery-investment',
      title: t(`${p}.sections.b2cZeroMachinery.title`),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cZeroMachinery.desc1`)}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans font-semibold">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>{t(`${p}.sections.b2cZeroMachinery.calloutTitle`)}</strong>
            </p>
            <p className="text-sm text-neutral-800 leading-relaxed font-semibold">
              {t(`${p}.sections.b2cZeroMachinery.calloutDesc`)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_kv4_no_equipment_5802224.webp" alt="No expensive packaging machinery upgrades required" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-3 font-sans">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t(`${p}.sections.b2cZeroMachinery.adjustmentsTitle`)}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.sections.b2cZeroMachinery.adjustmentsDesc`)}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-pre-applied-works',
      title: t(`${p}.sections.b2cHowPreApplied.title`),
      icon: <Layers className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cHowPreApplied.desc1`)}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 font-sans">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t(`${p}.sections.b2cHowPreApplied.hoodTitle`)}</h4>
              <ul className="text-sm space-y-2 text-neutral-600 font-semibold">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.b2cHowPreApplied.listItem1`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.b2cHowPreApplied.listItem2`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.b2cHowPreApplied.listItem3`)}</span>
                </li>
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
    },
    {
      id: 'startup-moq-digital',
      title: t(`${p}.sections.b2cStartupMoq.title`),
      icon: <Gauge className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cStartupMoq.desc1`)}
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t(`${p}.sections.b2cStartupMoq.hackTitle`)}</h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-semibold">
              {t(`${p}.sections.b2cStartupMoq.hackDesc`)}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t(`${p}.sections.b2cStartupMoq.grid1Title`)}</h5>
              <p className="text-xs text-black">{t(`${p}.sections.b2cStartupMoq.grid1Desc`)}</p>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t(`${p}.sections.b2cStartupMoq.grid2Title`)}</h5>
              <p className="text-xs text-black">{t(`${p}.sections.b2cStartupMoq.grid2Desc`)}</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t(`${p}.sections.b2cStartupMoq.grid3Title`)}</h5>
              <p className="text-xs text-neutral-700">{t(`${p}.sections.b2cStartupMoq.grid3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'freshness-branding-lock',
      title: t(`${p}.sections.b2cFreshnessBranding.title`),
      icon: <ShoppingBag className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.sections.b2cFreshnessBranding.desc1`)}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center font-sans">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp', index: 6 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_achievepack_versatility_9776242.webp" alt="DTC Brand loyalty and packaging freshness" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t(`${p}.clickToEnlarge`)}</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase font-semibold">{t(`${p}.sections.b2cFreshnessBranding.logoTitle`)}</h4>
              <ul className="text-sm space-y-2 text-neutral-700 font-semibold">
                <li>{t(`${p}.sections.b2cFreshnessBranding.listItem1`)}</li>
                <li>{t(`${p}.sections.b2cFreshnessBranding.listItem2`)}</li>
                <li>{t(`${p}.sections.b2cFreshnessBranding.listItem3`)}</li>
              </ul>
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
        canonicalUrl="https://pouch.eco/function/pre-zippered-rollstock"
        keywords={['pre-zippered rollstock', 'resealable roll film', 'HFFS VFFS rollstock', 'low MOQ flexible packaging', 'startup roll film']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author={t(`${p}.b2cAuthor`, 'POUCH.ECO Editorial Team')}
        heroTitle={
          <div className="space-y-4">
            {/* Neo-brutalist Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('common.home', 'Home')}</Link>
              <span>/</span>
              <Link to="/function" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('common.packagingFunctions', 'Packaging Functions')}</Link>
              <span>/</span>
              <span className="bg-[#D4FF00] text-black px-1.5 py-0.5 border border-black font-bold font-semibold">{t(`${p}.heroTitle`)}</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-black text-[#D4FF00] border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold">
                🚀 {t('common.b2cBadgeZeroMachine', 'Zero Machine Capital Required')}
              </span>
              <Link 
                to="/packaging/stand-up-pouches" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold"
              >
                🔄 {t('common.viewPremadePouches', 'View Premade Pouches →')}
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
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt={t(`${p}.b2cHeroImageAlt`)}
        categoryTag="FUNCTION"
        categoryColor="#10b981"
        readTime="4 min read"
        sections={b2cSections}
        ctaTitle={t(`${p}.b2cCtaTitle`)}
        ctaDescription={t(`${p}.b2cCtaDescription`)}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/pre-zippered-rollstock"
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
            image: '/imgs/function/cr/a_hero_child_resistant_bags_2511210.webp'
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
        keywords={['pre-zippered rollstock', 'resealable film', 'VFFS zipper film', 'HFFS resealable', 'pre-applied zipper', 'recloseable packaging', 'snack packaging', 'frozen food packaging', 'pet food bags', 'zipper rollstock', 'resealable pouches', 'flexible packaging film', 'Pre-Zipper Roll Film', 'CanRepeatedSealPackaging']}
        canonicalUrl="https://achievepack.com/function/pre-zippered-rollstock"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt="Achieve Pack Pre-Zippered Rollstock"
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
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{t(`${p}.gallery.${galleryEnlarged.index}.title`)}</p>
            <p className="text-sm text-neutral-300">{t(`${p}.gallery.${galleryEnlarged.index}.desc`)}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PreZipperedRollstockPage
