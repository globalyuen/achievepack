import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const TeaBrandCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csTeaBrand';
  const heroImage = '/imgs/seo-photos/a_milano_botanica_tea_caf_8381320.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Company</p>
                <p className="font-semibold text-lg">Milano Botanica</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Industry</p>
                <p className="font-semibold">Premium Organic Tea</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Location</p>
                <p className="font-semibold">Milan, Italy</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Package Type</p>
                <p className="font-semibold">Flat Bottom Bags with Window</p>
              </div>
            </div>
          </div>
          <p>Milano Botanica is a luxury organic tea brand known for artisanal blends and European botanical ingredients. They sought packaging that would showcase their beautiful loose-leaf teas while meeting EU sustainability regulations.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="mb-4">Milano Botanica needed to address multiple packaging requirements:</p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Product visibility</strong> was essential for showcasing loose-leaf tea quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>EU PPWR compliance</strong> requirements were approaching</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Premium aesthetic</strong> was non-negotiable for luxury positioning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Aroma protection</strong> for delicate tea flavors</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Our Solution',
      icon: <Lightbulb className="h-5 w-5 text-yellow-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="mb-4">We created a premium compostable packaging solution with window:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                NatureFlex™ Window
              </h4>
              <p className="text-sm text-blue-700">Compostable cellulose-based transparent window that showcases the tea while maintaining barrier properties. Crystal clear visibility.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                White Kraft + PLA Body
              </h4>
              <p className="text-sm text-green-700">Premium white kraft exterior provides excellent print surface for their elegant botanical designs.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Flat Bottom Format
              </h4>
              <p className="text-sm text-purple-700">Five printable panels for maximum brand storytelling. Stands beautifully on retail shelves.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Tin-Tie Closure
              </h4>
              <p className="text-sm text-amber-700">Elegant resealable closure that complements the premium aesthetic while keeping tea fresh.</p>
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
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-5 bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">EU PPWR Compliant</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">28%</div>
              <div className="text-sm text-blue-700">Sales Increase</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">12 mo</div>
              <div className="text-sm text-purple-700">Shelf Life</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">5</div>
              <div className="text-sm text-amber-700">Star Reviews</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 bg-primary-50 p-4 rounded-r-lg italic text-neutral-700">
            "The window packaging has transformed how customers interact with our teas. They can see the quality before purchase, and knowing it's compostable resonates strongly with our European customers."
            <footer className="mt-2 text-sm font-semibold text-neutral-900 not-italic">— Sofia Ricci, Brand Director, Milano Botanica</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Format:</strong> Flat Bottom Bag with Window</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Size:</strong> 120 × 250 × 70mm (100g capacity)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Material:</strong> White Kraft + PLA + NatureFlex window</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Barrier:</strong> Medium (suitable for tea)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Closure:</strong> Tin-tie</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Features:</strong> Clear window, tear notch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Printing:</strong> Plate printing, 6 colors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Finish:</strong> Matte with soft-touch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Certification:</strong> EN 13432, OK Compost</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Order Size:</strong> 5,000 pcs per SKU</span>
              </div>
            </div>
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
      keywords={['tea packaging case study', 'compostable window packaging', 'luxury tea bags', 'EU PPWR compliant packaging', 'flat bottom tea bags']}
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

export default TeaBrandCaseStudy;
