import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReduceWasteGuidePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Comprehensive Waste Reduction Guide | Achieve Pack</title>
        <meta name="description" content="A strategic B2B framework for reducing total operational waste through innovative packaging and supply chain optimization." />
      </Helmet>
      <div className="bg-white min-h-screen font-sans text-gray-900">
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/imgs/topics/reduce-waste-guide/reduce_waste_guide_hero.jpg" 
              alt="Waste Reduction Strategy" 
              className="w-full h-full object-cover opacity-80 bg-gray-200"
            />
          </div>
          <div className="z-10 text-center max-w-4xl mx-auto px-4 bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">The Blueprint for Zero Waste</h1>
            <p className="text-lg md:text-xl text-slate-700">Go beyond packaging. Discover how holistic design strategies can minimize waste across your entire supply chain.</p>
          </div>
        </section>

        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The True Cost of Inefficiency</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Waste isn't just an environmental issue; it's a massive leak in your bottom line. Every gram of excess material, every cubic inch of wasted cargo space, and every product damaged due to poor packaging design directly erodes your profit margins. We understand the pressure from stakeholders to hit aggressive ESG targets while maintaining fiscal discipline. This guide isn't about compromising; it's about redefining efficiency.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/imgs/topics/reduce-waste-guide/reduce_waste_guide_process.jpg" 
                alt="Process of Waste Reduction" 
                className="w-full h-auto rounded-xl shadow-md bg-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">A Holistic Approach to Sustainability</h3>
              <p className="text-gray-600 mb-4">
                We analyze your entire product lifecycle to identify hidden areas of waste. From the resin we select to the shape of the final pouch, every decision is optimized for minimal environmental impact.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Material downgauging without losing barrier protection</li>
                <li>Transitioning to highly recyclable mono-materials</li>
                <li>Optimizing pallet configurations to reduce transport emissions</li>
                <li>Reducing product spoilage through superior seals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Linear vs. Circular Economy</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-green-600">The Circular Approach</h4>
                  <p className="text-gray-600">Designs that prioritize recyclability, utilize post-consumer recycled (PCR) content, and aim to keep materials in use for as long as possible. A proactive strategy for a sustainable future.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-600">The Linear 'Take-Make-Dispose'</h4>
                  <p className="text-gray-600">The outdated model of single-use virgin materials destined for landfills. Increasingly penalized by taxes and rejected by modern consumers.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src="/imgs/topics/reduce-waste-guide/reduce_waste_guide_comparison.jpg" 
                alt="Circular vs Linear Economy Packaging" 
                className="w-full h-auto rounded-xl shadow-md bg-gray-200"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-900 text-white text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Start Your Zero-Waste Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Connect with our sustainability experts to build a tailored roadmap for your brand.</p>
          <a href="/contact" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Schedule a Strategy Call
          </a>
        </section>
      </div>
    </>
  );
};

export default ReduceWasteGuidePage;
