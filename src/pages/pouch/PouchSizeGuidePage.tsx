import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Ruler, Package, Download, Zap, CheckCircle, ArrowRight, Eye, Calculator, Maximize2, Settings, ArrowRightLeft, X, Box, Info, Scale, Layers, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchSizeGuidePage() {
  const { t } = useTranslation()
  const baseUrl = getBaseUrl()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const standUpSizes = [
    { size: 'XXXS', image: '/imgs/store/size/stand-up/xxxs.webp', capacity: '10-25g', dim: '80×130+50mm', bestFor: 'Samples, Spices' },
    { size: 'XXS', image: '/imgs/store/size/stand-up/xxs.webp', capacity: '25-50g', dim: '100×150+60mm', bestFor: 'Tea, Seeds' },
    { size: 'XS', image: '/imgs/store/size/stand-up/xs.webp', capacity: '50-75g', dim: '120×185+70mm', bestFor: 'Granola, Snacks' },
    { size: 'S', image: '/imgs/store/size/stand-up/s.webp', capacity: '75-150g', dim: '140×200+80mm', bestFor: 'Coffee 250g' },
    { size: 'L', image: '/imgs/store/size/stand-up/l.webp', capacity: '250-500g', dim: '160×240+90mm', bestFor: 'Retail Coffee 500g' },
    { size: 'XL', image: '/imgs/store/size/stand-up/xl.webp', capacity: '500g-1kg', dim: '200×300+100mm', bestFor: 'Family Packs' },
    { size: 'XXL', image: '/imgs/store/size/stand-up/xxl.webp', capacity: '1-2kg', dim: '250×350+120mm', bestFor: 'Pet Food, Bulk' },
  ]

  const flatBottomSizes = [
    { size: 'XXXS', image: '/imgs/store/size/flat-bottom/xxxs.webp', capacity: '25-50g', dim: '90×180×50mm', bestFor: 'Specialty Tea' },
    { size: 'XXS', image: '/imgs/store/size/flat-bottom/xxs.webp', capacity: '50-100g', dim: '95×190×55mm', bestFor: 'Premium Coffee 100g' },
    { size: 'XS', image: '/imgs/store/size/flat-bottom/xs.webp', capacity: '100-200g', dim: '100×200×60mm', bestFor: 'Coffee 250g' },
    { size: 'S', image: '/imgs/store/size/flat-bottom/s.webp', capacity: '200-350g', dim: '120×250×70mm', bestFor: 'Coffee 12oz' },
    { size: 'L', image: '/imgs/store/size/flat-bottom/l.webp', capacity: '500g-1kg', dim: '150×320×90mm', bestFor: 'Coffee 1kg' },
    { size: 'XL', image: '/imgs/store/size/flat-bottom/xl.webp', capacity: '1-1.5kg', dim: '180×350×100mm', bestFor: 'Pet Food' },
    { size: 'XXL', image: '/imgs/store/size/flat-bottom/xxl.webp', capacity: '1.5-2.5kg', dim: '200×400×120mm', bestFor: 'Bulk Grains' },
  ]

  const productDensity = [
    { product: 'Whole Bean Coffee', density: '0.38 g/ml', factor: '2.6x', note: 'Standard for sizing' },
    { product: 'Tea Leaves', density: '0.20 g/ml', factor: '5.0x', note: 'Requires large volume' },
    { product: 'Protein Powder', density: '0.50 g/ml', factor: '2.0x', note: 'Dense but fluffy' },
    { product: 'Granola', density: '0.35 g/ml', factor: '2.8x', note: 'High irregularity' },
    { product: 'Nuts & Seeds', density: '0.60 g/ml', factor: '1.6x', note: 'Compact & Heavy' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchSizeGuidePage.meta.title')}</title>
        <meta name="description" content={t('pouchSizeGuidePage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/size-guide`} />
        <meta name="keywords" content={t('pouchSizeGuidePage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px] bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="md:col-span-7 text-center md:text-left space-y-6">
              <NeoBadge color="lime">{t('pouchSizeGuidePage.hero.badge')}</NeoBadge>
              <h1 className="font-black text-6xl md:text-8xl leading-none uppercase">
                {t('pouchSizeGuidePage.hero.heading1')}<br/>
                {t('pouchSizeGuidePage.hero.heading2')}<br/>
                <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchSizeGuidePage.hero.heading3')}</span>
              </h1>
              <p className="text-lg md:text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] leading-normal">
                {t('pouchSizeGuidePage.hero.description')}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <NeoButton variant="primary" to="/sample">{t('pouchSizeGuidePage.hero.ctaPrimary')}</NeoButton>
                <NeoButton variant="secondary" href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchSizeGuidePage.hero.ctaSecondary')}</NeoButton>
              </div>
            </div>
            {/* Right Hero Image Column */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 border-4 border-black" />
              <img 
                src="/imgs/free/sizing-finder-hero.jpg" 
                alt={t('pouchSizeGuidePage.hero.heroAlt')} 
                className="relative z-10 border-4 border-black w-full shadow-xl bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Density Intelligence Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">{t('pouchSizeGuidePage.density.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 italic">{t('pouchSizeGuidePage.density.heading1')}<br/>{t('pouchSizeGuidePage.density.heading2')}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchSizeGuidePage.density.description')}
              </p>
              <div className="mt-8 overflow-hidden border-4 border-black">
                <table className="w-full text-left font-['JetBrains_Mono'] text-sm">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="p-4">{t('pouchSizeGuidePage.density.tableHeaders.product')}</th>
                      <th className="p-4">{t('pouchSizeGuidePage.density.tableHeaders.density')}</th>
                      <th className="p-4">{t('pouchSizeGuidePage.density.tableHeaders.volFactor')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-black/10">
                    {productDensity.map((p, i) => (
                      <tr key={i} className="hover:bg-yellow-50 transition-colors">
                        <td className="p-4 font-black">{t(`pouchSizeGuidePage.productDensity.${i}.product`)}</td>
                        <td className="p-4">{p.density}</td>
                        <td className="p-4 font-bold text-magenta-600">{p.factor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/seo-photos/a_size_reference_dimensions_7506199.webp" 
                alt={t('pouchSizeGuidePage.density.altText')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Reference Grid */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <NeoBadge color="cyan">{t('pouchSizeGuidePage.scaleCheck.badge')}</NeoBadge>
            <h2 className="font-black text-5xl md:text-8xl uppercase mt-4">{t('pouchSizeGuidePage.scaleCheck.heading')}</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70 italic font-bold">{t('pouchSizeGuidePage.scaleCheck.subtitle')}</p>
          </div>

          {/* Stand-Up Pouches */}
          <div className="mb-24">
            <h3 className="inline-block bg-black text-[#D4FF00] px-8 py-3 font-black text-3xl mb-12 transform -rotate-1 border-4 border-black">
              {t('pouchSizeGuidePage.standUp.heading')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {standUpSizes.map((item, i) => (
                <motion.div 
                  key={item.size}
                  whileHover={{ y: -12, rotate: 1 }}
                  className="group border-4 border-black cursor-pointer bg-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] bg-gray-100 border-b-4 border-black flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.size} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-3xl">{item.size}</span>
                      <span className="text-[10px] bg-black text-[#D4FF00] px-2 py-0.5 font-black">{item.capacity}</span>
                    </div>
                    <p className="text-[10px] font-bold font-['JetBrains_Mono'] opacity-60 leading-tight">{item.dim}</p>
                    <p className="text-[9px] mt-3 font-black uppercase text-magenta-600 border-t border-black/10 pt-2">{t(`pouchSizeGuidePage.standUp.sizes.${i}.bestFor`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flat Bottom Bags */}
          <div className="mb-12">
            <h3 className="inline-block bg-[#00FFFF] text-black px-8 py-3 font-black text-3xl mb-12 transform rotate-1 border-4 border-black">
              {t('pouchSizeGuidePage.flatBottom.heading')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {flatBottomSizes.map((item, i) => (
                <motion.div 
                  key={item.size}
                  whileHover={{ y: -12, rotate: -1 }}
                  className="group border-4 border-black cursor-pointer bg-white relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] bg-gray-100 border-b-4 border-black flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.size} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Maximize2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-3xl">{item.size}</span>
                      <span className="text-[10px] bg-cyan-600 text-white px-2 py-0.5 font-black">{item.capacity}</span>
                    </div>
                    <p className="text-[10px] font-bold font-['JetBrains_Mono'] opacity-60 leading-tight">{item.dim}</p>
                    <p className="text-[9px] mt-3 font-black uppercase text-blue-600 border-t border-black/10 pt-2">{t(`pouchSizeGuidePage.flatBottom.sizes.${i}.bestFor`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Cards Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Ruler className="w-12 h-12 mb-6 text-magenta-600" />
            <h4 className="font-black text-2xl uppercase mb-4">{t('pouchSizeGuidePage.techCards.precision.title')}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('pouchSizeGuidePage.techCards.precision.description')}</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
            <Settings className="w-12 h-12 mb-6 text-green-600" />
            <h4 className="font-black text-2xl uppercase mb-4">{t('pouchSizeGuidePage.techCards.headspace.title')}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('pouchSizeGuidePage.techCards.headspace.description')}</p>
          </NeoCard>
          <NeoCard color="bg-white">
            <Download className="w-12 h-12 mb-6 text-blue-600" />
            <h4 className="font-black text-2xl uppercase mb-4">{t('pouchSizeGuidePage.techCards.dieline.title')}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('pouchSizeGuidePage.techCards.dieline.description')}</p>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="magenta">{t('pouchSizeGuidePage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t('pouchSizeGuidePage.cta.heading1')}<br/>{t('pouchSizeGuidePage.cta.heading2')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto">
            {t('pouchSizeGuidePage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t('pouchSizeGuidePage.cta.ctaPrimary')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchSizeGuidePage.cta.ctaSecondary')}
            </NeoButton>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-[#D4FF00] transition-colors">
              <X className="w-12 h-12" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative border-8 border-white bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt={t('pouchSizeGuidePage.lightbox.altText')} className="max-w-full max-h-[85vh] object-contain transition-all duration-500" />
              <div className="absolute -bottom-4 left-4 right-4 bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-black p-4 text-center border-4 border-white uppercase text-xl">
                {t('pouchSizeGuidePage.lightbox.caption')}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PouchLayout>
  )
}
