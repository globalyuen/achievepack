import SEOPageLayout from '../../components/SEOPageLayout';

const SuperfoodBrandCaseStudy = () => {
  const heroImage = '/imgs/seo-photos/a_vitalgreen_superfood_chicago_wellness_pouch_1211501.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Client Overview',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="text-sm text-neutral-500 mb-1">Company</p>
              <p class="font-semibold text-lg">VitalGreen Superfoods</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Industry</p>
              <p class="font-semibold">Superfood & Wellness Powders</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Location</p>
              <p class="font-semibold">Chicago, Illinois, USA</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500 mb-1">Package Type</p>
              <p class="font-semibold">Stand-Up Pouches with Zipper</p>
            </div>
          </div>
        </div>
        <p>VitalGreen produces organic superfood powders including spirulina, chlorella, and custom blends. As a B-Corp certified company, they needed packaging that matched their environmental commitments while protecting sensitive powder products.</p>
      `
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      content: `
        <p class="mb-4">VitalGreen faced unique powder packaging challenges:</p>
        <ul class="space-y-3 text-neutral-700">
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Oxygen sensitivity</strong> of superfood powders required high barrier</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Moisture protection</strong> critical for powder quality</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>B-Corp certification</strong> required documented sustainability improvements</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-red-500 mt-1">✗</span>
            <span><strong>Multiple SKUs</strong> needed with quick market entry</span>
          </li>
        </ul>
      `
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: `
        <p class="mb-4">We developed recyclable mono-PE packaging with enhanced barriers:</p>
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Mono-PE Structure</h4>
            <p class="text-neutral-600 text-sm">100% recyclable mono-material polyethylene with EVOH barrier layer for oxygen protection. Store drop-off recyclable.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">High Barrier Performance</h4>
            <p class="text-neutral-600 text-sm">OTR below 1.0 cc/m²/day protects sensitive superfood nutrients from oxidation.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">Digital Printing Flexibility</h4>
            <p class="text-neutral-600 text-sm">8 SKUs launched simultaneously with digital printing. 500 bags per SKU minimum.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-3">GRS Certification</h4>
            <p class="text-neutral-600 text-sm">Global Recycled Standard documentation for B-Corp reporting requirements.</p>
          </div>
        </div>
      `
    },
    {
      id: 'results',
      title: 'The Results',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">100%</div>
            <div class="text-sm text-neutral-600">Recyclable Packaging</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">18 mo</div>
            <div class="text-sm text-neutral-600">Shelf Life Achieved</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">8</div>
            <div class="text-sm text-neutral-600">SKUs Launched</div>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-xl">
            <div class="text-3xl font-bold text-green-600 mb-1">+15</div>
            <div class="text-sm text-neutral-600">B-Corp Points</div>
          </div>
        </div>
        <blockquote class="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
          "The GRS certification documentation was exactly what we needed for our B-Corp recertification. Our customers appreciate the recyclable packaging, and our products stay fresh longer than expected."
          <footer class="mt-2 text-sm font-semibold text-neutral-700">— Dr. Maya Patel, CEO, VitalGreen Superfoods</footer>
        </blockquote>
      `
    },
    {
      id: 'specs',
      title: 'Package Specifications',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> Stand-Up Pouch</div>
            <div><strong>Size:</strong> 160 × 240 + 90mm (250g capacity)</div>
            <div><strong>Material:</strong> Mono-PE with EVOH barrier</div>
            <div><strong>Barrier:</strong> High (OTR &lt; 1.0)</div>
            <div><strong>Closure:</strong> Pocket zipper</div>
            <div><strong>Features:</strong> Rounded corners, tear notch</div>
            <div><strong>Printing:</strong> Digital, 8 SKU designs</div>
            <div><strong>Finish:</strong> Matte</div>
            <div><strong>Certification:</strong> GRS, FDA food-safe</div>
            <div><strong>Order Size:</strong> 500 pcs per SKU (8 SKUs)</div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'How can recyclable packaging achieve high barrier?',
      answer: 'Our mono-PE structure incorporates a thin EVOH layer that provides excellent oxygen barrier while maintaining recyclability in PE recycling streams. The package is store drop-off recyclable.'
    },
    {
      question: 'What documentation do you provide for B-Corp reporting?',
      answer: 'We provide GRS certificates, material specifications, carbon footprint estimates, and recyclability statements that can be used for B-Corp sustainability reporting.'
    },
    {
      question: 'How did they launch 8 SKUs at once?',
      answer: 'Digital printing allows unlimited designs without plate costs. Each SKU had just 500 bags minimum, making the total initial order 4,000 bags—affordable for a growing brand.'
    }
  ];

  return (
    <SEOPageLayout
      title="Superfood Brand Case Study | VitalGreen Recyclable Packaging"
      description="How VitalGreen Superfoods achieved B-Corp packaging goals with GRS certified recyclable pouches. Case study featuring high-barrier mono-PE packaging."
      keywords={['superfood packaging case study', 'recyclable powder packaging', 'B-Corp packaging', 'GRS certified pouches', 'mono-PE packaging']}
      heroTitle="Case Study: VitalGreen Superfoods"
      heroSubtitle="How a B-Corp superfood brand achieved high-barrier recyclable packaging that met certification requirements."
      heroImage={heroImage}
      sections={sections}
      introSummary="VitalGreen Superfoods partnered with Achieve Pack to develop recyclable high-barrier packaging for their superfood powders. The GRS-certified solution helped them gain B-Corp points while protecting product quality."
      faqs={faqs}
      ctaTitle="Packaging for Your Wellness Brand"
      ctaDescription="Let's create recyclable packaging that meets your sustainability goals."
      ctaButtonText="Start Your Project"
      ctaButtonUrl="/contact"
    />
  );
};

export default SuperfoodBrandCaseStudy;
