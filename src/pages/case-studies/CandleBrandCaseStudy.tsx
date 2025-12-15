import SEOPageLayout from '../../components/SEOPageLayout';

const CandleBrandCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_luminara_candle_munich_luxury_evening_pouch_1830743.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">Luminara Candles</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Artisan Candles & Home Fragrance</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Munich, Germany</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Side Gusset Bags with Tin-Tie</p></div>
          </div>
        </div>
        <p>Luminara creates hand-poured soy candles with essential oil blends. They needed packaging that protects fragrance integrity while presenting beautifully in boutique retail settings.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Fragrance preservation</strong> critical for essential oil candles</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Boutique presentation</strong> for high-end home stores</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>EU packaging regulations</strong> compliance</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Small batch flexibility</strong> for seasonal scents</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Kraft Paper + Aroma Barrier</h4>
            <p class="text-neutral-600 text-sm">Natural kraft exterior with inner barrier layer that seals in essential oil fragrances.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Elegant Tin-Tie Closure</h4>
            <p class="text-neutral-600 text-sm">Wire closure adds artisan appeal and allows customers to reseal between uses.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Seasonal Flexibility</h4>
            <p class="text-neutral-600 text-sm">Digital printing allows 200-piece runs for limited edition seasonal scents.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Compostable Structure</h4>
            <p class="text-neutral-600 text-sm">EN 13432 certified compostable—appeals to eco-conscious home décor shoppers.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">6</div><div class="text-sm text-neutral-600">Boutiques Listed</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">12</div><div class="text-sm text-neutral-600">Seasonal Scents</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">100%</div><div class="text-sm text-neutral-600">Compostable</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">200</div><div class="text-sm text-neutral-600">Piece Minimum</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "Being able to create packaging for just 200 candles means I can test new scents without huge commitment. The kraft bags look beautiful and my customers love composting them."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Hannah Bergmann, Founder, Luminara Candles</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Side Gusset Bag</div>
            <div><strong>Size:</strong> 120 × 300 × 80mm</div>
            <div><strong>Material:</strong> Kraft + PLA (compostable)</div>
            <div><strong>Closure:</strong> Tin-tie</div>
            <div><strong>Printing:</strong> Digital, 4 colors</div>
            <div><strong>Certification:</strong> EN 13432</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'Can paper packaging protect candle fragrances?', answer: 'Yes! Our kraft structure includes an inner barrier layer that seals in essential oil fragrances, maintaining scent integrity during storage and retail display.' },
    { question: 'What is the minimum for seasonal editions?', answer: 'With digital printing, we can produce as few as 200 bags per design—perfect for testing seasonal or limited edition scents.' }
  ];

  return (
    <SEOPageLayout
      title="Candle Brand Case Study | Luminara Sustainable Packaging"
      description="How Luminara Candles achieved boutique-worthy compostable packaging for artisan candles with tin-tie closures."
      keywords={['candle packaging', 'artisan packaging', 'compostable packaging', 'tin-tie bags']}
      heroTitle="Case Study: Luminara Candles"
      heroSubtitle="How an artisan candle brand achieved compostable packaging that preserves fragrance and appeals to boutique retailers."
      heroImage={heroImage}
      sections={sections}
      introSummary="Luminara Candles partnered with Achieve Pack to create compostable kraft packaging with aroma barriers, enabling small-batch seasonal releases."
      faqs={faqs}
      ctaTitle="Packaging for Home Products"
      ctaDescription="Create sustainable packaging for candles and home fragrance products."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default CandleBrandCaseStudy;
