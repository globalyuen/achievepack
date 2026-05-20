import { ReactNode, useState } from 'react'
import { Calendar, Menu, X, Building2, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { NeoButton, NeoBadge } from './PouchUI'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface PouchLayoutProps {
  children: ReactNode
}

export default function PouchLayout({ children }: PouchLayoutProps) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-['Space_Grotesk'] selection:bg-black selection:text-[#D4FF00] overflow-x-hidden flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Pouch.eco Logo" className="w-10 h-10 object-contain" />
            <span className="font-black text-2xl tracking-tighter">
              POUCH<span className="text-[#14532d]">.ECO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-['JetBrains_Mono'] font-bold text-sm">
            {[
              { label: 'PRODUCTS', path: '/products' },
              { label: 'MATERIALS', path: '/materials' },
              { label: 'OPTIONS', path: '/options/surface-and-reclosure' },
              { label: 'CERT', path: '/certifications' },
              { label: 'TESTIMONIALS', path: '/testimonials' },
              { label: 'BLOG', path: '/blog' }
            ].map((item) => (
              <Link
                key={item.path}
                // @ts-ignore
                to={item.path}
                className={`px-2 py-1 transition-colors ${
                  // @ts-ignore
                  isActive(item.path) 
                    ? 'bg-black text-white' 
                    : 'hover:bg-black hover:text-white'
                }`}
              >
                [{item.label}]
              </Link>
            ))}
          </div>

          {/* Mobile & Desktop Right Actions */}
          <div className="flex items-center gap-2">
            {/* AchievePack Enterprise Link */}
            <a
              href="https://achievepack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-2 hover:bg-[#00FFFF] transition-colors relative group"
              title="AchievePack - Enterprise Solutions"
            >
              <Building2 className="w-6 h-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 text-xs font-['JetBrains_Mono'] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Enterprise
              </span>
            </a>

            <NeoButton 
              variant="secondary"
              className="!p-2 !px-2 !py-2 border-2" 
              href="https://calendly.com/30-min-free-packaging-consultancy"
              title="Book Free Consultation"
            >
              <Calendar className="w-6 h-6" />
            </NeoButton>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden border-2 border-black p-2 hover:bg-[#D4FF00] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white border-l-4 border-black z-50 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto p-6">
                {/* Menu Items */}
                <div className="space-y-4 font-['JetBrains_Mono'] font-bold">
                  <Link
                    to="/products"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/products') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [PRODUCTS]
                  </Link>
                  
                  <Link
                    to="/materials"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/materials') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [MATERIALS]
                  </Link>
                  
                  <Link
                    to="/options/surface-and-reclosure"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/options/surface-and-reclosure') 
                        ? 'bg-black text-[#10B981]' 
                        : 'bg-white hover:bg-[#10B981]'
                    }`}
                  >
                    [OPTIONS]
                  </Link>
                  
                  <Link
                    to="/certifications"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/certifications') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [CERT]
                  </Link>
                  
                  <Link
                    to="/solutions"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/solutions') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [SOLUTIONS]
                  </Link>
                  
                  <Link
                    to="/size-guide"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/size-guide') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [SIZE GUIDE]
                  </Link>
                  
                  <Link
                    to="/testimonials"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/testimonials') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [TESTIMONIALS]
                  </Link>
                  
                  <Link
                    to="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/blog') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [BLOG]
                  </Link>
                  
                  <a
                    href="https://achievepack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 border-4 border-black bg-[#00FFFF] hover:bg-[#00FFFF]/80 transition-all"
                  >
                    [ENTERPRISE →]
                  </a>
                  
                  <div className="pt-4 border-t-4 border-black mt-4">
                    <NeoButton
                      variant="dark"
                      href="https://calendly.com/30-min-free-packaging-consultancy"
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      [BOOK FREE CALL]
                    </NeoButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
        
        {/* E-E-A-T Trust & Expertise Section for Topic Pages */}
        {location.pathname.includes('/topics/') && (
          <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 font-['Space_Grotesk']">
            <div className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 text-center">
                <img 
                  src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                  alt="Ryan Wong" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-black mx-auto mb-3" 
                />
                <h4 className="font-black text-lg uppercase">Ryan Wong</h4>
                <p className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-600 mb-2">FOUNDER & ECO SPECIALIST</p>
                <a 
                  href="https://achievepack.com/team/ryan-wong" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-['JetBrains_Mono'] font-bold text-xs uppercase underline hover:text-[#10b981]"
                >
                  [VIEW PROFILE]
                </a>
              </div>
              <div className="flex-1 space-y-4">
                <div className="inline-block bg-[#D4FF00] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider">
                  Verified Eco Packaging Protocol // E-E-A-T
                </div>
                <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight">
                  LAB-TESTED MATERIAL COMPLIANCE & EXPERTISE
                </h3>
                <p className="font-['Space_Grotesk'] text-sm text-neutral-700 leading-relaxed">
                  This topic guide is compiled by <strong>Ryan Wong</strong>, founder of Pouch.eco and Achieve Pack. Ryan is a Global Supply Chain Honors graduate from the Hong Kong Polytechnic University with 14+ years of hands-on expertise engineering biopolymer pouch films for brands in 8 countries.
                </p>
                <p className="font-['Space_Grotesk'] text-sm text-neutral-700 leading-relaxed">
                  All barrier performance specs, thickness tolerances, compostability timelines (EN 13432 / ASTM D6400), and digital printing guidelines (HP Indigo 20000) are verified in collaboration with our material suppliers and double-checked in our materials testing facility. We strictly publish verified facts to prevent greenwashing.
                </p>
                <div className="flex flex-wrap gap-2 font-['JetBrains_Mono'] font-bold text-xs">
                  <span className="border-2 border-black px-2 py-0.5 bg-neutral-100">[ASTM_D6400_COMPLIANT]</span>
                  <span className="border-2 border-black px-2 py-0.5 bg-neutral-100">[EN_13432_VERIFIED]</span>
                  <span className="border-2 border-black px-2 py-0.5 bg-neutral-100">[BPI_CERT_#10529618]</span>
                  <span className="border-2 border-black px-2 py-0.5 bg-[#00FFFF]">[ANTI-GREENWASHING_AUDITED]</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        <a 
          href="https://calendly.com/30-min-free-packaging-consultancy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-[#D4FF00] px-4 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] border-4 border-[#D4FF00] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all flex items-center gap-2 font-black uppercase text-sm"
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Book Meeting</span>
        </a>
        <a 
          href="https://api.whatsapp.com/send/?phone=85269704411" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-4 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 font-black uppercase text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#D4FF00] pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 border-b-8 border-black font-['Space_Grotesk']">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-black text-4xl md:text-6xl lg:text-8xl leading-none mb-6 md:mb-8 uppercase">
              Ready to<br/>
              Launch?
            </h2>
            <p className="font-['JetBrains_Mono'] font-bold text-base md:text-xl max-w-md mx-auto mb-6 md:mb-8 px-4">
              Join 2,000+ brands. Get instant quote. Start with 500 units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto px-4">
              <input 
                type="email" 
                placeholder="ENTER_EMAIL" 
                className="bg-white border-4 border-black px-4 md:px-6 py-3 md:py-4 font-['JetBrains_Mono'] font-bold flex-1 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow text-sm md:text-base"
              />
              <NeoButton 
                variant="dark"
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="whitespace-nowrap text-sm md:text-base"
              >
                Book Call
              </NeoButton>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-8 mb-16 border-t-4 border-black pt-12">
            <div>
              <h4 className="font-black uppercase mb-4 text-xl">Packaging</h4>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                <li><Link to="/packaging/stand-up-pouches" className="hover:underline">[STAND-UP POUCHES]</Link></li>
                <li><Link to="/packaging/flat-bottom-bags" className="hover:underline">[FLAT BOTTOM BAGS]</Link></li>
                <li><Link to="/packaging/spout-pouches" className="hover:underline">[SPOUT POUCHES]</Link></li>
                <li><Link to="/packaging/flat-pouches" className="hover:underline">[FLAT POUCHES]</Link></li>
                <li><Link to="/packaging/vacuum-pouches" className="hover:underline">[VACUUM POUCHES]</Link></li>
                <li><Link to="/products" className="hover:underline">[ALL PRODUCTS]</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-4 text-xl">Materials</h4>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                <li><Link to="/materials/compostable" className="hover:underline">[COMPOSTABLE]</Link></li>
                <li><Link to="/materials/recyclable" className="hover:underline">[RECYCLABLE]</Link></li>
                <li><Link to="/materials/plastic-free-kraft" className="hover:underline text-[#10b981]">[PLASTIC-FREE KRAFT]</Link></li>
                <li><Link to="/materials" className="hover:underline">[MATERIAL HUB]</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-4 text-xl">Industries</h4>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                <li><Link to="/industry/coffee-tea" className="hover:underline">[COFFEE & TEA]</Link></li>
                <li><Link to="/industry/baby-food" className="hover:underline">[BABY FOOD]</Link></li>
                <li><Link to="/industry/frozen-food" className="hover:underline">[FROZEN FOOD]</Link></li>
                <li><Link to="/industry/snacks" className="hover:underline">[SNACKS]</Link></li>
                <li><Link to="/industry/pet-food" className="hover:underline">[PET FOOD]</Link></li>
                <li><Link to="/industry/supplements" className="hover:underline">[SUPPLEMENTS]</Link></li>
                <li><Link to="/industry/sauces-condiments" className="hover:underline">[SAUCES & CONDIMENTS]</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-4 text-xl">USA Market</h4>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                <li><Link to="/blog/usa-compostable-guide" className="hover:underline">[COMPOSTABLE USA]</Link></li>
                <li><Link to="/blog/usa-coffee-packaging" className="hover:underline">[COFFEE USA]</Link></li>
                <li><Link to="/blog/usa-snacks-packaging-guide" className="hover:underline">[SNACKS USA]</Link></li>
                <li><Link to="/blog/usa-labeling-guide" className="hover:underline">[LABELING USA]</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-4 text-xl">Support</h4>
              <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                <li><Link to="/blog" className="hover:underline">[BLOG]</Link></li>
                <li><Link to="/certifications" className="hover:underline">[CERTIFICATIONS]</Link></li>
                <li><Link to="/support/color-accuracy-digital-printing" className="hover:underline text-[#10B981]">[COLOR ACCURACY]</Link></li>
                <li><Link to="/size-guide" className="hover:underline">[SIZE GUIDE]</Link></li>
                <li><Link to="/unprinted-samples" className="hover:underline">[UNPRINTED SAMPLES]</Link></li>
                <li><Link to="/tech-specs" className="hover:underline text-[#10B981]">[TECH SPECS]</Link></li>
                <li><Link to="/sample" className="hover:underline">[CUSTOM PRINTED SAMPLE]</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-3 xl:col-span-2">
              <h4 className="font-black uppercase mb-4 text-xl">Featured</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#10b981] mb-3">// Core & Materials</h5>
                  <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                    <li><Link to="/topics/sustainable-packaging" className="hover:underline text-magenta-600">[SUSTAINABLE PILLAR]</Link></li>
                    <li><Link to="/topics/recyclable-packaging" className="hover:underline text-blue-600">[RECYCLABLE DESIGN]</Link></li>
                    <li><Link to="/topics/compostable-packaging" className="hover:underline text-emerald-600">[COMPOSTABLE TRUTH]</Link></li>
                    <li><Link to="/topics/compostable-certification" className="hover:underline text-amber-600">[CERTIFICATION FAQ]</Link></li>
                    <li><Link to="/topics/real-world-sustainability" className="hover:underline text-green-600 font-black underline">[REAL SUSTAINABILITY]</Link></li>
                    <li><Link to="/topics/pfas-free-food-packaging" className="hover:underline text-blue-600">[PFAS-FREE]</Link></li>
                    <li><Link to="/topics/mono-material-pe-pouches" className="hover:underline">[MONO-PE]</Link></li>
                    <li><Link to="/topics/mono-material-packaging" className="hover:underline">[MONO MATERIAL]</Link></li>
                    <li><Link to="/topics/pcr-packaging" className="hover:underline">[PCR CONTENT]</Link></li>
                    <li><Link to="/topics/recycled-ocean-plastic-packaging" className="hover:underline text-cyan-600">[OCEAN PLASTIC]</Link></li>
                    <li><Link to="/topics/compostable-zipper-durability" className="hover:underline text-emerald-600">[ZIPPER DURABILITY]</Link></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-blue-600 mb-3">// Formats & Solutions</h5>
                  <ul className="space-y-2 font-['JetBrains_Mono'] text-sm font-bold">
                    <li><Link to="/topics/eco-friendly-food-packaging" className="hover:underline text-magenta-600">[FOOD PACKAGING]</Link></li>
                    <li><Link to="/topics/home-compostable-coffee-bags" className="hover:underline">[COFFEE BAGS]</Link></li>
                    <li><Link to="/topics/child-resistant-mylar-bags" className="hover:underline">[CHILD-RESISTANT]</Link></li>
                    <li><Link to="/topics/minimalist-d2c-packaging" className="hover:underline">[MINIMALIST D2C]</Link></li>
                    <li><Link to="/topics/custom-packaging" className="hover:underline">[CUSTOM SOLUTIONS]</Link></li>
                    <li><Link to="/topics/high-heat-compostable-candle-packaging" className="hover:underline text-orange-600">[CANDLE PACKAGING]</Link></li>
                    <li><Link to="/topics/custom-vs-standard-packaging" className="hover:underline text-emerald-600">[CUSTOM VS STANDARD]</Link></li>
                    <li><Link to="/topics/compostable-spouted-pouches" className="hover:underline text-emerald-600">[SPOUTED POUCHES]</Link></li>
                    <li><Link to="/topics/food-packaging-supplier" className="hover:underline">[SUPPLIER AUDIT]</Link></li>
                    <li><Link to="/topics/eco-friendly-packaging-supplier" className="hover:underline">[ECO AUDIT]</Link></li>
                    <li><Link to="/topics/reduce-packaging-waste" className="hover:underline">[REDUCING WASTE]</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Topic Directory Grid - The "Topic Footer" */}
          <div className="mb-16 border-t-4 border-black pt-12">
            <div className="flex items-center gap-3 mb-8">
              <NeoBadge color="magenta">TOPIC_DIRECTORY</NeoBadge>
              <h3 className="font-black text-2xl uppercase italic">Explore All Sustainable Packaging Topics</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'DTC_ECO', path: '/topics/dtc-sustainable-packaging', color: 'bg-white' },
                { name: 'BABY_FOOD', path: '/topics/compostable-baby-food-bags', color: 'bg-white' },
                { name: 'RECYCLABLE_SNACK', path: '/topics/recyclable-snack-packaging', color: 'bg-white' },
                { name: 'GREEN_COFFEE', path: '/topics/green-coffee-materials', color: 'bg-white' },
                { name: 'LOW_MOQ_STARTUP', path: '/topics/low-moq-startup-packaging', color: 'bg-white' },
                { name: 'PFAS_FREE', path: '/topics/pfas-free-food-packaging', color: 'bg-white' },
                { name: 'MONO_PE', path: '/topics/mono-material-pe-pouches', color: 'bg-white' },
                { name: 'HOME_COMPOST', path: '/topics/home-compostable-coffee-bags', color: 'bg-white' },
                { name: 'OCEAN_PLASTIC', path: '/topics/recycled-ocean-plastic-packaging', color: 'bg-white' },
                { name: 'MINIMALIST', path: '/topics/minimalist-d2c-packaging', color: 'bg-white' },
                { name: 'CUSTOM_PRINTED', path: '/topics/custom-printed-sustainable-pouches', color: 'bg-white' },
                { name: 'REGULATIONS', path: '/topics/eco-packaging-regulations', color: 'bg-white' },
                { name: 'CANDLE_WAX', path: '/topics/high-heat-compostable-candle-packaging', color: 'bg-white' },
                { name: 'REAL_WORLD', path: '/topics/real-world-sustainability', color: 'bg-[#D4FF00]' },
                { name: 'ZIPPER_DURABILITY', path: '/topics/compostable-zipper-durability', color: 'bg-white' },
                { name: 'CUSTOM_VS_STANDARD', path: '/topics/custom-vs-standard-packaging', color: 'bg-[#D4FF00]' },
                { name: 'SPOUTED_POUCHES', path: '/topics/compostable-spouted-pouches', color: 'bg-[#D4FF00]' },

              ].map((topic, i) => (
                <Link 
                  key={i}
                  to={topic.path}
                  className={`border-4 border-black p-4 font-['JetBrains_Mono'] font-black text-xs uppercase hover:bg-[#D4FF00] hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between group ${topic.color}`}
                >
                  {topic.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t-4 border-black pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center font-['JetBrains_Mono'] text-xs font-bold gap-4">
            <div className="text-center md:text-left">
              © 2026 POUCH.ECO // ECO PACKAGING PROTOCOL<br/>
              ALL MATERIALS CERTIFIED
            </div>
            
            {/* Social Media Icons - Neo-Brutalist Style */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/pouch_eco/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-4 border-black bg-white hover:bg-[#E1306C] hover:text-white transition-colors flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/achieve-pack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-4 border-black bg-white hover:bg-[#0A66C2] hover:text-white transition-colors flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a 
                href="https://api.whatsapp.com/send/?phone=85269704411" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border-4 border-black bg-white hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
            <div className="flex gap-4">
              <Link to="/quotes/three-side-seal?p=pouch2026" className="hover:underline">3 SIDE</Link>
              <Link to="/quotes/flat-bottom?p=pouch2026" className="hover:underline">FLAT BOTTOM</Link>
              <Link to="/quotes/stand-up-pouch?p=pouch2026" className="hover:underline">STAND UP</Link>
              <Link to="/quotes/spouted-pouch?p=pouch2026" className="hover:underline">SPOUTED</Link>
              <Link to="/quotes/rollstock?p=pouch2026" className="hover:underline">ROLL</Link>
              <Link to="/sample?p=pouch2026" className="hover:underline font-black text-black bg-[#D4FF00] px-1">CUSTOM PRINTED SAMPLE</Link>
              <Link to="/cert?p=pouch2026" className="hover:underline">CERT</Link>
              <a href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#10b981]">BPI CERT</a>
              <Link to="/privacy" className="hover:underline">PRIVACY</Link>
              <Link to="/terms" className="hover:underline">TERMS</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
