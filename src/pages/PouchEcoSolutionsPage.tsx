import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Package, Leaf, Sparkles, Rocket, Users, TrendingUp,
  CheckCircle, ArrowRight, Box, ShoppingBag, Coffee,
  Lightbulb, Target, Zap, Heart, Globe
} from 'lucide-react'
import DualDomainSEOHead from '../components/DualDomainSEOHead'
import { getBrandConfig } from '../utils/domain'
import { getImage } from '../utils/imageMapper'
import Newsletter from '../components/Newsletter'

/**
 * Pouch.eco Solutions Page - B2C focused
 * 
 * Shows eco packaging solutions for different use cases
 * - Startups & Small Batches
 * - Ecommerce Brands
 * - Sustainable Product Launches
 */

// Neo-Brutalist Components
const NeoButton = ({ children, to, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-block"
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
  <div className={`border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

export default function PouchEcoSolutionsPage() {
  const brand = getBrandConfig()

  const solutions = [
    {
      id: 'startup',
      icon: <Rocket className="w-16 h-16" />,
      title: 'Startup Packaging',
      tagline: 'Launch with Confidence',
      description: 'Perfect for new brands testing the market. Low 500-unit MOQ lets you start small and scale as you grow.',
      benefits: [
        '500 unit minimum order',
        'Free design consultation',
        'Fast 2-3 week turnaround',
        'No setup fees for digital printing'
      ],
      color: 'bg-[#D4FF00]',
      image: getImage('stand-up-pouch/stand800'),
      cta: 'Start Your Brand',
      link: '/store?category=starter'
    },
    {
      id: 'ecommerce',
      icon: <ShoppingBag className="w-16 h-16" />,
      title: 'Ecommerce Shipping',
      tagline: 'Lightweight & Durable',
      description: 'Save 22% on shipping costs with our lightweight compostable pouches. Perfect for direct-to-consumer brands.',
      benefits: [
        '70% lighter than rigid packaging',
        '22% shipping cost savings',
        'Unboxing experience optimized',
        'Custom branded mailers available'
      ],
      color: 'bg-[#00FFFF]',
      image: getImage('mailer/mailer800'),
      cta: 'Reduce Shipping Costs',
      link: '/solutions/ecommerce-shipping'
    },
    {
      id: 'sustainable',
      icon: <Leaf className="w-16 h-16" />,
      title: 'Sustainable Launch',
      tagline: 'Eco from Day One',
      description: 'Launch your sustainable product with packaging that matches your values. BPI certified compostable materials.',
      benefits: [
        'EN13432 & ASTM D6400 certified',
        'Home & industrial composting',
        'Carbon neutral shipping',
        'Story-worthy sustainability claims'
      ],
      color: 'bg-[#FF00FF]',
      image: getImage('compostable/compostable800'),
      cta: 'Go Compostable',
      link: '/materials/compostable'
    },
    {
      id: 'coffee',
      icon: <Coffee className="w-16 h-16" />,
      title: 'Coffee & Tea',
      tagline: 'Degassing Valve Included',
      description: 'Specialized bags for fresh roasted coffee and premium tea. One-way valve releases CO2 while keeping oxygen out.',
      benefits: [
        'One-way degassing valve',
        'High barrier kraft options',
        'Matte or glossy finish',
        'Resealable zipper available'
      ],
      color: 'bg-neutral-900 text-white',
      image: getImage('coffee/coffee800'),
      cta: 'Explore Coffee Bags',
      link: '/industry/coffee-tea'
    },
    {
      id: 'custom',
      icon: <Sparkles className="w-16 h-16" />,
      title: 'Custom Solutions',
      tagline: 'Your Vision, Our Expertise',
      description: 'Need something unique? Work with our team to create custom shapes, sizes, materials, and features.',
      benefits: [
        'Any size or shape',
        'Custom material structures',
        'Unique finishing options',
        'Dedicated project manager'
      ],
      color: 'bg-white',
      image: getImage('custom/custom800'),
      cta: 'Start Custom Project',
      link: '/contact'
    },
    {
      id: 'bulk',
      icon: <Box className="w-16 h-16" />,
      title: 'Bulk Orders',
      tagline: 'Scale with Savings',
      description: 'Ready to scale? Get volume pricing for orders over 10,000 units. Perfect for established brands.',
      benefits: [
        'Volume discounts available',
        'Flexible MOQ negotiation',
        'Priority production slots',
        'Dedicated account manager'
      ],
      color: 'bg-[#10b981] text-white',
      image: getImage('bulk/bulk800'),
      cta: 'Request Volume Quote',
      link: '/contact'
    }
  ]

  const useCases = [
    {
      title: 'Product Sampling',
      description: 'Test market fit with small batches',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Seasonal Products',
      description: 'Limited edition runs without excess inventory',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Crowdfunding Campaigns',
      description: 'Fulfill backers with professional packaging',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Retail Expansion',
      description: 'Shelf-ready packaging that stands out',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-black font-['Space_Grotesk'] selection:bg-[#10b981] selection:text-white">
      <DualDomainSEOHead
        title="Eco Packaging Solutions for Every Need"
        description="Find the perfect eco packaging solution for your brand. From startup packaging (500 MOQ) to bulk orders, ecommerce shipping to custom projects. Compostable & recyclable options available."
        keywords={['startup packaging', 'ecommerce packaging', 'coffee bags', 'custom pouches', 'bulk orders', 'sustainable packaging solutions']}
        ogImage={getImage('solutions-og')}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b-4 border-black bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
              <span className="font-['JetBrains_Mono'] font-bold text-sm">💡 SOLUTIONS FOR EVERY BRAND</span>
            </div>
            
            <h1 className="font-black text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
              Find Your<br/>
              <span className="text-[#10b981]">Perfect Fit</span>
            </h1>
            
            <p className="font-['JetBrains_Mono'] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Whether you're launching a startup, scaling an ecommerce brand, or creating custom packaging, we have eco-friendly solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoButton to="/store" variant="primary">
                Browse All Solutions
              </NeoButton>
              <NeoButton to="/contact" variant="secondary">
                Talk to an Expert
              </NeoButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Dual shadow effect */}
              <div className={`absolute inset-0 ${solution.color} translate-x-4 translate-y-4 border-4 border-black transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />
              
              <div className="relative bg-white border-4 border-black p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 text-[#10b981]">
                  {solution.icon}
                </div>

                {/* Title & Tagline */}
                <div className="inline-block bg-[#D4FF00] border-2 border-black px-2 py-1 text-xs font-black uppercase mb-3 w-fit">
                  {solution.tagline}
                </div>
                <h3 className="font-black text-3xl mb-3 uppercase">{solution.title}</h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-6">
                  {solution.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6 flex-1">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="font-['JetBrains_Mono']">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={solution.link}
                  className="flex items-center justify-center gap-2 bg-[#10b981] text-white border-4 border-black px-6 py-3 font-black uppercase text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  {solution.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 md:px-6 border-t-4 border-black bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black text-5xl md:text-7xl uppercase mb-4">
              Popular <span className="text-[#10b981]">Use Cases</span>
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto">
              Our eco packaging adapts to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <NeoCard className="bg-neutral-50 h-full text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#10b981] text-white border-2 border-black mb-4 mx-auto">
                    {useCase.icon}
                  </div>
                  <h3 className="font-black text-xl uppercase mb-2">{useCase.title}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                    {useCase.description}
                  </p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 border-t-4 border-black bg-[#10b981] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            Not Sure Where<br/>
            to Start?
          </h2>
          <p className="font-['JetBrains_Mono'] text-xl">
            Book a free 30-minute consultation. We'll help you choose the perfect packaging solution for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton to="/contact" variant="yellow">
              Get Expert Advice
            </NeoButton>
            <NeoButton to="/store" variant="secondary">
              Browse All Options
            </NeoButton>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="flex items-center gap-2 bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              <CheckCircle className="w-5 h-5 text-[#10b981]" />
              1,200+ Happy Brands
            </div>
            <div className="flex items-center gap-2 bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              <CheckCircle className="w-5 h-5 text-[#10b981]" />
              50M+ Pouches Made
            </div>
            <div className="flex items-center gap-2 bg-white text-black border-4 border-black px-4 py-2 font-black text-sm">
              <CheckCircle className="w-5 h-5 text-[#10b981]" />
              40+ Countries
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
              <h4 className="font-black mb-4 uppercase">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/store?category=starter" className="hover:text-[#10b981]">Startup Packaging</Link></li>
                <li><Link to="/solutions/ecommerce-shipping" className="hover:text-[#10b981]">Ecommerce Shipping</Link></li>
                <li><Link to="/industry/coffee-tea" className="hover:text-[#10b981]">Coffee & Tea</Link></li>
                <li><Link to="/contact" className="hover:text-[#10b981]">Custom Projects</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 uppercase">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/materials/compostable" className="hover:text-[#10b981]">Compostable Materials</Link></li>
                <li><Link to="/size-guide" className="hover:text-[#10b981]">Size Guide</Link></li>
                <li><Link to="/testimonials" className="hover:text-[#10b981]">Customer Stories</Link></li>
                <li><Link to="/about" className="hover:text-[#10b981]">About Us</Link></li>
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
