import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';

const PackagingSizeGuideCardV2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Packaging Size Guide Card V2 | AchievePack</title>
        <meta name="description" content="Easily determine the perfect pouch size for your product volume." />
      </Helmet>
      <SEOPageLayout
        title="Packaging Size Guide Card V2"
        subtitle="Easily determine the perfect pouch size for your product volume."
        imageUrl="/imgs/illustrated/a_size_guide_card_v2_9433535.webp"
        content={
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700">
                Explore our innovative approach to packaging size guide card v2, designed specifically to enhance brand visibility and product integrity. This solution balances aesthetics with high-performance materials.
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
                  <p className="text-gray-600 text-sm">Determine fácilmente el tamaño de bolsa perfecto para el volumen de su producto.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Français</h4>
                  <p className="text-gray-600 text-sm">Déterminez facilement la taille de sachet parfaite pour le volume de votre produit.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">中文</h4>
                  <p className="text-gray-600 text-sm">轻松确定适合您产品体积的完美包装袋尺寸。</p>
                </div>
              </div>
            </section>
          </div>
        }
      />
    </>
  );
};

export default PackagingSizeGuideCardV2;
