import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Palette, Zap, CheckCircle, Info, Settings, Layout, MousePointer2, FlaskConical, BarChart, Binary, AlertTriangle, Sparkles, FileCheck, ShieldCheck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Custom Brand Packaging Problems (And Solutions)",
    badge: "Pain Points",
    problems: [
      { q: "1. Inconsistent Brand Colors", a: "Solution: Digital color matching and standardized Pantone systems ensure consistency across all production runs." },
      { q: "2. High Minimum Order Quantities (MOQ)", a: "Solution: Digital printing technology allows for low MOQs and cost-effective multi-SKU printing." },
      { q: "3. Poor Quality Materials", a: "Solution: Premium multi-layer laminations and tactile finishes protect the product while elevating brand perception." },
      { q: "4. Long Lead Times", a: "Solution: Agile manufacturing and rapid prototyping significantly reduce lead times for faster product launches." },
      { q: "5. Weak Structural Integrity", a: "Solution: Engineering-grade testing and durable seal technology prevent damage during transit and storage." }
    ],
    customServiceProblems: {
      badge: "SERVICE PAIN POINTS",
      title: "5 Common Custom Brand Packaging Service Problems (And Solutions)",
      p1Title: "1. Brand Color Discrepancy",
      p1Desc: "Variations in ink and printing substrates lead to off-brand colors. Our solution uses digital Pantone color matching and spectroscopic verification for high-precision replication.",
      p2Title: "2. Prohibitive Plate Setup Fees",
      p2Desc: "Traditional rotogravure printing requires expensive setup plates for every SKU. We offer high-fidelity digital printing to bypass plate fees and accommodate small batches.",
      p3Title: "3. Low Shelf Appeal & Standout",
      p3Desc: "Basic printing looks dull, making products look cheap. We integrate advanced finishing like spot UV, tactile varnishes, and hot foil stamping to create premium tactile experiences.",
      p4Title: "4. Slow Pre-Press Verification",
      p4Desc: "Dieline misalignment and format errors delay production. Our automated pre-flight checks and real-time digital proofing accelerate verification to launch products faster.",
      p5Title: "5. Inadequate Barrier Protection",
      p5Desc: "Substandard material selections cause premature product oxidation or spoilage. We design custom multi-layer structures (MET-PET, AL, EVOH) tailored to extend your product's shelf life."
    }
  },
  es: {
    title: "5 Problemas Comunes del Empaque de Marca Personalizada (Y Soluciones)",
    badge: "Puntos Críticos",
    problems: [
      { q: "1. Colores de Marca Inconsistentes", a: "Solución: La coincidencia de color digital y los sistemas Pantone estandarizados garantizan la consistencia en todas las producciones." },
      { q: "2. Altas Cantidades Mínimas de Pedido (MOQ)", a: "Solución: La tecnología de impresión digital permite MOQ bajos y una impresión rentable de múltiples SKU." },
      { q: "3. Materiales de Mala Calidad", a: "Solución: Las laminaciones multicapa premium y los acabados táctiles protegen el producto y elevan la percepción de la marca." },
      { q: "4. Largos Tiempos de Entrega", a: "Solución: La fabricación ágil y el prototipado rápido reducen significativamente los tiempos de entrega." },
      { q: "5. Integridad Estructural Débil", a: "Solución: Las pruebas de grado de ingeniería y la tecnología de sellado duradero evitan daños durante el tránsito." }
    ],
    customServiceProblems: {
      badge: "PUNTOS CRÍTICOS DEL SERVICIO",
      title: "5 Problemas Comunes del Servicio de Empaque de Marca Personalizado (Y Soluciones)",
      p1Title: "1. Discrepancia en los Colores de Marca",
      p1Desc: "Las variaciones en la tinta y los sustratos de impresión alteran el color oficial. Nuestra solución utiliza coincidencia de color digital Pantone y verificación espectroscópica para una réplica de alta precisión.",
      p2Title: "2. Costos de Configuración de Planchas Prohibitivos",
      p2Desc: "El rotograbado tradicional requiere planchas de configuración costosas para cada SKU. Ofrecemos impresión digital de alta fidelidad para evitar tarifas de plancha y acomodar lotes pequeños.",
      p3Title: "3. Pobre Atractivo y Diferenciación en el Estante",
      p3Desc: "La impresión básica se ve opaca, restando valor al producto. Integramos acabados avanzados como barniz UV selectivo, texturas táctiles y estampado en caliente para crear experiencias premium.",
      p4Title: "4. Verificación de Pre-Prensa Lenta",
      p4Desc: "Las desalineaciones de las líneas de troquel y los errores de formato retrasan la producción. Nuestras comprobaciones automatizadas y pruebas digitales en tiempo real aceleran el proceso de verificación.",
      p5Title: "5. Protección de Barrera Inadecuada",
      p5Desc: "La selección incorrecta de materiales causa la oxidación prematura o el deterioro del producto. Diseñamos estructuras multicapa personalizadas (MET-PET, AL, EVOH) adaptadas para prolongar la vida útil."
    }
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage de Marque Personnalisé (Et Solutions)",
    badge: "Points Douloureux",
    problems: [
      { q: "1. Couleurs de Marque Incohérentes", a: "Solution : La correspondance des couleurs numériques et les systèmes Pantone standardisés assurent la cohérence de toutes les productions." },
      { q: "2. Quantités Minimales de Commande (MOQ) Élevées", a: "Solution : La technologie d'impression numérique permet des MOQ faibles et une impression multi-SKU rentable." },
      { q: "3. Matériaux de Mauvaise Qualité", a: "Solution : Les stratifications multicouches de qualité supérieure et les finitions tactiles protègent le produit tout en valorisant la marque." },
      { q: "4. Délais de Livraison Longs", a: "Solution : La fabrication agile et le prototypage rapide réduisent considérablement les délais de livraison." },
      { q: "5. Faible Intégrité Structurelle", a: "Solution : Les tests de niveau technique et la technologie de scellage durable préviennent les dommages pendant le transport." }
    ],
    customServiceProblems: {
      badge: "POINTS CRITIQUES DU SERVICE",
      title: "5 Problèmes Courants du Service d'Emballage Personnalisé (Et Solutions)",
      p1Title: "1. Écart de Couleur de la Marque",
      p1Desc: "Les variations d'encre et de supports d'impression altèrent les couleurs de la marque. Notre solution utilise la correspondance de couleurs Pantone numérique et la vérification spectroscopique pour une reproduction de haute précision.",
      p2Title: "2. Frais de Clichés Prohibitifs",
      p2Desc: "L'héliogravure traditionnelle nécessite des plaques d'impression coûteuses pour chaque SKU. Nous proposons l'impression numérique haute fidélité pour éliminer ces frais et s'adapter aux petits lots.",
      p3Title: "3. Faible Impact Visuel en Rayon",
      p3Desc: "L'impression basique manque de relief et dévalorise le produit. Nous intégrons des finitions avancées telles que le vernis sélectif, les vernis tactiles et le marquage à chaud pour créer des expériences haut de gamme.",
      p4Title: "4. Vérification Prépresse Lente",
      p4Desc: "Les erreurs de tracé de découpe et de format retardent la production. Nos contrôles automatisés et nos épreuves numériques en temps réel accélèrent la validation pour un lancement plus rapide.",
      p5Title: "5. Protection de Barrière Insuffisante",
      p5Desc: "Un choix de matériaux inadapté entraîne l'oxydation prématurée ou la détérioration du produit. Nous concevons des structures multicouches personnalisées (MET-PET, AL, EVOH) adaptées pour maximiser la durée de conservation."
    }
  },
  'zh-TW': {
    title: "客製化品牌包裝的5個常見問題（及解決方案）",
    badge: "痛點分析",
    problems: [
      { q: "1. 品牌顏色不一致", a: "解決方案：數位色彩匹配和標準化 Pantone 系統確保所有生產批次顏色一致性。" },
      { q: "2. 最低訂購量（MOQ）過高", a: "解決方案：數位印刷技術允許低起訂量，並實現具成本效益的多 SKU 印刷。" },
      { q: "3. 材質品質低劣", a: "解決方案：優質多層壓膜和觸感處理可保護產品，同時提升品牌形象。" },
      { q: "4. 交貨時間過長", a: "解決方案：敏捷製造和快速原型製作可顯著縮短交貨時間，幫助產品更快上市。" },
      { q: "5. 結構完整性較弱", a: "解決方案：工程級測試和耐用密封技術可防止在運輸和儲存過程中受損。" }
    ],
    customServiceProblems: {
      badge: "服務痛點分析",
      title: "客製化品牌包裝服務的 5 個常見問題（及解決方案）",
      p1Title: "1. 品牌色彩偏差",
      p1Desc: "油墨 and 印刷材質的差異會導致顏色失真。我們的解決方案使用數位 Pantone 色彩匹配和光譜儀驗證，確保高精度色彩重現。",
      p2Title: "2. 昂貴的版費門檻",
      p2Desc: "傳統凹版印刷需要為每個 SKU 製作昂貴的印版。我們提供高保真數位印刷，免收版費，靈活支持小批量訂單。",
      p3Title: "3. 貨架吸引力不足",
      p3Desc: "普通印刷顯得單調，使產品看起來廉價。我們整合局部 UV、觸感光油和燙金等高級工藝，打造極具質感的觸覺與視覺體驗。",
      p4Title: "4. 印前審核流程緩慢",
      p4Desc: "刀模線對齊出錯和格式問題經常拖延生產。我們的自動印前檢查系統與即時數位打樣可縮短審核週期，加快產品上市。",
      p5Title: "5. 阻隔保護性能不足",
      p5Desc: "不合格的包裝材質會導致產品提前氧化或變質。我們針對產品特性，設計專屬的多層複合結構（MET-PET、AL、EVOH），有效延長保質期。"
    }
  }
};

export const sectionsForPouch = ["5 Common Custom Brand Packaging Service Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Custom Brand Packaging Service Problems (And Solutions)"];

const PouchCustomBrandPackagingServicePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchCustomBrandPackagingServicePage'
  const baseUrl = getBaseUrl()
  const currentLang = i18n?.language || 'en'
  const localT = translations[currentLang] || translations['en']

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/custom-brand-solutions`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-magenta-400 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">{t(`${p}.hero.badge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.desc`)}
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">{t(`${p}.hero.btnStart`)}</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">{t(`${p}.hero.btnColor`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Structural Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">{t(`${p}.structural.badge`)}</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
              {t(`${p}.structural.title`).split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              {t(`${p}.structural.desc`)}
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Binary className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t(`${p}.structural.item1Title`)}</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">{t(`${p}.structural.item1Desc`)}</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Layout className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t(`${p}.structural.item2Title`)}</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">{t(`${p}.structural.item2Desc`)}</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-magenta-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t(`${p}.structural.imgAlt`)} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">{localT.badge}</NeoBadge>
            <h2 className="mt-6 font-black text-4xl md:text-5xl uppercase italic text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              {localT.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {localT.problems.map((prob: any, idx: number) => (
                <NeoCard key={idx} color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-xl uppercase text-black">{prob.q}</h4>
                      <p className="mt-2 text-sm text-gray-800">{prob.a}</p>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-magenta-400 translate-x-6 translate-y-6 border-4 border-black" />
              <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
                <img 
                  src="/imgs/knowledge/custom-brand-packaging-pain-points.jpg" 
                  alt="Custom Brand Packaging Service Pain Points" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Custom Brand Packaging Service Problems (And Solutions) Section */}
      <section className="py-24 bg-neutral-50 border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{localT.customServiceProblems.badge}</NeoBadge>
            <h2 className="mt-6 font-black text-4xl md:text-5xl uppercase italic text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              {localT.customServiceProblems.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { title: localT.customServiceProblems.p1Title, desc: localT.customServiceProblems.p1Desc, icon: Palette },
                { title: localT.customServiceProblems.p2Title, desc: localT.customServiceProblems.p2Desc, icon: Zap },
                { title: localT.customServiceProblems.p3Title, desc: localT.customServiceProblems.p3Desc, icon: Sparkles },
                { title: localT.customServiceProblems.p4Title, desc: localT.customServiceProblems.p4Desc, icon: FileCheck },
                { title: localT.customServiceProblems.p5Title, desc: localT.customServiceProblems.p5Desc, icon: ShieldCheck }
              ].map((problem, i) => (
                <NeoCard key={i} color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4">
                    <problem.icon className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-xl uppercase text-black">{problem.title}</h4>
                      <p className="mt-2 text-sm text-gray-800">{problem.desc}</p>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-magenta-400 translate-x-6 translate-y-6 border-4 border-black" />
              <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
                <ClickableImage 
                  src="/imgs/knowledge/custom-brand-packaging-service-pain-points.jpg" 
                  alt="Custom Brand Packaging Service Problems and Solutions" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">{t(`${p}.deep.title1`)}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t(`${p}.deep.p1`)}
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <Palette className="text-magenta-500" /> {t(`${p}.deep.title2`)}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-black uppercase">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="p-4 border-r border-white/20">{t(`${p}.deep.th1`)}</th>
                        <th className="p-4 border-r border-white/20">{t(`${p}.deep.th2`)}</th>
                        <th className="p-4">{t(`${p}.deep.th3`)}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black">
                      <tr className="bg-[#F0F0F0]">
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td1`)}</td>
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td2`)}</td>
                        <td className="p-4">{t(`${p}.deep.td3`)}</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td4`)}</td>
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td5`)}</td>
                        <td className="p-4">{t(`${p}.deep.td6`)}</td>
                      </tr>
                      <tr className="bg-[#F0F0F0]">
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td7`)}</td>
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td8`)}</td>
                        <td className="p-4">{t(`${p}.deep.td9`)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">{t(`${p}.deep.title3`)}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t(`${p}.deep.p2`)}
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Zap className="text-magenta-400" /> {t(`${p}.aside.badge1`)}</h4>
                <p className="text-sm">{t(`${p}.aside.desc1`)}</p>
                <NeoButton variant="primary" className="mt-8 !bg-magenta-400 !text-white w-full border-2 border-white" to="/quote">{t(`${p}.aside.btnArtwork`)}</NeoButton>
              </NeoCard>
              <div className="bg-[#F0F0F0] p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><MousePointer2 /> {t(`${p}.aside.badge2`)}</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish1`)}</div>
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish2`)}</div>
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish3`)}</div>
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish4`)}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            {t(`${p}.cta.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <NeoButton variant="primary" className="!bg-magenta-400 !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            {t(`${p}.cta.btn`)}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomBrandPackagingServicePage
