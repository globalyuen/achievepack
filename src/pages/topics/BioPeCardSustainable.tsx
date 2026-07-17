import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const BioPeCardSustainable: React.FC = () => {
  const painPoints = ["Confusion around bio-plastics","Lower barrier performance of sustainable materials","Higher supply chain costs"];

  return (
    <SEOPageLayout
      title="Bio PE Card Sustainable"
      description="Bio-based Polyethylene (Bio PE) card detailing sustainable packaging metrics."
      heroImage="/imgs/illustrated/a_bio_pe_card_v3_4603248.webp"
      translations={{"es":{"title":"Tarjeta Bio PE Sostenible","desc":"Tarjeta de polietileno de base biológica (Bio PE) que detalla métricas de embalaje sostenible."},"fr":{"title":"Carte Bio PE Durable","desc":"Carte en polyéthylène biosourcé (Bio PE) détaillant les mesures d'emballage durable."},"zh":{"title":"生物聚乙烯卡","desc":"生物基聚乙烯（Bio PE）卡，详细说明可持续包装指标。"}}}
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
        <p className="whitespace-pre-wrap">Bio-PE derived from sugarcane ethanol offers identical mechanical and barrier properties to fossil-based PE while reducing carbon emissions.</p>
      </section>
    </SEOPageLayout>
  );
};

export default BioPeCardSustainable;
