import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const CertificatesPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Our Certifications & Compliance',
      content: `
        <p class="mb-4">At Achieve Pack, we believe that certifications are more than just badges—they're proof of our commitment to quality, safety, and sustainability. Every certification we hold represents rigorous third-party testing and ongoing audits.</p>
        <p>We provide full documentation with every order, giving you the confidence to make claims about your packaging and satisfy retailer requirements.</p>
      `
    },
    {
      id: 'compostability',
      title: 'Compostability Certifications',
      content: `
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border-2 border-primary-200">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">EU</div>
              <div>
                <h4 class="font-semibold text-lg">EN 13432</h4>
                <p class="text-sm text-neutral-600">European Standard</p>
              </div>
            </div>
            <p class="text-neutral-700 text-sm">The European standard for compostable packaging. Requires 90% disintegration within 12 weeks and complete biodegradation within 6 months in industrial composting conditions.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border-2 border-primary-200">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">US</div>
              <div>
                <h4 class="font-semibold text-lg">ASTM D6400</h4>
                <p class="text-sm text-neutral-600">US Standard</p>
              </div>
            </div>
            <p class="text-neutral-700 text-sm">US standard for plastics designed for municipal/industrial aerobic composting facilities. Testing equivalent to EN 13432, recognized across North America.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border-2 border-primary-200">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">AU</div>
              <div>
                <h4 class="font-semibold text-lg">AS 4736 / AS 5810</h4>
                <p class="text-sm text-neutral-600">Australian Standards</p>
              </div>
            </div>
            <p class="text-neutral-700 text-sm">AS 4736 for commercial compostability and AS 5810 for home compostability. Required for compostable claims in Australia and New Zealand.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border-2 border-primary-200">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">OK</div>
              <div>
                <h4 class="font-semibold text-lg">OK Compost HOME</h4>
                <p class="text-sm text-neutral-600">TÜV Austria</p>
              </div>
            </div>
            <p class="text-neutral-700 text-sm">Certification for materials that biodegrade in home composting conditions (20-30°C). The gold standard for consumer-level compostability.</p>
          </div>
        </div>
      `
    },
    {
      id: 'recyclability',
      title: 'Recyclability Certifications',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl mb-6">
          <div class="flex items-center gap-4 mb-4">
            <img src="/imgs/pcr-grs-cert-1.webp" alt="GRS Certification" class="w-20 h-20 object-contain" />
            <div>
              <h4 class="font-semibold text-lg">GRS - Global Recycled Standard</h4>
              <p class="text-neutral-600">Our PCR (post-consumer recycled) materials are GRS certified, verifying the recycled content and tracking it through the supply chain. This certification is increasingly required by major retailers.</p>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Mono-Material Recyclability</h4>
            <p class="text-neutral-600 text-sm">Our mono-PE and mono-PP pouches are designed for recyclability in existing recycling streams. Structure verified by third-party testing.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Store Drop-Off Compatible</h4>
            <p class="text-neutral-600 text-sm">Many of our recyclable pouches qualify for store drop-off recycling programs (like How2Recycle's Store Drop-Off label).</p>
          </div>
        </div>
      `
    },
    {
      id: 'foodsafety',
      title: 'Food Safety Certifications',
      content: `
        <p class="mb-4">All our packaging materials intended for food contact are certified to international food safety standards. We can provide documentation for regulatory compliance in your target markets.</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <div class="text-3xl mb-2">🇺🇸</div>
            <h4 class="font-semibold mb-1">FDA 21 CFR</h4>
            <p class="text-neutral-600 text-sm">US Food & Drug Administration compliance for food contact materials</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <div class="text-3xl mb-2">🇪🇺</div>
            <h4 class="font-semibold mb-1">EU 10/2011</h4>
            <p class="text-neutral-600 text-sm">European regulation for plastic materials in food contact</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200 text-center">
            <div class="text-3xl mb-2">🌍</div>
            <h4 class="font-semibold mb-1">Migration Testing</h4>
            <p class="text-neutral-600 text-sm">Third-party verified migration testing for specific food types</p>
          </div>
        </div>
      `
    },
    {
      id: 'facility',
      title: 'Facility Certifications',
      content: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">ISO 9001:2015</h4>
            <p class="text-neutral-600">Quality Management System certification. Demonstrates our commitment to consistent quality and continuous improvement in all processes.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">BRC Packaging Materials</h4>
            <p class="text-neutral-600">British Retail Consortium certification for packaging manufacturers. Often required by major retailers for food packaging suppliers.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">FSC Chain of Custody</h4>
            <p class="text-neutral-600">For paper-based products, our FSC certification ensures responsibly sourced paper from well-managed forests.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">SEDEX Membership</h4>
            <p class="text-neutral-600">Ethical trade audit platform. We maintain visibility into our ethical, labor, and environmental practices.</p>
          </div>
        </div>
      `
    },
    {
      id: 'documentation',
      title: 'Documentation We Provide',
      content: `
        <p class="mb-4">With every order, we can provide the certification documents you need for retailer compliance, regulatory submissions, or marketing claims:</p>
        <div class="bg-neutral-100 p-6 rounded-xl">
          <ul class="grid md:grid-cols-2 gap-2 text-neutral-700">
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Certificate of Compliance (CoC)</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Material specifications</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Food safety declarations</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Compostability certificates</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> GRS transaction certificates</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Test reports (barrier, seal strength)</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> REACH compliance statements</li>
            <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Heavy metals declarations</li>
          </ul>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'Do you provide certification documents with orders?',
      answer: 'Yes, we provide all relevant certification documents with every order. This includes certificates of compliance, food safety declarations, and specific certifications like EN 13432 or GRS certificates as applicable.'
    },
    {
      question: 'Are your compostable materials certified in my country?',
      answer: 'Our compostable materials are certified to EN 13432 (EU), ASTM D6400 (US), and AS 4736/5810 (Australia). These are the major international standards. Contact us for specific regional requirements.'
    },
    {
      question: 'Can I use your certifications in my marketing?',
      answer: 'Yes, with the proper documentation we provide, you can make certified claims about your packaging. We\'ll advise on correct wording and logo usage to ensure compliance.'
    },
    {
      question: 'How often are your certifications renewed?',
      answer: 'Most certifications require annual audits and renewal. We maintain current certifications and can provide up-to-date documentation at any time.'
    }
  ];

  return (
    <SEOPageLayout
      title="Packaging Certifications | EN 13432, GRS, FDA Compliance"
      description="Explore Achieve Pack's comprehensive certifications: EN 13432, ASTM D6400, GRS, FDA, BRC, and more. Full documentation provided with every order."
      keywords={['packaging certifications', 'EN 13432', 'ASTM D6400', 'GRS certified', 'FDA food safe', 'compostable certification']}
      heroTitle="Certifications & Compliance"
      heroSubtitle="Third-party verified certifications you can trust. From compostability to food safety, our certifications give you confidence in every claim."
      heroImage={heroImage}
      sections={sections}
      introSummary="Our packaging materials are certified to the world's leading standards for compostability, recyclability, and food safety. We provide complete documentation with every order to support your compliance and marketing needs."
      faqs={faqs}
      ctaTitle="Get Certified Packaging"
      ctaDescription="Order eco-friendly packaging with full certification documentation."
      ctaButtonText="Request a Quote"
      ctaButtonUrl="/contact"
    />
  );
};

export default CertificatesPage;
