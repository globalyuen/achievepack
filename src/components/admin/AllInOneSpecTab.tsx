import React, { useState, useEffect } from 'react';
import { Download, Plus, Trash2, Loader2, FileText, Check, Printer, FileCheck, Layers, FileCode, ShieldCheck, ClipboardList, Save, Recycle, RefreshCw, Mail, Sparkles, Box, CheckCircle2 } from 'lucide-react';

export interface FullSpecDocV2Data {
  // Client & Document Header
  customerName: string;
  customerDesc: string;
  customerCode: string;
  poBatchNo: string;
  revision: string;
  issueDate: string;
  itemNo: string;
  projectTitle: string;

  // Pouch Geometry & Dimensions
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

  // Add-ons & Features
  closureAddon: string;
  valveAddon: boolean;
  windowAddon: string;
  tearNotch: string;
  hangHole: string;

  // Printing & Technical Specs
  printingProcess: string;
  printQuality: string;
  numColours: string;
  totalRetainSolvent: string;
  solidColourVariation: string;
  barcodeScanQuality: string;

  // Physical & Barrier Tolerances
  bondStrength: string;
  heatSealStrength: string;
  wvtr: string;
  otr: string;
  cofExternal: string;
  cofInternal: string;
  odour: string;
  generalQuality: string;
  stewardshipRecyclability: string;

  // Approvals & Sign-off
  approvedAchieve: string;
  approvedAchievePos: string;
  approvedAchieveDate: string;
  approvedCustomer: string;
  approvedCustomerPos: string;
  approvedCustomerDate: string;

  // Proof Images & Certification Logos
  artworkImage: string;
  artworkImages?: string[];
  selectedLogos?: string[];
  orderQuantity: string;
  notes: string;
}

export interface SavedFullSpecSheet {
  id: string;
  name: string;
  timestamp: string;
  data: FullSpecDocV2Data;
}

const LOGO_SPECS: Record<string, { label: string; src: string; description: string }> = {
  'iso-22000': { label: 'ISO 22000 Food Safety', src: '/imgs/cert/iso22000-badge.png', description: 'Certified Food Safety Management System' },
  'fda-food-safe': { label: 'FDA 21 CFR 177.1520 Food Contact', src: '/imgs/cert/fda-approved-logo.png', description: 'US FDA Food Grade Compliant Direct Contact' },
  'fda-coatings': { label: 'FDA 21 CFR 175.300 Resin Coatings', src: '/imgs/cert/fda-175-300-badge.png', description: 'Resinous and Polymeric Coatings Approved' },
  'eu-10-2011': { label: 'EU 10/2011 Plastic Regulation', src: '/imgs/cert/eu-10-2011-logo.png', description: 'European Union Food Contact Compliance' },
  'brcgs-aa': { label: 'BRCGS Grade AA Packaging', src: '/imgs/cert/brcgs-aa-logo.png', description: 'Global Standard for Packaging Materials' },
  'im-green': { label: 'I\'m Green™ Bio-PE', src: '/imgs/cert/eco-logo-biope.png', description: 'Plant-Based Sugarcane PE Renewable Carbon' },
  'seedling-compostable': { label: 'Seedling OK Compostable', src: '/imgs/cert/compostable-logo.png', description: 'EN 13432 & ASTM D6400 Industrial/Home Compostable' },
  'recycle-4-pe': { label: 'Recycle #4 PE', src: '/imgs/cert/recycle_4_pe_logo.png', description: 'RIC #4 LDPE Recyclable Mono-Material Stream' },
  'recycle-7-other': { label: 'Recycle #7 OTHER', src: '/imgs/cert/recycle_7_other_logo.png', description: 'RIC #7 Bio-PE / High Barrier Composite Stream' }
};

const MATERIAL_CATALOG = [
  // 1. PCR
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Duplex Clear (12µm PCR-PET / 60µm PE)', code: 'PCR-PET-CLR', ecoBadge: 'recycle-7-other', otr: '< 1.5', wvtr: '< 2.0' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Duplex Clear (20µm PCR-OPP / 50µm CPP)', code: 'PCR-PP-CLR', ecoBadge: 'recycle-4-pe', otr: '< 2.0', wvtr: '< 2.5' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Duplex No Window (12µm PCR-PET / 70µm White PE)', code: 'PCR-PET-WHT', ecoBadge: 'recycle-7-other', otr: '< 1.5', wvtr: '< 1.8' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Duplex No Window (20µm Matt PCR-OPP / 60µm White CPP)', code: 'PCR-PP-WHT', ecoBadge: 'recycle-4-pe', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Triplex Metalised (12µm PCR-PET / 12µm VMPET / 60µm PE)', code: 'PCR-PET-VMPET', ecoBadge: 'recycle-7-other', otr: '< 0.5', wvtr: '< 0.8' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Triplex Metalised (20µm PCR-OPP / 12µm VMCPP / 50µm CPP)', code: 'PCR-PP-VMCPP', ecoBadge: 'recycle-4-pe', otr: '< 0.8', wvtr: '< 1.0' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Triplex Aluminum (12µm PCR-PET / 7µm AL / 60µm PE)', code: 'PCR-PET-AL', ecoBadge: 'recycle-7-other', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Triplex Aluminum (20µm PCR-OPP / 7µm AL / 50µm CPP)', code: 'PCR-PP-AL', ecoBadge: 'recycle-4-pe', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Kraft Triplex Clear (40g Kraft / 12µm PCR-PET / 50µm PE)', code: 'PCR-KRAFT-CLR', ecoBadge: 'recycle-7-other', otr: '< 1.8', wvtr: '< 2.0' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Kraft Triplex Clear (40g Kraft / 20µm PCR-OPP / 50µm CPP)', code: 'PCR-KRAFT-CPP', ecoBadge: 'recycle-4-pe', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PET Kraft Quadlex Aluminum (40g Kraft / 12µm PCR-PET / 7µm AL / 50µm PE)', code: 'PCR-KRAFT-AL', ecoBadge: 'recycle-7-other', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR PP Kraft Quadlex Aluminum (40g Kraft / 20µm PCR-OPP / 7µm AL / 50µm CPP)', code: 'PCR-KRAFT-PP-AL', ecoBadge: 'recycle-4-pe', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR Kraft VMPET (40g Kraft / 12µm PCR-VMPET / 50µm PE)', code: 'PCR-KRAFT-VMPET', ecoBadge: 'recycle-7-other', otr: '< 0.6', wvtr: '< 0.9' },
  { category: '♻️ PCR (Post-Consumer Recycled)', name: 'PCR Kraft Duplex Low (50g Kraft / 40µm PCR-PE)', code: 'PCR-KRAFT-LOW', ecoBadge: 'recycle-4-pe', otr: '< 5.0', wvtr: '< 5.0' },

  // 2. Bio-PE
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Duplex Clear (12µm PET / 60µm Bio-PE)', code: 'BIOPE-PET-CLR', ecoBadge: 'im-green', otr: '< 1.5', wvtr: '< 2.0' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Duplex Clear (20µm OPP / 50µm Bio-CPP)', code: 'BIOPE-PP-CLR', ecoBadge: 'im-green', otr: '< 2.0', wvtr: '< 2.5' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Duplex No Window (12µm PET / 70µm Bio-PE White)', code: 'BIOPE-PET-WHT', ecoBadge: 'im-green', otr: '< 1.5', wvtr: '< 1.8' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Duplex No Window (20µm Matt OPP / 60µm Bio-CPP White)', code: 'BIOPE-PP-WHT', ecoBadge: 'im-green', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Triplex Metalised (12µm PET / 12µm VMPET / 60µm Bio-PE)', code: 'BIOPE-PET-VMPET', ecoBadge: 'im-green', otr: '< 0.5', wvtr: '< 0.8' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Triplex Metalised (20µm OPP / 12µm VMCPP / 50µm Bio-CPP)', code: 'BIOPE-PP-VMCPP', ecoBadge: 'im-green', otr: '< 0.8', wvtr: '< 1.0' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Triplex Aluminum (12µm PET / 7µm AL / 60µm Bio-PE)', code: 'BIOPE-PET-AL', ecoBadge: 'im-green', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Triplex Aluminum (20µm OPP / 7µm AL / 50µm Bio-CPP)', code: 'BIOPE-PP-AL', ecoBadge: 'im-green', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Kraft Triplex Clear (40g Kraft / 12µm PET / 50µm Bio-PE)', code: 'BIOPE-KRAFT-CLR', ecoBadge: 'im-green', otr: '< 1.8', wvtr: '< 2.0' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Kraft Triplex Clear (40g Kraft / 20µm OPP / 50µm Bio-CPP)', code: 'BIOPE-KRAFT-CPP', ecoBadge: 'im-green', otr: '< 2.0', wvtr: '< 2.2' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PET Kraft Quadlex Aluminum (40g Kraft / 12µm PET / 7µm AL / 50µm Bio-PE)', code: 'BIOPE-KRAFT-AL', ecoBadge: 'im-green', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE PP Kraft Quadlex Aluminum (40g Kraft / 20µm OPP / 7µm AL / 50µm Bio-CPP)', code: 'BIOPE-KRAFT-PP-AL', ecoBadge: 'im-green', otr: '< 0.05', wvtr: '< 0.05' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE Kraft VMPET (40g Kraft / 12µm VMPET / 50µm Bio-PE)', code: 'BIOPE-KRAFT-VMPET', ecoBadge: 'im-green', otr: '< 0.6', wvtr: '< 0.9' },
  { category: '🌱 Bio-PE (Sugarcane PE)', name: 'Bio-PE Kraft Duplex Low (50g Kraft / 40µm Bio-PE)', code: 'BIOPE-KRAFT-LOW', ecoBadge: 'im-green', otr: '< 5.0', wvtr: '< 5.0' },

  // 3. Mono-Material
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PE Duplex Clear (25µm MDO-PE / 60µm PE)', code: 'MONO-PE-CLR', ecoBadge: 'recycle-4-pe', otr: '< 2.0', wvtr: '< 2.5' },
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PE Duplex No Window (25µm MDO-PE / 70µm White PE)', code: 'MONO-PE-WHT', ecoBadge: 'recycle-4-pe', otr: '< 1.8', wvtr: '< 2.2' },
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PP Duplex Clear (20µm OPP / 50µm CPP)', code: 'MONO-PP-CLR', ecoBadge: 'recycle-4-pe', otr: '< 2.5', wvtr: '< 2.8' },
  { category: '🔄 Mono-Material Recyclable', name: 'Mono-PP Duplex No Window (20µm Matt OPP / 60µm White CPP)', code: 'MONO-PP-WHT', ecoBadge: 'recycle-4-pe', otr: '< 2.2', wvtr: '< 2.5' },

  // 4. Compostable
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Cello Triplex Highest Barrier (20µm NatureFlex / 15µm NKME / 50µm Bio-PBS)', code: 'BIO-CELLO-HIGH', ecoBadge: 'seedling-compostable', otr: '< 0.8', wvtr: '< 1.0' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Cello Triplex Metalised (20µm NatureFlex / 12µm VM Cello / 50µm PLA)', code: 'BIO-CELLO-VM', ecoBadge: 'seedling-compostable', otr: '< 1.2', wvtr: '< 1.5' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Kraft PBAT Low Barrier (40g FSC Kraft / 40µm PBAT/PLA)', code: 'BIO-KRAFT-PBAT', ecoBadge: 'seedling-compostable', otr: '< 8.0', wvtr: '< 8.0' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Bio-Kraft VM Cello (40g FSC Kraft / 12µm VM Cello / 50µm Bio-PBS)', code: 'BIO-KRAFT-VM', ecoBadge: 'seedling-compostable', otr: '< 1.5', wvtr: '< 1.8' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Compostable Material Structure Guide (EN 13432 & ASTM D6400)', code: 'BIO-GUIDE', ecoBadge: 'seedling-compostable', otr: 'N/A', wvtr: 'N/A' },
  { category: '🍃 Compostable (Home/Industrial)', name: 'Compostable Pouch GEO Optimization Structure', code: 'BIO-GEO', ecoBadge: 'seedling-compostable', otr: 'N/A', wvtr: 'N/A' }
];

interface AllInOneSpecTabProps {
  globalCustomer?: string;
}

export default function AllInOneSpecTab({ globalCustomer }: AllInOneSpecTabProps) {
  const [data, setData] = useState<FullSpecDocV2Data>({
    customerName: globalCustomer || 'BioPack Global Ltd.',
    customerDesc: 'Sustainable Custom Printed Stand-Up Pouch Packaging',
    customerCode: 'BPG-8092',
    poBatchNo: `AP-SPEC-V2-${new Date().getFullYear()}-0892`,
    revision: 'Rev v2.0',
    issueDate: new Date().toISOString().split('T')[0],
    itemNo: 'AP-FS2-12OZ',
    projectTitle: 'Sustainable Coffee Stand-Up Pouch Technical Specification',

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
    windowAddon: 'Clear Front Window',
    tearNotch: 'Dual Tear Notches (Left & Right)',
    hangHole: 'Euro Slot Hang Hole',

    printingProcess: 'Rotogravure / HD Digital Printing',
    printQuality: 'High-Definition Gloss & Matte Combination',
    numColours: '8 Colors (CMYK + 2 Spot + Matte Varnish + White Base)',
    totalRetainSolvent: '< 3.0 mg/m² (FDA Solvent Retain Standard)',
    solidColourVariation: 'ΔE < 1.5',
    barcodeScanQuality: 'Grade A ANSI Standard',

    bondStrength: 'Min 250 gf/25mm',
    heatSealStrength: 'Min 1,200 gf/25mm',
    wvtr: '< 1.5 g/m²/24h (38°C, 90% RH)',
    otr: '< 1.0 cc/m²/24h (23°C, 0% RH)',
    cofExternal: '0.20 – 0.35 (outside to outside)',
    cofInternal: '0.15 – 0.25 (inside to inside)',
    odour: 'No residual solvent odor. Suitable for sensitive food organoleptic evaluation.',
    generalQuality: 'Cleanroom manufactured under ISO 22000 & BRCGS Grade AA standards.',
    stewardshipRecyclability: '100% Recyclable / Bio-PE Sugarcane / Compostable Structure Option compliant with GRS standards.',

    approvedAchieve: 'Ryan Wong',
    approvedAchievePos: 'Chief Packaging Engineer & Quality Lead',
    approvedAchieveDate: new Date().toISOString().split('T')[0],
    approvedCustomer: 'Authorized Client Signee',
    approvedCustomerPos: 'Director of Procurement / QA Manager',
    approvedCustomerDate: new Date().toISOString().split('T')[0],

    artworkImage: '',
    artworkImages: [],
    selectedLogos: ['iso-22000', 'fda-food-safe', 'im-green', 'recycle-4-pe'],
    orderQuantity: '5,000 pcs',
    notes: 'Cleanroom manufacture. Pre-production video proofing and lab COA approval required prior to shipment.'
  });

  const [activeFormTab, setActiveFormTab] = useState<'general' | 'geometry' | 'material' | 'printing' | 'approval'>('general');
  const [successMsg, setSuccessMsg] = useState('');
  const [savedSpecs, setSavedSpecs] = useState<SavedFullSpecSheet[]>([]);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  // Synchronize global customer selection
  useEffect(() => {
    if (globalCustomer) {
      setData(prev => ({ ...prev, customerName: globalCustomer }));
    }
  }, [globalCustomer]);

  // Load saved specs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('achievepack_saved_full_specs_v2');
      if (stored) {
        setSavedSpecs(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse saved full spec sheets v2:', e);
    }
  }, []);

  const selectedMaterialObj = MATERIAL_CATALOG.find(m => m.name === data.materialStructure) || MATERIAL_CATALOG[0];

  const handleFieldChange = (field: keyof FullSpecDocV2Data, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogoToggle = (logoKey: string) => {
    setData(prev => {
      const currentLogos = prev.selectedLogos || [];
      const updatedLogos = currentLogos.includes(logoKey)
        ? currentLogos.filter(k => k !== logoKey)
        : [...currentLogos, logoKey];
      return { ...prev, selectedLogos: updatedLogos };
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const loadedImages: string[] = [...(data.artworkImages || [])];
      let filesProcessed = 0;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            loadedImages.push(reader.result as string);
          }
          filesProcessed++;
          if (filesProcessed === files.length) {
            setData(prev => ({
              ...prev,
              artworkImages: loadedImages,
              artworkImage: loadedImages[0] || ''
            }));
            setSuccessMsg(`Uploaded ${files.length} design proof(s) successfully!`);
            setTimeout(() => setSuccessMsg(''), 3000);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setData(prev => {
      const updated = (prev.artworkImages || []).filter((_, idx) => idx !== indexToRemove);
      return {
        ...prev,
        artworkImages: updated,
        artworkImage: updated[0] || ''
      };
    });
    setSuccessMsg('Design proof removed.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleSaveSpec = () => {
    const defaultName = `${data.customerName || 'Unnamed Client'} - ${data.itemNo || 'Spec v2'}`;
    const nameInput = prompt('Enter a title to save this Full Spec Sheet v2 locally:', defaultName);

    if (nameInput === null) return;
    const finalName = nameInput.trim() || defaultName;

    const newSavedItem: SavedFullSpecSheet = {
      id: Date.now().toString(),
      name: finalName,
      timestamp: new Date().toISOString(),
      data: data
    };

    const updated = [newSavedItem, ...savedSpecs];
    setSavedSpecs(updated);
    localStorage.setItem('achievepack_saved_full_specs_v2', JSON.stringify(updated));
    setSuccessMsg(`Full Spec Doc v2 "${finalName}" saved successfully!`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleLoadSpec = (spec: SavedFullSpecSheet) => {
    setData(spec.data);
    setSuccessMsg(`Restored Spec Sheet v2: ${spec.name}`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteSpec = (idToDelete: string, name: string) => {
    if (confirm(`Delete saved full spec doc v2 "${name}"?`)) {
      const updated = savedSpecs.filter(item => item.id !== idToDelete);
      setSavedSpecs(updated);
      localStorage.setItem('achievepack_saved_full_specs_v2', JSON.stringify(updated));
      setSuccessMsg('Deleted saved spec sheet v2.');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleExportBackup = () => {
    try {
      const jsonStr = JSON.stringify(savedSpecs, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `achievepack_full_specs_v2_backup_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setSuccessMsg('JSON Backup exported!');
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (e) {
      console.error('Export failed:', e);
    }
  };

  const handlePrint = () => {
    document.title = `${data.customerName} - Full Spec Doc v2 Technical Datasheet`;
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Notifications Toast */}
      {successMsg && (
        <div className="bg-emerald-600 text-white p-3 rounded-xl shadow-lg font-bold text-xs flex items-center justify-between animate-in fade-in slide-in-from-top-2 print:hidden">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {successMsg}
          </span>
          <button onClick={() => setSuccessMsg('')} className="text-white hover:opacity-80">✕</button>
        </div>
      )}

      {/* Top Banner Header (Hidden on Print) */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl border border-blue-900/50 print:hidden">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Product Specification & Technical Datasheet v2.0
          </div>
          <h2 className="text-xl font-black tracking-tight">Full Spec Doc v2 Engine (AchievePack Standard)</h2>
          <p className="text-xs text-slate-300 mt-1">Includes A4 Portrait letterhead, 38 canonical material structures, proof images uploader, certification logos, and sign-offs.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => setShowEmailModal(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" /> Email Client
          </button>

          <button
            onClick={handleSaveSpec}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition active:scale-95"
          >
            <Save className="w-3.5 h-3.5" /> Save Spec
          </button>

          <button
            onClick={handlePrint}
            className="px-5 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg flex items-center gap-2 transition active:scale-95"
          >
            <Printer className="w-4 h-4" /> Download / Print A4 PDF
          </button>
        </div>
      </div>

      {/* Main Grid: Form Inputs (5 cols) + Printable Preview (7 cols) (Hidden on Print) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 print:hidden">
        
        {/* LEFT COLUMN: Controls & Form Inputs */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          
          {/* Saved Spec Manager Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-xs space-y-3">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-extrabold text-gray-800 uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-blue-600" />
                Saved Full Specs v2 ({savedSpecs.length})
              </span>
              <button
                onClick={handleExportBackup}
                className="text-[10px] text-blue-600 font-bold hover:underline flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> Backup JSON
              </button>
            </div>

            {savedSpecs.length === 0 ? (
              <p className="text-gray-400 italic text-[11px]">No saved spec sheets found. Click "Save Spec" above to persist data locally.</p>
            ) : (
              <div className="max-h-[140px] overflow-y-auto space-y-1.5 pr-1">
                {savedSpecs.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-2 bg-gray-50 hover:bg-blue-50/50 rounded-lg border border-gray-200/80 text-gray-700 font-medium">
                    <div className="truncate mr-2">
                      <span className="font-bold text-gray-900 block truncate">{item.name}</span>
                      <span className="text-[9px] text-gray-400 font-mono">{new Date(item.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => handleLoadSpec(item)} className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] rounded shadow-xs">Restore</button>
                      <button onClick={() => handleDeleteSpec(item.id, item.name)} className="p-1 text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Tabs Container */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-gray-100/80 p-1.5 flex gap-1 overflow-x-auto border-b border-gray-200">
              <button onClick={() => setActiveFormTab('general')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 rounded-lg transition ${activeFormTab === 'general' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>1. General</button>
              <button onClick={() => setActiveFormTab('geometry')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 rounded-lg transition ${activeFormTab === 'geometry' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>2. Pouch Shape</button>
              <button onClick={() => setActiveFormTab('material')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 rounded-lg transition ${activeFormTab === 'material' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>3. Materials</button>
              <button onClick={() => setActiveFormTab('printing')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 rounded-lg transition ${activeFormTab === 'printing' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>4. Technical</button>
              <button onClick={() => setActiveFormTab('approval')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 rounded-lg transition ${activeFormTab === 'approval' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>5. Sign-off</button>
            </div>

            <div className="p-5 space-y-4 text-xs max-h-[550px] overflow-y-auto">
              
              {/* TAB 1: GENERAL */}
              {activeFormTab === 'general' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Customer / Brand Name</label>
                      <input type="text" value={data.customerName} onChange={e => handleFieldChange('customerName', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">PO / Batch Code</label>
                      <input type="text" value={data.poBatchNo} onChange={e => handleFieldChange('poBatchNo', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Project Title</label>
                    <input type="text" value={data.projectTitle} onChange={e => handleFieldChange('projectTitle', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Customer Code</label>
                      <input type="text" value={data.customerCode} onChange={e => handleFieldChange('customerCode', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Item Ref No.</label>
                      <input type="text" value={data.itemNo} onChange={e => handleFieldChange('itemNo', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Revision</label>
                      <input type="text" value={data.revision} onChange={e => handleFieldChange('revision', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white" />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Issue Date</label>
                    <input type="date" value={data.issueDate} onChange={e => handleFieldChange('issueDate', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:bg-white" />
                  </div>

                  {/* Artwork Proof Upload Box */}
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Design Proof Images (Multiple allowed)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 bg-gray-50/50 hover:bg-gray-50 hover:border-blue-500 transition cursor-pointer relative group text-center">
                      <input type="file" accept="image/*" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageUpload} />
                      <div className="flex flex-col items-center gap-1 text-gray-500">
                        <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
                        <span className="font-bold text-gray-700">Upload Design Proofs</span>
                        <span className="text-[10px] text-gray-400">PNG, JPG, WEBP accepted</span>
                      </div>
                    </div>

                    {((data.artworkImages && data.artworkImages.length > 0) || data.artworkImage) && (
                      <div className="mt-3 grid grid-cols-4 gap-2 border border-gray-100 bg-gray-50 p-2 rounded-xl">
                        {(data.artworkImages && data.artworkImages.length > 0 ? data.artworkImages : [data.artworkImage]).map((imgSrc, idx) => {
                          if (!imgSrc) return null;
                          return (
                            <div key={idx} className="relative border border-gray-200 rounded-lg overflow-hidden bg-white aspect-square flex items-center justify-center p-1 shadow-sm">
                              <img src={imgSrc} alt={`Proof thumbnail ${idx + 1}`} className="max-h-full max-w-full object-contain" />
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(idx)}
                                className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: POUCH SHAPE & DIMENSIONS */}
              {activeFormTab === 'geometry' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Pouch Shape</label>
                    <select
                      value={data.pouchShape}
                      onChange={e => handleFieldChange('pouchShape', e.target.value)}
                      className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 font-medium"
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
                      <label className="font-bold text-gray-700 block mb-1">Width (inch)</label>
                      <input
                        type="text"
                        value={data.customWidthInch}
                        onChange={e => handleFieldChange('customWidthInch', e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Height (inch)</label>
                      <input
                        type="text"
                        value={data.customHeightInch}
                        onChange={e => handleFieldChange('customHeightInch', e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Gusset (inch)</label>
                      <input
                        type="text"
                        value={data.customGussetInch}
                        onChange={e => handleFieldChange('customGussetInch', e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Width (mm)</label>
                      <input
                        type="text"
                        value={data.customWidthMm}
                        onChange={e => handleFieldChange('customWidthMm', e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Height (mm)</label>
                      <input
                        type="text"
                        value={data.customHeightMm}
                        onChange={e => handleFieldChange('customHeightMm', e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Gusset (mm)</label>
                      <input
                        type="text"
                        value={data.customGussetMm}
                        onChange={e => handleFieldChange('customGussetMm', e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Thickness (mil)</label>
                      <input type="text" value={data.thicknessMil} onChange={e => handleFieldChange('thicknessMil', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Thickness (microns)</label>
                      <input type="text" value={data.thicknessMicron} onChange={e => handleFieldChange('thicknessMicron', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50" />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Preset Capacity Rating</label>
                    <input type="text" value={data.presetCapacity} onChange={e => handleFieldChange('presetCapacity', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50" />
                  </div>
                </div>
              )}

              {/* TAB 3: MATERIALS & CERTIFICATION LOGOS */}
              {activeFormTab === 'material' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">38 Canonical Material Structure Catalog</label>
                    <select
                      value={data.materialStructure}
                      onChange={e => handleFieldChange('materialStructure', e.target.value)}
                      className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 text-[11px] font-medium"
                    >
                      {MATERIAL_CATALOG.map((m, idx) => (
                        <option key={idx} value={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Primary Closure</label>
                      <select value={data.closureAddon} onChange={e => handleFieldChange('closureAddon', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50">
                        <option>Press-to-Close Zipper</option>
                        <option>Pocket Zipper (Front Position)</option>
                        <option>Child-Resistant Zipper</option>
                        <option>Slider Zipper</option>
                        <option>Tin Tie (Coffee Tie)</option>
                        <option>Spout Fitment (10mm / 15mm)</option>
                        <option>No Zipper</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">One-Way Valve</label>
                      <select value={data.valveAddon ? 'Yes' : 'No'} onChange={e => handleFieldChange('valveAddon', e.target.value === 'Yes')} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50">
                        <option value="Yes">Yes (One-Way Coffee Degassing Valve)</option>
                        <option value="No">No Valve</option>
                      </select>
                    </div>
                  </div>

                  {/* Certification Logos Checkbox Selection */}
                  <div>
                    <label className="font-bold text-gray-700 block mb-2">Display Certification Logos in Spec Sheet</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border border-gray-200 bg-gray-50 p-3 rounded-xl max-h-[180px] overflow-y-auto">
                      {Object.entries(LOGO_SPECS).map(([key, spec]) => {
                        const isChecked = (data.selectedLogos || []).includes(key);
                        return (
                          <label key={key} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-200 hover:border-blue-400 transition cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleLogoToggle(key)}
                              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                            />
                            <div className="truncate">
                              <span className="font-bold text-gray-800 text-[11px] block truncate">{spec.label}</span>
                              <span className="text-[9px] text-gray-400 block truncate">{spec.description}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: TECHNICAL PRINTING & BARRIER */}
              {activeFormTab === 'printing' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Printing Process</label>
                      <input type="text" value={data.printingProcess} onChange={e => handleFieldChange('printingProcess', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Number of Colours</label>
                      <input type="text" value={data.numColours} onChange={e => handleFieldChange('numColours', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">OTR (Oxygen Transmission Rate)</label>
                      <input type="text" value={data.otr} onChange={e => handleFieldChange('otr', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 font-mono" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">WVTR (Water Vapor Transmission Rate)</label>
                      <input type="text" value={data.wvtr} onChange={e => handleFieldChange('wvtr', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 font-mono" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Heat Seal Strength</label>
                      <input type="text" value={data.heatSealStrength} onChange={e => handleFieldChange('heatSealStrength', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 font-mono" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-700 block mb-1">Lamination Bond Strength</label>
                      <input type="text" value={data.bondStrength} onChange={e => handleFieldChange('bondStrength', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50 font-mono" />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-gray-700 block mb-1">General Quality & Workmanship</label>
                    <textarea value={data.generalQuality} onChange={e => handleFieldChange('generalQuality', e.target.value)} rows={2} className="w-full border-gray-300 rounded-lg p-2 bg-gray-50" />
                  </div>
                </div>
              )}

              {/* TAB 5: DUAL SIGN-OFF APPROVAL */}
              {activeFormTab === 'approval' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 space-y-2">
                    <span className="font-extrabold text-blue-900 text-xs block">✍️ AchievePack Packaging Engineering Sign-Off</span>
                    <div>
                      <label className="font-bold text-gray-600 text-[10px] block">Approved By Name</label>
                      <input type="text" value={data.approvedAchieve} onChange={e => handleFieldChange('approvedAchieve', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-600 text-[10px] block">Position / Role</label>
                      <input type="text" value={data.approvedAchievePos} onChange={e => handleFieldChange('approvedAchievePos', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-600 text-[10px] block">Approval Date</label>
                      <input type="date" value={data.approvedAchieveDate} onChange={e => handleFieldChange('approvedAchieveDate', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-white font-mono" />
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 space-y-2">
                    <span className="font-extrabold text-amber-900 text-xs block">✍️ Customer Authorized Representative Sign-Off</span>
                    <div>
                      <label className="font-bold text-gray-600 text-[10px] block">Authorized Client Name</label>
                      <input type="text" value={data.approvedCustomer} onChange={e => handleFieldChange('approvedCustomer', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-600 text-[10px] block">Position / Title</label>
                      <input type="text" value={data.approvedCustomerPos} onChange={e => handleFieldChange('approvedCustomerPos', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-gray-600 text-[10px] block">Approval Date</label>
                      <input type="date" value={data.approvedCustomerDate} onChange={e => handleFieldChange('approvedCustomerDate', e.target.value)} className="w-full border-gray-300 rounded-lg p-2 bg-white font-mono" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Screen Preview (7 cols) (Hidden on Print) */}
        <div className="xl:col-span-7 flex flex-col gap-4 print:hidden">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-xs text-gray-600 uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              Real-Time Print Layout Preview (A4 Portrait Standard)
            </span>
            <span className="text-[11px] text-gray-400 font-mono">AchievePack Quality Lab Standard</span>
          </div>

          <div className="bg-gray-200 border border-gray-300 rounded-2xl p-6 overflow-y-auto max-h-[850px] shadow-inner flex flex-col items-center gap-8">
            
            {/* VIRTUAL A4 PAGE 1 */}
            <div className="bg-white text-black shadow-2xl p-[15mm_10mm] w-[210mm] min-h-[297mm] flex flex-col font-sans text-xs relative select-none">
              
              {/* PAGE NUMBER FOOTER */}
              <div className="absolute bottom-[8mm] left-[10mm] right-[10mm] flex justify-between text-[9px] text-gray-400 font-medium">
                <span>Issue date: {data.issueDate}</span>
                <span>page 1 / 2</span>
              </div>

              {/* ACHIEVEPACK OFFICIAL BRAND HEADER */}
              <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="AchievePack" className="h-10 w-auto object-contain" />
                    <span className="text-lg font-extrabold tracking-widest text-blue-950">achievepack</span>
                  </div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging Engine</span>
                </div>
                <div className="text-right text-[8px] leading-tight text-gray-500 max-w-[260px]">
                  <strong className="text-[10px] text-gray-800 font-bold block">AchievePack Limited</strong>
                  HK BRN: 41007097-000-07-14-4<br/>
                  1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
                  Technical Hotline: +852 6970 4411 | engineering@achievepack.com
                </div>
              </div>

              {/* TITLE BANNER */}
              <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-5 shadow-sm">
                Product Specification & Technical Datasheet v2.0
              </div>

              {/* METADATA SUMMARY ROW */}
              <div className="flex justify-between items-start mb-5 bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div className="space-y-1">
                  <div className="flex gap-2"><span className="font-bold text-gray-600 w-24">Target Client:</span><span className="font-bold text-gray-900">{data.customerName}</span></div>
                  <div className="flex gap-2"><span className="font-bold text-gray-600 w-24">Project Description:</span><span className="font-semibold text-gray-800">{data.projectTitle}</span></div>
                  <div className="flex gap-2"><span className="font-bold text-gray-600 w-24">PO / Batch Code:</span><span className="font-mono text-gray-800">{data.poBatchNo}</span></div>
                </div>
                <div className="bg-white border border-gray-300 rounded px-4 py-2 text-center min-w-[130px] shadow-xs">
                  <span className="text-[8px] font-bold text-gray-400 block uppercase tracking-wider mb-0.5">Item Ref Code</span>
                  <span className="text-xs font-extrabold text-blue-950 font-mono tracking-wide">{data.itemNo}</span>
                  <span className="text-[8px] text-emerald-700 font-bold block mt-0.5">{data.revision}</span>
                </div>
              </div>

              {/* TWO COLUMN CONTENT GRID */}
              <div className="grid grid-cols-2 gap-5 flex-1">
                
                {/* LEFT COLUMN: Section A & B */}
                <div className="space-y-4">
                  
                  {/* SECTION A: POUCH GEOMETRY & DIMENSIONS */}
                  <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-blue-700"/>
                    A. Pouch Geometry & Scale Specifications
                  </h4>
                  <table className="w-full border-collapse border border-gray-300 text-left mb-3">
                    <tbody>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 w-[130px] border-r border-gray-300">Pouch Shape:</td><td className="p-1.5 font-bold text-gray-900">{data.pouchShape}</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Dimensions (Inches):</td><td className="p-1.5 font-mono font-bold text-blue-900">{data.customWidthInch}" W x {data.customHeightInch}" H + {data.customGussetInch}" G</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Dimensions (mm):</td><td className="p-1.5 font-mono">{data.customWidthMm}mm W x {data.customHeightMm}mm H + {data.customGussetMm}mm G</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">355ml Reference Can:</td><td className="p-1.5 font-mono text-gray-600">2.6" x 4.8" (66mm x 122mm)</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Total Thickness:</td><td className="p-1.5 font-mono font-bold text-emerald-800">{data.thicknessMil} ({data.thicknessMicron})</td></tr>
                      <tr><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Preset Capacity Rating:</td><td className="p-1.5 font-semibold text-gray-800">{data.presetCapacity}</td></tr>
                    </tbody>
                  </table>

                  {/* SECTION B: MATERIAL STRUCTURE & BARRIER PERFORMANCE */}
                  <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-700"/>
                    B. Material Structure & Barrier Ratings
                  </h4>
                  <table className="w-full border-collapse border border-gray-300 text-left">
                    <tbody>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 w-[130px] border-r border-gray-300">Material Code:</td><td className="p-1.5 font-mono font-bold">{selectedMaterialObj.code}</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Full Lamination Structure:</td><td className="p-1.5 font-bold text-emerald-900">{selectedMaterialObj.name}</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">OTR Oxygen Barrier:</td><td className="p-1.5 font-mono font-bold text-blue-900">{selectedMaterialObj.otr} cc/m²/24h</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">WVTR Water Vapor:</td><td className="p-1.5 font-mono font-bold text-blue-900">{selectedMaterialObj.wvtr} g/m²/24h</td></tr>
                      <tr className="border-b border-gray-300"><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Primary Closure:</td><td className="p-1.5 font-semibold">{data.closureAddon}</td></tr>
                      <tr><td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Degassing Valve:</td><td className="p-1.5 font-semibold text-blue-900">{data.valveAddon ? 'Yes (One-Way Coffee Degassing Valve)' : 'No Valve'}</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* RIGHT COLUMN: Section C Technical Artwork Proof */}
                <div className="flex flex-col h-full justify-between">
                  <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-700"/>
                    C. Technical Artwork Reference Proof
                  </h4>

                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50/50 flex-1 flex flex-col items-center justify-center min-h-[340px] text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>

                    {(() => {
                      const imagesList = data.artworkImages && data.artworkImages.length > 0 ? data.artworkImages : (data.artworkImage ? [data.artworkImage] : []);
                      if (imagesList.length > 0) {
                        return (
                          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-1">
                            {imagesList.length === 1 ? (
                              <div className="flex flex-col items-center justify-center">
                                <img
                                  src={imagesList[0]}
                                  alt="Technical Proof"
                                  className="max-h-[250px] w-auto object-contain border border-gray-300 shadow-md rounded bg-white"
                                />
                                <div className="mt-3 bg-blue-900/10 border border-blue-900/20 text-blue-950 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                                  <ShieldCheck className="w-3.5 h-3.5 text-blue-800"/>
                                  APPROVED SYSTEM PROOF
                                </div>
                              </div>
                            ) : (
                              <div className="w-full flex flex-col gap-2.5">
                                <div className={`grid gap-2 w-full ${imagesList.length >= 5 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                                  {imagesList.map((imgSrc, idx) => (
                                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-1 shadow-sm flex flex-col items-center gap-1 aspect-[4/3] justify-center">
                                      <img src={imgSrc} alt={`Proof ${idx + 1}`} className="max-h-[60px] w-auto object-contain" />
                                      <span className="text-[8px] font-bold text-gray-500 uppercase block">Design {idx + 1}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      } else {
                        return (
                          <div className="relative z-10 flex flex-col items-center justify-center text-gray-400 p-4">
                            <FileCode className="w-12 h-12 text-gray-300 mb-2 stroke-[1.5]" />
                            <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">TECHNICAL BLUEPRINT PROOF</span>
                            <span className="text-[9px] text-gray-400 max-w-[180px]">No design proof uploaded. Upload artwork images in General Configuration tab.</span>
                          </div>
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* VIRTUAL A4 PAGE 2 */}
            <div className="bg-white text-black shadow-2xl p-[15mm_10mm] w-[210mm] min-h-[297mm] flex flex-col font-sans text-xs relative select-none">
              
              {/* PAGE NUMBER FOOTER */}
              <div className="absolute bottom-[8mm] left-[10mm] right-[10mm] flex justify-between text-[9px] text-gray-400 font-medium">
                <span>Issue date: {data.issueDate}</span>
                <span>page 2 / 2</span>
              </div>

              {/* SECTION D: TECHNICAL & PHYSICAL PROPERTIES */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700"/>
                D. Physical Property Tolerances & Technical Standards
              </h4>
              <table className="w-full border-collapse border border-gray-300 mb-5 text-left">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-1.5 w-[140px] border-r border-gray-300">Lamination Bond Strength:</td>
                    <td className="p-1.5 font-bold border-r border-gray-300">{data.bondStrength}</td>
                    <td className="bg-gray-50 font-bold p-1.5 w-[140px] border-r border-gray-300">Heat Seal Strength:</td>
                    <td className="p-1.5 font-bold text-emerald-800">{data.heatSealStrength}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Solvent Retain Limit:</td>
                    <td className="p-1.5 font-mono border-r border-gray-300">{data.totalRetainSolvent}</td>
                    <td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Colour Variation (ΔE):</td>
                    <td className="p-1.5 font-mono">{data.solidColourVariation}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">COF External:</td>
                    <td className="p-1.5 font-mono border-r border-gray-300">{data.cofExternal}</td>
                    <td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">COF Internal:</td>
                    <td className="p-1.5 font-mono">{data.cofInternal}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Odour Evaluation:</td>
                    <td colSpan={3} className="p-1.5 text-gray-700">{data.odour}</td>
                  </tr>
                  <tr>
                    <td className="bg-gray-50 font-bold p-1.5 border-r border-gray-300">Quality Standard:</td>
                    <td colSpan={3} className="p-1.5 text-gray-700">{data.generalQuality}</td>
                  </tr>
                </tbody>
              </table>

              {/* SECTION E: AUTHORIZED CERTIFICATION LOGOS */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Recycle className="w-3.5 h-3.5 text-blue-700"/>
                E. Authorized Certification Logos & Food Safety Compliance
              </h4>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-6">
                <div className="text-[10px] text-gray-700 mb-2 font-medium">
                  This product specification is manufactured under certified cleanroom systems adhering to ISO 22000, US FDA 21 CFR 177.1520 / 175.300, and EU 10/2011 regulations with zero intentionally added BPA, Phthalates, or PFAS.
                </div>
                {data.selectedLogos && data.selectedLogos.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200">
                    {data.selectedLogos.map(logoKey => (
                      <div key={logoKey} className="flex items-center gap-2 bg-white border border-gray-200 rounded px-2.5 py-1.5 shadow-xs">
                        <img src={LOGO_SPECS[logoKey]?.src} alt={LOGO_SPECS[logoKey]?.label} className="h-7 w-auto object-contain" />
                        <span className="font-bold text-gray-800 text-[9px]">{LOGO_SPECS[logoKey]?.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SECTION F: DUAL SIGN-OFF APPROVAL */}
              <h4 className="font-extrabold text-blue-900 text-[11px] border-b border-gray-300 pb-1 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700"/>
                F. Dual Engineering & Authorization Sign-Off
              </h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="border border-blue-200 bg-blue-50/40 rounded-lg p-3 text-[10px]">
                  <span className="font-extrabold text-blue-900 uppercase block mb-1">AchievePack Quality Approval</span>
                  <p><strong>Approved By:</strong> {data.approvedAchieve}</p>
                  <p><strong>Position:</strong> {data.approvedAchievePos}</p>
                  <p><strong>Date:</strong> {data.approvedAchieveDate}</p>
                  <div className="mt-3 italic font-serif font-bold text-blue-950 text-xs border-t border-blue-200 pt-1">{data.approvedAchieve}</div>
                </div>

                <div className="border border-amber-200 bg-amber-50/40 rounded-lg p-3 text-[10px]">
                  <span className="font-extrabold text-amber-900 uppercase block mb-1">Customer Authorization Sign-Off</span>
                  <p><strong>Authorized Name:</strong> {data.approvedCustomer}</p>
                  <p><strong>Position:</strong> {data.approvedCustomerPos}</p>
                  <p><strong>Date:</strong> {data.approvedCustomerDate}</p>
                  <div className="mt-3 italic font-serif font-bold text-amber-950 text-xs border-t border-amber-200 pt-1">{data.approvedCustomer}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* DEDICATED PRINT ENGINE (Visible ONLY when printing via window.print() / Download PDF) */}
      <div className="hidden print:block bg-white text-black min-h-screen text-xs leading-normal">
        <style>{`
          @page {
            size: A4 portrait;
            margin: 0;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              background-color: white !important;
              color: black !important;
              font-family: Arial, sans-serif !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .print-page-v2 {
              width: 210mm;
              height: 282mm;
              padding: 10mm 12mm 10mm 12mm;
              position: relative;
              page-break-after: always !important;
              page-break-inside: avoid !important;
              box-sizing: border-box;
              background: white !important;
            }
            .print-page-v2:last-child {
              page-break-after: avoid !important;
            }
            table {
              border-collapse: collapse !important;
              width: 100% !important;
            }
            th, td {
              border: 1px solid #94a3b8 !important;
              padding: 4px 6px !important;
              font-size: 9px !important;
              line-height: 1.3 !important;
            }
          }
        `}</style>

        {/* PRINT PAGE 1 */}
        <div className="print-page-v2">
          <div className="absolute bottom-[8mm] left-[12mm] right-[12mm] flex justify-between text-[9px] text-gray-400 font-medium border-t border-gray-200 pt-1">
            <span>Issue date: {data.issueDate}</span>
            <span>page 1 / 2</span>
          </div>

          <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-3 mb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="AchievePack" className="h-10 w-auto object-contain" />
                <span className="text-lg font-extrabold tracking-widest text-blue-950">achievepack</span>
              </div>
              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging Engine</span>
            </div>
            <div className="text-right text-[8px] leading-tight text-gray-500 max-w-[260px]">
              <strong className="text-[10px] text-gray-800 font-bold block">AchievePack Limited</strong>
              HK BRN: 41007097-000-07-14-4<br/>
              1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
              Technical Hotline: +852 6970 4411 | engineering@achievepack.com
            </div>
          </div>

          <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-4">
            Product Specification & Technical Datasheet v2.0
          </div>

          <div className="flex justify-between items-start mb-4 bg-gray-50 border border-gray-300 p-3 rounded">
            <div className="space-y-1">
              <div className="flex gap-2"><span className="font-bold text-gray-700 w-24">Target Client:</span><span className="font-bold text-gray-900">{data.customerName}</span></div>
              <div className="flex gap-2"><span className="font-bold text-gray-700 w-24">Project Title:</span><span className="font-semibold text-gray-800">{data.projectTitle}</span></div>
              <div className="flex gap-2"><span className="font-bold text-gray-700 w-24">PO / Batch Code:</span><span className="font-mono text-gray-800">{data.poBatchNo}</span></div>
            </div>
            <div className="bg-white border border-gray-300 rounded px-3 py-1.5 text-center min-w-[120px]">
              <span className="text-[8px] font-bold text-gray-400 block uppercase tracking-wider">Item Ref Code</span>
              <span className="text-xs font-extrabold text-blue-950 font-mono">{data.itemNo}</span>
              <span className="text-[8px] text-emerald-700 font-bold block">{data.revision}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 uppercase tracking-wider">A. Pouch Geometry & Scale</h4>
              <table className="w-full text-left">
                <tbody>
                  <tr><td className="bg-gray-50 font-bold w-[120px]">Pouch Shape:</td><td className="font-bold">{data.pouchShape}</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Dimensions (in):</td><td className="font-mono font-bold text-blue-900">{data.customWidthInch}" W x {data.customHeightInch}" H + {data.customGussetInch}" G</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Dimensions (mm):</td><td className="font-mono">{data.customWidthMm}mm W x {data.customHeightMm}mm H + {data.customGussetMm}mm G</td></tr>
                  <tr><td className="bg-gray-50 font-bold">355ml Can Ref:</td><td className="font-mono">2.6" x 4.8" (66mm x 122mm)</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Thickness:</td><td className="font-mono font-bold">{data.thicknessMil} ({data.thicknessMicron})</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Capacity:</td><td>{data.presetCapacity}</td></tr>
                </tbody>
              </table>

              <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 uppercase tracking-wider">B. Material & Barrier Ratings</h4>
              <table className="w-full text-left">
                <tbody>
                  <tr><td className="bg-gray-50 font-bold w-[120px]">Material Code:</td><td className="font-mono font-bold">{selectedMaterialObj.code}</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Structure:</td><td className="font-bold text-emerald-900">{selectedMaterialObj.name}</td></tr>
                  <tr><td className="bg-gray-50 font-bold">OTR Barrier:</td><td className="font-mono font-bold text-blue-900">{selectedMaterialObj.otr} cc/m²/24h</td></tr>
                  <tr><td className="bg-gray-50 font-bold">WVTR Barrier:</td><td className="font-mono font-bold text-blue-900">{selectedMaterialObj.wvtr} g/m²/24h</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Primary Closure:</td><td>{data.closureAddon}</td></tr>
                  <tr><td className="bg-gray-50 font-bold">Valve:</td><td className="font-bold text-blue-900">{data.valveAddon ? 'Yes (One-Way Coffee Valve)' : 'No Valve'}</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 uppercase tracking-wider mb-2">C. Technical Artwork Proof</h4>
              <div className="border border-gray-300 rounded p-3 bg-gray-50 min-h-[310px] flex flex-col items-center justify-center text-center">
                {(() => {
                  const imagesList = data.artworkImages && data.artworkImages.length > 0 ? data.artworkImages : (data.artworkImage ? [data.artworkImage] : []);
                  if (imagesList.length > 0) {
                    return (
                      <div className="w-full flex flex-col items-center justify-center">
                        {imagesList.length === 1 ? (
                          <img src={imagesList[0]} alt="Proof" className="max-h-[240px] w-auto object-contain border border-gray-300 shadow-sm bg-white" />
                        ) : (
                          <div className="grid grid-cols-2 gap-2 w-full">
                            {imagesList.map((imgSrc, idx) => (
                              <div key={idx} className="bg-white border border-gray-200 p-1 flex flex-col items-center">
                                <img src={imgSrc} alt={`Proof ${idx + 1}`} className="max-h-[60px] w-auto object-contain" />
                                <span className="text-[8px] font-bold text-gray-500">Design {idx + 1}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="mt-2 text-[8px] font-extrabold text-blue-900 uppercase">APPROVED TECHNICAL PROOF</div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="text-gray-400">
                        <FileCode className="w-10 h-10 text-gray-300 mx-auto mb-1" />
                        <span className="text-[9px] font-extrabold text-gray-500 uppercase block">TECHNICAL BLUEPRINT PROOF</span>
                        <span className="text-[8px] text-gray-400">No artwork proof uploaded</span>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* PRINT PAGE 2 */}
        <div className="print-page-v2">
          <div className="absolute bottom-[8mm] left-[12mm] right-[12mm] flex justify-between text-[9px] text-gray-400 font-medium border-t border-gray-200 pt-1">
            <span>Issue date: {data.issueDate}</span>
            <span>page 2 / 2</span>
          </div>

          <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 uppercase tracking-wider mb-2">D. Technical Tolerances & Quality Standards</h4>
          <table className="w-full text-left mb-4">
            <tbody>
              <tr><td className="bg-gray-50 font-bold w-[140px]">Bond Strength:</td><td className="font-bold">{data.bondStrength}</td><td className="bg-gray-50 font-bold w-[140px]">Heat Seal Strength:</td><td className="font-bold text-emerald-800">{data.heatSealStrength}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Solvent Retain:</td><td className="font-mono">{data.totalRetainSolvent}</td><td className="bg-gray-50 font-bold">Colour Variation:</td><td className="font-mono">{data.solidColourVariation}</td></tr>
              <tr><td className="bg-gray-50 font-bold">COF External:</td><td className="font-mono">{data.cofExternal}</td><td className="bg-gray-50 font-bold">COF Internal:</td><td className="font-mono">{data.cofInternal}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Odour Evaluation:</td><td colSpan={3}>{data.odour}</td></tr>
              <tr><td className="bg-gray-50 font-bold">Quality Standard:</td><td colSpan={3}>{data.generalQuality}</td></tr>
            </tbody>
          </table>

          <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 uppercase tracking-wider mb-2">E. Authorized Certification Logos & Food Safety</h4>
          <div className="bg-gray-50 border border-gray-300 p-3 rounded mb-4">
            <div className="text-[9px] text-gray-700 mb-2">
              Manufactured under certified cleanroom systems adhering to ISO 22000, US FDA 21 CFR 177.1520 / 175.300, and EU 10/2011 regulations with zero intentionally added BPA, Phthalates, or PFAS.
            </div>
            {data.selectedLogos && data.selectedLogos.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-200">
                {data.selectedLogos.map(logoKey => (
                  <div key={logoKey} className="flex items-center gap-1.5 bg-white border border-gray-300 rounded px-2 py-1">
                    <img src={LOGO_SPECS[logoKey]?.src} alt={LOGO_SPECS[logoKey]?.label} className="h-6 w-auto object-contain" />
                    <span className="font-bold text-gray-800 text-[8px]">{LOGO_SPECS[logoKey]?.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <h4 className="font-extrabold text-blue-900 text-[10px] border-b border-gray-300 pb-1 uppercase tracking-wider mb-2">F. Dual Engineering & Authorization Sign-Off</h4>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border border-blue-200 bg-blue-50/30 p-2.5 rounded text-[9px]">
              <span className="font-extrabold text-blue-900 uppercase block mb-1">AchievePack Engineering Quality Approval</span>
              <p><strong>Approved By:</strong> {data.approvedAchieve}</p>
              <p><strong>Position:</strong> {data.approvedAchievePos}</p>
              <p><strong>Date:</strong> {data.approvedAchieveDate}</p>
              <div className="mt-2 italic font-serif font-bold text-blue-950 text-xs border-t border-blue-200 pt-1">{data.approvedAchieve}</div>
            </div>

            <div className="border border-amber-200 bg-amber-50/30 p-2.5 rounded text-[9px]">
              <span className="font-extrabold text-amber-900 uppercase block mb-1">Customer Authorization Sign-Off</span>
              <p><strong>Authorized Client Name:</strong> {data.approvedCustomer}</p>
              <p><strong>Position:</strong> {data.approvedCustomerPos}</p>
              <p><strong>Date:</strong> {data.approvedCustomerDate}</p>
              <div className="mt-2 italic font-serif font-bold text-amber-950 text-xs border-t border-amber-200 pt-1">{data.approvedCustomer}</div>
            </div>
          </div>
        </div>
      </div>

      {/* EMAIL CLIENT MODAL */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 text-xs animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                Email Full Spec Doc v2 to Client
              </h3>
              <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1">Client Email Address</label>
              <input
                type="email"
                value={emailAddress}
                onChange={e => setEmailAddress(e.target.value)}
                placeholder="client@company.com"
                className="w-full border-gray-300 rounded-lg p-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-700 space-y-1">
              <p><strong>Recipient:</strong> {data.customerName}</p>
              <p><strong>Document:</strong> Full Spec Doc v2 ({data.poBatchNo})</p>
              <p><strong>Structure:</strong> {data.materialStructure}</p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowEmailModal(false)}
                className="flex-1 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200"
              >
                Cancel
              </button>
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(`[AchievePack] Full Spec Doc v2 Technical Specification - ${data.customerName}`)}&body=${encodeURIComponent(`Dear ${data.customerName},\n\nPlease find attached the technical specification datasheet v2.0 for your packaging project:\n\nProject: ${data.projectTitle}\nItem Ref: ${data.itemNo}\nMaterial: ${data.materialStructure}\nPouch Geometry: ${data.customWidthInch}" W x ${data.customHeightInch}" H + ${data.customGussetInch}" G (${data.pouchShape})\n\nView technical directory: https://achievepack.com/directory\n\nBest regards,\nRyan Wong | AchievePack Quality Control Engineering`)}`}
                onClick={() => {
                  setShowEmailModal(false);
                  setSuccessMsg('Email client opened successfully!');
                  setTimeout(() => setSuccessMsg(''), 3000);
                }}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center shadow-md"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
