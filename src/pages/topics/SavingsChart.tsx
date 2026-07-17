import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

import { Helmet } from 'react-helmet-async';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Savings Chart",
    desc: "Comprehensive guide and engineering insights on Savings Chart for flexible packaging.",
    hook: "We know the sinking feeling of opening a shipping box only to find your premium product crushed because the seal failed. You didn't spend months perfecting your recipe just to lose customers over cheap, unreliable packaging...",
    ppTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "Seal Failure Under Pressure",
    pp1Desc: "Using a higher dwell time of 1.2s at 180°C guarantees a robust hermetic seal.",
    pp2Title: "Color Shift on Matte",
    pp2Desc: "Use a dedicated matte BOPP film layer instead of liquid varnish for 100% PMS color accuracy.",
    pp3Title: "Puncture Resistance",
    pp3Desc: "Upgrade to 120 micron NY/PE composite to withstand sharp edges and drops.",
    pp4Title: "Barrier Degradation",
    pp4Desc: "Integrating EVOH or AL foil layers maintains OTR under 0.1 cc/m2/day.",
    pp5Title: "Slow Automation Speeds",
    pp5Desc: "High-slip PE formulation allows VFFS speeds exceeding 60 bags per minute.",
    engTitle: "🔬 From Ryan Wong's Engineering Notebook",
    engDesc: "In my 14 years in packaging design, I've seen countless brands fail because they compromised on material thickness. By increasing just 20 microns, burst rates dropped to under 0.1%. — Ryan Wong, Co-Founder"
  },
  es: {
    title: "Savings Chart (ES)",
    desc: "Guía completa y conocimientos de ingeniería sobre Savings Chart para embalaje flexible.",
    hook: "Conocemos la sensación de hundimiento de abrir una caja de envío solo para encontrar su producto premium aplastado porque el sello falló...",
    ppTitle: "5 Puntos de Dolor y Soluciones",
    pp1Title: "Falla del sello bajo presión",
    pp1Desc: "Un mayor tiempo de permanencia garantiza un sellado hermético.",
    pp2Title: "Cambio de color en mate",
    pp2Desc: "Use una capa de película BOPP mate.",
    pp3Title: "Resistencia a la perforación",
    pp3Desc: "Actualice a un compuesto NY/PE de 120 micras.",
    pp4Title: "Degradación de barrera",
    pp4Desc: "Integración de capas EVOH mantiene OTR under 0.1.",
    pp5Title: "Velocidades lentas de automatización",
    pp5Desc: "Permite velocidades VFFS de más de 60 bolsas.",
    engTitle: "🔬 Del Cuaderno de Ingeniería de Ryan",
    engDesc: "En 14 años, he visto marcas fallar por comprometer el espesor. Las tasas de ruptura cayeron a under 0.1%."
  },
  fr: {
    title: "Savings Chart (FR)",
    desc: "Guide complet et perspectives d'ingénierie sur Savings Chart.",
    hook: "Nous connaissons le sentiment de naufrage de l'ouverture d'une boîte d'expédition...",
    ppTitle: "5 points douloureux et solutions",
    pp1Title: "Défaillance de l'étanchéité",
    pp1Desc: "Un temps de maintien plus élevé garantit une étanchéité hermétique.",
    pp2Title: "Décalage de couleur sur mat",
    pp2Desc: "Utilisez une couche de film BOPP mat dédiée.",
    pp3Title: "Résistance à la perforation",
    pp3Desc: "Passez à 120 microns NY/PE.",
    pp4Title: "Dégradation de la barrière",
    pp4Desc: "Les couches EVOH maintiennent l'OTR under 0.1.",
    pp5Title: "Vitesses lentes",
    pp5Desc: "La formulation PE permet des vitesses de 60 sacs/minute.",
    engTitle: "🔬 Du carnet d'ingénierie de Ryan",
    engDesc: "En 14 ans, j'ai vu des marques échouer en raison de l'épaisseur."
  },
  "zh-tw": {
    title: "Savings Chart (TW)",
    desc: "關於 Savings Chart 的全面指南和工程見解。",
    hook: "我們了解打開運輸箱卻發現優質產品被壓碎時的沉重感...",
    ppTitle: "5個包裝痛點與解決方案",
    pp1Title: "壓力下密封失效",
    pp1Desc: "使用180°C下1.2秒的熱封時間可確保牢固密封。",
    pp2Title: "啞光色差",
    pp2Desc: "使用專用的啞光BOPP薄膜以確保100% PMS色彩準確。",
    pp3Title: "抗刺穿性",
    pp3Desc: "升級至120微米 NY/PE 複合材料。",
    pp4Title: "阻隔性下降",
    pp4Desc: "整合EVOH層使OTR保持在 under 0.1。",
    pp5Title: "自動化速度慢",
    pp5Desc: "高滑爽性PE配方可實現每分鐘超過60袋的速度。",
    engTitle: "🔬 來自 Ryan Wong 的工程筆記",
    engDesc: "在14年的設計中，我見過許多品牌因材料厚度而失敗。破裂率降至 under 0.1%。"
  }
};

export default function SavingsChart() {
  const t = localTranslations.en;
  
  return (
    <SEOPageLayout>
      <Helmet>
        <title>{t.title} | Achieve Pack</title>
        <meta name="description" content={t.desc} />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "${t.pp1Title}",
                "acceptedAnswer": { "@type": "Answer", "text": "${t.pp1Desc}" }
              }
            ]
          }`}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">{t.title}</h1>
        <img src="/imgs/calculator/a_calculator_savings_chart_5545421.webp" alt={t.title} className="w-full rounded-2xl shadow-xl mb-8" />
        
        <p className="text-lg text-neutral-300 mb-8">{t.hook}</p>
        
        <div className="bg-neutral-900 rounded-2xl p-8 mb-12 border border-neutral-800">
          <h2 className="text-2xl font-bold text-white mb-6">{t.ppTitle}</h2>
          
          <div className="grid gap-6">
            <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary-500 font-mono">01</span>
                <h3 className="text-white font-semibold">{t.pp1Title}</h3>
              </div>
              <p className="text-neutral-400"><span className="text-primary-400 font-medium">✅ Solution:</span> {t.pp1Desc}</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary-500 font-mono">02</span>
                <h3 className="text-white font-semibold">{t.pp2Title}</h3>
              </div>
              <p className="text-neutral-400"><span className="text-primary-400 font-medium">✅ Solution:</span> {t.pp2Desc}</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary-500 font-mono">03</span>
                <h3 className="text-white font-semibold">{t.pp3Title}</h3>
              </div>
              <p className="text-neutral-400"><span className="text-primary-400 font-medium">✅ Solution:</span> {t.pp3Desc}</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary-500 font-mono">04</span>
                <h3 className="text-white font-semibold">{t.pp4Title}</h3>
              </div>
              <p className="text-neutral-400"><span className="text-primary-400 font-medium">✅ Solution:</span> {t.pp4Desc}</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary-500 font-mono">05</span>
                <h3 className="text-white font-semibold">{t.pp5Title}</h3>
              </div>
              <p className="text-neutral-400"><span className="text-primary-400 font-medium">✅ Solution:</span> {t.pp5Desc}</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-12">
          <h4 className="text-amber-900 font-bold mb-3">{t.engTitle}</h4>
          <p className="italic text-amber-800">{t.engDesc}</p>
        </div>
        
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t.pp1Title}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{t.pp1Desc}</p>
              </div>
            </article>
          </section>
        </div>
        
      </div>
    </SEOPageLayout>
  );
}
