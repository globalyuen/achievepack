import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Recycle, CheckCircle, ArrowRight, Shield, Globe, Droplets, Lock, Hourglass, Factory, Palette } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

const translations: Record<string, any> = {
  en: {
    heading: "5 Common Compostable Packaging Problems (And Solutions)",
    problems: [
      { q: "Poor Barrier Properties (Moisture/Oxygen)", a: "We utilize high-barrier ALOX/SiOX coated compostable films to lock in freshness." },
      { q: "Weak Seal Strength", a: "Our multi-layer co-extrusion technology and optimized heat-sealing ensure robust, leak-proof edges." },
      { q: "Short Shelf Life for Wet Products", a: "We engineer specialized compostable laminates designed specifically for high-moisture retention." },
      { q: "Lack of Industrial Composting Facilities", a: "We offer home-compostable certified (TUV/BPI) materials that break down in backyard environments." },
      { q: "Poor Printability and Aesthetics", a: "We use high-definition flexographic printing with compostable eco-inks for vibrant, premium branding." }
    ]
  },
  es: {
    heading: "5 Problemas comunes de los envases compostables (y soluciones)",
    problems: [
      { q: "Pobres propiedades de barrera (humedad/oxígeno)", a: "Utilizamos películas compostables recubiertas de ALOX/SiOX de alta barrera para mantener la frescura." },
      { q: "Débil resistencia de sellado", a: "Nuestra tecnología de coextrusión multicapa y sellado térmico optimizado garantizan bordes robustos a prueba de fugas." },
      { q: "Vida útil corta para productos húmedos", a: "Diseñamos laminados compostables especializados diseñados específicamente para retener la humedad alta." },
      { q: "Falta de instalaciones de compostaje industrial", a: "Ofrecemos materiales certificados como compostables domésticos (TUV/BPI) que se degradan en entornos de patio trasero." },
      { q: "Pobre capacidad de impresión y estética", a: "Utilizamos impresión flexográfica de alta definición con tintas ecológicas compostables para una marca vibrante y premium." }
    ]
  },
  fr: {
    heading: "5 Problèmes courants liés aux emballages compostables (et solutions)",
    problems: [
      { q: "Faibles propriétés de barrière (humidité/oxygène)", a: "Nous utilisons des films compostables à haute barrière enduits d'ALOX/SiOX pour conserver la fraîcheur." },
      { q: "Faible résistance du scellage", a: "Notre technologie de co-extrusion multicouche et un scellage thermique optimisé garantissent des bords robustes et étanches." },
      { q: "Courte durée de conservation pour les produits humides", a: "Nous concevons des stratifiés compostables spécialisés spécifiquement pour la rétention d'une forte humidité." },
      { q: "Manque d'installations de compostage industriel", a: "Nous proposons des matériaux certifiés compostables à domicile (TUV/BPI) qui se décomposent dans les environnements de jardin." },
      { q: "Faible imprimabilité et esthétique", a: "Nous utilisons une impression flexographique haute définition avec des encres écologiques compostables pour une image de marque premium et éclatante." }
    ]
  },
  'zh-TW': {
    heading: "5 個常見的可堆肥包裝問題（及解決方案）",
    problems: [
      { q: "阻隔性能差（水分/氧氣）", a: "我們使用高阻隔 ALOX/SiOX 塗層可堆肥薄膜來鎖住新鮮度。" },
      { q: "密封強度弱", a: "我們的多層共擠壓技術和優化的熱封工藝確保了堅固、防漏的邊緣。" },
      { q: "潮濕產品的保質期短", a: "我們專門設計了針對高保水性的特殊可堆肥複合材料。" },
      { q: "缺乏工業堆肥設施", a: "我們提供經過家庭堆肥認證 (TUV/BPI) 的材料，可在後院環境中分解。" },
      { q: "印刷適性和美觀度差", a: "我們使用高解析度柔版印刷與可堆肥環保墨水，打造充滿活力的優質品牌形象。" }
    ]
  }
}

const problemIcons = [Droplets, Lock, Hourglass, Factory, Palette];

export const sectionsForPouch = ["5 Common Compostable Packaging Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Compostable Packaging Problems (And Solutions)"];

export default function PouchUSACompostableHubPage() {
  const { t, i18n } = useTranslation()
  const title = t('pouchUSACompostableHubPage.title')
  const description = t('pouchUSACompostableHubPage.description')
  
  const currentLang = i18n.language || 'en'
  const localizedData = translations[currentLang] || translations['en']

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/compostable-packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t('pouchUSACompostableHubPage.marketHub')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black">
                {t('pouchUSACompostableHubPage.heroTitleStart')}<span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchUSACompostableHubPage.heroTitleSpan')}</span>{t('pouchUSACompostableHubPage.heroTitleEnd')}
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('pouchUSACompostableHubPage.heroDesc')}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/4-infograhic/compost.webp" 
                    alt={t('pouchUSACompostableHubPage.imgAlt1')} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {t('pouchUSACompostableHubPage.imgBadge')}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('pouchUSACompostableHubPage.sectionHeadingStart')}<span className="text-emerald-500">{t('pouchUSACompostableHubPage.sectionHeadingSpan')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchUSACompostableHubPage.para1')}
            </p>

            <img 
              src="/imgs/samples/kraft-compostable-zipper.png" 
              alt={t('pouchUSACompostableHubPage.imgAlt2')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSACompostableHubPage.subheading1')}</h3>
            <p>
              {t('pouchUSACompostableHubPage.para2')}
            </p>
            <p>
              {t('pouchUSACompostableHubPage.para3')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSACompostableHubPage.subheading2')}</h3>
            <p>
              {t('pouchUSACompostableHubPage.para4')}
            </p>
            <p>
              {t('pouchUSACompostableHubPage.para5')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSACompostableHubPage.subheading3')}</h3>
            <p>
              {t('pouchUSACompostableHubPage.para6')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
                {localizedData.heading}
              </h2>
              <div className="space-y-6">
                {localizedData.problems.map((problem: any, idx: number) => {
                  const IconComponent = problemIcons[idx] || Shield;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-emerald-50"
                    >
                      <div className="text-emerald-500 mt-1">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase mb-2 text-black">
                          {problem.q}
                        </h3>
                        <p className="font-['JetBrains_Mono'] text-gray-700">
                          {problem.a}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/knowledge/compostable-packaging-pain-points.jpg" 
                    alt="Compostable Packaging Materials" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                </div>
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchUSACompostableHubPage.faqHeadingStart')}<span className="text-emerald-500">{t('pouchUSACompostableHubPage.faqHeadingSpan')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('pouchUSACompostableHubPage.faqQ1'),
                a: t('pouchUSACompostableHubPage.faqA1')
              },
              {
                q: t('pouchUSACompostableHubPage.faqQ2'),
                a: t('pouchUSACompostableHubPage.faqA2')
              },
              {
                q: t('pouchUSACompostableHubPage.faqQ3'),
                a: t('pouchUSACompostableHubPage.faqA3')
              },
              {
                q: t('pouchUSACompostableHubPage.faqQ4'),
                a: t('pouchUSACompostableHubPage.faqA4')
              },
              {
                q: t('pouchUSACompostableHubPage.faqQ5'),
                a: t('pouchUSACompostableHubPage.faqA5')
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
                  <span className="text-emerald-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-emerald-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t('pouchUSACompostableHubPage.ctaHeading')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t('pouchUSACompostableHubPage.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-emerald-500 !text-black w-full sm:w-auto text-xl py-4">
              {t('pouchUSACompostableHubPage.ctaBtn')} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
