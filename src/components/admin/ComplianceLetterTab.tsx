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
      restrictedSubstances: [
        { name: 'BHA, BHT and TBHQ', intentionallyAdded: 'NO' },
        { name: 'Alkylphenol Ethoxylates (NPE, OPE)', intentionallyAdded: 'NO' },
        { name: 'Nonyl Phenols (NP) and TNPP', intentionallyAdded: 'NO' },
        { name: 'Phthalates (DEHP, DBP, DINP, BBP, DIBP, etc.)', intentionallyAdded: 'NO' },
        { name: 'Halogenated Flame Retardants (PBBs, PBDEs)', intentionallyAdded: 'NO' },
        { name: 'Epoxy derivatives (BADGE, BFDGE, NOGE)', intentionallyAdded: 'NO' },
        { name: 'Bisphenol A (BPA)', intentionallyAdded: 'NO' },
        { name: 'Vinyl chloride monomer (VCM)', intentionallyAdded: 'NO' },
        { name: 'Per and poly fluoroalkyl substances (PFAS)', intentionallyAdded: 'NO' },
        { name: 'Mineral Oil (MOSH/MOAH)', intentionallyAdded: 'NO' }
      ]
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
      restrictedSubstances: [
        { name: 'BHA, BHT and TBHQ', intentionallyAdded: 'NO' },
        { name: 'Alkylphenol Ethoxylates (NPE, OPE)', intentionallyAdded: 'NO' },
        { name: 'Nonyl Phenols (NP) and TNPP', intentionallyAdded: 'NO' },
        { name: 'Phthalates (DEHP, DBP, DINP, BBP, DIBP, etc.)', intentionallyAdded: 'NO' },
        { name: 'Halogenated Flame Retardants (PBBs, PBDEs)', intentionallyAdded: 'NO' },
        { name: 'Epoxy derivatives (BADGE, BFDGE, NOGE)', intentionallyAdded: 'NO' },
        { name: 'Bisphenol A (BPA)', intentionallyAdded: 'NO' },
        { name: 'Vinyl chloride monomer (VCM)', intentionallyAdded: 'NO' },
        { name: 'Per and poly fluoroalkyl substances (PFAS)', intentionallyAdded: 'NO' },
        { name: 'Mineral Oil (MOSH/MOAH)', intentionallyAdded: 'NO' }
      ]
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
      restrictedSubstances: [
        { name: 'BHA, BHT and TBHQ', intentionallyAdded: 'NO' },
        { name: 'Alkylphenol Ethoxylates (NPE, OPE)', intentionallyAdded: 'NO' },
        { name: 'Nonyl Phenols (NP) and TNPP', intentionallyAdded: 'NO' },
        { name: 'Phthalates (DEHP, DBP, DINP, BBP, DIBP, etc.)', intentionallyAdded: 'NO' },
        { name: 'Halogenated Flame Retardants (PBBs, PBDEs)', intentionallyAdded: 'NO' },
        { name: 'Epoxy derivatives (BADGE, BFDGE, NOGE)', intentionallyAdded: 'NO' },
        { name: 'Bisphenol A (BPA)', intentionallyAdded: 'NO' },
        { name: 'Vinyl chloride monomer (VCM)', intentionallyAdded: 'NO' },
        { name: 'Per and poly fluoroalkyl substances (PFAS)', intentionallyAdded: 'NO' },
        { name: 'Mineral Oil (MOSH/MOAH)', intentionallyAdded: 'NO' }
      ]
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
      restrictedSubstances: [
        { name: 'BHA, BHT and TBHQ', intentionallyAdded: 'NO' },
        { name: 'Alkylphenol Ethoxylates (NPE, OPE)', intentionallyAdded: 'NO' },
        { name: 'Nonyl Phenols (NP) and TNPP', intentionallyAdded: 'NO' },
        { name: 'Phthalates (DEHP, DBP, DINP, BBP, DIBP, etc.)', intentionallyAdded: 'NO' },
        { name: 'Halogenated Flame Retardants (PBBs, PBDEs)', intentionallyAdded: 'NO' },
        { name: 'Epoxy derivatives (BADGE, BFDGE, NOGE)', intentionallyAdded: 'NO' },
        { name: 'Bisphenol A (BPA)', intentionallyAdded: 'NO' },
        { name: 'Vinyl chloride monomer (VCM)', intentionallyAdded: 'NO' },
        { name: 'Per and poly fluoroalkyl substances (PFAS)', intentionallyAdded: 'NO' },
        { name: 'Mineral Oil (MOSH/MOAH)', intentionallyAdded: 'NO' }
      ]
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
  const [activeFormTab, setActiveFormTab] = useState<'general' | 'regulatory' | 'solvents' | 'formulation' | 'signoff'>('general');
  const [successMsg, setSuccessMsg] = useState('');
  const [savedLetters, setSavedLetters] = useState<SavedLetter[]>([]);

  // Update customer if global selector changes
  useEffect(() => {
    if (globalCustomer) {
      setData(prev => ({
        ...prev,
        customer: globalCustomer
      }));
    }
  }, [globalCustomer]);

  // Load saved letters from localStorage on mount
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
      const selectedCust = data.customer; // Keep selected customer
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
        
        {/* LEFT COLUMN: Input form & Preset Selectors (5 Cols) */}
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
              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
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
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 space-y-1">
                    <span className="font-extrabold uppercase block text-[10px] text-blue-900">Compliance Standard Declarations Included:</span>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li>US FDA 21 CFR 176.170 & Food Additives</li>
                      <li>China GB 31603, GB 9685, GB 4806 series</li>
                      <li>EU Framework EC 1935/2004, EC 2023/2006, EU 10/2011</li>
                      <li>Japanese Food Sanitation Law (MHW Notification 370)</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB: RESTRICTED SUBSTANCES */}
              {activeFormTab === 'solvents' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-gray-600 uppercase mb-2">Restricted Substances (Select if added intentionally)</div>
                  <div className="space-y-2">
                    {data.restrictedSubstances.map((sub, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100/50 transition">
                        <span className="text-xs text-gray-700 font-medium">{sub.name}</span>
                        <button
                          type="button"
                          onClick={() => handleSubstanceToggle(idx)}
                          className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all ${sub.intentionallyAdded === 'YES' ? 'bg-red-500 text-white shadow-sm' : 'bg-gray-200 text-gray-600'}`}
                        >
                          {sub.intentionallyAdded}
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
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-800 font-medium leading-relaxed">
                    💡 <strong>Stylized Digital Sign-off:</strong> The print template generates an elegant, stylized corporate digital signature block based on the signatory name provided above.
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

        {/* RIGHT COLUMN: Live document preview (7 Cols) */}
        <div className="xl:col-span-7 flex flex-col h-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px] xl:max-h-[900px]">
          <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center flex-shrink-0">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Document Live Preview
            </h3>
            <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">3-Page Layout Preview</span>
          </div>

          <div className="p-6 overflow-y-auto bg-gray-100/50 flex-1 space-y-6 flex flex-col items-center">
            
            {/* SCREEN PAGE 1 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-xs text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              {/* Header Letterhead */}
              <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <img src="/logo.png" alt="AchievePack" className="h-9 w-auto object-contain" />
                    <span className="text-lg font-black tracking-widest text-blue-950 font-sans">achievepack</span>
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

              <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-6">
                Declaration of Compliance (Food Contact & Suitability)
              </div>

              {/* Salutation Block */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-gray-100">
                <div className="space-y-1 text-[10px]">
                  <span className="font-extrabold text-gray-400 uppercase tracking-widest text-[8px] block">Customer Details</span>
                  <div className="font-bold text-gray-900 text-xs">{data.customer || '[Customer Name]'}</div>
                  <div className="text-gray-500 whitespace-pre-line leading-snug">{data.customerAddress || '[Customer Address]'}</div>
                </div>
                <div className="space-y-1 text-[10px] text-right">
                  <span className="font-extrabold text-gray-400 uppercase tracking-widest text-[8px] block">Document Control</span>
                  <div><span className="font-semibold text-gray-500">Issue Date:</span> <span className="font-bold text-gray-900">{data.issueDate}</span></div>
                  <div><span className="font-semibold text-gray-500">Validity:</span> <span className="font-bold text-gray-900">{data.validityMonths || '18'} Months</span></div>
                  <div><span className="font-semibold text-gray-500">Application:</span> <span className="font-bold text-gray-900">{data.storageCondition || 'Room Temp Storage'}</span></div>
                </div>
              </div>

              {/* Body Content Page 1 */}
              <div className="space-y-4 flex-1">
                <p className="leading-relaxed">
                  AchievePack Limited hereby declares that the packaging materials supplied under the description below are in compliance with the relevant statutory requirements for food contact suitability, composition, and migration properties as specified by global regulatory authorities.
                </p>

                {/* Material Specification Summary Table */}
                <table className="w-full border-collapse my-3">
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

                <div className="space-y-3">
                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">1. Fitness for Use / General Guarantee</h4>
                    <p className="text-gray-700">
                      AchievePack Limited guarantees that the supplied pouch packaging is generally fit for the storage and packaging of <strong>{data.productName || 'Powdered supplements'}</strong> stored at <strong>{data.storageCondition || 'Room Temperature'}</strong> conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">2. United States Food Law Compliance (FDA)</h4>
                    <p className="text-gray-700">
                      All raw materials, resins, and film layers used in this packaging structure comply with the Federal Food, Drug, and Cosmetic Act and all applicable Food Additive Regulations. The sealant layer and polymers are suitable for the packaging of all food types under conditions of use <strong>{data.conditionsOfUse || 'B through H'}</strong> as defined in <strong>21 CFR 176.170(c)</strong>, Tables 1 and 2, respectively.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">3. China National Standards Compliance (GB)</h4>
                    <p className="text-gray-700">
                      AchievePack Limited guarantees that the composite packaging structure complies with the primary food safety standards of the People's Republic of China, including <strong>GB31603-2015</strong> (GMP for Food Contact Production), <strong>GB9685-2016</strong> (Food Contact Additives), and <strong>GB4806.1-2016</strong> (General Safety Requirements), as well as material-specific standards <strong>GB4806.7-2023</strong> (Plastics), <strong>GB4806.14-2023</strong> (Inks), and <strong>GB4806.15-2024</strong> (Adhesives).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">4. European Union Regulations (EC & REACH)</h4>
                    <p className="text-gray-700">
                      The materials comply with Framework Regulation <strong>(EC) n.1935/2004</strong>, Good Manufacturing Practice <strong>(EC) n.2023/2006</strong>, and Plastic Regulation <strong>(EU) n.10/2011</strong> (and amendments). All components have been pre-registered in accordance with <strong>REACH Regulation (EC) No 1907/2006</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 1 of 3</span>
              </div>
            </div>

            {/* SCREEN PAGE 2 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-xs text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">5. Japanese Food Sanitation Law</h4>
                  <p className="text-gray-700">
                    The packaging components comply with the Japanese Food Sanitation Law's Specifications and Standards for Food, Food Additives, etc., as specified in Ministry of Health and Welfare <strong>Notification No. 370 (1959)</strong>, <strong>Notification No. 196 (2020)</strong>, and the revised Positive Lists.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">6. Allergen & Sensitizing Agents Declaration</h4>
                  <p className="text-gray-700">
                    AchievePack Limited guarantees that the product is not manufactured with, nor contains, raw materials known to be allergenic in nature (such as peanuts, tree nuts, seeds, fish, shellfish, eggs, milk, wheat, or soy derivatives).
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">7. Animal-Derived Content</h4>
                  <p className="text-gray-700">
                    The materials do not intentionally contain any animal-derived content. Any trace components conform to the requirements of <strong>EU 2011/C 73/01</strong> guidance for minimizing the risk of transmitting animal spongiform encephalopathy agents.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">8. Material Change Control Management</h4>
                  <p className="text-gray-700">
                    AchievePack Limited guarantees that no raw material substitutions or material changes to the agreed technical specifications will be made without prior formal notification and approval from the customer's quality management representative through our Change Control Management process.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">9. Heavy Metals & Packaging Waste Regulations</h4>
                  <p className="text-gray-700">
                    The supplied product is manufactured in full compliance with European Directive <strong>94/62/EC</strong> and US CONEG regulations. Lead, Cadmium, Mercury, and Hexavalent Chromium are not intentionally used in the manufacturing process, and their combined concentration does not exceed 100 ppm by weight. Additional threshold limits of heavy metals are strictly maintained: Lead (Pb) &lt; 10ppm, Cadmium (Cd) &lt; 5ppm, Mercury (Hg) &lt; 5ppm, and Chromium (Cr) &lt; 10ppm.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">10. Candidate List of Substances of Very High Concern (REACH SVHC)</h4>
                  <p className="text-gray-700">
                    We declare that the finished packaging does not contain any chemical substances listed on the European Chemicals Agency (ECHA) candidate list of Substances of Very High Concern (SVHC) in concentrations exceeding <strong>0.1% by weight</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">11. Restriction of Hazardous Substances (RoHS)</h4>
                  <p className="text-gray-700">
                    The materials comply with the requirements of EU RoHS Directive <strong>2011/65/EU</strong> and the RoHS 3 amendment <strong>(EU) 2015/863</strong>. Restrictive substances such as PBB, PBDE, DEHP, BBP, DBP, and DIBP are not used in formulation.
                  </p>
                </div>
              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 2 of 3</span>
              </div>
            </div>

            {/* SCREEN PAGE 3 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[210mm] min-h-[297mm] relative text-xs text-black leading-relaxed flex flex-col select-none aspect-[1/1.41]">
              
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">12. Solvents & Residual Solvent Limits</h4>
                  <p className="text-gray-700">
                    All printing inks and adhesives are free from toluene, benzene, methanol, and volatile chlorinated hydrocarbons. The total residual solvent content from conversion processes is guaranteed to be below <strong>5.0 mg/m²</strong> (with non-alcoholic solvents under 5.0 mg/m²), strictly adhering to food safety organoleptic standards.
                  </p>
                </div>

                {/* Restricted Substances Table */}
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">13. Restricted Substances Status</h4>
                  <table className="w-full border-collapse my-2 text-[9px]">
                    <thead>
                      <tr className="bg-gray-100 border-y border-gray-300">
                        <th className="py-1 px-1.5 text-left font-bold text-gray-600">Substance Name</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-24">Intentionally Added?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.restrictedSubstances.map((sub, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-0.5 px-1.5 text-gray-700">{sub.name}</td>
                          <td className="py-0.5 px-1.5 text-center font-bold text-emerald-700">{sub.intentionallyAdded}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Formulation breakdown table in final letter */}
                <div>
                  <h4 className="font-extrabold text-blue-900 text-[10px] uppercase border-b border-blue-900/10 pb-0.5 mb-1">14. Resin Formulation Layer Breakdown</h4>
                  <table className="w-full border-collapse my-2 text-[9px]">
                    <thead>
                      <tr className="bg-gray-100 border-y border-gray-300">
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-10">Layer</th>
                        <th className="py-1 px-1.5 text-left font-bold text-gray-600">Resin/Polymer Chemical Name</th>
                        <th className="py-1 px-1.5 text-left font-bold text-gray-600 w-24">Trade Reference</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-14">Blend %</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-14">Thickness</th>
                        <th className="py-1 px-1.5 text-center font-bold text-gray-600 w-24">FDA Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.layers.map((layer, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-0.5 px-1.5 text-center font-mono text-gray-500">{layer.layer}</td>
                          <td className="py-0.5 px-1.5 text-gray-700 font-semibold">{layer.chemicalName || 'N/A'}</td>
                          <td className="py-0.5 px-1.5 text-gray-700 font-mono text-[8px]">{layer.tradeName || 'N/A'}</td>
                          <td className="py-0.5 px-1.5 text-center font-mono">{layer.blendPct || '100%'}</td>
                          <td className="py-0.5 px-1.5 text-center font-mono">{layer.thickness || 'N/A'}</td>
                          <td className="py-0.5 px-1.5 text-center text-[8px] text-gray-500 font-bold">{layer.foodContact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Sign-off Signature block */}
                <div className="pt-6 mt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-gray-500 text-[10px] font-bold block uppercase tracking-wider">Authorized Signature</span>
                    
                    {/* Stylized digital signature */}
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
                  <div className="text-right text-[10px] text-gray-500 font-medium self-end">
                    *This compliance letter is valid for 18 months from the date of signature.
                  </div>
                </div>

              </div>

              {/* Page Footer */}
              <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold mt-auto">
                <span>Page 3 of 3</span>
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
              margin-top: 10px !important;
              margin-bottom: 3px !important;
              font-size: 10px !important;
            }
            p {
              margin-bottom: 6px !important;
              font-size: 8.5px !important;
              line-height: 1.35 !important;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin-bottom: 8px !important;
            }
            th, td {
              border: 1px solid #bdc3c7;
              padding: 4px 6px !important;
              font-size: 8px !important;
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
            <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-5">
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

            <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-5" style={{ color: 'white' }}>
              Declaration of Compliance (Food Contact & Suitability)
            </div>

            {/* Salutation Block */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-3 border-b border-gray-100">
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

            {/* Material Specification Summary Table */}
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

            <div className="space-y-3">
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">1. Fitness for Use / General Guarantee</h4>
                <p className="text-gray-700">
                  AchievePack Limited guarantees that the supplied pouch packaging is generally fit for the storage and packaging of <strong>{data.productName || 'Powdered supplements'}</strong> stored at <strong>{data.storageCondition || 'Room Temperature'}</strong> conditions.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">2. United States Food Law Compliance (FDA)</h4>
                <p className="text-gray-700">
                  All raw materials, resins, and film layers used in this packaging structure comply with the Federal Food, Drug, and Cosmetic Act and all applicable Food Additive Regulations. The sealant layer and polymers are suitable for the packaging of all food types under conditions of use <strong>{data.conditionsOfUse || 'B through H'}</strong> as defined in <strong>21 CFR 176.170(c)</strong>, Tables 1 and 2, respectively.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">3. China National Standards Compliance (GB)</h4>
                <p className="text-gray-700">
                  AchievePack Limited guarantees that the composite packaging structure complies with the primary food safety standards of the People's Republic of China, including <strong>GB31603-2015</strong> (GMP for Food Contact Production), <strong>GB9685-2016</strong> (Food Contact Additives), and <strong>GB4806.1-2016</strong> (General Safety Requirements), as well as material-specific standards <strong>GB4806.7-2023</strong> (Plastics), <strong>GB4806.14-2023</strong> (Inks), and <strong>GB4806.15-2024</strong> (Adhesives).
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">4. European Union Regulations (EC & REACH)</h4>
                <p className="text-gray-700">
                  The materials comply with Framework Regulation <strong>(EC) n.1935/2004</strong>, Good Manufacturing Practice <strong>(EC) n.2023/2006</strong>, and Plastic Regulation <strong>(EU) n.10/2011</strong> (and amendments). All monomers, additives, colorants, coatings and adhesives used have been pre-registered in accordance with <strong>REACH Regulation (EC) No 1907/2006</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 1 of 3</span>
          </div>
        </div>

        {/* PRINT PAGE 2 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header Letterhead for Page 2 */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-4">
              <span className="text-[9px] font-bold text-gray-500">Declaration of Compliance</span>
              <span className="text-[8px] text-gray-400">AchievePack Limited • HK BRN: 41007097-000</span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">5. Japanese Food Sanitation Law</h4>
                <p className="text-gray-700">
                  The packaging components comply with the Japanese Food Sanitation Law's Specifications and Standards for Food, Food Additives, etc., as specified in Ministry of Health and Welfare <strong>Notification No. 370 (1959)</strong>, <strong>Notification No. 196 (2020)</strong>, and the revised Positive Lists.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">6. Allergen & Sensitizing Agents Declaration</h4>
                <p className="text-gray-700">
                  AchievePack Limited guarantees that the product is not manufactured with, nor contains, raw materials known to be allergenic in nature (such as peanuts, tree nuts, seeds, fish, shellfish, eggs, milk, wheat, or soy derivatives).
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">7. Animal-Derived Content</h4>
                <p className="text-gray-700">
                  The materials do not intentionally contain any animal-derived content. Any trace components conform to the requirements of <strong>EU 2011/C 73/01</strong> guidance for minimizing the risk of transmitting animal spongiform encephalopathy agents.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">8. Material Change Control Management</h4>
                <p className="text-gray-700">
                  AchievePack Limited guarantees that no raw material substitutions or material changes to the agreed technical specifications will be made without prior formal notification and approval from the customer's quality management representative through our Change Control Management process.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">9. Heavy Metals & Packaging Waste Regulations</h4>
                <p className="text-gray-700">
                  The supplied product is manufactured in compliance with European Directive <strong>94/62/EC</strong> and CONEG regulations. Combined total amount of Lead, Cadmium, Mercury and Hexavalent Chromium does not exceed 100 ppm. In addition the following individual limits are not exceeded: Lead &lt; 10ppm, Cadmium &lt; 5ppm, Mercury &lt; 5ppm, and Chromium &lt; 10ppm.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">10. Candidate List of Substances of Very High Concern (REACH SVHC)</h4>
                <p className="text-gray-700">
                  We declare that the finished packaging does not contain any chemical substances listed on the European Chemicals Agency (ECHA) candidate list of Substances of Very High Concern (SVHC) in concentrations exceeding <strong>0.1% by weight</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">11. Restriction of Hazardous Substances (RoHS)</h4>
                <p className="text-gray-700">
                  The materials comply with the requirements of EU RoHS Directive <strong>2011/65/EU</strong> and the RoHS 3 amendment <strong>(EU) 2015/863</strong>. Restrictive substances such as PBB, PBDE, DEHP, BBP, DBP, and DIBP are not used in formulation.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 2 of 3</span>
          </div>
        </div>

        {/* PRINT PAGE 3 */}
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header Letterhead for Page 3 */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-4">
              <span className="text-[9px] font-bold text-gray-500">Declaration of Compliance</span>
              <span className="text-[8px] text-gray-400">AchievePack Limited • HK BRN: 41007097-000</span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">12. Solvents & Residual Solvent Limits</h4>
                <p className="text-gray-700">
                  All printing inks and adhesives are free from toluene, benzene, methanol, and volatile chlorinated hydrocarbons. The total residual solvent content from conversion processes is guaranteed to be below <strong>5.0 mg/m²</strong> (with non-alcoholic solvents under 5.0 mg/m²), strictly adhering to food safety organoleptic standards.
                </p>
              </div>

              {/* Restricted Substances Table */}
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">13. Restricted Substances Status</h4>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left font-bold text-gray-600">Substance Name</th>
                      <th className="text-center font-bold text-gray-600 w-24">Intentionally Added?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.restrictedSubstances.map((sub, idx) => (
                      <tr key={idx}>
                        <td className="text-gray-700">{sub.name}</td>
                        <td className="text-center font-bold text-emerald-700">{sub.intentionallyAdded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Formulation breakdown table in final letter */}
              <div>
                <h4 className="font-extrabold text-blue-900 uppercase border-b border-blue-900/10 pb-0.5 mb-1">14. Resin Formulation Layer Breakdown</h4>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-center font-bold text-gray-600 w-10">Layer</th>
                      <th className="text-left font-bold text-gray-600">Resin/Polymer Chemical Name</th>
                      <th className="text-left font-bold text-gray-600 w-24">Trade Reference</th>
                      <th className="text-center font-bold text-gray-600 w-12">Blend %</th>
                      <th className="text-center font-bold text-gray-600 w-12">Thickness</th>
                      <th className="text-center font-bold text-gray-600 w-24">FDA Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.layers.map((layer, idx) => (
                      <tr key={idx}>
                        <td className="text-center font-mono text-gray-500">{layer.layer}</td>
                        <td className="text-gray-700 font-semibold">{layer.chemicalName || 'N/A'}</td>
                        <td className="text-gray-700 font-mono text-[8px]">{layer.tradeName || 'N/A'}</td>
                        <td className="text-center font-mono">{layer.blendPct || '100%'}</td>
                        <td className="text-center font-mono">{layer.thickness || 'N/A'}</td>
                        <td className="text-center text-[8px] text-gray-500 font-bold">{layer.foodContact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sign-off Signature block */}
              <div className="pt-6 mt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-gray-500 text-[10px] font-bold block uppercase tracking-wider">Authorized Signature</span>
                  
                  {/* Stylized digital signature */}
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
                <div className="text-right text-[10px] text-gray-500 font-medium self-end">
                  *This compliance letter is valid for 18 months from the date of signature.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 text-right text-[8px] text-gray-400 font-semibold">
            <span>Page 3 of 3</span>
          </div>
        </div>
      </div>

    </div>
  );
}
