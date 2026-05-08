import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Ruler, Package, Download, Zap, CheckCircle, ArrowRight, Eye, Calculator, Maximize2, Settings, ArrowRightLeft, X, Box, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchSizeGuidePage() {
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

  return (
    <PouchLayout>
      <Helmet>
        <title>Pouch Size Guide | Visual Reference & Capacity Chart | Pouch.eco</title>
        <meta name="description" content="Ultimate size guide for stand-up pouches and flat bottom bags. Compare sizes to soda cans, check metric/imperial capacities, and download dielines." />
        <link rel="canonical" href={`${baseUrl}/size-guide`} />
        <meta name="keywords" content="pouch sizes, stand up pouch dimensions, flat bottom bag guide, packaging capacity chart, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">SIZE_PROTOCOL_V2.7</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Fit.<br/>
            Feel.<br/>
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Finish.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Ditch the guesswork. Use our visual reference system to find the exact pouch size for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/sample">Order Size Test Pack</NeoButton>
            <NeoButton variant="secondary" href="https://calendly.com/30-min-free-packaging-consultancy">Free Consultation</NeoButton>
          </div>
        </div>
      </section>

      {/* Dimensions Logic Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <NeoBadge color="magenta">TECH_SPECS</NeoBadge>
              <h2 className="font-black text-5xl uppercase mt-4">Understanding Dimensions</h2>
              <p className="mt-6 text-gray-600 font-['JetBrains_Mono']">
                Pouch dimensions are expressed as: <br/>
                <span className="text-black font-black block mt-2 text-2xl">Width × Height + Gusset</span>
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-4">
              <NeoCard><h4 className="font-black">WIDTH</h4><p className="text-sm opacity-70">Measured flat, edge-to-edge.</p></NeoCard>
              <NeoCard><h4 className="font-black">HEIGHT</h4><p className="text-sm opacity-70">Bottom seal to the top of the zipper.</p></NeoCard>
              <NeoCard><h4 className="font-black">GUSSET</h4><p className="text-sm opacity-70">The fold depth creating the pouch's internal volume.</p></NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <NeoBadge color="cyan">VISUAL_REFERENCE</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">The Soda Can Test</h2>
              <p className="text-xl font-bold font-['JetBrains_Mono'] mt-4 text-gray-600">
                Reference: Standard 330ml Can (122mm Height)
              </p>
            </div>
            <div className="bg-white border-2 border-black p-4 font-black text-sm uppercase">
              Click images to enlarge & explore specs
            </div>
          </div>

          {/* Stand-Up Pouches */}
          <div className="mb-24">
            <h3 className="inline-block bg-black text-[#D4FF00] px-6 py-2 font-black text-2xl mb-12 transform -rotate-1 border-2 border-black">
              STAND-UP POUCH RANGE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {standUpSizes.map((item) => (
                <motion.div 
                  key={item.size}
                  whileHover={{ y: -10 }}
                  className="group border-4 border-black cursor-pointer bg-white relative overflow-hidden"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] bg-gray-100 border-b-4 border-black flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.size} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-2xl">{item.size}</span>
                      <span className="text-[10px] bg-black text-white px-1 font-black">{item.capacity}</span>
                    </div>
                    <p className="text-[10px] font-bold font-['JetBrains_Mono'] opacity-60 leading-tight">{item.dim}</p>
                    <p className="text-[8px] mt-2 font-black uppercase text-magenta-600 line-clamp-1">{item.bestFor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flat Bottom Bags */}
          <div>
            <h3 className="inline-block bg-[#00FFFF] text-black px-6 py-2 font-black text-2xl mb-12 transform rotate-1 border-2 border-black">
              FLAT BOTTOM BAG RANGE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {flatBottomSizes.map((item) => (
                <motion.div 
                  key={item.size}
                  whileHover={{ y: -10 }}
                  className="group border-4 border-black cursor-pointer bg-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] bg-gray-100 border-b-4 border-black flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.size} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-2xl">{item.size}</span>
                      <span className="text-[10px] bg-cyan-600 text-white px-1 font-black">{item.capacity}</span>
                    </div>
                    <p className="text-[10px] font-bold font-['JetBrains_Mono'] opacity-60 leading-tight">{item.dim}</p>
                    <p className="text-[8px] mt-2 font-black uppercase text-blue-600 line-clamp-1">{item.bestFor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <NeoCard color="bg-white" className="!p-12">
              <h3 className="font-black text-4xl uppercase mb-8 flex items-center gap-4">
                <Calculator className="w-12 h-12 text-magenta-600" />
                The Fill Test
              </h3>
              <div className="space-y-8 font-['JetBrains_Mono']">
                <div className="relative pl-12 border-l-4 border-black py-2">
                  <div className="absolute -left-6 top-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-black">1</div>
                  <h4 className="font-black text-xl mb-2">DENSITY OVER WEIGHT</h4>
                  <p className="text-sm opacity-70 leading-relaxed">250g of popcorn requires 3x more space than 250g of salt. Measure your product in <strong>Volume (ML)</strong> for accurate sizing.</p>
                </div>
                <div className="relative pl-12 border-l-4 border-black py-2">
                  <div className="absolute -left-6 top-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-black">2</div>
                  <h4 className="font-black text-xl mb-2">ADD HEADSPACE</h4>
                  <p className="text-sm opacity-70 leading-relaxed">Ensure you have <strong>40mm - 60mm</strong> of empty space above the product to allow for the heat seal, zipper, and tear notch operation.</p>
                </div>
              </div>
            </NeoCard>

            <NeoCard color="bg-black text-[#D4FF00]" className="!p-12">
              <h3 className="font-black text-4xl uppercase mb-8 flex items-center gap-4">
                <ArrowRightLeft className="w-12 h-12" />
                Quick Convert
              </h3>
              <div className="grid grid-cols-2 gap-12 font-['JetBrains_Mono']">
                <div>
                  <h4 className="font-black text-white mb-6 uppercase text-sm border-b-2 border-[#D4FF00] pb-2 inline-block">MM to Inches</h4>
                  <ul className="space-y-3 font-bold">
                    <li>100mm = 3.94"</li>
                    <li>150mm = 5.91"</li>
                    <li>200mm = 7.87"</li>
                    <li>250mm = 9.84"</li>
                    <li>300mm = 11.81"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-white mb-6 uppercase text-sm border-b-2 border-[#D4FF00] pb-2 inline-block">Grams to Oz</h4>
                  <ul className="space-y-3 font-bold">
                    <li>100g = 3.5 oz</li>
                    <li>250g = 8.8 oz</li>
                    <li>500g = 17.6 oz</li>
                    <li>1kg = 35.2 oz</li>
                    <li>2kg = 70.5 oz</li>
                  </ul>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <NeoBadge color="magenta">FREE_SAMPLE_PROTOCOL</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none">Not Sure?<br/>Test it.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black max-w-2xl mx-auto">
            Order our "Size Kit" which includes all standard sizes for you to test-fill with your own product before committing to production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">Request Size Kit</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Speak to an Expert
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
              <img src={selectedImage} alt="Size Detail" className="max-w-full max-h-[85vh] object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute -bottom-4 left-4 right-4 bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-black p-4 text-center border-4 border-white uppercase text-xl">
                Visual Comparison Mode: Standard 330ml Can Reference
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PouchLayout>
  )
}
