import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Utensils, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Heart, Baby } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableBabyFoodBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Compostable Baby Food Bags: Engineering for the Next Generation',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border border-pink-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Baby food packaging requires the <strong>highest level of material health and safety</strong>. In 2026, parents are demanding <strong>plastic-free, non-toxic</strong> containers that protect their infants and the planet.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-600">
                <h4 className="font-semibold text-pink-800">The Safety Risks</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Microplastic migration into food</li>
                  <li>• Endocrine disruptors (BPA/BPS)</li>
                  <li>• PFAS 'Forever Chemicals' in grease barriers</li>
                  <li>• Massive waste from single-use pouches</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">The Achieve Pack Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• TUV OK Compost Home Certified</li>
                  <li>• Zero Microplastics & Zero PFAS</li>
                  <li>• High-Barrier Bio-EVOH (Aluminum Free)</li>
                  <li>• Spout-Pouch optimized for infant safety</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we treat baby food packaging as a <strong>medical-grade technical deliverable</strong>. Our 100% compostable spouted pouches are engineered to provide the same shelf-life and puncture resistance as traditional plastic laminates, but with the peace of mind that comes from <strong>verifiable material purity</strong>.
          </p>
        </div>
      )
    },
    {
      id: 'safety-science',
      title: 'Purity First: Zero-Migration Engineering',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Infant health is sensitive to even trace chemical migration. We utilize <strong>Gas Chromatography-Mass Spectrometry (GC-MS)</strong> to verify the safety of our bio-polymers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <h4 className="font-bold text-neutral-900">PFAS-Free</h4>
              <p className="text-sm text-neutral-600">Our grease barriers are made from aqueous bio-polymers, containing 0ppm organic fluorine.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Beaker className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">BPA/BPS Free</h4>
              <p className="text-sm text-neutral-600">100% endocrine-disruptor-free resins, exceeding all global food contact regulations.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Food Safe Inks</h4>
              <p className="text-sm text-neutral-600">Low-migration digital inks that are certified for direct food contact and compostability.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High safety baby food pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Bio-polymer structures that eliminate the risk of microplastic ingestion for infants"
            />
          </div>
        </div>
      )
    },
    {
      id: 'spout-technology',
      title: 'Spout Technology: Safe & Functional',
      icon: <Utensils className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The spout and cap are as important as the pouch itself. We utilize <strong>bio-based PE and PP fitments</strong> that are designed for infant ergonomics and safety.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Fitment Features</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Anti-Choke Caps</h5>
                  <p className="text-xs text-neutral-600 mt-1">Oversized, ventilated caps designed to exceed global child safety standards.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Tamper-Evident Seals</h5>
                  <p className="text-xs text-neutral-600 mt-1">Ensuring the product remains sterile and untouched from the factory to the high chair.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Bio-Polymer Spouts</h5>
                  <p className="text-xs text-neutral-600 mt-1">Fitments made from sugarcane-derived PE that are 100% recyclable or compostable.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Shelf Life & Barrier</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Baby food purees are highly sensitive to oxidation. Our <strong>Bio-EVOH barriers</strong> achieve OTR levels equivalent to aluminum, ensuring the vitamins and nutrients in your product are preserved without the need for preservatives.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Protect the Future Today',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-pink-800 to-blue-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Safe for Baby. Safe for the Planet.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure a non-toxic, compostable supply chain for your baby food brand? Our engineering team will perform a safety audit today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-pink-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Baby Food Safety Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Safety Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            ZERO MICROPLASTICS • PFAS FREE • BPA FREE • TUV CERTIFIED
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your baby food bags microwave-safe?",
      answer: "We recommend gentle warming in water, but because our structures are metal-free (no aluminum), they are technically microwave-safe. However, always follow food safety guidelines for infant heating."
    },
    {
      question: "How do I know the material won't leach into the food?",
      answer: "We provide full migration testing reports based on EU 10/2011 and FDA standards, verifying that our bio-polymers remain inert and safe for infant consumption."
    },
    {
      question: "Are the caps recyclable?",
      answer: "Yes. Our sugarcane-derived PE caps are fully compatible with standard HDPE/LDPE recycling streams, even while the pouch is designed for composting."
    },
    {
      question: "What is the oxygen barrier performance?",
      answer: "Our Bio-EVOH integrated films achieve an OTR of < 0.1 cc/m²/day, ensuring that sensitive vitamins and natural colors in purees are protected from oxidation."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Compostable Baby Food Bags | Non-Toxic & High Barrier | Achieve Pack</title>
        <meta name="description" content="Master the technical safety of compostable baby food packaging. 800+ words on zero-microplastics, PFAS-free barriers, anti-choke caps, and infant food safety." />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-baby-food-bags" />
        <meta name="keywords" content="compostable baby food bags, non-toxic baby food packaging, microplastic free pouches, PFAS free baby food, safe baby food spouts, bio-polymer baby food" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#be185d"
        title="Compostable Baby Food Bags: Safety Engineering"
        description="Establishing technical authority in high-purity, non-toxic compostable packaging for the next generation."
        keywords={['baby food packaging', 'compostable safety', 'non-toxic pouches']}
        heroTitle="Pure for Baby. Pure for Earth."
        heroSubtitle="Zero Microplastics | PFAS Free | BPA Free | TUV OK Compost Home"
        introSummary="Baby food is the most sensitive category in the food industry. This guide provides the technical breakdown of how we use bio-polymer science to eliminate microplastics, endocrine disruptors, and forever chemicals from infant nutrition—delivering absolute safety and circularity."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default CompostableBabyFoodBagsPage
