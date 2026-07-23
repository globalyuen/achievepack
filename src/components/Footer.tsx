import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Leaf, Mail, Phone, Calendar, FileText, ShieldCheck, Zap, Box } from 'lucide-react'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './AppIcons'
import { useEffect, useState, useMemo } from 'react'
import { isAchievePack } from '../utils/domain'
import galleryData from '../data/image-gallery.json'
import imageSeoMapRaw from '../data/image-seo-map.json'

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8 pb-8 border-b border-neutral-800">
          
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
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Link to="/company/bpi-certified" className="hover:opacity-90 transition-opacity flex items-center bg-white/5 rounded px-2 py-1 border border-neutral-800">
                  <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-6 w-auto object-contain" loading="lazy" />
                </Link>
                <Link to="/company/b-corp" className="hover:opacity-90 transition-opacity flex items-center bg-white/5 rounded px-2 py-1 border border-neutral-800">
                  <img src="/bcorp.svg" alt="B Corp" className="h-6 w-auto object-contain" loading="lazy" />
                </Link>
              </div>
              <div className="pt-1">
                <a href="https://www.producthunt.com/products/achieve-pack-free-3d-studio?utm_source=badge-follow&utm_medium=badge&utm_source=badge-achieve-pack-free-3d-studio" target="_blank" rel="noopener noreferrer" className="block">
                  <img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1271214&theme=dark" alt="Achieve Pack Free 3D Studio - Design & visualize 3D pouches instantly in your browser. | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
                </a>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-sm mb-3 text-neutral-200 mt-4">{t('pouchEcoFooter.companySupport', 'Company & Support')}</h4>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li><Link to="/company/about" className="hover:text-primary-400">{t('pouchEcoFooter.aboutUs', 'About Us')}</Link></li>
                <li><Link to="/team/ryan-wong" className="hover:text-primary-400">{t('pouchEcoFooter.ryanWong', 'Meet Ryan Wong')}</Link></li>
                <li><Link to="/support/faqs" className="hover:text-primary-400">{t('pouchEcoFooter.faqs', 'FAQs')}</Link></li>
                <li><Link to="/certifications" className="hover:text-primary-400">{t('pouchEcoFooter.certifications', 'Certifications')}</Link></li>
                <li><a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400">{t('pouchEcoFooter.bookMeeting', 'Book a Consultation')}</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Popular Pages */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('popularPages', 'Popular Pages')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/knowledge/size-guide" className="hover:text-primary-400">{lf('sizeGuide', 'Pouch Size Guide')}</Link></li>
              <li><Link to="/knowledge/pouch-sizing" className="hover:text-primary-400 font-semibold text-primary-400">{lf('sizingFinderApp', 'Sizing Finder App')}</Link></li>
              <li><Link to="/products/low-moq-packaging" className="hover:text-primary-400">{lf('lowMoq', 'Low-MOQ Packaging')}</Link></li>
              <li><Link to="/knowledge/fin-seal-lap-seal" className="hover:text-primary-400">{lf('finSealVsLapSeal', 'Fin Seal vs Lap Seal')}</Link></li>
              <li><Link to="/knowledge/flat-bottom-vs-gusset" className="hover:text-primary-400">{lf('flatBottomVsGusset', 'Flat Bottom vs Gusset')}</Link></li>
              <li><Link to="/packaging/spout-pouches" className="hover:text-primary-400">{lf('spoutPouches', 'Spout Pouches')}</Link></li>
              <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-400">{lf('standUpPouches', 'Stand Up Pouches')}</Link></li>
              <li><Link to="/packaging/flat-pouches" className="hover:text-primary-400">{lf('flatPouchesLink', '3 Side Seal / Flat Pouches')}</Link></li>
              <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">{lf('childResistant', 'Child-Resistant Bags')}</Link></li>
              <li><Link to="/usa/labeling-guide" className="hover:text-primary-400">{lf('labelingGuide', 'FDA Labeling Guide')}</Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">{lf('recyclableMonoPe', 'Mono-PE Recyclable Bags')}</Link></li>
              <li><Link to="/usa/coffee-packaging" className="hover:text-primary-400">{lf('usaCoffeePackaging', 'USA Coffee Packaging')}</Link></li>
            </ul>
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
            </ul>
          </div>

          {/* Column 3: By Material */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('byMaterial', 'By Material')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/materials/compostable" className="hover:text-primary-400">Compostable Materials</Link></li>
              <li><Link to="/materials/compostable-bar-packaging" className="hover:text-primary-400">Compostable Bar Wraps <span className="text-[10px] bg-primary-600 text-white px-1.5 py-0.5 rounded-full font-bold ml-1">New</span></Link></li>
              <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-400">Recyclable Mono-PE</Link></li>
              <li><Link to="/materials/bio-pe" className="hover:text-primary-400">Bio-PE Green Plastic</Link></li>
              <li><Link to="/materials/pcr" className="hover:text-primary-400">PCR Recycled Series</Link></li>
              <li><Link to="/materials/plastic-free-kraft" className="hover:text-primary-400">Kraft Paper Packaging</Link></li>
              <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-400">PVA Water Soluble Bags</Link></li>
              <li><Link to="/function/rice-paper-bags" className="hover:text-primary-400">Rice Paper Bags</Link></li>
            </ul>
          </div>

          {/* Column 4: By Function */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('byFunction', 'By Function')}</h4>
            <ul className="space-y-1 text-xs text-neutral-400">
              <li><Link to="/function/child-resistant-bags" className="hover:text-primary-400">{lf('childResistant', 'Child-Resistant Bags')}</Link></li>
              <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-400">Digital Printed Retort</Link></li>
              <li><Link to="/function/carbon-neutral-bags" className="hover:text-primary-400">Carbon Neutral Bags</Link></li>
              <li><Link to="/topics/freezer-safe-vacuum-packaging" className="hover:text-primary-400">Freezer-Safe Vacuum</Link></li>
              <li><Link to="/topics/organic-compliance-support-guide" className="hover:text-primary-400">Organic Compliance Guide</Link></li>
              <li><Link to="/topics/digital-printed-barrier-pouches-small-batch" className="hover:text-primary-400">Digital Printed Barrier</Link></li>
            </ul>
          </div>

          {/* Column 5: By Industry */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-200">{lf('byIndustry', 'By Industry')}</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><Link to="/industry/coffee-tea" className="hover:text-primary-400">Coffee & Tea Packaging</Link></li>
              <li><Link to="/industry/pet-food" className="hover:text-primary-400">Pet Food Packaging</Link></li>
              <li><Link to="/industry/snacks-food" className="hover:text-primary-400">Snacks & Food Packaging</Link></li>
              <li><Link to="/industry/supplements-powders" className="hover:text-primary-400">Supplements & Powders</Link></li>
              <li><Link to="/topics/compostable-barrier-packaging-for-nuts" className="hover:text-primary-400">Nuts Packaging</Link></li>
              <li><Link to="/topics/digital-print-flexible-packaging-for-pharmaceuticals" className="hover:text-primary-400">Pharmaceuticals & Medical</Link></li>
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
