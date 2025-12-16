import { useTranslation } from 'react-i18next';
import { Workflow, MessageCircle, Palette, Package, Factory, Truck, Clock, CheckCircle, FileText, Image, Plane, Ship } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const WorkflowPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_platform_digital_workflow_0276726.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'How It Works',
      icon: <Workflow className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>From initial inquiry to delivered packaging, our streamlined process ensures a smooth experience.</strong> Here is what to expect when working with Achieve Pack.
          </p>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Every project follows this proven workflow</h4>
            <p className="text-sm">With dedicated support at each stage, you are never left wondering what comes next.</p>
          </div>
        </div>
      )
    },
    {
      id: 'step1',
      title: 'Step 1: Consultation & Quote',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">Tell Us About Your Project</h4>
              <p className="text-neutral-600 mt-1">Share your requirements through our contact form, email, or WhatsApp.</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm">Product type & requirements</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm">Material & sustainability goals</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm">Quantity & timeline</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm">Size & closure options</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm">Printing method preference</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm">Special features needed</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl mt-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-blue-800"><strong>Timeline:</strong> Quotation within 24-48 hours</span>
          </div>
        </div>
      )
    },
    {
      id: 'step2',
      title: 'Step 2: Design & Artwork',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">Prepare Your Artwork</h4>
              <p className="text-neutral-600 mt-1">Once you accept the quote, we move to the design phase.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Image className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">If You Have Artwork</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Submit print-ready files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>We provide die-line template</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Our team checks and adjusts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Digital proof for approval</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">If You Need Design Help</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Share your brand assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>We create custom design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Revisions included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Final files provided</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl mt-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-emerald-800"><strong>Timeline:</strong> 2-5 days for artwork approval</span>
          </div>
        </div>
      )
    },
    {
      id: 'step3',
      title: 'Step 3: Sample Production',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">See Before You Commit</h4>
              <p className="text-neutral-600 mt-1">We produce samples so you can evaluate before full production.</p>
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-neutral-600" />
              </div>
              <div>
                <span className="font-semibold">Digital Proof</span>
                <span className="text-green-600 text-xs ml-2 bg-green-100 px-2 py-0.5 rounded-full">FREE</span>
                <p className="text-sm text-neutral-500">On-screen preview of your design</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-primary-50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <span className="font-semibold">Printed Sample</span>
                <p className="text-sm text-neutral-500">Actual printed pouch with your design</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl">
              <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-neutral-600" />
              </div>
              <div>
                <span className="font-semibold">Material Sample</span>
                <p className="text-sm text-neutral-500">Feel the material quality</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 italic mt-4">Sample costs are often credited against full production orders.</p>
          
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl mt-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-amber-600" />
            <span className="text-sm text-amber-800"><strong>Timeline:</strong> 2-3 weeks for printed samples</span>
          </div>
        </div>
      )
    },
    {
      id: 'step4',
      title: 'Step 4: Production',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
              4
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">Full-Scale Manufacturing</h4>
              <p className="text-neutral-600 mt-1">After sample approval, we begin full production.</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <Palette className="h-6 w-6 text-blue-700" />
              </div>
              <div className="font-bold text-blue-800">Printing</div>
              <p className="text-xs text-neutral-600 mt-1">Digital or plate printing of your design</p>
            </div>
            
            <div className="bg-gradient-to-b from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200 text-center">
              <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <Factory className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="font-bold text-emerald-800">Lamination</div>
              <p className="text-xs text-neutral-600 mt-1">Material bonding for barrier properties</p>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-6 w-6 text-purple-700" />
              </div>
              <div className="font-bold text-purple-800">Conversion</div>
              <p className="text-xs text-neutral-600 mt-1">Pouch making with closures</p>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">Quality checks at every stage. Production photos shared upon request.</p>
          
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl mt-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-blue-800"><strong>Timeline:</strong> 4-6 weeks for standard orders</span>
          </div>
        </div>
      )
    },
    {
      id: 'step5',
      title: 'Step 5: Quality Control & Shipping',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
              5
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">Final Inspection & Delivery</h4>
              <p className="text-neutral-600 mt-1">Before shipping, every order undergoes quality inspection.</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-neutral-800 mb-3">Quality Checklist</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Visual inspection of printing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Dimensional verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Seal strength testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Proper packaging & labeling</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Shipping Options</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-blue-600" />
                  <span>Air freight (5-7 days)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ship className="h-4 w-4 text-blue-600" />
                  <span>Sea freight (25-35 days)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-blue-600" />
                  <span>Express courier available</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-2">Documentation</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-600" />
                  <span>Certificate of Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-600" />
                  <span>Material certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-600" />
                  <span>Tracking information</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 p-3 rounded-xl mt-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-purple-800"><strong>Timeline:</strong> 5-35 days depending on shipping method</span>
          </div>
        </div>
      )
    },
    {
      id: 'timeline',
      title: 'Total Timeline Summary',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Here is the complete timeline at a glance:</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="bg-gradient-to-b from-primary-100 to-primary-200 p-4 rounded-xl text-center min-w-[100px]">
              <div className="text-xs text-primary-600 mb-1">Quote</div>
              <div className="font-bold text-primary-800 text-lg">1-2 days</div>
            </div>
            <div className="flex items-center text-primary-400">→</div>
            <div className="bg-gradient-to-b from-emerald-100 to-emerald-200 p-4 rounded-xl text-center min-w-[100px]">
              <div className="text-xs text-emerald-600 mb-1">Artwork</div>
              <div className="font-bold text-emerald-800 text-lg">2-5 days</div>
            </div>
            <div className="flex items-center text-primary-400">→</div>
            <div className="bg-gradient-to-b from-amber-100 to-amber-200 p-4 rounded-xl text-center min-w-[100px]">
              <div className="text-xs text-amber-600 mb-1">Sample</div>
              <div className="font-bold text-amber-800 text-lg">2-3 weeks</div>
            </div>
            <div className="flex items-center text-primary-400">→</div>
            <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-4 rounded-xl text-center min-w-[100px]">
              <div className="text-xs text-blue-600 mb-1">Production</div>
              <div className="font-bold text-blue-800 text-lg">4-6 weeks</div>
            </div>
            <div className="flex items-center text-primary-400">→</div>
            <div className="bg-gradient-to-b from-purple-100 to-purple-200 p-4 rounded-xl text-center min-w-[100px]">
              <div className="text-xs text-purple-600 mb-1">Shipping</div>
              <div className="font-bold text-purple-800 text-lg">1-5 weeks</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-100 to-primary-50 p-4 rounded-xl mt-6 text-center">
            <p className="text-lg font-bold text-primary-800">
              Typical Total: 8-12 weeks from inquiry to delivery (air freight)
            </p>
          </div>
        </div>
      )
    }
  ];

  const p = 'seoPages.pages.workflow';

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
      keywords={['packaging workflow', 'production process', 'lead time', 'packaging timeline', 'order process']}
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

export default WorkflowPage;
