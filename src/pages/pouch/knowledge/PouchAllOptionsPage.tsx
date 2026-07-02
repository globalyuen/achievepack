import React from 'react'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Layers, CheckCircle, ArrowRight, Package, Grid, BookOpen, AlertCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation, Trans } from 'react-i18next'

const localTranslations = {
  en: {
    title: "5 Common Pouch Packaging Problems (And Solutions)",
    problems: [
      { q: "Pouch Leaks at the Bottom Seal", a: "Solution: Multi-layer films and robust seal tooling" },
      { q: "Zippers Not Closing Properly", a: "Solution: Heavy-duty press-to-close or slider zippers" },
      { q: "Oxygen or Moisture Ruining Product", a: "Solution: High-barrier EVOH or AL layers" },
      { q: "Pouch Not Standing Straight", a: "Solution: Optimized bottom gusset design" },
      { q: "Degassing Valves Clogging", a: "Solution: Valves with internal nylon filters" }
    ]
  },
  es: {
    title: "5 Problemas Comunes (Y Soluciones)",
    problems: [
      { q: "Fugas en el sello inferior", a: "Solución: Películas multicapa y herramientas de sellado robustas" },
      { q: "Cierres que no cierran correctamente", a: "Solución: Cierres a presión o deslizables de alta resistencia" },
      { q: "Oxígeno o humedad que arruinan el producto", a: "Solución: Capas de alta barrera EVOH o AL" },
      { q: "La bolsa no se mantiene recta", a: "Solución: Diseño de fuelle inferior optimizado" },
      { q: "Válvulas de desgasificación obstruidas", a: "Solución: Válvulas con filtros internos de nailon" }
    ]
  },
  fr: {
    title: "5 Problèmes Courants (Et Solutions)",
    problems: [
      { q: "Fuites au niveau du joint inférieur", a: "Solution: Films multicouches et outils de scellage robustes" },
      { q: "Zips qui ne se ferment pas correctement", a: "Solution: Zips à pression ou à curseur très résistants" },
      { q: "Oxygène ou humidité gâchant le produit", a: "Solution: Couches haute barrière EVOH ou AL" },
      { q: "Le sachet ne tient pas droit", a: "Solution: Conception optimisée du soufflet de fond" },
      { q: "Vannes de dégazage bouchées", a: "Solution: Vannes avec filtres internes en nylon" }
    ]
  },
  'zh-TW': {
    title: "5 個常見的包裝袋問題（以及解決方案）",
    problems: [
      { q: "底部封口漏氣", a: "解決方案：多層薄膜和堅固的封口模具" },
      { q: "拉鍊無法正確閉合", a: "解決方案：重型壓入式或滑塊拉鍊" },
      { q: "氧氣或水分破壞產品", a: "解決方案：高阻隔 EVOH 或鋁箔層" },
      { q: "袋子無法直立", a: "解決方案：優化的底部折邊設計" },
      { q: "排氣閥堵塞", a: "解決方案：帶有內部尼龍過濾器的排氣閥" }
    ]
  }
};

export default function PouchAllOptionsPage() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as keyof typeof localTranslations) || 'en';
  const tLocal = localTranslations[currentLang] || localTranslations.en;
  const p = 'seoPages.pages.pouchAllOptions';

  const title = t(`${p}.title`);
  const description = t(`${p}.description`);

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-purple-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.badge`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.headlinePrefix`)} <span className="text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">{t(`${p}.hero.headlineSuffix`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t(`${p}.hero.subheading`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex flex-col items-center justify-center bg-gray-100 p-8">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                     <div className="bg-blue-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">{t(`${p}.hero.labels.standUp`)}</span>
                     </div>
                     <div className="bg-green-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">{t(`${p}.hero.labels.flatBottom`)}</span>
                     </div>
                     <div className="bg-yellow-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">{t(`${p}.hero.labels.zippers`)}</span>
                     </div>
                     <div className="bg-pink-200 border-4 border-black flex items-center justify-center p-4">
                        <span className="font-['Space_Grotesk'] font-black uppercase text-center">{t(`${p}.hero.labels.valves`)}</span>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-white px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    {t(`${p}.hero.guideBadge`)}
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
            {t(`${p}.anatomy.titlePrefix`)} <span className="text-purple-500">{t(`${p}.anatomy.titleSuffix`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.anatomy.intro`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.anatomy.sections.0.title`)}</h3>
            <p>
              {t(`${p}.anatomy.sections.0.desc`)}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><Trans i18nKey={`${p}.anatomy.sections.0.list.0`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.0.list.1`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.0.list.2`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.0.list.3`} components={[<strong key="0" />]} /></li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.anatomy.sections.1.title`)}</h3>
            <p>
              {t(`${p}.anatomy.sections.1.desc`)}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><Trans i18nKey={`${p}.anatomy.sections.1.list.0`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.1.list.1`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.1.list.2`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.1.list.3`} components={[<strong key="0" />]} /></li>
            </ul>

            <img 
              src="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp" 
              alt={t(`${p}.anatomy.imgAlt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.anatomy.sections.2.title`)}</h3>
            <p>
              {t(`${p}.anatomy.sections.2.desc`)}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li><Trans i18nKey={`${p}.anatomy.sections.2.list.0`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.2.list.1`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.2.list.2`} components={[<strong key="0" />]} /></li>
              <li><Trans i18nKey={`${p}.anatomy.sections.2.list.3`} components={[<strong key="0" />]} /></li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.anatomy.sections.3.title`)}</h3>
            <p>
              {t(`${p}.anatomy.sections.3.desc`)}
            </p>
            <p>
              <Trans i18nKey={`${p}.anatomy.sections.3.desc2`} components={[<strong key="0" />, <strong key="1" />, <strong key="2" />, <strong key="3" />]} />
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center text-white">
            {tLocal.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {tLocal.problems.map((prob, idx) => (
                <div key={idx} className="bg-gray-900 border-2 border-white p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase mb-2 flex items-center gap-3 text-red-400">
                    <AlertCircle className="w-6 h-6 flex-shrink-0" /> {prob.q}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-green-400 flex items-start gap-3 pl-9">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> {prob.a}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="/imgs/knowledge/pouch-options-pain-points.jpg" 
                alt="Pouch Packaging Options Pain Points" 
                className="w-full h-auto border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titlePrefix`)} <span className="text-purple-500">{t(`${p}.faq.titleSuffix`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3, 4].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-purple-500 flex-shrink-0">{t(`${p}.faq.qPrefix`)}</span>
                  {t(`${p}.faq.questions.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-purple-500">{t(`${p}.faq.aPrefix`)}</span> {t(`${p}.faq.questions.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.button`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
