import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Package, Award, CheckCircle, Shield, Clock, Leaf, MessageCircle, Target, Calendar, ShoppingCart, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CoffeeBagsDegassingValvePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.title'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.descStrong')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.descText')}
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyTitle')}</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet1')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet1Suffix')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet2')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet2Suffix')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet3')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet3Suffix')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet4')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet4Suffix')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet5')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.whyBullet5Suffix')}</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/store/additional/valve.webp" 
              alt={t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.imgCaption')} 
              className="w-full rounded-lg shadow-md"
              caption={t('seoPages.pages.coffeeBagsDegassingValve.sections.overview.imgCaption')}
            />
          </div>
        </div>
      )
    },
    {
      id: 'valve-types',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.title'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.desc')}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option1Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option1Desc')}</p>
              <ul className="text-xs space-y-1 text-amber-700">
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option1Bullet1')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option1Bullet2')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option1Bullet3')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option1Bullet4')}</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Desc')}</p>
              <ul className="text-xs space-y-1 text-green-700">
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Bullet1')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Bullet2')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Bullet3')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Bullet4')}</li>
              </ul>
              <Link to="/products/compostable-coffee-bags" className="text-xs text-primary-600 hover:underline mt-2 inline-block">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option2Link')}</Link>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option3Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option3Desc')}</p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option3Bullet1')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option3Bullet2')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option3Bullet3')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option3Bullet4')}</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option4Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option4Desc')}</p>
              <ul className="text-xs space-y-1 text-purple-700">
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option4Bullet1')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option4Bullet2')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option4Bullet3')}</li>
                <li>• {t('seoPages.pages.coffeeBagsDegassingValve.sections.valveTypes.option4Bullet4')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.title'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.desc')}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.thMaterial')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.thBarrier')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.thShelfLife')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.thSustainability')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.thBestFor')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row1Material')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row1Barrier')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row1ShelfLife')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row1Sustainability')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row1BestFor')}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row2Material')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row2Barrier')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row2ShelfLife')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row2Sustainability')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row2BestFor')}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row3Material')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row3Barrier')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row3ShelfLife')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row3Sustainability')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row3BestFor')}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row4Material')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row4Barrier')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row4ShelfLife')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row4Sustainability')}</td>
                  <td className="p-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.table.row4BestFor')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Link to="/materials/compostable" className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.links.compostable')}</Link>
            <Link to="/products/recyclable-mono-material-pouches" className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.links.recyclable')}</Link>
            <Link to="/features/barrier-options" className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">{t('seoPages.pages.coffeeBagsDegassingValve.sections.materials.links.barrier')}</Link>
          </div>
        </div>
      )
    },
    {
      id: 'bag-styles',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.title'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.desc')}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Link to="/packaging/stand-up-pouches" className="block bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <span className="text-3xl mb-2 block">📦</span>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.style1Title')}</h4>
              <p className="text-xs mt-1 text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.style1Desc')}</p>
            </Link>
            <Link to="/packaging/flat-bottom-bags" className="block bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <span className="text-3xl mb-2 block">🧱</span>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.style2Title')}</h4>
              <p className="text-xs mt-1 text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.style2Desc')}</p>
            </Link>
            <Link to="/packaging/side-gusset-bags" className="block bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-md transition text-center">
              <span className="text-3xl mb-2 block">📐</span>
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.style3Title')}</h4>
              <p className="text-xs mt-1 text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.style3Desc')}</p>
            </Link>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placementTitle')}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placement1')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placement1Desc')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placement2')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placement2Desc')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placement3')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.bagStyles.placement3Desc')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.features.title'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat1Title')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat1Desc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">🪟</span>
              <div>
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat2Title')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat2Desc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">✂️</span>
              <div>
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat3Title')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat3Desc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
              <span className="text-2xl">🕳️</span>
              <div>
                <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat4Title')}</h4>
                <p className="text-sm text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.feat4Desc')}</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/features/reclosure-options" className="text-primary-600 hover:underline">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.viewAll')}</Link>
          </p>

          {/* Coffee Bag Features Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.coffeeBagsDegassingValve.sections.features.galleryTitle')}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/additional/valve.webp" 
                alt="Coffee bag degassing valve closeup showing one-way release" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.coffeeBagsDegassingValve.sections.features.gallery1')}
              />
              <ClickableImage 
                src="/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp" 
                alt="Tin tie coffee pouch closure option" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.coffeeBagsDegassingValve.sections.features.gallery2')}
              />
              <ClickableImage 
                src="/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp" 
                alt="Various reclosure options for coffee packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.coffeeBagsDegassingValve.sections.features.gallery3')}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp" 
                alt="Coffee roastery using degassing valve bags" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.coffeeBagsDegassingValve.sections.features.gallery4')}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'moq',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.title'),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.moqVal')}</div>
              <div className="text-sm text-green-600 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.moqTitle')}</div>
              <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.moqDesc')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.leadVal')}</div>
              <div className="text-sm text-blue-600 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.leadTitle')}</div>
              <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.leadDesc')}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceVal')}</div>
              <div className="text-sm text-purple-600 font-medium">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceTitle')}</div>
              <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceDesc')}</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.pricingTitle')}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceItem1Strong')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceItem1Text')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceItem2Strong')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceItem2Text')}</li>
              <li>• <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceItem3Strong')}</strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.ordering.priceItem3Text')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.title'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.q1')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.a1')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.q2')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.a2')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.q3')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.a3')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.q4')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.a4')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.q5')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.coffeeBagsDegassingValve.sections.faq.a5')}</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.title'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.boxTitle')}</h4>
          <p className="text-neutral-700 mb-6">
            {t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.boxDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.btnConsult')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.btnShop')}
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-amber-200">
            <p className="text-sm text-neutral-600">
              <strong>{t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.related')}</strong>{' '}
              <Link to="/products/compostable-coffee-bags" className="text-primary-600 hover:underline">{t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.linkCompostable')}</Link> |{' '}
              <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">{t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.linkIndustry')}</Link> |{' '}
              <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline">{t('seoPages.pages.coffeeBagsDegassingValve.sections.cta.linkCaseStudy')}</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.coffeeBagsDegassingValve.seo.title')}</title>
        <meta name="description" content={t('seoPages.pages.coffeeBagsDegassingValve.seo.description')} />
        <link rel="canonical" href="https://achievepack.com/products/coffee-bags-degassing-valve" />
        <meta property="og:title" content={t('seoPages.pages.coffeeBagsDegassingValve.seo.title')} />
        <meta property="og:description" content={t('seoPages.pages.coffeeBagsDegassingValve.seo.description')} />
        <meta property="og:url" content="https://achievepack.com/products/coffee-bags-degassing-valve" />
        <meta name="keywords" content={(t('seoPages.pages.coffeeBagsDegassingValve.seo.keywords', { returnObjects: true }) as string[]).join(', ')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Coffee Bags with Degassing Valves",
            "description": "Premium coffee bags with one-way degassing valves for freshly roasted coffee. Available in compostable, recyclable, and conventional materials.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" },
            "category": "Coffee Packaging",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0.65",
              "highPrice": "1.50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout heroBgColor="#451a03"
        title={t('seoPages.pages.coffeeBagsDegassingValve.seo.title')}
        description={t('seoPages.pages.coffeeBagsDegassingValve.seo.description')}
        keywords={t('seoPages.pages.coffeeBagsDegassingValve.seo.keywords', { returnObjects: true }) as string[]}
        heroTitle={t('seoPages.pages.coffeeBagsDegassingValve.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.coffeeBagsDegassingValve.seo.heroSubtitle')}
        introSummary={t('seoPages.pages.coffeeBagsDegassingValve.seo.introSummary')}
        sections={sections}
        heroImage="/imgs/store/additional/valve.webp"
      />
    </>
  )
}

export default CoffeeBagsDegassingValvePage
