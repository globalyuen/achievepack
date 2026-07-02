import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Layers, Box, AlertCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    sectionTitle: "5 Common Fin Seal vs. Lap Seal Problems (And Solutions)",
    problems: [
      { title: "Burst Seams in Transit", desc: "Upgrade to a multi-layer Fin Seal for enhanced burst strength." },
      { title: "Graphic Interruption", desc: "Keep crucial barcodes and text away from the center back seam area." },
      { title: "Liquid Leakage", desc: "Exclusively use Fin Seals for liquid products to ensure an airtight barrier." },
      { title: "Weak Bonding", desc: "Utilize inside-to-inside (PE-to-PE) sealing to prevent delamination." },
      { title: "Bulky Presentation", desc: "Opt for a tacked-down Fin Seal so the pouch lies flat and professional." }
    ]
  },
  es: {
    sectionTitle: "5 problemas comunes de sellado (y soluciones)",
    problems: [
      { title: "Costuras rotas en tránsito", desc: "Actualice a un sello tipo aleta multicapa para mayor resistencia." },
      { title: "Interrupción gráfica", desc: "Mantenga códigos y textos cruciales alejados de la costura central." },
      { title: "Fuga de líquidos", desc: "Use exclusivamente sellos tipo aleta para líquidos." },
      { title: "Adhesión débil", desc: "Utilice sellado interior a interior (PE a PE)." },
      { title: "Presentación abultada", desc: "Opte por un sello tipo aleta pegado para que quede plano." }
    ]
  },
  fr: {
    sectionTitle: "5 problèmes courants de scellage (et solutions)",
    problems: [
      { title: "Coutures éclatées", desc: "Passez à un joint à aileron multicouche pour une meilleure résistance." },
      { title: "Interruption graphique", desc: "Éloignez les codes-barres de la couture arrière centrale." },
      { title: "Fuite de liquide", desc: "Utilisez des joints à aileron pour les liquides pour une barrière étanche." },
      { title: "Faible adhérence", desc: "Utilisez un scellage intérieur-intérieur (PE sur PE)." },
      { title: "Présentation volumineuse", desc: "Optez pour un joint à aileron rabattu pour rester plat." }
    ]
  },
  'zh-TW': {
    sectionTitle: "5 個常見背封問題 (與解決方案)",
    problems: [
      { title: "運輸途中背封爆裂", desc: "升級為多層背鰭封口 (Fin Seal)，增強抗破裂強度。" },
      { title: "圖案與文字中斷", desc: "確保條碼與重要文字遠離包裝正後方的封口區域。" },
      { title: "液體外漏問題", desc: "針對液體產品，務必使用背鰭封口以確保氣密與防水。" },
      { title: "黏合強度不足", desc: "採用內層對內層 (PE 對 PE) 的封合方式以防止分層。" },
      { title: "包裝外觀不平整", desc: "選擇將背鰭平貼固定，使包裝袋平整且專業。" }
    ]
  }
};

export default function PouchFinSealLapSealPage() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations;
  const localData = localTranslations[currentLang] || localTranslations.en;
  const p = 'seoPages.pages.pouchFinSealLapSeal';

  const title = t(`${p}.seo.title`, "Fin Seal vs. Lap Seal | Back Seal Types | POUCH.ECO")
  const description = t(`${p}.seo.description`, "Understand the structural differences between Fin Seals and Lap Seals on flexible pouches. Learn which back seal method is best for your custom packaging.")

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/fin-seal-lap-seal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-red-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.label`, "KNOWLEDGE_BASE // SEALS")}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.titleLine1`, "Seal the")} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleLine2`, "Deal.")}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t(`${p}.hero.desc`, "Learn the critical differences between a Fin Seal and a Lap Seal. Understand how the back of your pouch is formed and why it matters for your product's safety.")}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                   <div className="grid grid-rows-2 gap-6 w-full h-full">
                       <div className="border-4 border-black bg-white flex flex-col items-center justify-center p-4">
                         <div className="w-16 h-8 bg-blue-500 rounded-t-full mb-2"></div>
                         <h3 className="font-black font-['Space_Grotesk'] text-xl">{t(`${p}.hero.finSealTitle`, "FIN SEAL (Inside to Inside)")}</h3>
                      </div>
                      <div className="border-4 border-black bg-white flex flex-col items-center justify-center p-4">
                         <div className="w-24 h-4 bg-orange-500 mb-2 relative">
                            <div className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-500 z-10"></div>
                         </div>
                         <h3 className="font-black font-['Space_Grotesk'] text-xl">{t(`${p}.hero.lapSealTitle`, "LAP SEAL (Inside to Outside)")}</h3>
                      </div>
                   </div>
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    {t(`${p}.hero.backSeamTypes`, "BACK SEAM TYPES")}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.deepDive.titleLine1`, "Fin Seal vs.")} <span className="text-red-500">{t(`${p}.deepDive.titleLine2`, "Lap Seal")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.deepDive.intro1`, "When a flat piece of packaging film is folded over to create a pouch (like a potato chip bag or a coffee bag), the two edges of the film must be joined together running down the back of the package. This is called the \"Back Seam\" or \"Back Seal.\" There are two primary methods used to create this seal: the Fin Seal and the Lap Seal.")}
            </p>
            <p>
              {t(`${p}.deepDive.intro2`, "Choosing the wrong type of seal can result in burst bags during shipping, leaked products, and rejected inventory. It all comes down to how the inner and outer layers of your film interact with heat.")}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-blue-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black mb-4">{t(`${p}.deepDive.finSeal.title`, "The Fin Seal")}</h3>
                  <p className="text-sm">
                    {t(`${p}.deepDive.finSeal.desc1`, "A Fin Seal is created by bringing the two inside edges of the film together and sealing them ")}<strong>{t(`${p}.deepDive.finSeal.descHighlight`, "Inside-to-Inside")}</strong>{t(`${p}.deepDive.finSeal.desc2`, ". Because the inner layer of the packaging is designed to melt and bond under heat, this creates an extremely strong, air-tight seal. The sealed edges stick out from the back of the bag like a shark's fin (hence the name), though they are usually folded over flat against the bag.")}
                  </p>
                  <ul className="text-sm space-y-2 mt-4">
                    <li><strong>{t(`${p}.deepDive.finSeal.strengthLabel`, "Strength:")}</strong> {t(`${p}.deepDive.finSeal.strengthDesc`, "Maximum strength")}</li>
                    <li><strong>{t(`${p}.deepDive.finSeal.usageLabel`, "Usage:")}</strong> {t(`${p}.deepDive.finSeal.usageDesc`, "Heavy products, gas-flushed bags, liquids")}</li>
                    <li><strong>{t(`${p}.deepDive.finSeal.visualLabel`, "Visual:")}</strong> {t(`${p}.deepDive.finSeal.visualDesc`, "Creates a thicker seam down the back")}</li>
                  </ul>
               </div>

               <div className="bg-orange-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black mb-4">{t(`${p}.deepDive.lapSeal.title`, "The Lap Seal")}</h3>
                  <p className="text-sm">
                    {t(`${p}.deepDive.lapSeal.desc1`, "A Lap Seal is created by overlapping the edges of the film so that the inner layer of one edge seals against the outer layer of the other edge (")}<strong>{t(`${p}.deepDive.lapSeal.descHighlight`, "Inside-to-Outside")}</strong>{t(`${p}.deepDive.lapSeal.desc2`, "). Because you are sealing the meltable inner layer against the non-meltable outer layer, this seal is inherently weaker. It requires the outer film layer to have specific heat-sealable properties.")}
                  </p>
                  <ul className="text-sm space-y-2 mt-4">
                    <li><strong>{t(`${p}.deepDive.lapSeal.strengthLabel`, "Strength:")}</strong> {t(`${p}.deepDive.lapSeal.strengthDesc`, "Weaker")}</li>
                    <li><strong>{t(`${p}.deepDive.lapSeal.usageLabel`, "Usage:")}</strong> {t(`${p}.deepDive.lapSeal.usageDesc`, "Light snacks (chips), candy wrappers")}</li>
                    <li><strong>{t(`${p}.deepDive.lapSeal.visualLabel`, "Visual:")}</strong> {t(`${p}.deepDive.lapSeal.visualDesc`, "Completely flat, uses less material")}</li>
                  </ul>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.whyFinSeal.title`, "Why is the Fin Seal the Industry Standard?")}</h3>
            <p>
              {t(`${p}.deepDive.whyFinSeal.desc1`, "At POUCH.ECO, the vast majority of our Stand-Up Pouches and Flat Bottom bags utilize a ")}<strong>{t(`${p}.deepDive.whyFinSeal.descHighlight`, "Fin Seal")}</strong>{t(`${p}.deepDive.whyFinSeal.desc2`, ".")}
            </p>
            <p>
              {t(`${p}.deepDive.whyFinSeal.desc3`, "The reason is simple: barrier protection and structural integrity. Most premium flexible packaging utilizes an outer layer made of PET or BOPP (which is heat resistant so it doesn't melt on the sealing jaws) and an inner layer made of PE or CPP (which melts easily to create the seal). If you try to make a Lap Seal with these materials, the PE will not bond properly to the PET, resulting in a weak seam that will burst when squeezed. A Fin Seal guarantees that the PE bonds perfectly with PE, creating an impenetrable weld.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.whenLapSeal.title`, "When are Lap Seals Used?")}</h3>
            <p>
              {t(`${p}.deepDive.whenLapSeal.desc`, "Lap seals are primarily used in high-speed, automated Form-Fill-Seal (VFFS) machines running single-layer or specialized co-extruded films (like a bag of potato chips). The main advantage of a Lap Seal is that it uses slightly less film material (since the edges just overlap instead of pinching together), which saves money when producing tens of millions of bags. For custom, multi-layer laminated pouches, however, the Fin Seal is far superior.")}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
                {localData.sectionTitle}
              </h2>
              <div className="space-y-6">
                {localData.problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-50">
                    <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase mb-1">{prob.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-700">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <NeoCard className="bg-white p-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/fin-seal-lap-seal-pain-points.jpg" 
                  alt="Fin Seal vs Lap Seal Pain Points" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
              </NeoCard>
              <div className="absolute top-6 -right-6 w-full h-full border-4 border-black bg-blue-500 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titleLine1`, "Sealing")} <span className="text-red-500">{t(`${p}.faq.titleLine2`, "FAQ")}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t(`${p}.faq.items.0.q`, 'Do I need to choose which seal I want?'),
                a: t(`${p}.faq.items.0.a`, 'Usually, no. Our packaging engineers will automatically dictate a Fin Seal for almost all pre-made Stand-Up and Flat Bottom pouches to ensure maximum structural integrity and barrier performance.')
              },
              {
                q: t(`${p}.faq.items.1.q`, 'Can you print graphics over a Fin Seal?'),
                a: t(`${p}.faq.items.1.a`, 'Because a Fin Seal creates a physical flap running down the back of the bag (which is then folded over), any graphics that cross that seam will be interrupted. It is best practice to keep important text or barcodes away from the center back seam area in your dieline.')
              },
              {
                q: t(`${p}.faq.items.2.q`, 'Will a Fin Seal ruin the look of the back of my bag?'),
                a: t(`${p}.faq.items.2.a`, 'No. The fin is typically folded flat and tacked down to one side. It is a standard feature of almost all premium coffee and food packaging and is generally ignored by consumers.')
              },
              {
                q: t(`${p}.faq.items.3.q`, 'Can a Lap Seal hold liquids?'),
                a: t(`${p}.faq.items.3.a`, 'Generally, no. We strongly advise against using Lap Seals for liquids, purees, or heavy powders as the seam is highly susceptible to bursting under hydraulic pressure. Always use a Fin Seal for these products.')
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
                  <span className="text-red-500 flex-shrink-0">{t(`${p}.faq.qLabel`, "Q:")}</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-red-500">{t(`${p}.faq.aLabel`, "A:")}</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`, "Trust the Seal")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`, "Don't risk burst bags and ruined product. Our heavy-duty Fin Seals guarantee your product stays fresh and safe.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.button`, "Get Your Custom Quote")} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
