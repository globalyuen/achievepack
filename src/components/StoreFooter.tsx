import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box } from 'lucide-react'

export default function StoreFooter() {
  const [footerShapes, setFooterShapes] = useState<any[]>([])

  const getLanguageFromPath = (pathStr: string) => {
    const parts = pathStr.split('/').filter(Boolean);
    const possibleLang = parts[0]?.toLowerCase();
    if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
      return possibleLang;
    }
    return 'en';
  };
  const currentLang = getLanguageFromPath(window.location.pathname);

  useEffect(() => {
    fetch(`/models_database_${currentLang}.json`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFooterShapes(data);
        }
      })
      .catch(() => {
        fetch('/models_database.json')
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data)) {
              setFooterShapes(data);
            }
          })
          .catch(e => console.error('Error loading fallback catalog for store footer:', e));
      });
  }, [currentLang]);
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
              <div className="flex flex-col gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Link to="/company/b-corp" className="opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/bcorp.svg" alt="Certified B Corp" className="h-10 w-auto" loading="lazy" />
                  </Link>
                  <Link to="/company/bpi-certified" className="opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-10 w-auto" loading="lazy" />
                  </Link>
                </div>
                <div className="pt-1">
                  <a href="https://www.producthunt.com/products/achieve-pack-free-3d-studio?utm_source=badge-follow&utm_medium=badge&utm_source=badge-achieve-pack-free-3d-studio" target="_blank" rel="noopener noreferrer" className="block">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1271214&theme=dark" alt="Achieve Pack Free 3D Studio - Design & visualize 3D pouches instantly in your browser. | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
                  </a>
                </div>
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
              <li className="pt-2 border-t border-neutral-800/40 font-semibold text-neutral-300">3D Spec Directory</li>
              <li><Link to="/solutions/catalog" className="hover:text-primary-400 font-medium text-emerald-450">3D Packaging Catalog</Link></li>
              <li><Link to="/solutions/flexible-pouches-catalog" className="hover:text-primary-400">Flexible Pouches Specs</Link></li>
              <li><Link to="/solutions/custom-boxes-catalog" className="hover:text-primary-400">Custom Boxes Specs</Link></li>
              <li><Link to="/solutions/cosmetics-bottles-catalog" className="hover:text-primary-400">Cosmetics Bottles Specs</Link></li>
            </ul>
          </div>

          {/* Col 3: Materials & Specs */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">Materials & Specs</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/materials/compostable" className="hover:text-primary-400">Compostable Materials</Link></li>
              <li><Link to="/materials/compostable-bar-packaging" className="hover:text-primary-400">Compostable Bar Wraps <span className="text-[10px] bg-primary-600 text-white px-1.5 py-0.5 rounded-full font-bold ml-1">New</span></Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE / PCR Series</Link></li>
              <li><Link to="/materials/home-compostable" className="hover:text-primary-400">Home Compostable</Link></li>
              <li><Link to="/materials/kraft-high-barrier" className="hover:text-primary-400">Kraft High Barrier</Link></li>
              <li><Link to="/materials/plastic-free-kraft" className="hover:text-primary-400">Plastic-Free Kraft</Link></li>
              <li><Link to="/materials/data-sheet" className="hover:text-primary-400 font-medium text-white">Material Data Sheets</Link></li>
              <li><Link to="/features/material-barrier-properties" className="hover:text-primary-400">Barrier Properties</Link></li>
              <li><Link to="/topics/ai-packaging-resolution" className="hover:text-primary-400 font-medium text-emerald-450">AI Packaging Resolution</Link></li>
              <li><Link to="/topics/ai-packaging-bleed-dimensions" className="hover:text-primary-400">Bleed Dimensions Guide</Link></li>
              <li><Link to="/topics/ai-packaging-safe-margins" className="hover:text-primary-400">Safe Margins Standard</Link></li>
              <li><Link to="/topics/ai-packaging-layered-assets" className="hover:text-primary-400">Layered Assets Prep</Link></li>
              <li><Link to="/topics/ai-packaging-barcodes-bottom-fold" className="hover:text-primary-400">AI Barcodes Bottom Fold</Link></li>
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
              <li><Link to="/topics/beverage-soft-stand-up-pouch" className="hover:text-primary-400 font-medium text-emerald-450">Beverage Soft Pouch</Link></li>
              <li><Link to="/topics/bread-flat-bottom-bag" className="hover:text-primary-400">Bread Flat Bottom</Link></li>
              <li><Link to="/topics/beef-jerky-pillow-pouch" className="hover:text-primary-400">Jerky Pillow Pouch</Link></li>
              <li><Link to="/topics/apparel-zipper" className="hover:text-primary-400">Apparel Zipper Bags</Link></li>
              <li><Link to="/topics/beef-jerky-barrier" className="hover:text-primary-400">Beef Jerky Barriers</Link></li>
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

        {/* Row 4: 3D Packaging Model Directory (Grouped compact & collapsible) */}
        <div className="border-t border-neutral-800 py-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none">
              <div className="flex items-center gap-2">
                <Box className="h-4.5 w-4.5 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider">3D Packaging Model Directory</span>
              </div>
              <div className="text-[10px] border border-neutral-700 rounded px-2 py-0.5 bg-neutral-800 text-neutral-400 group-open:bg-neutral-700 group-open:text-white transition-all font-semibold uppercase font-mono">
                <span className="group-open:hidden">[+] Expand</span>
                <span className="hidden group-open:inline">[-] Collapse</span>
              </div>
            </summary>
            
            <div className="mt-4 pt-4 border-t border-neutral-800/40 text-neutral-400 text-xs">
              {footerShapes.length === 0 ? (
                <p className="text-xs text-neutral-500 py-2">Loading packaging shapes...</p>
              ) : (
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {footerShapes.map((shape) => {
                    const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
                    return (
                      <Link
                        key={shape.id}
                        to={`${langPrefix}/solutions/shapes/${shape.slug || shape.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-[60px] h-[60px] flex items-center justify-center bg-neutral-950 border border-neutral-850 hover:border-[#64ffda] rounded-lg transition-all p-1 relative group"
                        title={`${shape.id} - ${shape.name}`}
                      >
                        <img
                          src={`/thumbnails/${shape.id}.png?v=2`}
                          alt={shape.name}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            const dielineSrc = shape.dieline_image.startsWith('/') 
                              ? shape.dieline_image 
                              : `/api/proxy?url=${encodeURIComponent(shape.dieline_image)}`;
                            (e.target as HTMLImageElement).src = dielineSrc;
                          }}
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </details>
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
