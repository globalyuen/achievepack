import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { Coffee, Leaf, Award, CheckCircle, Package, Shield, Clock, Recycle, MessageCircle, Target, Calendar, ArrowRight, ShoppingCart, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableCoffeeBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.compostableCoffeeBags.sections.overview.title'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.descStrong')}</strong>{' '}
            {t('seoPages.pages.compostableCoffeeBags.sections.overview.descText')}
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.overview.whyTitle')}</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why1Strong')}</strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why1Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why2Strong')}</strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why2Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why3Strong')}</strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why3Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why4Strong')}</strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why4Text')}</li>
              <li>• <strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why5Strong')}</strong>{t('seoPages.pages.compostableCoffeeBags.sections.overview.why5Text')}</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp" 
              alt={t('seoPages.pages.compostableCoffeeBags.seo.heroImageAlt')} 
              className="w-full rounded-lg shadow-md"
              caption={t('seoPages.pages.compostableCoffeeBags.sections.overview.imgCaption')}
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('seoPages.pages.compostableCoffeeBags.sections.materials.title'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.compostableCoffeeBags.sections.materials.intro')}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct1Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct1Desc')}</p>
              <ul className="text-xs space-y-1 text-amber-700">
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct1Bullet1')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct1Bullet2')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct1Bullet3')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct1Bullet4')}</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct2Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct2Desc')}</p>
              <ul className="text-xs space-y-1 text-emerald-700">
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct2Bullet1')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct2Bullet2')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct2Bullet3')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct2Bullet4')}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct3Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct3Desc')}</p>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct3Bullet1')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct3Bullet2')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct3Bullet3')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct3Bullet4')}</li>
              </ul>
            </div>
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct4Title')}</h4>
              <p className="text-sm mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.materials.struct4Desc')}</p>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct4Bullet1')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct4Bullet2')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct4Bullet3')}</li>
                <li>• {t('seoPages.pages.compostableCoffeeBags.sections.materials.struct4Bullet4')}</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t('seoPages.pages.compostableCoffeeBags.sections.materials.compareText')}</strong> <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.materials.compareLink')}</Link>
          </p>

          {/* Compostable Materials Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.compostableCoffeeBags.sections.materials.galleryTitle')}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial compostable packaging certification infographic" 
                className="w-full h-32 object-cover rounded-lg"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.materials.gallery1')}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/home-compost.webp" 
                alt="Home compostable packaging - breaks down in backyard compost" 
                className="w-full h-32 object-cover rounded-lg"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.materials.gallery2')}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp" 
                alt="Achieve Pack compostable coffee bag with eco-friendly materials" 
                className="w-full h-32 object-cover rounded-lg"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.materials.gallery3')}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_composting_timeline_5months_9414148.webp" 
                alt="Composting timeline showing 5 months breakdown process" 
                className="w-full h-32 object-cover rounded-lg"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.materials.gallery4')}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t('seoPages.pages.compostableCoffeeBags.sections.features.title'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.compostableCoffeeBags.sections.features.intro')}</p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💨</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat1Title')}</h4>
                <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat1Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔒</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat2Title')}</h4>
                <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat2Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🪟</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat3Title')}</h4>
                <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat3Desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat4Title')}</h4>
                <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.features.feat4Desc')}</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/features/reclosure-options" className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.features.linkText')}</Link>
          </p>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('seoPages.pages.compostableCoffeeBags.sections.certifications.title'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.compostableCoffeeBags.sections.certifications.intro')}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="Seedling Logo - EN 13432 Certified" 
                className="h-16 w-auto mb-2"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert1')}
              />
              <span className="text-xs text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert1')}</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified Compostable" 
                className="h-16 w-auto mb-2"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert2')}
              />
              <span className="text-xs text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert2')}</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="DIN CERTCO Home Compostable" 
                className="h-16 w-auto mb-2"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert3')}
              />
              <span className="text-xs text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert3')}</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center text-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="ABA AS5810 Australian Certified" 
                className="h-16 w-auto mb-2"
                caption={t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert4')}
              />
              <span className="text-xs text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.certifications.cert4')}</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.certifications.foodSafetyTitle')}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.certifications.foodSafety1')}</li>
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.certifications.foodSafety2')}</li>
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.certifications.foodSafety3')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'sizes',
      title: t('seoPages.pages.compostableCoffeeBags.sections.sizes.title'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.compostableCoffeeBags.sections.sizes.intro')}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.thSize')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.thDim')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.thCap')}</th>
                  <th className="p-3 text-left">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.thBest')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size1Name')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size1Dim')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size1Cap')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size1Best')}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size2Name')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size2Dim')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size2Cap')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size2Best')}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size3Name')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size3Dim')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size3Cap')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size3Best')}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size4Name')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size4Dim')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size4Cap')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size4Best')}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size5Name')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size5Dim')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size5Cap')}</td>
                  <td className="p-3">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.size5Best')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm mt-4">
            <strong>{t('seoPages.pages.compostableCoffeeBags.sections.sizes.customText')}</strong> <button onClick={openCalendly} className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.sizes.customLink')}</button>
          </p>
        </div>
      )
    },
    {
      id: 'moq',
      title: t('seoPages.pages.compostableCoffeeBags.sections.moq.title'),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">{t('seoPages.pages.compostableCoffeeBags.sections.moq.moqVal')}</div>
              <div className="text-sm text-green-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.moqLabel')}</div>
              <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.moqDesc')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">{t('seoPages.pages.compostableCoffeeBags.sections.moq.leadVal')}</div>
              <div className="text-sm text-blue-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.leadLabel')}</div>
              <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.leadDesc')}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">{t('seoPages.pages.compostableCoffeeBags.sections.moq.shipVal')}</div>
              <div className="text-sm text-purple-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.shipLabel')}</div>
              <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.shipDesc')}</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.moq.pricingTitle')}</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.moq.pricing1')}</li>
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.moq.pricing2')}</li>
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.moq.pricing3')}</li>
              <li>• {t('seoPages.pages.compostableCoffeeBags.sections.moq.pricing4')}</li>
            </ul>
            <p className="text-xs mt-2 text-neutral-600">{t('seoPages.pages.compostableCoffeeBags.sections.moq.pricingNote')}</p>
          </div>
        </div>
      )
    },
    {
      id: 'use-cases',
      title: t('seoPages.pages.compostableCoffeeBags.sections.useCases.title'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case1Title')}</h4>
              <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case1Desc')}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case2Title')}</h4>
              <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case2Desc')}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case3Title')}</h4>
              <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case3Desc')}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case4Title')}</h4>
              <p className="text-sm">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.case4Desc')}</p>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <Link to="/case-studies/coffee-roastery" className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.useCases.caseStudyLink')}</Link>
          </p>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.compostableCoffeeBags.sections.faq.title'),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.compostableCoffeeBags.sections.faq.q1')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.compostableCoffeeBags.sections.faq.a1')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.compostableCoffeeBags.sections.faq.q2')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.compostableCoffeeBags.sections.faq.a2')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.compostableCoffeeBags.sections.faq.q3')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.compostableCoffeeBags.sections.faq.a3')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.compostableCoffeeBags.sections.faq.q4')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.compostableCoffeeBags.sections.faq.a4')}</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">{t('seoPages.pages.compostableCoffeeBags.sections.faq.q5')}</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">{t('seoPages.pages.compostableCoffeeBags.sections.faq.a5')}</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.compostableCoffeeBags.sections.cta.title'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
          <h4 className="text-xl font-bold text-neutral-900 mb-4">{t('seoPages.pages.compostableCoffeeBags.sections.cta.title')}</h4>
          <p className="text-neutral-700 mb-6">
            {t('seoPages.pages.compostableCoffeeBags.sections.cta.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.compostableCoffeeBags.sections.cta.btnConsult')}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {t('seoPages.pages.compostableCoffeeBags.sections.cta.btnShop')}
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-primary-200">
            <p className="text-sm text-neutral-600">
              <strong>{t('seoPages.pages.compostableCoffeeBags.sections.cta.quickLinks')}</strong>{' '}
              <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.cta.linkMaterials')}</Link> |{' '}
              <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.cta.linkCoffee')}</Link> |{' '}
              <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">{t('seoPages.pages.compostableCoffeeBags.sections.cta.linkStandUp')}</Link>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t('seoPages.pages.compostableCoffeeBags.seo.title')}
        description={t('seoPages.pages.compostableCoffeeBags.seo.description')}
        keywords={t('seoPages.pages.compostableCoffeeBags.seo.keywords', { returnObjects: true }) as string[]}
        schemaType="Product"
        additionalSchema={{
          "name": t('seoPages.pages.compostableCoffeeBags.sections.overview.title'),
          "brand": {
            "@type": "Brand",
            "name": "Achieve Pack"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Achieve Pack Company Limited"
          },
          "category": "Compostable Packaging",
          "material": ["PLA", "PBAT", "Kraft Paper", "NatureFlex"],
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "0.55",
            "highPrice": "1.50",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "offerCount": "5"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Certification",
              "value": "ASTM D6400, EN 13432, BPI"
            },
            {
              "@type": "PropertyValue",
              "name": "Minimum Order",
              "value": "100 pieces"
            },
            {
              "@type": "PropertyValue",
              "name": "Lead Time",
              "value": "7-10 days production"
            }
          ]
        }}
      />

      <SEOPageLayout heroBgColor="#14532d"
        title={t('seoPages.pages.compostableCoffeeBags.seo.title')}
        description={t('seoPages.pages.compostableCoffeeBags.seo.description')}
        keywords={t('seoPages.pages.compostableCoffeeBags.seo.keywords', { returnObjects: true }) as string[]}
        heroTitle={t('seoPages.pages.compostableCoffeeBags.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.compostableCoffeeBags.seo.heroSubtitle')}
        introSummary={t('seoPages.pages.compostableCoffeeBags.seo.introSummary')}
        sections={sections}
        heroImage="/imgs/seo-photos/usa/coffee/a_specialty_coffee_packaging_hero_4333484.webp"
      />
    </>
  )
}

export default CompostableCoffeeBagsPage
