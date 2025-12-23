import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Leaf, Recycle, Box, Shield, Printer, Star, Lock, Eye, Wrench, CheckCircle, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { SortableOptionsTable, CLOSURE_OPTIONS, SURFACE_OPTIONS, ADDITIONAL_FEATURES, BARRIER_OPTIONS } from '../../components/SortableOptionsTable';

const AllOptionsPage = () => {
  const { t } = useTranslation();
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; index: number } | null>(null);
  
  const pouchShapeImages = [
    '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_size_closure_options_7735113.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_brand_closing_6612868.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_irregular_shape_closeup_0205542.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp',
  ];
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!enlargedImage) return;
    let newIndex = direction === 'prev' ? enlargedImage.index - 1 : enlargedImage.index + 1;
    if (newIndex < 0) newIndex = pouchShapeImages.length - 1;
    if (newIndex >= pouchShapeImages.length) newIndex = 0;
    setEnlargedImage({ src: pouchShapeImages[newIndex], index: newIndex });
  };

  const heroImage = '/imgs/seo-photos/a_all_options_catalog_showcase_9383936.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Complete Packaging Options Catalog',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack offers a comprehensive range of sustainable packaging options to meet every product need.</strong> From materials to finishes, closures to printing—explore all the ways you can customize your eco-friendly pouches.
          </p>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Endless Customization</h4>
            <p className="text-sm">Our packaging specialists help you choose the perfect combination for your specific product requirements. Every option can be mixed and matched.</p>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from our eco-friendly material options:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800">Compostable Materials</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>Kraft Paper + PLA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>White Kraft + PLA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>NatureFlex™ (cellulose)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>PBAT/PLA blends</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>Home compostable films</span>
                </li>
              </ul>
              <div className="mt-3 bg-emerald-200 text-emerald-800 text-xs px-2 py-1 rounded-full inline-block">
                EN 13432, ASTM D6400 Certified
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Recycle className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Recyclable Materials</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>Mono-PE (polyethylene)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>Mono-PP (polypropylene)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>PCR (post-consumer recycled)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>Bio-PE (sugarcane-based)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span>Paper-based structures</span>
                </li>
              </ul>
              <div className="mt-3 bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full inline-block">
                GRS Certified Available
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-1">Need Guidance?</h4>
            <p className="text-sm text-amber-700">Our team recommends the best material based on your product type, shelf life requirements, and sustainability goals.</p>
          </div>
        </div>
      )
    },
    {
      id: 'pouchstyles',
      title: 'Pouch Styles',
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our complete range of pouch shapes and styles. Click any image to enlarge:</p>
          
          {/* Main Image Display */}
          <div className="relative bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <img 
              src={pouchShapeImages[0]} 
              alt="Pouch Styles Overview" 
              className="w-full h-64 md:h-80 object-cover cursor-pointer"
              onClick={() => setEnlargedImage({ src: pouchShapeImages[0], index: 0 })}
            />
            <button 
              onClick={() => setEnlargedImage({ src: pouchShapeImages[0], index: 0 })}
              className="absolute bottom-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ZoomIn className="h-5 w-5 text-neutral-700" />
            </button>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2">
            {pouchShapeImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setEnlargedImage({ src: img, index })}
                className="aspect-square bg-white rounded-lg border-2 border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-md group"
              >
                <img src={img} alt={`Pouch Style ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </button>
            ))}
          </div>
          
          <div className="bg-primary-50 border border-primary-200 p-4 rounded-xl">
            <h4 className="font-semibold text-primary-800 mb-1">Custom Shapes Available</h4>
            <p className="text-sm text-primary-700">Need a unique shape? We offer custom die-cut pouches for special requirements.</p>
          </div>
        </div>
      )
    },
    {
      id: 'barrier',
      title: 'Barrier Levels',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose barrier level based on your <strong>shelf life requirements</strong>:</p>
          
          <SortableOptionsTable
            options={BARRIER_OPTIONS}
            title="All Barrier Options - Sortable & Filterable"
            categoryColor="purple"
            type="barrier"
          />
        </div>
      )
    },
    {
      id: 'closures',
      title: 'Closure & Reclosure Options',
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Keep products fresh with the right closure:</p>
          
          <SortableOptionsTable
            options={CLOSURE_OPTIONS}
            title="All Closure Options - Sortable & Filterable"
            categoryColor="blue"
            type="closure"
          />
        </div>
      )
    },
    {
      id: 'printing',
      title: 'Printing & Surface Finishes',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Make your packaging stand out with premium finishes:</p>
          
          <SortableOptionsTable
            options={SURFACE_OPTIONS}
            title="All Surface Finishes - Sortable & Filterable"
            categoryColor="amber"
            type="surface"
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Printing Methods</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-blue-700">Digital Printing</span>
                  <p className="text-neutral-600 text-xs">Low MOQ, unlimited colors, variable data</p>
                </div>
                <div>
                  <span className="font-medium text-blue-700">Plate Printing</span>
                  <p className="text-neutral-600 text-xs">Higher volumes, Pantone matching, up to 10 colors</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-100 p-5 rounded-xl">
              <h4 className="font-semibold text-neutral-800 mb-3">Special Effects Available</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs border">Spot UV</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border">Embossing</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border">Foil Stamping</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border">Holographic</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border">Metallic Inks</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs border">Window Patches</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Additional Features',
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Enhance functionality with these add-ons:</p>
          
          <SortableOptionsTable
            options={ADDITIONAL_FEATURES}
            title="Additional Features - with Images"
            categoryColor="green"
            type="additional"
          />
          
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="h-4 w-4 text-amber-600" />
                <h4 className="font-semibold text-amber-800 text-sm">Functionality</h4>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700">
                <li>• Degassing valves</li>
                <li>• Pour spouts</li>
                <li>• Handle holes</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-4 w-4 text-blue-600" />
                <h4 className="font-semibold text-blue-800 text-sm">Visibility</h4>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700">
                <li>• Clear windows</li>
                <li>• Frosted windows</li>
                <li>• Full clear body</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-red-600" />
                <h4 className="font-semibold text-red-800 text-sm">Security</h4>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700">
                <li>• Tamper-evident seals</li>
                <li>• Child-resistant closures</li>
                <li>• QR traceability</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const p = 'seoPages.pages.allOptions';

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <>
      <SEOPageLayout
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['packaging options', 'pouch customization', 'barrier levels', 'zipper options', 'printing finishes', 'sustainable packaging features']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage={heroImage}
        sections={sections}
        introSummary={t(`${p}.introSummary`)}
        faqs={faqs}
        ctaTitle={t(`${p}.cta.title`)}
        ctaDescription={t(`${p}.cta.description`)}
        ctaButtonText={t(`${p}.cta.button`)}
        ctaButtonUrl="/contact"
      />
      
      {/* Image Enlargement Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button 
            onClick={() => setEnlargedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <img 
            src={enlargedImage.src} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {enlargedImage.index + 1} / {pouchShapeImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default AllOptionsPage;
