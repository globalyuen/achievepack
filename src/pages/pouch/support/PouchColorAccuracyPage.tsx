import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Monitor, Printer, Palette, CheckCircle, AlertTriangle, Layers, Sun, Image as ImageIcon } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    sectionTitle: "5 Common Color Accuracy Problems (And Solutions)",
    p1Title: "1. Screen-to-Print Mismatch (RGB vs CMYK)",
    p1Desc: "Problem: Colors on screen (glowing light) look duller when printed (absorbing ink).\nSolution: Convert RGB artwork to CMYK early in the design process and use standardized Pantone (PMS) reference books.",
    p2Title: "2. Unpredictable Shifts in Group Printing",
    p2Desc: "Problem: Small batches printed together share ink profiles, causing slight variances.\nSolution: Opt for individual runs for strict brand colors, or accept a 10% variance for cost efficiency.",
    p3Title: "3. Substrate Influence on Color",
    p3Desc: "Problem: The material (matte vs glossy plastic, kraft paper) changes how ink absorbs and reflects.\nSolution: Always request physical proofs on the exact substrate material before full production.",
    p4Title: "4. Lighting Conditions (Metamerism)",
    p4Desc: "Problem: Colors appear differently under daylight, fluorescent, and LED store lights.\nSolution: Evaluate color proofs under standardized D50 (5000K) lighting conditions.",
    p5Title: "5. Gradients and Banding",
    p5Desc: "Problem: Smooth digital gradients can look stepped or banded when printed.\nSolution: Add slight noise to gradients and ensure high-resolution (300 DPI) vector formats are used."
  },
  es: {
    sectionTitle: "5 Problemas Comunes de Precisión de Color (y Soluciones)",
    p1Title: "1. Desajuste entre Pantalla e Impresión (RGB vs CMYK)",
    p1Desc: "Problema: Los colores en pantalla brillan, pero impresos se ven más apagados.\nSolución: Convierta el arte RGB a CMYK al inicio y use guías Pantone (PMS).",
    p2Title: "2. Cambios Impredecibles en Impresión Grupal",
    p2Desc: "Problema: Lotes pequeños impresos juntos comparten perfiles de tinta, causando variaciones.\nSolución: Elija tiradas individuales para colores estrictos o acepte una variación del 10% para ahorrar costos.",
    p3Title: "3. Influencia del Sustrato en el Color",
    p3Desc: "Problema: El material cambia la forma en que la tinta se absorbe y refleja la luz.\nSolución: Solicite siempre pruebas físicas en el material exacto antes de la producción total.",
    p4Title: "4. Condiciones de Iluminación (Metamerismo)",
    p4Desc: "Problema: Los colores se ven diferentes bajo luz diurna, fluorescente o LED.\nSolución: Evalúe las pruebas de color bajo iluminación estandarizada D50 (5000K).",
    p5Title: "5. Degradados y Bandas",
    p5Desc: "Problema: Los degradados suaves pueden verse escalonados al imprimirse.\nSolución: Añada un ligero ruido a los degradados y use formatos vectoriales de alta resolución (300 DPI)."
  },
  fr: {
    sectionTitle: "5 Problèmes Courants de Précision des Couleurs (et Solutions)",
    p1Title: "1. Décalage Écran-Impression (RVB vs CMJN)",
    p1Desc: "Problème : Les couleurs à l'écran sont plus vives qu'imprimées.\nSolution : Convertissez les créations RVB en CMJN tôt et utilisez des nuanciers Pantone (PMS).",
    p2Title: "2. Variations Imprévisibles en Impression Groupée",
    p2Desc: "Problème : Les petits lots partagent des profils d'encre, causant des écarts.\nSolution : Optez pour des tirages individuels pour des couleurs strictes, ou acceptez un écart de 10 % pour réduire les coûts.",
    p3Title: "3. Influence du Support sur la Couleur",
    p3Desc: "Problème : Le matériau modifie l'absorption et la réflexion de l'encre.\nSolution : Demandez toujours des épreuves physiques sur le support exact avant production.",
    p4Title: "4. Conditions d'Éclairage (Métamérisme)",
    p4Desc: "Problème : Les couleurs varient sous la lumière du jour, fluorescente ou LED.\nSolution : Évaluez les épreuves sous un éclairage standardisé D50 (5000K).",
    p5Title: "5. Dégradés et Effet de Bande",
    p5Desc: "Problème : Les dégradés numériques peuvent apparaître sous forme de bandes à l'impression.\nSolution : Ajoutez un léger bruit aux dégradés et utilisez des formats vectoriels haute résolution."
  },
  "zh-TW": {
    sectionTitle: "5個常見的色彩準確度問題（與解決方案）",
    p1Title: "1. 螢幕與印刷的色差 (RGB vs CMYK)",
    p1Desc: "問題：螢幕上的顏色看起來比印刷出來的更鮮豔。\n解決方案：在設計初期將 RGB 轉換為 CMYK，並使用標準的 Pantone (PMS) 色票。",
    p2Title: "2. 併版印刷中不可預測的色偏",
    p2Desc: "問題：小批量併版印刷共用墨水設定，導致輕微的顏色變化。\n解決方案：對於嚴格的品牌色彩選擇獨立開版，或接受 10% 的色差以節省成本。",
    p3Title: "3. 材質對顏色的影響",
    p3Desc: "問題：材質（霧面、亮面、牛皮紙）會改變墨水的吸收和反射方式。\n解決方案：在大批量生產前，務必索取實際材質的實體打樣。",
    p4Title: "4. 照明條件 (條件等色)",
    p4Desc: "問題：顏色在日光、螢光燈和 LED 燈下看起來不同。\n解決方案：在標準化的 D50 (5000K) 照明條件下評估色彩打樣。",
    p5Title: "5. 漸層與斷層現象",
    p5Desc: "問題：平滑的數位漸層在印刷時可能會出現階梯狀或斷層。\n解決方案：在漸層中加入輕微的雜訊，並確保使用高解析度 (300 DPI) 的向量格式。"
  }
};

export default function PouchColorAccuracyPage() {
  const { t, i18n } = useTranslation();
  const p = 'seoPages.pages.pouchColorAccuracy';

  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations;
  const localT = localTranslations[currentLang] || localTranslations['en'];
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.seo.title`, "Color Accuracy in Digital Printing | POUCH.ECO")
  const description = t(`${p}.seo.description`, "Understand the digital vs. physical color gap. Learn why standard group printing causes a 10% variance and when you need an individual color run.")

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/support/color-accuracy-digital-printing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#db2777] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.hero.label`, "COLOR_GUIDE: DIGITAL_V_PHYSICAL")}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.hero.titleLine1`, "RGB vs.")}<br/>
                <span className="text-[#db2777]">{t(`${p}.hero.titleLine2`, "CMYK")}</span><br/>
                {t(`${p}.hero.titleLine3`, "Reality.")}
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.bullet1`, "> Screens glow. Ink absorbs.")}<br/>
                {t(`${p}.hero.bullet2`, "> Expect a 10% natural variance.")}<br/>
                {t(`${p}.hero.bullet3`, "> Precision runs vs Group efficiency.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.hero.cta`, "Talk to an Expert")}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#facc15] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-white p-4">
                  <img 
                    src="/imgs/support/color-accuracy.png" 
                    alt={t(`${p}.hero.imgAlt`, "Digital Printing Color Accuracy")} 
                    className="w-full h-full object-cover border-2 border-black"
                  />
                  <motion.div animate={floatAnim} className="absolute top-8 right-8 bg-[#db2777] text-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.hero.hexLabel`, "HEX #B99A5A")}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#db2777] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.deepDive.titleLine1`, "The Digital vs.")} <span className="text-[#db2777]">{t(`${p}.deepDive.titleLine2`, "Physical Gap")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.deepDive.intro1`, "To ensure we achieve the best result for your packaging, there are a few technical realities regarding color that are important to consider before we move to production. The hex code you provided (e.g., ")}<strong>#b99a5a</strong>{t(`${p}.deepDive.intro2`, ") is a digital value designed for screens (RGB). Physical printing presses use ink (CMYK).")}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Monitor className="w-8 h-8 mb-4 text-[#db2777]" />
                <h4 className="font-['Space_Grotesk'] font-black uppercase text-xl mb-2">{t(`${p}.deepDive.features.screenVariance.title`, "Screen Variance")}</h4>
                <p className="text-sm">{t(`${p}.deepDive.features.screenVariance.desc`, 'Every monitor displays color differently depending on its brightness and calibration. The "gold" you see on your phone will look different than the "gold" on your laptop.')}</p>
              </div>
              <div className="bg-[#facc15] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                <Palette className="w-8 h-8 mb-4 text-black" />
                <h4 className="font-['Space_Grotesk'] font-black uppercase text-xl mb-2">{t(`${p}.deepDive.features.rule10.title`, "The 10% Rule")}</h4>
                <p className="text-sm">{t(`${p}.deepDive.features.rule10.desc1`, "Because light (screen) and ink (paper/plastic) are different mediums, a ")}<strong>{t(`${p}.deepDive.features.rule10.descHighlight`, "10% color discrepancy")}</strong>{t(`${p}.deepDive.features.rule10.desc2`, " is a standard industry expectation. The printed version will naturally be more matte than a glowing screen.")}</p>
              </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.groupPrinting.title`, "Standard Group Printing")}</h3>
            <p>
              {t(`${p}.deepDive.groupPrinting.desc1`, "Most orders are produced via ")}<strong>{t(`${p}.deepDive.groupPrinting.descHighlight`, "Group Printing")}</strong>{t(`${p}.deepDive.groupPrinting.desc2`, ", where your artwork is laid out on a large sheet with other clients' designs.")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{t(`${p}.deepDive.groupPrinting.bullet1Label`, "Efficiency vs Control:")}</strong> {t(`${p}.deepDive.groupPrinting.bullet1Desc`, "Because multiple designs are printed at once on standard materials, we cannot \"tweak\" the ink levels for just one design.")}</li>
              <li><strong>{t(`${p}.deepDive.groupPrinting.bullet2Label`, "The Result:")}</strong> {t(`${p}.deepDive.groupPrinting.bullet2Desc`, "This keeps costs incredibly low for small batches, but it means we cannot guarantee a 100% exact color match to your monitor.")}</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.individualRun.title`, "Individual Run (Precision Scaling)")}</h3>
            <p>
              {t(`${p}.deepDive.individualRun.desc1`, "If your brand requires 100% color precision, we can perform an ")}<strong>{t(`${p}.deepDive.individualRun.descHighlight`, "Individual Run")}</strong>{t(`${p}.deepDive.individualRun.desc2`, ". This means the press is set up exclusively for your design, allowing us to calibrate the color exactly. However, because the setup labor is the same regardless of quantity, the cost per unit is higher for smaller orders:")}
            </p>

            <div className="my-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-4 border-black">
                    <th className="py-4 px-6 font-['Space_Grotesk'] font-black uppercase text-lg border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.col1`, "Order Quantity")}</th>
                    <th className="py-4 px-6 font-['Space_Grotesk'] font-black uppercase text-lg">{t(`${p}.deepDive.individualRun.table.col2`, "Cost Comparison")}</th>
                  </tr>
                </thead>
                <tbody className="font-['JetBrains_Mono']">
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-4 px-6 font-bold border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row1Col1`, "Under 500 pcs")}</td>
                    <td className="py-4 px-6 text-[#db2777] font-bold">{t(`${p}.deepDive.individualRun.table.row1Col2`, "5x higher cost")}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-4 px-6 font-bold border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row2Col1`, "Under 1,000 pcs")}</td>
                    <td className="py-4 px-6 text-[#ea580c] font-bold">{t(`${p}.deepDive.individualRun.table.row2Col2`, "3x higher cost")}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-4 px-6 font-bold border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row3Col1`, "Under 3,000 pcs")}</td>
                    <td className="py-4 px-6 text-[#ca8a04] font-bold">{t(`${p}.deepDive.individualRun.table.row3Col2`, "2x higher cost")}</td>
                  </tr>
                  <tr className="bg-[#D4FF00]">
                    <td className="py-4 px-6 font-black border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row4Col1`, "Over 5,000 pcs")}</td>
                    <td className="py-4 px-6 font-black">{t(`${p}.deepDive.individualRun.table.row4Col2`, "Standard Price (Individual run included)")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="bg-black text-white p-4 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(219,39,119,1)]">
              {t(`${p}.deepDive.individualRun.logic`, "Logic: Once you reach 5,000 pieces, the volume is large enough to justify a dedicated production run at our standard pricing. At this level, you receive maximum color control without the \"small-batch\" premium.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.proceed.title`, "How would you like to proceed?")}</h3>
            <p>
              {t(`${p}.deepDive.proceed.desc`, "We can move forward with the standard group run if a slight variance is acceptable, or we can quote you for a dedicated run if accuracy is the priority.")}
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {localT.sectionTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { title: localT.p1Title, desc: localT.p1Desc, icon: Monitor },
                { title: localT.p2Title, desc: localT.p2Desc, icon: AlertTriangle },
                { title: localT.p3Title, desc: localT.p3Desc, icon: Layers },
                { title: localT.p4Title, desc: localT.p4Desc, icon: Sun },
                { title: localT.p5Title, desc: localT.p5Desc, icon: ImageIcon }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-start gap-4">
                  <div className="bg-[#db2777] p-2 text-white border-2 border-black shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Space_Grotesk'] font-bold text-lg leading-tight">{item.title}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-1 whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <NeoCard className="bg-[#facc15] relative z-10 !p-0 overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/color-accuracy-pain-points.jpg" 
                  alt="Color Accuracy Solutions" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
              </NeoCard>
              <div className="absolute top-8 -right-8 w-full h-full border-4 border-black bg-blue-500 -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#db2777] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.titleLine1`, "Let's Print")}<br/>{t(`${p}.cta.titleLine2`, "Your Vision.")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-90">
            {t(`${p}.cta.desc`, "Accept the 10% variance for startup savings, or go big for absolute precision.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.cta.button1`, "Book Consultation")}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t(`${p}.cta.button2`, "Request a Sample")}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
