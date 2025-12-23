import { useTranslation } from 'react-i18next';
import { Package, Leaf, Recycle, Box, Shield, Printer, Star, Lock, Eye, Wrench, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { SortableOptionsTable, CLOSURE_OPTIONS, SURFACE_OPTIONS, ADDITIONAL_FEATURES, BARRIER_OPTIONS } from '../../components/SortableOptionsTable';

const AllOptionsPage = () => {
  const { t } = useTranslation();

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
          <p>Select the perfect pouch style for your product:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-colors">
              <img src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" alt="Stand-Up Pouch" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Stand-Up Pouch</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Most popular for retail</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
              <img src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" alt="Flat Bottom Bag" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Flat Bottom Bag</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Premium, 5 panels</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <img src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp" alt="Side Gusset Bag" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Side Gusset Bag</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Traditional coffee style</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <img src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp" alt="Spout Pouch" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Spout Pouch</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">For liquids & purees</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <img src="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp" alt="Flat Pouch" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Flat Pouch</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Sachets & samples</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <img src="/imgs/store/pouch%20shape/quad-seal.webp" alt="Quad Seal Bag" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Quad Seal Bag</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Modern square look</p>
            </div>
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
  );
};

export default AllOptionsPage;
