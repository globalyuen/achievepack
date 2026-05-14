import React from 'react';
import { Sprout, Recycle, ShieldCheck, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useCalendly } from '../../contexts/CalendlyContext';

const RealWorldSustainabilityPage: React.FC = () => {
  const { openCalendly } = useCalendly();

  const sections = [
    {
      id: 'the-problem',
      title: 'The "Eco-Friendly" Confusion',
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            In the packaging industry, "compostable" and "recyclable" are often used as marketing buzzwords. However, without clear certification and local infrastructure, these claims can lead to <strong>greenwashing</strong> and consumer confusion.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h4 className="text-red-900 font-bold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4" /> The Contamination Risk
            </h4>
            <p className="text-sm text-red-800">
              When compostable packaging is incorrectly sorted into plastic recycling streams, it can contaminate entire batches of post-consumer resin (PCR), rendering them unrecyclable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
              alt="Sustainable food packaging in the real world" 
              className="rounded-xl border border-neutral-200 shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-4">Why Evidence Matters</h4>
              <ul className="space-y-3">
                {[
                  "Prevents brand-damaging greenwash claims",
                  "Ensures compatibility with waste streams",
                  "Builds long-term consumer trust",
                  "Meets tightening global regulations"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pillars-of-proof',
      title: 'Three Pillars of Real-World Sustainability',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Sprout className="h-6 w-6 text-green-700" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-3 uppercase tracking-tight">1. Certified Compostable</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Real sustainability requires certification. We use materials certified to <strong>EN13432</strong> and <strong>ASTM D6400</strong>, ensuring they break down in specific composting environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Recycle className="h-6 w-6 text-blue-700" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-3 uppercase tracking-tight">2. Mono-Material Focus</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Multilayer plastics are difficult to recycle. Our <strong>Mono-PE</strong> and <strong>Mono-PP</strong> solutions are designed for single-stream recyclability in existing soft-plastic programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Info className="h-6 w-6 text-amber-700" />
            </div>
            <h4 className="font-bold text-neutral-900 mb-3 uppercase tracking-tight">3. Disposal Guidance</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We provide brands with clear labeling assets to help consumers sort correctly, reducing the risk of landfill contamination and improving recovery rates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Book a Sustainability Audit',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">Stop Guessing. Start Proving.</h3>
            <p className="text-neutral-400 text-lg mb-8">
              Work with our experts to audit your current packaging and identify the most viable sustainable transition based on your target market's waste infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openCalendly}
                className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/20"
              >
                Book Free Audit Call
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all">
                Request Sample Kit
              </button>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="Real-World Sustainability | Evidence-Based Packaging Solutions"
      description="Beyond greenwashing: Discover certified compostable materials, mono-material recycling, and real-world waste solutions for sustainable brands."
      heroTitle="Real-World Sustainability"
      heroSubtitle="Moving beyond vague claims to evidence-based packaging that works in existing waste streams."
      heroImage="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp"
      introSummary="Real sustainability isn't just about 'green' materials—it's about ensuring those materials can be recovered, recycled, or composted in the real world."
      sections={sections}
      keywords={['sustainable packaging', 'compostable certification', 'mono-PE recycling', 'greenwashing prevention', 'EN13432 pouches']}
      canonicalUrl="https://achievepack.com/topics/real-world-sustainability"
    />
  );
};

export default RealWorldSustainabilityPage;
