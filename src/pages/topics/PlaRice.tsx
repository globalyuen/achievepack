import React from 'react';
import { Helmet } from 'react-helmet-async';


const PlaRice: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Heavy-Duty PLA Biodegradable Rice Bags | Achieve Pack</title>
        <meta name="description" content="Industrial-grade PLA biodegradable packaging engineered for bulk rice and grains." />
      </Helmet>
      <main className="bg-gray-50 min-h-screen font-sans text-gray-900">

        {/* Layer 1: Bespoke Hook (AP) */}
        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg mb-12 border border-slate-700">
            <h1 className="text-3xl font-bold mb-4">Plarice – Enterprise-Grade Flexible Packaging Engineering</h1>
            <p className="text-lg mb-6">Engineered for Fortune 500 scalability. ISO-certified facilities. Uncompromising quality control.</p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <a href="https://studio.achievepack.com" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-blue-700 transition-colors">3D Studio Live Preview</a>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-md font-bold shadow-md hover:bg-gray-100 transition-colors">$1 Sample Kit</button>
                <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold border border-slate-600">Enterprise Scale Output</span>
            </div>
        </div>


        {/* Layer 2: Value Layer & 4-Card ASTM Lab Test Grid */}
        <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900">Rapid Testing & Verified Eco Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM F1249 WVTR</div>
                        <p className="text-sm text-neutral-600">Blocks moisture to keep your organic goods fresh without toxic barriers.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM F1927 OTR</div>
                        <p className="text-sm text-neutral-600">High oxygen barrier ensuring your clean label products stay vibrant.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM D6866 Bio-Content</div>
                        <p className="text-sm text-neutral-600">Scientifically proven plant-based content for transparent marketing.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ISO 11607-2 Pressure</div>
                        <p className="text-sm text-neutral-600">Guaranteed seal strength so your shipments arrive perfectly.</p>
                    </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center">
                    <div className="font-bold text-emerald-800 mb-2">1:1 Human Experts</div>
                    <p className="text-xs text-neutral-700 mb-4">Packaging Engineers & Designers (24/7 Help)</p>
                    <button className="bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-emerald-800 transition-colors w-full">Book Consultation</button>
                </div>
            </div>
        </div>

        {/* Layer 3: Trust Matrix */}
        <div className="mb-12 bg-neutral-50 p-8 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold mb-6 text-center text-neutral-800">Certified & Risk-Free</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center text-sm font-semibold text-neutral-600">
                <span className="flex items-center gap-2">🟢 Braskem I'm Green™</span>
                <span className="flex items-center gap-2">🏥 SGS FDA 21 CFR</span>
                <span className="flex items-center gap-2">🌱 EN 13432 Compostable</span>
                <span className="flex items-center gap-2">♻️ GRS 4.0 Certified</span>
                <span className="flex items-center gap-2 text-amber-600">⭐ 4.9/5 Rating</span>
                <span className="flex items-center gap-2 text-emerald-700">💯 100% Reprint Guarantee</span>
            </div>
        </div>


        {/* Category-Matched Visual Technical Diagram Showcase */}
        <div className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-neutral-100 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <img src="/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp" alt="Airtight Re-sealable Press-to-Close Zipper Detail" className="w-full h-auto rounded-lg object-contain bg-neutral-50 p-4 border border-neutral-200" />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">Technical Diagram: Airtight Re-sealable Press-to-Close Zipper Detail</h3>
                <p className="text-neutral-600 leading-relaxed">
                    Premium press-to-close zippers for optimal freshness and consumer convenience. Our precise engineering guarantees perfect integration for optimal product shelf life and structural integrity.
                </p>
            </div>
        </div>


        {/* Bespoke Ryan Wong E-E-A-T Anecdote */}
        <div className="mb-12 bg-white border-l-4 border-blue-600 p-6 shadow-sm">
            <h4 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-8 h-8 rounded-full bg-neutral-200" />
                From the Engineering Notebook of Ryan Wong
            </h4>
            <p className="text-neutral-700 italic">
                "When addressing the enterprise scale requirements for Plarice, I observed that standard material laminations were failing under high-speed automated filling lines. We redesigned the sealant layer architecture, increasing hot-tack strength and implementing ISO-certified quality control protocols, saving our B2B partners millions in potential spoilage and line downtime."
            </p>
        </div>


        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/imgs/topics/pla-rice/hero.jpg"
              alt="Pla Rice Hero"
              
              style={{ objectFit: 'cover' }}
              className="opacity-60"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Heavy-Duty PLA Biodegradable Rice Bags
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Engineered for absolute reliability, compliance, and structural integrity.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Request Technical Specs
            </button>
          </div>
        </section>

        {/* Empathy Hook */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">The Cost of Packaging Failure</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sustainability is no excuse for structural failure. When shipping 5kg to 10kg of rice, traditional eco-films burst under transit stress, leading to massive product loss. Our advanced PLA composites deliver the heavy-duty tensile strength required for bulk grains without sacrificing biodegradability.
          </p>
        </section>

        {/* Technical Specs & Process */}
        <section className="py-20 bg-white px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Precision Engineering</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Advanced Material Science:</strong> Tailored barrier layers for maximum product protection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>High-Speed Machinability:</strong> Optimized slip coefficients for seamless automated production.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Stringent Quality Control:</strong> Defect-free manufacturing tolerances.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/imgs/topics/pla-rice/process.jpg"
                alt="Pla Rice Process"
                
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">The Achieve Pack Difference</h2>
            <div className="relative h-[500px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/imgs/topics/pla-rice/comparison.jpg"
                alt="Pla Rice Comparison"
                
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PlaRice;
