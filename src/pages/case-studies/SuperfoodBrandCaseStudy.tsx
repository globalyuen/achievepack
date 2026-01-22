import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, AlertCircle, Lightbulb, TrendingUp, Package, CheckCircle, MessageCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const SuperfoodBrandCaseStudy = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.csSuperfood';
  const heroImage = '/imgs/seo-photos/a_vitalgreen_superfood_chicago_wellness_pouch_1211501.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Who Is This Client?',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="text-sm text-neutral-500 mb-1">Company</p><p className="font-semibold text-lg">VitalGreen Superfoods</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Industry</p><p className="font-semibold">Superfood & Wellness Powders</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Location</p><p className="font-semibold">Chicago, Illinois, USA</p></div>
              <div><p className="text-sm text-neutral-500 mb-1">Package Type</p><p className="font-semibold">Stand-Up Pouches with Zipper</p></div>
            </div>
          </div>
          <p>VitalGreen produces organic superfood powders including spirulina, chlorella, and custom blends. As a B-Corp certified company, they needed packaging that matched their environmental commitments while protecting sensitive powder products. They chose <Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> for their recyclable mono-PE solutions.</p>
        </div>
      )
    },
    {
      id: 'challenge',
      title: 'What Challenge Did They Face?',
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      content: (
        <div className="space-y-4">
          <p className="mb-4">VitalGreen faced unique powder packaging challenges:</p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Oxygen sensitivity</strong> of superfood powders required high barrier</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Moisture protection</strong> critical for powder quality</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>B-Corp certification</strong> required documented sustainability improvements</span></li>
            <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span><span><strong>Multiple SKUs</strong> needed with quick market entry</span></li>
          </ul>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'How Did Achieve Pack Help?',
      icon: <Lightbulb className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <p className="mb-4">We developed recyclable mono-PE packaging with enhanced barriers:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <Link to="/materials/recyclable-mono-pe" className="hover:underline">Mono-PE Structure</Link>
              </h4>
              <p className="text-sm text-blue-700">100% recyclable mono-material polyethylene with EVOH barrier layer for oxygen protection. Store drop-off recyclable.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                High Barrier Performance
              </h4>
              <p className="text-sm text-green-700">OTR below 1.0 cc/m²/day protects sensitive superfood nutrients from oxidation.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                Digital Printing Flexibility
              </h4>
              <p className="text-sm text-purple-700">8 SKUs launched simultaneously with digital printing. 500 bags per SKU minimum.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-600" />
                GRS Certification
              </h4>
              <p className="text-sm text-amber-700">Global Recycled Standard documentation for B-Corp reporting requirements.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'What Results Did They Achieve?',
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-green-700">Recyclable Packaging</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">18 mo</div>
              <div className="text-sm text-blue-700">Shelf Life Achieved</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">8</div>
              <div className="text-sm text-purple-700">SKUs Launched</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">+15</div>
              <div className="text-sm text-amber-700">B-Corp Points</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600">
            "The GRS certification documentation was exactly what we needed for our B-Corp recertification. Our customers appreciate the recyclable packaging, and our products stay fresh longer than expected."
            <footer className="mt-2 text-sm font-semibold text-neutral-700">— Dr. Maya Patel, CEO, VitalGreen Superfoods</footer>
          </blockquote>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'What Packaging Specs Were Used?',
      icon: <Package className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="bg-neutral-100 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Format:</strong> <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">Stand-Up Pouch</Link></div>
            <div><strong>Size:</strong> 160 × 240 + 90mm (250g capacity)</div>
            <div><strong>Material:</strong> <Link to="/spec/mono-pe-duplex-clear" className="text-primary-600 hover:underline">Mono-PE duplex with EVOH barrier (recyclable structure)</Link></div>
            <div><strong>Barrier:</strong> High (OTR &lt; 1.0)</div>
            <div><strong>Closure:</strong> Pocket zipper</div>
            <div><strong>Features:</strong> Rounded corners, tear notch</div>
            <div><strong>Printing:</strong> Digital, 8 SKU designs</div>
            <div><strong>Finish:</strong> Matte</div>
            <div><strong>Certification:</strong> GRS, FDA food-safe</div>
            <div><strong>Order Size:</strong> 500 pcs per SKU (8 SKUs)</div>
          </div>
        </div>
      )
    },
    {
      id: 'key-takeaways',
      title: 'What Can You Learn From This?',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>What made this project successful for VitalGreen:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>100% recyclable:</strong> Mono-PE structure for curbside/store drop-off recycling</li>
            <li><strong>High barrier:</strong> OTR {'<'} 1.0 protects sensitive superfood nutrients</li>
            <li><strong>8 SKUs launched:</strong> Digital printing enabled quick market entry</li>
            <li><strong>B-Corp documentation:</strong> GRS certification for sustainability reporting</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Looking for similar solutions?</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <Link to="/industry/supplements-powders" className="underline">Explore our Supplements & Powders packaging</Link></li>
              <li>• <Link to="/materials/recyclable-mono-pe" className="underline">Learn about recyclable mono-PE</Link></li>
              <li>• <Link to="/spec/mono-pe-duplex-clear" className="underline">View complete spec - Mono-PE duplex structure</Link></li>
              <li>• <Link to="/spec/mono-pp-duplex-clear" className="underline">Mono-PP option - best moisture barrier</Link></li>
              <li>• <Link to="/store" className="underline">Shop superfood pouches</Link></li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "What is mono-PE recyclable packaging?",
      answer: "Mono-PE (mono-material polyethylene) is a single-polymer structure that can be recycled through store drop-off programs and some curbside recycling. Our mono-PE pouches incorporate EVOH barrier layers while maintaining recyclability through PE4 recycling streams."
    },
    {
      question: "Can recyclable packaging have high oxygen barriers?",
      answer: "Yes, our recyclable mono-PE with EVOH barrier achieves OTR below 1.0 cc/m²/day, making it suitable for oxygen-sensitive products like superfood powders. This provides 18+ month shelf life while remaining recyclable."
    },
    {
      question: "What documentation do you provide for B-Corp certification?",
      answer: "We provide Global Recycled Standard (GRS) certification, recyclability documentation, and sustainability data sheets. VitalGreen earned +15 B-Corp points from their packaging improvements with our documentation support."
    },
    {
      question: "What is the MOQ for digital printed superfood pouches?",
      answer: "Digital printing allows MOQ of 500 pieces per SKU design. This enabled VitalGreen to launch 8 different products simultaneously without the traditional 10,000+ piece minimums of gravure printing."
    },
    {
      question: "How do you protect superfood powder from clumping?",
      answer: "Our high-barrier structures with MVTR below 2.0 g/m²/24hr prevent moisture ingress that causes clumping. Combined with resealable zippers, powders stay free-flowing for the full shelf life."
    }
  ];

  const relatedLinks = [
    {
      title: "Shop Superfood Pouches",
      url: "/store",
      description: "Browse recyclable mono-PE options"
    },
    {
      title: "Supplements & Powders",
      url: "/industry/supplements-powders",
      description: "Full guide to powder packaging"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Versatile format for powders"
    },
    {
      title: "Recyclable Mono-PE",
      url: "/materials/recyclable-mono-pe",
      description: "High barrier recyclable solution"
    },
    {
      title: "Supplier Analysis Report",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly packaging suppliers"
    }
  ];

  return (
    <SEOPageLayout
      title="Superfood Brand Case Study | Recyclable Mono-PE Packaging for B-Corp Certified Brand"
      description="How VitalGreen Superfoods achieved B-Corp certification with recyclable mono-PE packaging. 18-month shelf life, 8 SKUs launched, GRS certification documentation."
      keywords={['superfood packaging case study', 'recyclable powder packaging', 'B-Corp packaging', 'GRS certified pouches', 'mono-PE packaging', 'high barrier recyclable', 'superfood pouch supplier']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary="How a B-Corp certified superfood brand launched 8 SKUs with recyclable mono-PE packaging while achieving 18-month shelf life and earning +15 B-Corp points."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default SuperfoodBrandCaseStudy;
