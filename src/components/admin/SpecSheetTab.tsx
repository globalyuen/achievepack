import React, { useState, useEffect } from 'react';
import { Download, Plus, Trash2, Loader2, FileText, Check, Printer, FileCheck, Layers, FileCode, ShieldCheck, Truck, ClipboardList } from 'lucide-react';

interface SpecSheetData {
  customer: string;
  customerDesc: string;
  customerCode: string;
  materialStructure: string;
  achieveDescription: string;
  apnBarcode: string;
  revision: string;
  issueDate: string;
  itemNo: string;

  printingProcess: string;
  printQuality: string;
  rewindDirection: string;
  numColours: string;
  totalRetainSolvent: string;
  solidColourVariation: string;
  barcodeScanQuality: string;

  opacity: string;
  opticalDensity: string;
  bondStrength: string;
  heatSealStrength: string;
  wvtr: string;
  otr: string;
  cofExternal: string;
  cofInternal: string;
  thickness: string;
  yieldGsm: string;
  repeatLength: string;
  slitWidth: string;

  odour: string;
  generalQuality: string;
  stewardshipRecyclability: string;

  core: string;
  joinsNumber: string;
  joinsTape: string;
  stackPallet: string;
  positionJoins: string;
  rollLabelInfo: string;
  rollSize: string;
  palletType: string;
  generalPackaging: string;
  storage: string;
  foodContact: string;

  approvedAchieve: string;
  approvedAchievePos: string;
  approvedAchieveDate: string;
  approvedCustomer: string;
  approvedCustomerPos: string;
  approvedCustomerDate: string;
}

const PRESETS: Record<string, { label: string; description: string; data: SpecSheetData }> = {
  pvdc: {
    label: 'PVdC-PET / PE (SEGAPAC Style)',
    description: 'High-barrier composite film for liquids, purees, vacuum sealing, and high-fat products.',
    data: {
      customer: 'Sega Pac Pty Ltd',
      customerDesc: 'Vacuum seal packing laminate for cooked food products',
      customerCode: 'SEG-809',
      materialStructure: '14μm PVdC PET / Adhesive / 70μm PE',
      achieveDescription: 'SEG SL PVDC PET / 70UM PE 740mm',
      apnBarcode: 'NA',
      revision: 'New',
      issueDate: '05/12/2016',
      itemNo: '40002052-0',
      printingProcess: 'Rotogravure / Cylinder Printing',
      printQuality: 'High-Definition Glossy Cylinders',
      rewindDirection: 'PE Side Inside (Sealant layer internal)',
      numColours: '6 Colors',
      totalRetainSolvent: '< 5.0 mg/m²',
      solidColourVariation: 'ΔE < 2.0',
      barcodeScanQuality: 'Grade A',
      opacity: 'N/A',
      opticalDensity: 'N/A',
      bondStrength: 'Min 200 gf/25mm',
      heatSealStrength: 'Min 1,000 gf/25mm (B/B seals)',
      wvtr: '< 5 cc/m²/day (38°C, 90% RH)',
      otr: '< 10 cc/m²/day (25°C, 0% RH)',
      cofExternal: '0.20 – 0.40 (outside to outside)',
      cofInternal: '0.15 – 0.20 (inside to inside)',
      thickness: '86um ± 10%',
      yieldGsm: '86 gsm ± 10%',
      repeatLength: 'Plain',
      slitWidth: '740mm',
      odour: 'The material supplied shall be free from excessive odour and shall not cause any deterioration in the organoleptic character of the food nor bring about any unacceptable change in the quality of the food.',
      generalQuality: 'The material supplied shall be of an acceptable commercial standard free from bubbles, streaks, creasing, or foreign matter, any of which may preclude its satisfactory conversion or end use Application.',
      stewardshipRecyclability: 'This film covered by the specification can be classified under Plastics Identification Code 7 (OTHER). Flexible packaging cannot be disposed of currently in curbside collection although clean film can be recycled using industrial recyclers. Cardboard cores can be recycled by industrial recyclers if the film and tape is removed. Cardboard layer pads used as packaging on the pallet can be recycled using industrial recyclers. Where AchievePack has suggested that our product and/or packaging can be Recycled AchievePack can assist with identifying suitable recyclers.',
      core: 'Paper core ID 76 mm',
      joinsNumber: '1 max',
      joinsTape: 'Red tape',
      stackPallet: '25 rolls/layer, 1 layer per pallet',
      positionJoins: 'Butt/In register, Red tape flags on Left hand side of roll',
      rollLabelInfo: 'To contain Customer name, job details, roll ID, roll weight etc...',
      rollSize: '180mm O/D, 220m, 15 kg max',
      palletType: 'Plain wood',
      generalPackaging: 'Pallet contents to be secured on pallet to withstand the rigours of transport, handling, and storage. Pallet contents at delivery must be in good condition and fit for intended use.',
      storage: '1.Pouches, bags, rewind or laminate should be kept out of direct natural light/sunlight and in a well-ventilated area at temperatures less than 35 deg C, unless specified otherwise on labeling.\n2.It is advantageous to condition the cartons or rolls to packing room temperature at least 24 hrs. prior to use.\n3.At all times when not in use the carton should be sealed or rolls covered so performance is not impaired or contamination permitted.',
      foodContact: 'All resins, polymers and additives used in the manufacture of these Products conform to the following regulations:\nPE Resin: 21CFR177.1520 (c) 3.2C and 21CFR177.1330\nAdhesive: FDA 21CFR175.105\nPET Film: 21CFR177.1630, 21CFR175.300\nAll inks are formulated to guidelines specified by the European Council of Paint, Printing Ink and Artists Colour Industry (CEPE) and the ingredients are listed in the raw materials used in the inks are listed in Ordinance of the Swiss FDHA (RS 817.023.21), section 8b Annex 6 April 2013 A and B lists. Inks are NOT approved for DIRECT contact with foods.',
      approvedAchieve: 'Dennis Marazzato',
      approvedAchievePos: 'Process Engineering Manager',
      approvedAchieveDate: 'Monday, December 05, 2016',
      approvedCustomer: 'Dennis Marazzato',
      approvedCustomerPos: 'Customer Quality Manager',
      approvedCustomerDate: 'Monday, December 05, 2016'
    }
  },
  compostable: {
    label: 'Kraft Paper / PBAT / PLA (Compostable)',
    description: '100% Home & Industrial Compostable high-performance laminated structures.',
    data: {
      customer: 'EcoFood Co.',
      customerDesc: 'Compostable Kraft pouch for organic cookies and granola',
      customerCode: 'EFC-102',
      materialStructure: '30g Kraft Paper / Bio-PBS Adhesive / 50μm PLA Sealant Film',
      achieveDescription: 'COMPOSTABLE KRAFT PAPER POUCH / 50UM PLA',
      apnBarcode: '931089274921',
      revision: 'Rev 1.0',
      issueDate: '2026-05-29',
      itemNo: 'ACH-COM-921',
      printingProcess: 'Flexographic Water-Based Printing',
      printQuality: 'Matte Organic Ink-Jet finish',
      rewindDirection: 'PLA Sealant Side Inside',
      numColours: '4 Colors (CMYK)',
      totalRetainSolvent: '< 1.0 mg/m² (Water-based ink)',
      solidColourVariation: 'ΔE < 2.5',
      barcodeScanQuality: 'Grade A (ISO 1.5 - 2.0)',
      opacity: '95% (Natural Kraft Brown Opaque)',
      opticalDensity: 'N/A',
      bondStrength: 'Min 180 gf/25mm',
      heatSealStrength: 'Min 900 gf/25mm (PLA/PLA seals)',
      wvtr: '< 35 cc/m²/day (38°C, 90% RH)',
      otr: '< 45 cc/m²/day (25°C, 0% RH)',
      cofExternal: '0.30 – 0.50 (outside to outside)',
      cofInternal: '0.25 – 0.35 (inside to inside)',
      thickness: '110um ± 8%',
      yieldGsm: '95 gsm ± 8%',
      repeatLength: '320mm',
      slitWidth: '480mm',
      odour: 'The bio-packaging material shall be free from excessive chemical or starch odour and shall not cause any sensory deterioration in organic dry food products.',
      generalQuality: 'Laminate shall be of commercial organic standards, free from localized adhesive bubbles, paper creases, or ink voids, ensuring seamless pouch-making.',
      stewardshipRecyclability: 'This packaging is certified 100% Home and Industrial Compostable under European Standard EN 13432 and American Standard ASTM D6400. Do NOT place in standard plastic recycling or land-fill streams. Cardboard cores are fully recyclable via household paper waste streams.',
      core: 'Paper core ID 76 mm',
      joinsNumber: '0 max',
      joinsTape: 'Compostable Kraft Tape',
      stackPallet: '16 rolls/layer, 2 layers per pallet',
      positionJoins: 'N/A',
      rollLabelInfo: 'Contains Customer name, Eco-Batch number, net roll weight, roll width, production date.',
      rollSize: '220mm O/D, 400m, 12 kg max',
      palletType: 'ISPM-15 Heat Treated Wooden Pallet',
      generalPackaging: 'Pallet contents wrapped with compostable stretch film and cardboard corner sheets to protect paper rolls from ambient moisture during transport.',
      storage: '1. Store in original sealed master boxes at temperatures below 30°C and relative humidity between 40%-60%.\n2. Avoid direct contact with wet surfaces, damp environments, or strong UV rays.\n3. Once opened, seal the protective inner bag immediately to prevent premature moisture absorption.',
      foodContact: 'All resins, paper liners, and binders conform to international regulations for direct food contact:\nKraft Paper: FDA 21CFR176.170 & 21CFR176.180 (Paper & Cardboard)\nPLA Sealant: FDA 21CFR177.1630 & EU Food Contact Regulation 10/2011\nAdhesives: FDA 21CFR175.105 (Indirect Food Contact Adhesives)\nInks: Compliant with water-based soy and non-toxic packaging guidelines.',
      approvedAchieve: 'Ryan Macmini',
      approvedAchievePos: 'Lead Product Engineer',
      approvedAchieveDate: 'Friday, May 29, 2026',
      approvedCustomer: 'Sara Jenkins',
      approvedCustomerPos: 'Eco-Brand Operations Manager',
      approvedCustomerDate: 'Friday, May 29, 2026'
    }
  },
  recyclable: {
    label: 'Mono-Material PE / EVOH-PE (Recyclable)',
    description: '100% Recyclable mono-material PE with high oxygen & moisture barrier properties.',
    data: {
      customer: 'CleanFoods Ltd',
      customerDesc: 'Recycle-ready high barrier PE pouch for protein powders',
      customerCode: 'CFL-502',
      materialStructure: 'MDO-PE / Solventless Adhesive / High-Barrier EVOH-PE Film',
      achieveDescription: 'MONO RECYCLABLE PE / EVOH-PE 105UM',
      apnBarcode: '931980312012',
      revision: 'Rev 1.2',
      issueDate: '2026-05-29',
      itemNo: 'ACH-REC-502',
      printingProcess: 'Flexographic / Digital Inkjet Printing',
      printQuality: 'Vibrant Premium Matte Finish',
      rewindDirection: 'Sealant PE Layer Inside',
      numColours: '8 Colors (CMYK + 4 Pantones)',
      totalRetainSolvent: '< 3.0 mg/m²',
      solidColourVariation: 'ΔE < 1.8',
      barcodeScanQuality: 'Grade A (ISO 1.8 - 2.0)',
      opacity: '90% (White opaque barrier core)',
      opticalDensity: 'N/A',
      bondStrength: 'Min 220 gf/25mm',
      heatSealStrength: 'Min 1,200 gf/25mm (Coextruded PE-seals)',
      wvtr: '< 2.5 cc/m²/day (38°C, 90% RH)',
      otr: '< 8.0 cc/m²/day (25°C, 0% RH)',
      cofExternal: '0.22 – 0.35 (outside to outside)',
      cofInternal: '0.18 – 0.25 (inside to inside)',
      thickness: '105um ± 5%',
      yieldGsm: '98 gsm ± 5%',
      repeatLength: '450mm',
      slitWidth: '600mm',
      odour: 'Odourless, food-safe coextruded polyethylene layers without plasticizer migration.',
      generalQuality: 'Mono-PE laminate must be clean, free from gel particles, pinholes, or edge curling, ensuring excellent gusset and zipper sealing.',
      stewardshipRecyclability: '100% Recyclable mono-polyethylene material. Certified for store drop-off and LDPE recycling facilities globally. Highly sustainable alternative to multi-material non-recyclable bags. Cardboard rolls and layer protective cushions are fully recyclable.',
      core: 'Paper core ID 76 mm',
      joinsNumber: '1 max',
      joinsTape: 'PE-based Recyclable Red Tape',
      stackPallet: '16 rolls/layer, 1 layer per pallet',
      positionJoins: 'Butt/In register, Left hand side flag',
      rollLabelInfo: 'Contains Customer details, SKU #, batch weight, roll index, date of slit.',
      rollSize: '200mm O/D, 300m, 14 kg max',
      palletType: 'Standard Wood/Plastic Pallet',
      generalPackaging: 'Pouch rolls placed in PE bags, padded with EPE cushions and securely shrink-wrapped to standard wooden pallets.',
      storage: '1. Store in dry, clean warehouse between 15°C to 28°C and relative humidity below 60%.\n2. Do not stack more than two pallets high to prevent core crushing.\n3. Keep in original packaging until ready for insertion on packaging line.',
      foodContact: 'All resins, pigments, and adhesive compounds are compliant with FDA direct food regulations:\nPE Resin: FDA 21CFR177.1520 (Polyolefin Polymers)\nEVOH Layer: FDA 21CFR177.1360 (Ethylene-Vinyl Alcohol copolymer)\nAdhesives: FDA 21CFR175.105 & EC 1935/2004 food safety rules.\nInks: Polymeric eco-solvents, certified heavy-metal free.',
      approvedAchieve: 'Ryan Macmini',
      approvedAchievePos: 'Lead Product Engineer',
      approvedAchieveDate: 'Friday, May 29, 2026',
      approvedCustomer: 'Clara Oswald',
      approvedCustomerPos: 'Technical Operations Director',
      approvedCustomerDate: 'Friday, May 29, 2026'
    }
  },
  pcr: {
    label: '50% PCR-PET / PE (Recycled Content)',
    description: 'Post-Consumer Recycled (PCR) high-barrier packaging to reduce carbon footprint.',
    data: {
      customer: 'PureGym Nutrition',
      customerDesc: 'High-barrier PCR pouch for Whey protein isolate',
      customerCode: 'PGN-704',
      materialStructure: '12μm PCR-PET (50% recycled) / AL-Adhesive / 80μm PE Film',
      achieveDescription: '50% PCR METALLISED PET / 80UM PE',
      apnBarcode: '934892189024',
      revision: 'Rev 2.0',
      issueDate: '2026-05-29',
      itemNo: 'ACH-PCR-704',
      printingProcess: 'High-Speed Gravure Cylinder Printing',
      printQuality: 'Metallic Mirror Finish',
      rewindDirection: 'PE Side Inside',
      numColours: '7 Colors (incl. Metallic Gold)',
      totalRetainSolvent: '< 4.0 mg/m²',
      solidColourVariation: 'ΔE < 1.5',
      barcodeScanQuality: 'Grade A',
      opacity: '100% (Metallised Barrier Layer)',
      opticalDensity: '2.3 - 2.6 (Aluminum barrier layer)',
      bondStrength: 'Min 250 gf/25mm',
      heatSealStrength: 'Min 1,100 gf/25mm (B/B seals)',
      wvtr: '< 1.5 cc/m²/day (38°C, 90% RH)',
      otr: '< 2.0 cc/m²/day (25°C, 0% RH)',
      cofExternal: '0.25 – 0.38 (outside to outside)',
      cofInternal: '0.15 – 0.22 (inside to inside)',
      thickness: '95um ± 8%',
      yieldGsm: '92 gsm ± 8%',
      repeatLength: '360mm',
      slitWidth: '680mm',
      odour: 'Compliant with PCR deodorization standards; free from secondary plasticizer smells or chemical VOCs.',
      generalQuality: 'Laminate shall be structurally stable with zero delamination risk, uniform metallisation thickness, and pristine scratch-free external print.',
      stewardshipRecyclability: 'Incorporates 50% post-consumer recycled polymer content in the external PET layer, reducing virgin plastic usage by 35%. Cores and shipping materials are fully recyclable.',
      core: 'Paper core ID 76 mm',
      joinsNumber: '1 max',
      joinsTape: 'Red adhesive tape',
      stackPallet: '20 rolls/layer, 1 layer per pallet',
      positionJoins: 'Butt/In register, left flag',
      rollLabelInfo: 'Contains Customer name, PCR Batch Certification ID, roll index, date of printing.',
      rollSize: '190mm O/D, 250m, 14.5 kg max',
      palletType: 'Timber Pallet (Plain)',
      generalPackaging: 'Pallet layers padded with recyclable cardboard and tightly wrapped to prevent shipping vibrations.',
      storage: '1. Ambient dry storage between 10°C and 30°C. Keep protected from rain and humidity.\n2. Leave rolls in cardboard packaging until scheduled for pouch production.\n3. Condition in pack-room environment 24 hours prior to unwinding.',
      foodContact: 'PCR materials are processed in FDA-cleared recycling streams (LNO - Letter of No Objection) for direct food contact eligibility:\nPCR-PET Film: FDA 21CFR177.1630 & FDA Food Contact Substance Notification\nVirgin PE Layer: FDA 21CFR177.1520 co-extrusion\nAdhesives: FDA 21CFR175.105 food-grade polyurethane\nInks: Solvent-based gravure inks meeting heavy metal restrictions.',
      approvedAchieve: 'Ryan Macmini',
      approvedAchievePos: 'Lead Product Engineer',
      approvedAchieveDate: 'Friday, May 29, 2026',
      approvedCustomer: 'Liam Vance',
      approvedCustomerPos: 'Global Procurement Manager',
      approvedCustomerDate: 'Friday, May 29, 2026'
    }
  }
};

export default function SpecSheetTab() {
  const [data, setData] = useState<SpecSheetData>(PRESETS.pvdc.data);
  const [activeFormTab, setActiveFormTab] = useState<'general' | 'material' | 'barrier' | 'slitting' | 'regulatory' | 'approval'>('general');
  const [successMsg, setSuccessMsg] = useState('');

  const loadPreset = (key: string) => {
    if (PRESETS[key]) {
      setData(PRESETS[key].data);
      setSuccessMsg(`Loaded preset: ${PRESETS[key].label}`);
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleFieldChange = (field: keyof SpecSheetData, value: string) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      
      {/* SUCCESS NOTIFICATION TOAST */}
      {successMsg && (
        <div className="fixed top-24 right-6 z-[110] bg-emerald-600 border border-emerald-500 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-2 font-bold animate-in fade-in slide-in-from-top-3 duration-300">
          <Check className="w-5 h-5 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* CONFIGURATION & PREVIEW ROW (Screen Only) */}
      <div className="print:hidden grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Input form & Preset Selectors (5 Cols) */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          
          {/* Preset Buttons */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              1. Load Technical Presets
            </h3>
            <p className="text-xs text-gray-500 mb-4">Click to auto-populate all physical, chemical, and regulatory specs matching specific industry materials:</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(PRESETS).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => loadPreset(key)}
                  className="flex flex-col text-left p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50/30 transition text-xs relative group active:scale-95"
                >
                  <span className="font-extrabold text-gray-900 group-hover:text-blue-700">{item.label}</span>
                  <span className="text-[10px] text-gray-500 mt-1 line-clamp-1">{item.description}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setData({
                    customer: '', customerDesc: '', customerCode: '', materialStructure: '', achieveDescription: '', apnBarcode: '', revision: 'New', issueDate: new Date().toISOString().split('T')[0], itemNo: '',
                    printingProcess: '', printQuality: '', rewindDirection: '', numColours: '', totalRetainSolvent: '', solidColourVariation: '', barcodeScanQuality: '',
                    opacity: '', opticalDensity: '', bondStrength: '', heatSealStrength: '', wvtr: '', otr: '', cofExternal: '', cofInternal: '', thickness: '', yieldGsm: '', repeatLength: '', slitWidth: '',
                    odour: '', generalQuality: '', stewardshipRecyclability: '',
                    core: 'Paper core ID 76 mm', joinsNumber: '1 max', joinsTape: 'Red tape', stackPallet: '', positionJoins: '', rollLabelInfo: '', rollSize: '', palletType: 'Wood', generalPackaging: '',
                    storage: '', foodContact: '',
                    approvedAchieve: '', approvedAchievePos: '', approvedAchieveDate: '', approvedCustomer: '', approvedCustomerPos: '', approvedCustomerDate: ''
                  });
                  setSuccessMsg('Form Cleared (Custom Blank Pouch Template)');
                  setTimeout(() => setSuccessMsg(''), 3000);
                }}
                className="col-span-2 py-2 px-3 bg-gray-50 hover:bg-gray-100 text-center font-bold text-gray-700 border border-gray-200 rounded-xl transition text-[11px] uppercase tracking-wider"
              >
                Clear / Custom Blank Sheet
              </button>
            </div>
          </div>

          {/* Form Tabs and Fields */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col flex-1">
            <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-indigo-600" />
                2. Customize Technical Data
              </h3>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">Interactive Form</span>
            </div>

            {/* Form Category Switcher */}
            <div className="flex bg-gray-100/80 p-1 divide-x divide-gray-200 overflow-x-auto scrollbar-hide border-b border-gray-200">
              <button onClick={() => setActiveFormTab('general')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'general' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>General</button>
              <button onClick={() => setActiveFormTab('material')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'material' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Specs</button>
              <button onClick={() => setActiveFormTab('barrier')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'barrier' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Barrier</button>
              <button onClick={() => setActiveFormTab('slitting')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'slitting' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Packing</button>
              <button onClick={() => setActiveFormTab('regulatory')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'regulatory' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Legal</button>
              <button onClick={() => setActiveFormTab('approval')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'approval' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Sign-off</button>
            </div>

            {/* Form Fields Scrollbox */}
            <div className="p-5 space-y-4 max-h-[500px] overflow-y-auto">
              
              {/* TAB: GENERAL */}
              {activeFormTab === 'general' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer / Client</label>
                    <input type="text" value={data.customer} onChange={e => handleFieldChange('customer', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Sega Pac Pty Ltd" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer Product Description</label>
                    <input type="text" value={data.customerDesc} onChange={e => handleFieldChange('customerDesc', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Laminate for meat vacuum sealing" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer Code</label>
                      <input type="text" value={data.customerCode} onChange={e => handleFieldChange('customerCode', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="NA / SE-90" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">APN Barcode Number</label>
                      <input type="text" value={data.apnBarcode} onChange={e => handleFieldChange('apnBarcode', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="NA" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Item No. / Reference Code</label>
                      <input type="text" value={data.itemNo} onChange={e => handleFieldChange('itemNo', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 40002052-0" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Revision</label>
                      <input type="text" value={data.revision} onChange={e => handleFieldChange('revision', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="New / Rev A" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Issue Date</label>
                    <input type="date" value={data.issueDate} onChange={e => handleFieldChange('issueDate', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>
              )}

              {/* TAB: MATERIAL & PHYSICAL */}
              {activeFormTab === 'material' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Material Structure Description</label>
                    <textarea rows={2} value={data.materialStructure} onChange={e => handleFieldChange('materialStructure', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono" placeholder="e.g. 14μm PVdC PET/ Adhesive / 70μm PE" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">AchievePack Internal Description</label>
                    <textarea rows={2} value={data.achieveDescription} onChange={e => handleFieldChange('achieveDescription', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono" placeholder="e.g. SEG SL PVDC PET / 70UM PE 740mm" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Thickness Tolerance</label>
                      <input type="text" value={data.thickness} onChange={e => handleFieldChange('thickness', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 86um ± 10%" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Yield Tolerance (gsm)</label>
                      <input type="text" value={data.yieldGsm} onChange={e => handleFieldChange('yieldGsm', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 86 gsm ± 10%" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Slit Width (± 1mm)</label>
                      <input type="text" value={data.slitWidth} onChange={e => handleFieldChange('slitWidth', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 740mm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Repeat Length (± 1mm)</label>
                      <input type="text" value={data.repeatLength} onChange={e => handleFieldChange('repeatLength', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Plain / 320mm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Rewind Direction to Customer</label>
                    <input type="text" value={data.rewindDirection} onChange={e => handleFieldChange('rewindDirection', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. PE Side Inside" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Printing Process</label>
                      <input type="text" value={data.printingProcess} onChange={e => handleFieldChange('printingProcess', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Cylinder Gravure" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Print Quality Grade</label>
                      <input type="text" value={data.printQuality} onChange={e => handleFieldChange('printQuality', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. N/A / High-Def" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: BARRIER & Tolerances */}
              {activeFormTab === 'barrier' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">WVTR Barrier (Moisture)</label>
                      <input type="text" value={data.wvtr} onChange={e => handleFieldChange('wvtr', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. < 5 cc/m²/day" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">OTR Barrier (Oxygen)</label>
                      <input type="text" value={data.otr} onChange={e => handleFieldChange('otr', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. < 10 cc/m²/day" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Bond Strength (gf/25mm)</label>
                      <input type="text" value={data.bondStrength} onChange={e => handleFieldChange('bondStrength', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Min 200 gf/25mm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Heat Seal (gf/25mm)</label>
                      <input type="text" value={data.heatSealStrength} onChange={e => handleFieldChange('heatSealStrength', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Min 1,000 gf/25mm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">COF External</label>
                      <input type="text" value={data.cofExternal} onChange={e => handleFieldChange('cofExternal', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 0.20 - 0.40" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">COF Internal</label>
                      <input type="text" value={data.cofInternal} onChange={e => handleFieldChange('cofInternal', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 0.15 - 0.20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Opacity (White Film)</label>
                      <input type="text" value={data.opacity} onChange={e => handleFieldChange('opacity', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. N/A / Min 60%" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Optical Density (Met)</label>
                      <input type="text" value={data.opticalDensity} onChange={e => handleFieldChange('opticalDensity', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. N/A / 2.2 - 2.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: SLITTING & PACKING */}
              {activeFormTab === 'slitting' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Core Size (Diameter)</label>
                      <input type="text" value={data.core} onChange={e => handleFieldChange('core', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Paper core ID 76 mm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Joins Tape Color</label>
                      <input type="text" value={data.joinsTape} onChange={e => handleFieldChange('joinsTape', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Red tape" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Max Joins Allowed</label>
                      <input type="text" value={data.joinsNumber} onChange={e => handleFieldChange('joinsNumber', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 1 max" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Roll Setup / Stack Pallet</label>
                      <input type="text" value={data.stackPallet} onChange={e => handleFieldChange('stackPallet', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 25 rolls/layer" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Roll Dimensions / Weight</label>
                    <input type="text" value={data.rollSize} onChange={e => handleFieldChange('rollSize', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 180mm O/D, 220m, 15 kg max" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Position Joins Flag</label>
                    <input type="text" value={data.positionJoins} onChange={e => handleFieldChange('positionJoins', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Butt/In register, Red flags" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Roll Label Requirements</label>
                    <input type="text" value={data.rollLabelInfo} onChange={e => handleFieldChange('rollLabelInfo', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="Contains Job details, Customer name..." />
                  </div>
                </div>
              )}

              {/* TAB: REGULATORY & LEGAL */}
              {activeFormTab === 'regulatory' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Storage Conditions Instruction</label>
                    <textarea rows={3} value={data.storage} onChange={e => handleFieldChange('storage', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs p-2.5 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono leading-relaxed" placeholder="1. Keep dry..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Food Contact Compliance Codes (FDA/EU)</label>
                    <textarea rows={4} value={data.foodContact} onChange={e => handleFieldChange('foodContact', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs p-2.5 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono leading-relaxed" placeholder="Conforms to FDA 21CFR..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Product Stewardship & Recyclability Notes</label>
                    <textarea rows={3} value={data.stewardshipRecyclability} onChange={e => handleFieldChange('stewardshipRecyclability', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs p-2.5 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono leading-relaxed" placeholder="Classified under Plastics Code 7..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Odour Sensory Tolerance</label>
                    <textarea rows={2} value={data.odour} onChange={e => handleFieldChange('odour', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">General Quality Standards</label>
                    <textarea rows={2} value={data.generalQuality} onChange={e => handleFieldChange('generalQuality', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>
              )}

              {/* TAB: APPROVAL */}
              {activeFormTab === 'approval' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3">
                    <span className="text-[10px] font-extrabold text-blue-700 uppercase tracking-wider block">✍️ AchievePack Approval</span>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Approved By Name</label>
                      <input type="text" value={data.approvedAchieve} onChange={e => handleFieldChange('approvedAchieve', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs px-2.5 py-1.5 bg-white focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Position / Job Title</label>
                      <input type="text" value={data.approvedAchievePos} onChange={e => handleFieldChange('approvedAchievePos', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs px-2.5 py-1.5 bg-white focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Approval Date</label>
                      <input type="text" value={data.approvedAchieveDate} onChange={e => handleFieldChange('approvedAchieveDate', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs px-2.5 py-1.5 bg-white focus:ring-1 focus:ring-blue-500 font-mono" />
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 space-y-3">
                    <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-wider block">✍️ Customer Sign-Off</span>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Authorized Name</label>
                      <input type="text" value={data.approvedCustomer} onChange={e => handleFieldChange('approvedCustomer', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs px-2.5 py-1.5 bg-white focus:ring-1 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Position / Role</label>
                      <input type="text" value={data.approvedCustomerPos} onChange={e => handleFieldChange('approvedCustomerPos', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs px-2.5 py-1.5 bg-white focus:ring-1 focus:ring-amber-500" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Approval Date</label>
                      <input type="text" value={data.approvedCustomerDate} onChange={e => handleFieldChange('approvedCustomerDate', e.target.value)} className="w-full border-gray-300 rounded-lg text-xs px-2.5 py-1.5 bg-white focus:ring-1 focus:ring-amber-500 font-mono" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 border-t border-gray-200 p-4 mt-auto">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 px-4 rounded-xl text-sm shadow-md transition active:scale-95"
              >
                <Printer className="w-4 h-4" />
                Export Spec Sheet (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Multi-page Preview Panel (7 Cols) */}
        <div className="xl:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-sm text-gray-600 uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              Real-time Print Layout Preview (Portrait A4)
            </span>
            <span className="text-xs text-gray-400">Standard portrait margins applied</span>
          </div>

          <div className="bg-gray-200 border border-gray-300 rounded-2xl p-6 overflow-y-auto max-h-[850px] shadow-inner flex flex-col items-center gap-8">
            
            {/* VIRTUAL A4 PAGE 1 */}
            <div className="bg-white text-black shadow-2xl p-[15mm_10mm] w-[210mm] min-h-[297mm] flex flex-col font-sans text-xs relative select-none">
              
              {/* PAGE NUMBER FOOTER */}
              <div className="absolute bottom-[8mm] left-[10mm] right-[10mm] flex justify-between text-[9px] text-gray-400 font-medium">
                <span>Issue date: 23/06/15</span>
                <span>page 1 / 4</span>
              </div>

              {/* BRAND HEADER */}
              <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="AchievePack" className="h-10 w-auto object-contain" />
                    <span className="text-lg font-extrabold tracking-widest text-blue-950">achievepack</span>
                  </div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging</span>
                </div>
                <div className="text-right text-[8px] leading-tight text-gray-500 max-w-[250px]">
                  <strong className="text-[10px] text-gray-800 font-bold block">AchievePack Limited</strong>
                  HK BRN: 41007097-000-07-14-4<br/>
                  1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
                  Technical Hotline: +852 6970 4411 | engineering@achievepack.com
                </div>
              </div>

              {/* TITLE */}
              <div className="bg-blue-900 text-white text-center font-bold text-sm uppercase py-2 tracking-widest rounded mb-6">
                Product Specification Sheet
              </div>

              {/* METADATA ROW */}
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <div className="flex gap-1.5"><span className="font-bold text-gray-700 w-24">Revision Code:</span><span className="font-semibold text-gray-900">{data.revision || 'New'}</span></div>
                  <div className="flex gap-1.5"><span className="font-bold text-gray-700 w-24">Issue Date:</span><span className="font-semibold text-gray-900">{data.issueDate || 'N/A'}</span></div>
                </div>
                <div className="bg-gray-100 border border-gray-300 rounded px-5 py-3 text-center min-w-[150px]">
                  <span className="text-[9px] font-bold text-gray-400 block uppercase tracking-wider mb-1">Item Ref / Code</span>
                  <span className="text-sm font-extrabold text-blue-950 font-mono tracking-wide">{data.itemNo || 'N/A'}</span>
                </div>
              </div>

              {/* TABLE: PRODUCT DETAILS */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-700"/>
                A. Product Details
              </h4>
              <table className="w-full border-collapse border border-gray-300 mb-6 text-left">
                <tbody>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 w-[220px] border-r border-gray-300">Customer Name:</td><td className="p-2 font-medium">{data.customer || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Customer Description:</td><td className="p-2">{data.customerDesc || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Customer Code:</td><td className="p-2 font-mono">{data.customerCode || 'NA'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Material Structure Description:</td><td className="p-2 font-mono font-bold text-emerald-800">{data.materialStructure || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">AchievePack Internal Description:</td><td className="p-2 font-mono">{data.achieveDescription || 'N/A'}</td></tr>
                  <tr><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">APN Barcode Number:</td><td className="p-2 font-mono">{data.apnBarcode || 'NA'}</td></tr>
                </tbody>
              </table>

              {/* TABLE: PRINTING SPECS */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-blue-700"/>
                B. Printing Information & Specifications
              </h4>
              <table className="w-full border-collapse border border-gray-300 text-left">
                <tbody>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 w-[220px] border-r border-gray-300">Printing Process:</td><td className="p-2">{data.printingProcess || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Print Quality Standard:</td><td className="p-2">{data.printQuality || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Rewind Direction to Customer:</td><td className="p-2 font-bold text-orange-800">{data.rewindDirection || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Print Number Colours:</td><td className="p-2">{data.numColours || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Total Retain Solvent Limit:</td><td className="p-2 font-mono">{data.totalRetainSolvent || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Solid Colour Variation (tolerance):</td><td className="p-2 font-mono">{data.solidColourVariation || 'N/A'}</td></tr>
                  <tr><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">APN Bar Code Scan Quality:</td><td className="p-2">{data.barcodeScanQuality || 'N/A'}</td></tr>
                </tbody>
              </table>

            </div>

            {/* VIRTUAL A4 PAGE 2 */}
            <div className="bg-white text-black shadow-2xl p-[15mm_10mm] w-[210mm] min-h-[297mm] flex flex-col font-sans text-xs relative select-none">
              
              {/* PAGE NUMBER FOOTER */}
              <div className="absolute bottom-[8mm] left-[10mm] right-[10mm] flex justify-between text-[9px] text-gray-400 font-medium">
                <span>Issue date: 23/06/15</span>
                <span>page 2 / 4</span>
              </div>

              {/* TABLE: PROPERTY SPECIFICATIONS */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700"/>
                C. Physical Property Specifications & Tolerances
              </h4>
              <p className="text-[10px] text-gray-500 mb-3 leading-relaxed">The following testing metrics reflect minimal threshold tolerances, ranges, or industrial packaging parameters:</p>
              <table className="w-full border-collapse border border-gray-300 mb-6 text-left">
                <tbody>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 w-[220px] border-r border-gray-300">Opacity (White Films):</td><td className="p-2 font-mono">{data.opacity || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Optical Density (Metallised):</td><td className="p-2 font-mono">{data.opticalDensity || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Lamination Bond Strength (1st Pass):</td><td className="p-2 font-bold">{data.bondStrength || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Heat Seal Strength (Sealing limit):</td><td className="p-2 font-bold text-emerald-800">{data.heatSealStrength || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">WVTR (Water Vapor Barrier):</td><td className="p-2 font-mono font-bold text-blue-900">{data.wvtr || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">OTR (Oxygen Gas Barrier):</td><td className="p-2 font-mono font-bold text-blue-900">{data.otr || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">COF External (Coefficient of Friction):</td><td className="p-2 font-mono">{data.cofExternal || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">COF Internal (Friction sealant):</td><td className="p-2 font-mono">{data.cofInternal || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Total Thickness (microns):</td><td className="p-2 font-mono font-bold">{data.thickness || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Laminate Yield (gsm):</td><td className="p-2 font-mono font-bold">{data.yieldGsm || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Repeat Length (± 1mm):</td><td className="p-2 font-mono">{data.repeatLength || 'Plain'}</td></tr>
                  <tr><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Slit Width (± 1mm tolerance):</td><td className="p-2 font-mono font-bold">{data.slitWidth || 'N/A'}</td></tr>
                </tbody>
              </table>

              {/* TABLE: OTHER QUALITY INFO */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <ClipboardList className="w-3.5 h-3.5 text-blue-700"/>
                D. Other Technical Information
              </h4>
              <table className="w-full border-collapse border border-gray-300 text-left">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-2.5 w-[220px] border-r border-gray-300 align-top">Odour & Migration:</td>
                    <td className="p-2.5 leading-relaxed text-gray-700">{data.odour || 'N/A'}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-2.5 border-r border-gray-300 align-top">General Workmanship:</td>
                    <td className="p-2.5 leading-relaxed text-gray-700">{data.generalQuality || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 font-bold p-2.5 border-r border-gray-300 align-top">Product Stewardship & Recyclability:</td>
                    <td className="p-2.5 leading-relaxed text-gray-700 bg-green-50/20 font-sans">{data.stewardshipRecyclability || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>

            </div>

            {/* VIRTUAL A4 PAGE 3 */}
            <div className="bg-white text-black shadow-2xl p-[15mm_10mm] w-[210mm] min-h-[297mm] flex flex-col font-sans text-xs relative select-none">
              
              {/* PAGE NUMBER FOOTER */}
              <div className="absolute bottom-[8mm] left-[10mm] right-[10mm] flex justify-between text-[9px] text-gray-400 font-medium">
                <span>Issue date: 23/06/15</span>
                <span>page 3 / 4</span>
              </div>

              {/* TABLE: SLITTING AND PACKING INFO */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-blue-700"/>
                E. Slitting, Packing, Transport & Storage Information
              </h4>
              <table className="w-full border-collapse border border-gray-300 mb-6 text-left">
                <tbody>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 w-[220px] border-r border-gray-300">Roll Core ID (Diameter):</td><td className="p-2">{data.core || 'Paper core ID 76 mm'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Joins Tape Specification:</td><td className="p-2">{data.joinsTape || 'Red tape'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Maximum Joins Allowed:</td><td className="p-2 font-mono">{data.joinsNumber || '1 max'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Position of Joins (flagging):</td><td className="p-2">{data.positionJoins || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Roll Label Requirements:</td><td className="p-2 leading-snug">{data.rollLabelInfo || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Roll Size / Length / Weight:</td><td className="p-2 font-mono">{data.rollSize || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Stack roll on pallet layout:</td><td className="p-2">{data.stackPallet || 'N/A'}</td></tr>
                  <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-2 border-r border-gray-300">Pallet Setup Type:</td><td className="p-2">{data.palletType || 'Plain wood'}</td></tr>
                  <tr>
                    <td className="bg-gray-50 font-bold p-2 border-r border-gray-300 align-top">General Transport Packaging:</td>
                    <td className="p-2 leading-relaxed text-gray-700">{data.generalPackaging || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>



            </div>

            {/* VIRTUAL A4 PAGE 4 */}
            <div className="bg-white text-black shadow-2xl p-[15mm_10mm] w-[210mm] min-h-[297mm] flex flex-col font-sans text-xs relative select-none">
              
              {/* PAGE NUMBER FOOTER */}
              <div className="absolute bottom-[8mm] left-[10mm] right-[10mm] flex justify-between text-[9px] text-gray-400 font-medium">
                <span>Issue date: 23/06/15</span>
                <span>page 4 / 4</span>
              </div>

              {/* TABLE: STORAGE & FOOD CONTACT */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700"/>
                F. Storage & Regulatory Compliance Information
              </h4>
              <table className="w-full border-collapse border border-gray-300 mb-6 text-left">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-2 w-[220px] border-r border-gray-300 align-top">Storage and Handling Instruction:</td>
                    <td className="p-2 leading-relaxed text-gray-700 whitespace-pre-wrap font-sans text-[10px]">{data.storage || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 font-bold p-2 border-r border-gray-300 align-top">Food Contact Regulatory Status:</td>
                    <td className="p-2 leading-relaxed text-gray-700 whitespace-pre-wrap font-mono text-[9px] bg-blue-50/20">{data.foodContact || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex-1 flex flex-col justify-center gap-4 py-2">
                
                {/* SIGN-OFF TEXT */}
                <div className="text-center space-y-4 max-w-[500px] mx-auto">
                  <h3 className="text-base font-extrabold text-blue-950">Technical Specifications Agreement</h3>
                  <p className="text-[10px] leading-relaxed text-gray-500">
                    By signing below, both parties formally agree to the physical material tolerances, barrier criteria, slitting specifications, and packing setups documented in this 4-page technical specification sheet. No print alterations or material grade changes shall be executed without prior written consent.
                  </p>
                </div>

                {/* SIGNATURE BLOCKS */}
                <div className="grid grid-cols-2 gap-12 mt-4">
                  
                  {/* ACHIEVEPACK APPROVAL */}
                  <div className="border border-gray-300 rounded-xl p-4 flex flex-col min-h-[140px] bg-gray-50/30">
                    <div className="bg-blue-900 text-white font-bold text-[9px] py-1 px-3 rounded uppercase tracking-wider text-center self-start mb-3">
                      Approved by AchievePack
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end space-y-0.5 mt-auto border-t border-dashed border-gray-300 pt-3">
                      <div className="font-extrabold text-sm text-blue-950 italic font-serif select-none pointer-events-none mb-0.5">
                        {data.approvedAchieve || 'Pending Signature'}
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-500">
                        <span className="font-bold text-gray-700">Position:</span>
                        <span>{data.approvedAchievePos || 'Process Engineer'}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-500">
                        <span className="font-bold text-gray-700">Approval Date:</span>
                        <span className="font-mono">{data.approvedAchieveDate || 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                  {/* CUSTOMER APPROVAL */}
                  <div className="border border-gray-300 rounded-xl p-4 flex flex-col min-h-[140px] bg-gray-50/30">
                    <div className="bg-amber-800 text-white font-bold text-[9px] py-1 px-3 rounded uppercase tracking-wider text-center self-start mb-3">
                      Approved by Customer
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end space-y-0.5 mt-auto border-t border-dashed border-gray-300 pt-3">
                      <div className="font-extrabold text-sm text-blue-950 italic font-serif select-none pointer-events-none mb-0.5">
                        {data.approvedCustomer || 'Pending Sign-off'}
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-500">
                        <span className="font-bold text-gray-700">Position:</span>
                        <span>{data.approvedCustomerPos || 'Technical Representative'}</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-500">
                        <span className="font-bold text-gray-700">Approval Date:</span>
                        <span className="font-mono">{data.approvedCustomerDate || 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* PRINT ENGINE MULTI-PAGE RENDERER (Hidden on screen, prints portrait A4) */}
      <div className="hidden print:block bg-white text-black min-h-screen text-xs leading-normal">
        <style>{`
          @page {
            size: A4 portrait;
            margin: 0;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              background-color: white;
              color: black;
              font-family: Arial, sans-serif;
            }
            .print-page {
              width: 210mm;
              height: 280mm; /* Safe compact height to fully prevent overflow on default margins */
              padding: 10mm 12mm 10mm 12mm;
              position: relative;
              page-break-after: always !important;
              page-break-inside: avoid !important;
              box-sizing: border-box;
            }
            .print-page:last-child {
              page-break-after: avoid !important;
            }
            h4 {
              margin-top: 8px !important;
              margin-bottom: 5px !important;
              font-size: 10px !important;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin-bottom: 6px !important;
            }
            th, td {
              border: 1px solid #7f8c8d;
              padding: 3px 5px !important;
              font-size: 9px !important;
              line-height: 1.25 !important;
            }
            .bg-gray-50 {
              background-color: #f2f2f2 !important;
            }
            .bg-blue-900 {
              background-color: #1e3a8a !important;
            }
            .text-white {
              color: white !important;
            }
          }
        `}</style>

        {/* PRINT PAGE 1 */}
        <div className="print-page">
          {/* HEADER */}
          <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="AchievePack" className="h-10 w-auto object-contain" />
                <span className="text-lg font-extrabold tracking-widest text-blue-950" style={{ fontFamily: 'sans-serif' }}>achievepack</span>
              </div>
              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging</span>
            </div>
            <div className="text-right text-[8px] leading-tight text-gray-500 max-w-[250px]">
              <strong className="text-[10px] text-gray-800 font-bold block">AchievePack Limited</strong>
              HK BRN: 41007097-000-07-14-4<br/>
              1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
              Technical Hotline: +852 6970 4411 | engineering@achievepack.com
            </div>
          </div>

          <div className="bg-blue-900 text-white text-center font-bold text-sm uppercase py-2 tracking-widest rounded mb-6">
            Product Specification Sheet
          </div>

          <div className="flex justify-between items-start mb-6">
            <div className="space-y-1">
              <div className="flex gap-1.5"><span className="font-bold text-gray-700 w-24">Revision Code:</span><span className="font-semibold text-gray-900">{data.revision || 'New'}</span></div>
              <div className="flex gap-1.5"><span className="font-bold text-gray-700 w-24">Issue Date:</span><span className="font-semibold text-gray-900">{data.issueDate || 'N/A'}</span></div>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded px-5 py-3 text-center min-w-[150px]">
              <span className="text-[9px] font-bold text-gray-400 block uppercase tracking-wider mb-1">Item Ref / Code</span>
              <span className="text-sm font-extrabold text-blue-950 font-mono tracking-wide">{data.itemNo || 'N/A'}</span>
            </div>
          </div>

          <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider">
            A. Product Details
          </h4>
          <table className="w-full mb-6">
            <tbody>
              <tr><td className="bg-gray-50 font-bold w-[220px]">Customer Name:</td><td className="font-medium">{data.customer || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Customer Description:</td><td>{data.customerDesc || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Customer Code:</td><td className="font-mono">{data.customerCode || 'NA'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Material Structure Description:</td><td className="font-mono font-bold text-emerald-800" style={{ color: '#065f46' }}>{data.materialStructure || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">AchievePack Internal Description:</td><td className="font-mono">{data.achieveDescription || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">APN Barcode Number:</td><td className="font-mono">{data.apnBarcode || 'NA'}</td></tr>
            </tbody>
          </table>

          <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider">
            B. Printing Information & Specifications
          </h4>
          <table className="w-full">
            <tbody>
              <tr><td className="bg-gray-50 font-bold w-[220px]">Printing Process:</td><td>{data.printingProcess || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Print Quality Standard:</td><td>{data.printQuality || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold text-orange-800" style={{ color: '#9a3412' }}>Rewind Direction to Customer:</td><td className="font-bold">{data.rewindDirection || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Print Number Colours:</td><td>{data.numColours || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Total Retain Solvent Limit:</td><td className="font-mono">{data.totalRetainSolvent || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Solid Colour Variation (tolerance):</td><td className="font-mono">{data.solidColourVariation || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">APN Bar Code Scan Quality:</td><td>{data.barcodeScanQuality || 'N/A'}</td></tr>
            </tbody>
          </table>

          <div className="absolute bottom-[8mm] left-[12mm] right-[12mm] flex justify-between text-[9px] text-gray-400 font-medium border-t pt-2">
            <span>Issue date: 23/06/15</span>
            <span>page 1 / 4</span>
          </div>
        </div>

        {/* PRINT PAGE 2 */}
        <div className="print-page">
          <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider">
            C. Physical Property Specifications & Tolerances
          </h4>
          <p className="text-[9px] text-gray-500 mb-3">The following testing metrics reflect minimal threshold tolerances, ranges, or industrial packaging parameters:</p>
          <table className="w-full mb-6">
            <tbody>
              <tr><td className="bg-gray-50 font-bold w-[220px]">Opacity (White Films):</td><td className="font-mono">{data.opacity || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Optical Density (Metallised):</td><td className="font-mono">{data.opticalDensity || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Lamination Bond Strength (1st Pass):</td><td className="font-bold">{data.bondStrength || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold text-emerald-800" style={{ color: '#065f46' }}>Heat Seal Strength (Sealing limit):</td><td className="font-bold">{data.heatSealStrength || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold text-blue-900" style={{ color: '#1e3a8a' }}>WVTR (Water Vapor Barrier):</td><td className="font-mono font-bold">{data.wvtr || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold text-blue-900" style={{ color: '#1e3a8a' }}>OTR (Oxygen Gas Barrier):</td><td className="font-mono font-bold">{data.otr || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">COF External (Coefficient of Friction):</td><td className="font-mono">{data.cofExternal || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">COF Internal (Friction sealant):</td><td className="font-mono">{data.cofInternal || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Total Thickness (microns):</td><td className="font-mono font-bold">{data.thickness || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Laminate Yield (gsm):</td><td className="font-mono font-bold">{data.yieldGsm || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Repeat Length (± 1mm):</td><td className="font-mono">{data.repeatLength || 'Plain'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Slit Width (± 1mm tolerance):</td><td className="font-mono font-bold">{data.slitWidth || 'N/A'}</td></tr>
            </tbody>
          </table>

          <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider">
            D. Other Technical Information
          </h4>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="bg-gray-50 font-bold w-[220px] align-top">Odour & Migration:</td>
                <td className="leading-relaxed text-gray-700">{data.odour || 'N/A'}</td>
              </tr>
              <tr>
                <td className="bg-gray-50 font-bold align-top">General Workmanship:</td>
                <td className="leading-relaxed text-gray-700">{data.generalQuality || 'N/A'}</td>
              </tr>
              <tr>
                <td className="bg-gray-50 font-bold align-top">Product Stewardship & Recyclability:</td>
                <td className="leading-relaxed text-gray-700">{data.stewardshipRecyclability || 'N/A'}</td>
              </tr>
            </tbody>
          </table>

          <div className="absolute bottom-[8mm] left-[12mm] right-[12mm] flex justify-between text-[9px] text-gray-400 font-medium border-t pt-2">
            <span>Issue date: 23/06/15</span>
            <span>page 2 / 4</span>
          </div>
        </div>

        {/* PRINT PAGE 3 */}
        <div className="print-page">
          <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider">
            E. Slitting, Packing, Transport & Storage Information
          </h4>
          <table className="w-full mb-6">
            <tbody>
              <tr><td className="bg-gray-50 font-bold w-[220px]">Roll Core ID (Diameter):</td><td>{data.core || 'Paper core ID 76 mm'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Joins Tape Specification:</td><td>{data.joinsTape || 'Red tape'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Maximum Joins Allowed:</td><td className="font-mono">{data.joinsNumber || '1 max'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Position of Joins (flagging):</td><td>{data.positionJoins || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Roll Label Requirements:</td><td>{data.rollLabelInfo || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Roll Size / Length / Weight:</td><td className="font-mono">{data.rollSize || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Stack roll on pallet layout:</td><td>{data.stackPallet || 'N/A'}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Pallet Setup Type:</td><td>{data.palletType || 'Plain wood'}</td></tr>
              <tr>
                <td className="bg-gray-50 font-bold align-top">General Transport Packaging:</td>
                <td className="leading-relaxed text-gray-700">{data.generalPackaging || 'N/A'}</td>
              </tr>
            </tbody>
          </table>



          <div className="absolute bottom-[8mm] left-[12mm] right-[12mm] flex justify-between text-[9px] text-gray-400 font-medium border-t pt-2">
            <span>Issue date: 23/06/15</span>
            <span>page 3 / 4</span>
          </div>
        </div>

        {/* PRINT PAGE 4 */}
        <div className="print-page flex flex-col justify-between">
          <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider">
            F. Storage & Regulatory Compliance Information
          </h4>
          <table className="w-full mb-4">
            <tbody>
              <tr>
                <td className="bg-gray-50 font-bold w-[220px] align-top">Storage and Handling Instruction:</td>
                <td className="leading-relaxed text-gray-700" style={{ whiteSpace: 'pre-wrap' }}>{data.storage || 'N/A'}</td>
              </tr>
              <tr>
                <td className="bg-gray-50 font-bold align-top">Food Contact Regulatory Status:</td>
                <td className="leading-relaxed text-gray-700" style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '8px' }}>{data.foodContact || 'N/A'}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex-1 flex flex-col justify-between gap-4 py-2">
            <div className="text-center space-y-4 max-w-[500px] mx-auto">
              <h3 className="text-base font-extrabold text-blue-950">Technical Specifications Agreement</h3>
              <p className="text-[9px] leading-relaxed text-gray-500">
                By signing below, both parties formally agree to the physical material tolerances, barrier criteria, slitting specifications, and packing setups documented in this 4-page technical specification sheet. No print alterations or material grade changes shall be executed without prior written consent.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-4">
              
              {/* ACHIEVEPACK APPROVAL */}
              <div className="border border-gray-300 rounded-xl p-4 flex flex-col min-h-[140px] bg-gray-50/10">
                <div className="bg-blue-900 text-white font-bold text-[9px] py-1 px-3 rounded uppercase tracking-wider text-center self-start mb-3" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                  Approved by AchievePack
                </div>
                
                <div className="flex-1 flex flex-col justify-end space-y-0.5 mt-auto border-t border-dashed border-gray-300 pt-3">
                  <div className="font-extrabold text-sm text-blue-950 italic font-serif mb-0.5" style={{ color: '#172554', fontFamily: 'Georgia, serif' }}>
                    {data.approvedAchieve || 'Pending Signature'}
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span className="font-bold text-gray-700">Position:</span>
                    <span>{data.approvedAchievePos || 'Process Engineer'}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span className="font-bold text-gray-700">Approval Date:</span>
                    <span className="font-mono">{data.approvedAchieveDate || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* CUSTOMER APPROVAL */}
              <div className="border border-gray-300 rounded-xl p-4 flex flex-col min-h-[140px] bg-gray-50/10">
                <div className="bg-amber-800 text-white font-bold text-[9px] py-1 px-3 rounded uppercase tracking-wider text-center self-start mb-3" style={{ backgroundColor: '#92400e', color: 'white' }}>
                  Approved by Customer
                </div>
                
                <div className="flex-1 flex flex-col justify-end space-y-0.5 mt-auto border-t border-dashed border-gray-300 pt-3">
                  <div className="font-extrabold text-sm text-blue-950 italic font-serif mb-0.5" style={{ color: '#172554', fontFamily: 'Georgia, serif' }}>
                    {data.approvedCustomer || 'Pending Sign-off'}
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span className="font-bold text-gray-700">Position:</span>
                    <span>{data.approvedCustomerPos || 'Technical Representative'}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span className="font-bold text-gray-700">Approval Date:</span>
                    <span className="font-mono">{data.approvedCustomerDate || 'N/A'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="absolute bottom-[8mm] left-[12mm] right-[12mm] flex justify-between text-[9px] text-gray-400 font-medium border-t pt-2">
            <span>Issue date: 23/06/15</span>
            <span>page 4 / 4</span>
          </div>
        </div>

      </div>

    </div>
  );
}
