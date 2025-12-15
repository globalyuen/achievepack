import SEOPageLayout from '../../components/SEOPageLayout';

const WellnessBrandCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_nourishnow_seattle_morning_wellness_pouch_1061333.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">NourishNow Wellness</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Supplements & Wellness</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Seattle, Washington, USA</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Stand-Up Pouches with Child-Resistant Zipper</p></div>
          </div>
        </div>
        <p>NourishNow creates plant-based supplement powders and adaptogens. Selling through Amazon and their DTC website, they needed packaging that protected sensitive ingredients while meeting e-commerce requirements.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Amazon FBA requirements</strong> for packaging durability</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Light-sensitive ingredients</strong> requiring UV protection</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Child-resistant for supplements</strong> as a safety measure</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Multiple SKUs launching</strong> with limited capital</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Bio-PE Material</h4>
            <p class="text-neutral-600 text-sm">Sugarcane-based polyethylene—same performance as conventional PE but from renewable sources.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Opaque Light Barrier</h4>
            <p class="text-neutral-600 text-sm">Full coverage printing blocks UV light, protecting sensitive vitamins and adaptogens.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">E-Commerce Durability</h4>
            <p class="text-neutral-600 text-sm">Structure designed to survive Amazon FBA handling without puncture or seal failure.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Child-Resistant Closure</h4>
            <p class="text-neutral-600 text-sm">Push-and-slide zipper meets CPSC requirements for supplement packaging.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">100%</div><div class="text-sm text-neutral-600">Bio-Based PE</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">Zero</div><div class="text-sm text-neutral-600">Shipping Failures</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">6</div><div class="text-sm text-neutral-600">SKUs Launched</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">4.8★</div><div class="text-sm text-neutral-600">Amazon Rating</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "Zero shipping damage since switching to Achieve Pack. The child-resistant zipper also stopped 'Subscribe & Save' returns from families. A complete win."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— David Kim, CEO, NourishNow Wellness</footer>
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
            <div><strong>Size:</strong> 160 × 240 + 90mm (300g)</div>
            <div><strong>Material:</strong> Bio-PE (sugarcane-based)</div>
            <div><strong>Barrier:</strong> High (UV blocking)</div>
            <div><strong>Closure:</strong> Child-resistant zipper</div>
            <div><strong>Printing:</strong> Digital, full coverage</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'What is Bio-PE?', answer: 'Bio-PE is polyethylene made from sugarcane ethanol instead of petroleum. It has identical performance to conventional PE but is made from renewable resources.' },
    { question: 'Does it meet Amazon FBA requirements?', answer: 'Yes! Our pouches are designed for e-commerce durability—they survive Amazon FBA handling, shipping, and storage without seal failure or punctures.' }
  ];

  return (
    <SEOPageLayout
      title="Wellness Brand Case Study | NourishNow Bio-PE Packaging"
      description="How NourishNow Wellness achieved e-commerce ready bio-PE supplement packaging with child-resistant closures."
      keywords={['supplement packaging', 'bio-PE packaging', 'Amazon FBA packaging', 'child-resistant supplement bags']}
      heroTitle="Case Study: NourishNow Wellness"
      heroSubtitle="How a DTC wellness brand achieved bio-based packaging that survives Amazon FBA handling."
      heroImage={heroImage}
      sections={sections}
      introSummary="NourishNow Wellness partnered with Achieve Pack to create bio-PE packaging optimized for e-commerce, with child-resistant closures and UV protection."
      faqs={faqs}
      ctaTitle="Packaging for Wellness Brands"
      ctaDescription="Create sustainable e-commerce packaging for supplements and wellness products."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default WellnessBrandCaseStudy;
