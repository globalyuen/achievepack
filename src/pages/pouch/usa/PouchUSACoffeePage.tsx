import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Package, Factory } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    problemsTitle: "5 Common US Coffee Packaging Problems (And Solutions)",
    problems: [
      {
        title: "Problem 1: Bursting Bags and Valve Failure",
        desc: "Freshly roasted beans release CO2. We integrate premium one-way degassing valves to safely vent gas while preventing oxygen ingress."
      },
      {
        title: "Problem 2: Rapid Staling and Flavor Loss",
        desc: "Poor barriers let oxygen and moisture in. We utilize ultra-high-barrier films to lock in aroma and maximize shelf life."
      },
      {
        title: "Problem 3: Unattainable Minimum Order Quantities",
        desc: "Traditional printing requires massive orders. Our HP Indigo digital printing allows low MOQs, perfect for limited edition roasts."
      },
      {
        title: "Problem 4: Increasing Demand for Sustainability",
        desc: "Consumers reject unrecyclable packaging. We provide fully recyclable Mono-PE bags that meet strict US sustainability standards."
      },
      {
        title: "Problem 5: Unstable Bags on Retail Shelves",
        desc: "Flimsy bags tip over, damaging brand perception. Our flat bottom pouch construction ensures maximum stability and premium billboard display."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Empaque de Café en EE. UU. (y Soluciones)",
    problems: [
      {
        title: "Problema 1: Bolsas Rotas y Fallas en la Válvula",
        desc: "Los granos recién tostados liberan CO2. Integramos válvulas de desgasificación unidireccionales de primera calidad para ventilar el gas de forma segura y evitar la entrada de oxígeno."
      },
      {
        title: "Problema 2: Envejecimiento Rápido y Pérdida de Sabor",
        desc: "Las malas barreras dejan entrar oxígeno y humedad. Utilizamos películas de barrera ultra alta para bloquear el aroma y maximizar la vida útil."
      },
      {
        title: "Problema 3: Cantidades Mínimas de Pedido Inalcanzables",
        desc: "La impresión tradicional requiere pedidos masivos. Nuestra impresión digital HP Indigo permite MOQ bajos, perfectos para tostados de edición limitada."
      },
      {
        title: "Problema 4: Creciente Demanda de Sostenibilidad",
        desc: "Los consumidores rechazan los envases no reciclables. Ofrecemos bolsas Mono-PE totalmente reciclables que cumplen con los estrictos estándares de sostenibilidad de EE. UU."
      },
      {
        title: "Problema 5: Bolsas Inestables en los Estantes",
        desc: "Las bolsas endebles se caen, dañando la percepción de la marca. Nuestra construcción de bolsa de fondo plano garantiza la máxima estabilidad."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants d'Emballage de Café aux États-Unis (et Solutions)",
    problems: [
      {
        title: "Problème 1 : Rupture de Sacs et Défaillance de Valve",
        desc: "Les grains fraîchement torréfiés libèrent du CO2. Nous intégrons des valves de dégazage unidirectionnelles de qualité supérieure pour évacuer le gaz en toute sécurité tout en empêchant l'oxygène d'entrer."
      },
      {
        title: "Problème 2 : Vieillissement Rapide et Perte de Saveur",
        desc: "De mauvaises barrières laissent entrer l'oxygène et l'humidité. Nous utilisons des films à très haute barrière pour emprisonner l'arôme et maximiser la durée de conservation."
      },
      {
        title: "Problème 3 : Quantités Minimales de Commande Inaccessibles",
        desc: "L'impression traditionnelle nécessite des commandes massives. Notre impression numérique HP Indigo permet de faibles MOQ, parfaits pour les éditions limitées."
      },
      {
        title: "Problème 4 : Demande Croissante de Durabilité",
        desc: "Les consommateurs rejettent les emballages non recyclables. Nous proposons des sacs Mono-PE entièrement recyclables qui répondent aux normes strictes de durabilité des États-Unis."
      },
      {
        title: "Problème 5 : Sacs Instables sur les Étagères",
        desc: "Les sacs fragiles se renversent, nuisant à la perception de la marque. Notre construction de sachet à fond plat assure une stabilité maximale."
      }
    ]
  },
  "zh-TW": {
    problemsTitle: "美國咖啡包裝的 5 個常見問題（與解決方案）",
    problems: [
      {
        title: "問題 1：排氣閥失效導致破袋",
        desc: "剛烘焙的咖啡豆會釋放二氧化碳。我們整合了優質的單向排氣閥，安全排出氣體同時防止氧氣進入。"
      },
      {
        title: "問題 2：快速老化與風味流失",
        desc: "不良的阻隔層會讓氧氣和水分進入。我們採用超高阻隔薄膜來鎖住香氣，將保質期延長至最長。"
      },
      {
        title: "問題 3：無法達成的最低起訂量",
        desc: "傳統印刷需要龐大的訂單量。我們的 HP Indigo 數位印刷允許較低的最低起訂量，非常適合限量版烘焙豆。"
      },
      {
        title: "問題 4：對永續性的需求日益增加",
        desc: "消費者拒絕不可回收的包裝。我們提供完全可回收的單一材質 PE 袋，符合美國嚴格的永續標準。"
      },
      {
        title: "問題 5：零售貨架上展示不穩定",
        desc: "軟弱的袋子容易傾倒，損害品牌形象。我們的平底袋結構確保最大的穩定性和優質的展示效果。"
      }
    ]
  }
};

export default function PouchUSACoffeePage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const localT = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en;
  const title = t("seoPages.pages.pouchUSACoffee.seoTitle", "USA Coffee Packaging Guide | Custom Printed Coffee Bags | POUCH.ECO");
  const description = t("seoPages.pages.pouchUSACoffee.seoDescription", "The ultimate guide to custom coffee packaging for USA roasters. From FDA compliance and degassing valves to local market trends and sustainable materials.");

  const faqs = [
    {
      q: t("seoPages.pages.pouchUSACoffee.faq.q1", "Are your coffee bags FDA compliant for the US market?"),
      a: t("seoPages.pages.pouchUSACoffee.faq.a1", "Yes. All raw materials, films, zippers, and adhesives used in our coffee pouches are 100% FDA compliant for direct food contact in the United States.")
    },
    {
      q: t("seoPages.pages.pouchUSACoffee.faq.q2", "Do I really need a degassing valve for my coffee?"),
      a: t("seoPages.pages.pouchUSACoffee.faq.a2", "If you are packaging freshly roasted whole beans, yes. Coffee releases CO2 after roasting. A one-way degassing valve allows this gas to escape without letting oxygen in, preventing your bags from bursting and keeping the coffee fresh.")
    },
    {
      q: t("seoPages.pages.pouchUSACoffee.faq.q3", "What is the standard retail coffee bag size in the US?"),
      a: t("seoPages.pages.pouchUSACoffee.faq.a3", "The most common specialty retail size in the US is 12oz (340g). We offer standardized tooling for 12oz, 16oz (1lb), 2lb, and 5lb wholesale bags.")
    },
    {
      q: t("seoPages.pages.pouchUSACoffee.faq.q4", "Can I get recyclable coffee bags with valves?"),
      a: t("seoPages.pages.pouchUSACoffee.faq.a4", "Absolutely. We offer high-barrier Mono-PE coffee bags complete with fully recyclable PE degassing valves, allowing the entire bag to be recycled together at US store drop-off locations.")
    },
    {
      q: t("seoPages.pages.pouchUSACoffee.faq.q5", "What is the minimum order quantity (MOQ) for custom printed bags?"),
      a: t("seoPages.pages.pouchUSACoffee.faq.a5", "By utilizing advanced HP Indigo digital printing technology, we can offer custom printed, fully branded coffee bags with incredibly low MOQs—often starting at just 500 or 1,000 units per SKU.")
    }
  ];

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/coffee-packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t("seoPages.pages.pouchUSACoffee.badge", "USA_MARKET_HUB // COFFEE")}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black">
                {t("seoPages.pages.pouchUSACoffee.h1Roast", "Roast Local.")}<br/>
                {t("seoPages.pages.pouchUSACoffee.h1Package", "Package ")}<span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t("seoPages.pages.pouchUSACoffee.h1Global", "Global.")}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t("seoPages.pages.pouchUSACoffee.heroDesc", "Custom printed coffee bags engineered for the US specialty coffee market. Featuring FDA-compliant materials, high-barrier degassing valves, and sustainable profiles.")}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/industry/coffee/a_custom_printed_coffee_bag_with_valve_4419920.webp" 
                    alt={t("seoPages.pages.pouchUSACoffee.altCustomBag", "Custom printed USA coffee packaging with degassing valve")} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black text-white p-4 font-['Space_Grotesk'] font-bold uppercase text-xl">
                    {t("seoPages.pages.pouchUSACoffee.highBarrier", "High-Barrier Freshness")}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#10b981] -z-0 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t("seoPages.pages.pouchUSACoffee.guideTitle", "The Definitive Guide to ")}<span className="text-[#10b981]">{t("seoPages.pages.pouchUSACoffee.guideTitleHighlight", "US Coffee Packaging")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t("seoPages.pages.pouchUSACoffee.guideIntro", "The United States represents one of the largest and most competitive specialty coffee markets in the world. From third-wave roasters in the Pacific Northwest to artisanal cafes in Brooklyn, American consumers demand not only exceptional beans but also premium, sustainable, and highly functional coffee packaging. At POUCH.ECO, we engineer coffee bags specifically tailored to help US roasters stand out on retail shelves and maintain absolute peak freshness.")}
            </p>

            <img 
              src="/imgs/industry/coffee/a_coffee_roasting_packaging_process_3819921.webp" 
              alt={t("seoPages.pages.pouchUSACoffee.altRoasting", "Freshly roasted coffee beans being packed into high-barrier flexible pouches")} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t("seoPages.pages.pouchUSACoffee.fdaHeading", "FDA Compliance and Food Safety")}</h3>
            <p>
              {t("seoPages.pages.pouchUSACoffee.fdaText", "When importing or utilizing food packaging in the United States, absolute adherence to the Food and Drug Administration (FDA) regulations is non-negotiable. Every layer of our coffee pouches—from the outer matte BOPP to the inner sealant PE layer—is manufactured using 100% FDA-approved, food-safe raw materials. We utilize solventless lamination processes to ensure there is zero risk of chemical migration or odor transfer that could taint the delicate flavor profile of your freshly roasted coffee.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t("seoPages.pages.pouchUSACoffee.valveHeading", "The Crucial Degassing Valve")}</h3>
            <p>
              {t("seoPages.pages.pouchUSACoffee.valveText", "Freshly roasted coffee releases significant amounts of carbon dioxide over the first several weeks. Without a proper venting mechanism, sealed bags will bloat and eventually burst. Our bags are equipped with premium, one-way degassing valves. These engineered valves allow built-up CO2 to escape from the bag while simultaneously blocking oxygen and moisture from entering. This critical component extends the shelf life of your beans by months, ensuring that the coffee your customer brews in New York tastes just as fresh as the day you roasted it in Seattle.")}
            </p>

            <img 
              src="/imgs/pouch-shape/k-seal/a_achievepack_detail_08_flat_lay_seal_2058466.webp" 
              alt={t("seoPages.pages.pouchUSACoffee.altValve", "Close-up detail of a coffee bag degassing valve and robust side seals")} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t("seoPages.pages.pouchUSACoffee.sustainableHeading", "Sustainable Coffee Trends in the USA")}</h3>
            <p>
              {t("seoPages.pages.pouchUSACoffee.sustainableText", "American consumers are increasingly prioritizing environmental sustainability when making purchasing decisions. Traditional coffee bags utilize a layer of aluminum foil for barrier protection, making them impossible to recycle. To meet the demands of the modern US market, we offer cutting-edge sustainable alternatives:")}
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-black">
              <li><strong>{t("seoPages.pages.pouchUSACoffee.sustainableList1Title", "Recyclable Mono-PE:")}</strong> {t("seoPages.pages.pouchUSACoffee.sustainableList1", "High-barrier, metal-free bags that are 100% recyclable at store drop-off locations across the USA (How2Recycle compliant).")}</li>
              <li><strong>{t("seoPages.pages.pouchUSACoffee.sustainableList2Title", "Certified Compostable:")}</strong> {t("seoPages.pages.pouchUSACoffee.sustainableList2", "Plant-based bags (including the zipper and valve) that break down entirely in industrial or home composting environments.")}</li>
              <li><strong>{t("seoPages.pages.pouchUSACoffee.sustainableList3Title", "Post-Consumer Recycled (PCR):")}</strong> {t("seoPages.pages.pouchUSACoffee.sustainableList3", "Pouches made with up to 50% recycled plastic content, diverting waste from landfills while maintaining premium aesthetics.")}</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t("seoPages.pages.pouchUSACoffee.formatsHeading", "Popular Bag Formats")}</h3>
            <p>
              {t("seoPages.pages.pouchUSACoffee.formatsText", "The US market predominantly favors two pouch formats for specialty coffee. The Stand-Up Pouch (Doypack) is a cost-effective, versatile option perfect for 12oz retail bags. The Flat Bottom Bag (Box Pouch) offers maximum volume efficiency, five panels of printable billboard space, and exceptional shelf stability, making it the premier choice for premium roasts and 2lb or 5lb wholesale formats.")}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {localT.problemsTitle}
          </h2>
          
          <img 
            src="/imgs/knowledge/usa-coffee-packaging-pain-points.jpg" 
            alt="USA Coffee Packaging Pain Points" 
            className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
          />

          <div className="space-y-6">
            {localT.problems.map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-start gap-4"
              >
                <div className="mt-1">
                  <CheckCircle className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                    {prob.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-gray-700">
                    {prob.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t("seoPages.pages.pouchUSACoffee.faqTitle", "Coffee Packaging ")}<span className="text-[#10b981]">{t("seoPages.pages.pouchUSACoffee.faqTitleHighlight", "FAQ")}</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#10b981] text-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t("seoPages.pages.pouchUSACoffee.ctaTitle", "Roast. Print. Pack.")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t("seoPages.pages.pouchUSACoffee.ctaDesc", "Ready to upgrade your coffee brand's presentation in the USA? Get free samples or a custom quote today.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t("seoPages.pages.pouchUSACoffee.ctaButton", "Get Your Custom Quote")} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}