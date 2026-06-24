import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Target, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, FileCheck, AlertTriangle  , Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const PouchPFASFreePackagingPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchPFASFreePackaging';
  const baseUrl = getBaseUrl()
  
  const SAFETY_METRICS = [
    { label: t(`${p}.engineering.metrics.0.label`, 'Total Fluorine'), value: t(`${p}.engineering.metrics.0.value`, '< 50'), unit: t(`${p}.engineering.metrics.0.unit`, 'PPM'), desc: t(`${p}.engineering.metrics.0.desc`, 'Certified absence of added PFAS.') },
    { label: t(`${p}.engineering.metrics.1.label`, 'Grease Barrier'), value: t(`${p}.engineering.metrics.1.value`, '12+'), unit: t(`${p}.engineering.metrics.1.unit`, 'Kit Rating'), desc: t(`${p}.engineering.metrics.1.desc`, 'Superior protection against oils.') },
    { label: t(`${p}.engineering.metrics.2.label`, 'Bio-Content'), value: t(`${p}.engineering.metrics.2.value`, '100%'), unit: t(`${p}.engineering.metrics.2.unit`, 'Aqueous'), desc: t(`${p}.engineering.metrics.2.desc`, 'Natural grease-resistant coatings.') },
    { label: t(`${p}.engineering.metrics.3.label`, 'Regulatory'), value: t(`${p}.engineering.metrics.3.value`, 'PASSED'), unit: t(`${p}.engineering.metrics.3.unit`, 'AB 1200'), desc: t(`${p}.engineering.metrics.3.desc`, 'California & EU safety compliant.') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.seo.title`, "PFAS-Free Packaging | Chemical Safety Engineering | Pouch.eco")}</title>
        <meta name="description" content={t(`${p}.seo.description`, "Technical guide to PFAS-free packaging. 800+ words of research on forever chemicals, regulatory bans, and advanced aqueous grease barriers.")} />
        <link rel="canonical" href={`${baseUrl}/topics/pfas-free-packaging`} />
        <meta name="keywords" content="PFAS free packaging, forever chemicals, chemical safety, grease barrier, AB 1200 compliant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`, "TOXIC_LOCK_V1.0")}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">{t(`${p}.hero.titleLine1`, "Pure.")}<br/>{t(`${p}.hero.titleLine2`, "Clean.")}<br/><span className="text-slate-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titleLine3`, "Safe.")}</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.desc`, '"Forever Chemicals" have no place in food packaging. We engineer high-performance, PFAS-free flexible pouches.')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.button1`, "Browse Safe Solutions")}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.button2`, "Request Purity Lab Pack")}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-slate-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/sustainable-lifecycle-pillar.png" 
                alt="PFAS-Free Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Chemical Barrier */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-slate-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="PFAS-Free Lab Testing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`, "CHEMICAL_SAFETY_LAB")}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.engineering.titleLine1`, "Beyond the")}<br/>{t(`${p}.engineering.titleLine2`, "Forever.")}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.engineering.desc`, "PFAS (per- and polyfluoroalkyl substances) have historically been used for grease-proofing, but their environmental persistence is a catastrophic failure of engineering. Our <strong>PFAS-Free protocols</strong> utilize high-purity <strong>Aqueous Coatings</strong> and mechanical orientation (MDO) to create a grease shield (Kit Rating 12+) that is biologically inert. We verify every batch through <strong>Total Fluorine (TF) Analysis</strong> to ensure detection levels remain below 50 ppm.") }} />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SAFETY_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-slate-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Alternative Barriers */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`, "BARRIER_TECH_STACK")}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">{t(`${p}.tech.titleLine1`, "The Clean")}<br/>{t(`${p}.tech.titleLine2`, "Shield.")}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.0.title`, "01. Aqueous Coating")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.0.desc`, "Water-based dispersion technology that creates a physical grease-proof layer. 100% PFAS-free and recyclable in standard paper or plastic streams depending on the substrate.")}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.1.title`, "02. Mechanical Barrier")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.1.desc`, "Utilizing high-purity PE and PP polymers oriented at the molecular level to resist oil penetration. This physical defense replaces the need for fluorinated chemical additives.")}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.2.title`, "03. Bio-Wax Tech")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.2.desc`, "Natural-origin wax coatings derived from plant sources. These provides excellent water and grease resistance for compostable food pouches.")}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.3.title`, "04. NIAS Testing")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.3.desc`, "We perform Non-Intentionally Added Substances (NIAS) screening to ensure no chemical migration from adhesives or inks compromises the PFAS-free status of the bag.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Context */}
      <section className="py-24 bg-slate-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.regulatory.badge`, "REGULATORY_FRAMEWORK")}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.regulatory.titleLine1`, "Compliant.")}<br/>{t(`${p}.regulatory.titleLine2`, "By Design.")}</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.regulatory.desc`, "PFAS legislation is sweeping the globe. From <strong>California AB 1200</strong> to the <strong>EU REACH</strong> restriction list, brands are now legally responsible for the chemical purity of their packaging. Achieve Pack provides the certified <strong>Technical Data Sheets (TDS)</strong> and third-party lab reports required to move your brand into a toxic-free future.") }} />
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <FileCheck className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.regulatory.euReady`, "EU REACH Ready")}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.regulatory.euReadyDesc`, "Zero PFOA, PFOS, or other restricted fluorinated chemicals.")}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <AlertTriangle className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.regulatory.ab1200`, "AB 1200 Audited")}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.regulatory.ab1200Desc`, "Meets strict California disclosure and prohibition mandates for 2026.")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Safe Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Chemical Literacy */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`, "CHEMICAL_FAQ")}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t(`${p}.faq.titleLine1`, "No Secrets.")}<br/>{t(`${p}.faq.titleLine2`, "Just Safety.")}</h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.items.0.q`, "What exactly are PFAS?"), a: t(`${p}.faq.items.0.a`, "PFAS are synthetic chemicals used to repel oil and water. They are known as 'forever chemicals' because they do not break down in the environment and can cause long-term health issues in humans.") },
              { q: t(`${p}.faq.items.1.q`, "How do you test for PFAS?"), a: t(`${p}.faq.items.1.a`, "We utilize Total Fluorine (TF) analysis via Combustion Ion Chromatography (CIC). If total fluorine is below 50 ppm, the sample is considered PFAS-free by global regulatory standards.") },
              { q: t(`${p}.faq.items.2.q`, "Can I get a grease-proof bag without PFAS?"), a: t(`${p}.faq.items.2.a`, "Yes. Our aqueous-coated structures provide equal or superior grease resistance (Kit Rating 12) to traditional fluorinated treatments without the toxic risk.") },
              { q: t(`${p}.faq.items.3.q`, "Do these safe bags affect product shelf life?"), a: t(`${p}.faq.items.3.a`, "No. By using mechanical barrier orientation and high-purity sealants, we maintain identical oxygen and moisture barrier properties (OTR/WVTR).") }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`, "SAFETY_MANDATE")}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.cta.titleLine1`, "Pure Future.")}<br/>{t(`${p}.cta.titleLine2`, "Safe Now.")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.desc`, "Ready to secure a PFAS-free supply chain for your brand? Audit our laboratory purity reports today.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-slate-900">{t(`${p}.cta.button1`, "Order Purity Samples")}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.button2`, "Speak to a Safety Engineer")}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPFASFreePackagingPage
