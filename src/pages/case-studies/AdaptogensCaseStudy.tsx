import React from 'react';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const AdaptogensCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_adaptogens_singapore_zen_wellness_pouch_1951517.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">Zen Botanics Asia</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Adaptogens & Functional Mushrooms</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Singapore</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Premium Matte Pouches</p></div>
            </div>
          </div>
          <p>Zen Botanics sources premium adaptogens and functional mushrooms from across Asia. Selling to wellness cafés and through Shopee/Lazada, they needed premium packaging that communicated quality while protecting sensitive powders.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Potency preservation</strong> critical for functional mushroom benefits</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Premium wellness positioning</strong> in competitive market</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Tropical humidity</strong> of Singapore climate</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Multi-channel sales</strong> requiring versatile packaging</span></li>
          </ul>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Our Solution',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Premium Matte Black
              </h4>
              <p className="text-sm text-blue-700">Soft-touch matte black finish conveys premium wellness positioning and stands out on shelves.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Maximum Barrier
              </h4>
              <p className="text-sm text-green-700">High barrier structure protects adaptogens from humidity and light—critical for Singapore's tropical climate.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Minimalist Design
              </h4>
              <p className="text-sm text-purple-700">White foil printing on black creates zen aesthetic that resonates with wellness consumers.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Multi-Size Range
              </h4>
              <p className="text-sm text-amber-700">30g samples, 100g retail, and 500g café sizes from one unified design system.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'The Results',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">25</div>
              <div className="text-sm text-green-700">Cafés Stocking</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">18 mo</div>
              <div className="text-sm text-blue-700">Potency Maintained</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">4.9★</div>
              <div className="text-sm text-purple-700">Shopee Rating</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">3</div>
              <div className="text-sm text-amber-700">Size Options</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "The matte black packaging with white printing creates instant premium perception. Our Shopee reviews consistently mention the packaging quality. It's helped us stand out in a crowded market."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Wei Lin, Founder, Zen Botanics Asia</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      icon: <Package className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Stand-Up Pouch</div>
            <div><strong>Sizes:</strong> 30g / 100g / 500g options</div>
            <div><strong>Material:</strong> High barrier mono-PE</div>
            <div><strong>Finish:</strong> Matte black + soft-touch</div>
            <div><strong>Printing:</strong> White foil, minimalist</div>
            <div><strong>Closure:</strong> Resealable zipper</div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: 'How long do adaptogens stay potent?', answer: 'With our high-barrier structure, functional mushrooms and adaptogens maintain potency for 18+ months. The light-blocking matte finish also prevents UV degradation.' },
    { question: 'Can you do multi-size from one design?', answer: 'Yes! We create unified design systems that scale across sizes. Same plate artwork scales proportionally, maintaining brand consistency across your range.' }
  ];

  return (
    <SEOPageLayout
      title="Adaptogens Case Study | Zen Botanics Premium Packaging"
      description="How Zen Botanics Asia achieved premium adaptogen packaging with maximum barrier protection for tropical climates."
      keywords={['adaptogen packaging', 'functional mushroom packaging', 'premium wellness packaging', 'Singapore packaging']}
      heroTitle="Case Study: Zen Botanics Asia"
      heroSubtitle="How an adaptogen brand achieved premium positioning with matte black packaging that protects against tropical humidity."
      heroImage={heroImage}
      sections={sections}
      introSummary="Zen Botanics Asia partnered with Achieve Pack to create premium matte black packaging with maximum barrier protection, perfect for adaptogens in tropical climates."
      faqs={faqs}
      ctaTitle="Premium Wellness Packaging"
      ctaDescription="Create packaging that communicates quality and protects sensitive ingredients."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default AdaptogensCaseStudy;
