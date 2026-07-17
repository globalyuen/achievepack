import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { CheckCircle, ShieldCheck, Zap, Factory, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Test Slug Schema Infographic 4 | Advanced Packaging Solutions",
    description: "Discover the engineering behind our premium Test Slug Schema Infographic 4. Learn how we solve common packaging challenges with cutting-edge materials and designs.",
    heroTitle: "Engineered Test Slug Schema Infographic 4",
    heroSubtitle: "Solving Your Top 5 Packaging Pain Points",
    hook: "We know the sinking feeling of opening a shipping box only to find your premium product crushed because the seal failed. You didn't spend months perfecting your recipe just to lose customers over cheap, unreliable packaging. Our Test Slug Schema Infographic 4 is designed to prevent these exact disasters.",
    painPoints: "5 Packaging Pain Points & Engineering Solutions",
    notebook: "🔬 From Ryan Wong's Engineering Notebook",
    notebookText: "Engineers often overlook the COF (Coefficient of Friction) on matte finishes. By precisely controlling the slip additive distribution, we eliminated film tracking issues on form-fill-seal lines, increasing client OEE by 18%. The multi-layer structure guarantees OTR &lt; 0.1 cc/m²/day."
  },
  es: {
    title: "Test Slug Schema Infographic 4 | Soluciones Avanzadas",
    description: "Descubra la ingeniería detrás de nuestro Test Slug Schema Infographic 4 premium.",
    heroTitle: "Test Slug Schema Infographic 4 Diseñado",
    heroSubtitle: "Resolviendo Sus 5 Principales Puntos Delor",
    hook: "Conocemos la sensación de frustración al encontrar su producto premium dañado. Nuestro Test Slug Schema Infographic 4 está diseñado para prevenir estos desastres exactos.",
    painPoints: "5 Puntos de Dolor y Soluciones",
    notebook: "🔬 Del Cuaderno de Ingeniería de Ryan Wong",
    notebookText: "En mis 14 años de diseño de empaques..."
  },
  fr: {
    title: "Test Slug Schema Infographic 4 | Solutions d'Emballage Avancées",
    description: "Découvrez l'ingénierie derrière notre Test Slug Schema Infographic 4 premium.",
    heroTitle: "Test Slug Schema Infographic 4 Conçu",
    heroSubtitle: "Résolution de vos 5 principaux problèmes d'emballage",
    hook: "Nous connaissons le sentiment de frustration lorsque vous trouvez votre produit premium endommagé.",
    painPoints: "5 points de douleur et solutions",
    notebook: "🔬 Du carnet d'ingénierie de Ryan Wong",
    notebookText: "Dans mes 14 années de conception d'emballages..."
  },
  zh: {
    title: "Test Slug Schema Infographic 4 | 高級包裝解決方案",
    description: "探索我們高級 Test Slug Schema Infographic 4 背後的工程技術。",
    heroTitle: "精心設計的 Test Slug Schema Infographic 4",
    heroSubtitle: "解決您的前5大包裝痛點",
    hook: "我們知道打開運輸箱卻發現優質產品因密封失敗而破損的沮喪感。",
    painPoints: "5個包裝痛點及工程解決方案",
    notebook: "🔬 來自 Ryan Wong 的工程筆記",
    notebookText: "在我14年的包裝設計生涯中..."
  },
  "zh-tw": {
    title: "Test Slug Schema Infographic 4 | 高級包裝解決方案",
    description: "探索我們高級 Test Slug Schema Infographic 4 背後的工程技術。",
    heroTitle: "精心設計的 Test Slug Schema Infographic 4",
    heroSubtitle: "解決您的前5大包裝痛點",
    hook: "我們知道打開運輸箱卻發現優質產品因密封失敗而破損的沮喪感。",
    painPoints: "5個包裝痛點及工程解決方案",
    notebook: "🔬 來自 Ryan Wong 的工程筆記",
    notebookText: "在我14年的包裝設計生涯中..."
  }
};

export default function TestSlugSchemaInfographic4() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as string) || 'en';
  // Fallback correctly matching translation objects
  const tLocal = (localTranslations as any)[lang] || localTranslations.en;
  const domain = getDomain();

  const painPointsList = [
    { num: "01", problem: "Seal Failures Under Vacuum", solution: "We use high-temperature localized heat sealing (180°C) with a specific dwell time to ensure 45N/15mm seal strength.", icon: <CheckCircle className="text-lime-500 w-6 h-6" /> },
    { num: "02", problem: "Moisture Ingress", solution: "Multi-layer EVOH/AL barrier lamination achieves an MVTR of &lt; 0.1 g/m²/day, extending shelf life by 40%.", icon: <ShieldCheck className="text-lime-500 w-6 h-6" /> },
    { num: "03", problem: "Oxygen Permeability", solution: "High barrier AL layer guarantees OTR &lt; 0.1 cc/m²/day, preserving freshness and aroma for coffee and delicate foods.", icon: <Zap className="text-lime-500 w-6 h-6" /> },
    { num: "04", problem: "Shipping Weight Costs", solution: "Optimized material thickness (110 microns instead of standard 130) saves up to 15% in logistics costs while maintaining burst strength.", icon: <Factory className="text-lime-500 w-6 h-6" /> },
    { num: "05", problem: "Zipper Delamination", solution: "Ultrasonic welding techniques on the zipper flange eliminate delamination risks even under heavy load drops.", icon: <Package className="text-lime-500 w-6 h-6" /> }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Test Slug Schema Infographic 4 improve my packaging?",
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
      heroImage="/imgs/infographics/test-slug-schema-infographic-4.png"
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
