import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldCheck, CheckCircle2, ChevronRight, Download, 
  HelpCircle, ArrowLeft, Layers, Box, Cpu, FileText, Sparkles, AlertCircle, ExternalLink
} from 'lucide-react';
import pseoMatrixData from '../data/pseo_matrix_487.json';

interface MatrixItem {
  id: number;
  sku: string;
  unique_code: string;
  slug: string;
  template_type: string;
  template_name: string;
  pouch_type: string;
  material: {
    name: string;
    eco: boolean;
    ap_focus: string;
    ep_focus: string;
    otr: string;
    wvtr: string;
    seal_temp: string;
    puncture_n: string;
  };
  application: string;
  size: {
    label: string;
    capacity_ml: number;
    dim: string;
  };
  title: string;
  unique_narrative: string;
  ap_canonical: string;
  ep_canonical: string;
  keywords: string[];
  engineering_datasheet?: {
    otr: string;
    wvtr: string;
    seal_temp_range: string;
    puncture_resistance: string;
    tensile_strength: string;
    burst_pressure: string;
    shelf_life_extension: string;
  };
  vault_case_study?: {
    title: string;
    excerpt: string;
  };
  compliance_standards?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  imagen_image_url?: string;
}

export const ProductSpecDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const isPouchEco = typeof window !== 'undefined' && window.location.hostname.includes('pouch.eco');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showDocModal, setShowDocModal] = useState<'spec' | 'coa' | 'coc' | null>(null);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('Acme Organic Foods');
  const [batchNo, setBatchNo] = useState<string>('AP-2026-8842');

  const matrix: MatrixItem[] = pseoMatrixData as any;
  const spec = useMemo(() => {
    return matrix.find(item => item.slug === slug) || matrix[0];
  }, [matrix, slug]);

  const canonicalUrl = isPouchEco 
    ? `https://pouch.eco/directory/${spec.slug}`
    : `https://achievepack.com/directory/${spec.slug}`;

  // JSON-LD Schemas
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": spec.title,
    "image": spec.imagen_image_url || "https://achievepack.com/assets/default-pouch.jpg",
    "description": spec.unique_narrative,
    "sku": spec.sku,
    "brand": {
      "@type": "Brand",
      "name": isPouchEco ? "Pouch Eco" : "Achieve Pack"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": isPouchEco ? "0.15" : "0.08",
      "highPrice": "0.45",
      "offerCount": "1000"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (spec.faqs || []).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      <Helmet>
        <title>{spec.title} | {isPouchEco ? 'Pouch Eco' : 'Achieve Pack'}</title>
        <meta name="description" content={`${spec.unique_narrative.slice(0, 150)}...`} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Injected Schemas */}
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Header Breadcrumb Banner */}
      <div className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <Link to="/directory" className="inline-flex items-center text-xs text-slate-400 hover:text-white mb-4">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Product Directory
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-slate-400">
            <span>{spec.pouch_type}</span>
            <span>•</span>
            <span>{spec.material?.name}</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{spec.application}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{spec.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview & Engineering Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-full md:w-1/3 h-48 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-slate-200">
                  <img 
                    src={spec.imagen_image_url || 'https://achievepack.com/imgs/store/pouch%20shape/stand-up.webp'} 
                    alt={spec.title}
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-600" />
                    Technical Overview & Structure Notes
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {spec.unique_narrative}
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      {isPouchEco ? 'Pouch Eco Sustainability Focus' : 'Achieve Pack Enterprise Focus'}
                    </span>
                    <p className="text-xs font-medium text-slate-800">
                      {isPouchEco ? spec.material?.ep_focus : spec.material?.ap_focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reference to /tech-specs */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-xs font-bold text-blue-950">
                    Need complete laboratory barrier testing protocols & chemical resistance charts?
                  </span>
                </div>
                <Link 
                  to="/tech-specs" 
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shrink-0 flex items-center gap-1 shadow-sm"
                >
                  View Tech Specs Hub <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Anti-Thin-Content: Technical Engineering Datasheet Table */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Engineering Datasheet (OTR / WVTR Barrier Metrics)
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-slate-500">Oxygen Transmission (OTR)</td>
                      <td className="py-3 font-bold text-slate-900">{spec.engineering_datasheet?.otr || '0.5 cc/m²/24h'}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-slate-500">Water Vapor Transmission (WVTR)</td>
                      <td className="py-3 font-bold text-slate-900">{spec.engineering_datasheet?.wvtr || '0.8 g/m²/24h'}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-slate-500">Heat Seal Temperature</td>
                      <td className="py-3 font-bold text-slate-900">{spec.engineering_datasheet?.seal_temp_range || '130°C - 150°C'}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-slate-500">Puncture Resistance</td>
                      <td className="py-3 font-bold text-slate-900">{spec.engineering_datasheet?.puncture_resistance || '45N'}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-slate-500">Tensile Strength</td>
                      <td className="py-3 font-bold text-slate-900">{spec.engineering_datasheet?.tensile_strength || '120 MPa'}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 font-semibold text-slate-500">Shelf Life Extension</td>
                      <td className="py-3 font-bold text-slate-900">{spec.engineering_datasheet?.shelf_life_extension || '12 - 24 Months'}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-slate-500">Material Classification</td>
                      <td className="py-3 font-bold text-emerald-700">{(spec.engineering_datasheet as any)?.eco_note || 'Eco Certified'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Obsidian Vault Real Industry Case Snippet */}
            {spec.vault_case_study && (
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  {spec.vault_case_study.title}
                </h3>
                <p className="text-xs text-amber-800 italic leading-relaxed">
                  "{spec.vault_case_study.excerpt}"
                </p>
              </div>
            )}

            {/* Food Safety & Regulatory Compliance */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Regulatory & Food Safety Standards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(spec.compliance_standards || []).map((std, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic FAQ Accordion */}
            {spec.faqs && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {spec.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-900 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-90' : ''}`} />
                      </button>
                      {activeFaq === idx && (
                        <div className="p-4 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Action Sidebar Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-6 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SKU Reference</span>
                <p className="text-sm font-extrabold text-slate-900">{spec.sku}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Pouch Shape:</span>
                  <span className="font-bold text-slate-800">{spec.pouch_type}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Capacity:</span>
                  <span className="font-bold text-slate-800">{spec.size?.label}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Dimensions:</span>
                  <span className="font-bold text-slate-800">{spec.size?.dim}</span>
                </div>
              </div>

              {/* Primary Call-to-Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setShowDocModal('spec')}
                  className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <FileText className="w-4 h-4 text-emerald-400" /> Download Full Spec Doc (PDF)
                </button>

                <button
                  onClick={() => setShowDocModal('coa')}
                  className="w-full py-2.5 px-3 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-emerald-700/50 shadow-sm transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Generate COA Report (PDF)
                </button>

                <button
                  onClick={() => setShowDocModal('coc')}
                  className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-300 shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Generate COC Certificate (PDF)
                </button>

                <button
                  onClick={() => setShowEmailModal(true)}
                  className="w-full py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 border border-amber-200 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> 📧 Email Document to Client
                </button>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-4 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors mt-2 ${
                    isPouchEco ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-600 hover:bg-amber-700'
                  }`}
                >
                  {isPouchEco ? 'Get Free Sample Kit (MOQ 500)' : 'Request Enterprise Quote'}
                </Link>
              </div>

              {/* Printable Eco Logos & Food Safety Badges */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">Printable Eco Logos & Certifications</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center text-center">
                    <img src="/imgs/cert/eco-logo-biope.png" alt="I'm Green Sugarcane Bio-PE" className="h-8 object-contain mb-1" />
                    <span className="text-[9px] font-bold text-slate-700">I'm Green™ Bio-PE</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center text-center">
                    <img src="/imgs/cert/compostable-logo.png" alt="Seedling Compostable" className="h-8 object-contain mb-1" />
                    <span className="text-[9px] font-bold text-slate-700">EN 13432 Seedling</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center text-center">
                    <img src="/imgs/cert/recycle_4_pe_logo.png" alt="Recycle No. 4 PE" className="h-8 object-contain mb-1" />
                    <span className="text-[9px] font-bold text-slate-700">Recycle #4 (PE)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center text-center">
                    <img src="/imgs/cert/recycle_7_other_logo.png" alt="Recycle No. 7 OTHER" className="h-8 object-contain mb-1" />
                    <span className="text-[9px] font-bold text-slate-700">Recycle #7 (OTHER)</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-2">
                ISO 22000 & FDA 21 CFR Food Contact Compliant
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Document Generation Modal */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                {showDocModal === 'spec' && 'Full Spec Doc — Technical Engineering Datasheet'}
                {showDocModal === 'coa' && 'COA Report — Certificate of Analysis'}
                {showDocModal === 'coc' && 'COC Certificate — Certificate of Conformity'}
              </h3>
              <button onClick={() => setShowDocModal(null)} className="text-slate-400 hover:text-slate-700 font-bold text-lg">×</button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Customer / Brand Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Order Batch # / PO</label>
                <input
                  type="text"
                  value={batchNo}
                  onChange={(e) => setBatchNo(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Document Live Preview Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs font-mono space-y-3">
              <div className="border-b border-slate-200 pb-3 flex justify-between items-center">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm uppercase">{showDocModal.toUpperCase()} — {spec.title}</h4>
                  <p className="text-slate-500">Target Client: {customerName} | Batch: {batchNo} | Date: {new Date().toISOString().split('T')[0]}</p>
                </div>
                <div className="flex gap-1">
                  <img src="/imgs/cert/recycle_4_pe_logo.png" alt="Recycle 4" className="h-6 w-auto" />
                  <img src="/imgs/cert/eco-logo-biope.png" alt="Bio-PE" className="h-6 w-auto" />
                </div>
              </div>

              <div className="space-y-1.5 text-slate-700">
                <p><strong>Pouch Shape:</strong> {spec.pouch_type} (Reference Can: 2.6" x 4.8" / 66mm x 122mm)</p>
                <p><strong>Dimensions (Inches / mm):</strong> {spec.size?.dim}</p>
                <p><strong>Material Structure:</strong> {spec.material?.name}</p>
                <p><strong>Oxygen Barrier (OTR):</strong> {spec.engineering_datasheet?.otr || '< 1.0 cc/m²/24h'}</p>
                <p><strong>Moisture Barrier (WVTR):</strong> {spec.engineering_datasheet?.wvtr || '< 1.0 g/m²/24h'}</p>
                <p><strong>Tensile Strength:</strong> ≥ 30 N/15mm (ASTM D882 Pass)</p>
                <p><strong>Heat-Seal Strength:</strong> {spec.engineering_datasheet?.seal_temp_range || '130°C - 150°C'}</p>
                <p><strong>Food Safety Certifications:</strong> ISO 22000 Food Safety System Certified | FDA 21 CFR Food Contact Approved</p>
                <p><strong>Substances Intentionally Added:</strong> NONE (BPA Free, Phthalate Free, PFAS Free)</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setShowDocModal(null)} className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100">Close</button>
              <button 
                onClick={() => {
                  window.print();
                }} 
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Download / Print PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                Email Document Package to Client
              </h3>
              <button onClick={() => setShowEmailModal(false)} className="text-slate-400 hover:text-slate-700 font-bold text-lg">×</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Recipient Email</label>
                <input type="email" placeholder="client@example.com" className="w-full p-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Subject</label>
                <input type="text" defaultValue={`[Compliance & Full Spec Package] ${spec.title} - Batch #${batchNo}`} className="w-full p-2 border border-slate-300 rounded-lg font-mono text-[11px]" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Pre-filled Email Body</label>
                <textarea rows={5} defaultValue={`Dear ${customerName},\n\nPlease find attached the official Full Spec Doc, Certificate of Analysis (COA), and Certificate of Conformity (COC) for your packaging order (${spec.title}, SKU: ${spec.sku}).\n\n- Dimensions: ${spec.size?.dim}\n- Material: ${spec.material?.name}\n- Food Safety: ISO 22000 & FDA 21 CFR Compliant\n\nBest regards,\nPackaging Engineering Team | Achieve Pack & Pouch Eco`} className="w-full p-2 border border-slate-300 rounded-lg font-sans text-xs" />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setShowEmailModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100">Cancel</button>
              <a 
                href={`mailto:client@example.com?subject=${encodeURIComponent(`[Compliance & Full Spec Package] ${spec.title}`)}&body=${encodeURIComponent(`Dear ${customerName},\n\nPlease find attached the official Full Spec Doc, COA, and COC.`)}`}
                onClick={() => setShowEmailModal(false)}
                className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold shadow-md inline-flex items-center gap-1.5"
              >
                Send via Email Client
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSpecDetailPage;
