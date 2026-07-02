import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Printer, PenTool, Truck, PackageCheck, Zap, Layers, AlertTriangle, CheckCircle2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation, Trans } from 'react-i18next'

export default function PouchWorkflowPage() {
  const { t, i18n } = useTranslation();
  const p = 'seoPages.pages.pouchWorkflow';
  const lang = (i18n.language || 'en') as 'en' | 'es' | 'fr' | 'zh-TW';

  const localTranslations: Record<'en' | 'es' | 'fr' | 'zh-TW', any> = {
    en: {
      title: "5 Common Pouch Workflow Problems (And Solutions)",
      problems: [
        { title: "Color Inconsistency", desc: "Strict color matching and automated proofing ensure brand consistency across all runs." },
        { title: "Poor Sealing Strength", desc: "Precise temperature control and high-quality sealants prevent leaks and extend shelf life." },
        { title: "Material Delamination", desc: "Optimized adhesive application and curing times guarantee layer integrity under stress." },
        { title: "Registration Errors", desc: "Automated web-guiding and sensor alignment correct shifts during high-speed printing." },
        { title: "Lead Time Delays", desc: "Streamlined agile workflows and local material sourcing drastically reduce production time." }
      ]
    },
    es: {
      title: "5 Problemas Comunes en el Flujo de Trabajo (Y Soluciones)",
      problems: [
        { title: "Inconsistencia de Color", desc: "La coincidencia de color estricta y las pruebas automatizadas aseguran la consistencia de la marca en todas las tiradas." },
        { title: "Baja Fuerza de Sellado", desc: "El control preciso de temperatura y selladores de alta calidad previenen fugas y extienden la vida útil." },
        { title: "Delaminación del Material", desc: "La aplicación optimizada de adhesivos y tiempos de curado garantizan la integridad de las capas bajo estrés." },
        { title: "Errores de Registro", desc: "El guiado automatizado y la alineación por sensores corrigen desajustes durante la impresión a alta velocidad." },
        { title: "Retrasos en Tiempos de Entrega", desc: "Los flujos de trabajo ágiles y el suministro local de materiales reducen drásticamente el tiempo de producción." }
      ]
    },
    fr: {
      title: "5 Problèmes Courants de Flux de Travail (Et Solutions)",
      problems: [
        { title: "Incohérence des Couleurs", desc: "La correspondance stricte des couleurs et l'épreuvage automatisé assurent la cohérence de la marque sur tous les tirages." },
        { title: "Faible Force de Scellage", desc: "Un contrôle précis de la température et des scellants de haute qualité préviennent les fuites et prolongent la durée de conservation." },
        { title: "Délaminage des Matériaux", desc: "Une application d'adhésif et des temps de durcissement optimisés garantissent l'intégrité des couches sous contrainte." },
        { title: "Erreurs de Repérage", desc: "Le guidage de bande automatisé et l'alignement par capteurs corrigent les décalages pendant l'impression à grande vitesse." },
        { title: "Retards de Livraison", desc: "Des flux de travail agiles et un approvisionnement local en matériaux réduisent considérablement le temps de production." }
      ]
    },
    'zh-TW': {
      title: "5 個常見的軟包裝生產問題（及解決方案）",
      problems: [
        { title: "顏色不一致", desc: "嚴格的色彩匹配和自動打樣確保所有批次的品牌一致性。" },
        { title: "封口強度差", desc: "精確的溫度控制和高品質密封劑可防止洩漏並延長保存期限。" },
        { title: "材料脫層", desc: "優化的塗膠和固化時間保證在壓力下的分層完整性。" },
        { title: "印刷套印誤差", desc: "自動糾偏和傳感器對齊糾正高速印刷過程中的偏移。" },
        { title: "交貨期延遲", desc: "簡化的敏捷工作流程和本地材料採購大幅縮短生產時間。" }
      ]
    }
  };
  const content = localTranslations[lang] || localTranslations.en;

  const title = t(`${p}.title`);
  const description = t(`${p}.description`);

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/workflow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.badge`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.headlinePrefix`)} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.headlineSuffix`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.subheading`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                   <img 
                    src="/imgs/seo-photos/a_printing_machine_running_film_6182312.webp" 
                    alt={t(`${p}.hero.imgAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    {t(`${p}.hero.imgBadge`)}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 -rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12">
            {t(`${p}.lifecycle.titlePrefix`)} <span className="text-yellow-500">{t(`${p}.lifecycle.titleSuffix`)}</span>
          </h2>
          
          <div className="space-y-12 font-['JetBrains_Mono'] text-gray-700">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <PenTool className="w-10 h-10 mb-2 text-[#D4FF00]" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">{t(`${p}.lifecycle.steps.0.label`)}</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">{t(`${p}.lifecycle.steps.0.title`)}</h3>
                 <p>{t(`${p}.lifecycle.steps.0.desc`)}</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Printer className="w-10 h-10 mb-2 text-pink-400" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">{t(`${p}.lifecycle.steps.1.label`)}</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">{t(`${p}.lifecycle.steps.1.title`)}</h3>
                 <p><Trans i18nKey={`${p}.lifecycle.steps.1.desc`} components={[<em key="0" />]} /></p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Layers className="w-10 h-10 mb-2 text-cyan-400" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">{t(`${p}.lifecycle.steps.2.label`)}</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">{t(`${p}.lifecycle.steps.2.title`)}</h3>
                 <p>{t(`${p}.lifecycle.steps.2.desc`)}</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Zap className="w-10 h-10 mb-2 text-orange-400" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">{t(`${p}.lifecycle.steps.3.label`)}</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">{t(`${p}.lifecycle.steps.3.title`)}</h3>
                 <p>{t(`${p}.lifecycle.steps.3.desc`)}</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-black text-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 w-full md:w-32 flex flex-col items-center justify-center">
                 <Truck className="w-10 h-10 mb-2 text-[#D4FF00]" />
                 <span className="font-['Space_Grotesk'] font-black text-xl">{t(`${p}.lifecycle.steps.4.label`)}</span>
              </div>
              <div className="space-y-3">
                 <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase text-black">{t(`${p}.lifecycle.steps.4.title`)}</h3>
                 <p>{t(`${p}.lifecycle.steps.4.desc`)}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase leading-tight">
                {content.title}
              </h2>
              <div className="space-y-6">
                {content.problems.map((problem: any, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start bg-gray-50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="bg-yellow-400 p-2 border-2 border-black shrink-0">
                      <AlertTriangle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase mb-1">{problem.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-gray-700 text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        {problem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/pouch-workflow-pain-points.jpg" 
                  alt="Workflow Pain Points and Solutions" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </NeoCard>
              <div className="absolute top-8 -left-8 w-full h-full border-4 border-black bg-yellow-400 -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titlePrefix`)} <span className="text-yellow-500">{t(`${p}.faq.titleSuffix`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-yellow-500 flex-shrink-0">{t(`${p}.faq.qPrefix`)}</span>
                  {t(`${p}.faq.questions.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-yellow-500">{t(`${p}.faq.aPrefix`)}</span> {t(`${p}.faq.questions.${idx}.a`)}
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
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.button`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

