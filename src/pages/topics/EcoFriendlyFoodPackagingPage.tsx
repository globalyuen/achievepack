import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Thermometer, Droplets, Utensils, Wind } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const EcoFriendlyFoodPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Evolution of Eco-Friendly Food Packaging',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Food packaging is the ultimate technical challenge in sustainability. In 2026, a package must be <strong>planet-safe</strong> while ensuring <strong>absolute food safety</strong> and <strong>high-barrier performance</strong> to prevent food waste.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-600">
                <h4 className="font-semibold text-emerald-800">The Food-Safety Gap</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Risk of migration from recycled resins</li>
                  <li>• Moisture/Oxygen barrier failures</li>
                  <li>• Chemical safety (PFAS/BPA)</li>
                  <li>• Inadequate seal integrity</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
                <h4 className="font-semibold text-teal-800">Achieve Pack Solutions</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• FDA/EFSA Compliant PCR Resins</li>
                  <li>• High-Barrier EVOH & AlOx Coatings</li>
                  <li>• PFAS-Free Aqueous Grease Barriers</li>
                  <li>• BRCGS Grade A Certified Production</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we engineer <strong>eco-friendly food packaging</strong> that doesn't compromise on shelf life. Whether you need <strong>Mono-PE</strong> for dry snacks or <strong>Compostable NK/Kraft</strong> for organic produce, our materials are tested for <strong>Migration (OML/SML)</strong> and <strong>Seal Strength</strong>, ensuring your product stays fresh and safe from factory to fork.
          </p>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'Barrier Science: Preventing Food Waste',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The highest environmental impact of food comes from the food itself being wasted. We utilize <strong>High-Barrier engineering</strong> to extend shelf life, which is the most effective way to reduce the total carbon footprint of the food system.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Wind className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Oxygen Barrier</h4>
              <p className="text-sm text-neutral-600">Utilizing <strong>EVOH</strong> or <strong>AlOx</strong> to keep OTR (Oxygen Transmission Rate) &lt; 1.0 cc/m²/day.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-cyan-100 rounded-lg w-fit mb-4">
                <Droplets className="h-6 w-6 text-cyan-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Moisture Barrier</h4>
              <p className="text-sm text-neutral-600">Precision lamination to ensure WVTR (Water Vapor Transmission Rate) &lt; 1.0 g/m²/day.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Utensils className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Aroma Retention</h4>
              <p className="text-sm text-neutral-600">Multi-layer structures that lock in essential oils and delicate flavors for coffee and snacks.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/eco-friendly-food-hero.png" 
              alt="High-barrier food packaging structure overview" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Multi-layer engineering for maximum food protection and minimum environmental impact"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance-safety',
      title: 'Food Safety & Chemical Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In 2026, regulators are focused on <strong>Chemical Migration</strong> and <strong>Forever Chemicals (PFAS)</strong>. Achieve Pack leads the industry in non-toxic, food-grade sustainable materials.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Global Safety Standards</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">FDA & EFSA Compliance</h5>
                  <p className="text-xs text-neutral-600 mt-1">All materials, including PCR and Bio-resins, meet the strictest US and EU food contact requirements.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">PFAS-Free Guarantee</h5>
                  <p className="text-xs text-neutral-600 mt-1">We utilize aqueous grease-proof coatings and PFAS-free additives, exceeding California AB 1200 mandates.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Heavy Metal Screening</h5>
                  <p className="text-xs text-neutral-600 mt-1">Rigorous testing for Lead, Mercury, and Cadmium in accordance with CONEG and REACH standards.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Technical Laboratory Verification</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We provide <strong>Declaration of Compliance (DoC)</strong> and <strong>Specific Migration Limit (SML)</strong> data for every custom food structure. Our production facilities are <strong>BRCGS Global Standard for Packaging Materials</strong> (Grade A) certified, ensuring the highest level of hygiene and traceability.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable-options',
      title: 'Material Options for Food Brands',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            We offer three primary technical paths for food-grade sustainability, each optimized for specific product categories.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/topics/recyclable-snack-hero.png" 
                alt="Sustainable food grade pouch samples" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Material Versatility: From Mono-PE Recyclable to Certified Compostable structures"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The 2026 Tech Matrix</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span><strong>Mono-PE Recyclable:</strong> Best for dry snacks, nuts, and frozen foods. High O2/Moisture barrier.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span><strong>Home Compostable NK/PBS:</strong> Best for organic products, produce, and short shelf-life items.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span><strong>30% PCR Duplex:</strong> Best for liquid sauces, pet food, and high-durability requirements.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Expert Food Packaging Consultation',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-teal-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Safe. Sustainable. Superior.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to upgrade your food packaging to a certified sustainable structure? Our engineering team will match your product with the perfect high-barrier solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Technical Review
            </button>
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Utensils className="h-5 w-5" />
              View Food Solutions
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            FDA COMPLIANT • BRCGS CERTIFIED • PFAS FREE • ISO 14040 LCA
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your sustainable materials safe for fatty or oily foods?",
      answer: "Yes. We engineer specific internal sealant layers (like LLDPE or PBS) that are tested for oil resistance and grease-proofing. For oily snacks, we recommend our aqueous-coated Mono-PE structures."
    },
    {
      question: "Can I use recycled plastic for direct food contact?",
      answer: "Only if it is 'Food-Grade PCR' that has been purified in a process with a non-objection letter from the FDA or EFSA. We only use certified food-grade PCR for our food packaging clients."
    },
    {
      question: "How do you prevent 'leakers' in eco-friendly bags?",
      answer: "Eco-friendly materials often have a narrower 'seal window.' We compensate for this by using advanced co-extruded sealants with low initiation temperatures, ensuring 100% seal integrity on high-speed filling lines."
    },
    {
      question: "What is the typical shelf life for compostable food bags?",
      answer: "For dry goods, our high-barrier compostable structures (using NatureFlex™ and PBS) can provide a 12-18 month shelf life, comparable to traditional plastic laminates."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Eco-Friendly Food Packaging | High-Barrier & Food-Safe | Achieve Pack</title>
        <meta name="description" content="The technical guide to eco-friendly food packaging. 800+ words on high-barrier engineering, FDA compliance, PFAS-free materials, and sustainable food safety." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-friendly-food-packaging" />
        <meta name="keywords" content="eco-friendly food packaging, sustainable food pouches, high barrier food packaging, food grade PCR, PFAS free food packaging, BRCGS certified packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Eco-Friendly Food Packaging: Safety Meets Sustainability"
        description="Establishing technical authority in high-barrier, food-grade sustainable packaging solutions."
        keywords={['eco-friendly food packaging', 'food safe sustainable pouches', 'high barrier engineering']}
        heroTitle="Safe. Pure. Planet-First."
        heroSubtitle="FDA Compliant | High Barrier | BRCGS Certified | PFAS Free"
        introSummary="In the world of food packaging, sustainability cannot come at the cost of safety or performance. This guide explores the technical frontier of eco-friendly food packaging—from high-barrier EVOH engineering to the rigorous migration testing required to ensure your product remains pure, fresh, and compliant with global standards."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/topics/eco-friendly-food-hero.png"
      />
    </>
  )
}

export default EcoFriendlyFoodPackagingPage
