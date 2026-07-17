import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';

const ValveClosureDetail: React.FC = () => {
  const painPoints = ["Coffee beans losing freshness","Valve leakage","Difficulty in integrating valves into packaging"];

  return (
    <SEOPageLayout
      title="Valve Closure Detail"
      description="Detailed view of degassing valve closures for coffee packaging."
      heroImage="/imgs/reclose/ads/a_valve_closure_detail_6401844.webp"
      translations={{"es":{"title":"Detalle de Cierre de Válvula","desc":"Vista detallada de los cierres de válvula desgasificadora para envases de café."},"fr":{"title":"Détail de Fermeture de Valve","desc":"Vue détaillée des fermetures de valve de dégazage pour l'emballage du café."},"zh":{"title":"排气阀细节","desc":"咖啡包装单向排气阀的详细视图。"}}}
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
        <p className="whitespace-pre-wrap">One-way degassing valves release CO2 while preventing oxygen ingress. Tested to operate at pressure differentials {"<"} 0.1 psi.</p>
      </section>
    </SEOPageLayout>
  );
};

export default ValveClosureDetail;
