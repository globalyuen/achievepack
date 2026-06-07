import React, { useState, useEffect } from 'react';
import { Download, Plus, Trash2, Loader2, FileText, Check, Printer, FileCheck, Layers, ShieldCheck, ClipboardList, Save, ScrollText } from 'lucide-react';

interface CoaItem {
  category: 'Appearance' | 'Dimensional deviation' | 'Physical and mechanical properties';
  name: string;
  standard: string;
  testSpeed: string;
  result: string;
  conclusion: 'Qualified' | 'Conform to' | 'Unqualified' | 'N/A';
}

interface CoaData {
  customer: string;
  customerAddress: string;
  sampleName: string;
  materialComposition: string;
  productSpecifications: string;
  testConditions: string;
  productionDate: string;
  batchNumber: string;
  samplingQuantity: string;
  deliveryQuantity: string;
  analystSignature: string;
  directorSignature: string;
  conclusionText: string;
  items: CoaItem[];
}

const DEFAULT_ITEMS: CoaItem[] = [
  // 1. Appearance
  { category: 'Appearance', name: 'Printing', standard: 'The finished products are clean, without obvious dirt, defects, knife marks, or scratches. The text printing is clear and complete, with smooth edges of the imprints. The mesh pattern is clear and uniform, without obvious deformation or damage. The overprinting is basically accurate, with almost no color difference between the same colors, and the black layer has a glossy finish.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Appearance', name: 'Wrinkles', standard: 'Minor wrinkles are allowed (for bags, minor wrinkles that do not penetrate the heat-sealed edges are permitted).', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Appearance', name: 'Contamination marks', standard: 'No foreign objects, oil stains, or other contaminants are allowed. Slight unevenness in adhesive application or marks caused by pressure rollers are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Appearance', name: 'Scratch, Scorch', standard: 'No burns or holes in single-layer films are allowed, and no scratches are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Appearance', name: 'Perforation, Bubble', standard: 'No perforations or bubbles that affect usability are allowed.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Appearance', name: 'Flatness of rolled film', standard: 'The surface of the rolled film is flat, and the end face is basically neat.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  // 2. Dimensional deviation
  { category: 'Dimensional deviation', name: 'Number of joints in rolled film', standard: 'No more than 2 per kilometer; the joints must be firm, accurate, and marked.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Dimensional deviation', name: 'Length deviation', standard: 'As per the customer\'s needs (Film > 0, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Dimensional deviation', name: 'Width deviation', standard: 'As per the customer\'s needs (Film ±2mm, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Dimensional deviation', name: 'Thickness deviation', standard: 'As per the customer\'s needs (Tolerance ±10%)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
  // 3. Physical and mechanical properties
  { category: 'Physical and mechanical properties', name: 'Tensile strength', standard: '≥30', testSpeed: '250', result: '101.1', conclusion: 'Qualified' },
  { category: 'Physical and mechanical properties', name: 'Elongation at break', standard: '≥25', testSpeed: '250', result: '26.3', conclusion: 'Qualified' },
  { category: 'Physical and mechanical properties', name: 'Peel strength', standard: '≥0.2', testSpeed: '250', result: 'Cannot be peeled off', conclusion: 'Qualified' },
  { category: 'Physical and mechanical properties', name: 'Heat-seal strength', standard: '≥7', testSpeed: '300', result: '63', conclusion: 'Qualified' },
  { category: 'Physical and mechanical properties', name: 'Pressure resistance performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '6h', result: 'Conform to', conclusion: 'Qualified' },
  { category: 'Physical and mechanical properties', name: 'Drop performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' }
];

const PRESETS: Record<string, { label: string; description: string; data: CoaData }> = {
  pvdc: {
    label: 'PVdC-PET / PE (SEGAPAC Style)',
    description: 'COA for high-barrier PVdC pouch for supplements and vacuum packaging.',
    data: {
      customer: 'Sega Pac Pty Ltd',
      customerAddress: 'Unit 4, 12 Technology Drive, Lane Cove NSW 2066, Australia',
      sampleName: 'Stand up pouch',
      materialComposition: '14μm PVdC PET / Adhesive / 70μm PE',
      productSpecifications: '160 * 230 + 40 mm',
      testConditions: '25/50',
      productionDate: new Date().toISOString().split('T')[0],
      batchNumber: 'SC' + Math.floor(1000000 + Math.random() * 9000000),
      samplingQuantity: '315 pcs',
      deliveryQuantity: '15,000 pcs',
      analystSignature: 'Lin Fang',
      directorSignature: 'Xiong Wei',
      conclusionText: 'This batch of products has passed the inspection and is approved for delivery.',
      items: [
        { category: 'Appearance', name: 'Printing', standard: 'The finished products are clean, without obvious dirt, defects, knife marks, or scratches. The text printing is clear and complete, with smooth edges of the imprints. The mesh pattern is clear and uniform, without obvious deformation or damage. The overprinting is basically accurate, with almost no color difference between the same colors, and the black layer has a glossy finish.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Wrinkles', standard: 'Minor wrinkles are allowed (for bags, minor wrinkles that do not penetrate the heat-sealed edges are permitted).', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Contamination marks', standard: 'No foreign objects, oil stains, or other contaminants are allowed. Slight unevenness in adhesive application or marks caused by pressure rollers are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Scratch, Scorch', standard: 'No burns or holes in single-layer films are allowed, and no scratches are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Perforation, Bubble', standard: 'No perforations or bubbles that affect usability are allowed.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Flatness of rolled film', standard: 'The surface of the rolled film is flat, and the end face is basically neat.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Number of joints in rolled film', standard: 'No more than 2 per kilometer; the joints must be firm, accurate, and marked.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Length deviation', standard: 'As per the customer\'s needs (Film > 0, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Width deviation', standard: 'As per the customer\'s needs (Film ±2mm, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Thickness deviation', standard: 'As per the customer\'s needs (Tolerance ±10%)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Tensile strength', standard: '≥30', testSpeed: '250', result: '98.4', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Elongation at break', standard: '≥25', testSpeed: '250', result: '290', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Peel strength', standard: '≥0.2', testSpeed: '250', result: 'Cannot be peeled off', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Heat-seal strength', standard: '≥7', testSpeed: '300', result: '24.5', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Pressure resistance performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '6h', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Drop performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' }
      ]
    }
  },
  compostable: {
    label: 'Kraft Paper / PBAT / PLA (Compostable)',
    description: 'COA for 100% Home & Industrial Compostable bag with bio-barrier.',
    data: {
      customer: 'EcoFood Co.',
      customerAddress: '56 Green Way, Brunswick VIC 3056, Australia',
      sampleName: 'Compostable Kraft Pouch',
      materialComposition: '30g Kraft Paper / Bio-PBS Adhesive / 50μm PLA Sealant Film',
      productSpecifications: '150 * 210 + 35 mm',
      testConditions: '25/50',
      productionDate: new Date().toISOString().split('T')[0],
      batchNumber: 'SC' + Math.floor(1000000 + Math.random() * 9000000),
      samplingQuantity: '315 pcs',
      deliveryQuantity: '10,000 pcs',
      analystSignature: 'Lin Fang',
      directorSignature: 'Xiong Wei',
      conclusionText: 'This batch of products has passed the inspection and is approved for delivery.',
      items: [
        { category: 'Appearance', name: 'Printing', standard: 'The finished products are clean, without obvious dirt, defects, knife marks, or scratches. The text printing is clear and complete, with smooth edges of the imprints. The mesh pattern is clear and uniform, without obvious deformation or damage. The overprinting is basically accurate, with almost no color difference between the same colors, and the black layer has a glossy finish.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Wrinkles', standard: 'Minor wrinkles are allowed (for bags, minor wrinkles that do not penetrate the heat-sealed edges are permitted).', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Contamination marks', standard: 'No foreign objects, oil stains, or other contaminants are allowed. Slight unevenness in adhesive application or marks caused by pressure rollers are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Scratch, Scorch', standard: 'No burns or holes in single-layer films are allowed, and no scratches are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Perforation, Bubble', standard: 'No perforations or bubbles that affect usability are allowed.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Flatness of rolled film', standard: 'The surface of the rolled film is flat, and the end face is basically neat.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Number of joints in rolled film', standard: 'No more than 2 per kilometer; the joints must be firm, accurate, and marked.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Length deviation', standard: 'As per the customer\'s needs (Film > 0, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Width deviation', standard: 'As per the customer\'s needs (Film ±2mm, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Thickness deviation', standard: 'As per the customer\'s needs (Tolerance ±10%)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Tensile strength', standard: '≥25', testSpeed: '250', result: '68.2', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Elongation at break', standard: '≥25', testSpeed: '250', result: '240', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Peel strength', standard: '≥0.15', testSpeed: '250', result: 'Cannot be peeled off', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Heat-seal strength', standard: '≥6', testSpeed: '300', result: '18.1', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Pressure resistance performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '6h', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Drop performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' }
      ]
    }
  },
  recyclable: {
    label: 'Mono-Material PE / EVOH-PE (Recyclable)',
    description: 'COA for 100% Recyclable high barrier mono-PE pouch.',
    data: {
      customer: 'CleanFoods Ltd',
      customerAddress: '88 Circular Road, Suite 12, Singapore 049403',
      sampleName: 'Recyclable Mono-PE Pouch',
      materialComposition: 'MDO-PE / Solventless Adhesive / High-Barrier EVOH-PE Film',
      productSpecifications: '200 * 300 + 50 mm',
      testConditions: '25/50',
      productionDate: new Date().toISOString().split('T')[0],
      batchNumber: 'SC' + Math.floor(1000000 + Math.random() * 9000000),
      samplingQuantity: '315 pcs',
      deliveryQuantity: '20,000 pcs',
      analystSignature: 'Lin Fang',
      directorSignature: 'Xiong Wei',
      conclusionText: 'This batch of products has passed the inspection and is approved for delivery.',
      items: [
        { category: 'Appearance', name: 'Printing', standard: 'The finished products are clean, without obvious dirt, defects, knife marks, or scratches. The text printing is clear and complete, with smooth edges of the imprints. The mesh pattern is clear and uniform, without obvious deformation or damage. The overprinting is basically accurate, with almost no color difference between the same colors, and the black layer has a glossy finish.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Wrinkles', standard: 'Minor wrinkles are allowed (for bags, minor wrinkles that do not penetrate the heat-sealed edges are permitted).', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Contamination marks', standard: 'No foreign objects, oil stains, or other contaminants are allowed. Slight unevenness in adhesive application or marks caused by pressure rollers are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Scratch, Scorch', standard: 'No burns or holes in single-layer films are allowed, and no scratches are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Perforation, Bubble', standard: 'No perforations or bubbles that affect usability are allowed.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Flatness of rolled film', standard: 'The surface of the rolled film is flat, and the end face is basically neat.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Number of joints in rolled film', standard: 'No more than 2 per kilometer; the joints must be firm, accurate, and marked.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Length deviation', standard: 'As per the customer\'s needs (Film > 0, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Width deviation', standard: 'As per the customer\'s needs (Film ±2mm, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Thickness deviation', standard: 'As per the customer\'s needs (Tolerance ±10%)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Tensile strength', standard: '≥32', testSpeed: '250', result: '88.5', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Elongation at break', standard: '≥25', testSpeed: '250', result: '310', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Peel strength', standard: '≥0.2', testSpeed: '250', result: 'Cannot be peeled off', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Heat-seal strength', standard: '≥8', testSpeed: '300', result: '29.2', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Pressure resistance performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '6h', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Drop performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' }
      ]
    }
  },
  pcr: {
    label: '50% PCR-PET / PE (Recycled Content)',
    description: 'COA for high-barrier PCR film bag with post-consumer recycled content.',
    data: {
      customer: 'PureGym Nutrition',
      customerAddress: 'Unit 9A, Industrial Estate, Leeds LS10 1NT, United Kingdom',
      sampleName: 'PCR Stand Up Pouch',
      materialComposition: '12μm PCR-PET (50% recycled) / AL-Adhesive / 80μm PE Film',
      productSpecifications: '180 * 250 + 40 mm',
      testConditions: '25/50',
      productionDate: new Date().toISOString().split('T')[0],
      batchNumber: 'SC' + Math.floor(1000000 + Math.random() * 9000000),
      samplingQuantity: '315 pcs',
      deliveryQuantity: '20,000 pcs',
      analystSignature: 'Lin Fang',
      directorSignature: 'Xiong Wei',
      conclusionText: 'This batch of products has passed the inspection and is approved for delivery.',
      items: [
        { category: 'Appearance', name: 'Printing', standard: 'The finished products are clean, without obvious dirt, defects, knife marks, or scratches. The text printing is clear and complete, with smooth edges of the imprints. The mesh pattern is clear and uniform, without obvious deformation or damage. The overprinting is basically accurate, with almost no color difference between the same colors, and the black layer has a glossy finish.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Wrinkles', standard: 'Minor wrinkles are allowed (for bags, minor wrinkles that do not penetrate the heat-sealed edges are permitted).', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Contamination marks', standard: 'No foreign objects, oil stains, or other contaminants are allowed. Slight unevenness in adhesive application or marks caused by pressure rollers are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Scratch, Scorch', standard: 'No burns or holes in single-layer films are allowed, and no scratches are permitted.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Perforation, Bubble', standard: 'No perforations or bubbles that affect usability are allowed.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Appearance', name: 'Flatness of rolled film', standard: 'The surface of the rolled film is flat, and the end face is basically neat.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Number of joints in rolled film', standard: 'No more than 2 per kilometer; the joints must be firm, accurate, and marked.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Length deviation', standard: 'As per the customer\'s needs (Film > 0, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Width deviation', standard: 'As per the customer\'s needs (Film ±2mm, Bag see Q/JHX01-2018)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Dimensional deviation', name: 'Thickness deviation', standard: 'As per the customer\'s needs (Tolerance ±10%)', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Tensile strength', standard: '≥30', testSpeed: '250', result: '94.1', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Elongation at break', standard: '≥25', testSpeed: '250', result: '280', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Peel strength', standard: '≥0.2', testSpeed: '250', result: 'Cannot be peeled off', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Heat-seal strength', standard: '≥7.5', testSpeed: '300', result: '25.8', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Pressure resistance performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '6h', result: 'Conform to', conclusion: 'Qualified' },
        { category: 'Physical and mechanical properties', name: 'Drop performance of the bag', standard: 'No penetration, no rupture.', testSpeed: '', result: 'Conform to', conclusion: 'Qualified' }
      ]
    }
  }
};

interface SavedCoa {
  id: string;
  name: string;
  timestamp: string;
  data: CoaData;
}

interface CoaTabProps {
  globalCustomer?: string;
}

export default function CoaTab({ globalCustomer }: CoaTabProps) {
  const [data, setData] = useState<CoaData>({
    customer: 'Sega Pac Pty Ltd',
    customerAddress: 'Unit 4, 12 Technology Drive, Lane Cove NSW 2066, Australia',
    sampleName: 'Stand-up pouch zipper',
    materialComposition: 'MOPP-Double Electrification/Reinforced VMPET//Reinforced PE',
    productSpecifications: '300*340+75 mm',
    testConditions: '25/50',
    productionDate: '2025-07-08',
    batchNumber: 'SC3340634',
    samplingQuantity: '315 pcs',
    deliveryQuantity: '10,500 pcs',
    analystSignature: 'Lin Fang',
    directorSignature: 'Xiongwe',
    conclusionText: 'This batch of products has passed the inspection and is approved for delivery.',
    items: [...DEFAULT_ITEMS]
  });
  const [activeFormTab, setActiveFormTab] = useState<'general' | 'parameters' | 'signatures'>('general');
  const [successMsg, setSuccessMsg] = useState('');
  const [savedCoas, setSavedCoas] = useState<SavedCoa[]>([]);

  // Update customer if global selector changes
  useEffect(() => {
    if (globalCustomer) {
      setData(prev => ({
        ...prev,
        customer: globalCustomer
      }));
    }
  }, [globalCustomer]);

  // Dynamically set page title when printing so the exported PDF file has a professional name
  useEffect(() => {
    const handleBeforePrint = () => {
      document.title = `${data.customer || 'Customer'} - COA - Batch ${data.batchNumber || 'Inspection'}`;
    };
    const handleAfterPrint = () => {
      document.title = "Control Center | Achieve Pack";
    };
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [data.customer, data.batchNumber]);

  // Load saved COAs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('achievepack_saved_coas');
      if (stored) {
        setSavedCoas(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading saved COAs:', e);
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

  const handleFieldChange = (field: keyof CoaData, value: any) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index: number, field: keyof CoaItem, value: string) => {
    const updatedItems = [...data.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setData(prev => ({ ...prev, items: updatedItems }));
  };

  const addCustomItemRow = () => {
    const newItem: CoaItem = {
      category: 'Physical and mechanical properties',
      name: '',
      standard: '',
      testSpeed: '',
      result: '',
      conclusion: 'Qualified'
    };
    setData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const removeItemRow = (index: number) => {
    if (data.items.length <= 1) {
      alert("At least one test parameter row must remain.");
      return;
    }
    const updated = data.items.filter((_, idx) => idx !== index);
    setData(prev => ({ ...prev, items: updated }));
  };

  const handleSaveCoa = () => {
    const defaultName = `COA - ${data.customer || 'Unnamed Customer'} - Batch ${data.batchNumber}`;
    const nameInput = prompt('Enter a name for this saved Certificate of Analysis (COA):', defaultName);
    
    if (nameInput === null) return;
    const finalName = nameInput.trim() || defaultName;

    const newSavedItem: SavedCoa = {
      id: Date.now().toString(),
      name: finalName,
      timestamp: new Date().toISOString(),
      data: data
    };

    const updated = [newSavedItem, ...savedCoas];
    setSavedCoas(updated);
    localStorage.setItem('achievepack_saved_coas', JSON.stringify(updated));
    setSuccessMsg(`COA "${finalName}" saved locally!`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleLoadCoa = (coa: SavedCoa) => {
    setData(coa.data);
    setSuccessMsg(`Restored COA: ${coa.name}`);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteCoa = (idToDelete: string, name: string) => {
    if (confirm(`Are you sure you want to permanently delete the saved COA "${name}"?`)) {
      const updated = savedCoas.filter(item => item.id !== idToDelete);
      setSavedCoas(updated);
      localStorage.setItem('achievepack_saved_coas', JSON.stringify(updated));
      setSuccessMsg('Deleted COA.');
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

      {/* CONFIGURATION & PREVIEW ROW */}
      <div className="print:hidden grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Input form & Preset Selectors */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          
          {/* Preset Buttons */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              1. Load technical presets
            </h3>
            <p className="text-xs text-gray-500 mb-4 font-medium">Select a structural template to auto-populate the test specifications and results:</p>
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

          {/* Saved Custom COAs */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                2. Saved Custom COAs
              </h3>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 font-extrabold px-2 py-0.5 rounded-full">{savedCoas.length} Saved</span>
            </div>
            
            {savedCoas.length > 0 ? (
              <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                {savedCoas.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-2.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100/70 transition text-xs">
                    <div className="flex flex-col gap-0.5 max-w-[70%]">
                      <span className="font-extrabold text-gray-900 truncate">{item.name}</span>
                      <div className="text-[10px] text-gray-500 font-medium truncate">
                        {item.data.sampleName} • Batch: {item.data.batchNumber}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleLoadCoa(item)}
                        className="p-1.5 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-gray-500 transition active:scale-95"
                        title="Load COA"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteCoa(item.id, item.name)}
                        className="p-1.5 hover:bg-red-50 hover:text-red-700 rounded-lg text-gray-500 transition active:scale-95"
                        title="Delete COA"
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
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">No Custom Saved COAs</span>
              </div>
            )}
          </div>

          {/* Form Tabs and Fields */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col flex-1">
            <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center">
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-indigo-600" />
                3. Customize COA Details
              </h3>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full">Interactive Form</span>
            </div>

            {/* Form Category Switcher */}
            <div className="flex bg-gray-100/80 p-1 divide-x divide-gray-200 overflow-x-auto scrollbar-hide border-b border-gray-200">
              <button onClick={() => setActiveFormTab('general')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'general' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>General</button>
              <button onClick={() => setActiveFormTab('parameters')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'parameters' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Parameters</button>
              <button onClick={() => setActiveFormTab('signatures')} className={`flex-1 py-2 text-center font-bold text-[10px] uppercase tracking-wide px-2 whitespace-nowrap transition ${activeFormTab === 'signatures' ? 'bg-white text-indigo-700 shadow-sm rounded-lg' : 'text-gray-500 hover:text-gray-800'}`}>Signatures</button>
            </div>

            {/* Form Fields Scrollbox */}
            <div className="p-5 space-y-4 max-h-[460px] overflow-y-auto">
              
              {/* TAB: GENERAL */}
              {activeFormTab === 'general' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer Name</label>
                    <input type="text" value={data.customer} onChange={e => handleFieldChange('customer', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-bold" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Customer Address</label>
                    <textarea rows={2} value={data.customerAddress} onChange={e => handleFieldChange('customerAddress', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Sample Name</label>
                      <input type="text" value={data.sampleName} onChange={e => handleFieldChange('sampleName', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-semibold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Product Specifications</label>
                      <input type="text" value={data.productSpecifications} onChange={e => handleFieldChange('productSpecifications', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" placeholder="Width * Length + Gusset mm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Material Composition</label>
                    <input type="text" value={data.materialComposition} onChange={e => handleFieldChange('materialComposition', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono text-indigo-700" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Test Conditions</label>
                      <input type="text" value={data.testConditions} onChange={e => handleFieldChange('testConditions', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Production Date</label>
                      <input type="date" value={data.productionDate} onChange={e => handleFieldChange('productionDate', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Batch Number</label>
                      <input type="text" value={data.batchNumber} onChange={e => handleFieldChange('batchNumber', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-mono" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Sampling Quantity</label>
                      <input type="text" value={data.samplingQuantity} onChange={e => handleFieldChange('samplingQuantity', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Delivery Quantity</label>
                      <input type="text" value={data.deliveryQuantity} onChange={e => handleFieldChange('deliveryQuantity', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: PARAMETERS TABLE */}
              {activeFormTab === 'parameters' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-gray-700 uppercase">16 Inspection Parameters</span>
                    <button type="button" onClick={addCustomItemRow} className="flex items-center gap-1 text-[11px] bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold px-2 py-1 rounded-lg transition">
                      <Plus className="w-3 h-3" /> Add Row
                    </button>
                  </div>
                  <div className="space-y-3">
                    {data.items.map((item, idx) => (
                      <div key={idx} className="p-3 border border-gray-200 rounded-xl bg-gray-50/50 space-y-2 relative">
                        <button type="button" onClick={() => removeItemRow(idx)} className="absolute top-2.5 right-2.5 text-gray-400 hover:text-red-500 transition p-1" title="Delete Parameter">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-[9px] bg-indigo-100 text-indigo-700 font-extrabold px-1.5 py-0.5 rounded uppercase">Row {idx + 1}</span>
                          <span className="text-[9px] font-bold text-gray-500">{item.category}</span>
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-gray-400 uppercase">Parameter Name</label>
                          <input type="text" value={item.name} onChange={e => handleItemChange(idx, 'name', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white font-bold text-gray-800" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-bold text-gray-400 uppercase">Inspection Standard</label>
                          <textarea rows={1} value={item.standard} onChange={e => handleItemChange(idx, 'standard', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white leading-tight" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Test Speed / Cond.</label>
                            <input type="text" value={item.testSpeed || ''} onChange={e => handleItemChange(idx, 'testSpeed', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Test Result</label>
                            <input type="text" value={item.result} onChange={e => handleItemChange(idx, 'result', e.target.value)} className="w-full border-gray-200 rounded text-xs px-2 py-1 bg-white" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-bold text-gray-400 uppercase">Conclusion</label>
                            <select value={item.conclusion} onChange={e => handleItemChange(idx, 'conclusion', e.target.value as any)} className="w-full border-gray-200 rounded text-xs px-1 py-1 bg-white font-bold">
                              <option value="Qualified">Qualified</option>
                              <option value="Conform to">Conform to</option>
                              <option value="Unqualified">Unqualified</option>
                              <option value="N/A">N/A</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: SIGNATURES & CONCLUSION */}
              {activeFormTab === 'signatures' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Analyst Signature Name</label>
                      <input type="text" value={data.analystSignature} onChange={e => handleFieldChange('analystSignature', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-bold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Director Signature Name</label>
                      <input type="text" value={data.directorSignature} onChange={e => handleFieldChange('directorSignature', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-bold" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Overall Inspection Conclusion</label>
                    <textarea rows={2} value={data.conclusionText} onChange={e => handleFieldChange('conclusionText', e.target.value)} className="w-full border-gray-300 rounded-lg text-sm px-3 py-2 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-indigo-500 font-semibold" />
                  </div>
                </div>
              )}

            </div>

            {/* Form Actions */}
            <div className="bg-gray-50 border-t border-gray-200 p-4 flex gap-3">
              <button
                type="button"
                onClick={handleSaveCoa}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 font-extrabold text-xs uppercase tracking-wider hover:bg-gray-200 transition active:scale-95"
              >
                <Save className="w-4 h-4 text-gray-600" /> Save COA
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-indigo-700 transition active:scale-95 shadow-md"
              >
                <Printer className="w-4 h-4" /> Print COA
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Live document preview */}
        <div className="xl:col-span-7 flex flex-col h-full bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px] xl:max-h-[900px]">
          <div className="bg-gray-50 border-b border-gray-200 p-4 flex justify-between items-center flex-shrink-0">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <ScrollText className="w-4 h-4 text-blue-600" />
              Document Live Preview
            </h3>
            <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">A4 Document Preview</span>
          </div>

          <div className="p-6 overflow-y-auto bg-gray-100/50 flex-1 space-y-6 flex flex-col items-center">
            
            {/* SCREEN PAGE 1 PREVIEW */}
            <div className="bg-white shadow-lg border border-gray-300 rounded p-10 w-full max-w-[297mm] min-h-[210mm] relative text-[10px] text-black leading-normal flex flex-col select-none aspect-[1.41/1]">
              
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

              <div className="bg-blue-900 text-white text-center font-bold text-xs uppercase py-2 tracking-widest rounded mb-4" style={{ color: 'white' }}>
                Factory Inspection Report / Certificate of Analysis
              </div>

              {/* COA Metadata block */}
              <div className="grid grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg p-3 bg-gray-50/50">
                <div className="space-y-1">
                  <div><span className="font-bold text-gray-500">Sample Name:</span> <span className="font-bold text-gray-900">{data.sampleName}</span></div>
                  <div><span className="font-bold text-gray-500">Customer Name:</span> <span className="font-bold text-gray-900">{data.customer}</span></div>
                  <div><span className="font-bold text-gray-500">Customer Address:</span> <span className="text-gray-700 text-[9px] block whitespace-pre-line leading-tight">{data.customerAddress}</span></div>
                  <div><span className="font-bold text-gray-500">Material Composition:</span> <span className="font-mono text-indigo-700 text-[9px] block font-bold">{data.materialComposition}</span></div>
                </div>
                <div className="space-y-1 border-l border-gray-300 pl-4">
                  <div><span className="font-bold text-gray-500">Product Specs:</span> <span className="font-bold text-gray-900">{data.productSpecifications}</span></div>
                  <div><span className="font-bold text-gray-500">Test Conditions:</span> <span className="font-bold text-gray-900">{data.testConditions}</span></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="font-bold text-gray-500">Prod Date:</span> <span className="font-bold text-gray-900 block">{data.productionDate}</span></div>
                    <div><span className="font-bold text-gray-500">Batch No:</span> <span className="font-mono font-bold text-gray-900 block">{data.batchNumber}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="font-bold text-gray-500">Sampling Qty:</span> <span className="font-bold text-gray-900 block">{data.samplingQuantity}</span></div>
                    <div><span className="font-bold text-gray-500">Delivery Qty:</span> <span className="font-bold text-gray-900 block">{data.deliveryQuantity}</span></div>
                  </div>
                </div>
              </div>

              {/* COA Parameters Table */}
              <div className="flex-1 overflow-x-auto my-2">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-y border-gray-300">
                      <th className="py-1 px-2 text-left font-bold text-gray-600 w-24">Item Category</th>
                      <th className="py-1 px-2 text-left font-bold text-gray-600 w-32">Inspection Item</th>
                      <th className="py-1 px-2 text-left font-bold text-gray-600">Inspection Standard</th>
                      <th className="py-1 px-2 text-center font-bold text-gray-600 w-20">Test Speed / Cond.</th>
                      <th className="py-1 px-2 text-center font-bold text-gray-600 w-20">Test Result</th>
                      <th className="py-1 px-2 text-center font-bold text-gray-600 w-16">Conclusion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const rowSpans: number[] = [];
                      let currentCategory = '';
                      let currentSpanIndex = -1;
                      
                      data.items.forEach((item, idx) => {
                        if (item.category !== currentCategory) {
                          currentCategory = item.category;
                          currentSpanIndex = idx;
                          rowSpans[idx] = 1;
                        } else {
                          rowSpans[currentSpanIndex]++;
                          rowSpans[idx] = 0;
                        }
                      });

                      return data.items.map((item, idx) => (
                        <tr key={idx} className="border-b border-gray-200 text-[8.5px]">
                          {rowSpans[idx] > 0 && (
                            <td 
                              className="py-1 px-2 font-bold text-gray-500 align-top border-r border-gray-200 bg-gray-50/50" 
                              rowSpan={rowSpans[idx]}
                            >
                              {item.category === 'Physical and mechanical properties' ? 'Physical & Mech' :
                               item.category === 'Dimensional deviation' ? 'Dimensional' :
                               item.category}
                            </td>
                          )}
                          <td className="py-1 px-2 font-semibold text-gray-900">{item.name}</td>
                          <td className="py-1 px-2 text-gray-600 leading-snug text-[8px]">{item.standard}</td>
                          <td className="py-1 px-2 text-center text-gray-600 font-mono text-[8px]">{item.testSpeed || '-'}</td>
                          <td className="py-1 px-2 text-center font-semibold text-gray-800 font-mono text-[8.5px]">{item.result}</td>
                          <td className="py-1 px-2 text-center">
                            <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded">
                              {item.conclusion}
                            </span>
                          </td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>

              {/* COA Bottom Block */}
              <div className="border-t border-gray-300 pt-3 mt-4 space-y-3 relative">
                <div>
                  <span className="font-extrabold text-[9px] text-gray-400 uppercase tracking-wider block mb-0.5">Overall Inspection Conclusion</span>
                  <p className="font-bold text-blue-900 text-xs">{data.conclusionText}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <span className="text-gray-400 font-bold block text-[8px] uppercase tracking-wider">Signature of Analyst</span>
                    <div className="border border-indigo-100 rounded p-2 bg-indigo-50/30 flex items-center justify-center min-h-[30px] w-36">
                      <span className="font-serif italic text-xs text-indigo-800">{data.analystSignature}</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-gray-400 font-bold block text-[8px] uppercase tracking-wider">Signature of Factory Director</span>
                    <div className="border border-indigo-100 rounded p-2 bg-indigo-50/30 flex items-center justify-center min-h-[30px] w-36 ml-auto">
                      <span className="font-serif italic text-xs text-indigo-800">{data.directorSignature}</span>
                    </div>
                  </div>
                </div>

                {/* ACHIEVEPACK CORPORATE SEAL */}
                <svg className="absolute right-[40px] bottom-[5px] opacity-85 transform rotate-[-8deg] pointer-events-none" width="85" height="85" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="94 1.5" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#ef4444" strokeWidth="0.75" />
                  <path id="preview-seal-path" d="M 15 50 A 35 35 0 0 1 85 50" fill="none" />
                  <text fill="#ef4444" fontSize="5.8" fontWeight="bold" letterSpacing="0.6">
                    <textPath href="#preview-seal-path" startOffset="50%" textAnchor="middle">
                      ACHIEVE PACK CO., LIMITED
                    </textPath>
                  </text>
                  <path id="preview-seal-zh-path" d="M 22 50 A 28 28 0 0 0 78 50" fill="none" />
                  <text fill="#ef4444" fontSize="6.2" fontWeight="bold" letterSpacing="0.4">
                    <textPath href="#preview-seal-zh-path" startOffset="50%" textAnchor="middle">
                      达之包装有限公司
                    </textPath>
                  </text>
                  <polygon points="50,38 53,46 62,46 55,51 58,59 50,54 42,59 45,51 38,46 47,46" fill="#ef4444" />
                  <text x="50" y="71" fill="#ef4444" fontSize="6.8" fontWeight="bold" textAnchor="middle">
                    专用章
                  </text>
                  <text x="50" y="79" fill="#ef4444" fontSize="4.2" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1">
                    79945613213015
                  </text>
                </svg>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* PRINT ENGINE MULTI-PAGE RENDERER (Hidden on screen, prints landscape A4) */}
      <div className="hidden print:block bg-white text-black text-xs leading-normal">
        <style>{`
          @page {
            size: A4 landscape;
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
              width: 297mm;
              height: 200mm;
              max-height: 200mm;
              padding: 4mm 6mm;
              position: relative;
              page-break-after: avoid !important;
              page-break-inside: avoid !important;
              box-sizing: border-box;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .print-page tr {
              page-break-inside: avoid !important;
            }
            /* Hide global screen elements when printing */
            nav, 
            footer, 
            header, 
            aside,
            .print\\:hidden, 
            .print-hidden, 
            .no-print {
              display: none !important;
            }
            .print-page table {
              border-collapse: collapse !important;
              width: 100% !important;
              margin-bottom: 2px !important;
              page-break-inside: avoid !important;
            }
            .print-page th, 
            .print-page td {
              border: 0.5px solid #7f8c8d !important;
              padding: 0.5px 1.5px !important;
              font-size: 5.8px !important;
              line-height: 1.05 !important;
            }
            .bg-gray-100 {
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
        <div className="print-page flex flex-col justify-between">
          <div>
            {/* Header Letterhead */}
            <div className="flex justify-between items-start border-b-[3px] border-blue-900 pb-1 mb-1.5">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <img src="/logo.png" alt="AchievePack" className="h-7 w-auto object-contain" />
                  <span className="text-base font-black tracking-widest text-blue-950">achievepack</span>
                </div>
                <span className="text-[6.5px] font-extrabold text-gray-400 uppercase tracking-wider mt-0.5">High Performance Sustainable Packaging</span>
              </div>
              <div className="text-right text-[6px] leading-tight text-gray-500 max-w-[250px]">
                <strong className="text-[7.5px] text-gray-800 font-bold block">AchievePack Limited</strong>
                HK BRN: 41007097-000-07-14-4<br/>
                1 Floor, No.41 Wo Liu Hang Tsuen, Fotan, Hong Kong<br/>
                Hotline: +852 6970 4411 | engineering@achievepack.com
              </div>
            </div>

            <div className="bg-blue-900 text-white text-center font-bold text-[9px] uppercase py-0.5 tracking-widest rounded mb-1.5" style={{ color: 'white' }}>
              Factory Inspection Report / Certificate of Analysis
            </div>

            {/* COA Metadata block */}
            <div className="grid grid-cols-2 gap-2 mb-1.5 border border-gray-300 rounded-lg p-1.5 bg-gray-100/30 text-[7px]">
              <div className="space-y-0.5">
                <div><span className="font-bold text-gray-500">Sample Name:</span> <span className="font-bold text-gray-900">{data.sampleName}</span></div>
                <div><span className="font-bold text-gray-500">Customer Name:</span> <span className="font-bold text-gray-900">{data.customer}</span></div>
                <div><span className="font-bold text-gray-500">Customer Address:</span> <span className="text-gray-700 text-[6.5px] block whitespace-pre-line leading-snug">{data.customerAddress}</span></div>
                <div><span className="font-bold text-gray-500">Material Composition:</span> <span className="font-mono text-indigo-700 text-[7px] block font-bold">{data.materialComposition}</span></div>
              </div>
              <div className="space-y-0.5 border-l border-gray-300 pl-3">
                <div><span className="font-bold text-gray-500">Product Specs:</span> <span className="font-bold text-gray-900">{data.productSpecifications}</span></div>
                <div><span className="font-bold text-gray-500">Test Conditions:</span> <span className="font-bold text-gray-900">{data.testConditions}</span></div>
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="font-bold text-gray-500">Prod Date:</span> <span className="font-bold text-gray-900 block">{data.productionDate}</span></div>
                  <div><span className="font-bold text-gray-500">Batch No:</span> <span className="font-mono font-bold text-gray-900 block">{data.batchNumber}</span></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="font-bold text-gray-500">Sampling Qty:</span> <span className="font-bold text-gray-900 block">{data.samplingQuantity}</span></div>
                  <div><span className="font-bold text-gray-500">Delivery Qty:</span> <span className="font-bold text-gray-900 block">{data.deliveryQuantity}</span></div>
                </div>
              </div>
            </div>

            {/* COA Parameters Table */}
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left font-bold text-gray-600 w-18 text-[5.8px] p-0.5">Item Category</th>
                  <th className="text-left font-bold text-gray-600 w-24 text-[5.8px] p-0.5">Inspection Item</th>
                  <th className="text-left font-bold text-gray-600 text-[5.8px] p-0.5">Inspection Standard</th>
                  <th className="text-center font-bold text-gray-600 w-16 text-[5.8px] p-0.5">Test Speed</th>
                  <th className="text-center font-bold text-gray-600 w-18 text-[5.8px] p-0.5">Inspection Result</th>
                  <th className="text-center font-bold text-gray-600 w-14 text-[5.8px] p-0.5">Conclusion</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const rowSpans: number[] = [];
                  let currentCategory = '';
                  let currentSpanIndex = -1;
                  
                  data.items.forEach((item, idx) => {
                    if (item.category !== currentCategory) {
                      currentCategory = item.category;
                      currentSpanIndex = idx;
                      rowSpans[idx] = 1;
                    } else {
                      rowSpans[currentSpanIndex]++;
                      rowSpans[idx] = 0;
                    }
                  });

                  return data.items.map((item, idx) => (
                    <tr key={idx}>
                      {rowSpans[idx] > 0 && (
                        <td className="font-bold text-gray-500 align-middle bg-gray-50/50 text-[5.8px] p-0.5" rowSpan={rowSpans[idx]}>
                          {item.category === 'Physical and mechanical properties' ? 'Physical & Mech' :
                           item.category === 'Dimensional deviation' ? 'Dimensional' :
                           item.category}
                        </td>
                      )}
                      <td className="font-semibold text-gray-900 text-[5.8px] p-0.5">{item.name}</td>
                      <td className="text-gray-600 text-[5.8px] p-0.5 leading-tight">{item.standard}</td>
                      <td className="text-center text-gray-600 font-mono text-[5.8px] p-0.5">{item.testSpeed || '-'}</td>
                      <td className="text-center font-semibold text-gray-800 font-mono text-[5.8px] p-0.5">{item.result}</td>
                      <td className="text-center font-bold text-emerald-700 text-[5.8px] p-0.5">{item.conclusion}</td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>

            {/* COA Bottom Block */}
            <div className="border-t border-gray-300 pt-1 mt-1 space-y-1 relative">
              <div>
                <span className="font-extrabold text-[6.5px] text-gray-400 uppercase tracking-wider block mb-0.5">Overall Inspection Conclusion</span>
                <p className="font-bold text-blue-900 text-[8.5px]">{data.conclusionText}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-0.5">
                <div className="space-y-0.5">
                  <span className="text-gray-400 font-bold block text-[6px] uppercase tracking-wider">Signature of Analyst</span>
                  <div className="border border-indigo-100 rounded p-0.5 bg-indigo-50/30 flex items-center justify-center min-h-[16px] w-24">
                    <span className="font-serif italic text-[8.5px] text-indigo-800">{data.analystSignature}</span>
                  </div>
                </div>
                <div className="space-y-0.5 text-right">
                  <span className="text-gray-400 font-bold block text-[6px] uppercase tracking-wider">Signature of Factory Director</span>
                  <div className="border border-indigo-100 rounded p-0.5 bg-indigo-50/30 flex items-center justify-center min-h-[16px] w-24 ml-auto">
                    <span className="font-serif italic text-[8.5px] text-indigo-800">{data.directorSignature}</span>
                  </div>
                </div>
              </div>

              {/* ACHIEVEPACK CORPORATE SEAL */}
              <svg className="absolute right-[15px] bottom-[-5px] opacity-85 transform rotate-[-8deg] pointer-events-none" width="60" height="60" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="94 1.5" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#ef4444" strokeWidth="0.75" />
                <path id="print-seal-path" d="M 15 50 A 35 35 0 0 1 85 50" fill="none" />
                <text fill="#ef4444" fontSize="5.8" fontWeight="bold" letterSpacing="0.6">
                  <textPath href="#print-seal-path" startOffset="50%" textAnchor="middle">
                    ACHIEVE PACK CO., LIMITED
                  </textPath>
                </text>
                <path id="print-seal-zh-path" d="M 22 50 A 28 28 0 0 0 78 50" fill="none" />
                <text fill="#ef4444" fontSize="6.2" fontWeight="bold" letterSpacing="0.4">
                  <textPath href="#print-seal-zh-path" startOffset="50%" textAnchor="middle">
                    达之包装有限公司
                  </textPath>
                </text>
                <polygon points="50,38 53,46 62,46 55,51 58,59 50,54 42,59 45,51 38,46 47,46" fill="#ef4444" />
                <text x="50" y="71" fill="#ef4444" fontSize="6.8" fontWeight="bold" textAnchor="middle">
                  专用章
                </text>
                <text x="50" y="79" fill="#ef4444" fontSize="4.2" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1">
                  79945613213015
                </text>
              </svg>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-1 text-right text-[7px] text-gray-400 font-semibold">
            <span>Page 1 of 1</span>
          </div>
        </div>
      </div>

    </div>
  );
}
