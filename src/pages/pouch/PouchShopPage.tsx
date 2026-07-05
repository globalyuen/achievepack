import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { FEATURED_PRODUCTS, getProductSubCategory } from '../../store/productData';
import { useProductTranslation } from '../../utils/productTranslation';
import { ShoppingBag, ArrowRight, Filter, ChevronRight, CheckCircle, Layers, Zap, Globe, Crosshair, BarChart3 } from 'lucide-react';

export const sectionsForPouch = ["5 Common Pouch Shop Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Pouch Shop Problems (And Solutions)"];

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'sample', label: 'Sample Packs' },
  { id: 'custom-pouches', label: 'Custom Pouches' },
  { id: 'stock-packaging', label: 'Stock Packaging' },
  { id: 'machinery', label: 'Packaging Machinery' },
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
  { id: 'Shrink Sleeve', label: 'Shrink Sleeve' },
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
      { title: "Punctures During Shipping", desc: "Use multi-layer barrier films for structural integrity." },
      { title: "Loss of Freshness", desc: "High-barrier EVOH layers and airtight ziplocks." },
      { title: "Poor Print on Eco Materials", desc: "Digital printing on treated recyclable laminates." },
      { title: "Zipper Failures", desc: "Heavy-duty press-to-close zippers with precision heat-sealing." },
      { title: "Non-Recyclable Waste", desc: "Mono-material PE structures for 100% recyclability." }
    ],
    pouchShopProblems: {
      title: "5 Common Pouch Shop Problems (And Solutions)",
      desc: "Struggling to source custom packaging online? Here are the top 5 procurement and design alignment pain points, solved with modern production technologies.",
      problems: [
        {
          title: "High Minimum Order Quantities (MOQs)",
          problem: "Traditional plate printing requires 10,000+ units per SKU, forcing small brands to over-order.",
          solution: "Digital printing technology allows low MOQs starting at 500 units, making multi-SKU testing easy."
        },
        {
          title: "High Setup Fees & Cylinder Costs",
          problem: "Expensive initial cylinder engraving fees make short-run custom packaging cost-prohibitive.",
          solution: "Plate-free digital processing eliminates setup costs completely, charging only for the material and print."
        },
        {
          title: "Unpredictable Lead Times",
          problem: "Long production cycles and shipping delays from overseas suppliers stall product launches.",
          solution: "On-demand local printing and optimized automated workflows cut production lead times down to 10-15 business days."
        },
        {
          title: "Artwork Errors & Colors Discrepancies",
          problem: "RGB to CMYK conversion issues and wrong dielines cause production errors and delayed approvals.",
          solution: "Pre-flight checks, 3D interactive dieline viewers, and PDF proofs ensure exact print accuracy."
        },
        {
          title: "Greenwashing & Certificate Compliance",
          problem: "Hard-to-verify eco-friendly claims and lack of official compostability/recyclability certificates.",
          solution: "100% traceable compostable and recyclable mono-materials with DIN CERTCO/BPI certifications."
        }
      ]
    }
  },
  es: {
    title: "5 Problemas Comunes de Empaque (Y Soluciones)",
    problems: [
      { title: "Perforaciones durante el envío", desc: "Uso de películas de barrera multicapa para la integridad estructural." },
      { title: "Pérdida de frescura", desc: "Capas EVOH de alta barrera y cierres herméticos." },
      { title: "Mala impresión en ecológicos", desc: "Impresión digital en laminados reciclables tratados." },
      { title: "Fallos en el cierre", desc: "Cierres de presión con sellado térmico de precisión." },
      { title: "Residuos no reciclables", desc: "Estructuras de PE monomaterial 100% reciclables." }
    ],
    pouchShopProblems: {
      title: "5 Problemas Comunes de Compra de Bolsas (y Soluciones)",
      desc: "¿Tiene dificultades para comprar empaques personalizados en línea? Aquí están los 5 principales puntos críticos de adquisición y diseño, resueltos con tecnologías de producción modernas.",
      problems: [
        {
          title: "Altas Cantidades Mínimas de Pedido (MOQ)",
          problem: "La impresión tradicional requiere más de 10,000 unidades por SKU, lo que obliga a las marcas pequeñas a comprar en exceso.",
          solution: "La tecnología de impresión digital permite MOQ bajos a partir de 500 unidades, facilitando las pruebas de múltiples SKU."
        },
        {
          title: "Altas Tarifas de Configuración y Costos de Cilindros",
          problem: "Los costosos cargos iniciales de grabado de cilindros hacen que el empaque personalizado de tiradas cortas sea prohibitivo.",
          solution: "El procesamiento digital sin planchas elimina por completo los costos de configuración, cobrando solo por el material y la impresión."
        },
        {
          title: "Tiempos de Entrega Impredecibles",
          problem: "Los largos ciclos de producción y los retrasos en los envíos de proveedores extranjeros detienen los lanzamientos de productos.",
          solution: "La impresión local bajo demanda y los flujos de trabajo optimizados reducen los plazos de entrega a 10-15 días hábiles."
        },
        {
          title: "Errores de Diseño y Discrepancias de Color",
          problem: "Los problemas de conversión de RGB a CMYK y las líneas de troquel incorrectas causan errores de producción y retrasos.",
          solution: "Las comprobaciones previas, los visores interactivos de troquel en 3D y las pruebas en PDF garantizan la precisión exacta."
        },
        {
          title: "Lavado Verde y Cumplimiento de Certificados",
          problem: "Reclamaciones ecológicas difíciles de verificar y falta de certificados oficiales de compostabilidad/reciclabilidad.",
          solution: "Monomateriales compostables y reciclables 100% trazables con certificaciones DIN CERTCO/BPI."
        }
      ]
    }
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage (Et Solutions)",
    problems: [
      { title: "Perforations lors de l'expédition", desc: "Films barrières multicouches pour l'intégrité." },
      { title: "Perte de fraîcheur", desc: "Couches EVOH haute barrière et zips hermétiques." },
      { title: "Mauvaise impression", desc: "Impression numérique sur stratifiés recyclables." },
      { title: "Défaillances du zip", desc: "Fermetures à pression robustes avec thermoscellage." },
      { title: "Déchets non recyclables", desc: "Structures mono-matériau en PE 100 % recyclables." }
    ],
    pouchShopProblems: {
      title: "5 Problèmes Courants d'Achat de Sachets (et Solutions)",
      desc: "Difficultés à vous approvisionner en emballages personnalisés en ligne ? Voici les 5 principaux points douloureux de l'approvisionnement et de la conception, résolus par des technologies de production modernes.",
      problems: [
        {
          title: "Quantités Minimales de Commande (MOQ) Élevées",
          problem: "L'impression traditionnelle nécessite plus de 10 000 unités par SKU, lo qui oblige les petites marques à surcommander.",
          solution: "La technologie d'impression numérique permet des MOQ bas à partir de 500 unités, facilitant les tests multi-références."
        },
        {
          title: "Frais de Configuration et Coûts de Cylindres Élevés",
          problem: "Les frais de gravure de cylindres initiaux rendent les petits tirages d'emballage personnalisé hors de prix.",
          solution: "Le traitement numérique sans plaque élimine complètement les coûts de configuration, ne facturant que le matériau et l'impression."
        },
        {
          title: "Délais de Livraison Imprévisibles",
          problem: "Les cycles de production longs et les retards d'expédition des fournisseurs étrangers bloquent les lancements de produits.",
          solution: "L'impression locale à la demande et les flux de travail automatisés réduisent les délais de production à 10-15 jours ouvrables."
        },
        {
          title: "Erreres de Conception et Écarts de Couleur",
          problem: "Les problèmes de conversion RVB en CMJN et les tracés de découpe erronés entraînent des erreurs de production et des retards.",
          solution: "Des contrôles en amont, des visualiseurs 3D interactifs et des épreuves PDF garantissent une précision d'impression exacte."
        },
        {
          title: "Greenwashing et Conformité des Certificats",
          problem: "Allégations écologiques difficiles à vérifier et manque de certificats officiels de compostabilité ou de recyclabilité.",
          solution: "Mono-matériaux compostables et recyclables 100 % traçables avec des certifications DIN CERTCO/BPI."
        }
      ]
    }
  },
  'zh-TW': {
    title: "5個常見的包裝袋問題（以及解決方案）",
    problems: [
      { title: "運輸過程中的刺穿", desc: "使用多層阻隔膜確保結構完整性。" },
      { title: "失去新鮮度", desc: "高阻隔 EVOH 層和氣密拉鍊。" },
      { title: "環保材料印刷不良", desc: "在經過處理的可回收層壓板上進行數位印刷。" },
      { title: "拉鍊故障", desc: "採用精密熱封的重型按壓密封拉鍊。" },
      { title: "不可回收廢棄物", desc: "採用單一材質 PE 結構，實現 100% 可回收。" }
    ],
    pouchShopProblems: {
      title: "5個常見的包裝袋採購問題（與解決方案）",
      desc: "在線上採購客製化包裝時遇到困難？以下是 5 大採購與設計對接痛點，透過現代化生產技術完美解決。",
      problems: [
        {
          title: "最小起訂量 (MOQ) 過高",
          problem: "傳統版印刷每個 SKU 需要 10,000 個以上的起訂量，迫使小品牌過度訂購。",
          solution: "數位印刷技術支援低至 500 個起訂量，讓多 SKU 的市場測試變得輕鬆簡單。"
        },
        {
          title: "高昂的製版與印刷準備費用",
          problem: "昂貴的初始電雕版費使小批量客製化包裝的成本令人望而卻步。",
          solution: "免製版的數位印刷技術完全消除了準備成本，僅按材料和印刷量計費。"
        },
        {
          title: "無法預測的交貨週期",
          problem: "海外供應商的冗長生產週期和物流延遲導致產品發表時程受阻。",
          solution: "在地化隨選印刷與優化的自動化工作流，將生產交期縮短至 10-15 個工作天。"
        },
        {
          title: "設計稿錯誤與顏色偏差",
          problem: "RGB 轉 CMYK 的色彩偏差和錯誤的刀模線導致生產錯誤與反覆確認延誤。",
          solution: "印前自動檢查、3D 互動刀模線預覽及 PDF 打樣確保印刷精準度。"
        },
        {
          title: "綠色洗腦與認證合規疑慮",
          problem: "環保聲明難以證實，且缺乏官方的可堆肥或可回收認證證書。",
          solution: "提供 100% 可追溯的可堆肥與可回收單一材質，並具備 DIN CERTCO/BPI 官方認證。"
        }
      ]
    }
  }
};

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
        (activeCategory === 'conventional-stock' && subCat === 'conventional-stock-plain') ||
        (activeCategory === 'stock-packaging' && (p.category === 'eco-stock' || p.category === 'conventional-stock' || p.category === 'conventional-digital' || subCat === 'eco-stock-plain' || subCat === 'conventional-stock-plain' || subCat === 'eco-stock-custom-print'));
      
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
                    <CheckCircle className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-lg">{prob.title}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/imgs/knowledge/sustainable-custom-pouches-pain-points.jpg" alt="Packaging solutions" className="w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover aspect-video" />
          </div>
        </div>
      </div>

      {/* 5 Common Pouch Shop Problems (And Solutions) */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2 flex items-center gap-2">
              <ShoppingBag className="w-8 h-8" strokeWidth={2.5} />
              {(LOCAL_TRANSLATIONS[i18n.language as keyof typeof LOCAL_TRANSLATIONS] as any)?.pouchShopProblems?.title || LOCAL_TRANSLATIONS.en.pouchShopProblems.title}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-gray-600 mb-6">
              {(LOCAL_TRANSLATIONS[i18n.language as keyof typeof LOCAL_TRANSLATIONS] as any)?.pouchShopProblems?.desc || LOCAL_TRANSLATIONS.en.pouchShopProblems.desc}
            </p>
            <div className="space-y-6">
              {((LOCAL_TRANSLATIONS[i18n.language as keyof typeof LOCAL_TRANSLATIONS] as any)?.pouchShopProblems?.problems || LOCAL_TRANSLATIONS.en.pouchShopProblems.problems).map((prob: any, idx: number) => {
                const icons = [Layers, Zap, Globe, Crosshair, BarChart3];
                const IconComponent = icons[idx] || CheckCircle;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-[#D4FF00] border-2 border-black p-2 h-fit flex-shrink-0">
                      <IconComponent className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-lg">{prob.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-red-600 font-semibold mb-1">
                        <strong>Problem:</strong> {prob.problem}
                      </p>
                      <p className="font-['JetBrains_Mono'] text-sm text-emerald-600 font-semibold">
                        <strong>Solution:</strong> {prob.solution}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="/imgs/knowledge/pouch-shop-pain-points.jpg" 
              alt="5 Common Pouch Shop Problems and Solutions" 
              className="w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover aspect-video" 
            />
          </div>
        </div>
      </div>
    </PouchLayout>
  );
}
