import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Cosmetic Cleanser Three Side Zipper Pouch | Premium Packaging Solutions",
    description: "Engineer-grade three side zipper pouches designed for cosmetic cleansers. Leak-proof sealing, exceptional barrier properties, and brand-enhancing aesthetic appeal.",
    heroTitle: "Premium Three Side Zipper Pouches for Cosmetic Cleansers",
    empathyHook: "Frustrated by cosmetic packaging that leaks during transit or loses its visual appeal on the shelf? Your cleanser formulation deserves packaging that ensures uncompromising product integrity and a premium unboxing experience.",
    point1Title: "Advanced Leak-Proof Sealing Technology",
    point1Desc: "Cosmetic cleansers, especially low-viscosity formulations, are prone to capillary leakage through weak seals.",
    point1Sol: "Our pouches utilize precision-engineered tri-laminate structures and calibrated heat-sealing parameters to guarantee zero leakage under extreme transportation stress.",
    point2Title: "Superior Chemical Resistance",
    point2Desc: "Active ingredients in cleansers can degrade standard packaging materials, leading to delamination or discoloration.",
    point2Sol: "We employ specialized inner barrier films (e.g., customized PE/CPP blends) formulated to resist harsh surfactants, preserving both the pouch integrity and the formula's efficacy.",
    point3Title: "Precision Zipper Reclosability",
    point3Desc: "Consumers often struggle with zippers that clog with product or fail to reseal securely, causing premature spoilage.",
    point3Sol: "Equipped with engineered flange zippers that clear product residue easily and snap shut definitively, extending shelf life and enhancing user satisfaction.",
    point4Title: "High-Fidelity Custom Printing",
    point4Desc: "In the highly competitive cosmetic market, ordinary printing fails to communicate a premium brand identity.",
    point4Sol: "We offer rotogravure and high-definition digital printing with matte, gloss, or spot UV finishes to ensure your brand stands out with vibrant, scratch-resistant graphics.",
    point5Title: "Optimized Volumetric Efficiency",
    point5Desc: "Rigid bottles waste space during shipping and storage, significantly increasing your logistics costs.",
    point5Sol: "The three-side seal design provides maximum interior volume with minimal material usage, drastically reducing your carbon footprint and shipping expenses.",
    compTitle: "Why Choose Achieve Pack for Cosmetic Pouches?",
    compDesc: "We combine material science with state-of-the-art manufacturing to deliver cosmetic packaging that meets rigorous quality standards. From prototype to mass production, our engineers work alongside your brand to ensure flawless execution and reliable delivery.",
    faq1Q: "Can the pouch handle products with high surfactant or alcohol content?",
    faq1A: "Yes. We customize the sealant layer depending on your MSDS (Material Safety Data Sheet) to ensure complete chemical compatibility and prevent any delamination.",
    faq2Q: "What are the MOQ (Minimum Order Quantity) requirements for custom printed pouches?",
    faq2A: "Our digital printing capabilities allow for low MOQs starting at 1,000 units, making it ideal for market testing or limited-edition runs, while our rotogravure lines efficiently handle orders exceeding 100,000 units.",
    faq3Q: "Are sustainable or recyclable material options available?",
    faq3A: "Absolutely. We offer mono-material PE structures and PCR (Post-Consumer Recycled) films that maintain high barrier properties while meeting your brand's sustainability goals."
  },
  es: {
    title: "Bolsas de Tres Lados con Cierre para Limpiadores Cosméticos | Empaques Premium",
    description: "Bolsas de tres lados con cierre diseñadas para limpiadores cosméticos con grado de ingeniería. Sellado a prueba de fugas, propiedades de barrera excepcionales y atractivo visual que realza la marca.",
    heroTitle: "Bolsas Premium de Tres Lados con Cierre para Limpiadores Cosméticos",
    empathyHook: "¿Frustrado por envases cosméticos que gotean durante el tránsito o pierden su atractivo en el estante? Su formulación de limpiador merece un empaque que garantice la integridad del producto y una experiencia de desempaque premium.",
    point1Title: "Tecnología Avanzada de Sellado Antifugas",
    point1Desc: "Los limpiadores cosméticos, especialmente las fórmulas de baja viscosidad, son propensos a fugas capilares a través de sellos débiles.",
    point1Sol: "Nuestras bolsas utilizan estructuras trilaminadas de alta precisión y parámetros de termosellado calibrados para garantizar cero fugas bajo estrés extremo de transporte.",
    point2Title: "Resistencia Química Superior",
    point2Desc: "Los ingredientes activos en los limpiadores pueden degradar los materiales de empaque estándar, causando delaminación o decoloración.",
    point2Sol: "Empleamos películas de barrera interior especializadas (por ejemplo, mezclas personalizadas de PE/CPP) formuladas para resistir surfactantes agresivos, preservando tanto la integridad de la bolsa como la eficacia de la fórmula.",
    point3Title: "Cierre a Presión de Alta Precisión",
    point3Desc: "Los consumidores a menudo luchan con cierres que se obstruyen con el producto o no vuelven a sellar de manera segura, causando deterioro prematuro.",
    point3Sol: "Equipadas con cierres diseñados para eliminar fácilmente los residuos del producto y cerrar de manera definitiva, extendiendo la vida útil y mejorando la satisfacción del usuario.",
    point4Title: "Impresión Personalizada de Alta Fidelidad",
    point4Desc: "En el mercado cosmético altamente competitivo, la impresión ordinaria no logra comunicar una identidad de marca premium.",
    point4Sol: "Ofrecemos rotograbado e impresión digital de alta definición con acabados mate, brillante o UV localizado para asegurar que su marca destaque con gráficos vibrantes y resistentes a los arañazos.",
    point5Title: "Eficiencia Volumétrica Optimizada",
    point5Desc: "Las botellas rígidas desperdician espacio durante el envío y almacenamiento, aumentando significativamente sus costos logísticos.",
    point5Sol: "El diseño de sello de tres lados proporciona el máximo volumen interior con un uso mínimo de material, reduciendo drásticamente su huella de carbono y los gastos de envío.",
    compTitle: "¿Por qué elegir Achieve Pack para bolsas cosméticas?",
    compDesc: "Combinamos la ciencia de los materiales con la fabricación de vanguardia para ofrecer empaques cosméticos que cumplen con rigurosos estándares de calidad. Desde el prototipo hasta la producción en masa, nuestros ingenieros trabajan junto a su marca para garantizar una ejecución impecable y entrega confiable.",
    faq1Q: "¿Puede la bolsa manejar productos con alto contenido de surfactante o alcohol?",
    faq1A: "Sí. Personalizamos la capa de sellado dependiendo de su MSDS (Hoja de Datos de Seguridad de Materiales) para asegurar una compatibilidad química completa y prevenir cualquier delaminación.",
    faq2Q: "¿Cuáles son los requisitos de MOQ (Cantidad Mínima de Pedido) para bolsas impresas personalizadas?",
    faq2A: "Nuestras capacidades de impresión digital permiten MOQs bajos a partir de 1,000 unidades, ideal para pruebas de mercado, mientras que nuestras líneas de rotograbado manejan de manera eficiente pedidos superiores a 100,000 unidades.",
    faq3Q: "¿Están disponibles opciones de materiales sostenibles o reciclables?",
    faq3A: "Absolutamente. Ofrecemos estructuras monomateriales de PE y películas PCR (Reciclado Post-Consumo) que mantienen altas propiedades de barrera mientras cumplen con los objetivos de sostenibilidad de su marca."
  },
  fr: {
    title: "Sachets à Trois Soudures avec Zip pour Nettoyants Cosmétiques | Emballages Premium",
    description: "Sachets à trois soudures avec zip conçus par des ingénieurs pour les nettoyants cosmétiques. Scellage étanche, barrière exceptionnelle et esthétique valorisant la marque.",
    heroTitle: "Sachets Premium à Trois Soudures avec Zip pour Nettoyants Cosmétiques",
    empathyHook: "Frustré par les emballages cosmétiques qui fuient pendant le transport ou perdent leur attrait en rayon ? La formulation de votre nettoyant mérite un emballage qui garantit l'intégrité du produit et une expérience de déballage haut de gamme.",
    point1Title: "Technologie Avancée de Scellage Étanche",
    point1Desc: "Les nettoyants cosmétiques, en particulier les formulations à faible viscosité, sont sujets aux fuites capillaires à travers des joints faibles.",
    point1Sol: "Nos sachets utilisent des structures tri-laminées de précision et des paramètres de thermoscellage calibrés pour garantir l'absence de fuites sous des contraintes de transport extrêmes.",
    point2Title: "Résistance Chimique Supérieure",
    point2Desc: "Les ingrédients actifs des nettoyants peuvent dégrader les matériaux d'emballage standard, entraînant un délaminage ou une décoloration.",
    point2Sol: "Nous utilisons des films barrières internes spécialisés (ex: mélanges PE/CPP personnalisés) formulés pour résister aux tensioactifs agressifs, préservant ainsi l'intégrité du sachet et l'efficacité de la formule.",
    point3Title: "Fermeture Zip Haute Précision",
    point3Desc: "Les consommateurs ont souvent du mal avec les fermetures éclair qui se bouchent avec le produit ou ne se referment pas correctement, provoquant une détérioration prématurée.",
    point3Sol: "Équipés de zips conçus pour éliminer facilement les résidus de produit et se fermer de manière définitive, prolongeant la durée de conservation et améliorant la satisfaction de l'utilisateur.",
    point4Title: "Impression Personnalisée Haute Fidélité",
    point4Desc: "Dans le marché cosmétique très compétitif, l'impression ordinaire ne parvient pas à communiquer une identité de marque premium.",
    point4Sol: "Nous offrons l'héliogravure et l'impression numérique haute définition avec des finitions mates, brillantes ou vernis sélectif pour que votre marque se démarque avec des graphismes vibrants et résistants aux rayures.",
    point5Title: "Efficacité Volumétrique Optimisée",
    point5Desc: "Les bouteilles rigides gaspillent de l'espace lors de l'expédition et du stockage, augmentant considérablement vos coûts logistiques.",
    point5Sol: "La conception à trois soudures offre un volume intérieur maximal avec une utilisation minimale de matériaux, réduisant considérablement votre empreinte carbone et vos frais d'expédition.",
    compTitle: "Pourquoi Choisir Achieve Pack pour les Sachets Cosmétiques ?",
    compDesc: "Nous combinons la science des matériaux avec une fabrication de pointe pour fournir des emballages cosmétiques qui répondent à des normes de qualité rigoureuses. Du prototype à la production de masse, nos ingénieurs travaillent aux côtés de votre marque pour assurer une exécution sans faille et une livraison fiable.",
    faq1Q: "Le sachet peut-il contenir des produits à forte teneur en tensioactifs ou en alcool ?",
    faq1A: "Oui. Nous personnalisons la couche de scellage en fonction de votre FDS (Fiche de Données de Sécurité) pour assurer une compatibilité chimique totale et prévenir tout délaminage.",
    faq2Q: "Quelles sont les exigences de MOQ (Quantité Minimum de Commande) pour les sachets imprimés personnalisés ?",
    faq2A: "Nos capacités d'impression numérique permettent de faibles MOQ à partir de 1 000 unités, idéales pour les tests sur le marché, tandis que nos lignes d'héliogravure gèrent efficacement les commandes dépassant 100 000 unités.",
    faq3Q: "Des options de matériaux durables ou recyclables sont-elles disponibles ?",
    faq3A: "Absolument. Nous proposons des structures mono-matériaux en PE et des films PCR (recyclés post-consommation) qui maintiennent des propriétés de haute barrière tout en répondant aux objectifs de durabilité de votre marque."
  },
  "zh-tw": {
    title: "化妝品清潔劑三邊封拉鍊袋 | 高級包裝解決方案",
    description: "專為化妝品清潔劑設計的工程級三邊封拉鍊袋。防漏密封、卓越的阻隔性能以及提升品牌價值的視覺吸引力。",
    heroTitle: "化妝品清潔劑專用高級三邊封拉鍊袋",
    empathyHook: "對於在運輸過程中洩漏或在貨架上失去吸引力的化妝品包裝感到沮喪嗎？您的清潔劑配方需要能夠確保產品完整性並提供頂級開箱體驗的包裝。",
    point1Title: "先進的防漏密封技術",
    point1Desc: "化妝品清潔劑，特別是低黏度配方，容易透過薄弱的密封處產生毛細管洩漏。",
    point1Sol: "我們的包裝袋採用精密設計的三層複合結構和精確校準的熱封參數，確保在極端運輸壓力下實現零洩漏。",
    point2Title: "卓越的耐化學性",
    point2Desc: "清潔劑中的活性成分會降解標準包裝材料，導致脫層或變色。",
    point2Sol: "我們採用特殊的內層阻隔膜（如客製化的 PE/CPP 混合物），其配方能夠抵抗強烈表面活性劑，從而保護包裝袋的完整性與配方的功效。",
    point3Title: "高精度拉鍊重複密封",
    point3Desc: "消費者經常因為拉鍊被產品堵塞或無法安全重新密封而感到困擾，這會導致產品過早變質。",
    point3Sol: "配備特殊設計的法蘭拉鍊，可輕鬆清除產品殘留物並確實緊閉，從而延長保質期並提升用戶滿意度。",
    point4Title: "高保真客製化印刷",
    point4Desc: "在競爭激烈的化妝品市場中，普通的印刷無法傳達高級品牌的形象。",
    point4Sol: "我們提供凹版印刷和高畫質數位印刷，並搭配霧面、亮面或局部 UV 表面處理，確保您的品牌以鮮豔、防刮的圖案脫穎而出。",
    point5Title: "最佳化容積效率",
    point5Desc: "硬質瓶在運輸和儲存過程中會浪費空間，顯著增加您的物流成本。",
    point5Sol: "三邊封設計以最少的材料使用量提供最大的內部容積，大幅降低您的碳足跡和運輸費用。",
    compTitle: "為什麼選擇 Achieve Pack 的化妝品包裝袋？",
    compDesc: "我們將材料科學與最先進的製造技術相結合，提供符合嚴格品質標準的化妝品包裝。從原型設計到大量生產，我們的工程師會與您的品牌並肩合作，確保無瑕疵的執行和可靠的交付。",
    faq1Q: "這種包裝袋能裝含有高濃度表面活性劑或酒精的產品嗎？",
    faq1A: "可以的。我們會根據您的 MSDS（物質安全資料表）客製化密封層，以確保完全的化學相容性並防止任何脫層現象。",
    faq2Q: "客製化印刷包裝袋的 MOQ（最低訂購量）是多少？",
    faq2A: "我們的數位印刷技術支援低至 1,000 件的 MOQ，非常適合市場測試或限量版生產；而我們的凹版印刷線則能高效處理超過 100,000 件的訂單。",
    faq3Q: "是否提供永續或可回收的材料選項？",
    faq3A: "當然。我們提供單一材質 PE 結構和 PCR（消費後回收）薄膜，這些材料在保持高阻隔性能的同時，也能實現您品牌的永續發展目標。"
  }
};

const PAGE_NAME = "CosmeticCleanserThreeSideZipperPouchPage";

export default function CosmeticCleanserThreeSideZipperPouchPage() {
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
