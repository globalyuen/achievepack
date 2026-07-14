import React from 'react';
import { Helmet } from 'react-helmet';

const GrainsBackSealPouch = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Back-Seal Pouches for Grains | Achieve Pack</title>
        <meta name="description" content="Cost-effective, high-speed back-seal pouches for rice, quinoa, and other grains. Excellent moisture barriers for long-term storage." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Heavy-Duty Back-Seal Pouches for Grains</h1>
          <p className="text-xl text-gray-600">Grains are heavy and abrasive. Weak seals or poor barriers mean split bags on pallets and insect infestations, devastating your bottom line.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/grains-back-seal-pouch/hero.webp" alt="Grains Back Seal Pouch" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Maximum Strength, Minimal Cost</h2>
            <p className="mb-4">The center back-seal (fin seal or lap seal) provides exceptional structural integrity for heavy loads of rice, beans, and seeds, while offering a highly cost-efficient format for automated form-fill-seal (FFS) lines.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>High burst strength for heavy contents</li>
              <li>Superior moisture & oxygen barrier</li>
              <li>Optimized for automated filling machines</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Structural Engineering</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p>Our multi-layer laminates are engineered to resist the abrasive nature of dry grains. The strong center seal ensures the pouch withstands impact during transit and stacking.</p>
            <img src="/imgs/topics/grains-back-seal-pouch/process.webp" alt="Structural Engineering" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Back-Seal vs. Standard Pillow Bags</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/imgs/topics/grains-back-seal-pouch/comparison.webp" alt="Back-Seal Comparison" className="rounded-lg shadow-lg w-full" />
            <div>
              <p>Compared to standard glued pillow bags, our heat-sealed back-seal pouches offer superior leak resistance and barrier properties, ensuring bulk grains remain pest-free and dry for years.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default GrainsBackSealPouch;
