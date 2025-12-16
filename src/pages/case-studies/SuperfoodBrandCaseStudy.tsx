import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const SuperfoodBrandCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csSuperfood';
  const heroImage = '/imgs/seo-photos/a_vitalgreen_superfood_chicago_wellness_pouch_1211501.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">VitalGreen Superfoods</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Superfood & Wellness Powders</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Chicago, Illinois, USA</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Stand-Up Pouches with Zipper</p></div>
            </div>
          </div>
          <p>VitalGreen produces organic superfood powders including spirulina, chlorella, and custom blends. As a B-Corp certified company, they needed packaging that matched their environmental commitments while protecting sensitive powder products.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4">
          <p className="mb-4">VitalGreen faced unique powder packaging challenges:</p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Oxygen sensitivity</strong> of superfood powders required high barrier</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Moisture protection</strong> critical for powder quality</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>B-Corp certification</strong> required documented sustainability improvements</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Multiple SKUs</strong> needed with quick market entry</span></li>
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
          <p className="mb-4">We developed recyclable mono-PE packaging with enhanced barriers:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Mono-PE Structure
              </h4>
              <p className="text-sm text-blue-700">100% recyclable mono-material polyethylene with EVOH barrier layer for oxygen protection. Store drop-off recyclable.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                High Barrier Performance
              </h4>
              <p className="text-sm text-green-700">OTR below 1.0 cc/m²/day protects sensitive superfood nutrients from oxidation.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Digital Printing Flexibility
              </h4>
              <p className="text-sm text-purple-700">8 SKUs launched simultaneously with digital printing. 500 bags per SKU minimum.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                GRS Certification
              </h4>
              <p className="text-sm text-amber-700">Global Recycled Standard documentation for B-Corp reporting requirements.</p>
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
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">Recyclable Packaging</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">18 mo</div>
              <div className="text-sm text-blue-700">Shelf Life Achieved</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">8</div>
              <div className="text-sm text-purple-700">SKUs Launched</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">+15</div>
              <div className="text-sm text-amber-700">B-Corp Points</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "The GRS certification documentation was exactly what we needed for our B-Corp recertification. Our customers appreciate the recyclable packaging, and our products stay fresh longer than expected."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Dr. Maya Patel, CEO, VitalGreen Superfoods</footer>
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
            <div><strong>Size:</strong> 160 × 240 + 90mm (250g capacity)</div>
            <div><strong>Material:</strong> Mono-PE with EVOH barrier</div>
            <div><strong>Barrier:</strong> High (OTR &lt; 1.0)</div>
            <div><strong>Closure:</strong> Pocket zipper</div>
            <div><strong>Features:</strong> Rounded corners, tear notch</div>
            <div><strong>Printing:</strong> Digital, 8 SKU designs</div>
            <div><strong>Finish:</strong> Matte</div>
            <div><strong>Certification:</strong> GRS, FDA food-safe</div>
            <div><strong>Order Size:</strong> 500 pcs per SKU (8 SKUs)</div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['superfood packaging case study', 'recyclable powder packaging', 'B-Corp packaging', 'GRS certified pouches', 'mono-PE packaging']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary={t(`${p}.introSummary`)}
      faqs={faqs}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default SuperfoodBrandCaseStudy;
