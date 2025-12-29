import React, { useState } from 'react'
import { Ruler, Box, Maximize2, Package, Calculator, Settings, ArrowRightLeft, CheckCircle, Eye, X, Layers, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import SortableSizesTable, { STAND_UP_SIZES, FLAT_BOTTOM_SIZES, THREE_SIDE_SEAL_SIZES, ALL_SIZES } from '../../components/SortableSizesTable'

const PouchSizingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const heroImage = '/imgs/seo-photos/a_size_reference_dimensions_7506199.webp'

  const sections = [
    {
      id: 'all-sizes-overview',
      title: 'All Stand Up Pouch Sizes at a Glance',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <SortableSizesTable
          sizes={STAND_UP_SIZES}
          title="Stand Up Pouch Sizes - Sortable & Filterable"
          categoryColor="blue"
          productLink="/store/product/eco-standup"
        />
      )
    },
    {
      id: 'flat-bottom-sizes',
      title: 'All Flat Bottom Bag Sizes',
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <SortableSizesTable
          sizes={FLAT_BOTTOM_SIZES}
          title="Flat Bottom Bag Sizes - Sortable & Filterable"
          categoryColor="amber"
          productLink="/packaging/flat-bottom-bags"
        />
      )
    },
    {
      id: 'understanding-dimensions',
      title: 'Understanding Pouch Dimensions',
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Choosing the right pouch size is crucial for product presentation, shipping efficiency, and cost optimization.</strong> This guide explains how pouch dimensions work.
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
                <p className="text-xs text-neutral-600 mt-1">Fold depth creating volume (stand up pouches)</p>
              </div>
            </div>
          </div>
          
          {/* Pouch Shape Reference Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Pouch Shape Reference</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch with bottom gusset" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Stand-Up Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" 
                alt="Flat bottom bag with box-shaped base" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Flat Bottom Bag"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp" 
                alt="Three side seal flat pouch" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="3-Side Seal Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" 
                alt="Side gusset pouch for coffee" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption="Side Gusset"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">Stand Up Pouch</h5>
              <p className="text-sm text-blue-700">Uses bottom gusset to stand upright on shelves. Best for retail display.</p>
              <p className="text-xs text-blue-600 mt-2">Example: 150 × 200 + 80mm</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h5 className="font-semibold text-amber-800 mb-2">Flat Bottom Bag</h5>
              <p className="text-sm text-amber-700">Box-shaped bottom for premium shelf presence and more volume.</p>
              <p className="text-xs text-amber-600 mt-2">Example: 120 × 250 × 70mm</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'size-by-product',
      title: 'Size Selection by Product Type',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Not sure what size you need? Here's our recommendation based on your product:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☕</span>
                <h4 className="font-semibold text-amber-800">Coffee</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>100g / 3.5oz</span>
                  <span className="font-medium text-amber-700">XS</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>250g / 8.8oz</span>
                  <span className="font-medium text-amber-700">S or L</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>500g / 1lb</span>
                  <span className="font-medium text-amber-700">L or XL</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>1kg / 2.2lb</span>
                  <span className="font-medium text-amber-700">XL or XXL</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🥜</span>
                <h4 className="font-semibold text-green-800">Nuts & Snacks</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>50g Sample</span>
                  <span className="font-medium text-green-700">XXS</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>100g Retail</span>
                  <span className="font-medium text-green-700">XS or S</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>250g Standard</span>
                  <span className="font-medium text-green-700">S or L</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>500g Family</span>
                  <span className="font-medium text-green-700">L or XL</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🐕</span>
                <h4 className="font-semibold text-blue-800">Pet Food</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>100g Treats</span>
                  <span className="font-medium text-blue-700">XS or S</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>500g Pack</span>
                  <span className="font-medium text-blue-700">L</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>1kg Bag</span>
                  <span className="font-medium text-blue-700">XL</span>
                </div>
                <div className="flex justify-between bg-white/70 px-3 py-1.5 rounded">
                  <span>2kg+ Bulk</span>
                  <span className="font-medium text-blue-700">XXL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'calculate-size',
      title: 'How to Calculate Your Size',
      icon: <Calculator className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Follow this <strong>simple 2-step method</strong> to determine your ideal pouch size:</p>
          
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
            <h4 className="font-semibold text-amber-800 mb-1">💡 Pro Tip</h4>
            <p className="text-sm text-amber-700">Send us your product (or detailed measurements) and we will recommend the optimal size. We can also send sample sizes for you to test fill.</p>
          </div>
        </div>
      )
    },
    {
      id: 'unit-conversion',
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
    },
    {
      id: 'custom-sizes',
      title: 'Custom Sizes Available',
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
                  <span className="font-medium text-primary-700">1,000 pieces</span>
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
          
          <div className="text-center pt-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition"
            >
              Request Custom Size Quote
              <Ruler className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )
    },
  ]

  const faqs = [
    { 
      question: 'What size pouch do I need for 250g of coffee?', 
      answer: 'For 250g (8.8oz) of roasted coffee beans, we recommend Size S (150 × 200 + 80mm) or Size L (180 × 250 + 80mm). Size L gives more headspace for a valve and premium look. For ground coffee, which packs more densely, Size S is usually sufficient.' 
    },
    { 
      question: 'How do I measure my product to find the right size?', 
      answer: 'Place your product in a measuring container or bag and note the volume it occupies. Add 20-30% for headspace (needed for sealing and zipper closure). Our size guide shows approximate capacity in grams and milliliters for each size.' 
    },
    { 
      question: 'Can I order custom sizes not listed here?', 
      answer: 'Yes! We offer fully custom dimensions from 50mm to 500mm in width and height. Custom sizes have a minimum order of 1,000 pieces for digital printing and 5,000 for plate printing. Contact us with your specifications for a quote.' 
    },
    { 
      question: 'What is the difference between Stand Up and Flat Bottom pouches?', 
      answer: 'Stand Up Pouches have a bottom gusset that expands when filled, allowing the pouch to stand upright. They are cost-effective and popular for snacks, coffee, and pet treats. Flat Bottom Bags have a box-shaped bottom with more volume and premium shelf presence, ideal for specialty coffee and premium products.' 
    },
    { 
      question: 'How accurate are the capacity estimates?', 
      answer: 'Capacity depends on product density. Light fluffy products (like puffed snacks) need larger sizes, while dense products (like nuts or powder) need smaller ones. Our estimates are based on average product densities. We recommend ordering samples to test fill before large orders.' 
    }
  ]

  const relatedLinks = [
    { title: "Shop Eco Stand Up Pouches", url: "/store/product/eco-standup", description: "Browse all stand up sizes" },
    { title: "Shop Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-shaped bags" },
    { title: "Materials Guide", url: "/materials/pcr", description: "Learn about eco materials" },
    { title: "Contact for Custom", url: "/contact", description: "Request custom dimensions" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Pouch Sizing Guide | All Sizes with Images & Dimensions"
        description="Complete pouch sizing guide with visual size comparison, dimensions in mm and inches, and capacity in grams. Find the perfect size for coffee, snacks, pet food, and more. XXXS to XXL sizes available."
        keywords={[
          'pouch sizes',
          'packaging dimensions',
          'bag size guide',
          'pouch capacity',
          'custom pouch sizes',
          'stand up pouch sizes',
          'coffee bag sizes',
          'flexible packaging dimensions'
        ]}
        heroTitle="Pouch Sizing Guide"
        heroSubtitle="All Sizes with Real Photos & Dimensions"
        heroImage={heroImage}
        heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
        heroLogoAlt="Eco Packaging"
        sections={sections}
        introSummary="Find the perfect pouch size for your product with our comprehensive visual guide. Compare all sizes side-by-side with real photos, exact dimensions in mm and inches, and capacity in grams. From sample sachets (XXXS) to bulk bags (XXL), we have sizes for every product."
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order?"
        ctaDescription="Choose your size and order eco-friendly printed pouches with low MOQ starting from 1,000 pieces."
        ctaButtonText="Shop Pouches Now"
        ctaButtonUrl="/store/product/eco-standup"
        canonicalUrl="https://achievepack.com/knowledge/pouch-sizing"
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
  )
}

export default PouchSizingPage
