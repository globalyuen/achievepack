import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Leaf, Utensils, Building2, FileText, CheckCircle, Recycle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CertificatesPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Our Certifications & Compliance',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">At Achieve Pack, we believe that certifications are more than just badges—they're proof of our commitment to quality, safety, and sustainability. Every certification we hold represents rigorous third-party testing and ongoing audits.</p>
          <p className="text-neutral-700">We provide full documentation with every order, giving you the confidence to make claims about your packaging and satisfy retailer requirements.</p>
        </div>
      )
    },
    {
      id: 'compostability',
      title: 'Compostability Certifications',
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold">EU</div>
              <div>
                <h4 className="font-semibold text-lg text-green-800">EN 13432</h4>
                <p className="text-sm text-green-600">European Standard</p>
              </div>
            </div>
            <p className="text-green-700 text-sm">The European standard for compostable packaging. Requires 90% disintegration within 12 weeks and complete biodegradation within 6 months in industrial composting conditions.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">US</div>
              <div>
                <h4 className="font-semibold text-lg text-blue-800">ASTM D6400</h4>
                <p className="text-sm text-blue-600">US Standard</p>
              </div>
            </div>
            <p className="text-blue-700 text-sm">US standard for plastics designed for municipal/industrial aerobic composting facilities. Testing equivalent to EN 13432, recognized across North America.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold">AU</div>
              <div>
                <h4 className="font-semibold text-lg text-amber-800">AS 4736 / AS 5810</h4>
                <p className="text-sm text-amber-600">Australian Standards</p>
              </div>
            </div>
            <p className="text-amber-700 text-sm">AS 4736 for commercial compostability and AS 5810 for home compostability. Required for compostable claims in Australia and New Zealand.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">OK</div>
              <div>
                <h4 className="font-semibold text-lg text-purple-800">OK Compost HOME</h4>
                <p className="text-sm text-purple-600">TÜV Austria</p>
              </div>
            </div>
            <p className="text-purple-700 text-sm">Certification for materials that biodegrade in home composting conditions (20-30°C). The gold standard for consumer-level compostability.</p>
          </div>
        </div>
      )
    },
    {
      id: 'recyclability',
      title: 'Recyclability Certifications',
      icon: <Recycle className="h-5 w-5 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary-50 to-green-100 p-6 rounded-xl border border-primary-200">
            <div className="flex items-center gap-4 mb-4">
              <img src="/imgs/pcr-grs-cert-1.webp" alt="GRS Certification" className="w-20 h-20 object-contain" />
              <div>
                <h4 className="font-semibold text-lg text-primary-800">GRS - Global Recycled Standard</h4>
                <p className="text-primary-700">Our PCR (post-consumer recycled) materials are GRS certified, verifying the recycled content and tracking it through the supply chain. This certification is increasingly required by major retailers.</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                Mono-Material Recyclability
              </h4>
              <p className="text-neutral-600 text-sm">Our mono-PE and mono-PP pouches are designed for recyclability in existing recycling streams. Structure verified by third-party testing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                Store Drop-Off Compatible
              </h4>
              <p className="text-neutral-600 text-sm">Many of our recyclable pouches qualify for store drop-off recycling programs (like How2Recycle's Store Drop-Off label).</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'foodsafety',
      title: 'Food Safety Certifications',
      icon: <Utensils className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">All our packaging materials intended for food contact are certified to international food safety standards. We can provide documentation for regulatory compliance in your target markets.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
              <div className="text-3xl mb-2">🇺🇸</div>
              <h4 className="font-semibold mb-1 text-blue-800">FDA 21 CFR</h4>
              <p className="text-blue-700 text-sm">US Food & Drug Administration compliance for food contact materials</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
              <div className="text-3xl mb-2">🇪🇺</div>
              <h4 className="font-semibold mb-1 text-green-800">EU 10/2011</h4>
              <p className="text-green-700 text-sm">European regulation for plastic materials in food contact</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold mb-1 text-purple-800">Migration Testing</h4>
              <p className="text-purple-700 text-sm">Third-party verified migration testing for specific food types</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'facility',
      title: 'Facility Certifications',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary-600" />
              ISO 9001:2015
            </h4>
            <p className="text-neutral-600">Quality Management System certification. Demonstrates our commitment to consistent quality and continuous improvement in all processes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary-600" />
              BRC Packaging Materials
            </h4>
            <p className="text-neutral-600">British Retail Consortium certification for packaging manufacturers. Often required by major retailers for food packaging suppliers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary-600" />
              FSC Chain of Custody
            </h4>
            <p className="text-neutral-600">For paper-based products, our FSC certification ensures responsibly sourced paper from well-managed forests.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary-600" />
              SEDEX Membership
            </h4>
            <p className="text-neutral-600">Ethical trade audit platform. We maintain visibility into our ethical, labor, and environmental practices.</p>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: 'Documentation We Provide',
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">With every order, we can provide the certification documents you need for retailer compliance, regulatory submissions, or marketing claims:</p>
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <ul className="grid md:grid-cols-2 gap-3 text-neutral-700">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> Certificate of Compliance (CoC)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> Material specifications</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> Food safety declarations</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> Compostability certificates</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> GRS transaction certificates</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> Test reports (barrier, seal strength)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> REACH compliance statements</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> Heavy metals declarations</li>
            </ul>
          </div>
        </div>
      )
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
