import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { FEATURED_PRODUCTS, getProductSubCategory } from '../../store/productData';
import { useProductTranslation } from '../../utils/productTranslation';
import { ShoppingBag, ArrowRight, Filter, ChevronRight, CheckCircle, AlertTriangle, Package, Clock, FileText, ShieldCheck, Scale } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'sample', label: 'Sample Packs' },
  { id: 'custom-pouches', label: 'Custom Pouches' },
  { id: 'eco-stock', label: 'Eco Stock' },
  { id: 'eco-digital', label: 'Eco Digital' },
  { id: 'conventional-stock', label: 'Conventional Stock' },
  { id: 'conventional-digital', label: 'Conventional Digital' },
  { id: 'boxes', label: 'Custom Boxes' },
  { id: '3d-print', label: '3D Printing' },
  { id: 'reusable', label: 'Reusable' },
];

const SHAPES = [
  { id: 'all', label: 'All Shapes' },
  { id: 'Stand Up Pouch / Doypack', label: 'Stand Up Pouch' },
  { id: 'Flat Squared Bottom Pouch', label: 'Flat Bottom' },
  { id: 'Side Gusset Pouch', label: 'Side Gusset' },
  { id: 'Quad Seal Pouch', label: 'Quad Seal' },
  { id: '3 Side Seal Pouch', label: '3 Side Seal' },
  { id: 'Spouted Stand Up Pouch', label: 'Spouted Pouch' },
  { id: 'Rollstock', label: 'Rollstock' },
  { id: 'Bottle', label: 'Bottle' },
];


const SUSTAINABILITIES = [
  { id: 'all', label: 'All Levels' },
  { id: 'conventional', label: 'Conventional' },
  { id: 'recyclable', label: 'Recyclable' },
  { id: 'compostable', label: 'Compostable' },
  { id: 'reusable', label: 'Reusable' },
];

const LOCAL_TRANSLATIONS = {
  en: {
    title: "5 Common Pouch Packaging Problems (And Solutions)",
    problems: [
      { title: "Moisture & Oxygen Permeation", desc: "Use high-barrier EVOH & AlOx metallized coatings to protect sensitive contents without compromising recyclability." },
      { title: "Heat Seal Weakness & Delamination", desc: "Implement precision dual-stage hot tack and Polyolefin Plastomer (POP) sealing layers for hermetic seal strength." },
      { title: "Eco-Laminate Print Inconsistencies", desc: "Apply corona discharge surface pre-treatment and high-adhesion water-based flexographic/digital inks on Kraft, PLA, and mono-PE." },
      { title: "Mechanical Puncture & Flex Cracking", desc: "Incorporate high-tensile Oriented Polyamide (OPA) or Biaxially-Oriented Polyethylene (BOPE) protective outer layers." },
      { title: "Reclosable Zipper Separation", desc: "Deploy ultrasonic welding and thermo-bonded heavy-duty press-to-close or hook-and-loop (Velcro) closures." }
    ],
    sourcingTitle: "5 Common Pouch Sourcing Problems (And Solutions)",
    sourcingProblems: [
      { title: "High Minimum Order Quantities (MOQ)", desc: "Low-MOQ digital printing enables brands to order custom pouches starting at just 500 units, reducing inventory risk." },
      { title: "Slow Lead Times & Prototyping", desc: "Rapid pre-press tooling, 3D interactive dieline renders, and express physical sample kits ship in 3-5 days." },
      { title: "Artwork Alignment & Dieline Errors", desc: "Automated dieline generation coupled with professional pre-press verification prevents printing crop and bleed issues." },
      { title: "Unverifiable Sustainability Claims", desc: "Fully certified compostable (EN 13432) and recyclable mono-PE laminates backed by transparent material specifications." },
      { title: "Incorrect Pouch Volume / Sizing", desc: "Custom dimensions and volume calculation tools, paired with blank fit-test samples to verify product fit before bulk production." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Empaque de Bolsas (Y Soluciones)",
    problems: [
      { title: "Permeación de humedad y oxígeno", desc: "Recubrimientos metalizados EVOH y AlOx de alta barrera protegen alimentos y químicos del ingreso de humedad/oxígeno." },
      { title: "Debilidad del sellado térmico / delaminación", desc: "Capas de sellado de plastómero de poliolefina (POP) y Hot Tack de precisión de doble etapa para una resistencia del sello robusta." },
      { title: "Inconsistencias de impresión en eco-laminados", desc: "Pretratamiento superficial por descarga de corona y tintas flexográficas/digitales al agua de alta adhesión en Kraft, PLA y mono-PE." },
      { title: "Punción mecánica y agrietamiento por flexión", desc: "Capas protectoras exteriores de poliamida orientada de alta resistencia (OPA) o polietileno orientado biaxialmente (BOPE)." },
      { title: "Separación del cierre recerrable", desc: "Soldadura ultrasónica y cierres de presión termosellados de alta resistencia o de gancho y bucle (Velcro)." }
    ],
    sourcingTitle: "5 Problemas Comunes en la Compra de Bolsas (Y Soluciones)",
    sourcingProblems: [
      { title: "Altas Cantidades Mínimas de Pedido (MOQ)", desc: "La impresión digital con bajo MOQ permite a las marcas ordenar bolsas personalizadas desde 500 unidades, reduciendo riesgos." },
      { title: "Plazos de Entrega y Prototipado Lentos", desc: "Herramientas rápidas de pre-prensa, renders 3D interactivos y kits de muestras físicas exprés enviados en 3-5 días." },
      { title: "Errores de Alineación y Líneas de Troquel (Dielines)", desc: "La generación automatizada de líneas de troquel y la verificación profesional de pre-prensa evitan problemas de corte y sangrado." },
      { title: "Reclamaciones de Sostenibilidad No Verificables", desc: "Laminados compostables certificados (EN 13432) y mono-PE reciclables respaldados por fichas técnicas transparentes." },
      { title: "Volumen / Tamaño de Bolsa Incorrecto", desc: "Dimensiones personalizadas y herramientas de cálculo de volumen, junto con muestras en blanco para pruebas de llenado antes de la producción en masa." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage de Sachets (Et Solutions)",
    problems: [
      { title: "Perméation de l'humidité et de l'oxygène", desc: "Revêtements métallisés EVOH et AlOx haute barrière protégeant les aliments/produits chimiques sans compromettre la recyclabilité." },
      { title: "Faiblesse du thermoscellage / délamination", desc: "Couches de scellage en plastomère de polyoléfine (POP) et Hot Tack de précision à double étape pour une résistance robuste." },
      { title: "Incohérences d'impression sur éco-stratifiés", desc: "Prétraitement de surface par décharge Corona et encres flexographiques/numériques à base d'eau à haute adhérence sur Kraft, PLA et mono-PE." },
      { title: "Perforation mécanique et fissures de flexion", desc: "Couches externes de protection en polyamide orienté haute résistance (OPA) ou polyéthylène orienté biaxialement (BOPE)." },
      { title: "Séparation de la fermeture à glissière refermable", desc: "Soudage par ultrasons et fermetures à glissière robustes thermosoudées ou auto-agrippantes (Velcro)." }
    ],
    sourcingTitle: "5 Problèmes Courants d'Approvisionnement en Sachets (Et Solutions)",
    sourcingProblems: [
      { title: "Quantités Minimales de Commande (MOQ) Élevées", desc: "L'impression numérique à faible MOQ permet de commander des sachets personnalisés dès 500 unités, limitant les risques de stock." },
      { title: "Délais de Livraison et Prototypage Lents", desc: "Pré-presse rapide, rendus de tracé de découpe 3D interactifs et expédition de kits d'échantillons physiques sous 3 à 5 jours." },
      { title: "Erreurs d'Alignement Graphique et de Tracé de Découpe", desc: "Génération automatisée des tracés de découpe et vérification pré-presse professionnelle pour éviter les défauts de cadrage." },
      { title: "Allégations Écologiques Non Vérifiables", desc: "Matériaux compostables certifiés (EN 13432) et complexes mono-PE recyclables avec fiches techniques transparentes." },
      { title: "Volume et Dimensions Inadaptés", desc: "Dimensions sur mesure, outils de calcul de volume et fourniture de maquettes vierges pour tester la contenance réelle." }
    ]
  },
  'zh-TW': {
    title: "5個常見的軟包裝袋問題（以及解決方案）",
    problems: [
      { title: "水分與氧氣滲透", desc: "採用高阻隔 EVOH & AlOx 金屬化塗層，在不影響可回收性的情況下保護敏感內容物。" },
      { title: "熱封強度不足與層壓剝離", desc: "採用精密雙階段熱粘（Hot Tack）與聚烯氣塑性體（POP）密封層，確保堅固的氣密強度。" },
      { title: "環保層壓材料印刷不均", desc: "在牛皮紙、PLA 和單一材質 PE 上應用電暈放電表面前處理與高粘附力水性/數位油墨。" },
      { title: "機械穿刺與抗撓曲龜裂", desc: "在多層結構中結合高拉伸定向聚醯胺（OPA）或雙向拉伸聚乙烯（BOPE）保護性外層。" },
      { title: "可重複密封拉鍊脫離", desc: "部署超音波焊接與熱結合重型按壓密封拉鍊或魔鬼氈（Velcro）閉合系統。" }
    ],
    sourcingTitle: "5個常見的包裝袋採購與訂製問題（以及解決方案）",
    sourcingProblems: [
      { title: "起訂量（MOQ）過高", desc: "採用低起訂量的數位印刷技術，讓品牌僅需 500 袋起即可客製，大幅降低庫存與資金風險。" },
      { title: "打樣與交期緩慢", desc: "提供快速印前處理、3D 互動刀模圖渲染，並可在 3 至 5 天內寄出實體空白樣品包進行測試。" },
      { title: "設計稿對齊與刀模圖錯誤", desc: "自動化刀模圖生成搭配專業印前人工審查，完美預防印刷裁切、出血及折邊對齊問題。" },
      { title: "環保材料真實性難以驗證", desc: "提供獲得完整國際認證（如 EN 13432 工業堆肥）的生物可降解及單一材質可回收 mono-PE 層壓材料。" },
      { title: "包裝袋容量與尺寸估算錯誤", desc: "客製化尺寸與容量計算工具，並提供實體空白樣品進行裝填測試，確保大貨生產前容量無誤。" }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'pouch-shop-problems', translationKey: 'title' },
  { id: 'pouch-shop-sourcing-problems', translationKey: 'sourcingTitle' }
];

export const sectionsForAchieve = [
  { id: 'pouch-shop-problems', translationKey: 'title' },
  { id: 'pouch-shop-sourcing-problems', translationKey: 'sourcingTitle' }
];機械穿刺與抗撓曲龜裂", desc: "在多層結構中結合高拉伸定向聚醯胺（OPA）或雙向拉伸聚乙烯（BOPE）保護性外層。" },
      { title: "可重複密封拉鍊脫離", desc: "部署超音波焊接與熱結合重型按壓密封拉鍊或魔鬼氈（Velcro）閉合系統。" }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'pouch-shop-problems', translationKey: 'title' }
];

export const sectionsForAchieve = [
  { id: 'pouch-shop-problems', translationKey: 'title' }
];

export default function PouchShopPage() {
  const { t, i18n } = useTranslation();
  const { translateProducts } = useProductTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeShape = searchParams.get('shape') || 'all';
  const activeSustainability = searchParams.get('sustainability') || 'all';

  const setActiveCategory = (category: string) => {
    setSearchParams(prev => {
      if (category === 'all') {
        prev.delete('category');
      } else {
        prev.set('category', category);
      }
      return prev;
    });
  };

  const setActiveSustainability = (sus: string) => {
    setSearchParams(prev => {
      if (sus === 'all') prev.delete('sustainability');
      else prev.set('sustainability', sus);
      return prev;
    });
  };

  const setActiveShape = (shape: string) => {
    setSearchParams(prev => {
      if (shape === 'all') {
        prev.delete('shape');
      } else {
        prev.set('shape', shape);
      }
      return prev;
    });
  };

  const filteredProducts = translateProducts(
    FEATURED_PRODUCTS.filter(p => {
      // Get product subCategory using helper
      const subCat = getProductSubCategory(p);
      
      // Normalize categories (e.g. sample vs samples)
      const matchesCategory = activeCategory === 'all' || 
        p.category === activeCategory || 
        subCat === activeCategory ||
        (activeCategory === 'sample' && subCat === 'samples') ||
        (activeCategory === 'eco-stock' && (subCat === 'eco-stock-plain' || subCat === 'eco-stock-custom-print')) ||
        (activeCategory === 'conventional-stock' && subCat === 'conventional-stock-plain');
      
      // Some products don't have shape prop, fallback to name matching
      const matchesShape = activeShape === 'all' || 
        (p as any).shape === activeShape || 
        p.name?.toLowerCase().includes(activeShape.toLowerCase().replace(' pouch', '')) ||
        (activeShape === 'Stand Up Pouch / Doypack' && p.name?.toLowerCase().includes('stand up'));

      const matchesSustainability = activeSustainability === 'all' || 
        (p as any).sustainability === activeSustainability;

      return matchesCategory && matchesShape && matchesSustainability;
    })
  );

  return (
    <PouchLayout>
      <div className="bg-[#D4FF00] border-b-4 border-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <ShoppingBag className="w-12 h-12" strokeWidth={2.5} />
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              ECO SHOP
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-bold font-['JetBrains_Mono'] max-w-2xl border-l-4 border-black pl-4 py-2 bg-white/50">
            {t('pouchShop.subtitle', 'Sustainable packaging ready for your brand. Order samples or request custom quotes directly.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters - Desktop Only */}
          <div className="hidden lg:block lg:w-1/4 flex-shrink-0 space-y-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Categories</h2>
              </div>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeCategory === cat.id 
                        ? 'bg-black text-[#D4FF00] border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{cat.label}</span>
                      {activeCategory === cat.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Sustainability</h2>
              </div>
              <div className="flex flex-col gap-2">
                {SUSTAINABILITIES.map(sus => (
                  <button
                    key={sus.id}
                    onClick={() => setActiveSustainability(sus.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeSustainability === sus.id 
                        ? 'bg-[#00FF00] text-black border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="capitalize">{sus.label}</span>
                      {activeSustainability === sus.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Shapes</h2>
              </div>
              <div className="flex flex-col gap-2">
                {SHAPES.map(shape => (
                  <button
                    key={shape.id}
                    onClick={() => setActiveShape(shape.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeShape === shape.id 
                        ? 'bg-[#FF00FF] text-white border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{shape.label}</span>
                      {activeShape === shape.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid & Mobile Filters Container */}
          <div className="lg:w-3/4">
            {/* Mobile Filters - Visible only on mobile/tablet */}
            <div className="lg:hidden space-y-6 mb-8 bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Categories</span>
                  {activeCategory !== 'all' && (
                    <span className="text-[10px] bg-black text-[#D4FF00] font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {CATEGORIES.find(c => c.id === activeCategory)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeCategory === cat.id 
                          ? 'bg-black text-[#D4FF00]' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-black pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Sustainability</span>
                  {activeSustainability !== 'all' && (
                    <span className="text-[10px] bg-[#00FF00] text-black font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {SUSTAINABILITIES.find(s => s.id === activeSustainability)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {SUSTAINABILITIES.map(sus => (
                    <button
                      key={sus.id}
                      onClick={() => setActiveSustainability(sus.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeSustainability === sus.id 
                          ? 'bg-[#00FF00] text-black' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {sus.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-black pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Shapes</span>
                  {activeShape !== 'all' && (
                    <span className="text-[10px] bg-[#FF00FF] text-white font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {SHAPES.find(s => s.id === activeShape)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {SHAPES.map(shape => (
                    <button
                      key={shape.id}
                      onClick={() => setActiveShape(shape.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeShape === shape.id 
                          ? 'bg-[#FF00FF] text-white' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {shape.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-8 font-['JetBrains_Mono'] font-bold flex items-center justify-between border-b-4 border-black pb-4">
              <div className="text-xl">
                Showing <span className="bg-[#D4FF00] border-2 border-black px-2">{filteredProducts.length}</span> Products
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const imageUrl = product.images?.[0] || '';
                
                return (
                  <Link 
                    key={product.id}
                    to={`/shop/${product.id}`}
                    className="group border-4 border-black bg-white hover:bg-[#F0F0F0] transition-colors relative flex flex-col h-full"
                  >
                    {/* Product Image */}
                    <div className="aspect-square border-b-4 border-black p-4 bg-white relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <div className="absolute top-4 right-4 bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs px-2 py-1 uppercase z-10">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex-grow flex flex-col justify-between bg-white relative z-20">
                      <div>
                        <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#10B981] mb-1 uppercase tracking-tight">
                          {product.category.replace('-', ' ')}
                        </div>
                        <h3 className="text-lg font-black uppercase leading-tight mb-2 group-hover:underline">
                          {product.name}
                        </h3>
                        <p className="text-xs font-['JetBrains_Mono'] line-clamp-2 mb-4 text-gray-600">
                          {product.shortDesc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black">
                        <div className="font-['JetBrains_Mono'] font-bold">
                          {product.basePrice > 0 ? (
                            <span className="text-lg">${product.basePrice.toFixed(2)}<span className="text-xs text-gray-500">/ea</span></span>
                          ) : (
                            <span className="text-sm text-[#FF00FF]">Custom Quote</span>
                          )}
                        </div>
                        <div className="bg-[#D4FF00] border-2 border-black p-1.5 group-hover:bg-black group-hover:text-[#D4FF00] transition-colors">
                          <ArrowRight className="w-4 h-4" strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              
              {filteredProducts.length === 0 && (
                <div className="col-span-1 md:col-span-2 xl:col-span-3 text-center py-20 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black uppercase mb-4">No Products Found</h3>
                  <p className="font-['JetBrains_Mono'] text-lg">Try adjusting your category or shape filters.</p>
                  <button 
                    onClick={() => { setActiveCategory('all'); setActiveShape('all'); }}
                    className="mt-6 bg-[#D4FF00] border-4 border-black px-6 py-3 font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#D4FF00] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">
              {LOCAL_TRANSLATIONS[i18n.language as keyof typeof LOCAL_TRANSLATIONS]?.title || LOCAL_TRANSLATIONS.en.title}
            </h2>
            <div className="space-y-4">
              {(LOCAL_TRANSLATIONS[i18n.language as keyof typeof LOCAL_TRANSLATIONS]?.problems || LOCAL_TRANSLATIONS.en.problems).map((prob, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-[#D4FF00] border-2 border-black p-2 h-fit flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-lg">{prob.title}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/imgs/knowledge/pouch-packaging-pain-points.jpg" alt="Pouch Packaging Solutions" className="w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover aspect-video" />
          </div>
        </div>
      </div>

      {/* 5 Common Pouch Sourcing Problems (And Solutions) Section */}
      <div id="pouch-shop-sourcing-problems" className="max-w-7xl mx-auto px-4 py-16 border-t-4 border-black">
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">
              {((LOCAL_TRANSLATIONS as any)[i18n.language] || LOCAL_TRANSLATIONS.en).sourcingTitle}
            </h2>
            <div className="space-y-4">
              {(((LOCAL_TRANSLATIONS as any)[i18n.language] || LOCAL_TRANSLATIONS.en).sourcingProblems).map((prob: any, idx: number) => {
                const icons = [Package, Clock, FileText, ShieldCheck, Scale];
                const IconComponent = icons[idx] || CheckCircle;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-[#D4FF00] border-2 border-black p-2 h-fit flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-black" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-lg">{prob.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{prob.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/imgs/knowledge/pouch-shop-pain-points.jpg" alt="Pouch Sourcing Solutions" className="w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover aspect-video" />
          </div>
        </div>
      </div>
    </PouchLayout>
  );
}
