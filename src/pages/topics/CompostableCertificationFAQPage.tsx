import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Compostable Certification FAQ | Achieve Pack",
    description: "Expert answers to your compostable packaging certification questions. Learn about industrial and home compostable standards, material engineering, and compliance.",
    heroTitle: "Compostable Certification: The Engineering FAQ",
    empathyHook: "Navigating the labyrinth of compostable certifications (BPI, TUV, OK Compost) shouldn't bottleneck your product launch. We engineer compliance directly into your film structures, saving you months of testing and unexpected rejections.",
    point1Title: "Barrier Degradation vs. Shelf Life",
    point1Desc: "Compostable films often struggle to maintain adequate oxygen and moisture barriers over time, leading to premature product spoilage before the packaging even reaches end-of-life.",
    point1Sol: "We utilize multi-layer extruded metallized cellulose and high-barrier biopolymers (e.g., PVOH coatings) that strictly adhere to ASTM D6400 while extending shelf life by up to 18 months.",
    point2Title: "Machinability on High-Speed VFFS Lines",
    point2Desc: "Standard compostable structures lack the rigidity and slip coefficient needed for high-speed Vertical Form Fill Seal (VFFS) equipment, causing jams and heat-seal failures.",
    point2Sol: "Our engineers adjust the Coefficient of Friction (COF) and integrate low-initiation temperature sealants to ensure seamless runability without compromising compostability.",
    point3Title: "Certification Ambiguity & Greenwashing Risks",
    point3Desc: "Misinterpreting the difference between 'industrial' and 'home' compostable standards can lead to costly recalls and brand damage due to non-compliance.",
    point3Sol: "We provide full traceability and pre-certified material structures (TUV Austria, BPI) with comprehensive documentation, ensuring your claims are legally airtight.",
    point4Title: "Inconsistent Heat Sealing Windows",
    point4Desc: "Bioplastics often have a very narrow heat sealing window. Slight temperature variations during production cause either weak seals or burnt films, resulting in high scrap rates.",
    point4Sol: "We engineer custom sealant layers using advanced PLA/PBAT blends that widen the operating window by 15-20°C, ensuring robust, leak-proof seals on standard equipment.",
    point5Title: "Delamination in High-Moisture Environments",
    point5Desc: "When compostable adhesives are exposed to high-moisture products, they can pre-maturely hydrolyze, causing layer separation and structural failure.",
    point5Sol: "We specify specialized, moisture-resistant, compostable solventless laminating adhesives designed to withstand aggressive product profiles while maintaining certified disintegration rates.",
    compTitle: "Why Engineered Compostable Packaging Outperforms",
    compDesc: "Compare traditional approaches to our precision-engineered compostable solutions.",
    faq1Q: "What is the difference between Industrial and Home Compostable certifications?",
    faq1A: "Industrial compostable materials (like PLA) require specific high temperatures (around 60°C) and microbial conditions found only in municipal facilities, typically meeting ASTM D6400 or EN 13432. Home compostable materials (like some cellulose/PBAT blends) can break down at lower, ambient temperatures in a backyard bin. We engineer structures tailored to your specific certification goal.",
    faq2Q: "Will transitioning to compostable packaging require me to buy new packaging machinery?",
    faq2A: "In most cases, no. However, compostable films often require lower sealing temperatures and have different slip properties. Our engineering team customizes the film's structural design—adjusting the slip additives and sealant layers—so it runs efficiently on your existing VFFS or HFFS lines with only minor temperature or tension adjustments.",
    faq3Q: "How long does the certification process take, and how can Achieve Pack accelerate it?",
    faq3A: "Testing a completely new material structure can take 6-12 months. However, because Achieve Pack utilizes a library of pre-tested, pre-certified resin blends and adhesives, we can often bypass the primary disintegration and ecotoxicity testing phases, reducing your time-to-market by up to 50% while guaranteeing compliance."
  },
  es: {
    title: "Preguntas Frecuentes sobre Certificación Compostable | Achieve Pack",
    description: "Respuestas de expertos a sus preguntas sobre certificación de envases compostables. Aprenda sobre estándares de compostaje industrial y doméstico, ingeniería de materiales y cumplimiento.",
    heroTitle: "Certificación Compostable: Preguntas Frecuentes de Ingeniería",
    empathyHook: "Navegar por el laberinto de las certificaciones compostables (BPI, TUV, OK Compost) no debería retrasar el lanzamiento de su producto. Diseñamos el cumplimiento directamente en las estructuras de su película, ahorrándole meses de pruebas y rechazos inesperados.",
    point1Title: "Degradación de Barrera vs. Vida Útil",
    point1Desc: "Las películas compostables a menudo tienen dificultades para mantener barreras adecuadas de oxígeno y humedad con el tiempo, lo que lleva al deterioro prematuro del producto antes de que el envase llegue al final de su vida útil.",
    point1Sol: "Utilizamos celulosa metalizada extruida multicapa y biopolímeros de alta barrera (p. ej., recubrimientos de PVOH) que cumplen estrictamente con la norma ASTM D6400 mientras extienden la vida útil hasta 18 meses.",
    point2Title: "Maquinabilidad en Líneas VFFS de Alta Velocidad",
    point2Desc: "Las estructuras compostables estándar carecen de la rigidez y el coeficiente de deslizamiento necesarios para los equipos de Formado, Llenado y Sellado Vertical (VFFS) de alta velocidad, causando atascos y fallas en el sellado térmico.",
    point2Sol: "Nuestros ingenieros ajustan el Coeficiente de Fricción (COF) e integran selladores de baja temperatura de inicio para garantizar un funcionamiento continuo sin comprometer la compostabilidad.",
    point3Title: "Ambigüedad de Certificación y Riesgos de Greenwashing",
    point3Desc: "Malinterpretar la diferencia entre los estándares compostables 'industriales' y 'domésticos' puede llevar a retiros costosos y daños a la marca debido al incumplimiento.",
    point3Sol: "Proporcionamos trazabilidad completa y estructuras de materiales precertificadas (TUV Austria, BPI) con documentación exhaustiva, asegurando que sus afirmaciones sean legalmente herméticas.",
    point4Title: "Ventanas de Sellado Térmico Inconsistentes",
    point4Desc: "Los bioplásticos a menudo tienen una ventana de sellado térmico muy estrecha. Ligeras variaciones de temperatura durante la producción causan sellos débiles o películas quemadas, resultando en altas tasas de desperdicio.",
    point4Sol: "Diseñamos capas de sellado personalizadas utilizando mezclas avanzadas de PLA/PBAT que amplían la ventana operativa en 15-20°C, asegurando sellos robustos y a prueba de fugas en equipos estándar.",
    point5Title: "Delaminación en Entornos de Alta Humedad",
    point5Desc: "Cuando los adhesivos compostables se exponen a productos de alta humedad, pueden hidrolizarse prematuramente, causando separación de capas y fallas estructurales.",
    point5Sol: "Especificamos adhesivos de laminación sin solventes, especializados, resistentes a la humedad y compostables, diseñados para soportar perfiles de productos agresivos mientras mantienen las tasas de desintegración certificadas.",
    compTitle: "Por Qué los Envases Compostables Diseñados Tienen un Mejor Rendimiento",
    compDesc: "Compare los enfoques tradicionales con nuestras soluciones compostables de ingeniería de precisión.",
    faq1Q: "¿Cuál es la diferencia entre las certificaciones de Compostabilidad Industrial y Doméstica?",
    faq1A: "Los materiales compostables industriales (como el PLA) requieren altas temperaturas específicas (alrededor de 60°C) y condiciones microbianas que solo se encuentran en instalaciones municipales, cumpliendo típicamente con ASTM D6400 o EN 13432. Los materiales compostables domésticos (como algunas mezclas de celulosa/PBAT) pueden descomponerse a temperaturas ambiente más bajas en un contenedor de patio trasero. Diseñamos estructuras adaptadas a su objetivo de certificación específico.",
    faq2Q: "¿La transición a envases compostables requerirá que compre nueva maquinaria de envasado?",
    faq2A: "En la mayoría de los casos, no. Sin embargo, las películas compostables a menudo requieren temperaturas de sellado más bajas y tienen propiedades de deslizamiento diferentes. Nuestro equipo de ingeniería personaliza el diseño estructural de la película—ajustando los aditivos de deslizamiento y las capas de sellado—para que funcione eficientemente en sus líneas VFFS o HFFS existentes con solo ajustes menores de temperatura o tensión.",
    faq3Q: "¿Cuánto tiempo dura el proceso de certificación y cómo puede acelerarlo Achieve Pack?",
    faq3A: "Probar una estructura de material completamente nueva puede llevar de 6 a 12 meses. Sin embargo, debido a que Achieve Pack utiliza una biblioteca de mezclas de resinas y adhesivos preprobados y precertificados, a menudo podemos omitir las fases de prueba primarias de desintegración y ecotoxicidad, reduciendo su tiempo de comercialización hasta en un 50% mientras garantizamos el cumplimiento."
  },
  fr: {
    title: "FAQ sur la Certification Compostable | Achieve Pack",
    description: "Réponses d'experts à vos questions sur la certification des emballages compostables. Découvrez les normes de compostage industriel et domestique, l'ingénierie des matériaux et la conformité.",
    heroTitle: "Certification Compostable : La FAQ d'Ingénierie",
    empathyHook: "Naviguer dans le labyrinthe des certifications compostables (BPI, TUV, OK Compost) ne devrait pas ralentir le lancement de votre produit. Nous intégrons la conformité directement dans les structures de vos films, vous évitant des mois de tests et de rejets inattendus.",
    point1Title: "Dégradation de la Barrière vs Durée de Conservation",
    point1Desc: "Les films compostables ont souvent du mal à maintenir des barrières adéquates contre l'oxygène et l'humidité au fil du temps, entraînant une détérioration prématurée du produit avant même que l'emballage n'atteigne sa fin de vie.",
    point1Sol: "Nous utilisons de la cellulose métallisée extrudée multicouche et des biopolymères à haute barrière (ex. revêtements PVOH) qui respectent strictement la norme ASTM D6400 tout en prolongeant la durée de conservation jusqu'à 18 mois.",
    point2Title: "Usinabilité sur les Lignes VFFS à Grande Vitesse",
    point2Desc: "Les structures compostables standard manquent de la rigidité et du coefficient de glissement nécessaires pour les équipements de Formage, Remplissage et Scellage Vertical (VFFS) à grande vitesse, provoquant des bourrages et des échecs de thermoscellage.",
    point2Sol: "Nos ingénieurs ajustent le Coefficient de Frottement (COF) et intègrent des scellants à basse température d'initiation pour garantir un fonctionnement fluide sans compromettre la compostabilité.",
    point3Title: "Ambigüité de la Certification et Risques d'Écoblanchiment",
    point3Desc: "Mal interpréter la différence entre les normes compostables 'industrielles' et 'domestiques' peut entraîner des rappels coûteux et nuire à l'image de marque en raison de la non-conformité.",
    point3Sol: "Nous offrons une traçabilité complète et des structures de matériaux pré-certifiées (TUV Austria, BPI) avec une documentation exhaustive, garantissant que vos affirmations sont juridiquement inattaquables.",
    point4Title: "Fenêtres de Thermoscellage Incohérentes",
    point4Desc: "Les bioplastiques ont souvent une fenêtre de thermoscellage très étroite. De légères variations de température pendant la production provoquent des scellements faibles ou des films brûlés, entraînant des taux de rebut élevés.",
    point4Sol: "Nous concevons des couches de scellement personnalisées utilisant des mélanges avancés de PLA/PBAT qui élargissent la fenêtre opérationnelle de 15 à 20°C, assurant des scellements robustes et étanches sur des équipements standard.",
    point5Title: "Délaminage dans des Environnements très Humides",
    point5Desc: "Lorsque les adhésifs compostables sont exposés à des produits très humides, ils peuvent s'hydrolyser prématurément, provoquant une séparation des couches et une défaillance structurelle.",
    point5Sol: "Nous spécifions des adhésifs de stratification sans solvant, spécialisés, résistants à l'humidité et compostables, conçus pour résister à des profils de produits agressifs tout en maintenant des taux de désintégration certifiés.",
    compTitle: "Pourquoi les Emballages Compostables Conçus sur Mesure sont Plus Performants",
    compDesc: "Comparez les approches traditionnelles à nos solutions compostables d'ingénierie de précision.",
    faq1Q: "Quelle est la différence entre les certifications Compostable Industriel et Domestique ?",
    faq1A: "Les matériaux compostables industriels (comme le PLA) nécessitent des températures élevées spécifiques (environ 60°C) et des conditions microbiennes que l'on ne trouve que dans les installations municipales, répondant généralement aux normes ASTM D6400 ou EN 13432. Les matériaux compostables domestiques (comme certains mélanges cellulose/PBAT) peuvent se décomposer à des températures ambiantes plus basses dans un bac de jardin. Nous concevons des structures adaptées à votre objectif de certification spécifique.",
    faq2Q: "La transition vers des emballages compostables m'obligera-t-elle à acheter de nouvelles machines d'emballage ?",
    faq2A: "Dans la plupart des cas, non. Cependant, les films compostables nécessitent souvent des températures de scellage plus basses et présentent des propriétés de glissement différentes. Notre équipe d'ingénierie personnalise la conception structurelle du film—en ajustant les additifs de glissement et les couches de scellement—afin qu'il fonctionne efficacement sur vos lignes VFFS ou HFFS existantes avec seulement des ajustements mineurs de température ou de tension.",
    faq3Q: "Combien de temps dure le processus de certification, et comment Achieve Pack peut-il l'accélérer ?",
    faq3A: "Tester une structure de matériau entièrement nouvelle peut prendre 6 à 12 mois. Cependant, parce qu'Achieve Pack utilise une bibliothèque de mélanges de résines et d'adhésifs pré-testés et pré-certifiés, nous pouvons souvent contourner les phases primaires de test de désintégration et d'écotoxicité, réduisant ainsi votre délai de mise sur le marché jusqu'à 50 % tout en garantissant la conformité."
  },
  "zh-tw": {
    title: "可堆肥認證常見問題 | Achieve Pack",
    description: "專家解答您的可堆肥包裝認證問題。了解工業與家庭可堆肥標準、材料工程及合規性要求。",
    heroTitle: "可堆肥認證：專業工程常見問題",
    empathyHook: "在可堆肥認證（BPI、TUV、OK Compost）的迷宮中摸索，不應成為您產品上市的瓶頸。我們將合規性直接融入您的薄膜結構設計中，為您節省數月的測試時間，並避免意外的退回。",
    point1Title: "阻隔性降解與保質期的權衡",
    point1Desc: "可堆肥薄膜通常難以長期維持足夠的氧氣和濕氣阻隔性，導致產品在包裝達到使用壽命終點前就過早變質。",
    point1Sol: "我們採用多層共擠金屬化纖維素和高阻隔生物聚合物（如 PVOH 塗層），嚴格遵守 ASTM D6400 標準，同時可將保質期延長至 18 個月。",
    point2Title: "高速 VFFS 生產線的設備適應性",
    point2Desc: "標準的可堆肥結構缺乏高速立式成型充填封口 (VFFS) 設備所需的剛性和滑動係數，容易導致卡機和熱封失敗。",
    point2Sol: "我們的工程師會精確調整摩擦係數 (COF) 並整合低起始溫度密封層，以確保在不影響可堆肥性的前提下實現無縫運轉。",
    point3Title: "認證模糊性與漂綠風險",
    point3Desc: "誤解「工業」和「家庭」可堆肥標準的差異，可能因不合規而導致代價高昂的產品召回和品牌聲譽受損。",
    point3Sol: "我們提供完整的可追溯性和預先認證的材料結構（TUV Austria、BPI），並附有全面的證明文件，確保您的環保聲明在法律上無懈可擊。",
    point4Title: "熱封視窗不穩定",
    point4Desc: "生物塑料的熱封視窗通常非常狹窄。生產過程中輕微的溫度波動就會導致封口不牢或薄膜燒焦，造成極高的廢品率。",
    point4Sol: "我們使用先進的 PLA/PBAT 混合物定制密封層，將操作視窗擴大 15-20°C，確保在標準設備上也能實現堅固且防漏的封口。",
    point5Title: "高濕度環境下的脫層問題",
    point5Desc: "當可堆肥粘合劑暴露於高水分產品時，它們可能會過早水解，導致層間分離和結構失效。",
    point5Sol: "我們指定使用專門的抗濕性、可堆肥無溶劑複合粘合劑，旨在承受侵蝕性強的產品特性，同時保持認證的降解率。",
    compTitle: "為什麼專業工程設計的可堆肥包裝性能更卓越",
    compDesc: "將傳統解決方案與我們精確設計的可堆肥解決方案進行比較。",
    faq1Q: "工業可堆肥和家庭可堆肥認證有什麼區別？",
    faq1A: "工業可堆肥材料（如 PLA）需要特定的高溫（約 60°C）和僅在市政設施中才具備的微生物環境，通常符合 ASTM D6400 或 EN 13432 標準。家庭可堆肥材料（如某些纖維素/PBAT 混合物）則可以在後院堆肥桶的較低環境溫度下分解。我們會根據您的特定認證目標定制合適的材料結構。",
    faq2Q: "過渡到可堆肥包裝需要我購買新的包裝機械嗎？",
    faq2A: "在大多數情況下不需要。不過，可堆肥薄膜通常需要較低的密封溫度，並具有不同的滑動特性。我們的工程團隊會定制薄膜的結構設計——調整滑動添加劑和密封層——使其能夠在您現有的 VFFS 或 HFFS 生產線上高效運行，只需對溫度或張力進行微調即可。",
    faq3Q: "認證過程需要多長時間，Achieve Pack 如何加速這一過程？",
    faq3A: "測試一種全新的材料結構可能需要 6 到 12 個月。然而，由於 Achieve Pack 利用了已經過預先測試和認證的樹脂混合物與粘合劑資料庫，我們通常可以跳過初步的崩解和生態毒性測試階段，從而將您的上市時間縮短高達 50%，同時保證合規性。"
  }
};

const PAGE_NAME = "CompostableCertificationFaqPage";

export default function CompostableCertificationFaqPage() {
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
