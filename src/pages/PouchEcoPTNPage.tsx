import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf, Shield, CheckCircle, Package, Coffee, 
  Sparkles, ArrowRight, Box, Star, Zap, Droplet
} from 'lucide-react'
import DualDomainSEOHead from '../components/DualDomainSEOHead'
import { getBrandConfig } from '../utils/domain'
import { getImage } from '../utils/imageMapper'
import Newsletter from '../components/Newsletter'

/**
 * Pouch.eco PTN Material Page - B2C Version
 * 
 * PTN = Paper/Triplex/Natural (Kraft Duplex)
 * WordPress URL: /ptn → React URL: /materials/kraft-duplex
 * 
 * Features:
 * - Affordable kraft duplex structure
 * - No window option (opaque)
 * - Basic barrier (3-6 months)
 * - Ultra-low MOQ for startups
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

export default function PouchEcoPTNPage() {
  const brand = getBrandConfig()

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Natural Kraft',
      description: 'Simple kraft duplex structure - eco-friendly paper-based packaging at an affordable price.',
      color: 'bg-[#10b981] text-white'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Budget Friendly',
      description: 'Most affordable option for startups and small brands. Perfect for testing the market.',
      color: 'bg-[#D4FF00]'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Basic Barrier',
      description: '3-6 month shelf life. Great for dry goods that don\'t need extended protection.',
      color: 'bg-[#00FFFF]'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Ultra-Low MOQ',
      description: 'Start with only 500 units. No huge investment needed to launch your brand.',
      color: 'bg-[#FF00FF]'
    }
  ]

  const specs = [
    { label: 'Structure', value: 'Kraft / PE (Duplex)' },
    { label: 'Shelf Life', value: '3-6 months' },
    { label: 'MOQ', value: '500 units' },
    { label: 'Certifications', value: 'EN13432 (Kraft layer)' },
    { label: 'Barrier Type', value: 'Basic (moisture only)' },
    { label: 'Window Option', value: 'None (opaque)' }
  ]

  const idealFor = [
    'Tea bags & herbal blends',
    'Dried herbs & spices',
    'Granola & cereal',
    'Cookies & snacks',
    'Pet treats',
    'Seeds & grains',
    'Dried flowers',
    'Bath products',
    'Craft supplies',
    'Sample packs'
  ]

  const benefits = [
    'Most affordable kraft pouch option',
    'Compostable kraft exterior layer',
    'Quick 2-3 week turnaround',
    'Ultra-low 500 unit MOQ',
    'Perfect for market testing',
    'Natural brown aesthetic',
    'Lightweight and durable',
    'Easy to print on'
  ]

  const considerations = [
    'Basic barrier only (3-6 months)',
    'No clear window option',
    'Not suitable for oily products',
    'Moisture protection is limited',
    'Requires dry storage',
    'May not be suitable for high-moisture climates'
  ]

  return (
    <>
      <DualDomainSEOHead 
        title="Kraft Duplex Pouches | Affordable Paper Packaging | Pouch.eco"
        description="Natural kraft paper pouches with basic barrier protection. Perfect for startups and small brands. Ultra-low 500 unit MOQ. Quick turnaround. Budget-friendly eco packaging."
        keywords={["kraft duplex pouches", "affordable kraft packaging", "paper pouches", "eco-friendly packaging", "low MOQ pouches", "startup packaging", "kraft paper bags"]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#10b981] to-[#059669] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-black text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
                Kraft Duplex<br/>
                <span className="text-[#D4FF00]">Pouches</span>
              </h1>
              
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl mb-8">
                Natural brown kraft duplex structure. Budget-friendly eco packaging. 
                Perfect for startups and market testing. 3-6 month shelf life.
              </p>

              <div className="flex flex-wrap gap-4">
                <NeoButton to="/store?material=kraft-duplex" variant="yellow">
                  Shop Starter Kits
                </NeoButton>
                <NeoButton to="/sample-kit" variant="secondary">
                  Order Samples
                </NeoButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <NeoCard color="bg-white" className="text-center">
                <div className="text-4xl font-black mb-2">500</div>
                <div className="font-bold uppercase text-sm">Unit MOQ</div>
              </NeoCard>
              <NeoCard color="bg-[#D4FF00]" className="text-center">
                <div className="text-4xl font-black mb-2">3-6</div>
                <div className="font-bold uppercase text-sm">Month Shelf</div>
              </NeoCard>
              <NeoCard color="bg-[#00FFFF]" className="text-center">
                <div className="text-4xl font-black mb-2">2-3</div>
                <div className="font-bold uppercase text-sm">Week Lead</div>
              </NeoCard>
              <NeoCard color="bg-white" className="text-center">
                <div className="text-4xl font-black mb-2">$$$</div>
                <div className="font-bold uppercase text-sm">Budget Price</div>
              </NeoCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-12 text-center"
          >
            Why Choose<br/>
            <span className="text-[#10b981]">Kraft Duplex?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <NeoCard color={feature.color} className="h-full hover:scale-105 transition-transform">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-black text-2xl uppercase mb-3">{feature.title}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">{feature.description}</p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-12 text-center"
          >
            Technical<br/>
            <span className="text-[#10b981]">Specifications</span>
          </motion.h2>

          <NeoCard color="bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              {specs.map((spec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-4 border-black p-4 bg-gray-100"
                >
                  <div className="font-['JetBrains_Mono'] text-sm text-gray-600 mb-1">{spec.label}</div>
                  <div className="font-black text-xl">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Ideal Applications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-12 text-center"
          >
            Perfect For<br/>
            <span className="text-[#10b981]">These Products</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {idealFor.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <NeoCard color="bg-[#D4FF00]" className="text-center hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-2">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="font-bold uppercase text-sm">{item}</div>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-5xl md:text-6xl uppercase mb-12 text-center"
          >
            Benefits &<br/>
            <span className="text-[#10b981]">Considerations</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <NeoCard color="bg-[#10b981] text-white">
                <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8" />
                  Benefits
                </h3>
                <ul className="space-y-3 font-['JetBrains_Mono']">
                  {benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </NeoCard>
            </motion.div>

            {/* Considerations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <NeoCard color="bg-white">
                <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <Droplet className="w-8 h-8" />
                  Considerations
                </h3>
                <ul className="space-y-3 font-['JetBrains_Mono']">
                  {considerations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 border-4 border-black flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </NeoCard>
            </motion.div>
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
            Ready to Launch<br/>
            <span className="text-[#D4FF00]">Your Brand?</span>
          </motion.h2>

          <p className="font-['JetBrains_Mono'] text-xl mb-8 max-w-2xl mx-auto">
            Start with just 500 units. No huge investment. Test your market with affordable kraft duplex pouches.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <NeoButton to="/store?material=kraft-duplex" variant="yellow">
              Shop Now
            </NeoButton>
            <NeoButton to="/sample-kit" variant="secondary">
              Order Samples
            </NeoButton>
            <NeoButton to="/solutions" variant="secondary">
              View Solutions
            </NeoButton>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            <NeoCard color="bg-white text-black" className="px-6 py-3">
              <div className="font-black uppercase text-sm">500 Unit MOQ</div>
            </NeoCard>
            <NeoCard color="bg-white text-black" className="px-6 py-3">
              <div className="font-black uppercase text-sm">2-3 Week Lead</div>
            </NeoCard>
            <NeoCard color="bg-white text-black" className="px-6 py-3">
              <div className="font-black uppercase text-sm">Free Design Help</div>
            </NeoCard>
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
              <h3 className="font-black text-2xl uppercase mb-4">Shop</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/store" className="hover:text-[#10b981]">All Products</Link></li>
                <li><Link to="/store?category=starter" className="hover:text-[#10b981]">Starter Kits</Link></li>
                <li><Link to="/sample-kit" className="hover:text-[#10b981]">Sample Kit</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">Materials</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/materials/cello-kraft-triplex" className="hover:text-[#10b981]">GPTK (Kraft)</Link></li>
                <li><Link to="/materials/kraft-duplex" className="hover:text-[#10b981]">PTN (Duplex)</Link></li>
                <li><Link to="/materials" className="hover:text-[#10b981]">All Materials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">Resources</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/solutions" className="hover:text-[#10b981]">Solutions</Link></li>
                <li><Link to="/size-guide" className="hover:text-[#10b981]">Size Guide</Link></li>
                <li><Link to="/contact" className="hover:text-[#10b981]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase mb-4">Company</h3>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                <li><Link to="/about" className="hover:text-[#10b981]">About Us</Link></li>
                <li><Link to="/sustainability" className="hover:text-[#10b981]">Sustainability</Link></li>
                <li><Link to="/blog" className="hover:text-[#10b981]">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-4 border-white pt-8 text-center">
            <p className="font-['JetBrains_Mono'] text-sm">
              © 2026 Pouch.eco • Eco-Friendly Packaging for Everyone
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
