import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, RefreshCw, Package, CheckCircle, Clock, X, ChevronLeft, ChevronRight, Zap, Shield, Coffee, Baby, Sparkles, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../components/DualDomainSEOHead'

// Reclosure gallery images
const recloseGallery = [
  { src: '/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp', title: 'Reclosure Options', desc: 'Keep your products fresh after every use' },
  { src: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp', title: 'All Closure Types', desc: 'Zippers, spouts, tin-ties, and more' },
  { src: '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp', title: 'Easy Zipper', desc: 'Simple press-to-close for everyday products' },
  { src: '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp', title: 'Spout Cap', desc: 'Perfect for sauces and baby food' },
  { src: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp', title: 'Tin Tie', desc: 'Classic look for coffee brands' },
  { src: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp', title: 'Degassing Valve', desc: 'Keeps roasted coffee fresh' },
]

// Neo-Brutalist Button Component
const NeoButton = ({ children, to, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-block text-center"
  const variants = {
    primary: "bg-[#10b981] text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    yellow: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
  return <Link to={to} className={`${baseStyle} ${variants[variant]} ${className} shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}>{children}</Link>
}

// Neo-Brutalist Card Component
const NeoCard = ({ children, color = 'bg-white', className = '' }: any) => {
  return (
    <div className={`${color} border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      {children}
    </div>
  )
}

export default function PouchEcoReclosurePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    let newIndex = direction === 'prev' ? selectedImage.index - 1 : selectedImage.index + 1
    if (newIndex < 0) newIndex = recloseGallery.length - 1
    if (newIndex >= recloseGallery.length) newIndex = 0
    setSelectedImage({ src: recloseGallery[newIndex].src, index: newIndex })
  }

  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Stay Fresh',
      description: 'Keep your products fresh after every open. No more stale snacks or dried out coffee!',
      color: 'bg-[#10b981] text-white'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Happy Customers',
      description: 'Convenient closures mean happy repeat buyers. Easy to use, easy to love.',
      color: 'bg-[#D4FF00]'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Secure',
      description: 'Child-resistant options for cannabis, vitamins, and products that need extra safety.',
      color: 'bg-[#00FFFF]'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Premium Feel',
      description: 'Zippers and spouts add value to your packaging. Small detail, big impact!',
      color: 'bg-[#FF00FF]'
    }
  ]

  const closureTypes = [
    {
      type: 'Press-to-Close Zipper',
      icon: <RefreshCw className="w-6 h-6" />,
      color: 'bg-[#10b981]/10 border-[#10b981]',
      points: [
        'Most affordable option',
        'Works for 500+ opens',
        'Available on all bags',
        'Clear or colored'
      ]
    },
    {
      type: 'Slider Zipper',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-blue-50 border-blue-400',
      points: [
        'Easy one-hand use',
        'Satisfying "click" sound',
        'Great for snacks',
        'Premium upgrade'
      ]
    },
    {
      type: 'Spout & Cap',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-purple-50 border-purple-400',
      points: [
        'Perfect for liquids',
        'Controlled pouring',
        'Screw or flip-top',
        'Baby food approved'
      ]
    },
    {
      type: 'Tin Tie',
      icon: <Coffee className="w-6 h-6" />,
      color: 'bg-amber-50 border-amber-400',
      points: [
        'Classic coffee look',
        'Artisan bakery vibe',
        'Budget-friendly',
        'Easy to fold'
      ]
    }
  ]

  const productMatch = [
    { product: 'Coffee Beans', closure: 'Tin-tie + Valve', reason: 'Classic look + lets coffee breathe' },
    { product: 'Snacks & Chips', closure: 'Slider Zipper', reason: 'Easy one-hand snacking' },
    { product: 'Pet Treats', closure: 'Press-to-Close', reason: 'Affordable & durable' },
    { product: 'Baby Food', closure: 'Spout + Cap', reason: 'Safe & mess-free' },
    { product: 'Cannabis', closure: 'Child-Resistant', reason: 'Legal requirement' },
    { product: 'Hot Sauce', closure: 'Flip-Top Spout', reason: 'Squeeze & pour control' }
  ]

  return (
    <>
      <DualDomainSEOHead 
        title="Reclosure Options | Zippers & Spouts | Pouch.eco"
        description="Keep products fresh with resealable zippers, spout caps, and tin-ties. From just 500 units. Perfect for coffee, snacks, baby food, and more. Easy to use, loved by customers."
        keywords={['resealable pouches', 'zipper bags', 'spout pouches', 'reclosure options', 'child resistant packaging', 'tin tie bags', 'coffee valve pouches']}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Space_Grotesk'] font-black text-7xl md:text-9xl leading-none mb-6"
          >
            KEEP IT<br/>
            <span className="text-[#D4FF00]">FRESH</span>
          </motion.h1>
          <p className="font-['JetBrains_Mono'] text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Resealable zippers, spout caps & more.<br/>
            Happy customers. Fresh products. Every time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeoButton to="/store" variant="yellow">Shop Starter Kits</NeoButton>
            <NeoButton to="/contact" variant="secondary">Get Free Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl text-center mb-12">
            WHY ADD <span className="text-[#10b981]">RECLOSURE?</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <NeoCard color={feature.color}>
                  {feature.icon}
                  <h3 className="font-black text-2xl uppercase mt-4 mb-2">{feature.title}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm">{feature.description}</p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closure Types */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl text-center mb-12">
            CHOOSE YOUR <span className="text-[#10b981]">CLOSURE</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {closureTypes.map((closure, idx) => (
              <NeoCard key={idx} color={closure.color} className="border-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border-4 border-black">
                    {closure.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-2xl uppercase mb-3">{closure.type}</h3>
                    <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                      {closure.points.map((point, pidx) => (
                        <li key={pidx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl text-center mb-12">
            SEE THEM IN <span className="text-[#10b981]">ACTION</span>
          </h2>
          <p className="text-center font-['JetBrains_Mono'] mb-8 text-neutral-600">
            Click any image to see it bigger →
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {recloseGallery.map((img, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedImage({ src: img.src, index: idx })}
                whileHover={{ scale: 1.05 }}
                className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden bg-white"
              >
                <div className="aspect-[4/3]">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-left">
                  <h4 className="font-black text-sm uppercase mb-1">{img.title}</h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-600">{img.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

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
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-neutral-100"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
              className="absolute left-4 p-2 bg-white rounded-full hover:bg-neutral-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
              className="absolute right-4 p-2 bg-white rounded-full hover:bg-neutral-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.img
              key={selectedImage.src}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.src}
              alt="Reclosure detail"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Match Table */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl text-center mb-12">
            WHAT'S RIGHT FOR <span className="text-[#10b981]">YOUR PRODUCT?</span>
          </h2>
          <NeoCard color="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full font-['JetBrains_Mono']">
                <thead>
                  <tr className="border-b-4 border-black">
                    <th className="text-left p-4 font-black uppercase">Your Product</th>
                    <th className="text-left p-4 font-black uppercase">Best Closure</th>
                    <th className="text-left p-4 font-black uppercase">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {productMatch.map((row, idx) => (
                    <tr key={idx} className={idx !== productMatch.length - 1 ? 'border-b-2 border-neutral-200' : ''}>
                      <td className="p-4 font-bold">{row.product}</td>
                      <td className="p-4 text-[#10b981] font-bold">{row.closure}</td>
                      <td className="p-4 text-neutral-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl text-center mb-12">
            QUICK <span className="text-[#10b981]">FACTS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-[#D4FF00]" className="text-center">
              <div className="text-6xl font-black mb-2">500</div>
              <div className="font-['JetBrains_Mono'] text-sm">Minimum order (zippers)</div>
            </NeoCard>
            <NeoCard color="bg-[#00FFFF]" className="text-center">
              <div className="text-6xl font-black mb-2">1,000</div>
              <div className="font-['JetBrains_Mono'] text-sm">Minimum order (spouts)</div>
            </NeoCard>
            <NeoCard color="bg-[#FF00FF]" className="text-center">
              <div className="text-6xl font-black mb-2">5+</div>
              <div className="font-['JetBrains_Mono'] text-sm">Different closure types</div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl text-center mb-12">
            COMMON <span className="text-[#10b981]">QUESTIONS</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: 'Are zippers eco-friendly?', a: 'Yes! Mono-PE zippers are recyclable, PLA zippers are compostable. We help you choose.' },
              { q: 'How much do closures add to cost?', a: 'Zippers add $0.05-0.15 per bag. Spouts add $0.20-0.40. Worth it for freshness!' },
              { q: 'Can I get child-resistant?', a: 'Absolutely! We have ASTM D3475 certified child-resistant zippers and caps.' },
              { q: 'Can I test samples first?', a: 'Yes! We send free samples so you can feel and test before ordering.' }
            ].map((item, idx) => (
              <NeoCard key={idx} color="bg-white">
                <h3 className="font-black text-xl mb-2">{item.q}</h3>
                <p className="font-['JetBrains_Mono'] text-neutral-600">{item.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Space_Grotesk'] font-black text-6xl mb-6">
            READY TO ADD CLOSURES?
          </h2>
          <p className="font-['JetBrains_Mono'] text-xl mb-8">
            Get free samples or order your first batch today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeoButton to="/store" variant="yellow">Shop Starter Kits</NeoButton>
            <NeoButton to="/contact" variant="secondary">Get Free Samples</NeoButton>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-['Space_Grotesk'] font-black text-3xl mb-4">
            PACKAGING TIPS & TRICKS
          </h3>
          <p className="font-['JetBrains_Mono'] mb-6">
            Get helpful guides, new products, and startup stories
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border-4 border-white bg-transparent text-white placeholder-white/50 font-['JetBrains_Mono']"
            />
            <button className="px-8 py-3 bg-[#D4FF00] text-black font-black uppercase border-4 border-white hover:bg-[#c4ef00] transition">
              Join
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-['JetBrains_Mono'] text-sm text-neutral-400">
            © 2025 Pouch.eco • Eco-friendly packaging for startups
          </p>
          <div className="flex gap-6 justify-center mt-4 font-['JetBrains_Mono'] text-sm">
            <Link to="/contact" className="hover:text-[#10b981]">Contact</Link>
            <Link to="/size-guide" className="hover:text-[#10b981]">Size Guide</Link>
            <Link to="/solutions" className="hover:text-[#10b981]">Solutions</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
