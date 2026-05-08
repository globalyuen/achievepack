import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Ruler, Package, Download, Zap, CheckCircle, ArrowRight, Eye, Calculator, Maximize2, Settings, ArrowRightLeft, X, Box } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchSizeGuidePage() {
  const baseUrl = getBaseUrl()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const standUpSizes = [
    { size: 'XXXS', image: '/imgs/store/size/stand-up/xxxs.webp', capacity: '10-25g', dim: '80×130+50mm' },
    { size: 'XXS', image: '/imgs/store/size/stand-up/xxs.webp', capacity: '25-50g', dim: '100×150+60mm' },
    { size: 'XS', image: '/imgs/store/size/stand-up/xs.webp', capacity: '50-75g', dim: '120×185+70mm' },
    { size: 'S', image: '/imgs/store/size/stand-up/s.webp', capacity: '75-150g', dim: '140×200+80mm' },
    { size: 'L', image: '/imgs/store/size/stand-up/l.webp', capacity: '250-500g', dim: '160×240+90mm' },
    { size: 'XL', image: '/imgs/store/size/stand-up/xl.webp', capacity: '500g-1kg', dim: '200×300+100mm' },
    { size: 'XXL', image: '/imgs/store/size/stand-up/xxl.webp', capacity: '1-2kg', dim: '250×350+120mm' },
  ]

  const flatBottomSizes = [
    { size: 'XXXS', image: '/imgs/store/size/flat-bottom/xxxs.webp', capacity: '25-50g', dim: '90×180×50mm' },
    { size: 'XXS', image: '/imgs/store/size/flat-bottom/xxs.webp', capacity: '50-100g', dim: '95×190×55mm' },
    { size: 'XS', image: '/imgs/store/size/flat-bottom/xs.webp', capacity: '100-200g', dim: '100×200×60mm' },
    { size: 'S', image: '/imgs/store/size/flat-bottom/s.webp', capacity: '200-350g', dim: '120×250×70mm' },
    { size: 'L', image: '/imgs/store/size/flat-bottom/l.webp', capacity: '500g-1kg', dim: '150×320×90mm' },
    { size: 'XL', image: '/imgs/store/size/flat-bottom/xl.webp', capacity: '1-1.5kg', dim: '180×350×100mm' },
    { size: 'XXL', image: '/imgs/store/size/flat-bottom/xxl.webp', capacity: '1.5-2.5kg', dim: '200×400×120mm' },
  ]

  const FEATURES = [
    { icon: CheckCircle, title: 'Round Corner & Tear Notch', desc: 'Safety first with premium finishing' },
    { icon: Zap, title: 'Reclosable Zipper', desc: 'Superior freshness seal for repeated use' },
    { icon: Package, title: 'Multi-Layer Barrier', desc: 'Oxygen and moisture protection protocol' },
    { icon: Ruler, title: 'Reinforced Gusset', desc: 'Stability for maximum shelf impact' },
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Pouch Size Guide | Visual Reference & Capacity Chart | Pouch.eco</title>
        <meta name="description" content="Ultimate size guide for stand-up pouches and flat bottom bags. Compare sizes to cola cans, check metric/imperial capacities, and download dielines." />
        <link rel="canonical" href={`${baseUrl}/size-guide`} />
        <meta name="keywords" content="pouch sizes, stand up pouch dimensions, flat bottom bag guide, packaging capacity chart, cola can size comparison, Pouch.eco" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">PRECISION_GUIDE_V2.6</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase">
            Size.<br/>
            Matters.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Exactly.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            &gt; Visual comparison vs soda can.<br/>
            &gt; Capacity charts for all formats.<br/>
            &gt; Metric to Imperial conversion included.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <NeoButton variant="primary" to="/materials/catalog">Download Dielines</NeoButton>
            <NeoButton variant="secondary" to="/sample">Request Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase">Visual Reference</h2>
            <p className="text-xl font-bold font-['JetBrains_Mono'] mt-4 text-gray-600">
              Reference: Standard 330ml Soda Can (122mm Height)
            </p>
          </div>

          <div className="space-y-24">
            {/* Stand-Up Pouches */}
            <div>
              <h3 className="inline-block bg-black text-white px-4 py-2 font-black text-2xl mb-8 transform -rotate-1">
                STAND-UP POUCHES
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {standUpSizes.map((item) => (
                  <div 
                    key={item.size}
                    className="group border-2 border-black cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] transition-all bg-white"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 border-b-2 border-black">
                      <img src={item.image} alt={item.size} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      <div className="absolute top-2 right-2 bg-white border-2 border-black p-1">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-black text-xl">{item.size}</p>
                      <p className="text-[10px] font-bold font-['JetBrains_Mono']">{item.capacity}</p>
                      <p className="text-[8px] opacity-60">{item.dim}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flat Bottom Bags */}
            <div>
              <h3 className="inline-block bg-[#D4FF00] text-black px-4 py-2 font-black text-2xl mb-8 transform rotate-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                FLAT BOTTOM BAGS
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {flatBottomSizes.map((item) => (
                  <div 
                    key={item.size}
                    className="group border-2 border-black cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(0,255,255,1)] transition-all bg-white"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 border-b-2 border-black">
                      <img src={item.image} alt={item.size} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      <div className="absolute top-2 right-2 bg-white border-2 border-black p-1">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-black text-xl">{item.size}</p>
                      <p className="text-[10px] font-bold font-['JetBrains_Mono']">{item.capacity}</p>
                      <p className="text-[8px] opacity-60">{item.dim}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Dimensions Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculation Guide */}
            <NeoCard color="bg-white">
              <h3 className="font-black text-4xl uppercase mb-8 flex items-center gap-3">
                <Calculator className="w-10 h-10 text-[#D4FF00] fill-black" />
                Capacity Calculation
              </h3>
              <div className="space-y-6 font-['JetBrains_Mono']">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-black text-lg mb-1">01. MEASURE VOLUME</h4>
                  <p className="text-sm opacity-70">Don't just use weight. 250g of feathers needs more space than 250g of lead. Measure your product volume in ML.</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-black text-lg mb-1">02. ADD HEADSPACE</h4>
                  <p className="text-sm opacity-70">Allow at least 30-50mm (1.2"-2") above the fill line for the zipper, heat seal, and tear notch.</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-black text-lg mb-1">03. GUSSET DEPTH</h4>
                  <p className="text-sm opacity-70">A deeper gusset creates more volume but shortens the effective height when filled.</p>
                </div>
              </div>
            </NeoCard>

            {/* Conversion Chart */}
            <NeoCard color="bg-black" className="text-white">
              <h3 className="font-black text-4xl uppercase mb-8 flex items-center gap-3 text-[#D4FF00]">
                <ArrowRightLeft className="w-10 h-10" />
                Global Units
              </h3>
              <div className="grid grid-cols-2 gap-8 font-['JetBrains_Mono'] text-sm">
                <div>
                  <h4 className="font-black text-[#D4FF00] mb-4">METRIC → IMPERIAL</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>100mm ≈ 3.94"</li>
                    <li>150mm ≈ 5.91"</li>
                    <li>200mm ≈ 7.87"</li>
                    <li>250mm ≈ 9.84"</li>
                    <li>300mm ≈ 11.81"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-[#D4FF00] mb-4">GRAMS → OUNCES</h4>
                  <ul className="space-y-2 opacity-80">
                    <li>100g ≈ 3.5 oz</li>
                    <li>250g ≈ 8.8 oz</li>
                    <li>500g ≈ 17.6 oz</li>
                    <li>1kg ≈ 35.2 oz</li>
                    <li>2kg ≈ 70.5 oz</li>
                  </ul>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-24 bg-[#D4FF00] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-black">
            <div className="space-y-4">
              <Settings className="w-12 h-12" />
              <h3 className="font-black text-3xl uppercase">Custom Sizes</h3>
              <p className="font-['JetBrains_Mono'] font-bold text-sm">Need a size that's not on the list? We manufacture custom dimensions from 500 units.</p>
            </div>
            <div className="bg-black/5 border-2 border-black p-6 space-y-2">
              <h4 className="font-black uppercase">Width Range</h4>
              <p className="font-['JetBrains_Mono'] text-2xl font-bold">50mm - 500mm</p>
            </div>
            <div className="bg-black/5 border-2 border-black p-6 space-y-2">
              <h4 className="font-black uppercase">Height Range</h4>
              <p className="font-['JetBrains_Mono'] text-2xl font-bold">80mm - 600mm</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (AIEO Optimized) */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-5xl md:text-6xl text-center mb-16 uppercase">Size FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "What is the best size for 250g (8.8oz) coffee beans?", a: "For 250g of coffee beans, we recommend our size 'L' stand-up pouch (160x240+90mm) or our size 'M' flat bottom bag (120x250x70mm) to account for the degassing valve and headspace." },
              { q: "How do I measure the gusset?", a: "The gusset is measured from one edge to the other when the bottom or side is fully extended. In our size chart, '+90mm' means a 45mm fold on each side of the gusset." },
              { q: "Do you offer free samples for size testing?", a: "Yes! We highly recommend ordering a sample pack before bulk production to test fill your product. Density varies greatly between products (e.g., protein powder vs. dried fruit)." },
              { q: "Can I download dielines for my designer?", a: "Absolutely. All standard dielines are available for download in our Material Hub. Custom sizes will have a unique dieline generated upon order placement." }
            ].map((faq, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                  <span className="text-[#D4FF00] bg-black px-2 py-0.5 text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 font-['JetBrains_Mono'] text-sm leading-relaxed border-l-2 border-black pl-4 mt-4">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-8xl uppercase text-white">Scale Up<br/>Your Brand</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            Order a sample pack today and find your perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton variant="primary" to="/sample">Order Samples</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="https://calendly.com/30-min-free-packaging-consultancy">
              Free Consultation
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
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={selectedImage}
              alt="Size Comparison Full View"
              className="max-w-full max-h-[90vh] object-contain border-4 border-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PouchLayout>
  )
}
