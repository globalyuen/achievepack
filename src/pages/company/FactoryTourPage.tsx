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

  const heroImage = '/imgs/seo-photos/a_factory_tour_quality_precision_0863191.webp';

  // Factory videos data
  const factoryVideos = [
    {
      title: 'Factory Entrance',
      description: 'Welcome to our state-of-the-art manufacturing facility',
      videoSrc: '/video/factory/enter.mp4',
      icon: Factory
    },
    {
      title: 'Digital Printing',
      description: 'High-precision digital printing with unlimited colors',
      videoSrc: '/video/factory/digital-printing.mp4',
      icon: Printer
    },
    {
      title: 'Rotogravure Printing',
      description: 'Large-scale plate printing for high-volume orders',
      videoSrc: '/video/factory/roto-printing.mp4',
      icon: Printer
    },
    {
      title: 'Laminating Process',
      description: 'Bonding multiple material layers for barrier protection',
      videoSrc: '/video/factory/laminating.mp4',
      icon: Layers
    },
    {
      title: 'Slitting Machine',
      description: 'Precision cutting of laminated films to required widths',
      videoSrc: '/video/factory/slitting.mp4',
      icon: Scissors
    },
    {
      title: 'Bag Making',
      description: 'Converting films into finished pouches and bags',
      videoSrc: '/video/factory/bag making.mp4',
      icon: Package
    }
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
    {
      question: 'Can I visit your factory in person?',
      answer: 'Yes, we welcome factory visits by appointment. Contact us to schedule a visit to our manufacturing facility. We also offer detailed video tours for customers who cannot travel.'
    },
    {
      question: 'What quality certifications does your factory have?',
      answer: 'Our facility is ISO 9001 certified for quality management, BRC certified for food packaging, and maintains FSC chain of custody certification for paper-based products.'
    },
    {
      question: 'What is your production capacity?',
      answer: 'We can produce over 100,000 pouches per day across our production lines. For large orders, we can scale up with advance notice. Rush orders are also possible for urgent needs.'
    },
    {
      question: 'How do you ensure consistency across batches?',
      answer: 'We maintain detailed production records, use calibrated equipment, and perform statistical process control (SPC) to ensure every batch meets the same standards. Color matching is verified with spectrophotometers.'
    }
  ];

  return (
    <SEOPageLayout
      title="Virtual Factory Tour | Achieve Pack Manufacturing Facility"
      description="Take a virtual tour of Achieve Pack's state-of-the-art sustainable packaging facility. See how we manufacture eco-friendly pouches with precision and quality control."
      keywords={['factory tour', 'packaging manufacturing', 'pouch production', 'quality control', 'sustainable manufacturing']}
      heroTitle="Virtual Factory Tour"
      heroSubtitle="Step inside our manufacturing facility where sustainable packaging innovation meets precision engineering. Discover how we bring your eco-friendly pouches to life."
      heroImage={heroImage}
      sections={sections}
      introSummary="Our factory combines modern manufacturing technology with rigorous quality control and sustainable practices. From material sourcing to final inspection, every step is designed to deliver premium eco-friendly packaging."
      faqs={faqs}
      ctaTitle="See It For Yourself"
      ctaDescription="Request a personalized video tour or schedule an in-person visit to our facility."
      ctaButtonText="Schedule a Tour"
      ctaButtonUrl="/contact"
    />
  );
};

export default FactoryTourPage;
