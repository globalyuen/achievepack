import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Printer, Cpu, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

const translations = {
  en: {
    title: "5 Common Printing Types Problems (And Solutions)",
    p1: "Inconsistent Colors Across Runs",
    d1: "Slight color variations between different production batches can hurt brand identity.",
    s1: "Use Rotogravure with Pantone spot colors for exact matching, or implement strict color profiling for HP Indigo digital presses.",
    p2: "High Setup Costs for Multiple SKUs",
    d2: "Paying for multiple cylinder plates for different flavors or variations becomes prohibitively expensive.",
    s2: "Utilize Digital Printing for multi-SKU runs to completely eliminate cylinder plate fees.",
    p3: "Blurry or Pixelated Graphics",
    d3: "Low-resolution artwork resulting in poor print quality and unreadable text on the packaging.",
    s3: "Ensure artwork is 300+ DPI and in CMYK. Digital provides 1200 DPI resolution, while Rotogravure excels in sharp, solid vector lines.",
    p4: "Misregistration of Colors",
    d4: "Colors not aligning perfectly, creating a blurry or overlapped appearance on the final print.",
    s4: "Rotogravure uses automated tension control and optical sensors to ensure perfect plate alignment during high-speed printing.",
    p5: "Long Lead Times for Prototyping",
    d5: "Waiting weeks for custom printed samples delays product launches and marketing efforts.",
    s5: "Leverage Digital Printing for rapid prototyping and short runs, delivering market-ready samples in a fraction of the time."
  },
  es: {
    title: "5 Problemas Comunes de Tipos de Impresión (Y Soluciones)",
    p1: "Colores Inconsistentes entre Tiradas",
    d1: "Ligeras variaciones de color entre diferentes lotes de producción pueden dañar la identidad de la marca.",
    s1: "Utilice el rotograbado con colores directos Pantone para una coincidencia exacta, o implemente un perfil de color estricto para las prensas digitales HP Indigo.",
    p2: "Altos Costos de Configuración para Múltiples SKUs",
    d2: "Pagar por múltiples cilindros para diferentes sabores o variaciones se vuelve prohibitivamente costoso.",
    s2: "Utilice la impresión digital para tiradas de múltiples SKU para eliminar completamente las tarifas de placas de cilindros.",
    p3: "Gráficos Borrosos o Pixelados",
    d3: "Diseños de baja resolución que resultan en mala calidad de impresión y texto ilegible en el empaque.",
    s3: "Asegúrese de que el diseño sea de 300+ DPI y en CMYK. Lo digital proporciona 1200 DPI, mientras que el rotograbado sobresale en líneas vectoriales nítidas y sólidas.",
    p4: "Desajuste de Colores",
    d4: "Los colores no se alinean perfectamente, creando una apariencia borrosa o superpuesta en la impresión final.",
    s4: "El rotograbado utiliza control automático de tensión y sensores ópticos para garantizar una alineación perfecta de las placas durante la impresión a alta velocidad.",
    p5: "Largos Tiempos de Entrega para Prototipos",
    d5: "Esperar semanas por muestras impresas personalizadas retrasa los lanzamientos de productos y los esfuerzos de marketing.",
    s5: "Aproveche la impresión digital para la creación rápida de prototipos y tiradas cortas, entregando muestras listas para el mercado en una fracción del tiempo."
  },
  fr: {
    title: "5 Problèmes Courants des Types d'Impression (Et Solutions)",
    p1: "Couleurs Incohérentes entre les Tirages",
    d1: "De légères variations de couleur entre différents lots de production peuvent nuire à l'identité de la marque.",
    s1: "Utilisez l'héliogravure avec des couleurs d'accompagnement Pantone pour une correspondance exacte, ou mettez en œuvre un profilage colorimétrique strict pour les presses numériques HP Indigo.",
    p2: "Coûts de Configuration Élevés pour de Multiples SKUs",
    d2: "Payer pour de multiples cylindres pour différentes saveurs ou variations devient prohibitif.",
    s2: "Utilisez l'impression numérique pour les tirages multi-SKU afin d'éliminer complètement les frais de plaques de cylindre.",
    p3: "Graphiques Flous ou Pixélisés",
    d3: "Illustrations à basse résolution entraînant une mauvaise qualité d'impression et un texte illisible sur l'emballage.",
    s3: "Assurez-vous que l'illustration est de 300+ DPI et en CMYK. Le numérique fournit 1200 DPI, tandis que l'héliogravure excelle dans les lignes vectorielles nettes et solides.",
    p4: "Défaut d'Alignement des Couleurs",
    d4: "Les couleurs ne s'alignent pas parfaitement, créant un aspect flou ou superposé sur l'impression finale.",
    s4: "L'héliogravure utilise un contrôle de tension automatisé et des capteurs optiques pour assurer un alignement parfait des plaques lors de l'impression à grande vitesse.",
    p5: "Longs Délais pour le Prototypage",
    d5: "Attendre des semaines pour des échantillons imprimés sur mesure retarde les lancements de produits et les efforts de marketing.",
    s5: "Tirez parti de l'impression numérique pour le prototypage rapide et les courts tirages, en livrant des échantillons prêts pour le marché en une fraction du temps."
  },
  "zh-TW": {
    title: "5個常見的印刷類型問題（及解決方案）",
    p1: "批次間顏色不一致",
    d1: "不同生產批次之間輕微的顏色變化會損害品牌形象。",
    s1: "使用凹版印刷和 Pantone 專色進行精確匹配，或對 HP Indigo 數位印刷機實施嚴格的色彩配置。",
    p2: "多個 SKU 的高昂設置成本",
    d2: "為不同口味或變化支付多個滾筒印版的費用變得極其昂貴。",
    s2: "利用數位印刷進行多 SKU 生產，完全消除滾筒印版費用。",
    p3: "圖形模糊或像素化",
    d3: "低分辨率的設計導致印刷質量差和包裝上的文字難以閱讀。",
    s3: "確保圖稿為 300+ DPI 且為 CMYK。數位印刷提供 1200 DPI，而凹版印刷在清晰、實心的矢量線條方面表現出色。",
    p4: "顏色套印不準",
    d4: "顏色無法完美對齊，在最終印刷品上造成模糊或重疊的外觀。",
    s4: "凹版印刷使用自動張力控制和光學傳感器，確保在高速印刷期間印版完美對齊。",
    p5: "原型製作交貨期長",
    d5: "等待數週才能獲得定製印刷樣品，會延遲產品發布和營銷工作。",
    s5: "利用數位印刷進行快速原型製作和短版印刷，在極短的時間內交付可推向市場的樣品。"
  }
};

const sectionsForPouch = ["5 Common Printing Types Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Printing Types Problems (And Solutions)"];

export default function PouchPrintingTypesPage() {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchPrintingTypes';

  const title = t(`${p}.seo.title`, "Digital vs Rotogravure Printing for Pouches | POUCH.ECO")
  const description = t(`${p}.seo.description`, "Understand the difference between Digital (HP Indigo) and Rotogravure printing for flexible packaging. Learn about MOQs, print quality, setup costs, and finishes.")

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/printing-types" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-pink-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.label`, "KNOWLEDGE_BASE // PRINTING")}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.titleLine1`, "Ink meets")} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleLine2`, "Film.")}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t(`${p}.hero.desc`, "Demystifying the packaging printing process. Compare Digital vs. Rotogravure printing to determine the most cost-effective and visually stunning method for your brand.")}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100">
                   <img 
                    src="/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp" 
                    alt={t(`${p}.hero.imgAlt`, "Various printing finishes on custom pouches")} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    {t(`${p}.hero.hexLabel`, "CMYK + PANTONE")}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.deepDive.titleLine1`, "Digital vs. Rotogravure")} <span className="text-pink-500">{t(`${p}.deepDive.titleLine2`, "Printing")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.deepDive.intro`, "In the flexible packaging industry, the way your artwork is transferred onto the film dictates not only the visual quality of the final bag but also the minimum order quantities (MOQs) and the upfront costs. The two dominant technologies are HP Indigo Digital Printing and Traditional Rotogravure Printing. Understanding the difference is crucial to optimizing your packaging budget.")}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-blue-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase flex items-center gap-2 mb-4 text-black">
                    <Cpu className="text-blue-500" /> {t(`${p}.deepDive.digital.title`, "Digital Printing")}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong>{t(`${p}.deepDive.digital.bestForLabel`, "Best For:")}</strong> {t(`${p}.deepDive.digital.bestFor`, "Startups, multiple SKUs, seasonal designs.")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.moqLabel`, "MOQ:")}</strong> {t(`${p}.deepDive.digital.moq`, "Very Low (500 - 1,000 pcs)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.setupLabel`, "Setup Costs:")}</strong> {t(`${p}.deepDive.digital.setup`, "$0 (No plate fees)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.leadLabel`, "Lead Time:")}</strong> {t(`${p}.deepDive.digital.lead`, "Fast (10-15 days)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.qualityLabel`, "Quality:")}</strong> {t(`${p}.deepDive.digital.quality`, "Excellent (HP Indigo 1200 dpi)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.costLabel`, "Unit Cost:")}</strong> {t(`${p}.deepDive.digital.cost`, "Higher per bag at low volumes.")}</li>
                  </ul>
               </div>

               <div className="bg-orange-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase flex items-center gap-2 mb-4 text-black">
                    <Printer className="text-orange-500" /> {t(`${p}.deepDive.rotogravure.title`, "Rotogravure")}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong>{t(`${p}.deepDive.rotogravure.bestForLabel`, "Best For:")}</strong> {t(`${p}.deepDive.rotogravure.bestFor`, "Large established brands, high volume.")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.moqLabel`, "MOQ:")}</strong> {t(`${p}.deepDive.rotogravure.moq`, "High (10,000+ pcs per SKU)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.setupLabel`, "Setup Costs:")}</strong> {t(`${p}.deepDive.rotogravure.setup`, "Cylinder Plate Fees ($100-$150 per color)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.leadLabel`, "Lead Time:")}</strong> {t(`${p}.deepDive.rotogravure.lead`, "Longer (20-30 days)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.qualityLabel`, "Quality:")}</strong> {t(`${p}.deepDive.rotogravure.quality`, "Flawless (Perfect Pantone matching)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.costLabel`, "Unit Cost:")}</strong> {t(`${p}.deepDive.rotogravure.cost`, "Extremely low per bag at scale.")}</li>
                  </ul>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.howDigitalWorks.title`, "How HP Indigo Digital Printing Works")}</h3>
            <p>
              {t(`${p}.deepDive.howDigitalWorks.desc1`, "Digital printing works much like a massive version of your office laser printer. Your digital PDF file is sent directly to the press, and the artwork is printed onto the film in one continuous pass.")} 
            </p>
            <p>
              {t(`${p}.deepDive.howDigitalWorks.desc2`, "Because there are no physical printing plates to engrave, the upfront setup cost is zero. This makes digital printing the absolute best choice for brands launching multiple flavor SKUs (e.g., 5 different coffee roasts) at low quantities. You can print 1,000 bags of each flavor without paying thousands of dollars in plate fees. POUCH.ECO utilizes state-of-the-art HP Indigo 20000 presses, ensuring vibrant, high-resolution CMYK graphics.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.howRotoWorks.title`, "How Rotogravure Printing Works")}</h3>
            <p>
              {t(`${p}.deepDive.howRotoWorks.desc1`, "Rotogravure is the traditional powerhouse of flexible packaging. The artwork is physically engraved onto massive metal cylinders (plates). Each color in your design requires a separate cylinder. The film passes over these spinning, ink-filled cylinders to build the image.")}
            </p>
            <p>
              {t(`${p}.deepDive.howRotoWorks.desc2`, "Because engraving the metal cylinders is expensive (typically $100 to $150 per color per SKU), the upfront cost is high. However, once the cylinders are made, the press runs at incredibly high speeds, making the actual cost per bag incredibly cheap. Rotogravure also allows for precise Pantone (PMS) spot color matching, metallic inks, and specialized spot UV varnishes.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.whichToChoose.title`, "Which should you choose?")}</h3>
            <p>
              {t(`${p}.deepDive.whichToChoose.desc`, "The decision is almost entirely mathematical. If you are ordering fewer than 5,000 to 10,000 bags per design, Digital Printing is cheaper because you avoid plate fees. Once you cross the 10,000 bag threshold per design, the cheap unit cost of Rotogravure outweighs the initial cost of the plates, making it the most economical choice.")}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.problems.title`, "5 Common Printing Types Problems (And Solutions)")}
          </h2>
          
          <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/imgs/knowledge/pouch-printing-types-pain-points.jpg" 
              alt={t(`${p}.problems.imgAlt`, "Printing Types Pain Points and Solutions")}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            {[
              {
                title: t(`${p}.problems.items.0.title`, "Inconsistent Colors Across Runs"),
                desc: t(`${p}.problems.items.0.desc`, "Slight color variations between different production batches can hurt brand identity."),
                solution: t(`${p}.problems.items.0.solution`, "Use Rotogravure with Pantone spot colors for exact matching, or implement strict color profiling for HP Indigo digital presses."),
                icon: <CheckCircle className="w-8 h-8 text-pink-500" />
              },
              {
                title: t(`${p}.problems.items.1.title`, "High Setup Costs for Multiple SKUs"),
                desc: t(`${p}.problems.items.1.desc`, "Paying for multiple cylinder plates for different flavors or variations becomes prohibitively expensive."),
                solution: t(`${p}.problems.items.1.solution`, "Utilize Digital Printing for multi-SKU runs to completely eliminate cylinder plate fees."),
                icon: <Layers className="w-8 h-8 text-blue-500" />
              },
              {
                title: t(`${p}.problems.items.2.title`, "Blurry or Pixelated Graphics"),
                desc: t(`${p}.problems.items.2.desc`, "Low-resolution artwork resulting in poor print quality and unreadable text on the packaging."),
                solution: t(`${p}.problems.items.2.solution`, "Ensure artwork is 300+ DPI and in CMYK. Digital provides 1200 DPI resolution, while Rotogravure excels in sharp, solid vector lines."),
                icon: <Cpu className="w-8 h-8 text-orange-500" />
              },
              {
                title: t(`${p}.problems.items.3.title`, "Misregistration of Colors"),
                desc: t(`${p}.problems.items.3.desc`, "Colors not aligning perfectly, creating a blurry or overlapped appearance on the final print."),
                solution: t(`${p}.problems.items.3.solution`, "Rotogravure uses automated tension control and optical sensors to ensure perfect plate alignment during high-speed printing."),
                icon: <Printer className="w-8 h-8 text-green-500" />
              },
              {
                title: t(`${p}.problems.items.4.title`, "Long Lead Times for Prototyping"),
                desc: t(`${p}.problems.items.4.desc`, "Waiting weeks for custom printed samples delays product launches and marketing efforts."),
                solution: t(`${p}.problems.items.4.solution`, "Leverage Digital Printing for rapid prototyping and short runs, delivering market-ready samples in a fraction of the time."),
                icon: <CheckCircle className="w-8 h-8 text-purple-500" />
              }
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex-shrink-0 mt-1">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-black text-xl md:text-2xl uppercase mb-2">
                    {problem.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                    {problem.desc}
                  </p>
                  <div className="bg-white border-2 border-black p-4">
                    <p className="font-['JetBrains_Mono'] text-sm font-bold flex items-start gap-2">
                      <span className="text-green-600 uppercase">{t(`${p}.problems.solutionLabel`, "Solution:")}</span>
                      <span className="text-black">{problem.solution}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titleLine1`, "Printing")} <span className="text-pink-500">{t(`${p}.faq.titleLine2`, "FAQ")}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t(`${p}.faq.items.0.q`, 'Do I have to pay cylinder/plate fees every time I reorder?'),
                a: t(`${p}.faq.items.0.a`, 'No. For rotogravure printing, the cylinder plates are a one-time fee. We keep your plates in our climate-controlled facility, so you never pay for them again when reordering the exact same design.')
              },
              {
                q: t(`${p}.faq.items.1.q`, 'Can digital printing hit my exact Pantone (PMS) color?'),
                a: t(`${p}.faq.items.1.a`, 'Digital printing utilizes a CMYK process. While HP Indigo presses are incredibly advanced and can simulate about 90% of the Pantone spectrum very accurately, true, flawless Pantone spot color matching requires Rotogravure printing.')
              },
              {
                q: t(`${p}.faq.items.2.q`, 'Can I do a mix of Matte and Gloss (Spot UV) on digital?'),
                a: t(`${p}.faq.items.2.a`, 'While we can simulate some effects digitally, true Spot UV (where the bag is matte but your logo is high-gloss) requires a physical varnish plate, meaning it is only available via Rotogravure printing.')
              },
              {
                q: t(`${p}.faq.items.3.q`, 'I have 5 different flavors. Do I need plates for all of them?'),
                a: t(`${p}.faq.items.3.a`, 'If you use Rotogravure, yes. If your design has 5 colors, and you have 5 flavors, you would need 25 plates. This is why Digital Printing is the perfect solution for multi-SKU brands, as you pay zero plate fees.')
              },
              {
                q: t(`${p}.faq.items.4.q`, 'What color mode should my artwork be in?'),
                a: t(`${p}.faq.items.4.a`, 'All artwork submitted for packaging printing must be in CMYK color mode. If you submit RGB artwork (which is meant for screens), the colors will shift when printed.')
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-pink-500 flex-shrink-0">{t(`${p}.faq.qLabel`, "Q:")}</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-pink-500">{t(`${p}.faq.aLabel`, "A:")}</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`, "Ready to Print?")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`, "Whether you need 500 digitally printed bags or 50,000 rotogravure bags, we have the presses to make your brand pop.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-pink-400 !text-black w-full sm:w-auto text-xl py-4 hover:!bg-pink-300">
              {t(`${p}.cta.button`, "Get Print Quote")} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
