import SEOPageLayout from '../../components/SEOPageLayout';

const OutdoorSnacksCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_achieve_pack_outdoor_picnic_pouch_4758828.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">TrailFuel Adventures</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Outdoor & Trail Snacks</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Denver, Colorado, USA</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Durable Trail-Ready Pouches</p></div>
          </div>
        </div>
        <p>TrailFuel creates high-energy snacks for hikers, climbers, and outdoor enthusiasts. Sold at REI and outdoor retailers, they needed packaging that survives backpack abuse while appealing to eco-conscious adventurers.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Puncture resistance</strong> critical for backpack and trail conditions</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Eco credentials</strong> expected by outdoor community</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>REI requirements</strong> for sustainable packaging claims</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Altitude stability</strong> for high-elevation retail and use</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Reinforced Structure</h4>
            <p class="text-neutral-600 text-sm">Extra-thick mono-PE structure designed to resist puncture from gear and trail conditions.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">30% PCR Content</h4>
            <p class="text-neutral-600 text-sm">Post-consumer recycled content meets REI's sustainability requirements with certification.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Easy-Open Tab</h4>
            <p class="text-neutral-600 text-sm">Large tear notch works with cold or gloved hands—essential for trail use.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Adventure Graphics</h4>
            <p class="text-neutral-600 text-sm">Bold, visible design that stands out on outdoor retail pegboards.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">REI</div><div class="text-sm text-neutral-600">National Listing</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">Zero</div><div class="text-sm text-neutral-600">Trail Punctures</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">30%</div><div class="text-sm text-neutral-600">Recycled Content</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">14k ft</div><div class="text-sm text-neutral-600">Altitude Tested</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "Getting into REI was our goal for years. The PCR content and certified recyclability made the difference—and zero customer complaints about packaging failures on the trail."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Mike Torres, CEO, TrailFuel Adventures</footer>
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
            <div><strong>Size:</strong> 180 × 260 + 100mm (250g)</div>
            <div><strong>Material:</strong> 30% PCR mono-PE (reinforced)</div>
            <div><strong>Features:</strong> Easy-open tab, euro slot</div>
            <div><strong>Testing:</strong> Puncture & altitude certified</div>
            <div><strong>Printing:</strong> Plate, 6 colors</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'How does the packaging handle altitude changes?', answer: 'We test packaging at high altitude (14,000+ ft) to ensure seals do not pop or fail. The flexible structure accommodates pressure changes during mountain retail and trail use.' },
    { question: 'What makes it puncture-resistant?', answer: 'The reinforced mono-PE structure is thicker than standard pouches, designed specifically for outdoor use where gear, rocks, and trail conditions can damage packaging.' }
  ];

  return (
    <SEOPageLayout
      title="Outdoor Snacks Case Study | TrailFuel Adventure Packaging"
      description="How TrailFuel achieved REI listing with puncture-resistant recycled content packaging for trail snacks."
      keywords={['outdoor snack packaging', 'trail snack bags', 'REI packaging', 'puncture resistant pouches']}
      heroTitle="Case Study: TrailFuel Adventures"
      heroSubtitle="How an outdoor snack brand achieved REI national listing with durable, eco-certified packaging."
      heroImage={heroImage}
      sections={sections}
      introSummary="TrailFuel Adventures partnered with Achieve Pack to create reinforced PCR packaging that survives trail conditions while meeting REI's sustainability requirements."
      faqs={faqs}
      ctaTitle="Packaging for Active Lifestyles"
      ctaDescription="Create durable, sustainable packaging for outdoor and adventure products."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default OutdoorSnacksCaseStudy;
