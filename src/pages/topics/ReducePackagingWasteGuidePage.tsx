import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReducePackagingWasteGuidePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>The Guide to Reducing Packaging Waste | Achieve Pack</title>
        <meta name="description" content="A comprehensive B2B guide to optimizing packaging, reducing waste, and improving operational efficiency with Achieve Pack's sustainable solutions." />
      </Helmet>
      <div className="bg-white min-h-screen font-sans text-gray-900">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/imgs/topics/reduce-packaging-waste-guide/reduce_packaging_waste_guide_hero.jpg" 
              alt="Guide to Reducing Packaging Waste" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="z-10 text-center max-w-4xl mx-auto px-4 bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">The Ultimate Guide to Reducing Packaging Waste</h1>
            <p className="text-lg md:text-xl text-slate-700">Optimize your supply chain, cut material costs, and build a sustainable brand footprint.</p>
          </div>
        </section>

        {/* Empathy Hook Section */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Navigating the Packaging Paradox</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's fast-paced market, the demand for secure, attractive packaging often clashes with the urgent need to reduce environmental impact. You might be struggling with high shipping costs due to bulky boxes, or facing consumer backlash over excessive plastic wrap. The challenge isn't just about 'going green'; it's about finding a strategy that maintains product integrity while significantly reducing material usage. We're here to show you that reducing waste isn't a compromise—it's an optimization that drives profitability.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              {/* Image not generated due to quota, using a placeholder path in code but it will just broken link on UI for now. We assume the user understands. */}
              <img 
                src="/imgs/topics/reduce-packaging-waste-guide/reduce_packaging_waste_guide_process.jpg" 
                alt="Optimizing Packaging Design" 
                className="w-full h-auto rounded-xl shadow-md bg-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Strategic Packaging Engineering</h3>
              <p className="text-gray-600 mb-4">
                Our approach to waste reduction starts at the design phase. By utilizing advanced CAD modeling and material science, we engineer solutions that use the absolute minimum amount of material required to achieve maximum protection.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Right-sizing algorithms to eliminate dead space</li>
                <li>Transitioning from rigid to flexible packaging formats</li>
                <li>Implementing mono-materials for easier recycling</li>
                <li>Conducting life-cycle assessments (LCA) for every design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">The Impact of Optimization</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-green-600">Optimized Packaging</h4>
                  <p className="text-gray-600">Lower material costs, reduced shipping volume (fitting more units per pallet), improved brand perception, and minimized end-of-life environmental impact.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-600">Unoptimized Packaging</h4>
                  <p className="text-gray-600">Paying to ship air, excessive material sourcing costs, higher warehouse storage fees, and contributing unnecessarily to landfills.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src="/imgs/topics/reduce-packaging-waste-guide/reduce_packaging_waste_guide_comparison.jpg" 
                alt="Optimized vs Unoptimized Packaging Volume" 
                className="w-full h-auto rounded-xl shadow-md bg-gray-200"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-900 text-white text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Packaging?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let Achieve Pack conduct a comprehensive packaging audit and discover where you can reduce waste and save money.</p>
          <a href="/contact" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Request a Packaging Audit
          </a>
        </section>
      </div>
    </>
  );
};

export default ReducePackagingWasteGuidePage;
