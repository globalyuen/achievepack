import SEOPageLayout from '../../components/SEOPageLayout';

const PetTreatsCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div><p class="text-sm text-neutral-500 mb-1">Company</p><p class="font-semibold text-lg">Pawsome Naturals</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Industry</p><p class="font-semibold">Premium Pet Treats</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Location</p><p class="font-semibold">Austin, Texas, USA</p></div>
            <div><p class="text-sm text-neutral-500 mb-1">Package Type</p><p class="font-semibold">Stand-Up Pouches with Child-Resistant Zipper</p></div>
          </div>
        </div>
        <p>Pawsome Naturals creates organic, human-grade pet treats using locally sourced ingredients. Their eco-conscious customers demanded sustainable packaging that also protected treat freshness.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Odor barrier</strong> critical to prevent pets from accessing treats</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Moisture protection</strong> for semi-soft treat freshness</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Child-resistant closure</strong> requested by retailers</span></li>
          <li class="flex items-start gap-3"><span class="text-red-500 mt-1">✗</span><span><strong>Sustainability message</strong> to match brand values</span></li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">PCR Recycled Material</h4>
            <p class="text-neutral-600 text-sm">30% post-consumer recycled content with virgin PE blend for optimal barrier and strength.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Child-Resistant Zipper</h4>
            <p class="text-neutral-600 text-sm">CPSC-compliant child-resistant closure that pets also can't open. Push-and-slide mechanism.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Enhanced Odor Barrier</h4>
            <p class="text-neutral-600 text-sm">Multi-layer structure blocks treat odors—no more pets raiding the treat stash!</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Playful Design</h4>
            <p class="text-neutral-600 text-sm">Matte finish with vibrant digital printing showcasing their fun brand personality.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">30%</div><div class="text-sm text-neutral-600">PCR Content</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">40%</div><div class="text-sm text-neutral-600">Retailer Increase</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">9 mo</div><div class="text-sm text-neutral-600">Shelf Life</div></div>
          <div class="text-center p-6 bg-green-50 rounded-xl"><div class="text-3xl font-bold text-green-600 mb-1">Zero</div><div class="text-sm text-neutral-600">Pet Break-Ins</div></div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "The child-resistant zipper was a game-changer for getting into pet specialty stores. And our customers love that it keeps treats fresh AND keeps clever dogs out!"
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Jake Morrison, Founder, Pawsome Naturals</footer>
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
            <div><strong>Size:</strong> 180 × 280 + 100mm (350g capacity)</div>
            <div><strong>Material:</strong> PCR PE blend (30% recycled)</div>
            <div><strong>Barrier:</strong> High (odor blocking)</div>
            <div><strong>Closure:</strong> Child-resistant zipper</div>
            <div><strong>Printing:</strong> Digital, full color</div>
            <div><strong>Certification:</strong> CPSC child-resistant, FDA food-safe</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    { question: 'Is the child-resistant closure pet-proof?', answer: 'The push-and-slide mechanism is designed for human adults and effectively prevents pets from opening the package. It meets CPSC child-resistant standards.' },
    { question: 'What makes PCR packaging sustainable?', answer: 'PCR (post-consumer recycled) content reduces virgin plastic use. Our 30% PCR blend comes from recycled consumer plastics, reducing carbon footprint while maintaining performance.' }
  ];

  return (
    <SEOPageLayout
      title="Pet Treats Case Study | Pawsome Naturals Sustainable Packaging"
      description="How Pawsome Naturals achieved sustainable pet treat packaging with PCR content and child-resistant closures."
      keywords={['pet treat packaging', 'child-resistant packaging', 'PCR recycled pouches', 'sustainable pet food packaging']}
      heroTitle="Case Study: Pawsome Naturals Pet Treats"
      heroSubtitle="How a premium pet treat brand achieved 30% recycled content packaging with child-resistant closures."
      heroImage={heroImage}
      sections={sections}
      introSummary="Pawsome Naturals partnered with Achieve Pack to create PCR-based packaging with child-resistant zippers, meeting retailer requirements while reinforcing their sustainability message."
      faqs={faqs}
      ctaTitle="Packaging for Pet Products"
      ctaDescription="Create sustainable packaging that protects treats and appeals to pet parents."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default PetTreatsCaseStudy;
