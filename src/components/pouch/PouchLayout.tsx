import { ReactNode, useState } from 'react'
import { Leaf, ShoppingCart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface PouchLayoutProps {
  children: ReactNode
}

export default function PouchLayout({ children }: PouchLayoutProps) {
  const [cartCount, setCartCount] = useState(0)
  const location = useLocation()

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

          <div className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] font-bold text-sm">
            {[
              { label: 'PRODUCTS', path: '/products' },
              { label: 'MATERIALS', path: '/materials' },
              { label: 'MATERIALS', path: '/materials' },
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

          <button 
            className="border-2 border-black p-2 hover:bg-[#FF00FF] transition-colors relative" 
            onClick={() => setCartCount(c => c + 1)}
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <div className="absolute -top-3 -right-3 bg-black text-[#D4FF00] w-6 h-6 flex items-center justify-center font-['JetBrains_Mono'] font-bold text-xs border-2 border-[#D4FF00]">
                {cartCount}
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#D4FF00] pt-24 pb-12 px-4 md:px-6 border-b-8 border-black font-['Space_Grotesk']">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-black text-6xl md:text-8xl leading-none mb-8 uppercase">
              Ready to<br/>
              Launch?
            </h2>
            <p className="font-['JetBrains_Mono'] font-bold text-xl max-w-md mx-auto mb-8">
              Join 2,000+ brands. Get instant quote. Start with 500 units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="ENTER_EMAIL" 
                className="bg-white border-4 border-black px-6 py-4 font-['JetBrains_Mono'] font-bold flex-1 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              />
              <button 
                onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}
                className="bg-black text-white px-8 py-4 font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors whitespace-nowrap"
              >
                Book Call
              </button>
            </div>
          </div>

          <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center font-['JetBrains_Mono'] text-xs font-bold">
            <div className="text-center md:text-left mb-4 md:mb-0">
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
