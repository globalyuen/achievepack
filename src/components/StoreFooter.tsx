import { Link } from 'react-router-dom'

export default function StoreFooter() {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-8 rounded-t-[3rem] mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {/* Store Info */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src="/ap-logo-white.webp" alt="Achieve Pack" className="h-8 w-auto" loading="lazy" decoding="async" width="106" height="32" />
            </Link>
            {/* B Corp Logo */}
            <a href="https://www.bcorporation.net/" target="_blank" rel="noopener noreferrer" className="block mb-4">
              <img src="/bcorp.svg" alt="Certified B Corporation" className="h-16 md:h-20 w-auto" loading="lazy" decoding="async" />
            </a>
            <p className="text-neutral-400 text-sm mb-4">Premium custom printed pouches with eco-friendly options.</p>
            <div className="space-y-1 text-xs text-neutral-500">
              <p>Free worldwide shipping</p>
              <p>15-20 days turnaround</p>
              <p>Food-grade quality</p>
            </div>
          </div>

          {/* Products by Category */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Categories</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link to="/store?category=sample" className="hover:text-primary-400">Sample Packs</Link></li>
              <li><Link to="/store?category=conventional-digital" className="hover:text-primary-400">Conventional Digital</Link></li>
              <li><Link to="/store?category=eco-digital" className="hover:text-primary-400">Eco Digital</Link></li>
              <li><Link to="/store?category=eco-stock" className="hover:text-primary-400">Eco Stock</Link></li>
              <li><Link to="/store?category=boxes" className="hover:text-primary-400">Custom Boxes</Link></li>
            </ul>
          </div>

          {/* Shapes */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Pouch Shapes</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">Stand Up Pouches</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">Flat Bottom Bags</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">3 Side Seal</Link></li>
              <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">Side Gusset</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">Spout Pouches</Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">Custom Boxes</Link></li>
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Materials</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link to="/materials/compostable" className="hover:text-primary-400">Compostable</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE / PCR</Link></li>
              <li><Link to="/materials/home-compostable" className="hover:text-primary-400">Home Compostable</Link></li>
            </ul>
          </div>

          {/* Store Policies */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Store Policies</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link to="/terms" className="hover:text-primary-400">Terms & Conditions</Link></li>
              <li><Link to="/support/faqs" className="hover:text-primary-400">Return Policy</Link></li>
              <li><Link to="/support/lead-time" className="hover:text-primary-400">Shipping & Lead Time</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Help & Support</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link to="/support/faqs" className="hover:text-primary-400">FAQs</Link></li>
              <li><Link to="/knowledge/workflow" className="hover:text-primary-400">How It Works</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400">Blog</Link></li>
              <li><a href="mailto:ryan@achievepack.com" className="hover:text-primary-400">Contact Us</a></li>
              <li><Link to="/" className="hover:text-primary-400">Main Website</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6">
          {/* Certification & Payment Logos */}
          <div className="flex flex-col items-center gap-4 mb-6">
            {/* BPI & B Corp Logos */}
            <img src="/bpi-bcorp-logos.svg" alt="BPI & B Corp Certified" className="h-12 w-auto" loading="lazy" decoding="async" />
            
            {/* Payment Logos */}
            <img src="/pay-logos.svg" alt="Payment Methods" className="h-8 w-auto" loading="lazy" decoding="async" />
            
            {/* SSL Secure Badge */}
            <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-neutral-300 font-medium">SSL 100% Secure Transactions</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-xs">© 2010-2026 Achieve Pack. All rights reserved.</p>
            <div className="text-neutral-600 text-xs text-center md:text-right">
              <p>Hong Kong Business Registration: 41007097</p>
              <p>No.41 1/F Wo Liu Hang Tsuen, Fotan, Hong Kong</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
