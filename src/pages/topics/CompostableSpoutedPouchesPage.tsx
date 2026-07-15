import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Compostable Spouted Pouches | Engineering Premium Sustainable Packaging",
    description: "Discover technical solutions for compostable spouted pouches. We engineer high-barrier, leak-proof sustainable packaging that meets stringent compliance and operational efficiency.",
    heroTitle: "Engineering Flawless Compostable Spouted Pouches",
    empathyHook: "Transitioning to compostable packaging shouldn't mean compromising on barrier properties or enduring high defect rates. We solve the technical challenges of biopolymer sealing, ensuring your spouted pouches perform perfectly from the filling line to the consumer's hands.",
    point1Title: "Biopolymer Heat Seal Integrity",
    point1Desc: "Compostable films have narrower sealing temperature windows compared to traditional plastics, often leading to weak seals or melted spouts during high-speed production.",
    point1Sol: "We utilize multi-layer laminated PLA/PBAT structures with calibrated heat-seal layers, ensuring perfect spout adhesion at lower temperatures without sacrificing production speeds.",
    point2Title: "Oxygen & Moisture Barrier Failures",
    point2Desc: "Standard compostable materials typically lack the extreme barrier properties required for liquid or semi-liquid products, resulting in premature spoilage.",
    point2Sol: "Our engineered pouches incorporate advanced metallized cellulose or aluminum-oxide coated biopolymers (AlOx), achieving OTR and WVTR levels comparable to conventional multi-layer foils.",
    point3Title: "Delamination in High-Acidity Products",
    point3Desc: "Adhesives used in compostable lamination can break down when exposed to acidic contents like fruit purees or certain beverages, causing layer separation.",
    point3Sol: "We apply proprietary, industrial-compostable solvent-free adhesives specifically formulated for aggressive environments, guaranteeing structural integrity throughout the shelf life.",
    point4Title: "Spout Insertion Leaks",
    point4Desc: "Integrating rigid compostable spouts into flexible biopolymer films often results in micro-capillary leaks at the gusset transition zones.",
    point4Sol: "Our custom tooling utilizes precision ultrasonic welding and tailored spout fitments, virtually eliminating capillary channels and ensuring a 100% leak-proof hermetic seal.",
    point5Title: "Compliance & Certification Hurdles",
    point5Desc: "Navigating the complex landscape of EN 13432, ASTM D6400, and OK Compost certifications can delay product launches and risk regulatory fines.",
    point5Sol: "Every material layer, adhesive, and spout we use is pre-certified. We provide full traceability and technical documentation, ensuring your packaging meets global industrial composting standards.",
    compTitle: "Why Engineering Matters in Compostable Packaging",
    compDesc: "A comparison between standard compostable approaches and our engineered, zero-failure packaging methodology.",
    faq1Q: "Can compostable spouted pouches handle hot-fill processes?",
    faq1A: "Yes. While standard PLA has low heat resistance, we engineer our high-temperature compostable pouches using crystallized biopolymers (CPLA) and specialized adhesives, capable of withstanding hot-fill temperatures up to 85°C (185°F) without deformation or seal failure.",
    faq2Q: "What is the typical shelf life for liquid products in your compostable pouches?",
    faq2A: "Shelf life depends on the product's sensitivity to oxygen and moisture. With our high-barrier AlOx-coated compostable films, we consistently achieve 9 to 12 months of shelf life for standard liquid and paste products, matching many conventional plastic structures.",
    faq3Q: "Are the spout and cap also fully compostable?",
    faq3A: "Absolutely. A pouch cannot be certified compostable if the fitment isn't. We use injection-molded biopolymers for both the spout and the cap that comply with industrial composting standards (ASTM D6400 / EN 13432), ensuring the entire package breaks down completely."
  },
  es: {
    title: "Bolsas con Boquilla Compostables | Ingeniería en Empaques Sostenibles Premium",
    description: "Descubra soluciones técnicas para bolsas con boquilla compostables. Diseñamos empaques sostenibles de alta barrera y a prueba de fugas que cumplen con el cumplimiento normativo y la eficiencia operativa.",
    heroTitle: "Ingeniería de Bolsas con Boquilla Compostables Impecables",
    empathyHook: "La transición a empaques compostables no debería significar comprometer las propiedades de barrera o soportar altas tasas de defectos. Resolvemos los desafíos técnicos del sellado de biopolímeros, garantizando que sus bolsas funcionen perfectamente desde la línea de llenado hasta las manos del consumidor.",
    point1Title: "Integridad del Sellado Térmico de Biopolímeros",
    point1Desc: "Las películas compostables tienen ventanas de temperatura de sellado más estrechas en comparación con los plásticos tradicionales, lo que a menudo resulta en sellos débiles o boquillas derretidas durante la producción a alta velocidad.",
    point1Sol: "Utilizamos estructuras laminadas multicapa de PLA/PBAT con capas de sellado térmico calibradas, asegurando una adhesión perfecta de la boquilla a temperaturas más bajas sin sacrificar la velocidad de producción.",
    point2Title: "Fallas de Barrera contra Oxígeno y Humedad",
    point2Desc: "Los materiales compostables estándar suelen carecer de las propiedades extremas de barrera requeridas para productos líquidos o semilíquidos, lo que provoca un deterioro prematuro.",
    point2Sol: "Nuestras bolsas incorporan celulosa metalizada avanzada o biopolímeros recubiertos de óxido de aluminio (AlOx), alcanzando niveles de OTR y WVTR comparables a las láminas multicapa convencionales.",
    point3Title: "Delaminación en Productos de Alta Acidez",
    point3Desc: "Los adhesivos utilizados en la laminación compostable pueden degradarse cuando se exponen a contenidos ácidos como purés de frutas, causando la separación de las capas.",
    point3Sol: "Aplicamos adhesivos patentados sin solventes, aptos para compostaje industrial, formulados específicamente para entornos agresivos, garantizando la integridad estructural en todo momento.",
    point4Title: "Fugas por Inserción de la Boquilla",
    point4Desc: "La integración de boquillas rígidas en películas de biopolímeros flexibles a menudo resulta en fugas microcapilares en las zonas de transición de los fuelles.",
    point4Sol: "Nuestras herramientas personalizadas utilizan soldadura ultrasónica de precisión y accesorios de boquilla a medida, eliminando los canales capilares y asegurando un sello hermético 100% a prueba de fugas.",
    point5Title: "Obstáculos de Cumplimiento y Certificación",
    point5Desc: "Navegar por el complejo panorama de las certificaciones EN 13432, ASTM D6400 y OK Compost puede retrasar los lanzamientos de productos y arriesgar multas regulatorias.",
    point5Sol: "Cada capa de material, adhesivo y boquilla que utilizamos está precertificado. Proporcionamos trazabilidad completa y documentación técnica, asegurando que su empaque cumpla con los estándares mundiales.",
    compTitle: "Por Qué Importa la Ingeniería en Empaques Compostables",
    compDesc: "Una comparación entre los enfoques compostables estándar y nuestra metodología de empaque de ingeniería, con cero fallas.",
    faq1Q: "¿Pueden las bolsas con boquilla compostables soportar procesos de llenado en caliente?",
    faq1A: "Sí. Mientras que el PLA estándar tiene baja resistencia al calor, diseñamos nuestras bolsas utilizando biopolímeros cristalizados (CPLA) capaces de soportar temperaturas de llenado en caliente de hasta 85°C (185°F) sin deformación ni falla del sello.",
    faq2Q: "¿Cuál es la vida útil típica de los productos líquidos en sus bolsas compostables?",
    faq2A: "La vida útil depende de la sensibilidad del producto al oxígeno y la humedad. Con nuestras películas de alta barrera con recubrimiento de AlOx, logramos consistentemente de 9 a 12 meses de vida útil para productos líquidos, igualando muchas estructuras de plástico convencionales.",
    faq3Q: "¿La boquilla y la tapa también son totalmente compostables?",
    faq3A: "Absolutamente. Una bolsa no puede ser certificada como compostable si el accesorio no lo es. Utilizamos biopolímeros moldeados por inyección para la boquilla y la tapa que cumplen con los estándares de compostaje industrial (ASTM D6400 / EN 13432)."
  },
  fr: {
    title: "Gourdes à Bec Compostables | Ingénierie d'Emballages Durables Premium",
    description: "Découvrez des solutions techniques pour les gourdes à bec compostables. Nous concevons des emballages durables à haute barrière et étanches qui répondent à la conformité et à l'efficacité opérationnelle.",
    heroTitle: "L'Ingénierie des Gourdes à Bec Compostables Sans Défaut",
    empathyHook: "Passer aux emballages compostables ne devrait pas signifier compromettre les propriétés de barrière ou subir des taux de défauts élevés. Nous résolvons les défis techniques du scellage des biopolymères, garantissant une performance parfaite de la ligne de remplissage aux mains du consommateur.",
    point1Title: "Intégrité du Thermoscellage des Biopolymères",
    point1Desc: "Les films compostables ont des fenêtres de température de scellage plus étroites que les plastiques traditionnels, entraînant souvent des scellages faibles ou des becs fondus.",
    point1Sol: "Nous utilisons des structures multicouches PLA/PBAT avec des couches de thermoscellage calibrées, assurant une adhésion parfaite du bec à des températures plus basses sans sacrifier les vitesses de production.",
    point2Title: "Défaillances de la Barrière à l'Oxygène et à l'Humidité",
    point2Desc: "Les matériaux compostables standard manquent généralement des propriétés de barrière extrêmes requises pour les liquides, entraînant une détérioration prématurée.",
    point2Sol: "Nos gourdes intègrent des biopolymères avancés recouverts de cellulose métallisée ou d'oxyde d'aluminium (AlOx), atteignant des niveaux d'OTR et de WVTR comparables aux films conventionnels.",
    point3Title: "Délaminage dans les Produits à Haute Acidité",
    point3Desc: "Les adhésifs utilisés dans la lamination compostable peuvent se dégrader lorsqu'ils sont exposés à des contenus acides, provoquant la séparation des couches.",
    point3Sol: "Nous appliquons des adhésifs exclusifs sans solvant, compostables industriellement, formulés pour des environnements agressifs, garantissant l'intégrité structurelle tout au long de la durée de conservation.",
    point4Title: "Fuites lors de l'Insertion du Bec",
    point4Desc: "L'intégration de becs rigides dans des films de biopolymères flexibles entraîne souvent des fuites microcapillaires aux zones de transition des soufflets.",
    point4Sol: "Notre outillage sur mesure utilise le soudage par ultrasons de précision, éliminant les canaux capillaires et assurant un scellement hermétique 100 % étanche.",
    point5Title: "Obstacles de Conformité et de Certification",
    point5Desc: "Naviguer dans le paysage complexe des certifications EN 13432, ASTM D6400 et OK Compost peut retarder les lancements de produits et risquer des amendes.",
    point5Sol: "Chaque couche de matériau, adhésif et bec que nous utilisons est pré-certifiée. Nous fournissons une traçabilité complète et la documentation technique nécessaire.",
    compTitle: "Pourquoi l'Ingénierie est Cruciale pour les Emballages Compostables",
    compDesc: "Une comparaison entre les approches compostables standard et notre méthodologie d'emballage d'ingénierie sans défaut.",
    faq1Q: "Les gourdes à bec compostables peuvent-elles supporter les processus de remplissage à chaud ?",
    faq1A: "Oui. Bien que le PLA standard ait une faible résistance à la chaleur, nous concevons nos gourdes à l'aide de biopolymères cristallisés (CPLA) capables de supporter des températures de remplissage à chaud jusqu'à 85°C sans déformation.",
    faq2Q: "Quelle est la durée de conservation typique des produits liquides dans vos gourdes compostables ?",
    faq2A: "La durée de conservation dépend de la sensibilité du produit. Avec nos films haute barrière revêtus d'AlOx, nous obtenons constamment 9 à 12 mois de durée de conservation pour les liquides, égalant de nombreuses structures plastiques.",
    faq3Q: "Le bec et le bouchon sont-ils également entièrement compostables ?",
    faq3A: "Absolument. Une gourde ne peut être certifiée compostable si l'accessoire ne l'est pas. Nous utilisons des biopolymères moulés par injection pour le bec et le bouchon qui respectent les normes de compostage industriel (ASTM D6400 / EN 13432)."
  },
  "zh-tw": {
    title: "可堆肥吸嘴袋 | 頂級環保包裝工程",
    description: "探索可堆肥吸嘴袋的專業技術解決方案。我們設計的高阻隔、防漏環保包裝，完全符合嚴格的法規並兼顧生產效率。",
    heroTitle: "打造零缺陷的可堆肥吸嘴袋",
    empathyHook: "轉向可堆肥包裝不應意味著妥協於阻隔性能或忍受高瑕疵率。我們解決了生物聚合物封口的技術難題，確保您的吸嘴袋從充填線到消費者手中都能完美表現。",
    point1Title: "生物聚合物熱封完整性",
    point1Desc: "與傳統塑膠相比，可堆肥薄膜的封口溫度範圍較窄，在高速生產過程中容易導致封口不牢或吸嘴熔化。",
    point1Sol: "我們採用多層層壓 PLA/PBAT 結構及精確校準的熱封層，確保在較低溫度下實現完美的吸嘴貼合，且不影響生產速度。",
    point2Title: "氧氣與水氣阻隔失效",
    point2Desc: "標準的可堆肥材料通常缺乏液體或半液體產品所需的極限阻隔性能，導致產品提早變質。",
    point2Sol: "我們的袋子結合了先進的金屬化纖維素或氧化鋁 (AlOx) 塗層生物聚合物，達到與傳統多層鋁箔相當的 OTR 和 WVTR 數值。",
    point3Title: "高酸性產品導致的分層",
    point3Desc: "可堆肥層壓所使用的黏合劑在接觸到如水果泥或特定飲料等酸性內容物時容易降解，造成包裝分層。",
    point3Sol: "我們應用專利工業可堆肥無溶劑黏合劑，專為嚴苛環境配製，保證整個保存期限內的結構完整性。",
    point4Title: "吸嘴嵌入漏液",
    point4Desc: "將硬質可堆肥吸嘴嵌入柔性生物聚合物薄膜時，經常在折邊過渡區產生微細毛細管漏液。",
    point4Sol: "我們客製化的模具採用精密超音波焊接和量身訂做的吸嘴配件，幾乎消除了毛細管通道，確保 100% 防漏的氣密密封。",
    point5Title: "合規與認證障礙",
    point5Desc: "應對 EN 13432、ASTM D6400 和 OK Compost 等複雜的認證標準，可能會延誤產品上市並面臨法規罰款的風險。",
    point5Sol: "我們使用的每一層材料、黏合劑和吸嘴均已預先認證。我們提供完整的可追溯性和技術文件，確保包裝符合全球工業堆肥標準。",
    compTitle: "為什麼工程設計對可堆肥包裝至關重要",
    compDesc: "比較標準可堆肥方案與我們零缺陷包裝工程方法的差異。",
    faq1Q: "可堆肥吸嘴袋能夠承受熱充填製程嗎？",
    faq1A: "可以。雖然標準 PLA 的耐熱性較低，但我們使用結晶生物聚合物 (CPLA) 和專用黏合劑設計的耐高溫可堆肥袋，可承受高達 85°C (185°F) 的熱充填溫度，不會變形或封口失效。",
    faq2Q: "您們的可堆肥袋對於液體產品的一般保存期限是多久？",
    faq2A: "保存期限取決於產品對氧氣和濕氣的敏感度。採用我們的高阻隔 AlOx 塗層可堆肥薄膜，標準液體和糊狀產品通常可達到 9 到 12 個月的保存期限，媲美許多傳統塑膠結構。",
    faq3Q: "吸嘴和瓶蓋也都是完全可堆肥的嗎？",
    faq3A: "絕對是的。如果配件不可堆肥，包裝袋就無法獲得可堆肥認證。我們的吸嘴和瓶蓋均採用符合工業堆肥標準 (ASTM D6400 / EN 13432) 的射出成型生物聚合物製造，確保整個包裝都能完全分解。"
  }
};

const PAGE_NAME = "CompostableSpoutedPouchesPage";

export default function CompostableSpoutedPouchesPage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const tLocalRaw = localTranslations[currentLang as keyof typeof localTranslations];
  const tLocal: any = (tLocalRaw && Object.keys(tLocalRaw).length > 0) ? tLocalRaw : localTranslations.en;
  const isPouchDomain = getDomain() === 'pouch';

  return (
    <SEOPageLayout title={tLocal.title} description={tLocal.description}>
      <Helmet>
        <title>{tLocal.title}</title>
        <meta name="description" content={tLocal.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Technical Engineering Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {tLocal.heroTitle}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {tLocal.empathyHook}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Pain Points Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">5 Manufacturing Pain Points & Engineering Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: tLocal.point1Title, desc: tLocal.point1Desc, sol: tLocal.point1Sol, icon: Factory },
              { title: tLocal.point2Title, desc: tLocal.point2Desc, sol: tLocal.point2Sol, icon: ShieldCheck },
              { title: tLocal.point3Title, desc: tLocal.point3Desc, sol: tLocal.point3Sol, icon: Building2 },
              { title: tLocal.point4Title, desc: tLocal.point4Desc, sol: tLocal.point4Sol, icon: Leaf },
              { title: tLocal.point5Title, desc: tLocal.point5Desc, sol: tLocal.point5Sol, icon: Factory }
            ].map((point, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-neutral-700" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{point.desc}</p>
                <div className={`p-3 rounded-lg ${isPouchDomain ? 'bg-[#D4FF00]/10 border border-[#D4FF00]/20' : 'bg-primary-50 border border-primary-100'}`}>
                  <p className={`text-sm font-medium ${isPouchDomain ? 'text-neutral-900' : 'text-primary-900'}`}>
                    <span className="block text-xs uppercase tracking-wider opacity-70 mb-1">Solution</span>
                    {point.sol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-20 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{tLocal.compTitle}</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl">{tLocal.compDesc}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-4 rounded-tl-lg font-semibold">Parameter</th>
                  <th className="p-4 font-semibold border-l border-neutral-700">Standard Approach</th>
                  <th className="p-4 rounded-tr-lg font-semibold border-l border-neutral-700">Achieve Pack Engineered</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Material Integrity</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High failure rate under stress</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Zero-failure structural mapping</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Compliance</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">Often misses localized FDA/EU requirements</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">100% Guaranteed Certification</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900">Unit Cost Impact</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High waste yields expensive per-unit cost</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Optimized layout reduces material waste by 14%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Technical FAQ</h2>
          <div className="space-y-4">
            {[
              { q: tLocal.faq1Q, a: tLocal.faq1A },
              { q: tLocal.faq2Q, a: tLocal.faq2A },
              { q: tLocal.faq3Q, a: tLocal.faq3A }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="p-6 font-semibold text-lg cursor-pointer marker:text-transparent flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  {faq.q}
                  <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Ryan's Profile */}
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-10 text-white max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full bg-neutral-800 border-4 border-primary-500/30 overflow-hidden shrink-0">
              <img src="/imgs/about/ryan-wong.webp" alt="Ryan Wong" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ryan Wong</h3>
              <p className="text-primary-400 font-medium mb-4">Co-Founder & Chief Packaging Engineer</p>
              <div className="inline-block bg-white/10 rounded px-3 py-1 text-sm font-mono mb-4 border border-white/20">
                14+ Years Experience | GRS & FSC Auditing Expert
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Specializing in polymer structures, sustainable material transitions, and high-speed VFFS line optimizations. Helping 500+ global brands scale from prototype to industrial production with zero defect tolerances.
              </p>
              <a href="https://calendly.com/achievepack" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Schedule a Packaging Audit
              </a>
            </div>
          </div>
        </div>

      </div>
    </SEOPageLayout>
  );
}
