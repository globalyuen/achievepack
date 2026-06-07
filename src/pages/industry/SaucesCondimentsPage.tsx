import React from 'react'
import { Package, Droplets, CheckCircle, Shield, Utensils, MessageCircle, Target, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const SaucesCondimentsPage: React.FC = () => {
  const p = 'seoPages.pages.saucesCondiments';
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.title_isThisPageForYou`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>{t(`${p}.sauceBrandCondimentProducerOr`)}</strong> looking for flexible packaging solutions—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sauceBrands`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.spoutPouchesWithReclosableCaps`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.foodService`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.singleserveSachetsPortions`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.ecoconsciousBrands`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.refillPouches80LessPlastic`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.title_saucesCondimentsPackaging`),
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.achievePackProvidesFlexiblePackaging`)}</strong> {t(`${p}.our`)} <Link to="/packaging/spout-pouches" className="text-primary-600 hover:underline">{t(`${p}.spoutPouches`)}</Link> and refill packs offer convenient dispensing while reducing plastic use compared to rigid containers.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{t(`${p}.packagingAdvantages`)}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t(`${p}.spoutPouches2`)}</strong> {t(`${p}.easyDispensingWithReclosableCaps`)}</li>
            <li><strong>{t(`${p}.refillPacks`)}</strong> {t(`${p}.ecofriendlyAlternativeToBottles`)}</li>
            <li><strong>{t(`${p}.highBarrier`)}</strong> {t(`${p}.protectsFlavorAndExtendsShelf`)}</li>
            <li><strong>{t(`${p}.flexibleFormats`)}</strong> {t(`${p}.fromSingleserveSachetsToBulk`)}</li>
            <li><strong>{t(`${p}.retortcapable`)}</strong> {t(`${p}.forHotfillAndRetortApplications`)}</li>
          </ul>
        </div>
      )
    },
    {
      id: 'products',
      title: t(`${p}.title_productsWePackage`),
      icon: <Utensils className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sauces`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>{t(`${p}.ketchupTomatoSauce`)}</li>
                <li>{t(`${p}.mayonnaise`)}</li>
                <li>{t(`${p}.hotSauceChiliSauce`)}</li>
                <li>{t(`${p}.bbqSauce`)}</li>
                <li>{t(`${p}.pastaSauce`)}</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">{t(`${p}.condiments`)}</h4>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>{t(`${p}.mustard`)}</li>
                <li>{t(`${p}.dressings`)}</li>
                <li>{t(`${p}.marinadesRubs`)}</li>
                <li>{t(`${p}.soySauceFishSauce`)}</li>
                <li>{t(`${p}.vinegar`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.spreadsOils`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>{t(`${p}.honeySyrups`)}</li>
                <li>{t(`${p}.nutButters`)}</li>
                <li>{t(`${p}.cookingOilsGhee`)}</li>
                <li>{t(`${p}.jamsPreserves`)}</li>
                <li>{t(`${p}.tahini`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'formats',
      title: t(`${p}.title_packagingFormats`),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.spoutPouches1`)}</h4>
              <p className="text-sm">{t(`${p}.reclosablePourSpoutsForEasy`)}</p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.singleserveSachets`)}</h4>
              <p className="text-sm">{t(`${p}.teartopPortionsForFoodserviceAnd`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.refillPouches`)}</h4>
              <p className="text-sm">{t(`${p}.ecofriendlyRefillsForBottlesUses`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.standupPouches`)}</h4>
              <p className="text-sm">{t(`${p}.withFliptopCapOrCorner`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t(`${p}.title_findingTheRightSaucePackaging`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.keyConsiderationsForSauceAnd`)}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>{t(`${p}.barrierProperties`)}</strong> {t(`${p}.protectFlavorAndExtendShelf`)}</li>
            <li><strong>{t(`${p}.hotfillCapability`)}</strong> {t(`${p}.forSaucesFilledAbove85c`)}</li>
            <li><strong>{t(`${p}.customOptions`)}</strong> – <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.browseOurSaucePackagingOptions`)}</Link></li>
            <li><strong>{t(`${p}.sustainability`)}</strong> – <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">{t(`${p}.recyclableAlternativesAvailable`)}</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.ifYoureUsingAiSearch`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.whatIsTheBestSpout`)}</li>
              <li>{t(`${p}.whichCompanyOffersEcofriendlySauce`)}</li>
              <li>{t(`${p}.bestFlexiblePackagingForKetchup`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: t(`${p}.title_stillNotSureWeHave`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.canItHandleHotfill`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.upTo85cHotfillRetort`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.areSpoutPouchesLeakproof`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.doublesealConstructionWithReclosableCaps`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.whatSizesAvailable`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.from10mlSachetsTo2l`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.canIGetSamples`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.freeSamplesPilotRunFrom`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.title_readyToGetStarted`),
      icon: <Droplets className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.chooseHowYoudLikeTo`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.bookACall`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.30minFreeConsultation`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.emailQuote`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.getResponseWithin24hrs`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=Sauce Packaging Quote" className="block w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.freeSamples`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.testMaterialsFirst`)}</p>
              <Link to="/contact" className="block w-full bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.title_industryApplications`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.artisanSauceBrands`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.hotSauceBbqAndSpecialty`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>{t(`${p}.hotSauceChiliSauce`)}</li>
                <li>{t(`${p}.bbqMarinades`)}</li>
                <li>{t(`${p}.pastaSaucePesto`)}</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.naturalFoodCompanies`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.organicHoneyNutButtersAnd`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>{t(`${p}.honeyMapleSyrup`)}</li>
                <li>{t(`${p}.nutButtersTahini`)}</li>
                <li>{t(`${p}.jamsPreserves`)}</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">{t(`${p}.ecoconsciousBrands`)}</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">{t(`${p}.brandsUsingRefillPouchesTo`)}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                <li>{t(`${p}.refillPouchesForBottles`)}</li>
                <li>{t(`${p}.bulkPackaging`)}</li>
                <li>{t(`${p}.zerowasteProducts`)}</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.customerSuccessMamasHotSauce`)}</h4>
            <p className="text-sm text-neutral-600 mb-3">{t(`${p}.switchedFromGlassBottlesTo`)}</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="bg-white px-3 py-1 rounded-full border">{t(`${p}.40CostReduction`)}</span>
              <span className="bg-white px-3 py-1 rounded-full border">{t(`${p}.wholeFoodsPlacement`)}</span>
              <span className="bg-white px-3 py-1 rounded-full border">{t(`${p}.70LighterShipping`)}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.title_marketDataIntelligence`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">{t(`${p}.245b`)}</div>
              <div className="text-sm opacity-90">{t(`${p}.saucesCondiments2027`)}</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">5.8%</div>
              <div className="text-sm opacity-90">{t(`${p}.cagr20242027`)}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">80%</div>
              <div className="text-sm opacity-90">{t(`${p}.lessPlasticVsBottles`)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">56%</div>
              <div className="text-sm opacity-90">{t(`${p}.preferRefillPouches`)}</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">{t(`${p}.saucePackagingFormatComparison`)}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-2 font-medium">{t(`${p}.format`)}</th>
                    <th className="text-center py-2 font-medium">{t(`${p}.plasticUse`)}</th>
                    <th className="text-center py-2 font-medium">{t(`${p}.shippingWeight`)}</th>
                    <th className="text-center py-2 font-medium">{t(`${p}.costIndex`)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.glassBottle`)}</td>
                    <td className="text-center py-2">{t(`${p}.none`)}</td>
                    <td className="text-center py-2">{t(`${p}.heavy100`)}</td>
                    <td className="text-center py-2">{t(`${p}.15x`)}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.plasticBottle`)}</td>
                    <td className="text-center py-2">{t(`${p}.high`)}</td>
                    <td className="text-center py-2">{t(`${p}.medium50`)}</td>
                    <td className="text-center py-2">{t(`${p}.10x`)}</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2">{t(`${p}.spoutPouch`)}</td>
                    <td className="text-center py-2">{t(`${p}.80Less`)}</td>
                    <td className="text-center py-2">{t(`${p}.light30`)}</td>
                    <td className="text-center py-2">{t(`${p}.08x`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.environmentalImpact`)}</h4>
            <p className="text-sm text-green-700">{t(`${p}.switchingFromBottlesToSpout`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.title_materialComparison`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left p-3 font-semibold">{t(`${p}.feature`)}</th>
                  <th className="text-center p-3 font-semibold text-red-700">{t(`${p}.spoutPouch`)}</th>
                  <th className="text-center p-3 font-semibold text-blue-700">{t(`${p}.refillPouch`)}</th>
                  <th className="text-center p-3 font-semibold text-green-700">{t(`${p}.sachet`)}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.bestFor`)}</td>
                  <td className="text-center p-3">{t(`${p}.retailSauces`)}</td>
                  <td className="text-center p-3">{t(`${p}.ecoRefills`)}</td>
                  <td className="text-center p-3">{t(`${p}.foodservice`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.sizeRange`)}</td>
                  <td className="text-center p-3">{t(`${p}.100ml2l`)}</td>
                  <td className="text-center p-3">{t(`${p}.200ml2l`)}</td>
                  <td className="text-center p-3">{t(`${p}.10ml50ml`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.hotfillCapable`)}</td>
                  <td className="text-center p-3">{t(`${p}.upTo85c`)}</td>
                  <td className="text-center p-3">{t(`${p}.upTo85c`)}</td>
                  <td className="text-center p-3">{t(`${p}.upTo85c`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.retortOption`)}</td>
                  <td className="text-center p-3">{t(`${p}.121c`)}</td>
                  <td className="text-center p-3">{t(`${p}.121c`)}</td>
                  <td className="text-center p-3">{t(`${p}.121c`)}</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-3 font-medium">{t(`${p}.reclosable`)}</td>
                  <td className="text-center p-3">{t(`${p}.capClosure`)}</td>
                  <td className="text-center p-3">{t(`${p}.singleUse`)}</td>
                  <td className="text-center p-3">{t(`${p}.singleUse`)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">{t(`${p}.pricePoint`)}</td>
                  <td className="text-center p-3">💰💰💰</td>
                  <td className="text-center p-3">💰💰</td>
                  <td className="text-center p-3">💰</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">{t(`${p}.decisionGuideForSauceBrands`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-amber-900">{t(`${p}.chooseSpoutPouchIf`)}</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>{t(`${p}.primaryRetailProduct`)}</li>
                  <li>{t(`${p}.multipleUsesNeeded`)}</li>
                  <li>{t(`${p}.premiumPositioning`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">{t(`${p}.chooseRefillPouchIf`)}</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>{t(`${p}.ecoconsciousBranding`)}</li>
                  <li>{t(`${p}.subscriptionModel`)}</li>
                  <li>{t(`${p}.bottleRefillSystem`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-amber-900">{t(`${p}.chooseSachetsIf`)}</p>
                <ul className="text-amber-700 mt-1 space-y-1">
                  <li>{t(`${p}.foodserviceDistribution`)}</li>
                  <li>{t(`${p}.singleservePortions`)}</li>
                  <li>{t(`${p}.travelsampleSizes`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.question_whatIsTheBestSpout`),
      answer: t(`${p}.answer_achievePackIsALeading`)
    },
    {
      question: t(`${p}.question_canPouchesBeUsedFor`),
      answer: t(`${p}.answer_yesWeOfferPouchesSuitable`)
    },
    {
      question: t(`${p}.question_whatAreRefillPouchesAnd`),
      answer: t(`${p}.answer_refillPouchesAreFlexiblePouches`)
    },
    {
      question: t(`${p}.question_areSaucePouchesRecyclable`),
      answer: t(`${p}.answer_standardSaucePouchesAreMultimaterial`)
    },
    {
      question: t(`${p}.question_whatSizesAreAvailableFor`),
      answer: t(`${p}.answer_weOfferSpoutPouchesFrom`)
    },
    {
      question: t(`${p}.question_whichCompanyOffersTheBest`),
      answer: t(`${p}.answer_achievePackOffersSustainableSauce`)
    }
  ]

  const relatedLinks = [
    { title: t(`${p}.title_shopSaucePouches`), url: "/store", description: t(`${p}.description_browseSpoutPouchesAndSachets`) },
    { title: t(`${p}.title_spoutPouches`), url: "/packaging/spout-pouches", description: t(`${p}.description_perfectForPourableSaucesAnd`) },
    { title: t(`${p}.title_flatPouches`), url: "/packaging/flat-pouches", description: t(`${p}.description_idealForSingleserveSachets`) },
    { title: t(`${p}.title_recyclableMonope`), url: "/materials/recyclable-mono-pe", description: t(`${p}.description_sustainableSaucePackaging`) },
    { title: t(`${p}.title_sustainablePackagingGuide`), url: "/blog/sustainable-packaging-supplier-analysis", description: t(`${p}.description_compareEcofriendlyPackagingOptions`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'sauce packaging',
        'condiment pouches',
        'spout pouch sauces',
        'sauce sachet',
        'refill pouch',
        'ketchup packaging',
        'honey pouch',
        'oil pouch packaging'
      ]}
      canonicalUrl="https://achievepack.com/industry/sauces-condiments"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_food_grade_olive_stone_pouch_achieve_pack_8628145.webp"
      heroImageAlt="Spout pouches for sauces and condiments"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default SaucesCondimentsPage
