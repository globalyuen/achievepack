import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle, MessageCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CoffeeRoasteryCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csCoffeeRoastery';
  const heroImage = '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp';
  
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
                <p className="font-semibold text-lg">Bean & Bole Coffee Roastery</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Industry</p>
                <p className="font-semibold">Specialty Coffee</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Location</p>
                <p className="font-semibold">Portland, Oregon, USA</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Package Type</p>
                <p className="font-semibold">Stand-Up Pouches with Valve</p>
              </div>
            </div>
          </div>
          <p>Bean & Bole is a specialty coffee roastery focused on direct-trade relationships with farmers and sustainable practices. They needed packaging that aligned with their commitment to environmental responsibility while maintaining freshness for their premium single-origin beans. They found <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> through a search for eco-friendly coffee packaging suppliers.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="mb-4">Bean & Bole faced several packaging challenges:</p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Traditional multi-layer plastics</strong> conflicted with their sustainability values</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Barrier requirements</strong> for coffee freshness seemed incompatible with eco materials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>High MOQ from other suppliers</strong> (10,000+ bags) was too much for their small-batch approach</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">✗</span>
              <span><strong>Degassing valve compatibility</strong> with sustainable materials was unclear</span>
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
          <p className="mb-4">We worked with Bean & Bole to develop a custom packaging solution:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <Link to="/materials/compostable" className="hover:underline">Material Selection</Link>
              </h4>
              <p className="text-sm text-blue-700">Kraft paper exterior with <Link to="/materials/compostable" className="underline">compostable PLA</Link> inner layer, providing medium-high barrier suitable for 3-4 month shelf life. Certified EN 13432 compostable.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Degassing Valve
              </h4>
              <p className="text-sm text-green-700">Compatible one-way valve integrated to release CO2 from freshly roasted beans while preventing oxygen entry.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Small Batch Production
              </h4>
              <p className="text-sm text-purple-700">Initial order of just 500 bags per SKU using digital printing—perfect for testing and their artisan approach.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                Premium Finish
              </h4>
              <p className="text-sm text-amber-700">Matte finish with spot UV on logo for tactile premium feel that matches their brand positioning.</p>
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
              <div className="text-sm text-green-700">Compostable Packaging</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">35%</div>
              <div className="text-sm text-blue-700">Customer Satisfaction Increase</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">4 mo</div>
              <div className="text-sm text-purple-700">Shelf Life Maintained</div>
            </div>
            <div className="text-center p-5 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">500</div>
              <div className="text-sm text-amber-700">Bag Minimum Order</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 bg-primary-50 p-4 rounded-r-lg italic text-neutral-700">
            "Our customers love that they can compost our coffee bags. It's become a key differentiator for us in the specialty coffee market. Achieve Pack made the transition seamless."
            <footer className="mt-2 text-sm font-semibold text-neutral-900 not-italic">— Marcus Chen, Founder, Bean & Bole</footer>
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
                <span><strong>Format:</strong> <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">Stand-Up Pouch</Link></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Size:</strong> 140 × 200 + 80mm (250g capacity)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Material:</strong> <Link to="/materials/compostable" className="text-primary-600 hover:underline">Kraft + PLA (compostable)</Link></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Barrier:</strong> Medium-High (OTR &lt; 2.0)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Closure:</strong> Press-to-close zipper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Features:</strong> Degassing valve, tear notch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Printing:</strong> Digital, 4-color + spot UV</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Finish:</strong> Matte exterior</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Certification:</strong> EN 13432, food-safe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span><strong>Order Size:</strong> 500 pcs initial, 2000 pcs reorder</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'key-takeaways',
      title: 'Key Takeaways',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>What made this project successful for Bean & Bole:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Low MOQ (500 pieces):</strong> Perfect for small-batch specialty roasters</li>
            <li><strong>Certified compostable:</strong> EN 13432 certification for authentic sustainability claims</li>
            <li><strong>Degassing valve compatible:</strong> Essential for freshly roasted coffee</li>
            <li><strong>Premium finishing:</strong> Matte + spot UV for brand differentiation</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Looking for similar solutions?</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <Link to="/industry/coffee-tea" className="underline">Explore our Coffee & Tea packaging options</Link></li>
              <li>• <Link to="/materials/compostable" className="underline">Learn about compostable materials</Link></li>
              <li>• <Link to="/store" className="underline">Shop compostable coffee pouches</Link></li>
            </ul>
          </div>
          
          <p className="mt-4">Read our in-depth guide: <Link to="/blog/sustainable-packaging-supplier-analysis" className="text-primary-600 hover:underline font-semibold">How to Choose a Sustainable Packaging Supplier →</Link></p>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Can compostable coffee bags have degassing valves?",
      answer: "Yes, compostable coffee bags can include one-way degassing valves. At Achieve Pack, we integrate compatible valves into our kraft + PLA pouches. The valve allows CO2 to escape after roasting without compromising the compostable certification."
    },
    {
      question: "What is the minimum order for compostable coffee pouches?",
      answer: "Achieve Pack offers MOQ from 100 pieces for stock pouches and 500 pieces for custom printed compostable coffee bags. This low minimum makes sustainable packaging accessible for small roasters and startup coffee brands."
    },
    {
      question: "How long is the shelf life with compostable coffee packaging?",
      answer: "Our kraft + PLA compostable pouches provide 3-4 month shelf life for roasted coffee when properly sealed with a degassing valve. For longer shelf life requirements (12+ months), we recommend our recyclable mono-PE options."
    },
    {
      question: "Are compostable coffee bags more expensive than plastic?",
      answer: "Compostable materials typically cost 15-25% more than conventional plastics at similar volumes. However, many specialty coffee brands find the premium justifiable for brand differentiation and customer loyalty. Bean & Bole saw a 35% increase in customer satisfaction after switching."
    },
    {
      question: "What certifications should compostable coffee bags have?",
      answer: "Look for EN 13432 (European) or ASTM D6400 (US) compostability certifications. These ensure the packaging breaks down in commercial composting within 90-180 days. Achieve Pack provides certification documentation with every order."
    }
  ];

  const relatedLinks = [
    {
      title: "Shop Coffee Pouches",
      url: "/store",
      description: "Browse compostable options - MOQ from 100 pieces"
    },
    {
      title: "Coffee & Tea Packaging",
      url: "/industry/coffee-tea",
      description: "Full guide to coffee packaging options"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "EN 13432 certified materials"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Versatile format with valve options"
    },
    {
      title: "Supplier Analysis Report",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly packaging suppliers"
    }
  ];

  return (
    <SEOPageLayout
      title="Coffee Roastery Case Study | Compostable Packaging with Degassing Valve"
      description="How Bean & Bole Coffee switched to compostable packaging. EN 13432 certified kraft + PLA pouches with degassing valve. 500 piece MOQ. 35% customer satisfaction increase."
      keywords={['coffee packaging case study', 'compostable coffee bags', 'specialty coffee packaging', 'degassing valve compostable', 'sustainable coffee roastery', 'low MOQ coffee bags', 'kraft coffee pouches']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary="How a specialty coffee roastery switched from plastic to certified compostable packaging while maintaining freshness and achieving 35% higher customer satisfaction."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default CoffeeRoasteryCaseStudy;
