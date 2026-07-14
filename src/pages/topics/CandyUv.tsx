import React from 'react';
import Head from 'next/head';

const CandyUv: React.FC = () => {
  return (
    <>
      <Head>
        <title>Candy UV Printing Solutions | Achieve Pack</title>
        <meta name="description" content="Premium UV printing technology for candy packaging. High-gloss finish and protection for B2B wholesale manufacturers." />
      </Head>
      <div className="topic-container">
        {/* Empathy Hook */}
        <section className="empathy-hook bg-gray-100 p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Struggling with Dull Candy Packaging on the Shelf?</h1>
          <p className="text-xl">In a crowded retail space, your product needs to pop. Our advanced UV printing provides the gloss and durability required to capture attention.</p>
        </section>

        {/* Hero Section */}
        <section className="hero-section">
          <img src="/imgs/topics/candy-uv/hero.png" alt="Premium Candy UV Packaging" className="w-full h-auto" />
        </section>

        {/* Technical Details */}
        <section className="technical-details p-8">
          <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
          <p>Our UV printing process utilizes ultraviolet light to cure inks instantly, resulting in a vibrant, high-gloss finish that resists scratching and fading. Perfect for high-speed automated packaging lines.</p>
        </section>

        {/* Process Section */}
        <section className="process-section grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">The UV Curing Process</h2>
            <p>From initial design to rapid UV exposure, our B2B manufacturing process guarantees precision and scale.</p>
          </div>
          <img src="/imgs/topics/candy-uv/process.png" alt="UV Printing Process" className="w-full h-auto rounded" />
        </section>

        {/* Comparison Section */}
        <section className="comparison-section p-8 bg-gray-50">
          <h2 className="text-3xl font-semibold mb-4 text-center">Standard vs. UV Printing</h2>
          <div className="flex justify-center">
            <img src="/imgs/topics/candy-uv/comparison.png" alt="Standard vs UV Comparison" className="w-3/4 h-auto rounded shadow-lg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default CandyUv;
