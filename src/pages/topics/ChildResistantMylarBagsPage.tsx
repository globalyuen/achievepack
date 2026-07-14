import React from 'react';

const ChildResistantMylarBagsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Child Resistant Mylar Bags</h1>
          <p className="text-xl text-gray-700 italic mb-6">
            "We know that ensuring strict compliance and safety while maintaining your brand's premium appeal is a massive challenge in the B2B packaging industry. That's why we engineered a solution that does both effortlessly."
          </p>
          <p className="text-gray-600 mb-4">
            Our Child Resistant Mylar Bags are designed with technical precision to meet ASTM D3475 standards. Featuring advanced multi-layer barrier films and secure, certified locking mechanisms, these pouches guarantee product integrity, freshness, and regulatory compliance.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>High-barrier EVOH and metalized layers for maximum shelf life.</li>
            <li>Certified child-resistant zippers requiring two-handed dexterity.</li>
            <li>Customizable B2B wholesale sizes and printing capabilities.</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src="/imgs/topics/child-resistant-mylar-bags/hero.png" alt="Child Resistant Mylar Bags" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Precision Manufacturing Process</h2>
          <img src="/imgs/topics/child-resistant-mylar-bags/process.png" alt="Manufacturing Process" className="w-full h-48 object-cover rounded mb-4" />
          <p className="text-gray-600">
            Manufactured in our ISO-certified facilities, every batch undergoes rigorous quality control testing, including burst strength, seal integrity, and locking mechanism endurance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Achieve Pack Quality vs. Standard</h2>
          <img src="/imgs/topics/child-resistant-mylar-bags/comparison.png" alt="Comparison" className="w-full h-48 object-cover rounded mb-4" />
          <p className="text-gray-600">
            Unlike standard packaging, our child-resistant bags offer superior puncture resistance and a proprietary closure system that prevents accidental opening while remaining accessible to adults.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildResistantMylarBagsPage;
