import React from 'react';
import Head from 'next/head';

const RecycledOceanPlasticPackagingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Recycled Ocean Plastic Packaging Solutions | Achieve Pack</title>
        <meta name="description" content="Discover Achieve Pack's advanced B2B recycled ocean plastic packaging solutions. Superior sustainability meets high-performance material engineering." />
      </Head>
      <div className="bg-white min-h-screen font-sans text-gray-900">
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/imgs/topics/recycled-ocean-plastic-packaging/recycled_ocean_plastic_packaging_hero.jpg" 
              alt="Premium Recycled Ocean Plastic Packaging" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="z-10 text-center max-w-4xl mx-auto px-4 bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Transforming the Tide with Ocean Plastic Packaging</h1>
            <p className="text-lg md:text-xl text-slate-700">Advanced B2B packaging solutions engineered from 100% recycled ocean plastics. High performance, zero compromise.</p>
          </div>
        </section>

        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The True Cost of Traditional Plastic</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every year, millions of tons of plastic waste enter our oceans, devastating marine ecosystems and polluting our shorelines. As a brand, you face immense pressure to adopt sustainable practices without sacrificing packaging quality, durability, or cost-effectiveness. 
              The transition can seem daunting: Will recycled materials hold up in the supply chain? Will they meet regulatory standards? We understand these challenges. That's why we've engineered a solution that turns an environmental crisis into your brand's greatest asset.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/imgs/topics/recycled-ocean-plastic-packaging/recycled_ocean_plastic_packaging_process.jpg" 
                alt="Manufacturing Process of Recycled Ocean Plastic" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Precision Engineering & Recovery</h3>
              <p className="text-gray-600 mb-4">
                Our manufacturing process begins with the ethical recovery of ocean-bound plastics. Through state-of-the-art sorting, cleaning, and extrusion technologies, we transform this reclaimed material into high-grade packaging polymers.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Traceable supply chain from shoreline to shelf</li>
                <li>Advanced purification processes ensuring FDA compliance</li>
                <li>Customizable barrier properties for diverse product needs</li>
                <li>Seamless integration into existing filling lines</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Make the Switch?</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-green-600">Recycled Ocean Plastic</h4>
                  <p className="text-gray-600">Actively reduces marine pollution, lowers carbon footprint by up to 70%, and strongly appeals to eco-conscious consumers. Maintains 100% of the structural integrity of virgin plastics.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-600">Traditional Virgin Plastic</h4>
                  <p className="text-gray-600">Relies on fossil fuels, contributes to the growing waste crisis, and increasingly faces regulatory pushback and consumer boycotts.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src="/imgs/topics/recycled-ocean-plastic-packaging/recycled_ocean_plastic_packaging_comparison.jpg" 
                alt="Comparison of Sustainable vs Traditional Packaging" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-900 text-white text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Lead in Sustainability?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Partner with Achieve Pack to integrate high-performance recycled ocean plastic packaging into your supply chain.</p>
          <a href="/contact" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Request a B2B Consultation
          </a>
        </section>
      </div>
    </>
  );
};

export default RecycledOceanPlasticPackagingPage;
