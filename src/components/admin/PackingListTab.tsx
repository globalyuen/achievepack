import React, { useState, useEffect } from 'react';
import { Download, FileSpreadsheet, Plus, Trash2, Loader2, FileIcon, Link2, RefreshCw, Copy, CheckCircle, Send, Edit } from 'lucide-react';
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

interface PackingItem {
  id: number;
  name: string;
  details: string;
  ctn: number;
  kgCtn: number;
  cbm: number; // CBM per carton
}

export default function PackingListTab() {
  const [billTo, setBillTo] = useState('GRUPO FLORITE SAPI de CV\nJesus Rodolfo Vizcarra Lopez\nEmail: Jesus.vizcarra@floriteshop.com\nPhone: +526421260206\nAddress: Cerro del Colli 1383 B\nCity: Zapopan\nProvince: Jalisco\nCountry: Mexico\nZip Code: 45050');
  const [shipTo, setShipTo] = useState('FOB China');
  const [invoiceNo, setInvoiceNo] = useState('PL1012');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }));
  const [incoterm, setIncoterm] = useState('FOB China');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // History state
  const [supplierName, setSupplierName] = useState('');
  const [savedLinks, setSavedLinks] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  const fetchHistory = async () => {
    try {
      setLoadingHistory(true);
      const resp = await fetch('/api/list-packing-links');
      const data = await resp.json();
      if (data.success) {
        setSavedLinks(data.links || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleDeleteLink = async (id: string) => {
    if (!confirm('Are you sure you want to delete this packing list link?')) return;
    try {
      const resp = await fetch(`/api/list-packing-links?id=${id}`, { method: 'DELETE' });
      const data = await resp.json();
      if (data.success) {
        fetchHistory();
        if (linkId === id) setLinkId(null);
      } else {
        alert('Failed to delete: ' + data.error);
      }
    } catch (e: any) {
      alert('Error: ' + e.message);
    }
  };

  const handleLoadLink = async (id: string) => {
    try {
      const resp = await fetch(`/api/get-packing-link?id=${id}`);
      const data = await resp.json();
      if (data.success) {
        setInvoiceNo(data.invoiceNo || '');
        setBillTo(data.billTo || '');
        setShipTo(data.shipTo || '');
        setIncoterm(data.incoterm || '');
        setInvoiceDate(data.invoiceDate || '');
        setItems(data.items && data.items.length ? data.items : []);
        setLinkId(id);
        setSupplierSubmitted(data.supplierSubmitted || false);
      } else {
        alert('Error loading: ' + data.error);
      }
    } catch (e: any) {
      alert('Error: ' + e.message);
    }
  };


  // Supplier link state
  const [linkId, setLinkId] = useState<string | null>(null);
  const [linkLoading, setLinkLoading] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [supplierSubmitted, setSupplierSubmitted] = useState(false);

  const [items, setItems] = useState<PackingItem[]>([
    {
      id: 1,
      name: '[ Creamy White Sachet ]',
      details: 'Material: Corrugated carton\nVolume: 0.168 CBM\nQuantity: 5 pcs\nSingle package size: 43 × 28 × 28 cm\nCondition: New\nUse: Storage\nGross Weight: 516.81 kg\nNet Weight: 495.81 kg',
      ctn: 21,
      kgCtn: 24.61,
      cbm: 0.168,
    }
  ]);

  const addRow = () => setItems([...items, { id: Date.now(), name: '[ New Item ]', details: '', ctn: 1, kgCtn: 10, cbm: 0 }]);
  const removeRow = (id: number) => setItems(items.filter(i => i.id !== id));

  const updateItem = (id: number, field: string, value: any) => {
    setItems(items.map(img => img.id === id ? { ...img, [field]: value } : img));
  };

  const totalGross = items.reduce((acc, curr) => acc + (curr.ctn * curr.kgCtn), 0);
  const totalCBM = items.reduce((acc, curr) => acc + (curr.ctn * (curr.cbm || 0)), 0);

  const handlePrint = () => window.print();

  // --- Send Link to Supplier ---
  const handleSendLink = async () => {
    setLinkLoading(true);
    try {
      const resp = await fetch('/api/save-packing-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ invoiceNo, supplierName, billTo, shipTo, incoterm, invoiceDate, items }),
      });
      const data = await resp.json();
      if (!data.success) throw new Error(data.error || 'Failed to generate link');
      setLinkId(data.id);
      setSupplierSubmitted(false);
      fetchHistory();
    } catch (err: any) {
      alert('Error generating link: ' + err.message);
    } finally {
      setLinkLoading(false);
    }
  };

  const supplierUrl = linkId ? `${window.location.origin}/fill-packing/${linkId}` : '';

  const handleCopyLink = () => {
    if (!supplierUrl) return;
    navigator.clipboard.writeText(supplierUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  // --- Refresh from Supplier ---
  const handleRefresh = async () => {
    if (!linkId) return;
    setRefreshLoading(true);
    try {
      const resp = await fetch(`/api/get-packing-link?id=${linkId}`);
      const data = await resp.json();
      if (!data.success) throw new Error(data.error || 'Failed to fetch');
      if (data.supplierSubmitted && data.items?.length) {
        setItems(prev => prev.map(item => {
          const filled = data.items.find((fi: any) => fi.id === item.id || fi.name === item.name);
          if (filled) return { ...item, ctn: filled.ctn ?? item.ctn, kgCtn: filled.kgCtn ?? item.kgCtn, cbm: filled.cbm ?? item.cbm };
          return item;
        }));
        setSupplierSubmitted(true);
      } else {
        alert('Supplier has not submitted yet. Try again later.');
      }
    } catch (err: any) {
      alert('Error: ' + err.message);
    } finally {
      setRefreshLoading(false);
    }
  };

  // --- Helper: Resize Image ---
  const resizeImage = (base64Str: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64Str;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1600;
        const MAX_HEIGHT = 1600;
        let width = img.width;
        let height = img.height;
        if (width > height) { if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; } }
        else { if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; } }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
    });
  };

  // --- AI Parsing from Uploaded Excel ---
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.name.match(/\.(xls|xlsx|csv|pdf|png|jpg|jpeg)$/i)) {
      alert("Unsupported file format. Only Excel, CSV, PDF, and Images are currently supported for AI auto-extraction.");
      return;
    }
    setIsAiLoading(true);
    try {
      const isImage = file.name.match(/\.(png|jpg|jpeg)$/i);
      const isPdf = file.name.match(/\.(pdf)$/i);
      let payload: any = {};
      if (isImage || isPdf) {
        const reader = new FileReader();
        await new Promise((resolve, reject) => { reader.onload = resolve; reader.onerror = reject; reader.readAsDataURL(file); });
        const base64Data = reader.result as string;
        if (isImage) {
          payload.imageBase64 = await resizeImage(base64Data);
        } else {
          // @ts-ignore
          const pdfjsLib = await import('pdfjs-dist');
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
          const binaryString = window.atob(base64Data.split(',')[1]);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
          const pdfDoc = await pdfjsLib.getDocument({ data: bytes }).promise;
          let fullText = '';
          for (let i = 1; i <= pdfDoc.numPages; i++) {
            const page = await pdfDoc.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map((it: any) => it.str).join(' ') + '\n';
          }
          payload.text = fullText;
        }
      } else {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        let rawTextDump = '';
        workbook.SheetNames.forEach(sheetName => {
          rawTextDump += `\n--- SHEET ${sheetName} ---\n`;
          rawTextDump += XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        });
        payload.text = rawTextDump;
      }
      const resp = await fetch('/api/admin-parse-packing-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const rawText = await resp.text();
      let data: any;
      try { data = JSON.parse(rawText); } catch (e) { throw new Error(`Server error (not JSON). Raw: ${rawText.substring(0, 100)}`); }
      if (!resp.ok) throw new Error(data.error || 'AI Parsing failed');
      if (data.items && Array.isArray(data.items)) {
        const mappedItems = data.items.map((i: any, index: number) => ({
          id: Date.now() + index,
          name: i.name || '[ Detected Item ]',
          details: i.details || '',
          ctn: parseFloat(i.ctn) || 1,
          kgCtn: parseFloat(i.kgCtn) || 0,
          cbm: parseFloat(i.cbm) || 0,
        }));
        setItems(mappedItems);
      }
    } catch (err: any) {
      console.error(err);
      alert("Error parsing vendor packing list: " + err.message);
    } finally {
      setIsAiLoading(false);
      event.target.value = '';
    }
  };

  // --- Generate and Download Excel (.xlsx) ---
  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Packing List', {
      pageSetup: { paperSize: 9, orientation: 'landscape' }
    });

    sheet.columns = [
      { width: 8 },   // A
      { width: 55 },  // B
      { width: 14 },  // C — CTN
      { width: 14 },  // D — KG/CTN
      { width: 18 },  // E — Total Weight
      { width: 14 },  // F — CBM/CTN
      { width: 16 },  // G — Total CBM
    ];

    const titleStyle: Partial<ExcelJS.Style> = {
      font: { bold: true, size: 10 },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEAEAEA' } },
      border: { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } },
      alignment: { vertical: 'middle', horizontal: 'left' }
    };
    const centerAlign: Partial<ExcelJS.Style> = {
      alignment: { horizontal: 'center', vertical: 'middle' },
      border: titleStyle.border as ExcelJS.Borders
    };

    sheet.mergeCells('A3:G3');
    sheet.getCell('A3').value = 'PACKING LIST';
    sheet.getCell('A3').font = { bold: true, size: 18 };
    sheet.getCell('A3').alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.getCell('G4').value = `Invoice# ${invoiceNo}`;
    sheet.getCell('G4').font = { bold: true };
    sheet.getCell('G4').alignment = { horizontal: 'right' };

    sheet.getCell('G1').value = 'Achieve Pack\nHK BRN 41007097-000-07-14-4\n1 FLOOR, NO.41 WO LIU HANG TSUEN\nFOTAN, Hong Kong\n+852 6970 4411\nryan@achievepack.com\nwww.achievepack.com';
    sheet.getCell('G1').alignment = { horizontal: 'right', vertical: 'top', wrapText: true };
    sheet.getRow(1).height = 100;

    sheet.getCell('A6').value = 'Bill To'; sheet.getCell('A6').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('A7:C12'); sheet.getCell('A7').value = billTo;
    sheet.getCell('A7').alignment = { wrapText: true, vertical: 'top' };
    sheet.getCell('A7').border = titleStyle.border as ExcelJS.Borders;

    sheet.getCell('G6').value = 'Ship To'; sheet.getCell('G6').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('G7:G12'); sheet.getCell('G7').value = shipTo;
    sheet.getCell('G7').alignment = { wrapText: true, vertical: 'top' };
    sheet.getCell('G7').border = titleStyle.border as ExcelJS.Borders;

    sheet.getCell('A14').value = 'Invoice Date'; sheet.getCell('A14').style = titleStyle as ExcelJS.Style;
    sheet.getCell('B14').value = 'Incoterm'; sheet.getCell('B14').style = titleStyle as ExcelJS.Style;
    sheet.getCell('C14').value = 'Total Gross Weight (KG)'; sheet.getCell('C14').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('D14:E14'); sheet.getCell('D14').value = 'Total CBM'; sheet.getCell('D14').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('F14:G14'); sheet.getCell('F14').value = 'Origin'; sheet.getCell('F14').style = titleStyle as ExcelJS.Style;

    sheet.getCell('A15').value = invoiceDate; sheet.getCell('A15').style = centerAlign as ExcelJS.Style;
    sheet.getCell('B15').value = incoterm; sheet.getCell('B15').style = centerAlign as ExcelJS.Style;
    sheet.getCell('C15').value = totalGross; sheet.getCell('C15').style = centerAlign as ExcelJS.Style;
    sheet.mergeCells('D15:E15'); sheet.getCell('D15').value = totalCBM > 0 ? totalCBM.toFixed(3) : '---'; sheet.getCell('D15').style = centerAlign as ExcelJS.Style;
    sheet.mergeCells('F15:G15'); sheet.getCell('F15').value = 'Made in China'; sheet.getCell('F15').style = centerAlign as ExcelJS.Style;

    // Items header
    sheet.getCell('A18').value = '#'; sheet.getCell('A18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('B18').value = 'Description'; sheet.getCell('B18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('C18').value = 'No. of Ctn'; sheet.getCell('C18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('D18').value = 'KG/Ctn'; sheet.getCell('D18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('E18').value = 'Total Weight (KG)'; sheet.getCell('E18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('F18').value = 'CBM/Ctn'; sheet.getCell('F18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('G18').value = 'Total CBM'; sheet.getCell('G18').style = titleStyle as ExcelJS.Style;

    let startRow = 19;
    items.forEach((item, index) => {
      const row = sheet.getRow(startRow);
      row.height = Math.max(80, item.details.split('\n').length * 15);
      row.getCell(1).value = index + 1; row.getCell(1).style = centerAlign as ExcelJS.Style;
      row.getCell(2).value = `${item.name}\n${item.details}`; row.getCell(2).alignment = { wrapText: true, vertical: 'top' }; row.getCell(2).border = titleStyle.border as ExcelJS.Borders;
      row.getCell(3).value = item.ctn; row.getCell(3).style = centerAlign as ExcelJS.Style;
      row.getCell(4).value = item.kgCtn; row.getCell(4).style = centerAlign as ExcelJS.Style;
      row.getCell(5).value = item.ctn * item.kgCtn; row.getCell(5).style = centerAlign as ExcelJS.Style;
      row.getCell(6).value = item.cbm || '---'; row.getCell(6).style = centerAlign as ExcelJS.Style;
      row.getCell(7).value = item.cbm ? item.ctn * item.cbm : '---'; row.getCell(7).style = centerAlign as ExcelJS.Style;
      startRow++;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `AchievePack_Packing_List_${invoiceNo}.xlsx`);
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      {/* Configuration UI (Screen Only) */}
      <div className="print:hidden bg-white p-6 rounded-xl shadow-lg border border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 border-b pb-4 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-neutral-800">Packing List Generator</h2>
            <p className="text-sm text-neutral-500">Upload vendor files to Auto-Extract, edit freely, send link to supplier, then Export as Branded Excel.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <input
              placeholder="Supplier Name..."
              value={supplierName}
              onChange={e => setSupplierName(e.target.value)}
              className="border border-neutral-300 rounded-lg px-3 py-2 text-sm w-36"
            />
            <button
              onClick={handleSendLink}
              disabled={linkLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition shadow-sm text-sm"
            >
              {linkLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Send Link to Supplier
            </button>
            <button onClick={exportExcel} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition shadow-sm text-sm">
              <FileSpreadsheet className="w-4 h-4" /> Export Excel
            </button>
            <button onClick={handlePrint} className="bg-neutral-700 hover:bg-neutral-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition shadow-sm text-sm">
              <Download className="w-4 h-4" /> Export PDF
            </button>
          </div>
        </div>

        {/* Supplier Link Panel */}
        {linkId && (
          <div className={`mb-6 rounded-xl border p-4 space-y-3 ${supplierSubmitted ? 'bg-emerald-50 border-emerald-200' : 'bg-blue-50 border-blue-200'}`}>
            <div className="flex items-center gap-2 font-semibold text-sm">
              {supplierSubmitted ? (
                <><CheckCircle className="w-4 h-4 text-emerald-500" /><span className="text-emerald-700">✅ Supplier has submitted the packing details!</span></>
              ) : (
                <><Link2 className="w-4 h-4 text-blue-500" /><span className="text-blue-700">Supplier link generated — awaiting submission</span></>
              )}
            </div>
            <div className="flex gap-2">
              <input
                readOnly
                value={supplierUrl}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-xs font-mono bg-white text-gray-700 focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium transition"
              >
                {linkCopied ? <><CheckCircle className="w-3.5 h-3.5 text-green-500" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy Link</>}
              </button>
              <button
                onClick={handleRefresh}
                disabled={refreshLoading}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium transition"
              >
                {refreshLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                Refresh from Supplier
              </button>
            </div>
            <p className="text-xs text-gray-500">Share this link with your supplier via WhatsApp or Email. They can fill in the carton count, weight and CBM without logging in.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Invoice Number</label>
              <input value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} className="w-full border p-2 rounded-lg bg-neutral-50" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Invoice Date</label>
              <input value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} className="w-full border p-2 rounded-lg bg-neutral-50" />
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
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Auto-Extract AI (Upload Vendor File)</label>
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-lg p-6 flex flex-col items-center justify-center text-emerald-600 hover:bg-emerald-100 transition cursor-pointer relative overflow-hidden">
                <input type="file" onChange={handleFileUpload} accept=".xlsx,.xls,.csv,.pdf,.png,.jpg,.jpeg" className="absolute inset-0 opacity-0 cursor-pointer" />
                {isAiLoading ? (
                  <><Loader2 className="w-8 h-8 mb-2 animate-spin" /><span className="text-sm font-bold">AI is analyzing vendor file…</span></>
                ) : (
                  <><FileIcon className="w-8 h-8 mb-2 text-emerald-500" /><span className="text-sm font-bold">Drop Vendor File Here to Auto-Extract</span><span className="text-xs text-emerald-500 mt-1">.xls, .csv, .pdf, .png, .jpg supported</span></>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Items List</h3>
            <p className="text-xs text-gray-400 mt-0.5">Total: <strong>{totalGross.toFixed(2)} KG</strong> · <strong>{totalCBM > 0 ? totalCBM.toFixed(3) : '---'} CBM</strong></p>
          </div>
          <button onClick={addRow} className="bg-neutral-800 text-white px-3 py-1.5 rounded-md flex items-center gap-1 text-sm">
            <Plus className="w-4 h-4" /> Add Item
          </button>
        </div>

        <div className="border border-neutral-200 rounded-lg overflow-x-auto">
          <table className="w-full text-left bg-white text-sm min-w-[800px]">
            <thead className="bg-neutral-100 border-b border-neutral-200">
              <tr>
                <th className="p-3 font-semibold w-10">#</th>
                <th className="p-3 font-semibold">Description</th>
                <th className="p-3 font-semibold w-24">CTNS</th>
                <th className="p-3 font-semibold w-28">KG/CTN</th>
                <th className="p-3 font-semibold w-28">CBM/CTN</th>
                <th className="p-3 font-semibold w-32">Total (KG)</th>
                <th className="p-3 font-semibold w-28">Total CBM</th>
                <th className="p-3 font-semibold w-10 text-center"></th>
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
                  <td className="p-3"><input type="number" step="0.001" value={item.cbm} onChange={e => updateItem(item.id, 'cbm', parseFloat(e.target.value) || 0)} className="w-full border p-2 rounded text-right" placeholder="0.000" /></td>
                  <td className="p-3 text-right font-medium text-neutral-700 bg-neutral-50">{(item.ctn * item.kgCtn).toFixed(2)}</td>
                  <td className="p-3 text-right font-medium text-neutral-700 bg-neutral-50">{item.cbm ? (item.ctn * item.cbm).toFixed(3) : '---'}</td>
                  <td className="p-3 text-center"><button onClick={() => removeRow(item.id)} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4 mx-auto" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Historical Links Table */}
        <div className="mt-8 border border-neutral-200 rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-3 border-b flex justify-between items-center bg-neutral-50">
            <h3 className="font-bold text-neutral-800 text-sm">Sent Packing Links History</h3>
            <button onClick={fetchHistory} className="text-neutral-500 hover:text-neutral-700">
              <RefreshCw className={`w-4 h-4 ${loadingHistory ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap min-w-[800px]">
              <thead className="bg-neutral-100/50 text-neutral-500">
                <tr>
                  <th className="px-4 py-3 font-semibold border-b">Invoice#</th>
                  <th className="px-4 py-3 font-semibold border-b">Supplier</th>
                  <th className="px-4 py-3 font-semibold border-b">Date Sent</th>
                  <th className="px-4 py-3 font-semibold border-b">Status</th>
                  <th className="px-4 py-3 font-semibold border-b text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {savedLinks.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-neutral-400">No sent links found</td>
                  </tr>
                ) : (
                  savedLinks.map(link => (
                    <tr key={link.id} className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-medium text-neutral-800">{link.invoiceNo || '---'}</td>
                      <td className="px-4 py-3 text-neutral-600">{link.supplierName || '---'}</td>
                      <td className="px-4 py-3 text-neutral-500">{new Date(link.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-3">
                        {link.supplierSubmitted ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-semibold"><CheckCircle className="w-3.5 h-3.5" /> Submitted</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-md text-xs font-semibold">Pending</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <button title="Copy Supplier Link" onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/fill-packing/${link.id}`); alert('Supplier Link Copied!'); }} className="text-blue-500 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded flex items-center gap-1"><Copy className="w-3.5 h-3.5" /> Supplier</button>
                          <button title="Copy Customer Link" onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/packing-report/${link.id}`); alert('Customer Link Copied!'); }} className="text-emerald-500 hover:text-emerald-700 bg-emerald-50 px-2 py-1 rounded flex items-center gap-1"><Link2 className="w-3.5 h-3.5" /> Customer</button>
                          <button title="Load into Editor" onClick={() => handleLoadLink(link.id)} className="text-purple-500 hover:text-purple-700 bg-purple-50 px-2 py-1 rounded"><Edit className="w-4 h-4" /></button>
                          <button title="Delete" onClick={() => handleDeleteLink(link.id)} className="text-red-400 hover:text-red-600 bg-red-50 px-2 py-1 rounded"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Actual PDF Layout (Hidden on Screen, block on Print) */}
      <div className="hidden print:block bg-white text-black min-h-screen" style={{
        width: '297mm',
        padding: '10mm',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
        fontFamily: 'Arial, sans-serif'
      }}>
        <style>{`
          @page { size: A4 landscape; margin: 10mm; }
          @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } * { box-sizing: border-box; } }
        `}</style>

        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-neutral-800 pb-6 mb-8 relative">
          <div className="w-64">
            <img src="/logo.png" alt="Achieve Pack" className="h-12 w-auto object-contain" />
          </div>
          <div className="text-right text-[10px] leading-tight text-neutral-600 absolute right-0 top-14 max-w-md">
            <strong className="text-[12px] text-neutral-800 font-bold block mb-1">Achieve Pack</strong>
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
        <div className="text-right text-sm font-bold mb-6">Invoice# {invoiceNo}</div>

        {/* Addresses */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 border border-neutral-400 rounded-sm overflow-hidden">
            <div className="bg-neutral-200 px-3 py-2 font-bold text-xs border-b border-neutral-400 uppercase">Bill To</div>
            <div className="p-3 text-[10px] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">{billTo}</div>
          </div>
          <div className="flex-1 border border-neutral-400 rounded-sm overflow-hidden self-start">
            <div className="bg-neutral-200 px-3 py-2 font-bold text-xs border-b border-neutral-400 uppercase">Ship To / Incoterm</div>
            <div className="p-3 text-[10px] whitespace-pre-wrap leading-relaxed">{shipTo}<br/><span className="font-bold">{incoterm}</span></div>
          </div>
        </div>

        {/* Summary Table */}
        <table className="w-full text-xs text-center border-collapse border border-neutral-400 mb-8">
          <thead>
            <tr className="bg-neutral-200 text-neutral-800 border-b border-neutral-400 uppercase">
              <th className="border-r border-neutral-400 py-2 px-2 w-[18%]">Invoice Date</th>
              <th className="border-r border-neutral-400 py-2 px-2 w-[18%]">Incoterm</th>
              <th className="border-r border-neutral-400 py-2 px-2 w-[25%]">Total Gross Weight (KG)</th>
              <th className="border-r border-neutral-400 py-2 px-2 w-[20%]">Total CBM</th>
              <th className="py-2 px-2 w-[19%]">Origin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-neutral-400 py-3">{invoiceDate}</td>
              <td className="border-r border-neutral-400 py-3">{incoterm}</td>
              <td className="border-r border-neutral-400 py-3 font-bold">{totalGross.toFixed(2)}</td>
              <td className="border-r border-neutral-400 py-3 font-bold">{totalCBM > 0 ? totalCBM.toFixed(3) : '---'}</td>
              <td className="py-3">Made in China</td>
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
              <th className="border-r border-neutral-400 py-2 px-3 text-left" style={{width: '44%'}}>Description</th>
              <th className="border-r border-neutral-400 py-2 px-3 w-16 text-center">No. of Ctn</th>
              <th className="border-r border-neutral-400 py-2 px-3 w-20 text-center">KG/Ctn</th>
              <th className="border-r border-neutral-400 py-2 px-3 w-24 text-center">Total Weight (KG)</th>
              <th className="border-r border-neutral-400 py-2 px-3 w-20 text-center">CBM/Ctn</th>
              <th className="py-2 px-3 w-20 text-center">Total CBM</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="border-b border-neutral-200 last:border-0 align-top">
                <td className="border-r border-neutral-400 py-4 px-3 text-center text-neutral-500">{index + 1}</td>
                <td className="border-r border-neutral-400 py-4 px-3">
                  <span className="font-bold text-black block mb-2">{item.name}</span>
                  <div className="whitespace-pre-wrap text-neutral-700 leading-snug text-[9px]">{item.details}</div>
                </td>
                <td className="border-r border-neutral-400 py-4 px-3 text-center">{item.ctn}</td>
                <td className="border-r border-neutral-400 py-4 px-3 text-center">{item.kgCtn.toFixed(2)}</td>
                <td className="border-r border-neutral-400 py-4 px-3 text-center font-bold">{(item.ctn * item.kgCtn).toFixed(2)}</td>
                <td className="border-r border-neutral-400 py-4 px-3 text-center">{item.cbm ? item.cbm.toFixed(3) : '---'}</td>
                <td className="py-4 px-3 text-center font-bold">{item.cbm ? (item.ctn * item.cbm).toFixed(3) : '---'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
