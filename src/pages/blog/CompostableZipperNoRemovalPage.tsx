import React from 'react'
import { Leaf, CheckCircle, Shield, ArrowRight, XCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'

const CompostableZipperNoRemovalPage: React.FC = () => {
  const heroImage = '/imgs/samples/kraft-compostable-zipper.png'

  const sections = [
    {
      id: 'the-short-answer',
      title: 'Do I Need to Remove the Zipper?',
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-xl font-medium text-emerald-800">
            <strong>The Short Answer: Absolutely Not.</strong>
          </p>
          <p>
            When you purchase certified compostable packaging from Achieve Pack, you do not need to cut off, rip out, or otherwise remove the zipper before composting the bag. 
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl mt-4">
            <h4 className="font-semibold text-emerald-800 mb-2">Why It Works:</h4>
            <p className="text-sm">
              Our press-to-close zippers are manufactured using the exact same plant-based biodegradable polymers (like PLA or PBAT) as the rest of the pouch. Because they share the same chemistry, they break down alongside the pouch in composting environments.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'greenwashing-warning',
      title: 'Why Do Some Brands Tell Me to Remove It?',
      icon: <XCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            You may have encountered other "eco-friendly" bags that instruct you to cut off the zipper or valve before disposing of the pouch. This is a red flag.
          </p>
          
          <figure className="my-6">
            <img src="/imgs/4-infograhic/compost.webp" alt="How compostable packaging breaks down" className="w-full rounded-xl shadow-sm border border-neutral-100 bg-white" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">True compostable packaging leaves zero microplastics behind.</figcaption>
          </figure>

          <p>
            Often, manufacturers will use a compostable film body but attach a cheap, conventional fossil-fuel plastic zipper to save money. This creates a "mixed-material" pouch. If a consumer throws that pouch into a compost bin without removing the zipper, it introduces permanent microplastics into the soil. 
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            <div className="flex items-start gap-2 bg-red-50 p-4 rounded-lg">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-red-800">Conventional Zippers</strong>
                <span className="text-sm">Leave microplastics, require manual removal by consumer, ruin compost quality.</span>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-emerald-50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-emerald-800">Achieve Pack Zippers</strong>
                <span className="text-sm">100% Certified Compostable. Zero removal required. Consumer-friendly.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'degassing-valves',
      title: 'What About Coffee Degassing Valves?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            The same rule applies to our one-way coffee degassing valves. Traditional valves are made of rigid plastics and rubber. Achieve Pack utilizes specialized, certified compostable bio-valves.
          </p>
          <p>
            When your customer finishes their bag of coffee, they can simply toss the entire empty bag—valve, zipper, and all—directly into the compost bin. This zero-friction disposal method significantly increases the likelihood that the packaging will actually be composted.
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: 'Do I need to rip the zipper off a compostable bag?',
      answer: 'If you purchase fully certified compostable pouches from Achieve Pack, the answer is NO. Our zippers are made from the exact same certified compostable plant-polymers as the bag itself. You can throw the entire intact bag into the compost bin.'
    },
    {
      question: 'Do I need to cut out the coffee degassing valve before composting?',
      answer: 'Absolutely not. Unlike traditional plastic valves, our degassing valves are engineered from bio-resins and are TUV certified for composting. The entire bag, valve included, is safe for the soil.'
    },
    {
      question: 'How long does a compostable zipper take to break down?',
      answer: 'Because the zipper profile is slightly thicker than the film body, it may take slightly longer to visually disappear. However, under standard composting conditions, the entire pouch—including the zipper—will break down into organic biomass within 180 days.'
    },
    {
      question: 'Are tear notches compostable?',
      answer: 'Yes! Tear notches are simply a physical cut in the compostable material, so they do not affect the compostability of the pouch.'
    }
  ]

  const relatedLinks = [
    { title: 'Compostable Materials', url: '/materials/compostable', description: 'Explore our compostable packaging options' },
    { title: 'Compostable vs Recyclable', url: '/blog/compostable-vs-recyclable', description: 'Compare sustainable options' },
    { title: 'Get Free Samples', url: '/free-service', description: 'Test our compostable zippers' },
  ]

  return (
    <SEOPageLayout heroBgColor="#047857"
      title="Do You Need to Remove the Zipper from Compostable Bags?"
      description="Everything you need to know about compostable packaging zippers and valves. Spoiler: You DO NOT need to rip them off before composting! Learn why our bags are 100% circular."
      keywords={[
        'remove zipper from compostable bag',
        'compostable zipper',
        'compostable coffee valve',
        'eco friendly zippers',
        'how to compost bags',
        'certified compostable packaging'
      ]}
      heroTitle="Do I Need to Remove the Zipper?"
      heroSubtitle="Stop Ripping. Start Composting."
      heroImage={heroImage}
      heroLogo="/eco-logo/white-bkg/eco-logo-compostable.png"
      heroLogoAlt="100% Compostable"
      sections={sections}
      introSummary="When brands switch to sustainable packaging, one of the most frequent questions consumers ask is whether they need to rip the zipper off before throwing the bag in the compost. Read on to learn why Achieve Pack's 100% circular packaging requires zero removal."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Ready for True Sustainability?"
      ctaDescription="Get 100% certified compostable packaging. No greenwashing. No hidden plastics."
      ctaButtonText="Request Custom Quote"
      ctaButtonUrl="/quote"
      canonicalUrl="https://achievepack.com/blog/compostable-zipper-no-removal"
      schemaType="Article"
    />
  )
}

export default CompostableZipperNoRemovalPage
