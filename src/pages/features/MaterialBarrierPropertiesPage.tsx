import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Droplets, Wind, ExternalLink, Info, CheckCircle, Target, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const propertiesData1 = [
  { material: 'OPP 20', o2: '1900', wvtr: '6' },
  { material: 'OPP 30', o2: '1800', wvtr: '5.8' },
  { material: 'OPP 40', o2: '1700', wvtr: '5.5' },
  { material: 'PET 12', o2: '85', wvtr: '55' },
  { material: 'NY 15', o2: '45', wvtr: '260' },
  { material: 'CPP 20', o2: '2000', wvtr: '6' },
  { material: 'CPP 30', o2: '1800', wvtr: '5.5' },
  { material: 'CPP 40', o2: '1700', wvtr: '5' },
  { material: 'VMCPP 25', o2: '25', wvtr: '1' },
  { material: 'VMPET 12', o2: '2', wvtr: '2' },
  { material: 'AL 7', o2: '1', wvtr: '1.4' },
];

const propertiesData2 = [
  { material: 'AL 9', o2: '1', wvtr: '1.1' },
  { material: 'LLDPE 40', o2: '5000', wvtr: '18' },
  { material: 'KOP 21', o2: '10', wvtr: '4' },
  { material: 'KNY 17', o2: '8', wvtr: '12' },
  { material: 'KPET 12', o2: '8', wvtr: '12' },
  { material: 'PEARL 30', o2: '2200', wvtr: '9' },
  { material: 'MAT OPP 20', o2: '1900', wvtr: '6' },
];

const MaterialBarrierPropertiesPage: React.FC = () => {
  const { t } = useTranslation()

  const sections = [
    {
      id: 'understanding-barriers',
      title: 'Understanding Barrier Metrics',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Wind className="w-4 h-4" />
              </div>
              <h3 className="bg-transparent font-bold text-blue-900 border-none inline-block pb-0 mb-0">O₂ Transmission Rate (O₂ TR)</h3>
            </div>
            <p className="text-sm text-blue-800 mb-2">Oxygen barrier performance.</p>
            <div className="text-xs font-mono bg-white border border-blue-100 px-3 py-2 rounded text-blue-700">
              Unit: cc/m² · 24hrs · atm (at 23°C, 0% RH)
            </div>
            <p className="text-xs text-blue-600 mt-2 italic">*Lower values indicate better oxygen barrier</p>
          </div>

          <div className="bg-primary-50 border border-primary-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Droplets className="w-4 h-4" />
              </div>
              <h3 className="bg-transparent font-bold text-primary-900 border-none inline-block pb-0 mb-0">Water Vapor Trans. Rate (WVTR)</h3>
            </div>
            <p className="text-sm text-primary-800 mb-2">Moisture barrier performance.</p>
            <div className="text-xs font-mono bg-white border border-primary-100 px-3 py-2 rounded text-primary-700">
              Unit: g/m² · 24hrs (at 38°C, 90% RH)
            </div>
            <p className="text-xs text-primary-600 mt-2 italic">*Lower values indicate better moisture barrier</p>
          </div>
        </div>
      )
    },
    {
      id: 'properties-data',
      title: 'Barrier Properties by Material',
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 mb-4">Values presented below are typical industry averages and may vary slightly based on specific film manufacturer, thickness tolerances, and exact environmental conditions during testing.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Table 1 */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-700 text-sm">
                    <th className="p-3 border-b border-neutral-200 font-bold w-[34%]">Material</th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-blue-800">O₂ TR<br/><span className="text-[10px] font-normal leading-tight block text-blue-600">cc/m² 24hrs<br/>23°C, 0% RH</span></th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-primary-800">WVTR<br/><span className="text-[10px] font-normal leading-tight block text-primary-600">g/m² 24hrs<br/>38°C, 90% RH</span></th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {propertiesData1.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="p-3 border-b border-neutral-100 font-medium text-sm">{row.material}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.o2}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table 2 */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm h-fit">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-700 text-sm">
                    <th className="p-3 border-b border-neutral-200 font-bold w-[34%]">Material</th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-blue-800">O₂ TR<br/><span className="text-[10px] font-normal leading-tight block text-blue-600">cc/m² 24hrs<br/>23°C, 0% RH</span></th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-primary-800">WVTR<br/><span className="text-[10px] font-normal leading-tight block text-primary-600">g/m² 24hrs<br/>38°C, 90% RH</span></th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {propertiesData2.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="p-3 border-b border-neutral-100 font-medium text-sm">{row.material}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.o2}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'insights',
      title: 'Key Insights & Abbreviations',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-white border border-neutral-200 p-6 rounded-xl mt-4">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">Standard Transparent Films (PET / NY / OPP)</strong> PET and NY offer significantly better oxygen barrier out-of-the-box compared to standard OPP.</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">Metallized Films (VMCPP / VMPET)</strong> Vacuum Metallized films vastly improve both moisture and oxygen barriers simultaneously, turning transparent films into high-barrier competitive options.</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">Aluminum Foil (AL)</strong> The absolute highest barrier available against oxygen and moisture, effectively reducing both transmission values down to ~1. Cannot be seen through.</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">PVDC Coated (KOP, KNY, KPET)</strong> The "K" prefix denotes PVDC (Polyvinylidene chloride) coating, which dramatically seals the barrier properties of standard transparent films while retaining full clarity.</div>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'What does WVTR stand for?', answer: 'Water Vapor Transmission Rate. It measures how much moisture can pass through the material over a 24-hour period. Lower numbers mean a better moisture barrier.' },
    { question: 'What does O2 TR stand for?', answer: 'Oxygen Transmission Rate. It measures how much oxygen passes through the material over 24 hours. A lower number indicates a stronger oxygen barrier, crucial for keeping food fresh.' },
    { question: 'Which material provides the absolute highest barrier?', answer: 'Aluminum Foil (AL 7 or AL 9) provides the best overall barrier against both oxygen and moisture, reducing transmission rates to near zero (~1).' },
    { question: 'Can I have a high barrier but remain transparent?', answer: 'Yes! Materials treated with PVDC (like KOP, KNY, KPET) or Aluminum Oxide (AlOx) coatings offer very strong barriers while keeping the film completely see-through.' }
  ]

  const relatedLinks = [
    { title: "Low Barrier Guide", url: "/features/low-barrier", description: "Learn about low barrier options." },
    { title: "Medium Barrier Guide", url: "/features/medium-barrier", description: "Learn about medium barrier options." },
    { title: "High Barrier Guide", url: "/features/high-barrier", description: "Learn about high barrier options." },
    { title: "Material Data Sheet", url: "/materials/data-sheet", description: "View structural data sheets." }
  ]

  return (
    <>
      <SEOPageLayout
        title={'Flexible Packaging Material Barrier Properties Data Sheet | Achieve Pack'}
        description={'Technical data sheet detailing Oxygen Transmission Rate (O2 TR) and Water Vapor Transmission Rate (WVTR) for transparent, metallized, and kraft pouch materials.'}
        keywords={['O2 TR', 'WVTR', 'barrier properties', 'aluminum foil barrier', 'packaging transmission rate', 'VMPET barrier', 'KOP barrier']}
        canonicalUrl="https://achievepack.com/features/material-barrier-properties"
        heroTitle={'Material Barrier Properties'}
        heroSubtitle={'Technical Comparison of Oxygen and Water Vapor Transmission Rates'}
        heroImage="/imgs/seo-photos/a_high_barrier_premium_protection_0120312.webp"
        heroImageAlt="Technical representation of material barrier characteristics"
        introSummary={'A comprehensive technical reference sheet providing statistical averages for O₂ TR and WVTR across common flexible packaging material layers.'}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={'Need Help Choosing the Right Barrier?'}
        ctaDescription={'Still confused about OTR and WVTR values? Contact our packaging engineers to find the precise material combination suited for your product\'s exact shelf-life requirements.'}
        ctaButtonText={'Contact Technical Support'}
        ctaButtonUrl="/contact"
      />
    </>
  )
}

export default MaterialBarrierPropertiesPage;
