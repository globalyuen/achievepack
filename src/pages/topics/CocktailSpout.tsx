import React from 'react';

const CocktailSpout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Cocktail Spout Pouches</h1>
          <p className="text-xl text-gray-700 italic mb-6">
            "We know that standing out on the beverage shelf while managing complex logistics and leakage risks is a constant battle for brands. We've engineered a spout pouch that solves supply chain headaches while delivering premium aesthetics."
          </p>
          <p className="text-gray-600 mb-4">
            Achieve Pack's Cocktail Spout Pouches offer a high-performance, lightweight alternative to rigid glass or plastic bottles. Featuring state-of-the-art anti-leak spouts and ultra-durable barrier films, they are ideal for alcoholic beverages, mixers, and ready-to-drink (RTD) cocktails.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Reduces warehousing and shipping costs by up to 70%.</li>
            <li>Custom high-definition rotogravure printing for maximum shelf impact.</li>
            <li>Tamper-evident, high-flow spouts designed for automated filling lines.</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src="/imgs/topics/cocktail-spout/hero.png" alt="Cocktail Spout Pouch" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Advanced Filling Compatibility</h2>
          <img src="/imgs/topics/cocktail-spout/process.png" alt="Filling Process" className="w-full h-48 object-cover rounded mb-4" />
          <p className="text-gray-600">
            Our spouted pouches are precisely engineered to integrate seamlessly with standard rail and rotary filling machinery, ensuring high-speed production without costly downtime or spillage.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Flexible vs. Rigid Logistics</h2>
          <img src="/imgs/topics/cocktail-spout/comparison.png" alt="Logistics Comparison" className="w-full h-48 object-cover rounded mb-4" />
          <p className="text-gray-600">
            One truckload of our unfilled cocktail spout pouches equals up to 25 truckloads of empty glass bottles. This dramatic reduction in volume streamlines your supply chain and improves your bottom line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CocktailSpout;
