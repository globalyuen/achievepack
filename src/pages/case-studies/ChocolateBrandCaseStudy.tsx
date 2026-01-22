import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const ChocolateBrandCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csChocolate';
  const heroImage = '/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Who Is This Client?',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">Artisan Cocoa Emirates</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Luxury Artisan Chocolate</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Abu Dhabi, UAE</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Premium Flat Bottom Bags</p></div>
            </div>
          </div>
          <p>Artisan Cocoa Emirates creates luxury bean-to-bar chocolate for high-end hotels and retail. Operating in extreme heat, they needed packaging that protects chocolate while conveying premium quality.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'What Challenge Did They Face?',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Extreme heat exposure</strong> during Middle East distribution</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Luxury presentation</strong> required for 5-star hotel clients</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Gift-worthy packaging</strong> for retail and corporate gifting</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Sustainability story</strong> for eco-conscious luxury market</span></li>
          </ul>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'How Did Achieve Pack Help?',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Maximum Barrier Structure
              </h4>
              <p className="text-sm text-blue-700">Recyclable mono-PP with aluminum-free barrier technology for maximum heat and moisture protection.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Gold Foil Stamping
              </h4>
              <p className="text-sm text-green-700">Premium gold foil accents on matte black finish for luxury shelf presence.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Soft-Touch Lamination
              </h4>
              <p className="text-sm text-purple-700">Velvety texture that invites touch and conveys premium quality.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Flat Bottom Stability
              </h4>
              <p className="text-sm text-amber-700">Stands beautifully on hotel boutique shelves and gift displays.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'What Results Did They Achieve?',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">12</div>
              <div className="text-sm text-green-700">5-Star Hotels</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">45°C</div>
              <div className="text-sm text-blue-700">Heat Tested</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-purple-700">Recyclable</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">55%</div>
              <div className="text-sm text-amber-700">Gift Sales Up</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "The packaging elevated our brand instantly. Hotels that previously said no are now stocking our chocolates. The soft-touch finish gets compliments every time."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Fatima Al-Rashid, CEO, Artisan Cocoa Emirates</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'What Packaging Specs Were Used?',
      icon: <Package className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Flat Bottom Bag</div>
            <div><strong>Size:</strong> 100 × 200 × 60mm (150g)</div>
            <div><strong>Material:</strong> <Link to="/spec/mono-pp-duplex-clear" className="text-primary-600 hover:underline">Mono-PP duplex high barrier (recyclable)</Link></div>
            <div><strong>Finish:</strong> Matte black + soft-touch + gold foil</div>
            <div><strong>Closure:</strong> Resealable zipper</div>
            <div><strong>Printing:</strong> Plate, 4 colors + foil</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Related Structures:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <Link to="/spec/mono-pp-duplex-clear" className="underline">Mono-PP Duplex - Best moisture barrier</Link></li>
              <li>• <Link to="/spec/pcr-pp-duplex-clear" className="underline">PCR-PP Duplex - With recycled content</Link></li>
              <li>• <Link to="/materials/recyclable-mono-pp" className="underline">Learn about Mono-PP materials</Link></li>
            </ul>
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
      keywords={['chocolate packaging', 'luxury packaging', 'heat resistant packaging', 'foil stamping pouches']}
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

export default ChocolateBrandCaseStudy;
