import React, { useState } from 'react'
import { Tag, Leaf, Shield, Award, Clock, Users, Calendar, Mail, FileCheck, CheckCircle, Star, Sparkles, Truck, Layers, ChevronDown, ChevronLeft, ChevronRight, X, Sparkle, ShoppingBag, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { useTranslation } from 'react-i18next'

const CustomCompostableLabelsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const diagramGallery = [
    { src: '/taobao/compostable-label/eco_friendly_stickers.svg', title: t('seoPages.pages.customCompostableLabels.achievePack.gallery.item1.title'), desc: t('seoPages.pages.customCompostableLabels.achievePack.gallery.item1.desc') },
    { src: '/taobao/compostable-label/compostable-labels-7.jpg', title: t('seoPages.pages.customCompostableLabels.achievePack.gallery.item2.title'), desc: t('seoPages.pages.customCompostableLabels.achievePack.gallery.item2.desc') },
    { src: '/taobao/compostable-label/certifications_applications.svg', title: t('seoPages.pages.customCompostableLabels.achievePack.gallery.item3.title'), desc: t('seoPages.pages.customCompostableLabels.achievePack.gallery.item3.desc') }
  ]

  const photoGallery = [
    { src: '/taobao/compostable-label/compostable-label-cover.jpg', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p1.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p1.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p1.desc') },
    { src: '/taobao/compostable-label/compostable-labels-5.png', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p2.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p2.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p2.desc') },
    { src: '/taobao/compostable-label/compostable-labels-6.png', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p3.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p3.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p3.desc') },
    { src: '/taobao/compostable-label/compostable-labels-1.jpg', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p4.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p4.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p4.desc') },
    { src: '/taobao/compostable-label/compostable-labels-2.png', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p5.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p5.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p5.desc') },
    { src: '/taobao/compostable-label/compostable-labels-3.png', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p6.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p6.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p6.desc') },
    { src: '/taobao/compostable-label/compostable-labels-4.png', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p7.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p7.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p7.desc') },
    { src: '/taobao/compostable-label/compostable-label-process.png', title: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p8.title'), titleCn: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p8.titleCn'), desc: t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p8.desc') }
  ]

  const fullGallery = [...diagramGallery, ...photoGallery]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = fullGallery.length - 1
    if (newIndex >= fullGallery.length) newIndex = 0
    setGalleryEnlarged({ src: fullGallery[newIndex].src, index: newIndex })
  }

  const pouchKeywords = t('seoPages.pages.customCompostableLabels.pouch.seo.keywords', { returnObjects: true }) as string[]
  const achieveKeywords = t('seoPages.pages.customCompostableLabels.achievePack.seo.keywords', { returnObjects: true }) as string[]

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (1): pouch.eco
  // ----------------------------------------------------
  if (isPouch()) {
    return (
      <PouchLayout>
        <DualDomainSEOHead 
          title={t('seoPages.pages.customCompostableLabels.pouch.seo.title')}
          description={t('seoPages.pages.customCompostableLabels.pouch.seo.description')}
          keywords={pouchKeywords}
          schemaType="Product"
        />

        {/* Hero Section */}
        <section className="bg-[#10b981] text-black py-24 px-6 border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-block bg-[#D4FF00] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {t('seoPages.pages.customCompostableLabels.pouch.hero.badge')}
              </div>
              <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl leading-none uppercase tracking-tight">
                {t('seoPages.pages.customCompostableLabels.pouch.hero.title')}<br/>
                <span className="text-[#D4FF00] bg-black px-4 py-1 border-4 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">LABELS</span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                {t('seoPages.pages.customCompostableLabels.pouch.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t('seoPages.pages.customCompostableLabels.pouch.hero.btnCall')}
                </NeoButton>
                <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20compostable%20labels%20from%20pouch.eco" variant="secondary">
                  {t('seoPages.pages.customCompostableLabels.pouch.hero.btnWa')}
                </NeoButton>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="relative border-4 border-black p-4 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/taobao/compostable-label/compostable-label-cover.jpg" 
                  alt={t('seoPages.pages.customCompostableLabels.pouch.hero.imageAlt')} 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -top-6 -right-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 text-sm">
                  {t('seoPages.pages.customCompostableLabels.pouch.hero.moqLabel')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Benefits */}
        <section className="py-20 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              {t('seoPages.pages.customCompostableLabels.pouch.benefits.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <NeoCard color="bg-[#D4FF00]">
                <Leaf className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t('seoPages.pages.customCompostableLabels.pouch.benefits.card1.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t('seoPages.pages.customCompostableLabels.pouch.benefits.card1.desc')}
                </p>
              </NeoCard>
              
              <NeoCard color="bg-white">
                <Shield className="w-8 h-8 text-[#10b981] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t('seoPages.pages.customCompostableLabels.pouch.benefits.card2.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t('seoPages.pages.customCompostableLabels.pouch.benefits.card2.desc')}
                </p>
              </NeoCard>

              <NeoCard color="bg-[#00FFFF]">
                <Layers className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t('seoPages.pages.customCompostableLabels.pouch.benefits.card3.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  {t('seoPages.pages.customCompostableLabels.pouch.benefits.card3.desc')}
                </p>
              </NeoCard>

              <NeoCard color="bg-black text-[#D4FF00]">
                <Sparkles className="w-8 h-8 text-[#D4FF00] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">{t('seoPages.pages.customCompostableLabels.pouch.benefits.card4.title')}</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-white">
                  {t('seoPages.pages.customCompostableLabels.pouch.benefits.card4.desc')}
                </p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* 4-Layer Ecological Structure */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="mb-4">
                <NeoBadge color="lime">{t('seoPages.pages.customCompostableLabels.pouch.structure.badge')}</NeoBadge>
              </div>
              <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl uppercase mt-2 tracking-tight">
                {t('seoPages.pages.customCompostableLabels.pouch.structure.title')}
              </h2>
              <p className="font-['JetBrains_Mono'] text-neutral-600 mt-2">
                {t('seoPages.pages.customCompostableLabels.pouch.structure.intro')}
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex gap-4 items-start border-4 border-black p-6 bg-emerald-50/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#D4FF00] text-black font-black w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h3 className="font-black text-lg uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.structure.step1.title')}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.structure.step1.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start border-4 border-black p-6 bg-cyan-50/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#D4FF00] text-black font-black w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h3 className="font-black text-lg uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.structure.step2.title')}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.structure.step2.desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start border-4 border-black p-6 bg-amber-50/50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-[#D4FF00] text-black font-black w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h3 className="font-black text-lg uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.structure.step3.title')}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.structure.step3.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <button
                  onClick={() => setGalleryEnlarged({ src: '/taobao/compostable-label/compostable-labels-5.png', index: fullGallery.findIndex(g => g.src.includes('labels-5')) })}
                  className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white p-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all w-full text-left"
                >
                  <img 
                    src="/taobao/compostable-label/compostable-labels-5.png" 
                    alt={t('seoPages.pages.customCompostableLabels.pouch.structure.imgAlt')} 
                    className="w-full h-auto object-cover border-2 border-black"
                  />
                  <div className="p-3 bg-neutral-100 text-center font-['JetBrains_Mono'] text-xs font-bold border-t-2 border-black mt-2">
                    {t('seoPages.pages.customCompostableLabels.pouch.structure.clickExpand')}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing QA Checklist */}
        <section className="py-24 px-6 bg-neutral-50 border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <button
                  onClick={() => setGalleryEnlarged({ src: '/taobao/compostable-label/compostable-labels-6.png', index: fullGallery.findIndex(g => g.src.includes('labels-6')) })}
                  className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white p-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all w-full text-left"
                >
                  <img 
                    src="/taobao/compostable-label/compostable-labels-6.png" 
                    alt={t('seoPages.pages.customCompostableLabels.pouch.qa.imgAlt')} 
                    className="w-full h-auto object-cover border-2 border-black"
                  />
                  <div className="p-3 bg-neutral-100 text-center font-['JetBrains_Mono'] text-xs font-bold border-t-2 border-black mt-2">
                    {t('seoPages.pages.customCompostableLabels.pouch.qa.clickExpand')}
                  </div>
                </button>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="mb-2">
                  <NeoBadge color="cyan">{t('seoPages.pages.customCompostableLabels.pouch.qa.badge')}</NeoBadge>
                </div>
                <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl uppercase tracking-tight">
                  {t('seoPages.pages.customCompostableLabels.pouch.qa.title')}
                </h2>
                <p className="font-['Space_Grotesk'] text-neutral-700 leading-relaxed text-sm">
                  {t('seoPages.pages.customCompostableLabels.pouch.qa.desc')}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border-4 border-black p-4 bg-amber-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.qa.card1.title')}</h4>
                    <p className="font-['JetBrains_Mono'] text-xs text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.qa.card1.desc')}
                    </p>
                  </div>
                  <div className="border-4 border-black p-4 bg-cyan-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.qa.card2.title')}</h4>
                    <p className="font-['JetBrains_Mono'] text-xs text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.qa.card2.desc')}
                    </p>
                  </div>
                  <div className="border-4 border-black p-4 bg-[#D4FF00]/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.qa.card3.title')}</h4>
                    <p className="font-['JetBrains_Mono'] text-xs text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.qa.card3.desc')}
                    </p>
                  </div>
                  <div className="border-4 border-black p-4 bg-emerald-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase mb-1">{t('seoPages.pages.customCompostableLabels.pouch.qa.card4.title')}</h4>
                    <p className="font-['JetBrains_Mono'] text-xs text-neutral-700">
                      {t('seoPages.pages.customCompostableLabels.pouch.qa.card4.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symmetrical Real-World Gallery Grid */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-6 tracking-tight">
              {t('seoPages.pages.customCompostableLabels.pouch.samples.title')}
            </h2>
            <p className="text-center font-['JetBrains_Mono'] mb-12 text-neutral-600">
              {t('seoPages.pages.customCompostableLabels.pouch.samples.desc')}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {photoGallery.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryEnlarged({ src: photo.src, index: diagramGallery.length + i })}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden bg-white text-left w-full flex flex-col h-full"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden border-b-4 border-black bg-neutral-50 flex items-center justify-center shrink-0">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-black text-sm uppercase mb-1 line-clamp-1">{photo.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 line-clamp-2 leading-relaxed">{photo.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Specs Table */}
        <section className="py-24 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-12 tracking-tight">
              {t('seoPages.pages.customCompostableLabels.pouch.specs.title')}
            </h2>
            <NeoCard color="bg-white" className="!p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-['JetBrains_Mono'] text-left border-collapse">
                  <thead>
                    <tr className="bg-black text-[#D4FF00] border-b-4 border-black">
                      <th className="border-2 border-black p-4 font-black uppercase text-sm">{t('seoPages.pages.customCompostableLabels.pouch.specs.thMaterial')}</th>
                      <th className="border-2 border-black p-4 font-black uppercase text-sm">{t('seoPages.pages.customCompostableLabels.pouch.specs.thAdhesive')}</th>
                      <th className="border-2 border-black p-4 font-black uppercase text-sm">{t('seoPages.pages.customCompostableLabels.pouch.specs.thMoisture')}</th>
                      <th className="border-2 border-black p-4 font-black uppercase text-sm">{t('seoPages.pages.customCompostableLabels.pouch.specs.thLeadTime')}</th>
                      <th className="border-2 border-black p-4 font-black uppercase text-sm">{t('seoPages.pages.customCompostableLabels.pouch.specs.thUseCase')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">{t('seoPages.pages.customCompostableLabels.pouch.specs.row1.material')}</td>
                      <td className="border-2 border-black p-4 text-black">{t('seoPages.pages.customCompostableLabels.pouch.specs.row1.adhesive')}</td>
                      <td className="border-2 border-black p-4 text-neutral-700">{t('seoPages.pages.customCompostableLabels.pouch.specs.row1.moisture')}</td>
                      <td className="border-2 border-black p-4 font-black text-emerald-600">{t('seoPages.pages.customCompostableLabels.pouch.specs.row1.leadTime')}</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t('seoPages.pages.customCompostableLabels.pouch.specs.row1.useCase')}</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">{t('seoPages.pages.customCompostableLabels.pouch.specs.row2.material')}</td>
                      <td className="border-2 border-black p-4 text-black">{t('seoPages.pages.customCompostableLabels.pouch.specs.row2.adhesive')}</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">{t('seoPages.pages.customCompostableLabels.pouch.specs.row2.moisture')}</td>
                      <td className="border-2 border-black p-4 font-black text-emerald-600">{t('seoPages.pages.customCompostableLabels.pouch.specs.row2.leadTime')}</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t('seoPages.pages.customCompostableLabels.pouch.specs.row2.useCase')}</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">{t('seoPages.pages.customCompostableLabels.pouch.specs.row3.material')}</td>
                      <td className="border-2 border-black p-4 text-black">{t('seoPages.pages.customCompostableLabels.pouch.specs.row3.adhesive')}</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">{t('seoPages.pages.customCompostableLabels.pouch.specs.row3.moisture')}</td>
                      <td className="border-2 border-black p-4 font-black text-emerald-600">{t('seoPages.pages.customCompostableLabels.pouch.specs.row3.leadTime')}</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">{t('seoPages.pages.customCompostableLabels.pouch.specs.row3.useCase')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </NeoCard>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <NeoCard color="bg-[#D4FF00]" className="text-center">
                <div className="text-5xl font-black mb-1">{t('seoPages.pages.customCompostableLabels.pouch.specs.card1.price')}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {t('seoPages.pages.customCompostableLabels.pouch.specs.card1.sub')}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">{t('seoPages.pages.customCompostableLabels.pouch.specs.card1.detail')}</p>
              </NeoCard>
              <NeoCard color="bg-[#00FFFF]" className="text-center">
                <div className="text-5xl font-black mb-1">{t('seoPages.pages.customCompostableLabels.pouch.specs.card2.price')}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {t('seoPages.pages.customCompostableLabels.pouch.specs.card2.sub')}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">{t('seoPages.pages.customCompostableLabels.pouch.specs.card2.detail')}</p>
              </NeoCard>
              <NeoCard color="bg-[#FF00FF] text-white" className="text-center">
                <div className="text-5xl font-black mb-1 text-[#D4FF00]">{t('seoPages.pages.customCompostableLabels.pouch.specs.card3.price')}</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
                  {t('seoPages.pages.customCompostableLabels.pouch.specs.card3.sub')}
                </p>
                <p className="text-[10px] text-neutral-200 mt-1">{t('seoPages.pages.customCompostableLabels.pouch.specs.card3.detail')}</p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              {t('seoPages.pages.customCompostableLabels.pouch.faq.title')}
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: t('seoPages.pages.customCompostableLabels.achievePack.faq.q1.q'),
                  a: t('seoPages.pages.customCompostableLabels.achievePack.faq.q1.a')
                },
                {
                  q: t('seoPages.pages.customCompostableLabels.achievePack.faq.q2.q'),
                  a: t('seoPages.pages.customCompostableLabels.achievePack.faq.q2.a')
                },
                {
                  q: t('seoPages.pages.customCompostableLabels.achievePack.faq.q3.q'),
                  a: t('seoPages.pages.customCompostableLabels.achievePack.faq.q3.a')
                },
                {
                  q: t('seoPages.pages.customCompostableLabels.achievePack.faq.q4.q'),
                  a: t('seoPages.pages.customCompostableLabels.achievePack.faq.q4.a')
                }
              ].map((item, idx) => (
                <NeoCard key={idx} color="bg-[#F0F0F0]/50" className="border-4">
                  <h3 className="font-black text-lg mb-2 uppercase">{item.q}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed">{item.a}</p>
                </NeoCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#10b981] text-black py-24 px-6 border-t-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
            <h2 className="font-['Space_Grotesk'] font-black text-5xl md:text-7xl uppercase mb-6 tracking-tight">
              {t('seoPages.pages.customCompostableLabels.pouch.cta.title')}
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-2xl mx-auto leading-relaxed">
              {t('seoPages.pages.customCompostableLabels.pouch.cta.desc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                {t('seoPages.pages.customCompostableLabels.pouch.cta.btnCall')}
              </NeoButton>
              <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20compostable%20labels%20from%20pouch.eco" variant="secondary">
                {t('seoPages.pages.customCompostableLabels.pouch.cta.btnWa')}
              </NeoButton>
            </div>
          </div>
        </section>
      </PouchLayout>
    )
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (2): achievepack.com
  // ----------------------------------------------------

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
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group bg-white border border-neutral-100 p-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-lg" loading="lazy" />
            <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center mt-2 rounded-md">{t('customCompostableLabelsPage.viewFullDiagram', 'Click to view full diagram')}</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700 leading-relaxed">{content}</p>
            <p className="text-neutral-600 text-sm leading-relaxed">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700 leading-relaxed">{content}</p>
            <p className="text-neutral-600 text-sm leading-relaxed">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group md:order-2 bg-white border border-neutral-100 p-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-lg" loading="lazy" />
            <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center mt-2 rounded-md">{t('customCompostableLabelsPage.viewFullDiagram', 'Click to view full diagram')}</div>
          </button>
        </>
      )}
    </div>
  )

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.customCompostableLabels.achievePack.overview.title'),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50 p-6 rounded-xl border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4 leading-relaxed">
              <strong>{t('seoPages.pages.customCompostableLabels.achievePack.overview.para1Strong')}</strong>{t('seoPages.pages.customCompostableLabels.achievePack.overview.para1Text')}
            </p>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              <strong>{t('seoPages.pages.customCompostableLabels.achievePack.overview.para2Strong')}</strong>{t('seoPages.pages.customCompostableLabels.achievePack.overview.para2Text')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">{t('seoPages.pages.customCompostableLabels.achievePack.overview.bullets.b1')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">{t('seoPages.pages.customCompostableLabels.achievePack.overview.bullets.b2')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">{t('seoPages.pages.customCompostableLabels.achievePack.overview.bullets.b3')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">{t('seoPages.pages.customCompostableLabels.achievePack.overview.bullets.b4')}</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">{t('seoPages.pages.customCompostableLabels.achievePack.overview.bullets.b5')}</span>
            </div>
          </div>

          <AlternatingSection
            image="/taobao/compostable-label/compostable-labels-5.png"
            imageAlt={t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p2.title')}
            title={t('seoPages.pages.customCompostableLabels.achievePack.overview.altSec.title')}
            titleCn={t('seoPages.pages.customCompostableLabels.achievePack.overview.altSec.titleCn')}
            content={t('seoPages.pages.customCompostableLabels.achievePack.overview.altSec.desc')}
            contentCn={t('seoPages.pages.customCompostableLabels.achievePack.overview.altSec.descCn')}
            imageLeft={true}
            index={fullGallery.findIndex(g => g.src.includes('labels-5'))}
          />
        </div>
      )
    },
    {
      id: 'biodegradability',
      title: t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.title'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/taobao/compostable-label/compostable-labels-7.jpg"
            imageAlt={t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p3.title')}
            title={t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.altSec.title')}
            titleCn={t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.altSec.titleCn')}
            content={t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.altSec.desc')}
            contentCn={t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.altSec.descCn')}
            imageLeft={false}
            index={fullGallery.findIndex(g => g.src.includes('labels-7'))}
          />

          <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-neutral-200">
            <div>
              <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.title')}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.desc')}
              </p>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 font-semibold text-neutral-700">
                    <th className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.thDimension')}</th>
                    <th className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.thPla')}</th>
                    <th className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.thConventional')}</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 px-3 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row1Dim')}</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row1Pla')}</td>
                    <td className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row1Conv')}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 px-3 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row2Dim')}</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row2Pla')}</td>
                    <td className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row2Conv')}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 px-3 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row3Dim')}</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row3Pla')}</td>
                    <td className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row3Conv')}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row4Dim')}</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row4Pla')}</td>
                    <td className="py-2 px-3">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.table.row4Conv')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                {t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.safety.title')}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.safety.desc')}
              </p>
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 text-xs text-primary-800 space-y-1">
                <p className="font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.safety.boxTitle')}</p>
                <p>{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.safety.boxItem1')}</p>
                <p>{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.safety.boxItem2')}</p>
                <p>{t('seoPages.pages.customCompostableLabels.achievePack.biodegradability.safety.boxItem3')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('seoPages.pages.customCompostableLabels.achievePack.certifications.title'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/taobao/compostable-label/certifications_applications.svg"
            imageAlt={t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p3.title')}
            title={t('seoPages.pages.customCompostableLabels.achievePack.certifications.altSec.title')}
            titleCn={t('seoPages.pages.customCompostableLabels.achievePack.certifications.altSec.titleCn')}
            content={t('seoPages.pages.customCompostableLabels.achievePack.certifications.altSec.desc')}
            contentCn={t('seoPages.pages.customCompostableLabels.achievePack.certifications.altSec.descCn')}
            imageLeft={true}
            index={2}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <FileCheck className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card1.title')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card1.desc')}</p>
              <p className="text-xs text-primary-600 mt-2 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card1.sub')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card2.title')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card2.desc')}</p>
              <p className="text-xs text-primary-600 mt-2 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card2.sub')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card3.title')}</h4>
              <p className="text-sm text-neutral-600">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card3.desc')}</p>
              <p className="text-xs text-primary-600 mt-2 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.certifications.card3.sub')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: t('seoPages.pages.customCompostableLabels.achievePack.process.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.customCompostableLabels.achievePack.process.titleEn')} • {t('seoPages.pages.customCompostableLabels.achievePack.process.titleCn')}</h3>
            <p className="text-neutral-700 leading-relaxed mb-4 text-sm">
              {t('seoPages.pages.customCompostableLabels.achievePack.process.descEn')}
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm">
              {t('seoPages.pages.customCompostableLabels.achievePack.process.descCn')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-neutral-50 p-4 rounded-xl border border-neutral-200 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">1</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">{t('seoPages.pages.customCompostableLabels.achievePack.process.card1.title')}</h4>
                  <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.process.card1.desc')}</p>
                  <p className="text-xs text-primary-600 mt-1 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.process.card1.sub')}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-neutral-50 p-4 rounded-xl border border-neutral-200 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">2</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">{t('seoPages.pages.customCompostableLabels.achievePack.process.card2.title')}</h4>
                  <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.process.card2.desc')}</p>
                  <p className="text-xs text-primary-600 mt-1 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.process.card2.sub')}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-neutral-50 p-4 rounded-xl border border-neutral-200 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">3</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">{t('seoPages.pages.customCompostableLabels.achievePack.process.card3.title')}</h4>
                  <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.process.card3.desc')}</p>
                  <p className="text-xs text-primary-600 mt-1 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.process.card3.sub')}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-neutral-50 p-4 rounded-xl border border-neutral-200 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">4</span>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">{t('seoPages.pages.customCompostableLabels.achievePack.process.card4.title')}</h4>
                  <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.process.card4.desc')}</p>
                  <p className="text-xs text-primary-600 mt-1 font-medium">{t('seoPages.pages.customCompostableLabels.achievePack.process.card4.sub')}</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setGalleryEnlarged({ src: '/taobao/compostable-label/compostable-label-process.png', index: fullGallery.length - 1 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group bg-white border border-neutral-100 p-2 w-full text-left"
            >
              <img src="/taobao/compostable-label/compostable-label-process.png" alt={t('seoPages.pages.customCompostableLabels.achievePack.photoGallery.p8.title')} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-lg" loading="lazy" />
              <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center mt-2 rounded-md">{t('customCompostableLabelsPage.viewFullDiagram', 'Click to view full diagram')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'specs',
      title: t('seoPages.pages.customCompostableLabels.achievePack.specs.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full text-sm text-left border-collapse bg-white">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 font-bold text-neutral-900">
                  <th className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.thMaterial')}</th>
                  <th className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.thAdhesive')}</th>
                  <th className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.thMoisture')}</th>
                  <th className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.thLeadTime')}</th>
                  <th className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.thUseCase')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row1.material')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row1.adhesive')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row1.moisture')}</td>
                  <td className="p-3 text-primary-700 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row1.leadTime')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row1.useCase')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-900">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row2.material')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row2.adhesive')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row2.moisture')}</td>
                  <td className="p-3 text-primary-700 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row2.leadTime')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row2.useCase')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row3.material')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row3.adhesive')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row3.moisture')}</td>
                  <td className="p-3 text-primary-700 font-semibold">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row3.leadTime')}</td>
                  <td className="p-3">{t('seoPages.pages.customCompostableLabels.achievePack.specs.row3.useCase')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-700">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card1.val')}</div>
              <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card1.sub')}</p>
              <p className="text-xs text-neutral-500 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card1.detail')}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-700">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card2.val')}</div>
              <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card2.sub')}</p>
              <p className="text-xs text-neutral-500 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card2.detail')}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-700">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card3.val')}</div>
              <p className="text-sm text-neutral-600 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card3.sub')}</p>
              <p className="text-xs text-neutral-500 mt-1">{t('seoPages.pages.customCompostableLabels.achievePack.specs.card3.detail')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.customCompostableLabels.achievePack.faq.title'),
      icon: <HelpCircleIcon />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden" open>
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customCompostableLabels.achievePack.faq.q1.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              {t('seoPages.pages.customCompostableLabels.achievePack.faq.q1.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customCompostableLabels.achievePack.faq.q2.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              {t('seoPages.pages.customCompostableLabels.achievePack.faq.q2.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customCompostableLabels.achievePack.faq.q3.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              {t('seoPages.pages.customCompostableLabels.achievePack.faq.q3.a')}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.customCompostableLabels.achievePack.faq.q4.q')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              {t('seoPages.pages.customCompostableLabels.achievePack.faq.q4.a')}
            </div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.customCompostableLabels.achievePack.cta.title'),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">{t('seoPages.pages.customCompostableLabels.achievePack.cta.title')}</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
            {t('seoPages.pages.customCompostableLabels.achievePack.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-lg font-bold hover:bg-primary-50 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.customCompostableLabels.achievePack.cta.btnCall')}
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20FSC%20certified%20compostable%20labels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition shadow-lg"
            >
              {t('seoPages.pages.customCompostableLabels.achievePack.cta.btnWa')}
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Compostable PLA Labels Quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              {t('seoPages.pages.customCompostableLabels.achievePack.cta.btnMail')}
            </a>
          </div>
          <div className="mt-6 text-xs text-primary-200/80">
            {t('seoPages.pages.customCompostableLabels.achievePack.cta.footer')}
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#0f3d1b"
        title={t('seoPages.pages.customCompostableLabels.achievePack.seo.title')}
        description={t('seoPages.pages.customCompostableLabels.achievePack.seo.description')}
        canonicalUrl="https://achievepack.com/products/custom-compostable-labels"
        heroTitle={t('seoPages.pages.customCompostableLabels.achievePack.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.customCompostableLabels.achievePack.seo.heroSubtitle')}
        introSummary={t('seoPages.pages.customCompostableLabels.achievePack.seo.introSummary')}
        heroImage="/taobao/compostable-label/compostable-label-cover.jpg"
        sections={sections}
        keywords={achieveKeywords}
        schemaType="Product"
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
            alt={fullGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
            <p className="font-bold text-lg">{fullGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/80 mt-1 leading-relaxed">{fullGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {fullGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

// Simple placeholder icon
const HelpCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
)

export default CustomCompostableLabelsPage
