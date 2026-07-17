import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const FlatBottomPouchPackaging: React.FC = () => {
  const painPoints = ["Limited printable area on traditional pouches","Inefficient use of shelf space","Structural collapse of thin materials"];

  return (
    <SEOPageLayout
      title="Flat Bottom Pouch Packaging"
      description="Premium flat bottom pouch packaging for maximum volume and branding."
      heroImage="/imgs/free/website/pack_flat_bottom.png"
      translations={{"es":{"title":"Bolsas de Fondo Plano","desc":"Bolsas de fondo plano premium para máximo volumen y marca."},"fr":{"title":"Sachets à Fond Plat","desc":"Sachets à fond plat haut de gamme pour un volume et une image de marque maximum."},"zh":{"title":"平底袋包装","desc":"优质的平底袋包装，实现最大容量和品牌展示。"}}}
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
        <p className="whitespace-pre-wrap">Five-panel design provides 360-degree branding surface and superior structural rigidity using a quad-seal architecture.</p>
      </section>
    </SEOPageLayout>
  );
};

export default FlatBottomPouchPackaging;
