import React from 'react';

const ValveCoffeeBags: React.FC = () => {
  return (
    <div className="topic-page-container bg-white text-gray-800 min-h-screen">

        {/* Layer 1: Bespoke Hook (AP) */}
        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg mb-12 border border-slate-700">
            <h1 className="text-3xl font-bold mb-4">Valvecoffeebags – Enterprise-Grade Flexible Packaging Engineering</h1>
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
                <img src="/imgs/reclose/a_valve_closure_detail_6401844.webp" alt="One-Way Degassing Valve" className="w-full h-auto rounded-lg object-contain bg-neutral-50 p-4 border border-neutral-200" />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">Technical Diagram: One-Way Degassing Valve</h3>
                <p className="text-neutral-600 leading-relaxed">
                    Essential for freshly roasted coffee. Vents out CO2 while blocking oxygen from entering. Our precise engineering guarantees perfect integration for optimal product shelf life and structural integrity.
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
                "When addressing the enterprise scale requirements for Valvecoffeebags, I observed that standard material laminations were failing under high-speed automated filling lines. We redesigned the sealant layer architecture, increasing hot-tack strength and implementing ISO-certified quality control protocols, saving our B2B partners millions in potential spoilage and line downtime."
            </p>
        </div>


      {/* Hero Section */}
      <section className="hero-section relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/imgs/topics/valve-coffee-bags/hero_valve_coffee_bags.png"
            alt="Premium Valve Coffee Bags"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Advanced Valve Coffee Bags for Optimal Freshness
          </h2>
          <p className="text-xl max-w-3xl">
            Preserve the delicate aroma and flavor of your roasted coffee beans with our B2B technical one-way degassing valve packaging solutions.
          </p>
        </div>
      </section>

      {/* Empathy Hook Section */}
      <section className="empathy-hook-section py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-50 border-l-4 border-amber-600 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Roaster's Dilemma</h2>
          <p className="text-lg text-gray-700">
            You've meticulously sourced, roasted, and crafted the perfect coffee profile. But without the right packaging, the release of CO2 from fresh roasts can bloat or even burst ordinary bags, while exposure to oxygen quickly degrades those delicate flavor notes. Our valve bags solve this by letting gas escape without letting air in, ensuring your customers experience the exact cup you intended.
          </p>
        </div>
      </section>

      {/* Process & Engineering Section */}
      <section className="process-section py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Precision Manufacturing</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our packaging is engineered with high-barrier multi-layer laminates and integrated with precision one-way degassing valves. This process ensures structural integrity and high-speed filling compatibility for commercial roasting operations.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>High-barrier EVOH and foil laminate options</li>
              <li>Consistently reliable valve seating</li>
              <li>Compatibility with automated filling lines</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/imgs/topics/valve-coffee-bags/process_valve_coffee_bags.png"
              alt="Valve Coffee Bag Manufacturing Process"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">The Valve Advantage</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/imgs/topics/valve-coffee-bags/comparison_valve_coffee_bags.png"
                alt="Comparison of Valve Bag vs Standard Bag"
                className="rounded-xl shadow-lg w-full mb-6"
              />
            </div>
            <div className="md:w-1/2 text-left bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Prevent Bloating & Staling</h3>
              <p className="text-gray-700 mb-4">
                Freshly roasted coffee can release up to 10 liters of CO2 per kg. Without a valve, this gas becomes trapped, causing unsightly bloating and risking package failure.
              </p>
              <p className="text-gray-700">
                Our advanced valve technology releases this built-up pressure while completely blocking oxygen ingress, significantly extending shelf life and maintaining pristine product presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValveCoffeeBags;
