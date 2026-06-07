import React, { useState } from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap, Award, ChevronDown, ChevronLeft, ChevronRight, X, Heart, HelpCircle, Sparkles, MessageCircle, BookOpen, Target, Calendar, Phone, Mail, Factory, BarChart3, ArrowLeftRight, ShoppingBag, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'

const StandUpPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.standUpPouches'

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const supPhotoGallery = [
    { src: '/imgs/pouch-shape/achieve-pack-sup-hero.png', title: t(`${p}.gallery.item1Title`), desc: t(`${p}.gallery.item1Desc`) },
    { src: '/imgs/pouch-shape/achieve-pack-sup-lifestyle.png', title: t(`${p}.gallery.item2Title`), desc: t(`${p}.gallery.item2Desc`) },
    { src: '/imgs/pouch-shape/achieve-pack-k-seal.png', title: t(`${p}.gallery.item3Title`), desc: t(`${p}.gallery.item3Desc`) },
    { src: '/imgs/pouch-shape/eco-stand-up-pouch.png', title: t(`${p}.gallery.item4Title`), desc: t(`${p}.gallery.item4Desc`) }
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = supPhotoGallery.length - 1
    if (newIndex >= supPhotoGallery.length) newIndex = 0
    setGalleryEnlarged({ src: supPhotoGallery[newIndex].src, index: newIndex })
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (1): pouch.eco (B2C)
  // ----------------------------------------------------
  if (isPouch()) {
    const b2cFaqs = t(`${p}.b2c.faqs`, { returnObjects: true }) as { q: string; a: string }[]

    return (
      <PouchLayout>
        <DualDomainSEOHead 
          title={t(`${p}.b2c.metaTitle`)}
          description={t(`${p}.b2c.metaDescription`)}
          keywords={t(`${p}.b2c.metaKeywords`, { returnObjects: true }) as string[]}
          schemaType="Product"
        />

        {/* Hero Section */}
        <section className="bg-[#10b981] text-black py-24 px-6 border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-block bg-[#D4FF00] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.b2c.hero.badge`)}
              </div>
              <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl leading-none uppercase tracking-tight">
                {t(`${p}.b2c.hero.titlePart1`)}<br/>
                <span className="text-[#D4FF00] bg-black px-4 py-1 border-4 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                  {t(`${p}.b2c.hero.titlePart2`)}
                </span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                {t(`${p}.b2c.hero.desc`)}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t(`${p}.b2c.hero.btn1`)}
                </NeoButton>
                <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20stand%20up%20pouches" variant="secondary">
                  {t(`${p}.b2c.hero.btn2`)}
                </NeoButton>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="relative border-4 border-black p-4 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/imgs/pouch-shape/achieve-pack-sup-hero.png" 
                  alt="Premium Eco Stand-Up Pouch" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -top-6 -right-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 text-sm">
                  {t(`${p}.b2c.hero.imgBadge`)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Benefits */}
        <section className="py-20 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              {t(`${p}.b2c.bento.titlePre`)} <span className="bg-black text-[#D4FF00] border-2 border-black px-2.5 py-1 inline-block -rotate-1">{t(`${p}.b2c.bento.titleHighlight`)}</span> {t(`${p}.b2c.bento.titlePost`)}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <NeoCard color="bg-[#D4FF00]">
                <Leaf className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.card1Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t(`${p}.b2c.bento.card1Desc`)}
                </p>
              </NeoCard>
              
              <NeoCard color="bg-white">
                <Shield className="w-8 h-8 text-[#10b981] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.card2Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t(`${p}.b2c.bento.card2Desc`)}
                </p>
              </NeoCard>

              <NeoCard color="bg-[#00FFFF]">
                <Package className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.card3Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t(`${p}.b2c.bento.card3Desc`)}
                </p>
              </NeoCard>

              <NeoCard color="bg-black text-[#D4FF00]">
                <Zap className="w-8 h-8 text-[#D4FF00] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t(`${p}.b2c.bento.card4Title`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-white">
                  {t(`${p}.b2c.bento.card4Desc`)}
                </p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* Real-world Product Photo Showcases */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="mb-4">
                <NeoBadge color="magenta">{t(`${p}.b2c.showcase.badge`)}</NeoBadge>
              </div>
              <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl uppercase mt-2 tracking-tight">
                {t(`${p}.b2c.showcase.title`)}
              </h2>
              <p className="font-['JetBrains_Mono'] text-neutral-600 mt-2">
                {t(`${p}.b2c.showcase.desc`)}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {supPhotoGallery.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryEnlarged({ src: photo.src, index: i })}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all text-left w-full group"
                >
                  <div className="aspect-square bg-neutral-100 border-2 border-black overflow-hidden mb-2">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-black text-sm uppercase truncate">{photo.title}</h4>
                  <p className="text-[10px] text-neutral-500 font-['JetBrains_Mono'] truncate mt-1">{photo.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications & Pricing */}
        <section className="py-24 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-12 tracking-tight">
              {t(`${p}.b2c.specs.titlePre`)} <span className="bg-[#D4FF00] text-black border-2 border-black px-2.5 py-1 inline-block -rotate-1">{t(`${p}.b2c.specs.titleHighlight`)}</span>
            </h2>
            <NeoCard color="bg-white" className="!p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-['JetBrains_Mono'] text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-black text-[#D4FF00] border-b-4 border-black">
                      <th className="border-2 border-black p-4 font-black uppercase">{t(`${p}.b2c.specs.header1`)}</th>
                      <th className="border-2 border-black p-4 font-black uppercase">{t(`${p}.b2c.specs.header2`)}</th>
                      <th className="border-2 border-black p-4 font-black uppercase">{t(`${p}.b2c.specs.header3`)}</th>
                      <th className="border-2 border-black p-4 font-black uppercase">{t(`${p}.b2c.specs.header4`)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">70 x 110 + 40mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">20g - 50g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 1.0</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t(`${p}.b2c.specs.row1App`)}</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">100 x 150 + 60mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">50g - 100g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 1.0</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t(`${p}.b2c.specs.row2App`)}</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">120 x 200 + 80mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">100g - 250g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 0.5</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t(`${p}.b2c.specs.row3App`)}</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">150 x 230 + 90mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">250g - 500g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 0.5</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t(`${p}.b2c.specs.row4App`)}</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">180 x 280 + 100mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">500g - 1kg</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 0.1</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t(`${p}.b2c.specs.row5App`)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </NeoCard>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <NeoCard color="bg-[#D4FF00]" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">{t(`${p}.b2c.specs.card1Val`)}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {t(`${p}.b2c.specs.card1Label`)}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.b2c.specs.card1Desc`)}</p>
              </NeoCard>
              <NeoCard color="bg-[#00FFFF]" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">{t(`${p}.b2c.specs.card2Val`)}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {t(`${p}.b2c.specs.card2Label`)}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">{t(`${p}.b2c.specs.card2Desc`)}</p>
              </NeoCard>
              <NeoCard color="bg-[#FF00FF] text-white" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1 text-[#D4FF00]">{t(`${p}.b2c.specs.card3Val`)}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
                  {t(`${p}.b2c.specs.card3Label`)}
                </p>
                <p className="text-[10px] text-neutral-200 mt-1">{t(`${p}.b2c.specs.card3Desc`)}</p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* Global B2C FAQ */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              {t(`${p}.b2c.faq.titlePre`)} <span className="text-[#10b981]">{t(`${p}.b2c.faq.titleHighlight`)}</span>
            </h2>
            <div className="space-y-6">
              {b2cFaqs.map((item, idx) => (
                <NeoCard key={idx} color="bg-[#F0F0F0]/50" className="border-4">
                  <h3 className="font-black text-lg mb-2 uppercase">{item.q}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed">{item.a}</p>
                </NeoCard>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Lightbox */}
        {galleryEnlarged && (
          <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
            <button
              onClick={() => setGalleryEnlarged(null)}
              className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <img
              src={galleryEnlarged.src}
              alt={supPhotoGallery[galleryEnlarged.index]?.title}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
              <p className="font-bold text-lg">{supPhotoGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-sm text-white/80 mt-1 leading-relaxed">{supPhotoGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {supPhotoGallery.length}</p>
            </div>
          </div>
        )}
      </PouchLayout>
    )
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (2): achievepack.com (B2B)
  // ----------------------------------------------------

  const breadcrumbs = [
    { label: t('seoPages.breadcrumbs.home'), url: '/' },
    { label: t('seoPages.breadcrumbs.packagingShapes'), url: '/store' },
    { label: t(`${p}.b2b.breadcrumbs.currentPage`), url: '/packaging/stand-up-pouches' }
  ]

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.b2b.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            {t(`${p}.b2b.sections.overview.intro`)}
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-bold text-primary-800 text-lg mb-2">{t(`${p}.b2b.sections.overview.listTitle`)}</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                {(t(`${p}.b2b.sections.overview.listItems`, { returnObjects: true }) as string[]).map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            <div>
              <ClickableImage 
                src="/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" 
                alt="Achieve Pack custom stand-up pouches wholesale direct supplier" 
                className="w-full rounded-lg shadow-md border border-neutral-100"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.b2b.sections.specifications.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.b2b.sections.specifications.intro`)}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden border border-neutral-200">
              <thead>
                <tr className="bg-primary-600 text-white font-semibold">
                  <th className="p-3">{t(`${p}.b2b.sections.specifications.th1`)}</th>
                  <th className="p-3">{t(`${p}.b2b.sections.specifications.th2`)}</th>
                  <th className="p-3">{t(`${p}.b2b.sections.specifications.th3`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">{t(`${p}.b2b.sections.specifications.row1Col1`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row1Col2`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row1Col3`)}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-900">{t(`${p}.b2b.sections.specifications.row2Col1`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row2Col2`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row2Col3`)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">{t(`${p}.b2b.sections.specifications.row3Col1`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row3Col2`)}</td>
                  <td className="p-3" dangerouslySetInnerHTML={{ __html: t(`${p}.b2b.sections.specifications.row3Col3`) }} />
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-900">{t(`${p}.b2b.sections.specifications.row4Col1`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row4Col2`)}</td>
                  <td className="p-3">{t(`${p}.b2b.sections.specifications.row4Col3`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.b2b.sections.applications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.b2b.sections.applications.intro`)}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-amber-200 bg-amber-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-amber-900 mb-2">{t(`${p}.b2b.sections.applications.card1Title`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {t(`${p}.b2b.sections.applications.card1Desc`)}
              </p>
              <span className="text-[10px] bg-white text-amber-700 border border-amber-300 px-2 py-0.5 rounded font-semibold">
                {t(`${p}.b2b.sections.applications.card1Badge`)}
              </span>
            </div>
            <div className="border border-green-200 bg-green-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">{t(`${p}.b2b.sections.applications.card2Title`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {t(`${p}.b2b.sections.applications.card2Desc`)}
              </p>
              <span className="text-[10px] bg-white text-green-700 border border-green-300 px-2 py-0.5 rounded font-semibold">
                {t(`${p}.b2b.sections.applications.card2Badge`)}
              </span>
            </div>
            <div className="border border-blue-200 bg-blue-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">{t(`${p}.b2b.sections.applications.card3Title`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {t(`${p}.b2b.sections.applications.card3Desc`)}
              </p>
              <span className="text-[10px] bg-white text-blue-700 border border-blue-300 px-2 py-0.5 rounded font-semibold">
                {t(`${p}.b2b.sections.applications.card3Badge`)}
              </span>
            </div>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.b2b.sections.applications.spotlightTitle`)}</h4>
              <p className="text-sm text-neutral-600 mb-3" dangerouslySetInnerHTML={{ __html: t(`${p}.b2b.sections.applications.spotlightDesc`) }} />
              <Link to="/knowledge/k-seal-stand-up-pouches" className="inline-flex items-center gap-1 text-primary-700 font-bold hover:underline text-xs">
                {t(`${p}.b2b.sections.applications.spotlightLink`)}
              </Link>
            </div>
            <div className="w-full md:w-1/4">
              <ClickableImage 
                src="/imgs/pouch-shape/achieve-pack-k-seal.png" 
                alt="Achieve Pack K-seal stand up pouches wholesale" 
                className="w-full rounded-lg bg-white p-2 border border-neutral-100 shadow-sm"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: t(`${p}.b2b.sections.gallery.title`),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 text-sm">
            {t(`${p}.b2b.sections.gallery.intro`)}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {supPhotoGallery.map((photo, i) => (
              <button
                key={i}
                onClick={() => setGalleryEnlarged({ src: photo.src, index: i })}
                className="block text-left w-full border border-neutral-200 rounded-xl p-2 bg-white hover:shadow-md transition cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral-50 mb-2">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                </div>
                <h5 className="font-bold text-xs text-neutral-800 truncate">{photo.title}</h5>
                <p className="text-[10px] text-neutral-500 truncate mt-0.5">{photo.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.b2b.faqs`, { returnObjects: true }) as { question: string; answer: string }[]
  const tables = t(`${p}.b2b.tables`, { returnObjects: true }) as any[]
  const relatedLinks = t(`${p}.b2b.relatedLinks`, { returnObjects: true }) as { title: string; url: string; description: string }[]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#166534"
        title={t(`${p}.b2b.metaTitle`)}
        description={t(`${p}.b2b.metaDescription`)}
        canonicalUrl="https://achievepack.com/packaging/stand-up-pouches"
        heroTitle={t(`${p}.b2b.heroTitle`)}
        heroSubtitle={t(`${p}.b2b.heroSubtitle`)}
        introSummary={t(`${p}.b2b.introSummary`)}
        heroImage="/imgs/pouch-shape/achieve-pack-sup-hero.png"
        sections={sections}
        keywords={t(`${p}.b2b.metaKeywords`, { returnObjects: true }) as string[]}
        schemaType="Product"
        faqs={faqs}
        tables={tables}
        relatedLinks={relatedLinks}
        breadcrumbs={breadcrumbs}
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={supPhotoGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
            <p className="font-bold text-lg">{supPhotoGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/80 mt-1 leading-relaxed">{supPhotoGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {supPhotoGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default StandUpPouchesPage
