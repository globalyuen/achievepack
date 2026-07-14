import React from 'react';
import { Helmet } from 'react-helmet';

const FrozenVacuum = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Frozen Food Vacuum Packaging | Achieve Pack</title>
        <meta name="description" content="High-performance vacuum packaging for frozen foods. Puncture-resistant, ultra-low temperature tolerant pouches designed for industrial cold chains." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Industrial Frozen Vacuum Packaging</h1>
          <p className="text-xl text-gray-600">Freezer burn and punctured bags destroy product value and consumer trust. Your frozen goods require packaging built for extreme conditions.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/frozen-vacuum/hero.webp" alt="Frozen Vacuum Packaging" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Engineered for the Cold Chain</h2>
            <p className="mb-4">Our co-extruded nylon/PE vacuum pouches offer superior puncture resistance and maintain their integrity in sub-zero environments, ensuring your meat, seafood, and prepared meals stay perfectly preserved.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Exceptional puncture & tear resistance</li>
              <li>Zero oxygen transmission rate (OTR)</li>
              <li>Performs at -40°C temperatures</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Advanced Vacuum Technology</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p>Our multi-layer films are designed to draw tightly around sharp edges like bone-in meats, creating a hermetic seal that completely eliminates freezer burn and extends shelf life by months.</p>
            <img src="/imgs/topics/frozen-vacuum/process.webp" alt="Vacuum Technology" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">High-Barrier vs. Standard Plastic</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/imgs/topics/frozen-vacuum/comparison.webp" alt="Barrier Comparison" className="rounded-lg shadow-lg w-full" />
            <div>
              <p>Standard polyethylene bags become brittle and crack in freezers, exposing food to air. Our specially formulated frozen vacuum pouches retain flexibility and structural integrity in the harshest deep-freeze conditions.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default FrozenVacuum;
