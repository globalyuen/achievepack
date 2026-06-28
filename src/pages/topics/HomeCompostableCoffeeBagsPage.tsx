import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Coffee, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Thermometer, Wind } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const HomeCompostableCoffeeBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.homeCompostableCoffeeBags'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.s1.title`, 'The Coffee Sustainability Dilemma'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.s1.p1Html`, 'Coffee is a highly sensitive product that requires an absolute barrier against oxygen and moisture to preserve its volatile aromatic compounds. Traditionally, this required non-recyclable multi-layers of PET/Alu/PE. <strong>Home compostable coffee bags</strong> are the holy grail of specialty coffee packaging—offering high-barrier protection that disappears in a backyard compost pile.') }} />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-600">
                <h4 className="font-semibold text-amber-800">{t(`${p}.s1.h1`, 'The Aroma Crisis')}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.s1.l1_1`, '• Oxygen Transmission (OTR) degradation')}</li>
                  <li>{t(`${p}.s1.l1_2`, '• UV light-induced lipid oxidation')}</li>
                  <li>{t(`${p}.s1.l1_3`, '• Degassing challenges (CO2 buildup)')}</li>
                  <li>{t(`${p}.s1.l1_4`, '• Single-use plastic waste (2B+ bags/year)')}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">{t(`${p}.s1.h2`, 'Achieve Pack Coffee Tech')}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>{t(`${p}.s1.l2_1`, '• NK/Kraft/PBS High-Barrier Structure')}</li>
                  <li>{t(`${p}.s1.l2_2`, '• OK Compost HOME Certified Components')}</li>
                  <li>{t(`${p}.s1.l2_3`, '• One-Way Compostable Degassing Valves')}</li>
                  <li>{t(`${p}.s1.l2_4`, '• 12-Month Aroma Retention Guarantee')}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.s1.p2Html`, 'At Achieve Pack, we have engineered the <strong>NK/Kraft/Metallized-PLA/PBS</strong> structure—a high-barrier home compostable laminate that rivals the performance of traditional foil-lined bags. Our bags are designed to protect the flavor profile of specialty Grade 1 beans while meeting the strict <strong>TUV OK Compost HOME</strong> standards.') }} />
        </div>
      )
    },
    {
      id: 'valve-technology',
      title: t(`${p}.s2.title`, 'Compostable Degassing Valves: The Missing Link'),
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s2.p1`, 'Roasted coffee releases CO2. Without a one-way valve, a high-barrier bag will burst. Traditionally, these valves were made of nylon and polyethylene, contaminating the compost stream.')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{t(`${p}.s2.h1`, 'How the Compostable Valve Works')}</h4>
              <p className="text-sm leading-relaxed">
                {t(`${p}.s2.p2`, 'We integrate 100% bio-based, compostable valves (equivalent to WICOVALVE W606 standards) that are heat-sealed into the bag structure.')}
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s2.l1Html`, '<strong>One-Way Pressure Release:</strong> Allows CO2 to escape while preventing O2 from entering.') }} />
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s2.l2Html`, '<strong>Filter Paper Protection:</strong> Compostable cellulose filter prevents coffee fines from clogging the valve.') }} />
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s2.l3Html`, '<strong>Full Decomposition:</strong> The valve breaks down at the same rate as the bag in a home compost environment.') }} />
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/home-compostable-coffee-hero.png" 
              alt="Home compostable coffee packaging structure" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption={t(`${p}.s2.caption`, 'EEAT Insight: Oxygen barriers that meet ASTM D6400 while remaining home compostable')}
            />
          </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-stack',
      title: t(`${p}.s3.title`, 'The High-Barrier Home Compostable Stack'),
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s3.p1`, 'Home composting occurs at much lower temperatures (ambient) than industrial composting (60°C+). To achieve this, we utilize thinner, more biodegradable layers without compromising the barrier.')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Leaf className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.s3.h1`, 'NK (Natural Kraft)')}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.s3.d1`, 'FSC-certified paper that provides the structural base and a premium, natural aesthetic.')}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.s3.h2`, 'Metallized PLA')}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.s3.d2`, 'The primary barrier layer. Vacuum-metalized to provide OTR and WVTR protection similar to aluminum foil.')}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{t(`${p}.s3.h3`, 'Bio-PBS Sealant')}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.s3.d3`, 'A high-performance home-compostable polymer that ensures strong, hermetic seals for heavy coffee bean loads.')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: t(`${p}.s4.title`, 'Certification & E-E-A-T Authority'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.s4.p1Html`, 'Claiming "Home Compostable" requires the highest level of verification. Our coffee bags are audited to meet the <strong>TUV Austria OK Compost HOME</strong> and <strong>AS 5810 (Australia)</strong> standards.') }} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-neutral-900">{t(`${p}.s4.h1`, 'Zero Microplastics')}</h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.s4.d1`, 'Verification that the bag breaks down into CO2, water, and biomass within 12 months in a home compost pile, leaving zero synthetic residues or harmful heavy metals in the soil.')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Beaker className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-neutral-900">{t(`${p}.s4.h2`, 'Batch-Level COA')}</h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.s4.d2Html`, 'We provide the <strong>Certificates of Analysis (COA)</strong> and test reports for every material batch, ensuring your brand is protected against greenwashing claims and regulatory audits.') }} />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.s5.title`, 'Protect Your Beans & the Planet'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-amber-700 to-orange-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.s5.h1`, 'Aroma Retention. Earth Restoration.')}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.s5.p1`, 'Ready to transition your specialty coffee brand to certified home compostable packaging? Order our coffee sample kit to test the barrier and degassing valve yourself.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.s5.btn1`, 'Technical Coffee Audit')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.s5.btn2`, 'Order Coffee Samples')}
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.s5.footerText`, 'OK COMPOST HOME • AS 5810 • BPA FREE • HIGH-BARRIER NK/PBS')}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faqs.q1`, "How long does it take for the bag to compost at home?"),
      answer: t(`${p}.faqs.a1`, "In a well-maintained home compost pile, the bag should decompose within 26-52 weeks, depending on the temperature and microbial activity. It will leave behind nothing but nutrient-rich biomass.")
    },
    {
      question: t(`${p}.faqs.q2`, "Will the bag start to decompose while my coffee is on the shelf?"),
      answer: t(`${p}.faqs.a2`, "No. The biodegradation process requires moisture, heat, and active microbes found in soil or compost. As long as your coffee is stored in a cool, dry place, the bag will maintain its structural integrity and barrier for 12-18 months.")
    },
    {
      question: t(`${p}.faqs.q3`, "Does the compostable valve work as well as plastic ones?"),
      answer: t(`${p}.faqs.a3`, "Yes. Our home compostable valves are engineered to the same precision as industrial plastic valves, ensuring a consistent opening pressure of 2-5 mbar to release CO2 while keeping O2 out.")
    },
    {
      question: t(`${p}.faqs.q4`, "Can I print my custom roast profile on these bags?"),
      answer: t(`${p}.faqs.a4`, "Absolutely. We offer high-definition digital printing on our Kraft and Bio-film surfaces. We utilize water-based and bio-circular inks that are fully compatible with the composting process.")
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.seo.title`, 'Home Compostable Coffee Bags | Certified High-Barrier | Achieve Pack')}</title>
        <meta name="description" content={t(`${p}.seo.description`, 'Technical guide to home compostable coffee bags. 800+ words on NK/Kraft/PBS structures, one-way degassing valves, and TUV OK Compost HOME certification.')} />
        <link rel="canonical" href="https://achievepack.com/topics/home-compostable-coffee-bags" />
        <meta name="keywords" content="home compostable coffee bags, kraft coffee pouches, compostable degassing valve, OK compost HOME, high barrier coffee packaging, specialty coffee bags" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#78350f"
        title={t(`${p}.layout.title`, 'Home Compostable Coffee Packaging Engineering')}
        description={t(`${p}.layout.description`, 'Preserving aroma and acidity through certified home compostable high-barrier technology.')}
        keywords={['home compostable coffee bags', 'specialty coffee packaging', 'kraft coffee bags']}
        heroTitle={t(`${p}.layout.heroTitle`, 'Fresh Coffee. Zero Waste.')}
        heroSubtitle={t(`${p}.layout.heroSubtitle`, 'High-Barrier NK/PBS | Home Compost Certified | Degassing Valves')}
        introSummary={t(`${p}.layout.introSummary`, 'Specialty coffee demands technical excellence. We help roasters eliminate plastic waste by providing certified home compostable pouches that deliver elite oxygen barrier performance and integrated one-way degassing valves, ensuring your roast arrives as fresh as the day it was bagged.')}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/topics/home-compostable-coffee-hero.png"
      />
    </>
  )
}

export default HomeCompostableCoffeeBagsPage
