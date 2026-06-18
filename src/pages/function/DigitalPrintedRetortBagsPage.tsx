import React, { useState } from 'react'
import { Flame, Shield, Package, Layers, Thermometer, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Zap, Award, Users, Globe, FileCheck, Building2, Sparkles, Printer, Tag, Recycle, Copy, Check, Info, FileText, Leaf, Droplets } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import { useTranslation } from 'react-i18next'

// Gallery images from /imgs/function/retort/
const retortGallery = [
  { src: '/imgs/function/retort/retort-hero.webp' },
  { src: '/imgs/function/retort/what-is-retort.webp' },
  { src: '/imgs/function/retort/layers.webp' },
  { src: '/imgs/function/retort/high-temp.webp' },
  { src: '/imgs/function/retort/barrier.webp' },
  { src: '/imgs/function/retort/stront-seals.webp' },
  { src: '/imgs/function/retort/ready-to-heat.webp' },
  { src: '/imgs/function/retort/shelf-stable.webp' },
  { src: '/imgs/function/retort/more-meals.webp' },
  { src: '/imgs/function/retort/custom-retort.webp' },
  { src: '/imgs/function/retort/100pcs.webp' },
  { src: '/imgs/function/retort/Full-color digital printing.webp' },
  { src: '/imgs/function/retort/Launch a full flavor line with low MOQ.webp' },
]

const DigitalPrintedRetortBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const isPouchDomain = isPouch()
  const brand = getBrandConfig()
  const p = 'seoPages.pages.digitalPrintedRetortBags'

  // Theme colors
  const primaryThemeColor = isPouchDomain ? '#10b981' : '#8b5cf6' // Green for pouch.eco, Purple for achievepack
  const primaryBtnClass = isPouchDomain 
    ? 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500' 
    : 'bg-violet-600 hover:bg-violet-700 text-white focus:ring-violet-500'

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
      icon: <Flame className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{isPouchDomain ? t(`${p}.sections.intro.highlightPouch`) : t(`${p}.sections.intro.highlightAP`)}</strong>{t(`${p}.sections.intro.highlightDesc`)}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {t(`${p}.sections.intro.desc`)}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/retort/retort-hero.webp"
            imageAlt="High-Barrier Retort Pouches Hero"
            title={t(`${p}.sections.intro.altTitle`)}
            content={t(`${p}.sections.intro.altContent`)}
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'showdown',
      title: t(`${p}.sections.showdown.title`),
      icon: <Layers className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Info className="h-5 w-5" style={{ color: primaryThemeColor }} />
              {t(`${p}.sections.showdown.scienceTitle`)}
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              {t(`${p}.sections.showdown.scienceDesc`)}
            </p>
            <div className="bg-white p-4 rounded-lg border border-neutral-200/80 shadow-sm text-sm">
              <h4 className="font-bold text-neutral-800 mb-1">{t(`${p}.sections.showdown.solutionTitle`)}</h4>
              <p className="text-neutral-600">
                {t(`${p}.sections.showdown.solutionDesc`)}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Glass Jar */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">{t(`${p}.sections.showdown.glassLabel`)}</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">{t(`${p}.sections.showdown.glassTitle`)}</h4>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.sections.showdown.glassDesc`)}</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.sections.showdown.glassItem1`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.sections.showdown.glassItem2`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.sections.showdown.glassItem3`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.sections.showdown.glassItem4`)}</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">{t(`${p}.sections.showdown.glassCostLabel`)}</span>
                <span className="font-bold text-neutral-900">{t(`${p}.sections.showdown.glassCostVal`)}</span>
              </div>
            </div>

            {/* Valve Pouches */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full">{t(`${p}.sections.showdown.valveLabel`)}</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">{t(`${p}.sections.showdown.valveTitle`)}</h4>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.sections.showdown.valveDesc`)}</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.sections.showdown.valveItem1`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.sections.showdown.valveItem2`)}</li>
                  <li className="flex items-center gap-2 text-red-600">{t(`${p}.sections.showdown.valveItem3`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.sections.showdown.valveItem4`)}</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">{t(`${p}.sections.showdown.valveCostLabel`)}</span>
                <span className="font-bold text-neutral-900">{t(`${p}.sections.showdown.valveCostVal`)}</span>
              </div>
            </div>

            {/* VitoPouch */}
            <div className="rounded-xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow border-2 relative overflow-hidden"
                 style={{ borderColor: primaryThemeColor, backgroundColor: isPouchDomain ? 'rgba(16, 185, 129, 0.03)' : 'rgba(139, 92, 246, 0.03)' }}>
              <div className="absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider"
                   style={{ backgroundColor: primaryThemeColor }}>
                {t(`${p}.sections.showdown.vitoLabel`)}
              </div>
              <div>
                <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: primaryThemeColor }}>{t(`${p}.sections.showdown.vitoSubtitle`)}</span>
                <h4 className="font-bold text-lg text-neutral-900 mt-3 mb-2">{t(`${p}.sections.showdown.vitoTitle`)}</h4>
                <p className="text-xs text-neutral-500 mb-4">{t(`${p}.sections.showdown.vitoDesc`)}</p>
                <ul className="space-y-2.5 text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.sections.showdown.vitoItem1`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.sections.showdown.vitoItem2`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.sections.showdown.vitoItem3`)}</li>
                  <li className="flex items-center gap-2 text-emerald-600">{t(`${p}.sections.showdown.vitoItem4`)}</li>
                </ul>
              </div>
              <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-neutral-500">{t(`${p}.sections.showdown.vitoCostLabel`)}</span>
                <span className="font-bold text-neutral-900" style={{ color: primaryThemeColor }}>{t(`${p}.sections.showdown.vitoCostVal`)}</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'what-is-retort',
      title: t(`${p}.sections.whatIsRetort.title`),
      icon: <Shield className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/what-is-retort.webp"
            imageAlt="What Is Retort Packaging"
            title={t(`${p}.sections.whatIsRetort.altTitle`)}
            content={t(`${p}.sections.whatIsRetort.altContent`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <Thermometer className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.whatIsRetort.col1Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.whatIsRetort.col1Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <Package className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.whatIsRetort.col2Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.whatIsRetort.col2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <CheckCircle className="h-5 w-5 mb-2" style={{ color: primaryThemeColor }} />
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.whatIsRetort.col3Title`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.whatIsRetort.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layers',
      title: t(`${p}.sections.layers.title`),
      icon: <Layers className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/layers.webp"
            imageAlt="4-Layer Retort Structure"
            title={t(`${p}.sections.layers.altTitle`)}
            content={t(`${p}.sections.layers.altContent`)}
            imageLeft={true}
            index={2}
          />
          
          <div className="grid grid-cols-4 gap-3 mt-6">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">{t(`${p}.sections.layers.petTitle`)}</div>
              <p className="text-[10px] text-gray-600">{t(`${p}.sections.layers.petDesc`)}</p>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">{t(`${p}.sections.layers.alTitle`)}</div>
              <p className="text-[10px] text-gray-600">{t(`${p}.sections.layers.alDesc`)}</p>
            </div>
            <div className="bg-gray-300 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800 text-sm">{t(`${p}.sections.layers.nyTitle`)}</div>
              <p className="text-[10px] text-gray-600">{t(`${p}.sections.layers.nyDesc`)}</p>
            </div>
            <div className="bg-neutral-100 p-3 rounded-lg text-center border" style={{ borderColor: primaryThemeColor }}>
              <div className="font-bold text-sm" style={{ color: primaryThemeColor }}>{t(`${p}.sections.layers.cppTitle`)}</div>
              <p className="text-[10px] text-neutral-600">{t(`${p}.sections.layers.cppDesc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'high-temp',
      title: t(`${p}.sections.highTemp.title`),
      icon: <Thermometer className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/high-temp.webp"
            imageAlt="High-Temperature Sterilization Ready"
            title={t(`${p}.sections.highTemp.altTitle`)}
            content={t(`${p}.sections.highTemp.altContent`)}
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'barrier',
      title: t(`${p}.sections.barrier.title`),
      icon: <Shield className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/barrier.webp"
            imageAlt="Extreme Barrier Protection"
            title={t(`${p}.sections.barrier.altTitle`)}
            content={t(`${p}.sections.barrier.altContent`)}
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'seals',
      title: t(`${p}.sections.seals.title`),
      icon: <CheckCircle className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/stront-seals.webp"
            imageAlt="Strong Hermetic Seals"
            title={t(`${p}.sections.seals.altTitle`)}
            content={t(`${p}.sections.seals.altContent`)}
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'convenience',
      title: t(`${p}.sections.convenience.title`),
      icon: <Zap className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/ready-to-heat.webp"
            imageAlt="Ready-to-Heat Convenience Features"
            title={t(`${p}.sections.convenience.altTitle`)}
            content={t(`${p}.sections.convenience.altContent`)}
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'shelf-stable',
      title: t(`${p}.sections.shelfStable.title`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/shelf-stable.webp"
            imageAlt="Shelf-Stable Ready Meals"
            title={t(`${p}.sections.shelfStable.altTitle`)}
            content={t(`${p}.sections.shelfStable.altContent`)}
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'logistics',
      title: t(`${p}.sections.logistics.title`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/more-meals.webp"
            imageAlt="More Meals Per Pallet"
            title={t(`${p}.sections.logistics.altTitle`)}
            content={t(`${p}.sections.logistics.altContent`)}
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'low-moq',
      title: t(`${p}.sections.lowMoq.title`),
      icon: <Tag className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/100pcs.webp"
            imageAlt="100 pcs Low MOQ"
            title={t(`${p}.sections.lowMoq.altTitle`)}
            content={t(`${p}.sections.lowMoq.altContent`)}
            imageLeft={false}
            index={10}
          />
          
          <div className="p-6 rounded-xl border text-center shadow-sm" 
               style={{ borderColor: primaryThemeColor, backgroundColor: isPouchDomain ? 'rgba(16, 185, 129, 0.05)' : 'rgba(139, 92, 246, 0.05)' }}>
            <div className="text-4xl font-extrabold mb-2" style={{ color: primaryThemeColor }}>{t(`${p}.sections.lowMoq.box1Title`)}</div>
            <p className="font-bold text-neutral-800">{t(`${p}.sections.lowMoq.box1Desc`)}</p>
            <p className="text-sm text-neutral-600 mt-2">{t(`${p}.sections.lowMoq.box1Info`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'digital-print',
      title: t(`${p}.sections.digitalPrint.title`),
      icon: <Printer className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Full-color digital printing.webp"
            imageAlt="Full-Color Digital Printing"
            title={t(`${p}.sections.digitalPrint.altTitle`)}
            content={t(`${p}.sections.digitalPrint.altContent`)}
            imageLeft={true}
            index={11}
          />
        </div>
      )
    },
    {
      id: 'multi-sku',
      title: t(`${p}.sections.multiSku.title`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Launch a full flavor line with low MOQ.webp"
            imageAlt="Low MOQ for Many SKUs"
            title={t(`${p}.sections.multiSku.altTitle`)}
            content={t(`${p}.sections.multiSku.altContent`)}
            imageLeft={false}
            index={12}
          />
        </div>
      )
    },
    {
      id: 'custom-system',
      title: t(`${p}.sections.customSystem.title`),
      icon: <Package className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/custom-retort.webp"
            imageAlt="Design Your Custom Retort System"
            title={t(`${p}.sections.customSystem.altTitle`)}
            content={t(`${p}.sections.customSystem.altContent`)}
            imageLeft={true}
            index={9}
          />
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-4">{t(`${p}.sections.customSystem.stepsTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>1</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{t(`${p}.sections.customSystem.step1Title`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.customSystem.step1Desc`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>2</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{t(`${p}.sections.customSystem.step2Title`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.customSystem.step2Desc`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: primaryThemeColor }}>3</div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">{t(`${p}.sections.customSystem.step3Title`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.customSystem.step3Desc`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t(`${p}.sections.trustEeat.title`),
      icon: <Award className="h-5 w-5" style={{ color: primaryThemeColor }} />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.sections.trustEeat.title`)}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              {t(`${p}.sections.trustEeat.desc1`)}
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {t(`${p}.sections.trustEeat.desc2`)}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <FileCheck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.sections.trustEeat.col1Title`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.sections.trustEeat.col1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.sections.trustEeat.col2Title`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.sections.trustEeat.col2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.sections.trustEeat.col3Title`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.sections.trustEeat.col3Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-2 text-amber-600" />
              <h4 className="font-bold text-neutral-900 text-sm">{t(`${p}.sections.trustEeat.col4Title`)}</h4>
              <p className="text-[10px] text-neutral-500">{t(`${p}.sections.trustEeat.col4Desc`)}</p>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.trustEeat.exploreTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <Recycle className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkMonoPe`)}
              </Link>
              <Link to="/materials/pcr" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <CheckCircle className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkPcr`)}
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <Shield className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkBarrier`)}
              </Link>
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <Leaf className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkCompostable`)}
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <Package className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkStandUp`)}
              </Link>
              <Link to="/packaging/flat-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <FileText className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkFlatPouches`)}
              </Link>
              <Link to="/packaging/spout-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <Droplets className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkSpoutPouches`)}
              </Link>
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <X className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkReclosure`)}
              </Link>
              <Link to="/printing/digital-printing" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 text-xs">
                <Printer className="h-3.5 w-3.5" /> {t(`${p}.sections.trustEeat.linkPrinting`)}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('common.cta.title', 'Ready to Get Started?'),
      icon: <Flame className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-8 rounded-xl border border-neutral-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('common.cta.connectHeader', "Choose How You'd Like to Connect")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg text-center border border-white/10 hover:border-white/20 transition">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-neutral-300" />
              <h4 className="font-semibold mb-2">{t('common.cta.bookConsultation', 'Book a Consultation')}</h4>
              <p className="text-xs text-white/60 mb-4">{t('common.cta.freeSession', '30-min free session with our engineering team')}</p>
              <button 
                onClick={openCalendly} 
                className="w-full bg-white text-neutral-900 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition cursor-pointer"
              >
                {t('common.cta.scheduleFreeCall', 'Schedule Free Call')}
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg text-center border border-white/10 hover:border-white/20 transition">
              <Mail className="h-8 w-8 mx-auto mb-3 text-neutral-300" />
              <h4 className="font-semibold mb-2">{t('common.cta.requestInstantQuote', 'Request an Instant Quote')}</h4>
              <p className="text-xs text-white/60 mb-4">{t('common.cta.sendDimensions', 'Send dimensions and get detailed pricing breaks')}</p>
              <a 
                href={`mailto:${brand.email}?subject=Digital Printed Retort Pouch Quote - VitoPouch`} 
                className="block w-full py-2.5 rounded-lg text-sm font-semibold text-center border border-white/30 hover:border-white/50 text-white transition"
              >
                {t('common.cta.sendEmail', 'Send Email')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [0, 1, 2, 3, 4, 5].map(idx => ({
    question: t(`${p}.faqs.${idx}.q`),
    answer: t(`${p}.faqs.${idx}.a`)
  }))

  const relatedLinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => ({
    title: t(`${p}.relatedLinks.${idx}.title`),
    url: t(`${p}.relatedLinks.${idx}.url`),
    description: t(`${p}.relatedLinks.${idx}.description`)
  }))

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#171717"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['retort pouches', 'retort bags', 'digital printed pouches', 'sterilization pouches', 'ready meal packaging', 'baby food pouches', 'pet food bags', 'shelf stable packaging', 'high barrier pouches', 'low MOQ pouches', 'aluminum foil pouches', 'vitopouch', 'kimchi pouch', 'soft can packaging']}
        canonicalUrl="https://achievepack.com/function/digital-printed-retort-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={isPouchDomain ? t(`${p}.heroSubtitlePouch`) : t(`${p}.heroSubtitleAP`)}
        heroImage="/imgs/function/retort/retort-hero.webp"
        heroImageAlt={t(`${p}.heroImageAlt`)}
        introSummary={isPouchDomain ? t(`${p}.introSummaryPouch`) : t(`${p}.introSummaryAP`)}
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2 bg-white/5 rounded-full">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img src={galleryEnlarged.src} alt={t(`${p}.gallery.${galleryEnlarged.index}.title`) || 'Enlarged view'} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2 bg-white/5 rounded-full">
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-6 text-center text-white max-w-xl px-4 bg-black/50 backdrop-blur-md py-2.5 rounded-xl">
            <p className="text-base font-semibold">{t(`${p}.gallery.${galleryEnlarged.index}.title`)}</p>
            <p className="text-xs text-neutral-300 mt-1">{t(`${p}.gallery.${galleryEnlarged.index}.desc`)}</p>
            <p className="text-[10px] mt-2 text-neutral-400 font-semibold">{galleryEnlarged.index + 1} / {retortGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DigitalPrintedRetortBagsPage
