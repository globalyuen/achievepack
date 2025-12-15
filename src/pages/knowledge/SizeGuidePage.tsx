import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const SizeGuidePage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_size_reference_dimensions_7506199.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Understanding Pouch Dimensions',
      content: `
        <p class="mb-4">Choosing the right pouch size is crucial for product presentation, shipping efficiency, and cost optimization. This guide explains how pouch dimensions work and helps you select the perfect size for your product.</p>
        <div class="bg-primary-50 p-6 rounded-xl">
          <h4 class="font-semibold text-primary-700 mb-3">How We Measure Pouches:</h4>
          <p class="text-neutral-700 text-sm mb-3">Pouch dimensions are typically expressed as <strong>Width x Height + Bottom Gusset</strong> (when applicable).</p>
          <ul class="space-y-1 text-neutral-700 text-sm">
            <li><strong>Width:</strong> Measured flat, from left edge to right edge</li>
            <li><strong>Height:</strong> Measured from bottom seal to top seal (or zipper)</li>
            <li><strong>Gusset:</strong> The fold depth at the bottom or sides that creates volume</li>
          </ul>
        </div>
      `
    },
    {
      id: 'standup',
      title: 'Stand-Up Pouch Sizes',
      content: `
        <p class="mb-4">Our most popular format. These sizes cover most retail and e-commerce needs:</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-primary-100">
                <th class="p-3 text-left border">Size Code</th>
                <th class="p-3 text-left border">Dimensions (W×H+G)</th>
                <th class="p-3 text-left border">Approx. Capacity</th>
                <th class="p-3 text-left border">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white"><td class="p-3 border">XS</td><td class="p-3 border">80 × 130 + 50mm</td><td class="p-3 border">25-50g</td><td class="p-3 border">Samples, single-serve, travel size</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border">S</td><td class="p-3 border">100 × 150 + 60mm</td><td class="p-3 border">50-100g</td><td class="p-3 border">Tea, small snacks, spices</td></tr>
              <tr class="bg-white"><td class="p-3 border">M</td><td class="p-3 border">140 × 200 + 80mm</td><td class="p-3 border">100-250g</td><td class="p-3 border">Coffee (250g), nuts, granola</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border">L</td><td class="p-3 border">160 × 240 + 90mm</td><td class="p-3 border">250-500g</td><td class="p-3 border">Standard retail, pet treats</td></tr>
              <tr class="bg-white"><td class="p-3 border">XL</td><td class="p-3 border">200 × 300 + 100mm</td><td class="p-3 border">500g-1kg</td><td class="p-3 border">Family size, bulk products</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border">XXL</td><td class="p-3 border">250 × 350 + 120mm</td><td class="p-3 border">1-2kg</td><td class="p-3 border">Large format, pet food</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-sm text-neutral-600">Custom sizes available. Minimum order may vary for non-standard dimensions.</p>
      `
    },
    {
      id: 'flatbottom',
      title: 'Flat Bottom Bag Sizes',
      content: `
        <p class="mb-4">Premium format with excellent shelf presence and five printable panels:</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-primary-100">
                <th class="p-3 text-left border">Size</th>
                <th class="p-3 text-left border">Dimensions (W×H×D)</th>
                <th class="p-3 text-left border">Capacity</th>
                <th class="p-3 text-left border">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white"><td class="p-3 border">Small</td><td class="p-3 border">95 × 190 × 55mm</td><td class="p-3 border">100-200g</td><td class="p-3 border">Premium coffee, tea</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border">Medium</td><td class="p-3 border">120 × 250 × 70mm</td><td class="p-3 border">250-400g</td><td class="p-3 border">Coffee (12oz), specialty foods</td></tr>
              <tr class="bg-white"><td class="p-3 border">Large</td><td class="p-3 border">150 × 320 × 90mm</td><td class="p-3 border">500g-1kg</td><td class="p-3 border">Bulk coffee, pet food</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 'calculate',
      title: 'How to Calculate Your Size',
      content: `
        <p class="mb-4">Not sure what size you need? Use this simple method:</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Step 1: Measure Your Product</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Determine the volume or weight of your product</li>
              <li>• Note the product density (powder vs. chunky)</li>
              <li>• Consider any rigid inserts (like valves)</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Step 2: Add Headspace</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Allow 20-30% extra space above product</li>
              <li>• Needed for zipper closure and sealing</li>
              <li>• Ensures pouch stands properly when filled</li>
            </ul>
          </div>
        </div>
        <div class="bg-primary-50 p-6 rounded-xl mt-6">
          <h4 class="font-semibold text-primary-700 mb-2">Quick Tip:</h4>
          <p class="text-neutral-700 text-sm">Send us your product (or detailed measurements) and we'll recommend the optimal size. We can also send sample sizes for you to test fill.</p>
        </div>
      `
    },
    {
      id: 'custom',
      title: 'Custom Sizes',
      content: `
        <p class="mb-4">Can't find the perfect size? We offer custom dimensions:</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Custom Size Requirements</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Minimum width: 50mm</li>
              <li>• Maximum width: 500mm</li>
              <li>• Minimum height: 80mm</li>
              <li>• Maximum height: 500mm</li>
              <li>• Custom gusset depths available</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">MOQ for Custom Sizes</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Digital printing: 500 pieces</li>
              <li>• Plate printing: 5,000 pieces</li>
              <li>• Complex shapes may vary</li>
              <li>• Lead time: +1-2 weeks</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'conversion',
      title: 'Unit Conversion Reference',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <h4 class="font-semibold mb-4">Common Conversions:</h4>
          <div class="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p class="font-semibold text-primary-700 mb-2">Millimeters to Inches:</p>
              <ul class="space-y-1 text-neutral-700">
                <li>100mm = 3.94 inches</li>
                <li>150mm = 5.91 inches</li>
                <li>200mm = 7.87 inches</li>
                <li>250mm = 9.84 inches</li>
                <li>300mm = 11.81 inches</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-primary-700 mb-2">Weight Equivalents:</p>
              <ul class="space-y-1 text-neutral-700">
                <li>100g = 3.5 oz</li>
                <li>250g = 8.8 oz</li>
                <li>500g = 1.1 lb</li>
                <li>1kg = 2.2 lb</li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'Do you have standard sizes or is everything custom?',
      answer: 'We have a range of standard sizes that cover most needs with lower MOQs. Custom sizes are available for orders of 500+ pieces (digital) or 5,000+ pieces (plate printing).'
    },
    {
      question: 'How do I know what size fits my product?',
      answer: 'Send us your product details (weight, dimensions, density) or a sample. We\'ll recommend sizes and can send blank pouches for you to test fill before ordering printed versions.'
    },
    {
      question: 'Are dimensions exact or approximate?',
      answer: 'Dimensions are nominal with standard manufacturing tolerance of ±1-2mm. Critical applications should account for this variance.'
    },
    {
      question: 'Can I get the same product in multiple sizes?',
      answer: 'Absolutely! Many brands offer the same product in different sizes (sample, regular, family size). Each size can share design elements while using size-specific artwork.'
    }
  ];

  return (
    <SEOPageLayout
      title="Pouch Size Guide | Dimensions & Capacity Reference"
      description="Complete pouch size guide with dimensions and capacity for stand-up pouches, flat bottom bags, and more. Find the perfect size for your product."
      keywords={['pouch sizes', 'packaging dimensions', 'bag size guide', 'pouch capacity', 'custom pouch sizes']}
      heroTitle="Pouch Size Guide"
      heroSubtitle="Find the perfect pouch size for your product. Complete dimension guide with capacity references and custom size options."
      heroImage={heroImage}
      sections={sections}
      introSummary="Selecting the right pouch size ensures optimal product presentation and cost efficiency. Use this comprehensive guide to understand standard sizes and find the perfect fit for your product."
      faqs={faqs}
      ctaTitle="Need Help Choosing?"
      ctaDescription="Send us your product details and we'll recommend the optimal size."
      ctaButtonText="Get Size Recommendation"
      ctaButtonUrl="/contact"
    />
  );
};

export default SizeGuidePage;
