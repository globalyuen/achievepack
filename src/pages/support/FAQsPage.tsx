import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Leaf, Clock, Truck, Palette, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOPageLayout from '../../components/SEOPageLayout';

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
    <h4 className="font-semibold text-primary-700 mb-2">{question}</h4>
    <div className="text-neutral-600">{answer}</div>
  </div>
);

const FAQsPage = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.faqs';

  const heroImage = '/imgs/seo-photos/a_solutions_hub_comprehensive_offerings_0357822.webp';
  
  const sections = [
    {
      id: 'ordering',
      title: 'Ordering & MOQ',
      icon: <ShoppingCart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <FAQItem 
            question="What is your minimum order quantity (MOQ)?" 
            answer={<p>For digital printing, our MOQ is <strong>100 pieces</strong>. For plate printing, the MOQ is typically <strong>5,000 pieces</strong>. Some materials and complex designs may have higher minimums—we'll advise during quotation.</p>}
          />
          <FAQItem 
            question="Can I order samples before a full order?" 
            answer="Yes! We offer material samples, blank pouches for test filling, and printed samples with your design. Sample costs are often credited toward production orders."
          />
          <FAQItem 
            question="What payment methods do you accept?" 
            answer="We accept bank transfer (T/T), PayPal, and major credit cards. Standard terms are 50% deposit, 50% before shipping. Letters of credit available for large orders."
          />
          <FAQItem 
            question="Do you offer design services?" 
            answer="Yes, we can help create or adapt your packaging design. Share your brand assets and ideas—we'll provide die-line templates and design support."
          />
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Materials & Sustainability',
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4">
          <FAQItem 
            question="What's the difference between compostable and recyclable?" 
            answer={<p><strong>Compostable:</strong> Breaks down into natural elements in composting conditions (90-180 days). <strong>Recyclable:</strong> Can be processed and reused as new material through recycling facilities. Both are sustainable—the best choice depends on your product and customer disposal options.</p>}
          />
          <FAQItem 
            question="Are your materials food-safe?" 
            answer="Yes, all our food-contact materials are certified to FDA 21 CFR and/or EU 10/2011 standards. We provide food safety documentation with orders."
          />
          <FAQItem 
            question="What certifications do you have?" 
            answer={<p>Our materials carry various certifications including EN 13432, ASTM D6400 (compostable), GRS (recycled content), and food safety certifications. See our <Link to="/company/certificates" className="text-primary-600 hover:underline">Certificates page</Link> for details.</p>}
          />
          <FAQItem 
            question="Can I get eco-friendly packaging for liquids?" 
            answer="Yes, we offer spout pouches in recyclable mono-PE and some compostable options for less demanding applications. High-barrier liquid packaging typically uses recyclable mono-materials rather than compostable."
          />
        </div>
      )
    },
    {
      id: 'production',
      title: 'Production & Timeline',
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <FAQItem 
            question="How long does production take?" 
            answer={<p>Typical timelines: <strong>Digital printing: 4-6 weeks</strong> | <strong>Plate printing: 6-8 weeks</strong> | <strong>Samples: 2-3 weeks</strong>. Add 1-5 weeks for shipping depending on method. Rush orders available.</p>}
          />
          <FAQItem 
            question="Can you handle rush orders?" 
            answer="Yes, we can expedite production for urgent needs. Rush fees may apply. Digital printing offers faster turnaround than plate printing."
          />
          <FAQItem 
            question="What quality control do you perform?" 
            answer="Every order undergoes inspection for print quality, dimensions, seal strength, and appearance. We can share production photos upon request."
          />
          <FAQItem 
            question="Where is your factory located?" 
            answer="Our headquarters is in Hong Kong with manufacturing facilities in China. We ship worldwide via air and sea freight."
          />
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      icon: <Truck className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <FAQItem 
            question="Do you ship worldwide?" 
            answer="Yes, we ship to over 30 countries including USA, Canada, UK, EU, Australia, and more. We handle export documentation and can arrange DDP (door-to-door) delivery."
          />
          <FAQItem 
            question="What are the shipping options?" 
            answer={<p><strong>Air freight:</strong> 5-7 days, higher cost, best for urgent/small orders. <strong>Sea freight:</strong> 25-35 days, economical for large orders. <strong>Express courier:</strong> 3-5 days, available for samples.</p>}
          />
          <FAQItem 
            question="Who handles customs and duties?" 
            answer="For DDP terms, we handle everything. For FOB/CIF terms, you or your freight forwarder manage import clearance. We provide all necessary export documents."
          />
          <FAQItem 
            question="What if my order is damaged in shipping?" 
            answer="We carefully package all orders. If damage occurs, document it immediately and contact us within 7 days. We'll work with the carrier to resolve and replace affected items."
          />
        </div>
      )
    },
    {
      id: 'design',
      title: 'Design & Printing',
      icon: <Palette className="h-5 w-5 text-purple-600" />,
      content: (
        <div className="space-y-4">
          <FAQItem 
            question="What file formats do you accept?" 
            answer={<p>We prefer vector files: <strong>PDF, AI, or EPS</strong>. PSD files accepted with 300 DPI resolution. We provide die-line templates for accurate placement.</p>}
          />
          <FAQItem 
            question="Can you match my exact brand colors?" 
            answer={<p>For <strong>plate printing</strong>, we can match Pantone colors precisely. <strong>Digital printing</strong> uses CMYK, which closely approximates but doesn't exactly match Pantone. We provide color proofs for approval.</p>}
          />
          <FAQItem 
            question="What finishes are available?" 
            answer="Matte, gloss, soft-touch, kraft natural. Premium effects include spot UV, foil stamping, embossing, and holographic. Not all finishes work with all materials—we'll advise."
          />
          <FAQItem 
            question="Can you print on both sides?" 
            answer="Standard pouches print on the outer surface. Inner printing is possible for specific applications but costs more. Most designs only need exterior printing."
          />
        </div>
      )
    },
    {
      id: 'custom',
      title: 'Customization & Features',
      icon: <Settings className="h-5 w-5 text-neutral-600" />,
      content: (
        <div className="space-y-4">
          <FAQItem 
            question="What closure options do you offer?" 
            answer="Zippers (standard, slider, child-resistant), tin-ties, spout caps, velcro-style, and non-reclosable options. Zipper position can be adjusted (top, pocket-style)."
          />
          <FAQItem 
            question="Can I get pouches with windows?" 
            answer="Yes, clear windows are available on most pouch styles. We can create custom window shapes. Note that windows may affect barrier properties and compostability certification."
          />
          <FAQItem 
            question="Do you offer degassing valves for coffee?" 
            answer="Yes, one-way degassing valves are available for coffee and other products that release gas. These can be placed in various positions on the pouch."
          />
          <FAQItem 
            question="Can I get child-resistant packaging?" 
            answer="Yes, we offer certified child-resistant closures for cannabis, pharmaceuticals, and other regulated products. These meet CPSC and other regulatory requirements."
          />
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
      keywords={['packaging FAQ', 'sustainable packaging questions', 'MOQ', 'lead time', 'compostable vs recyclable']}
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

export default FAQsPage;
