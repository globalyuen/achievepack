import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { useState } from 'react'
import { Package, Award, Sparkles, CheckCircle, HelpCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchCustomBoxesPage() {
  const { t } = useTranslation()
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = t('pouchCustomBoxesPage.title')
  const description = t('pouchCustomBoxesPage.description')

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('pouchCustomBoxesPage.faqQ1'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchCustomBoxesPage.faqA1')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchCustomBoxesPage.faqQ2'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchCustomBoxesPage.faqA2')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchCustomBoxesPage.faqQ3'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchCustomBoxesPage.faqA3')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchCustomBoxesPage.faqQ4'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchCustomBoxesPage.faqA4')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchCustomBoxesPage.faqQ5'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchCustomBoxesPage.faqA5')
        }
      },
      {
        "@type": "Question",
        "name": t('pouchCustomBoxesPage.faqQ6'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('pouchCustomBoxesPage.faqA6')
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: t('pouchCustomBoxesPage.specTrans1Label'),
      val: t('pouchCustomBoxesPage.specTrans1Val'),
      desc: t('pouchCustomBoxesPage.specTrans1Desc')
    },
    {
      label: t('pouchCustomBoxesPage.specTrans2Label'),
      val: t('pouchCustomBoxesPage.specTrans2Val'),
      desc: t('pouchCustomBoxesPage.specTrans2Desc')
    },
    {
      label: t('pouchCustomBoxesPage.specTrans3Label'),
      val: t('pouchCustomBoxesPage.specTrans3Val'),
      desc: t('pouchCustomBoxesPage.specTrans3Desc')
    },
    {
      label: t('pouchCustomBoxesPage.specTrans4Label'),
      val: t('pouchCustomBoxesPage.specTrans4Val'),
      desc: t('pouchCustomBoxesPage.specTrans4Desc')
    }
  ]

  const faqs = [
    {
      q: t('pouchCustomBoxesPage.faqQ1'),
      a: t('pouchCustomBoxesPage.faqA1')
    },
    {
      q: t('pouchCustomBoxesPage.faqQ2'),
      a: t('pouchCustomBoxesPage.faqA2')
    },
    {
      q: t('pouchCustomBoxesPage.faqQ3'),
      a: t('pouchCustomBoxesPage.faqA3')
    },
    {
      q: t('pouchCustomBoxesPage.faqQ4'),
      a: t('pouchCustomBoxesPage.faqA4')
    },
    {
      q: t('pouchCustomBoxesPage.faqQ5'),
      a: t('pouchCustomBoxesPage.faqA5')
    },
    {
      q: t('pouchCustomBoxesPage.faqQ6'),
      a: t('pouchCustomBoxesPage.faqA6')
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
        keywords={["custom boxes", "rigid boxes", "mailer boxes", "tuck boxes", "gift boxes", "chocolate packaging", "tea box packaging", "coffee box packaging", "gold foil boxes", "FSC certified boxes", "embossed packaging"]}
        schemaType="FAQPage"
        additionalSchema={faqSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('pouchCustomBoxesPage.breadcrumbHome')}</Link>
            <span>/</span>
            <Link to="/products" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('pouchCustomBoxesPage.breadcrumbProducts')}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t('pouchCustomBoxesPage.breadcrumbCurrent')}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('pouchCustomBoxesPage.boxBadge')}
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('pouchCustomBoxesPage.fscBadge')}
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('pouchCustomBoxesPage.heroTitleStart')}<br/>
                {t('pouchCustomBoxesPage.heroTitleMiddle')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchCustomBoxesPage.heroTitleSpan')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t('pouchCustomBoxesPage.heroDescLine1')}<br/>
                &gt; {t('pouchCustomBoxesPage.heroDescLine2')}<br/>
                &gt; {t('pouchCustomBoxesPage.heroDescLine3')}<br/>
                &gt; {t('pouchCustomBoxesPage.heroDescLine4')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t('pouchCustomBoxesPage.heroBtn1')}
                </NeoButton>
                <NeoButton variant="secondary" href="#details">
                  {t('pouchCustomBoxesPage.heroBtn2')}
                </NeoButton>
              </div>
            </div>

            {/* Premium Mailer Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp" 
                alt={t('pouchCustomBoxesPage.mailerTitle')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Box Styles Section */}
      <section id="details" className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">{t('pouchCustomBoxesPage.styleBadge')}</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">{t('pouchCustomBoxesPage.styleHeading')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Box Type 1: Corrugated Mailer */}
          <NeoCard color="bg-white" className="space-y-6">
            <ClickableImage 
              src="/imgs/store/box/corrugated-box/2be65396-ac07-44d0-b54c-2422d3bfe981.webp" 
              alt={t('pouchCustomBoxesPage.mailerTitle')} 
              className="w-full rounded-lg shadow-md border-2 border-black"
            />
            <h3 className="font-black text-3xl uppercase">{t('pouchCustomBoxesPage.mailerTitle')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">
              {t('pouchCustomBoxesPage.mailerDesc')}
            </p>
            <div className="grid grid-cols-2 gap-2 font-['JetBrains_Mono'] text-xs font-bold text-neutral-700 bg-neutral-100 p-4 border-2 border-black">
              <div>✓ {t('pouchCustomBoxesPage.mailerSpec1')}</div>
              <div>✓ {t('pouchCustomBoxesPage.mailerSpec2')}</div>
              <div>✓ {t('pouchCustomBoxesPage.mailerSpec3')}</div>
              <div>✓ {t('pouchCustomBoxesPage.mailerSpec4')}</div>
            </div>
          </NeoCard>
          
          {/* Box Type 2: Tuck Box */}
          <NeoCard color="bg-[#FF00FF]" className="text-white space-y-6">
            <ClickableImage 
              src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
              alt={t('pouchCustomBoxesPage.tuckTitle')} 
              className="w-full rounded-lg shadow-md border-2 border-black"
            />
            <h3 className="font-black text-3xl uppercase text-white">{t('pouchCustomBoxesPage.tuckTitle')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-200">
              {t('pouchCustomBoxesPage.tuckDesc')}
            </p>
            <div className="grid grid-cols-2 gap-2 font-['JetBrains_Mono'] text-xs font-bold text-white bg-black/20 p-4 border-2 border-white">
              <div>✓ {t('pouchCustomBoxesPage.tuckSpec1')}</div>
              <div>✓ {t('pouchCustomBoxesPage.tuckSpec2')}</div>
              <div>✓ {t('pouchCustomBoxesPage.tuckSpec3')}</div>
              <div>✓ {t('pouchCustomBoxesPage.tuckSpec4')}</div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Premium Finishes Spotlights */}
      <section className="py-24 bg-black text-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left space-y-8">
              <NeoBadge color="lime">{t('pouchCustomBoxesPage.finishBadge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase leading-tight italic">{t('pouchCustomBoxesPage.finishHeading')}</h2>
              <p className="font-['JetBrains_Mono'] text-lg text-neutral-300 leading-relaxed">
                {t('pouchCustomBoxesPage.finishDesc')}
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#D4FF00] pl-6 py-2">
                  <h4 className="font-black text-xl uppercase">{t('pouchCustomBoxesPage.finishGoldTitle')}</h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 mt-1">{t('pouchCustomBoxesPage.finishGoldDesc')}</p>
                </div>
                <div className="border-l-4 border-[#FF00FF] pl-6 py-2">
                  <h4 className="font-black text-xl uppercase">{t('pouchCustomBoxesPage.finishEmbossTitle')}</h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-neutral-400 mt-1">{t('pouchCustomBoxesPage.finishEmbossDesc')}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt={t('pouchCustomBoxesPage.imgAltGold')} 
                className="border-4 border-white w-full shadow-lg"
              />
              <ClickableImage 
                src="/imgs/store/surface/emboss.webp" 
                alt={t('pouchCustomBoxesPage.imgAltEmboss')} 
                className="border-4 border-white w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Translation Table */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <NeoBadge color="magenta">{t('pouchCustomBoxesPage.specsBadge')}</NeoBadge>
            <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">{t('pouchCustomBoxesPage.specsHeading')}</h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {t('pouchCustomBoxesPage.specsHeaderBadge')}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specTranslations.map((s, idx) => (
            <div key={idx} className="bg-neutral-50 border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
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
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t('pouchCustomBoxesPage.faqBadge')}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              {t('pouchCustomBoxesPage.faqHeading')}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              {t('pouchCustomBoxesPage.faqSubheading')}
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
          <NeoBadge color="bg-black text-white">{t('pouchCustomBoxesPage.ctaBadge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t('pouchCustomBoxesPage.ctaHeading')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('pouchCustomBoxesPage.ctaDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t('pouchCustomBoxesPage.ctaBtn1')}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('pouchCustomBoxesPage.ctaBtn2')}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t('pouchCustomBoxesPage.ctaWholesaleTitle')}</strong><br/>
            {t('pouchCustomBoxesPage.ctaWholesaleDesc')}
            <a 
              href="https://achievepack.com/packaging/custom-boxes" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/packaging/custom-boxes →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
