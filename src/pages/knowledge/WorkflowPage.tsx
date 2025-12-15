import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const WorkflowPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_platform_digital_workflow_0276726.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'How It Works',
      content: `
        <p class="mb-4">From initial inquiry to delivered packaging, our streamlined process ensures a smooth experience. Here's what to expect when working with Achieve Pack.</p>
        <p>Every project follows this proven workflow, with dedicated support at each stage.</p>
      `
    },
    {
      id: 'step1',
      title: 'Step 1: Consultation & Quote',
      content: `
        <div class="flex items-start gap-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 flex-shrink-0">1</div>
          <div class="flex-1">
            <h4 class="font-semibold text-lg mb-2">Tell Us About Your Project</h4>
            <p class="text-neutral-600 mb-4">Share your requirements through our contact form, email, or WhatsApp. We'll discuss:</p>
            <ul class="grid md:grid-cols-2 gap-2 text-sm text-neutral-700">
              <li class="flex items-center gap-2"><span class="text-primary-500">•</span> Product type and requirements</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">•</span> Material and sustainability goals</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">•</span> Quantity and timeline</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">•</span> Size and closure options</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">•</span> Printing method preference</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">•</span> Special features needed</li>
            </ul>
            <div class="mt-4 bg-primary-50 p-4 rounded-lg">
              <p class="text-sm text-primary-700"><strong>Timeline:</strong> Quotation within 24-48 hours</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'step2',
      title: 'Step 2: Design & Artwork',
      content: `
        <div class="flex items-start gap-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 flex-shrink-0">2</div>
          <div class="flex-1">
            <h4 class="font-semibold text-lg mb-2">Prepare Your Artwork</h4>
            <p class="text-neutral-600 mb-4">Once you accept the quote, we move to the design phase:</p>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div class="bg-white p-4 rounded-xl border border-neutral-200">
                <h5 class="font-medium text-primary-700 mb-2">If You Have Artwork</h5>
                <ul class="text-sm text-neutral-600 space-y-1">
                  <li>• Submit print-ready files</li>
                  <li>• We provide die-line template</li>
                  <li>• Our team checks and adjusts</li>
                  <li>• Digital proof for approval</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-xl border border-neutral-200">
                <h5 class="font-medium text-primary-700 mb-2">If You Need Design Help</h5>
                <ul class="text-sm text-neutral-600 space-y-1">
                  <li>• Share your brand assets</li>
                  <li>• We create custom design</li>
                  <li>• Revisions included</li>
                  <li>• Final files provided</li>
                </ul>
              </div>
            </div>
            <div class="bg-primary-50 p-4 rounded-lg">
              <p class="text-sm text-primary-700"><strong>Timeline:</strong> 2-5 days for artwork approval</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'step3',
      title: 'Step 3: Sample Production',
      content: `
        <div class="flex items-start gap-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 flex-shrink-0">3</div>
          <div class="flex-1">
            <h4 class="font-semibold text-lg mb-2">See Before You Commit</h4>
            <p class="text-neutral-600 mb-4">We produce samples so you can evaluate before full production:</p>
            <ul class="space-y-2 text-sm text-neutral-700 mb-4">
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> <strong>Digital Proof:</strong> On-screen preview (free)</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> <strong>Printed Sample:</strong> Actual printed pouch with your design</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> <strong>Material Sample:</strong> Feel the material quality</li>
            </ul>
            <p class="text-sm text-neutral-600 mb-4">Sample costs are often credited against full production orders.</p>
            <div class="bg-primary-50 p-4 rounded-lg">
              <p class="text-sm text-primary-700"><strong>Timeline:</strong> 2-3 weeks for printed samples</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'step4',
      title: 'Step 4: Production',
      content: `
        <div class="flex items-start gap-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 flex-shrink-0">4</div>
          <div class="flex-1">
            <h4 class="font-semibold text-lg mb-2">Full-Scale Manufacturing</h4>
            <p class="text-neutral-600 mb-4">After sample approval, we begin full production:</p>
            <div class="grid md:grid-cols-3 gap-4 mb-4">
              <div class="text-center p-4 bg-neutral-100 rounded-xl">
                <div class="text-lg font-bold text-primary-600">Printing</div>
                <p class="text-sm text-neutral-600">Digital or plate printing of your design</p>
              </div>
              <div class="text-center p-4 bg-neutral-100 rounded-xl">
                <div class="text-lg font-bold text-primary-600">Lamination</div>
                <p class="text-sm text-neutral-600">Material bonding for barrier properties</p>
              </div>
              <div class="text-center p-4 bg-neutral-100 rounded-xl">
                <div class="text-lg font-bold text-primary-600">Conversion</div>
                <p class="text-sm text-neutral-600">Pouch making with closures</p>
              </div>
            </div>
            <p class="text-sm text-neutral-600 mb-4">Quality checks at every stage. Production photos shared upon request.</p>
            <div class="bg-primary-50 p-4 rounded-lg">
              <p class="text-sm text-primary-700"><strong>Timeline:</strong> 4-6 weeks for standard orders</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'step5',
      title: 'Step 5: Quality Control & Shipping',
      content: `
        <div class="flex items-start gap-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 flex-shrink-0">5</div>
          <div class="flex-1">
            <h4 class="font-semibold text-lg mb-2">Final Inspection & Delivery</h4>
            <p class="text-neutral-600 mb-4">Before shipping, every order undergoes quality inspection:</p>
            <ul class="space-y-2 text-sm text-neutral-700 mb-4">
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Visual inspection of printing quality</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Dimensional verification</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Seal strength testing</li>
              <li class="flex items-center gap-2"><span class="text-primary-500">✓</span> Packaging and labeling for shipping</li>
            </ul>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div class="bg-white p-4 rounded-xl border border-neutral-200">
                <h5 class="font-medium text-primary-700 mb-2">Shipping Options</h5>
                <ul class="text-sm text-neutral-600 space-y-1">
                  <li>• Air freight (5-7 days)</li>
                  <li>• Sea freight (25-35 days)</li>
                  <li>• Express courier available</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded-xl border border-neutral-200">
                <h5 class="font-medium text-primary-700 mb-2">Documentation</h5>
                <ul class="text-sm text-neutral-600 space-y-1">
                  <li>• Certificate of Compliance</li>
                  <li>• Material certifications</li>
                  <li>• Tracking information</li>
                </ul>
              </div>
            </div>
            <div class="bg-primary-50 p-4 rounded-lg">
              <p class="text-sm text-primary-700"><strong>Timeline:</strong> Shipping 5-35 days depending on method</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'timeline',
      title: 'Total Timeline Summary',
      content: `
        <div class="bg-neutral-100 p-6 rounded-xl">
          <div class="grid md:grid-cols-5 gap-4 text-center">
            <div class="bg-white p-4 rounded-lg">
              <div class="text-sm text-neutral-500 mb-1">Quote</div>
              <div class="font-bold text-primary-600">1-2 days</div>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-sm text-neutral-500 mb-1">Artwork</div>
              <div class="font-bold text-primary-600">2-5 days</div>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-sm text-neutral-500 mb-1">Sample</div>
              <div class="font-bold text-primary-600">2-3 weeks</div>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-sm text-neutral-500 mb-1">Production</div>
              <div class="font-bold text-primary-600">4-6 weeks</div>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <div class="text-sm text-neutral-500 mb-1">Shipping</div>
              <div class="font-bold text-primary-600">1-5 weeks</div>
            </div>
          </div>
          <p class="text-center mt-4 text-sm text-neutral-600"><strong>Typical Total:</strong> 8-12 weeks from inquiry to delivery (air freight)</p>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'Can the timeline be shortened?',
      answer: 'Yes, rush orders are possible with express production and air freight. Digital printing is faster than plate printing. Contact us for urgent timelines—we\'ll do our best to accommodate.'
    },
    {
      question: 'Do I need to pay upfront?',
      answer: 'Typically, we require 50% deposit to start production, with the balance due before shipping. Sample orders may require full payment upfront. We accept bank transfer and major credit cards.'
    },
    {
      question: 'What if I need to make changes after approval?',
      answer: 'Changes before production starts are usually possible. Once production begins, changes may incur additional costs or delays. We always confirm final approval before starting.'
    },
    {
      question: 'Do you handle customs and import duties?',
      answer: 'We provide all export documentation. For DDP (Delivered Duty Paid), we handle customs clearance. For other terms (FOB, CIF), you or your freight forwarder handle import procedures.'
    }
  ];

  return (
    <SEOPageLayout
      title="Our Workflow | From Quote to Delivery"
      description="Understand Achieve Pack's packaging production workflow. From initial consultation to final delivery—what to expect at every stage."
      keywords={['packaging workflow', 'production process', 'lead time', 'packaging timeline', 'order process']}
      heroTitle="Our Workflow"
      heroSubtitle="A clear, transparent process from initial inquiry to packaging delivery. Know what to expect at every stage."
      heroImage={heroImage}
      sections={sections}
      introSummary="Our 5-step workflow ensures a smooth experience: Consultation → Design → Sample → Production → Delivery. Typical timeline is 8-12 weeks from inquiry to delivered packaging."
      faqs={faqs}
      ctaTitle="Start Your Project"
      ctaDescription="Ready to begin? Contact us for a free consultation and quote."
      ctaButtonText="Get Started"
      ctaButtonUrl="/contact"
    />
  );
};

export default WorkflowPage;
