import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { Recycle, Package, Award, CheckCircle, Shield, Clock, Leaf, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const RecyclableMonoMaterialPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.recyclableMono.achievePack'

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`, 'Recyclable Mono-Material Pouches'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.introStart`, "Achieve Pack's recyclable mono-material pouches")}</strong>
            {t(`${p}.sections.overview.introBold`, " are designed for curbside recycling compatibility. Made from a single polymer type (mono-PE or mono-PP), these pouches can be recycled through existing plastic recycling infrastructure.")}
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.whyTitle`, "Why Choose Mono-Material Recyclable:")}</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• <strong>{t(`${p}.sections.overview.whyItems.curbsideBold`, "Curbside recyclable")}</strong>{t(`${p}.sections.overview.whyItems.curbsideEnd`, " – Works with existing PE recycling streams")}</li>
              <li>• <strong>{t(`${p}.sections.overview.whyItems.barrierBold`, "High barrier available")}</strong>{t(`${p}.sections.overview.whyItems.barrierEnd`, " – Up to 12+ months shelf life")}</li>
              <li>• <strong>{t(`${p}.sections.overview.whyItems.dropoffBold`, "Store drop-off compatible")}</strong>{t(`${p}.sections.overview.whyItems.dropoffEnd`, " – Accepted at major retailers")}</li>
              <li>• <strong>{t(`${p}.sections.overview.whyItems.footprintBold`, "Lower carbon footprint")}</strong>{t(`${p}.sections.overview.whyItems.footprintEnd`, " – vs virgin plastic alternatives")}</li>
              <li>• <strong>{t(`${p}.sections.overview.whyItems.printBold`, "Full print capability")}</strong>{t(`${p}.sections.overview.whyItems.printEnd`, " – Premium graphics and finishes")}</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.overview.vsTitle`, "⚡ When to Choose Recyclable vs Compostable:")}</h4>
            <p className="text-sm text-amber-700">
              <strong>{t(`${p}.sections.overview.vsBold`, "Choose recyclable mono-material")}</strong>
              {t(`${p}.sections.overview.vsText`, " if your customers have better access to plastic recycling than composting facilities. Mono-PE pouches work with store drop-off programs at Walmart, Target, and other major retailers across the US.")}
            </p>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/4-infograhic/recyclable.webp"
              alt={t(`${p}.sections.overview.infographicAlt`, "Recyclable mono-material pouch infographic")} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.overview.infographicCaption`, "Recyclable mono-material packaging overview")}
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`, 'Mono-Material Options'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.pe.title`, "Mono-PE (Polyethylene)")}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.materials.pe.desc`, "100% PE structure compatible with LDPE recycling streams.")}</p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.materials.pe.item1`, "Store drop-off recyclable (How2Recycle)")}</li>
                <li>• {t(`${p}.sections.materials.pe.item2`, "Clear, white, or kraft-look options")}</li>
                <li>• {t(`${p}.sections.materials.pe.item3`, "Medium to high barrier")}</li>
                <li>• {t(`${p}.sections.materials.pe.item4`, "Best for: Snacks, coffee, dry goods")}</li>
              </ul>
              <Link to="/materials/recyclable-mono-pe" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">
                {t(`${p}.sections.materials.pe.linkText`, "View Mono-PE specs →")}
              </Link>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.materials.pp.title`, "Mono-PP (Polypropylene)")}</h4>
              <p className="text-sm mb-2">{t(`${p}.sections.materials.pp.desc`, "100% PP structure for #5 plastic recycling.")}</p>
              <ul className="text-xs space-y-1 text-purple-700">
                <li>• {t(`${p}.sections.materials.pp.item1`, "Higher heat resistance than PE")}</li>
                <li>• {t(`${p}.sections.materials.pp.item2`, "Better clarity options")}</li>
                <li>• {t(`${p}.sections.materials.pp.item3`, "Medium to high barrier")}</li>
                <li>• {t(`${p}.sections.materials.pp.item4`, "Best for: Hot fill, microwaveable")}</li>
              </ul>
              <Link to="/materials/recyclable-mono-pp" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">
                {t(`${p}.sections.materials.pp.linkText`, "View Mono-PP specs →")}
              </Link>
            </div>
          </div>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">{t(`${p}.sections.materials.table.headers.structure`, "Structure")}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.table.headers.barrier`, "Barrier")}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.table.headers.recyclability`, "Recyclability")}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.table.headers.applications`, "Applications")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.table.row1.structure`, "Mono-PE Clear")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row1.barrier`, "Medium")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row1.recyclability`, "Store drop-off")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row1.applications`, "Snacks, candy, nuts")}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.table.row2.structure`, "Mono-PE + EVOH")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row2.barrier`, "High")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row2.recyclability`, "Store drop-off")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row2.applications`, "Coffee, tea, supplements")}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.table.row3.structure`, "Mono-PP Clear")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row3.barrier`, "Medium")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row3.recyclability`, "#5 recycling")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row3.applications`, "Ready meals, snacks")}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.table.row4.structure`, "Mono-PP Metalised")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row4.barrier`, "High")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row4.recyclability`, "#5 recycling")}</td>
                  <td className="p-3">{t(`${p}.sections.materials.table.row4.applications`, "Coffee, chips, pet food")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Recyclable Materials Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.materials.galleryTitle`, "Recyclable Mono-Material Packaging Samples")}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt={t(`${p}.sections.materials.gallery.item1.alt`, "Recyclable mono-material pouch certification infographic")} 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.gallery.item1.caption`, "Recyclable Certified")}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_pcr_store_drop_off_recycling_1908718.webp" 
                alt={t(`${p}.sections.materials.gallery.item2.alt`, "Store drop-off recycling station for flexible packaging")} 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.gallery.item2.caption`, "Store Drop-Off")}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp" 
                alt={t(`${p}.sections.materials.gallery.item3.alt`, "Mono-material recyclable packaging certification")} 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.gallery.item3.caption`, "Recyclability Compliance")}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_grs_mono_material_luxury_texture_1597149.webp" 
                alt={t(`${p}.sections.materials.gallery.item4.alt`, "Luxury recyclable mono-material pouch texture")} 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.gallery.item4.caption`, "Premium Texture")}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: t(`${p}.sections.recycling.title`, 'How Mono-Material Recycling Works'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.recycling.intro`, "Understanding the recycling pathway helps you communicate effectively with consumers:")}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl mb-2">🏪</div>
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.recycling.steps.dropoff.title`, "Store Drop-Off")}</h4>
              <p className="text-xs mt-1 text-green-700">{t(`${p}.sections.recycling.steps.dropoff.desc`, "PE pouches can be recycled at store drop-off bins at Walmart, Target, Kroger, etc.")}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl mb-2">♻️</div>
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.recycling.steps.stream.title`, "LDPE Stream")}</h4>
              <p className="text-xs mt-1 text-blue-700">{t(`${p}.sections.recycling.steps.stream.desc`, "Collected with plastic bags and film, then recycled into composite lumber, playground equipment.")}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.recycling.steps.products.title`, "New Products")}</h4>
              <p className="text-xs mt-1 text-purple-700">{t(`${p}.sections.recycling.steps.products.desc`, "Recycled into decking, fencing, and new packaging products.")}</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.recycling.labeling.title`, "Labeling for Consumer Clarity")}</h4>
            <p className="text-sm text-amber-700">{t(`${p}.sections.recycling.labeling.desc`, "We can help you add How2Recycle labels to your packaging to clearly communicate recycling instructions. This reduces confusion and increases recycling rates.")}</p>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`, 'Applications & Industries'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/industry/coffee-tea" className="block bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.applications.types.coffee.title`, "☕ Coffee & Tea")}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.applications.types.coffee.desc`, "High-barrier mono-PE with degassing valves for fresh roast protection.")}</p>
            </Link>
            <Link to="/industry/snacks-food" className="block bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.applications.types.snacks.title`, "🥜 Snacks & Dry Goods")}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.applications.types.snacks.desc`, "Chips, nuts, granola – excellent barrier and shelf appeal.")}</p>
            </Link>
            <Link to="/industry/pet-food" className="block bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.applications.types.pet.title`, "🐕 Pet Food & Treats")}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.applications.types.pet.desc`, "High-barrier options for pet food with extended shelf life.")}</p>
            </Link>
            <Link to="/industry/supplements-powders" className="block bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.applications.types.supplements.title`, "💪 Supplements")}</h4>
              <p className="text-sm text-purple-700">{t(`${p}.sections.applications.types.supplements.desc`, "Protein powders, vitamins – moisture barrier critical.")}</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`, 'Recyclability Certifications'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.certifications.intro`, "Our mono-material pouches are designed for compatibility with major recycling programs:")}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cards.how2recycle.title`, "How2Recycle")}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cards.how2recycle.desc`, "Store drop-off label eligible")}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏪</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cards.dropoff.title`, "Store Drop-Off")}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cards.dropoff.desc`, "Walmart, Target, Kroger compatible")}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌎</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cards.apr.title`, "APR Design Guide")}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cards.apr.desc`, "Meets recyclability criteria")}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.pcr.title`, "PCR Content Available")}</h4>
            <p className="text-sm text-green-700">{t(`${p}.sections.certifications.pcr.desc`, "Add post-consumer recycled content to your pouches. We offer 30%, 50%, and up to 100% PCR options for even greater sustainability credentials.")}</p>
            <Link to="/materials/pcr" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">
              {t(`${p}.sections.certifications.pcr.linkText`, "Learn about PCR options →")}
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: t(`${p}.sections.moq.title`, 'Ordering & Pricing'),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">{t(`${p}.sections.moq.cards.moq.value`, "100")}</div>
              <div className="text-sm text-green-600 font-medium">{t(`${p}.sections.moq.cards.moq.label`, "Minimum Order")}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.moq.cards.moq.desc`, "Digital printed")}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">{t(`${p}.sections.moq.cards.production.value`, "7-10")}</div>
              <div className="text-sm text-blue-600 font-medium">{t(`${p}.sections.moq.cards.production.label`, "Days Production")}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.moq.cards.production.desc`, "After approval")}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">{t(`${p}.sections.moq.cards.shipping.value`, "15-20")}</div>
              <div className="text-sm text-purple-600 font-medium">{t(`${p}.sections.moq.cards.shipping.label`, "Days to USA")}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.moq.cards.shipping.desc`, "Door-to-door")}</p>
            </div>
          </div>
          
          <div className="mt-4 bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.moq.pricing.title`, "Competitive Pricing:")}</h4>
            <p className="text-sm text-neutral-600">{t(`${p}.sections.moq.pricing.desc`, "Mono-material pouches are priced similarly to conventional multi-layer pouches, making the switch to recyclable packaging cost-neutral for most brands.")}</p>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t(`${p}.sections.faq.title`, 'Frequently Asked Questions'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q1`, "What makes mono-material pouches recyclable?")}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a1`, "Mono-material pouches are made from a single polymer type (either 100% PE or 100% PP). This allows them to be recycled through existing plastic recycling infrastructure without the need to separate different materials, which is required for multi-layer conventional pouches.")}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q2`, "How do customers recycle mono-PE pouches?")}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a2`, "Mono-PE pouches can be recycled at store drop-off locations. Major retailers like Walmart, Target, and Kroger have collection bins for plastic bags and flexible packaging. We can help you add How2Recycle labels to clearly communicate disposal instructions.")}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q3`, "Do mono-material pouches have good barrier properties?")}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a3`, "Yes! Our high-barrier mono-PE pouches with EVOH layer can provide 12+ months shelf life for coffee, snacks, and dry goods. The mono-structure doesn't compromise barrier performance - your products stay just as fresh as in conventional packaging.")}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q4`, "Should I choose recyclable or compostable packaging?")}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a4`, "It depends on your customers' access to disposal infrastructure. Choose recyclable if your customers have better access to store drop-off recycling. Choose compostable if they have access to industrial composting facilities or curbside organic collection. We can help you decide based on your target market.")}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q5`, "Can I add PCR content to mono-material pouches?")}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a5`, "Yes! We offer mono-material pouches with 30%, 50%, or up to 100% post-consumer recycled (PCR) content. This further reduces virgin plastic use while maintaining recyclability. PCR content is verified through our supply chain.")}</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`, 'Get Recyclable Mono-Material Pouches'),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.sections.cta.header`, "Ready for recyclable packaging?")}</h4>
          <p className="text-neutral-700 mb-6">
            {t(`${p}.sections.cta.desc`, "Get a quote for mono-PE or mono-PP pouches. We'll help you choose the right structure for your product and recycling goals.")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.bookButton`, "Book Consultation")}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.shopButton`, "Shop Now")}
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-blue-200">
            <p className="text-sm text-neutral-600">
              <strong>{t(`${p}.sections.cta.related.label`, "Related:")}</strong>{' '}
              <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.sections.cta.related.pe`, "Mono-PE Details")}</Link> |{' '}
              <Link to="/materials/recyclable-mono-pp" className="text-primary-600 hover:underline">{t(`${p}.sections.cta.related.pp`, "Mono-PP Details")}</Link> |{' '}
              <Link to="/materials/pcr" className="text-primary-600 hover:underline">{t(`${p}.sections.cta.related.pcr`, "PCR Content")}</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.seo.title`, "Recyclable Mono-Material Pouches | Mono-PE & Mono-PP | Store Drop-Off | Achieve Pack")}
        description={t(`${p}.seo.description`, "Recyclable mono-material pouches made from 100% PE or PP. Curbside and store drop-off recyclable. High barrier options available. Low MOQ from 100 pieces.")}
        keywords={(t(`${p}.seo.keywordsString`, "recyclable pouches, mono-material packaging, mono-PE pouches, mono-PP pouches, store drop-off recyclable, How2Recycle, sustainable packaging, recyclable coffee bags, recyclable snack bags")).split(", ")}
        schemaType="Product"
        additionalSchema={{
          "name": t(`${p}.seo.jsonLd.name`, "Recyclable Mono-Material Pouches"),
          "description": t(`${p}.seo.jsonLd.description`, "100% recyclable mono-PE and mono-PP pouches for food packaging. Store drop-off compatible with How2Recycle labeling."),
          "brand": { "@type": "Brand", "name": "Achieve Pack" },
          "category": t(`${p}.seo.jsonLd.category`, "Recyclable Packaging"),
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0.40",
            "highPrice": "1.10",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        }}
      />

      <SEOPageLayout heroBgColor="#1e3a8a"
        title={t(`${p}.hero.title`, "Recyclable Mono-Material Pouches | Store Drop-Off Recyclable | Achieve Pack")}
        description={t(`${p}.hero.description`, "100% recyclable mono-PE and mono-PP pouches. Store drop-off recyclable flexible packaging. Custom printed with low MOQ from 100 pieces.")}
        keywords={t(`${p}.hero.keywords`, { returnObjects: true }) as string[]}
        heroTitle={t(`${p}.hero.heroTitle`, "Recyclable Mono-Material Pouches")}
        heroSubtitle={t(`${p}.hero.heroSubtitle`, "100% Mono-PE & Mono-PP | Store Drop-Off Recyclable | Low MOQ")}
        introSummary={t(`${p}.hero.introSummary`, "Our mono-material pouches are made from 100% single polymer (PE or PP) for easy recycling at store drop-off locations. Available custom printed from just 100 pieces minimum order.")}
        sections={sections}
        heroImage="/imgs/4-infograhic/recyclable.webp"
      />
    </>
  )
}

export default RecyclableMonoMaterialPage
