import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Package, Leaf, Award, CheckCircle, Shield, Clock, Recycle, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableStandUpPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.compostableStandUpPouches'
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.descStrong`)}</strong> {t(`${p}.sections.overview.descText`)}
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.whyTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>{t(`${p}.sections.overview.why1Strong`)}</strong>{t(`${p}.sections.overview.why1Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why2Strong`)}</strong>{t(`${p}.sections.overview.why2Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why3Strong`)}</strong>{t(`${p}.sections.overview.why3Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why4Strong`)}</strong>{t(`${p}.sections.overview.why4Text`)}</li>
              <li>• <strong>{t(`${p}.sections.overview.why5Strong`)}</strong>{t(`${p}.sections.overview.why5Text`)}</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
              alt={t(`${p}.sections.overview.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.overview.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50 text-center">
              <span className="text-3xl mb-2 block">☕</span>
              <h4 className="font-semibold text-amber-800">{t(`${p}.sections.applications.coffeeTea`)}</h4>
              <p className="text-xs mt-1 text-amber-700">{t(`${p}.sections.applications.coffeeTeaDesc`)}</p>
              <Link to="/products/compostable-coffee-bags" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50 text-center">
              <span className="text-3xl mb-2 block">🥜</span>
              <h4 className="font-semibold text-green-800">{t(`${p}.sections.applications.snacksNuts`)}</h4>
              <p className="text-xs mt-1 text-green-700">{t(`${p}.sections.applications.snacksNutsDesc`)}</p>
              <Link to="/industry/snacks-food" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50 text-center">
              <span className="text-3xl mb-2 block">🍫</span>
              <h4 className="font-semibold text-blue-800">{t(`${p}.sections.applications.confectionery`)}</h4>
              <p className="text-xs mt-1 text-blue-700">{t(`${p}.sections.applications.confectioneryDesc`)}</p>
              <Link to="/case-studies/chocolate-brand" className="text-xs text-primary-600 hover:underline mt-2 block">See case study →</Link>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50 text-center">
              <span className="text-3xl mb-2 block">💪</span>
              <h4 className="font-semibold text-purple-800">{t(`${p}.sections.applications.supplements`)}</h4>
              <p className="text-xs mt-1 text-purple-700">{t(`${p}.sections.applications.supplementsDesc`)}</p>
              <Link to="/industry/supplements-powders" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-orange-200 rounded-lg p-4 bg-orange-50/50 text-center">
              <span className="text-3xl mb-2 block">🐕</span>
              <h4 className="font-semibold text-orange-800">{t(`${p}.sections.applications.petTreats`)}</h4>
              <p className="text-xs mt-1 text-orange-700">{t(`${p}.sections.applications.petTreatsDesc`)}</p>
              <Link to="/industry/pet-food" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
            <div className="border border-pink-200 rounded-lg p-4 bg-pink-50/50 text-center">
              <span className="text-3xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-pink-800">{t(`${p}.sections.applications.herbsSpices`)}</h4>
              <p className="text-xs mt-1 text-pink-700">{t(`${p}.sections.applications.herbsSpicesDesc`)}</p>
              <Link to="/packaging/stand-up-pouches" className="text-xs text-primary-600 hover:underline mt-2 block">Learn more →</Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">{t(`${p}.sections.materials.thMaterial`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.thBarrier`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.thShelfLife`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.thBestFor`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materials.thCertification`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.kraftPla`)}</td>
                  <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">{t(`${p}.sections.materials.kraftPlaBarrier`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materials.kraftPlaShelfLife`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.kraftPlaBestFor`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.kraftPlaCert`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.kraftPbatPla`)}</td>
                  <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">{t(`${p}.sections.materials.kraftPbatPlaBarrier`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materials.kraftPbatPlaShelfLife`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.kraftPbatPlaBestFor`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.kraftPbatPlaCert`)}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.natureflex`)}</td>
                  <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{t(`${p}.sections.materials.natureflexBarrier`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materials.natureflexShelfLife`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.natureflexBestFor`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.natureflexCert`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materials.metpla`)}</td>
                  <td className="p-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">{t(`${p}.sections.materials.metplaBarrier`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materials.metplaShelfLife`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.metplaBestFor`)}</td>
                  <td className="p-3">{t(`${p}.sections.materials.metplaCert`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t(`${p}.sections.materials.fullGuide`)}</Link>
          </p>

          {/* Compostable Stand-Up Pouch Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.materials.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand up pouch with resealable zipper for food packaging" 
                className="w-full h-28 object-contain rounded-lg bg-neutral-50"
                caption={t(`${p}.sections.materials.galleryPouch`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial compostable certification for stand-up pouches" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.galleryIndustrial`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp" 
                alt="Compostable packaging breaking down naturally in garden" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.galleryGarden`)}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_compostable_mixed_materials_lifestyle_kitchen_6722434.webp" 
                alt="Compostable pouches in modern kitchen setting" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.materials.galleryKitchen`)}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sizes',
      title: t(`${p}.sections.sizes.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.sizes.intro`)}</p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">50g</div>
              <p className="text-xs mt-1">80×130+50mm</p>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.sizes.size50gDesc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">100g</div>
              <p className="text-xs mt-1">100×180+60mm</p>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.sizes.size100gDesc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">250g</div>
              <p className="text-xs mt-1">120×200+80mm</p>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.sizes.size250gDesc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl font-bold text-primary-700">500g</div>
              <p className="text-xs mt-1">140×230+90mm</p>
              <p className="text-xs text-neutral-500">{t(`${p}.sections.sizes.size500gDesc`)}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.sizes.customTitle`)}</h4>
            <p className="text-sm text-blue-700">{t(`${p}.sections.sizes.customDesc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="EN 13432 Seedling Logo" 
                className="h-14 w-auto mb-2"
                caption={t(`${p}.sections.certifications.euSeedling`)}
              />
              <span className="text-xs font-semibold text-neutral-800">EN 13432</span>
              <span className="text-xs text-neutral-500">EU Industrial</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified" 
                className="h-14 w-auto mb-2"
                caption={t(`${p}.sections.certifications.bpiCertified`)}
              />
              <span className="text-xs font-semibold text-neutral-800">ASTM D6400</span>
              <span className="text-xs text-neutral-500">US Industrial</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="Home Compostable" 
                className="h-14 w-auto mb-2"
                caption={t(`${p}.sections.certifications.homeCompost`)}
              />
              <span className="text-xs font-semibold text-neutral-800">OK Home</span>
              <span className="text-xs text-neutral-500">Backyard</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="AS5810 Australia" 
                className="h-14 w-auto mb-2"
                caption={t(`${p}.sections.certifications.as5810`)}
              />
              <span className="text-xs font-semibold text-neutral-800">AS5810</span>
              <span className="text-xs text-neutral-500">Australia</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.certifications.foodSafetyTitle`)}</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>{t(`${p}.sections.certifications.foodSafety1`)}</li>
              <li>{t(`${p}.sections.certifications.foodSafety2`)}</li>
              <li>{t(`${p}.sections.certifications.foodSafety3`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: t(`${p}.sections.moq.title`),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">{t(`${p}.sections.moq.minOrderVal`)}</div>
              <div className="text-sm text-green-600 font-medium">{t(`${p}.sections.moq.minOrderLabel`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.moq.minOrderDesc`)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">{t(`${p}.sections.moq.daysProdVal`)}</div>
              <div className="text-sm text-blue-600 font-medium">{t(`${p}.sections.moq.daysProdLabel`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.moq.daysProdDesc`)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">{t(`${p}.sections.moq.daysShipVal`)}</div>
              <div className="text-sm text-purple-600 font-medium">{t(`${p}.sections.moq.daysShipLabel`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.moq.daysShipDesc`)}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.moq.pricingTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">{t(`${p}.sections.moq.pricingRange1`)}</div>
                <div className="text-neutral-500">{t(`${p}.sections.moq.pricingPrice1`)}</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">{t(`${p}.sections.moq.pricingRange2`)}</div>
                <div className="text-neutral-500">{t(`${p}.sections.moq.pricingPrice2`)}</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">{t(`${p}.sections.moq.pricingRange3`)}</div>
                <div className="text-neutral-500">{t(`${p}.sections.moq.pricingPrice3`)}</div>
              </div>
              <div className="bg-neutral-50 p-2 rounded text-center">
                <div className="font-semibold">{t(`${p}.sections.moq.pricingRange4`)}</div>
                <div className="text-neutral-500">{t(`${p}.sections.moq.pricingPrice4`)}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t(`${p}.sections.faq.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q1`)}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a1`)}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q2`)}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a2`)}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q3`)}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a3`)}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q4`)}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a4`)}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t(`${p}.sections.faq.q5`)}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t(`${p}.sections.faq.a5`)}</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.seo.ctaTitle`)}</h4>
          <p className="text-neutral-700 mb-6">
            {t(`${p}.seo.ctaDescription`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.seo.ctaButtonText`)}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t(`${p}.sections.cta.buttonShop`)}
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-primary-200">
            <p className="text-sm text-neutral-600">
              <strong>{t(`${p}.sections.cta.relatedLabel`)}</strong>{' '}
              <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">{t(`${p}.sections.cta.relatedCoffee`)}</Link> |{' '}
              <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t(`${p}.sections.cta.relatedMaterials`)}</Link> |{' '}
              <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">{t(`${p}.sections.cta.relatedAllStandUp`)}</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.seo.title`)}</title>
        <meta name="description" content={t(`${p}.seo.description`)} />
        <link rel="canonical" href="https://achievepack.com/products/compostable-stand-up-pouches" />
        <meta property="og:title" content={t(`${p}.seo.title`)} />
        <meta property="og:description" content={t(`${p}.seo.description`)} />
        <meta property="og:url" content="https://achievepack.com/products/compostable-stand-up-pouches" />
        <meta name="keywords" content={t(`${p}.seo.keywords`, { joinArrays: ', ' })} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": t(`${p}.seo.heroTitle`),
            "description": t(`${p}.seo.description`),
            "brand": { "@type": "Brand", "name": "Achieve Pack" },
            "category": "Compostable Packaging",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0.45",
              "highPrice": "1.20",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout heroBgColor="#14532d"
        title={t(`${p}.seo.title`)}
        description={t(`${p}.seo.description`)}
        keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
        heroTitle={t(`${p}.seo.heroTitle`)}
        heroSubtitle={t(`${p}.seo.heroSubtitle`)}
        introSummary={t(`${p}.seo.introSummary`)}
        sections={sections}
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp"
      />
    </>
  )
}

export default CompostableStandUpPouchesPage
