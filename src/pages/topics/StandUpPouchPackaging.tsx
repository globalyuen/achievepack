import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const StandUpPouchPackaging: React.FC = () => {
  const painPoints = ["Pouches tipping over on shelves","Inadequate shelf presence","Puncture issues during shipping"];

  return (
    <SEOPageLayout
      title="Stand Up Pouch Packaging"
      description="Versatile stand-up pouch packaging for retail shelves."
      heroImage="/imgs/free/website/pack_stand_up.png"
      translations={{"es":{"title":"Bolsas Stand Up","desc":"Envases versátiles de bolsas stand up para estantes minoristas."},"fr":{"title":"Sachets Doypack","desc":"Emballage polyvalent en sachets doypack pour les rayons de vente au détail."},"zh":{"title":"自立袋包装","desc":"用于零售货架的多功能自立袋包装。"}}}
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
        <p className="whitespace-pre-wrap">Bottom gusset geometry optimized with 45-degree angle seals to ensure upright stability regardless of fill weight.</p>
      </section>
    </SEOPageLayout>
  );
};

export default StandUpPouchPackaging;
