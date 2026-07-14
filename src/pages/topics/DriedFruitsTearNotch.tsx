import React from 'react';
import { Helmet } from 'react-helmet';

const DriedFruitsTearNotch = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Dried Fruits Tear Notch Solutions | Achieve Pack</title>
        <meta name="description" content="Premium B2B dried fruits tear notch solutions. Fast turnaround, low MOQ, and sustainable materials to elevate your brand." />
      </Helmet>
      
      {/* Empathy Hook */}
      <section className="hero bg-gray-900 text-white p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Struggling with the right dried fruits tear notch for your business?</h1>
          <p className="text-xl mb-8">We know how frustrating it is when traditional packaging methods hold back your product launches. You need agile, high-quality, and reliable packaging that scales with your business—without compromising on sustainability or tying up your cash flow in massive inventory.</p>
          <img src="/imgs/topics/dried-fruits-tear-notch/hero.png" alt="Dried Fruits Tear Notch" className="w-full rounded-lg shadow-xl" />
        </div>
      </section>

      {/* Technical Process */}
      <section className="process p-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Advanced Manufacturing Process</h2>
          <p className="mb-6">At Achieve Pack, we utilize state-of-the-art technology to produce your dried fruits tear notch. Our process ensures high durability, excellent barrier properties, and perfect print quality to meet your technical requirements.</p>
          <img src="/imgs/topics/dried-fruits-tear-notch/process.png" alt="Manufacturing Process" className="w-full rounded-lg shadow-xl" />
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison p-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Our Solutions Stand Out</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-4 text-red-600">Standard Packaging</h3>
              <ul className="list-disc pl-5">
                <li>High setup costs</li>
                <li>Inflexible order quantities</li>
                <li>Long lead times</li>
                <li>Basic material options</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
              <h3 className="font-bold text-xl mb-4 text-green-600">Achieve Pack Quality</h3>
              <ul className="list-disc pl-5">
                <li>Cost-effective setup</li>
                <li>Flexible MOQs</li>
                <li>Rapid turnaround</li>
                <li>Advanced sustainable materials</li>
              </ul>
            </div>
          </div>
          <img src="/imgs/topics/dried-fruits-tear-notch/comparison.png" alt="Comparison" className="w-full rounded-lg shadow-xl mt-8" />
        </div>
      </section>
    </div>
  );
};

export default DriedFruitsTearNotch;
