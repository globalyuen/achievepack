import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const FactoryTourPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_factory_tour_quality_precision_0863191.webp';
  
  const sections = [
    {
      id: 'welcome',
      title: 'Welcome to Our Virtual Factory Tour',
      content: `
        <p class="mb-4">Step inside our state-of-the-art manufacturing facility where sustainable packaging comes to life. Our factory combines cutting-edge technology with rigorous quality control to produce eco-friendly pouches that meet the highest international standards.</p>
        <p>While we can't bring you physically to our facility, this virtual tour gives you insight into how we manufacture your packaging with precision, care, and environmental responsibility.</p>
      `
    },
    {
      id: 'materials',
      title: 'Material Sourcing & Storage',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-4">
          <h4 class="font-semibold text-primary-700 mb-3">Our Material Standards:</h4>
          <ul class="space-y-2 text-neutral-700">
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> All raw materials sourced from certified suppliers</li>
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Climate-controlled storage for material integrity</li>
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Batch tracking for full traceability</li>
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Regular quality testing of incoming materials</li>
          </ul>
        </div>
        <p>We maintain partnerships with leading sustainable material manufacturers worldwide, including suppliers of certified compostable films, GRS-certified recycled plastics, and food-safe bio-based materials.</p>
      `
    },
    {
      id: 'printing',
      title: 'Printing Department',
      content: `
        <p class="mb-4">Our printing department features both digital and flexographic (plate) printing capabilities, allowing us to handle orders from 100 pieces to millions with consistent quality.</p>
        <div class="grid md:grid-cols-2 gap-6 mb-4">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Digital Printing</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Unlimited colors at no extra cost</li>
              <li>• Perfect for short runs (100-5,000 pcs)</li>
              <li>• Variable data printing available</li>
              <li>• No plate costs</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Plate Printing</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Up to 10 colors</li>
              <li>• Best for large volumes (5,000+ pcs)</li>
              <li>• Pantone color matching</li>
              <li>• Lower unit cost at scale</li>
            </ul>
          </div>
        </div>
        <p>All inks used are food-safe and compliant with FDA and EU regulations. We use solvent-free and water-based inks where possible.</p>
      `
    },
    {
      id: 'lamination',
      title: 'Lamination & Material Processing',
      content: `
        <p class="mb-4">Our lamination department bonds multiple material layers to create the barrier properties your product needs. This is where we combine materials like kraft paper with PLA, or create mono-material structures for recyclability.</p>
        <div class="bg-neutral-100 p-6 rounded-xl">
          <h4 class="font-semibold mb-3">Process Capabilities:</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong class="text-primary-700">Dry Lamination</strong>
              <p class="text-neutral-600">For high-barrier multi-layer structures</p>
            </div>
            <div>
              <strong class="text-primary-700">Solventless Lamination</strong>
              <p class="text-neutral-600">Eco-friendly bonding process</p>
            </div>
            <div>
              <strong class="text-primary-700">Extrusion Lamination</strong>
              <p class="text-neutral-600">For specialized barrier layers</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'pouchmaking',
      title: 'Pouch Making & Conversion',
      content: `
        <p class="mb-4">Our pouch-making lines convert printed and laminated films into finished pouches. We can produce all major pouch formats including stand-up pouches, flat bottom bags, side gusset bags, and more.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-2xl font-bold text-primary-600 mb-1">6</div>
            <div class="text-sm text-neutral-600">Production Lines</div>
          </div>
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-2xl font-bold text-primary-600 mb-1">50mm-500mm</div>
            <div class="text-sm text-neutral-600">Width Range</div>
          </div>
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-2xl font-bold text-primary-600 mb-1">100K+</div>
            <div class="text-sm text-neutral-600">Daily Capacity</div>
          </div>
        </div>
        <p>Each line is equipped for different pouch styles and can integrate features like zippers, valves, spouts, and tear notches.</p>
      `
    },
    {
      id: 'quality',
      title: 'Quality Control Laboratory',
      content: `
        <p class="mb-4">Our in-house laboratory performs rigorous testing at every production stage. From incoming material inspection to final product testing, we ensure every pouch meets specifications.</p>
        <div class="bg-primary-50 p-6 rounded-xl">
          <h4 class="font-semibold text-primary-700 mb-3">Testing Capabilities:</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <ul class="space-y-1 text-neutral-700">
              <li>• Barrier testing (OTR, WVTR)</li>
              <li>• Seal strength testing</li>
              <li>• Tensile strength measurement</li>
              <li>• Thickness uniformity</li>
            </ul>
            <ul class="space-y-1 text-neutral-700">
              <li>• Color consistency (spectrophotometer)</li>
              <li>• Drop testing</li>
              <li>• Migration testing</li>
              <li>• Dimensional accuracy</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'sustainability',
      title: 'Sustainability Practices',
      content: `
        <p class="mb-4">Sustainability isn't just in our products—it's in our operations. Our factory implements comprehensive environmental management practices.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Waste Reduction</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• Production waste recycled or composted</li>
              <li>• Optimized cutting patterns minimize trim waste</li>
              <li>• Solvent recovery systems</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Energy Efficiency</h4>
            <ul class="text-neutral-600 space-y-1 text-sm">
              <li>• LED lighting throughout facility</li>
              <li>• Energy-efficient machinery</li>
              <li>• Heat recovery systems</li>
            </ul>
          </div>
        </div>
      `
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
