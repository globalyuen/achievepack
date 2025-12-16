import React from 'react';
import { Leaf, Shield, Award, CheckCircle, Package, Layers } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const KraftMediumBarrierPage: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Kraft Medium Barrier packaging</strong> offers enhanced protection with metallized or aluminum layers, extending shelf life to 6-12 months for moderately sensitive products.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Natural kraft exterior with enhanced barrier layers</li>
              <li>• Medium oxygen and moisture protection (6-12 month shelf life)</li>
              <li>• Ideal for coffee, nuts, dried fruits, and supplements</li>
              <li>• Metallized or aluminum foil barrier options</li>
              <li>• Premium aesthetic with functional performance</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Perfect for roasted coffee, premium snacks, dried fruits, protein powders, vitamins, organic nuts, and specialty teas requiring extended freshness.
          </p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our kraft medium barrier structure provides balanced protection for moderate shelf life requirements.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Material Structure</h4>
              <p className="text-sm">Kraft Paper / Metallized Layer / PE</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• 80-120g kraft paper base</li>
                <li>• 12-15µm metallized film or aluminum foil</li>
                <li>• Food-grade PE sealant layer</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Barrier Properties</h4>
              <p className="text-sm">Medium-high oxygen and moisture barrier</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• MVTR: 1-3 g/m²/day</li>
                <li>• OTR: 5-20 cc/m²/day</li>
                <li>• Shelf life: 6-12 months</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Stand-up pouches with valve</li>
                <li>• Flat bottom bags</li>
                <li>• Side gusset bags</li>
                <li>• Quad seal bags</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Special Features</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Degassing valves for coffee</li>
                <li>• Resealable zippers</li>
                <li>• Tear notches</li>
                <li>• Spot UV printing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Kraft medium barrier is the sweet spot for products requiring moderate protection without the cost of high barrier materials.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Roasted coffee beans',
              'Specialty ground coffee',
              'Premium loose leaf tea',
              'Roasted nuts & seeds',
              'Dried fruits',
              'Protein powders',
              'Superfood powders',
              'Nutritional supplements',
              'Energy bars',
              'Chocolate & cocoa',
              'Spice blends',
              'Artisan granola'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'advantages',
      title: 'Advantages & Limitations',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Best For</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ Coffee and tea products</li>
                <li>✓ 6-12 month shelf life needs</li>
                <li>✓ Moderately sensitive to oxygen/moisture</li>
                <li>✓ Premium brand positioning</li>
                <li>✓ Natural aesthetic with protection</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Considerations</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Higher cost than low barrier</li>
                <li>• Not suitable for very long shelf life (18+ months)</li>
                <li>• Metallized layer reduces recyclability</li>
                <li>• Requires proper storage conditions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>While medium barrier packaging includes barrier layers, it still maintains a lower environmental impact than traditional plastic packaging.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Renewable Content</h4>
              <p className="text-sm text-green-700">60-70% renewable kraft paper content from sustainable forests.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Reduced Plastic</h4>
              <p className="text-sm text-blue-700">50% less plastic compared to all-plastic pouches.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Lower Emissions</h4>
              <p className="text-sm text-amber-700">40-50% reduction in carbon footprint vs. plastic packaging.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: 'What is the difference between medium and high barrier kraft packaging?',
      answer: 'Medium barrier uses thinner metallized or aluminum layers (12-15µm) providing 6-12 months shelf life, while high barrier uses thicker aluminum (25-40µm) for 12-24+ months. Medium barrier is more cost-effective for products with moderate requirements.'
    },
    {
      question: 'Can I use kraft medium barrier for coffee packaging?',
      answer: 'Yes! It\'s ideal for coffee with 6-9 month shelf life targets. We can add degassing valves to release CO2 from freshly roasted beans while preventing oxygen entry.'
    },
    {
      question: 'Is the metallized layer recyclable?',
      answer: 'The kraft paper component can be recycled, but metallized layers may require specialized recycling facilities. We recommend checking local recycling capabilities or consider our compostable options.'
    },
    {
      question: 'What printing options are available?',
      answer: 'Both digital printing (500+ MOQ) and plate printing (5,000+ MOQ) are available. Kraft paper provides excellent ink adhesion and vibrant colors, especially with spot UV enhancements.'
    },
    {
      question: 'Can this packaging be customized with windows?',
      answer: 'Yes! We offer window options using transparent film. See our Kraft Windowed Medium Barrier page for details.'
    }
  ];

  return (
    <SEOPageLayout
      title="Kraft Medium Barrier Packaging | Coffee & Premium Food Pouches"
      description="Kraft medium barrier packaging with metallized layers for coffee, nuts, and premium foods. 6-12 month shelf life. Natural aesthetic with enhanced protection. MOQ 1,000 pcs."
      keywords={[
        'kraft medium barrier packaging',
        'kraft coffee bags',
        'metallized kraft pouches',
        'premium kraft packaging',
        'coffee packaging',
        'kraft tea bags',
        'aluminum kraft pouches',
        'medium barrier bags',
        'kraft food pouches',
        'sustainable coffee packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-medium-barrier"
      heroTitle="Kraft Medium Barrier Packaging"
      heroSubtitle="Enhanced kraft paper packaging with metallized barrier layers for coffee, premium snacks, and moderately sensitive products. Natural look meets functional protection."
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft medium barrier pouches with metallized layers for coffee and premium foods"
      introSummary="Kraft medium barrier packaging combines the rustic appeal of kraft paper with metallized or aluminum barrier layers, providing 6-12 months shelf life for coffee, nuts, dried fruits, and specialty foods."
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle="Start Your Coffee Packaging Project"
      ctaDescription="Let's create premium kraft packaging that protects your products and showcases your brand values."
      ctaButtonText="Request a Quote"
    />
  );
};

export default KraftMediumBarrierPage;
