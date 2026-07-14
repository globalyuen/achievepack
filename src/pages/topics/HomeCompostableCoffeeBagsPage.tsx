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
      id: 'empathy-hook',
      title: 'Sustainability Without Compromise',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg font-medium text-neutral-900 leading-relaxed">
            You've sourced the finest organic beans, but packaging them in unrecyclable plastic destroys the very ethos of your brand. Yet, moving to sustainable packaging often means compromising on oxygen barriers, resulting in stale coffee and angry customers.
          </p>
          <p className="text-base">
            You need a solution that protects both your coffee's complex flavor profile and the planet. Our Home Compostable Coffee Bags provide the ultimate high-barrier protection that disappears entirely in a backyard compost pile, ensuring your product stays fresh without contributing to landfills.
          </p>
        </div>
      )
    },
    {
      id: 'valve-technology',
      title: 'Compostable Degassing Valves: The Missing Link',
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Roasted coffee releases CO2. Without a one-way valve, a high-barrier bag will burst. Traditionally, these valves were made of nylon and polyethylene, contaminating the compost stream.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">How the Compostable Valve Works</h4>
              <p className="text-sm leading-relaxed">
                We integrate 100% bio-based, compostable valves that are heat-sealed into the bag structure.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>One-Way Pressure Release:</strong> Allows CO2 to escape while preventing O2 from entering.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Filter Paper Protection:</strong> Compostable cellulose filter prevents coffee fines from clogging the valve.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Full Decomposition:</strong> The valve breaks down at the same rate as the bag in a home compost environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-stack',
      title: 'The High-Barrier Home Compostable Stack',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Home composting occurs at much lower temperatures (ambient) than industrial composting (60°C+). To achieve this, we utilize thinner, more biodegradable layers without compromising the barrier.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Leaf className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">NK (Natural Kraft)</h4>
              <p className="text-sm text-neutral-600">FSC-certified paper that provides the structural base and a premium, natural aesthetic.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Metallized PLA</h4>
              <p className="text-sm text-neutral-600">The primary barrier layer. Vacuum-metalized to provide OTR and WVTR protection similar to aluminum foil.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Bio-PBS Sealant</h4>
              <p className="text-sm text-neutral-600">A high-performance home-compostable polymer that ensures strong, hermetic seals for heavy coffee bean loads.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How long does it take for the bag to compost at home?",
      answer: "In a well-maintained home compost pile, the bag should decompose within 26-52 weeks, depending on the temperature and microbial activity. It will leave behind nothing but nutrient-rich biomass."
    },
    {
      question: "Will the bag start to decompose while my coffee is on the shelf?",
      answer: "No. The biodegradation process requires moisture, heat, and active microbes found in soil or compost. As long as your coffee is stored in a cool, dry place, the bag will maintain its structural integrity and barrier for 12-18 months."
    },
    {
      question: "Does the compostable valve work as well as plastic ones?",
      answer: "Yes. Our home compostable valves are engineered to the same precision as industrial plastic valves, ensuring a consistent opening pressure of 2-5 mbar to release CO2 while keeping O2 out."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Home Compostable Coffee Bags | Certified High-Barrier</title>
        <meta name="description" content="Technical guide to home compostable coffee bags. High-barrier structures, one-way degassing valves, and OK Compost HOME certification." />
        <link rel="canonical" href="https://achievepack.com/topics/home-compostable-coffee-bags-page" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#78350f"
        title="Home Compostable Coffee Packaging Engineering"
        description="Preserving aroma and acidity through certified home compostable high-barrier technology."
        keywords={['home compostable coffee bags', 'specialty coffee packaging', 'kraft coffee bags']}
        heroTitle="Fresh Coffee. Zero Waste."
        heroSubtitle="High-Barrier NK/PBS | Home Compost Certified | Degassing Valves"
        introSummary="Specialty coffee demands technical excellence. We help roasters eliminate plastic waste by providing certified home compostable pouches that deliver elite oxygen barrier performance and integrated one-way degassing valves, ensuring your roast arrives as fresh as the day it was bagged."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/topics/home-compostable-coffee-bags-page/hero.jpg"
      />
    </>
  )
}

export default HomeCompostableCoffeeBagsPage
