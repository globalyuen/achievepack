import React, { useState } from 'react'
import { Flame, Shield, Package, Layers, Thermometer, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Zap, Award, Users, Globe, FileCheck, Building2, Sparkles, Printer, Tag, Info } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import { useTranslation } from 'react-i18next'

const DigitalPrintedRetortBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const isPouchDomain = isPouch()
  const brand = getBrandConfig()
  const { t } = useTranslation()
  const p = 'seoPages.pages.digitalRetort'

  const retortGallery = [
    { src: '/imgs/function/retort/retort-hero.webp', title: t(`${p}.gallery.0.title`), desc: t(`${p}.gallery.0.desc`) },
    { src: '/imgs/function/retort/what-is-retort.webp', title: t(`${p}.gallery.1.title`), desc: t(`${p}.gallery.1.desc`) },
    { src: '/imgs/function/retort/layers.webp', title: t(`${p}.gallery.2.title`), desc: t(`${p}.gallery.2.desc`) },
    { src: '/imgs/function/retort/high-temp.webp', title: t(`${p}.gallery.3.title`), desc: t(`${p}.gallery.3.desc`) },
    { src: '/imgs/function/retort/barrier.webp', title: t(`${p}.gallery.4.title`), desc: t(`${p}.gallery.4.desc`) },
    { src: '/imgs/function/retort/stront-seals.webp', title: t(`${p}.gallery.5.title`), desc: t(`${p}.gallery.5.desc`) },
    { src: '/imgs/function/retort/ready-to-heat.webp', title: t(`${p}.gallery.6.title`), desc: t(`${p}.gallery.6.desc`) },
    { src: '/imgs/function/retort/shelf-stable.webp', title: t(`${p}.gallery.7.title`), desc: t(`${p}.gallery.7.desc`) },
    { src: '/imgs/function/retort/more-meals.webp', title: t(`${p}.gallery.8.title`), desc: t(`${p}.gallery.8.desc`) },
    { src: '/imgs/function/retort/custom-retort.webp', title: t(`${p}.gallery.9.title`), desc: t(`${p}.gallery.9.desc`) },
    { src: '/imgs/function/retort/100pcs.webp', title: t(`${p}.gallery.10.title`), desc: t(`${p}.gallery.10.desc`) },
    { src: '/imgs/function/retort/Full-color digital printing.webp', title: t(`${p}.gallery.11.title`), desc: t(`${p}.gallery.11.desc`) },
    { src: '/imgs/function/retort/Launch a full flavor line with low MOQ.webp', title: t(`${p}.gallery.12.title`), desc: t(`${p}.gallery.12.desc`) },
  ]

  // Theme colors
  const primaryThemeColor = isPouchDomain ? '#10b981' : '#8b5cf6' // Green for pouch.eco, Purple for achievepack

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = retortGallery.length - 1
    if (newIndex >= retortGallery.length) newIndex = 0
    setGalleryEnlarged({ src: retortGallery[newIndex].src, index: newIndex })
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
            <p className="text-sm font-medium" style={{ color: primaryThemeColor }}>{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm font-medium" style={{ color: primaryThemeColor }}>{titleCn}</p>
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
      icon: <Flame className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{isPouchDomain ? t(`${p}.secIntroPouchText`) : t(`${p}.secIntroApText`)}</strong> — {t(`${p}.secIntroSummary`)}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {t(`${p}.secIntroSummaryCn`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/retort/retort-hero.webp"
            imageAlt="High-Barrier Retort Pouches Hero"
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
      id: 'showdown',
      title: t(`${p}.secShowdownTitle`),
      icon: <Layers className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Info className="h-5 w-5" style={{ color: primaryThemeColor }} />
              {t(`${p}.secShowdownH3`)}
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              {t(`${p}.secShowdownP1`)}
            </p>
            <div className="bg-white p-4 rounded-lg border border-neutral-200/80 shadow-sm text-sm">
              <h4 className="font-bold text-neutral-800 mb-1">{t(`${p}.secShowdownSolTitle`)}</h4>
              <p className="text-neutral-600" dangerouslySetInnerHTML={{ __html: t(`${p}.secShowdownSolDesc`) }} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Glass Jar */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">{t(`${p}.glassJarBadge`)}</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">{t(`${p}.glassJarTitle`)}</h4>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.glassJarDesc`)}</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.glassJarBullet1`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.glassJarBullet2`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.glassJarBullet3`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.glassJarBullet4`)}</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">{t(`${p}.glassJarCostBallpark`)}</span>
              </div>
            </div>

            {/* Valve Pouches */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full">{t(`${p}.valvePouchBadge`)}</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">{t(`${p}.valvePouchTitle`)}</h4>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.valvePouchDesc`)}</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.valvePouchBullet1`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.valvePouchBullet2`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.valvePouchBullet3`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.valvePouchBullet4`)}</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">{t(`${p}.valvePouchCostBallpark`)}</span>
              </div>
            </div>

            {/* VitoPouch */}
            <div className="rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow border-2 relative overflow-hidden"
                 style={{ borderColor: primaryThemeColor, backgroundColor: isPouchDomain ? 'rgba(16, 185, 129, 0.03)' : 'rgba(139, 92, 246, 0.03)' }}>
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider"
                   style={{ backgroundColor: primaryThemeColor }}>
                {t(`${p}.vitoBadge`)}
              </div>
              <div>
                <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: primaryThemeColor }}>{t(`${p}.vitoTag`)}</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">{t(`${p}.vitoTitle`)}</h4>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.vitoDesc`)}</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-emerald-600" dangerouslySetInnerHTML={{ __html: t(`${p}.vitoBullet1`) }} />
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.vitoBullet2`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.vitoBullet3`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.vitoBullet4`)}</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="font-bold" style={{ color: primaryThemeColor }}>{t(`${p}.vitoCostBallpark`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'what-is-retort',
      title: t(`${p}.secWhatIsTitle`),
      icon: <Shield className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/what-is-retort.webp"
            imageAlt="What Is Retort Packaging"
            title={t(`${p}.secWhatIsAltTitle`)}
            titleCn={t(`${p}.secWhatIsAltTitleCn`)}
            content={t(`${p}.secWhatIsAltContent`)}
            contentCn={t(`${p}.secWhatIsAltContentCn`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <Thermometer className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secWhatIsPoint1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secWhatIsPoint1Sub`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <Package className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secWhatIsPoint2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secWhatIsPoint2Sub`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <CheckCircle className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.secWhatIsPoint3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secWhatIsPoint3Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layers',
      title: t(`${p}.secLayersTitle`),
      icon: <Layers className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/layers.webp"
            imageAlt="4-Layer Retort Structure"
            title={t(`${p}.secLayersAltTitle`)}
            titleCn={t(`${p}.secLayersAltTitleCn`)}
            content={t(`${p}.secLayersAltContent`)}
            contentCn={t(`${p}.secLayersAltContentCn`)}
            imageLeft={true}
            index={2}
          />
          
          <div className="grid grid-cols-4 gap-3 mt-6">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">{t(`${p}.secLayersPet`)}</div>
              <p className="text-[10px] text-gray-600">{t(`${p}.secLayersPetSub`)}</p>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">{t(`${p}.secLayersAl`)}</div>
              <p className="text-[10px] text-gray-600">{t(`${p}.secLayersAlSub`)}</p>
            </div>
            <div className="bg-gray-300 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">{t(`${p}.secLayersNy`)}</div>
              <p className="text-[10px] text-gray-600">{t(`${p}.secLayersNySub`)}</p>
            </div>
            <div className="bg-neutral-100 p-3 rounded-lg text-center border" style={{ borderColor: primaryThemeColor }}>
              <div className="font-bold text-sm" style={{ color: primaryThemeColor }}>{t(`${p}.secLayersCpp`)}</div>
              <p className="text-[10px] text-neutral-600">{t(`${p}.secLayersCppSub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'high-temp',
      title: t(`${p}.secHighTempTitle`),
      icon: <Thermometer className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/high-temp.webp"
            imageAlt="High-Temperature Sterilization Ready"
            title={t(`${p}.secHighTempAltTitle`)}
            titleCn={t(`${p}.secHighTempAltTitleCn`)}
            content={t(`${p}.secHighTempAltContent`)}
            contentCn={t(`${p}.secHighTempAltContentCn`)}
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'barrier',
      title: t(`${p}.secBarrierTitle`),
      icon: <Shield className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/barrier.webp"
            imageAlt="Extreme Barrier Protection"
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
      id: 'seals',
      title: t(`${p}.secSealsTitle`),
      icon: <CheckCircle className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/stront-seals.webp"
            imageAlt="Strong Hermetic Seals"
            title={t(`${p}.secSealsAltTitle`)}
            titleCn={t(`${p}.secSealsAltTitleCn`)}
            content={t(`${p}.secSealsAltContent`)}
            contentCn={t(`${p}.secSealsAltContentCn`)}
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'convenience',
      title: t(`${p}.secConvenienceTitle`),
      icon: <Zap className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/ready-to-heat.webp"
            imageAlt="Ready-to-Heat Convenience Features"
            title={t(`${p}.secConvenienceAltTitle`)}
            titleCn={t(`${p}.secConvenienceAltTitleCn`)}
            content={t(`${p}.secConvenienceAltContent`)}
            contentCn={t(`${p}.secConvenienceAltContentCn`)}
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'shelf-stable',
      title: t(`${p}.secStableTitle`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/shelf-stable.webp"
            imageAlt="Shelf-Stable Ready Meals"
            title={t(`${p}.secStableAltTitle`)}
            titleCn={t(`${p}.secStableAltTitleCn`)}
            content={t(`${p}.secStableAltContent`)}
            contentCn={t(`${p}.secStableAltContentCn`)}
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'logistics',
      title: t(`${p}.secLogisticsTitle`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/more-meals.webp"
            imageAlt="More Meals Per Pallet"
            title={t(`${p}.secLogisticsAltTitle`)}
            titleCn={t(`${p}.secLogisticsAltTitleCn`)}
            content={t(`${p}.secLogisticsAltContent`)}
            contentCn={t(`${p}.secLogisticsAltContentCn`)}
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'low-moq',
      title: t(`${p}.secLowMoqTitle`),
      icon: <Tag className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/100pcs.webp"
            imageAlt="100 pcs Low MOQ"
            title={t(`${p}.secLowMoqAltTitle`)}
            titleCn={t(`${p}.secLowMoqAltTitleCn`)}
            content={t(`${p}.secLowMoqAltContent`)}
            contentCn={t(`${p}.secLowMoqAltContentCn`)}
            imageLeft={false}
            index={10}
          />
          
          <div className="p-6 rounded-xl border text-center shadow-sm" 
               style={{ borderColor: primaryThemeColor, backgroundColor: isPouchDomain ? 'rgba(16, 185, 129, 0.05)' : 'rgba(139, 92, 246, 0.05)' }}>
            <div className="text-4xl font-extrabold mb-2" style={{ color: primaryThemeColor }}>{t(`${p}.secLowMoqStat`)}</div>
            <p className="font-bold text-neutral-800">{t(`${p}.secLowMoqStatTitle`)}</p>
            <p className="text-sm text-neutral-600 mt-2">{t(`${p}.secLowMoqStatDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'digital-print',
      title: t(`${p}.secDigitalTitle`),
      icon: <Printer className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Full-color digital printing.webp"
            imageAlt="Full-Color Digital Printing"
            title={t(`${p}.secDigitalAltTitle`)}
            titleCn={t(`${p}.secDigitalAltTitleCn`)}
            content={t(`${p}.secDigitalAltContent`)}
            contentCn={t(`${p}.secDigitalAltContentCn`)}
            imageLeft={true}
            index={11}
          />
        </div>
      )
    },
    {
      id: 'multi-sku',
      title: t(`${p}.secMultiSkuTitle`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Launch a full flavor line with low MOQ.webp"
            imageAlt="Low MOQ for Many SKUs"
            title={t(`${p}.secMultiSkuAltTitle`)}
            titleCn={t(`${p}.secMultiSkuAltTitleCn`)}
            content={t(`${p}.secMultiSkuAltContent`)}
            contentCn={t(`${p}.secMultiSkuAltContentCn`)}
            imageLeft={false}
            index={12}
          />
        </div>
      )
    },
    {
      id: 'custom-system',
      title: t(`${p}.secCustomTitle`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/custom-retort.webp"
            imageAlt="Design Your Custom Retort System"
            title={t(`${p}.secCustomAltTitle`)}
            titleCn={t(`${p}.secCustomAltTitleCn`)}
            content={t(`${p}.secCustomAltContent`)}
            contentCn={t(`${p}.secCustomAltContentCn`)}
            imageLeft={true}
            index={9}
          />
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-4">{t(`${p}.secCustom3StepsTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>1</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCustomStep1`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.secCustomStep1Sub`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>2</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCustomStep2`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.secCustomStep2Sub`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>3</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{t(`${p}.secCustomStep3`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.secCustomStep3Sub`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t(`${p}.secTrustTitle`),
      icon: <Award className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.secTrustH3`)}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              {t(`${p}.secTrustP1`, { brandName: brand.name })}
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {t(`${p}.secTrustP2`)} <Link to="/pricing" className="text-primary-600 underline hover:text-primary-800">retort pouches</Link> using 100% FDA-compliant, food-safe high-temperature polymers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <FileCheck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.secTrustCard1`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.secTrustCard1Sub`)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.secTrustCard2`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.secTrustCard2Sub`)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.secTrustCard3`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.secTrustCard3Sub`)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-2 text-amber-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.secTrustCard4`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.secTrustCard4Sub`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.secCtaTitle`),
      icon: <Flame className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-8 rounded-xl border border-neutral-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.secCtaTitleBox`)}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg text-center border border-white/10 hover:border-white/20 transition">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-neutral-300" />
              <h4 className="font-semibold mb-2">{t(`${p}.secCtaCard1`)}</h4>
              <p className="text-xs text-white/60 mb-4">{t(`${p}.secCtaCard1Sub`)}</p>
              <button 
                onClick={openCalendly} 
                className="w-full bg-white text-neutral-900 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition cursor-pointer"
              >
                {t(`${p}.secCtaCard1Btn`)}
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg text-center border border-white/10 hover:border-white/20 transition">
              <Mail className="h-8 w-8 mx-auto mb-3 text-neutral-300" />
              <h4 className="font-semibold mb-2">{t(`${p}.secCtaCard2`)}</h4>
              <p className="text-xs text-white/60 mb-4">{t(`${p}.secCtaCard2Sub`)}</p>
              <a 
                href={`mailto:${brand.email}?subject=Digital Printed Retort Pouch Quote - VitoPouch`} 
                className="block w-full py-2.5 rounded-lg text-sm font-semibold text-center border border-white/30 hover:border-white/50 text-white transition"
              >
                {t(`${p}.secCtaCard2Btn`)}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || []
  const relatedLinks = t(`${p}.relatedLinks`, { returnObjects: true }) as Array<{ title: string; description: string }> || []
  const formattedRelatedLinks = relatedLinks.map(link => {
    let url = '/'
    if (link.title.toLowerCase().includes('mono-pe')) url = '/materials/recyclable-mono-pe'
    else if (link.title.toLowerCase().includes('pcr')) url = '/materials/pcr'
    else if (link.title.toLowerCase().includes('high barrier')) url = '/features/barrier-options'
    else if (link.title.toLowerCase().includes('compostable')) url = '/materials/compostable'
    else if (link.title.toLowerCase().includes('stand up')) url = '/packaging/stand-up-pouches'
    else if (link.title.toLowerCase().includes('flat')) url = '/packaging/flat-pouches'
    else if (link.title.toLowerCase().includes('spout')) url = '/packaging/spout-pouches'
    else if (link.title.toLowerCase().includes('barrier')) url = '/features/barrier-options'
    else if (link.title.toLowerCase().includes('reclosure')) url = '/features/reclosure-options'
    else if (link.title.toLowerCase().includes('printing')) url = '/printing/digital-printing'
    return { title: link.title, url, description: link.description }
  })

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#171717"
        title={t(`${p}.metaTitle`)}
        description={t(`${p}.metaDescription`)}
        keywords={t(`${p}.keywords`, { returnObjects: true }) as string[] || []}
        canonicalUrl="https://achievepack.com/function/digital-printed-retort-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={isPouchDomain ? t(`${p}.heroSubtitlePouch`) : t(`${p}.heroSubtitleAp`)}
        heroImage="/imgs/function/retort/retort-hero.webp"
        heroImageAlt="Achieve Pack Digital Printed High-Barrier Retort Pouches"
        introSummary={isPouchDomain ? t(`${p}.introSummaryPouch`) : t(`${p}.introSummaryAp`)}
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2 bg-white/5 rounded-full">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img src={galleryEnlarged.src} alt={retortGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 bg-white/5 rounded-full">
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-6 text-center text-white max-w-xl px-4 bg-black/50 backdrop-blur-md py-2.5 rounded-xl">
            <p className="text-base font-semibold">{retortGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-xs text-neutral-300 mt-1">{retortGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-[10px] mt-2 text-neutral-400 font-semibold">{galleryEnlarged.index + 1} / {retortGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DigitalPrintedRetortBagsPage
