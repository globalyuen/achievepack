import React, { useState } from 'react';
import { Download, FileSpreadsheet, Plus, Trash2, ImageIcon, FileText } from 'lucide-react';

export default function PackingListTab() {
  const [billTo, setBillTo] = useState('GRUPO FLORITE SAPI de CV\nJesus Rodolfo Vizcarra Lopez\nEmail: Jesus.vizcarra@floriteshop.com\nPhone: +526421260206\nAddress: Cerro del Colli 1383 B\nCity: Zapopan\nProvince: Jalisco\nCountry: Mexico\nZip Code: 45050');
  const [shipTo, setShipTo] = useState('FOB China');
  const [invoiceNo, setInvoiceNo] = useState('PL1012');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }));
  const [incoterm, setIncoterm] = useState('FOB China');
  
  const [items, setItems] = useState([
    {
      id: 1,
      name: '[ Creamy White Sachet ]',
      details: 'Material: Corrugated carton\nVolume: 0.168 CBM\nQuantity: 5 pcs\nSingle package size: 43 × 28 × 28 cm\nCondition: New\nUse: Storage\nGross Weight: 516.81 kg\nNet Weight: 495.81 kg',
      ctn: 21,
      kgCtn: 24.61,
    }
  ]);

  const addRow = () => setItems([...items, { id: Date.now(), name: '[ New Item ]', details: '', ctn: 1, kgCtn: 10 }]);
  const removeRow = (id: number) => setItems(items.filter(i => i.id !== id));
  
  const updateItem = (id: number, field: string, value: any) => {
    setItems(items.map(img => img.id === id ? { ...img, [field]: value } : img));
  };

  const totalGross = items.reduce((acc, curr) => acc + (curr.ctn * curr.kgCtn), 0);
  const totalNet = totalGross * 0.85; // Estimation or can be manual
  const totalCBM = items.reduce((acc, curr) => {
    const volMatch = curr.details.match(/Volume:\s*([\d.]+)/i);
    return acc + (volMatch ? parseFloat(volMatch[1]) * curr.ctn : 0);
  }, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      {/* Configuration UI (Screen Only) */}
      <div className="print:hidden bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold text-neutral-800">Packing List Generator</h2>
            <p className="text-sm text-neutral-500">Draft your packing list and export as a branded PDF. Upload supplier CSV/PNG for reference below.</p>
          </div>
          <button onClick={handlePrint} className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition shadow-sm">
            <Download className="w-5 h-5" /> Export PDF
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Invoice Number</label>
              <input value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} className="w-full border p-2 rounded-lg bg-neutral-50" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Bill To</label>
              <textarea value={billTo} onChange={e => setBillTo(e.target.value)} rows={7} className="w-full border p-2 rounded-lg bg-neutral-50" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Ship To / Incoterm</label>
              <input value={shipTo} onChange={e => setShipTo(e.target.value)} className="w-full border p-2 rounded-lg bg-neutral-50 mb-2" />
              <input value={incoterm} onChange={e => setIncoterm(e.target.value)} className="w-full border p-2 rounded-lg bg-neutral-50" placeholder="Incoterm..." />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Supplier Attachments (Local Reference Only)</label>
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 flex flex-col items-center justify-center text-neutral-500 hover:bg-neutral-50 transition cursor-pointer relative">
                <input type="file" multiple accept=".xlsx,.xls,.csv,.pdf,.png,.jpg" className="absolute inset-0 opacity-0 cursor-pointer" />
                <FileSpreadsheet className="w-8 h-8 mb-2 text-primary-400" />
                <span className="text-sm">Click or Drag Excel, PDF, PNG files here to load supplier data reference</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Items List</h3>
          <button onClick={addRow} className="bg-neutral-800 text-white px-3 py-1.5 rounded-md flex items-center gap-1 text-sm">
            <Plus className="w-4 h-4" /> Add Item
          </button>
        </div>

        <div className="border border-neutral-200 rounded-lg overflow-hidden">
          <table className="w-full text-left bg-white text-sm">
            <thead className="bg-neutral-100 border-b border-neutral-200">
              <tr>
                <th className="p-3 font-semibold w-12">#</th>
                <th className="p-3 font-semibold">Description</th>
                <th className="p-3 font-semibold w-24">CTNS</th>
                <th className="p-3 font-semibold w-28">KG/CTN</th>
                <th className="p-3 font-semibold w-32">Total (KG)</th>
                <th className="p-3 font-semibold w-12 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-3 text-neutral-400 font-mono text-center">{index + 1}</td>
                  <td className="p-3 space-y-2">
                    <input value={item.name} onChange={e => updateItem(item.id, 'name', e.target.value)} className="w-full font-bold border-b border-neutral-200 focus:border-primary-500 outline-none pb-1" placeholder="[ Item Name ]" />
                    <textarea value={item.details} onChange={e => updateItem(item.id, 'details', e.target.value)} rows={4} className="w-full text-xs text-neutral-600 bg-neutral-50 p-2 rounded border focus:ring-1 outline-none resize-none" placeholder="Packing specs..." />
                  </td>
                  <td className="p-3"><input type="number" step="0.5" value={item.ctn} onChange={e => updateItem(item.id, 'ctn', parseFloat(e.target.value) || 0)} className="w-full border p-2 rounded text-right" /></td>
                  <td className="p-3"><input type="number" step="0.01" value={item.kgCtn} onChange={e => updateItem(item.id, 'kgCtn', parseFloat(e.target.value) || 0)} className="w-full border p-2 rounded text-right" /></td>
                  <td className="p-3 text-right font-medium text-neutral-700 bg-neutral-50">
                    {(item.ctn * item.kgCtn).toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    <button onClick={() => removeRow(item.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4 mx-auto" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Actual PDF Layout (Hidden on Screen, block on Print) */}
      <div className="hidden print:block bg-white text-black min-h-screen" style={{ width: '210mm', padding: '10mm', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact', fontFamily: 'Arial, sans-serif' }}>
        
        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-neutral-800 pb-6 mb-8 relative">
          <div className="w-56">
            <img src="/imgs/logo-achievepack.png" alt="Achieve Pack" className="w-full object-contain" />
          </div>
          <div className="text-right text-[11px] leading-tight text-neutral-600 absolute right-0 top-0">
            <strong className="text-[13px] text-neutral-800 font-bold block mb-1">Achieve Pack</strong>
            HK BRN 41007097-000-07-14-4<br/>
            1 FLOOR, NO.41 WO LIU HANG TSUEN<br/>
            FOTAN, Hong Kong<br/>
            +852 6970 4411<br/>
            ryan@achievepack.com<br/>
            www.achievepack.com
          </div>
        </div>

        {/* Title */}
        <div className="text-center font-bold text-xl uppercase tracking-widest mb-6 border-y border-neutral-300 py-2 bg-neutral-50">
          Packing List
        </div>
        
        <div className="text-right text-sm font-bold mb-6">
          Invoice# {invoiceNo}
        </div>

        {/* Addresses */}
        <div className="flex gap-8 mb-8">
          <div className="flex-1 border border-neutral-400 rounded-sm overflow-hidden">
            <div className="bg-neutral-200 px-3 py-1 font-bold text-xs border-b border-neutral-400 uppercase">Bill To</div>
            <div className="p-3 text-xs whitespace-pre-wrap leading-relaxed">{billTo}</div>
          </div>
          <div className="flex-1 border border-neutral-400 rounded-sm overflow-hidden self-start">
            <div className="bg-neutral-200 px-3 py-1 font-bold text-xs border-b border-neutral-400 uppercase">Ship To</div>
            <div className="p-3 text-xs whitespace-pre-wrap leading-relaxed">{shipTo}</div>
          </div>
        </div>

        {/* Summary Table */}
        <table className="w-full text-xs text-center border-collapse border border-neutral-400 mb-8">
          <thead>
            <tr className="bg-neutral-200 text-neutral-800 border-b border-neutral-400 uppercase">
              <th className="border-r border-neutral-400 py-2 px-1 w-1/4">Invoice Date</th>
              <th className="border-r border-neutral-400 py-2 px-1 w-1/4">Incoterm</th>
              <th className="border-r border-neutral-400 py-2 px-1 w-1/4">Total Gross Weight (KG)</th>
              <th className="py-2 px-1 w-1/4">Total CBM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-neutral-400 py-3">{invoiceDate}</td>
              <td className="border-r border-neutral-400 py-3">{incoterm}</td>
              <td className="border-r border-neutral-400 py-3 font-bold">{totalGross.toFixed(2)}</td>
              <td className="py-3 font-bold">{totalCBM > 0 ? totalCBM.toFixed(3) : '---'}</td>
            </tr>
          </tbody>
        </table>

        {/* Origin Banner */}
        <div className="text-center text-xs text-neutral-500 mb-8 flex items-center justify-center">
          <div className="h-px bg-neutral-400 flex-1"></div>
          <span className="px-4 uppercase tracking-widest">Origin Of China</span>
          <div className="h-px bg-neutral-400 flex-1"></div>
        </div>

        {/* Items Table */}
        <table className="w-full text-xs border-collapse border border-neutral-400 mb-12 relative text-left">
          <thead>
            <tr className="bg-neutral-200 text-neutral-800 uppercase border-b border-neutral-400">
              <th className="border-r border-neutral-400 py-2 px-3 w-10 text-center">#</th>
              <th className="border-r border-neutral-400 py-2 px-3 text-left">Description</th>
              <th className="border-r border-neutral-400 py-2 px-3 w-20 text-center">No. of Ctn</th>
              <th className="border-r border-neutral-400 py-2 px-3 w-24 text-center">KG/Ctn</th>
              <th className="py-2 px-3 w-32 text-center">Total Weight (KG)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="border-b border-neutral-200 last:border-0 align-top">
                <td className="border-r border-neutral-400 py-4 px-3 text-center text-neutral-500">{index + 1}</td>
                <td className="border-r border-neutral-400 py-4 px-3">
                  <span className="font-bold text-black block mb-2">{item.name}</span>
                  <div className="whitespace-pre-wrap text-neutral-700 leading-snug">{item.details}</div>
                </td>
                <td className="border-r border-neutral-400 py-4 px-3 text-center">{item.ctn.toFixed(2)}</td>
                <td className="border-r border-neutral-400 py-4 px-3 text-center">{item.kgCtn.toFixed(2)}</td>
                <td className="py-4 px-3 text-right font-bold pr-4">{(item.ctn * item.kgCtn).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
