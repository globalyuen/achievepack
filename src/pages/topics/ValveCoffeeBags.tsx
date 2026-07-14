import React from 'react';

const ValveCoffeeBags: React.FC = () => {
  return (
    <div className="topic-page-container bg-white text-gray-800 min-h-screen">
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Advanced Valve Coffee Bags for Optimal Freshness
          </h1>
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
