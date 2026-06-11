import React, { useState } from 'react'
import { Beaker, Layers, Settings, Award, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Droplets, Zap, ClipboardCheck, Factory, FileCheck, FlaskConical, Microscope, Package, Lock, Repeat, Truck, Globe, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const WireClosureBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  const { t } = useTranslation()
  const p = 'seoPages.pages.wireClosure'

  const wireClosureGallery = [
    { src: '/imgs/lab/wire/hero.webp', title: t(`${p}.gallery.0.title`), desc: t(`${p}.gallery.0.desc`) },
    { src: '/imgs/lab/wire/a_wire_closure_white_0753579.webp', title: t(`${p}.gallery.1.title`), desc: t(`${p}.gallery.1.desc`) },
    { src: '/imgs/lab/wire/a_fill_fold_twist_process_1762470.webp', title: t(`${p}.gallery.2.title`), desc: t(`${p}.gallery.2.desc`) },
    { src: '/imgs/lab/wire/a_wire_closure_instruction_updated_step4_4834864.webp', title: t(`${p}.gallery.3.title`), desc: t(`${p}.gallery.3.desc`) },
    { src: '/imgs/lab/wire/a_comparison_conventional_vs_wire_8193900.webp', title: t(`${p}.gallery.4.title`), desc: t(`${p}.gallery.4.desc`) },
    { src: '/imgs/lab/wire/a_achieve_pack_tear_resistant_detail_9877739.webp', title: t(`${p}.gallery.5.title`), desc: t(`${p}.gallery.5.desc`) },
    { src: '/imgs/lab/wire/a_achieve_pack_sterilization_process_2713430.webp', title: t(`${p}.gallery.6.title`), desc: t(`${p}.gallery.6.desc`) },
    { src: '/imgs/lab/wire/clean-room-production.webp', title: t(`${p}.gallery.7.title`), desc: t(`${p}.gallery.7.desc`) },
    { src: '/imgs/lab/wire/a_brand_wire_closure_summary_1900843.webp', title: t(`${p}.gallery.8.title`), desc: t(`${p}.gallery.8.desc`) },
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = wireClosureGallery.length - 1
    if (newIndex >= wireClosureGallery.length) newIndex = 0
    setGalleryEnlarged({ src: wireClosureGallery[newIndex].src, index: newIndex })
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
            image="/imgs/lab/wire/hero.webp"
            imageAlt="AchievePack Wire Closure Blender Bags Hero"
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
      id: 'wire-technology',
      title: t(`${p}.secWireTitle`),
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_wire_closure_white_0753579.webp"
            imageAlt="Wire Closure Superior Seal Technology"
            title={t(`${p}.secWireAltTitle`)}
            titleCn={t(`${p}.secWireAltTitleCn`)}
            content={t(`${p}.secWireAltContent`)}
            contentCn={t(`${p}.secWireAltContentCn`)}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Lock className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secWireCardTitle1`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secWireCardDesc1`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secWireCardDesc1Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Settings className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secWireCardTitle2`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secWireCardDesc2`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secWireCardDesc2Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Repeat className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secWireCardTitle3`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secWireCardDesc3`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secWireCardDesc3Cn`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sealing-process',
      title: t(`${p}.secSealingTitle`),
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_fill_fold_twist_process_1762470.webp"
            imageAlt="Fill Fold Twist Sealing Process"
            title={t(`${p}.secSealingAltTitle1`)}
            titleCn={t(`${p}.secSealingAltTitle1Cn`)}
            content={t(`${p}.secSealingAltContent1`)}
            contentCn={t(`${p}.secSealingAltContent1Cn`)}
            imageLeft={true}
            index={2}
          />
          
          <AlternatingSection
            image="/imgs/lab/wire/a_wire_closure_instruction_updated_step4_4834864.webp"
            imageAlt="Step-by-Step Sealing Instructions"
            title={t(`${p}.secSealingAltTitle2`)}
            titleCn={t(`${p}.secSealingAltTitle2Cn`)}
            content={t(`${p}.secSealingAltContent2`)}
            contentCn={t(`${p}.secSealingAltContent2Cn`)}
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'comparison',
      title: t(`${p}.secCompareTitle`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_comparison_conventional_vs_wire_8193900.webp"
            imageAlt="Conventional Tie vs Wire Closure Comparison"
            title={t(`${p}.secCompareAltTitle`)}
            titleCn={t(`${p}.secCompareAltTitleCn`)}
            content={t(`${p}.secCompareAltContent`)}
            contentCn={t(`${p}.secCompareAltContentCn`)}
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">{t(`${p}.secCompareCardTitle1`)}</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 text-red-500" /> {t(`${p}.secCompareCardBullet1`)}</li>
                <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 text-red-500" /> {t(`${p}.secCompareCardBullet2`)}</li>
                <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 text-red-500" /> {t(`${p}.secCompareCardBullet3`)}</li>
              </ul>
              <p className="text-xs text-red-600 mt-3">{t(`${p}.secCompareCardDesc1Cn`)}</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">{t(`${p}.secCompareCardTitle2`)}</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500" /> {t(`${p}.secCompareCardBullet4`)}</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500" /> {t(`${p}.secCompareCardBullet5`)}</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500" /> {t(`${p}.secCompareCardBullet6`)}</li>
              </ul>
              <p className="text-xs text-green-600 mt-3">{t(`${p}.secCompareCardDesc2Cn`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'film-quality',
      title: t(`${p}.secFilmTitle`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_achieve_pack_tear_resistant_detail_9877739.webp"
            imageAlt="Tear-resistant Film Detail"
            title={t(`${p}.secFilmAltTitle`)}
            titleCn={t(`${p}.secFilmAltTitleCn`)}
            content={t(`${p}.secFilmAltContent`)}
            contentCn={t(`${p}.secFilmAltContentCn`)}
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secFilmCard1`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secFilmCardSub1`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Shield className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secFilmCard2`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secFilmCardSub2`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Sparkles className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secFilmCard3`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secFilmCardSub3`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Zap className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t(`${p}.secFilmCard4`)}</h4>
              <p className="text-xs text-neutral-500">{t(`${p}.secFilmCardSub4`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sterilization',
      title: t(`${p}.secSterilityTitle`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_achieve_pack_sterilization_process_2713430.webp"
            imageAlt="Gamma Sterilization Process"
            title={t(`${p}.secSterilityAltTitle`)}
            titleCn={t(`${p}.secSterilityAltTitleCn`)}
            content={t(`${p}.secSterilityAltContent`)}
            contentCn={t(`${p}.secSterilityAltContentCn`)}
            imageLeft={true}
            index={6}
          />
          
          <AlternatingSection
            image="/imgs/lab/wire/clean-room-production.webp"
            imageAlt="Clean Room Production Environment"
            title={t(`${p}.secCleanTitle`)}
            titleCn={t(`${p}.secCleanTitleCn`)}
            content={t(`${p}.secCleanContent`)}
            contentCn={t(`${p}.secCleanContentCn`)}
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'transport',
      title: t(`${p}.secTransportTitle`),
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">{t(`${p}.secTransportH3`)}</h3>
            <p className="text-green-700 mb-3">
              {t(`${p}.secTransportP1`)}
            </p>
            <p className="text-green-600 text-sm">
              {t(`${p}.secTransportP1Cn`)}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secTransportCard1`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secTransportCardSub1`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secTransportCardDesc1Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secTransportCard2`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secTransportCardSub2`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secTransportCardDesc2Cn`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <CheckCircle className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">{t(`${p}.secTransportCard3`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.secTransportCardSub3`)}</p>
              <p className="text-xs text-blue-600 mt-1">{t(`${p}.secTransportCardDesc3Cn`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.secAppsTitle`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_brand_wire_closure_summary_1900843.webp"
            imageAlt="Wire Closure Brand Summary"
            title={t(`${p}.secAppsAltTitle`)}
            titleCn={t(`${p}.secAppsAltTitleCn`)}
            content={t(`${p}.secAppsAltContent`)}
            contentCn={t(`${p}.secAppsAltContentCn`)}
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-5 gap-3">
            {[
              { icon: <Beaker className="h-5 w-5" />, title: t(`${p}.secAppsGrid.0.title`), titleCn: t(`${p}.secAppsGrid.0.titleCn`) },
              { icon: <FlaskConical className="h-5 w-5" />, title: t(`${p}.secAppsGrid.1.title`), titleCn: t(`${p}.secAppsGrid.1.titleCn`) },
              { icon: <Sparkles className="h-5 w-5" />, title: t(`${p}.secAppsGrid.2.title`), titleCn: t(`${p}.secAppsGrid.2.titleCn`) },
              { icon: <Leaf className="h-5 w-5" />, title: t(`${p}.secAppsGrid.3.title`), titleCn: t(`${p}.secAppsGrid.3.titleCn`) },
              { icon: <Microscope className="h-5 w-5" />, title: t(`${p}.secAppsGrid.4.title`), titleCn: t(`${p}.secAppsGrid.4.titleCn`) },
            ].map((item, i) => (
              <div key={i} className="bg-primary-50 p-3 rounded-lg border border-primary-200 text-center">
                <div className="text-primary-600 mx-auto mb-1 flex justify-center">{item.icon}</div>
                <h4 className="font-medium text-primary-800 text-sm">{item.title}</h4>
                <p className="text-xs text-primary-600">{item.titleCn}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sizes',
      title: t(`${p}.secSizesTitle`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">{t(`${p}.secSizesTh1`)}</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">{t(`${p}.secSizesTh2`)}</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">{t(`${p}.secSizesTh3`)}</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">{t(`${p}.secSizesTh4`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-neutral-50">
                  <td className="border border-neutral-300 px-4 py-3 font-medium">{t(`${p}.secSizesRow1.0`)}</td>
                  <td className="border border-neutral-300 px-4 py-3">{t(`${p}.secSizesRow1.1`)}</td>
                  <td className="border border-neutral-300 px-4 py-3">{t(`${p}.secSizesRow1.2`)}</td>
                  <td className="border border-neutral-300 px-4 py-3 text-sm">{t(`${p}.secSizesRow1.3`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="border border-neutral-300 px-4 py-3 font-medium">{t(`${p}.secSizesRow2.0`)}</td>
                  <td className="border border-neutral-300 px-4 py-3">{t(`${p}.secSizesRow2.1`)}</td>
                  <td className="border border-neutral-300 px-4 py-3">{t(`${p}.secSizesRow2.2`)}</td>
                  <td className="border border-neutral-300 px-4 py-3 text-sm">{t(`${p}.secSizesRow2.3`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="border border-neutral-300 px-4 py-3 font-medium">{t(`${p}.secSizesRow3.0`)}</td>
                  <td className="border border-neutral-300 px-4 py-3">{t(`${p}.secSizesRow3.1`)}</td>
                  <td className="border border-neutral-300 px-4 py-3">{t(`${p}.secSizesRow3.2`)}</td>
                  <td className="border border-neutral-300 px-4 py-3 text-sm">{t(`${p}.secSizesRow3.3`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm" dangerouslySetInnerHTML={{ __html: t(`${p}.secSizesCustom`) }} />
            <p className="text-amber-700 text-xs mt-1">
              {t(`${p}.secSizesCustomCn`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.secCtaTitle`),
      icon: <Mail className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">{t(`${p}.secCtaBoxTitle`)}</h3>
              <p className="text-primary-100 mb-6">{t(`${p}.secCtaBoxDesc`)}</p>
              <p className="text-primary-200 text-sm mb-6">{t(`${p}.secCtaBoxDescCn`)}</p>
              <div className="flex flex-wrap justify-center gap-4">
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
    { title: t(`${p}.relatedLinks.0.title`), url: '/lab/lateral-filter-bags', description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: '/materials/home-compostable', description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: '/materials/industrial-compostable', description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: '/company/certificates', description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: '/company/about', description: t(`${p}.relatedLinks.4.description`) },
    { title: t(`${p}.relatedLinks.5.title`), url: '/company/factory-tour', description: t(`${p}.relatedLinks.5.description`) },
    { title: t(`${p}.relatedLinks.6.title`), url: '/packaging/stand-up-pouches', description: t(`${p}.relatedLinks.6.description`) },
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
        canonicalUrl="https://achievepack.com/lab/wire-closure-bags"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/lab/wire/a_wire_closure_white_0753579.webp"
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
              alt={wireClosureGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{wireClosureGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{wireClosureGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {wireClosureGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WireClosureBagsPage
