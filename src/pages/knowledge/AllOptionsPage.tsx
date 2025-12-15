import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const AllOptionsPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_all_options_catalog_showcase_9383936.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Complete Packaging Options Catalog',
      content: `
        <p class="mb-4">Achieve Pack offers a comprehensive range of sustainable packaging options to meet every product need. From materials to finishes, closures to printing—explore all the ways you can customize your eco-friendly pouches.</p>
        <p>This guide provides an overview of all available options. Our packaging specialists can help you choose the perfect combination for your specific product requirements.</p>
      `
    },
    {
      id: 'materials',
      title: 'Material Options',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Compostable Materials</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Kraft Paper + PLA</li>
              <li>• White Kraft + PLA</li>
              <li>• NatureFlex™ (cellulose)</li>
              <li>• PBAT/PLA blends</li>
              <li>• Home compostable films</li>
            </ul>
            <p class="mt-3 text-xs text-primary-600">Certified EN 13432, ASTM D6400</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Recyclable Materials</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Mono-PE (polyethylene)</li>
              <li>• Mono-PP (polypropylene)</li>
              <li>• PCR (post-consumer recycled)</li>
              <li>• Bio-PE (sugarcane-based)</li>
              <li>• Paper-based structures</li>
            </ul>
            <p class="mt-3 text-xs text-primary-600">GRS certified available</p>
          </div>
        </div>
        <div class="bg-primary-50 p-6 rounded-xl">
          <h4 class="font-semibold text-primary-700 mb-2">Not sure which material to choose?</h4>
          <p class="text-neutral-700 text-sm">Our team can recommend the best material based on your product type, shelf life requirements, and sustainability goals.</p>
        </div>
      `
    },
    {
      id: 'pouchstyles',
      title: 'Pouch Styles',
      content: `
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <img src="/imgs/pouch-shape/stand-up-zipper-pouch.webp" alt="Stand-Up Pouch" class="h-24 mx-auto mb-3 object-contain" />
            <h4 class="font-semibold mb-1">Stand-Up Pouch</h4>
            <p class="text-neutral-600 text-sm">Most popular choice for retail. Sits upright on shelves.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <img src="/imgs/pouch-shape/flat-bottom-pouch.webp" alt="Flat Bottom Bag" class="h-24 mx-auto mb-3 object-contain" />
            <h4 class="font-semibold mb-1">Flat Bottom Bag</h4>
            <p class="text-neutral-600 text-sm">Premium look with 5 printable panels. Great stability.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <img src="/imgs/pouch-shape/side-gusset-pouch.webp" alt="Side Gusset Bag" class="h-24 mx-auto mb-3 object-contain" />
            <h4 class="font-semibold mb-1">Side Gusset Bag</h4>
            <p class="text-neutral-600 text-sm">Traditional coffee bag style. High capacity.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <img src="/imgs/pouch-shape/spout-pouch.webp" alt="Spout Pouch" class="h-24 mx-auto mb-3 object-contain" />
            <h4 class="font-semibold mb-1">Spout Pouch</h4>
            <p class="text-neutral-600 text-sm">For liquids, purees, and beverages.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <img src="/imgs/pouch-shape/3-side-seal-pouch.webp" alt="Flat Pouch" class="h-24 mx-auto mb-3 object-contain" />
            <h4 class="font-semibold mb-1">Flat Pouch</h4>
            <p class="text-neutral-600 text-sm">Simple sachet format for samples and single-serve.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <img src="/imgs/pouch-shape/quad-seal-pouch.webp" alt="Quad Seal Bag" class="h-24 mx-auto mb-3 object-contain" />
            <h4 class="font-semibold mb-1">Quad Seal Bag</h4>
            <p class="text-neutral-600 text-sm">Square shape with 4 corner seals. Modern look.</p>
          </div>
        </div>
      `
    },
    {
      id: 'barrier',
      title: 'Barrier Levels',
      content: `
        <p class="mb-4">Choose the right barrier level based on your product's sensitivity and required shelf life:</p>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-1">Low Barrier</h4>
            <p class="text-sm text-neutral-600">3-6 months</p>
            <p class="text-xs text-neutral-500 mt-2">Dry goods, grains, paper-based</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
            <h4 class="font-semibold text-blue-700 mb-1">Medium Barrier</h4>
            <p class="text-sm text-neutral-600">6-12 months</p>
            <p class="text-xs text-neutral-500 mt-2">Snacks, nuts, dried fruits</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 text-center">
            <h4 class="font-semibold text-purple-700 mb-1">High Barrier</h4>
            <p class="text-sm text-neutral-600">12-24 months</p>
            <p class="text-xs text-neutral-500 mt-2">Coffee, tea, sensitive products</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 text-center">
            <h4 class="font-semibold text-orange-700 mb-1">Maximum Barrier</h4>
            <p class="text-sm text-neutral-600">24+ months</p>
            <p class="text-xs text-neutral-500 mt-2">Pharma, oxygen-sensitive</p>
          </div>
        </div>
      `
    },
    {
      id: 'closures',
      title: 'Closure & Reclosure Options',
      content: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Zipper Types</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Standard press-to-close zipper</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Child-resistant zipper</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Slider zipper (easy open)</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Pocket zipper (below seal)</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Other Closures</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Tin-tie (wire closure)</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Spout caps (various sizes)</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Velcro-style closure</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Tear notch (non-reclosable)</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'printing',
      title: 'Printing & Finishing',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Printing Methods</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li><strong>Digital Printing:</strong> Low MOQ, unlimited colors, variable data</li>
              <li><strong>Plate Printing:</strong> Higher volumes, Pantone matching, up to 10 colors</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Surface Finishes</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Matte finish</li>
              <li>• Gloss finish</li>
              <li>• Soft-touch coating</li>
              <li>• Kraft paper (natural)</li>
            </ul>
          </div>
        </div>
        <div class="bg-neutral-100 p-6 rounded-xl">
          <h4 class="font-semibold mb-3">Special Effects Available:</h4>
          <div class="grid md:grid-cols-4 gap-4 text-sm text-neutral-700">
            <div>• Spot UV coating</div>
            <div>• Embossing/debossing</div>
            <div>• Foil stamping</div>
            <div>• Holographic effects</div>
            <div>• Metallic inks</div>
            <div>• Window patches</div>
            <div>• Tactile varnish</div>
            <div>• QR codes</div>
          </div>
        </div>
      `
    },
    {
      id: 'features',
      title: 'Additional Features',
      content: `
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold mb-2 text-primary-700">Functionality</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Degassing valves (coffee)</li>
              <li>• Pour spouts</li>
              <li>• Hang holes</li>
              <li>• Easy-tear lines</li>
              <li>• Handle holes</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold mb-2 text-primary-700">Visibility</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Clear windows</li>
              <li>• Frosted windows</li>
              <li>• Full clear body</li>
              <li>• Product cutouts</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold mb-2 text-primary-700">Security</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Tamper-evident seals</li>
              <li>• Child-resistant closures</li>
              <li>• Heat-shrink bands</li>
              <li>• QR traceability</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'How do I choose between so many options?',
      answer: 'Start with your product requirements: What are you packaging? What shelf life do you need? What sustainability goals do you have? Our team can then recommend the best combination of material, style, and features.'
    },
    {
      question: 'Can I mix and match options?',
      answer: 'Yes! Most options can be combined. For example, you can have a compostable stand-up pouch with a zipper, matte finish, and spot UV logo. Some combinations have limitations—we\'ll advise during consultation.'
    },
    {
      question: 'Do all options have the same MOQ?',
      answer: 'MOQ varies by option. Digital printing starts at 100 pieces, while plate printing typically requires 5,000+. Complex features may have higher minimums. We offer flexibility for testing.'
    },
    {
      question: 'How do I get samples of different options?',
      answer: 'Request a sample kit with examples of different materials, finishes, and features. We can also produce custom samples of your specific design before full production.'
    }
  ];

  return (
    <SEOPageLayout
      title="All Packaging Options | Complete Customization Guide"
      description="Explore all sustainable packaging options: materials, pouch styles, barrier levels, closures, printing, and finishes. Complete customization guide from Achieve Pack."
      keywords={['packaging options', 'pouch customization', 'barrier levels', 'zipper options', 'printing finishes', 'sustainable packaging features']}
      heroTitle="All Packaging Options"
      heroSubtitle="Your complete guide to sustainable packaging customization. Explore every option available—from materials to finishes, closures to printing."
      heroImage={heroImage}
      sections={sections}
      introSummary="Achieve Pack offers extensive customization options for eco-friendly flexible packaging. This comprehensive guide covers all available materials, pouch styles, barrier levels, closures, printing methods, and special features."
      faqs={faqs}
      ctaTitle="Build Your Custom Package"
      ctaDescription="Work with our specialists to design the perfect packaging for your product."
      ctaButtonText="Start Customizing"
      ctaButtonUrl="/contact"
    />
  );
};

export default AllOptionsPage;
