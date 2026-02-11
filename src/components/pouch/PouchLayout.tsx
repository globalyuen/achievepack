import { ReactNode, useState } from 'react'
import { Calendar, Menu, X, Building2, Instagram, Linkedin } from 'lucide-react'
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
              { label: 'CERTIFICATIONS', path: '/certifications' },
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

            <button 
              className="border-2 border-black p-2 hover:bg-[#D4FF00] transition-colors relative group" 
              onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}
              title="Book Free Consultation"
            >
              <Calendar className="w-6 h-6" />
            </button>
            
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
                    to="/certifications"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 border-4 border-black transition-all ${
                      isActive('/certifications') 
                        ? 'bg-black text-[#D4FF00]' 
                        : 'bg-white hover:bg-[#D4FF00]'
                    }`}
                  >
                    [CERTIFICATIONS]
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
                    <button
                      onClick={() => {
                        window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')
                        setIsMenuOpen(false)
                      }}
                      className="w-full px-4 py-3 bg-black text-[#D4FF00] border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      [BOOK FREE CALL]
                    </button>
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
      </main>

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
              <button 
                onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}
                className="bg-black text-white px-6 md:px-8 py-3 md:py-4 font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors whitespace-nowrap text-sm md:text-base"
              >
                Book Call
              </button>
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
              <Link to="/privacy" className="hover:underline">PRIVACY</Link>
              <Link to="/terms" className="hover:underline">TERMS</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
