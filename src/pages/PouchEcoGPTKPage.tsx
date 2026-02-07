import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf, Shield, CheckCircle, Package, Coffee, 
  Sparkles, ArrowRight, Box, Heart, Star
} from 'lucide-react'
import DualDomainSEOHead from '../components/DualDomainSEOHead'
import { getBrandConfig } from '../utils/domain'
import { getImage } from '../utils/imageMapper'
import Newsletter from '../components/Newsletter'

/**
 * Pouch.eco GPTK Material Page - B2C Version
 * 
 * GPTK = Gloss/Paper/Triplex/Kraft
 * WordPress URL: /gptk → React URL: /materials/cello-kraft-triplex
 * 
 * Features:
 * - Compostable kraft exterior
 * - Clear window option
 * - Medium barrier (6-12 months)
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

export default function PouchEcoGPTKPage() {
  const brand = getBrandConfig()

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Compostable Kraft',
      description: 'Natural brown kraft paper exterior that breaks down in industrial composting facilities.',
      color: 'bg-[#10b981] text-white'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Clear Window',
      description: 'Optional cellulose window lets customers see your product while staying eco-friendly.',
      color: 'bg-[#00FFFF]'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Medium Barrier',
      description: '6-12 month shelf life. Perfect for most dry goods, coffee, tea, and snacks.',
      color: 'bg-[#D4FF00]'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Low MOQ',
      description: 'Start with just 500 units. Test your market without huge commitments.',
      color: 'bg-[#FF00FF]'
    }
  ]

  const specs = [
    { label: 'Structure', value: 'Kraft / Cello / PE (Triplex)' },
    { label: 'Shelf Life', value: '6-12 months' },
    { label: 'MOQ', value: '500 units' },
    { label: 'Certifications', value: 'EN13432, BPI, ASTM D6400' },
    { label: 'Barrier Type', value: 'Medium (moisture + oxygen)' },
    { label: 'Composting', value: 'Industrial only (90-180 days)' }
  ]

  const idealFor = [
    'Coffee beans & ground coffee',
    'Tea leaves & herbal blends',
    'Granola & trail mix',
    'Dried fruits & nuts',
    'Protein powders',
    'Pet treats',
    'Bath salts & soaps',
    'Spices & herbs',
    'Cookies & baked goods',
    'Organic snacks'
  ]

  const benefits = [
    '✅ Eco-friendly kraft paper look',
    '✅ Stand out on shelves naturally',
    '✅ Degassing valve compatible',
    '✅ Resealable zipper available'
  ]

  const considerations = [
    '⚠️ Not home compostable',
    '⚠️ Clear window reduces barrier',
    '⚠️ Not suitable for high-fat products',
    '⚠️ Longer shelf life? Consider aluminum'
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-black font-['Space_Grotesk'] selection:bg-[#10b981] selection:text-white">
      <DualDomainSEOHead
        title="Kraft Paper Pouches with Clear Window - GPTK Material"
        description="Compostable kraft paper pouches with optional cellulose window. 6-12 month shelf life. Perfect for coffee, tea, snacks, and pet treats. Industrial compostable. From 500 units."
        keywords={['kraft pouches', 'compostable packaging', 'kraft paper bags', 'clear window pouches', 'coffee bags kraft', 'eco kraft packaging']}
        ogImage={getImage('kraft/kraft800')}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b-4 border-black bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">🌱 COMPOSTABLE MATERIAL</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
                Kraft Paper<br/>
                <span className="text-[#10b981]">Pouches</span>
              </h1>
              
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl mb-8">
                Natural brown kraft exterior with optional clear window. Industrial compostable. Perfect for coffee, tea, and organic snacks. 6-12 month shelf life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <NeoButton to="/store?material=kraft" variant="primary">
                  Shop Kraft Pouches
                </NeoButton>
                <NeoButton to="/contact" variant="secondary">
                  Get Free Sample
                </NeoButton>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <NeoCard color="bg-white" className="text-center">
                  <div className="font-black text-3xl text-[#10b981] mb-1">500</div>
                  <div className="font-['JetBrains_Mono'] text-xs">Min Order</div>
                </NeoCard>
                <NeoCard color="bg-white" className="text-center">
                  <div className="font-black text-3xl text-[#10b981] mb-1">6-12</div>
                  <div className="font-['JetBrains_Mono'] text-xs">Months Shelf Life</div>
                </NeoCard>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <NeoCard className="bg-gradient-to-br from-amber-100 to-amber-50 !p-0 overflow-hidden">
                <img 
                  src={getImage('kraft/kraft800')}
                  alt="Kraft Paper Pouches"
                  className="w-full h-full object-contain p-8"
                />
              </NeoCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-4">
            Why Choose <span className="text-[#10b981]">Kraft?</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto">
            Natural, sustainable, and perfect for brands who want an organic aesthetic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <NeoCard className={`${feature.color} h-full`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-black text-xl uppercase mb-2">{feature.title}</h3>
                <p className="font-['JetBrains_Mono'] text-sm">
                  {feature.description}
                </p>
              </NeoCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 md:px-6 border-t-4 border-black bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black text-5xl uppercase mb-4">
              Tech <span className="text-[#10b981]">Specs</span>
            </h2>
          </div>

          <NeoCard className="bg-neutral-50">
            <div className="grid md:grid-cols-2 gap-4">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex justify-between items-center border-b-2 border-black pb-2">
                  <span className="font-black uppercase text-sm">{spec.label}</span>
                  <span className="font-['JetBrains_Mono'] text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Ideal Applications */}
      <section className="py-24 px-4 md:px-6 border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black text-5xl md:text-7xl uppercase mb-4">
              Perfect <span className="text-[#10b981]">For</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {idealFor.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-center gap-3 bg-white border-4 border-black px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="font-['JetBrains_Mono'] text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 px-4 md:px-6 border-t-4 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#10b981] text-white">
              <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-2">
                <Star className="w-8 h-8" /> Benefits
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="font-['JetBrains_Mono'] text-sm flex items-start gap-2">
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-[#D4FF00]">
              <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-2">
                <Shield className="w-8 h-8" /> Considerations
              </h3>
              <ul className="space-y-3">
                {considerations.map((con, idx) => (
                  <li key={idx} className="font-['JetBrains_Mono'] text-sm flex items-start gap-2">
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 border-t-4 border-black bg-[#10b981] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Ready to Go<br/>
            Natural?
          </h2>
          <p className="font-['JetBrains_Mono'] text-xl">
            Order kraft pouches from 500 units. Free design consultation and sample kit included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton to="/store?material=kraft" variant="yellow">
              Browse Kraft Options
            </NeoButton>
            <NeoButton to="/contact" variant="secondary">
              Talk to Expert
            </NeoButton>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ EN13432 CERTIFIED
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ BPI APPROVED
            </div>
            <div className="bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              ✓ FOOD SAFE
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 border-t-4 border-black">
        <div className="max-w-2xl mx-auto">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#10b981] flex items-center justify-center border-2 border-black">
                  <Leaf className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-xl">POUCH.ECO</span>
              </div>
              <p className="text-sm text-gray-600 font-['JetBrains_Mono']">
                Eco packaging for the next generation of sustainable brands.
              </p>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Materials</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/materials/cello-kraft-triplex" className="hover:text-[#10b981]">Kraft Pouches</Link></li>
                <li><Link to="/materials/compostable" className="hover:text-[#10b981]">Compostable</Link></li>
                <li><Link to="/materials/recyclable" className="hover:text-[#10b981]">Recyclable</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/solutions" className="hover:text-[#10b981]">Solutions</Link></li>
                <li><Link to="/size-guide" className="hover:text-[#10b981]">Size Guide</Link></li>
                <li><Link to="/testimonials" className="hover:text-[#10b981]">Testimonials</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-['JetBrains_Mono']">
                <li>{brand.email}</li>
                <li>{brand.phone}</li>
                <li>Mon-Fri 9am-6pm PST</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-black pt-8 text-center text-sm text-gray-600 font-['JetBrains_Mono']">
            © 2026 {brand.name}. All rights reserved. Made with 💚 for the planet.
          </div>
        </div>
      </footer>
    </div>
  )
}
