import { useTranslation } from 'react-i18next';
import { Package, Leaf, Recycle, Box, Shield, Layers, Printer, Star, Lock, Eye, Wrench, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

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
              <img src="/imgs/pouch-shape/stand-up-zipper-pouch.webp" alt="Stand-Up Pouch" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Stand-Up Pouch</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Most popular for retail</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
              <img src="/imgs/pouch-shape/flat-bottom-pouch.webp" alt="Flat Bottom Bag" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Flat Bottom Bag</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Premium, 5 panels</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <img src="/imgs/pouch-shape/side-gusset-pouch.webp" alt="Side Gusset Bag" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Side Gusset Bag</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Traditional coffee style</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <img src="/imgs/pouch-shape/spout-pouch.webp" alt="Spout Pouch" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Spout Pouch</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">For liquids & purees</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <img src="/imgs/pouch-shape/3-side-seal-pouch.webp" alt="Flat Pouch" className="h-20 mx-auto mb-3 object-contain" />
              <h4 className="font-semibold text-center">Flat Pouch</h4>
              <p className="text-neutral-500 text-xs text-center mt-1">Sachets & samples</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <img src="/imgs/pouch-shape/quad-seal-pouch.webp" alt="Quad Seal Bag" className="h-20 mx-auto mb-3 object-contain" />
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-700 font-bold">L</span>
                </div>
                <h4 className="font-semibold text-green-800">Low Barrier</h4>
                <div className="text-2xl font-bold text-green-600 my-1">3-6 mo</div>
                <p className="text-xs text-neutral-600">Dry goods, grains, paper-based</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-700 font-bold">M</span>
                </div>
                <h4 className="font-semibold text-blue-800">Medium Barrier</h4>
                <div className="text-2xl font-bold text-blue-600 my-1">6-12 mo</div>
                <p className="text-xs text-neutral-600">Snacks, nuts, dried fruits</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-700 font-bold">H</span>
                </div>
                <h4 className="font-semibold text-purple-800">High Barrier</h4>
                <div className="text-2xl font-bold text-purple-600 my-1">12-24 mo</div>
                <p className="text-xs text-neutral-600">Coffee, tea, sensitive products</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-700 font-bold">MAX</span>
                </div>
                <h4 className="font-semibold text-orange-800">Maximum</h4>
                <div className="text-2xl font-bold text-orange-600 my-1">24+ mo</div>
                <p className="text-xs text-neutral-600">Pharma, oxygen-sensitive</p>
              </div>
            </div>
          </div>
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
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-5 rounded-xl border border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-3">Zipper Types</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span className="text-sm">Standard press-to-close</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span className="text-sm">Child-resistant zipper</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span className="text-sm">Slider zipper (easy open)</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span className="text-sm">Pocket zipper (below seal)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">Other Closures</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-neutral-600" />
                  <span className="text-sm">Tin-tie (wire closure)</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-neutral-600" />
                  <span className="text-sm">Spout caps (various sizes)</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-neutral-600" />
                  <span className="text-sm">Velcro-style closure</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-neutral-600" />
                  <span className="text-sm">Tear notch (non-reclosable)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'printing',
      title: 'Printing & Finishing',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Make your packaging stand out:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
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
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Surface Finishes</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white px-3 py-1.5 rounded text-center">Matte</div>
                <div className="bg-white px-3 py-1.5 rounded text-center">Gloss</div>
                <div className="bg-white px-3 py-1.5 rounded text-center">Soft-touch</div>
                <div className="bg-white px-3 py-1.5 rounded text-center">Natural Kraft</div>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-100 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-neutral-800 mb-3">Special Effects Available</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Spot UV</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Embossing</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Foil Stamping</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Holographic</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Metallic Inks</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Window Patches</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">Tactile Varnish</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs border">QR Codes</span>
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
          
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="h-4 w-4 text-amber-600" />
                <h4 className="font-semibold text-amber-800 text-sm">Functionality</h4>
              </div>
              <ul className="text-xs space-y-1 text-neutral-700">
                <li>• Degassing valves</li>
                <li>• Pour spouts</li>
                <li>• Hang holes</li>
                <li>• Easy-tear lines</li>
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
                <li>• Product cutouts</li>
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
                <li>• Heat-shrink bands</li>
                <li>• QR traceability</li>
              </ul>
            </div>
          </div>
        </div>
      )
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
