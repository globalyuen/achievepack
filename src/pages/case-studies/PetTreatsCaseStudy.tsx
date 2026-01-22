import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle, MessageCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const PetTreatsCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csPetTreats';
  const heroImage = '/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Who Is This Client?',
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
          <p>Pawsome Naturals creates organic, human-grade pet treats using locally sourced ingredients. Their eco-conscious customers demanded sustainable packaging that also protected treat freshness. They partnered with <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> to find the perfect solution.</p>
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
      title: 'How Did Achieve Pack Help?',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <Link to="/materials/pcr" className="hover:underline">PCR Recycled Material</Link>
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
      title: 'What Results Did They Achieve?',
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
      title: 'What Packaging Specs Were Used?',
      icon: <Package className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">Stand-Up Pouch</Link></div>
            <div><strong>Size:</strong> 180 × 280 + 100mm (350g capacity)</div>
            <div><strong>Material:</strong> <Link to="/materials/pcr" className="text-primary-600 hover:underline">PCR PE blend (30% recycled)</Link></div>
            <div><strong>Barrier:</strong> High (odor blocking)</div>
            <div><strong>Closure:</strong> Child-resistant zipper</div>
            <div><strong>Printing:</strong> Digital, full color</div>
            <div><strong>Certification:</strong> CPSC child-resistant, FDA food-safe</div>
          </div>
        </div>
      )
    },
    {
      id: 'key-takeaways',
      title: 'What Can You Learn From This?',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>What made this project successful for Pawsome Naturals:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Child-resistant closure:</strong> CPSC compliant for retailer requirements</li>
            <li><strong>PCR content:</strong> 30% recycled material meets sustainability goals</li>
            <li><strong>Odor barrier:</strong> Prevents pets from accessing treats</li>
            <li><strong>40% more retailers:</strong> Child-resistant packaging opened new distribution channels</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Looking for similar solutions?</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <Link to="/industry/pet-food" className="underline">Explore our Pet Food packaging options</Link></li>
              <li>• <Link to="/materials/pcr" className="underline">Learn about PCR recycled materials</Link></li>
              <li>• <Link to="/store" className="underline">Shop pet treat pouches</Link></li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "What is child-resistant pet treat packaging?",
      answer: "Child-resistant packaging uses specialized closures that require push-and-slide or squeeze-and-pull mechanisms that are difficult for children (and pets) to open. Our pouches are CPSC compliant and tested to ASTM D3475 standards."
    },
    {
      question: "Can pet treat bags have recycled content?",
      answer: "Yes, we offer PCR (post-consumer recycled) content from 30-50% in pet treat packaging. The material maintains food-grade safety and barrier properties while reducing environmental impact."
    },
    {
      question: "What is the MOQ for pet treat pouches with child-resistant closures?",
      answer: "MOQ for child-resistant pet treat pouches is 500 pieces for custom printed options. This low minimum allows smaller pet treat brands to access premium packaging features."
    },
    {
      question: "How do you prevent treats from going stale?",
      answer: "Our pet treat pouches use high-barrier structures with MVTR below 2.0 g/m²/24hr and excellent odor blocking. Combined with resealable closures, treats stay fresh for 9-12 months."
    },
    {
      question: "Do retailers require child-resistant packaging for pet treats?",
      answer: "Some specialty pet stores and major retailers prefer or require child-resistant packaging for certain treat types. It's becoming more common as safety regulations evolve. Pawsome Naturals gained 40% more retail distribution after adding this feature."
    }
  ];

  const relatedLinks = [
    {
      title: "Shop Pet Treat Pouches",
      url: "/store",
      description: "Browse PCR and child-resistant options"
    },
    {
      title: "Pet Food Packaging",
      url: "/industry/pet-food",
      description: "Full guide to pet packaging options"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Versatile format for pet treats"
    },
    {
      title: "PCR Materials",
      url: "/materials/pcr",
      description: "Post-consumer recycled options"
    },
    {
      title: "Supplier Analysis Report",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly packaging suppliers"
    }
  ];

  return (
    <SEOPageLayout
      title="Pet Treats Case Study | Child-Resistant PCR Packaging for Organic Treats"
      description="How Pawsome Naturals achieved 40% more retail distribution with child-resistant PCR packaging. 30% recycled content, odor barrier, CPSC compliant."
      keywords={['pet treat packaging', 'child-resistant packaging', 'PCR recycled pouches', 'sustainable pet food packaging', 'odor barrier pet bags', 'CPSC compliant pet packaging']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary="How an organic pet treat brand gained 40% more retail distribution with child-resistant PCR packaging while meeting eco-conscious customer demands."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default PetTreatsCaseStudy;
