import React, { useState } from 'react';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle, Check, HelpCircle, User } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const ConventionalPrintedSachetsPage: React.FC = () => {
  const [activeImgTab, setActiveImgTab] = useState<number>(0);

  const images = [
    {
      src: '/imgs/store/products/small-sachet-conventional-thumbnail-1.png',
      alt: 'Textured Off-White Silk Paper Sachet with Gold Foil Hot Stamping',
      label: 'Gold Stamping (烫金)'
    },
    {
      src: '/imgs/store/products/small-sachet-conventional-thumbnail-2.png',
      alt: 'Blue Textured Silk Paper Sachet with High-Resolution Digital Printing',
      label: 'Digital Color Print (数码彩印)'
    },
    {
      src: '/imgs/store/products/small-sachet-conventional-thumbnail-3.png',
      alt: 'Textured Pink Silk Paper Sachet with Traditional Calligraphy Black Ink Print',
      label: 'Calligraphy/Traditional (传统彩印)'
    }
  ];

  const sections = [
    {
      id: 'overview',
      title: 'Overview & Material Structure',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-base leading-relaxed">
            Our <strong>Small Pouch – Conventional Material</strong> (8x8cm) is a flat, 3-side seal pouch engineered for brand sample runs, single-serve powders, cosmetic lotions, teas, and specialty ingredients.
          </p>
          <p>
            While the exterior utilizes premium textured <strong>Silk Paper</strong> or <strong>Kraft Paper</strong> to convey a hand-crafted, high-end organic aesthetic, the interior features a robust <strong>Conventional Plastic Lining</strong> (Multi-Layer laminate structure including pure aluminum foil and a polyethylene inner sealant layer).
          </p>
          
          <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 mt-4 space-y-2">
            <h4 className="font-bold text-primary-900 mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary-600" />
              Why Conventional Plastic Lining?
            </h4>
            <p className="text-xs text-primary-800 leading-relaxed">
              Unlike compostable bio-plastics which exhibit medium gas barriers, the conventional laminated <strong>PET / AL / PE</strong> structure provides an <strong>absolute gas, light, and moisture barrier</strong> (OTR and WVTR &lt; 0.1). This guarantees a 12–24 month shelf life, completely preventing oxidation, hardening of powder contents, or leakage of liquid formulations.
            </p>
            <div className="text-[10px] text-amber-700 font-bold bg-amber-50 border border-amber-200 p-2 rounded-lg mt-2">
              ⚠️ Note: This material structure contains standard fossil-fuel plastic layers and aluminum foil, meaning it is not compostable or recyclable in standard paper bins. It should be disposed of in general waste streams.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'custom-pricing',
      title: 'Custom Printing Options & Price Matrix',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>We support three premium custom printing options for the 8x8cm Small Sachet based on your order run requirements. Choose the process that matches your design and volume target:</p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {/* Hot Stamping Card */}
            <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 border border-amber-200 text-amber-800">
                  Hot Stamping (烫金)
                </span>
                <h4 className="font-bold text-neutral-900 mt-2">Metallic Accent Prints</h4>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Best for simple text or clean logo branding. Flat package prices include plate fees & double-sided single-color stamping.
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>500 pcs:</span>
                    <span className="text-neutral-900 font-bold">$159.60 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1,000 pcs:</span>
                    <span className="text-neutral-900 font-bold">$210.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2,000 pcs:</span>
                    <span className="text-neutral-900 font-bold">$285.60 USD</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-200/60 font-semibold">
                ✓ Setup: **$0 Free**<br />
                ✓ MOQ: **500 pcs**
              </div>
            </div>

            {/* Digital Color Printing Card */}
            <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 border border-indigo-200 text-indigo-800">
                  Digital Color (数码彩印)
                </span>
                <h4 className="font-bold text-neutral-900 mt-2">Vibrant Photo Prints</h4>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Excellent for complex artworks, colorful designs, or photo graphics. Setup fees completely waived.
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>1,000 pcs:</span>
                    <span className="text-neutral-900 font-bold">$231.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2,000 pcs:</span>
                    <span className="text-neutral-900 font-bold">$336.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3,000 pcs:</span>
                    <span className="text-neutral-900 font-bold">$441.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5,000 pcs:</span>
                    <span className="text-neutral-900 font-bold">$651.00 USD</span>
                  </div>
                  <div className="flex justify-between text-indigo-700">
                    <span>10k+ pcs:</span>
                    <span className="font-black">$0.1092 / pc</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-200/60 font-semibold">
                ✓ Setup: **$0 Waived**<br />
                ✓ Sample fee: **$147.00 USD**
              </div>
            </div>

            {/* Traditional Gravure Card */}
            <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 border border-emerald-200 text-emerald-800">
                  Traditional Gravure (传统彩印)
                </span>
                <h4 className="font-bold text-neutral-900 mt-2">Bulk Commercial Runs</h4>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Best unit rates for commercial distribution. Intended for long-term production with high color precision.
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>50,000 pcs:</span>
                    <span className="text-emerald-700 font-bold">$1,890.00 USD</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>Unit price:</span>
                    <span className="font-bold">$0.0378 / pc</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-200/60 font-semibold">
                ✓ Setup: **$126.00 USD / color**<br />
                ✓ MOQ: **50,000 pcs**
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-800 leading-relaxed font-semibold">
            ✨ **Optional Process Customizations**:
            <ul className="list-disc pl-5 mt-1 space-y-0.5">
              <li>**Round Corners (圆角)**: Available at **+$0.0336 USD / sachet** for all ordering tiers.</li>
              <li>**High-Volume Print thickness**: For Digital Print runs of 5,000+ pieces, thickness is automatically upgraded to a thick **13.5丝 / 135 microns** for free.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'unprinted-skus',
      title: 'Unprinted Stock SKUs Pricing',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            If you need unprinted blank sachets for testing, hand-labeling, or small batches, we supply pre-packaged stock carton sets. All stock unprinted items are calculated at a flat rate of <strong>$0.30 USD per sachet</strong>:
          </p>

          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mt-4">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900 text-sm">Available Unprinted Options (8x8cm)</h4>
            </div>
            <div className="overflow-x-auto text-xs">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-neutral-600 uppercase">SKU / Color Classification</th>
                    <th className="px-4 py-3 text-center font-bold text-neutral-600 uppercase">Quantity</th>
                    <th className="px-4 py-3 text-right font-bold text-neutral-600 uppercase">Unit Price</th>
                    <th className="px-4 py-3 text-right font-bold text-neutral-600 uppercase">Total Pack Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-150 font-semibold">
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">Silk & Kraft 9 Colors Sample Pack (蚕丝和牛皮9色各1个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">9 pcs total</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$2.70 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">Off-White Silk Paper (米白色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">Black Silk Paper (黑色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">Pink Silk Paper (粉红色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">Gold Silk Paper (金色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">Blue Silk Paper (蓝色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">Light Yellow Silk Paper (浅黄色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">Teal/Cyan Silk Paper (青色 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">Yellow Kraft Paper (黄色 牛皮纸100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">White Kraft Paper (白色 牛皮纸100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">White Cotton Paper (白色棉纸 100个)</td>
                    <td className="px-4 py-3 text-center text-neutral-500">100 pcs</td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Product Aesthetics & Visual Gallery',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Our sachets are manufactured using strict high-definition alignment. Toggle between the tabs below to view the premium textures and prints:</p>

          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
            {/* Tabs Header */}
            <div className="flex border-b bg-neutral-50 text-xs font-bold">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgTab(idx)}
                  className={`flex-1 py-3 px-2 border-r last:border-r-0 transition ${
                    activeImgTab === idx ? 'bg-white border-b-2 border-primary-600 text-primary-700 font-black' : 'text-neutral-500 hover:bg-neutral-100'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
            
            {/* Dynamic Image View */}
            <div className="p-4 flex flex-col items-center">
              <div className="relative max-w-md w-full aspect-square border border-neutral-150 rounded-lg overflow-hidden bg-neutral-50">
                <img 
                  src={images[activeImgTab].src} 
                  alt={images[activeImgTab].alt} 
                  className="w-full h-full object-cover p-2"
                />
              </div>
              <p className="text-[11px] text-neutral-500 font-bold text-center mt-3 leading-relaxed">
                📸 {images[activeImgTab].alt}. Subtle *achievepack.com* branding is printed on the lower edge.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: 'What is the material composition of these sachets?',
      answer: 'The Small Sachets utilize a composite paper-plastic laminate structure. The exterior is premium textured Silk Paper or Kraft Paper (70g-90g), while the interior is laminated with a high-barrier aluminum foil (AL) layer and a conventional food-grade Polyethylene (PE) sealant layer. This combination provides a premium tactile texture with absolute protection.'
    },
    {
      question: 'Are these sachets eco-friendly or compostable?',
      answer: 'Because these conventional sachets use standard plastic and aluminum foil laminates to achieve extreme moisture/gas protection, they are not compostable or recyclable in paper bins. For certified home or industrial compostable flexible packaging, please browse our PLA or Cello-Kraft biopolymer products.'
    },
    {
      question: 'What is the MOQ and production lead time?',
      answer: 'The minimum order quantity (MOQ) depends on the print method: Hot Stamping starts at 500 pieces, Digital Color Printing starts at 1,000 pieces, and Traditional Gravure printing starts at 50,000 pieces. Production takes 15–20 business days including global express air delivery.'
    },
    {
      question: 'Can I request rounded corners on the sachets?',
      answer: 'Yes, round corner (圆角) trimming is fully supported as an add-on processing option for all print methods and order volumes, priced at a small surcharge of +$0.0336 USD per unit. This eliminates sharp corner punctures during bulk master carton transport.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <SEOPageLayout
        title="Conventional Material Small Sachets (8x8cm) with Premium Silk Paper Shell | Achieve Pack"
        description="Calculate printing pricing matrices for conventional plastic-lined small sachets. Low MOQ hot stamping and digital color options with high-barrier aluminum laminated cores."
        keywords={[
          'small sachets packaging',
          'conventional printed sachet',
          'silk paper sachet',
          'kraft paper sachets',
          'low moq printed pouches'
        ]}
        canonicalUrl="https://achievepack.com/materials/conventional-printed-sachets"
        heroTitle="Small Sachets: Conventional Material"
        heroSubtitle="High-Barrier Laminated Structures with Premium Silk Paper Visual Styling"
        heroImage="/imgs/store/products/small-sachet-conventional-thumbnail-1.png"
        heroImageAlt="Small sachet conventional packaging options and printing pricing scales"
        introSummary="Get flat, 3-side seal small sachets (8x8cm) with a hand-crafted silk or kraft paper feel. Laminated with a high-barrier conventional plastic inner lining to guarantee 12+ months shelf stability for powders, coffee, and cosmetics. MOQ starts at just 500pcs for gold hot stamping and 1,000pcs for digital color prints."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        ctaTitle="Configure Your Sachets Today"
        ctaDescription="Select your print method, choose round corner trims, and calculate live quotes for small sachet packaging runs."
        ctaButtonText="Configure Sachets"
        ctaButtonUrl="/store/product/small-sachet-conventional"
        heroBgColor="#0f172a"
      />
    </div>
  );
};

export default ConventionalPrintedSachetsPage;
