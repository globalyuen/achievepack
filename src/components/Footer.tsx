import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, Calendar } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-8 rounded-t-[3rem] mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="h-5 w-5 text-primary-500" />
              <span className="text-base font-bold">Achieve Pack</span>
            </div>
            <p className="text-neutral-400 text-xs mb-3">
              Sustainable packaging solutions for forward-thinking brands.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-2 mb-3">
              <a href="https://www.instagram.com/pouch_eco/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=85269704411" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-500 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/achieve-pack/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            {/* BPI & B Corp Certification Logos */}
            <div className="flex items-center gap-3">
              <Link to="/company/bpi-certified" className="hover:opacity-80 transition-opacity">
                <img src="/imgs/company/bpi/bpi.svg" alt="BPI Certified Compostable" className="h-10 w-auto" loading="lazy" decoding="async" />
              </Link>
              <Link to="/company/b-corp" className="hover:opacity-80 transition-opacity">
                <img src="/bcorp.svg" alt="Certified B Corporation" className="h-10 w-auto" loading="lazy" decoding="async" />
              </Link>
            </div>
          </div>

          {/* Company - Most Important First */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Company</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/company/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link to="/company/b-corp" className="hover:text-primary-400">Our Impact (B Corp)</Link></li>
              <li><Link to="/company/certificates" className="hover:text-primary-400">Certificates</Link></li>
              <li><Link to="/company/factory-tour" className="hover:text-primary-400">Factory Tour</Link></li>
              <li><Link to="/team/ryan-wong" className="hover:text-primary-400">Meet Ryan Wong</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Products</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">Stand Up Pouches</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">Flat Bottom Bags</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">Spout Pouches</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">Flat Pouches</Link></li>
              <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">Side Gusset Bags</Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">Custom Boxes</Link></li>
            </ul>
          </div>
          
          {/* Materials */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Materials</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/materials/home-compostable" className="hover:text-primary-400">Home Compostable</Link></li>
              <li><Link to="/materials/industrial-compostable" className="hover:text-primary-400">Industrial Compostable</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono PE</Link></li>
              <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-400">Recyclable Mono PP</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE</Link></li>
              <li><Link to="/materials/pcr" className="hover:text-primary-400">PCR Recycled</Link></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Industries</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">Coffee & Tea</Link></li>
              <li><Link to="/industry/snacks-food" className="hover:text-primary-400">Snacks & Food</Link></li>
              <li><Link to="/industry/pet-food" className="hover:text-primary-400">Pet Food</Link></li>
              <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">Supplements</Link></li>
              <li><Link to="/industry/baby-food" className="hover:text-primary-400">Baby Food</Link></li>
              <li><Link to="/industry/frozen-food" className="hover:text-primary-400">Frozen Food</Link></li>
            </ul>
          </div>

          {/* Featured Products */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Featured Products</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/products/compostable-coffee-bags" className="hover:text-primary-400">Compostable Coffee Bags</Link></li>
              <li><Link to="/products/coffee-bags-degassing-valve" className="hover:text-primary-400">Coffee Bags with Valve</Link></li>
              <li><Link to="/products/compostable-stand-up-pouches" className="hover:text-primary-400">Compostable Pouches</Link></li>
              <li><Link to="/products/recyclable-mono-material-pouches" className="hover:text-primary-400">Recyclable Mono-Material</Link></li>
              <li><Link to="/products/low-moq-packaging" className="hover:text-primary-400">Low MOQ Packaging</Link></li>
              <li><Link to="/products/labels-and-stickers" className="hover:text-primary-400">Labels & Stickers</Link></li>
            </ul>
          </div>

          {/* Knowledge */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Knowledge</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/knowledge/pouch-sizing" className="hover:text-primary-400">Pouch Sizing Guide</Link></li>
              <li><Link to="/knowledge/size-guide" className="hover:text-primary-400">Size Reference</Link></li>
              <li><Link to="/knowledge/all-options" className="hover:text-primary-400">All Options</Link></li>
              <li><Link to="/knowledge/printing-types" className="hover:text-primary-400">Printing Types</Link></li>
              <li><Link to="/knowledge/k-seal-stand-up-pouches" className="hover:text-primary-400">K-Seal Pouches</Link></li>
              <li><Link to="/knowledge/white-ink-underprint" className="hover:text-primary-400">White Ink Underprint</Link></li>
              <li><Link to="/knowledge/fin-seal-lap-seal" className="hover:text-primary-400">Fin Seal vs Lap Seal</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Support</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/support/faqs" className="hover:text-primary-400">FAQs</Link></li>
              <li><Link to="/support/lead-time" className="hover:text-primary-400">Lead Time</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400">All Articles</Link></li>
              <li><Link to="/store" className="hover:text-primary-400">Online Store</Link></li>
              <li><Link to="/reviews" className="hover:text-primary-400">Customer Reviews</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
          {/* Composting */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Composting</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/composting/composting-benefits" className="hover:text-primary-400">Composting Benefits</Link></li>
              <li><Link to="/composting/composting-services" className="hover:text-primary-400">Service Finder</Link></li>
              <li><Link to="/composting/biodegradable-vs-compostable" className="hover:text-primary-400">Biodegradable vs Compostable</Link></li>
              <li><Link to="/composting/commercial-composting" className="hover:text-primary-400">Commercial Composting</Link></li>
              <li><Link to="/composting/home-vs-industrial-compostable" className="hover:text-primary-400">Home vs Industrial</Link></li>
            </ul>
          </div>

          {/* BioPE */}
          <div>
            <h4 className="font-semibold text-sm mb-2">BioPE</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-400">What is Bio-PE?</Link></li>
              <li><Link to="/biope/bio-pe-vs-compostable" className="hover:text-primary-400">Bio-PE vs Compostable</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE Materials</Link></li>
              <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">Bio-PE Structures</Link></li>
            </ul>
          </div>

          {/* PCR */}
          <div>
            <h4 className="font-semibold text-sm mb-2">PCR</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/pcr/pcr-plastic-guide" className="hover:text-primary-400">What Is PCR Plastic?</Link></li>
              <li><Link to="/pcr/7-checklist" className="hover:text-primary-400">PCR 7-Point Checklist</Link></li>
              <li><Link to="/pcr/realistic-pcr-content" className="hover:text-primary-400">Realistic PCR Content</Link></li>
              <li><Link to="/pcr/recyclable-vs-pcr-biobased" className="hover:text-primary-400">Recyclable vs PCR vs Bio-Based</Link></li>
              <li><Link to="/materials/pcr" className="hover:text-primary-400">PCR Materials</Link></li>
            </ul>
          </div>

          {/* Recyclable */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Recyclable</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-400">What Is 100% Recyclable?</Link></li>
              <li><Link to="/recyclable/roadmap-sme" className="hover:text-primary-400">3-Step Roadmap for SMEs</Link></li>
              <li><Link to="/recyclable/mono-material-foundation" className="hover:text-primary-400">Mono-Material Foundation</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
              <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-400">Recyclable Mono-PP</Link></li>
            </ul>
          </div>

          {/* Function */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Function</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-400">Microwave Steam Bags</Link></li>
              <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">Child-Resistant Bags</Link></li>
              <li><Link to="/function/spout-pouches-juice" className="hover:text-primary-400">Spout Pouches Juice</Link></li>
              <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-400">Retort Bags</Link></li>
              <li><Link to="/function/rice-paper-bags" className="hover:text-primary-400">Rice Paper Bags</Link></li>
            </ul>
          </div>

          {/* Lab Bag */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Lab Bag</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/lab/lateral-filter-bags" className="hover:text-primary-400">Lateral Filter Bags</Link></li>
              <li><Link to="/lab/wire-closure-bags" className="hover:text-primary-400">Wire Closure Bags</Link></li>
              <li><Link to="/lab/lab-blender-bags" className="hover:text-primary-400">Lab Blender Bags</Link></li>
              <li><Link to="/products/lab-bags" className="hover:text-primary-400">All Lab Bags</Link></li>
            </ul>
          </div>

          {/* Free Service */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Free Service</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/free-service/packaging-design-consultation" className="hover:text-primary-400">Design Consultation</Link></li>
              <li><Link to="/free-service/website-upgrade" className="hover:text-primary-400">Website Upgrade</Link></li>
              <li><Link to="/free-service/packaging-mockup" className="hover:text-primary-400">Packaging Mockup</Link></li>
              <li><Link to="/free-service/customer-center" className="hover:text-primary-400">Customer Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Contact Us</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li className="flex items-center gap-1">
                <Mail className="h-3 w-3 text-primary-500" />
                <a href="mailto:ryan@achievepack.com" className="hover:text-primary-400">ryan@achievepack.com</a>
              </li>
              <li className="flex items-center gap-1">
                <Phone className="h-3 w-3 text-primary-500" />
                <a href="tel:+85269704411" className="hover:text-primary-400">+852 6970 4411</a>
              </li>
              <li className="flex items-center gap-1 mt-2">
                <Calendar className="h-3 w-3 text-primary-500" />
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">Book Meeting</a>
              </li>
            </ul>
          </div>

          {/* USA Market */}
          <div>
            <h4 className="font-semibold text-sm mb-2">USA Market</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/usa/compostable-packaging" className="hover:text-primary-400">Compostable Packaging USA</Link></li>
              <li><Link to="/usa/coffee-packaging" className="hover:text-primary-400">Coffee Packaging USA</Link></li>
              <li><Link to="/usa/snacks-packaging" className="hover:text-primary-400">Snacks Packaging USA</Link></li>
              <li><Link to="/usa/labeling-guide" className="hover:text-primary-400">Labeling Guide USA</Link></li>
            </ul>
          </div>
        </div>

        {/* Certification Logos & SSL Badge */}
        <div className="border-t border-neutral-800 mt-6 pt-4">
          <div className="flex flex-col items-center gap-4 mb-4">
            {/* BPI & B Corp Logos */}
            <img src="/bpi-bcorp-logos.svg" alt="BPI & B Corp Certified" className="h-12 w-auto" loading="lazy" decoding="async" />
            
            {/* 1% Carbon Removal */}
            <a 
              href="https://climate.stripe.com/WPsfbU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-primary-300 hover:text-primary-200 transition-colors"
            >
              <svg className="h-4 w-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
                <path d="M12 8v8M8 12h8"/>
              </svg>
              <span>At Achieve Pack pouch.eco, we contribute 1% of our revenue to carbon removal</span>
            </a>
            
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
        </div>
        
        <div className="border-t border-neutral-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-neutral-500 text-xs">
            © 2010-2026 Achieve Pack. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-neutral-500">
            <Link to="/terms" className="hover:text-primary-400">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-primary-400">Privacy Policy</Link>
            <Link to="/shipping" className="hover:text-primary-400">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
