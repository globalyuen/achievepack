import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { CheckCircle, ShieldCheck, Zap, Factory, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Premium Brand Identity Packaging | Advanced Packaging Solutions",
    description: "Discover the engineering behind Premium Brand Identity Packaging. Learn how we solve common packaging challenges.",
    heroTitle: "Premium Brand Identity Packaging",
    heroSubtitle: "Solving Your Top 5 Packaging Pain Points",
    hook: "We know the sinking feeling of opening a shipping box only to find your premium product crushed. Our Premium Brand Identity Packaging prevents these disasters.",
    painPoints: "5 Packaging Pain Points & Engineering Solutions",
    notebook: "🔬 From Ryan Wong's Engineering Notebook",
    notebookText: "In my 14 years in packaging design, I've seen countless brands struggle with barrier failures. We specifically calibrated the MVTR (Moisture Vapor Transmission Rate) to &lt; 0.1 g/m²/day and ensured a minimum seal strength of 45N/15mm to guarantee structural integrity on automated VFFS lines. Real-world performance always beats theoretical specs."
  },
  es: {
    title: "Premium Brand Identity Packaging | Soluciones Avanzadas",
    description: "Descubra la ingeniería detrás de Premium Brand Identity Packaging.",
    heroTitle: "Premium Brand Identity Packaging",
    heroSubtitle: "Resolviendo Sus 5 Principales Puntos De Dolor",
    hook: "Conocemos la sensación de frustración al encontrar su producto dañado. Nuestras soluciones previenen estos desastres.",
    painPoints: "5 Puntos de Dolor y Soluciones",
    notebook: "🔬 Del Cuaderno de Ingeniería de Ryan Wong",
    notebookText: "En mis 14 años de diseño de empaques..."
  },
  fr: {
    title: "Premium Brand Identity Packaging | Solutions d'Emballage",
    description: "Découvrez l'ingénierie derrière Premium Brand Identity Packaging.",
    heroTitle: "Premium Brand Identity Packaging",
    heroSubtitle: "Résolution de vos 5 principaux problèmes",
    hook: "Nous connaissons la frustration de trouver un produit endommagé. Nos solutions l'empêchent.",
    painPoints: "5 points de douleur et solutions",
    notebook: "🔬 Du carnet de Ryan Wong",
    notebookText: "Dans mes 14 années de conception..."
  },
  zh: {
    title: "Premium Brand Identity Packaging | 高級包裝解決方案",
    description: "探索 Premium Brand Identity Packaging 背後的工程技術。",
    heroTitle: "Premium Brand Identity Packaging",
    heroSubtitle: "解決您的前5大包裝痛點",
    hook: "我們知道產品損壞的挫敗感。我們的解決方案防止了這些災難。",
    painPoints: "5個包裝痛點及解決方案",
    notebook: "🔬 來自 Ryan Wong 的工程筆記",
    notebookText: "在我14年的包裝設計生涯中..."
  }
};

export default function PremiumBrandIdentityPackaging() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language && localTranslations[i18n.language as keyof typeof localTranslations]) ? i18n.language : 'en';
  const tLocal = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en;
  const domain = getDomain();

  const painPointsList = [
    { num: "01", problem: "Seal Failures Under Vacuum", solution: "We use high-temperature localized heat sealing (180°C) with a specific dwell time to ensure 45N/15mm seal strength.", icon: <CheckCircle className="text-lime-500 w-6 h-6" /> },
    { num: "02", problem: "Moisture Ingress", solution: "Multi-layer EVOH/AL barrier lamination achieves an MVTR of &lt; 0.1 g/m²/day, extending shelf life by 40%.", icon: <ShieldCheck className="text-lime-500 w-6 h-6" /> },
    { num: "03", problem: "Color Shift on Matte Varnishes", solution: "We provide free CMYK-to-PMS software calibration videos before production.", icon: <Zap className="text-lime-500 w-6 h-6" /> },
    { num: "04", problem: "VFFS Machine Jamming", solution: "Our slip additives are calibrated to a dynamic Coefficient of Friction (COF) of 0.2-0.3, ensuring smooth high-speed runs.", icon: <Factory className="text-lime-500 w-6 h-6" /> },
    { num: "05", problem: "Shipping Weight Costs", solution: "Optimized material thickness saves up to 15% in logistics costs while maintaining burst strength.", icon: <Package className="text-lime-500 w-6 h-6" /> }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Premium Brand Identity Packaging improve my packaging?",
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
      heroImage="/imgs/apple-touch-icon.png"
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
