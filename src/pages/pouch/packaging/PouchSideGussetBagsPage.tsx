import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Layers, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Coffee, HelpCircle, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'
import { Link } from 'react-router-dom'

export default function PouchSideGussetBagsPage() {
  const { t } = useTranslation()
  const [scrollPercent, setScrollPercent] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const heroCardRef = useRef<HTMLDivElement>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY
      const d = document.documentElement.scrollHeight - window.innerHeight
      if (d > 0) setScrollPercent(s / d)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return
    const rect = heroCardRef.current.getBoundingClientRect()
    setTilt({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 30, y: ((e.clientY - rect.top) / rect.height - 0.5) * -30 })
  }

  const title = t('pouchSideGussetBagsPage.title')
  const description = t('pouchSideGussetBagsPage.description')

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('pouchSideGussetBagsPage.faqQ1'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchSideGussetBagsPage.faqA1')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchSideGussetBagsPage.faqQ2'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchSideGussetBagsPage.faqA2')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchSideGussetBagsPage.faqQ3'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchSideGussetBagsPage.faqA3')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchSideGussetBagsPage.faqQ4'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchSideGussetBagsPage.faqA4')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchSideGussetBagsPage.faqQ5'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchSideGussetBagsPage.faqA5')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchSideGussetBagsPage.faqQ6'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchSideGussetBagsPage.faqA6')
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: t('pouchSideGussetBagsPage.specTrans1Label'),
      val: t('pouchSideGussetBagsPage.specTrans1Val'),
      desc: t('pouchSideGussetBagsPage.specTrans1Desc')
    },
    {
      label: t('pouchSideGussetBagsPage.specTrans2Label'),
      val: t('pouchSideGussetBagsPage.specTrans2Val'),
      desc: t('pouchSideGussetBagsPage.specTrans2Desc')
    },
    {
      label: t('pouchSideGussetBagsPage.specTrans3Label'),
      val: t('pouchSideGussetBagsPage.specTrans3Val'),
      desc: t('pouchSideGussetBagsPage.specTrans3Desc')
    },
    {
      label: t('pouchSideGussetBagsPage.specTrans4Label'),
      val: t('pouchSideGussetBagsPage.specTrans4Val'),
      desc: t('pouchSideGussetBagsPage.specTrans4Desc')
    }
  ]

  const faqs = [
    {
      q: t('pouchSideGussetBagsPage.faqQ1'),
      a: t('pouchSideGussetBagsPage.faqA1')
    },
    {
      q: t('pouchSideGussetBagsPage.faqQ2'),
      a: t('pouchSideGussetBagsPage.faqA2')
    },
    {
      q: t('pouchSideGussetBagsPage.faqQ3'),
      a: t('pouchSideGussetBagsPage.faqA3')
    },
    {
      q: t('pouchSideGussetBagsPage.faqQ4'),
      a: t('pouchSideGussetBagsPage.faqA4')
    },
    {
      q: t('pouchSideGussetBagsPage.faqQ5'),
      a: t('pouchSideGussetBagsPage.faqA5')
    },
    {
      q: t('pouchSideGussetBagsPage.faqQ6'),
      a: t('pouchSideGussetBagsPage.faqA6')
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
        keywords={["side gusset bag", "quad seal bag", "coffee bag", "side fold bag", "gusset pouch", "tin tie coffee bag", "gusseted packaging", "bulk food bag", "BRCGS coffee bag"]}
        schemaType="FAQPage"
        additionalSchema={faqSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('pouchSideGussetBagsPage.breadcrumbHome')}</Link>
            <span>/</span>
            <Link to="/products" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('pouchSideGussetBagsPage.breadcrumbProducts')}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t('pouchSideGussetBagsPage.breadcrumbCurrent')}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('pouchSideGussetBagsPage.packagingType')}
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('pouchSideGussetBagsPage.brcgsBadge')}
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('pouchSideGussetBagsPage.heroTitleStart')}<br/>
                {t('pouchSideGussetBagsPage.heroTitleMiddle')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchSideGussetBagsPage.heroTitleSpan')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t('pouchSideGussetBagsPage.heroDescLine1')}<br/>
                &gt; {t('pouchSideGussetBagsPage.heroDescLine2')}<br/>
                &gt; {t('pouchSideGussetBagsPage.heroDescLine3')}<br/>
                &gt; {t('pouchSideGussetBagsPage.heroDescLine4')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t('pouchSideGussetBagsPage.heroBtn1')}
                </NeoButton>
                <NeoButton variant="secondary" href="#specs">
                  {t('pouchSideGussetBagsPage.heroBtn2')}
                </NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]" ref={heroCardRef} onMouseMove={handleMouseMove}>
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/gusset-pouch.glb"
                tilt={tilt}
                scrollPercent={scrollPercent}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Side Gusset Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Coffee className="w-12 h-12 mb-4 text-[#D4FF00]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchSideGussetBagsPage.card1Title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchSideGussetBagsPage.card1Desc')}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t('pouchSideGussetBagsPage.card1Badge')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]">
            <Layers className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">{t('pouchSideGussetBagsPage.card2Title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              {t('pouchSideGussetBagsPage.card2Desc')}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t('pouchSideGussetBagsPage.card2Badge')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Zap className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchSideGussetBagsPage.card3Title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchSideGussetBagsPage.card3Desc')}
            </p>
            <NeoBadge color="bg-white">{t('pouchSideGussetBagsPage.card3Badge')}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Technical Spec Value Translation */}
      <section id="specs" className="py-24 bg-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <span className="bg-[#FF00FF] text-white font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchSideGussetBagsPage.specsBadge')}
              </span>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">
                {t('pouchSideGussetBagsPage.sectionHeadingStart')}<br/>{t('pouchSideGussetBagsPage.sectionHeadingEnd')}
              </h2>
            </div>
            <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('pouchSideGussetBagsPage.specsHeaderBadge')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <NeoCard color="bg-white" className="space-y-6">
              <h3 className="font-black text-3xl uppercase text-left">{t('pouchSideGussetBagsPage.specsCard1Title')}</h3>
              <div className="space-y-4 font-['JetBrains_Mono'] text-lg">
                {[
                  [t('pouchSideGussetBagsPage.specLabelWidth'), '80mm – 280mm'],
                  [t('pouchSideGussetBagsPage.specLabelHeight'), '150mm – 450mm'],
                  [t('pouchSideGussetBagsPage.specLabelGusset'), '40mm – 120mm'],
                  [t('pouchSideGussetBagsPage.specLabelCapacity'), '100g – 5kg'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between border-b-2 border-black pb-2">
                    <span>{label}</span>
                    <span className="font-black">{val}</span>
                  </div>
                ))}
              </div>
            </NeoCard>

            <NeoCard color="bg-[#D4FF00]" className="text-black space-y-6">
              <h3 className="font-black text-3xl uppercase text-left">{t('pouchSideGussetBagsPage.specsCard2Title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  t('pouchSideGussetBagsPage.closureFeature1'),
                  t('pouchSideGussetBagsPage.closureFeature2'),
                  t('pouchSideGussetBagsPage.closureFeature3'),
                  t('pouchSideGussetBagsPage.closureFeature4'),
                  t('pouchSideGussetBagsPage.closureFeature5'),
                  t('pouchSideGussetBagsPage.closureFeature6'),
                  t('pouchSideGussetBagsPage.closureFeature7'),
                  t('pouchSideGussetBagsPage.closureFeature8'),
                ].map(feature => (
                  <div key={feature} className="flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-sm text-left">
                    <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </NeoCard>
          </div>

          {/* Specs Value Matrix */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specTranslations.map((s, idx) => (
              <div key={idx} className="bg-neutral-50 border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left">
                <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black font-['JetBrains_Mono']">
                  {s.label}
                </span>
                <h4 className="font-black text-xl uppercase mt-4 mb-2">{s.val}</h4>
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 text-left">
            {t('pouchSideGussetBagsPage.deepDiveTitleStart')}<span className="text-[#FF00FF]">{t('pouchSideGussetBagsPage.deepDiveTitleSpan')}</span>
          </h2>

          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6 text-left">
            <p>
              {t('pouchSideGussetBagsPage.deepDivePara1')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <img
                src="/imgs/store/pouch shape/side -seal.webp"
                alt={t('pouchSideGussetBagsPage.imgAlt1')}
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
              <img
                src="/imgs/pouch-shape/side-gusset-pouch-eco.png"
                alt={t('pouchSideGussetBagsPage.imgAlt2')}
                className="w-full h-80 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <h3 className="text-2xl font-black uppercase text-black mt-12 mb-4">{t('pouchSideGussetBagsPage.deepDiveSubheading1')}</h3>
            <p>
              {t('pouchSideGussetBagsPage.deepDivePara2')}
            </p>
            <p>
              {t('pouchSideGussetBagsPage.deepDivePara3')}
            </p>

            <h3 className="text-2xl font-black uppercase text-black mt-12 mb-4">{t('pouchSideGussetBagsPage.deepDiveSubheading2')}</h3>
            <p>
              {t('pouchSideGussetBagsPage.deepDivePara4')}
            </p>
          </div>
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t('pouchSideGussetBagsPage.faqBadge')}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              {t('pouchSideGussetBagsPage.faqHeading')}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              {t('pouchSideGussetBagsPage.faqSubheading')}
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

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="bg-black text-white">{t('pouchSideGussetBagsPage.ctaBadge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t('pouchSideGussetBagsPage.ctaHeading')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('pouchSideGussetBagsPage.ctaDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t('pouchSideGussetBagsPage.ctaBtn1')}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('pouchSideGussetBagsPage.ctaBtn2')}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t('pouchSideGussetBagsPage.ctaWholesaleTitle')}</strong><br/>
            {t('pouchSideGussetBagsPage.ctaWholesaleDesc')}
            <a 
              href="https://achievepack.com/packaging/side-gusset-bags" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/packaging/side-gusset-bags →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
