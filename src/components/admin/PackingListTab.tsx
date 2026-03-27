import React, { useState } from 'react';
import { Download, FileSpreadsheet, Plus, Trash2, Loader2, FileIcon } from 'lucide-react';
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export default function PackingListTab() {
  const [billTo, setBillTo] = useState('GRUPO FLORITE SAPI de CV\nJesus Rodolfo Vizcarra Lopez\nEmail: Jesus.vizcarra@floriteshop.com\nPhone: +526421260206\nAddress: Cerro del Colli 1383 B\nCity: Zapopan\nProvince: Jalisco\nCountry: Mexico\nZip Code: 45050');
  const [shipTo, setShipTo] = useState('FOB China');
  const [invoiceNo, setInvoiceNo] = useState('PL1012');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }));
  const [incoterm, setIncoterm] = useState('FOB China');
  const [isAiLoading, setIsAiLoading] = useState(false);
  
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
  const totalCBM = items.reduce((acc, curr) => {
    const volMatch = curr.details.match(/Volume:\s*([\d.]+)/i);
    return acc + (volMatch ? parseFloat(volMatch[1]) * curr.ctn : 0);
  }, 0);

  const handlePrint = () => {
    window.print();
  };

  // --- Helper: Resize Image Client-side to avoid Vercel 4.5MB limit ---
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

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.8)); // 80% quality JPEG is plenty for OCR
      };
    });
  };

  // --- 1. AI Parsing from Uploaded Excel ---
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
        // Prepare base64 reader
        const reader = new FileReader();
        await new Promise((resolve, reject) => {
          reader.onload = resolve;
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        const base64Data = reader.result as string;
        
        if (isImage) {
          // Resize before sending
          payload.imageBase64 = await resizeImage(base64Data);
        } else {
          // Parse PDF locally to save Vercel backend crashes
          // @ts-ignore
          const pdfjsLib = await import('pdfjs-dist');
          // Use a more reliable worker source
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
          
          const binaryString = window.atob(base64Data.split(',')[1]);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
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
        // Prepare Excel
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        
        // Combine all sheet data into one big text dump
        let rawTextDump = '';
        workbook.SheetNames.forEach(sheetName => {
          rawTextDump += `\n--- SHEET ${sheetName} ---\n`;
          rawTextDump += XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        });
        payload.text = rawTextDump;
      }

      // Pass the generated payload to Edge Function
      const resp = await fetch('/api/admin-parse-packing-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const rawText = await resp.text();
      let data: any;
      try {
        data = JSON.parse(rawText);
      } catch (e) {
        throw new Error(`Server error (not JSON). Most likely payload too large or backend timeout. Raw: ${rawText.substring(0, 100)}`);
      }

      if (!resp.ok) throw new Error(data.error || 'AI Parsing failed');
      
      if (data.items && Array.isArray(data.items)) {
        const mappedItems = data.items.map((i: any, index: number) => ({
          id: Date.now() + index,
          name: i.name || '[ Detected Item ]',
          details: i.details || '',
          ctn: parseFloat(i.ctn) || 1,
          kgCtn: parseFloat(i.kgCtn) || 0
        }));
        // Completely replace existing items with parsed array
        setItems(mappedItems);
      }
    } catch (err: any) {
      console.error(err);
      alert("Error parsing vendor packing list: " + err.message);
    } finally {
      setIsAiLoading(false);
      // reset file input
      event.target.value = '';
    }
  };

  // --- 2. Generate and Download Excel (.xlsx) ---
  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Packing List', {
      pageSetup: { paperSize: 9, orientation: 'portrait' }
    });

    // Formatting defaults
    sheet.columns = [
      { width: 8 },  // A
      { width: 60 }, // B
      { width: 16 }, // C
      { width: 16 }, // D
      { width: 22 }  // E
    ];

    const titleStyle: Partial<ExcelJS.Style> = {
      font: { bold: true, size: 10 },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEAEAEA' } },
      border: {
        top: { style: 'thin' }, left: { style: 'thin' },
        bottom: { style: 'thin' }, right: { style: 'thin' }
      },
      alignment: { vertical: 'middle', horizontal: 'left' }
    };
    
    // Header Data
    sheet.mergeCells('A3:E3');
    sheet.getCell('A3').value = 'PACKING LIST';
    sheet.getCell('A3').font = { bold: true, size: 18 };
    sheet.getCell('A3').alignment = { horizontal: 'center', vertical: 'middle' };

    sheet.getCell('E4').value = `Invoice# ${invoiceNo}`;
    sheet.getCell('E4').font = { bold: true };
    sheet.getCell('E4').alignment = { horizontal: 'right' };

    sheet.getCell('E1').value = 'Achieve Pack\nHK BRN 41007097-000-07-14-4\n1 FLOOR, NO.41 WO LIU HANG TSUEN\nFOTAN, Hong Kong\n+852 6970 4411\nryan@achievepack.com\nwww.achievepack.com';
    sheet.getCell('E1').alignment = { horizontal: 'right', vertical: 'top', wrapText: true };
    sheet.getRow(1).height = 100;

    sheet.getCell('A6').value = 'Bill To';
    sheet.getCell('A6').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('A7:C12');
    sheet.getCell('A7').value = billTo;
    sheet.getCell('A7').alignment = { wrapText: true, vertical: 'top' };
    sheet.getCell('A7').border = titleStyle.border as ExcelJS.Borders;

    sheet.getCell('E6').value = 'Ship To';
    sheet.getCell('E6').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('E7:E12');
    sheet.getCell('E7').value = shipTo;
    sheet.getCell('E7').alignment = { wrapText: true, vertical: 'top' };
    sheet.getCell('E7').border = titleStyle.border as ExcelJS.Borders;

    sheet.getCell('A14').value = 'Invoice Date'; sheet.getCell('A14').style = titleStyle as ExcelJS.Style;
    sheet.getCell('B14').value = 'Incoterm'; sheet.getCell('B14').style = titleStyle as ExcelJS.Style;
    sheet.getCell('C14').value = 'Total Gross Weight (KG)'; sheet.getCell('C14').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('D14:E14');
    sheet.getCell('D14').value = 'Total CBM'; sheet.getCell('D14').style = titleStyle as ExcelJS.Style;

    const centerAlign: Partial<ExcelJS.Style> = { alignment: { horizontal: 'center', vertical: 'middle' }, border: titleStyle.border as ExcelJS.Borders };
    sheet.getCell('A15').value = invoiceDate; sheet.getCell('A15').style = centerAlign as ExcelJS.Style;
    sheet.getCell('B15').value = incoterm; sheet.getCell('B15').style = centerAlign as ExcelJS.Style;
    sheet.getCell('C15').value = totalGross; sheet.getCell('C15').style = centerAlign as ExcelJS.Style;
    sheet.mergeCells('D15:E15');
    sheet.getCell('D15').value = totalCBM || '---'; sheet.getCell('D15').style = centerAlign as ExcelJS.Style;

    // Items Section
    sheet.getCell('A18').value = '#'; sheet.getCell('A18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('B18').value = 'Description'; sheet.getCell('B18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('C18').value = 'No. of Ctn'; sheet.getCell('C18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('D18').value = 'KG/Ctn'; sheet.getCell('D18').style = titleStyle as ExcelJS.Style;
    sheet.getCell('E18').value = 'Total Weight (KG)'; sheet.getCell('E18').style = titleStyle as ExcelJS.Style;

    let startRow = 19;
    items.forEach((item, index) => {
      const row = sheet.getRow(startRow);
      row.height = Math.max(100, item.details.split('\n').length * 15);
      
      row.getCell(1).value = index + 1;
      row.getCell(1).style = centerAlign as ExcelJS.Style;
      
      row.getCell(2).value = `${item.name}\n${item.details}`;
      row.getCell(2).alignment = { wrapText: true, vertical: 'top' };
      row.getCell(2).border = titleStyle.border as ExcelJS.Borders;

      row.getCell(3).value = item.ctn;
      row.getCell(3).style = centerAlign as ExcelJS.Style;
      
      row.getCell(4).value = item.kgCtn;
      row.getCell(4).style = centerAlign as ExcelJS.Style;
      
      row.getCell(5).value = item.ctn * item.kgCtn;
      row.getCell(5).style = centerAlign as ExcelJS.Style;
      
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
            <p className="text-sm text-neutral-500">Upload vendor files to Auto-Extract, edit freely, then Export as Branded PDF or Excel.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={exportExcel} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition shadow-sm">
              <FileSpreadsheet className="w-5 h-5" /> Export Excel
            </button>
            <button onClick={handlePrint} className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition shadow-sm">
              <Download className="w-5 h-5" /> Export PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
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
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Auto-Extract AI (Upload Vendor File)</label>
              <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-lg p-6 flex flex-col items-center justify-center text-emerald-600 hover:bg-emerald-100 transition cursor-pointer relative overflow-hidden">
                <input type="file" onChange={handleFileUpload} accept=".xlsx,.xls,.csv,.pdf,.png,.jpg,.jpeg" className="absolute inset-0 opacity-0 cursor-pointer" />
                {isAiLoading ? (
                  <>
                    <Loader2 className="w-8 h-8 mb-2 animate-spin" />
                    <span className="text-sm font-bold">Grok is analyzing raw Excel/Media data...</span>
                  </>
                ) : (
                  <>
                    <FileIcon className="w-8 h-8 mb-2 text-emerald-500" />
                    <span className="text-sm font-bold">Drop Vendor File Here to Auto-Extract</span>
                    <span className="text-xs text-emerald-500 mt-1">.xls, .csv, .pdf, .png, .jpg supported</span>
                  </>
                )}
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
