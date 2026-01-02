import React, { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Search, MapPin, ExternalLink, Leaf, ArrowLeft, ChevronDown, Calendar, Package, CheckCircle, AlertTriangle, Globe, Building2, Phone, Mail, HelpCircle, ChevronRight, Users } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'

// Composting service data structure
interface CompostService {
  state: string
  city: string
  name: string
  url: string
}

// Parse CSV-like data into structured format
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
  { state: "Wyoming", city: "Jackson Hole", name: "WyoFarm Composting", url: "https://wyocompost.com/" },
]

// Get unique states for filter
const STATES = [...new Set(COMPOST_SERVICES.map(s => s.state))].sort()

const CompostServiceFinderPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState<string>('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

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
    <>
      <Helmet>
        <title>Global Composting Service Finder | USA, Canada, Australia, Europe | Achieve Pack</title>
        <meta name="description" content="Find composting services worldwide. Directory of 300+ US facilities plus Canada, Australia & Europe. EN 13432, ASTM D6400, AS 4736 certified compostable packaging accepted." />
        <link rel="canonical" href="https://achievepack.com/compostable/composting-services" />
        <meta name="keywords" content="composting service, compost facility, EN 13432, ASTM D6400, AS 4736, industrial composting, compostable packaging, USA composting, Canada composting, Australia composting, Europe composting" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Global Composting Service Finder - USA, Canada, Australia, Europe" />
        <meta property="og:description" content="Find composting facilities worldwide. 300+ US services plus Canada, Australia & Europe. Support your certified compostable packaging's end-of-life journey." />
        <meta property="og:image" content="https://achievepack.com/imgs/compostable/vs/a_lifecycle_compostable_infographic_2163778.webp" />
        <meta property="og:type" content="website" />
        
        {/* WebPage Schema with E-E-A-T signals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Global Composting Service Finder",
            "description": "Find composting services worldwide including USA, Canada, Australia, and Europe",
            "datePublished": "2024-01-15",
            "dateModified": new Date().toISOString().split('T')[0],
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "description": "BRC-certified sustainable packaging manufacturer specializing in certified compostable solutions"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Composting Services Directory",
              "description": "Industrial composting facilities accepting certified compostable packaging (EN 13432, ASTM D6400, AS 4736)"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "US Composting Services Directory",
              "numberOfItems": COMPOST_SERVICES.length,
              "itemListElement": COMPOST_SERVICES.slice(0, 10).map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "LocalBusiness",
                  "name": service.name,
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": service.city,
                    "addressRegion": service.state,
                    "addressCountry": "US"
                  },
                  "url": service.url
                }
              }))
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where can I compost my certified compostable packaging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can compost certified compostable packaging at industrial composting facilities. Use our directory to find a composting service near you. Look for facilities that accept 'certified compostable packaging' or BPI-certified materials."
                }
              },
              {
                "@type": "Question",
                "name": "Do all composting facilities accept compostable packaging?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not all facilities accept compostable packaging. Contact your local facility to confirm they accept certified compostable materials (BPI, ASTM D6400, or EN 13432 certified). Some facilities only accept food scraps and yard waste."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between home and industrial composting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Industrial composting reaches higher temperatures (55-60°C) and can break down materials faster. Most compostable packaging requires industrial composting. Home compostable packaging (TUV OK Home certified) can break down in backyard compost bins."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> Back to Home
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-600">AchievePack</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Globe className="inline h-4 w-4 mr-1" /> Global Directory
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Global Composting Service Finder
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Find composting facilities worldwide — USA, Canada, Australia & Europe. 
              Support your certified compostable packaging's end-of-life journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search by city, state, or service name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-neutral-800 text-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full sm:w-48 px-4 py-4 rounded-xl text-neutral-800 bg-white focus:ring-2 focus:ring-green-400 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="">All States</option>
                    {STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{COMPOST_SERVICES.length}+</div>
                <div className="text-sm text-green-200">US Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-green-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-green-200">Certifications</div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> Not all composting facilities accept certified compostable packaging. 
                Contact the facility directly to confirm they accept BPI or ASTM D6400 certified materials before dropping off.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12">
          
          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-neutral-600">
              Showing <strong>{filteredServices.length}</strong> composting services
              {selectedState && <span> in <strong>{selectedState}</strong></span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </p>
            {(selectedState || searchQuery) && (
              <button 
                onClick={() => { setSelectedState(''); setSearchQuery(''); }}
                className="text-sm text-primary-600 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Results */}
          {Object.keys(groupedServices).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedServices).map(([state, services]) => (
                <div key={state}>
                  <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    {state}
                    <span className="text-sm font-normal text-neutral-500">({services.length} services)</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, idx) => (
                      <a
                        key={`${service.name}-${idx}`}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-neutral-800 group-hover:text-primary-600 transition">
                              {service.name}
                            </h3>
                            <p className="text-sm text-neutral-500 mt-1">
                              {service.city}, {service.state}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-primary-600 flex-shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border">
              <Search className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">No services found</h3>
              <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Educational Section */}
          <section className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              Understanding Composting for Packaging
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border">
                <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  What IS Accepted
                </h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• BPI or TUV certified compostable packaging</li>
                  <li>• ASTM D6400 or EN 13432 certified materials</li>
                  <li>• Food scraps and organic waste</li>
                  <li>• Yard waste (leaves, grass, branches)</li>
                  <li>• Certified compostable cups and utensils</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border">
                <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  What is NOT Accepted
                </h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Regular plastic (even if marked "biodegradable")</li>
                  <li>• Oxo-degradable plastics</li>
                  <li>• Non-certified "eco-friendly" packaging</li>
                  <li>• Metal, glass, or electronics</li>
                  <li>• Meat/dairy at some facilities (check first)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ========== INTERNATIONAL COMPOSTING SERVICES ========== */}
          
          {/* Canada Section */}
          <section className="mt-16" id="canada">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🇨🇦</span>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Canada Composting Services by Province</h2>
            </div>
            <p className="text-neutral-700 mb-6">
              Canada's composting infrastructure is growing, with major national and regional operators accepting certified compostable packaging (<Link to="/compostable/biodegradable-vs-compostable" className="text-primary-600 hover:underline">EN 13432</Link> / <Link to="/company/certificates" className="text-primary-600 hover:underline">ASTM D6400</Link>). For the most current facility information and regional availability, consult these key resources:
            </p>

            {/* Canada National Services */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-200 mb-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-red-600" />
                National Services
              </h3>
              <div className="space-y-4">
                <a href="https://gflenv.com/" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg border hover:shadow-md transition group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">GFL Environmental</h4>
                      <p className="text-sm text-neutral-600 mt-1">Multi-province service offering commercial organics collection and composting. Accepts "compostable dinnerware and trash bags" certified to composability standards.</p>
                      <p className="text-xs text-neutral-500 mt-2">Coverage: Toronto, Vancouver, Calgary, Montreal, Ottawa, Edmonton</p>
                      <p className="text-xs text-amber-600 mt-1">⚠️ Accepted items vary by region—always confirm with your local branch.</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                  </div>
                </a>
                <a href="https://compostmanufacturingalliance.com/find-a-cma-facility/" target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg border hover:shadow-md transition group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-neutral-800 group-hover:text-primary-600">Compost Manufacturing Alliance (CMA) Partner Facility Locator</h4>
                      <p className="text-sm text-neutral-600 mt-1">Industry directory covering composting facilities across Canadian provinces. Use the online map and filters to find facilities by region.</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                  </div>
                </a>
              </div>
            </div>

            {/* Canada Provinces Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  British Columbia (Vancouver, Victoria)
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://gflenv.com/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">GFL Environmental</a> (contact local branch)</li>
                  <li>• Use <a href="https://compostmanufacturingalliance.com/find-a-cma-facility/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">CMA Partner Locator</a> to verify specific acceptance</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Ontario (Toronto, Ottawa)
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://gflenv.com/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">GFL Environmental</a> (contact local branch)</li>
                  <li>• CMA Partner Facilities (varies by city)</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Alberta (Calgary, Edmonton)
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://gflenv.com/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">GFL Environmental</a> (contact local branch)</li>
                  <li>• Regional industrial composting facilities via CMA Locator</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Quebec (Montreal)
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://gflenv.com/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">GFL Environmental</a> (contact local branch)</li>
                  <li>• Regional operators accepting certified compostables</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg border md:col-span-2">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Nova Scotia, New Brunswick, Manitoba, Saskatchewan
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• <a href="https://gflenv.com/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">GFL Environmental</a> (select locations)</li>
                  <li>• <a href="https://compostmanufacturingalliance.com/find-a-cma-facility/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">CMA Partner Facility Locator</a> for regional options</li>
                </ul>
              </div>
            </div>

            {/* Canada How to Find */}
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-green-600" />
                How to Find Services in Canada
              </h4>
              <p className="text-sm text-neutral-700">
                For Canadian facilities accepting <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 or ASTM D6400 certified packaging</Link>, start with <a href="https://gflenv.com/find-my-local-branch/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">GFL's "Find My Branch" tool</a> or search the <a href="https://compostmanufacturingalliance.com/find-a-cma-facility/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">CMA Partner Facility Locator</a> by your city and province. Contact the facility directly to confirm acceptance of compostable packaging in their commercial stream.
              </p>
            </div>
          </section>

          {/* Australia Section */}
          <section className="mt-16" id="australia">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🇦🇺</span>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Australia Composting Services by State</h2>
            </div>
            <p className="text-neutral-700 mb-6">
              Australia's composting network is led by <strong>Compost Connect</strong>, a business-focused platform linking companies to industrial composters across the country. Partners accept packaging certified to Australian Standards <Link to="/company/certificates" className="text-primary-600 hover:underline">AS 4736 (industrial)</Link> or AS 5810 (home compostability).
            </p>

            {/* Compost Connect National */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-200 mb-6">
              <a href="https://compostconnect.com.au/" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 flex items-center gap-2">
                      Compost Connect National Network
                      <ExternalLink className="h-4 w-4 text-neutral-400" />
                    </h3>
                    <p className="text-neutral-600 mt-2">Connects <strong>2,200+ suburbs</strong> to <strong>23+ compost partners</strong>. Enter your postcode to find local collection and composting services.</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Australia States Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  New South Wales (Sydney)
                </h4>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p><a href="https://organicrecyclinggroup.com.au/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">ORG (Organic Recycling Group)</a> - Collection service partnered with Compost Connect. Delivers compostable packaging to Soilco and EarthPower for industrial composting. Accepts BioPak and other AS 4736-certified materials.</p>
                  <p className="text-xs text-amber-600">⚠️ NSW EPA does not permit certified compostable packaging in residential FOGO collections; commercial services are the pathway.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Queensland (Brisbane & South East Queensland)
                </h4>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p><strong>SUEZ + NuGrow</strong> - SUEZ collects organics; NuGrow (Ipswich facility) processes certified compostable packaging. NuGrow produces 130,000+ tonnes annually; compost tested to AS 4454:2012.</p>
                  <p><a href="https://www.veolia.com/anz/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Veolia</a> - Brisbane-based compost partner on Compost Connect network.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  South Australia (Adelaide)
                </h4>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p><a href="https://www.jeffries.com.au/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Jeffries</a> - Full-service collection and composting in metropolitan Adelaide. Accepts packaging certified to AS 4736 and AS 5810. Material processed at Wingfield, then composted at Buckland Park.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Victoria (Melbourne)
                </h4>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p><a href="https://compostconnect.com.au/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Compost Connect partners</a> including Corio Waste Management and Remondis serve Melbourne and surrounding areas.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border md:col-span-2">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-600" />
                  Western Australia (Perth)
                </h4>
                <div className="text-sm text-neutral-600">
                  <p><a href="https://compostconnect.com.au/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Compost Connect partners</a> including JJ's Waste & Recycling service Perth and surrounding regions.</p>
                </div>
              </div>
            </div>

            {/* Australia How to Find */}
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-amber-600" />
                How to Find Services in Australia
              </h4>
              <p className="text-sm text-neutral-700">
                Visit <a href="https://compostconnect.com.au/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Compost Connect</a>, enter your postcode, select your preferred partner, and arrange collection. Weekly pickups and smaller options available. Certified packaging must meet <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">AS 4736 (industrial)</Link> or <Link to="/materials/home-compostable" className="text-primary-600 hover:underline">AS 5810 (home)</Link> standards.
              </p>
            </div>
          </section>

          {/* Europe Section */}
          <section className="mt-16" id="europe">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🇪🇺</span>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Europe Composting Services</h2>
            </div>
            <p className="text-neutral-700 mb-6">
              European composting infrastructure accepts <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432-certified compostable packaging</Link> through industrial facilities and managed collection services. Standards and acceptance vary by country and operator.
            </p>

            {/* Europe Countries */}
            <div className="space-y-4 mb-6">
              {/* UK */}
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">🇬🇧</span>
                  United Kingdom
                </h4>
                <div className="text-sm text-neutral-600 space-y-3">
                  <p><a href="https://envarcomposting.co.uk/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">EnVar Composting</a> (St Ives, Cambridgeshire) - Accepts certified compostable packaging via Vegware/Recorra service streams. In-vessel composting with 7-week cycle. PAS100/CQP certified.</p>
                  <p><a href="https://recorra.co.uk/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Recorra</a> - London-based collection service delivering certified compostable items to EnVar for processing.</p>
                  <p><strong>Multiple CCS-Certified Facilities</strong> - The UK's Composting Association maintains a directory of 29 CCS-certified composting facilities that accept independently verified compostable materials. Use the <a href="https://www.r-e-a.net/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">REA (Recycled Products Alliance) map</a> to locate facilities accepting compostable packaging.</p>
                </div>
              </div>

              {/* Italy */}
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">🇮🇹</span>
                  Italy
                </h4>
                <div className="text-sm text-neutral-600">
                  <p><a href="https://sesaeste.it/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">S.E.S.A. Spa</a> (Este, Padova) - Accepts bioplastics certified to UNI EN 13432, including bags and rigid items (cutlery). Complete biodegradation/disintegration through industrial composting process.</p>
                </div>
              </div>

              {/* Netherlands */}
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">🇳🇱</span>
                  Netherlands
                </h4>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p><strong>Dutch Industrial Composting Network</strong> - EN 13432-certified packaging successfully processes within 22 days in industrial composting facilities across the GFT (organic waste) stream. Confirmed through trials conducted by Wageningen University Research (WUR).</p>
                  <p className="text-xs text-amber-600">Contact local waste authorities for facility-specific acceptance confirmations.</p>
                </div>
              </div>

              {/* Other EU Countries */}
              <div className="bg-white p-5 rounded-lg border">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary-600" />
                  Germany, France, Spain, Scandinavia
                </h4>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p>Industrial composting infrastructure continues to expand across major European cities. Acceptance of <Link to="/company/certificates" className="text-primary-600 hover:underline">certified compostable packaging</Link> varies by operator.</p>
                  <p><strong>Recommended approach:</strong> Contact the composting facility directly to confirm they accept EN 13432-certified packaging. Many operators require segregated collection streams (e.g., dedicated compostable packaging bins) for acceptance.</p>
                </div>
              </div>
            </div>

            {/* Europe Verification */}
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                How to Verify Acceptance in Europe
              </h4>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Confirm the facility is <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 certified</Link> (not EN 14995, which covers only fossil-based plastics)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Check if the facility operates a dedicated compostable packaging collection stream</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Many facilities require pre-arrangement for commercial compostable packaging volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Contact the facility directly—acceptance policies vary and are not always published online</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tips for Contacting Section */}
          <section className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <Phone className="h-6 w-6 text-indigo-600" />
              Tips for Contacting Composting Facilities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border">
                <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-indigo-500" />
                  What to Ask
                </h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Do you accept commercially compostable packaging?</li>
                  <li>• Are you certified to process <Link to="/company/certificates" className="text-primary-600 hover:underline">EN 13432 or ASTM D6400</Link> materials?</li>
                  <li>• What's the turnaround time for composting (typically 90–180 days)?</li>
                  <li>• Can you provide documentation that confirms compostability of our packaging?</li>
                  <li>• Do you offer pickup services or drop-off only?</li>
                  <li>• What's the volume requirement for commercial composting?</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border">
                <h3 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Why This Matters
                </h3>
                <p className="text-sm text-neutral-600">
                  Not all composting facilities accept certified compostable packaging. Some focus exclusively on food waste. By asking these questions, you ensure your <Link to="/materials/industrial-compostable" className="text-primary-600 hover:underline">Achievepack packaging</Link> will actually be processed—and you can confidently tell your customers the full story.
                </p>
                <p className="text-sm text-neutral-600 mt-3">
                  Learn more about <Link to="/compostable/biodegradable-vs-compostable" className="text-primary-600 hover:underline">the difference between biodegradable and compostable</Link> packaging.
                </p>
              </div>
            </div>
          </section>

          {/* Missing Your Region Section */}
          <section className="mt-12 bg-white rounded-xl p-8 border-2 border-dashed border-neutral-300 text-center">
            <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center justify-center gap-2">
              <Users className="h-6 w-6 text-primary-600" />
              Missing Your Region?
            </h2>
            <p className="text-neutral-700 mb-4 max-w-2xl mx-auto">
              Composting infrastructure is expanding rapidly. If you know of a facility we've missed or if new services have launched in your area, we'd love to hear about it.
            </p>
            <Link 
              to="/company/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Mail className="h-5 w-5" />
              Contact Achievepack to Suggest an Addition
            </Link>
            <p className="text-sm text-neutral-500 mt-4">
              We update this resource regularly to reflect the growing composting network across North America and beyond.
            </p>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/compostable/biodegradable-vs-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Biodegradable vs Compostable</h4>
                <p className="text-sm text-neutral-600 mt-1">Learn the key differences</p>
              </Link>
              <Link to="/materials/home-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Home Compostable Materials</h4>
                <p className="text-sm text-neutral-600 mt-1">TÜV OK Home certified options</p>
              </Link>
              <Link to="/materials/industrial-compostable" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Industrial Compostable</h4>
                <p className="text-sm text-neutral-600 mt-1">EN 13432 certified packaging</p>
              </Link>
              <Link to="/company/certificates" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Our Certifications</h4>
                <p className="text-sm text-neutral-600 mt-1">BPI, TÜV, BRC documentation</p>
              </Link>
              <Link to="/materials/recyclable-mono-pe" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Recyclable Alternative</h4>
                <p className="text-sm text-neutral-600 mt-1">When composting isn't available</p>
              </Link>
              <Link to="/topics/eco-friendly-food-packaging" className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                <h4 className="font-semibold text-neutral-800">Eco-Friendly Packaging</h4>
                <p className="text-sm text-neutral-600 mt-1">Complete sustainability guide</p>
              </Link>
            </div>
          </section>

          {/* CTA Section - What's Next */}
          <section className="mt-12 bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">What's Next?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto text-center">
              Found your local composting facility? Great! Now it's time to choose packaging that actually works in your market.
            </p>
            
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-white">Ready to commit to Achievepack's certified compostable solution?</p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Link
                to="/materials"
                className="bg-white/10 backdrop-blur p-5 rounded-lg border border-white/20 hover:bg-white/20 transition text-center group"
              >
                <Leaf className="h-8 w-8 text-green-300 mx-auto mb-3" />
                <h4 className="font-semibold text-white group-hover:text-green-200">Explore Our Compostable Materials</h4>
                <p className="text-sm text-green-200 mt-2">See our full range of EN 13432 and ASTM D6400 certified options</p>
              </Link>
              <Link
                to="/store"
                className="bg-white/10 backdrop-blur p-5 rounded-lg border border-white/20 hover:bg-white/20 transition text-center group"
              >
                <Package className="h-8 w-8 text-green-300 mx-auto mb-3" />
                <h4 className="font-semibold text-white group-hover:text-green-200">Request Samples</h4>
                <p className="text-sm text-green-200 mt-2">Test our packaging on your products (MOQ from 100 pieces)</p>
              </Link>
              <button
                onClick={openCalendly}
                className="bg-white/10 backdrop-blur p-5 rounded-lg border border-white/20 hover:bg-white/20 transition text-center group"
              >
                <Calendar className="h-8 w-8 text-green-300 mx-auto mb-3" />
                <h4 className="font-semibold text-white group-hover:text-green-200">Book a Consultation</h4>
                <p className="text-sm text-green-200 mt-2">Discuss your region's infrastructure, market fit, and best packaging solution</p>
              </button>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg text-center">
              <p className="text-green-100 text-sm">
                Or, if your region lacks composting infrastructure, we can also recommend <Link to="/materials/recyclable-mono-pe" className="text-white underline hover:text-green-200">mono-PE recyclable alternatives</Link> that align with existing recycling streams. Achievepack is here to match your sustainability goals to your market reality.
              </p>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Disclaimer</h3>
                <p className="text-sm text-amber-800">
                  <strong>Please also check local resources.</strong> All data on this page is gathered from publicly available internet sources and may not be up-to-date or accurate. Composting facility acceptance policies, certifications, and service availability change frequently. Always contact the facility directly to confirm current acceptance of certified compostable packaging before arranging drop-off or collection. Achieve Pack is not responsible for inaccuracies in third-party facility information.
                </p>
                <p className="text-xs text-amber-700 mt-3">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} | <Link to="/company/contact" className="text-primary-600 hover:underline">Report an error or update</Link>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default CompostServiceFinderPage
