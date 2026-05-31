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

const COMPOST_SERVICES: CompostService[] = [
  { state: "Alabama", city: "Birmingham", name: "Mountain Brook Public Works", url: "https://www.mtnbrook.org/publicworks/page/compost" },
  { state: "Alaska", city: "Anchorage", name: "Alaska Waste Commercial Composting Program", url: "https://www.alaskawaste.net/" },
  { state: "Alaska", city: "Anchorage", name: "Green Earth Landworks", url: "http://www.greenearthalaska.com/" },
  { state: "Alaska", city: "Anchorage", name: "Community Compost", url: "https://www.muni.org/Departments/SWS/Recycling/Pages/CommunityCompost.aspx" },
  { state: "Alaska", city: "Juneau", name: "Juneau Composts", url: "https://juneaucomposts.com/" },
  { state: "Alaska", city: "Kodiak", name: "Kodiak Composting", url: "https://www.city.kodiak.ak.us/publicworks/page/future-biosolids-composting-facility-information" },
  { state: "Arizona", city: "Flagstaff", name: "Corbin Composting", url: "https://www.corbincompost.com/" },
  { state: "Arizona", city: "Phoenix", name: "Recycled City", url: "https://www.recycledcity.com/" },
  { state: "Arizona", city: "Phoenix", name: "We Care Compost", url: "http://www.wecarecompost.com/wecare-products/locations/phoenix-az/" },
  { state: "Arizona", city: "Tempe", name: "Tempe's Compost Yard", url: "https://www.tempe.gov/government/municipal-utilities/solid-waste-and-recycling/curbside-green-organics-program" },
  { state: "Arizona", city: "Tucson", name: "FoodCycle", url: "https://www.tucsonaz.gov/Departments/Environmental-Services/FoodCycle-At-Home" },
  { state: "Arizona", city: "Tucson", name: "Desert Compostables", url: "https://www.desertcompostables.com/" },
  { state: "Arkansas", city: "Bentonville", name: "Bentonville Compost Facility", url: "http://www.bentonvillear.com/170/Compost-Facility" },
  { state: "Arkansas", city: "Fayetteville", name: "City Compost Program", url: "https://www.fayetteville-ar.gov/3421/Composting-and-Mulch" },
  { state: "Arkansas", city: "Hot Springs", name: "Hot Springs Compost Facility", url: "https://www.cityhs.net/240/Compost" },
  { state: "California", city: "Alameda", name: "Alameda County Sustainability", url: "https://www.acgov.org/sustain/what/recycling/public.htm" },
  { state: "California", city: "Berkeley", name: "City of Berkeley Public Works", url: "https://www.cityofberkeley.info/ContentDisplay.aspx?id=5606" },
  { state: "California", city: "Lake Tahoe", name: "Slow Food", url: "https://www.slowfoodlaketahoe.org/compost" },
  { state: "California", city: "Long Beach", name: "Long Beach Community Compost", url: "https://lbcommunitycompost.org/" },
  { state: "California", city: "Los Angeles", name: "LA Compost", url: "https://www.lacompost.org/" },
  { state: "California", city: "Los Angeles", name: "Compostable LA", url: "https://www.compostablela.com/" },
  { state: "California", city: "San Diego", name: "Inika", url: "https://www.inika.org/" },
  { state: "California", city: "San Francisco", name: "Recology San Francisco", url: "https://www.recology.com/recology-san-francisco/your-three-carts/" },
  { state: "California", city: "San Francisco", name: "SF Environment", url: "https://sfenvironment.org/es/zero-waste/recycling-and-composting" },
  { state: "California", city: "Oakland", name: "Oakland Recycles", url: "https://www.oaklandrecycles.com/" },
  { state: "Colorado", city: "Denver", name: "Denver Composts", url: "https://www.denvergov.org/content/denvergov/en/trash-and-recycling/composting/compost-collection-program.html" },
  { state: "Colorado", city: "Denver", name: "Scraps Mile High", url: "https://scrapsmilehigh.com/" },
  { state: "Colorado", city: "Boulder", name: "University of Colorado Environmental Center", url: "https://www.colorado.edu/ecenter/zero-waste/compost" },
  { state: "Colorado", city: "Fort Collins", name: "Common Good Compost", url: "https://www.commongoodcompost.org/" },
  { state: "Connecticut", city: "Hartford", name: "Blue Earth Compost", url: "https://www.blueearthcompost.com/" },
  { state: "Connecticut", city: "New Haven", name: "Peels & Wheels", url: "https://www.pwcomposting.com/" },
  { state: "District of Columbia", city: "Washington", name: "Compost Crew", url: "https://compostcrew.com/" },
  { state: "District of Columbia", city: "Washington", name: "Compost Cab", url: "https://compostcab.com/" },
  { state: "Florida", city: "Orlando", name: "O-Town Compost", url: "https://o-towncompost.com/" },
  { state: "Florida", city: "Miami", name: "Back2Earth", url: "https://www.back2earth.org/" },
  { state: "Florida", city: "Tampa", name: "Suncoast Compost", url: "https://www.suncoastcompost.com/" },
  { state: "Georgia", city: "Atlanta", name: "CompostNow", url: "https://compostnow.org/" },
  { state: "Georgia", city: "Athens", name: "Awesome Possum", url: "https://www.awesomepossumcomposting.com/" },
  { state: "Hawaii", city: "Kaua'i County", name: "County Composting", url: "https://www.kauai.gov/Composting" },
  { state: "Idaho", city: "Boise", name: "Curb It", url: "https://www.cityofboise.org/departments/public-works/curb-it/compost/" },
  { state: "Illinois", city: "Chicago", name: "Collective Resource", url: "https://www.collectiveresource.us/" },
  { state: "Illinois", city: "Chicago", name: "WasteNot Compost", url: "https://www.wastenotcompost.com/" },
  { state: "Indiana", city: "Indianapolis", name: "Earth Mama", url: "http://earthmamacompost.com/" },
  { state: "Iowa", city: "Iowa City", name: "Iowa City Public Works", url: "https://www.icgov.org/foodwaste" },
  { state: "Kansas", city: "Kansas City", name: "KC Can Compost", url: "https://kccancompost.com/" },
  { state: "Kentucky", city: "Lexington", name: "Seedleaf", url: "https://www.seedleaf.org/" },
  { state: "Louisiana", city: "New Orleans", name: "The Composting Network", url: "https://compostingnetwork.com/" },
  { state: "Maine", city: "Portland", name: "Garbage to Garden", url: "https://garbagetogarden.org/" },
  { state: "Maryland", city: "Baltimore", name: "Compost Cab", url: "https://compostcab.com/" },
  { state: "Massachusetts", city: "Boston Area", name: "Black Earth Compost", url: "https://blackearthcompost.com/" },
  { state: "Massachusetts", city: "Boston Area", name: "Bootstrap Compost", url: "https://bootstrapcompost.com/" },
  { state: "Massachusetts", city: "Cambridge", name: "Cambridge Curbside Composting", url: "https://www.cambridgema.gov/Services/curbsidecomposting" },
  { state: "Michigan", city: "Detroit", name: "Midtown Composting", url: "https://midtowncomposting.com/product/weekly-residential-compost-collection-monthly/" },
  { state: "Michigan", city: "Ann Arbor", name: "City Composting", url: "https://www.a2gov.org/departments/trash-recycling/Pages/Compost.aspx" },
  { state: "Minnesota", city: "Minneapolis", name: "City of Minneapolis Organics", url: "http://www2.minneapolismn.gov/solid-waste/organics/index.htm" },
  { state: "Missouri", city: "St. Louis", name: "St. Louis Composting", url: "https://www.stlcompost.com/" },
  { state: "Montana", city: "Bozeman", name: "YES Compost", url: "https://www.yescompost.com/services" },
  { state: "Nebraska", city: "Omaha", name: "Hillside Solutions", url: "https://www.hillside.solutions/" },
  { state: "Nevada", city: "Reno", name: "Down to Earth Composting", url: "https://www.downtoearthcomposting.com/" },
  { state: "New Hampshire", city: "Manchester", name: "City Compost", url: "https://www.citycompost.com/" },
  { state: "New Jersey", city: "Hoboken", name: "Community Compost Company", url: "https://www.communitycompostco.com/" },
  { state: "New Mexico", city: "Albuquerque", name: "Soilutions", url: "https://www.soilutions.net/" },
  { state: "New York", city: "New York City", name: "Grow NYC", url: "https://www.grownyc.org/compost" },
  { state: "New York", city: "New York City", name: "Earth Matter", url: "https://earthmatter.org/" },
  { state: "New York", city: "Brooklyn", name: "BK ROT", url: "https://www.bkrot.org/" },
  { state: "New York", city: "Buffalo", name: "Farmer Pirates", url: "https://www.farmerpirates.com/" },
  { state: "North Carolina", city: "Charlotte", name: "Crown Town Compost", url: "https://www.crowntowncompost.com/" },
  { state: "North Carolina", city: "Asheville", name: "CompostAVL", url: "https://compostavl.com/" },
  { state: "Ohio", city: "Cleveland", name: "Rust Belt Riders", url: "https://www.rustbeltriders.com/" },
  { state: "Ohio", city: "Cincinnati", name: "Queen City Commons", url: "https://www.queencitycommons.com/" },
  { state: "Ohio", city: "Columbus", name: "The Compost Exchange", url: "https://www.thecompostexchange.com/" },
  { state: "Oklahoma", city: "Tulsa", name: "Full Sun Composting", url: "https://www.fullsuncomposting.com/" },
  { state: "Oregon", city: "Portland", name: "City Compost", url: "https://www.portland.gov/bps/garbage-recycling/residential-compost-tips" },
  { state: "Oregon", city: "Portland", name: "Recology Portland", url: "https://www.recology.com/recology-portland/" },
  { state: "Pennsylvania", city: "Philadelphia", name: "Bennett Compost", url: "https://www.bennettcompost.com/" },
  { state: "Pennsylvania", city: "Pittsburgh", name: "Shadyside Worms", url: "https://shadysideworms.com/compost-exchange/" },
  { state: "Rhode Island", city: "Providence", name: "Bootstrap Compost", url: "https://bootstrapcompost.com/" },
  { state: "South Carolina", city: "Charleston", name: "CompostNow", url: "https://compostnow.org/" },
  { state: "Tennessee", city: "Nashville", name: "Compost Nashville", url: "https://compostnashville.org/" },
  { state: "Tennessee", city: "Memphis", name: "The Compost Fairy", url: "https://compostfairy.com/" },
  { state: "Texas", city: "Austin", name: "Texas Disposal Systems", url: "https://www.texasdisposal.com/processing/composting/" },
  { state: "Texas", city: "Dallas-Fort Worth", name: "Turn Compost", url: "https://www.turncompost.com/" },
  { state: "Texas", city: "Houston", name: "From Curb to Compost", url: "https://curbtocompost.com/" },
  { state: "Texas", city: "San Antonio", name: "Compost Queens", url: "https://www.compostqueenstx.com/" },
  { state: "Utah", city: "Salt Lake City", name: "City Compost Program", url: "https://www.slc.gov/sustainability/waste-management/curbside/compost-can/" },
  { state: "Vermont", city: "Burlington", name: "Earthgirl Composting", url: "https://www.earthgirlcomposting.com/" },
  { state: "Virginia", city: "Northern Virginia", name: "Compost Crew", url: "https://compostcrew.com/" },
  { state: "Virginia", city: "Richmond", name: "Enrich Compost", url: "https://enrichcompost.com/" },
  { state: "Washington", city: "Seattle", name: "Cedar Grove", url: "https://cedar-grove.com/" },
  { state: "Washington", city: "Seattle", name: "Recology Seattle", url: "https://www.recology.com/recology-cleanscapes/seattle/" },
  { state: "Wisconsin", city: "Madison", name: "Earth Stew Compost Services", url: "https://www.earthstew.com/" },
  { state: "Wisconsin", city: "Milwaukee", name: "Compost Crusader", url: "https://www.compostcrusader.com/" },
  { state: "Wyoming", city: "Jackson Hole", name: "WyoFarm Composting", url: "https://wyocompost.com/" }
]

const STATES = [...new Set(COMPOST_SERVICES.map(s => s.state))].sort()

export default function PouchCompostingServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState<string>('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = "Global Composting Services & Facility Finder | Pouch.eco"
  const description = "Find commercial composting services worldwide. Locate 100+ municipal and private FOGO facilities accepting certified ASTM D6400 / EN 13432 compostable packaging."

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the MOQ for certified compostable stand-up pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order quantity is just 500 units per design for custom digital printing (with zero cylinder plate setup fees) and 5,000 units for rotogravure volume printing."
        }
      },
      {
        "@type": "Question",
        "name": "Can we order free physical samples for our testing lines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we ship physical eco-sample packs containing a variety of our compostable materials and barrier thicknesses worldwide via express."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support custom sizes and custom shaped seals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our engineers supply custom CAD dieline templates designed for your specific vertical form-fill-seal (VFFS) machinery and custom shaped seals."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average lead time for custom runs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom digital runs require 7-10 business days from artwork sign-off. Plate-printed runs take 12-14 business days. Air express shipping takes 3-5 days."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications do your compostable bags hold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All our packaging is produced in certified BRCGS Grade A facilities. The materials carry verified BPI (ASTM D6400) and TUV OK Compost HOME certifications."
        }
      },
      {
        "@type": "Question",
        "name": "What details do you need for a formal quotation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply let us know your required dimensions, estimated run volume per SKU, material stack (e.g. kraft or clear compostable), and zip/valve features. We reply in 24 hours."
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: "FOGO Collection Compatibility",
      val: "BPI / CMA Approved",
      desc: "Pre-validated under Compost Manufacturing Alliance (CMA) guidelines to ensure seamless acceptance across regional FOGO industrial windrows."
    },
    {
      label: "Disintegration Window",
      val: "90-180 Days Industrial",
      desc: "Maintains structural seal integrity on retail shelves, yet degrades entirely within municipal windrows under standard high-temperature (140°F) conditions."
    },
    {
      label: "Toxicity Compliance",
      val: "Fluorine-Free Barrier",
      desc: "Manufactured without PFAS, raw fluorine, or harmful chemical coatings, guaranteeing non-toxic residues in finished agricultural topsoils."
    },
    {
      label: "Lamination Quality",
      val: "Grade A BRCGS Cleanroom",
      desc: "Co-extruded and laminated inside certified cleanrooms, preventing heavy metal or foreign particulate contamination in organic collections."
    }
  ]

  const faqs = [
    {
      q: "What is the MOQ for certified compostable stand-up pouches?",
      a: "We offer an ultra-low MOQ of just 500 units for digitally printed bags. This lets startup brands test new flavors or roasts without expensive plate setup cylinder fees. For high-volume rotogravure runs, the MOQ is 5,000 units."
    },
    {
      q: "Are free physical samples available?",
      a: "Yes, we ship physical eco-sample kits containing our different compostable films, bio-PE materials, and various zipper/degassing valve layouts worldwide via express courier."
    },
    {
      q: "Do you support custom sizes and OEM blueprints?",
      a: "Absolutely. Our packaging engineers supply bespoke CAD dielines designed to fit your exact filling volume and automatically calibrated to your horizontal or vertical packaging machinery requirements."
    },
    {
      q: "What is the average manufacturing and delivery lead time?",
      a: "Digitally printed bags are produced in 7-10 business days. Cylinder plate printed runs take 12-14 business days. Standard international air express takes 3-5 business days."
    },
    {
      q: "What certifications do your compostable bags hold?",
      a: "All our packaging is produced in certified Grade A BRCGS food-contact facilities. Our structures carry verified BPI (ASTM D6400) and TUV OK Compost HOME certificates, alongside GRS and FSC compliance."
    },
    {
      q: "What details do you need for a formal pricing quote?",
      a: "Simply specify your bag dimensions, desired quantity per design, material stack (e.g. compostable kraft or bio-recyclable PE), and any options like valves or tear notches. We provide detailed pricing within 24 hours."
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
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
            <span>/</span>
            <Link to="/learn" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Academy</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Composting Finder</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  FACILITY_LOCATOR
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  100+ SERVICES LISTED
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Find Your.<br/>
                Composting.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Facility.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; USA, Canada, Australia, Europe.<br/>
                &gt; Curbside FOGO validation.<br/>
                &gt; BPI / ASTM D6400 compliance.<br/>
                &gt; Direct collection networks.
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
                      <option value="">All States</option>
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
                alt="Compostable packaging circular lifecycle infographic" 
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
            <strong>MUNICIPAL DISCLAIMER:</strong> While all our packaging is certified compostable to BPI and ASTM D6400 standards, not all local composting facilities accept certified packaging due to sorting infrastructure. Please check directly with your local operator before FOGO disposal.
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
              Found <strong>{filteredServices.length}</strong> matching facilities.
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
                FOGO Specs Matrix
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
              Municipal & Ordering FAQ
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2 text-center">
              Clear, honest answers to help your procurement managers make informed decisions.
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
            Begin Your Custom Run
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Certified compostable packaging with startup-friendly MOQ starting from 500 units.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              Request Free Eco Sample Kit
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Consult Packaging Engineer
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>Seeking high-volume commercial wholesale runs?</strong><br/>
            For high-volume retail supply contracts (10,000+ units), custom rotogravure cylinder sets, or enterprise corporate quotes, please visit our enterprise portal:{" "}
            <a 
              href="https://achievepack.com/composting/composting-services" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/composting/composting-services →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
