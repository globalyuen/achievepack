import SEOPageLayout from '../../components/SEOPageLayout';

const OrganicNutsCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_nutrivie_nuts_sustainable_pouch_lifestyle_0132786.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">NutriVie Organic</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Organic Nuts & Seeds</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Lyon, France</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Stand-Up Pouches with Euro Slot</p></div>
          </div>
        </div>
        <p>NutriVie sources organic nuts and seeds from European farms, selling through organic supermarkets across France and Germany. They needed EU PPWR-compliant packaging that maintained product freshness.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>EU PPWR deadline</strong> approaching for packaging compliance</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Rancidity prevention</strong> critical for nut freshness</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Retail hanging display</strong> required for supermarket fixtures</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>15+ SKU range</strong> needing cost-effective solution</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Recyclable Mono-Material</h4>
            <p class="text-neutral-600 text-sm">Mono-PE structure meets EU PPWR recyclability requirements with full compliance documentation.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">High Oxygen Barrier</h4>
            <p class="text-neutral-600 text-sm">EVOH layer prevents nut rancidity, maintaining freshness for 12+ months shelf life.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Euro Slot Integration</h4>
            <p class="text-neutral-600 text-sm">Reinforced hang hole for supermarket peg displays without separate header.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Unified Design System</h4>
            <p class="text-neutral-600 text-sm">Plate printing with variable color bands—one plate set for 15 SKUs.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">100%</div><div class="text-sm text-neutral-600">PPWR Compliant</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">15</div><div class="text-sm text-neutral-600">SKUs Unified</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">12 mo</div><div class="text-sm text-neutral-600">Shelf Life</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">-30%</div><div class="text-sm text-neutral-600">Plate Costs</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "The unified design approach saved us thousands on plates while creating a cohesive brand look. Plus we're PPWR-ready ahead of schedule."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Pierre Dumont, Director, NutriVie Organic</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Stand-Up Pouch with Euro Slot</div>
            <div><strong>Size:</strong> 140 × 200 + 80mm (200g)</div>
            <div><strong>Material:</strong> Mono-PE with EVOH</div>
            <div><strong>Barrier:</strong> High (anti-rancidity)</div>
            <div><strong>Features:</strong> Euro slot, tear notch, zipper</div>
            <div><strong>Printing:</strong> Plate, 6 colors + variable bands</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'How does one plate set work for 15 SKUs?', answer: 'We designed a unified brand layout where only the color bands and product names change. The base plate stays the same, with variable elements swapped during production.' },
    { question: 'Is this fully EU PPWR compliant?', answer: 'Yes! The mono-PE structure meets the recyclability requirements. We provide full compliance documentation including material declarations and recyclability certificates.' }
  ];

  return (
    <SEOPageLayout
      title="Organic Nuts Case Study | NutriVie EU PPWR Compliant Packaging"
      description="How NutriVie Organic achieved EU PPWR compliant nut packaging with 12-month shelf life and unified design system."
      keywords={['nut packaging', 'EU PPWR compliant', 'organic food packaging', 'recyclable food pouches']}
      heroTitle="Case Study: NutriVie Organic Nuts"
      heroSubtitle="How an organic nut brand achieved EU PPWR compliance while reducing packaging costs across 15 SKUs."
      heroImage={heroImage}
      sections={sections}
      introSummary="NutriVie Organic partnered with Achieve Pack to create EU PPWR-compliant recyclable packaging with a unified design system that reduced costs across their 15-SKU range."
      faqs={faqs}
      ctaTitle="EU PPWR-Ready Packaging"
      ctaDescription="Get ahead of regulations with compliant, recyclable packaging solutions."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default OrganicNutsCaseStudy;
