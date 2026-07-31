import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Mail, Phone, Calendar, FileText, ShieldCheck, Zap, Box, Sparkles } from 'lucide-react'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './AppIcons'
import { useEffect, useState, useMemo } from 'react'
import { isAchievePack } from '../utils/domain'
import galleryData from '../data/image-gallery.json'
import imageSeoMapRaw from '../data/image-seo-map.json'
import { FORMULA_PAGES_DATA } from '../data/formulaPagesData'

const imageSeoMap = imageSeoMapRaw as unknown as Record<string, string | Array<{title: string, url: string}>>;
const localFooterT: Record<string, Record<string, string>> = {
  en: {
    byProduct: 'By Product',
    byMaterial: 'By Material',
    byShape: 'By Shape',
    byFunction: 'By Function',
    byIndustry: 'By Industry',
    composting: 'Composting',
    standUpPouches: 'Stand Up Pouches',
    flatBottomBags: 'Flat Bottom Bags',
    spoutPouches: 'Spout Pouches',
    rollstockFilm: 'Rollstock Film',
    customBoxes: 'High-Volume Custom Boxes',
    compostableLabels: 'Custom Compostable Labels',
    labelMaterialsGuide: 'Label Materials Guide',
    compostableBarrierFilm: 'Compostable Barrier Film',
    pcrRecycledPlastic: 'PCR Recycled Series',
    sugarcaneBioPe: 'Sugarcane & Bio-PE',
    monoMaterialRecyclable: 'Mono-Material Recyclable PE',
    materialDataSheets: 'Material Data Sheets',
    compostingBenefits: 'Composting Benefits',
    homeVsIndustrial: 'Home vs Industrial Compost',
    biodegradableVsCompostable: 'Biodegradable vs Compostable',
    bpiCertified: 'BPI Certified Compostable',
    compostServiceFinder: 'Local Compost Service Finder',
    popularPages: 'Popular Pages',
    sizeGuide: 'Pouch Size Guide',
    sizingFinderApp: 'Sizing Finder App',
    lowMoq: 'Low-MOQ Packaging',
    flatBottomVsGusset: 'Flat Bottom vs Gusset',
    recyclableMonoPe: 'Mono-PE Recyclable Bags',
    kSealStandUp: 'K-Seal Stand Up Pouches',
    childResistant: 'Child-Resistant Bags',
    labelingGuide: 'FDA Labeling Guide',
    finSealVsLapSeal: 'Fin Seal vs Lap Seal',
    flatPouchesLink: '3 Side Seal / Flat Pouches',
    usaCoffeePackaging: 'USA Coffee Packaging',
    microwaveSteamBags: 'Microwave Steam Bags',
    bioPeGreenPlastic: 'Bio-PE Green Plastic'
  },
  'zh-tw': {
    byProduct: '按產品分類',
    byMaterial: '按材質分類',
    byShape: '按形狀分類',
    byFunction: '按功能分類',
    byIndustry: '按行業分類',
    composting: '堆肥知識',
    standUpPouches: '自立袋 / 立體袋',
    flatBottomBags: '平底袋 / 方底袋',
    spoutPouches: '吸嘴袋',
    rollstockFilm: '包裝卷膜',
    customBoxes: '大批量客製化包裝盒',
    compostableLabels: '客製化可堆肥標籤',
    labelMaterialsGuide: '標籤材料指南',
    compostableBarrierFilm: '可堆肥高阻隔膜',
    pcrRecycledPlastic: 'PCR 循環再生系列',
    sugarcaneBioPe: '甘蔗環保 Bio-PE',
    monoMaterialRecyclable: '單一材質可回收 PE',
    materialDataSheets: '材質規格書',
    compostingBenefits: '堆肥的好處',
    homeVsIndustrial: '家用與工業堆肥對比',
    biodegradableVsCompostable: '可生物降解與可堆肥',
    bpiCertified: 'BPI 認證可堆肥包裝',
    compostServiceFinder: '本地堆肥服務查詢',
    popularPages: '熱門頁面',
    sizeGuide: '包裝袋尺寸指南',
    sizingFinderApp: '尺寸計算器 / 選型工具',
    lowMoq: '低起訂量客製包裝',
    flatBottomVsGusset: '平底袋與側風琴袋對比',
    recyclableMonoPe: '單一PE可回收袋',
    kSealStandUp: 'K型防漏立體袋',
    childResistant: '防童安全包裝袋',
    labelingGuide: 'FDA 標籤標示指南',
    finSealVsLapSeal: '背封與三邊封對比',
    flatPouchesLink: '三邊封 / 平口袋',
    usaCoffeePackaging: '美國咖啡包裝',
    microwaveSteamBags: '微波排氣蒸汽袋',
    bioPeGreenPlastic: '甘蔗環保 Bio-PE'
  },
  es: {
    byProduct: 'Por Producto',
    byMaterial: 'Por Material',
    byShape: 'Por Forma',
    byFunction: 'Por Función',
    byIndustry: 'Por Industria',
    composting: 'Compostaje',
    standUpPouches: 'Bolsas Stand Up',
    flatBottomBags: 'Bolsas de Fondo Plano',
    spoutPouches: 'Bolsas con Boquilla',
    rollstockFilm: 'Bobinas de Film',
    customBoxes: 'Embalaje de Alto Volumen',
    compostableLabels: 'Etiquetas Compostables',
    labelMaterialsGuide: 'Guía de Materiales de Etiquetas',
    compostableBarrierFilm: 'Film de Barrera Compostable',
    pcrRecycledPlastic: 'Plástico Reciclado PCR',
    sugarcaneBioPe: 'Caña de Azúcar y Bio-PE',
    monoMaterialRecyclable: 'Mono-material Reciclable PE',
    materialDataSheets: 'Fichas de Datos de Materiales',
    compostingBenefits: 'Beneficios del Compostaje',
    homeVsIndustrial: 'Doméstico vs Industrial',
    biodegradableVsCompostable: 'Biodegradable vs Compostable',
    bpiCertified: 'Certificado BPI Compostable',
    compostServiceFinder: 'Buscador de Servicios de Compostaje',
    popularPages: 'Páginas Populares',
    sizeGuide: 'Guía de Tamaños de Bolsa',
    sizingFinderApp: 'Buscador de Tamaños',
    lowMoq: 'Embalaje MOQ Bajo',
    flatBottomVsGusset: 'Fondo Plano vs Fuelle',
    recyclableMonoPe: 'Bolsas Reciclables Mono-PE',
    kSealStandUp: 'Bolsas K-Seal Stand Up',
    childResistant: 'Bolsas Resistentes a Niños',
    labelingGuide: 'Guía de Etiquetado FDA',
    finSealVsLapSeal: 'Sellado Fin vs Sellado Lap',
    flatPouchesLink: 'Bolsas de 3 Sellos Planas',
    usaCoffeePackaging: 'Embalaje de Café EE.UU.',
    microwaveSteamBags: 'Bolsas de Vapor para Microondas',
    bioPeGreenPlastic: 'Caña de Azúcar y Bio-PE'
  },
  fr: {
    byProduct: 'Par Produit',
    byMaterial: 'Par Matériau',
    byShape: 'Par Forme',
    byFunction: 'Par Fonction',
    byIndustry: 'Par Industrie',
    composting: 'Compostage',
    standUpPouches: 'Sachets Stand Up',
    flatBottomBags: 'Sachets à Fond Plat',
    spoutPouches: 'Sachets à Bec',
    rollstockFilm: 'Film en Rouleau',
    customBoxes: 'Emballage sur Mesure Grand Volume',
    compostableLabels: 'Étiquettes Compostables',
    labelMaterialsGuide: 'Guide des Matériaux d\'Étiquettes',
    compostableBarrierFilm: 'Film Barrière Compostable',
    pcrRecycledPlastic: 'Plastique Recyclé PCR',
    sugarcaneBioPe: 'Canne à Sucre et Bio-PE',
    monoMaterialRecyclable: 'Mono-matériau Recyclable PE',
    materialDataSheets: 'Fiches Techniques des Matériaux',
    compostingBenefits: 'Avantages du Compostage',
    homeVsIndustrial: 'Domestique vs Industriel',
    biodegradableVsCompostable: 'Biodégradable vs Compostable',
    bpiCertified: 'Certifié BPI Compostable',
    compostServiceFinder: 'Localisateur de Compostage Local',
    popularPages: 'Pages Populaires',
    sizeGuide: 'Guide des Tailles de Sachet',
    sizingFinderApp: 'Calculateur des Tailles',
    lowMoq: 'Emballage Faible MOQ',
    flatBottomVsGusset: 'Fond Plat vs Soufflet',
    recyclableMonoPe: 'Sachets Recyclables Mono-PE',
    kSealStandUp: 'Sachets K-Seal Stand Up',
    childResistant: 'Sachets Résistants aux Enfants',
    labelingGuide: 'Guide d\'Étiquetage FDA',
    finSealVsLapSeal: 'Soudure Fin vs Soudure Lap',
    flatPouchesLink: 'Sachets Plats 3 Soudures',
    usaCoffeePackaging: 'Emballage Café USA',
    microwaveSteamBags: 'Sachets Vapeur Micro-ondes',
    bioPeGreenPlastic: 'Canne à Sucre et Bio-PE'
  }
};

export default function Footer() {
  const { t } = useTranslation()
  const [footerShapes, setFooterShapes] = useState<any[]>([])

  // Get 4 random images for the gallery thumbnail
  const randomGalleryImages = useMemo(() => {
    // Only pick images that have a mapped SEO page to maximize clicks
    const mappedImages = galleryData.filter(img => {
      const entry = imageSeoMap[img.src];
      return entry && (typeof entry === 'string' || (Array.isArray(entry) && entry.length > 0));
    });
    const shuffled = [...mappedImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12);
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
  
  // Localized Footer Translation Helper
  const lf = (key: string, fallback: string) => {
    return localFooterT[currentLang]?.[key] || localFooterT['en']?.[key] || fallback;
  };

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
        
        {/* Gallery Showcase Full Width Row */}
        {randomGalleryImages.length > 0 && (
          <div className="border-b border-neutral-850 pb-8 mb-8">
            <style dangerouslySetInnerHTML={{__html: `
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            <div className="flex items-center justify-between mb-4">
              <Link 
                to="/gallery" 
                className="group flex items-center gap-1.5 text-white hover:text-primary-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse inline-block" />
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  {currentLang === 'zh-tw' ? '設計畫廊精選' : 
                   currentLang === 'es' ? 'Galería de Diseños' : 
                   currentLang === 'fr' ? 'Galerie de Designs' : 'Packaging Design Gallery'}
                </h3>
                <span className="text-xs text-neutral-500 group-hover:text-primary-400 font-mono transition-colors">&rarr;</span>
              </Link>
              <Link 
                to="/gallery" 
                className="text-xs text-neutral-400 hover:text-primary-400 transition-colors font-mono"
              >
                {currentLang === 'zh-tw' ? '瀏覽全部' : 
                 currentLang === 'es' ? 'Ver todo' : 
                 currentLang === 'fr' ? 'Voir tout' : 'View All'} &rarr;
              </Link>
            </div>
            
            <div 
              className="flex overflow-x-auto gap-3 pb-2 snap-x no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {randomGalleryImages.map((img) => {
                const entry = imageSeoMap[img.src];
                const seoUrl = typeof entry === 'string' 
                  ? entry 
                  : (Array.isArray(entry) && entry.length > 0)
                    ? entry[0].url
                    : '/gallery';
                const localizedUrl = currentLang !== 'en' ? `/${currentLang}${seoUrl}` : seoUrl;
                return (
                  <Link
                    key={img.id}
                    to={localizedUrl}
                    className="group relative flex-shrink-0 w-24 sm:w-28 md:w-32 aspect-square rounded-xl overflow-hidden bg-neutral-850 border border-neutral-800/50 snap-start shadow-md hover:border-primary-500/50 hover:shadow-lg transition-all duration-300"
                    title={img.title}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center p-2 text-[10px] text-white text-center font-medium leading-tight select-none">
                      {img.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Row 1: Core Navigation (6 Columns) */}
        {/* Row 1: Core Navigation (7 Text-Only Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8 pb-8 border-b border-neutral-800">
          
          {/* Column 1: Support & Company */}
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

              {/* Support Links */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-neutral-200 mt-4">{t('pouchEcoFooter.companySupport', 'Company & Support')}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li><Link to="/company/about" className="hover:text-primary-400">{t('pouchEcoFooter.aboutUs', 'About Us')}</Link></li>
                  <li><Link to="/team/ryan-wong" className="hover:text-primary-400">{t('pouchEcoFooter.ryanWong', 'Meet Ryan Wong')}</Link></li>
                  <li><Link to="/directory" className="hover:text-emerald-400 font-semibold text-emerald-400">Technical Spec Directory</Link></li>
                  <li><Link to="/support/faqs" className="hover:text-primary-400">{t('pouchEcoFooter.faqs', 'FAQs')}</Link></li>
                  <li><Link to="/certifications" className="hover:text-primary-400">{t('pouchEcoFooter.certifications', 'Certifications')}</Link></li>
                  <li><Link to="/tech-specs" className="hover:text-primary-400">{t('pouchEcoFooter.techSpecs', 'Tech Specs & Materials')}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 2: By Shape */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('byShape', 'By Shape')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">{lf('standUpPouches', 'Stand Up Pouches')}</Link></li>
              <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-400">{lf('flatBottomBags', 'Flat Bottom Bags')}</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">{lf('spoutPouches', 'Spout Pouches')}</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">3 Side Seal / Flat Pouches</Link></li>
              <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-400">Side Gusset Bags</Link></li>
              <li><Link to="/packaging/custom-boxes" className="hover:text-primary-400">{lf('customBoxes', 'High-Volume Custom Boxes')}</Link></li>
              <li><Link to="/packaging/reverse-tuck-end-paper-boxes" className="hover:text-primary-400">Reverse Tuck End Boxes</Link></li>
              <li><Link to="/eco-friendly-shaped-pouches" className="hover:text-primary-400">Shaped Eco Pouches</Link></li>
            </ul>
          </div>

          {/* Column 3: By Material */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('byMaterial', 'By Material')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/materials/compostable" className="hover:text-primary-400">Compostable Materials</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE Green Plastic</Link></li>
              <li><Link to="/materials/pcr" className="hover:text-primary-400">PCR Recycled Series</Link></li>
              <li><Link to="/materials/plastic-free-kraft" className="hover:text-primary-400">Kraft Paper Packaging</Link></li>
              <li><Link to="/materials/compostable-bar-packaging" className="hover:text-primary-400">Compostable Bar Wraps</Link></li>
              <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-400">PVA Water Soluble Bags</Link></li>
              <li><Link to="/function/rice-paper-bags" className="hover:text-primary-400">Rice Paper Bags</Link></li>
            </ul>
          </div>

          {/* Column 4: Barrier Options */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-400">Barrier Options</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/features/barrier-options" className="hover:text-primary-400 font-semibold text-white">Barrier Overview</Link></li>
              <li><Link to="/features/high-barrier" className="hover:text-primary-400">High Barrier Pouches</Link></li>
              <li><Link to="/features/medium-barrier" className="hover:text-primary-400">Medium Barrier Pouches</Link></li>
              <li><Link to="/features/low-barrier" className="hover:text-primary-400">Low Barrier Pouches</Link></li>
              <li><Link to="/features/material-barrier-properties" className="hover:text-primary-400">Barrier Properties Guide</Link></li>
              <li><Link to="/materials/kraft-high-barrier" className="hover:text-primary-400">Kraft High Barrier</Link></li>
              <li><Link to="/three-side-seal-bag-recyclable-pe-evoh-pe-composite-film-102" className="hover:text-primary-400">EVOH Composite Barrier</Link></li>
            </ul>
          </div>

          {/* Column 5: Surface & Finishes */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-400">Surface & Finishes</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/features/surface-finish" className="hover:text-primary-400 font-semibold text-white">Surface Finishes Overview</Link></li>
              <li><Link to="/custom-uv-transfer-logo-stickers" className="hover:text-primary-400 text-emerald-400 font-medium">UV Transfer Metallic Stickers</Link></li>
              <li><Link to="/white-ink-underprint" className="hover:text-primary-400">White Ink Underprint</Link></li>
              <li><Link to="/soft-touch-matte-standup-pouch-432b83ee" className="hover:text-primary-400">Soft Touch Matte Pouch</Link></li>
              <li><Link to="/clear-matte-zipper-stand-up-pouch" className="hover:text-primary-400">Clear Matte Zipper</Link></li>
              <li><Link to="/printing/digital-printing" className="hover:text-primary-400">Digital Printing Guide</Link></li>
              <li><Link to="/digital-printing-pantone-color-matching" className="hover:text-primary-400">Pantone Color Matching</Link></li>
            </ul>
          </div>

          {/* Column 6: Reclosure & Accessories */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-400">Reclosure & Parts</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/features/reclosure-options" className="hover:text-primary-400 font-semibold text-white">Reclosure Options Overview</Link></li>
              <li><Link to="/options/smart-degassing-sticker" className="hover:text-primary-400">One-Way Degassing Valve</Link></li>
              <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">Child-Resistant Lock Zipper</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">Spout & Cap Assemblies</Link></li>
              <li><Link to="/flat-bottom-pouch-tin-tie" className="hover:text-primary-400">Tin Tie & Magic Tape</Link></li>
              <li><Link to="/flat-bottom-magic-tape-pouches" className="hover:text-primary-400">Magic Tape Sealing</Link></li>
            </ul>
          </div>

          {/* Column 7: By Industry */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('byIndustry', 'By Industry')}</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/solutions" className="hover:text-emerald-400 font-bold text-emerald-400 flex items-center gap-1">All Packaging Solutions <span className="bg-emerald-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">50 Cases</span></Link></li>
              <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">Coffee & Tea Packaging</Link></li>
              <li><Link to="/solutions/bio-pe-coffee-flat-bottom-pouch" className="hover:text-emerald-400 font-medium text-emerald-400">Bio-PE Coffee Box Pouch <span className="bg-emerald-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              <li><Link to="/industry/pet-food" className="hover:text-primary-400">Pet Food Packaging</Link></li>
              <li><Link to="/industry/snacks-food" className="hover:text-primary-400">Snacks & Food Packaging</Link></li>
              <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">Supplements & Powders</Link></li>
              <li><Link to="/topics/compostable-barrier-packaging-for-nuts" className="hover:text-primary-400">Nuts Packaging</Link></li>
              <li><Link to="/solutions/compostable-kraft-coffee-doypack" className="hover:text-primary-400">Compostable Kraft Coffee</Link></li>
              <li><Link to="/solutions/pcr-recycled-pet-food-quad-seal" className="hover:text-primary-400">PCR Pet Food Quad Seal</Link></li>
              <li><Link to="/solutions/recyclable-mono-pe-baby-food-spout" className="hover:text-primary-400">Mono-PE Baby Food Spout</Link></li>
              <li><Link to="/solutions/mono-pe-laundry-detergent-pouch" className="hover:text-primary-400">Mono-PE Detergent Pouch</Link></li>
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
                    <Link to="/directory" className="hover:text-primary-400 font-semibold text-emerald-400 flex items-center gap-1 group">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>Eco Packaging Directory & Spec Finder</span>
                    </Link>
                  </li>
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

        {/* Row 2.5: By Solution Directory (50 Cases Showcase - Collapsible) */}
        <div className="border-t border-neutral-800 py-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">By Solution — 50 B2B Packaging Cases Directory</span>
              </div>
              <div className="text-[10px] border border-emerald-900 rounded px-2 py-0.5 bg-emerald-950 text-emerald-400 group-open:bg-emerald-800 group-open:text-white transition-all font-semibold uppercase font-mono">
                <span className="group-open:hidden">[+] Expand 50 Solution Cases</span>
                <span className="hidden group-open:inline">[-] Collapse 50 Solution Cases</span>
              </div>
            </summary>
            
            <div className="mt-4 pt-4 border-t border-neutral-800/40 text-neutral-400 text-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-emerald-400">Showing all 50 customized packaging formulas with AIEO structured answers & specifications:</span>
                <Link to={typeof window !== 'undefined' && ['fr','es','zh-tw'].includes(window.location.pathname.split('/')[1]) ? `/${window.location.pathname.split('/')[1]}/solutions` : '/solutions'} className="text-xs text-emerald-400 hover:underline font-bold">
                  Open Solutions Directory →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                {FORMULA_PAGES_DATA.map((rec) => {
                  const currentLang = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '';
                  const hasLang = ['fr', 'es', 'zh-tw'].includes(currentLang);
                  const localizedUrl = hasLang ? `/${currentLang}/solutions/${rec.slug}` : `/solutions/${rec.slug}`;
                  
                  return (
                    <Link
                      key={`ft-sol-${rec.id}`}
                      to={localizedUrl}
                      className="flex items-start gap-2 p-1.5 rounded bg-neutral-850 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-500/50 transition-colors group"
                    >
                      <span className="text-[10px] font-mono text-emerald-500 bg-emerald-950 px-1 py-0.5 rounded flex-shrink-0 mt-0.5">
                        #{rec.id}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-neutral-300 group-hover:text-emerald-400 truncate">
                          {rec.title}
                        </p>
                        <p className="text-[9px] text-neutral-500 font-mono truncate">
                          {rec.industry} • {rec.pouchType}
                        </p>
                      </div>
                    </Link>
                  );
                })}
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
