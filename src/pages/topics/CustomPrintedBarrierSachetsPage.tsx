import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Helmet } from 'react-helmet-async';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  "en": {
    "title": "Custom Printed Barrier Sachets",
    "description": "Premium sustainable packaging solution for custom printed barrier sachets.",
    "hook": "We know the sinking feeling of opening a shipping box only to find your premium product crushed...",
    "pain_points": [
      {
        "num": "01",
        "problem": "Seal Failures",
        "solution": "We use a 15mm reinforced seal to ensure product integrity."
      },
      {
        "num": "02",
        "problem": "Barrier Issues",
        "solution": "Advanced multi-layer barrier options tailored to your product needs."
      }
    ],
    "engineering_notebook": "In my 14 years in packaging design, I've seen countless failures from poor material choices. That's why we over-engineer our barrier layers. - Ryan Wong, Co-Founder",
    "schema_faq": [
      {
        "q": "Is it recyclable?",
        "a": "Yes, depending on the material configuration chosen."
      }
    ]
  },
  "es": {
    "title": "Custom Printed Barrier Sachets (ES)",
    "description": "Solución de embalaje sostenible premium.",
    "hook": "Conocemos la sensación de decepción...",
    "pain_points": [],
    "engineering_notebook": "En mis 14 años...",
    "schema_faq": []
  },
  "fr": {
    "title": "Custom Printed Barrier Sachets (FR)",
    "description": "Solution d'emballage durable premium.",
    "hook": "Nous connaissons le sentiment...",
    "pain_points": [],
    "engineering_notebook": "Au cours de mes 14 années...",
    "schema_faq": []
  },
  "zh-tw": {
    "title": "Custom Printed Barrier Sachets (TW)",
    "description": "優質的永續包裝解決方案。",
    "hook": "我們了解打開包裝箱卻發現產品受損的沮喪感...",
    "pain_points": [],
    "engineering_notebook": "在我的14年包裝設計經驗中...",
    "schema_faq": []
  }
};

export default function CustomPrintedBarrierSachetsPage() {
  const isPouchDomain = getDomain() === 'pouch';
  const lang = 'en';
  const t = localTranslations[lang] || localTranslations['en'];
  
  return (
    <SEOPageLayout title={t.title} description={t.description}>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Helmet>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
        <img src="/imgs/infographics/custom-printed-barrier-sachets-infographic-5.png" alt={t.title} className="w-full max-w-lg mx-auto mb-8 rounded-xl shadow-lg" />
        <p className="text-lg mb-8">{t.hook}</p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pain Points & Solutions</h2>
          <div className="grid gap-4">
            {t.pain_points.map((p, idx) => (
              <div key={idx} className="bg-neutral-900 text-white p-6 rounded-xl">
                <span className="text-emerald-500 font-bold mr-2">{p.num}</span>
                <span className="font-semibold">{p.problem}</span>
                <p className="mt-2 text-gray-300">✅ Solution: {p.solution}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-12">
          <h4 className="font-bold text-amber-900 mb-2">🔬 From Ryan Wong's Engineering Notebook</h4>
          <p className="italic text-amber-800">"{t.engineering_notebook}"</p>
        </div>
      </div>
    </SEOPageLayout>
  );
}
