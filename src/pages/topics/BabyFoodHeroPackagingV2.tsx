import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';

const BabyFoodHeroPackagingV2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Baby Food Hero Packaging V2 | AchievePack</title>
        <meta name="description" content="Safe, FDA-approved spout pouches for baby food." />
      </Helmet>
      <SEOPageLayout
        title="Baby Food Hero Packaging V2"
        subtitle="Safe, FDA-approved spout pouches for baby food."
        imageUrl="/imgs/illustrated/a_baby_food_hero_v2_1781490.webp"
        content={
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700">
                Explore our innovative approach to baby food hero packaging v2, designed specifically to enhance brand visibility and product integrity. This solution balances aesthetics with high-performance materials.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pain Points Addressed</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Brand Differentiation:</strong> Stand out on crowded shelves.</li>
                <li><strong>Product Freshness:</strong> High barriers keep contents secure.</li>
                <li><strong>Durability:</strong> Puncture-resistant structures prevent leaks.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Engineering Notebook</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Specifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Material:</strong> Premium Multi-Layer Laminate</li>
                  <li><strong>OTR:</strong> {"&lt; 0.1"} cc/m²/24h</li>
                  <li><strong>WVTR:</strong> {"&lt; 0.1"} g/m²/24h</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Español</h4>
                  <p className="text-gray-600 text-sm">Bolsas con boquilla seguras y aprobadas por la FDA para alimentos para bebés.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Français</h4>
                  <p className="text-gray-600 text-sm">Sachets à bec sûrs et approuvés par la FDA pour les aliments pour bébés.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">中文</h4>
                  <p className="text-gray-600 text-sm">安全，经过FDA批准的婴儿食品吸嘴袋。</p>
                </div>
              </div>
            </section>
          </div>
        }
      />
    </>
  );
};

export default BabyFoodHeroPackagingV2;
