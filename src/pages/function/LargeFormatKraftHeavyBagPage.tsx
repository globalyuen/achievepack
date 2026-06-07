import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Package, Shield, Layers, Eye, Award, Users, Globe, FileCheck, Building2, Sparkles, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Info, Table, HelpCircle, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images for the heavy-duty Kraft bags
const heavyBagGallery = [
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png', title: 'Achieve Pack® Natural Kraft Heavy-Duty Sack', desc: 'Upright product view showing organic natural Kraft outer texture' },
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png', title: 'Comprehensive Size Lineup', desc: 'Lineup showing Small, Medium, Large, and Extra Large size ranges' },
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-3.png', title: 'Multi-Wall Lamination Detail', desc: 'Detailed material layers showing 120gsm Kraft outer + 140μm PP woven inner' },
  { src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png', title: 'Massive Size Scale Reference', desc: 'Handheld scale reference showcasing the bag\'s robust structure for organic bulk retail' }
]

const LargeFormatKraftHeavyBagPage: React.FC = () => {
  const { t } = useTranslation()

  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = heavyBagGallery.length - 1
    if (newIndex >= heavyBagGallery.length) newIndex = 0
    setGalleryEnlarged({ src: heavyBagGallery[newIndex].src, index: newIndex })
  }

  // --- B2C / DTC pouch.eco Custom Section Components ---
  const b2cSections = [
    {
      id: 'quick-answer',
      title: 'Quick Answer: The Premium Bridge for Eco Bulk Retail',
      icon: <Info className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            For premium organic food, specialty coffee, and high-end pet treat startups, standard industrial bags are a disaster. Single-layer plastic bags look cheap and sweat moisture, while pure paper bags break under heavy weight. 
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
            <p className="text-lg font-black uppercase font-['JetBrains_Mono'] mb-2">
              💪 Puncture-Proof Multi-Wall Structural Hybrid
            </p>
            <p className="text-sm font-medium leading-relaxed">
              Our **Large Format Kraft Heavy Sacks** combine an organic, FSC-certified 120gsm brown Kraft paper outer shell with a high-tensile 140-micron inner PP woven lamination. This multi-wall hybrid yields a 100% puncture-proof, moisture-sealed sack capable of carrying **2.5 kg to 25 kg** payload without sagging, non-pilling, or tearing.
            </p>
          </div>
          
          {/* Comparison Matrix Grid */}
          <div className="mt-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
            <div className="bg-[#00FFFF] border-b-4 border-black p-3 flex items-center gap-2">
              <Table className="h-5 w-5 text-black" />
              <span className="font-black uppercase tracking-wider text-xs font-['JetBrains_Mono'] text-black">Technical Parameters Matrix</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-100 border-b-2 border-black font-['JetBrains_Mono'] font-bold uppercase text-neutral-800">
                    <th className="p-3 border-r border-black">Bag Structure</th>
                    <th className="p-3 border-r border-black">Max Payload</th>
                    <th className="p-3 border-r border-black">Tensile Index</th>
                    <th className="p-3 border-r border-black">Moisture Barrier</th>
                    <th className="p-3 border-r border-black">Aesthetic Grade</th>
                    <th className="p-3">Startup MOQ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black font-medium text-neutral-800">
                  <tr className="bg-[#D4FF00]/10">
                    <td className="p-3 border-r border-black font-bold">Kraft Multi-Wall + PP Woven</td>
                    <td className="p-3 border-r border-black">25 kg (55 lbs)</td>
                    <td className="p-3 border-r border-black">★★★★★ (Ultra-High)</td>
                    <td className="p-3 border-r border-black font-bold text-green-700">Excellent (Moisture Sealed)</td>
                    <td className="p-3 border-r border-black font-bold text-indigo-700">Premium Organic (FSC Kraft)</td>
                    <td className="p-3 font-bold text-green-800">500 pcs (Stock Sizes)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-black text-neutral-500">Pure Kraft Multi-Wall</td>
                    <td className="p-3 border-r border-black text-neutral-500">10 kg (22 lbs)</td>
                    <td className="p-3 border-r border-black text-neutral-500">★★★☆☆ (Moderate)</td>
                    <td className="p-3 border-r border-black text-neutral-500">Poor (Humidity Absorbing)</td>
                    <td className="p-3 border-r border-black text-neutral-500">Organic Rustic</td>
                    <td className="p-3 text-neutral-500">10,000 pcs</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-3 border-r border-black text-neutral-500">Standard Poly Woven Bag</td>
                    <td className="p-3 border-r border-black text-neutral-500">25 kg (55 lbs)</td>
                    <td className="p-3 border-r border-black text-neutral-500">★★★★☆ (High)</td>
                    <td className="p-3 border-r border-black text-neutral-500">Moderate (Weave Gaps)</td>
                    <td className="p-3 border-r border-black text-neutral-500">Industrial / Low-End</td>
                    <td className="p-3 text-neutral-500">50,000 pcs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lamination-details',
      title: 'Engineered For Puncture-Proof Core Integrity',
      icon: <Shield className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            DTC brands shipping dry pet treats, wholesale roasted coffee beans, agricultural seed kits, or artisanal charcoal need a bag that handles transit abuses while sealing aroma. 
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">Four-Layer Hybrid Materials Architecture</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Our heavy-duty structure utilizes advanced co-extrusion lamination techniques to merge four layers into a single high-strength composite film:
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>Layer 1: FSC Natural Kraft Paper (120gsm)</strong> — Delivers premium organic tactility, clean minimalist surface for stamps/labeling, and eco-certified brand positioning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>Layer 2: High-Strength PP Woven Liner (140μm)</strong> — Intertwined high-tensile polypropylene grid that prevents stretching, ballooning, or bursting under 25kg loads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>Layer 3: Inner Water-Resistant PE Layer</strong> — Seals grease, oils, and damp ambient moisture completely inside or outside, securing absolute freshness.</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-3.png', index: 2 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-3.png" alt="Kraft multi-wall heavy bag material lamination detail" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">Click to enlarge</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'scale-reference',
      title: 'Breathtaking Size Scale & Handheld Reference',
      icon: <Layers className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            One of the hardest elements of buying online is understanding the physical volume. Our natural Kraft multi-wall pouches expand dynamically to maximize bulk storage while sitting gracefully on retail shelves.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png', index: 3 })}
              className="block border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png" alt="Handheld scale reference showing massive size of Kraft heavy-duty bag" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-800 text-center font-bold border-t-4 border-black">Click to enlarge</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-black text-neutral-900 font-['JetBrains_Mono'] uppercase">Expandable M-Folded Side Gussets</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Equipped with deep, side-panel M-folded gussets that expand proportionally as you fill them. Once packed with your dry grains, dog kibble, or organic soil, the bag sits completely flat-bottomed, eliminating the messy slouching of traditional plastic sacks.
              </p>
              <div className="p-4 bg-[#00FFFF] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                <h5 className="font-black uppercase text-xs tracking-wider mb-1 font-['JetBrains_Mono']">📦 Startup-Friendly 500-Unit MOQ</h5>
                <p className="text-xs font-semibold leading-relaxed">
                  Test your formula with zero risk. While B2B giants demand 20,000-unit runs for multi-wall sacks, pouch.eco supports scaling wellness and cleaning startups with low-MOQ plain stock sizes starting at only **500 pieces**!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical-authorship',
      title: 'Startup Scaling Tips: Engineering Advice from Ryan Wong',
      icon: <Award className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src="/imgs/ryan-avatar.webp" alt="Ryan Wong Co-Founder" className="w-20 h-20 rounded-full border-4 border-black bg-[#D4FF00] object-cover flex-shrink-0" onError={(e: any) => {e.target.style.display='none'}} />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-black uppercase text-lg text-neutral-900">Ryan Wong</span>
                  <span className="bg-[#10b981] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">Packaging Expert</span>
                </div>
                <p className="text-xs text-neutral-500 font-['JetBrains_Mono']">Co-Founder & Chief Packaging Engineer, 14+ Years Industrial Expertise</p>
                <p className="text-sm text-neutral-700 leading-relaxed mt-2">
                  "When sealing heavy bags on standard startup assembly lines, ensure your heat sealer is capable of high-density heat penetration. Because of our double-wall thick combination of Kraft paper and high-strength PP woven material, standard low-voltage hand sealers will fail. I highly recommend a continuous band sealer running at 180°C - 210°C to achieve a fully moisture-locked, commercial grade hermetic weld."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  // --- B2B / Enterprise achievepack.com Custom Section Components ---
  const b2bSections = [
    {
      id: 'overview',
      title: 'Heavy-Duty Multi-Wall Kraft Side Gusset Sacks',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>The ultimate B2B packaging hybrid: raw organic Kraft look + high-tensile industrial strength</strong> — Achieve Pack® Multi-Wall side gusset sacks are engineered for heavy commercial B2B applications, safely carrying payloads from 2.5 kg to 25 kg without stretching or tearing.
            </p>
            <p className="text-neutral-700">
              RawOrganicKraftLook+IndustrialGradeHigh-TensileHybridCore — Achieve Pack® Multi-Wall Kraft Heavy SacksProfessionalForLarge-FormatIndustrialB2BApplicationDesign。Multi-LayerLaminationFilmStructure，Capable of carrying2.5 kg - 25 kgWeightOfBulkCargo，EnsureSafeTransportationNotRupture。"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png', index: 0 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png" alt="Achieve Pack Natural Kraft Heavy Sack" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
            </button>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">Industrial Strength Multi-Wall Structure</h3>
              <p className="text-neutral-700">
                Crafted using thick natural FSC Kraft paper laminated to a 140-micron high-tensile PP woven inner liner. Designed for packing pet treats, organic coal, agricultural grains, and wholesale flour. Available in accessible 10-piece convenient bulk packs.
              </p>
              <p className="text-neutral-600 text-sm">
                Natural FSC Kraft Paper + 140MicronPPWovenInnerFilmCompositeStructure。Perfect forSuitablePackingPremiumPetFood、OrganicCharcoal、GrainsAndWoodPellets。BulkPackQuickShippingSupplyShould。"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Comprehensive Size Lineup & Dimension Chart',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">Standard Stock Dimensions</h3>
              <p className="text-neutral-700 font-medium">
                Our heavy bags come in four standardized B2B size ranges optimized for palletization and freight efficiency:
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• <strong>Small (2.5 - 5 kg):</strong> Ideal for specialty bird seed and premium organic grains.</li>
                <li>• <strong>Medium (5 - 10 kg):</strong> Standard choice for commercial dog kibble and cat litter.</li>
                <li>• <strong>Large (10 - 15 kg):</strong> Engineered for high-volume pet food and premium soil.</li>
                <li>• <strong>Extra Large (15 - 25 kg):</strong> Heavy-duty industrial sack for organic coal and agricultural feed.</li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png', index: 1 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png" alt="Kraft heavy-duty bag size lineup" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'scale-showcase',
      title: 'Unrivaled Physical Handheld Volumetric Reference',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png" alt="Handheld scale reference showing massive size of Kraft heavy-duty bag" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
            </button>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">Heavy-Capacity Volumetric Presentation</h3>
              <p className="text-neutral-700">
                To help packaging engineers and B2B buyers visualize the volume scale, see our organic grounds heavy bag held by our staff. M-folded expandable side gussets open completely flat-bottomed under payload pressure, maximizing stacking density during warehouse storage and palletization.
              </p>
              <p className="text-neutral-600 text-sm">
                HelpPackagingEngineerAndB2BEnterpriseBuyerClearVisualScale。SideGussetDeepOpenFlatBottom，PalletFreightDensityHighestOptimization。"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: 'Why Trust Achieve Pack?',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">ISO, BRC & FSC Certified Packaging Production</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of expertise and an automated industrial facility pushing 1,500 tons of monthly flexible packaging capacity, Achieve Pack guarantees consistent structural tolerance, premium material grades, and zero-defect lamination for commercial clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">FSC Certified</h4>
              <p className="text-xs text-neutral-500">100% Traceable Forestry</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">BRC certified</h4>
              <p className="text-xs text-neutral-500">Food Safety Cleanroom</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">Global Supply</h4>
              <p className="text-xs text-neutral-500"> Palletized Sea/Air Freight</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">13+ Years</h4>
              <p className="text-xs text-neutral-500">Industrial Experience</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is a Kraft multi-wall side gusset pouch?",
      answer: "It is an exceptionally strong bulk packaging bag combining a natural Kraft paper outer surface for premium brand appeal with a high-tensile woven polypropylene (PP) plastic inner lining to handle heavy B2B payload weights up to 25kg without breaking."
    },
    {
      question: "Are these heavy bags food contact safe?",
      answer: "Yes, our large format Kraft heavy sacks are manufactured in BRC-certified food-grade facilities. The inner lining PE/PP structure carries full FDA food safety approvals, making it perfectly suited for dog food, pet treats, grain storage, and food ingredients."
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "For standard plain stock sizes, we support startup brands with an ultra-accessible MOQ of only 500 pieces under the pouch.eco DTC platform. For custom digital prints, custom sizes, or larger enterprise supply chains, MOQs start at 5,000 to 10,000 pieces under achievepack.com."
    },
    {
      question: "Can they be sealed with normal hand impulse sealers?",
      answer: "Due to the thickness of the 120gsm Kraft outer shell and 140-micron PP woven lining, standard low-voltage household hand sealers will not deliver a reliable weld. We highly recommend heavy-duty constant heat sealers or high-speed continuous band sealers running at 180°C - 210°C."
    }
  ]

  const relatedLinks = [
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate positive B2B/B2C packaging options" },
    { title: "Rice Paper Bags", url: "/function/rice-paper-bags", description: "Premium textured fiber paper pouches" },
    { title: "Spout Pouches for Juices", url: "/function/spout-pouches-juice", description: "Liquid barrier pouch designs" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Fully biodegradable flexible barrier substrates" }
  ]

  // --- Dynamic Routing Check ---
  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title="Premium Natural Kraft Heavy Sacks | High-Tensile Bulk Bags | POUCH.ECO"
        metaDescription="Upgrade your startup's bulk pet treats, organic grains, or agricultural soil packaging with natural Kraft multi-wall heavy sacks. High tensile strength PP woven liner, flat bottom expansion, and 500-unit MOQ."
        canonicalUrl="https://pouch.eco/function/large-format-kraft-heavy-bags"
        keywords={['heavy-duty Kraft bags', 'multi-wall Kraft sacks', 'side gusset bulk packaging', 'large format packaging', 'organic pet food bag', 'FSC Kraft paper sack', '100% puncture proof sack', 'low MOQ heavy bag']}
        publishedDate="2026-05-27"
        heroTitle={
          <>
            Natural Kraft <br className="hidden md:block" /> Heavy-Duty Sacks
          </>
        }
        heroSubtitle="Ditch cheap plastic. Scale your organic bulk retail with beautiful natural Kraft texture laminated to a puncture-proof PP woven core. Starting at 500 units."
        heroImage="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png"
        heroImageAlt="POUCH.ECO Natural Kraft Heavy-Duty Sack Volumetric Reference"
        categoryTag="ORGANIC_RETAIL"
        categoryColor="#D4FF00"
        readTime="5 min read"
        sections={b2cSections}
        ctaTitle="Ditch Cheap Plastic Bags Today"
        ctaDescription="Secure your bulk transit and wow B2C retail buyers with beautiful natural FSC Kraft sacks. Book a free 30-minute consultation with packaging engineers."
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/large-format-kraft-heavy-bags"
        achievePackText="Looking for B2B container wholesale rates, customized barrier layers, or certified GRS packaging audits?"
        showTableOfContents={true}
        relatedArticles={[
          {
            title: "Rice Paper Bags",
            url: "/function/rice-paper-bags",
            image: "/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-2.png"
          },
          {
            title: "Carbon Neutral Bags",
            url: "/function/carbon-neutral-bags",
            image: "/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-1.png"
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#132c1c"
        title="Kraft Multi-Wall Heavy Gusset Sacks | Achieve Pack® B2B Bulk Packaging"
        description="Premium FSC certified natural Kraft outer shell + high-tensile 140μm PP woven inner lining. Carry payloads up to 25kg safely. Perfect for commercial pet food, grains, pellets. BRC food-grade standard."
        keywords={['large format Kraft bags', 'multi-wall side gusset pouch', 'heavy-duty sacks B2B', 'PP woven laminated Kraft bag', 'pet food wholesale sacks', 'charcoal paper bags', 'industrial Kraft sacks', 'bulk grains packaging']}
        canonicalUrl="https://achievepack.com/function/large-format-kraft-heavy-bags"
        heroTitle="Achieve Pack® Kraft Multi-Wall Heavy Sacks"
        heroSubtitle="Raw Organic Kraft Aesthetic + High-Tensile Industrial Strength Core / FSC Certified"
        heroImage="/imgs/store/products/large-format-kraft-heavy-bag-conventional-thumbnail-4.png"
        heroImageAlt="Achieve Pack Kraft Multi-Wall Heavy Gusset Sack Scale Reference"
        introSummary="Achieve Pack® Large Format Kraft Multi-Wall Heavy Sacks are engineered specifically for high-capacity industrial B2B retail, supporting payload weights up to 25kg. Built with thick 120gsm Kraft outer paper and high-strength 140-micron PP woven lamination, it provides a 100% tear-proof packaging solution."
        sections={b2bSections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Industrial Kraft Sacks?"
        ctaDescription="Partner with Achieve Pack for certified FSC natural multi-wall sacks, BRC cleanroom packaging, and high-volume freight shipping."
        ctaButtonText="Get a B2B Quote"
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={heavyBagGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{heavyBagGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{heavyBagGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LargeFormatKraftHeavyBagPage
