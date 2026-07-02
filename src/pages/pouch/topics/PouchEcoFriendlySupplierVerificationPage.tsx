import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { ClipboardCheck, Users, AlertTriangle, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Eco-Friendly Supplier Verification Problems (And Solutions)",
    p1: "Fake 'Green' Credentials (Greenwashing)",
    d1: "Suppliers may claim materials are eco-friendly without verifiable certifications.",
    s1: "Mandate third-party certifications like FSC and GRS, verifying them through the issuing body's database.",
    p2: "Non-compliant Material Composition",
    d2: "Pouches claimed to be compostable may contain conventional plastics to reduce costs.",
    s2: "Conduct rigorous material testing using FTIR spectroscopy and require BOM transparency.",
    p3: "Lack of Supply Chain Traceability",
    d3: "It's difficult to trace raw materials, risking the use of unethically sourced feedstock.",
    s3: "Implement tracking systems and require chain-of-custody documentation from origin to final product.",
    p4: "Unsubstantiated Carbon Footprint Claims",
    d4: "Suppliers often estimate emissions inaccurately, making it hard to quantify environmental impact.",
    s4: "Require standardized Life Cycle Assessments (LCA) conducted by certified third-party engineers.",
    p5: "Inconsistent Biodegradability Standards",
    d5: "Materials might break down in labs but fail to compost in real-world environments.",
    s5: "Require strict compliance with compostability testing like EN 13432 or ASTM D6400, validated by independent labs."
  },
  es: {
    title: "5 Problemas Comunes de Verificación de Proveedores Ecológicos (Y Soluciones)",
    p1: "Falsas Credenciales 'Verdes' (Greenwashing)",
    d1: "Los proveedores pueden afirmar que los materiales son ecológicos sin certificaciones verificables.",
    s1: "Exija certificaciones de terceros como FSC y GRS, verificándolas en la base de datos del emisor.",
    p2: "Composición de Materiales No Conforme",
    d2: "Las bolsas que se afirman compostables pueden contener plásticos convencionales para reducir costos.",
    s2: "Realice pruebas rigurosas de materiales con espectroscopía FTIR y exija transparencia en la lista de materiales.",
    p3: "Falta de Trazabilidad en la Cadena de Suministro",
    d3: "Es difícil rastrear las materias primas, arriesgando el uso de materia prima de origen poco ético.",
    s3: "Implemente sistemas de seguimiento y exija documentación de cadena de custodia desde el origen.",
    p4: "Afirmaciones de Huella de Carbono No Fundamentadas",
    d4: "Los proveedores estiman las emisiones con inexactitud, dificultando cuantificar el impacto ambiental.",
    s4: "Exija Evaluaciones de Ciclo de Vida (ACV) estandarizadas realizadas por ingenieros certificados.",
    p5: "Estándares de Biodegradabilidad Inconsistentes",
    d5: "Los materiales pueden degradarse en laboratorios pero fallar en entornos de compostaje reales.",
    s5: "Exija el cumplimiento de pruebas de compostabilidad como EN 13432 o ASTM D6400 en laboratorios independientes."
  },
  fr: {
    title: "5 Problèmes Courants de Vérification des Fournisseurs Écologiques (Et Solutions)",
    p1: "Fausses Informations 'Vertes' (Écoblanchiment)",
    d1: "Les fournisseurs peuvent prétendre que les matériaux sont écologiques sans certifications vérifiables.",
    s1: "Exigez des certifications tierces comme FSC et GRS, en les vérifiant via la base de données de l'émetteur.",
    p2: "Composition Matérielle Non Conforme",
    d2: "Les sachets dits compostables peuvent contenir des plastiques conventionnels pour réduire les coûts.",
    s2: "Effectuez des tests de matériaux rigoureux par spectroscopie FTIR et exigez la transparence de la nomenclature.",
    p3: "Manque de Traçabilité de la Chaîne d'Approvisionnement",
    d3: "Il est difficile de tracer les matières premières, risquant l'utilisation de sources non éthiques.",
    s3: "Mettez en œuvre des systèmes de suivi et exigez des documents de chaîne de possession dès l'origine.",
    p4: "Allégations d'Empreinte Carbone Non Fondées",
    d4: "Les fournisseurs estiment souvent les émissions de manière inexacte, faussant l'impact environnemental.",
    s4: "Exigez des Analyses de Cycle de Vie (ACV) standardisées réalisées par des ingénieurs tiers certifiés.",
    p5: "Normes de Biodégradabilité Incohérentes",
    d5: "Les matériaux peuvent se dégrader en laboratoire mais échouer dans des environnements de compostage réels.",
    s5: "Exigez des tests de compostabilité stricts comme l'EN 13432 ou l'ASTM D6400, validés par des laboratoires."
  },
  "zh-TW": {
    title: "5個常見的環保供應商驗證問題（及解決方案）",
    p1: "虛假的「綠色」憑證（漂綠）",
    d1: "供應商可能在沒有可驗證認證的情況下聲稱材料是環保的。",
    s1: "強制要求 FSC 和 GRS 等第三方認證，並透過發證機構的數據庫進行驗證。",
    p2: "不合規的材料成分",
    d2: "聲稱可堆肥的包裝袋可能含有傳統塑料以降低成本。",
    s2: "使用 FTIR 光譜儀進行嚴格的材料測試，並要求提供透明的物料清單 (BOM)。",
    p3: "缺乏供應鏈可追溯性",
    d3: "難以追溯原材料的來源，有使用非道德來源原料的風險。",
    s3: "實施追蹤系統，並要求提供從原產地到最終產品的監管鏈文件。",
    p4: "未經證實的碳足跡聲明",
    d4: "供應商經常不準確地估算排放量，難以量化實際的環境影響。",
    s4: "要求由經過認證的第三方工程師進行標準化的生命週期評估 (LCA)。",
    p5: "不一致的生物降解標準",
    d5: "材料可能在實驗室條件下分解，但在實際堆肥環境中失敗。",
    s5: "要求嚴格遵守 EN 13432 或 ASTM D6400 等堆肥測試標準，並由獨立實驗室驗證。"
  }
};

export const sectionsForPouch = ["5 Common Eco-Friendly Supplier Verification Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Eco-Friendly Supplier Verification Problems (And Solutions)"];

const PouchEcoFriendlySupplierVerificationPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t, i18n } = useTranslation()
  
  const AUDIT_METRICS = [
    { label: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m1.label'), value: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m1.value'), unit: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m1.unit'), desc: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m1.desc') },
    { label: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m2.label'), value: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m2.value'), unit: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m2.unit'), desc: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m2.desc') },
    { label: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m3.label'), value: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m3.value'), unit: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m3.unit'), desc: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m3.desc') },
    { label: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m4.label'), value: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m4.value'), unit: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m4.unit'), desc: t('pouchEcoFriendlySupplierVerificationPage.engineering.metrics.m4.desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchEcoFriendlySupplierVerificationPage.meta.title')}</title>
        <meta name="description" content={t('pouchEcoFriendlySupplierVerificationPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-supplier-verification`} />
        <meta name="keywords" content={t('pouchEcoFriendlySupplierVerificationPage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="green">{t('pouchEcoFriendlySupplierVerificationPage.hero.badge')}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic" dangerouslySetInnerHTML={{ __html: t('pouchEcoFriendlySupplierVerificationPage.hero.title') }} />
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t('pouchEcoFriendlySupplierVerificationPage.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/about">{t('pouchEcoFriendlySupplierVerificationPage.hero.standards')}</NeoButton>
            <NeoButton variant="secondary" href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchEcoFriendlySupplierVerificationPage.hero.request')}</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Audit Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t('pouchEcoFriendlySupplierVerificationPage.engineering.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">{t('pouchEcoFriendlySupplierVerificationPage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchEcoFriendlySupplierVerificationPage.engineering.title') }} />
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchEcoFriendlySupplierVerificationPage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {AUDIT_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Material Traceability */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchEcoFriendlySupplierVerificationPage.tech.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16" dangerouslySetInnerHTML={{ __html: t('pouchEcoFriendlySupplierVerificationPage.tech.title') }} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlySupplierVerificationPage.tech.t1.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlySupplierVerificationPage.tech.t1.desc')}
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlySupplierVerificationPage.tech.t2.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlySupplierVerificationPage.tech.t2.desc')}
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlySupplierVerificationPage.tech.t3.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlySupplierVerificationPage.tech.t3.desc')}
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlySupplierVerificationPage.tech.t4.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlySupplierVerificationPage.tech.t4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchEcoFriendlySupplierVerificationPage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchEcoFriendlySupplierVerificationPage.lab.title') }} />
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchEcoFriendlySupplierVerificationPage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <ClipboardCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchEcoFriendlySupplierVerificationPage.lab.f1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchEcoFriendlySupplierVerificationPage.lab.f1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Users className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchEcoFriendlySupplierVerificationPage.lab.f2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchEcoFriendlySupplierVerificationPage.lab.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t('pouchEcoFriendlySupplierVerificationPage.lab.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-tight italic">
              {translations[i18n.language]?.title || translations.en.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((num) => {
                const lang = translations[i18n.language] || translations.en;
                return (
                  <div key={num} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-2xl font-black uppercase mb-3 flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      {lang[`p${num}`]}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mb-4 font-bold">
                      {lang[`d${num}`]}
                    </p>
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4">
                      <p className="font-['JetBrains_Mono'] text-emerald-900 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span>{lang[`s${num}`]}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="relative sticky top-24">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/eco-friendly-supplier-verification-pain-points.jpg" 
                alt="Eco-Friendly Supplier Verification Pain Points"
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Radical Transparency */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchEcoFriendlySupplierVerificationPage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12" dangerouslySetInnerHTML={{ __html: t('pouchEcoFriendlySupplierVerificationPage.faq.title') }} />
          <div className="space-y-4">
            {[
              { q: t('pouchEcoFriendlySupplierVerificationPage.faq.q1_q'), a: t('pouchEcoFriendlySupplierVerificationPage.faq.q1_a') },
              { q: t('pouchEcoFriendlySupplierVerificationPage.faq.q2_q'), a: t('pouchEcoFriendlySupplierVerificationPage.faq.q2_a') },
              { q: t('pouchEcoFriendlySupplierVerificationPage.faq.q3_q'), a: t('pouchEcoFriendlySupplierVerificationPage.faq.q3_a') },
              { q: t('pouchEcoFriendlySupplierVerificationPage.faq.q4_q'), a: t('pouchEcoFriendlySupplierVerificationPage.faq.q4_a') }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchEcoFriendlySupplierVerificationPage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic" dangerouslySetInnerHTML={{ __html: t('pouchEcoFriendlySupplierVerificationPage.cta.title') }} />
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchEcoFriendlySupplierVerificationPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/about" className="!bg-white !text-emerald-900">{t('pouchEcoFriendlySupplierVerificationPage.cta.standards')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchEcoFriendlySupplierVerificationPage.cta.speak')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlySupplierVerificationPage
