import React from 'react'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Link } from 'react-router-dom'
import { Rocket, Leaf, Award, CheckCircle, Clock, Shield, Target, Calendar, MessageCircle, Package, Zap, Users, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const StartupFounderPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.startupFounder'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.heroProblem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.heroProblem.intro`) }} />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.heroProblem.challengesTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {t(`${p}.sections.heroProblem.challenges.0`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.challenges.1`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.challenges.2`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.challenges.3`)}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.heroProblem.needTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {t(`${p}.sections.heroProblem.need.0`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.need.1`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.need.2`)}</li>
                  <li>• {t(`${p}.sections.heroProblem.need.3`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: t(`${p}.sections.solution.title`),
      icon: <Rocket className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.solution.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">{t(`${p}.sections.solution.moqTitle`)}</div>
              <div className="text-sm text-green-600 font-medium">{t(`${p}.sections.solution.moqDesc`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.solution.moqDescDetail`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{t(`${p}.sections.solution.flexTitle`)}</div>
              <div className="text-sm text-blue-600 font-medium">{t(`${p}.sections.solution.flexDesc`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.solution.flexDescDetail`)}</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">{t(`${p}.sections.solution.plateTitle`)}</div>
              <div className="text-sm text-purple-600 font-medium">{t(`${p}.sections.solution.plateDesc`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.solution.plateDescDetail`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.solution.examplesTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp" 
                alt="Compostable pouch for wellness startup brand" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption1`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch for protein powder startup" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption2`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/matt.webp" 
                alt="Matte finish premium look for DTC brand" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption3`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial compostable certification for startup" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.caption4`)}
              />
            </div>
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
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.certifications.intro`) }} />
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.c1Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.c1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.c2Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.c2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.c3Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.c3Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.c4Title`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.c4Desc`)}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.certifications.marketingNote`) }} />
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
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-5 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.materials.compostableTitle`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.materials.compostableDesc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.recyclableTitle`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.materials.recyclableDesc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
            <Link to="/materials/pcr" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.materials.pcrTitle`)}</h4>
              <p className="text-sm text-purple-700">{t(`${p}.sections.materials.pcrDesc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
            <Link to="/materials/bio-pe" className="block bg-amber-50 p-5 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materials.bioPETitle`)}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.materials.bioPEDesc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'design-support',
      title: t(`${p}.sections.designSupport.title`),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.sections.designSupport.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.designSupport.col1Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.designSupport.col1Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.designSupport.col2Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.designSupport.col2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.designSupport.col3Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.designSupport.col3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'social-proof',
      title: t(`${p}.sections.socialProof.title`),
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <p className="text-sm italic text-neutral-600 mb-4">
                "{t(`${p}.sections.socialProof.quote1`)}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{t(`${p}.sections.socialProof.author1`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.socialProof.role1`)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <p className="text-sm italic text-neutral-600 mb-4">
                "{t(`${p}.sections.socialProof.quote2`)}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{t(`${p}.sections.socialProof.author2`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.socialProof.role2`)}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <span>{t(`${p}.sections.socialProof.stat1`)} </span>
              <strong>{t(`${p}.sections.socialProof.stat1Label`)}</strong>
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <span>{t(`${p}.sections.socialProof.stat2`)} </span>
              <strong>{t(`${p}.sections.socialProof.stat2Label`)}</strong>
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <span>{t(`${p}.sections.socialProof.stat3`)} </span>
              <strong>{t(`${p}.sections.socialProof.stat3Label`)}</strong>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pricing',
      title: t(`${p}.sections.pricing.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">{t(`${p}.sections.pricing.headers.0`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.pricing.headers.1`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.pricing.headers.2`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row1.0`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row1.1`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row1.2`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row2.0`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row2.1`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row2.2`)}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row3.0`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row3.1`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row3.2`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row4.0`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row4.1`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row4.2`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500">{t(`${p}.sections.pricing.note`)}</p>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-600 to-green-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.title`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.description`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.button`)}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              {t(`${p}.sections.cta.browse`)}
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            {t(`${p}.sections.cta.emailNote`)} <a href="mailto:ryan@achievepack.com" className="underline">ryan@achievepack.com</a>
          </p>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industryScenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.industryScenarios.intro`) }} />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industryScenarios.wellnessTitle`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industryScenarios.wellnessDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industryScenarios.foodTitle`)}</h4>
              </div>
              <p className="text-sm text-green-700">{t(`${p}.sections.industryScenarios.foodDesc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.sections.industryScenarios.kickTitle`)}</h4>
              </div>
              <p className="text-sm text-purple-700">{t(`${p}.sections.industryScenarios.kickDesc`)}</p>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.industryScenarios.successTitle`)}
            </h4>
            <p className="text-sm text-neutral-600 mb-3">
              {t(`${p}.sections.industryScenarios.successDesc`)}
            </p>
            <div className="flex gap-4 text-xs">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">{t(`${p}.sections.industryScenarios.successTag1`)}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">{t(`${p}.sections.industryScenarios.successTag2`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.marketData.intro`) }} />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.marketData.stat1`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat1Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.marketData.stat2`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat2Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.marketData.stat3`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat3Label`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t(`${p}.sections.marketData.stat4`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.marketData.stat4Label`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.marketData.trendsTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-amber-700 mb-2">{t(`${p}.sections.marketData.factorsTitle`)}</h5>
                <ul className="text-amber-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.factorsList.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.factorsList.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.factorsList.2`)}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-amber-700 mb-2">{t(`${p}.sections.marketData.investTitle`)}</h5>
                <ul className="text-amber-600 space-y-1">
                  <li>• {t(`${p}.sections.marketData.investList.0`)}</li>
                  <li>• {t(`${p}.sections.marketData.investList.1`)}</li>
                  <li>• {t(`${p}.sections.marketData.investList.2`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.materialComparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.materialComparison.intro`) }} />
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left rounded-tl-lg">{t(`${p}.sections.materialComparison.headers.0`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.1`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.2`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.3`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.materialComparison.headers.4`)}</th>
                  <th className="p-3 text-left rounded-tr-lg">{t(`${p}.sections.materialComparison.headers.5`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row1.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.3`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row1.4`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row1.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row2.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row2.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.3`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row2.4`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row2.5`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row3.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row3.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.3`)}</td>
                  <td className="p-3"><span className="text-yellow-600">{t(`${p}.sections.materialComparison.row3.4`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row3.5`)}</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.materialComparison.row4.0`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row4.1`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.2`)}</td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.3`)}</td>
                  <td className="p-3"><span className="text-green-600">{t(`${p}.sections.materialComparison.row4.4`)}</span></td>
                  <td className="p-3">{t(`${p}.sections.materialComparison.row4.5`)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.materialComparison.guideTitle`)}
            </h4>
            <p className="text-sm text-amber-700" dangerouslySetInnerHTML={{ __html: t(`${p}.sections.materialComparison.guideDesc`) }} />
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    }
  ]

  return (
    <>
      <DualDomainSEOHead
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['startup packaging', 'low MOQ pouches', 'DTC brand packaging', 'sustainable packaging startup', 'compostable pouches low minimum', 'wellness brand packaging', 'protein powder packaging']}
        schemaType="Service"
        ogImage="/imgs/seo-photos/usa/startup/a_startup_sustainable_packaging_hero.webp"
        additionalSchema={{
          provider: { '@type': 'Organization', name: 'Achieve Pack' },
          areaServed: ['United States', 'United Kingdom', 'European Union', 'Australia'],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Startup Packaging Options',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Compostable Stand-Up Pouch', description: 'ASTM D6400 certified' }},
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Recyclable Mono-PE Pouch', description: 'Store drop-off recyclable' }}
            ]
          }
        }}
      />

      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['startup packaging', 'low MOQ pouches', 'DTC brand packaging', 'sustainable packaging startup', 'wellness brand packaging']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp"
      />
    </>
  )
}

export default StartupFounderPage
