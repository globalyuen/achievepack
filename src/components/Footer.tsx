import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Mail, Phone, Calendar, FileText, ShieldCheck, Zap } from 'lucide-react'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './AppIcons'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="h-5 w-5 text-primary-500" />
              <span className="text-base font-bold">{t('pouchEcoFooter.brand', 'Achieve Pack')}</span>
            </div>
            <p className="text-neutral-400 text-xs mb-3">
              {t('pouchEcoFooter.tagline', 'Sustainable packaging solutions for forward-thinking brands.')}
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
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Link to="/company/bpi-certified" className="hover:opacity-90 transition-opacity flex items-center h-12">
                <img 
                  src="/imgs/bpi.svg" 
                  alt="BPI Certified Compostable" 
                  className="h-10 w-auto object-contain" 
                  loading="lazy" 
                  decoding="async" 
                />
              </Link>
              <Link to="/company/b-corp" className="hover:opacity-90 transition-opacity flex items-center h-12">
                <img 
                  src="/bcorp.svg" 
                  alt="Certified B Corporation" 
                  className="h-10 w-auto object-contain" 
                  loading="lazy" 
                  decoding="async" 
                />
              </Link>
              <Link 
                to="/materials/data-sheet" 
                className="bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-semibold px-4 rounded hover:bg-neutral-700 hover:text-white hover:border-neutral-500 transition-all flex items-center gap-2 h-12"
              >
                <FileText className="h-4 w-4 text-primary-400" />
                <span className="tracking-wide">{t('pouchEcoFooter.dataSheet', 'Data Sheet')}</span>
              </Link>
              <a 
                href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-950/30 border border-green-800 text-green-400 text-xs font-semibold px-4 rounded hover:bg-green-900/40 hover:text-green-300 hover:border-green-600 transition-all flex items-center gap-2 h-12"
              >
                <ShieldCheck className="h-4 w-4 text-green-400" />
                <span className="tracking-wide">{t('pouchEcoFooter.bpiCert', 'BPI Cert')}</span>
              </a>
            </div>
          </div>

          {/* Company - Most Important First */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.company', 'Company')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/company/about" className="hover:text-primary-400">{t('pouchEcoFooter.aboutUs', 'About Us')}</Link></li>
              <li><Link to="/company/b-corp" className="hover:text-primary-400">{t('pouchEcoFooter.ourImpact', 'Our Impact (B Corp)')}</Link></li>
              <li><Link to="/company/certificates" className="hover:text-primary-400">{t('pouchEcoFooter.certificates', 'Certificates')}</Link></li>
              <li><Link to="/company/factory-tour" className="hover:text-primary-400">{t('pouchEcoFooter.factoryTour', 'Factory Tour')}</Link></li>
              <li><Link to="/team/ryan-wong" className="hover:text-primary-400">{t('pouchEcoFooter.ryanWong', 'Meet Ryan Wong')}</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.products', 'Products')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.standUpPouches', 'Stand Up Pouches')}</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">{t('pouchEcoFooter.flatBottomBags', 'Flat Bottom Bags')}</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.spoutPouches', 'Spout Pouches')}</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.flatPouches', 'Flat Pouches')}</Link></li>
              <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">{t('pouchEcoFooter.sideGussetBags', 'Side Gusset Bags')}</Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">{t('pouchEcoFooter.customBoxes', 'Custom Boxes')}</Link></li>
              <li><Link to="/quotes/rollstock" className="hover:text-primary-400">{t('pouchEcoFooter.rollstock', 'Rollstock')}</Link></li>
              <li><Link to="/store/product/eco-stock-tea-bags-pla" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.plaTeaBags', 'PLA Tea Bags')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>
          
          {/* Sustainability */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-primary-400">{t('pouchEcoFooter.sustainability', 'Sustainability')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/materials/home-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.homeCompostable', 'Home Compostable')}</Link></li>
              <li><Link to="/materials/industrial-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.industrialCompostable', 'Industrial Compostable')}</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoPE', 'Recyclable Mono PE')}</Link></li>
              <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoPP', 'Recyclable Mono PP')}</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">{t('pouchEcoFooter.bioPe', 'Bio-PE (Plant-Based)')}</Link></li>
              <li><Link to="/materials/pcr" className="hover:text-primary-400">{t('pouchEcoFooter.pcr', 'PCR (Recycled Content)')}</Link></li>
              <li><Link to="/materials/kraft-low-barrier" className="hover:text-primary-400">{t('pouchEcoFooter.kraftLowBarrier', 'Kraft Low Barrier')}</Link></li>
              <li><Link to="/materials/kraft-medium-barrier" className="hover:text-primary-400">{t('pouchEcoFooter.kraftMediumBarrier', 'Kraft Medium Barrier')}</Link></li>
              <li><Link to="/materials/kraft-high-barrier" className="hover:text-primary-400">{t('pouchEcoFooter.kraftHighBarrier', 'Kraft High Barrier')}</Link></li>
              <li><Link to="/materials/plastic-free-kraft" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.plasticFreeKraft', 'Plastic-Free Kraft')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/materials/combustion-safety-test" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.combustionSafetyTest', 'Combustion Safety Test')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/materials/conventional-printed-sachets" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.conventionalPrintedSachets', 'Conventional Printed Sachets')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/topics/eu-ppwr-compliance" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.euPpwrCompliance', 'EU PPWR Compliance')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>
          
          {/* Structure Spec */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-primary-400">{t('pouchEcoFooter.technicalSpecs', 'Technical Specs')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/tech-specs" className="hover:text-primary-400 font-bold text-white">{t('pouchEcoFooter.technicalSpecHub', 'Technical Spec Hub')}</Link></li>
              <li><Link to="/materials/data-sheet" className="hover:text-primary-400">{t('pouchEcoFooter.materialDataSheets', 'Material Data Sheets')}</Link></li>
              <li><Link to="/spec/pcr-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.pcrSeriesSpecs', 'PCR Series Specs')}</Link></li>
              <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.biopeSeriesSpecs', 'Bio-PE Series Specs')}</Link></li>
              <li><Link to="/spec/mono-pe-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.monoMaterialSpecs', 'Mono-Material Specs')}</Link></li>
              <li><Link to="/spec/bio-cello-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.compostableSpecs', 'Compostable Specs')}</Link></li>
            </ul>
          </div>

          {/* Packaging Apps */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-primary-400 flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-primary-400 fill-current animate-pulse" /> {t('pouchEcoFooter.packagingApps', 'Packaging Apps')}
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/knowledge/pouch-sizing" className="hover:text-primary-400 font-semibold text-white flex items-center gap-2 group">
                  <SizingFinderIcon className="h-4 w-4 text-primary-400 group-hover:scale-110 transition-transform" />
                  <span>{t('pouchEcoFooter.sizingFinderApp', 'Sizing Finder App')}</span>
                </Link>
              </li>
              <li>
                <Link to="/tech-specs" className="hover:text-primary-400 font-semibold text-white flex items-center gap-2 group">
                  <MaterialSpecFinderIcon className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>{t('pouchEcoFooter.materialSpecFinder', 'Material Spec Finder')}</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.industries', 'Industries')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">{t('pouchEcoFooter.coffeeTea', 'Coffee & Tea')}</Link></li>
              <li><Link to="/industry/snacks-food" className="hover:text-primary-400">{t('pouchEcoFooter.snacksFood', 'Snacks & Food')}</Link></li>
              <li><Link to="/industry/pet-food" className="hover:text-primary-400">{t('pouchEcoFooter.petFood', 'Pet Food')}</Link></li>
              <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">{t('pouchEcoFooter.supplements', 'Supplements')}</Link></li>
              <li><Link to="/industry/baby-food" className="hover:text-primary-400">{t('pouchEcoFooter.babyFood', 'Baby Food')}</Link></li>
              <li><Link to="/industry/frozen-food" className="hover:text-primary-400">{t('pouchEcoFooter.frozenFood', 'Frozen Food')}</Link></li>
              <li><Link to="/solutions/citrus-oil-packaging" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.citrusOilPackaging', 'Citrus Oil Packaging')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/fresh-produce" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.freshProducePackaging', 'Fresh Produce Packaging')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/wholesale-unprinted-pouches" className="hover:text-primary-400 font-medium text-primary-400">Wholesale Unprinted Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/low-moq-fast-turnaround" className="hover:text-primary-400 font-medium text-primary-400">Low MOQ Packaging <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/australia-shipping-coo" className="hover:text-primary-400 font-medium text-primary-400">Import & Shipping Guide <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/high-barrier-food-pouches" className="hover:text-primary-400 font-medium text-primary-400">High-Barrier Food Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/high-barrier-retort" className="hover:text-primary-400 font-medium text-primary-400">High-Barrier Retort Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/pet-food-quad-seal" className="hover:text-primary-400 font-medium text-primary-400">Pet Food Quad Seal Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/sustainable-healthcare-packaging" className="hover:text-primary-400 font-medium text-primary-400">Sustainable Healthcare <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/meat-jerky-packaging" className="hover:text-primary-400 font-medium text-primary-400">Meat Jerky Packaging <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* Featured Products */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.featured', 'Featured')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/products/compostable-coffee-bags" className="hover:text-primary-400">{t('pouchEcoFooter.compostableCoffeeBags', 'Compostable Coffee Bags')}</Link></li>
              <li><Link to="/products/coffee-bags-degassing-valve" className="hover:text-primary-400">{t('pouchEcoFooter.coffeeBagsValve', 'Coffee Bags with Valve')}</Link></li>
              <li><Link to="/products/compostable-stand-up-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.compostablePouches', 'Compostable Pouches')}</Link></li>
              <li><Link to="/products/compostable-side-gusset-bags" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.compostableSideGusset', 'Compostable Side Gusset')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/products/recyclable-mono-material-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoMaterial', 'Recyclable Mono-Material')}</Link></li>
              <li><Link to="/products/low-moq-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.lowMoqPackaging', 'Low MOQ Packaging')}</Link></li>
              <li><Link to="/products/labels-and-stickers" className="hover:text-primary-400">{t('pouchEcoFooter.labelsStickers', 'Labels & Stickers')}</Link></li>
            </ul>
          </div>

          {/* Knowledge */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.knowledge', 'Knowledge')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/knowledge/pouch-sizing" className="hover:text-primary-400">{t('pouchEcoFooter.sizingGuide', 'Pouch Sizing Guide')}</Link></li>
              <li><Link to="/knowledge/size-guide" className="hover:text-primary-400">{t('pouchEcoFooter.sizeReference', 'Size Reference')}</Link></li>
              <li><Link to="/knowledge/all-options" className="hover:text-primary-400">{t('pouchEcoFooter.allOptions', 'All Options')}</Link></li>
              <li><Link to="/features/surface-finish" className="hover:text-primary-400">{t('pouchEcoFooter.surfaceOption', 'Surface Option')}</Link></li>
              <li><Link to="/features/reclosure-options" className="hover:text-primary-400">{t('pouchEcoFooter.reclosureOption', 'Reclosure Option')}</Link></li>
              <li><Link to="/knowledge/printing-types" className="hover:text-primary-400">{t('pouchEcoFooter.printingTypes', 'Printing Types')}</Link></li>
              <li><Link to="/knowledge/flat-bottom-vs-gusset" className="hover:text-primary-400">{t('pouchEcoFooter.flatBottomVsGusset', 'Flat Bottom vs. Side Gusset')}</Link></li>
              <li><Link to="/knowledge/eco-packaging-reality" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('pouchEcoFooter.ecoPackagingReality', 'Eco-Packaging Reality')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/knowledge/writable-stampable-pouches" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('pouchEcoFooter.writableStampable', 'Writable & Stampable Pouches')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/knowledge/digital-printing-pantone-color-matching" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('pouchEcoFooter.colorMatchingGuide', 'Color Matching Guide')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/knowledge/pha-vs-pla" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('pouchEcoFooter.phaVsPla', 'PHA vs PLA Comparison')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/support/sample-quote" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('pouchEcoFooter.customPrintedSample', 'Custom Printed Sample')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.support', 'Support')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/support/faqs" className="hover:text-primary-400">{t('pouchEcoFooter.faqs', 'FAQs')}</Link></li>
              <li><Link to="/support/lead-time" className="hover:text-primary-400">{t('pouchEcoFooter.leadTime', 'Lead Time')}</Link></li>
              <li><Link to="/support/color-accuracy-digital-printing" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('pouchEcoFooter.colorAccuracyGuide', 'Color Accuracy Guide')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/support/unprinted-samples" className="hover:text-primary-400">{t('pouchEcoFooter.unprintedSamples', 'Unprinted Samples')}</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400">{t('pouchEcoFooter.allArticles', 'All Articles')}</Link></li>
              <li><Link to="/store" className="hover:text-primary-400">{t('pouchEcoFooter.onlineStore', 'Online Store')}</Link></li>
              <li><Link to="/reviews" className="hover:text-primary-400">{t('pouchEcoFooter.customerReviews', 'Customer Reviews')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
          {/* Composting */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.composting', 'Composting')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/composting/composting-benefits" className="hover:text-primary-400">{t('pouchEcoFooter.compostingBenefits', 'Composting Benefits')}</Link></li>
              <li><Link to="/composting/composting-services" className="hover:text-primary-400">{t('pouchEcoFooter.serviceFinder', 'Service Finder')}</Link></li>
              <li><Link to="/composting/biodegradable-vs-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.biodegradableVsCompostable', 'Biodegradable vs Compostable')}</Link></li>
              <li><Link to="/composting/commercial-composting" className="hover:text-primary-400">{t('pouchEcoFooter.commercialComposting', 'Commercial Composting')}</Link></li>
              <li><Link to="/composting/home-vs-industrial-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.homeVsIndustrial', 'Home vs Industrial')}</Link></li>
              <li><Link to="/composting/natural-cellulose-fiber" className="hover:text-primary-400">{t('pouchEcoFooter.naturalCelluloseFiber', 'Natural Cellulose Fiber')}</Link></li>
              <li><Link to="/topics/compostable-humidity-control" className="hover:text-primary-400">{t('pouchEcoFooter.humidityControl', 'Compost Bag Humidity Control')}</Link></li>
              <li><Link to="/topics/compostable-zipper-durability" className="hover:text-primary-400">{t('pouchEcoFooter.zipperDurability', 'Compostable Zipper Durability')}</Link></li>
              <li><Link to="/topics/compostable-spouted-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.spoutedPouches', 'Compostable Spouted Pouches')}</Link></li>
              <li><Link to="/industry/pla-compostable-packaging" className="hover:text-primary-400 font-medium text-primary-400">PLA Compostable Guide <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/compostable-laminated-film" className="hover:text-primary-400 font-medium text-primary-400">Compostable Laminated Film <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/compostable-protein-bags" className="hover:text-primary-400 font-medium text-primary-400">Compostable Protein Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/eco-coffee-bags-valve" className="hover:text-primary-400 font-medium text-primary-400">Compostable Coffee Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* BioPE */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.biope', 'BioPE')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsBioPe', 'What is Bio-PE?')}</Link></li>
              <li><Link to="/biope/bio-pe-vs-compostable" className="hover:text-primary-400">{t('pouchEcoFooter.bioPeVsCompostable', 'Bio-PE vs Compostable')}</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">{t('pouchEcoFooter.bioPeMaterials', 'Bio-PE Materials')}</Link></li>
              <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-400">{t('pouchEcoFooter.bioPeStructures', 'Bio-PE Structures')}</Link></li>
              <li><Link to="/industry/eco-friendly-tea-coffee" className="hover:text-primary-400 font-medium text-primary-400">Eco Coffee & Tea Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* PCR */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.pcrSection', 'PCR')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/pcr/pcr-plastic-guide" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsPcr', 'What Is PCR Plastic?')}</Link></li>
              <li><Link to="/pcr/7-checklist" className="hover:text-primary-400">{t('pouchEcoFooter.pcrChecklist', 'PCR 7-Point Checklist')}</Link></li>
              <li><Link to="/pcr/realistic-pcr-content" className="hover:text-primary-400">{t('pouchEcoFooter.realisticPcr', 'Realistic PCR Content')}</Link></li>
              <li><Link to="/pcr/recyclable-vs-pcr-biobased" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableVsPcrBio', 'Recyclable vs PCR vs Bio-Based')}</Link></li>
              <li><Link to="/materials/pcr" className="hover:text-primary-400">{t('pouchEcoFooter.pcrMaterials', 'PCR Materials')}</Link></li>
              <li><Link to="/industry/pcr-packaging-pouches" className="hover:text-primary-400 font-medium text-primary-400">PCR Packaging Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* Staging Recyclable */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.recyclableSection', 'Recyclable')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-400">{t('pouchEcoFooter.whatIsRecyclable', 'What Is 100% Recyclable?')}</Link></li>
              <li><Link to="/recyclable/roadmap-sme" className="hover:text-primary-400">{t('pouchEcoFooter.roadmapSme', '3-Step Roadmap for SMEs')}</Link></li>
              <li><Link to="/recyclable/mono-material-foundation" className="hover:text-primary-400">{t('pouchEcoFooter.monoMaterialFoundation', 'Mono-Material Foundation')}</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoPE', 'Recyclable Mono-PE')}</Link></li>
              <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-400">{t('pouchEcoFooter.recyclableMonoPP', 'Recyclable Mono-PP')}</Link></li>
              <li><Link to="/topics/real-world-sustainability" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.realWorldSustainability', 'Real-World Sustainability')}</Link></li>
              <li><Link to="/topics/sustainable-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.sustainablePillar', 'Sustainable Pillar')}</Link></li>
              <li><Link to="/topics/recyclable-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.recyclableDesign', 'Recyclable Design')}</Link></li>
              <li><Link to="/topics/compostable-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.compostableFacts', 'Compostable Facts')}</Link></li>
              <li><Link to="/topics/compostable-certification" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.certificationGuide', 'Certification Guide')}</Link></li>
              <li><Link to="/topics/mono-material-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.monoMaterialGuide', 'Mono-Material Guide')}</Link></li>
              <li><Link to="/topics/pcr-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.pcrGuide', 'PCR Guide')}</Link></li>
              <li><Link to="/topics/food-packaging-supplier" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.supplierAudit', 'Supplier Audit')}</Link></li>
              <li><Link to="/topics/custom-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.customSolutions', 'Custom Solutions')}</Link></li>
              <li><Link to="/topics/reduce-packaging-waste" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.reducingWaste', 'Reducing Waste')}</Link></li>
              <li><Link to="/topics/custom-vs-standard-packaging" className="text-gray-400 hover:text-white transition-colors">{t('pouchEcoFooter.customVsStandard', 'Custom vs. Standard')}</Link></li>
              <li><Link to="/topics/matcha-sachet" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.matcha_sachet.title', 'Matcha Sachet')}</Link></li>
              <li><Link to="/topics/cacao-stand-up" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.cacao_stand_up.title', 'Cacao Stand Up')}</Link></li>
              <li><Link to="/topics/spices-moisture-proof" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.spices_moisture_proof.title', 'Spices Moisture Proof')}</Link></li>
              <li><Link to="/topics/premium-tea" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.premium_tea.title', 'Premium Tea')}</Link></li>
              <li><Link to="/topics/cocktail-spout" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.cocktail_spout.title', 'Cocktail Spout')}</Link></li>
              <li><Link to="/topics/candy-uv" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.candy_uv.title', 'Candy UV')}</Link></li>
              <li><Link to="/topics/crisps-shaped" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.crisps_shaped.title', 'Crisps Shaped')}</Link></li>
              <li><Link to="/topics/dried-fruits-tear-notch" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.dried_fruits_tear_notch.title', 'Dried Fruits Tear Notch')}</Link></li>
              <li><Link to="/topics/cheese-pocket-zipper" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.cheese_pocket_zipper.title', 'Cheese Pocket Zipper')}</Link></li>
              <li><Link to="/topics/euro-hole-hang" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.euro_hole_hang.title', 'Euro Hole Hang')}</Link></li>
              <li><Link to="/topics/pet-food-quad-seal" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.pet_food_quad_seal.title', 'Pet Food Quad Seal')}</Link></li>
              <li><Link to="/topics/pharma-velcro" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.pharma_velcro.title', 'Pharma Velcro')}</Link></li>
              <li><Link to="/topics/detergent-spout" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.detergent_spout.title', 'Detergent Spout')}</Link></li>
              <li><Link to="/topics/electronics-anti-static" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.electronics_anti_static.title', 'Electronics Anti Static')}</Link></li>
              <li><Link to="/topics/apparel-zipper" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.apparel_zipper.title', 'Apparel Zipper')}</Link></li>
              <li><Link to="/topics/hologram-hot-stamping" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.hologram_hot_stamping.title', 'Hologram Hot Stamping')}</Link></li>
              <li><Link to="/topics/granola-soft-touch" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.granola_soft_touch.title', 'Granola Soft Touch')}</Link></li>
              <li><Link to="/topics/collagen-high-barrier" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.collagen_high_barrier.title', 'Collagen High Barrier')}</Link></li>
              <li><Link to="/topics/pla-rice" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.pla_rice.title', 'PLA Rice')}</Link></li>
              <li><Link to="/topics/rice-paper-artisanal" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.rice_paper_artisanal.title', 'Rice Paper Artisanal')}</Link></li>
              <li><Link to="/topics/ddp-packaging" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.ddp_packaging.title', 'DDP Packaging')}</Link></li>
              <li><Link to="/topics/fast-air-freight" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.fast_air_freight.title', 'Fast Air Freight')}</Link></li>
              <li><Link to="/topics/fda-brc-certified" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.fda_brc_certified.title', 'FDA BRC Certified')}</Link></li>
              <li><Link to="/topics/iso-sustainable" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.iso_sustainable.title', 'ISO Sustainable')}</Link></li>
              <li><Link to="/topics/urgent-orders" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.urgent_orders.title', 'Urgent Orders')}</Link></li>
              <li><Link to="/topics/frozen-vacuum" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.frozen_vacuum.title', 'Frozen Vacuum')}</Link></li>
              <li><Link to="/topics/evoh-retort" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.evoh_retort.title', 'EVOH Retort')}</Link></li>
              <li><Link to="/topics/beef-jerky-barrier" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.beef_jerky_barrier.title', 'Beef Jerky Barrier')}</Link></li>
              <li><Link to="/topics/valve-coffee-bags" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.valve_coffee_bags.title', 'Valve Coffee Bags')}</Link></li>
              <li><Link to="/topics/home-vs-industrial-compostable" className="text-gray-400 hover:text-white transition-colors">{t('seo_topics.home_vs_industrial_compostable.title', 'Home vs Industrial Compostable')}</Link></li>
              <li><Link to="/blog/stamp-foil-recyclability" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.stampFoilRecyclability', 'Stamp Foil Recyclability')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/recyclable-vacuum-bags" className="hover:text-primary-400 font-medium text-primary-400">Recyclable Vacuum Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/sustainable-kraft-solutions" className="hover:text-primary-400 font-medium text-primary-400">Sustainable Kraft Solutions <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/brown-white-kraft" className="hover:text-primary-400 font-medium text-primary-400">Brown vs White Kraft <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/kraft-window-pouch" className="hover:text-primary-400 font-medium text-primary-400">Kraft Window Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/durable-reusable-pouches" className="hover:text-primary-400 font-medium text-primary-400">Eco-Friendly Ziplock Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* Function */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.function', 'Function')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-400">{t('pouchEcoFooter.microwaveSteamBags', 'Microwave Steam Bags')}</Link></li>
              <li><Link to="/function/smart-degassing-sticker" className="hover:text-primary-400">{t('pouchEcoFooter.smartDegassingSticker', 'Smart Degassing Sticker')}</Link></li>
              <li><Link to="/function/carbon-neutral-bags" className="hover:text-primary-400">{t('pouchEcoFooter.carbonNeutralBags', 'Carbon-Neutral Bags')}</Link></li>
              <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">{t('pouchEcoFooter.childResistantBags', 'Child-Resistant Bags')}</Link></li>
              <li><Link to="/function/spout-pouches-juice" className="hover:text-primary-400">{t('pouchEcoFooter.spoutPouchesJuice', 'Spout Pouches Juice')}</Link></li>
              <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-400">{t('pouchEcoFooter.retortBags', 'Retort Bags')}</Link></li>
              <li><Link to="/function/rice-paper-bags" className="hover:text-primary-400">{t('pouchEcoFooter.ricePaperBags', 'Rice Paper Bags')}</Link></li>
              <li><Link to="/function/heat-resistant-compostable-pouches" className="hover:text-primary-400">{t('pouchEcoFooter.heatResistantCompostable', 'Heat-Resistant Pouches')}</Link></li>
              <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-400">{t('pouchEcoFooter.pvaWaterSoluble', 'PVA Water-Soluble Bags')}</Link></li>
              <li><Link to="/function/large-format-kraft-heavy-bags" className="hover:text-primary-400 font-medium text-primary-400">{t('pouchEcoFooter.kraftHeavyDuty', 'Kraft Heavy-Duty Sacks')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/function/pre-zippered-rollstock" className="hover:text-primary-400 font-medium text-primary-400 font-semibold">{t('pouchEcoFooter.preZipperedRollstock', 'Pre-Zippered Rollstock')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/premium-matte-pouches" className="hover:text-primary-400 font-medium text-primary-400">Premium Matte Finish <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/premium-finishes" className="hover:text-primary-400 font-medium text-primary-400">Premium Pouch Finishes <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/premium-soft-touch" className="hover:text-primary-400 font-medium text-primary-400">Premium Soft Touch <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/custom-die-cut-pouches" className="hover:text-primary-400 font-medium text-primary-400">Custom Die-Cut Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/resealable-tin-tie-bags" className="hover:text-primary-400 font-medium text-primary-400">Resealable Tin Tie Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/clear-transparent-pouches" className="hover:text-primary-400 font-medium text-primary-400">Clear Transparent Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/euro-hole-hang-bags" className="hover:text-primary-400 font-medium text-primary-400">Euro Hole Hang Bags <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/custom-spout-pouches" className="hover:text-primary-400 font-medium text-primary-400">Custom Spout Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/child-resistant-cbd" className="hover:text-primary-400 font-medium text-primary-400">Child Resistant Pouches <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/matcha-supplement-sachets" className="hover:text-primary-400 font-medium text-primary-400">Matcha Supplement Sachets <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/sustainable-tea-sachets" className="hover:text-primary-400 font-medium text-primary-400">Sustainable Tea Sachets <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
            </ul>
          </div>

          {/* Lab Bag */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.labBag', 'Lab Bag')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/lab/lateral-filter-bags" className="hover:text-primary-400">{t('pouchEcoFooter.lateralFilterBags', 'Lateral Filter Bags')}</Link></li>
              <li><Link to="/lab/wire-closure-bags" className="hover:text-primary-400">{t('pouchEcoFooter.wireClosureBags', 'Wire Closure Bags')}</Link></li>
              <li><Link to="/lab/lab-blender-bags" className="hover:text-primary-400">{t('pouchEcoFooter.labBlenderBags', 'Lab Blender Bags')}</Link></li>
              <li><Link to="/products/lab-bags" className="hover:text-primary-400">{t('pouchEcoFooter.allLabBags', 'All Lab Bags')}</Link></li>
            </ul>
          </div>

          {/* Free Service */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.freeService', 'Free Service')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/free-service/packaging-design-consultation" className="hover:text-primary-400">{t('pouchEcoFooter.designConsultation', 'Design Consultation')}</Link></li>
              <li><Link to="/free-service/website-upgrade" className="hover:text-primary-400">{t('pouchEcoFooter.websiteUpgrade', 'Website Upgrade')}</Link></li>
              <li><Link to="/free-service/packaging-mockup" className="hover:text-primary-400">{t('pouchEcoFooter.mockup', 'Packaging Mockup')}</Link></li>
              <li><Link to="/free-service/customer-center" className="hover:text-primary-400">{t('pouchEcoFooter.customerCenter', 'Customer Center')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.contactUs', 'Contact Us')}</h4>
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
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">{t('pouchEcoFooter.bookMeeting', 'Book Meeting')}</a>
              </li>
            </ul>
          </div>

          {/* USA Market */}
          <div>
            <h4 className="font-semibold text-sm mb-2">{t('pouchEcoFooter.usaMarket', 'USA Market')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/usa/compostable-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.compostablePackagingUsa', 'Compostable Packaging USA')}</Link></li>
              <li><Link to="/usa/coffee-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.coffeePackagingUsa', 'Coffee Packaging USA')}</Link></li>
              <li><Link to="/usa/snacks-packaging" className="hover:text-primary-400">{t('pouchEcoFooter.snacksPackagingUsa', 'Snacks Packaging USA')}</Link></li>
              <li><Link to="/usa/labeling-guide" className="hover:text-primary-400">{t('pouchEcoFooter.labelingGuideUsa', 'Labeling Guide USA')}</Link></li>
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
        
        <div className="border-t border-neutral-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-neutral-500 text-xs">
            {t('pouchEcoFooter.copyright', '© 2010-2026 Achieve Pack. All rights reserved.')}
          </p>
          <div className="flex gap-4 text-xs text-neutral-500">
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
