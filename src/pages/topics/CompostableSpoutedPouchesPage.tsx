import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Zap, Target, Thermometer, Sparkles, MessageCircle, Calendar, ShoppingBag, Layers, Activity, FileText } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const SPOUTED_POUCH_TECH_DATA = {
  tensileStrength: "Weld Seam Strength > 25N/15mm (Certified Liquid Leak-Proof)",
  barrierSpecs: "WVTR < 0.1g/m²/day | OTR < 0.2cc/m²/day (EVOH Compostable Equivalent)",
  heroSubtitle: "NK/Kraft/PBS Laminated Structure | Plant-Based Biodegradable Spouts | Circular Economy Design"
}

const CompostableSpoutedPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.compostableSpoutedPouches'

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'the-spout-challenge',
      title: t(`seoPages.pages.compostableSpoutedPouches.solvingTheSpoutedPouch`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Conventional spouted pouches are a recycling nightmare. They consist of complex multi-layer plastics fused to rigid PE/PP spouts, making them completely unrecyclable. Our compostable spouted pouch offers a true **End-of-Life Solution** with a 100% biodegradable structure—spout included.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-600">
                <h4 className="font-semibold text-amber-800">Conventional Pouch Risks</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>- Unrecyclable multi-material laminate</li>
                  <li>- Rigid plastic spouts contaminate compost</li>
                  <li>- High carbon footprint and fossil fuel reliance</li>
                  <li>- Landfill-only disposal options</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                <h4 className="font-semibold text-emerald-800">Achieve Pack Circular Design</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>- 100% certified plant-based bio-resins</li>
                  <li>- Biodegradable rigid spouts and caps</li>
                  <li>- Certified ASTM D6400 & EN 13432 compostability</li>
                  <li>- Decarbonized, high-barrier bio-EVOH structure</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            By shifting from a linear "take-make-waste" model to our **Circular Economy Design**, liquid, paste, and puree brands can achieve complete organic recycling. When thrown into an industrial compost bin, both the pouch body and the rigid spout break down completely into healthy organic biomass within 180 days, leaving zero toxic residues or microplastics behind.
          </p>
        </div>
      )
    },
    {
      id: 'material-science',
      title: t(`seoPages.pages.compostableSpoutedPouches.engineeredForLiquid`),
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            To replace standard fossil-fuel plastics, Achieve Pack utilizes an advanced multi-layer lamination method combining high-performance natural cellulose paper, compostable metalized films, and high-barrier **Bio-EVOH** coatings. This maintains optimal structural integrity and preserves oxygen-sensitive contents.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">100% Leak-Proof</h4>
              <p className="text-sm text-neutral-600">Specially engineered PBS/PBAT sealing layer provides premium weld seam strength exceeding {SPOUTED_POUCH_TECH_DATA.tensileStrength}.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Oxygen & Vapor Shield</h4>
              <p className="text-sm text-neutral-600">Preserves flavor, vitamins, and texture with barrier specifications matching {SPOUTED_POUCH_TECH_DATA.barrierSpecs}.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Activity className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Food-Safe Pure Spouts</h4>
              <p className="text-sm text-neutral-600">Spouts are injection molded from certified GMO-free plant starches, completely free of BPA, PFAS, and heavy metals.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/compostable-spouted-pouches.png" 
              alt="Achieve Pack compostable spouted pouch undergoing composting test" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Circular Economy Design: Achieve Pack's industrial compostable liquid pouch breaks down naturally in compost soils, forming nutrient-rich organic compost."
            />
          </div>
        </div>
      )
    },
    {
      id: 'lab-verification',
      title: t(`seoPages.pages.compostableSpoutedPouches.labVerifiedComposting`),
      icon: <Activity className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Unlike typical eco-friendly packaging that relies on greenwashed claims, Achieve Pack provides transparent, certified scientific documentation. Our materials hold globally recognized certifications, confirming their absolute organic safety.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Rigorous Scientific Protocols</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Our compostable spouted pouches are designed to meet standard composting conditions, ensuring that both the flexible film and the rigid spout decay in complete harmony.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Officially certified by BPI (Biodegradable Products Institute).
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Complies fully with ASTM D6400 (US) and EN 13432 (EU) standards.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  TUV OK Compost Industrial certification for full biodegradability.
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/topics/compostable-spouted-pouches-alt.png" 
                alt="Compostable liquid spout bag details" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="End-of-Life Solutions: Achieve Pack spouted pouches are thoroughly tested to guarantee zero toxic residuals or persistent microplastics."
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`seoPages.pages.compostableSpoutedPouches.getZeroDefect`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-teal-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Sustainable Liquid Packaging. Zero Compromises.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure a durable, certified compostable liquid packaging supply chain? Book a technical session with our packaging engineers and request your custom sample kit today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-teal-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Technical Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Liquid Pouch Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            BPI CERTIFIED - TUV INDUSTRIAL COMPOSTABLE - LEAK-PROOF TESTED - PFAS-FREE RESINS
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your spouted pouches suitable for hot- pasteurization?",
      answer: "Yes. Achieve Pack utilizes a specially modified PBS (Polybutylene Succinate) inner layer that is thermal-resistant up to 105°C, making it completely safe for standard hot- processes used in baby foods, purees, and organic sauces."
    },
    {
      question: "Is the rigid spout itself actually compostable?",
      answer: "Absolutely. Many suppliers use traditional plastic spouts on compostable bags, which is greenwashing. Our rigid spouts and caps are injection-molded from TUV-certified home and industrial compostable plant starches, degrading naturally along with the pouch."
    },
    {
      question: "What certifications do your liquid pouches hold?",
      answer: "Our compostable spouted pouches hold official certifications from BPI (Biodegradable Products Institute) and TUV Austria (OK Compost Industrial), complying with international ASTM D6400 and EN 13432 composting criteria."
    },
    {
      question: "What is the oxygen barrier shelf-life of these bio-pouches?",
      answer: "By integrating an organic EVOH barrier layer, our compostable liquid pouches achieve an oxygen barrier shelf-life of 12 to 18 months, preserving vitamins, nutrients, and colors in fresh liquids or purees."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`seoPages.pages.compostableSpoutedPouches.metaTitle`)}</title>
        <meta name="description" content={t(`seoPages.pages.compostableSpoutedPouches.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-spouted-pouches" />
        <meta name="keywords" content="compostable spouted pouches, biodegradable spout bags, liquid compostable packaging, circular economy stand-up bags, baby food spouted pouch, organic puree pouch" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#047857"
        title={t(`seoPages.pages.compostableSpoutedPouches.heroTitle`)}
        description={t(`seoPages.pages.compostableSpoutedPouches.heroDesc`)}
        keywords={['compostable spouted pouch', 'circular economy design', 'liquid packaging']}
        heroTitle={t(`seoPages.pages.compostableSpoutedPouches.heroTitle2`)}
        heroSubtitle={SPOUTED_POUCH_TECH_DATA.heroSubtitle}
        introSummary="Rigid spouted pouches are a key driver of modern convenience, but they create a major waste problem due to non-recyclable multi-material constructions. Achieve Pack’s compostable spouted pouches provide a highly reliable, leak-proof, and certified organic end-of-life solution. Every component—including the high-barrier flexible body, injection-molded spout, and sealing caps—is fully compostable, protecting your product and driving clean circularity."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/topics/compostable-spouted-pouches.png"
      />
    </>
  )
}

export default CompostableSpoutedPouchesPage
