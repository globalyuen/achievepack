import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Zap as Flash, Utensils } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const PouchRecyclableSnackPackagingPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchRecyclableSnackPackaging';
  const baseUrl = getBaseUrl()
  
  const SNACK_METRICS = [
    { label: t(`${p}.engineering.metrics.0.label`, 'Crunch Pres'), value: t(`${p}.engineering.metrics.0.value`, '100%'), unit: t(`${p}.engineering.metrics.0.unit`, 'Shelf'), desc: t(`${p}.engineering.metrics.0.desc`, 'Verified parity with foil.') },
    { label: t(`${p}.engineering.metrics.1.label`, 'Sortability'), value: t(`${p}.engineering.metrics.1.value`, 'NIR'), unit: t(`${p}.engineering.metrics.1.unit`, 'Ready'), desc: t(`${p}.engineering.metrics.1.desc`, 'Scan-verified recovery.') },
    { label: t(`${p}.engineering.metrics.2.label`, 'Grease Barr'), value: t(`${p}.engineering.metrics.2.value`, 'High'), unit: t(`${p}.engineering.metrics.2.unit`, 'Seal'), desc: t(`${p}.engineering.metrics.2.desc`, 'Tested for oily snacks.') },
    { label: t(`${p}.engineering.metrics.3.label`, 'Recyclable'), value: t(`${p}.engineering.metrics.3.value`, 'PP/PE'), unit: t(`${p}.engineering.metrics.3.unit`, 'Mono'), desc: t(`${p}.engineering.metrics.3.desc`, 'Single-stream compatible.') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.seo.title`, "Recyclable Snack Packaging | High Barrier & Crunch | Pouch.eco")}</title>
        <meta name="description" content={t(`${p}.seo.description`, "Technical guide to recyclable snack packaging. 800+ words of research on mono-material PP/PE, NIR sortability, and crunch preservation science.")} />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-snack-packaging`} />
        <meta name="keywords" content="recyclable snack packaging, mono-material chip bags, snack pouches, sustainable snack packaging, NIR sortable" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`, "SNACK_TECH_V1.0")}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">{t(`${p}.hero.titleLine1`, "Crunch.")}<br/>{t(`${p}.hero.titleLine2`, "Pure.")}<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titleLine3`, "Fresh.")}</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.desc`, "Snack packaging is the final frontier of recycling. We engineer high-barrier mono-material pouches.")}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.button1`, "Browse Snack Solutions")}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.button2`, "Order Crunch Samples")}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/recyclable-snack-hero.png" 
                alt="Verified Sustainable Snack Packaging" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Snack Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/ocean-bound-plastic-hero.png" 
                alt="Snack Packaging Barrier Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`, "CRUNCH_PRESERVATION_AUDIT")}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.engineering.titleLine1`, "Engineered.")}<br/>{t(`${p}.engineering.titleLine2`, "For the Crunch.")}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.engineering.desc`, "The snack industry has long relied on metallized multi-layer films to protect products from moisture and light. But these films are a recycling nightmare. In 2026, the mandate is <strong>Purity</strong>. At Pouch.eco, we engineer <strong>Mono-PP (BOPP/CPP)</strong> and <strong>Mono-PE (MDO-PE)</strong> structures that achieve <strong>WVTR levels below 0.5</strong>—matching the performance of traditional foil bags. Our structures are designed for <strong>NIR (Near-Infrared) Sortability</strong>, ensuring they are correctly identified by recycling infrastructure and processed into high-quality PCR resin. We maintain the tactile 'stiffness' and 'crackle' that consumers expect, providing a sustainable transition with zero sensory compromise.") }} />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SNACK_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Snack Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`, "SNACK_TECH_STACK")}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">{t(`${p}.tech.titleLine1`, "High Barrier.")}<br/>{t(`${p}.tech.titleLine2`, "High Speed.")}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.0.title`, "01. Vacuum Metallization")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.0.desc`, "Applying nano-layers of aluminum to mono-PP or mono-PE films. This provides extreme light and oxygen barriers while remaining within the < 5% weight limit for recyclability.")}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.1.title`, "02. Grease Barrier Tech")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.1.desc`, "Engineered inner layers that block oils and fats from migrating through the packaging, preventing delamination and maintaining crisp visual branding.")}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.2.title`, "03. High-Speed Converting")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.2.desc`, "Optimized COF (Coefficient of Friction) for high-speed automated Form-Fill-Seal (FFS) lines, ensuring zero downtime during the transition to sustainable films.")}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.items.3.title`, "04. Laser Easy-Open")}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.items.3.desc`, "Precision laser scoring that ensures a clean, straight tear every time—preventing the 'packaging explosion' common with traditional snack bags.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.laboratory.badge`, "SNACK_SCIENCE_V1")}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.laboratory.titleLine1`, "Verified.")}<br/>{t(`${p}.laboratory.titleLine2`, "To the Crunch.")}</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.laboratory.desc`, "Snack freshness is a measurable technical variable. We perform <strong>Accelerated Shelf-Life Testing (ASLT)</strong> on every custom structure to ensure your chips, nuts, or popcorn remain at peak quality for 6-12 months. Our <strong>EEAT Material Protocol</strong> utilizes <strong>Cyclos-HTP</strong> laboratory certification to prove that our mono-materials are correctly sorted in modern MRFs (Material Recovery Facilities). By replacing non-recyclable metallized BOPP with <strong>Certified Mono-PP</strong>, we help snack brands reduce their Extended Producer Responsibility (EPR) fee liability and meet the 'Design for Recycling' mandates of global regulations.") }} />
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Flash className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.laboratory.barrier`, "Barrier Validated")}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.laboratory.barrierDesc`, "Tested for OTR and WVTR to ensure absolute parity with traditional non-recyclable foil.")}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Utensils className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.laboratory.foodSafety`, "Food Safety Certified")}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.laboratory.foodSafetyDesc`, "100% solvent-free lamination and food-grade resins for total consumer safety.")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt="Verified Snack Packaging Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Snack Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`, "SNACK_FAQ")}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t(`${p}.faq.titleLine1`, "Expert")}<br/>{t(`${p}.faq.titleLine2`, "Intelligence.")}</h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.items.0.q`, "Is metallized film truly recyclable?"), a: t(`${p}.faq.items.0.a`, "Only if the metal layer is < 5% of the total structure weight and applied to a mono-polymer film. Our structures are engineered to meet these strict global recycling benchmarks.") },
              { q: t(`${p}.faq.items.1.q`, "Do you offer 'Recyclable Kraft' snack pouches?"), a: t(`${p}.faq.items.1.a`, "Yes. We can apply a Kraft-paper finish to a mono-PE or mono-PP structure, providing the tactile 'natural' feel with 100% recyclability.") },
              { q: t(`${p}.faq.items.2.q`, "Can I use your films on my existing packing lines?"), a: t(`${p}.faq.items.2.a`, "Absolutely. We engineer the Coefficient of Friction (COF) and seal temperature profiles to match your existing equipment for a seamless transition.") },
              { q: t(`${p}.faq.items.3.q`, "What is NIR Sortability?"), a: t(`${p}.faq.items.3.a`, "It is the ability of a recycling scanner to correctly identify the polymer type. We use specialized inks and materials that ensure your packaging is never 'missed' by sensors.") }
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
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`, "SNACK_MANDATE")}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.cta.titleLine1`, "Think Fresh.")}<br/>{t(`${p}.cta.titleLine2`, "Impact Pure.")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.desc`, "Ready to secure a high-barrier, sustainable supply chain for your snack brand? Let's start the technical audit today.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.button1`, "Order Snack Samples")}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.button2`, "Speak to a Snack Engineer")}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclableSnackPackagingPage
