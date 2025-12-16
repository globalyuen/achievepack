import React from 'react';
import { Leaf, Shield, Award, CheckCircle, Package, Layers } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const KraftLowBarrierPage: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Kraft Low Barrier packaging</strong> combines the natural aesthetic of kraft paper with basic moisture protection, ideal for dry goods and products with shorter shelf life requirements.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Natural kraft paper appearance with rustic appeal</li>
              <li>• Basic moisture barrier protection (3-6 month shelf life)</li>
              <li>• Cost-effective solution for dry products</li>
              <li>• Excellent printability for branding</li>
              <li>• Recyclable and sustainable material</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Perfect for bakery items, dry snacks, coffee beans (short-term), nuts, granola, and other low-moisture products that don't require extended shelf life.
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
          <p>Our kraft low barrier structure provides basic protection for short-to-medium shelf life products.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Material Structure</h4>
              <p className="text-sm">Kraft Paper / Low-Density PE coating</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• 70-100g kraft paper base</li>
                <li>• Food-safe PE inner layer</li>
                <li>• Heat-sealable construction</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Barrier Properties</h4>
              <p className="text-sm">Low oxygen and moisture protection</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• MVTR: 5-10 g/m²/day</li>
                <li>• OTR: 100-200 cc/m²/day</li>
                <li>• Shelf life: 3-6 months</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Stand-up pouches</li>
                <li>• Flat bottom bags</li>
                <li>• Side gusset bags</li>
                <li>• Flat pouches</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Customization</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Digital or plate printing</li>
                <li>• Zip lock closures</li>
                <li>• Tear notches</li>
                <li>• Custom sizes</li>
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
          <p>Kraft low barrier packaging is perfect for products that don't require extended protection from oxygen and moisture.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Bread & bakery products',
              'Cookies & biscuits',
              'Granola & cereal',
              'Roasted nuts (short-term)',
              'Dry herbs & spices',
              'Coffee beans (2-3 months)',
              'Popcorn & snacks',
              'Flour & baking mixes',
              'Pasta & noodles',
              'Tea bags',
              'Pet treats',
              'Confectionery'
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
                <li>✓ Low-moisture dry products</li>
                <li>✓ Short shelf life requirements (3-6 months)</li>
                <li>✓ Cost-sensitive applications</li>
                <li>✓ Eco-conscious brands seeking natural look</li>
                <li>✓ Bakery and snack foods</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Considerations</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Not suitable for moisture-sensitive products</li>
                <li>• Limited oxygen barrier</li>
                <li>• Shorter shelf life than high barrier options</li>
                <li>• Not recommended for fatty/oily products</li>
                <li>• May require inner liner for greasy items</li>
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
          <p>Kraft paper is one of the most sustainable packaging materials available today.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Renewable Material</h4>
              <p className="text-sm text-green-700">Made from sustainably sourced wood fibers. FSC certified options available.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Recyclable</h4>
              <p className="text-sm text-blue-700">Paper components can be recycled in standard paper recycling streams.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Lower Carbon Footprint</h4>
              <p className="text-sm text-amber-700">70% less CO₂ emissions compared to plastic packaging.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: 'What is the shelf life for products in kraft low barrier packaging?',
      answer: 'Typically 3-6 months for dry, low-moisture products. The exact shelf life depends on the product type, storage conditions, and moisture content.'
    },
    {
      question: 'Can kraft low barrier packaging be used for coffee?',
      answer: 'Yes, but only for short-term storage (2-3 months). For longer shelf life or premium coffee, consider our kraft medium or high barrier options with degassing valves.'
    },
    {
      question: 'Is this packaging food safe?',
      answer: 'Yes, all our kraft packaging materials are FDA compliant and food-safe. The inner PE coating prevents direct contact between food and paper fibers.'
    },
    {
      question: 'Can I print on kraft paper?',
      answer: 'Absolutely! Kraft paper provides excellent printability. We offer both digital printing (low MOQ) and plate printing (high volume) options.'
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'For digital printing: 500-1,000 pieces. For plate printing: 5,000-10,000 pieces depending on size and design complexity.'
    }
  ];

  return (
    <SEOPageLayout
      title="Kraft Low Barrier Packaging | Eco-Friendly Paper Pouches"
      description="Kraft low barrier packaging for dry goods, bakery items, and short shelf life products. Natural paper appearance with basic moisture protection. MOQ 500 pcs."
      keywords={[
        'kraft low barrier packaging',
        'kraft paper pouches',
        'eco-friendly paper bags',
        'recyclable kraft packaging',
        'bakery packaging',
        'dry goods packaging',
        'natural kraft bags',
        'sustainable paper pouches',
        'kraft snack bags',
        'paper food packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-low-barrier"
      heroTitle="Kraft Low Barrier Packaging"
      heroSubtitle="Natural kraft paper pouches with basic protection for dry goods and short shelf life products. Eco-friendly, cost-effective, and beautifully rustic."
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft low barrier paper pouches for dry goods and bakery products"
      introSummary="Kraft low barrier packaging combines the natural aesthetic of kraft paper with basic moisture and oxygen protection, perfect for bakery items, dry snacks, and products with 3-6 month shelf life requirements."
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle="Get Started with Kraft Low Barrier Packaging"
      ctaDescription="Let's create sustainable kraft paper packaging that showcases your brand's natural values."
      ctaButtonText="Request a Quote"
    />
  );
};

export default KraftLowBarrierPage;
