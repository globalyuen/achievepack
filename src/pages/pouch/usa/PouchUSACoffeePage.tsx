import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Package, Factory } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export default function PouchUSACoffeePage() {
  const { t } = useTranslation();
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