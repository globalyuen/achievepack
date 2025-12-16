import React from 'react';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const PetTreatsCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">Pawsome Naturals</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Premium Pet Treats</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Austin, Texas, USA</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Stand-Up Pouches with Child-Resistant Zipper</p></div>
            </div>
          </div>
          <p>Pawsome Naturals creates organic, human-grade pet treats using locally sourced ingredients. Their eco-conscious customers demanded sustainable packaging that also protected treat freshness.</p>
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
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Odor barrier</strong> critical to prevent pets from accessing treats</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Moisture protection</strong> for semi-soft treat freshness</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Child-resistant closure</strong> requested by retailers</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Sustainability message</strong> to match brand values</span></li>
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
                PCR Recycled Material
              </h4>
              <p className="text-sm text-blue-700">30% post-consumer recycled content with virgin PE blend for optimal barrier and strength.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Child-Resistant Zipper
              </h4>
              <p className="text-sm text-green-700">CPSC-compliant child-resistant closure that pets also can't open. Push-and-slide mechanism.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Enhanced Odor Barrier
              </h4>
              <p className="text-sm text-purple-700">Multi-layer structure blocks treat odors—no more pets raiding the treat stash!</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Playful Design
              </h4>
              <p className="text-sm text-amber-700">Matte finish with vibrant digital printing showcasing their fun brand personality.</p>
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
              <div className="text-3xl font-bold text-green-600 mb-1">30%</div>
              <div className="text-sm text-green-700">PCR Content</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">40%</div>
              <div className="text-sm text-blue-700">Retailer Increase</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">9 mo</div>
              <div className="text-sm text-purple-700">Shelf Life</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">Zero</div>
              <div className="text-sm text-amber-700">Pet Break-Ins</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "The child-resistant zipper was a game-changer for getting into pet specialty stores. And our customers love that it keeps treats fresh AND keeps clever dogs out!"
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Jake Morrison, Founder, Pawsome Naturals</footer>
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
            <div><strong>Size:</strong> 180 × 280 + 100mm (350g capacity)</div>
            <div><strong>Material:</strong> PCR PE blend (30% recycled)</div>
            <div><strong>Barrier:</strong> High (odor blocking)</div>
            <div><strong>Closure:</strong> Child-resistant zipper</div>
            <div><strong>Printing:</strong> Digital, full color</div>
            <div><strong>Certification:</strong> CPSC child-resistant, FDA food-safe</div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: 'Is the child-resistant closure pet-proof?', answer: 'The push-and-slide mechanism is designed for human adults and effectively prevents pets from opening the package. It meets CPSC child-resistant standards.' },
    { question: 'What makes PCR packaging sustainable?', answer: 'PCR (post-consumer recycled) content reduces virgin plastic use. Our 30% PCR blend comes from recycled consumer plastics, reducing carbon footprint while maintaining performance.' }
  ];

  return (
    <SEOPageLayout
      title="Pet Treats Case Study | Pawsome Naturals Sustainable Packaging"
      description="How Pawsome Naturals achieved sustainable pet treat packaging with PCR content and child-resistant closures."
      keywords={['pet treat packaging', 'child-resistant packaging', 'PCR recycled pouches', 'sustainable pet food packaging']}
      heroTitle="Case Study: Pawsome Naturals Pet Treats"
      heroSubtitle="How a premium pet treat brand achieved 30% recycled content packaging with child-resistant closures."
      heroImage={heroImage}
      sections={sections}
      introSummary="Pawsome Naturals partnered with Achieve Pack to create PCR-based packaging with child-resistant zippers, meeting retailer requirements while reinforcing their sustainability message."
      faqs={faqs}
      ctaTitle="Packaging for Pet Products"
      ctaDescription="Create sustainable packaging that protects treats and appeals to pet parents."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default PetTreatsCaseStudy;
