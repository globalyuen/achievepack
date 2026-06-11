import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { FileText, Shield, Layers, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TechnicalDataSheetCategoryPage() {
  const sections = [
    {
      id: 'tds-directory',
      title: 'Packaging Technical Data Sheet (TDS) Directory',
      icon: <FileText className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            Technical Data Sheets (TDS) provide validated test reports detailing the physical properties, lamination thickness, polymer compositions, and gas barriers of our packaging films. Browse our complete structural directory below:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-black">
            <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 flex items-center gap-2">🌱 Compostable Series TDS</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li>• <Link to="/spec/compostable-pouch-geo" className="underline hover:text-green-800">Compostable Triplex Met-Cellulose (High-Barrier)</Link></li>
                <li>• <Link to="/materials/kraft-low-barrier" className="underline hover:text-green-800">Kraft Paper + PLA Duplex (Low-Barrier)</Link></li>
                <li>• <Link to="/materials/plastic-free-kraft" className="underline hover:text-green-800">Plastic-Free Aqueous Coated Kraft (New)</Link></li>
              </ul>
            </div>
            
            <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl uppercase mb-3 flex items-center gap-2">♻️ Recyclable Series TDS</h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li>• <Link to="/spec/mono-pe-duplex-clear" className="underline hover:text-blue-800">100% Recyclable Mono-PE Duplex (Clear)</Link></li>
                <li>• <Link to="/materials/recyclable-mono-pp" className="underline hover:text-blue-800">100% Recyclable Mono-PP Laminate</Link></li>
                <li>• <Link to="/materials/bio-pe" className="underline hover:text-blue-800">Sugarcane-Based I'm green™ Bio-PE Pouch</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'understanding-tds',
      title: 'Understanding TDS Parameters (OTR & WVTR)',
      icon: <Layers className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Procurement teams and packaging engineers audit OTR and WVTR values to secure exact food shelf-lives. These parameters measure how much gas passes through a square meter of film in 24 hours under standard lab conditions:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">Oxygen Transmission Rate (OTR)</h4>
              <p className="text-sm font-medium mb-3 text-neutral-700">
                Measures cc/m²/24hr. Oxygen causes oxidation, leading to product staleness, oil rancidity, and color loss. Coffee and fat-heavy foods require OTR below 1.0.
              </p>
              <div className="font-mono text-xs bg-neutral-50 p-3 border-2 border-black">
                <strong>Compostable Met-Cellulose OTR:</strong> &lt; 0.5 cc/m²/24hr
              </div>
            </div>
            
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">Water Vapor Transmission Rate (WVTR)</h4>
              <p className="text-sm font-medium mb-3 text-neutral-700">
                Measures g/m²/24hr. Moisture transmission causes crisp snacks to go soggy, or dry powders to cake and clump. Moisture barriers protect dry ingredients.
              </p>
              <div className="font-mono text-xs bg-neutral-50 p-3 border-2 border-black">
                <strong>Compostable Met-Cellulose WVTR:</strong> &lt; 0.8 g/m²/24hr
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Industry Standard Certifications',
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            All materials detailed on our Technical Data Sheets carry independent certifications to verify environmental compliance and food contact safety:
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">Certification Mark</th>
                  <th className="p-4">Standard Body</th>
                  <th className="p-4">Compliance Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">BPI Certified</td>
                  <td className="p-4">Biodegradable Products Institute (USA)</td>
                  <td className="p-4">Meets ASTM D6400 specs for compostability in municipal facilities.</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">OK Compost HOME / Industrial</td>
                  <td className="p-4">TÜV Austria</td>
                  <td className="p-4">Meets European EN 13432 compost standards for backyard or commercial bins.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">GRS (Global Recycled Standard)</td>
                  <td className="p-4">Textile Exchange</td>
                  <td className="p-4">Validates post-consumer recycled (PCR) content percentages.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: "What is a packaging Technical Data Sheet (TDS)?",
      a: "A Technical Data Sheet is a document detailing the physical properties, polymer layers, tensile strength, seal strength, thickness tolerances, OTR (Oxygen Transmission Rate), and WVTR (Water Vapor Transmission Rate) of a specific packaging material."
    },
    {
      q: "How do I request a custom TDS for a retail audit?",
      a: "Please email our technical team (ryan@achievepack.com) specifying the pouch structure you are interested in. We will provide PDF sheets and matching BPI/TÜV certificate numbers within 24 hours."
    },
    {
      q: "What is the difference between OTR and WVTR?",
      a: "OTR measures how much oxygen passes through the film (critical for preventing oxidation and staleness), while WVTR measures how much moisture vapor passes through (critical for preventing sogginess and dry-caking)."
    }
  ]

  return (
    <BlogArticleTemplate
      title="Packaging Technical Data Sheets (TDS) Directory | POUCH.ECO"
      metaDescription="Access packaging Technical Data Sheets (TDS). Compare lamination OTR/WVTR gas barrier ratings, material thickness tolerances, and compostable certificates."
      canonicalUrl="https://pouch.eco/category/packaging-technical-data-sheet"
      heroTitle={
        <>
          Packaging Technical Data<br />
          <span className="text-[#10b981]">Sheets (TDS) Directory</span>
        </>
      }
      heroSubtitle="Verify barrier specifications. Index of lamination thickness tolerances, oxygen/moisture transmission ratings, and international environmental compliance certificates."
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="TECHNICAL_SPECS"
      categoryColor="#10b981"
      readTime="5 min read"
      sections={sections}
      faqSections={faqSections}
      ctaTitle="Request Customized TDS Reports"
      ctaDescription="Need specific tensile reports, migration tests, or co-branding BPI sublicenses? Connect with our R&D packaging lab."
      achievePackLink="https://achievepack.com/materials/data-sheet"
      achievePackText="Need full, downloadable enterprise Material Safety Data Sheets (MSDS)?"
    />
  )
}
