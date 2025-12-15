import SEOPageLayout from '../../components/SEOPageLayout';

const AdaptogensCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_adaptogens_singapore_zen_wellness_pouch_1951517.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">Zen Botanics Asia</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Adaptogens & Functional Mushrooms</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Singapore</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Premium Matte Pouches</p></div>
          </div>
        </div>
        <p>Zen Botanics sources premium adaptogens and functional mushrooms from across Asia. Selling to wellness cafés and through Shopee/Lazada, they needed premium packaging that communicated quality while protecting sensitive powders.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Potency preservation</strong> critical for functional mushroom benefits</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Premium wellness positioning</strong> in competitive market</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Tropical humidity</strong> of Singapore climate</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Multi-channel sales</strong> requiring versatile packaging</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Premium Matte Black</h4>
            <p class="text-neutral-600 text-sm">Soft-touch matte black finish conveys premium wellness positioning and stands out on shelves.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Maximum Barrier</h4>
            <p class="text-neutral-600 text-sm">High barrier structure protects adaptogens from humidity and light—critical for Singapore's tropical climate.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Minimalist Design</h4>
            <p class="text-neutral-600 text-sm">White foil printing on black creates zen aesthetic that resonates with wellness consumers.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Multi-Size Range</h4>
            <p class="text-neutral-600 text-sm">30g samples, 100g retail, and 500g café sizes from one unified design system.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">25</div><div class="text-sm text-neutral-600">Cafés Stocking</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">18 mo</div><div class="text-sm text-neutral-600">Potency Maintained</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">4.9★</div><div class="text-sm text-neutral-600">Shopee Rating</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">3</div><div class="text-sm text-neutral-600">Size Options</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "The matte black packaging with white printing creates instant premium perception. Our Shopee reviews consistently mention the packaging quality. It's helped us stand out in a crowded market."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Wei Lin, Founder, Zen Botanics Asia</footer>
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
            <div><strong>Sizes:</strong> 30g / 100g / 500g options</div>
            <div><strong>Material:</strong> High barrier mono-PE</div>
            <div><strong>Finish:</strong> Matte black + soft-touch</div>
            <div><strong>Printing:</strong> White foil, minimalist</div>
            <div><strong>Closure:</strong> Resealable zipper</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'How long do adaptogens stay potent?', answer: 'With our high-barrier structure, functional mushrooms and adaptogens maintain potency for 18+ months. The light-blocking matte finish also prevents UV degradation.' },
    { question: 'Can you do multi-size from one design?', answer: 'Yes! We create unified design systems that scale across sizes. Same plate artwork scales proportionally, maintaining brand consistency across your range.' }
  ];

  return (
    <SEOPageLayout
      title="Adaptogens Case Study | Zen Botanics Premium Packaging"
      description="How Zen Botanics Asia achieved premium adaptogen packaging with maximum barrier protection for tropical climates."
      keywords={['adaptogen packaging', 'functional mushroom packaging', 'premium wellness packaging', 'Singapore packaging']}
      heroTitle="Case Study: Zen Botanics Asia"
      heroSubtitle="How an adaptogen brand achieved premium positioning with matte black packaging that protects against tropical humidity."
      heroImage={heroImage}
      sections={sections}
      introSummary="Zen Botanics Asia partnered with Achieve Pack to create premium matte black packaging with maximum barrier protection, perfect for adaptogens in tropical climates."
      faqs={faqs}
      ctaTitle="Premium Wellness Packaging"
      ctaDescription="Create packaging that communicates quality and protects sensitive ingredients."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default AdaptogensCaseStudy;
