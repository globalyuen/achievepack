import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CandleBrandCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csCandle';
  const heroImage = '/imgs/seo-photos/a_luminara_candle_munich_luxury_evening_pouch_1830743.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">Luminara Candles</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Artisan Candles & Home Fragrance</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Munich, Germany</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Side Gusset Bags with Tin-Tie</p></div>
            </div>
          </div>
          <p>Luminara creates hand-poured soy candles with essential oil blends. They needed packaging that protects fragrance integrity while presenting beautifully in boutique retail settings.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <ul className="space-y-3 text-neutral-700">
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Fragrance preservation</strong> critical for essential oil candles</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Boutique presentation</strong> for high-end home stores</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>EU packaging regulations</strong> compliance</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Small batch flexibility</strong> for seasonal scents</span></li>
        </ul>
      )
    },
    {
      id: 'solution',
      title: 'Our Solution',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              Kraft Paper + Aroma Barrier
            </h4>
            <p className="text-sm text-blue-700">Natural kraft exterior with inner barrier layer that seals in essential oil fragrances.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Elegant Tin-Tie Closure
            </h4>
            <p className="text-sm text-green-700">Wire closure adds artisan appeal and allows customers to reseal between uses.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              Seasonal Flexibility
            </h4>
            <p className="text-sm text-purple-700">Digital printing allows 200-piece runs for limited edition seasonal scents.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              Compostable Structure
            </h4>
            <p className="text-sm text-amber-700">EN 13432 certified compostable—appeals to eco-conscious home décor shoppers.</p>
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
              <div className="text-3xl font-bold text-green-600 mb-1">6</div>
              <div className="text-sm text-green-700">Boutiques Listed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-blue-700">Seasonal Scents</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-purple-700">Compostable</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">200</div>
              <div className="text-sm text-amber-700">Piece Minimum</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "Being able to create packaging for just 200 candles means I can test new scents without huge commitment. The kraft bags look beautiful and my customers love composting them."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Hannah Bergmann, Founder, Luminara Candles</footer>
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
            <div><strong>Format:</strong> Side Gusset Bag</div>
            <div><strong>Size:</strong> 120 × 300 × 80mm</div>
            <div><strong>Material:</strong> Kraft + PLA (compostable)</div>
            <div><strong>Closure:</strong> Tin-tie</div>
            <div><strong>Printing:</strong> Digital, 4 colors</div>
            <div><strong>Certification:</strong> EN 13432</div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['candle packaging', 'artisan packaging', 'compostable packaging', 'tin-tie bags']}
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

export default CandleBrandCaseStudy;
