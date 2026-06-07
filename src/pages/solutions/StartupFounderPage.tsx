import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Rocket, Leaf, Award, Shield, Target, Calendar, MessageCircle, Package, Zap, Users, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const StartupFounderPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.startupFounder'

  const sections = [
    {
      id: 'hero-problem',
      title: t(`${p}.sections.hero-problem.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.hero-problem.intro1`)}<strong>{t(`${p}.sections.hero-problem.introStrong`)}</strong>{t(`${p}.sections.hero-problem.intro2`)}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.hero-problem.challengesTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  {(t(`${p}.sections.hero-problem.challenges`, { returnObjects: true }) as string[]).map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.hero-problem.needsTitle`)}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  {(t(`${p}.sections.hero-problem.needs`, { returnObjects: true }) as string[]).map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
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
          <p>
            {t(`${p}.sections.solution.intro`)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">{t(`${p}.sections.solution.card1Val`)}</div>
              <div className="text-sm text-green-600 font-medium">{t(`${p}.sections.solution.card1Title`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.solution.card1Desc`)}</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{t(`${p}.sections.solution.card2Val`)}</div>
              <div className="text-sm text-blue-600 font-medium">{t(`${p}.sections.solution.card2Title`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.solution.card2Desc`)}</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">{t(`${p}.sections.solution.card3Val`)}</div>
              <div className="text-sm text-purple-600 font-medium">{t(`${p}.sections.solution.card3Title`)}</div>
              <p className="text-xs mt-2 text-neutral-600">{t(`${p}.sections.solution.card3Desc`)}</p>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.solution.galleryTitle`)}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp" 
                alt="Compostable pouch for wellness startup brand" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.captionCompostable`)}
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch for protein powder startup" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.captionStandUp`)}
              />
              <ClickableImage 
                src="/imgs/store/surface/matt.webp" 
                alt="Matte finish premium look for DTC brand" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.captionMatte`)}
              />
              <ClickableImage 
                src="/imgs/4-infograhic/compost.webp" 
                alt="Industrial compostable certification for startup" 
                className="w-full h-28 object-cover rounded-lg"
                caption={t(`${p}.sections.solution.captionCertified`)}
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
          <p>
            {t(`${p}.sections.certifications.intro`)}<strong>{t(`${p}.sections.certifications.introStrong`)}</strong>{t(`${p}.sections.certifications.introEnd`)}
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cert1`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cert1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cert2`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cert2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cert3`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cert3Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <h4 className="font-semibold text-neutral-800">{t(`${p}.sections.certifications.cert4`)}</h4>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.certifications.cert4Desc`)}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800">
              <strong>{t(`${p}.sections.certifications.footerText`).split(':')[0]}:</strong>
              {t(`${p}.sections.certifications.footerText`).split(':').slice(1).join(':')}
            </p>
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
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.materials.mat1Title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.materials.mat1Desc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.mat2Title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.materials.mat2Desc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
            <Link to="/materials/pcr" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.materials.mat3Title`)}</h4>
              <p className="text-sm text-purple-700">{t(`${p}.sections.materials.mat3Desc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
            <Link to="/materials/bio-pe" className="block bg-amber-50 p-5 rounded-lg border border-amber-200 hover:shadow-md transition">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materials.mat4Title`)}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.materials.mat4Desc`)}</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">{t(`${p}.sections.materials.learnMore`)}</span>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'design-support',
      title: t(`${p}.sections.design-support.title`),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t(`${p}.sections.design-support.intro`)}<strong>{t(`${p}.sections.design-support.introStrong`)}</strong>{t(`${p}.sections.design-support.introEnd`)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.design-support.step1Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.design-support.step1Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.design-support.step2Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.design-support.step2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.design-support.step3Title`)}</h4>
              <p className="text-sm text-neutral-600">{t(`${p}.sections.design-support.step3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'social-proof',
      title: t(`${p}.sections.social-proof.title`),
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <p className="text-sm italic text-neutral-600 mb-4">
                {t(`${p}.sections.social-proof.quote1`)}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{t(`${p}.sections.social-proof.author1`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.social-proof.role1`)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <p className="text-sm italic text-neutral-600 mb-4">
                {t(`${p}.sections.social-proof.quote2`)}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800">{t(`${p}.sections.social-proof.author2`)}</p>
                  <p className="text-xs text-neutral-500">{t(`${p}.sections.social-proof.role2`)}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <strong>500+</strong> {t(`${p}.sections.social-proof.badge1`)}
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <strong>8</strong> {t(`${p}.sections.social-proof.badge2`)}
            </div>
            <div className="px-4 py-2 bg-neutral-100 rounded-lg text-sm">
              <strong>98%</strong> {t(`${p}.sections.social-proof.badge3`)}
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
                  <th className="p-3 text-left">{t(`${p}.sections.pricing.th1`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.pricing.th2`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.pricing.th3`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row1Size`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row1Price`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row1Best`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row2Size`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row2Price`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row2Best`)}</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row3Size`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row3Price`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row3Best`)}</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.pricing.row4Size`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row4Price`)}</td>
                  <td className="p-3">{t(`${p}.sections.pricing.row4Best`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500">{t(`${p}.sections.pricing.footerText`)}</p>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.sections.cta.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-primary-600 to-green-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t(`${p}.sections.cta.header`)}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t(`${p}.sections.cta.desc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.sections.cta.btn1`)}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Package className="h-5 w-5" />
              {t(`${p}.sections.cta.btn2`)}
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            {t(`${p}.sections.cta.emailText`)}<a href="mailto:ryan@achievepack.com" className="underline">ryan@achievepack.com</a>
          </p>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.industry-scenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.industry-scenarios.intro1`)}<strong>{t(`${p}.sections.industry-scenarios.introStrong`)}</strong>{t(`${p}.sections.industry-scenarios.intro2`)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">{t(`${p}.sections.industry-scenarios.card1Title`)}</h4>
              </div>
              <p className="text-sm text-amber-700">{t(`${p}.sections.industry-scenarios.card1Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">{t(`${p}.sections.industry-scenarios.card2Title`)}</h4>
              </div>
              <p className="text-sm text-green-700">{t(`${p}.sections.industry-scenarios.card2Desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">{t(`${p}.sections.industry-scenarios.card3Title`)}</h4>
              </div>
              <p className="text-sm text-purple-700">{t(`${p}.sections.industry-scenarios.card3Desc`)}</p>
            </div>
          </div>

          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.industry-scenarios.successTitle`)}
            </h4>
            <p className="text-sm text-neutral-600 mb-3">
              {t(`${p}.sections.industry-scenarios.successDesc`)}
            </p>
            <div className="flex gap-4 text-xs">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">{t(`${p}.sections.industry-scenarios.successBadge1`)}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">{t(`${p}.sections.industry-scenarios.successBadge2`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.market-data.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.market-data.intro1`)}<strong>{t(`${p}.sections.market-data.introStrong`)}</strong>{t(`${p}.sections.market-data.intro2`)}
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{t(`${p}.sections.market-data.card1Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.card1Desc`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{t(`${p}.sections.market-data.card2Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.card2Desc`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{t(`${p}.sections.market-data.card3Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.card3Desc`)}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{t(`${p}.sections.market-data.card4Val`)}</div>
              <div className="text-sm text-neutral-600">{t(`${p}.sections.market-data.card4Desc`)}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              {t(`${p}.sections.market-data.trendTitle`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-amber-700 mb-2">{t(`${p}.sections.market-data.col1Title`)}</h5>
                <ul className="text-amber-600 space-y-1">
                  {(t(`${p}.sections.market-data.col1Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-amber-700 mb-2">{t(`${p}.sections.market-data.col2Title`)}</h5>
                <ul className="text-amber-600 space-y-1">
                  {(t(`${p}.sections.market-data.col2Items`, { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.material-comparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            {t(`${p}.sections.material-comparison.intro1`)}<strong>{t(`${p}.sections.material-comparison.introStrong`)}</strong>{t(`${p}.sections.material-comparison.intro2`)}
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left rounded-tl-lg">{t(`${p}.sections.material-comparison.th1`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.material-comparison.th2`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.material-comparison.th3`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.material-comparison.th4`)}</th>
                  <th className="p-3 text-left">{t(`${p}.sections.material-comparison.th5`)}</th>
                  <th className="p-3 text-left rounded-tr-lg">{t(`${p}.sections.material-comparison.th6`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.material-comparison.row1Mat`)}</td>
                  <td className="p-3"><span className="text-green-600">★★★★★</span></td>
                  <td className="p-3">100 pcs</td>
                  <td className="p-3">Launch & Scale</td>
                  <td className="p-3"><span className="text-green-600">✓ {t(`${p}.sections.material-comparison.row1Appeal`)}</span></td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50 hover:bg-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sections.material-comparison.row2Mat`)}</td>
                  <td className="p-3"><span className="text-green-600">★★★★</span></td>
                  <td className="p-3">100 pcs</td>
                  <td className="p-3">Growth Stage</td>
                  <td className="p-3"><span className="text-green-600">✓ {t(`${p}.sections.material-comparison.row2Appeal`)}</span></td>
                  <td className="p-3">$$</td>
                </tr>
                <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.material-comparison.row3Mat`)}</td>
                  <td className="p-3"><span className="text-green-600">★★★</span></td>
                  <td className="p-3">100 pcs</td>
                  <td className="p-3">Scale Stage</td>
                  <td className="p-3"><span className="text-yellow-600">~ {t(`${p}.sections.material-comparison.row3Appeal`)}</span></td>
                  <td className="p-3">$$</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 font-medium">{t(`${p}.sections.material-comparison.row4Mat`)}</td>
                  <td className="p-3"><span className="text-green-600">★★★★</span></td>
                  <td className="p-3">100 pcs</td>
                  <td className="p-3">Premium Launch</td>
                  <td className="p-3"><span className="text-green-600">✓ {t(`${p}.sections.material-comparison.row4Appeal`)}</span></td>
                  <td className="p-3">$$</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.sections.material-comparison.adviceTitle`)}
            </h4>
            <p className="text-sm text-amber-700">
              {t(`${p}.sections.material-comparison.adviceDesc`).split('Kraft + PLA Compostable')[0]}
              <strong>Kraft + PLA Compostable</strong>
              {t(`${p}.sections.material-comparison.adviceDesc`).split('Kraft + PLA Compostable')[1]?.split('Premium Kraft Paper')[0]}
              <strong>Premium Kraft Paper</strong>
              {t(`${p}.sections.material-comparison.adviceDesc`).split('Premium Kraft Paper')[1]}
            </p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faqs.q1`),
      answer: t(`${p}.faqs.a1`)
    },
    {
      question: t(`${p}.faqs.q2`),
      answer: t(`${p}.faqs.a2`)
    },
    {
      question: t(`${p}.faqs.q3`),
      answer: t(`${p}.faqs.a3`)
    },
    {
      question: t(`${p}.faqs.q4`),
      answer: t(`${p}.faqs.a4`)
    },
    {
      question: t(`${p}.faqs.q5`),
      answer: t(`${p}.faqs.a5`)
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/solutions/startup-founder" />
        <meta property="og:title" content={t(`${p}.title`)} />
        <meta property="og:description" content={t(`${p}.description`)} />
        <meta property="og:url" content="https://achievepack.com/solutions/startup-founder" />
        <meta name="keywords" content={(t(`${p}.keywords`, { returnObjects: true }) as string[]).join(', ')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Startup Founder Packaging Solutions",
            "description": "Custom sustainable packaging for startup founders with low minimum order quantities, certified materials, and design support.",
            "provider": { "@type": "Organization", "name": "Achieve Pack" },
            "areaServed": ["United States", "United Kingdom", "European Union", "Australia"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Startup Packaging Options",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Compostable Stand-Up Pouch", "description": "ASTM D6400 certified" }},
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Recyclable Mono-PE Pouch", "description": "Store drop-off recyclable" }}
              ]
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={t(`${p}.keywords`, { returnObjects: true }) as string[]}
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
