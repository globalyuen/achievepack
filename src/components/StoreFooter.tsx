import { Link } from 'react-router-dom'

export default function StoreFooter() {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8 mt-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Col 1: Store Info & Quick Contact */}
          <div className="space-y-4">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-3">
                <img src="/ap-logo-white.webp" alt="Achieve Pack" className="h-7 w-auto" loading="lazy" decoding="async" width="106" height="32" />
              </Link>
              <p className="text-neutral-400 text-xs mb-3">Premium custom printed packaging and stock pouch solutions with advanced barrier materials.</p>
              <div className="flex items-center gap-2 mb-3">
                <Link to="/company/b-corp" className="opacity-80 hover:opacity-100 transition-opacity">
                  <img src="/bcorp.svg" alt="Certified B Corp" className="h-10 w-auto" loading="lazy" />
                </Link>
                <Link to="/company/bpi-certified" className="opacity-80 hover:opacity-100 transition-opacity">
                  <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-10 w-auto" loading="lazy" />
                </Link>
              </div>
            </div>
            <div className="text-[11px] text-neutral-500 space-y-1">
              <p>✓ Free worldwide shipping</p>
              <p>✓ 15-20 days turnaround</p>
              <p>✓ Food-grade quality standards</p>
              <p>✓ Contact: <a href="mailto:ryan@achievepack.com" className="hover:text-white underline">ryan@achievepack.com</a></p>
            </div>
          </div>

          {/* Col 2: Products & Shapes */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">Products & Shapes</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/store?category=sample" className="hover:text-primary-400">Sample Packs</Link></li>
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">Stand Up Pouches</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">Flat Bottom Bags</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">3 Side Seal / Flat Pouches</Link></li>
              <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">Side Gusset Bags</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">Spout Pouches</Link></li>
              <li><Link to="/quotes/rollstock" className="hover:text-primary-400">Rollstock Film</Link></li>
              <li><Link to="/packaging/shrink-sleeves" className="hover:text-primary-400 font-medium text-primary-400">Shrink Sleeves <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">Custom Boxes</Link></li>
            </ul>
          </div>

          {/* Col 3: Materials & Specs */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">Materials & Specs</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/materials/compostable" className="hover:text-primary-400">Compostable Materials</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE / PCR Series</Link></li>
              <li><Link to="/materials/home-compostable" className="hover:text-primary-400">Home Compostable</Link></li>
              <li><Link to="/materials/kraft-high-barrier" className="hover:text-primary-400">Kraft High Barrier</Link></li>
              <li><Link to="/materials/plastic-free-kraft" className="hover:text-primary-400">Plastic-Free Kraft</Link></li>
              <li><Link to="/materials/data-sheet" className="hover:text-primary-400 font-medium text-white">Material Data Sheets</Link></li>
              <li><Link to="/features/material-barrier-properties" className="hover:text-primary-400">Barrier Properties</Link></li>
            </ul>
          </div>

          {/* Col 4: Specialty & Finishes */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">Specialty & Finishes</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/industry/premium-finishes" className="hover:text-primary-400">Premium Pouch Finishes</Link></li>
              <li><Link to="/industry/premium-matte-pouches" className="hover:text-primary-400">Matte Finish Pouches</Link></li>
              <li><Link to="/industry/premium-soft-touch" className="hover:text-primary-400">Soft Touch Pouches</Link></li>
              <li><Link to="/industry/custom-die-cut-pouches" className="hover:text-primary-400">Custom Die-Cut Pouches</Link></li>
              <li><Link to="/industry/resealable-tin-tie-bags" className="hover:text-primary-400">Resealable Tin Tie Bags</Link></li>
              <li><Link to="/industry/clear-transparent-pouches" className="hover:text-primary-400">Clear Transparent Pouches</Link></li>
              <li><Link to="/industry/compostable-sugarcane-pulp-box" className="hover:text-primary-400">Compostable Sugarcane Pulp Box</Link></li>
              <li><Link to="/industry/euro-hole-hang-bags" className="hover:text-primary-400">Euro Hole Hang Bags</Link></li>
              <li><Link to="/industry/custom-spout-pouches" className="hover:text-primary-400">Custom Spout Pouches</Link></li>
              <li><Link to="/industry/child-resistant-cbd" className="hover:text-primary-400">Child Resistant Pouches</Link></li>
            </ul>
          </div>

          {/* Col 5: Support & Policies */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">Support & Policies</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/support/faqs" className="hover:text-primary-400">FAQs</Link></li>
              <li><Link to="/support/color-accuracy-digital-printing" className="hover:text-primary-400">Color Accuracy Guide</Link></li>
              <li><Link to="/knowledge/workflow" className="hover:text-primary-400">How It Works</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400">Blog & Resources</Link></li>
              <li><Link to="/terms" className="hover:text-primary-400">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link to="/return-policy" className="hover:text-primary-400">Return Policy</Link></li>
              <li><Link to="/support/lead-time" className="hover:text-primary-400">Shipping & Lead Time</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6">
          {/* Verification & Payment Logos */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded border border-neutral-850">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-neutral-300 font-medium">SSL 100% Secure Checkout</span>
            </div>
            <img src="/pay-logos.svg" alt="Payment Methods" className="h-7 w-auto" loading="lazy" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-neutral-800/60 pt-6">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src="/ap-logo-white.webp" alt="Achieve Pack Logo" className="h-6 w-auto" loading="lazy" />
              </Link>
              <p className="text-neutral-500 text-xs">© 2010-2026 Achieve Pack. All rights reserved.</p>
            </div>
            <div className="text-neutral-600 text-[10px] text-center md:text-right">
              <p>Hong Kong Business Registration: 41007097</p>
              <p>No.41 1/F Wo Liu Hang Tsuen, Fotan, Hong Kong</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
