import React, { useState } from 'react'
import { Beaker, FlaskConical, Microscope, Package, Layers, Settings, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Globe, Award, Zap, FileCheck, Building2, Sparkles, Filter, Factory, ClipboardCheck, Droplets, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Combined gallery images from lab folders
const labBagGallery = [
  // Filter bags
  { src: '/imgs/lab/filter/hero.webp', title: 'Lateral Filter Blender Bags', desc: 'Side Filter Membrane Homogenizer Bags', category: 'filter' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Sterile Lab Bag Collection', desc: 'NoBacteriaLaboratoryHomogenizerBagSeries', category: 'filter' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp', title: 'Filter Membrane Detail', desc: 'Filter MembraneDetailsClose-Up', category: 'filter' },
  // Blender bags
  { src: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp', title: 'Lab Blender Bags', desc: 'LaboratoryHomogenizerBag', category: 'blend' },
  { src: '/imgs/lab/blend/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Standard Blender Bags', desc: 'StandardHomogenizerBag', category: 'blend' },
  // Wire closure bags
  { src: '/imgs/lab/wire/hero.webp', title: 'Wire Closure Bags', desc: 'Wire Tie Closure Bags', category: 'wire' },
  { src: '/imgs/lab/wire/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Wire Closure Collection', desc: 'Iron WireSealSeries', category: 'wire' },
]

const LabBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = labBagGallery.length - 1
    if (newIndex >= labBagGallery.length) newIndex = 0
    setGalleryEnlarged({ src: labBagGallery[newIndex].src, index: newIndex })
  }

  // Alternating layout component
  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    titleCn, 
    content, 
    contentCn,
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    titleCn: string
    content: string
    contentCn: string
    imageLeft?: boolean
    index: number
  }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      {imageLeft ? (
        <>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'overview',
      title: 'Laboratory Blender Bags Overview',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Premium sterile laboratory bags for microbiology and food safety testing</strong> — AchievePack® lab bag series includes lateral filter bags, standard blender bags, and wire closure bags. Clean room produced and gamma sterilized for contamination-sensitive applications.
            </p>
            <p className="text-neutral-700 mb-4">
              PremiumNoBacteriaLaboratoryBag，UseAtMicrobialStudyAndFoodSafeTesting — AchievePack® LaboratoryBagSeriesPackIncludingSide FilterBag、StandardHomogenizerBagAndWire Tie Closure Bags。Cleanroom Production，GammaRadiation Sterilization，Suitable forContamination-SensitiveOfApplication。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">Lateral Filter Bags</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">Standard Blender Bags</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">Wire Closure Bags</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-700 border border-blue-200">Gamma Sterilized</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/lab/lateral-filter-bags" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/lab/filter/hero.webp" alt="Lateral Filter Blender Bags" className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 mb-2">Lateral Filter Bags</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">Side Filter Membrane Homogenizer Bags</p>
              <p className="text-neutral-600 text-sm">Side-mounted filtration membrane for instant, particle-free sample preparation.</p>
            </Link>
            <Link to="/lab/lab-blender-bags" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp" alt="Standard Lab Blender Bags" className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 mb-2">Standard Blender Bags</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">StandardLaboratoryHomogenizerBag</p>
              <p className="text-neutral-600 text-sm">Classic sterile blender bags for general homogenization applications.</p>
            </Link>
            <Link to="/lab/wire-closure-bags" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/lab/wire/hero.webp" alt="Wire Closure Bags" className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 mb-2">Wire Closure Bags</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">Wire Tie Closure Bags</p>
              <p className="text-neutral-600 text-sm">Secure wire closure for sample collection and storage applications.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'filter-bags',
      title: 'Lateral Filter Blender Bags',
      icon: <Filter className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp"
            imageAlt="Sterile lab bag collection"
            title="Advanced Lateral Filtration Technology"
            titleCn="FirstIntoSideThroughFilterTechnology"
            content="AchievePack® BagFilter series features side-mounted non-woven filtration membrane that provides instant, particle-free filtrate. The lateral filter design allows efficient sample separation while maintaining sterility throughout the process."
            contentCn="AchievePack® BagFilter SeriesUsingSideSetNoFilter Membrane，ProvideImmediatelyTimeNoParticle Filtrate。Side FilterDesignAchieveEfficientSampleDivideLeave，MeanwhileWhole ProcessMaintainNoBacteriaStatus。"
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp"
            imageAlt="Filter membrane detail"
            title="High-Quality Non-Woven Filter Membrane"
            titleCn="HighQualityVolumeNoFilter Membrane"
            content="Our proprietary filter membrane is designed for optimal particle retention while allowing rapid filtrate flow. The non-woven construction ensures consistent performance across batches and eliminates fiber shedding during use."
            contentCn="WeProfessionalHaveOfFilter MembraneDesignAchieveMostBestParticleCutStayOfMeanwhileAllowFastFilterLiquidFlowMove。NoWeaveStructureEnsureBatchTimesBetweenOneUltimatePropertyCan，EliminateUseProcessInOfFiber Shedding。"
            imageLeft={false}
            index={2}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Filter className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Lateral Filter</h5>
              <p className="text-xs text-neutral-600">Side-mounted membrane</p>
              <p className="text-xs text-primary-600">Side Filter</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Gamma Sterile</h5>
              <p className="text-xs text-neutral-600">Radiation sterilized</p>
              <p className="text-xs text-primary-600">GammaSterilization</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Factory className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Clean Room</h5>
              <p className="text-xs text-neutral-600">ISO certified production</p>
              <p className="text-xs text-primary-600">Cleanroom Production</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Particle-Free</h5>
              <p className="text-xs text-neutral-600">Clean filtrate</p>
              <p className="text-xs text-primary-600">NoParticle Filtrate</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'blender-bags',
      title: 'Standard Lab Blender Bags',
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
            imageAlt="Standard lab blender bags"
            title="Classic Sterile Blender Bags"
            titleCn="ThroughClassicNoBacteriaHomogenizerBag"
            content="Our standard blender bags are designed for general homogenization applications in food safety, environmental, and pharmaceutical testing. Multi-layer film construction provides excellent puncture resistance and seal integrity."
            contentCn="OurStandardHomogenizerBagProfessionalForFoodSafe、EnvironmentAndPharmaceuticalTestingInOfOneGeneralHomogenizerApplicationDesign。Multi-LayerFilmStructureProvideOutstandingOfPuncture ResistantPropertyAndSealedCompleteProperty。"
            imageLeft={true}
            index={3}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">400mL</div>
              <p className="text-sm text-neutral-700">Standard Capacity</p>
              <p className="text-xs text-neutral-600">StandardCapacity</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">3-Layer</div>
              <p className="text-sm text-neutral-700">Film Construction</p>
              <p className="text-xs text-neutral-600">ThreeLayerComposite Structure</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">25kGy</div>
              <p className="text-sm text-neutral-700">Gamma Sterilization</p>
              <p className="text-xs text-neutral-600">GammaRadiation Sterilization</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'wire-bags',
      title: 'Wire Closure Bags',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/hero.webp"
            imageAlt="Wire closure bags"
            title="Secure Wire Closure Design"
            titleCn="SafeIron WireSealDesign"
            content="Wire closure bags feature integrated metal wire for secure, reusable sealing. Perfect for sample collection, transport, and storage applications where repeated access is required while maintaining sample integrity."
            contentCn="Wire Tie Closure BagsWithHaveCollectionFormWire，AchieveSafeCanRepeatedSealed。Ideal forSuitableRequireNeedRepeatedVisitMeanwhileMaintainSampleCompletePropertyOfSampleCollectCollection、TransportationAndStorageApplication。"
            imageLeft={false}
            index={5}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Settings className="h-6 w-6 text-blue-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Reusable Closure</h5>
              <p className="text-sm text-neutral-600 mt-1">Open and reseal multiple times</p>
              <p className="text-xs text-primary-600 mt-1">CanRepeatedOpenSuitable</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Shield className="h-6 w-6 text-blue-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Secure Seal</h5>
              <p className="text-sm text-neutral-600 mt-1">Prevents contamination</p>
              <p className="text-xs text-primary-600 mt-1">PreventContamination</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <ClipboardCheck className="h-6 w-6 text-blue-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Sample Storage</h5>
              <p className="text-sm text-neutral-600 mt-1">Long-term preservation</p>
              <p className="text-xs text-primary-600 mt-1">Long TermSave</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Industry Applications',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">AchievePack® laboratory bags are used across multiple industries for critical testing and quality assurance:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Beaker className="h-6 w-6 text-green-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">Food Safety</h5>
              <p className="text-xs text-neutral-600 mt-1">Pathogen detection, quality testing</p>
              <p className="text-xs text-primary-600">FoodSafeTesting</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Microscope className="h-6 w-6 text-blue-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">Microbiology</h5>
              <p className="text-xs text-neutral-600 mt-1">Culture preparation, analysis</p>
              <p className="text-xs text-primary-600">MicrobialStudyResearch</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <FlaskConical className="h-6 w-6 text-purple-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">Pharmaceutical</h5>
              <p className="text-xs text-neutral-600 mt-1">QC testing, sample prep</p>
              <p className="text-xs text-primary-600">PharmaceuticalQualityCheck</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-amber-600" />
              </div>
              <h5 className="font-semibold text-neutral-900">Environmental</h5>
              <p className="text-xs text-neutral-600 mt-1">Water, soil, air testing</p>
              <p className="text-xs text-primary-600">Environmental Testing</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'quality',
      title: 'Quality & Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Manufacturing Standards
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">ISO 9001 Certified</p>
                  <p className="text-sm text-neutral-600">Quality management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">Clean Room Production</p>
                  <p className="text-sm text-neutral-600">Controlled environment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">Gamma Sterilization</p>
                  <p className="text-sm text-neutral-600">25kGy validated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related',
      title: 'Related Products',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">Explore our complete range of specialized packaging solutions:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Stand-Up Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">Flexible food packaging</p>
            </Link>
            <Link to="/packaging/vacuum-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Layers className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Vacuum Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">Extended shelf life</p>
            </Link>
            <Link to="/products/labels-and-stickers" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <FileCheck className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Labels & Stickers</h5>
              <p className="text-xs text-neutral-600 mt-1">Product identification</p>
            </Link>
            <Link to="/materials/compostable" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Sparkles className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Eco Materials</h5>
              <p className="text-xs text-neutral-600 mt-1">Sustainable options</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">How are your lab bags sterilized?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Our laboratory bags are gamma sterilized at 25kGy minimum dose. This radiation sterilization process ensures complete sterility while maintaining the structural integrity and performance of the bags. Each batch is validated for sterility assurance.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">What is the advantage of lateral filter bags?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Lateral filter bags feature a side-mounted non-woven filtration membrane that provides instant, particle-free filtrate. This design allows efficient sample separation while maintaining sterility throughout the entire process - ideal for microbiology testing.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">What sizes are available for lab blender bags?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Our standard capacity is 400mL, which is compatible with most laboratory blender/stomacher machines. Custom sizes are available for specific applications. Contact us for your exact requirements.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">Are wire closure bags reusable?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Wire closure bags feature integrated metal wire for secure, reusable sealing. They can be opened and resealed multiple times while maintaining sample integrity. However, they are single-use disposable bags - the reusable closure allows repeated access during testing.</div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">What certifications do your lab bags have?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">Our lab bags are produced in an ISO 9001 certified clean room environment. All bags undergo gamma sterilization (25kGy validated) and meet quality management standards for food safety and pharmaceutical testing applications.</div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Request Lab Bags Quote',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Laboratory Bags Quote</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your laboratory bag requirements. Premium quality, certified sterile, and expert support for your testing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Consultation
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20lab%20blender%20bags"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Chat
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Lab Bags Quote Request"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              Email Quote
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout
        title="Lab Blender Bags | Sterile Filter Bags, Wire Closure | Achieve Pack"
        description="Premium sterile laboratory blender bags for microbiology and food safety testing. Lateral filter bags, standard blender bags, wire closure bags. Gamma sterilized, clean room produced."
        canonicalUrl="https://achievepack.com/products/lab-bags"
        heroTitle="Laboratory Blender Bags"
        heroSubtitle="Lateral Filter • Standard Blender • Wire Closure • Gamma Sterilized"
        introSummary="Premium sterile lab bags for microbiology, food safety, and pharmaceutical testing. Clean room produced with certified sterilization."
        heroImage="/imgs/lab/filter/hero.webp"
        sections={sections}
        keywords={['lab blender bags', 'sterile blender bags', 'lateral filter bags', 'wire closure bags', 'stomacher bags', 'homogenizer bags', 'microbiology bags', 'food testing bags']}
        schemaType="Product"
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={labBagGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{labBagGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{labBagGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {labBagGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LabBagsPage
