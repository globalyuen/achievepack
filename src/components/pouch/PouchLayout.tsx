import { ReactNode, useState } from 'react'
import { Leaf, Calendar, Menu, X, Building2, BookOpen, MessageSquare } from 'lucide-react'
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
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <Leaf className="text-[#D4FF00] w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter">
              POUCH<span className="text-[#00FFFF]">.ECO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-['JetBrains_Mono'] font-bold text-sm">
            {[
              { label: 'PRODUCTS', path: '/products' },
              { label: 'MATERIALS', path: '/materials' },
              { label: 'TESTIMONIALS', path: '/testimonials' },
              { label: 'BLOG', path: '/blog' },
              { label: 'START', action: 'book_call' }
            ].map((item) => (
              item.action === 'book_call' ? (
                <button
                  key="start-btn"
                  onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}
                  className="px-2 py-1 transition-colors hover:bg-black hover:text-white"
                >
                  [{item.label}]
                </button>
              ) : (
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
              )
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
              © 2025 POUCH.ECO // ECO PACKAGING PROTOCOL<br/>
              ALL MATERIALS CERTIFIED
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
