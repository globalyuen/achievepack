import React, { useState, useEffect } from 'react';
import { Download, Plus, Trash2, Loader2, FileText, Check, Printer, FileCheck, Layers, ShieldCheck, ClipboardList, Save } from 'lucide-react';

interface LayerFormulation {
  layer: number;
  chemicalName: string;
  tradeName: string;
  blendPct: string;
  thickness: string;
  foodContact: string;
}

interface ComplianceData {
  customer: string;
  customerAddress: string;
  productName: string;
  materialStructure: string;
  totalThickness: string;
  density: string;
  yieldGsm: string;
  issueDate: string;
  validityMonths: string;
  conditionsOfUse: string;
  storageCondition: string;
  signatoryName: string;
  signatoryTitle: string;
  layers: LayerFormulation[];
  restrictedSubstances: { name: string; intentionallyAdded: 'YES' | 'NO'; details?: string }[];
}

const FULL_RESTRICTED_SUBSTANCES = [
  { name: 'Butylated hydroxyanisole (BHA) and 3,5-di-tert-4-hydroxytoluene (BHT) and tertiary butylhydroquinone (TBHQ)', intentionallyAdded: 'NO' as const },
  { name: 'Alkylphenol Ethoxylates, including Nonyl phenol ethoxylates, and octyl phenol ethoxylates', intentionallyAdded: 'NO' as const },
  { name: 'Nonyl Phenols (NP) and Tris(nonylphenyl) phosphite (TNPP)', intentionallyAdded: 'NO' as const },
  { name: 'Phthalates – DEHP, DBP, DINP, DIDP, BBP, DIBP, DNOP, DMP, DEP', intentionallyAdded: 'NO' as const },
  { name: 'Halogenated Flame Retardants (PBBs, TBBA, TBBPA, PBDEs, Penta, Octa, Deca BDE)', intentionallyAdded: 'NO' as const },
  { name: 'Epoxy derivatives - BADGE, BFDGE, NOGE', intentionallyAdded: 'NO' as const },
  { name: 'Bisphenol A (BPA)', intentionallyAdded: 'NO' as const },
  { name: 'Vinyl chloride monomer (VCM)', intentionallyAdded: 'NO' as const },
  { name: 'Acrylonitrile or acrylonitrile co-polymers', intentionallyAdded: 'NO' as const },
  { name: 'Polycyclic Aromatic Hydrocarbons (PAHs)', intentionallyAdded: 'NO' as const },
  { name: 'Azodyes', intentionallyAdded: 'NO' as const },
  { name: 'Epoxidised Soybean Oil (ESBO)', intentionallyAdded: 'NO' as const },
  { name: 'Abietic acid', intentionallyAdded: 'NO' as const },
  { name: 'Di-methyl fumerate', intentionallyAdded: 'NO' as const },
  { name: 'Melamine', intentionallyAdded: 'NO' as const },
  { name: 'Allergens (Peanuts, seeds, fish, shellfish, eggs, milk, wheat, soybeans)', intentionallyAdded: 'NO' as const },
  { name: 'Conflict Minerals', intentionallyAdded: 'NO' as const },
  { name: 'Recycled Materials', intentionallyAdded: 'NO' as const },
  { name: 'Per and poly fluoroalkyl substances (PFAS)', intentionallyAdded: 'NO' as const },
  { name: 'Mineral Oil Saturated Hydrocarbons (MOSH) / Mineral Oil Aromatic Hydrocarbons (MOAH)', intentionallyAdded: 'NO' as const }
];

const PRESETS: Record<string, { label: string; description: string; data: ComplianceData }> = {
  pvdc: {
    label: 'PVdC-PET / PE (SEGAPAC Style)',
    description: 'High-barrier compliance declaration for supplement powders and room temp storage.',
    data: {
      customer: 'Sega Pac Pty Ltd',
      customerAddress: 'Unit 4, 12 Technology Drive, Lane Cove NSW 2066, Australia',
      productName: 'Vacuum seal packing laminate for cooked food products',
      materialStructure: '14μm PVdC PET / Adhesive / 70μm PE',
      totalThickness: '86',
      density: '0.95',
      yieldGsm: '86',
      issueDate: new Date().toISOString().split('T')[0],
      validityMonths: '18',
      conditionsOfUse: 'B through G',
      storageCondition: 'Room Temperature',
      signatoryName: 'Ryan Wong',
      signatoryTitle: 'Packaging Development Specialist',
      layers: [
        { layer: 1, chemicalName: 'PVdC coated Polyester (PET) film', tradeName: 'AP-PET-PVDC', blendPct: '100%', thickness: '14μm', foodContact: 'Non-Direct Contact' },
        { layer: 2, chemicalName: 'Polyurethane Laminating Adhesive', tradeName: 'AP-ADH-200', blendPct: '100%', thickness: '3μm', foodContact: 'Indirect Contact' },
        { layer: 3, chemicalName: 'Polyethylene (PE) sealant film', tradeName: 'AP-PE-70', blendPct: '100%', thickness: '70μm', foodContact: 'Direct Contact' }
      ],
      restrictedSubstances: [...FULL_RESTRICTED_SUBSTANCES]
    }
  },
  compostable: {
    label: 'Kraft Paper / PBAT / PLA (Compostable)',
    description: '100% Home & Industrial Compostable structure compliance declaration.',
    data: {
      customer: 'EcoFood Co.',
      customerAddress: '56 Green Way, Brunswick VIC 3056, Australia',
      productName: 'Compostable Kraft pouch for organic cookies and granola',
      materialStructure: '30g Kraft Paper / Bio-PBS Adhesive / 50μm PLA Sealant Film',
      totalThickness: '110',
      density: '0.86',
      yieldGsm: '95',
      issueDate: new Date().toISOString().split('T')[0],
      validityMonths: '18',
      conditionsOfUse: 'B through H',
      storageCondition: 'Cool & Dry Environment (<30°C)',
      signatoryName: 'Ryan Wong',
      signatoryTitle: 'Packaging Development Specialist',
      layers: [
        { layer: 1, chemicalName: 'FSC Certified Kraft Paper', tradeName: 'AP-KRAFT-30G', blendPct: '100%', thickness: '45μm', foodContact: 'Non-Direct Contact' },
        { layer: 2, chemicalName: 'Biodegradable PBS Adhesive', tradeName: 'AP-BIO-PBS-ADH', blendPct: '100%', thickness: '4μm', foodContact: 'Indirect Contact' },
        { layer: 3, chemicalName: 'PLA Sealant Film', tradeName: 'AP-PLA-50', blendPct: '100%', thickness: '50μm', foodContact: 'Direct Contact' }
      ],
      restrictedSubstances: [...FULL_RESTRICTED_SUBSTANCES]
    }
  },
  recyclable: {
    label: 'Mono-Material PE / EVOH-PE (Recyclable)',
    description: '100% Recyclable high barrier mono-PE compliance declaration.',
    data: {
      customer: 'CleanFoods Ltd',
      customerAddress: '88 Circular Road, Suite 12, Singapore 049403',
      productName: 'Recycle-ready high barrier PE pouch for protein powders',
      materialStructure: 'MDO-PE / Solventless Adhesive / High-Barrier EVOH-PE Film',
      totalThickness: '105',
      density: '0.93',
      yieldGsm: '98',
      issueDate: new Date().toISOString().split('T')[0],
      validityMonths: '18',
      conditionsOfUse: 'B through G',
      storageCondition: 'Dry warehouse (15°C - 28°C)',
      signatoryName: 'Ryan Wong',
      signatoryTitle: 'Packaging Development Specialist',
      layers: [
        { layer: 1, chemicalName: 'Machine Direction Oriented Polyethylene (MDO-PE)', tradeName: 'AP-MDO-PE-25', blendPct: '100%', thickness: '25μm', foodContact: 'Non-Direct Contact' },
        { layer: 2, chemicalName: 'Solventless Polyurethane Adhesive', tradeName: 'AP-ADH-SL10', blendPct: '100%', thickness: '3μm', foodContact: 'Indirect Contact' },
        { layer: 3, chemicalName: 'Coextruded High-Barrier EVOH-PE Sealant film', tradeName: 'AP-EVOH-PE-77', blendPct: '100%', thickness: '77μm', foodContact: 'Direct Contact' }
      ],
      restrictedSubstances: [...FULL_RESTRICTED_SUBSTANCES]
    }
  },
  pcr: {
    label: '50% PCR-PET / PE (Recycled Content)',
    description: 'Post-Consumer Recycled content high-barrier compliance declaration.',
    data: {
      customer: 'PureGym Nutrition',
      customerAddress: 'Unit 9A, Industrial Estate, Leeds LS10 1NT, United Kingdom',
      productName: 'High-barrier PCR pouch for Whey protein isolate',
      materialStructure: '12μm PCR-PET (50% recycled) / AL-Adhesive / 80μm PE Film',
      totalThickness: '95',
      density: '0.97',
      yieldGsm: '92',
      issueDate: new Date().toISOString().split('T')[0],
      validityMonths: '18',
      conditionsOfUse: 'B through G',
      storageCondition: 'Ambient Dry Storage (10°C - 30°C)',
      signatoryName: 'Ryan Wong',
      signatoryTitle: 'Packaging Development Specialist',
      layers: [
        { layer: 1, chemicalName: '50% Post-Consumer Recycled PET film', tradeName: 'AP-PCR-PET12', blendPct: '100%', thickness: '12μm', foodContact: 'Non-Direct Contact' },
        { layer: 2, chemicalName: 'Laminating Polyurethane Adhesive', tradeName: 'AP-ADH-PU88', blendPct: '100%', thickness: '3μm', foodContact: 'Indirect Contact' },
        { layer: 3, chemicalName: 'Polyethylene (PE) sealant film', tradeName: 'AP-PE-80', blendPct: '100%', thickness: '80μm', foodContact: 'Direct Contact' }
      ],
      restrictedSubstances: [...FULL_RESTRICTED_SUBSTANCES]
    }
  }
};

interface SavedLetter {
  id: string;
  name: string;
  timestamp: string;
  data: ComplianceData;
}

interface ComplianceLetterTabProps {
  globalCustomer?: string;
}

export default function ComplianceLetterTab({ globalCustomer }: ComplianceLetterTabProps) {
  const [data, setData] = useState<ComplianceData>(PRESETS.pvdc.data);
  const [activeFormTab, setActiveFormTab] = useState<'general' | 'formulation' | 'regulatory' | 'solvents' | 'signoff'>('general');
  const [successMsg, setSuccessMsg] = useState('');
  const [savedLetters, setSavedLetters] = useState<SavedLetter[]>([]);
  const [isPrinted, setIsPrinted] = useState(true);

  // Update customer if global selector changes
  useEffect(() => {
    if (globalCustomer) {
      setData(prev => ({
        ...prev,
        customer: globalCustomer
      }));
    }
  }, [globalCustomer]);

  // Load saved letters from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('achievepack_saved_compliance_letters');
      if (stored) {
        setSavedLetters(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading saved compliance letters:', e);
    }
  }, []);

  const loadPreset = (key: string) => {
    if (PRESETS[key]) {
      const selectedCust = data.customer;
      const selectedAddr = data.customerAddress;
      setData({
        ...PRESETS[key].data,
        customer: selectedCust || PRESETS[key].data.customer,
        customerAddress: selectedAddr || PRESETS[key].data.customerAddress
      });
      setSuccessMsg(`Loaded preset: ${PRESETS[key].label}`);
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleFieldChange = (field: keyof ComplianceData, value: any) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLayerChange = (index: number, field: keyof LayerFormulation, value: string) => {
    const updatedLayers = [...data.layers];
    updatedLayers[index] = {
      ...updatedLayers[index],
      [field]: value
    };
    setData(prev => ({ ...prev, layers: updatedLayers }));
  };

  const addLayerRow = () => {
    const nextLayerNum = data.layers.length + 1;
    const newLayer: LayerFormulation = {
      layer: nextLayerNum,
      chemicalName: '',
      tradeName: '',
      blendPct: '100%',
      thickness: '10μm',
      foodContact: 'Direct Contact'
    };
    setData(prev => ({
      ...prev,
      layers: [...prev.layers, newLayer]
    }));
  };

  const removeLayerRow = (index: number) => {
    if (data.layers.length <= 1) {
      alert("At least one layer must remain in the formulation.");
      return;
    }
    const updated = data.layers
      .filter((_, idx) => idx !== index)
      .map((item, idx) => ({ ...item, layer: idx + 1 }));
    setData(prev => ({ ...prev, layers: updated }));
  };

  const handleSubstanceToggle = (index: number) => {
    const updated = [...data.restrictedSubstances];
    updated[index].intentionallyAdded = updated[index].intentionallyAdded === 'YES' ? 'NO' : 'YES';
    setData(prev => ({ ...prev, restrictedSubstances: updated }));
  };

  const handleSaveLetter = () => {
    const defaultName = `${data.customer || 'Unnamed Client'} Compliance Letter`;
    const nameInput = prompt('Enter a name for this saved Declaration of Compliance:', defaultName);
    
    if (nameInput === null) return;
    const finalName = nameInput.trim() || defaultName;

    const newSavedItem: SavedLetter = {
      id: Date.now().toString(),
      name: finalName,
      timestamp: new Date().toISOString(),
      data: data
    };

    const updated = [newSavedItem, ...savedLetters];
    setSavedLetters(updated);
    localStorage.setItem('achievepack_saved_compliance_letters', JSON.stringify(updated));
    setSuccessMsg(`Declaration "${finalName}" saved locally!`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleLoadLetter = (letter: SavedLetter) => {
    setData(letter.data);
    setSuccessMsg(`Restored Compliance Letter: ${letter.name}`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteLetter = (idToDelete: string, name: string) => {
    if (confirm(`Are you sure you want to permanently delete the saved compliance letter "${name}"?`)) {
      const updated = savedLetters.filter(item => item.id !== idToDelete);
      setSavedLetters(updated);
      localStorage.setItem('achievepack_saved_compliance_letters', JSON.stringify(updated));
      setSuccessMsg('Deleted compliance letter.');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
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
        
        {/* LEFT COLUMN: Input form & Preset Selectors */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          
          {/* Preset Buttons */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              1. Load Technical Presets
            </h3>
            <p className="text-xs text-gray-500 mb-4 font-medium">Select a structural template to auto-populate compliance declarations and formulas:</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(PRESETS).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => loadPreset(key)}
                  className="flex flex-col text-left p-3 rounded-xl border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50/30 transition text-xs relative group active:scale-95"
                >
                  <span className="font-extrabold text-gray-900 group-hover:text-indigo-700">{item.label}</span>
                  <span className="text-[10px] text-gray-500 mt-1 line-clamp-1">{item.description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Saved Custom Compliance Letters */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                2. Saved Custom Documents
              </h3>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 font-extrabold px-2 py-0.5 rounded-full">{savedLetters.length} Saved</span>
            </div>
            
            {savedLetters.length > 0 ? (
              <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                {savedLetters.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-2.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100/70 transition text-xs">
                    <div className="flex flex-col gap-0.5 max-w-[70%]">
                      <span className="font-extrabold text-gray-900 truncate">{item.name}</span>
                      <div className="text-[10px] text-gray-500 font-medium truncate">
                        {item.data.materialStructure} • {new Date(item.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleLoadLetter(item)}
                        className="p-1.5 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-gray-500 transition active:scale-95"
                        title="Load Document"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteLetter(item.id, item.name)}
                        className="p-1.5 hover:bg-red-50 hover:text-red-700 rounded-lg text-gray-500 transition active:scale-95"
                        title="Delete Document"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-gray-200 rounded-xl p-5 text-center text-gray-400">
                <ClipboardList className="w-8 h-8 text-gray-300 mx-auto mb-1 stroke-[1.5]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">No Custom Saved Letters</span>
              </div>
            )}
          </div>

          {/* Form Tabs and Fields */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col flex-1">
            <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-indigo-600" />
                3. Customize Letter Details
              </h3>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">Interactive</span>
            </div>

            {/* Form Category Switcher */}
            <div className="flex bg-gray-100/80 p-1 divide-x divide-gray-200 overflow-x-auto scrollbar-hide border-b border-gray-200">
              <button onClick={() => setActiveFormTab('general')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'general' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>General</button>
              <button onClick={() => setActiveFormTab('formulation')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'formulation' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Layers</button>
              <button onClick={() => setActiveFormTab('regulatory')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'regulatory' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Regulatory</button>
              <button onClick={() => setActiveFormTab('solvents')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'solvents' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Substances</button>
              <button onClick={() => setActiveFormTab('signoff')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'signoff' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Sign-off</button>
            </div>

            {/* Form Fields Scrollbox */}
            <div className="p-5 space-y-4 max-h-[460px] overflow-y-auto">
              
              {/* TAB: GENERAL */}
              {activeFormTab === 'general' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer / Client Name</label>
                    <input type="text" value={data.customer} onChange={e => handleFieldChange('customer', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-bold" placeholder="e.g. Sega Pac Pty Ltd" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer Address</label>
                    <textarea rows={2} value={data.customerAddress} onChange={e => handleFieldChange('customerAddress', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="Customer full office/factory address" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Product Name / End Use Application</label>
                    <input type="text" value={data.productName} onChange={e => handleFieldChange('productName', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Powdered supplements, room temp storage" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Material Structure Description</label>
                    <input type="text" value={data.materialStructure} onChange={e => handleFieldChange('materialStructure', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono text-indigo-700" placeholder="e.g. 14μm PVdC PET / Adhesive / 70μm PE" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Thickness (μm)</label>
                      <input type="text" value={data.totalThickness} onChange={e => handleFieldChange('totalThickness', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 86" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Density (g/cc)</label>
                      <input type="text" value={data.density} onChange={e => handleFieldChange('density', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 0.95" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Yield (g/m²)</label>
                      <input type="text" value={data.yieldGsm} onChange={e => handleFieldChange('yieldGsm', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. 86" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <span className="text-xs font-bold text-gray-700 uppercase">Packaging is printed?</span>
                    <div className="flex bg-gray-200 p-0.5 rounded-lg border border-gray-300 w-fit">
                      <button
                        type="button"
                        onClick={() => setIsPrinted(true)}
                        className={`px-3 py-1 rounded text-xs font-bold transition-all ${isPrinted ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                      >
                        Yes (Printed)
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsPrinted(false)}
                        className={`px-3 py-1 rounded text-xs font-bold transition-all ${!isPrinted ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
                      >
                        No (Unprinted)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: FORMULATION LAYERS */}
              {activeFormTab === 'formulation' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-gray-700 uppercase">Resin Formulation / Layer Breakdown</span>
                    <button type="button" onClick={addLayerRow} className="flex items-center gap-1 text-[11px] bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold px-2 py-1 rounded-lg transition">
                      <Plus className="w-3 h-3" /> Add Layer
                    </button>
                  </div>
                  <div className="space-y-3">
                    {data.layers.map((layer, idx) => (
                      <div key={idx} className="p-3 border border-gray-200 rounded-xl bg-gray-50/50 space-y-2 relative">
                        <button type="button" onClick={() => removeLayerRow(idx)} className="absolute top-2.5 right-2.5 text-gray-400 hover:text-red-500 transition p-1" title="Delete Layer">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] bg-indigo-100 text-indigo-700 font-extrabold px-2 py-0.5 rounded-md">Layer {layer.layer}</span>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Chemical/Resin Name</label>
                            <input type="text" value={layer.chemicalName} onChange={e => handleLayerChange(idx, 'chemicalName', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white" placeholder="e.g. Polyester film" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Trade Name / Supplier Ref</label>
                            <input type="text" value={layer.tradeName} onChange={e => handleLayerChange(idx, 'tradeName', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white" placeholder="e.g. AP-PET-12" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Blend %</label>
                            <input type="text" value={layer.blendPct} onChange={e => handleLayerChange(idx, 'blendPct', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white" placeholder="100%" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Thickness</label>
                            <input type="text" value={layer.thickness} onChange={e => handleLayerChange(idx, 'thickness', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white" placeholder="12μm" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Food Contact Status</label>
                            <select value={layer.foodContact} onChange={e => handleLayerChange(idx, 'foodContact', e.target.value)} className="w-full border-gray-200 rounded text-xs px-1 py-1 bg-white">
                              <option value="Direct Contact">Direct Contact</option>
                              <option value="Indirect Contact">Indirect Contact</option>
                              <option value="Non-Direct Contact">Non-Direct</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: REGULATORY & VALIDITY */}
              {activeFormTab === 'regulatory' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Issue Date</label>
                      <input type="date" value={data.issueDate} onChange={e => handleFieldChange('issueDate', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Validity Period (Months)</label>
                      <input type="number" value={data.validityMonths} onChange={e => handleFieldChange('validityMonths', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="18" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">FDA Conditions of Use</label>
                      <input type="text" value={data.conditionsOfUse} onChange={e => handleFieldChange('conditionsOfUse', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. B through G" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Fit for Storage Condition</label>
                      <input type="text" value={data.storageCondition} onChange={e => handleFieldChange('storageCondition', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="e.g. Room Temperature" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: RESTRICTED SUBSTANCES */}
              {activeFormTab === 'solvents' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-gray-600 uppercase mb-2">Restricted Substances (Toggle status)</div>
                  <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                    {data.restrictedSubstances.map((sub, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-3 p-2 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100/50 transition">
                        <span className="text-[11px] text-gray-700 font-medium leading-tight">{sub.name}</span>
                        <button
                          type="button"
                          onClick={() => handleSubstanceToggle(idx)}
                          className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all flex-shrink-0 ${sub.intentionallyAdded === 'YES' ? 'bg-red-500 text-white shadow-sm' : 'bg-emerald-500 text-white'}`}
                        >
                          {sub.intentionallyAdded === 'YES' ? 'YES' : 'NO'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: SIGN-OFF */}
              {activeFormTab === 'signoff' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Authorized Signatory Name</label>
                      <input type="text" value={data.signatoryName} onChange={e => handleFieldChange('signatoryName', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Authorized Signatory Title</label>
                      <input type="text" value={data.signatoryTitle} onChange={e => handleFieldChange('signatoryTitle', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Form Footer Action Buttons */}
            <div className="bg-gray-50 border-t border-gray-200 p-4 flex gap-3">
              <button
                type="button"
                onClick={handleSaveLetter}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 font-extrabold text-xs uppercase tracking-wider hover:bg-gray-200 transition active:scale-95"
              >
                <Save className="w-4 h-4 text-gray-600" /> Save Spec
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-indigo-700 transition active:scale-95 shadow-md shadow-indigo-600/10"
              >
                <Printer className="w-4 h-4" /> Print Letter
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Live document preview */}
        <div className="xl:col-span-7 flex flex-col h-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px] xl:max-h-[900px]">
          <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center flex-shrink-0">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Document Live Preview
            </h3>
            <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">4-Page Layout Preview</span>
          </div>

          <div className="p-6 overflow-y-auto bg-gray-100/50 flex-1 space-y-6 flex flex-col items-center">
            
            {/* SCREEN PAGE 1 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-[9px] text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              {/* Header Letterhead */}
              <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-2 mb-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <img src="/logo.png" alt="AchievePack" className="h-9 w-auto object-contain" />
                    <span className="text-lg font-black tracking-widest text-blue-950 font-sans">achievepack</span>
                  </div>
                  <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging</span>
                </div>
                <div className="text-right text-[7px] leading-tight text-gray-500 max-w-[250px]">
                  <strong className="text-[9px] text-gray-800 font-bold block">AchievePack Limited</strong>
                  HK BRN: 41007097-000-07-14-4<br/>
                  1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
                  Hotline: +852 6970 4411 | engineering@achievepack.com
                </div>
              </div>

              <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-4">
                Declaration of Compliance (Food Contact & Suitability)
              </div>

              {/* Salutation Block */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-2 border-b border-gray-100">
                <div className="space-y-1 text-[9px]">
                  <span className="font-extrabold text-gray-400 uppercase tracking-widest text-[7px] block">Customer Details</span>
                  <div className="font-bold text-gray-900 text-xs">{data.customer || '[Customer Name]'}</div>
                  <div className="text-gray-500 whitespace-pre-line leading-tight">{data.customerAddress || '[Customer Address]'}</div>
                </div>
                <div className="space-y-1 text-[9px] text-right">
                  <span className="font-extrabold text-gray-400 uppercase tracking-widest text-[7px] block">Document Control</span>
                  <div><span className="font-semibold text-gray-500">Issue Date:</span> <span className="font-bold text-gray-900">{data.issueDate}</span></div>
                  <div><span className="font-semibold text-gray-500">Validity:</span> <span className="font-bold text-gray-900">{data.validityMonths || '18'} Months</span></div>
                  <div><span className="font-semibold text-gray-500">Application:</span> <span className="font-bold text-gray-900">{data.storageCondition || 'Room Temp Storage'}</span></div>
                </div>
              </div>

              {/* Body Content Page 1 */}
              <div className="space-y-3 flex-1">
                <p className="leading-relaxed">
                  AchievePack Limited hereby declares that the packaging materials supplied under the description below are in compliance with the relevant statutory requirements for food contact suitability, composition, and migration properties as specified by global regulatory authorities.
                </p>

                {/* Material Specification Summary Table */}
                <table className="w-full border-collapse my-2 text-[9px]">
                  <thead>
                    <tr className="bg-gray-100 border-y border-gray-300">
                      <th className="py-1.5 px-2 text-left font-bold text-gray-700 w-1/3">Sales Name</th>
                      <th className="py-1.5 px-2 text-left font-bold text-gray-700 w-1/3">Structure Specs</th>
                      <th className="py-1.5 px-2 text-center font-bold text-gray-700">Thickness</th>
                      <th className="py-1.5 px-2 text-center font-bold text-gray-700">Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-1.5 px-2 font-semibold text-gray-900">{data.productName || 'N/A'}</td>
                      <td className="py-1.5 px-2 font-mono text-indigo-700">{data.materialStructure || 'N/A'}</td>
                      <td className="py-1.5 px-2 text-center font-mono">{data.totalThickness || '0'}μm</td>
                      <td className="py-1.5 px-2 text-center font-mono">{data.yieldGsm || '0'} gsm</td>
                    </tr>
                  </tbody>
                </table>

                <div className="space-y-2.5">
                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Fitness for Use</h4>
                    <p className="text-gray-700 text-[8.5px]">
                      AchievePack Limited guarantees that the packaging pouch is generally fit for the packaging of <strong>{data.productName || 'Powdered supplements'}</strong>, storage at <strong>{data.storageCondition || 'Room Temperature'}</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">US Food Law Compliance</h4>
                    <p className="text-gray-700 text-[8.5px]">
                      AchievePack Limited guarantees that the product will be suitable for the packaging of all food types under conditions of use <strong>{data.conditionsOfUse || 'x through y'}</strong>, as defined in <strong>21 CFR 176.170(c)</strong>, Tables 1 and 2, respectively. All raw materials used in this structure shall be in full compliance with the Federal Food, Drug, and Cosmetic Act and all applicable Food Additive Regulations. Because of their suitable FDA status, the materials can be used to package food in federally inspected plants in full compliance with the laws and regulations administered by USDA.
                    </p>
                    <p className="text-gray-700 text-[8.5px] mt-1">
                      AchievePack Limited guarantees that each shipment or delivery of Product to <strong>{data.customer || '[Customer Name]'}</strong> is in full compliance with FDA regulations and manufactured under appropriate GMP's as to prevent the packaged food from becoming contaminated with a biological, chemical or physical agent that could cause injury or illness or render the packaged product adulterated within the meaning of the Federal Food, Drug, and Cosmetic Act. AchievePack Limited guarantees the packaging materials continuing compliance, with respect to all future shipments deliveries to <strong>{data.customer || '[Customer Name]'}</strong> with applicable provisions of FDA regulations. AchievePack Limited will not make raw material substitutions without prior approval from the Director of Global Product Safety and Regulatory Compliance of <strong>{data.customer || '[Customer Name]'}</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">China GB</h4>
                    <p className="text-gray-700 text-[8.5px]">
                      AchievePack Limited guarantees that the packaging pouch complies with the following legislation of China:
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-700 text-[8px] mt-1 list-disc pl-4">
                      <li><strong>GB31603-2015</strong> General hygienic standard for production of Food Contact Materials and Articles</li>
                      <li><strong>GB9685-2016</strong> Additives for Food Contact Materials and Articles</li>
                      <li><strong>GB4806.1-2016</strong> General Safety Requirements for Food Contact Materials and Articles</li>
                      <li><strong>GB4806.7-2023</strong> National Food Safety Standard on Food-Contact Use Plastic Materials and Articles</li>
                      <li><strong>GB4806.8-2022</strong> Food contact paper and paperboard materials and articles</li>
                      <li><strong>GB4806.9-2023</strong> National Food Safety Standard on Food-Contact Use Metal Materials and Articles</li>
                      <li><strong>GB4806.10-2016</strong> Food contact coating and coating layers</li>
                      <li><strong>GB4806.13-2023</strong> National Food Safety Standard on Food-Contact Use Composite Materials and Articles</li>
                      <li><strong>GB4806.14-2023</strong> National Food Safety Standard on Food-Contact Use Printing Inks</li>
                      <li><strong>GB4806.15-2024</strong> National Food Safety Standard on Food-Contact Use Adhesive</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 1 of 4</span>
              </div>
            </div>

            {/* SCREEN PAGE 2 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-[9px] text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              <div className="space-y-3 flex-1">
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">EUROPE</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    AchievePack Limited product complies with the relevant requirements of:
                  </p>
                  <ul className="list-disc pl-4 text-gray-700 text-[8.5px] mb-1">
                    <li>Framework Regulation <strong>(EC) n.1935/2004</strong></li>
                    <li>Plastic Regulation <strong>(EU) n.10/2011</strong> as amended</li>
                    <li>Good Manufacturing Practice <strong>(EC) n. 2023/2006</strong></li>
                  </ul>
                  <p className="text-gray-700 text-[8.5px]">
                    All monomers, additives, colorants, coatings and adhesives used for the manufacture of the above packaging material have been pre-registered in accordance with <strong>Regulation (EC) No 1907/2006</strong> of the European Parliament and of the Council of 18 December 2006 (concerning the Registration, Evaluation, Authorization and Restriction of Chemicals (REACH) and there are no substances present which are on the Candidate List of SVHC – Annex XIV thereof at the date of <strong>20 September 2016</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Japan</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    AchievePack Limited packaging materials and components comply with the requirements of Specifications and Standards for Food, Food Additives, etc. (Ministry of Health and Welfare <strong>Notification No. 370, 1959</strong> and <strong>Notification No. 196, 2020</strong>, latest amendment on revised Positive Lists published 30th November and 25th December 2023), and Ministerial Ordinance on Milk and Milk products Concerning Compositional Standards, etc. (Ministry of Health and Welfare <strong>Ordinance No. 52, 1951</strong>), which are under the Japanese Food Sanitation Law.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Allergens</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    AchievePack Limited guarantees that the Product is not manufactured with raw materials known to be allergenic in nature. The eight major food allergens include, peanuts, seeds, fish, shellfish, eggs, milk, wheat, soybeans, and components derived or manufactured from these raw materials.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Animal Derived Content</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    AchievePack Limited guarantees that animal derivatives are not components of, nor intentionally added to the materials used in this product. Above product is <strong>not intentionally</strong> contains animal derived content. If yes, the animal derived content meets the requirements of <strong>EU 2011/C 73/01</strong> "Note for guidance on minimising the risk of transmitting animal spongiform encephalopathy agents via human and veterinary medicinal products".
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Material Change Control Management</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    AchievePack Limited will not switch to any listed alternative material in the specification without prior approval from the Regional Quality Leader of <strong>{data.customer || '[Customer Name]'}</strong> through change control management process.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Heavy metals(重金属)</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    Above product is manufactured in compliance with European Directive <strong>94/62/EC</strong> including subsequent amendments up to Directive <strong>2015/720</strong>. Consequently, the combined total amount of Lead, Cadmium, Mercury and Hexavalent Chromium does not exceed 100 ppm. In addition the following levels are not exceeded:
                  </p>
                  <ul className="grid grid-cols-3 gap-1 text-[8.5px] font-mono text-gray-700 pl-4 list-disc">
                    <li>Antimony (Sb) &lt; 50 ppm</li>
                    <li>Arsenic (As) &lt; 10 ppm</li>
                    <li>Barium (Ba) &lt; 10 ppm</li>
                    <li>Cadmium (Cd) &lt; 5 ppm</li>
                    <li>Chromium (Cr) &lt; 10 ppm</li>
                    <li>Lead (Pb) &lt; 10 ppm</li>
                    <li>Mercury (Hg) &lt; 5 ppm</li>
                    <li>Selenium (Se) &lt; 10 ppm</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Candidate List of substances of very high concern (SVHC) - REACH</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    Do not contain any chemical substances at, or, above, the level of 0.1% by weight as listed in Substances of Very High Concern (SVHC), published on <strong>January 21 2025</strong> (date). (ECHA Candidate list).
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Annex II of EU Directive 2011/65/EU (RoHS)</h4>
                  <p className="text-gray-700 text-[8.5px]">
                    Do not contain any substances that are regulated by the RoHS 3 (EU Directive 2015/863)-Cadmium (Cd), Lead (Pb), Mercury (Hg), Hexavalent Chromium (Cr VI), Polybrominated Biphenyls (PBB), Polybrominated Diphenyl Ethers (PBDE), Bis(2-Ethylhexyl) phthalate (DEHP), Benzyl butyl phthalate (BBP), Dibutyl phthalate (DBP), Diisobutyl phthalate (DIBP). Must inform <strong>{data.customer || '[Customer Name]'}</strong> if the material does NOT comply due to the regulation update.
                  </p>
                </div>
              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 2 of 4</span>
              </div>
            </div>

            {/* SCREEN PAGE 3 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-[9px] text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              <div className="space-y-3 flex-1">
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Solvents subject to restrictions</h4>
                  <div className="flex gap-4 items-center bg-gray-50 border border-gray-200 rounded p-1.5 my-1 text-[8.5px]">
                    <span>The packaging item:</span>
                    <span className="flex items-center gap-1 font-bold">
                      <span className="border border-gray-400 rounded w-3 h-3 flex items-center justify-center font-bold text-[8px] bg-white">{isPrinted ? '✓' : ''}</span> is printed (需要印刷)
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                      <span className="border border-gray-400 rounded w-3 h-3 flex items-center justify-center font-bold text-[8px] bg-white">{!isPrinted ? '✓' : ''}</span> is not printed (不需要印刷)
                    </span>
                  </div>
                  <p className="text-gray-700 text-[8.5px]">
                    Above product does not contain following solvents used in printing inks and adhesives.
                  </p>
                  
                  {/* Prohibited Solvents Bullet List */}
                  <ul className="grid grid-cols-3 gap-x-4 gap-y-0.5 text-gray-600 text-[8px] font-mono pl-4 list-disc my-1">
                    <li>Toluene – CAS No. 108-88-3</li>
                    <li>2-Methoxyethanol – CAS No. 109-86-4</li>
                    <li>2-Ethoxyethanol – CAS No. 110-80-5</li>
                    <li>2-Methoxyethyl acetate – CAS No. 110-49-6</li>
                    <li>2-Ethoxyethyl acetate – CAS No. 111-15-9</li>
                    <li>Methanol – CAS No. 67-56-1</li>
                    <li>Monochlorobenzene – CAS No. 108-90-7</li>
                    <li>Dichlorobenzene – CAS No. Several</li>
                    <li>Trichloroethylene — CAS No. 79-01-6</li>
                    <li>Perchloroethylene — CAS No. 127-18-4</li>
                    <li>Methylene Chloride — CAS No. 75-09-2</li>
                    <li>Volatile Flourochlorinated Hydrocarbons</li>
                    <li>2-Nitropropane – CAS No. 79-46-9</li>
                    <li>Benzene – CAS No. 71-43-2</li>
                    <li>Acetyl acetone (2,4 pentanedione)</li>
                    <li>1-methyl-2-pyrrolidone</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Residual Solvents (溶剂残留)</h4>
                  <div className="flex gap-4 items-center bg-gray-50 border border-gray-200 rounded p-1.5 my-1 text-[8.5px]">
                    <span>The levels of residual solvents:</span>
                    <span className="flex items-center gap-1 font-bold">
                      <span className="border border-gray-400 rounded w-3 h-3 flex items-center justify-center font-bold text-[8px] bg-white">✓</span> comply (符合要求)
                    </span>
                    <span className="flex items-center gap-1 font-bold text-gray-400">
                      <span className="border border-gray-400 rounded w-3 h-3 flex items-center justify-center font-bold text-[8px] bg-white"></span> do not comply (不符合)
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-[8.5px]">
                    The levels of residual solvents from printing materials and adhesives reported in the following list comply with the following limits:
                  </p>
                  
                  <ul className="list-disc pl-4 text-gray-700 text-[8.5px] font-semibold my-1 space-y-0.5">
                    <li>Total Non-alcoholic solvents &lt; 5mg/m²</li>
                    <li>Total Solvents &lt; 5mg/m²</li>
                  </ul>
                  
                  <p className="text-gray-500 text-[8px] font-mono leading-tight">
                    Tested solvents include: Acetone, N-propyl acetate, Isopropyl acetate, Ethyl acetate, Butanone, N-propanol, Ethanol, Isopropanol, Isobutanol.
                  </p>
                </div>

                <div className="pt-2 text-[8px] text-gray-400 font-medium">
                  * Tris (nonylphenyl) phosphite (TNPP) is not component of, nor is it intentionally added to, the materials used in our products supplied to customer.
                  <br />
                  * Finally, we confirm that we will not make raw materials changes without prior notification.
                </div>
              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 3 of 4</span>
              </div>
            </div>

            {/* SCREEN PAGE 4 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-[9px] text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              <div className="space-y-3 flex-1">
                {/* Restricted Substances Table */}
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">1. Restricted substances (限制使用的物质信息)</h4>
                  <table className="w-full border-collapse my-1 text-[7.5px] leading-tight">
                    <thead>
                      <tr className="bg-gray-100 border-y border-gray-300">
                        <th className="py-1 px-1.5 text-left font-bold text-gray-600">Substance Name</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-24">Intentionally Added?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.restrictedSubstances.map((sub, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-0.5 px-1.5 text-gray-700 leading-snug">{sub.name}</td>
                          <td className="py-0.5 px-1.5 text-center font-bold text-emerald-700">{sub.intentionallyAdded}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Formulation breakdown table */}
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">Approved Resins for the Formulation</h4>
                  <table className="w-full border-collapse my-1 text-[7.5px] leading-tight">
                    <thead>
                      <tr className="bg-gray-100 border-y border-gray-300">
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-10">Layer</th>
                        <th className="py-1 px-1.5 text-left font-bold text-gray-600">Resin/Polymer Chemical Name</th>
                        <th className="py-1 px-1.5 text-left font-bold text-gray-600 w-24">Trade Reference</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-14">Blend %</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-14">Thickness</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-24">FDA Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.layers.map((layer, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-0.5 px-1.5 text-center font-mono text-gray-500">{layer.layer}</td>
                          <td className="py-0.5 px-1.5 text-gray-700 font-semibold">{layer.chemicalName || 'N/A'}</td>
                          <td className="py-0.5 px-1.5 text-gray-700 font-mono text-[7px]">{layer.tradeName || 'N/A'}</td>
                          <td className="py-0.5 px-1.5 text-center font-mono">{layer.blendPct || '100%'}</td>
                          <td className="py-0.5 px-1.5 text-center font-mono">{layer.thickness || 'N/A'}</td>
                          <td className="py-0.5 px-1.5 text-center text-[7px] text-gray-500 font-bold">{layer.foodContact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Sign-off Signature block */}
                <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-gray-500 text-[10px] font-bold block uppercase tracking-wider">Authorized Signature</span>
                    
                    <div className="border border-indigo-100 rounded-xl p-3 bg-indigo-50/50 flex flex-col justify-center min-h-[50px] relative w-48 shadow-inner">
                      <span className="font-serif italic text-base text-indigo-800 tracking-wide select-none">
                        {data.signatoryName || 'Ryan Wong'}
                      </span>
                      <span className="text-[7px] text-indigo-400 font-mono tracking-widest uppercase mt-1">
                        AchievePack Digital Sign-off
                      </span>
                    </div>

                    <div className="text-[10px] leading-tight">
                      <strong className="text-gray-900 block">{data.signatoryName || 'Ryan Wong'}</strong>
                      <span className="text-gray-500 font-medium">{data.signatoryTitle || 'Packaging Development Specialist'}</span>
                      <span className="text-gray-400 block mt-0.5">AchievePack Limited</span>
                    </div>
                  </div>
                  <div className="text-right text-[9px] text-gray-500 font-semibold self-end">
                    *This compliance document is valid for 18 months from the signing date.
                  </div>
                </div>

              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 4 of 4</span>
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
              height: 280mm;
              padding: 12mm 15mm 12mm 15mm;
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
              margin-bottom: 2px !important;
              font-size: 10px !important;
            }
            p {
              margin-bottom: 5px !important;
              font-size: 8px !important;
              line-height: 1.35 !important;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin-bottom: 6px !important;
            }
            th, td {
              border: 1px solid #bdc3c7;
              padding: 3px 5px !important;
              font-size: 7.5px !important;
              line-height: 1.25 !important;
            }
            .bg-gray-100 {
              background-color: #f5f6fa !important;
            }
            .text-indigo-700 {
              color: #4338ca !important;
            }
          }
        `}</style>

        {/* PRINT PAGE 1 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header Letterhead */}
            <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <img src="/logo.png" alt="AchievePack" className="h-10 w-auto object-contain" />
                  <span className="text-xl font-black tracking-widest text-blue-950">achievepack</span>
                </div>
                <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging</span>
              </div>
              <div className="text-right text-[8px] leading-tight text-gray-500 max-w-[250px]">
                <strong className="text-[9px] text-gray-800 font-bold block">AchievePack Limited</strong>
                HK BRN: 41007097-000-07-14-4<br/>
                1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
                Hotline: +852 6970 4411 | engineering@achievepack.com
              </div>
            </div>

            <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-4" style={{ color: 'white' }}>
              Declaration of Compliance (Food Contact & Suitability)
            </div>

            {/* Salutation Block */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-2 border-b border-gray-100">
              <div className="space-y-1 text-[9px]">
                <span className="font-extrabold text-gray-400 uppercase tracking-widest text-[7px] block">Customer Details</span>
                <div className="font-bold text-gray-900 text-xs">{data.customer || '[Customer Name]'}</div>
                <div className="text-gray-500 whitespace-pre-line leading-tight">{data.customerAddress || '[Customer Address]'}</div>
              </div>
              <div className="space-y-1 text-[9px] text-right">
                <span className="font-extrabold text-gray-400 uppercase tracking-widest text-[7px] block">Document Control</span>
                <div><span className="font-semibold text-gray-500">Issue Date:</span> <span className="font-bold text-gray-900">{data.issueDate}</span></div>
                <div><span className="font-semibold text-gray-500">Validity:</span> <span className="font-bold text-gray-900">{data.validityMonths || '18'} Months</span></div>
                <div><span className="font-semibold text-gray-500">Application:</span> <span className="font-bold text-gray-900">{data.storageCondition || 'Room Temp Storage'}</span></div>
              </div>
            </div>

            {/* Body Content */}
            <p className="mb-4">
              AchievePack Limited hereby declares that the packaging materials supplied under the description below are in compliance with the relevant statutory requirements for food contact suitability, composition, and migration properties as specified by global regulatory authorities.
            </p>

            {/* Material Summary Table */}
            <table className="w-full mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left font-bold text-gray-700 w-1/3">Sales Name</th>
                  <th className="text-left font-bold text-gray-700 w-1/3">Structure Specs</th>
                  <th className="text-center font-bold text-gray-700">Thickness</th>
                  <th className="text-center font-bold text-gray-700">Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-gray-900">{data.productName || 'N/A'}</td>
                  <td className="font-mono text-indigo-700">{data.materialStructure || 'N/A'}</td>
                  <td className="text-center font-mono">{data.totalThickness || '0'}μm</td>
                  <td className="text-center font-mono">{data.yieldGsm || '0'} gsm</td>
                </tr>
              </tbody>
            </table>

            <div className="space-y-2.5">
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Fitness for Use</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited guarantees that the packaging pouch is generally fit for the packaging of <strong>{data.productName || 'Powdered supplements'}</strong>, storage at <strong>{data.storageCondition || 'Room Temperature'}</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">US Food Law Compliance</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited guarantees that the product will be suitable for the packaging of all food types under conditions of use <strong>{data.conditionsOfUse || 'x through y'}</strong>, as defined in <strong>21 CFR 176.170(c)</strong>, Tables 1 and 2, respectively. All raw materials used in this structure shall be in full compliance with the Federal Food, Drug, and Cosmetic Act and all applicable Food Additive Regulations. Because of their suitable FDA status, the materials can be used to package food in federally inspected plants in full compliance with the laws and regulations administered by USDA.
                </p>
                <p className="text-gray-700 text-[8.5px] mt-1">
                  AchievePack Limited guarantees that each shipment or delivery of Product to <strong>{data.customer || '[Customer Name]'}</strong> is in full compliance with FDA regulations and manufactured under appropriate GMP's as to prevent the packaged food from becoming contaminated with a biological, chemical or physical agent that could cause injury or illness or render the packaged product adulterated within the meaning of the Federal Food, Drug, and Cosmetic Act. AchievePack Limited guarantees the packaging materials continuing compliance, with respect to all future shipments deliveries to <strong>{data.customer || '[Customer Name]'}</strong> with applicable provisions of FDA regulations. AchievePack Limited will not make raw material substitutions without prior approval from the Director of Global Product Safety and Regulatory Compliance of <strong>{data.customer || '[Customer Name]'}</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">China GB</h4>
                <p className="text-gray-700 text-[8px]">
                  AchievePack Limited guarantees that the packaging pouch complies with the following legislation of China:
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-gray-700 text-[7.5px] mt-1 list-disc pl-4">
                  <li><strong>GB31603-2015</strong> General hygienic standard for production of Food Contact Materials and Articles</li>
                  <li><strong>GB9685-2016</strong> Additives for Food Contact Materials and Articles</li>
                  <li><strong>GB4806.1-2016</strong> General Safety Requirements for Food Contact Materials and Articles</li>
                  <li><strong>GB4806.7-2023</strong> National Food Safety Standard on Food-Contact Use Plastic Materials and Articles</li>
                  <li><strong>GB4806.8-2022</strong> Food contact paper and paperboard materials and articles</li>
                  <li><strong>GB4806.9-2023</strong> National Food Safety Standard on Food-Contact Use Metal Materials and Articles</li>
                  <li><strong>GB4806.10-2016</strong> Food contact coating and coating layers</li>
                  <li><strong>GB4806.13-2023</strong> National Food Safety Standard on Food-Contact Use Composite Materials and Articles</li>
                  <li><strong>GB4806.14-2023</strong> National Food Safety Standard on Food-Contact Use Printing Inks</li>
                  <li><strong>GB4806.15-2024</strong> National Food Safety Standard on Food-Contact Use Adhesive</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 1 of 4</span>
          </div>
        </div>

        {/* PRINT PAGE 2 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header for Page 2 */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-4">
              <span className="text-[9px] font-bold text-gray-500">Declaration of Compliance</span>
              <span className="text-[8px] text-gray-400">AchievePack Limited • HK BRN: 41007097-000</span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">EUROPE</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited product complies with the relevant requirements of: Framework Regulation <strong>(EC) n.1935/2004</strong>, Plastic Regulation <strong>(EU) n.10/2011</strong> as amended, and Good Manufacturing Practice <strong>(EC) n. 2023/2006</strong>.
                </p>
                <p className="text-gray-700 text-[8.5px] mt-1">
                  All monomers, additives, colorants, coatings and adhesives used for the manufacture of the above packaging material have been pre-registered in accordance with <strong>Regulation (EC) No 1907/2006</strong> (REACH) and there are no substances present which are on the Candidate List of SVHC – Annex XIV thereof at the date of <strong>20 September 2016</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Japan</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited packaging materials and components comply with the requirements of Specifications and Standards for Food, Food Additives, etc. (Ministry of Health and Welfare <strong>Notification No. 370, 1959</strong> and <strong>Notification No. 196, 2020</strong>, latest amendment on revised Positive Lists published 30th November and 25th December 2023), and Ministerial Ordinance on Milk and Milk products Concerning Compositional Standards, etc. (Ministry of Health and Welfare <strong>Ordinance No. 52, 1951</strong>), which are under the Japanese Food Sanitation Law.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Allergens</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited guarantees that the Product is not manufactured with raw materials known to be allergenic in nature. The eight major food allergens include, peanuts, seeds, fish, shellfish, eggs, milk, wheat, soybeans, and components derived or manufactured from these raw materials.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Animal Derived Content</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited guarantees that animal derivatives are not components of, nor intentionally added to the materials used in this product. Above product does not intentionally contain animal derived content. If yes, the animal derived content meets the requirements of <strong>EU 2011/C 73/01</strong> guidance for minimizing the risk of transmitting animal spongiform encephalopathy agents.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Material Change Control Management</h4>
                <p className="text-gray-700 text-[8.5px]">
                  AchievePack Limited will not switch to any listed alternative material in the specification without prior approval from the Regional Quality Leader of <strong>{data.customer || '[Customer Name]'}</strong> through change control management process.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Heavy metals(重金属)</h4>
                <p className="text-gray-700 text-[8.5px]">
                  Above product complies with European Directive <strong>94/62/EC</strong> and <strong>2015/720</strong>. Combined total amount of Lead, Cadmium, Mercury and Hexavalent Chromium does not exceed 100 ppm. Additional limits: Lead &lt; 10ppm, Cadmium &lt; 5ppm, Mercury &lt; 5ppm, Chromium &lt; 10ppm, Antimony (Sb) &lt; 50 ppm, Arsenic (As) &lt; 10 ppm, Barium (Ba) &lt; 10 ppm, and Selenium (Se) &lt; 10 ppm.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">REACH SVHC & RoHS</h4>
                <p className="text-gray-700 text-[8.5px]">
                  Do not contain chemical substances above 0.1% as listed in REACH SVHC published on <strong>January 21 2025</strong>. Do not contain substances regulated by RoHS 3 (Directive 2015/863) (Cd, Pb, Hg, Cr VI, PBB, PBDE, DEHP, BBP, DBP, DIBP). Must inform <strong>{data.customer || '[Customer Name]'}</strong> if material does not comply due to regulation updates.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 2 of 4</span>
          </div>
        </div>

        {/* PRINT PAGE 3 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header for Page 3 */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-4">
              <span className="text-[9px] font-bold text-gray-500">Declaration of Compliance</span>
              <span className="text-[8px] text-gray-400">AchievePack Limited • HK BRN: 41007097-000</span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Solvents subject to restrictions</h4>
                <div className="flex gap-4 items-center bg-gray-50 border border-gray-200 rounded p-1.5 my-1 text-[8px]">
                  <span>The packaging item:</span>
                  <span className="flex items-center gap-1 font-bold">
                    <span className="border border-gray-400 rounded w-2.5 h-2.5 flex items-center justify-center font-bold text-[7px] bg-white">{isPrinted ? '✓' : ''}</span> is printed (需要印刷)
                  </span>
                  <span className="flex items-center gap-1 font-bold">
                    <span className="border border-gray-400 rounded w-2.5 h-2.5 flex items-center justify-center font-bold text-[7px] bg-white">{!isPrinted ? '✓' : ''}</span> is not printed (不需要印刷)
                  </span>
                </div>
                <p className="text-gray-700 text-[8px] mb-1">
                  Above product does not contain following solvents used in printing inks and adhesives:
                </p>
                <ul className="grid grid-cols-3 gap-x-4 gap-y-0.5 text-gray-600 text-[7.5px] font-mono pl-4 list-disc">
                  <li>Toluene – CAS No. 108-88-3</li>
                  <li>2-Methoxyethanol – CAS No. 109-86-4</li>
                  <li>2-Ethoxyethanol – CAS No. 110-80-5</li>
                  <li>2-Methoxyethyl acetate – CAS No. 110-49-6</li>
                  <li>2-Ethoxyethyl acetate – CAS No. 111-15-9</li>
                  <li>Methanol – CAS No. 67-56-1</li>
                  <li>Monochlorobenzene – CAS No. 108-90-7</li>
                  <li>Dichlorobenzene – CAS No. Several</li>
                  <li>Trichloroethylene — CAS No. 79-01-6</li>
                  <li>Perchloroethylene — CAS No. 127-18-4</li>
                  <li>Methylene Chloride — CAS No. 75-09-2</li>
                  <li>Volatile Flourochlorinated Hydrocarbons</li>
                  <li>2-Nitropropane – CAS No. 79-46-9</li>
                  <li>Benzene – CAS No. 71-43-2</li>
                  <li>Acetyl acetone (2,4 pentanedione)</li>
                  <li>1-methyl-2-pyrrolidone</li>
                </ul>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Residual Solvents (溶剂残留)</h4>
                <div className="flex gap-4 items-center bg-gray-50 border border-gray-200 rounded p-1.5 my-1 text-[8px]">
                  <span>The levels of residual solvents:</span>
                  <span className="flex items-center gap-1 font-bold">
                    <span className="border border-gray-400 rounded w-2.5 h-2.5 flex items-center justify-center font-bold text-[7px] bg-white">✓</span> comply (符合要求)
                  </span>
                  <span className="flex items-center gap-1 font-bold text-gray-400">
                    <span className="border border-gray-400 rounded w-2.5 h-2.5 flex items-center justify-center font-bold text-[7px] bg-white"></span> do not comply (不符合)
                  </span>
                </div>
                <p className="text-gray-700 text-[8px] mb-1">
                  The levels of residual solvents from printing materials and adhesives reported in the following list comply with the following limits:
                </p>
                <ul className="list-disc pl-4 text-gray-700 text-[8px] font-bold space-y-0.5 mb-1">
                  <li>Total Non-alcoholic solvents &lt; 5mg/m²</li>
                  <li>Total Solvents &lt; 5mg/m²</li>
                </ul>
                <p className="text-gray-500 text-[7.5px] font-mono leading-tight">
                  Tested solvents include: Acetone, N-propyl acetate, Isopropyl acetate, Ethyl acetate, Butanone, N-propanol, Ethanol, Isopropanol, Isobutanol.
                </p>
              </div>

              <div className="pt-2 text-[7.5px] text-gray-400 font-medium">
                * Tris (nonylphenyl) phosphite (TNPP) is not component of, nor is it intentionally added to, the materials used in our products supplied to customer.
                <br />
                * Finally, we confirm that we will not make raw materials changes without prior notification.
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 3 of 4</span>
          </div>
        </div>

        {/* PRINT PAGE 4 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header for Page 4 */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-4">
              <span className="text-[9px] font-bold text-gray-500">Declaration of Compliance</span>
              <span className="text-[8px] text-gray-400">AchievePack Limited • HK BRN: 41007097-000</span>
            </div>

            <div className="space-y-4">
              {/* Restricted Substances Table */}
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">1. Restricted substances (限制使用的物质信息)</h4>
                <table className="w-full border-collapse text-[7px] leading-tight">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-1 px-1 text-left font-bold text-gray-600">Substance Name</th>
                      <th className="py-1 px-1 text-center font-bold text-gray-600 w-24">Intentionally Added?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.restrictedSubstances.map((sub, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="py-0.5 px-1 text-gray-700 leading-snug">{sub.name}</td>
                        <td className="py-0.5 px-1 text-center font-bold text-emerald-700">{sub.intentionallyAdded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Formulation breakdown table */}
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">Approved Resins for the Formulation</h4>
                <table className="w-full border-collapse text-[7px] leading-tight">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-1 px-1 text-center font-bold text-gray-600 w-10">Layer</th>
                      <th className="py-1 px-1 text-left font-bold text-gray-600 font-bold">Resin/Polymer Chemical Name</th>
                      <th className="py-1 px-1 text-left font-bold text-gray-600 w-24">Trade Reference</th>
                      <th className="py-1 px-1 text-center font-bold text-gray-600 w-12">Blend %</th>
                      <th className="py-1 px-1 text-center font-bold text-gray-600 w-12">Thickness</th>
                      <th className="py-1 px-1 text-center font-bold text-gray-600 w-24">FDA Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.layers.map((layer, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="py-0.5 px-1 text-center font-mono text-gray-500">{layer.layer}</td>
                        <td className="py-0.5 px-1 text-gray-700 font-semibold">{layer.chemicalName || 'N/A'}</td>
                        <td className="py-0.5 px-1 text-gray-700 font-mono text-[7px]">{layer.tradeName || 'N/A'}</td>
                        <td className="py-0.5 px-1 text-center font-mono">{layer.blendPct || '100%'}</td>
                        <td className="py-0.5 px-1 text-center font-mono">{layer.thickness || 'N/A'}</td>
                        <td className="py-0.5 px-1 text-center text-[7px] text-gray-500 font-bold">{layer.foodContact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sign-off Signature block */}
              <div className="pt-4 mt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-gray-500 text-[10px] font-bold block uppercase tracking-wider">Authorized Signature</span>
                  
                  <div className="border border-indigo-100 rounded-xl p-3 bg-indigo-50/50 flex flex-col justify-center min-h-[50px] relative w-48 shadow-inner">
                    <span className="font-serif italic text-base text-indigo-800 tracking-wide select-none">
                      {data.signatoryName || 'Ryan Wong'}
                    </span>
                    <span className="text-[7px] text-indigo-400 font-mono tracking-widest uppercase mt-1">
                      AchievePack Digital Sign-off
                    </span>
                  </div>

                  <div className="text-[10px] leading-tight">
                    <strong className="text-gray-900 block">{data.signatoryName || 'Ryan Wong'}</strong>
                    <span className="text-gray-500 font-medium">{data.signatoryTitle || 'Packaging Development Specialist'}</span>
                    <span className="text-gray-400 block mt-0.5">AchievePack Limited</span>
                  </div>
                </div>
                <div className="text-right text-[9px] text-gray-500 font-semibold self-end">
                  *This compliance document is valid for 18 months from the signing date.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 4 of 4</span>
          </div>
        </div>
      </div>

    </div>
  );
}
