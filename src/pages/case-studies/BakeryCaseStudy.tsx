import React from 'react';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const BakeryCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_wholesome_bakery_pouch_kitchen_9227377.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">Wholesome Bakes</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Artisan Bakery & Granola</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Vancouver, British Columbia</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Stand-Up Pouches with Window</p></div>
            </div>
          </div>
          <p>Wholesome Bakes creates organic granolas and baked goods sold at farmers markets and natural food stores. They needed packaging that showcased their beautiful products while being genuinely compostable.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <ul className="space-y-3 text-neutral-700">
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Product visibility</strong> essential for artisan granola appeal</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Farmers market requirements</strong> for eco-friendly packaging</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Home compostable</strong> preferred by their customer base</span></li>
          <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Budget conscious</strong> as a small bakery operation</span></li>
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
              Home Compostable Material
            </h4>
            <p className="text-sm text-blue-700">OK Compost HOME certified kraft structure that breaks down in backyard composting within 6-12 months.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              NatureFlex Window
            </h4>
            <p className="text-sm text-green-700">Compostable cellulose window that showcases granola texture—also home compostable!</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              Affordable Digital Printing
            </h4>
            <p className="text-sm text-purple-700">Full-color designs starting at 300 bags—budget-friendly for small bakery operation.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              Rustic Kraft Aesthetic
            </h4>
            <p className="text-sm text-amber-700">Natural kraft look that matches farmers market positioning and artisan values.</p>
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
              <div className="text-sm text-green-700">Home Compostable</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
              <div className="text-sm text-blue-700">Farmers Markets</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">300</div>
              <div className="text-sm text-purple-700">Bag Minimum</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">25%</div>
              <div className="text-sm text-amber-700">Sales Increase</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "My customers can put the entire package—window and all—into their home compost. That story sells itself at farmers markets. Sales are up 25% since we switched."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Emma Chen, Owner, Wholesome Bakes</footer>
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
            <div><strong>Format:</strong> Stand-Up Pouch with Window</div>
            <div><strong>Size:</strong> 160 × 240 + 90mm (350g)</div>
            <div><strong>Material:</strong> Kraft + NatureFlex window</div>
            <div><strong>Certification:</strong> OK Compost HOME</div>
            <div><strong>Closure:</strong> Resealable zipper</div>
            <div><strong>Printing:</strong> Digital, full color</div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: 'Is the window home compostable too?', answer: 'Yes! NatureFlex is made from cellulose and is certified for home composting. The entire package including the window can go into backyard compost.' },
    { question: 'What makes this affordable for small bakeries?', answer: 'Digital printing eliminates plate costs, and our 300-bag minimum means small bakeries can access professional packaging without huge inventory.' }
  ];

  return (
    <SEOPageLayout
      title="Bakery Case Study | Wholesome Bakes Home Compostable Packaging"
      description="How Wholesome Bakes achieved home compostable granola packaging with windows for farmers market success."
      keywords={['bakery packaging', 'granola packaging', 'home compostable', 'farmers market packaging']}
      heroTitle="Case Study: Wholesome Bakes Bakery"
      heroSubtitle="How an artisan bakery achieved home compostable packaging that sells at farmers markets."
      heroImage={heroImage}
      sections={sections}
      introSummary="Wholesome Bakes partnered with Achieve Pack to create fully home compostable packaging with windows, perfect for farmers market sales and eco-conscious consumers."
      faqs={faqs}
      ctaTitle="Packaging for Artisan Bakers"
      ctaDescription="Create home compostable packaging that showcases your baked goods."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default BakeryCaseStudy;
