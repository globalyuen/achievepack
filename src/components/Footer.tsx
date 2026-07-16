import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Mail, Phone, Calendar, FileText, ShieldCheck, Zap, Box } from 'lucide-react'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './AppIcons'
import { useEffect, useState, useMemo } from 'react'
import { isAchievePack } from '../utils/domain'
import galleryData from '../data/image-gallery.json'
import imageSeoMapRaw from '../data/image-seo-map.json'

const imageSeoMap = imageSeoMapRaw as Record<string, Array<{title: string, url: string}>>;

export default function Footer() {
  const { t } = useTranslation()
  const [footerShapes, setFooterShapes] = useState<any[]>([])

  // Get 4 random images for the gallery thumbnail
  const randomGalleryImages = useMemo(() => {
    // Only pick images that have a mapped SEO page to maximize clicks
    const mappedImages = galleryData.filter(img => imageSeoMap[img.src] && imageSeoMap[img.src].length > 0);
    const shuffled = [...mappedImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

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

    if ((window as any).merchantwidget) {
      initWidget()
    } else {
      script.addEventListener('load', initWidget)
    }

    return () => {
      script.removeEventListener('load', initWidget)
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
        
        {/* Row 1: Core Navigation (5 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 pb-8 border-b border-neutral-800">
          
          {/* Column 1: Company & Support */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-primary-500" />
                <span className="text-base font-bold">{t('pouchEcoFooter.brand', 'Achieve Pack')}</span>
              </div>
              
              <div className="space-y-1.5 text-xs text-neutral-400 mb-4">
                <div className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-primary-500" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-400">ryan@achievepack.com</a>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-primary-500" />
                  <a href="tel:+85269704411" className="hover:text-primary-400">+852 6970 4411</a>
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

            {/* Badges */}
            <div className="flex gap-2">
              <Link to="/company/bpi-certified" className="hover:opacity-90 transition-opacity flex items-center bg-white/5 rounded px-2 py-1 border border-neutral-800">
                <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-6 w-auto object-contain" loading="lazy" />
              </Link>
              <Link to="/company/b-corp" className="hover:opacity-90 transition-opacity flex items-center bg-white/5 rounded px-2 py-1 border border-neutral-800">
                <img src="/bcorp.svg" alt="B Corp" className="h-6 w-auto object-contain" loading="lazy" />
              </Link>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-sm mb-3 text-neutral-200 mt-4">{t('pouchEcoFooter.companySupport', 'Company & Support')}</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/company/about" className="hover:text-primary-400">{t('pouchEcoFooter.aboutUs', 'About Us')}</Link></li>
                <li><Link to="/team/ryan-wong" className="hover:text-primary-400">{t('pouchEcoFooter.ryanWong', 'Meet Ryan Wong')}</Link></li>
                <li><Link to="/support/faqs" className="hover:text-primary-400">{t('pouchEcoFooter.faqs', 'FAQs')}</Link></li>
                <li><a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">{t('pouchEcoFooter.bookMeeting', 'Book a Consultation')}</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Packaging Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.packagingSolutions', 'Packaging Solutions')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/quotes/rollstock" className="hover:text-primary-400">{t('pouchEcoFooter.rollstockFilm', 'Rollstock Film')}</Link></li>
              <li><Link to="/solutions/packaging-line-automation" className="hover:text-primary-400">{t('pouchEcoFooter.automatedIntegration', 'Automated Line Integration')}</Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">{t('pouchEcoFooter.customBoxes', 'High-Volume Custom Packaging')}</Link></li>
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.standUpPouches', 'Stand Up Pouches')}</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">{t('pouchEcoFooter.flatBottomBags', 'Flat Bottom Bags')}</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.spoutPouches', 'Spout Pouches')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Technical Specs */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.technicalSpecs', 'Technical Specs')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/materials/data-sheet" className="hover:text-primary-400">{t('pouchEcoFooter.materialDataSheets', 'Material Data Sheets')}</Link></li>
              <li><Link to="/topics/plant-based-barrier-coatings" className="hover:text-primary-400">{t('pouchEcoFooter.barrierCoatings', 'Barrier Coatings')}</Link></li>
              <li><Link to="/topics/iso-sustainable" className="hover:text-primary-400">{t('pouchEcoFooter.complianceIso', 'Compliance & ISO')}</Link></li>
              <li><Link to={isAchievePack() ? "/function/smart-degassing-sticker" : "/options/smart-degassing-sticker"} className="hover:text-primary-400">{t('pouchEcoFooter.degassingValves', 'Degassing Valves')}</Link></li>
              <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">{t('pouchEcoFooter.childResistantZippers', 'Child-Resistant Zippers')}</Link></li>
              <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-400">{t('pouchEcoFooter.microwaveSteamBags', 'Microwave Steam Bags')}</Link></li>
            </ul>
          </div>

          {/* Column 4: By Industry */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{t('pouchEcoFooter.shopByIndustry', 'By Industry')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">{t('pouchEcoFooter.coffeeRoasters', 'Coffee Roasters')}</Link></li>
              <li><Link to="/industry/pet-food" className="hover:text-primary-400">{t('pouchEcoFooter.petFoodManufacturers', 'Pet Food Manufacturers')}</Link></li>
              <li><Link to="/solutions/citrus-oil-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.cosmeticsLiquids', 'Cosmetics & Liquids')}</Link></li>
              <li><Link to="/industry/snacks-food" className="hover:text-primary-400">{t('pouchEcoFooter.snacksFood', 'Snacks & Food')}</Link></li>
              <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">{t('pouchEcoFooter.supplements', 'Supplements')}</Link></li>
              <li><Link to="/industry/baby-food" className="hover:text-primary-400">{t('pouchEcoFooter.babyFood', 'Baby Food')}</Link></li>
            </ul>
          </div>

          {/* Column 5: Image Gallery */}
          <div>
            <Link to="/gallery" className="group flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm text-neutral-200 group-hover:text-[#D4FF00] transition-colors flex items-center gap-2">
                <Box className="h-4 w-4" /> Visual Gallery
              </h4>
              <span className="text-xs text-neutral-500 group-hover:text-[#D4FF00] transition-colors">See all &rarr;</span>
            </Link>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {randomGalleryImages.map((img, idx) => (
                <Link key={idx} to={imageSeoMap[img.src][0].url} className="rounded overflow-hidden border border-neutral-700 hover:border-[#D4FF00] transition group bg-neutral-800" title={img.title}>
                  <img src={img.src} alt={img.title || "Gallery preview"} className="w-full h-16 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </Link>
              ))}
            </div>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/gallery" className="hover:text-primary-400">Packaging Size Guide</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400">Material Infographics</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400">3D Product Mockups</Link></li>
            </ul>
          </div>
        </div>

        {/* Row 2: Technical Resources & Apps (Collapsible) */}
        <div className="border-t border-neutral-800 py-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none">
              <div className="flex items-center gap-2">
                <Zap className="h-4.5 w-4.5 text-primary-500 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wider">{t('pouchEcoFooter.technicalResources', 'Technical Resources & Apps')}</span>
              </div>
              <div className="text-[10px] border border-neutral-700 rounded px-2 py-0.5 bg-neutral-800 text-neutral-400 group-open:bg-neutral-700 group-open:text-white transition-all font-semibold uppercase font-mono">
                <span className="group-open:hidden">{t('pouchEcoFooter.showAll', '[+] Expand')}</span>
                <span className="hidden group-open:inline">{t('pouchEcoFooter.hideAll', '[-] Collapse')}</span>
              </div>
            </summary>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 pt-4 border-t border-neutral-800/40 text-neutral-400 text-xs transition-all duration-300">
              
              {/* Apps & Tools */}
              <div>
                <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.packagingApps', 'Packaging Apps & Tools')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li>
                    <Link to="/knowledge/pouch-sizing" className="hover:text-primary-400 font-semibold text-white flex items-center gap-1 group">
                      <SizingFinderIcon className="h-3.5 w-3.5 text-primary-400 group-hover:scale-110 transition-transform" />
                      <span>{t('pouchEcoFooter.sizingFinder', 'Sizing Finder App')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/tech-specs" className="hover:text-primary-400 font-semibold text-white flex items-center gap-1 group">
                      <MaterialSpecFinderIcon className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>{t('pouchEcoFooter.specFinder', 'Spec Finder App')}</span>
                    </Link>
                  </li>
                  <li><Link to="/solutions/catalog" className="hover:text-primary-400">{t('pouchEcoFooter.3dPackagingCatalog', '3D Packaging Catalog')}</Link></li>
                </ul>
              </div>

              {/* Data Sheets */}
              <div>
                <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.materialDataSheets', 'Material Data Sheets')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li>
                    <Link to="/materials/data-sheet" className="bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] font-semibold px-2 py-1 rounded hover:bg-neutral-700 hover:text-white transition inline-flex items-center gap-1.5 mt-1">
                      <FileText className="h-3.5 w-3.5 text-primary-400" />
                      <span>{t('pouchEcoFooter.downloadDataSheet', 'Download Data Sheet')}</span>
                    </Link>
                  </li>
                  <li className="mt-2"><Link to="/spec/pcr-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.pcrSeriesSpecs', 'PCR Series Specs')}</Link></li>
                  <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.biopeSeriesSpecs', 'Bio-PE Series Specs')}</Link></li>
                  <li><Link to="/spec/mono-pe-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.monoMaterialSpecs', 'Mono-Material Specs')}</Link></li>
                </ul>
              </div>

              {/* USA Market */}
              <div>
                <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.usaMarket', 'USA Market Specific')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/usa/compostable-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.compostablePackagingUsa', 'USA Compostable Guide')}</Link></li>
                  <li><Link to="/usa/coffee-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.coffeePackagingUsa', 'USA Coffee Packaging')}</Link></li>
                  <li><Link to="/usa/snacks-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.snacksPackagingUsa', 'USA Snacks Packaging')}</Link></li>
                </ul>
              </div>

              {/* 3D Model Links */}
              <div className="lg:col-span-2">
                <h4 className="font-semibold text-xs mb-3 text-primary-400 uppercase tracking-wider">{t('pouchEcoFooter.3dModels', 'Explore 3D Models')}</h4>
                {footerShapes.length === 0 ? (
                  <p className="text-xs text-neutral-500 py-2">Loading packaging shapes...</p>
                ) : (
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                    {footerShapes.map((shape) => (
                      <Link
                        key={shape.id}
                        to={`/${shape.slug || shape.id}`}
                        className="hover:text-primary-400 transition-colors whitespace-nowrap overflow-hidden text-ellipsis block"
                        title={shape.name}
                      >
                        {shape.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </details>
        </div>

        {/* Row 3: SEO Topic Directory (Trending Topics) */}
        <div className="border-t border-neutral-800 py-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <Leaf className="h-4.5 w-4.5 text-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider">{t('pouchEcoFooter.trendingTopics', 'Trending Topics')}</span>
            </div>
            <Link to="/learn" className="text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
              {t('pouchEcoFooter.viewAllTopics', 'View All Packaging Topics')} &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-xs text-neutral-400 mt-2 pt-4 border-t border-neutral-800/40">
            <ul className="space-y-1">
              <li><Link to="/topics/matcha-sachet" className="hover:text-primary-400">{t('seo_topics.matcha_sachet.title', 'Matcha Sachet')}</Link></li>
              <li><Link to="/topics/cacao-stand-up" className="hover:text-primary-400">{t('seo_topics.cacao_stand_up.title', 'Cacao Stand Up')}</Link></li>
              <li><Link to="/topics/premium-tea" className="hover:text-primary-400">{t('seo_topics.premium_tea.title', 'Premium Tea')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/snack-food-stand-up-pouch" className="hover:text-primary-400">{t('seo_topics.snack_food_stand_up_pouch.title', 'Snack Food Stand-Up Pouch')}</Link></li>
              <li><Link to="/topics/pet-food-flat-bottom-bag" className="hover:text-primary-400">{t('seo_topics.pet_food_flat_bottom_bag.title', 'Pet Food Flat Bottom Bag')}</Link></li>
              <li><Link to="/topics/pet-food-quad-seal" className="hover:text-primary-400">{t('seo_topics.pet_food_quad_seal.title', 'Pet Food Quad Seal')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/solutions/food-coding-compliance" className="hover:text-primary-400">{t('pouchEcoFooter.foodCoding', 'Food Coding Compliance')}</Link></li>
              <li><Link to="/solutions/packaging-line-automation" className="hover:text-primary-400">{t('pouchEcoFooter.lineAutomation', 'Packaging Line Automation')}</Link></li>
              <li><Link to="/solutions/eco-packaging-coding" className="hover:text-primary-400">{t('pouchEcoFooter.ecoCoding', 'Eco Packaging Coding')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/composting/composting-benefits" className="hover:text-primary-400">{t('pouchEcoFooter.compostingBenefits', 'Composting Benefits')}</Link></li>
              <li><Link to="/composting/home-vs-industrial-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.homeVsIndustrial', 'Home vs Industrial')}</Link></li>
              <li><Link to="/composting/biodegradable-vs-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.biodegradableVsCompostable', 'Biodegradable vs Compostable')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsRecyclable', 'What Is 100% Recyclable?')}</Link></li>
              <li><Link to="/topics/eu-ppwr-compliance" className="hover:text-primary-400">{t('pouchEcoFooter.euPpwr', 'EU PPWR Compliance')}</Link></li>
              <li><Link to="/pcr/7-checklist" className="hover:text-primary-400">{t('pouchEcoFooter.pcrChecklist', 'PCR 7-Point Checklist')}</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/ai-packaging-resolution" className="hover:text-primary-400 text-white font-medium">AI Packaging Resolution <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase text-primary-400">New</span></Link></li>
              <li><Link to="/topics/ai-packaging-bleed-dimensions" className="hover:text-primary-400 text-white font-medium">Bleed Dimensions Guide <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase text-primary-400">New</span></Link></li>
              <li><Link to="/topics/ai-packaging-safe-margins" className="hover:text-primary-400 text-white font-medium">Safe Margins Standard <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase text-primary-400">New</span></Link></li>
              <li><Link to="/topics/ai-packaging-layered-assets" className="hover:text-primary-400">Layered Assets Prep</Link></li>
              <li><Link to="/topics/ai-packaging-barcodes-bottom-fold" className="hover:text-primary-400">AI Barcodes Bottom Fold</Link></li>
            </ul>
            <ul className="space-y-1">
              <li><Link to="/topics/beverage-soft-stand-up-pouch" className="hover:text-primary-400 text-white font-medium">Beverage Soft Pouch <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase text-primary-400">New</span></Link></li>
              <li><Link to="/topics/bread-flat-bottom-bag" className="hover:text-primary-400">Bread Flat Bottom</Link></li>
              <li><Link to="/topics/beef-jerky-pillow-pouch" className="hover:text-primary-400 text-white font-medium">Jerky Pillow Pouch <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase text-primary-400">New</span></Link></li>
              <li><Link to="/topics/apparel-zipper" className="hover:text-primary-400">Apparel Zipper Bags</Link></li>
              <li><Link to="/topics/beef-jerky-barrier" className="hover:text-primary-400">Beef Jerky Barriers</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
