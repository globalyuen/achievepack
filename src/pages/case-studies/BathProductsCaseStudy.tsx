import SEOPageLayout from '../../components/SEOPageLayout';

const BathProductsCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_bavarian_bliss_bath_bombs_spa_pouch_9301794.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">Bavarian Bliss Bath Co.</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Bath Bombs & Body Products</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Munich, Bavaria, Germany</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Clear Window Pouches</p></div>
          </div>
        </div>
        <p>Bavarian Bliss creates handmade bath bombs and fizzing products using Alpine botanicals. Selling at Christmas markets and spa boutiques, they needed packaging that showcased their colorful products while protecting from humidity.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Moisture sensitivity</strong> critical—humidity activates bath bombs prematurely</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Product visibility</strong> essential for colorful bath bomb appeal</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Christmas market sales</strong> requiring gift-worthy packaging</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Seasonal production</strong> with variable quantities</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Clear Recyclable PE</h4>
            <p class="text-neutral-600 text-sm">Crystal-clear recyclable mono-PE shows off colorful bath bombs beautifully.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">High Moisture Barrier</h4>
            <p class="text-neutral-600 text-sm">Enhanced seal structure prevents humidity from activating fizzing ingredients.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Kraft Header Card</h4>
            <p class="text-neutral-600 text-sm">Attached kraft header with brand printing for gift appeal and hanging display.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Seasonal Flexibility</h4>
            <p class="text-neutral-600 text-sm">Digital printing on header allows 250-piece minimum for seasonal editions.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">100%</div><div class="text-sm text-neutral-600">Product Visible</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">Zero</div><div class="text-sm text-neutral-600">Humidity Failures</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">3X</div><div class="text-sm text-neutral-600">Market Sales</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">6</div><div class="text-sm text-neutral-600">Seasonal Editions</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "Our Christmas market sales tripled! Customers love seeing the beautiful colors through the clear pouch, and zero bath bombs have gone fizzy before purchase."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Anna Schmidt, Owner, Bavarian Bliss Bath Co.</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Clear Pouch with Header Card</div>
            <div><strong>Size:</strong> 120 × 180mm (2-pack capacity)</div>
            <div><strong>Material:</strong> Clear mono-PE + kraft header</div>
            <div><strong>Barrier:</strong> High moisture barrier</div>
            <div><strong>Closure:</strong> Heat seal</div>
            <div><strong>Printing:</strong> Digital on header</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'How do you prevent bath bomb activation?', answer: 'The high moisture barrier seal structure prevents humidity from reaching the bath bombs. Properly sealed, products stay fresh for 12+ months even in humid conditions.' },
    { question: 'Are clear pouches eco-friendly?', answer: 'Yes! Our clear mono-PE pouches are recyclable in PE recycling streams. The clear material also reduces need for printed windows, using less ink overall.' }
  ];

  return (
    <SEOPageLayout
      title="Bath Products Case Study | Bavarian Bliss Clear Packaging"
      description="How Bavarian Bliss achieved moisture-protected clear packaging for bath bombs with gift-worthy presentation."
      keywords={['bath bomb packaging', 'clear pouches', 'moisture barrier packaging', 'cosmetic packaging']}
      heroTitle="Case Study: Bavarian Bliss Bath Co."
      heroSubtitle="How a bath bomb brand achieved clear, moisture-protected packaging that tripled Christmas market sales."
      heroImage={heroImage}
      sections={sections}
      introSummary="Bavarian Bliss Bath Co. partnered with Achieve Pack to create clear recyclable packaging with high moisture barrier, perfect for showcasing colorful bath bombs at Christmas markets."
      faqs={faqs}
      ctaTitle="Packaging for Bath & Body"
      ctaDescription="Create protective packaging that showcases your bath and body products."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default BathProductsCaseStudy;
