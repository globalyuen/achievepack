import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const KraftHighBarrierPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.kraftHighBarrier';
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Kraft High Barrier packaging</strong> features thick aluminum foil layers providing maximum protection for oxygen and moisture-sensitive products requiring 12-24+ month shelf life.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Features</h4>
            <ul className="space-y-1 text-sm">
              <li>• Premium kraft exterior with aluminum foil barrier</li>
              <li>• Maximum oxygen and moisture protection (12-24+ months)</li>
              <li>• Ideal for long shelf life requirements</li>
              <li>• Superior light barrier properties</li>
              <li>• Excellent aroma retention</li>
            </ul>
          </div>
          
          <p className="mt-4">
            Perfect for premium coffee, freeze-dried foods, pharmaceuticals, probiotics, high-value supplements, aged cheeses, and any product requiring extended shelf life and maximum freshness protection.
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
          <p>Our kraft high barrier structure provides industry-leading protection for the most demanding applications.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">Material Structure</h4>
              <p className="text-sm">Kraft / Aluminum Foil / PE</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• 100-140g premium kraft paper</li>
                <li>• 25-40µm aluminum foil barrier</li>
                <li>• Multi-layer PE sealant (60-80µm)</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">Barrier Properties</h4>
              <p className="text-sm">Maximum barrier performance</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• MVTR: &lt; 0.5 g/m²/day</li>
                <li>• OTR: &lt; 1.0 cc/m²/day</li>
                <li>• Shelf life: 12-24+ months</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">Available Formats</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Stand-up pouches</li>
                <li>• Flat bottom bags</li>
                <li>• Quad seal bags</li>
                <li>• Brick pouches</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">Premium Features</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• Degassing valves</li>
                <li>• Child-resistant zippers</li>
                <li>• Laser scoring for easy open</li>
                <li>• Embossing & debossing</li>
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
          <p>Kraft high barrier packaging is engineered for products requiring the highest level of protection and longest possible shelf life.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Premium specialty coffee',
              'Single-origin coffee beans',
              'Pharmaceutical products',
              'Probiotics & enzymes',
              'Freeze-dried foods',
              'Emergency food rations',
              'High-value supplements',
              'Organic baby formula',
              'Aged cheese',
              'Medical cannabis',
              'Laboratory reagents',
              'Military MREs'
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
                <li>✓ Maximum shelf life (12-24+ months)</li>
                <li>✓ Highly sensitive products</li>
                <li>✓ Premium positioning</li>
                <li>✓ Export markets requiring long transit</li>
                <li>✓ Products requiring light barrier</li>
                <li>✓ Pharmaceutical-grade protection</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Considerations</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• Higher material cost</li>
                <li>• Aluminum layer not recyclable in standard streams</li>
                <li>• Heavier weight increases shipping costs</li>
                <li>• Higher MOQ typically required</li>
                <li>• Longer lead times for production</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'quality',
      title: 'Quality & Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our kraft high barrier packaging meets the highest industry standards for food safety and quality.</p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">FDA</div>
              <p className="text-xs text-blue-700">Food Contact Safe</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">BRC</div>
              <p className="text-xs text-green-700">Certified Facility</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">ISO</div>
              <p className="text-xs text-purple-700">9001:2015</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">HACCP</div>
              <p className="text-xs text-amber-700">Compliant</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'kraft high barrier packaging',
        'aluminum kraft pouches',
        'long shelf life packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-high-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft high barrier pouches with aluminum foil for long shelf life products"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  );
};

export default KraftHighBarrierPage;
