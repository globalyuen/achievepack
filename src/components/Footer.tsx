import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Mail, Phone, Calendar, FileText, ShieldCheck, Zap, Box } from 'lucide-react'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './AppIcons'
import { useEffect, useState } from 'react'
import { isAchievePack } from '../utils/domain'

export default function Footer() {
  const { t } = useTranslation()
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

  // Google Customer Reviews Badge integration
  useEffect(() => {
    if (!isAchievePack()) return

    const scriptId = 'merchantWidgetScript'
    let script = document.getElementById(scriptId) as HTMLScriptElement

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://www.gstatic.com/shopping/merchant/merchantwidget.js'
      script.defer = true
      document.body.appendChild(script)
    }

    const initWidget = () => {
      if ((window as any).merchantwidget) {
        try {
          ;(window as any).merchantwidget.start({
            merchant_id: 5787966617,
            position: 'BOTTOM_LEFT'
          })
        } catch (e) {
          console.error('Error starting Google Customer Reviews badge widget:', e)
        }
      }
    }

    // If script is already loaded
    if ((window as any).merchantwidget) {
      initWidget()
    } else {
      script.addEventListener('load', initWidget)
    }

    return () => {
      script.removeEventListener('load', initWidget)
      
      // Clean up the iframe and widget elements if they are created by Google
      const widgetElement = document.querySelector('iframe[src*="merchantwidget"]') || 
                            document.querySelector('.gcr-badge') || 
                            document.getElementById('gcr-badge')
      if (widgetElement) {
        widgetElement.remove()
      }
    }
  }, [])

  // Load shapes on mount for collapsible footer directory
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
          .catch(e => console.error('Error loading fallback catalog for footer:', e));
      });
  }, [currentLang]);

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8 mt-8 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4">
        {/* Row 1: Core B2B Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8 pb-8 border-b border-neutral-800">
          {/* Brand Info & Contact Details */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-primary-500" />
                <span className="text-base font-bold">{t('pouchEcoFooter.brand', 'Achieve Pack')}</span>
              </div>
              <p className="text-neutral-400 text-xs mb-4">
                {t('pouchEcoFooter.tagline', 'Leading the sustainable packaging revolution with certified eco-friendly solutions for businesses worldwide.')}
              </p>

              <div className="font-bold text-neutral-200 text-xs mb-2">
                {t('pouchEcoFooter.contactUs', 'Contact Us')}
              </div>
              
              {/* Quick Contact info */}
              <div className="space-y-1.5 text-xs text-neutral-400 mb-4">
                <div className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-primary-500" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-400">ryan@achievepack.com</a>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-primary-500" />
                  <a href="tel:+85269704411" className="hover:text-primary-400">+852 6970 4411</a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-primary-500" />
                  <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">{t('pouchEcoFooter.bookMeeting', 'Book Meeting')}</a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3 mb-4">
                <a href="https://www.instagram.com/pouch_eco/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=85269704411" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-500 transition-colors">
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/achieve-pack/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Verification Badges */}
            <div className="space-y-2">
              <div className="flex gap-2">
                <Link to="/company/bpi-certified" className="hover:opacity-90 transition-opacity flex items-center bg-white/5 rounded px-2 py-1 border border-neutral-800">
                  <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-6 w-auto object-contain" loading="lazy" />
                </Link>
                <Link to="/company/b-corp" className="hover:opacity-90 transition-opacity flex items-center bg-white/5 rounded px-2 py-1 border border-neutral-800">
                  <img src="/bcorp.svg" alt="B Corp" className="h-6 w-auto object-contain" loading="lazy" />
                </Link>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link to="/materials/data-sheet" className="bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] font-semibold px-2 py-1.5 rounded hover:bg-neutral-700 hover:text-white transition flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-primary-400" />
                  <span>{t('pouchEcoFooter.dataSheet', 'Data Sheet')}</span>
                </Link>
                <a href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf" target="_blank" rel="noopener noreferrer" className="bg-green-950/30 border border-green-900 text-green-400 text-[10px] font-semibold px-2 py-1.5 rounded hover:bg-green-900/40 hover:text-green-300 transition flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                  <span>{t('pouchEcoFooter.bpiCert', 'BPI Cert')}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Products & Featured */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.products', 'Products')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.standUpPouches', 'Stand Up Pouches')}</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">{t('pouchEcoFooter.flatBottomBags', 'Flat Bottom Bags')}</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.spoutPouches', 'Spout Pouches')}</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.flatPouches', 'Flat Pouches')}</Link></li>
              <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">{t('pouchEcoFooter.sideGussetBags', 'Side Gusset Bags')}</Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">{t('pouchEcoFooter.customBoxes', 'Custom Boxes')}</Link></li>
              <li><Link to="/packaging/shrink-sleeves" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Shrink Sleeves <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/quotes/rollstock" className="hover:text-primary-400">{t('pouchEcoFooter.rollstock', 'Rollstock')}</Link></li>
              <li className="pt-2 border-t border-neutral-800/40 font-semibold text-neutral-300">{t('pouchEcoFooter.featured', 'Featured')}</li>
              <li><Link to="/products/compostable-coffee-bags" className="hover:text-primary-400">{t('pouchEcoFooter.compostableCoffeeBags', 'Compostable Coffee')}</Link></li>
              <li><Link to="/products/coffee-bags-degassing-valve" className="hover:text-primary-400">{t('pouchEcoFooter.coffeeBagsValve', 'Coffee Bags with Valve')}</Link></li>
              <li><Link to="/products/compostable-stand-up-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.compostablePouches', 'Compostable Pouches')}</Link></li>
              <li><Link to="/products/compostable-side-gusset-bags" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Compostable Side Gusset <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/eco-stand-up-pouch-guide" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Stand Up Pouch <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/eco-stand-up-coffee-pouch" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Stand Up Coffee <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/eco-vs-conventional-pouch-comparison" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco vs Conventional <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/eco-side-gusset-pouch-guide" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Side Gusset Guide <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/side-gusset-coffee-bag-packaging" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Side Gusset Coffee <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/recyclable-side-gusset-bags" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Recyclable Side Gusset <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/eco-box-bottom-pouch" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Box Bottom <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/eco-flat-bottom-pouch" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Flat Bottom <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/premium-eco-packaging-comparison" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Premium Eco Comparison <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/custom-printed-corrugated-boxes" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Custom Corrugated Boxes <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/custom-printed-tuck-boxes" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Custom Tuck Boxes <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/premium-cotton-paper-foil-pouch" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Cotton Paper Foil Pouch <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/products/recyclable-mono-material-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoMaterial', 'Recyclable Mono-Material')}</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.company', 'Company')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/company/about" className="hover:text-primary-400">{t('pouchEcoFooter.aboutUs', 'About Us')}</Link></li>
              <li><Link to="/company/b-corp" className="hover:text-primary-400">{t('pouchEcoFooter.ourImpact', 'Our Impact (B Corp)')}</Link></li>
              <li><Link to="/company/certificates" className="hover:text-primary-400">{t('pouchEcoFooter.certificates', 'Certificates')}</Link></li>
              <li><Link to="/company/factory-tour" className="hover:text-primary-400">{t('pouchEcoFooter.factoryTour', 'Factory Tour')}</Link></li>
              <li><Link to="/team/ryan-wong" className="hover:text-primary-400">{t('pouchEcoFooter.ryanWong', 'Meet Ryan Wong')}</Link></li>
              <li className="pt-2 border-t border-neutral-800/40 font-semibold text-neutral-300">{t('pouchEcoFooter.support', 'Support')}</li>
              <li><Link to="/support/faqs" className="hover:text-primary-400">{t('pouchEcoFooter.faqs', 'FAQs')}</Link></li>
              <li><Link to="/support/lead-time" className="hover:text-primary-400">{t('pouchEcoFooter.leadTime', 'Lead Time')}</Link></li>
              <li><Link to="/support/color-accuracy-digital-printing" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Color Accuracy Guide <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/support/unprinted-samples" className="hover:text-primary-400">{t('pouchEcoFooter.unprintedSamples', 'Unprinted Samples')}</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400">{t('pouchEcoFooter.allArticles', 'All Articles')}</Link></li>
              <li><Link to="/store" className="hover:text-primary-400 font-semibold text-primary-400">{t('pouchEcoFooter.onlineStore', 'Online Store')}</Link></li>
              <li><Link to="/knowledge/food-packaging-compliance-date-coding" className="hover:text-primary-400">Food Coding Compliance</Link></li>
              <li><Link to="/knowledge/packaging-line-automation-date-coding" className="hover:text-primary-400">Packaging Line Automation</Link></li>
              <li><Link to="/knowledge/compostable-packaging-inkjet-coding" className="hover:text-primary-400">Eco Packaging Coding</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.industries', 'Industries')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">{t('pouchEcoFooter.coffeeTea', 'Coffee & Tea')}</Link></li>
              <li><Link to="/industry/snacks-food" className="hover:text-primary-400">{t('pouchEcoFooter.snacksFood', 'Snacks & Food')}</Link></li>
              <li><Link to="/industry/pet-food" className="hover:text-primary-400">{t('pouchEcoFooter.petFood', 'Pet Food')}</Link></li>
              <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">{t('pouchEcoFooter.supplements', 'Supplements')}</Link></li>
              <li><Link to="/industry/baby-food" className="hover:text-primary-400">{t('pouchEcoFooter.babyFood', 'Baby Food')}</Link></li>
              <li><Link to="/industry/frozen-food" className="hover:text-primary-400">{t('pouchEcoFooter.frozenFood', 'Frozen Food')}</Link></li>
              <li><Link to="/solutions/citrus-oil-packaging" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Citrus Oil <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/industry/fresh-produce" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Fresh Produce <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/industry/wholesale-unprinted-pouches" className="hover:text-primary-400 font-medium text-primary-400">Wholesale Unprinted <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/industry/low-moq-fast-turnaround" className="hover:text-primary-400 font-medium text-primary-400">Low MOQ Packaging <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/industry/high-barrier-food-pouches" className="hover:text-primary-400 font-medium text-primary-400">High-Barrier Food <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/industry/pet-food-quad-seal" className="hover:text-primary-400 font-medium text-primary-400">Pet Food Quad Seal <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* Technical Specs & Packaging Apps */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.technicalSpecs', 'Technical Specs')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/tech-specs" className="hover:text-primary-400 font-bold text-white">{t('pouchEcoFooter.technicalSpecHub', 'Technical Spec Hub')}</Link></li>
              <li><Link to="/materials/data-sheet" className="hover:text-primary-400">{t('pouchEcoFooter.materialDataSheets', 'Material Data Sheets')}</Link></li>
              <li><Link to="/spec/pcr-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.pcrSeriesSpecs', 'PCR Series Specs')}</Link></li>
              <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.biopeSeriesSpecs', 'Bio-PE Series Specs')}</Link></li>
              <li><Link to="/spec/mono-pe-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.monoMaterialSpecs', 'Mono-Material Specs')}</Link></li>
              <li><Link to="/spec/bio-cello-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.compostableSpecs', 'Compostable Specs')}</Link></li>
              <li className="pt-2 border-t border-neutral-800/40 font-semibold text-neutral-300 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-primary-400 fill-current animate-pulse" />
                <span>{t('pouchEcoFooter.packagingApps', 'Packaging Apps')}</span>
              </li>
              <li>
                <Link to="/knowledge/pouch-sizing" className="hover:text-primary-400 font-semibold text-white flex items-center gap-1 group">
                  <SizingFinderIcon className="h-3.5 w-3.5 text-primary-400 group-hover:scale-110 transition-transform" />
                  <span>Sizing Finder App</span>
                </Link>
              </li>
              <li>
                <Link to="/tech-specs" className="hover:text-primary-400 font-semibold text-white flex items-center gap-1 group">
                  <MaterialSpecFinderIcon className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Spec Finder App</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-neutral-800/40 font-semibold text-neutral-300">3D Spec Directory</li>
              <li>
                <Link to="/solutions/catalog" className="hover:text-primary-400 font-medium text-emerald-450 flex items-center gap-1">
                  <span>3D Packaging Catalog</span>
                </Link>
              </li>
              <li><Link to="/solutions/flexible-pouches-catalog" className="hover:text-primary-400">Flexible Pouches Specs</Link></li>
              <li><Link to="/solutions/custom-boxes-catalog" className="hover:text-primary-400">Custom Boxes Specs</Link></li>
              <li><Link to="/solutions/cosmetics-bottles-catalog" className="hover:text-primary-400">Cosmetics Bottles Specs</Link></li>
              <li className="pt-2 border-t border-neutral-800/40 font-semibold text-neutral-300">{t('pouchEcoFooter.usaMarket', 'USA Market')}</li>
              <li><Link to="/usa/compostable-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.compostablePackagingUsa', 'Compostable Packaging')}</Link></li>
              <li><Link to="/usa/coffee-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.coffeePackagingUsa', 'Coffee Packaging')}</Link></li>
              <li><Link to="/usa/snacks-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.snacksPackagingUsa', 'Snacks Packaging')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Row 2: Material Specifications & Composting Guides (Grouped compact & collapsible) */}
        <div className="border-t border-neutral-800 py-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none">
              <div className="flex items-center gap-2">
                <Leaf className="h-4.5 w-4.5 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider">{t('pouchEcoFooter.technicalDirectory', 'Technical Directory & Composting Specs')}</span>
              </div>
              <div className="text-[10px] border border-neutral-700 rounded px-2 py-0.5 bg-neutral-800 text-neutral-400 group-open:bg-neutral-700 group-open:text-white transition-all font-semibold uppercase font-mono">
                <span className="group-open:hidden">{t('pouchEcoFooter.showAll', '[+] Expand')}</span>
                <span className="hidden group-open:inline">{t('pouchEcoFooter.hideAll', '[-] Collapse')}</span>
              </div>
            </summary>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 pt-4 border-t border-neutral-800/40 text-neutral-400 text-xs transition-all duration-300">
            {/* Composting */}
            <div>
              <h4 className="font-semibold text-xs mb-3 text-emerald-400 uppercase tracking-wider">{t('pouchEcoFooter.composting', 'Composting')}</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/composting/composting-benefits" className="hover:text-primary-400">{t('pouchEcoFooter.compostingBenefits', 'Composting Benefits')}</Link></li>
                <li><Link to="/composting/composting-services" className="hover:text-primary-400">{t('pouchEcoFooter.serviceFinder', 'Service Finder')}</Link></li>
                <li><Link to="/composting/biodegradable-vs-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.biodegradableVsCompostable', 'Biodegradable vs Compostable')}</Link></li>
                <li><Link to="/composting/commercial-composting" className="hover:text-primary-400">{t('pouchEcoFooter.commercialComposting', 'Commercial Composting')}</Link></li>
                <li><Link to="/composting/home-vs-industrial-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.homeVsIndustrial', 'Home vs Industrial')}</Link></li>
                <li><Link to="/composting/natural-cellulose-fiber" className="hover:text-primary-400">{t('pouchEcoFooter.naturalCelluloseFiber', 'Natural Cellulose')}</Link></li>
                <li><Link to="/topics/compostable-humidity-control" className="hover:text-primary-400">{t('pouchEcoFooter.humidityControl', 'Humidity Control')}</Link></li>
                <li><Link to="/topics/compostable-zipper-durability" className="hover:text-primary-400">{t('pouchEcoFooter.zipperDurability', 'Zipper Durability')}</Link></li>
                <li><Link to="/topics/compostable-spouted-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.spoutedPouches', 'Compostable Spouted')}</Link></li>
                <li><Link to="/industry/pla-compostable-packaging" className="hover:text-primary-400">PLA Compostable Guide</Link></li>
                <li><Link to="/industry/compostable-laminated-film" className="hover:text-primary-400">Laminated Film Guide</Link></li>
                <li><Link to="/industry/compostable-protein-bags" className="hover:text-primary-400">Protein Bags Guide</Link></li>
              </ul>
            </div>

            {/* BioPE */}
            <div>
              <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.biope', 'BioPE')}</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsBioPe', 'What is Bio-PE?')}</Link></li>
                <li><Link to="/biope/bio-pe-vs-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.bioPeVsCompostable', 'Bio-PE vs Compostable')}</Link></li>
                <li><Link to="/materials/bio-pe" className="hover:text-primary-400">{t('pouchEcoFooter.bioPeMaterials', 'Bio-PE Materials')}</Link></li>
                <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.bioPeStructures', 'Bio-PE Structures')}</Link></li>
                <li><Link to="/industry/eco-friendly-tea-coffee" className="hover:text-primary-400">Eco Coffee & Tea Bags</Link></li>
              </ul>
            </div>

            {/* PCR */}
            <div>
              <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.pcrSection', 'PCR')}</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/pcr/pcr-plastic-guide" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsPcr', 'What Is PCR Plastic?')}</Link></li>
                <li><Link to="/pcr/7-checklist" className="hover:text-primary-400">{t('pouchEcoFooter.pcrChecklist', '7-Point Checklist')}</Link></li>
                <li><Link to="/pcr/realistic-pcr-content" className="hover:text-primary-400">{t('pouchEcoFooter.realisticPcr', 'Realistic PCR Content')}</Link></li>
                <li><Link to="/pcr/recyclable-vs-pcr-biobased" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableVsPcrBio', 'Recyclable vs PCR vs Bio')}</Link></li>
                <li><Link to="/materials/pcr" className="hover:text-primary-400">{t('pouchEcoFooter.pcrMaterials', 'PCR Materials')}</Link></li>
                <li><Link to="/industry/pcr-packaging-pouches" className="hover:text-primary-400">PCR Pouches Guide</Link></li>
              </ul>
            </div>

            {/* Recyclable & Compliance */}
            <div>
              <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.recyclableSection', 'Recyclable')}</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsRecyclable', 'What Is 100% Recyclable?')}</Link></li>
                <li><Link to="/recyclable/roadmap-sme" className="hover:text-primary-400">{t('pouchEcoFooter.roadmapSme', 'SME Roadmap')}</Link></li>
                <li><Link to="/recyclable/mono-material-foundation" className="hover:text-primary-400">{t('pouchEcoFooter.monoMaterialFoundation', 'Mono-Material Foundation')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoPE', 'Recyclable Mono-PE')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoPP', 'Recyclable Mono-PP')}</Link></li>
                <li><Link to="/materials/plastic-free-kraft" className="hover:text-primary-400 font-medium text-emerald-400">Plastic-Free Kraft</Link></li>
                <li><Link to="/topics/eu-ppwr-compliance" className="hover:text-primary-400 font-medium">EU PPWR Compliance</Link></li>
                <li><Link to="/knowledge/reusable-packaging" className="hover:text-primary-400">Reusable Packaging Guide</Link></li>
              </ul>
            </div>

            {/* Functional Options & Premium Finishes */}
            <div>
              <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">Functions & Finishes</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-400">Microwave Steam Bags</Link></li>
                <li><Link to="/function/smart-degassing-sticker" className="hover:text-primary-400">Smart Degassing Sticker</Link></li>
                <li><Link to="/function/carbon-neutral-bags" className="hover:text-primary-400">Carbon-Neutral Bags</Link></li>
                <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">Child-Resistant Bags</Link></li>
                <li><Link to="/function/spout-pouches-juice" className="hover:text-primary-400">Spout Pouches Juice</Link></li>
                <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-400">Retort Bags</Link></li>
                <li><Link to="/function/rice-paper-bags" className="hover:text-primary-400">Rice Paper Bags</Link></li>
                <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-400">PVA Water-Soluble Bags</Link></li>
                <li><Link to="/large-format-kraft-heavy-bags" className="hover:text-primary-400">Kraft Heavy-Duty Sacks</Link></li>
                <li><Link to="/function/pre-zippered-rollstock" className="hover:text-primary-400">Pre-Zippered Rollstock</Link></li>
              </ul>
            </div>
          </div>
          </details>
        </div>

        {/* Row 3: Packaging Topics & Solutions Directory (Grouped compact & collapsible) */}
        <div className="border-t border-neutral-800 py-4">
          <details className="group" open>
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none">
              <div className="flex items-center gap-2">
                <Zap className="h-4.5 w-4.5 text-primary-500 fill-current animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">{t('pouchEcoFooter.solutionsDirectory', 'Packaging Topics & Solutions Directory')}</span>
              </div>
              <div className="text-[10px] border border-neutral-700 rounded px-2 py-0.5 bg-neutral-800 text-neutral-400 group-open:bg-neutral-700 group-open:text-white transition-all font-semibold uppercase font-mono">
                <span className="group-open:hidden">{t('pouchEcoFooter.showAll', '[+] Expand')}</span>
                <span className="hidden group-open:inline">{t('pouchEcoFooter.hideAll', '[-] Collapse')}</span>
              </div>
            </summary>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-xs text-neutral-400 mt-4 pt-4 border-t border-neutral-800/40">
            <ul className="space-y-1">
              <li><Link to="/solutions/food-coding-compliance" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Food Coding Compliance <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/solutions/packaging-line-automation" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Packaging Line Automation <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/solutions/eco-packaging-coding" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">Eco Packaging Coding <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/topics/matcha-sachet" className="hover:text-primary-400">{t('seo_topics.matcha_sachet.title', 'Matcha Sachet')}</Link></li>
              <li><Link to="/topics/cacao-stand-up" className="hover:text-primary-400">{t('seo_topics.cacao_stand_up.title', 'Cacao Stand Up')}</Link></li>
              <li><Link to="/topics/spices-moisture-proof" className="hover:text-primary-400">{t('seo_topics.spices_moisture_proof.title', 'Spices Moisture Proof')}</Link></li>
              <li><Link to="/topics/premium-tea" className="hover:text-primary-400">{t('seo_topics.premium_tea.title', 'Premium Tea')}</Link></li>
              <li><Link to="/topics/cocktail-spout" className="hover:text-primary-400">{t('seo_topics.cocktail_spout.title', 'Cocktail Spout')}</Link></li>
              <li><Link to="/topics/candy-uv" className="hover:text-primary-400">{t('seo_topics.candy_uv.title', 'Candy UV')}</Link></li>
              <li><Link to="/blog/stamp-foil-recyclability" className="hover:text-primary-400">{t('pouchEcoFooter.stampFoilRecyclability', 'Stamp Foil Recyclability')}</Link></li>
              <li><Link to="/topics/snack-food-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.snack_food_stand_up_pouch.title', 'Snack Food Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/snack-stand-up-pouch-large" className="hover:text-primary-400">{t('seo_topics.snack_stand_up_pouch_large.title', 'Large Snack Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/condiment-sachet-three-side-seal" className="hover:text-primary-400">{t('seo_topics.condiment_sachet_three_side_seal.title', 'Condiment Sachet Three-Side Seal')}</Link></li>
              <li><Link to="/topics/dried-fruit-hanging-zipper-pouch" className="hover:text-primary-400">{t('seo_topics.dried_fruit_hanging_zipper_pouch.title', 'Hanging Dried Fruit Zipper Pouch')}</Link></li>
              <li><Link to="/topics/dried-fruit-flat-bottom-pouch" className="hover:text-primary-400">{t('seo_topics.dried_fruit_flat_bottom_pouch.title', 'Flat Bottom Dried Fruit Pouch')}</Link></li>
              <li><Link to="/topics/pet-food-flat-bottom-bag" className="hover:text-primary-400">{t('seo_topics.pet_food_flat_bottom_bag.title', 'Pet Food Flat Bottom Bag')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/crisps-shaped" className="hover:text-primary-400">{t('seo_topics.crisps_shaped.title', 'Crisps Shaped')}</Link></li>
              <li><Link to="/topics/dried-fruits-tear-notch" className="hover:text-primary-400">{t('seo_topics.dried_fruits_tear_notch.title', 'Dried Fruits Tear Notch')}</Link></li>
              <li><Link to="/topics/cheese-pocket-zipper" className="hover:text-primary-400">{t('seo_topics.cheese_pocket_zipper.title', 'Cheese Pocket Zipper')}</Link></li>
              <li><Link to="/topics/euro-hole-hang" className="hover:text-primary-400">{t('seo_topics.euro_hole_hang.title', 'Euro Hole Hang')}</Link></li>
              <li><Link to="/topics/pet-food-quad-seal" className="hover:text-primary-400">{t('seo_topics.pet_food_quad_seal.title', 'Pet Food Quad Seal')}</Link></li>
              <li><Link to="/topics/pharma-velcro" className="hover:text-primary-400">{t('seo_topics.pharma_velcro.title', 'Pharma Velcro')}</Link></li>
              <li><Link to="/industry/recyclable-vacuum-bags" className="hover:text-primary-400">Recyclable Vacuum Bags</Link></li>
              <li><Link to="/topics/jelly-beverage-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.jelly_beverage_stand_up_pouch.title', 'Jelly & Beverage Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/beverage-soft-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.beverage_soft_stand_up_pouch.title', 'Soft Beverage Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/medical-tape-three-side-seal" className="hover:text-primary-400">{t('seo_topics.medical_tape_three_side_seal.title', 'Medical Tape Three-Side Seal')}</Link></li>
              <li><Link to="/topics/cosmetic-cleanser-three-side-zipper-pouch" className="hover:text-primary-400">{t('seo_topics.cosmetic_cleanser_three_side_zipper_pouch.title', 'Cosmetic Cleanser Zipper Pouch')}</Link></li>
              <li><Link to="/topics/rice-flat-bottom-bag" className="hover:text-primary-400">{t('seo_topics.rice_flat_bottom_bag.title', 'Rice Flat Bottom Bag')}</Link></li>
              <li><Link to="/topics/pillow-pack-snack-bag" className="hover:text-primary-400">{t('seo_topics.pillow_pack_snack_bag.title', 'Pillow Pack Snack Bag')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/detergent-spout" className="hover:text-primary-400">{t('seo_topics.detergent_spout.title', 'Detergent Spout')}</Link></li>
              <li><Link to="/topics/electronics-anti-static" className="hover:text-primary-400">{t('seo_topics.electronics_anti_static.title', 'Electronics Anti Static')}</Link></li>
              <li><Link to="/topics/apparel-zipper" className="hover:text-primary-400">{t('seo_topics.apparel_zipper.title', 'Apparel Zipper')}</Link></li>
              <li><Link to="/topics/hologram-hot-stamping" className="hover:text-primary-400">{t('seo_topics.hologram_hot_stamping.title', 'Hologram Hot Stamping')}</Link></li>
              <li><Link to="/topics/granola-soft-touch" className="hover:text-primary-400">{t('seo_topics.granola_soft_touch.title', 'Granola Soft Touch')}</Link></li>
              <li><Link to="/topics/collagen-high-barrier" className="hover:text-primary-400">{t('seo_topics.collagen_high_barrier.title', 'Collagen High Barrier')}</Link></li>
              <li><Link to="/industry/sustainable-kraft-solutions" className="hover:text-primary-400">Sustainable Kraft Solutions</Link></li>
              <li><Link to="/topics/oatmeal-cereal-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.oatmeal_cereal_stand_up_pouch.title', 'Oatmeal & Cereal Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/kraft-paper-shopping-bag" className="hover:text-primary-400">{t('seo_topics.kraft_paper_shopping_bag.title', 'Kraft Paper Shopping Bag')}</Link></li>
              <li><Link to="/topics/household-jam-three-side-seal" className="hover:text-primary-400">{t('seo_topics.household_jam_three_side_seal.title', 'Household Jam Three-Side Seal')}</Link></li>
              <li><Link to="/topics/snack-sachet-three-side-seal" className="hover:text-primary-400">{t('seo_topics.snack_sachet_three_side_seal.title', 'Snack Sachet Three-Side Seal')}</Link></li>
              <li><Link to="/topics/bread-flat-bottom-bag" className="hover:text-primary-400">{t('seo_topics.bread_flat_bottom_bag.title', 'Bread Flat Bottom Bag')}</Link></li>
              <li><Link to="/topics/household-back-seal-bag" className="hover:text-primary-400">{t('seo_topics.household_back_seal_bag.title', 'Household Back Seal Bag')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/pla-rice" className="hover:text-primary-400">{t('seo_topics.pla_rice.title', 'PLA Rice')}</Link></li>
              <li><Link to="/topics/rice-paper-artisanal" className="hover:text-primary-400">{t('seo_topics.rice_paper_artisanal.title', 'Rice Paper Artisanal')}</Link></li>
              <li><Link to="/topics/cosmetic-cream-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.cosmetic_cream_stand_up_pouch.title', 'Cosmetic Cream Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/tea-stand-up-zipper-pouch" className="hover:text-primary-400">{t('seo_topics.tea_stand_up_zipper_pouch.title', 'Tea Stand-Up Zipper Pouch')}</Link></li>
              <li><Link to="/topics/cereal-sachet-three-side-seal" className="hover:text-primary-400">{t('seo_topics.cereal_sachet_three_side_seal.title', 'Cereal Sachet Three-Side Seal')}</Link></li>
              <li><Link to="/topics/tea-sachet-three-side-seal" className="hover:text-primary-400">{t('seo_topics.tea_sachet_three_side_seal.title', 'Tea Sachet Three-Side Seal')}</Link></li>
              <li><Link to="/topics/coffee-beans-flat-bottom-pouch" className="hover:text-primary-400">{t('seo_topics.coffee_beans_flat_bottom_pouch.title', 'Coffee Beans Flat Bottom Pouch')}</Link></li>
              <li><Link to="/topics/beef-jerky-pillow-pouch" className="hover:text-primary-400">{t('seo_topics.beef_jerky_pillow_pouch.title', 'Beef Jerky Pillow Pouch')}</Link></li>
              <li><Link to="/topics/ddp-packaging" className="hover:text-primary-400">{t('seo_topics.ddp_packaging.title', 'DDP Packaging')}</Link></li>
              <li><Link to="/topics/fast-air-freight" className="hover:text-primary-400">{t('seo_topics.fast_air_freight.title', 'Fast Air Freight')}</Link></li>
              <li><Link to="/topics/fda-brc-certified" className="hover:text-primary-400">{t('seo_topics.fda_brc_certified.title', 'FDA BRC Certified')}</Link></li>
              <li><Link to="/topics/iso-sustainable" className="hover:text-primary-400">{t('seo_topics.iso_sustainable.title', 'ISO Sustainable')}</Link></li>
              <li><Link to="/industry/brown-white-kraft" className="hover:text-primary-400">Brown vs White Kraft</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/urgent-orders" className="hover:text-primary-400">{t('seo_topics.urgent_orders.title', 'Urgent Orders')}</Link></li>
              <li><Link to="/topics/frozen-vacuum" className="hover:text-primary-400">{t('seo_topics.frozen_vacuum.title', 'Frozen Vacuum')}</Link></li>
              <li><Link to="/topics/evoh-retort" className="hover:text-primary-400">{t('seo_topics.evoh_retort.title', 'EVOH Retort')}</Link></li>
              <li><Link to="/topics/beef-jerky-barrier" className="hover:text-primary-400">{t('seo_topics.beef_jerky_barrier.title', 'Beef Jerky Barrier')}</Link></li>
              <li><Link to="/topics/valve-coffee-bags" className="hover:text-primary-400">{t('seo_topics.valve_coffee_bags.title', 'Valve Coffee Bags')}</Link></li>
              <li><Link to="/topics/home-vs-industrial-compostable" className="hover:text-primary-400">{t('seo_topics.home_vs_industrial_compostable.title', 'Home vs Industrial')}</Link></li>
              <li><Link to="/industry/kraft-window-pouch" className="hover:text-primary-400">Kraft Window Pouches</Link></li>
              <li><Link to="/industry/durable-reusable-pouches" className="hover:text-primary-400">Eco-Friendly Ziplock Bags</Link></li>
              <li><Link to="/topics/digital-product-passport-packaging" className="hover:text-primary-400">{t('seo_topics.digital_product_passport_packaging.title', 'Digital Product Passport Packaging')}</Link></li>
              <li><Link to="/topics/sensory-unboxing-experience" className="hover:text-primary-400">{t('seo_topics.sensory_unboxing_experience.title', 'Sensory Unboxing Experience')}</Link></li>
              <li><Link to="/topics/epr-tax-minimization-strategies" className="hover:text-primary-400">{t('seo_topics.epr_tax_minimization_strategies.title', 'EPR Tax Minimization')}</Link></li>
              <li><Link to="/topics/ultrasonic-vs-heat-sealing" className="hover:text-primary-400">{t('seo_topics.ultrasonic_vs_heat_sealing.title', 'Ultrasonic vs. Heat Sealing')}</Link></li>
              <li><Link to="/topics/plant-based-barrier-coatings" className="hover:text-primary-400">{t('seo_topics.plant_based_barrier_coatings.title', 'Plant-Based Barrier Coatings')}</Link></li>
              <li><Link to="/topics/ocean-bound-plastic-packaging" className="hover:text-primary-400">{t('seo_topics.ocean_bound_plastic_packaging.title', 'Ocean-Bound Plastic Packaging')}</Link></li>
              <li><Link to="/topics/active-modified-atmosphere-packaging" className="hover:text-primary-400">{t('seo_topics.active_modified_atmosphere_packaging.title', 'Active & Modified Atmosphere Packaging (MAP) Guide')}</Link></li>
              <li><Link to="/topics/tamper-evident-sealing-standards" className="hover:text-primary-400">{t('seo_topics.tamper_evident_sealing_standards.title', 'Tamper-Evident Sealing')}</Link></li>
              <li><Link to="/topics/liquid-barrier-packaging-spouts" className="hover:text-primary-400">{t('seo_topics.liquid_barrier_packaging_spouts.title', 'Liquid Barrier Packaging')}</Link></li>
              <li><Link to="/topics/carbon-footprint-tracking-packaging" className="hover:text-primary-400">{t('seo_topics.carbon_footprint_tracking_packaging.title', 'Carbon Footprint Tracking')}</Link></li>
              <li><Link to="/topics/ai-packaging-resolution" className="hover:text-primary-400">{t('seo_topics.ai_packaging_resolution.title', 'AI Artwork Resolution')}</Link></li>
              <li><Link to="/topics/ai-packaging-bleed-dimensions" className="hover:text-primary-400">{t('seo_topics.ai_packaging_bleed_dimensions.title', 'AI Bleed & Dimensions')}</Link></li>
              <li><Link to="/topics/ai-packaging-safe-margins" className="hover:text-primary-400">{t('seo_topics.ai_packaging_safe_margins.title', 'AI Background Margins')}</Link></li>
              <li><Link to="/topics/ai-packaging-layered-assets" className="hover:text-primary-400">{t('seo_topics.ai_packaging_layered_assets.title', 'AI Layered Assets')}</Link></li>
              <li><Link to="/topics/ai-packaging-barcodes-bottom-fold" className="hover:text-primary-400">{t('seo_topics.ai_packaging_barcodes_bottom_fold.title', 'AI Barcodes & Bottom')}</Link></li>
              <li><Link to="/topics/cosmetic-serum-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.cosmetic_serum_stand_up_pouch.title', 'Cosmetic Serum Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/pet-treat-stand-up-zipper-pouch" className="hover:text-primary-400">{t('seo_topics.pet_treat_stand_up_zipper_pouch.title', 'Pet Treat Stand-Up Zipper Pouch')}</Link></li>
              <li><Link to="/topics/cosmetic-sample-three-side-seal" className="hover:text-primary-400">{t('seo_topics.cosmetic_sample_three_side_seal.title', 'Cosmetic Sample Three-Side Seal')}</Link></li>
              <li><Link to="/topics/coffee-sachet-three-side-seal" className="hover:text-primary-400">{t('seo_topics.coffee_sachet_three_side_seal.title', 'Coffee Sachet Three-Side Seal')}</Link></li>
              <li><Link to="/topics/nuts-flat-bottom-pouch" className="hover:text-primary-400">{t('seo_topics.nuts_flat_bottom_pouch.title', 'Nuts Flat Bottom Pouch')}</Link></li>
              <li><Link to="/topics/grains-back-seal-pouch" className="hover:text-primary-400">{t('seo_topics.grains_back_seal_pouch.title', 'Grains Back Seal Pouch')}</Link></li>
              <li><Link to="/knowledge/dupont-paper-tote-bags-benefits" className="hover:text-primary-400 text-green-400 font-bold">DuPont Paper Tote Bags Benefits <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/tyvek-vs-canvas-tote-bags" className="hover:text-primary-400 text-green-400 font-bold">Tyvek vs. Canvas Tote Bags</Link></li>
              <li><Link to="/knowledge/eco-friendly-dupont-paper-bags" className="hover:text-primary-400 text-green-400 font-bold">Eco-Friendly DuPont Paper Bags</Link></li>
              <li><Link to="/knowledge/molded-pulp-packaging-benefits" className="hover:text-primary-400 text-green-400 font-bold">Molded Pulp Packaging Benefits <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/eco-degradable-pulp-boxes-guide" className="hover:text-primary-400 text-green-400 font-bold">Eco-Degradable Pulp Boxes Guide</Link></li>
              <li><Link to="/knowledge/pulp-boxes-vs-corrugated-cardboard" className="hover:text-primary-400 text-green-400 font-bold">Pulp Boxes vs Corrugated Cardboard</Link></li>
              <li><Link to="/knowledge/luxury-cork-gift-boxes" className="hover:text-primary-400 text-green-400 font-bold">Luxury Cork Gift Boxes <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/cork-packaging-sustainability" className="hover:text-primary-400 text-green-400 font-bold">Cork Packaging Sustainability</Link></li>
              <li><Link to="/knowledge/custom-cork-gift-boxes-design" className="hover:text-primary-400 text-green-400 font-bold">Custom Cork Gift Boxes Design</Link></li>
              <li><Link to="/knowledge/soft-wood-gift-boxes-wholesale" className="hover:text-primary-400 text-green-400 font-bold">Soft Wood Gift Boxes Wholesale <span className="bg-primary-500/20 text-[9px] px-1 rounded uppercase">New</span></Link></li>
              <li><Link to="/knowledge/wooden-gift-boxes-sustainability" className="hover:text-primary-400 text-green-400 font-bold">Wooden Gift Boxes Sustainability</Link></li>
              <li><Link to="/knowledge/balsa-soft-wood-packaging" className="hover:text-primary-400 text-green-400 font-bold">Balsa Soft Wood Packaging</Link></li>
            </ul>
          </div>
          </details>
        </div>

        {/* Row 4: 3D Packaging Model Directory (Grouped compact & collapsible) */}
        <div className="border-t border-neutral-800 py-4">
          <details className="group" open>
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none">
              <div className="flex items-center gap-2">
                <Box className="h-4.5 w-4.5 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider">{t('pouchEcoFooter.3dDirectory', '3D Packaging Model Directory')}</span>
              </div>
              <div className="text-[10px] border border-neutral-700 rounded px-2 py-0.5 bg-neutral-800 text-neutral-400 group-open:bg-neutral-700 group-open:text-white transition-all font-semibold uppercase font-mono">
                <span className="group-open:hidden">{t('pouchEcoFooter.showAll', '[+] Expand')}</span>
                <span className="hidden group-open:inline">{t('pouchEcoFooter.hideAll', '[-] Collapse')}</span>
              </div>
            </summary>
            
            <div className="mt-4 pt-4 border-t border-neutral-800/40 text-neutral-400 text-xs">
              {footerShapes.length === 0 ? (
                <p className="text-xs text-neutral-500 py-2">Loading packaging shapes...</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {footerShapes.map((shape) => {
                    const langPrefix = currentLang === 'en' ? '' : `/${currentLang}`;
                    return (
                      <Link
                        key={shape.id}
                        to={`${langPrefix}/solutions/shapes/${shape.slug || shape.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="hover:text-primary-400 transition-colors whitespace-nowrap overflow-hidden text-ellipsis block"
                        title={shape.name}
                      >
                        {shape.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </details>
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
              <span>{t('pouchEcoFooter.stripeContribution', 'At Achieve Pack pouch.eco, we contribute 1% of our revenue to carbon removal')}</span>
            </a>
            
            {/* Payment Logos */}
            <img src="/pay-logos.svg" alt="Payment Methods" className="h-8 w-auto" loading="lazy" decoding="async" />
            
            {/* SSL Secure Badge */}
            <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-neutral-300 font-medium">{t('pouchEcoFooter.sslSecure', 'SSL 100% Secure Transactions')}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <Link to="/" className="hover:opacity-85 transition-opacity">
              <img src="/ap-logo-white.webp" alt="Achieve Pack Logo" className="h-6 w-auto" loading="lazy" decoding="async" />
            </Link>
            <p className="text-neutral-500 text-xs">
              {t('pouchEcoFooter.copyright', '© 2010-2026 Achieve Pack. All rights reserved.')}
            </p>
          </div>
          <div className="flex gap-4 text-xs text-neutral-500 justify-center flex-wrap">
            <Link to="/terms" className="hover:text-primary-400">{t('pouchEcoFooter.termsConditions', 'Terms & Conditions')}</Link>
            <Link to="/privacy" className="hover:text-primary-400">{t('pouchEcoFooter.privacyPolicy', 'Privacy Policy')}</Link>
            <Link to="/shipping" className="hover:text-primary-400">{t('pouchEcoFooter.shippingPolicy', 'Shipping Policy')}</Link>
            <Link to="/return-policy" className="hover:text-primary-400">{t('pouchEcoFooter.returnPolicy', 'Return Policy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}