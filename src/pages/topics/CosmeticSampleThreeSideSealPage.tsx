import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Cosmetic Sample Three Side Seal Pouches | Premium Trial Packaging",
    description: "Elevate your cosmetic sample distribution with our high-barrier three-side seal pouches. Engineered for product compatibility, flawless aesthetics, and automated filling efficiency.",
    heroTitle: "Precision Three-Side Seal Pouches for Cosmetic Samples",
    empathyHook: "You need your cosmetic samples to perfectly represent your premium brand. But sample leakage, chemical interaction with essential oils, and poor printing quality on small formats can ruin a customer's first impression and slow down your automated filling lines.",
    point1Title: "High-Barrier Material Engineering",
    point1Desc: "Cosmetic formulas often contain aggressive essential oils, alcohol, or active ingredients that can degrade standard packaging films, leading to delamination or product spoilage.",
    point1Sol: "We utilize specialized multi-layer laminate structures, incorporating AL or high-barrier PET/VMPET, engineered specifically for chemical resistance and zero transmission of oxygen and moisture, ensuring formulation integrity.",
    point2Title: "Flawless Micro-Printing & Aesthetics",
    point2Desc: "Trial sizes offer limited real estate for branding and regulatory text. Bleeding ink or low-resolution printing on small pouches diminishes your brand's premium perception.",
    point2Sol: "Our state-of-the-art rotogravure and digital printing technologies achieve ultra-high definition micro-text and vibrant color matching, maximizing brand impact on even the smallest sample sachets.",
    point3Title: "Automated Filling Line Optimization",
    point3Desc: "Inconsistent pouch dimensions, curling edges, or static buildup can cause catastrophic jams on high-speed automated cosmetic filling machines, resulting in costly downtime.",
    point3Sol: "We manufacture with extreme dimensional tolerances and employ anti-static treatments, ensuring perfect flatness and seamless machinability for continuous, high-efficiency automated processing.",
    point4Title: "Secure, Leak-Proof Sealing Integrity",
    point4Desc: "Samples sent via mail or included in promotional kits are subjected to pressure and temperature changes. Weak seals lead to disastrous leaks that destroy other products and brand trust.",
    point4Sol: "Our advanced heat-sealing technology guarantees uniform seal strength across all three sides. We conduct rigorous burst and vacuum testing to ensure 100% leak-proof performance under diverse logistical conditions.",
    point5Title: "Custom Easy-Tear Functionality",
    point5Desc: "Frustrating sample packets that require scissors to open create a poor user experience, directly contradicting the luxury feel of premium cosmetics.",
    point5Sol: "We integrate precision-engineered V-notches and optional laser-scoring for effortless, clean tearing every time, providing a smooth and satisfying opening experience for the end consumer.",
    compTitle: "Why Choose Our Cosmetic Sample Pouches?",
    compDesc: "We bridge the gap between premium aesthetics and rigorous engineering. While standard suppliers offer generic sachets, we deliver tailored, high-performance trial packaging that protects your delicate formulations, runs flawlessly on your lines, and elevates your brand's first impression.",
    faq1Q: "What film structures do you recommend for skincare samples containing active acids or oils?",
    faq1A: "For aggressive formulations, we recommend a robust structure like PET/AL/PE or customized foil-free high-barrier laminates, ensuring maximum chemical resistance and preventing any interaction between the product and the packaging.",
    faq2Q: "Can you maintain high-resolution printing on very small sample sachets?",
    faq2A: "Yes, our advanced printing capabilities allow us to achieve incredibly sharp micro-text and intricate designs, ensuring all regulatory information is legible and your brand identity remains premium on small formats.",
    faq3Q: "Do your three-side seal pouches run efficiently on standard automated filling equipment?",
    faq3A: "Absolutely. Our pouches are engineered with strict dimensional consistency, optimal stiffness, and anti-static properties to prevent curling and ensure seamless feeding, opening, and sealing on high-speed automated lines."
  },
  es: {
    title: "Bolsas de Muestras de Cosméticos con Sello de Tres Lados | Empaque de Prueba Premium",
    description: "Eleve la distribución de sus muestras de cosméticos con nuestras bolsas de sello de tres lados de alta barrera. Diseñadas para compatibilidad de productos, estética impecable y eficiencia de llenado automático.",
    heroTitle: "Bolsas de Sello de Tres Lados de Precisión para Muestras de Cosméticos",
    empathyHook: "Necesita que sus muestras de cosméticos representen perfectamente a su marca premium. Pero las fugas de muestras, la interacción química con aceites esenciales y la mala calidad de impresión en formatos pequeños pueden arruinar la primera impresión de un cliente y ralentizar sus líneas de llenado automatizadas.",
    point1Title: "Ingeniería de Materiales de Alta Barrera",
    point1Desc: "Las fórmulas cosméticas a menudo contienen aceites esenciales agresivos, alcohol o ingredientes activos que pueden degradar las películas de empaque estándar, lo que lleva a la deslaminación o al deterioro del producto.",
    point1Sol: "Utilizamos estructuras laminadas multicapa especializadas, que incorporan AL o PET/VMPET de alta barrera, diseñadas específicamente para resistencia química y cero transmisión de oxígeno y humedad, garantizando la integridad de la formulación.",
    point2Title: "Microimpresión y Estética Impecables",
    point2Desc: "Los tamaños de prueba ofrecen un espacio limitado para la marca y el texto reglamentario. El sangrado de tinta o la impresión de baja resolución en bolsas pequeñas disminuye la percepción premium de su marca.",
    point2Sol: "Nuestras tecnologías de huecograbado e impresión digital de última generación logran microtexto de ultra alta definición y combinación de colores vibrantes, maximizando el impacto de la marca incluso en los sobres de muestra más pequeños.",
    point3Title: "Optimización de la Línea de Llenado Automatizada",
    point3Desc: "Las dimensiones inconsistentes de las bolsas, los bordes rizados o la acumulación estática pueden causar atascos catastróficos en las máquinas automáticas de llenado de cosméticos de alta velocidad, lo que resulta en un costoso tiempo de inactividad.",
    point3Sol: "Fabricamos con tolerancias dimensionales extremas y empleamos tratamientos antiestáticos, asegurando una planitud perfecta y una maquinabilidad perfecta para un procesamiento automatizado continuo y de alta eficiencia.",
    point4Title: "Integridad de Sellado Seguro y a Prueba de Fugas",
    point4Desc: "Las muestras enviadas por correo o incluidas en kits promocionales están sujetas a cambios de presión y temperatura. Los sellos débiles provocan fugas desastrosas que destruyen otros productos y la confianza en la marca.",
    point4Sol: "Nuestra avanzada tecnología de sellado térmico garantiza una resistencia de sellado uniforme en los tres lados. Realizamos rigurosas pruebas de estallido y vacío para garantizar un rendimiento 100% a prueba de fugas bajo diversas condiciones logísticas.",
    point5Title: "Funcionalidad de Desgarro Fácil Personalizada",
    point5Desc: "Los paquetes de muestra frustrantes que requieren tijeras para abrirse crean una mala experiencia de usuario, contradiciendo directamente la sensación de lujo de los cosméticos premium.",
    point5Sol: "Integramos muescas en V diseñadas con precisión y marcado láser opcional para un desgarro limpio y sin esfuerzo en todo momento, brindando una experiencia de apertura suave y satisfactoria para el consumidor final.",
    compTitle: "¿Por Qué Elegir Nuestras Bolsas para Muestras de Cosméticos?",
    compDesc: "Cerramos la brecha entre la estética premium y la ingeniería rigurosa. Mientras que los proveedores estándar ofrecen sobres genéricos, nosotros entregamos empaques de prueba de alto rendimiento hechos a medida que protegen sus delicadas formulaciones, funcionan sin problemas en sus líneas y elevan la primera impresión de su marca.",
    faq1Q: "¿Qué estructuras de película recomienda para muestras de cuidado de la piel que contienen ácidos o aceites activos?",
    faq1A: "Para formulaciones agresivas, recomendamos una estructura robusta como PET/AL/PE o laminados de alta barrera sin aluminio personalizados, lo que garantiza la máxima resistencia química y evita cualquier interacción entre el producto y el empaque.",
    faq2Q: "¿Pueden mantener una impresión de alta resolución en sobres de muestra muy pequeños?",
    faq2A: "Sí, nuestras capacidades de impresión avanzadas nos permiten lograr microtextos increíblemente nítidos y diseños intrincados, asegurando que toda la información reglamentaria sea legible y que la identidad de su marca siga siendo premium en formatos pequeños.",
    faq3Q: "¿Sus bolsas de sello de tres lados funcionan de manera eficiente en equipos de llenado automático estándar?",
    faq3A: "Absolutamente. Nuestras bolsas están diseñadas con una estricta consistencia dimensional, rigidez óptima y propiedades antiestáticas para evitar que se curven y garantizar una alimentación, apertura y sellado sin problemas en líneas automatizadas de alta velocidad."
  },
  fr: {
    title: "Sachets Échantillons Cosmétiques à Trois Soudures | Emballage d'Essai Premium",
    description: "Élevez la distribution de vos échantillons cosmétiques avec nos sachets à trois soudures haute barrière. Conçus pour la compatibilité des produits, une esthétique impeccable et l'efficacité du remplissage automatisé.",
    heroTitle: "Sachets à Trois Soudures de Précision pour Échantillons Cosmétiques",
    empathyHook: "Vous avez besoin que vos échantillons cosmétiques représentent parfaitement votre marque premium. Mais les fuites d'échantillons, l'interaction chimique avec les huiles essentielles et la mauvaise qualité d'impression sur les petits formats peuvent gâcher la première impression d'un client et ralentir vos lignes de remplissage automatisées.",
    point1Title: "Ingénierie des Matériaux Haute Barrière",
    point1Desc: "Les formules cosmétiques contiennent souvent des huiles essentielles agressives, de l'alcool ou des ingrédients actifs qui peuvent dégrader les films d'emballage standard, entraînant un délaminage ou une détérioration du produit.",
    point1Sol: "Nous utilisons des structures stratifiées multicouches spécialisées, intégrant de l'AL ou du PET/VMPET haute barrière, spécialement conçues pour la résistance chimique et une transmission nulle de l'oxygène et de l'humidité, garantissant l'intégrité de la formulation.",
    point2Title: "Micro-Impression et Esthétique Impeccables",
    point2Desc: "Les formats d'essai offrent un espace limité pour l'image de marque et le texte réglementaire. L'encre qui bave ou l'impression basse résolution sur de petits sachets diminue la perception premium de votre marque.",
    point2Sol: "Nos technologies de pointe d'héliogravure et d'impression numérique permettent d'obtenir des micro-textes ultra-haute définition et une correspondance des couleurs éclatante, maximisant l'impact de la marque même sur les plus petits sachets d'échantillons.",
    point3Title: "Optimisation de la Ligne de Remplissage Automatisée",
    point3Desc: "Des dimensions de sachets irrégulières, des bords qui frisent ou une accumulation d'électricité statique peuvent provoquer des bourrages catastrophiques sur les machines de remplissage cosmétique automatisées à grande vitesse, entraînant des temps d'arrêt coûteux.",
    point3Sol: "Nous fabriquons avec des tolérances dimensionnelles extrêmes et employons des traitements antistatiques, garantissant une planéité parfaite et une usinabilité sans faille pour un traitement automatisé continu et à haute efficacité.",
    point4Title: "Intégrité de Scellage Sûre et Étanche",
    point4Desc: "Les échantillons envoyés par la poste ou inclus dans des kits promotionnels sont soumis à des changements de pression et de température. Des joints faibles entraînent des fuites désastreuses qui détruisent d'autres produits et la confiance dans la marque.",
    point4Sol: "Notre technologie avancée de thermoscellage garantit une résistance de soudure uniforme sur les trois côtés. Nous effectuons des tests rigoureux d'éclatement et de vide pour garantir des performances 100 % étanches dans diverses conditions logistiques.",
    point5Title: "Fonctionnalité d'Ouverture Facile Personnalisée",
    point5Desc: "Des paquets d'échantillons frustrants qui nécessitent des ciseaux pour s'ouvrir créent une mauvaise expérience utilisateur, contredisant directement la sensation de luxe des cosmétiques premium.",
    point5Sol: "Nous intégrons des encoches en V conçues avec précision et un marquage laser en option pour une déchirure nette et sans effort à chaque fois, offrant une expérience d'ouverture fluide et satisfaisante pour le consommateur final.",
    compTitle: "Pourquoi Choisir Nos Sachets d'Échantillons Cosmétiques ?",
    compDesc: "Nous comblons le fossé entre l'esthétique premium et l'ingénierie rigoureuse. Alors que les fournisseurs standard proposent des sachets génériques, nous livrons des emballages d'essai sur mesure et performants qui protègent vos formulations délicates, fonctionnent parfaitement sur vos lignes et rehaussent la première impression de votre marque.",
    faq1Q: "Quelles structures de film recommandez-vous pour les échantillons de soins de la peau contenant des acides ou des huiles actifs ?",
    faq1A: "Pour les formulations agressives, nous recommandons une structure robuste comme le PET/AL/PE ou des stratifiés haute barrière sans feuille personnalisés, garantissant une résistance chimique maximale et empêchant toute interaction entre le produit et l'emballage.",
    faq2Q: "Pouvez-vous maintenir une impression haute résolution sur de très petits sachets d'échantillons ?",
    faq2A: "Oui, nos capacités d'impression avancées nous permettent de réaliser des micro-textes incroyablement nets et des motifs complexes, garantissant que toutes les informations réglementaires sont lisibles et que l'identité de votre marque reste premium sur les petits formats.",
    faq3Q: "Vos sachets à trois soudures fonctionnent-ils efficacement sur les équipements de remplissage automatisés standard ?",
    faq3A: "Absolument. Nos sachets sont conçus avec une consistance dimensionnelle stricte, une rigidité optimale et des propriétés antistatiques pour éviter le gondolement et garantir une alimentation, une ouverture et un scellage sans faille sur les lignes automatisées à grande vitesse."
  },
  "zh-tw": {
    title: "化妝品試用包三邊封袋 | 頂級試用包裝",
    description: "使用我們的高阻隔三邊封袋提升您的化妝品試用包分發體驗。專為產品相容性、完美外觀和自動化填充效率而設計。",
    heroTitle: "專為化妝品試用包設計的精密三邊封袋",
    empathyHook: "您需要您的化妝品試用包完美展現您的頂級品牌形象。但是，樣品洩漏、與精油的化學反應以及小尺寸包裝上的劣質印刷，可能會毀掉客戶的第一印象，並拖慢您的自動化填充線。",
    point1Title: "高阻隔材料工程",
    point1Desc: "化妝品配方通常含有強效精油、酒精或活性成分，這些成分會降解標準包裝薄膜，導致脫層或產品變質。",
    point1Sol: "我們採用專業的多層複合結構，結合鋁箔 (AL) 或高阻隔 PET/VMPET，專為耐化學性和零氧氣、水分透過率而設計，確保配方完整性。",
    point2Title: "無瑕疵的微縮印刷與美學",
    point2Desc: "試用包尺寸為品牌宣傳和法規文字提供的空間有限。小袋子上的墨水暈染或低解析度印刷會降低您品牌的頂級質感。",
    point2Sol: "我們最先進的凹版和數位印刷技術可實現超高解析度微縮文字和鮮豔的色彩匹配，即使在最小的試用包上也能將品牌影響力最大化。",
    point3Title: "自動化填充線最佳化",
    point3Desc: "袋子尺寸不一、邊緣捲曲或靜電積聚可能會導致高速自動化化妝品填充機發生災難性的卡機，造成昂貴的停機時間。",
    point3Sol: "我們以極致的尺寸公差進行製造，並採用防靜電處理，確保完美的平整度和無縫的機加工性，從而實現連續、高效的自動化生產。",
    point4Title: "安全、防漏的密封完整性",
    point4Desc: "透過郵寄發送或包含在促銷套組中的試用品會受到壓力和溫度變化的影響。脆弱的封口會導致災難性的洩漏，從而破壞其他產品和品牌信任。",
    point4Sol: "我們先進的熱封技術可保證三個邊的封口強度均勻。我們進行嚴格的爆破和真空測試，以確保在各種物流條件下達到 100% 防漏性能。",
    point5Title: "客製化易撕功能",
    point5Desc: "需要用剪刀才能打開的試用包會造成糟糕的使用者體驗，這與頂級化妝品的奢華感背道而馳。",
    point5Sol: "我們整合了精密設計的 V 型切口和可選的雷射刻線，每次都能輕鬆、乾淨地撕開，為終端消費者提供順暢、令人滿意的開啟體驗。",
    compTitle: "為什麼選擇我們的化妝品試用包裝袋？",
    compDesc: "我們彌合了頂級美學與嚴格工程之間的差距。當標準供應商提供普通小袋時，我們提供量身打造的高效能試用包裝，保護您脆弱的配方，在您的生產線上完美運行，並提升您的品牌第一印象。",
    faq1Q: "對於含有活性酸或油的護膚試用品，您推薦什麼薄膜結構？",
    faq1A: "對於強效配方，我們建議使用堅固的結構，例如 PET/AL/PE 或客製化的無鋁高阻隔複合材料，以確保最大的耐化學性並防止產品與包裝之間發生任何相互作用。",
    faq2Q: "您能在非常小的試用包上保持高解析度印刷嗎？",
    faq2A: "是的，我們先進的印刷能力使我們能夠實現極其清晰的微縮文字和複雜的設計，確保所有法規資訊都清晰可讀，並且您的品牌標識在小尺寸包裝上仍保持頂級質感。",
    faq3Q: "您的三邊封袋在標準自動化填充設備上運行效率高嗎？",
    faq3A: "絕對沒問題。我們的袋子在設計時考慮了嚴格的尺寸一致性、最佳挺度和防靜電特性，以防止捲曲，並確保在高速自動化生產線上實現無縫進料、開口和密封。"
  }
};

const PAGE_NAME = "CosmeticSampleThreeSideSealPage";

export default function CosmeticSampleThreeSideSealPage() {
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
