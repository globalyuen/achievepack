import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Premium Compostable Humidity Control Packaging | B2B Solutions",
    description: "Discover advanced compostable humidity control packaging engineered for industrial applications. Protect sensitive products with sustainable, high-barrier bio-materials designed to maintain optimal moisture levels.",
    heroTitle: "Engineering Sustainable Moisture Management",
    empathyHook: "When migrating to compostable packaging, manufacturers often face a critical dilemma: achieving sustainability without compromising the strict moisture barrier required for product stability. Condensation, desiccation, and premature degradation can jeopardize your entire supply chain.",
    point1Title: "High-Barrier Bio-Polymer Structures",
    point1Desc: "Traditional compostable films often fail at maintaining moisture vapor transmission rates (MVTR). When ambient humidity fluctuates, poorly engineered bio-films allow rapid moisture ingress, leading to product clumping or spoilage.",
    point1Sol: "We utilize multi-layer metallized cellulosic films and advanced bio-polymers that deliver industry-leading MVTR and OTR profiles, ensuring your product remains perfectly conditioned while retaining EN 13432 compostability certification.",
    point2Title: "Integrated Active Desiccant Technology",
    point2Desc: "Hygroscopic products like powders, supplements, and electronics require active moisture scavenging. Standard drop-in silica gel packets are neither compostable nor visually appealing, creating a disjointed unboxing experience and compliance issues.",
    point2Sol: "Our packaging can integrate specialized moisture-absorbing inner linings made from organic, biodegradable desiccants. This passive humidity control mechanism continuously regulates the internal microclimate without the need for separate sachets.",
    point3Title: "Hermetic Seal Integrity & Micro-Leak Prevention",
    point3Desc: "Even the highest barrier films will fail if the pouch seals are compromised. Conventional compostable sealants often exhibit poor hot-tack and narrow sealing windows, leading to micro-channeling that allows moisture to bypass the film entirely.",
    point3Sol: "We employ precision-engineered bio-sealants with broad operating windows, ensuring ultra-secure, hermetic seals on high-speed automated packaging lines. This guarantees zero moisture permeation through the seams.",
    point4Title: "Structural Durability Under High Humidity",
    point4Desc: "Many biodegradable materials inherently absorb moisture from the environment (hydrophilic behavior), causing the packaging to lose mechanical strength, wrinkle, or delaminate in tropical or high-humidity climates.",
    point4Sol: "By cross-linking our external bio-laminates with hydrophobic compostable varnishes, we ensure the structural integrity and premium aesthetic of the pouch remain intact, regardless of external supply chain conditions.",
    point5Title: "Certified Compostability & Regulatory Compliance",
    point5Desc: "Navigating the complex landscape of global compostability standards can be legally risky. Using unverified 'green' materials with moisture control additives often disqualifies packaging from industrial or home compost certifications.",
    point5Sol: "Every layer of our humidity-control packaging, including barrier adhesives and inks, is rigorously tested and certified to ASTM D6400 and EN 13432 standards. You receive uncompromising performance with guaranteed environmental compliance.",
    compTitle: "Uncompromising Moisture Defense vs. Conventional Bio-Plastics",
    compDesc: "While standard compostable bags struggle with moisture vapor transmission, our engineered structures provide a barrier performance that rivals traditional aluminum foil, protecting your sensitive formulas and your brand reputation.",
    faq1Q: "Can compostable packaging match the MVTR of conventional metallized PET or Aluminum?",
    faq1A: "Yes. By utilizing vacuum-deposited aluminum on certified compostable cellulosic substrates, we achieve extremely low Moisture Vapor Transmission Rates that closely rival conventional high-barrier structures, ensuring long shelf life for hygroscopic goods.",
    faq2Q: "Do high-humidity environments trigger premature degradation of the packaging?",
    faq2A: "No. Our compostable films are designed to require the specific conditions of a compost environment (high heat, specific microbes, and sustained moisture) to initiate breakdown. Normal ambient humidity, even in tropical climates, will not compromise the packaging's structural integrity.",
    faq3Q: "How does this affect the operational efficiency on my form-fill-seal (FFS) machines?",
    faq3A: "Our films are engineered with specific slip properties and stable heat-seal profiles to run seamlessly on existing FFS equipment. You can achieve high-speed throughput without the dragging, sticking, or seal failures common to inferior bio-resins."
  },
  es: {
    title: "Control de Humedad en Empaques Compostables | Soluciones B2B",
    description: "Descubra empaques compostables de control de humedad de ingeniería avanzada para aplicaciones industriales. Proteja productos sensibles con biomateriales sostenibles de alta barrera.",
    heroTitle: "Ingeniería Sostenible para el Control de Humedad",
    empathyHook: "Al migrar a empaques compostables, los fabricantes a menudo enfrentan un dilema crítico: lograr la sostenibilidad sin comprometer la estricta barrera de humedad necesaria para la estabilidad del producto. La condensación y degradación prematura pueden poner en riesgo toda su cadena de suministro.",
    point1Title: "Estructuras de Biopolímeros de Alta Barrera",
    point1Desc: "Las películas compostables tradicionales suelen fallar en mantener las tasas de transmisión de vapor de humedad (MVTR). Cuando la humedad ambiental fluctúa, las biopelículas mal diseñadas permiten el ingreso rápido de humedad, arruinando el producto.",
    point1Sol: "Utilizamos películas celulósicas metalizadas de múltiples capas y biopolímeros avanzados que ofrecen perfiles líderes en la industria de MVTR y OTR, asegurando que su producto se mantenga perfectamente acondicionado mientras conserva la certificación de compostabilidad.",
    point2Title: "Tecnología Integrada de Desecantes Activos",
    point2Desc: "Los productos higroscópicos como polvos, suplementos y productos electrónicos requieren una absorción activa de humedad. Los paquetes estándar de gel de sílice no son compostables ni visualmente atractivos.",
    point2Sol: "Nuestros empaques pueden integrar revestimientos internos especiales que absorben la humedad, hechos de desecantes orgánicos y biodegradables. Este mecanismo pasivo regula continuamente el microclima interno sin necesidad de bolsitas separadas.",
    point3Title: "Integridad de Sellado Hermético y Prevención de Microfugas",
    point3Desc: "Incluso las películas de mayor barrera fallarán si los sellos están comprometidos. Los selladores compostables convencionales suelen tener ventanas de sellado estrechas, creando microcanales que permiten el paso de la humedad.",
    point3Sol: "Empleamos bioselladores de ingeniería de precisión con amplias ventanas operativas, garantizando sellos herméticos y ultra seguros en líneas automatizadas de alta velocidad, eliminando por completo la permeación de humedad por las uniones.",
    point4Title: "Durabilidad Estructural en Alta Humedad",
    point4Desc: "Muchos materiales biodegradables absorben humedad del ambiente de forma natural (comportamiento hidrofílico), haciendo que el empaque pierda resistencia mecánica o se delamine en climas tropicales.",
    point4Sol: "Al reticular nuestros biolaminados externos con barnices compostables hidrofóbicos, aseguramos que la integridad estructural y la estética premium de la bolsa se mantengan intactas, sin importar las condiciones externas de la cadena de suministro.",
    point5Title: "Compostabilidad Certificada y Cumplimiento Normativo",
    point5Desc: "Navegar por el complejo panorama de los estándares globales de compostabilidad puede ser un riesgo legal. El uso de materiales 'verdes' no verificados con aditivos de humedad a menudo anula las certificaciones.",
    point5Sol: "Cada capa de nuestro empaque con control de humedad, incluidos los adhesivos de barrera y las tintas, está rigurosamente probada y certificada según las normas ASTM D6400 y EN 13432. Usted recibe un rendimiento sin concesiones con cumplimiento ambiental garantizado.",
    compTitle: "Defensa Absoluta Contra la Humedad vs. Bioplásticos Convencionales",
    compDesc: "Mientras que las bolsas compostables estándar luchan con la transmisión de vapor de humedad, nuestras estructuras diseñadas proporcionan un rendimiento de barrera que rivaliza con el papel de aluminio tradicional, protegiendo sus fórmulas sensibles.",
    faq1Q: "¿Puede el empaque compostable igualar el MVTR del PET metalizado o el aluminio?",
    faq1A: "Sí. Al utilizar aluminio depositado al vacío sobre sustratos celulósicos compostables certificados, logramos tasas de transmisión de vapor de humedad extremadamente bajas que rivalizan con las estructuras convencionales de alta barrera.",
    faq2Q: "¿Los ambientes de alta humedad provocan la degradación prematura del empaque?",
    faq2A: "No. Nuestras películas compostables están diseñadas para requerir las condiciones específicas de un entorno de compostaje (alto calor, microbios específicos y humedad sostenida) para iniciar la descomposición. La humedad ambiental normal no comprometerá su integridad estructural.",
    faq3Q: "¿Cómo afecta esto la eficiencia operativa en mis máquinas de formado, llenado y sellado (FFS)?",
    faq3A: "Nuestras películas están diseñadas con propiedades de deslizamiento específicas y perfiles de sellado térmico estables para funcionar sin problemas en equipos FFS existentes, logrando un alto rendimiento sin atascos ni fallas de sellado."
  },
  fr: {
    title: "Emballage Compostable avec Contrôle d'Humidité | Solutions B2B",
    description: "Découvrez nos emballages compostables à contrôle d'humidité conçus pour les applications industrielles. Protégez vos produits sensibles avec des biomatériaux durables à haute barrière.",
    heroTitle: "Ingénierie Durable pour la Gestion de l'Humidité",
    empathyHook: "Lors de la transition vers des emballages compostables, les fabricants sont souvent confrontés à un dilemme : atteindre la durabilité sans compromettre la barrière contre l'humidité requise pour la stabilité du produit. La condensation et la dégradation prématurée peuvent menacer toute votre chaîne d'approvisionnement.",
    point1Title: "Structures Biopolymères à Haute Barrière",
    point1Desc: "Les films compostables traditionnels échouent souvent à maintenir des taux de transmission de la vapeur d'eau (MVTR) adéquats. Lorsque l'humidité ambiante fluctue, les biofilms mal conçus permettent une pénétration rapide de l'humidité.",
    point1Sol: "Nous utilisons des films cellulosiques métallisés multicouches et des biopolymères avancés offrant des profils MVTR et OTR de pointe, garantissant le conditionnement parfait de votre produit tout en conservant la certification de compostabilité EN 13432.",
    point2Title: "Technologie de Déshydratant Actif Intégrée",
    point2Desc: "Les produits hygroscopiques nécessitent une absorption active de l'humidité. Les sachets de gel de silice standards ne sont ni compostables ni esthétiques, créant une expérience de déballage incohérente.",
    point2Sol: "Nos emballages peuvent intégrer des doublures internes spéciales absorbant l'humidité, fabriquées à partir de déshydratants organiques et biodégradables. Ce mécanisme passif régule le microclimat interne en continu sans sachets séparés.",
    point3Title: "Intégrité du Scellage Hermétique et Prévention des Micro-fuites",
    point3Desc: "Même les films à plus haute barrière échoueront si les scellés sont compromis. Les scellants compostables conventionnels présentent souvent des fenêtres de scellage étroites, entraînant des micro-canaux qui laissent passer l'humidité.",
    point3Sol: "Nous employons des bio-scellants conçus avec précision avec de larges fenêtres d'opération, assurant des scellés ultra-sécurisés et hermétiques sur les lignes d'emballage automatisées à grande vitesse.",
    point4Title: "Durabilité Structurelle sous Forte Humidité",
    point4Desc: "De nombreux matériaux biodégradables absorbent naturellement l'humidité (comportement hydrophile), entraînant une perte de résistance mécanique, des plis ou une délamination dans les climats tropicaux.",
    point4Sol: "En réticulant nos bio-stratifiés externes avec des vernis compostables hydrophobes, nous garantissons que l'intégrité structurelle et l'esthétique premium du sachet restent intactes, quelles que soient les conditions de la chaîne d'approvisionnement.",
    point5Title: "Compostabilité Certifiée et Conformité Réglementaire",
    point5Desc: "Naviguer dans les normes mondiales de compostabilité peut être risqué. L'utilisation de matériaux 'verts' non vérifiés annule souvent les certifications de compostage industriel ou domestique.",
    point5Sol: "Chaque couche de notre emballage, y compris les adhésifs barrières et les encres, est rigoureusement testée et certifiée selon les normes ASTM D6400 et EN 13432. Vous obtenez des performances sans compromis avec une conformité garantie.",
    compTitle: "Défense Inflexible Contre l'Humidité vs Bioplastiques Conventionnels",
    compDesc: "Alors que les sacs compostables standards luttent contre la transmission de la vapeur d'eau, nos structures offrent une performance de barrière rivalisant avec la feuille d'aluminium traditionnelle, protégeant ainsi vos formules sensibles.",
    faq1Q: "Les emballages compostables peuvent-ils égaler le MVTR du PET métallisé ou de l'aluminium ?",
    faq1A: "Oui. En utilisant de l'aluminium déposé sous vide sur des substrats cellulosiques compostables certifiés, nous obtenons des taux de transmission de la vapeur d'eau extrêmement faibles, assurant une longue durée de conservation.",
    faq2Q: "Les environnements très humides déclenchent-ils une dégradation prématurée ?",
    faq2A: "Non. Nos films compostables nécessitent les conditions spécifiques d'un environnement de compostage (forte chaleur, microbes spécifiques et humidité prolongée) pour commencer à se décomposer. L'humidité ambiante normale ne compromettra pas le sachet.",
    faq3Q: "Comment cela affecte-t-il l'efficacité de mes machines de formage-remplissage-scellage (FFS) ?",
    faq3A: "Nos films sont conçus avec des propriétés de glissement spécifiques et des profils de thermoscellage stables pour fonctionner parfaitement sur les équipements FFS existants. Vous pouvez atteindre un débit élevé sans les problèmes courants des bio-résines inférieures."
  },
  "zh-tw": {
    title: "頂級可堆肥防潮包裝 | B2B 工業解決方案",
    description: "探索專為工業應用設計的先進可堆肥防潮包裝。採用可持續的高阻隔生物材料，完美保護對濕度敏感的產品。",
    heroTitle: "致力於永續發展的先進防潮工程",
    empathyHook: "在轉向可堆肥包裝時，製造商經常面臨一個關鍵的兩難：如何在不影響產品穩定性所需的嚴格防潮阻隔的情況下實現永續性。結露、乾燥和過早降解都可能危及您的整個供應鏈。",
    point1Title: "高阻隔生物聚合物結構",
    point1Desc: "傳統的可堆肥薄膜通常無法維持理想的水氣穿透率 (MVTR)。當環境濕度波動時，設計不良的生物薄膜會讓水分迅速滲入，導致產品結塊或變質。",
    point1Sol: "我們採用多層金屬化纖維素薄膜和先進的生物聚合物，提供業界領先的 MVTR 和 OTR (氧氣穿透率) 配置，確保您的產品保持完美狀態，同時保留 EN 13432 可堆肥認證。",
    point2Title: "整合式主動乾燥劑技術",
    point2Desc: "粉末、營養補充品和電子產品等具吸濕性的產品需要主動除濕。標準的矽膠乾燥劑包既不可堆肥也不美觀，會破壞開箱體驗並引發合規性問題。",
    point2Sol: "我們的包裝可整合由有機、可生物降解的乾燥劑製成的特殊吸濕內層。這種被動式濕度控制機制可持續調節內部微氣候，無需放入額外的乾燥劑包。",
    point3Title: "氣密密封完整性與微漏防止",
    point3Desc: "如果袋子的密封受到破壞，即使是最高阻隔的薄膜也會失效。傳統的可堆肥密封材料通常具有較差的熱黏性和狹窄的密封溫度範圍，從而產生讓水分滲透的微通道。",
    point3Sol: "我們採用精密設計的生物密封材料，具有寬廣的操作範圍，確保在高速自動化包裝線上實現超安全的氣密密封，徹底消除接縫處的水分滲透。",
    point4Title: "高濕度下的結構耐用性",
    point4Desc: "許多可生物降解的材料天生會吸收環境中的水分（親水特性），導致包裝在熱帶或高濕度氣候下失去機械強度、起皺或分層。",
    point4Sol: "透過將外部生物層壓板與疏水性可堆肥清漆進行交聯處理，我們確保無論外部供應鏈條件如何，包裝袋的結構完整性和頂級質感都能保持原樣。",
    point5Title: "認證的可堆肥性與法規遵循",
    point5Desc: "應對全球可堆肥標準的複雜環境可能存在法律風險。使用未經認證且含有濕度控制添加劑的「綠色」材料，往往會導致包裝失去工業或家庭堆肥認證。",
    point5Sol: "我們防潮包裝的每一層（包括阻隔黏合劑和油墨）都經過嚴格測試，並通過 ASTM D6400 和 EN 13432 標準認證。您將獲得毫不妥協的防護性能與保證的環境合規性。",
    compTitle: "無與倫比的防潮表現 vs. 傳統生物塑膠",
    compDesc: "標準可堆肥袋在對抗水氣穿透方面表現掙扎，而我們精心設計的結構則提供了足以媲美傳統鋁箔的阻隔性能，保護您的敏感配方與品牌聲譽。",
    faq1Q: "可堆肥包裝能達到傳統金屬化 PET 或鋁箔的 MVTR (水氣穿透率) 嗎？",
    faq1A: "可以。透過在經過認證的可堆肥纖維素基材上進行真空鍍鋁，我們實現了極低的水氣穿透率，足以媲美傳統的高阻隔結構，確保吸濕產品獲得較長的保存期限。",
    faq2Q: "高濕度環境會導致包裝過早降解嗎？",
    faq2A: "不會。我們的可堆肥薄膜經過特殊設計，需要堆肥環境的特定條件（高溫、特定微生物和持續的濕氣）才能開始分解。即使在熱帶氣候中，正常的環境濕度也不會破壞其結構完整性。",
    faq3Q: "這會影響我的自動成型充填封口 (FFS) 機器的運作效率嗎？",
    faq3A: "我們的薄膜具有特定的滑動特性和穩定的熱封分佈，可在現有的 FFS 設備上順暢運行。您可以實現高速生產，而不會出現劣質生物樹脂常見的拖曳、黏附或密封失敗的問題。"
  }
};

const PAGE_NAME = "CompostableHumidityControlPage";

export default function CompostableHumidityControlPage() {
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
