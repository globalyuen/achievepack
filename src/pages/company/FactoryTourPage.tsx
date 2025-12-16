import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Factory, Printer, Layers, Scissors, Package, CheckCircle, Leaf, Recycle, Zap } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

// Video Card Component
const VideoCard = ({ title, description, videoSrc, icon: Icon }: { title: string; description: string; videoSrc: string; icon: React.ElementType }) => (
  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative aspect-video bg-neutral-900">
      <video 
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-5 w-5 text-primary-600" />
        <h4 className="font-semibold text-neutral-800">{title}</h4>
      </div>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  </div>
);

const FactoryTourPage = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.factoryTour';

  const heroImage = '/imgs/seo-photos/a_factory_tour_quality_precision_0863191.webp';

  // Factory videos data
  const factoryVideos = [
    { title: t(`${p}.videos.entrance.title`), description: t(`${p}.videos.entrance.desc`), videoSrc: '/video/factory/enter.mp4', icon: Factory },
    { title: t(`${p}.videos.digital.title`), description: t(`${p}.videos.digital.desc`), videoSrc: '/video/factory/digital-printing.mp4', icon: Printer },
    { title: t(`${p}.videos.roto.title`), description: t(`${p}.videos.roto.desc`), videoSrc: '/video/factory/roto-printing.mp4', icon: Printer },
    { title: t(`${p}.videos.laminating.title`), description: t(`${p}.videos.laminating.desc`), videoSrc: '/video/factory/laminating.mp4', icon: Layers },
    { title: t(`${p}.videos.slitting.title`), description: t(`${p}.videos.slitting.desc`), videoSrc: '/video/factory/slitting.mp4', icon: Scissors },
    { title: t(`${p}.videos.bagMaking.title`), description: t(`${p}.videos.bagMaking.desc`), videoSrc: '/video/factory/bag making.mp4', icon: Package }
  ];
  
  const sections = [
    {
      id: 'welcome',
      title: 'Welcome to Our Virtual Factory Tour',
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Step inside our state-of-the-art manufacturing facility where sustainable packaging comes to life. Our factory combines cutting-edge technology with rigorous quality control to produce eco-friendly pouches that meet the highest international standards.</p>
          <p className="text-neutral-700">While we can't bring you physically to our facility, this virtual tour gives you insight into how we manufacture your packaging with precision, care, and environmental responsibility.</p>
          
          {/* Video Gallery */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
              <Play className="h-5 w-5 text-primary-600" />
              Factory Video Tour
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factoryVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  title={video.title}
                  description={video.description}
                  videoSrc={video.videoSrc}
                  icon={video.icon}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Material Sourcing & Storage',
      icon: <Layers className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Our Material Standards:
            </h4>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> All raw materials sourced from certified suppliers</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> Climate-controlled storage for material integrity</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> Batch tracking for full traceability</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> Regular quality testing of incoming materials</li>
            </ul>
          </div>
          <p className="text-neutral-700">We maintain partnerships with leading sustainable material manufacturers worldwide, including suppliers of certified compostable films, GRS-certified recycled plastics, and food-safe bio-based materials.</p>
        </div>
      )
    },
    {
      id: 'printing',
      title: 'Printing Department',
      icon: <Printer className="h-5 w-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Our printing department features both digital and flexographic (plate) printing capabilities, allowing us to handle orders from 100 pieces to millions with consistent quality.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-lg mb-2 text-blue-800 flex items-center gap-2">
                <Printer className="h-5 w-5 text-blue-600" />
                Digital Printing
              </h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Unlimited colors at no extra cost</li>
                <li>• Perfect for short runs (100-5,000 pcs)</li>
                <li>• Variable data printing available</li>
                <li>• No plate costs</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-lg mb-2 text-purple-800 flex items-center gap-2">
                <Printer className="h-5 w-5 text-purple-600" />
                Plate Printing
              </h4>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Up to 10 colors</li>
                <li>• Best for large volumes (5,000+ pcs)</li>
                <li>• Pantone color matching</li>
                <li>• Lower unit cost at scale</li>
              </ul>
            </div>
          </div>
          <p className="text-neutral-700">All inks used are food-safe and compliant with FDA and EU regulations. We use solvent-free and water-based inks where possible.</p>
        </div>
      )
    },
    {
      id: 'lamination',
      title: 'Lamination & Material Processing',
      icon: <Layers className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Our lamination department bonds multiple material layers to create the barrier properties your product needs. This is where we combine materials like kraft paper with PLA, or create mono-material structures for recyclability.</p>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
            <h4 className="font-semibold mb-3 text-amber-800">Process Capabilities:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/60 p-4 rounded-lg">
                <strong className="text-amber-800">Dry Lamination</strong>
                <p className="text-amber-700">For high-barrier multi-layer structures</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <strong className="text-amber-800">Solventless Lamination</strong>
                <p className="text-amber-700">Eco-friendly bonding process</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <strong className="text-amber-800">Extrusion Lamination</strong>
                <p className="text-amber-700">For specialized barrier layers</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pouchmaking',
      title: 'Pouch Making & Conversion',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Our pouch-making lines convert printed and laminated films into finished pouches. We can produce all major pouch formats including stand-up pouches, flat bottom bags, side gusset bags, and more.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-green-100 rounded-xl border border-primary-200">
              <div className="text-3xl font-bold text-primary-600 mb-1">6</div>
              <div className="text-sm text-primary-700">Production Lines</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">50-500mm</div>
              <div className="text-sm text-blue-700">Width Range</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">100K+</div>
              <div className="text-sm text-purple-700">Daily Capacity</div>
            </div>
          </div>
          <p className="text-neutral-700">Each line is equipped for different pouch styles and can integrate features like zippers, valves, spouts, and tear notches.</p>
        </div>
      )
    },
    {
      id: 'quality',
      title: 'Quality Control Laboratory',
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Our in-house laboratory performs rigorous testing at every production stage. From incoming material inspection to final product testing, we ensure every pouch meets specifications.</p>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Testing Capabilities:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-1 text-green-700">
                <li>• Barrier testing (OTR, WVTR)</li>
                <li>• Seal strength testing</li>
                <li>• Tensile strength measurement</li>
                <li>• Thickness uniformity</li>
              </ul>
              <ul className="space-y-1 text-green-700">
                <li>• Color consistency (spectrophotometer)</li>
                <li>• Drop testing</li>
                <li>• Migration testing</li>
                <li>• Dimensional accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainability Practices',
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Sustainability isn't just in our products—it's in our operations. Our factory implements comprehensive environmental management practices.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-lg mb-2 text-green-800 flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                Waste Reduction
              </h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Production waste recycled or composted</li>
                <li>• Optimized cutting patterns minimize trim waste</li>
                <li>• Solvent recovery systems</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-lg mb-2 text-blue-800 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Energy Efficiency
              </h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• LED lighting throughout facility</li>
                <li>• Energy-efficient machinery</li>
                <li>• Heat recovery systems</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['factory tour', 'packaging manufacturing', 'pouch production', 'quality control', 'sustainable manufacturing']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary={t(`${p}.introSummary`)}
      faqs={faqs}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default FactoryTourPage;
