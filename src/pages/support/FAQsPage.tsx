import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const FAQsPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_solutions_hub_comprehensive_offerings_0357822.webp';
  
  const sections = [
    {
      id: 'ordering',
      title: 'Ordering & MOQ',
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What is your minimum order quantity (MOQ)?</h4>
            <p class="text-neutral-600">For digital printing, our MOQ is <strong>100 pieces</strong>. For plate printing, the MOQ is typically <strong>5,000 pieces</strong>. Some materials and complex designs may have higher minimums—we'll advise during quotation.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can I order samples before a full order?</h4>
            <p class="text-neutral-600">Yes! We offer material samples, blank pouches for test filling, and printed samples with your design. Sample costs are often credited toward production orders.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What payment methods do you accept?</h4>
            <p class="text-neutral-600">We accept bank transfer (T/T), PayPal, and major credit cards. Standard terms are 50% deposit, 50% before shipping. Letters of credit available for large orders.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Do you offer design services?</h4>
            <p class="text-neutral-600">Yes, we can help create or adapt your packaging design. Share your brand assets and ideas—we'll provide die-line templates and design support.</p>
          </div>
        </div>
      `
    },
    {
      id: 'materials',
      title: 'Materials & Sustainability',
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What's the difference between compostable and recyclable?</h4>
            <p class="text-neutral-600"><strong>Compostable:</strong> Breaks down into natural elements in composting conditions (90-180 days). <strong>Recyclable:</strong> Can be processed and reused as new material through recycling facilities. Both are sustainable—the best choice depends on your product and customer disposal options.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Are your materials food-safe?</h4>
            <p class="text-neutral-600">Yes, all our food-contact materials are certified to FDA 21 CFR and/or EU 10/2011 standards. We provide food safety documentation with orders.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What certifications do you have?</h4>
            <p class="text-neutral-600">Our materials carry various certifications including EN 13432, ASTM D6400 (compostable), GRS (recycled content), and food safety certifications. See our <a href="/company/certificates" class="text-primary-600 hover:underline">Certificates page</a> for details.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can I get eco-friendly packaging for liquids?</h4>
            <p class="text-neutral-600">Yes, we offer spout pouches in recyclable mono-PE and some compostable options for less demanding applications. High-barrier liquid packaging typically uses recyclable mono-materials rather than compostable.</p>
          </div>
        </div>
      `
    },
    {
      id: 'production',
      title: 'Production & Timeline',
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">How long does production take?</h4>
            <p class="text-neutral-600">Typical timelines: <strong>Digital printing: 4-6 weeks</strong> | <strong>Plate printing: 6-8 weeks</strong> | <strong>Samples: 2-3 weeks</strong>. Add 1-5 weeks for shipping depending on method. Rush orders available.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can you handle rush orders?</h4>
            <p class="text-neutral-600">Yes, we can expedite production for urgent needs. Rush fees may apply. Digital printing offers faster turnaround than plate printing.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What quality control do you perform?</h4>
            <p class="text-neutral-600">Every order undergoes inspection for print quality, dimensions, seal strength, and appearance. We can share production photos upon request.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Where is your factory located?</h4>
            <p class="text-neutral-600">Our headquarters is in Hong Kong with manufacturing facilities in China. We ship worldwide via air and sea freight.</p>
          </div>
        </div>
      `
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Do you ship worldwide?</h4>
            <p class="text-neutral-600">Yes, we ship to over 30 countries including USA, Canada, UK, EU, Australia, and more. We handle export documentation and can arrange DDP (door-to-door) delivery.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What are the shipping options?</h4>
            <p class="text-neutral-600"><strong>Air freight:</strong> 5-7 days, higher cost, best for urgent/small orders. <strong>Sea freight:</strong> 25-35 days, economical for large orders. <strong>Express courier:</strong> 3-5 days, available for samples.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Who handles customs and duties?</h4>
            <p class="text-neutral-600">For DDP terms, we handle everything. For FOB/CIF terms, you or your freight forwarder manage import clearance. We provide all necessary export documents.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What if my order is damaged in shipping?</h4>
            <p class="text-neutral-600">We carefully package all orders. If damage occurs, document it immediately and contact us within 7 days. We'll work with the carrier to resolve and replace affected items.</p>
          </div>
        </div>
      `
    },
    {
      id: 'design',
      title: 'Design & Printing',
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What file formats do you accept?</h4>
            <p class="text-neutral-600">We prefer vector files: <strong>PDF, AI, or EPS</strong>. PSD files accepted with 300 DPI resolution. We provide die-line templates for accurate placement.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can you match my exact brand colors?</h4>
            <p class="text-neutral-600">For <strong>plate printing</strong>, we can match Pantone colors precisely. <strong>Digital printing</strong> uses CMYK, which closely approximates but doesn't exactly match Pantone. We provide color proofs for approval.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What finishes are available?</h4>
            <p class="text-neutral-600">Matte, gloss, soft-touch, kraft natural. Premium effects include spot UV, foil stamping, embossing, and holographic. Not all finishes work with all materials—we'll advise.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can you print on both sides?</h4>
            <p class="text-neutral-600">Standard pouches print on the outer surface. Inner printing is possible for specific applications but costs more. Most designs only need exterior printing.</p>
          </div>
        </div>
      `
    },
    {
      id: 'custom',
      title: 'Customization & Features',
      content: `
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">What closure options do you offer?</h4>
            <p class="text-neutral-600">Zippers (standard, slider, child-resistant), tin-ties, spout caps, velcro-style, and non-reclosable options. Zipper position can be adjusted (top, pocket-style).</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can I get pouches with windows?</h4>
            <p class="text-neutral-600">Yes, clear windows are available on most pouch styles. We can create custom window shapes. Note that windows may affect barrier properties and compostability certification.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Do you offer degassing valves for coffee?</h4>
            <p class="text-neutral-600">Yes, one-way degassing valves are available for coffee and other products that release gas. These can be placed in various positions on the pouch.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-primary-700 mb-2">Can I get child-resistant packaging?</h4>
            <p class="text-neutral-600">Yes, we offer certified child-resistant closures for cannabis, pharmaceuticals, and other regulated products. These meet CPSC and other regulatory requirements.</p>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Simply contact us through our website, email, or WhatsApp. Share your product details and requirements, and we\'ll provide a quotation within 24-48 hours.'
    },
    {
      question: 'Can I see samples before ordering?',
      answer: 'Absolutely! We provide material samples, blank pouches for test filling, and can produce printed samples with your design before full production.'
    },
    {
      question: 'Do you work with small businesses and startups?',
      answer: 'Yes! Our low MOQs (100 pieces for digital printing) make us ideal for small businesses. Many of our customers started small and have grown with us.'
    },
    {
      question: 'What support do you provide after delivery?',
      answer: 'We provide ongoing support including reorder assistance, design updates, and help resolving any issues. We\'re partners for the long term, not just one order.'
    }
  ];

  return (
    <SEOPageLayout
      title="Frequently Asked Questions | Packaging FAQs"
      description="Find answers to common questions about sustainable packaging: MOQs, materials, production times, shipping, and more. Comprehensive FAQ from Achieve Pack."
      keywords={['packaging FAQ', 'sustainable packaging questions', 'MOQ', 'lead time', 'compostable vs recyclable']}
      heroTitle="Frequently Asked Questions"
      heroSubtitle="Answers to your packaging questions. Find information about ordering, materials, production, shipping, and more."
      heroImage={heroImage}
      sections={sections}
      introSummary="Browse our comprehensive FAQ covering ordering, materials, production, shipping, and customization. Can't find your answer? Contact us directly—we're happy to help."
      faqs={faqs}
      ctaTitle="Still Have Questions?"
      ctaDescription="Our team is ready to help with any questions not covered here."
      ctaButtonText="Contact Us"
      ctaButtonUrl="/contact"
    />
  );
};

export default FAQsPage;
