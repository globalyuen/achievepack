import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Ruler, Box, Maximize2, Eye, X, Package, 
  Coffee, Cookie, Zap, ArrowRight, CheckCircle
} from 'lucide-react'
import DualDomainSEOHead from '../components/DualDomainSEOHead'
import { getBrandConfig } from '../utils/domain'
import Newsletter from '../components/Newsletter'
import { useTranslation, Trans } from "react-i18next";

/**
 * Pouch.eco Size Guide Page - B2C Version
 * 
 * WordPress URL: /size → React URL: /size-guide
 * 
 * Features:
 * - Visual size comparisons with cola can
 * - Stand-up and flat-bottom pouches
 * - Interactive image gallery
 * - B2C friendly language
 */

// Neo-Brutalist Components
const NeoButton = ({ children, to, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-block text-center"
  const variants = {
    primary: "bg-[#10b981] text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    yellow: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
  }
  
  return (
    <Link to={to} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </Link>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className}`}>
    {children}
  </div>
)

export default function PouchEcoSizeGuidePage() {
    const { t } = useTranslation();
    const p = 'seoPages.pages.pouchEcoSizeGuide';
  const brand = getBrandConfig()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const standUpSizes = [
    { size: 'XXXS', image: '/imgs/store/size/stand-up/xxxs.webp', capacity: '10-25g', dimensions: '70×100mm' },
    { size: 'XXS', image: '/imgs/store/size/stand-up/xxs.webp', capacity: '25-50g', dimensions: '90×135mm' },
    { size: 'XS', image: '/imgs/store/size/stand-up/xs.webp', capacity: '50-75g', dimensions: '100×150mm' },
    { size: 'S', image: '/imgs/store/size/stand-up/s.webp', capacity: '75-150g', dimensions: '120×180mm' },
    { size: 'L', image: '/imgs/store/size/stand-up/l.webp', capacity: '250-500g', dimensions: '160×240mm' },
    { size: 'XL', image: '/imgs/store/size/stand-up/xl.webp', capacity: '500g-1kg', dimensions: '200×300mm' },
    { size: 'XXL', image: '/imgs/store/size/stand-up/xxl.webp', capacity: '1-2kg', dimensions: '250×350mm' },
  ]

  const flatBottomSizes = [
    { size: 'XXXS', image: '/imgs/store/size/flat-bottom/xxxs.webp', capacity: '25-50g', dimensions: '80×120mm' },
    { size: 'XXS', image: '/imgs/store/size/flat-bottom/xxs.webp', capacity: '50-100g', dimensions: '100×150mm' },
    { size: 'XS', image: '/imgs/store/size/flat-bottom/xs.webp', capacity: '100-200g', dimensions: '120×180mm' },
    { size: 'S', image: '/imgs/store/size/flat-bottom/s.webp', capacity: '200-350g', dimensions: '140×220mm' },
    { size: 'L', image: '/imgs/store/size/flat-bottom/l.webp', capacity: '500g-1kg', dimensions: '180×280mm' },
    { size: 'XL', image: '/imgs/store/size/flat-bottom/xl.webp', capacity: '1-1.5kg', dimensions: '220×320mm' },
    { size: 'XXL', image: '/imgs/store/size/flat-bottom/xxl.webp', capacity: '1.5-2.5kg', dimensions: '260×360mm' },
  ]

  const productExamples = [
    {
      icon: <Coffee className="w-8 h-8" />,
      product: 'Coffee Beans',
      recommended: 'L or XL',
      reason: '250-500g bags are perfect for weekly coffee use',
      color: 'bg-[#D4FF00]'
    },
    {
      icon: <Cookie className="w-8 h-8" />,
      product: 'Cookies & Snacks',
      recommended: 'S or L',
      reason: 'Small packs for sampling, large for family size',
      color: 'bg-[#00FFFF]'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      product: 'Protein Powder',
      recommended: 'XL or XXL',
      reason: '500g-2kg sizes for bulk supplements',
      color: 'bg-[#FF00FF]'
    },
    {
      icon: <Package className="w-8 h-8" />,
      product: 'Tea Leaves',
      recommended: 'XS or S',
      reason: '50-150g perfect for loose leaf tea',
      color: 'bg-[#10b981] text-white'
    }
  ]

  const measurementTips = [
    'Width: Measured flat, left to right edge',
    'Height: Bottom seal to top seal/zipper',
    'Gusset: Fold depth that creates volume',
    'Fill level: Leave 10-15% empty space at top',
    'Seal area: Add 10-15mm for heat seal',
    'Zipper space: Add 15mm if using reclosure'
  ]

  return (
    <>
      <DualDomainSEOHead 
        title="Pouch Size Guide | Find Your Perfect Bag Size | Pouch.eco"
        description="Visual size guide for eco-friendly pouches. Compare stand-up and flat-bottom bags with real-world references. From 10g sample packs to 2kg bulk sizes. Find the perfect fit for your product."
        keywords={["pouch size guide", "bag sizing", "packaging dimensions", "stand up pouch sizes", "flat bottom bag sizes", "coffee bag size", "snack bag size"]}
      />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Pouch size comparison"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#10b981] to-[#059669] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-black text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
              {t(`${p}.size`)}<br/>
              <span className="text-[#D4FF00]">{t(`${p}.guide`)}</span>
            </h1>
            
            <p className="font-['JetBrains_Mono'] text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {t(`${p}.findYourPerfectPouchSizeVisual`)}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <NeoButton to="/store" variant="yellow">
                {t(`${p}.shopNow`)}</NeoButton>
              <NeoButton to="/sample-kit" variant="secondary">
                {t(`${p}.orderSamples`)}</NeoButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Measure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-12 text-center"
          >
            {t(`${p}.howWe`)}<br/>
            <span className="text-[#10b981]">{t(`${p}.measure`)}</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <NeoCard color="bg-[#D4FF00]" className="h-full">
                <Ruler className="w-12 h-12 mb-4" />
                <h3 className="font-black text-2xl uppercase mb-3">{t(`${p}.width`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm">
                  {t(`${p}.measuredFlatFromLeftToRightEdg`)}</p>
              </NeoCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <NeoCard color="bg-[#00FFFF]" className="h-full">
                <Maximize2 className="w-12 h-12 mb-4" />
                <h3 className="font-black text-2xl uppercase mb-3">{t(`${p}.height`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm">
                  {t(`${p}.fromBottomSealToTopSealOrZippe`)}</p>
              </NeoCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <NeoCard color="bg-[#FF00FF] text-white" className="h-full">
                <Box className="w-12 h-12 mb-4" />
                <h3 className="font-black text-2xl uppercase mb-3">{t(`${p}.gusset`)}</h3>
                <p className="font-['JetBrains_Mono'] text-sm">
                  {t(`${p}.theFoldDepthOnEachSideThatCrea`)}</p>
              </NeoCard>
            </motion.div>
          </div>

          <NeoCard color="bg-gray-100" className="mt-8">
            <h3 className="font-black text-xl uppercase mb-4">{t(`${p}.measurementTips`)}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {measurementTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="font-['JetBrains_Mono'] text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Stand-Up Pouches */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-6 text-center"
          >
            {t(`${p}.standUp`)}<br/>
            <span className="text-[#10b981]">{t(`${p}.pouches`)}</span>
          </motion.h2>

          <p className="font-['JetBrains_Mono'] text-center text-lg mb-12 max-w-3xl mx-auto">
            {t(`${p}.compareWithA330mlColaCan122cmT`)}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {standUpSizes.map((item, idx) => (
              <motion.div
                key={item.size}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedImage(item.image)}
                className="cursor-pointer group"
              >
                <NeoCard color="bg-white" className="hover:scale-105 transition-transform overflow-hidden p-0">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={`Stand-up pouch size ${item.size}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-[#10b981] text-white">
                    <div className="font-black text-2xl mb-1">{item.size}</div>
                    <div className="font-['JetBrains_Mono'] text-xs opacity-90">{item.capacity}</div>
                    <div className="font-['JetBrains_Mono'] text-xs opacity-75 mt-1">{item.dimensions}</div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <Eye className="w-5 h-5 text-[#10b981]" />
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flat Bottom Bags */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-6 text-center"
          >
            {t(`${p}.flatBottom`)}<br/>
            <span className="text-[#10b981]">{t(`${p}.bags`)}</span>
          </motion.h2>

          <p className="font-['JetBrains_Mono'] text-center text-lg mb-12 max-w-3xl mx-auto">
            {t(`${p}.premiumFlatBottomDesignMoreShe`)}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {flatBottomSizes.map((item, idx) => (
              <motion.div
                key={item.size}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedImage(item.image)}
                className="cursor-pointer group"
              >
                <NeoCard color="bg-white" className="hover:scale-105 transition-transform overflow-hidden p-0">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={`Flat bottom bag size ${item.size}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-[#D4FF00]">
                    <div className="font-black text-2xl mb-1">{item.size}</div>
                    <div className="font-['JetBrains_Mono'] text-xs opacity-75">{item.capacity}</div>
                    <div className="font-['JetBrains_Mono'] text-xs opacity-60 mt-1">{item.dimensions}</div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <Eye className="w-5 h-5 text-[#10b981]" />
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Examples */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-12 text-center"
          >
            {t(`${p}.sizeBy`)}<br/>
            <span className="text-[#10b981]">{t(`${p}.product`)}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {productExamples.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <NeoCard color={item.color} className="h-full">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-black text-2xl uppercase mb-2">{item.product}</h3>
                  <div className="font-['JetBrains_Mono'] text-sm mb-2">
                    <strong>{t(`${p}.recommended`)}</strong> {item.recommended}
                  </div>
                  <p className="font-['JetBrains_Mono'] text-sm opacity-75">
                    {item.reason}
                  </p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#10b981] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-7xl uppercase mb-6"
          >
            {t(`${p}.stillNotSure`)}<br/>
            <span className="text-[#D4FF00]">{t(`${p}.orderSamples1`)}</span>
          </motion.h2>

          <p className="font-['JetBrains_Mono'] text-xl mb-8 max-w-2xl mx-auto">
            {t(`${p}.getPhysicalSamplesInMultipleSi`)}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <NeoButton to="/sample-kit" variant="yellow">
              {t(`${p}.orderSampleKit`)}</NeoButton>
            <NeoButton to="/store" variant="secondary">
              {t(`${p}.shopAllSizes`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">{t(`${p}.shop`)}</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/store" className="hover:text-[#10b981]">{t(`${p}.allProducts`)}</Link></li>
                <li><Link to="/store?category=starter" className="hover:text-[#10b981]">{t(`${p}.starterKits`)}</Link></li>
                <li><Link to="/sample-kit" className="hover:text-[#10b981]">{t(`${p}.sampleKit`)}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">{t(`${p}.materials`)}</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/materials/cello-kraft-triplex" className="hover:text-[#10b981]">{t(`${p}.gptkKraft`)}</Link></li>
                <li><Link to="/materials/kraft-duplex" className="hover:text-[#10b981]">{t(`${p}.ptnDuplex`)}</Link></li>
                <li><Link to="/materials" className="hover:text-[#10b981]">{t(`${p}.allMaterials`)}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">{t(`${p}.resources`)}</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/solutions" className="hover:text-[#10b981]">{t(`${p}.solutions`)}</Link></li>
                <li><Link to="/size-guide" className="hover:text-[#10b981]">{t(`${p}.sizeGuide`)}</Link></li>
                <li><Link to="/contact" className="hover:text-[#10b981]">{t(`${p}.contact`)}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">{t(`${p}.company`)}</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/about" className="hover:text-[#10b981]">{t(`${p}.aboutUs`)}</Link></li>
                <li><Link to="/sustainability" className="hover:text-[#10b981]">{t(`${p}.sustainability`)}</Link></li>
                <li><Link to="/blog" className="hover:text-[#10b981]">{t(`${p}.blog`)}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-4 border-white pt-8 text-center">
            <p className="font-['JetBrains_Mono'] text-sm">
              {t(`${p}.2026PouchEcoEcoFriendlyPackagi`)}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
