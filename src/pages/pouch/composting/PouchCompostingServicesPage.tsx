import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useState, useMemo } from 'react'
import { Leaf, Search, MapPin, ExternalLink, HelpCircle, ChevronDown, CheckCircle, Award, Target, Zap, Clock, Globe, AlertTriangle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

interface CompostService {
  state: string
  city: string
  name: string
  url: string
}



export default function PouchCompostingServicesPage() {
  const { t } = useTranslation()
  const COMPOST_SERVICES: CompostService[] = useMemo(() => [
    { state: "Alabama", city: "Birmingham", name: t('seoPages.pages.pouchCompostingServices.mountainBrookPublicWorks'), url: "https://www.mtnbrook.org/publicworks/page/compost" },
  { state: "Alaska", city: "Anchorage", name: t('seoPages.pages.pouchCompostingServices.alaskaWasteCommercialComposting'), url: "https://www.alaskawaste.net/" },
  { state: "Alaska", city: "Anchorage", name: t('seoPages.pages.pouchCompostingServices.greenEarthLandworks'), url: "http://www.greenearthalaska.com/" },
  { state: "Alaska", city: "Anchorage", name: t('seoPages.pages.pouchCompostingServices.communityCompost'), url: "https://www.muni.org/Departments/SWS/Recycling/Pages/CommunityCompost.aspx" },
  { state: "Alaska", city: "Juneau", name: t('seoPages.pages.pouchCompostingServices.juneauComposts'), url: "https://juneaucomposts.com/" },
  { state: "Alaska", city: "Kodiak", name: t('seoPages.pages.pouchCompostingServices.kodiakComposting'), url: "https://www.city.kodiak.ak.us/publicworks/page/future-biosolids-composting-facility-information" },
  { state: "Arizona", city: "Flagstaff", name: t('seoPages.pages.pouchCompostingServices.corbinComposting'), url: "https://www.corbincompost.com/" },
  { state: "Arizona", city: "Phoenix", name: t('seoPages.pages.pouchCompostingServices.recycledCity'), url: "https://www.recycledcity.com/" },
  { state: "Arizona", city: "Phoenix", name: t('seoPages.pages.pouchCompostingServices.weCareCompost'), url: "http://www.wecarecompost.com/wecare-products/locations/phoenix-az/" },
  { state: "Arizona", city: "Tempe", name: t('seoPages.pages.pouchCompostingServices.tempesCompostYard'), url: "https://www.tempe.gov/government/municipal-utilities/solid-waste-and-recycling/curbside-green-organics-program" },
  { state: "Arizona", city: "Tucson", name: t('seoPages.pages.pouchCompostingServices.foodcycle'), url: "https://www.tucsonaz.gov/Departments/Environmental-Services/FoodCycle-At-Home" },
  { state: "Arizona", city: "Tucson", name: t('seoPages.pages.pouchCompostingServices.desertCompostables'), url: "https://www.desertcompostables.com/" },
  { state: "Arkansas", city: "Bentonville", name: t('seoPages.pages.pouchCompostingServices.bentonvilleCompostFacility'), url: "http://www.bentonvillear.com/170/Compost-Facility" },
  { state: "Arkansas", city: "Fayetteville", name: t('seoPages.pages.pouchCompostingServices.cityCompostProgram'), url: "https://www.fayetteville-ar.gov/3421/Composting-and-Mulch" },
  { state: "Arkansas", city: "Hot Springs", name: t('seoPages.pages.pouchCompostingServices.hotSpringsCompostFacility'), url: "https://www.cityhs.net/240/Compost" },
  { state: "California", city: "Alameda", name: t('seoPages.pages.pouchCompostingServices.alamedaCountySustainability'), url: "https://www.acgov.org/sustain/what/recycling/public.htm" },
  { state: "California", city: "Berkeley", name: t('seoPages.pages.pouchCompostingServices.cityOfBerkeleyPublic'), url: "https://www.cityofberkeley.info/ContentDisplay.aspx?id=5606" },
  { state: "California", city: "Lake Tahoe", name: t('seoPages.pages.pouchCompostingServices.slowFood'), url: "https://www.slowfoodlaketahoe.org/compost" },
  { state: "California", city: "Long Beach", name: t('seoPages.pages.pouchCompostingServices.longBeachCommunityCompost'), url: "https://lbcommunitycompost.org/" },
  { state: "California", city: "Los Angeles", name: t('seoPages.pages.pouchCompostingServices.laCompost'), url: "https://www.lacompost.org/" },
  { state: "California", city: "Los Angeles", name: t('seoPages.pages.pouchCompostingServices.compostableLa'), url: "https://www.compostablela.com/" },
  { state: "California", city: "San Diego", name: t('seoPages.pages.pouchCompostingServices.inika'), url: "https://www.inika.org/" },
  { state: "California", city: "San Francisco", name: t('seoPages.pages.pouchCompostingServices.recologySanFrancisco'), url: "https://www.recology.com/recology-san-francisco/your-three-carts/" },
  { state: "California", city: "San Francisco", name: t('seoPages.pages.pouchCompostingServices.sfEnvironment'), url: "https://sfenvironment.org/es/zero-waste/recycling-and-composting" },
  { state: "California", city: "Oakland", name: t('seoPages.pages.pouchCompostingServices.oaklandRecycles'), url: "https://www.oaklandrecycles.com/" },
  { state: "Colorado", city: "Denver", name: t('seoPages.pages.pouchCompostingServices.denverComposts'), url: "https://www.denvergov.org/content/denvergov/en/trash-and-recycling/composting/compost-collection-program.html" },
  { state: "Colorado", city: "Denver", name: t('seoPages.pages.pouchCompostingServices.scrapsMileHigh'), url: "https://scrapsmilehigh.com/" },
  { state: "Colorado", city: "Boulder", name: t('seoPages.pages.pouchCompostingServices.universityOfColoradoEnvironmental'), url: "https://www.colorado.edu/ecenter/zero-waste/compost" },
  { state: "Colorado", city: "Fort Collins", name: t('seoPages.pages.pouchCompostingServices.commonGoodCompost'), url: "https://www.commongoodcompost.org/" },
  { state: "Connecticut", city: "Hartford", name: t('seoPages.pages.pouchCompostingServices.blueEarthCompost'), url: "https://www.blueearthcompost.com/" },
  { state: "Connecticut", city: "New Haven", name: t('seoPages.pages.pouchCompostingServices.peelsWheels'), url: "https://www.pwcomposting.com/" },
  { state: "District of Columbia", city: "Washington", name: t('seoPages.pages.pouchCompostingServices.compostCrew'), url: "https://compostcrew.com/" },
  { state: "District of Columbia", city: "Washington", name: t('seoPages.pages.pouchCompostingServices.compostCab'), url: "https://compostcab.com/" },
  { state: "Florida", city: "Orlando", name: t('seoPages.pages.pouchCompostingServices.otownCompost'), url: "https://o-towncompost.com/" },
  { state: "Florida", city: "Miami", name: t('seoPages.pages.pouchCompostingServices.back2earth'), url: "https://www.back2earth.org/" },
  { state: "Florida", city: "Tampa", name: t('seoPages.pages.pouchCompostingServices.suncoastCompost'), url: "https://www.suncoastcompost.com/" },
  { state: "Georgia", city: "Atlanta", name: t('seoPages.pages.pouchCompostingServices.compostnow'), url: "https://compostnow.org/" },
  { state: "Georgia", city: "Athens", name: t('seoPages.pages.pouchCompostingServices.awesomePossum'), url: "https://www.awesomepossumcomposting.com/" },
  { state: "Hawaii", city: "Kaua'i County", name: t('seoPages.pages.pouchCompostingServices.countyComposting'), url: "https://www.kauai.gov/Composting" },
  { state: "Idaho", city: "Boise", name: t('seoPages.pages.pouchCompostingServices.curbIt'), url: "https://www.cityofboise.org/departments/public-works/curb-it/compost/" },
  { state: "Illinois", city: "Chicago", name: t('seoPages.pages.pouchCompostingServices.collectiveResource'), url: "https://www.collectiveresource.us/" },
  { state: "Illinois", city: "Chicago", name: t('seoPages.pages.pouchCompostingServices.wastenotCompost'), url: "https://www.wastenotcompost.com/" },
  { state: "Indiana", city: "Indianapolis", name: t('seoPages.pages.pouchCompostingServices.earthMama'), url: "http://earthmamacompost.com/" },
  { state: "Iowa", city: "Iowa City", name: t('seoPages.pages.pouchCompostingServices.iowaCityPublicWorks'), url: "https://www.icgov.org/foodwaste" },
  { state: "Kansas", city: "Kansas City", name: t('seoPages.pages.pouchCompostingServices.kcCanCompost'), url: "https://kccancompost.com/" },
  { state: "Kentucky", city: "Lexington", name: t('seoPages.pages.pouchCompostingServices.seedleaf'), url: "https://www.seedleaf.org/" },
  { state: "Louisiana", city: "New Orleans", name: t('seoPages.pages.pouchCompostingServices.theCompostingNetwork'), url: "https://compostingnetwork.com/" },
  { state: "Maine", city: "Portland", name: t('seoPages.pages.pouchCompostingServices.garbageToGarden'), url: "https://garbagetogarden.org/" },
  { state: "Maryland", city: "Baltimore", name: t('seoPages.pages.pouchCompostingServices.compostCab'), url: "https://compostcab.com/" },
  { state: "Massachusetts", city: "Boston Area", name: t('seoPages.pages.pouchCompostingServices.blackEarthCompost'), url: "https://blackearthcompost.com/" },
  { state: "Massachusetts", city: "Boston Area", name: t('seoPages.pages.pouchCompostingServices.bootstrapCompost'), url: "https://bootstrapcompost.com/" },
  { state: "Massachusetts", city: "Cambridge", name: t('seoPages.pages.pouchCompostingServices.cambridgeCurbsideComposting'), url: "https://www.cambridgema.gov/Services/curbsidecomposting" },
  { state: "Michigan", city: "Detroit", name: t('seoPages.pages.pouchCompostingServices.midtownComposting'), url: "https://midtowncomposting.com/product/weekly-residential-compost-collection-monthly/" },
  { state: "Michigan", city: "Ann Arbor", name: t('seoPages.pages.pouchCompostingServices.cityComposting'), url: "https://www.a2gov.org/departments/trash-recycling/Pages/Compost.aspx" },
  { state: "Minnesota", city: "Minneapolis", name: t('seoPages.pages.pouchCompostingServices.cityOfMinneapolisOrganics'), url: "http://www2.minneapolismn.gov/solid-waste/organics/index.htm" },
  { state: "Missouri", city: "St. Louis", name: t('seoPages.pages.pouchCompostingServices.stLouisComposting'), url: "https://www.stlcompost.com/" },
  { state: "Montana", city: "Bozeman", name: t('seoPages.pages.pouchCompostingServices.yesCompost'), url: "https://www.yescompost.com/services" },
  { state: "Nebraska", city: "Omaha", name: t('seoPages.pages.pouchCompostingServices.hillsideSolutions'), url: "https://www.hillside.solutions/" },
  { state: "Nevada", city: "Reno", name: t('seoPages.pages.pouchCompostingServices.downToEarthComposting'), url: "https://www.downtoearthcomposting.com/" },
  { state: "New Hampshire", city: "Manchester", name: t('seoPages.pages.pouchCompostingServices.cityCompost'), url: "https://www.citycompost.com/" },
  { state: "New Jersey", city: "Hoboken", name: t('seoPages.pages.pouchCompostingServices.communityCompostCompany'), url: "https://www.communitycompostco.com/" },
  { state: "New Mexico", city: "Albuquerque", name: t('seoPages.pages.pouchCompostingServices.soilutions'), url: "https://www.soilutions.net/" },
  { state: "New York", city: "New York City", name: t('seoPages.pages.pouchCompostingServices.growNyc'), url: "https://www.grownyc.org/compost" },
  { state: "New York", city: "New York City", name: t('seoPages.pages.pouchCompostingServices.earthMatter'), url: "https://earthmatter.org/" },
  { state: "New York", city: "Brooklyn", name: t('seoPages.pages.pouchCompostingServices.bkRot'), url: "https://www.bkrot.org/" },
  { state: "New York", city: "Buffalo", name: t('seoPages.pages.pouchCompostingServices.farmerPirates'), url: "https://www.farmerpirates.com/" },
  { state: "North Carolina", city: "Charlotte", name: t('seoPages.pages.pouchCompostingServices.crownTownCompost'), url: "https://www.crowntowncompost.com/" },
  { state: "North Carolina", city: "Asheville", name: t('seoPages.pages.pouchCompostingServices.compostavl'), url: "https://compostavl.com/" },
  { state: "Ohio", city: "Cleveland", name: t('seoPages.pages.pouchCompostingServices.rustBeltRiders'), url: "https://www.rustbeltriders.com/" },
  { state: "Ohio", city: "Cincinnati", name: t('seoPages.pages.pouchCompostingServices.queenCityCommons'), url: "https://www.queencitycommons.com/" },
  { state: "Ohio", city: "Columbus", name: t('seoPages.pages.pouchCompostingServices.theCompostExchange'), url: "https://www.thecompostexchange.com/" },
  { state: "Oklahoma", city: "Tulsa", name: t('seoPages.pages.pouchCompostingServices.fullSunComposting'), url: "https://www.fullsuncomposting.com/" },
  { state: "Oregon", city: "Portland", name: t('seoPages.pages.pouchCompostingServices.cityCompost'), url: "https://www.portland.gov/bps/garbage-recycling/residential-compost-tips" },
  { state: "Oregon", city: "Portland", name: t('seoPages.pages.pouchCompostingServices.recologyPortland'), url: "https://www.recology.com/recology-portland/" },
  { state: "Pennsylvania", city: "Philadelphia", name: t('seoPages.pages.pouchCompostingServices.bennettCompost'), url: "https://www.bennettcompost.com/" },
  { state: "Pennsylvania", city: "Pittsburgh", name: t('seoPages.pages.pouchCompostingServices.shadysideWorms'), url: "https://shadysideworms.com/compost-exchange/" },
  { state: "Rhode Island", city: "Providence", name: t('seoPages.pages.pouchCompostingServices.bootstrapCompost'), url: "https://bootstrapcompost.com/" },
  { state: "South Carolina", city: "Charleston", name: t('seoPages.pages.pouchCompostingServices.compostnow'), url: "https://compostnow.org/" },
  { state: "Tennessee", city: "Nashville", name: t('seoPages.pages.pouchCompostingServices.compostNashville'), url: "https://compostnashville.org/" },
  { state: "Tennessee", city: "Memphis", name: t('seoPages.pages.pouchCompostingServices.theCompostFairy'), url: "https://compostfairy.com/" },
  { state: "Texas", city: "Austin", name: t('seoPages.pages.pouchCompostingServices.texasDisposalSystems'), url: "https://www.texasdisposal.com/processing/composting/" },
  { state: "Texas", city: "Dallas-Fort Worth", name: t('seoPages.pages.pouchCompostingServices.turnCompost'), url: "https://www.turncompost.com/" },
  { state: "Texas", city: "Houston", name: t('seoPages.pages.pouchCompostingServices.fromCurbToCompost'), url: "https://curbtocompost.com/" },
  { state: "Texas", city: "San Antonio", name: t('seoPages.pages.pouchCompostingServices.compostQueens'), url: "https://www.compostqueenstx.com/" },
  { state: "Utah", city: "Salt Lake City", name: t('seoPages.pages.pouchCompostingServices.cityCompostProgram'), url: "https://www.slc.gov/sustainability/waste-management/curbside/compost-can/" },
  { state: "Vermont", city: "Burlington", name: t('seoPages.pages.pouchCompostingServices.earthgirlComposting'), url: "https://www.earthgirlcomposting.com/" },
  { state: "Virginia", city: "Northern Virginia", name: t('seoPages.pages.pouchCompostingServices.compostCrew'), url: "https://compostcrew.com/" },
  { state: "Virginia", city: "Richmond", name: t('seoPages.pages.pouchCompostingServices.enrichCompost'), url: "https://enrichcompost.com/" },
  { state: "Washington", city: "Seattle", name: t('seoPages.pages.pouchCompostingServices.cedarGrove'), url: "https://cedar-grove.com/" },
  { state: "Washington", city: "Seattle", name: t('seoPages.pages.pouchCompostingServices.recologySeattle'), url: "https://www.recology.com/recology-cleanscapes/seattle/" },
  { state: "Wisconsin", city: "Madison", name: t('seoPages.pages.pouchCompostingServices.earthStewCompostServices'), url: "https://www.earthstew.com/" },
  { state: "Wisconsin", city: "Milwaukee", name: t('seoPages.pages.pouchCompostingServices.compostCrusader'), url: "https://www.compostcrusader.com/" },
  { state: "Wyoming", city: "Jackson Hole", name: t('seoPages.pages.pouchCompostingServices.wyofarmComposting'), url: "https://wyocompost.com/" }
  ], [t])

  const STATES = useMemo(() => [...new Set(COMPOST_SERVICES.map(s => s.state))].sort(), [COMPOST_SERVICES])


  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState<string>('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = t('seoPages.pages.pouchCompostingServices.metaTitle')
  const description = t('seoPages.pages.pouchCompostingServices.metaDescription')

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingServices.whatIsTheMoq'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingServices.ourMinimumOrderQuantity')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingServices.canWeOrderFree'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingServices.yesWeShipPhysical')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingServices.doYouSupportCustom'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingServices.yesOurEngineersSupply')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingServices.whatIsTheAverage'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingServices.customDigitalRunsRequire')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingServices.whatCertificationsDoYour'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingServices.allOurPackagingIs')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCompostingServices.whatDetailsDoYou'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCompostingServices.simplyLetUsKnow')
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: t('seoPages.pages.pouchCompostingServices.fogoCollectionCompatibility'),
      val: "BPI / CMA Approved",
      desc: t('seoPages.pages.pouchCompostingServices.prevalidatedUnderCompostManufacturing')
    },
    {
      label: t('seoPages.pages.pouchCompostingServices.disintegrationWindow'),
      val: "90-180 Days Industrial",
      desc: t('seoPages.pages.pouchCompostingServices.maintainsStructuralSealIntegrity')
    },
    {
      label: t('seoPages.pages.pouchCompostingServices.toxicityCompliance'),
      val: "Fluorine-Free Barrier",
      desc: t('seoPages.pages.pouchCompostingServices.manufacturedWithoutPfasRaw')
    },
    {
      label: t('seoPages.pages.pouchCompostingServices.laminationQuality'),
      val: "Grade A BRCGS Cleanroom",
      desc: t('seoPages.pages.pouchCompostingServices.coextrudedAndLaminatedInside')
    }
  ]

  const faqs = [
    {
      q: t('seoPages.pages.pouchCompostingServices.whatIsTheMoq'),
      a: t('seoPages.pages.pouchCompostingServices.weOfferAnUltralow')
    },
    {
      q: t('seoPages.pages.pouchCompostingServices.areFreePhysicalSamples'),
      a: t('seoPages.pages.pouchCompostingServices.yesWeShipPhysical1')
    },
    {
      q: t('seoPages.pages.pouchCompostingServices.doYouSupportCustom1'),
      a: t('seoPages.pages.pouchCompostingServices.absolutelyOurPackagingEngineers')
    },
    {
      q: t('seoPages.pages.pouchCompostingServices.whatIsTheAverage1'),
      a: t('seoPages.pages.pouchCompostingServices.digitallyPrintedBagsAre')
    },
    {
      q: t('seoPages.pages.pouchCompostingServices.whatCertificationsDoYour'),
      a: t('seoPages.pages.pouchCompostingServices.allOurPackagingIs1')
    },
    {
      q: t('seoPages.pages.pouchCompostingServices.whatDetailsDoYou1'),
      a: t('seoPages.pages.pouchCompostingServices.simplySpecifyYourBag')
    }
  ]

  // Filter services based on search and state
  const filteredServices = useMemo(() => {
    return COMPOST_SERVICES.filter(service => {
      const matchesState = !selectedState || service.state === selectedState
      const query = searchQuery.toLowerCase()
      const matchesSearch = !searchQuery || 
        service.name.toLowerCase().includes(query) ||
        service.city.toLowerCase().includes(query) ||
        service.state.toLowerCase().includes(query)
      return matchesState && matchesSearch
    })
  }, [searchQuery, selectedState])

  // Group services by state for display
  const groupedServices = useMemo(() => {
    const groups: Record<string, CompostService[]> = {}
    filteredServices.forEach(service => {
      if (!groups[service.state]) {
        groups[service.state] = []
      }
      groups[service.state].push(service)
    })
    return groups
  }, [filteredServices])

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="composting service, compost facility, EN 13432, ASTM D6400, AS 4736, industrial composting, compostable packaging, USA composting, Canada composting, Australia composting, Europe composting" />
        <link rel="canonical" href="https://pouch.eco/composting/composting-services" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('seoPages.pages.pouchCompostingServices.home')}</Link>
            <span>/</span>
            <Link to="/learn" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t('seoPages.pages.pouchCompostingServices.ecoacademy')}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t('seoPages.pages.pouchCompostingServices.compostingFinder')}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  FACILITY_LOCATOR
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t('seoPages.pages.pouchCompostingServices.100ServicesListed')}
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('seoPages.pages.pouchCompostingServices.findYour')}<br/>
                {t('seoPages.pages.pouchCompostingServices.composting')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('seoPages.pages.pouchCompostingServices.facility')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('seoPages.pages.pouchCompostingServices.gtUsaCanadaAustralia')}<br/>
                {t('seoPages.pages.pouchCompostingServices.gtCurbsideFogoValidation')}<br/>
                {t('seoPages.pages.pouchCompostingServices.gtBpiAstmD6400')}<br/>
                {t('seoPages.pages.pouchCompostingServices.gtDirectCollectionNetworks')}
              </p>

              {/* Search Utility Header */}
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search by city, state..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-black font-['JetBrains_Mono'] text-sm focus:outline-none focus:bg-neutral-50"
                    />
                  </div>
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full sm:w-44 px-3 py-3 border-2 border-black font-['JetBrains_Mono'] text-sm bg-white focus:outline-none cursor-pointer appearance-none pr-8"
                    >
                      <option value="">{t('seoPages.pages.pouchCompostingServices.allStates')}</option>
                      {STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Locator Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/vs/a_lifecycle_compostable_infographic_2163778.webp" 
                alt={t('seoPages.pages.pouchCompostingServices.alt_compostablePackagingCircularLifecycle')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Warning Banner */}
      <section className="bg-amber-400 border-b-4 border-black p-6 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-start gap-4 font-['JetBrains_Mono'] text-sm text-black">
          <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-0.5 text-black" />
          <div>
            <strong>{t('seoPages.pages.pouchCompostingServices.municipalDisclaimer')}</strong> {t('seoPages.pages.pouchCompostingServices.whileAllOurPackaging')}
          </div>
        </div>
      </section>

      {/* Interactive Service Finder List */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="inline-block bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              USA_COMPLIANT_SERVICES_DATABASE
            </span>
            <p className="font-['JetBrains_Mono'] text-xs text-neutral-500">
              {t('seoPages.pages.pouchCompostingServices.found')} <strong>{filteredServices.length}</strong> {t('seoPages.pages.pouchCompostingServices.matchingFacilities')}
            </p>
          </div>

          {Object.keys(groupedServices).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(groupedServices).map(([state, services]) => (
                <div key={state} className="border-4 border-black p-8 bg-neutral-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-[#FF00FF]" />
                    {state}
                    <span className="text-xs font-normal font-['JetBrains_Mono'] text-neutral-500">
                      ({services.length} services)
                    </span>
                  </h2>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
                      >
                        <div>
                          <h4 className="font-black text-lg uppercase mb-2">{service.name}</h4>
                          <p className="font-['JetBrains_Mono'] text-xs text-neutral-500">{service.city}, {service.state}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-end text-neutral-400 hover:text-black transition">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border-4 border-black p-12 bg-neutral-50 text-center font-['JetBrains_Mono'] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Search className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="font-black text-2xl uppercase mb-2">No facilities found</h3>
              <p className="text-neutral-500">Try adjusting your search terms or selecting another state.</p>
            </div>
          )}
        </div>
      </section>

      {/* Technical Spec Value Translation */}
      <section className="py-24 bg-neutral-50 text-left border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <NeoBadge color="magenta">STANDARDS_VALIDATION</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4">
                {t('seoPages.pages.pouchCompostingServices.fogoSpecsMatrix')}
              </h2>
            </div>
            <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              FOGO_COMPLIANCE_STANDARDS
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specTranslations.map((s, idx) => (
              <div key={idx} className="bg-white border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black font-['JetBrains_Mono']">
                  {s.label}
                </span>
                <h4 className="font-black text-xl uppercase mt-4 mb-2">{s.val}</h4>
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black text-left">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">EXPERT_FAQ</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6 text-center">
              {t('seoPages.pages.pouchCompostingServices.municipalOrderingFaq')}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2 text-center">
              {t('seoPages.pages.pouchCompostingServices.clearHonestAnswersTo')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <button
                  className="w-full text-left p-6 font-black text-lg md:text-xl uppercase flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-['JetBrains_Mono']">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-black">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-6 border-t-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed text-left pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <NeoBadge color="bg-black text-white">CIRCULAR_ECONOMY</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t('seoPages.pages.pouchCompostingServices.beginYourCustomRun')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('seoPages.pages.pouchCompostingServices.certifiedCompostablePackagingWith')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t('seoPages.pages.pouchCompostingServices.requestFreeEcoSample')}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t('seoPages.pages.pouchCompostingServices.consultPackagingEngineer')}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t('seoPages.pages.pouchCompostingServices.seekingHighvolumeCommercialWholesale')}</strong><br/>
            {t('seoPages.pages.pouchCompostingServices.forHighvolumeRetailSupply')}{" "}
            <a 
              href="https://achievepack.com/composting/composting-services" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('seoPages.pages.pouchCompostingServices.achievepackcomcompostingcompostingservices')}
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
