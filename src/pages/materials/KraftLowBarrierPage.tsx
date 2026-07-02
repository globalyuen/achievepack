import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle, AlertTriangle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

export const translations: Record<string, any> = {
  en: {
    title: "5 Common Kraft Low Barrier Problems (And Solutions)",
    points: [
      { q: "Moisture Penetration & Staling", a: "Standard low-barrier kraft paper allows rapid moisture transmission, causing crispy foods like bakery goods or cookies to lose freshness quickly. Solution: Integrate a micro-thin, food-safe internal lining (like LDPE or bio-based PLA) that seals the paper pores and extends product crispness." },
      { q: "Grease Staining & Oil Seepage", a: "Oils and fats from baked products easily seep through paper, creating unsightly greasy spots on the outer pouch layer. Solution: Apply a fluorine-free greaseproof treatment or integrate a high-density oil-resistant inner lining to maintain a clean appearance." },
      { q: "Poor Heat Seal Integrity", a: "Natural kraft fibers act as a heat barrier, causing uneven temperature distribution and weak, leaky seal seams on filling lines. Solution: Optimize the thickness of the heat-sealable layer and use precise dwell time settings to ensure uniform hermetic sealing." },
      { q: "Tearing & Shipping Damage", a: "Low-barrier kraft paper is prone to punctures and tearing under rough handling or high transit vibration. Solution: Utilize long-fiber virgin kraft paper to maximize tensile strength and enhance durability against punctures." },
      { q: "Ink Smudging on Porous Paper", a: "The highly porous surface of natural kraft paper absorbs ink unevenly, leading to blurred graphics and ink rub-off. Solution: Employ specialized water-based flexographic inks coupled with pre-print corona treatment to lock graphics securely to the paper surface." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de la Barrera Baja de Kraft (y Soluciones)",
    points: [
      { q: "Penetración de humedad y pérdida de frescura", a: "El papel kraft estándar de barrera baja permite una transmisión rápida de humedad, haciendo que los alimentos crujientes pierdan frescura. Solución: Integrar un revestimiento interno apto para alimentos (como LDPE o PLA biodegradable) para sellar los poros del papel." },
      { q: "Manchas de grasa y filtración de aceite", a: "Los aceites y grasas de los productos horneados se filtran a través del papel, creando manchas grasientas. Solución: Aplicar un tratamiento antigrasa libre de flúor o integrar un revestimiento interno resistente a los aceites." },
      { q: "Integridad deficiente del sellado térmico", a: "Las fibras naturales de kraft actúan como barrera térmica, provocando costuras débiles o fugas en las líneas de llenado. Solución: Optimizar el espesor de la capa termosellable y ajustar los tiempos de presión para un sellado hermético." },
      { q: "Desgarros y daños durante el transporte", a: "El papel kraft de barrera baja es propenso a pinchazos y desgarros durante el transporte brusco. Solución: Utilizar papel kraft virgen de fibra larga para maximizar la resistencia a la tracción y mejorar la durabilidad." },
      { q: "Corrimiento de tinta en papel poroso", a: "La superficie altamente porosa del papel kraft absorbe la tinta de manera desigual, borrando los gráficos. Solución: Emplear tintas flexográficas especializadas al agua junto con un tratamiento corona previo a la impresión." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants du Kraft Basse Barrière (Et Solutions)",
    points: [
      { q: "Pénétration de l'humidité et ramollissement", a: "Le papier kraft basse barrière standard laisse passer l'humidité, faisant perdre leur croustillant aux produits de boulangerie. Solution : Intégrer une doublure interne très fine et sûre (comme le LDPE ou le PLA biosourcé) pour sceller les pores du papier." },
      { q: "Taches de graisse et suintement d'huile", a: "Les huiles et graisses des produits cuits s'infiltrent à travers le papier, créant des taches inesthétiques. Solution : Appliquer un traitement oléophobe sans fluor ou intégrer un revêtement interne résistant aux graisses." },
      { q: "Défaut d'étanchéité du thermoscellage", a: "Les fibres de kraft naturel font barrière à la chaleur, entraînant des soudures fragiles ou des fuites sur les lignes de conditionnement. Solution : Optimiser l'épaisseur de la couche thermoscellable et ajuster le temps de scellage." },
      { q: "Sensibilité aux déchirures et perforations", a: "Le papier kraft basse barrière est sensible aux perforations et aux déchirures en cas de manipulation brutale. Solution : Utiliser du papier kraft vierge à fibres longues pour maximiser la résistance à la traction." },
      { q: "Bavures d'encre sur papier poreux", a: "La surface poreuse du kraft absorbe l'encre de manière inégale, rendant les graphiques flous ou sujets aux frottements. Solution : Utiliser des encres flexographiques à l'eau avec un traitement Corona avant impression." }
    ]
  },
  'zh-TW': {
    title: "低阻隔牛皮紙袋的 5 個常見問題（與工程解決方案）",
    points: [
      { q: "水分滲透與受潮變軟", a: "標準低阻隔牛皮紙防潮性不足，易導致烘焙食品或餅乾因吸收水汽而迅速失去酥脆口感。解決方案：複合微米級食品級內襯薄膜（如 LDPE 或生物基 PLA）以封閉紙張孔隙，延長保鮮期。" },
      { q: "油漬滲出與外觀污損", a: "烘焙食品中的油脂容易滲透紙張，在紙袋表面形成不美觀的油斑。解決方案：採用無氟環保防油處理或複合高防油性內襯，確保包裝外觀整潔。" },
      { q: "熱封強度不足與漏氣", a: "天然牛皮紙防阻隔力弱，且纖維粗厚具有隔熱作用，易導致填充線上封口熱量傳導不均。解決方案：優化熱封層厚度並設定精確的熱封壓力與時間，以達成均勻且氣密的熔合封口。" },
      { q: "搬運過程撕裂與破損", a: "低阻隔牛皮紙在粗暴裝卸或物流運輸的劇烈震動下容易發生穿刺與撕裂。解決方案：選用高強度長纖維純針葉樹牛皮紙，顯著提升抗張強度與耐穿刺性。" },
      { q: "多孔紙面導致印刷暈染", a: "天然牛皮紙的多孔性表面易使墨水不均勻吸收，造成圖案模糊或油墨摩擦脫落。解決方案：採用印前電暈活化處理，並配合專用水性環保柔版油墨，將圖案牢固鎖在紙面上。" }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'pain-points', translationKey: 'title' }
];

export const sectionsForAchieve = [
  { id: 'pain-points', translationKey: 'title' }
];

const KraftLowBarrierPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const p = 'seoPages.pages.kraftLowBarrier';
  const currentLang = i18n.language || 'en';
  const tPain = translations[currentLang as keyof typeof translations] || translations.en;
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Kraft Low Barrier packaging</strong> combines the natural aesthetic of kraft paper with basic moisture protection, ideal for dry goods and products with shorter shelf life requirements.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Natural kraft paper appearance with rustic appeal</li>
              <li>• Basic moisture barrier protection (3-6 month shelf life)</li>
              <li>• Cost-effective solution for dry products</li>
              <li>• Excellent printability for branding</li>
              <li>• Recyclable and sustainable material</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Perfect for bakery items, dry snacks, coffee beans (short-term), nuts, granola, and other low-moisture products that don't require extended shelf life.
          </p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our kraft low barrier structure provides basic protection for short-to-medium shelf life products.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Material Structure</h4>
              <p className="text-sm">Kraft Paper / Low-Density PE coating</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• 70-100g kraft paper base</li>
                <li>• Food-safe PE inner layer</li>
                <li>• Heat-sealable construction</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Barrier Properties</h4>
              <p className="text-sm">Low oxygen and moisture protection</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• MVTR: 5-10 g/m²/day</li>
                <li>• OTR: 100-200 cc/m²/day</li>
                <li>• Shelf life: 3-6 months</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Stand-up pouches</li>
                <li>• Flat bottom bags</li>
                <li>• Side gusset bags</li>
                <li>• Flat pouches</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Customization</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Digital or plate printing</li>
                <li>• Zip lock closures</li>
                <li>• Tear notches</li>
                <li>• Custom sizes</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Kraft low barrier packaging is perfect for products that don't require extended protection from oxygen and moisture.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Bread & bakery products',
              'Cookies & biscuits',
              'Granola & cereal',
              'Roasted nuts (short-term)',
              'Dry herbs & spices',
              'Coffee beans (2-3 months)',
              'Popcorn & snacks',
              'Flour & baking mixes',
              'Pasta & noodles',
              'Tea bags',
              'Pet treats',
              'Confectionery'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'advantages',
      title: 'Advantages & Limitations',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Best For</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ Low-moisture dry products</li>
                <li>✓ Short shelf life requirements (3-6 months)</li>
                <li>✓ Cost-sensitive applications</li>
                <li>✓ Eco-conscious brands seeking natural look</li>
                <li>✓ Bakery and snack foods</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Considerations</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Not suitable for moisture-sensitive products</li>
                <li>• Limited oxygen barrier</li>
                <li>• Shorter shelf life than high barrier options</li>
                <li>• Not recommended for fatty/oily products</li>
                <li>• May require inner liner for greasy items</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // ========== Scenario (Industry Applications) ==========
    {
      id: 'industry-scenarios',
      title: 'Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Kraft low barrier is the most sustainable kraft option, perfect for dry goods with short turnover:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">Bakery & Confectionery</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• <strong>Artisan Bread:</strong> Breathable kraft bags</li>
                <li>• <strong>Cookies:</strong> Quick turnover products</li>
                <li>• <strong>Pastries:</strong> Short shelf life items</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">Natural look for artisan products</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">Dry Goods & Grains</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• <strong>Flour & Baking Mixes:</strong> Cost-effective packaging</li>
                <li>• <strong>Pasta:</strong> Dry product protection</li>
                <li>• <strong>Rice & Grains:</strong> Bulk packaging</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">Most recyclable kraft option</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">Eco-Conscious Brands</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• <strong>Zero-Waste Stores:</strong> Refill packaging</li>
                <li>• <strong>Farmers Markets:</strong> Local produce bags</li>
                <li>• <strong>Organic Brands:</strong> Natural positioning</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">Strongest sustainability story</span>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" />
              Customer Success Stories
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-amber-600 uppercase">Artisan Bakery Chain</span>
                <p className="text-sm text-neutral-700 mt-2">"Switched all our bread bags to kraft low barrier. Customers love the natural look and often reuse the bags. Perfect for our daily fresh-baked products."</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">Zero-Waste Store</span>
                <p className="text-sm text-neutral-700 mt-2">"Kraft pouches align perfectly with our sustainability mission. Customers can recycle them with paper waste or even compost PE-free versions."</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Data (Market & Performance Data) ==========
    {
      id: 'market-data',
      title: 'MarketData Market & Performance Data',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">70%</p>
              <p className="text-sm opacity-90">Renewable Content</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">3-6</p>
              <p className="text-sm opacity-90">Months Shelf Life</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">-70%</p>
              <p className="text-sm opacity-90">CO₂ vs Plastic</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">FSC</p>
              <p className="text-sm opacity-90">Certified Available</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">Low Barrier Kraft Specifications</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Property</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Value</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Structure</td>
                    <td className="px-4 py-3">Kraft / PE coating</td>
                    <td className="px-4 py-3">Simple 2-layer</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Kraft Weight</td>
                    <td className="px-4 py-3">70-100g</td>
                    <td className="px-4 py-3">Standard paper weight</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">MVTR</td>
                    <td className="px-4 py-3">5-10 g/m²/day</td>
                    <td className="px-4 py-3">Basic moisture barrier</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">OTR</td>
                    <td className="px-4 py-3">100-200 cc/m²/day</td>
                    <td className="px-4 py-3">Limited oxygen barrier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3">3-6 months</td>
                    <td className="px-4 py-3">For dry products</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Sustainability Benefits</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">70%+</p>
                <p className="text-sm text-green-600">Renewable kraft content</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">Paper</p>
                <p className="text-sm text-green-600">Recycling stream compatible</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-700">-70%</p>
                <p className="text-sm text-green-600">CO₂ vs plastic bags</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Contrast (Material Comparison) ==========
    {
      id: 'material-comparison',
      title: 'Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">Compare kraft low barrier with other kraft and eco options:</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">Kraft Barrier Levels Comparison</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Criteria</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">Low Barrier</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">Medium Barrier</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-700">High Barrier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Best Products</td>
                    <td className="px-4 py-3 text-center">Bakery, dry goods</td>
                    <td className="px-4 py-3 text-center">Coffee, nuts, snacks</td>
                    <td className="px-4 py-3 text-center">Pharma, freeze-dried</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Shelf Life</td>
                    <td className="px-4 py-3 text-center">3-6 months</td>
                    <td className="px-4 py-3 text-center">6-12 months</td>
                    <td className="px-4 py-3 text-center">12-24+ months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Sustainability</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐⭐⭐ Best</td>
                    <td className="px-4 py-3 text-center">⭐⭐⭐</td>
                    <td className="px-4 py-3 text-center">⭐⭐</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Cost</td>
                    <td className="px-4 py-3 text-center text-green-600">$ Lowest</td>
                    <td className="px-4 py-3 text-center">$$ Mid</td>
                    <td className="px-4 py-3 text-center">$$$ Premium</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Recyclability</td>
                    <td className="px-4 py-3 text-center text-green-600">✓ Paper stream</td>
                    <td className="px-4 py-3 text-center text-amber-600">△ Limited</td>
                    <td className="px-4 py-3 text-center text-red-600">✗ Not recyclable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 Quick Decision Guide</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-700">Choose Low Barrier if:</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• Dry goods with short shelf life</li>
                  <li>• Sustainability is top priority</li>
                  <li>• Budget-conscious packaging</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Choose Medium Barrier if:</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• Need 6-12 month protection</li>
                  <li>• Coffee, nuts, premium snacks</li>
                  <li>• <Link to="/materials/kraft-medium-barrier" className="underline">Learn more →</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-700">Choose High Barrier if:</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• Maximum shelf life needed</li>
                  <li>• Sensitive products</li>
                  <li>• <Link to="/materials/kraft-high-barrier" className="underline">Learn more →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Kraft paper is one of the most sustainable packaging materials available today.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Renewable Material</h4>
              <p className="text-sm text-green-700">Made from sustainably sourced wood fibers. FSC certified options available.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable</h4>
              <p className="text-sm text-blue-700">Paper components can be recycled in standard paper recycling streams.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Lower Carbon Footprint</h4>
              <p className="text-sm text-amber-700">70% less CO₂ emissions compared to plastic packaging.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tPain.title,
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src="/imgs/knowledge/kraft-low-barrier-pain-points.jpg" 
                alt={tPain.title}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              {tPain.points.map((pt: any, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{pt.q}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{pt.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'kraft low barrier packaging',
        'kraft paper pouches',
        'eco-friendly paper bags'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-low-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft low barrier paper pouches for dry goods and bakery products"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  );
};

export default KraftLowBarrierPage;
