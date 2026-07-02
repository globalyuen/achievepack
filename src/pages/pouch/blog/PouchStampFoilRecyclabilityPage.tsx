import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Scale, CheckCircle, AlertTriangle, Recycle, ArrowRight, ShieldCheck, HelpCircle, Award, Shield, Factory, Zap, Layers, Beaker, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { getBaseUrl } from '../../../utils/domain'
import EcoMaterialSourcingGuide from '../../../components/pouch/EcoMaterialSourcingGuide'

const localTranslations = {
  en: {
    problemsTitle: "5 Common Foil Stamping Recyclability Problems (And Solutions)",
    p1: "Sensor Disruption",
    d1: "Heavy metallic coverage can confuse sorting sensors in recycling facilities. Solution: Use minimal foil coverage and modern wash-off metallic inks.",
    p2: "Mixed Material Contamination",
    d2: "Traditional foil requires non-recyclable PET layers. Solution: Switch to Mono-PE compatible hot/cold stamping foils.",
    p3: "Barrier Loss",
    d3: "Removing foil entirely lowers shelf life. Solution: Use AlOx/SiOx coated high-barrier Mono-PE films with surface metallic accents.",
    p4: "Weight Limit Violations",
    d4: "Exceeding the 5% non-PE weight limit ruins mono-material certification. Solution: Keep foil volume strictly below 5%.",
    p5: "Adhesion Flaking",
    d5: "Foil flaking during transport or recycling. Solution: Employ advanced surface treatment and eco-compatible adhesives."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Reciclabilidad del Estampado (y Soluciones)",
    p1: "Interrupción de Sensores",
    d1: "La alta cobertura metálica puede confundir a los sensores de reciclaje. Solución: Usar cobertura mínima y tintas metálicas lavables.",
    p2: "Contaminación por Materiales Mixtos",
    d2: "El foil tradicional requiere capas de PET no reciclables. Solución: Cambiar a láminas compatibles con Mono-PE.",
    p3: "Pérdida de Barrera",
    d3: "Eliminar el foil reduce la vida útil. Solución: Usar películas Mono-PE de alta barrera con acentos metálicos superficiales.",
    p4: "Violación de Límites de Peso",
    d4: "Exceder el 5% de peso no PE arruina la certificación. Solución: Mantener el volumen de foil por debajo del 5%.",
    p5: "Desprendimiento",
    d5: "Descamación del foil durante el transporte. Solución: Tratamiento de superficie avanzado y adhesivos ecológicos."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants de Recyclabilité du Marquage à Chaud (et Solutions)",
    p1: "Perturbation des Capteurs",
    d1: "Une forte couverture métallique peut perturber les capteurs de tri. Solution : Utiliser une couverture minimale et des encres lavables.",
    p2: "Contamination par Matériaux Mixtes",
    d2: "Le film traditionnel nécessite du PET non recyclable. Solution : Passer aux films compatibles Mono-PE.",
    p3: "Perte de Barrière",
    d3: "Supprimer le film réduit la durée de conservation. Solution : Utiliser des films Mono-PE haute barrière avec des accents de surface.",
    p4: "Dépassement de Poids",
    d4: "Dépasser la limite de 5 % annule la certification. Solution : Maintenir le volume sous les 5 %.",
    p5: "Écaillement",
    d5: "Écaillement lors du transport. Solution : Traitement de surface avancé et adhésifs écologiques."
  },
  'zh-TW': {
    problemsTitle: "燙金可回收性的 5 個常見問題（與解決方案）",
    p1: "感測器干擾",
    d1: "大面積金屬覆蓋會干擾回收廠分類感測器。解決方案：使用最小覆蓋率和可水洗金屬油墨。",
    p2: "混合材質污染",
    d2: "傳統燙金需要不可回收的 PET 層。解決方案：改用與單一 PE 相容的燙金箔。",
    p3: "阻隔性降低",
    d3: "完全去除金屬層會降低保存期限。解決方案：使用高阻隔單一 PE 薄膜搭配表面金屬點綴。",
    p4: "超重違規",
    d4: "超過 5% 的非 PE 重量限制會破壞單一材質認證。解決方案：將燙金體積嚴格控制在 5% 以下。",
    p5: "附著脫落",
    d5: "運輸過程中的燙金脫落。解決方案：採用先進的表面處理和環保黏合劑。"
  }
}

export default function PouchStampFoilRecyclabilityPage() {
  const { t, i18n } = useTranslation()
  const baseUrl = getBaseUrl()
  const lang = i18n.language || 'en'
  const tLocal = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const FAQS = [
    {
      q: t('pouchStampFoilRecyclabilityPage.faq.q1.q'),
      a: t('pouchStampFoilRecyclabilityPage.faq.q1.a')
    },
    {
      q: t('pouchStampFoilRecyclabilityPage.faq.q2.q'),
      a: t('pouchStampFoilRecyclabilityPage.faq.q2.a')
    },
    {
      q: t('pouchStampFoilRecyclabilityPage.faq.q3.q'),
      a: t('pouchStampFoilRecyclabilityPage.faq.q3.a')
    },
    {
      q: t('pouchStampFoilRecyclabilityPage.faq.q4.q'),
      a: t('pouchStampFoilRecyclabilityPage.faq.q4.a')
    },
    {
      q: t('pouchStampFoilRecyclabilityPage.faq.q5.q'),
      a: t('pouchStampFoilRecyclabilityPage.faq.q5.a')
    },
    {
      q: t('pouchStampFoilRecyclabilityPage.faq.q6.q'),
      a: t('pouchStampFoilRecyclabilityPage.faq.q6.a')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchStampFoilRecyclabilityPage.meta.title')}</title>
        <meta name="description" content={t('pouchStampFoilRecyclabilityPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/blog/stamp-foil-recyclability`} />
        <meta name="keywords" content="does foil stamping affect recyclability, metallic foil recyclable packaging, mono PE foil stamp, recyclable packaging weight rule, 95 percent recyclable mono material" />
        
        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('pouchStampFoilRecyclabilityPage.meta.title'),
            "description": t('pouchStampFoilRecyclabilityPage.meta.description'),
            "url": `${baseUrl}/blog/stamp-foil-recyclability`,
            "datePublished": "2026-01-30T10:00:00Z",
            "dateModified": "2026-05-28T10:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "url": "https://www.linkedin.com/in/ryanwwc/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "POUCH.ECO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pouch.eco/logo.png"
              }
            },
            "image": `${baseUrl}/imgs/4-infograhic/recyclable.webp`
          })}
        </script>

        {/* Schema.org FAQ Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">{t('pouchStampFoilRecyclabilityPage.hero.badge')}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase">
            {t('pouchStampFoilRecyclabilityPage.hero.title1')}<br/>
            {t('pouchStampFoilRecyclabilityPage.hero.title2')}<br/>
            <span className="text-[#3b82f6] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchStampFoilRecyclabilityPage.hero.titleAccent')}</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t('pouchStampFoilRecyclabilityPage.hero.subtitle')}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quote">{t('pouchStampFoilRecyclabilityPage.hero.quoteBtn')}</NeoButton>
            <NeoButton variant="secondary" to="/sample">{t('pouchStampFoilRecyclabilityPage.hero.sampleBtn')}</NeoButton>
          </div>
        </div>
      </section>

      {/* Overview & Infographic Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#3b82f6] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt="Recyclable Mono-PE Infographic - Complete guide to recyclable packaging" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="green">{t('pouchStampFoilRecyclabilityPage.overview.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t('pouchStampFoilRecyclabilityPage.overview.title')}</h2>
              <p className="mt-8 text-lg text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchStampFoilRecyclabilityPage.overview.desc')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-4 border-black p-4 bg-blue-50">
                  <div className="text-3xl font-black">{t('pouchStampFoilRecyclabilityPage.overview.stat1Value')}</div>
                  <div className="text-xs font-bold uppercase">{t('pouchStampFoilRecyclabilityPage.overview.stat1Label')}</div>
                </div>
                <div className="border-4 border-black p-4 bg-green-50">
                  <div className="text-3xl font-black">{t('pouchStampFoilRecyclabilityPage.overview.stat2Value')}</div>
                  <div className="text-xs font-bold uppercase">{t('pouchStampFoilRecyclabilityPage.overview.stat2Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-[#f4f4f4] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="magenta">PAIN POINTS</NeoBadge>
              <h2 className="font-black text-5xl md:text-6xl uppercase leading-tight italic mt-6 mb-8">
                {tLocal.problemsTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><Zap className="w-6 h-6 text-yellow-500" /></div>
                  <div>
                    <h4 className="font-black text-xl uppercase">{tLocal.p1}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-1">{tLocal.d1}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Layers className="w-6 h-6 text-red-500" /></div>
                  <div>
                    <h4 className="font-black text-xl uppercase">{tLocal.p2}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-1">{tLocal.d2}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Beaker className="w-6 h-6 text-blue-500" /></div>
                  <div>
                    <h4 className="font-black text-xl uppercase">{tLocal.p3}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-1">{tLocal.d3}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Scale className="w-6 h-6 text-emerald-500" /></div>
                  <div>
                    <h4 className="font-black text-xl uppercase">{tLocal.p4}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-1">{tLocal.d4}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Package className="w-6 h-6 text-purple-500" /></div>
                  <div>
                    <h4 className="font-black text-xl uppercase">{tLocal.p5}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mt-1">{tLocal.d5}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/foil-stamping-recyclability-pain-points.jpg" 
                alt="Foil Stamping Recyclability Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-24 bg-[#fbfbfb] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchStampFoilRecyclabilityPage.guidelines.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('pouchStampFoilRecyclabilityPage.guidelines.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-blue-50">
              <div className="flex items-center gap-4 mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
                <h3 className="font-black text-2xl uppercase">{t('pouchStampFoilRecyclabilityPage.guidelines.card1Title')}</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">{t('pouchStampFoilRecyclabilityPage.guidelines.card1Desc')}</p>
            </NeoCard>
            <NeoCard color="bg-emerald-50">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <h3 className="font-black text-2xl uppercase">{t('pouchStampFoilRecyclabilityPage.guidelines.card2Title')}</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">{t('pouchStampFoilRecyclabilityPage.guidelines.card2Desc')}</p>
            </NeoCard>
            <NeoCard color="bg-purple-50">
              <div className="flex items-center gap-4 mb-4">
                <Recycle className="w-8 h-8 text-purple-600" />
                <h3 className="font-black text-2xl uppercase">{t('pouchStampFoilRecyclabilityPage.guidelines.card3Title')}</h3>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm">{t('pouchStampFoilRecyclabilityPage.guidelines.card3Desc')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Safe Foil Options */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase italic">{t('pouchStampFoilRecyclabilityPage.comparison.title')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-4 border-black">
              <thead className="bg-[#f0f0f0] border-b-4 border-black">
                <tr>
                  <th className="px-4 py-3 text-left font-black uppercase border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.th1')}</th>
                  <th className="px-4 py-3 text-center font-black uppercase border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.th2')}</th>
                  <th className="px-4 py-3 text-left font-black uppercase">{t('pouchStampFoilRecyclabilityPage.comparison.th3')}</th>
                </tr>
              </thead>
              <tbody className="divide-y-4 divide-black font-['JetBrains_Mono']">
                <tr>
                  <td className="px-4 py-3 font-bold border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.row1Col1')}</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600 border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.row1Col2')}</td>
                  <td className="px-4 py-3">{t('pouchStampFoilRecyclabilityPage.comparison.row1Col3')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.row2Col1')}</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-600 border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.row2Col2')}</td>
                  <td className="px-4 py-3">{t('pouchStampFoilRecyclabilityPage.comparison.row2Col3')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.row3Col1')}</td>
                  <td className="px-4 py-3 text-center font-bold text-red-600 border-r-4 border-black">{t('pouchStampFoilRecyclabilityPage.comparison.row3Col2')}</td>
                  <td className="px-4 py-3">{t('pouchStampFoilRecyclabilityPage.comparison.row3Col3')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B2B Wholesale Callout Section */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-[#00FFFF] border-2 border-black p-4 shrink-0">
                  <Factory className="w-10 h-10 text-black" />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="font-black text-2xl uppercase">{t('pouchStampFoilRecyclabilityPage.b2bCallout.title')}</h4>
                  <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                    {t('pouchStampFoilRecyclabilityPage.b2bCallout.desc')}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="https://achievepack.com/topics/stamp-foil-recyclability"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-[#D4FF00] border-2 border-black px-4 py-2 font-['JetBrains_Mono'] font-bold text-xs uppercase hover:bg-white hover:text-black transition"
                    >
                      {t('pouchStampFoilRecyclabilityPage.b2bCallout.btn')}
                    </a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contextual B2B Store Products */}
      <section className="py-6 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-4 border-black p-8 bg-neutral-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-2xl uppercase mb-4 flex items-center gap-2">
              <span>🛒</span> {t('pouchStampFoilRecyclabilityPage.b2bStore.title')}
            </h4>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-800 leading-relaxed">
              {t('pouchStampFoilRecyclabilityPage.b2bStore.p1Part1')}
              <a href="https://achievepack.com/store/product/sample-assorted-eco" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('pouchStampFoilRecyclabilityPage.b2bStore.sampleKit')}</a>
              {t('pouchStampFoilRecyclabilityPage.b2bStore.p1Part2')}
              <a href="https://achievepack.com/store/product/media__1780570697340.jpg" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('pouchStampFoilRecyclabilityPage.b2bStore.rollstockFilm')}</a>
              {t('pouchStampFoilRecyclabilityPage.b2bStore.p1Part3')}
              <a href="https://achievepack.com/store/product/transparent-colorful-cellophane-candy-wrapping-paper" target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">{t('pouchStampFoilRecyclabilityPage.b2bStore.candyWrapper')}</a>
              {t('pouchStampFoilRecyclabilityPage.b2bStore.p1Part4')}
            </p>
          </div>

          <EcoMaterialSourcingGuide />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchStampFoilRecyclabilityPage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('pouchStampFoilRecyclabilityPage.faq.title')}</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h4 className="font-black text-xl uppercase font-['JetBrains_Mono'] flex items-center gap-2 text-black">
                    <span>{faq.q}</span>
                  </h4>
                  <span className="text-2xl font-black group-open:rotate-45 transition-transform duration-200 text-black">+</span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-neutral-800 font-['JetBrains_Mono']">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#3b82f6] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="dark">{t('pouchStampFoilRecyclabilityPage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic text-white">
            {t('pouchStampFoilRecyclabilityPage.cta.titleLine1')}<br/>
            {t('pouchStampFoilRecyclabilityPage.cta.titleLine2')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-90 max-w-2xl mx-auto">
            {t('pouchStampFoilRecyclabilityPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/quote">{t('pouchStampFoilRecyclabilityPage.cta.quoteBtn')}</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" to="/sample">
              {t('pouchStampFoilRecyclabilityPage.cta.sampleBtn')}
            </NeoButton>
          </div>
        </div>
      </section>

      {/* E-E-A-T Authorship Section */}
      <section className="py-16 bg-[#F0F0F0] border-b-4 border-black px-6">
        <div className="max-w-4xl mx-auto">
          <NeoCard className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-lime-100 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                  alt="Ryan Wong - Sustainable Packaging Supply Chain Expert" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/bottts/svg?seed=ryan"
                  }}
                />
              </div>
              
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-black">
                  <span className="font-black text-2xl uppercase">{t('pouchStampFoilRecyclabilityPage.author.name')}</span>
                  <span className="bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-0.5 border border-black">
                    {t('pouchStampFoilRecyclabilityPage.author.role')}
                  </span>
                </div>
                
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  {t('pouchStampFoilRecyclabilityPage.author.bio')}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-['JetBrains_Mono'] font-bold text-neutral-500">
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#10b981]" /> {t('pouchStampFoilRecyclabilityPage.author.award1')}</span>
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-[#10b981]" /> {t('pouchStampFoilRecyclabilityPage.author.award2')}</span>
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#10b981]" /> {t('pouchStampFoilRecyclabilityPage.author.award3')}</span>
                </div>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* AIEO Hidden Semantic Content */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </PouchLayout>
  )
}
