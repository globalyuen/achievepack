import React from 'react';
import { Helmet } from 'react-helmet-async';

const PetFoodQuadSeal: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quad Seal Pet Food Bags | Heavy Duty & Reliable</title>
        <meta name="description" content="Discover our quad seal pet food bags, engineered for heavy volumes. Superior structural integrity, reinforced edges, and maximum brand visibility." />
      </Helmet>
      <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-white shadow-sm">
          <div className="absolute inset-0 z-0">
            <img src="/imgs/topics/pet-food-quad-seal/pet_food_quad_seal_hero.jpg" alt="Quad Seal Pet Food Bag Hero" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Strength Meets Style: The Quad Seal Bag</h1>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              When it comes to large volumes of pet food, structural integrity is non-negotiable. Our quad seal bags feature four reinforced edges that provide unmatched strength and shape retention. Say goodbye to bulging, misshapen bags and hello to a crisp, premium presentation that commands authority on the retail shelf. 
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-all shadow-md">
              Request Pricing
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Built for the Heavy Lifting</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Standard pouches can warp or split when packed with heavy loads like 10kg or 20kg of dog food. The quad seal design changes the game by displacing the stress across four distinct, sealed corners. The result is a bag that maintains a perfect rectangular footprint, stacks neatly on pallets, and prevents costly breakages during transit.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Four corner seals for maximum structural strength</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Uninterrupted front and back panels for seamless graphics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Ideal for high-volume, heavy weight pet food products</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img src="/imgs/topics/pet-food-quad-seal/pet_food_quad_seal_comp.jpg" alt="Quad Seal Comparison" className="w-full h-auto" />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img src="/imgs/topics/pet-food-quad-seal/pet_food_quad_seal_process.jpg" alt="Manufacturing Process" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Robust Manufacturing for Demanding Markets</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fabricating quad seal bags requires specialized, heavy-duty machinery. Our production lines are equipped to weld all four corners with extreme precision, creating a continuous barrier that resists puncture and tearing. We use high-tensile laminate structures specifically chosen to withstand the rigors of the pet food supply chain, ensuring your product arrives in pristine condition.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PetFoodQuadSeal;
