import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const PrintingTypesPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_printing_types_overview_4017325.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Printing Methods Explained',
      content: `
        <p class="mb-4">The right printing method depends on your order quantity, design complexity, and budget. Achieve Pack offers two main printing technologies, each with distinct advantages.</p>
        <p>Understanding these options helps you make the best choice for your brand.</p>
      `
    },
    {
      id: 'digital',
      title: 'Digital Printing',
      content: `
        <div class="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl mb-6">
          <h4 class="font-semibold text-xl text-primary-700 mb-2">Best For: Small Runs & High Customization</h4>
          <p class="text-neutral-700">Ideal for orders of 100-5,000 pieces, multiple SKUs, or variable data.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-green-600">✓ Advantages</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Low MOQ: Start at 100 pieces</li>
              <li>• No plate costs (saves $500-1,500)</li>
              <li>• Unlimited colors at no extra cost</li>
              <li>• CMYK + White printing</li>
              <li>• Variable data (batch codes, QR codes)</li>
              <li>• Fast turnaround (2-3 weeks)</li>
              <li>• Easy design updates between runs</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-orange-600">△ Considerations</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Higher per-unit cost at large volumes</li>
              <li>• Color matching (CMYK simulation, not Pantone)</li>
              <li>• Limited to certain material types</li>
              <li>• Maximum print width constraints</li>
            </ul>
          </div>
        </div>
        <div class="bg-neutral-100 p-6 rounded-xl">
          <h4 class="font-semibold mb-2">Ideal Use Cases:</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
            <div>• Market testing</div>
            <div>• Seasonal editions</div>
            <div>• Multi-SKU launches</div>
            <div>• Startups and small brands</div>
            <div>• Personalized packaging</div>
            <div>• Frequent design changes</div>
          </div>
        </div>
      `
    },
    {
      id: 'plate',
      title: 'Plate (Flexographic) Printing',
      content: `
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-6">
          <h4 class="font-semibold text-xl text-blue-700 mb-2">Best For: Large Volumes & Brand Consistency</h4>
          <p class="text-neutral-700">Ideal for orders of 5,000+ pieces where per-unit cost matters.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-green-600">✓ Advantages</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Lowest per-unit cost at scale</li>
              <li>• True Pantone color matching</li>
              <li>• Up to 10 spot colors</li>
              <li>• Special inks (metallic, fluorescent)</li>
              <li>• Excellent color consistency</li>
              <li>• Works with all material types</li>
              <li>• Ideal for long-term production</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-orange-600">△ Considerations</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li>• Plate setup cost ($500-1,500)</li>
              <li>• Higher MOQ (5,000+ pieces)</li>
              <li>• Longer lead time (+1-2 weeks)</li>
              <li>• Design changes require new plates</li>
              <li>• Each color = separate plate</li>
            </ul>
          </div>
        </div>
        <div class="bg-neutral-100 p-6 rounded-xl">
          <h4 class="font-semibold mb-2">Ideal Use Cases:</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
            <div>• Established products</div>
            <div>• National retail distribution</div>
            <div>• Brand-critical colors</div>
            <div>• Long production runs</div>
            <div>• CPG companies</div>
            <div>• Repeat orders</div>
          </div>
        </div>
      `
    },
    {
      id: 'comparison',
      title: 'Side-by-Side Comparison',
      content: `
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-primary-100">
                <th class="p-3 text-left border">Feature</th>
                <th class="p-3 text-left border">Digital Printing</th>
                <th class="p-3 text-left border">Plate Printing</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white"><td class="p-3 border font-medium">Minimum Order</td><td class="p-3 border">100 pieces</td><td class="p-3 border">5,000 pieces</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border font-medium">Setup Cost</td><td class="p-3 border">None</td><td class="p-3 border">$500-1,500</td></tr>
              <tr class="bg-white"><td class="p-3 border font-medium">Colors</td><td class="p-3 border">CMYK + White (unlimited)</td><td class="p-3 border">Up to 10 spot colors</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border font-medium">Color Matching</td><td class="p-3 border">CMYK simulation</td><td class="p-3 border">True Pantone</td></tr>
              <tr class="bg-white"><td class="p-3 border font-medium">Lead Time</td><td class="p-3 border">2-3 weeks</td><td class="p-3 border">4-6 weeks</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border font-medium">Design Changes</td><td class="p-3 border">Easy, no extra cost</td><td class="p-3 border">New plates needed</td></tr>
              <tr class="bg-white"><td class="p-3 border font-medium">Variable Data</td><td class="p-3 border">Yes</td><td class="p-3 border">No</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border font-medium">Best For</td><td class="p-3 border">Small runs, testing</td><td class="p-3 border">Large volumes</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: 'finishes',
      title: 'Surface Finishes & Effects',
      content: `
        <p class="mb-4">Both printing methods can be combined with various finishes:</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Standard Finishes</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li><strong>Matte:</strong> Soft, non-reflective surface. Premium feel.</li>
              <li><strong>Gloss:</strong> Shiny, vibrant colors. Eye-catching.</li>
              <li><strong>Soft-touch:</strong> Velvety texture. Luxury products.</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Premium Effects</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li><strong>Spot UV:</strong> Selective glossy areas on matte background</li>
              <li><strong>Foil stamping:</strong> Metallic accents (gold, silver, colors)</li>
              <li><strong>Embossing:</strong> Raised tactile elements</li>
              <li><strong>Holographic:</strong> Rainbow/security effects</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'artwork',
      title: 'Artwork Requirements',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl">
          <h4 class="font-semibold text-primary-700 mb-3">File Specifications:</h4>
          <ul class="space-y-2 text-neutral-700 text-sm">
            <li><strong>Format:</strong> PDF, AI, or PSD (editable layers preferred)</li>
            <li><strong>Resolution:</strong> 300 DPI minimum for images</li>
            <li><strong>Color Mode:</strong> CMYK for digital, spot colors for plate</li>
            <li><strong>Bleed:</strong> 3mm on all sides</li>
            <li><strong>Safe Zone:</strong> Keep important elements 5mm from edges</li>
            <li><strong>Fonts:</strong> Outlined/converted to paths</li>
          </ul>
        </div>
        <p class="mt-4 text-sm text-neutral-600">Don't have print-ready artwork? We offer design services to prepare your files.</p>
      `
    }
  ];

  const faqs = [
    {
      question: 'Which printing method should I choose?',
      answer: 'For orders under 5,000 pieces, digital is usually more cost-effective. For 5,000+, compare total costs including plates. If you need exact Pantone matching or special inks, plate printing is required.'
    },
    {
      question: 'Can I switch from digital to plate printing later?',
      answer: 'Yes! Many customers start with digital for market testing, then switch to plate printing once they have consistent demand. We\'ll help you transition smoothly.'
    },
    {
      question: 'How accurate is digital color matching?',
      answer: 'Digital printing simulates Pantone colors using CMYK, which is very close but not exact. For most applications it\'s excellent. Brand-critical colors (like specific logo colors) may benefit from plate printing.'
    },
    {
      question: 'What\'s included in plate costs?',
      answer: 'Plate costs cover the creation of printing plates for each color in your design. Once made, plates can be reused for repeat orders. We store plates for 2 years at no charge.'
    }
  ];

  return (
    <SEOPageLayout
      title="Printing Types Explained | Digital vs Plate Printing"
      description="Compare digital and plate printing for flexible packaging. Understand MOQs, costs, color options, and which method suits your needs."
      keywords={['digital printing', 'plate printing', 'flexographic printing', 'packaging printing', 'Pantone colors', 'CMYK printing']}
      heroTitle="Printing Types Explained"
      heroSubtitle="Understand your printing options. Compare digital and plate printing to choose the right method for your packaging project."
      heroImage={heroImage}
      sections={sections}
      introSummary="Achieve Pack offers digital printing for low MOQ orders and plate (flexographic) printing for high-volume production. Each method has distinct advantages—this guide helps you choose the right option."
      faqs={faqs}
      ctaTitle="Get a Printing Quote"
      ctaDescription="Tell us about your project and we'll recommend the best printing option."
      ctaButtonText="Request Quote"
      ctaButtonUrl="/contact"
    />
  );
};

export default PrintingTypesPage;
