import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CorporateSustainabilityVariation: React.FC = () => {
  const painPoints = ["Greenwashing accusations","High cost of sustainable materials","Complex compliance with recycling regulations"];

  return (
    <SEOPageLayout
      title="Corporate Sustainability Variation"
      description="Illustration depicting corporate sustainability efforts in packaging."
      heroImage="/imgs/illustrated/a_corporate_sustainability_variation_2_1276624.webp"
      translations={{"es":{"title":"Sostenibilidad Corporativa","desc":"Ilustración que representa los esfuerzos de sostenibilidad corporativa en el embalaje."},"fr":{"title":"Durabilité de l'Entreprise","desc":"Illustration représentant les efforts de durabilité des entreprises dans l'emballage."},"zh":{"title":"企业可持续性变化","desc":"描绘包装中企业可持续性努力的插图。"}}}
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
        <p className="whitespace-pre-wrap">Life Cycle Assessment (LCA) tools calculate carbon footprint reductions when transitioning to mono-material PE structures.</p>
      </section>
    </SEOPageLayout>
  );
};

export default CorporateSustainabilityVariation;
