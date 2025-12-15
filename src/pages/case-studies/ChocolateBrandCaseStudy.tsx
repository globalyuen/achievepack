import SEOPageLayout from '../../components/SEOPageLayout';

const ChocolateBrandCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">Artisan Cocoa Emirates</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Luxury Artisan Chocolate</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Abu Dhabi, UAE</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Premium Flat Bottom Bags</p></div>
          </div>
        </div>
        <p>Artisan Cocoa Emirates creates luxury bean-to-bar chocolate for high-end hotels and retail. Operating in extreme heat, they needed packaging that protects chocolate while conveying premium quality.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Extreme heat exposure</strong> during Middle East distribution</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Luxury presentation</strong> required for 5-star hotel clients</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Gift-worthy packaging</strong> for retail and corporate gifting</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Sustainability story</strong> for eco-conscious luxury market</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Maximum Barrier Structure</h4>
            <p class="text-neutral-600 text-sm">Recyclable mono-PP with aluminum-free barrier technology for maximum heat and moisture protection.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Gold Foil Stamping</h4>
            <p class="text-neutral-600 text-sm">Premium gold foil accents on matte black finish for luxury shelf presence.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Soft-Touch Lamination</h4>
            <p class="text-neutral-600 text-sm">Velvety texture that invites touch and conveys premium quality.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Flat Bottom Stability</h4>
            <p class="text-neutral-600 text-sm">Stands beautifully on hotel boutique shelves and gift displays.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">12</div><div class="text-sm text-neutral-600">5-Star Hotels</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">45°C</div><div class="text-sm text-neutral-600">Heat Tested</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">100%</div><div class="text-sm text-neutral-600">Recyclable</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">55%</div><div class="text-sm text-neutral-600">Gift Sales Up</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "The packaging elevated our brand instantly. Hotels that previously said no are now stocking our chocolates. The soft-touch finish gets compliments every time."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Fatima Al-Rashid, CEO, Artisan Cocoa Emirates</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Flat Bottom Bag</div>
            <div><strong>Size:</strong> 100 × 200 × 60mm (150g)</div>
            <div><strong>Material:</strong> Mono-PP high barrier</div>
            <div><strong>Finish:</strong> Matte black + soft-touch + gold foil</div>
            <div><strong>Closure:</strong> Resealable zipper</div>
            <div><strong>Printing:</strong> Plate, 4 colors + foil</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'Can flexible packaging protect chocolate in hot climates?', answer: 'Yes! Our high-barrier mono-PP structure with advanced barrier technology protects against heat and humidity. Tested to 45°C for Middle East distribution.' },
    { question: 'Is foil stamping sustainable?', answer: 'Hot foil stamping adds minimal material and the base package remains recyclable. We use responsible application methods.' }
  ];

  return (
    <SEOPageLayout
      title="Chocolate Brand Case Study | Artisan Cocoa Luxury Packaging"
      description="How Artisan Cocoa Emirates achieved luxury chocolate packaging with heat protection and premium finishes."
      keywords={['chocolate packaging', 'luxury packaging', 'heat resistant packaging', 'foil stamping pouches']}
      heroTitle="Case Study: Artisan Cocoa Emirates"
      heroSubtitle="How a luxury chocolate brand achieved premium packaging that withstands Middle East heat."
      heroImage={heroImage}
      sections={sections}
      introSummary="Artisan Cocoa Emirates partnered with Achieve Pack to create luxury packaging that protects chocolate in extreme heat while conveying premium brand values."
      faqs={faqs}
      ctaTitle="Create Luxury Packaging"
      ctaDescription="Elevate your confectionery brand with premium sustainable packaging."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default ChocolateBrandCaseStudy;
