import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const IllustratedPouchDesignVariation: React.FC = () => {
  const painPoints = ["Generic packaging failing to stand out","High cost of custom illustrations","Printing limitations for complex artwork"];

  return (
    <SEOPageLayout
      title="Illustrated Pouch Design Variation"
      description="Custom illustrated pouch design variation for unique brand identity."
      heroImage="/imgs/illustrated/550370b4-7713-4f32-89cb-48e0a6ba2fe3.webp"
      translations={{"es":{"title":"Diseño de Bolsa Ilustrado","desc":"Variación de diseño de bolsa ilustrada personalizada para una identidad de marca única."},"fr":{"title":"Conception de Sachet Illustré","desc":"Variation de conception de sachet illustré personnalisé pour une identité de marque unique."},"zh":{"title":"插画袋设计","desc":"定制插画袋设计变体，打造独特的品牌形象。"}}}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pain Points Addressed</h2>
        <ul className="list-disc pl-6">
          {painPoints.map((point, idx) => (
            <li key={idx} className="mb-2">{point}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Engineering Notebook</h2>
        <p className="whitespace-pre-wrap">CMYK + Spot color separation techniques ensure vibrant color reproduction of complex illustrations on flexible substrates.</p>
      </section>
    </SEOPageLayout>
  );
};

export default IllustratedPouchDesignVariation;
