import { useTranslation } from 'react-i18next';
import { Printer, Cpu, Layers, ArrowLeftRight, Sparkles, FileImage, CheckCircle, AlertCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const PrintingTypesPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_printing_types_overview_4017325.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Printing Methods Explained',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>The right printing method depends on your order quantity, design complexity, and budget.</strong> Achieve Pack offers two main printing technologies, each with distinct advantages.
          </p>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Understanding your options helps you make the best choice for your brand</h4>
            <p className="text-sm">Let us guide you through the key differences and help you decide.</p>
          </div>
        </div>
      )
    },
    {
      id: 'digital',
      title: 'Digital Printing',
      icon: <Cpu className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-5 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <h4 className="font-bold text-xl text-blue-800">Best For: Small Runs & High Customization</h4>
            </div>
            <p className="text-blue-700">Ideal for orders of 100-5,000 pieces, multiple SKUs, or variable data.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Advantages</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Low MOQ:</strong> Start at 100 pieces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>No plate costs</strong> (saves $500-1,500)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Unlimited colors</strong> at no extra cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>CMYK + White printing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Variable data (batch codes, QR codes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Fast turnaround</strong> (2-3 weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Easy design updates between runs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Considerations</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Higher per-unit cost at large volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>CMYK simulation (not exact Pantone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Limited to certain material types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Maximum print width constraints</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Ideal Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-blue-200 text-blue-700">Market testing</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-blue-200 text-blue-700">Seasonal editions</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-blue-200 text-blue-700">Multi-SKU launches</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-blue-200 text-blue-700">Startups</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-blue-200 text-blue-700">Personalized packaging</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-blue-200 text-blue-700">Frequent design changes</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'plate',
      title: 'Plate (Flexographic) Printing',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-5 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="h-6 w-6 text-purple-600" />
              <h4 className="font-bold text-xl text-purple-800">Best For: Large Volumes & Brand Consistency</h4>
            </div>
            <p className="text-purple-700">Ideal for orders of 5,000+ pieces where per-unit cost matters.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Advantages</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Lowest per-unit cost</strong> at scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>True Pantone</strong> color matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Up to 10 spot colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Special inks (metallic, fluorescent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Excellent color consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Works with all material types</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ideal for long-term production</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">Considerations</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Plate setup cost ($500-1,500)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Higher MOQ (5,000+ pieces)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Longer lead time (+1-2 weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Design changes require new plates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">△</span>
                  <span>Each color = separate plate</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">Ideal Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-purple-200 text-purple-700">Established products</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-purple-200 text-purple-700">National retail</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-purple-200 text-purple-700">Brand-critical colors</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-purple-200 text-purple-700">Long production runs</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-purple-200 text-purple-700">CPG companies</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border border-purple-200 text-purple-700">Repeat orders</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Side-by-Side Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Quick comparison to help you decide:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 text-center mb-4">Digital Printing</h4>
              <div className="space-y-3">
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">MOQ</span>
                  <span className="font-semibold text-blue-700">100 pieces</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Setup Cost</span>
                  <span className="font-semibold text-blue-700">$0</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Colors</span>
                  <span className="font-semibold text-blue-700">Unlimited</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Color Matching</span>
                  <span className="font-semibold text-blue-700">CMYK</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Lead Time</span>
                  <span className="font-semibold text-blue-700">2-3 weeks</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Variable Data</span>
                  <span className="font-semibold text-green-600">Yes</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 text-center mb-4">Plate Printing</h4>
              <div className="space-y-3">
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">MOQ</span>
                  <span className="font-semibold text-purple-700">5,000 pieces</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Setup Cost</span>
                  <span className="font-semibold text-purple-700">$500-1,500</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Colors</span>
                  <span className="font-semibold text-purple-700">Up to 10</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Color Matching</span>
                  <span className="font-semibold text-purple-700">True Pantone</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Lead Time</span>
                  <span className="font-semibold text-purple-700">4-6 weeks</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-2 rounded-lg">
                  <span className="text-neutral-600 text-sm">Variable Data</span>
                  <span className="font-semibold text-red-500">No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'finishes',
      title: 'Surface Finishes & Effects',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Both printing methods can be combined with various <strong>finishes</strong>:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Standard Finishes</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-neutral-100">
                  <span className="font-medium">Matte</span>
                  <p className="text-xs text-neutral-500">Soft, non-reflective. Premium feel.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-neutral-100">
                  <span className="font-medium">Gloss</span>
                  <p className="text-xs text-neutral-500">Shiny, vibrant colors. Eye-catching.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-neutral-100">
                  <span className="font-medium">Soft-touch</span>
                  <p className="text-xs text-neutral-500">Velvety texture. Luxury products.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3">Premium Effects</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-amber-100">
                  <span className="font-medium text-amber-700">Spot UV</span>
                  <p className="text-xs text-neutral-500">Selective glossy areas on matte</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-100">
                  <span className="font-medium text-amber-700">Foil Stamping</span>
                  <p className="text-xs text-neutral-500">Metallic accents (gold, silver)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-100">
                  <span className="font-medium text-amber-700">Embossing</span>
                  <p className="text-xs text-neutral-500">Raised tactile elements</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-100">
                  <span className="font-medium text-amber-700">Holographic</span>
                  <p className="text-xs text-neutral-500">Rainbow/security effects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'artwork',
      title: 'Artwork Requirements',
      icon: <FileImage className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Prepare your files correctly for best results:</p>
          
          <div className="bg-primary-50 p-5 rounded-xl border border-primary-200 mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">File Specifications</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm"><strong>Format:</strong> PDF, AI, or PSD</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm"><strong>Resolution:</strong> 300 DPI min</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm"><strong>Color:</strong> CMYK or Spot</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm"><strong>Bleed:</strong> 3mm all sides</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm"><strong>Safe Zone:</strong> 5mm from edges</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm"><strong>Fonts:</strong> Outlined/paths</span>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-1">Need Design Help?</h4>
            <p className="text-sm text-amber-700">We offer design services to prepare your files for printing. Just send us your brand assets!</p>
          </div>
        </div>
      )
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
