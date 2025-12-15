import SEOPageLayout from '../../components/SEOPageLayout';

const TeaBrandCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_milano_botanica_tea_caf_8381320.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="text-sm text-neutral-500 mb-1">Company</p>
              <p class="font-semibold text-lg">Milano Botanica</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Industry</p>
              <p class="font-semibold">Premium Organic Tea</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Location</p>
              <p class="font-semibold">Milan, Italy</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Package Type</p>
              <p class="font-semibold">Flat Bottom Bags with Window</p>
            </div>
          </div>
        </div>
        <p>Milano Botanica is a luxury organic tea brand known for artisanal blends and European botanical ingredients. They sought packaging that would showcase their beautiful loose-leaf teas while meeting EU sustainability regulations.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <p class="mb-4">Milano Botanica needed to address multiple packaging requirements:</p>
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Product visibility</strong> was essential for showcasing loose-leaf tea quality</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>EU PPWR compliance</strong> requirements were approaching</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Premium aesthetic</strong> was non-negotiable for luxury positioning</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Aroma protection</strong> for delicate tea flavors</span>
          </li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <p class="mb-4">We created a premium compostable packaging solution with window:</p>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">NatureFlex™ Window</h4>
            <p class="text-neutral-600 text-sm">Compostable cellulose-based transparent window that showcases the tea while maintaining barrier properties. Crystal clear visibility.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">White Kraft + PLA Body</h4>
            <p class="text-neutral-600 text-sm">Premium white kraft exterior provides excellent print surface for their elegant botanical designs.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Flat Bottom Format</h4>
            <p class="text-neutral-600 text-sm">Five printable panels for maximum brand storytelling. Stands beautifully on retail shelves.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Tin-Tie Closure</h4>
            <p class="text-neutral-600 text-sm">Elegant resealable closure that complements the premium aesthetic while keeping tea fresh.</p>
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
            <div class="text-sm text-neutral-600">EU PPWR Compliant</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">28%</div>
            <div class="text-sm text-neutral-600">Sales Increase</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">12 mo</div>
            <div class="text-sm text-neutral-600">Shelf Life</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">5</div>
            <div class="text-sm text-neutral-600">Star Reviews</div>
          </div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "The window packaging has transformed how customers interact with our teas. They can see the quality before purchase, and knowing it's compostable resonates strongly with our European customers."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Sofia Ricci, Brand Director, Milano Botanica</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Flat Bottom Bag with Window</div>
            <div><strong>Size:</strong> 120 × 250 × 70mm (100g capacity)</div>
            <div><strong>Material:</strong> White Kraft + PLA + NatureFlex window</div>
            <div><strong>Barrier:</strong> Medium (suitable for tea)</div>
            <div><strong>Closure:</strong> Tin-tie</div>
            <div><strong>Features:</strong> Clear window, tear notch</div>
            <div><strong>Printing:</strong> Plate printing, 6 colors</div>
            <div><strong>Finish:</strong> Matte with soft-touch</div>
            <div><strong>Certification:</strong> EN 13432, OK Compost</div>
            <div><strong>Order Size:</strong> 5,000 pcs per SKU</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'Is the window also compostable?',
      answer: 'Yes! We used NatureFlex™, a cellulose-based transparent film that is certified compostable. The entire package including the window can go into commercial composting.'
    },
    {
      question: 'How does this meet EU PPWR requirements?',
      answer: 'The packaging is certified compostable under EN 13432, which is one pathway to EU PPWR compliance. Full documentation is provided for retailer and regulatory requirements.'
    },
    {
      question: 'What shelf life can tea achieve in this packaging?',
      answer: 'Depending on the tea type, this packaging structure provides 9-12 months shelf life. The NatureFlex window maintains good moisture barrier while allowing product visibility.'
    }
  ];

  return (
    <SEOPageLayout
      title="Tea Brand Case Study | Milano Botanica Premium Packaging"
      description="How Milano Botanica achieved EU PPWR compliant luxury tea packaging with compostable windows. Case study featuring flat bottom bags with NatureFlex windows."
      keywords={['tea packaging case study', 'compostable window packaging', 'luxury tea bags', 'EU PPWR compliant packaging', 'flat bottom tea bags']}
      heroTitle="Case Study: Milano Botanica Tea"
      heroSubtitle="How a luxury Italian tea brand achieved EU compliance with stunning compostable packaging featuring clear windows."
      heroImage={heroImage}
      sections={sections}
      introSummary="Milano Botanica partnered with Achieve Pack to create premium compostable packaging with transparent windows. The result: beautiful packaging that showcases their teas while meeting EU sustainability requirements."
      faqs={faqs}
      ctaTitle="Create Your Premium Tea Packaging"
      ctaDescription="Let's design compostable packaging that showcases your tea beautifully."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default TeaBrandCaseStudy;
