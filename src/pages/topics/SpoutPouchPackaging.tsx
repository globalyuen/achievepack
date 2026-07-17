import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const SpoutPouchPackaging: React.FC = () => {
  const painPoints = ["Liquid leakage during transit","Difficult dispensing for consumers","Poor barrier properties for sensitive liquids"];

  return (
    <SEOPageLayout
      title="Spout Pouch Packaging"
      description="High-quality spout pouch packaging for liquids and semi-liquids."
      heroImage="/imgs/free/website/pack_spout.png"
      translations={{"es":{"title":"Bolsas con Boquilla","desc":"Envases de bolsas con boquilla de alta calidad para líquidos y semilíquidos."},"fr":{"title":"Sachets à Bec Verseur","desc":"Emballage de sachets à bec verseur de haute qualité pour liquides et semi-liquides."},"zh":{"title":"吸嘴袋包装","desc":"用于液体和半液体的高品质吸嘴袋包装。"}}}
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
        <p className="whitespace-pre-wrap">Spout fitments ultrasonically welded to film structure. Burst testing confirms seal integrity up to 45 PSI.</p>
      </section>
    </SEOPageLayout>
  );
};

export default SpoutPouchPackaging;
