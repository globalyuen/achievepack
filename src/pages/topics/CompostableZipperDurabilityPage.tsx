import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';
import { Building2, ShieldCheck, Factory, Leaf } from 'lucide-react';

const localTranslations = {
  en: {
    title: "Compostable Zipper Durability: Engineering Solutions for Sustainable Packaging",
    description: "Discover advanced engineering solutions for compostable zipper durability. Overcome manufacturing pain points with high-performance, eco-friendly resealable packaging.",
    heroTitle: "Engineering Flawless Compostable Zipper Durability",
    empathyHook: "Transitioning to sustainable packaging shouldn't mean compromising on performance. We understand the frustration of compostable zippers failing on the production line or in the consumer's hands. Our structural engineering approach eliminates these pain points.",
    point1Title: "Brittle Zipper Flanges During Ultrasonic Welding",
    point1Desc: "Compostable resins like PLA and PBAT often become brittle when subjected to high-heat ultrasonic welding, leading to micro-fractures and loss of hermetic seals.",
    point1Sol: "We utilize advanced co-extruded bio-polymer blends with optimized heat-seal windows, allowing for lower sealing temperatures that preserve flange integrity and seal strength.",
    point2Title: "Premature Zipper Track Separation",
    point2Desc: "Standard compostable zippers lack the mechanical interlocking strength of traditional PE/PP, causing the tracks to separate under internal product weight or pressure.",
    point2Sol: "Our proprietary asymmetric track design increases the interlocking surface area by 30%, ensuring robust holding power that exceeds standard burst test requirements.",
    point3Title: "Moisture-Induced Degradation During Storage",
    point3Desc: "Hygroscopic compostable materials can absorb ambient moisture in the warehouse, compromising the structural stability of the zipper before it even reaches the filling line.",
    point3Sol: "We engineer a high-barrier bio-based sealant layer that prevents moisture ingress, extending the shelf-life and structural stability of the zipper track prior to conversion.",
    point4Title: "Inconsistent Zipper Crush at Side Gussets",
    point4Desc: "When forming pouches, the zipper crush zones at the side gussets often result in pinholes or weak spots due to the poor flow characteristics of standard compostable films.",
    point4Sol: "We apply a specialized localized spot-seal technology with modified tooling pressure to ensure perfect polymer flow, eliminating pinholes and ensuring a 100% leak-proof gusset.",
    point5Title: "Poor Consumer Re-closability Experience",
    point5Desc: "Consumers often complain that compostable zippers are difficult to align and close, or they lose their tactile 'click' after a few uses, leading to food waste.",
    point5Sol: "Our engineered zippers feature an enhanced acoustic profile and alignment guides, providing a satisfying tactile feedback and reliable re-closure for up to 50 uses.",
    compTitle: "Standard vs. Engineered Compostable Zippers",
    compDesc: "See how our advanced bio-polymer engineering compares to off-the-shelf compostable zipper solutions in critical performance metrics.",
    faq1Q: "How does the durability of your compostable zippers compare to traditional PE zippers?",
    faq1A: "Through advanced bio-polymer blending and structural track design, our compostable zippers match the mechanical strength and burst pressure ratings of traditional PE zippers, while maintaining full EN 13432 and ASTM D6400 compliance.",
    faq2Q: "Do I need to modify my current filling line equipment?",
    faq2A: "Our compostable zippers are designed as drop-in replacements. We provide specific heat-seal temperature and dwell time profiles to ensure seamless integration with your existing VFFS or HFFS equipment without major retrofitting.",
    faq3Q: "Are these zippers certified for home compostability or just industrial?",
    faq3A: "We offer formulations certified for both industrial (EN 13432) and home composting (TÜV AUSTRIA OK compost HOME), depending on the specific barrier requirements and structural needs of your product."
  },
  es: {
    title: "Durabilidad de Cierres Compostables: Soluciones de Ingeniería para Empaques Sostenibles",
    description: "Descubra soluciones de ingeniería avanzadas para la durabilidad de cierres compostables. Supere los problemas de fabricación con empaques resellables de alto rendimiento y ecológicos.",
    heroTitle: "Ingeniería para una Durabilidad Impecable en Cierres Compostables",
    empathyHook: "La transición a empaques sostenibles no debería significar comprometer el rendimiento. Entendemos la frustración de que los cierres compostables fallen en la línea de producción o en las manos del consumidor. Nuestro enfoque de ingeniería estructural elimina estos problemas.",
    point1Title: "Bridas de Cierre Quebradizas Durante la Soldadura Ultrasónica",
    point1Desc: "Las resinas compostables como PLA y PBAT a menudo se vuelven quebradizas cuando se someten a soldadura ultrasónica de alto calor, lo que provoca microfracturas y la pérdida del sellado hermético.",
    point1Sol: "Utilizamos mezclas avanzadas de biopolímeros coextrudidos con ventanas de termosellado optimizadas, permitiendo temperaturas de sellado más bajas que preservan la integridad de la brida y la resistencia del sello.",
    point2Title: "Separación Prematura del Riel del Cierre",
    point2Desc: "Los cierres compostables estándar carecen de la fuerza de enclavamiento mecánico del PE/PP tradicional, causando que los rieles se separen bajo el peso o la presión interna del producto.",
    point2Sol: "Nuestro diseño de riel asimétrico patentado aumenta el área de superficie de enclavamiento en un 30%, asegurando un poder de retención robusto que supera los requisitos estándar de las pruebas de estallido.",
    point3Title: "Degradación Inducida por la Humedad Durante el Almacenamiento",
    point3Desc: "Los materiales compostables higroscópicos pueden absorber la humedad ambiental en el almacén, comprometiendo la estabilidad estructural del cierre antes de que llegue a la línea de llenado.",
    point3Sol: "Diseñamos una capa de sellado de base biológica de alta barrera que previene la entrada de humedad, extendiendo la vida útil y la estabilidad estructural del riel del cierre antes de la conversión.",
    point4Title: "Aplastamiento Inconsistente del Cierre en los Fuelles Laterales",
    point4Desc: "Al formar bolsas, las zonas de aplastamiento del cierre en los fuelles laterales a menudo resultan en microperforaciones o puntos débiles debido a las malas características de flujo de las películas compostables estándar.",
    point4Sol: "Aplicamos una tecnología de sellado por puntos localizado especializado con presión de herramientas modificada para asegurar un flujo de polímero perfecto, eliminando microperforaciones y garantizando un fuelle 100% a prueba de fugas.",
    point5Title: "Mala Experiencia de Resellado para el Consumidor",
    point5Desc: "Los consumidores a menudo se quejan de que los cierres compostables son difíciles de alinear y cerrar, o pierden su 'clic' táctil después de unos pocos usos, lo que lleva al desperdicio de alimentos.",
    point5Sol: "Nuestros cierres de ingeniería cuentan con un perfil acústico mejorado y guías de alineación, proporcionando una retroalimentación táctil satisfactoria y un resellado confiable por hasta 50 usos.",
    compTitle: "Cierres Compostables Estándar vs. Diseñados por Ingeniería",
    compDesc: "Vea cómo nuestra avanzada ingeniería de biopolímeros se compara con las soluciones de cierres compostables estándar en métricas de rendimiento críticas.",
    faq1Q: "¿Cómo se compara la durabilidad de sus cierres compostables con la de los cierres de PE tradicionales?",
    faq1A: "A través de la mezcla avanzada de biopolímeros y el diseño estructural del riel, nuestros cierres compostables igualan la resistencia mecánica y las clasificaciones de presión de estallido de los cierres de PE tradicionales, manteniendo al mismo tiempo el pleno cumplimiento con EN 13432 y ASTM D6400.",
    faq2Q: "¿Necesito modificar mi equipo de la línea de llenado actual?",
    faq2A: "Nuestros cierres compostables están diseñados como reemplazos directos. Proporcionamos perfiles específicos de temperatura de termosellado y tiempo de permanencia para asegurar una integración perfecta con su equipo VFFS o HFFS existente sin necesidad de reacondicionamientos importantes.",
    faq3Q: "¿Están estos cierres certificados para compostaje doméstico o solo industrial?",
    faq3A: "Ofrecemos formulaciones certificadas tanto para compostaje industrial (EN 13432) como doméstico (TÜV AUSTRIA OK compost HOME), dependiendo de los requisitos específicos de barrera y las necesidades estructurales de su producto."
  },
  fr: {
    title: "Durabilité des Zips Compostables : Solutions d'Ingénierie pour Emballages Durables",
    description: "Découvrez des solutions d'ingénierie avancées pour la durabilité des zips compostables. Surmontez les problèmes de fabrication avec des emballages refermables écologiques et performants.",
    heroTitle: "Ingénierie pour une Durabilité Infaillible des Zips Compostables",
    empathyHook: "La transition vers des emballages durables ne devrait pas signifier faire des compromis sur les performances. Nous comprenons la frustration des zips compostables qui échouent sur la chaîne de production ou entre les mains du consommateur. Notre approche d'ingénierie structurelle élimine ces problèmes.",
    point1Title: "Brides de Zip Cassantes Lors du Soudage par Ultrasons",
    point1Desc: "Les résines compostables comme le PLA et le PBAT deviennent souvent cassantes lorsqu'elles sont soumises à un soudage par ultrasons à haute température, entraînant des micro-fractures et une perte de joints hermétiques.",
    point1Sol: "Nous utilisons des mélanges de biopolymères coextrudés avancés avec des fenêtres de thermoscellage optimisées, permettant des températures de scellage plus basses qui préservent l'intégrité de la bride et la résistance du joint.",
    point2Title: "Séparation Prématurée de la Glissière du Zip",
    point2Desc: "Les zips compostables standards n'ont pas la force de verrouillage mécanique du PE/PP traditionnel, ce qui entraîne la séparation des glissières sous le poids ou la pression interne du produit.",
    point2Sol: "Notre conception exclusive de glissière asymétrique augmente la surface de verrouillage de 30 %, garantissant une force de maintien robuste qui dépasse les exigences des tests d'éclatement standards.",
    point3Title: "Dégradation Induite par l'Humidité Pendant le Stockage",
    point3Desc: "Les matériaux compostables hygroscopiques peuvent absorber l'humidité ambiante dans l'entrepôt, compromettant la stabilité structurelle du zip avant même qu'il n'atteigne la chaîne de remplissage.",
    point3Sol: "Nous concevons une couche de scellant biosourcée à haute barrière qui empêche la pénétration de l'humidité, prolongeant la durée de conservation et la stabilité structurelle de la glissière du zip avant la conversion.",
    point4Title: "Écrasement Incohérent du Zip aux Soufflets Latéraux",
    point4Desc: "Lors de la formation des sachets, les zones d'écrasement du zip aux soufflets latéraux entraînent souvent des micro-trous ou des points faibles en raison des mauvaises caractéristiques d'écoulement des films compostables standards.",
    point4Sol: "Nous appliquons une technologie spécialisée de scellage par points localisé avec une pression d'outillage modifiée pour assurer un écoulement parfait du polymère, éliminant les micro-trous et garantissant un soufflet 100 % étanche.",
    point5Title: "Mauvaise Expérience de Refermeture pour le Consommateur",
    point5Desc: "Les consommateurs se plaignent souvent que les zips compostables sont difficiles à aligner et à fermer, ou qu'ils perdent leur « clic » tactile après quelques utilisations, entraînant un gaspillage alimentaire.",
    point5Sol: "Nos zips techniques présentent un profil acoustique amélioré et des guides d'alignement, offrant un retour tactile satisfaisant et une refermeture fiable jusqu'à 50 utilisations.",
    compTitle: "Zips Compostables Standards vs Techniques",
    compDesc: "Découvrez comment notre ingénierie avancée des biopolymères se compare aux solutions de zips compostables standards sur les critères de performance critiques.",
    faq1Q: "Comment la durabilité de vos zips compostables se compare-t-elle à celle des zips en PE traditionnels ?",
    faq1A: "Grâce à un mélange avancé de biopolymères et à une conception structurelle des glissières, nos zips compostables égalent la résistance mécanique et les indices de pression d'éclatement des zips en PE traditionnels, tout en maintenant une conformité totale avec les normes EN 13432 et ASTM D6400.",
    faq2Q: "Dois-je modifier mon équipement de ligne de remplissage actuel ?",
    faq2A: "Nos zips compostables sont conçus comme des remplacements directs. Nous fournissons des profils spécifiques de température de thermoscellage et de temps de maintien pour assurer une intégration transparente avec votre équipement VFFS ou HFFS existant sans modifications majeures.",
    faq3Q: "Ces zips sont-ils certifiés pour le compostage domestique ou seulement industriel ?",
    faq3A: "Nous proposons des formulations certifiées pour le compostage industriel (EN 13432) et domestique (TÜV AUSTRIA OK compost HOME), en fonction des exigences de barrière spécifiques et des besoins structurels de votre produit."
  },
  "zh-tw": {
    title: "可堆肥夾鏈耐用性：永續包裝的工程解決方案",
    description: "探索針對可堆肥夾鏈耐用性的先進工程解決方案。透過高性能、環保的可重複密封包裝，克服製造過程中的痛點。",
    heroTitle: "打造完美無瑕的可堆肥夾鏈耐用性",
    empathyHook: "轉向永續包裝不應意味著在性能上妥協。我們了解可堆肥夾鏈在生產線上或消費者手中失效時帶來的挫折。我們的結構工程方法能徹底消除這些痛點。",
    point1Title: "超音波焊接期間夾鏈邊緣脆化",
    point1Desc: "像 PLA 和 PBAT 等可堆肥樹脂在經受高溫超音波焊接時往往會變脆，導致微裂紋和氣密密封的喪失。",
    point1Sol: "我們採用具有最佳化熱封區間的先進共擠生物聚合物混合物，允許在較低的密封溫度下作業，從而保持夾鏈邊緣的完整性和密封強度。",
    point2Title: "夾鏈軌道過早分離",
    point2Desc: "標準可堆肥夾鏈缺乏傳統 PE/PP 的機械互鎖強度，導致軌道在產品內部重量或壓力下分離。",
    point2Sol: "我們專利的不對稱軌道設計將互鎖表面積增加了 30%，確保提供超過標準破裂測試要求的強大保持力。",
    point3Title: "儲存期間水分引起的降解",
    point3Desc: "吸濕性可堆肥材料會吸收倉庫中的環境水分，在夾鏈到達填充線之前就損害其結構穩定性。",
    point3Sol: "我們設計了一種高阻隔生物基密封層，可防止水分侵入，延長轉換前夾鏈軌道的保存期限和結構穩定性。",
    point4Title: "側邊折角處夾鏈壓碎不均",
    point4Desc: "在製袋時，側邊折角處的夾鏈壓碎區通常會因為標準可堆肥薄膜的流動特性不佳而產生針孔或弱點。",
    point4Sol: "我們應用了專門的局部點密封技術，並調整了模具壓力，以確保完美的聚合物流動，消除針孔並確保折角處 100% 防漏。",
    point5Title: "消費者重複密封體驗不佳",
    point5Desc: "消費者經常抱怨可堆肥夾鏈難以對齊和關閉，或者在使用幾次後就失去了觸覺上的「喀噠」聲，導致食物浪費。",
    point5Sol: "我們經過工程設計的夾鏈具有增強的聲學輪廓和對齊導引，提供令人滿意的觸覺回饋以及高達 50 次的可靠重複密封。",
    compTitle: "標準 vs. 工程可堆肥夾鏈",
    compDesc: "了解我們先進的生物聚合物工程在關鍵性能指標上如何與現成的可堆肥夾鏈解決方案進行比較。",
    faq1Q: "您們的可堆肥夾鏈的耐用性與傳統 PE 夾鏈相比如何？",
    faq1A: "透過先進的生物聚合物混合和結構軌道設計，我們的可堆肥夾鏈可達到與傳統 PE 夾鏈相同的機械強度和破裂壓力等級，同時保持完全符合 EN 13432 和 ASTM D6400 標準。",
    faq2Q: "我需要修改目前的填充線設備嗎？",
    faq2A: "我們的可堆肥夾鏈被設計為直接替換的零件。我們提供特定的熱封溫度和停留時間配置，以確保與您現有的 VFFS 或 HFFS 設備無縫整合，而無需進行重大改裝。",
    faq3Q: "這些夾鏈是經過家庭堆肥認證還是僅限於工業堆肥認證？",
    faq3A: "我們提供經過工業堆肥 (EN 13432) 和家庭堆肥 (TÜV AUSTRIA OK compost HOME) 認證的配方，具體取決於您產品的特定阻隔要求和結構需求。"
  }
};

const PAGE_NAME = "CompostableZipperDurabilityPage";

export default function CompostableZipperDurabilityPage() {
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
