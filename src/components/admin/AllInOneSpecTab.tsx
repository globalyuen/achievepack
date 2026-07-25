import React, { useState, useEffect } from 'react';
import { Download, FileText, CheckCircle2, ShieldCheck, Sparkles, Box, Layers, RefreshCw, Printer, Mail } from 'lucide-react';

export interface AllInOneSpecData {
  customerName: string;
  projectTitle: string;
  poBatchNo: string;
  issueDate: string;
  pouchShape: string;
  materialStructure: string;
  customWidthInch: string;
  customHeightInch: string;
  customGussetInch: string;
  customWidthMm: string;
  customHeightMm: string;
  customGussetMm: string;
  presetCapacity: string;
  thicknessMil: string;
  thicknessMicron: string;
  closureAddon: string;
  valveAddon: boolean;
  windowAddon: string;
  orderQuantity: string;
  notes: string;
}

const MATERIAL_CATALOG = [
  // 1. PCR
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Duplex Clear (12µm PCR-PET / 60µm PE)', code: 'PCR-PET-CLR', ecoBadge: 'recycle-7', otr: '< 1.5', wvtr: '< 2.0' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Duplex Clear (20µm PCR-OPP / 50µm CPP)', code: 'PCR-PP-CLR', ecoBadge: 'recycle-5', otr: '< 2.0', wvtr: '< 2.5' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Duplex No Window (12µm PCR-PET / 70µm White PE)', code: 'PCR-PET-WHT', ecoBadge: 'recycle-7', otr: '< 1.5', wvtr: '< 1.8' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Duplex No Window (20µm Matt PCR-OPP / 60µm White CPP)', code: 'PCR-PP-WHT', ecoBadge: 'recycle-5', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Triplex Metalised (12µm PCR-PET / 12µm VMPET / 60µm PE)', code: 'PCR-PET-VMPET', ecoBadge: 'recycle-7', otr: '< 0.5', wvtr: '< 0.8' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Triplex Metalised (20µm PCR-OPP / 12µm VMCPP / 50µm CPP)', code: 'PCR-PP-VMCPP', ecoBadge: 'recycle-5', otr: '< 0.8', wvtr: '< 1.0' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Triplex Aluminum (12µm PCR-PET / 7µm AL / 60µm PE)', code: 'PCR-PET-AL', ecoBadge: 'recycle-7', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Triplex Aluminum (20µm PCR-OPP / 7µm AL / 50µm CPP)', code: 'PCR-PP-AL', ecoBadge: 'recycle-5', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Kraft Triplex Clear (40g Kraft / 12µm PCR-PET / 50µm PE)', code: 'PCR-KRAFT-CLR', ecoBadge: 'recycle-7', otr: '< 1.8', wvtr: '< 2.0' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Kraft Triplex Clear (40g Kraft / 20µm PCR-OPP / 50µm CPP)', code: 'PCR-KRAFT-CPP', ecoBadge: 'recycle-5', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Kraft Quadlex Aluminum (40g Kraft / 12µm PCR-PET / 7µm AL / 50µm PE)', code: 'PCR-KRAFT-AL', ecoBadge: 'recycle-7', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Kraft Quadlex Aluminum (40g Kraft / 20µm PCR-OPP / 7µm AL / 50µm CPP)', code: 'PCR-KRAFT-PP-AL', ecoBadge: 'recycle-5', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR Kraft VMPET (40g Kraft / 12µm PCR-VMPET / 50µm PE)', code: 'PCR-KRAFT-VMPET', ecoBadge: 'recycle-7', otr: '< 0.6', wvtr: '< 0.9' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR Kraft Duplex Low (50g Kraft / 40µm PCR-PE)', code: 'PCR-KRAFT-LOW', ecoBadge: 'recycle-4', otr: '< 5.0', wvtr: '< 5.0' },

  // 2. Bio-PE
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Duplex Clear (12µm PET / 60µm Bio-PE)', code: 'BIOPE-PET-CLR', ecoBadge: 'bio-pe', otr: '< 1.5', wvtr: '< 2.0' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Duplex Clear (20µm OPP / 50µm Bio-CPP)', code: 'BIOPE-PP-CLR', ecoBadge: 'bio-pe', otr: '< 2.0', wvtr: '< 2.5' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Duplex No Window (12µm PET / 70µm Bio-PE White)', code: 'BIOPE-PET-WHT', ecoBadge: 'bio-pe', otr: '< 1.5', wvtr: '< 1.8' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Duplex No Window (20µm Matt OPP / 60µm Bio-CPP White)', code: 'BIOPE-PP-WHT', ecoBadge: 'bio-pe', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Triplex Metalised (12µm PET / 12µm VMPET / 60µm Bio-PE)', code: 'BIOPE-PET-VMPET', ecoBadge: 'bio-pe', otr: '< 0.5', wvtr: '< 0.8' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Triplex Metalised (20µm OPP / 12µm VMCPP / 50µm Bio-CPP)', code: 'BIOPE-PP-VMCPP', ecoBadge: 'bio-pe', otr: '< 0.8', wvtr: '< 1.0' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Triplex Aluminum (12µm PET / 7µm AL / 60µm Bio-PE)', code: 'BIOPE-PET-AL', ecoBadge: 'bio-pe', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Triplex Aluminum (20µm OPP / 7µm AL / 50µm Bio-CPP)', code: 'BIOPE-PP-AL', ecoBadge: 'bio-pe', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Kraft Triplex Clear (40g Kraft / 12µm PET / 50µm Bio-PE)', code: 'BIOPE-KRAFT-CLR', ecoBadge: 'bio-pe', otr: '< 1.8', wvtr: '< 2.0' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Kraft Triplex Clear (40g Kraft / 20µm OPP / 50µm Bio-CPP)', code: 'BIOPE-KRAFT-CPP', ecoBadge: 'bio-pe', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Kraft Quadlex Aluminum (40g Kraft / 12µm PET / 7µm AL / 50µm Bio-PE)', code: 'BIOPE-KRAFT-AL', ecoBadge: 'bio-pe', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Kraft Quadlex Aluminum (40g Kraft / 20µm OPP / 7µm AL / 50µm Bio-CPP)', code: 'BIOPE-KRAFT-PP-AL', ecoBadge: 'bio-pe', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE Kraft VMPET (40g Kraft / 12µm VMPET / 50µm Bio-PE)', code: 'BIOPE-KRAFT-VMPET', ecoBadge: 'bio-pe', otr: '< 0.6', wvtr: '< 0.9' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE Kraft Duplex Low (50g Kraft / 40µm Bio-PE)', code: 'BIOPE-KRAFT-LOW', ecoBadge: 'bio-pe', otr: '< 5.0', wvtr: '< 5.0' },

  // 3. Mono-Material
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PE Duplex Clear (25µm MDO-PE / 60µm PE)', code: 'MONO-PE-CLR', ecoBadge: 'recycle-4', otr: '< 2.0', wvtr: '< 2.5' },
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PE Duplex No Window (25µm MDO-PE / 70µm White PE)', code: 'MONO-PE-WHT', ecoBadge: 'recycle-4', otr: '< 1.8', wvtr: '< 2.2' },
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PP Duplex Clear (20µm OPP / 50µm CPP)', code: 'MONO-PP-CLR', ecoBadge: 'recycle-5', otr: '< 2.5', wvtr: '< 2.8' },
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PP Duplex No Window (20µm Matt OPP / 60µm White CPP)', code: 'MONO-PP-WHT', ecoBadge: 'recycle-5', otr: '< 2.2', wvtr: '< 2.5' },

  // 4. Compostable
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Cello Triplex Highest Barrier (20µm NatureFlex / 15µm NKME / 50µm Bio-PBS)', code: 'BIO-CELLO-HIGH', ecoBadge: 'seedling', otr: '< 0.8', wvtr: '< 1.0' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Cello Triplex Metalised (20µm NatureFlex / 12µm VM Cello / 50µm PLA)', code: 'BIO-CELLO-VM', ecoBadge: 'seedling', otr: '< 1.2', wvtr: '< 1.5' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Kraft PBAT Low Barrier (40g FSC Kraft / 40µm PBAT/PLA)', code: 'BIO-KRAFT-PBAT', ecoBadge: 'seedling', otr: '< 8.0', wvtr: '< 8.0' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Kraft VM Cello (40g FSC Kraft / 12µm VM Cello / 50µm Bio-PBS)', code: 'BIO-KRAFT-VM', ecoBadge: 'seedling', otr: '< 1.5', wvtr: '< 1.8' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Compostable Material Structure Guide (EN 13432 & ASTM D6400)', code: 'BIO-GUIDE', ecoBadge: 'seedling', otr: 'N/A', wvtr: 'N/A' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Compostable Pouch GEO Optimization Structure', code: 'BIO-GEO', ecoBadge: 'seedling', otr: 'N/A', wvtr: 'N/A' }
];

export default function AllInOneSpecTab() {
  const [data, setData] = useState<AllInOneSpecData>({
    customerName: 'Acme Specialty Roasters',
    projectTitle: '12oz Custom Eco Stand-Up Coffee Pouch',
    poBatchNo: 'AP-SPEC-2026-9901',
    issueDate: new Date().toISOString().split('T')[0],
    pouchShape: 'Stand-Up Pouch / Doypack',
    materialStructure: MATERIAL_CATALOG[0].name,
    customWidthInch: '6.0',
    customHeightInch: '9.0',
    customGussetInch: '3.0',
    customWidthMm: '150',
    customHeightMm: '230',
    customGussetMm: '75',
    presetCapacity: '12 oz / 340g (Coffee Beans)',
    thicknessMil: '4.5 mil',
    thicknessMicron: '115 µm',
    closureAddon: 'Press-to-Close Zipper',
    valveAddon: true,
    windowAddon: 'Clear Window',
    orderQuantity: '5,000 pcs',
    notes: 'Food-grade cleanroom manufacture. Pre-production video proofing required.'
  });

  const selectedMaterialObj = MATERIAL_CATALOG.find(m => m.name === data.materialStructure) || MATERIAL_CATALOG[0];

  const handlePrint = () => {
    document.title = `${data.customerName} - All-in-One Spec & Technical Datasheet`;
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            All In One Spec Engine
          </div>
          <h2 className="text-xl font-black">All In One Packaging Spec & Compliance Generator</h2>
          <p className="text-xs text-slate-400 mt-1">Configure shapes, 38 material structures, Inches (mm) dimensions, add-ons, and print professional A4 letterhead reports.</p>
        </div>

        <button
          onClick={handlePrint}
          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all shrink-0"
        >
          <Printer className="w-4 h-4" /> Download / Print A4 PDF Spec
        </button>
      </div>

      {/* Form Controls & Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Inputs (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <h3 className="font-extrabold text-slate-900 text-sm border-b pb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            1. Client & Project Information
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Customer / Brand Name</label>
              <input
                type="text"
                value={data.customerName}
                onChange={(e) => setData({ ...data, customerName: e.target.value })}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">PO / Batch Number</label>
              <input
                type="text"
                value={data.poBatchNo}
                onChange={(e) => setData({ ...data, poBatchNo: e.target.value })}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Project Title</label>
            <input
              type="text"
              value={data.projectTitle}
              onChange={(e) => setData({ ...data, projectTitle: e.target.value })}
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <h3 className="font-extrabold text-slate-900 text-sm border-b pb-2 pt-2 flex items-center gap-2">
            <Box className="w-4 h-4 text-emerald-600" />
            2. Pouch Shape & Dimensions (Inches first, mm second)
          </h3>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Pouch Shape</label>
            <select
              value={data.pouchShape}
              onChange={(e) => setData({ ...data, pouchShape: e.target.value })}
              className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 font-medium"
            >
              <option>Stand-Up Pouch / Doypack</option>
              <option>Flat Bottom Pouch / Box Bottom</option>
              <option>Side Gusset Pouch / Quad Seal</option>
              <option>Retort Pouch (Autoclave Sterilization)</option>
              <option>Spout Pouch / Fitment Liquid Bag</option>
              <option>Rollstock Film Reels (Automated VFFS)</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Width (in)</label>
              <input
                type="text"
                value={data.customWidthInch}
                onChange={(e) => setData({ ...data, customWidthInch: e.target.value, customWidthMm: (parseFloat(e.target.value || '0') * 25.4).toFixed(0) })}
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Height (in)</label>
              <input
                type="text"
                value={data.customHeightInch}
                onChange={(e) => setData({ ...data, customHeightInch: e.target.value, customHeightMm: (parseFloat(e.target.value || '0') * 25.4).toFixed(0) })}
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Gusset (in)</label>
              <input
                type="text"
                value={data.customGussetInch}
                onChange={(e) => setData({ ...data, customGussetInch: e.target.value, customGussetMm: (parseFloat(e.target.value || '0') * 25.4).toFixed(0) })}
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-100 text-[11px] font-mono text-slate-700">
            Formatted Output: {data.customWidthInch}" W x {data.customHeightInch}" H + {data.customGussetInch}" G ({data.customWidthMm}mm W x {data.customHeightMm}mm H + {data.customGussetMm}mm G)
          </div>

          <h3 className="font-extrabold text-slate-900 text-sm border-b pb-2 pt-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            3. Material Structure (38 Canonical Catalog)
          </h3>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Material Catalog</label>
            <select
              value={data.materialStructure}
              onChange={(e) => setData({ ...data, materialStructure: e.target.value })}
              className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 text-[11px] font-medium"
            >
              {MATERIAL_CATALOG.map((m, idx) => (
                <option key={idx} value={m.name}>{m.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Closure Add-on</label>
              <select
                value={data.closureAddon}
                onChange={(e) => setData({ ...data, closureAddon: e.target.value })}
                className="w-full p-2 border border-slate-300 rounded-lg"
              >
                <option>No Zipper</option>
                <option>Press-to-Close Zipper</option>
                <option>Pocket Zipper (Front Position)</option>
                <option>Child-Resistant Zipper</option>
                <option>Slider Zipper</option>
                <option>Tin Tie (Coffee Tie)</option>
                <option>Spout Fitment (10mm / 15mm)</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">One-Way Valve</label>
              <select
                value={data.valveAddon ? 'Yes' : 'No'}
                onChange={(e) => setData({ ...data, valveAddon: e.target.value === 'Yes' })}
                className="w-full p-2 border border-slate-300 rounded-lg"
              >
                <option value="Yes">Yes (One-Way Degassing Coffee Valve)</option>
                <option value="No">No Valve</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Printable A4 Letterhead Document Preview (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-300 shadow-2xl font-serif text-slate-900 space-y-5 relative">
          
          {/* Letterhead Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-sans font-black text-xl tracking-tight text-slate-900">ACHIEVE PACK</span>
                <span className="font-sans text-xs bg-slate-900 text-white px-2 py-0.5 rounded font-bold uppercase">Pouch Eco</span>
              </div>
              <p className="font-sans text-[10px] text-slate-500 uppercase tracking-widest">Global Flexible Packaging Engineering & Quality Control Laboratory</p>
            </div>
            <div className="text-right font-sans text-[11px] text-slate-600 space-y-0.5">
              <p className="font-bold text-slate-900">ALL IN ONE SPEC & COMPLIANCE REPORT</p>
              <p>Doc ID: <span className="font-mono">{data.poBatchNo}</span></p>
              <p>Issue Date: {data.issueDate}</p>
            </div>
          </div>

          {/* Client & Project Overview Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans text-xs grid grid-cols-2 gap-3">
            <div>
              <span className="text-slate-500 font-bold uppercase text-[10px] block">Target Client / Brand</span>
              <span className="font-extrabold text-slate-900 text-sm">{data.customerName}</span>
            </div>
            <div>
              <span className="text-slate-500 font-bold uppercase text-[10px] block">Project Description</span>
              <span className="font-bold text-slate-800">{data.projectTitle}</span>
            </div>
          </div>

          {/* Section 1: Pouch Geometry & Dimensions */}
          <div className="font-sans text-xs space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b pb-1 border-slate-300">1. Pouch Geometry & Scale Specifications</h4>
            <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-3 rounded-lg border border-slate-200">
              <div>
                <p><strong>Pouch Shape:</strong> {data.pouchShape}</p>
                <p><strong>Dimensions (Inches):</strong> {data.customWidthInch}" W x {data.customHeightInch}" H + {data.customGussetInch}" G</p>
                <p><strong>Dimensions (mm):</strong> {data.customWidthMm}mm W x {data.customHeightMm}mm H + {data.customGussetMm}mm G</p>
              </div>
              <div>
                <p><strong>355ml Reference Can Model:</strong> 2.6" x 4.8" (66mm x 122mm)</p>
                <p><strong>Thickness:</strong> {data.thicknessMil} ({data.thicknessMicron})</p>
                <p><strong>Capacity Rating:</strong> {data.presetCapacity}</p>
              </div>
            </div>
          </div>

          {/* Section 2: Material Lamination & Barrier Ratings */}
          <div className="font-sans text-xs space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b pb-1 border-slate-300">2. Material Lamination Structure & Barrier Performance</h4>
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 font-bold text-slate-700">
                  <th className="p-2">Material Code</th>
                  <th className="p-2">Full Lamination Structure</th>
                  <th className="p-2">OTR Rating</th>
                  <th className="p-2">WVTR Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 font-mono font-bold">{selectedMaterialObj.code}</td>
                  <td className="p-2 font-medium">{selectedMaterialObj.name}</td>
                  <td className="p-2 font-bold text-slate-900">{selectedMaterialObj.otr} cc/m²/24h</td>
                  <td className="p-2 font-bold text-slate-900">{selectedMaterialObj.wvtr} g/m²/24h</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: Add-on Accessories & Closures */}
          <div className="font-sans text-xs space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b pb-1 border-slate-300">3. Closure Add-ons & Functional Accessories</h4>
            <div className="flex gap-4 items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
              <img src="/imgs/store/closure/normal-zipper.webp" alt="Zipper" className="h-10 object-contain" />
              <div>
                <p><strong>Primary Closure:</strong> {data.closureAddon}</p>
                <p><strong>Degassing Valve:</strong> {data.valveAddon ? 'One-Way Degassing Coffee Valve (Included)' : 'None'}</p>
                <p><strong>Surface Varnish:</strong> Soft-Touch Matte Varnish with Spot Gloss UV Option</p>
              </div>
            </div>
          </div>

          {/* Section 4: Printable Eco Logos & Food Safety Standards */}
          <div className="font-sans text-xs space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b pb-1 border-slate-300">4. Authorized Eco Logos & Food Safety Certifications</h4>
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="space-y-1">
                <p className="font-bold text-slate-900">✅ ISO 22000 Food Safety System Certified</p>
                <p className="font-bold text-slate-900">✅ US FDA 21 CFR Direct Food Contact Compliant</p>
                <p className="text-slate-500 text-[10px]">Zero Intentionally Added BPA, Phthalates, Heavy Metals, or PFAS</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <img src="/imgs/cert/eco-logo-biope.png" alt="Bio-PE" className="h-8 object-contain" />
                <img src="/imgs/cert/compostable-logo.png" alt="Seedling" className="h-8 object-contain" />
                <img src="/imgs/cert/recycle_4_pe_logo.png" alt="Recycle 4" className="h-8 object-contain" />
                <img src="/imgs/cert/recycle_7_other_logo.png" alt="Recycle 7" className="h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Section 5: Engineering Signoff */}
          <div className="font-sans text-[11px] pt-4 border-t-2 border-slate-900 flex justify-between items-end">
            <div>
              <p className="font-bold text-slate-900">Packaging Development Specialist</p>
              <p className="text-slate-600">Ryan Wong | Co-Founder & Packaging Engineer (14+ Yrs Exp)</p>
              <p className="text-slate-400 text-[9px] mt-0.5">Achieve Pack Quality Control Lab • GRS & FSC Verified</p>
            </div>
            <div className="text-right">
              <div className="font-serif italic font-bold text-slate-800 text-sm mb-1">Ryan Wong</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest">OFFICIAL QC STAMP</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
