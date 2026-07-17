import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Leaf, Shield, Zap, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WasteReductionPackagingStrategiesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';

  const translations: any = {
    en: { title: "Reduce Waste", desc: "Discover our comprehensive guide on reduce waste." },
    es: { title: "Reduce Waste (ES)", desc: "Descubra nuestra guía completa sobre reduce waste." },
    fr: { title: "Reduce Waste (FR)", desc: "Découvrez notre guide complet sur reduce waste." },
    zh: { title: "Reduce Waste (ZH)", desc: "了解我们关于reduce waste的全面指南。" }
  };
  const tData = translations[lang] || translations.en;

  return (
    <SEOPageLayout
      title={tData.title + " | Achieve Pack"}
      description={tData.desc}
      heroTitle={tData.title}
      heroSubtitle={tData.desc}
      heroImage="/imgs/generated/reduce_waste.png"
      introSummary={"We provide industry-leading insights into " + tData.title.toLowerCase() + " for B2B brands."}
      sections={[
        {
          id: "pain-points",
          title: "Industry Pain Points",
          icon: <Shield className="w-6 h-6" />,
          content: (
            <div className="space-y-4 text-gray-700">
              <p>Brands often struggle with compliance, durability, and cost-efficiency when navigating {tData.title.toLowerCase()}.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Material sourcing inconsistency and supply chain delays.</li>
                <li>Barrier properties failing under extreme conditions (OTR/MVTR).</li>
                <li>High MOQs preventing agile market testing.</li>
              </ul>
            </div>
          )
        },
        {
          id: "engineering-notebook",
          title: "Engineering Notebook",
          icon: <Zap className="w-6 h-6" />,
          content: (
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 font-mono text-sm">
              <p className="text-blue-700 mb-2"># TECH_SPEC: REDUCE_WASTE</p>
              <p>Thickness Tolerance: under 0.1mm</p>
              <p>Tensile Strength: &gt; 25 MPa</p>
              <p>Sealing Temp: 140-160°C</p>
              <p className="mt-4 text-gray-500">// Optimized for high-speed automated filling lines.</p>
            </div>
          )
        }
      ]}
      faqs={[
        { question: "How does reduce waste improve ROI?", answer: "By reducing material waste and optimizing barrier performance, brands see a 15% drop in spoilage." },
        { question: "Is this compliant with FDA/BRC standards?", answer: "Yes, our manufacturing processes strictly adhere to global safety and quality certifications." }
      ]}
    />
  );
};

export default WasteReductionPackagingStrategiesPage;
