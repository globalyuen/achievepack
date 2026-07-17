import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { CheckCircle, ShieldCheck, Zap, Factory, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Solution Pet Products | Advanced Packaging Solutions",
    description: "Discover the engineering behind our premium Solution Pet Products. Learn how we solve common packaging challenges with cutting-edge materials and designs.",
    heroTitle: "Engineered Solution Pet Products",
    heroSubtitle: "Solving Your Top 5 Packaging Pain Points",
    hook: "We know the sinking feeling of opening a shipping box only to find your premium product crushed because the seal failed. You didn't spend months perfecting your recipe just to lose customers over cheap, unreliable packaging. Our Solution Pet Products is designed to prevent these exact disasters.",
    painPoints: "5 Packaging Pain Points & Engineering Solutions",
    notebook: "🔬 From Ryan Wong's Engineering Notebook",
    notebookText: "Engineers often overlook the COF (Coefficient of Friction) on matte finishes. By precisely controlling the slip additive distribution, we eliminated film tracking issues on form-fill-seal lines, increasing client OEE by 18%. The multi-layer structure guarantees OTR under 0.1 cc/m²/day."
  },
  es: {
    title: "Solution Pet Products | Soluciones Avanzadas",
    description: "Descubra la ingeniería detrás de nuestro Solution Pet Products premium.",
    heroTitle: "Solution Pet Products Diseñado",
    heroSubtitle: "Resolviendo Sus 5 Principales Puntos Delor",
    hook: "Conocemos la sensación de frustración al encontrar su producto premium dañado. Nuestro Solution Pet Products está diseñado para prevenir estos desastres exactos.",
    painPoints: "5 Puntos de Dolor y Soluciones",
    notebook: "🔬 Del Cuaderno de Ingeniería de Ryan Wong",
    notebookText: "En mis 14 años de diseño de empaques, he visto innumerables fracasos. Controlamos meticulosamente los aditivos y garantizamos under 0.1 cc/m²/día de OTR."
  },
  fr: {
    title: "Solution Pet Products | Solutions d'Emballage Avancées",
    description: "Découvrez l'ingénierie derrière notre Solution Pet Products premium.",
    heroTitle: "Solution Pet Products Conçu",
    heroSubtitle: "Résolution de vos 5 principaux problèmes d'emballage",
    hook: "Nous connaissons le sentiment de frustration lorsque vous trouvez votre produit premium endommagé.",
    painPoints: "5 points de douleur et solutions",
    notebook: "🔬 Du carnet d'ingénierie de Ryan Wong",
    notebookText: "Après 14 ans dans la conception d'emballages, nous avons optimisé chaque paramètre, garantissant un OTR under 0.1 cc/m²/jour."
  },
  "zh-tw": {
    title: "Solution Pet Products | 高級包裝解決方案",
    description: "探索我們高級 Solution Pet Products 背後的工程技術。",
    heroTitle: "精心設計的 Solution Pet Products",
    heroSubtitle: "解決您的前5大包裝痛點",
    hook: "我們知道打開運輸箱卻發現優質產品因密封失敗而破損的沮喪感。",
    painPoints: "5個包裝痛點及工程解決方案",
    notebook: "🔬 來自 Ryan Wong 的工程筆記",
    notebookText: "在我的14年包裝設計經驗中，我們透過控制添加劑的分佈，有效提升客戶18%以上的OEE，確保透氧率 under 0.1 cc/m²/day。"
  }
};

export default function SolutionPetProducts() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as keyof typeof localTranslations) || 'en';
  const tLocal = localTranslations[lang] || localTranslations.en;
  const domain = getDomain();

  const painPointsList = [
    { num: "01", problem: "Oxygen Permeability", solution: "High barrier AL layer guarantees OTR under 0.1 cc/m²/day, preserving freshness and aroma for coffee and delicate foods.", icon: <CheckCircle className="text-lime-500 w-6 h-6" /> },
    { num: "02", problem: "Shipping Weight Costs", solution: "Optimized material thickness (110 microns instead of standard 130) saves up to 15% in logistics costs while maintaining burst strength.", icon: <ShieldCheck className="text-lime-500 w-6 h-6" /> },
    { num: "03", problem: "Moisture Ingress", solution: "Multi-layer EVOH/AL barrier lamination achieves an MVTR of under 0.1 g/m²/day, extending shelf life by 40%.", icon: <Zap className="text-lime-500 w-6 h-6" /> },
    { num: "04", problem: "Seal Failures Under Vacuum", solution: "We use high-temperature localized heat sealing (180°C) with a specific dwell time to ensure 45N/15mm seal strength.", icon: <Factory className="text-lime-500 w-6 h-6" /> },
    { num: "05", problem: "VFFS Machine Jamming", solution: "Our slip additives are calibrated to a dynamic Coefficient of Friction (COF) of 0.2-0.3, ensuring smooth high-speed runs.", icon: <Package className="text-lime-500 w-6 h-6" /> }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Solution Pet Products improve my packaging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By offering superior barrier properties and optimized VFFS compatibility."
        }
      }
    ]
  };

  return (
    <SEOPageLayout
      title={tLocal.title}
      description={tLocal.description}
      heroTitle={tLocal.heroTitle}
      heroSubtitle={tLocal.heroSubtitle}
      heroImage="/imgs/solution-pet-products.webp"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          {tLocal.hook}
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">{tLocal.painPoints}</h2>
        <div className="space-y-6 mb-16">
          {painPointsList.map((pt, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mt-1">{pt.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <span className="text-lime-600 mr-2">{pt.num}.</span>
                  {pt.problem}
                </h3>
                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{__html: pt.solution}} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            {tLocal.notebook}
          </h3>
          <p className="text-gray-700 italic leading-relaxed" dangerouslySetInnerHTML={{__html: tLocal.notebookText}} />
        </div>
      </div>
    </SEOPageLayout>
  );
}
