import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Cosmetic Cream Stand Up Pouch | Premium Flexible Packaging",
    description: "Elevate your cosmetic brand with engineering-grade stand up pouches for creams and lotions. Designed with high-barrier materials to prevent oxidation and moisture loss.",
    heroTitle: "Precision-Engineered Cosmetic Cream Stand Up Pouches",
    empathyHook: "Leaky seals, separated emulsions, and oxidized active ingredients can ruin a premium cosmetic product's reputation before the customer even applies it.",
    point1Title: "Superior Oxygen and Moisture Barriers",
    point1Desc: "Cosmetic creams with active ingredients degrade rapidly when exposed to oxygen or UV light. Traditional packaging often fails to provide sufficient protection, leading to reduced efficacy and altered product texture.",
    point1Sol: "Our pouches utilize multi-layer laminated structures, including AL or VMPET layers, offering an industry-leading OTR (Oxygen Transmission Rate) and WVTR (Water Vapor Transmission Rate) to maximize product shelf life.",
    point2Title: "Advanced Leak-Proof Dispensing Spouts",
    point2Desc: "Viscous lotions and creams require precise dispensing. Poorly integrated spouts can lead to micro-leaks during transit or dispensing difficulties for the end-user, causing frustration and product waste.",
    point2Sol: "We integrate precision-molded PE/PP spouts with reinforced ultrasonic sealing technology. This ensures structural integrity under high burst pressure and allows for smooth, controlled dispensing of high-viscosity creams.",
    point3Title: "Chemical Resistance and Material Compatibility",
    point3Desc: "Formulations containing essential oils, acids, or alcohol can compromise standard inner sealant layers, causing delamination or leaching that contaminates the cosmetic cream.",
    point3Sol: "We engineer customized inner PE (polyethylene) or CPP (cast polypropylene) sealant blends formulated specifically for high chemical resistance, ensuring complete compatibility with aggressive cosmetic ingredients without delamination.",
    point4Title: "Premium Tactile and Visual Finishes",
    point4Desc: "In the competitive cosmetics market, generic glossy packaging fails to convey the premium nature of high-end skincare formulations, reducing shelf appeal.",
    point4Sol: "We offer advanced surface treatments including soft-touch matte finishes, spot UV gloss, and holographic foiling. These engineered textures provide a luxurious tactile experience that reflects the quality of your cream.",
    point5Title: "Efficient Filling and Sealing Compatibility",
    point5Desc: "Subpar pouch designs can cause misalignment on automated filling lines, slowing down production and increasing the rate of defective seals due to product contamination in the seal area.",
    point5Sol: "Our stand-up pouches are manufactured with strict dimensional tolerances and rigid bottom gussets, ensuring seamless integration with high-speed automated filling machinery and guaranteeing clean, hermetic seals.",
    compTitle: "Why Engineered Pouches Outperform Rigid Containers",
    compDesc: "Traditional jars expose the entire cream surface to air and bacteria with every use. Our spout pouches minimize air exposure, protecting active ingredients while reducing plastic usage by up to 70% compared to rigid cosmetic packaging.",
    faq1Q: "Can these pouches handle hot-fill cosmetic processes?",
    faq1A: "Yes, we can customize the material structure using high-temperature resistant films (like CPP) capable of withstanding hot-fill temperatures up to 90°C (194°F) without warping or compromising barrier properties.",
    faq2Q: "What spout sizes are available for thick cosmetic creams?",
    faq2A: "We offer a variety of spout diameters tailored to your product's viscosity. For thick creams and lotions, we typically recommend 10mm to 16mm inner diameter spouts to ensure easy squeezing and consistent flow.",
    faq3Q: "Are these pouches compatible with automated capping machines?",
    faq3A: "Absolutely. Our spouts are precision-engineered to integrate smoothly with standard automated capping and torqueing equipment, ensuring secure closures and high-throughput production efficiency."
  },
  es: {
    title: "Bolsa Stand Up para Cremas Cosméticas | Envasado Flexible Premium",
    description: "Eleve su marca de cosméticos con bolsas stand up de grado de ingeniería para cremas y lociones. Diseñadas con materiales de alta barrera para evitar la oxidación y la pérdida de humedad.",
    heroTitle: "Bolsas Stand Up para Cremas Cosméticas de Alta Precisión",
    empathyHook: "Los sellos con fugas, las emulsiones separadas y los ingredientes activos oxidados pueden arruinar la reputación de un producto cosmético premium antes de que el cliente lo aplique.",
    point1Title: "Barreras Superiores contra Oxígeno y Humedad",
    point1Desc: "Las cremas cosméticas con ingredientes activos se degradan rápidamente cuando se exponen al oxígeno o la luz UV. El envasado tradicional a menudo no proporciona suficiente protección, lo que reduce la eficacia y altera la textura.",
    point1Sol: "Nuestras bolsas utilizan estructuras laminadas multicapa, incluyendo capas de AL o VMPET, ofreciendo una tasa líder en la industria de transmisión de oxígeno (OTR) y vapor de agua (WVTR) para maximizar la vida útil.",
    point2Title: "Boquillas Dispensadoras Antiderrames Avanzadas",
    point2Desc: "Las lociones y cremas viscosas requieren una dosificación precisa. Boquillas mal integradas pueden causar microfugas durante el tránsito o dificultades de dispensación, causando frustración y desperdicio.",
    point2Sol: "Integramos boquillas de PE/PP moldeadas con precisión con tecnología de sellado ultrasónico reforzado. Esto asegura la integridad estructural bajo alta presión de estallido y permite una dispensación suave y controlada.",
    point3Title: "Resistencia Química y Compatibilidad de Materiales",
    point3Desc: "Las formulaciones con aceites esenciales, ácidos o alcohol pueden comprometer las capas de sellado interno estándar, causando delaminación o lixiviación que contamina la crema cosmética.",
    point3Sol: "Diseñamos mezclas de selladores internos de PE o CPP formulados específicamente para alta resistencia química, garantizando total compatibilidad con ingredientes cosméticos agresivos sin delaminación.",
    point4Title: "Acabados Táctiles y Visuales Premium",
    point4Desc: "En el competitivo mercado de cosméticos, el envase brillante genérico no logra transmitir la naturaleza premium de las formulaciones de cuidado de la piel de alta gama, reduciendo el atractivo en el estante.",
    point4Sol: "Ofrecemos tratamientos superficiales avanzados que incluyen acabados mate suaves al tacto, barniz UV sectorizado y laminado holográfico. Estas texturas ofrecen una experiencia táctil lujosa.",
    point5Title: "Compatibilidad Eficiente de Llenado y Sellado",
    point5Desc: "Los diseños deficientes de bolsas pueden causar desalineación en las líneas de llenado automatizadas, ralentizando la producción y aumentando la tasa de sellos defectuosos por contaminación del producto en el área de sellado.",
    point5Sol: "Nuestras bolsas stand up se fabrican con estrictas tolerancias dimensionales y fuelles inferiores rígidos, asegurando una integración perfecta con maquinaria de llenado automatizada de alta velocidad.",
    compTitle: "Por Qué Nuestras Bolsas Superan a los Envases Rígidos",
    compDesc: "Los frascos tradicionales exponen toda la crema al aire y bacterias en cada uso. Nuestras bolsas minimizan la exposición al aire, protegiendo los ingredientes activos y reduciendo el uso de plástico hasta en un 70% frente a envases rígidos.",
    faq1Q: "¿Pueden estas bolsas soportar procesos cosméticos de llenado en caliente?",
    faq1A: "Sí, podemos personalizar la estructura con películas resistentes a altas temperaturas (como CPP) capaces de soportar llenado en caliente hasta 90°C (194°F) sin deformarse ni comprometer las propiedades de barrera.",
    faq2Q: "¿Qué tamaños de boquilla están disponibles para cremas espesas?",
    faq2A: "Ofrecemos varios diámetros adaptados a la viscosidad de su producto. Para cremas y lociones espesas, recomendamos boquillas con diámetro interno de 10 mm a 16 mm para asegurar un flujo constante.",
    faq3Q: "¿Son estas bolsas compatibles con tapadoras automatizadas?",
    faq3A: "Absolutamente. Nuestras boquillas están diseñadas con precisión para integrarse sin problemas con equipos de tapado y torsión automatizados estándar, asegurando cierres seguros y alta eficiencia de producción."
  },
  fr: {
    title: "Sachet Doypack pour Crème Cosmétique | Emballage Flexible Premium",
    description: "Rehaussez votre marque cosmétique avec des sachets doypack de qualité industrielle pour crèmes et lotions. Conçus avec des matériaux à haute barrière pour prévenir l'oxydation et la perte d'humidité.",
    heroTitle: "Sachets Doypack Haute Précision pour Crèmes Cosmétiques",
    empathyHook: "Les fuites de soudure, les émulsions séparées et les ingrédients actifs oxydés peuvent ruiner la réputation d'un produit cosmétique haut de gamme avant même que le client ne l'applique.",
    point1Title: "Barrières Supérieures contre l'Oxygène et l'Humidité",
    point1Desc: "Les crèmes cosmétiques avec ingrédients actifs se dégradent rapidement à l'oxygène ou aux UV. Les emballages traditionnels n'offrent souvent pas une protection suffisante, entraînant une efficacité réduite et une texture altérée.",
    point1Sol: "Nos sachets utilisent des structures laminées multicouches, incluant des couches d'AL ou de VMPET, offrant des taux de transmission d'oxygène (OTR) et de vapeur d'eau (WVTR) de premier plan pour maximiser la durée de conservation.",
    point2Title: "Bouchons Verseurs Anti-fuites Avancés",
    point2Desc: "Les lotions et crèmes visqueuses nécessitent un dosage précis. Des bouchons mal intégrés peuvent entraîner des micro-fuites pendant le transport ou des difficultés d'utilisation, causant frustration et gaspillage.",
    point2Sol: "Nous intégrons des bouchons moulés avec précision en PE/PP grâce à une technologie de soudure par ultrasons renforcée. Cela assure l'intégrité structurelle sous haute pression d'éclatement et permet une distribution fluide.",
    point3Title: "Résistance Chimique et Compatibilité des Matériaux",
    point3Desc: "Les formulations contenant des huiles essentielles, des acides ou de l'alcool peuvent compromettre les couches de scellage internes standard, provoquant une délamination ou une lixiviation qui contamine la crème cosmétique.",
    point3Sol: "Nous concevons des mélanges internes en PE ou CPP formulés spécifiquement pour une résistance chimique élevée, assurant une compatibilité totale avec les ingrédients cosmétiques agressifs sans délamination.",
    point4Title: "Finitions Tactiles et Visuelles Premium",
    point4Desc: "Sur le marché compétitif des cosmétiques, les emballages brillants génériques ne parviennent pas à transmettre la nature haut de gamme des formulations de soins, réduisant l'attrait en rayon.",
    point4Sol: "Nous proposons des traitements de surface avancés, notamment des finitions mates au toucher velours, du vernis UV sélectif et des dorures holographiques. Ces textures offrent une expérience tactile luxueuse.",
    point5Title: "Compatibilité Optimale pour Remplissage et Scellage",
    point5Desc: "Les sachets mal conçus peuvent causer des désalignements sur les lignes de remplissage automatisées, ralentissant la production et augmentant les défauts de scellage dus à la contamination de la zone de soudure.",
    point5Sol: "Nos sachets sont fabriqués avec des tolérances dimensionnelles strictes et des soufflets de fond rigides, garantissant une intégration fluide avec les machines de remplissage à grande vitesse et assurant des soudures hermétiques propres.",
    compTitle: "Pourquoi nos Sachets Surpassent les Contenants Rigides",
    compDesc: "Les pots traditionnels exposent toute la crème à l'air et aux bactéries à chaque utilisation. Nos sachets minimisent l'exposition à l'air, protégeant les ingrédients actifs tout en réduisant l'utilisation de plastique jusqu'à 70% par rapport aux emballages rigides.",
    faq1Q: "Ces sachets peuvent-ils supporter des processus de remplissage à chaud ?",
    faq1A: "Oui, nous pouvons personnaliser la structure avec des films résistants aux hautes températures (comme le CPP) capables de supporter un remplissage à chaud jusqu'à 90°C (194°F) sans se déformer ni compromettre les propriétés barrières.",
    faq2Q: "Quelles tailles de bouchons sont disponibles pour les crèmes épaisses ?",
    faq2A: "Nous offrons une variété de diamètres adaptés à la viscosité de votre produit. Pour les crèmes et lotions épaisses, nous recommandons généralement des diamètres internes de 10 mm à 16 mm pour assurer un écoulement fluide et constant.",
    faq3Q: "Ces sachets sont-ils compatibles avec les capsuleuses automatisées ?",
    faq3A: "Absolument. Nos bouchons sont conçus avec précision pour s'intégrer parfaitement aux équipements de capsulage et de serrage automatisés standards, garantissant des fermetures sécurisées et une haute efficacité de production."
  },
  "zh-tw": {
    title: "化妝品乳霜直立袋 | 頂級軟包裝解決方案",
    description: "使用專為乳霜和乳液設計的工程級直立袋，提升您的化妝品品牌價值。採用高阻隔材料設計，有效防止氧化與水分流失。",
    heroTitle: "高精度化妝品乳霜直立袋",
    empathyHook: "封口漏液、乳化分離和活性成分氧化，往往在消費者打開包裝前就已毀了頂級化妝品的聲譽。",
    point1Title: "卓越的氧氣與水分阻隔層",
    point1Desc: "含有活性成分的化妝品乳霜在接觸氧氣或紫外線時會迅速降解。傳統包裝通常無法提供足夠的保護，導致功效降低和質地改變。",
    point1Sol: "我們的包裝袋採用多層複合結構，包含鋁箔或鍍鋁層，提供業界領先的氧氣透過率（OTR）和水蒸氣透過率（WVTR），以最大程度延長產品保質期。",
    point2Title: "先進的防漏點膠吸嘴",
    point2Desc: "高黏度乳液和乳霜需要精準的擠出控制。結合不良的吸嘴會在運輸過程中導致微漏，或使終端用戶難以擠出，造成挫折感與產品浪費。",
    point2Sol: "我們採用精密成型的PE/PP吸嘴與強化超聲波封合技術。這確保了在高爆破壓力下的結構完整性，並允許高黏度乳霜滑順、受控地擠出。",
    point3Title: "耐化學性與材料相容性",
    point3Desc: "含有精油、酸類或酒精的配方可能會破壞標準的內層熱封材料，引起脫層或析出，進而污染化妝品乳霜。",
    point3Sol: "我們專門調配針對高耐化學性設計的內層PE（聚乙烯）或CPP（流延聚丙烯）熱封薄膜，確保與侵蝕性化妝品成分完全相容，絕不脫層。",
    point4Title: "頂級的觸感與視覺工藝",
    point4Desc: "在競爭激烈的化妝品市場中，一般的光澤包裝無法傳達高階保養品的奢華感，從而降低了貨架上的吸引力。",
    point4Sol: "我們提供先進的表面處理，包括觸感柔和的霧面消光、局部UV光澤和雷射燙印。這些精心設計的紋理提供了奢華的觸覺體驗，完美反映您產品的高品質。",
    point5Title: "高效的充填與封口相容性",
    point5Desc: "設計不良的包裝袋可能會在自動化充填線上造成對位偏差，降低生產速度，並因封口區域的產品污染而增加不良率。",
    point5Sol: "我們的直立袋以嚴格的尺寸公差和堅固的底部折邊製造，確保與高速自動充填設備無縫整合，並保證清潔、氣密的完美封口。",
    compTitle: "為什麼我們的工程吸嘴袋優於硬質容器",
    compDesc: "傳統的廣口瓶在每次使用時都會將整罐乳霜暴露在空氣和細菌中。我們的吸嘴袋將空氣暴露降至最低，保護活性成分，同時與硬質化妝品容器相比，可減少高達70%的塑料用量。",
    faq1Q: "這些包裝袋可以承受化妝品的熱充填製程嗎？",
    faq1A: "可以。我們可以客製化使用耐高溫薄膜（如CPP）的材料結構，能夠承受高達90°C（194°F）的熱充填溫度，不會變形或影響阻隔性能。",
    faq2Q: "濃稠的化妝品乳霜有哪些吸嘴尺寸可供選擇？",
    faq2A: "我們提供多種內徑尺寸以適應您產品的黏度。對於濃稠的乳霜和乳液，我們通常建議使用內徑為10mm至16mm的吸嘴，以確保易於擠壓並保持流暢。",
    faq3Q: "這些包裝袋與自動鎖蓋機相容嗎？",
    faq3A: "絕對相容。我們的吸嘴經過精密設計，可與標準的自動鎖蓋和旋緊設備順暢整合，確保封閉安全並提高生產效率。"
  }
};

const PAGE_NAME = "CosmeticCreamStandUpPouchPage";

export default function CosmeticCreamStandUpPouchPage() {
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
