import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Thermometer, Droplets } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const STANDARDS_DATA = {
  en13432: "The European gold standard. Requires 90% biodegradation within 6 months and disintegration to < 2mm within 12 weeks in industrial composting conditions.",
  astmD6400: "The primary US standard used by BPI. Similar to EN 13432 but with specific requirements for heavy metal content and eco-toxicity in finished soil.",
  as4736: "Known for its strict worm-toxicity test. This ensures that the resulting compost is safe for delicate earthworm populations, a critical benchmark for soil health.",
  disintegration: "Physical breakdown of the bag. After 12 weeks, > 90% of the material must pass through a 2mm sieve."
}

const CompostableCertificationFAQPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.compostableCertificationFAQ'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.s1.title`, 'Navigating the Global Compostability Standards'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.s1.p1Html`, 'Sustainability claims are only as strong as the certifications that back them. In 2026, saying a package is "compostable" without specifying the standard (e.g., <strong>ASTM D6400</strong> or <strong>EN 13432</strong>) is considered misleading by regulators. This guide provides the technical breakdown of the world\'s most authoritative compostability certifications.') }} />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-600">
                <h4 className="font-semibold text-green-800">{t(`${p}.s1.h1`, 'Industrial vs. Home')}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.s1.l1_1`, '- Industrial: 60C+ controlled environments')}</li>
                  <li>{t(`${p}.s1.l1_2`, '- Home: Ambient temperature (20-30C)')}</li>
                  <li>{t(`${p}.s1.l1_3`, '- Different microbial activity requirements')}</li>
                  <li>{t(`${p}.s1.l1_4`, '- Variable timeframes (90 vs. 365 days)')}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">{t(`${p}.s1.h2`, 'Achieve Pack Assurance')}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.s1.l2_1`, '- TUV OK Compost (HOME and INDUSTRIAL)')}</li>
                  <li>{t(`${p}.s1.l2_2`, '- BPI Certified (US Market Ready)')}</li>
                  <li>{t(`${p}.s1.l2_3`, '- ABA Certified (Australia/NZ Ready)')}</li>
                  <li>{t(`${p}.s1.l2_4`, '- DIN CERCO (German Quality Standards)')}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.s1.p2Html`, 'At Achieve Pack, we ensure that every layer of your compostable pouch - including the inks, adhesives, and zippers - is fully certified. We work with leading global laboratories like <strong>ISEGA</strong> and <strong>OWS</strong> to verify that our materials meet the highest standards of disintegration, biodegradation, and eco-toxicity.') }} />
        </div>
      )
    },
    {
      id: 'core-standards',
      title: t(`${p}.s2.title`, 'The Big Three Global Standards'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s2.p1`, 'While many countries have local rules, most global packaging is engineered to meet one or more of these three dominant technical standards.')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.s2.h1`, 'EN 13432 (Europe)')}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t(`${p}.standardsData.en13432`, STANDARDS_DATA.en13432)}
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.s2.h2`, 'ASTM D6400 (US)')}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t(`${p}.standardsData.astmD6400`, STANDARDS_DATA.astmD6400)}
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.s2.h3`, 'AS 4736 (Australia)')}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {t(`${p}.standardsData.as4736`, STANDARDS_DATA.as4736)}
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/sustainable-lifecycle-pillar.png" 
              alt="Compostable Certification Logos" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption={t(`${p}.s2.caption`, 'EEAT Insight: Understanding the difference between BPI, TUV, and ABA certifications')}
            />
          </div>
        </div>
      )
    },
    {
      id: 'testing-protocols',
      title: t(`${p}.s3.title`, 'How a Package is Actually Tested'),
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s3.p1`, 'To receive a Seedling or OK Compost logo, a material must pass four technical hurdles. Failure in any one area results in a total rejection.')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 p-4 bg-white border border-neutral-200 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg text-green-700 font-bold">01</div>
                  <div dangerouslySetInnerHTML={{ __html: t(`${p}.s3.l1Html`, '<strong>Chemical Characterization:</strong> Checking for restricted heavy metals (Lead, Cadmium, Mercury) and Fluorine (PFAS).') }} />
                </li>
                <li className="flex items-start gap-3 p-4 bg-white border border-neutral-200 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg text-green-700 font-bold">02</div>
                  <div dangerouslySetInnerHTML={{ __html: t(`${p}.s3.l2Html`, '<strong>Biodegradation:</strong> Measuring the conversion of organic carbon to CO2. 90% must be converted within 180 days (Industrial).') }} />
                </li>
                <li className="flex items-start gap-3 p-4 bg-white border border-neutral-200 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg text-green-700 font-bold">03</div>
                  <div dangerouslySetInnerHTML={{ __html: `${t(`${p}.s3.l3_str`, '<strong>Disintegration:</strong> ')}${t(`${p}.standardsData.disintegration`, STANDARDS_DATA.disintegration)}` }} />
                </li>
                <li className="flex items-start gap-3 p-4 bg-white border border-neutral-200 rounded-xl">
                  <div className="p-2 bg-green-100 rounded-lg text-green-700 font-bold">04</div>
                  <div dangerouslySetInnerHTML={{ __html: t(`${p}.s3.l4Html`, '<strong>Eco-Toxicity:</strong> Testing the resulting compost with plant growth (Cress/Summer Barley) to ensure no negative soil impact.') }} />
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.s3.h1`, 'Technical Documentation')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.s3.d1`, 'We provide the Test Reports and Certification Numbers for every structure we produce. This allows your brand to use the official logos on your artwork, which is essential for consumer trust and retail acceptance.')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: t(`${p}.s4.title`, 'EEAT: Why Lab Verification Matters'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s4.p1`, 'In the eyes of search engines and regulators, technical expertise is the antidote to greenwashing. We help brands move beyond marketing claims and into substantiated engineering data.')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.jpg" 
                alt="Compostable material manufacturing and quality control" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption={t(`${p}.s4.caption`, 'Operational Integrity: Our manufacturing lines are ISO 9001 and ISO 14001 audited')}
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.s4.h1`, 'Our Certification Partners')}</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s4.l1Html`, '<strong>TUV Austria:</strong> OK Compost HOME and Industrial.') }} />
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s4.l2Html`, '<strong>BPI (Biodegradable Products Institute):</strong> US industrial composting.') }} />
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s4.l3Html`, '<strong>DIN CERCO:</strong> Certification for German and Central European markets.') }} />
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s4.l4Html`, '<strong>ABA:</strong> Australian Bioplastics Association HOME and Industrial.') }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.s5.title`, 'Secure Your Compostable Certification'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-green-800 to-emerald-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.s5.h1`, 'Certified Performance. Zero Waste.')}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.s5.p1`, 'Ready to audit your brand\'s compostable claims? Our engineering team will match your current materials with certified, high-performance compostable structures.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.s5.btn1`, 'Book Certification Review')}
            </button>
            <Link
              to="/topics/home-compostable-coffee-bags"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Leaf className="h-5 w-5" />
              {t(`${p}.s5.btn2`, 'View Compostable Coffee Tech')}
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.s5.footerText`, 'TUV OK COMPOST - BPI CERTIFIED - AS 4736 READY - PFAS FREE')}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faqs.q1`, "Can I put Industrial Compostable bags in my home compost?"),
      answer: t(`${p}.faqs.a1`, "No. Industrial compostable materials (like standard PLA) require 60C+ temperatures and high moisture to break down. In a home compost pile (20-30C), they may stay intact for years. You must look for OK Compost HOME or AS 5810 for backyard composting.")
    },
    {
      question: t(`${p}.faqs.q2`, "Are your adhesives and inks also compostable?"),
      answer: t(`${p}.faqs.a2`, "Yes. For a bag to be certified, every single component must be tested. We utilize water-based and bio-circular inks and solvent-free compostable adhesives that meet EN 13432 requirements.")
    },
    {
      question: t(`${p}.faqs.q3`, "How do I get the Seedling logo on my bag?"),
      answer: t(`${p}.faqs.a3`, "First, you must use a certified material structure. Once your pouch is designed, you can apply to organizations like European Bioplastics or BPI to license the logo. We provide all the technical data and test reports required for this application.")
    },
    {
      question: t(`${p}.faqs.q4`, "Is Biodegradable the same as Compostable?"),
      answer: t(`${p}.faqs.a4`, "No. Everything is biodegradable eventually (even a car), but compostable is a technical term with specific timeframes and toxicity requirements. Never use the word biodegradable on packaging artwork as it is often considered greenwashing by regulators like the FTC.")
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.seo.title`, 'Compostable Packaging Certification FAQ | Global Standards | Achieve Pack')}</title>
        <meta name="description" content={t(`${p}.seo.description`, 'Technical guide to compostable packaging certifications. 800+ words on ASTM D6400, EN 13432, TUV OK Compost, and industrial vs home composting standards.')} />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-certification-faq" />
        <meta name="keywords" content="compostable packaging certification, ASTM D6400, EN 13432 standard, TUV OK compost HOME, BPI certified packaging, compostable testing protocols" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title={t(`${p}.layout.title`, 'Compostable Certification: The Technical Authority')}
        description={t(`${p}.layout.description`, 'Navigating the world\'s most rigorous environmental standards through verified material science.')}
        keywords={['compostable certification', 'EN 13432', 'ASTM D6400 FAQ']}
        heroTitle={t(`${p}.layout.heroTitle`, 'Certified. Not Claimed.')}
        heroSubtitle={t(`${p}.layout.heroSubtitle`, 'EN 13432 | ASTM D6400 | TUV OK Compost | BPI Verified')}
        introSummary={t(`${p}.layout.introSummary`, 'The technical distinction between lab-certified and environmental claim is the difference between brand authority and greenwashing risk. This guide breaks down the global testing protocols and certifications from disintegration to eco-toxicity that ensure your compostable packaging truly delivers on its promise.')}
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.jpg"
      />
    </>
  )
}

export default CompostableCertificationFAQPage
