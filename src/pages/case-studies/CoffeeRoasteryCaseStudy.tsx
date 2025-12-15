import SEOPageLayout from '../../components/SEOPageLayout';

const CoffeeRoasteryCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="text-sm text-neutral-500 mb-1">Company</p>
              <p class="font-semibold text-lg">Bean & Bole Coffee Roastery</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Industry</p>
              <p class="font-semibold">Specialty Coffee</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Location</p>
              <p class="font-semibold">Portland, Oregon, USA</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Package Type</p>
              <p class="font-semibold">Stand-Up Pouches with Valve</p>
            </div>
          </div>
        </div>
        <p>Bean & Bole is a specialty coffee roastery focused on direct-trade relationships with farmers and sustainable practices. They needed packaging that aligned with their commitment to environmental responsibility while maintaining freshness for their premium single-origin beans.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <p class="mb-4">Bean & Bole faced several packaging challenges:</p>
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Traditional multi-layer plastics</strong> conflicted with their sustainability values</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Barrier requirements</strong> for coffee freshness seemed incompatible with eco materials</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>High MOQ from other suppliers</strong> (10,000+ bags) was too much for their small-batch approach</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Degassing valve compatibility</strong> with sustainable materials was unclear</span>
          </li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <p class="mb-4">We worked with Bean & Bole to develop a custom packaging solution:</p>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Material Selection</h4>
            <p class="text-neutral-600 text-sm">Kraft paper exterior with compostable PLA inner layer, providing medium-high barrier suitable for 3-4 month shelf life. Certified EN 13432 compostable.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Degassing Valve</h4>
            <p class="text-neutral-600 text-sm">Compatible one-way valve integrated to release CO2 from freshly roasted beans while preventing oxygen entry.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Small Batch Production</h4>
            <p class="text-neutral-600 text-sm">Initial order of just 500 bags per SKU using digital printing—perfect for testing and their artisan approach.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Premium Finish</h4>
            <p class="text-neutral-600 text-sm">Matte finish with spot UV on logo for tactile premium feel that matches their brand positioning.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">100%</div>
            <div class="text-sm text-neutral-600">Compostable Packaging</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">35%</div>
            <div class="text-sm text-neutral-600">Customer Satisfaction Increase</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">4 mo</div>
            <div class="text-sm text-neutral-600">Shelf Life Maintained</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">500</div>
            <div class="text-sm text-neutral-600">Bag Minimum Order</div>
          </div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "Our customers love that they can compost our coffee bags. It's become a key differentiator for us in the specialty coffee market. Achieve Pack made the transition seamless."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Marcus Chen, Founder, Bean & Bole</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Stand-Up Pouch</div>
            <div><strong>Size:</strong> 140 × 200 + 80mm (250g capacity)</div>
            <div><strong>Material:</strong> Kraft + PLA (compostable)</div>
            <div><strong>Barrier:</strong> Medium-High (OTR &lt; 2.0)</div>
            <div><strong>Closure:</strong> Press-to-close zipper</div>
            <div><strong>Features:</strong> Degassing valve, tear notch</div>
            <div><strong>Printing:</strong> Digital, 4-color + spot UV</div>
            <div><strong>Finish:</strong> Matte exterior</div>
            <div><strong>Certification:</strong> EN 13432, food-safe</div>
            <div><strong>Order Size:</strong> 500 pcs initial, 2000 pcs reorder</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'Can compostable packaging maintain coffee freshness?',
      answer: 'Yes! With the right material combination (like Kraft + PLA with proper barrier layers), compostable packaging can maintain coffee freshness for 3-4 months. Adding a degassing valve allows CO2 release while preventing oxygen entry.'
    },
    {
      question: 'What was the minimum order for this project?',
      answer: 'Bean & Bole started with 500 bags per SKU using digital printing. This allowed them to test the packaging with customers before committing to larger quantities.'
    },
    {
      question: 'Is the degassing valve also compostable?',
      answer: 'Standard degassing valves are not compostable and need to be removed before composting. We clearly label this on the package. Fully compostable valve options are being developed.'
    }
  ];

  return (
    <SEOPageLayout
      title="Coffee Roastery Case Study | Bean & Bole Compostable Packaging"
      description="How Bean & Bole Coffee Roastery switched to compostable packaging while maintaining freshness. Case study featuring Kraft+PLA pouches with degassing valves."
      keywords={['coffee packaging case study', 'compostable coffee bags', 'specialty coffee packaging', 'degassing valve compostable', 'sustainable coffee roastery']}
      heroTitle="Case Study: Bean & Bole Coffee Roastery"
      heroSubtitle="How a specialty coffee roaster achieved 100% compostable packaging without compromising freshness or their small-batch approach."
      heroImage={heroImage}
      sections={sections}
      introSummary="Bean & Bole Coffee Roastery partnered with Achieve Pack to transition from conventional plastic to certified compostable packaging. The result: eco-friendly bags that maintain coffee freshness while reinforcing their sustainability story."
      faqs={faqs}
      ctaTitle="Ready for Your Sustainable Packaging Story?"
      ctaDescription="Let's discuss how we can help your coffee brand transition to eco-friendly packaging."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default CoffeeRoasteryCaseStudy;
