import { useTranslation } from 'react-i18next';
import { Ruler, Box, Maximize2, Calculator, Settings, ArrowRightLeft, CheckCircle, Eye, X } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useState } from 'react';

const SizeGuidePage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroImage = '/imgs/seo-photos/a_size_reference_dimensions_7506199.webp';

  // Size comparison images with cola can reference
  const standUpSizes = [
    { size: 'XXXS', image: '/imgs/store/size/stand-up/xxxs.webp', capacity: '10-25g' },
    { size: 'XXS', image: '/imgs/store/size/stand-up/xxs.webp', capacity: '25-50g' },
    { size: 'XS', image: '/imgs/store/size/stand-up/xs.webp', capacity: '50-75g' },
    { size: 'S', image: '/imgs/store/size/stand-up/s.webp', capacity: '75-150g' },
    { size: 'L', image: '/imgs/store/size/stand-up/l.webp', capacity: '250-500g' },
    { size: 'XL', image: '/imgs/store/size/stand-up/xl.webp', capacity: '500g-1kg' },
    { size: 'XXL', image: '/imgs/store/size/stand-up/xxl.webp', capacity: '1-2kg' },
  ];

  const flatBottomSizes = [
    { size: 'XXXS', image: '/imgs/store/size/flat-bottom/xxxs.webp', capacity: '25-50g' },
    { size: 'XXS', image: '/imgs/store/size/flat-bottom/xxs.webp', capacity: '50-100g' },
    { size: 'XS', image: '/imgs/store/size/flat-bottom/xs.webp', capacity: '100-200g' },
    { size: 'S', image: '/imgs/store/size/flat-bottom/s.webp', capacity: '200-350g' },
    { size: 'L', image: '/imgs/store/size/flat-bottom/l.webp', capacity: '500g-1kg' },
    { size: 'XL', image: '/imgs/store/size/flat-bottom/xl.webp', capacity: '1-1.5kg' },
    { size: 'XXL', image: '/imgs/store/size/flat-bottom/xxl.webp', capacity: '1.5-2.5kg' },
  ];
  
  const sections = [
    {
      id: 'overview',
      title: 'Understanding Pouch Dimensions',
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Choosing the right pouch size is crucial for product presentation, shipping efficiency, and cost optimization.</strong> This guide explains how pouch dimensions work and helps you select the perfect size for your product.
          </p>
          
          <div className="bg-primary-50 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">How We Measure Pouches</h4>
            <p className="text-sm mb-3">Dimensions are expressed as <strong>Width × Height + Gusset</strong></p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">Width</span>
                <p className="text-xs text-neutral-600 mt-1">Measured flat, left to right edge</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">Height</span>
                <p className="text-xs text-neutral-600 mt-1">Bottom seal to top seal/zipper</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">Gusset</span>
                <p className="text-xs text-neutral-600 mt-1">Fold depth creating volume</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-comparison',
      title: 'Visual Size Comparison',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            <strong>See how our pouches compare to a standard cola can (330ml)</strong> - the perfect reference for understanding real-world sizes.
          </p>
          
          {/* Stand-Up Pouches Photo Grid */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <Box className="h-5 w-5 text-primary-600" />
              Stand-Up Pouches vs Cola Can
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {standUpSizes.map((item) => (
                <div 
                  key={`standup-${item.size}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-primary-300"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-50">
                    <img 
                      src={item.image} 
                      alt={`Stand-up pouch size ${item.size} compared to cola can`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{item.size}</span>
                      <span className="text-white/90 text-xs bg-white/20 px-2 py-0.5 rounded-full">{item.capacity}</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-1.5 shadow-lg">
                      <Eye className="h-4 w-4 text-primary-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Flat Bottom Bags Photo Grid */}
          <div className="mt-8">
            <h4 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <Maximize2 className="h-5 w-5 text-primary-600" />
              Flat Bottom Bags vs Cola Can
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {flatBottomSizes.map((item) => (
                <div 
                  key={`flatbottom-${item.size}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-emerald-300"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-50">
                    <img 
                      src={item.image} 
                      alt={`Flat bottom bag size ${item.size} compared to cola can`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{item.size}</span>
                      <span className="text-white/90 text-xs bg-white/20 px-2 py-0.5 rounded-full">{item.capacity}</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-1.5 shadow-lg">
                      <Eye className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <p className="text-sm text-amber-800">
              <strong>Reference:</strong> Standard cola can height is 12.2cm (4.8"). Click any image to view full size.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'standup',
      title: 'Stand-Up Pouch Sizes',
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our most popular format. These sizes cover most retail and e-commerce needs:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-purple-800">XS</span>
                <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full">25-50g</span>
              </div>
              <p className="text-sm font-medium text-purple-700">80 × 130 + 50mm</p>
              <p className="text-xs text-neutral-600 mt-1">Samples, single-serve, travel</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-800">S</span>
                <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">50-100g</span>
              </div>
              <p className="text-sm font-medium text-blue-700">100 × 150 + 60mm</p>
              <p className="text-xs text-neutral-600 mt-1">Tea, small snacks, spices</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-800">M</span>
                <span className="text-xs bg-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">100-250g</span>
              </div>
              <p className="text-sm font-medium text-emerald-700">140 × 200 + 80mm</p>
              <p className="text-xs text-neutral-600 mt-1">Coffee 250g, nuts, granola</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-amber-800">L</span>
                <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded-full">250-500g</span>
              </div>
              <p className="text-sm font-medium text-amber-700">160 × 240 + 90mm</p>
              <p className="text-xs text-neutral-600 mt-1">Standard retail, pet treats</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-orange-800">XL</span>
                <span className="text-xs bg-orange-200 text-orange-700 px-2 py-0.5 rounded-full">500g-1kg</span>
              </div>
              <p className="text-sm font-medium text-orange-700">200 × 300 + 100mm</p>
              <p className="text-xs text-neutral-600 mt-1">Family size, bulk products</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-red-800">XXL</span>
                <span className="text-xs bg-red-200 text-red-700 px-2 py-0.5 rounded-full">1-2kg</span>
              </div>
              <p className="text-sm font-medium text-red-700">250 × 350 + 120mm</p>
              <p className="text-xs text-neutral-600 mt-1">Large format, pet food</p>
            </div>
          </div>
          
          <p className="text-sm text-neutral-500 italic mt-4">Custom sizes available. MOQ may vary for non-standard dimensions.</p>
        </div>
      )
    },
    {
      id: 'flatbottom',
      title: 'Flat Bottom Bag Sizes',
      icon: <Maximize2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Premium format with excellent shelf presence and <strong>five printable panels</strong>:</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-4 bg-gradient-to-r from-primary-50 to-white p-4 rounded-xl border border-primary-100">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-700">S</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-primary-800">Small</span>
                  <span className="text-sm text-neutral-600">95 × 190 × 55mm</span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">100-200g</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Premium coffee, tea sachets</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-white p-4 rounded-xl border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-700">M</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-emerald-800">Medium</span>
                  <span className="text-sm text-neutral-600">120 × 250 × 70mm</span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">250-400g</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Coffee 12oz, specialty foods</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-white p-4 rounded-xl border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-amber-700">L</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-amber-800">Large</span>
                  <span className="text-sm text-neutral-600">150 × 320 × 90mm</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">500g-1kg</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Bulk coffee, pet food bags</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'calculate',
      title: 'How to Calculate Your Size',
      icon: <Calculator className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Not sure what size you need? Follow this <strong>simple 2-step method</strong>:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-blue-800">Measure Your Product</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Determine volume or weight</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Note product density (powder vs chunky)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Consider rigid inserts (like valves)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-emerald-800">Add Headspace</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Allow 20-30% extra space above product</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Needed for zipper closure and sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Ensures pouch stands properly when filled</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-1">Pro Tip</h4>
            <p className="text-sm text-amber-700">Send us your product (or detailed measurements) and we will recommend the optimal size. We can also send sample sizes for you to test fill.</p>
          </div>
        </div>
      )
    },
    {
      id: 'custom',
      title: 'Custom Sizes',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Cannot find the perfect size? We offer <strong>fully custom dimensions</strong>:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Size Limits</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Width Range:</span>
                  <span className="font-medium">50mm - 500mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Height Range:</span>
                  <span className="font-medium">80mm - 500mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Gusset:</span>
                  <span className="font-medium">Custom depths OK</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-5 rounded-xl border border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-3">MOQ Requirements</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Digital Printing:</span>
                  <span className="font-medium text-primary-700">500 pieces</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Plate Printing:</span>
                  <span className="font-medium text-primary-700">5,000 pieces</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Lead Time:</span>
                  <span className="font-medium text-primary-700">+1-2 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'conversion',
      title: 'Unit Conversion Reference',
      icon: <ArrowRightLeft className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Quick reference for <strong>metric to imperial conversions</strong>:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Millimeters → Inches</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>100mm</span><span className="font-medium text-blue-700">= 3.94 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>150mm</span><span className="font-medium text-blue-700">= 5.91 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>200mm</span><span className="font-medium text-blue-700">= 7.87 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>250mm</span><span className="font-medium text-blue-700">= 9.84 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>300mm</span><span className="font-medium text-blue-700">= 11.81 in</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">Grams → Ounces/Pounds</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>100g</span><span className="font-medium text-emerald-700">= 3.5 oz</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>250g</span><span className="font-medium text-emerald-700">= 8.8 oz</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>500g</span><span className="font-medium text-emerald-700">= 1.1 lb</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>1kg</span><span className="font-medium text-emerald-700">= 2.2 lb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
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
    <>
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

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Size comparison full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default SizeGuidePage;
