import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CtaRevisedDesign: React.FC = () => {
  const painPoints = ["Low conversion rates on landing pages","Poor visibility of next steps","Cluttered design causing user friction"];

  return (
    <SEOPageLayout
      title="CTA Revised Design"
      description="Revised call-to-action design for packaging conversion optimization."
      heroImage="/imgs/free/design/a_cta_revised_7607342.webp"
      translations={{"es":{"title":"Diseño de CTA Revisado","desc":"Diseño revisado de llamada a la acción para optimizar la conversión de embalajes."},"fr":{"title":"Design CTA Révisé","desc":"Conception révisée de l'appel à l'action pour optimiser la conversion des emballages."},"zh":{"title":"修订后的行动号召设计","desc":"修订后的行动号召设计，用于包装转化优化。"}}}
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
        <p className="whitespace-pre-wrap">A/B testing indicates optimal contrast ratios and whitespace padding around CTAs increase click-through rates by up to 15%.</p>
      </section>
    </SEOPageLayout>
  );
};

export default CtaRevisedDesign;
