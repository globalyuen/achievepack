import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Building2, Target, Heart, Users, Award, Leaf, CheckCircle2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'

const localTranslations = {
  en: {
    title: "5 Common Sustainable Packaging Problems (And Solutions)",
    problems: [
      { q: "High Cost of Eco-Friendly Materials", a: "Engineered optimization of material thickness and bulk purchasing." },
      { q: "Poor Barrier Properties (Shelf Life)", a: "Multi-layer high-barrier recyclable structures (e.g., EVOH)." },
      { q: "Aesthetic Limitations (Dull Printing)", a: "Advanced flexographic and digital printing on sustainable films." },
      { q: "Supply Chain Unreliability", a: "Diversified sourcing and automated tracking systems." },
      { q: "Lack of Certifications (Greenwashing)", a: "Fully certified BRCGS, FSC, and compostable processes." }
    ]
  },
  es: {
    title: "5 problemas comunes de embalaje sostenible (y soluciones)",
    problems: [
      { q: "Alto costo de materiales ecológicos", a: "Optimización diseñada del espesor del material y compras al por mayor." },
      { q: "Pobres propiedades de barrera", a: "Estructuras reciclables multicapa de alta barrera (ej. EVOH)." },
      { q: "Limitaciones estéticas", a: "Impresión digital y flexográfica avanzada sobre películas sostenibles." },
      { q: "Falta de confiabilidad en la cadena de suministro", a: "Abastecimiento diversificado y sistemas de seguimiento automatizados." },
      { q: "Falta de certificaciones", a: "Procesos totalmente certificados BRCGS, FSC y compostables." }
    ]
  },
  fr: {
    title: "5 problèmes courants d'emballage durable (et solutions)",
    problems: [
      { q: "Coût élevé des matériaux écologiques", a: "Optimisation de l'épaisseur des matériaux et achats en gros." },
      { q: "Mauvaises propriétés de barrière", a: "Structures recyclables multicouches à haute barrière (ex. EVOH)." },
      { q: "Limites esthétiques", a: "Impression numérique et flexographique avancée sur des films durables." },
      { q: "Manque de fiabilité de la chaîne d'approvisionnement", a: "Approvisionnement diversifié et systèmes de suivi automatisés." },
      { q: "Manque de certifications", a: "Processus entièrement certifiés BRCGS, FSC et compostables." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的可持續包裝問題 (及解決方案)",
    problems: [
      { q: "環保材料成本高昂", a: "工程化優化材料厚度與大宗採購。" },
      { q: "阻隔性能差（保質期短）", a: "多層高阻隔可回收結構（如 EVOH）。" },
      { q: "美觀限制（印刷暗淡）", a: "在可持續薄膜上進行先進的柔版和數字印刷。" },
      { q: "供應鏈不可靠", a: "多元化採購和自動化追蹤系統。" },
      { q: "缺乏認證（漂綠）", a: "完全認證的 BRCGS、FSC 和可堆肥流程。" }
    ]
  }
}
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PouchAboutPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchAbout'
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const lang = (i18n.language || 'en') as keyof typeof localTranslations;
  const currentTranslations = localTranslations[lang] || localTranslations.en;

  const faqs = [
    {
      q: t(`${p}.faq.items.0.q`),
      a: t(`${p}.faq.items.0.a`)
    },
    {
      q: t(`${p}.faq.items.1.q`),
      a: t(`${p}.faq.items.1.a`)
    },
    {
      q: t(`${p}.faq.items.2.q`),
      a: t(`${p}.faq.items.2.a`)
    },
    {
      q: t(`${p}.faq.items.3.q`),
      a: t(`${p}.faq.items.3.a`)
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <meta name="keywords" content="about pouch.eco, about achieve pack, sustainable packaging company, eco-friendly packaging supplier, custom packaging startup, BRCGS packaging manufacturer" />
        <link rel="canonical" href="https://pouch.eco/company/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t(`${p}.breadcrumb.home`)}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t(`${p}.breadcrumb.current`)}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <NeoBadge color="lime">{t(`${p}.hero.badge`)}</NeoBadge>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.hero.titleLine1`)}<br/>
                {t(`${p}.hero.titleLine2`)}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleLine3`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.subtitle1`)}<br/>
                {t(`${p}.hero.subtitle2`)}<br/>
                {t(`${p}.hero.subtitle3`)}<br/>
                {t(`${p}.hero.subtitle4`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="/products" variant="primary">
                  {t(`${p}.hero.btnPrimary`)}
                </NeoButton>
                <NeoButton variant="secondary" href="#team">
                  {t(`${p}.hero.btnSecondary`)}
                </NeoButton>
              </div>
            </div>

            {/* Mission Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_about_sustainability_mission_5914909.webp" 
                alt={t(`${p}.hero.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">{t(`${p}.coreValues.badge`)}</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">{t(`${p}.coreValues.title`)}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Leaf className="w-12 h-12 mb-4 text-[#10b981]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.coreValues.items.0.title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.coreValues.items.0.desc`)}
            </p>
            <NeoBadge color="bg-[#10b981] text-white">{t(`${p}.coreValues.items.0.badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <Award className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">{t(`${p}.coreValues.items.1.title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              {t(`${p}.coreValues.items.1.desc`)}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t(`${p}.coreValues.items.1.badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Users className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.coreValues.items.2.title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.coreValues.items.2.desc`)}
            </p>
            <NeoBadge color="bg-white">{t(`${p}.coreValues.items.2.badge`)}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-24 bg-black text-white border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <NeoBadge color="lime">{t(`${p}.team.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 text-white">{t(`${p}.team.title`)}</h2>
            </div>
            <span className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              {t(`${p}.team.sideBadge`)}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black text-center">
              <ClickableImage 
                src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                alt={t(`${p}.team.items.0.imgAlt`)} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#10b981]"
              />
              <h4 className="font-black text-2xl uppercase">{t(`${p}.team.items.0.name`)}</h4>
              <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#10b981] mt-1">{t(`${p}.team.items.0.role`)}</p>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-500 mt-4 leading-relaxed">
                {t(`${p}.team.items.0.desc`)}
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black text-center">
              <ClickableImage 
                src="/imgs/team/Eric Kwok - Business Development.png" 
                alt={t(`${p}.team.items.1.imgAlt`)} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#10b981]"
              />
              <h4 className="font-black text-2xl uppercase">{t(`${p}.team.items.1.name`)}</h4>
              <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#10b981] mt-1">{t(`${p}.team.items.1.role`)}</p>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-500 mt-4 leading-relaxed">
                {t(`${p}.team.items.1.desc`)}
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black text-center">
              <ClickableImage 
                src="/imgs/team/Jericha Kwok - Business Development.png" 
                alt={t(`${p}.team.items.2.imgAlt`)} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#10b981]"
              />
              <h4 className="font-black text-2xl uppercase">{t(`${p}.team.items.2.name`)}</h4>
              <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#10b981] mt-1">{t(`${p}.team.items.2.role`)}</p>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-500 mt-4 leading-relaxed">
                {t(`${p}.team.items.2.desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stateful Accordion FAQs */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              {t(`${p}.faq.title`)}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              {t(`${p}.faq.subtitle`)}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <button
                  className="w-full text-left p-6 font-black text-lg md:text-xl uppercase flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-['JetBrains_Mono']">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-black">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-6 border-t-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed text-left pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-neutral-50 text-left border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <NeoBadge color="magenta">SOLUTIONS</NeoBadge>
              <h2 className="font-black text-4xl md:text-5xl uppercase mt-4 mb-8">
                {currentTranslations.title}
              </h2>
              <div className="space-y-6">
                {currentTranslations.problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <CheckCircle2 className="w-8 h-8 text-[#10b981] flex-shrink-0" />
                    <div>
                      <h3 className="font-black text-xl uppercase mb-2">{prob.q}</h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">{prob.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/sustainable-packaging-pain-points.jpg" 
                alt="5 Common Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="bg-black text-white">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t(`${p}.cta.title`)}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t(`${p}.cta.desc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/company/factory-tour" variant="dark">
              {t(`${p}.cta.btnPrimary`)}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t(`${p}.cta.btnSecondary`)}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t(`${p}.cta.wholesaleLabel`)}</strong><br/>
            {t(`${p}.cta.wholesaleText`)}
            <a 
              href="https://achievepack.com/company/about" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/company/about →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
