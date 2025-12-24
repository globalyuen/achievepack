import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Leaf, Recycle, Box, Shield, Printer, Star, Lock, Eye, Wrench, CheckCircle, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { SortableOptionsTable, CLOSURE_OPTIONS, SURFACE_OPTIONS, ADDITIONAL_FEATURES, BARRIER_OPTIONS } from '../../components/SortableOptionsTable';

const AllOptionsPage = () => {
  const { t } = useTranslation();
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; index: number } | null>(null);
  const [surfaceEnlarged, setSurfaceEnlarged] = useState<{ src: string; index: number } | null>(null);
  const [recloseEnlarged, setRecloseEnlarged] = useState<{ src: string; index: number } | null>(null);
  const [barrierEnlarged, setBarrierEnlarged] = useState<{ src: string; index: number } | null>(null);
  
  const pouchShapeImages = [
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp', title: 'Structure Overview', desc: 'Complete pouch structure breakdown showing layers and construction' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_size_closure_options_7735113.webp', title: 'Size & Closure Options', desc: 'Various sizes from 50g to 2kg with matching closure types' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_brand_closing_6612868.webp', title: 'Brand Collection', desc: 'Premium branded pouches showcasing printing quality' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp', title: 'Base Structure Detail', desc: 'Flat bottom design for optimal shelf stability' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp', title: '3-Side Seal Pouch', desc: 'Simple pillow-style pouch, ideal for samples and sachets' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp', title: 'Quad Seal Gusset', desc: 'Four side gussets for maximum volume and premium look' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp', title: 'Spout Pouch', desc: 'Pour spout design for liquids and semi-liquids' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_irregular_shape_closeup_0205542.webp', title: 'Custom Shape Die-Cut', desc: 'Unique shapes to match your brand identity' },
    { src: '/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp', title: 'Roll Stock Film', desc: 'Printed film rolls for automated form-fill-seal machines' },
  ];
  
  const surfaceImages = [
    { src: '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp', title: 'Six Premium Finishes', desc: 'Overview of all available surface treatments' },
    { src: '/imgs/surface/ads/a_gloss_finish_detail_5685549.webp', title: 'Gloss Finish Detail', desc: 'High-shine reflective surface for vibrant colors' },
    { src: '/imgs/surface/ads/a_gloss_pouch_correct_5078762.webp', title: 'Gloss Pouch Example', desc: 'Full gloss lamination for eye-catching shelf presence' },
    { src: '/imgs/surface/ads/a_matte_finish_detail_7483118.webp', title: 'Matte Finish Detail', desc: 'Smooth non-reflective surface for elegant look' },
    { src: '/imgs/surface/ads/a_matte_pouch_correct_6361818.webp', title: 'Matte Pouch Example', desc: 'Sophisticated matte finish for premium brands' },
    { src: '/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp', title: 'Metallic Gold', desc: 'Luxurious gold metallic effect for premium products' },
    { src: '/imgs/surface/ads/a_softtouch_pouch_correct_7961783.webp', title: 'Soft Touch Finish', desc: 'Velvety tactile surface for sensory appeal' },
    { src: '/imgs/surface/ads/a_embossed_navy_9933981.webp', title: 'Embossed Texture', desc: 'Raised patterns for dimensional brand experience' },
    { src: '/imgs/surface/ads/a_foil_green_charcoal_7632386.webp', title: 'Foil Stamping', desc: 'Hot foil accents in gold, silver, or custom colors' },
    { src: '/imgs/surface/ads/a_standup_pouches_main_6878547.webp', title: 'Stand-Up Collection', desc: 'Various finishes on standing pouch format' },
  ];
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!enlargedImage) return;
    let newIndex = direction === 'prev' ? enlargedImage.index - 1 : enlargedImage.index + 1;
    if (newIndex < 0) newIndex = pouchShapeImages.length - 1;
    if (newIndex >= pouchShapeImages.length) newIndex = 0;
    setEnlargedImage({ src: pouchShapeImages[newIndex].src, index: newIndex });
  };
  
  const navigateSurface = (direction: 'prev' | 'next') => {
    if (!surfaceEnlarged) return;
    let newIndex = direction === 'prev' ? surfaceEnlarged.index - 1 : surfaceEnlarged.index + 1;
    if (newIndex < 0) newIndex = surfaceImages.length - 1;
    if (newIndex >= surfaceImages.length) newIndex = 0;
    setSurfaceEnlarged({ src: surfaceImages[newIndex].src, index: newIndex });
  };
  
  const recloseImages = [
    { src: '/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp', title: 'Reclosure Options Overview', desc: 'Complete range of resealable closure solutions' },
    { src: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp', title: 'Closure Categories', desc: 'Four main closure types for different applications' },
    { src: '/imgs/reclose/ads/a_reclosure_decision_guide_7052390.webp', title: 'Closure Selection Guide', desc: 'How to choose the right closure for your product' },
    { src: '/imgs/reclose/ads/a_reclosure_value_proposition_0710400.webp', title: 'Closure Benefits', desc: 'Consumer convenience and product freshness advantages' },
    { src: '/imgs/reclose/ads/a_reclosure_comparison_scene_9769566.webp', title: 'Closure Comparison', desc: 'Side-by-side comparison of different closure types' },
    { src: '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp', title: 'Press-to-Close Zipper', desc: 'Standard resealable zipper for easy open/close' },
    { src: '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp', title: 'Spout Cap Detail', desc: 'Screw cap spout for controlled pouring of liquids' },
    { src: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp', title: 'Tin Tie Closure', desc: 'Classic tin tie for coffee bags and bakery products' },
    { src: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp', title: 'Degassing Valve', desc: 'One-way valve for fresh roasted coffee and fermented products' },
  ];
  
  const navigateReclose = (direction: 'prev' | 'next') => {
    if (!recloseEnlarged) return;
    let newIndex = direction === 'prev' ? recloseEnlarged.index - 1 : recloseEnlarged.index + 1;
    if (newIndex < 0) newIndex = recloseImages.length - 1;
    if (newIndex >= recloseImages.length) newIndex = 0;
    setRecloseEnlarged({ src: recloseImages[newIndex].src, index: newIndex });
  };
  
  const barrierImages = [
    { src: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', title: 'Barrier Technology Overview', desc: 'Eco-friendly barrier solutions for product protection' },
    { src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', title: 'Barrier Level Chart', desc: 'Low, Medium, High, and Max barrier comparison' },
    { src: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp', title: 'Kraft Paper Barriers', desc: 'Paper-based options with low to medium barrier' },
    { src: '/imgs/barrier/ads/a_kraft_high_max_4456348.webp', title: 'High Barrier Kraft', desc: 'Enhanced kraft with high oxygen barrier properties' },
    { src: '/imgs/barrier/ads/a_transparent_options_3839456.webp', title: 'Transparent Barriers', desc: 'Clear films with various barrier levels for product visibility' },
    { src: '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp', title: 'Metallic Barrier Detail', desc: 'Aluminum-free metallic look with maximum barrier' },
    { src: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', title: 'Application Scenarios', desc: 'Matching barrier levels to product shelf life needs' },
    { src: '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp', title: 'Eco Barrier Value', desc: 'Sustainable barrier solutions without compromising protection' },
    { src: '/imgs/barrier/ads/a_closing_consultation_6756895.webp', title: 'Expert Consultation', desc: 'Get personalized barrier recommendations from our team' },
  ];
  
  const navigateBarrier = (direction: 'prev' | 'next') => {
    if (!barrierEnlarged) return;
    let newIndex = direction === 'prev' ? barrierEnlarged.index - 1 : barrierEnlarged.index + 1;
    if (newIndex < 0) newIndex = barrierImages.length - 1;
    if (newIndex >= barrierImages.length) newIndex = 0;
    setBarrierEnlarged({ src: barrierImages[newIndex].src, index: newIndex });
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
          
          {/* Image Cards with Descriptions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {pouchShapeImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setEnlargedImage({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
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
          <p>Choose barrier level based on your <strong>shelf life requirements</strong>. Click any image to enlarge:</p>
          
          {/* Image Cards with Descriptions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {barrierImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setBarrierEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
          
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
          <p>Keep products fresh with the right closure. Click any image to enlarge:</p>
          
          {/* Image Cards with Descriptions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {recloseImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setRecloseEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
          
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
          <p>Make your packaging stand out with premium finishes. Click any image to enlarge:</p>
          
          {/* Image Cards with Descriptions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {surfaceImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSurfaceEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
          
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
            alt={pouchShapeImages[enlargedImage.index]?.title || 'Enlarged view'} 
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{pouchShapeImages[enlargedImage.index]?.title}</p>
            <p className="text-sm text-neutral-300">{pouchShapeImages[enlargedImage.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{enlargedImage.index + 1} / {pouchShapeImages.length}</p>
          </div>
        </div>
      )}
      
      {/* Surface Image Enlargement Modal */}
      {surfaceEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSurfaceEnlarged(null)}
        >
          <button 
            onClick={() => setSurfaceEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateSurface('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <img 
            src={surfaceEnlarged.src} 
            alt={surfaceImages[surfaceEnlarged.index]?.title || 'Enlarged view'} 
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateSurface('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{surfaceImages[surfaceEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{surfaceImages[surfaceEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{surfaceEnlarged.index + 1} / {surfaceImages.length}</p>
          </div>
        </div>
      )}
      
      {/* Reclose Image Enlargement Modal */}
      {recloseEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setRecloseEnlarged(null)}
        >
          <button 
            onClick={() => setRecloseEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateReclose('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <img 
            src={recloseEnlarged.src} 
            alt={recloseImages[recloseEnlarged.index]?.title || 'Enlarged view'} 
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateReclose('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{recloseImages[recloseEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{recloseImages[recloseEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{recloseEnlarged.index + 1} / {recloseImages.length}</p>
          </div>
        </div>
      )}
      
      {/* Barrier Image Enlargement Modal */}
      {barrierEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setBarrierEnlarged(null)}
        >
          <button 
            onClick={() => setBarrierEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateBarrier('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <img 
            src={barrierEnlarged.src} 
            alt={barrierImages[barrierEnlarged.index]?.title || 'Enlarged view'} 
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateBarrier('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{barrierImages[barrierEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{barrierImages[barrierEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{barrierEnlarged.index + 1} / {barrierImages.length}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AllOptionsPage;
