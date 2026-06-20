import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, Download, FileSpreadsheet, Package } from 'lucide-react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

interface PackingItem {
  id: number | string;
  name: string;
  details: string;
  ctn: number;
  kgCtn: number;
  cbm: number;
}

interface PackingData {
  invoiceNo: string;
  billTo: string;
  shipTo: string;
  incoterm: string;
  invoiceDate: string;
  items: PackingItem[];
  supplierSubmitted: boolean;
  supplierSubmittedAt: string | null;
}

export default function PackingReportPage() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PackingData | null>(null);

  useEffect(() => {
    if (!id) { setError('Invalid link.'); setLoading(false); return; }
    fetch(`/api/get-packing-link?id=${id}`)
      .then(r => r.json())
      .then(d => {
        if (!d.success) throw new Error(d.error || 'Report not found');
        setData(d);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const items = data?.items || [];
  const totalGross = items.reduce((s, it) => s + it.ctn * it.kgCtn, 0);
  const totalCBM = items.reduce((s, it) => s + it.ctn * (it.cbm || 0), 0);
  const totalCtns = items.reduce((s, it) => s + it.ctn, 0);

  const handlePrint = () => window.print();

  const handleExcelDownload = async () => {
    if (!data) return;
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Packing List', {
      pageSetup: { paperSize: 9, orientation: 'landscape' }
    });

    sheet.columns = [
      { width: 8 },   // A — #
      { width: 50 },  // B — Description
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

    // Header
    sheet.mergeCells('A1:G1');
    sheet.getCell('A1').value = 'PACKING LIST';
    sheet.getCell('A1').font = { bold: true, size: 18 };
    sheet.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' };
    sheet.getRow(1).height = 35;

    sheet.getCell('G2').value = `Invoice# ${data.invoiceNo}`;
    sheet.getCell('G2').font = { bold: true };
    sheet.getCell('G2').alignment = { horizontal: 'right' };

    // Bill To / Ship To
    sheet.getCell('A4').value = 'Bill To'; sheet.getCell('A4').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('A5:C8'); sheet.getCell('A5').value = data.billTo;
    sheet.getCell('A5').alignment = { wrapText: true, vertical: 'top' };
    sheet.getCell('A5').border = titleStyle.border as ExcelJS.Borders;

    sheet.getCell('E4').value = 'Ship To'; sheet.getCell('E4').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('E5:G8'); sheet.getCell('E5').value = `${data.shipTo}\n${data.incoterm}`;
    sheet.getCell('E5').alignment = { wrapText: true, vertical: 'top' };
    sheet.getCell('E5').border = titleStyle.border as ExcelJS.Borders;

    // Summary row
    sheet.getCell('A10').value = 'Date'; sheet.getCell('A10').style = titleStyle as ExcelJS.Style;
    sheet.getCell('B10').value = 'Incoterm'; sheet.getCell('B10').style = titleStyle as ExcelJS.Style;
    sheet.getCell('C10').value = 'Total KG'; sheet.getCell('C10').style = titleStyle as ExcelJS.Style;
    sheet.getCell('D10').value = 'Total CBM'; sheet.getCell('D10').style = titleStyle as ExcelJS.Style;
    sheet.getCell('E10').value = 'Total CTN'; sheet.getCell('E10').style = titleStyle as ExcelJS.Style;
    sheet.mergeCells('F10:G10'); sheet.getCell('F10').value = 'Origin'; sheet.getCell('F10').style = titleStyle as ExcelJS.Style;

    sheet.getCell('A11').value = data.invoiceDate; sheet.getCell('A11').style = centerAlign as ExcelJS.Style;
    sheet.getCell('B11').value = data.incoterm; sheet.getCell('B11').style = centerAlign as ExcelJS.Style;
    sheet.getCell('C11').value = totalGross.toFixed(2); sheet.getCell('C11').style = centerAlign as ExcelJS.Style;
    sheet.getCell('D11').value = totalCBM > 0 ? totalCBM.toFixed(3) : '---'; sheet.getCell('D11').style = centerAlign as ExcelJS.Style;
    sheet.getCell('E11').value = totalCtns; sheet.getCell('E11').style = centerAlign as ExcelJS.Style;
    sheet.mergeCells('F11:G11'); sheet.getCell('F11').value = 'Made in China'; sheet.getCell('F11').style = centerAlign as ExcelJS.Style;

    // Items header
    const hRow = 13;
    ['#', 'Description', 'No. of Ctn', 'KG/Ctn', 'Total Weight (KG)', 'CBM/Ctn', 'Total CBM'].forEach((h, i) => {
      sheet.getRow(hRow).getCell(i + 1).value = h;
      sheet.getRow(hRow).getCell(i + 1).style = titleStyle as ExcelJS.Style;
    });

    // Items
    let row = hRow + 1;
    items.forEach((item, index) => {
      const r = sheet.getRow(row);
      r.height = Math.max(50, (item.details?.split('\n').length || 1) * 14);
      r.getCell(1).value = index + 1; r.getCell(1).style = centerAlign as ExcelJS.Style;
      r.getCell(2).value = `${item.name}\n${item.details}`; r.getCell(2).alignment = { wrapText: true, vertical: 'top' }; r.getCell(2).border = titleStyle.border as ExcelJS.Borders;
      r.getCell(3).value = item.ctn; r.getCell(3).style = centerAlign as ExcelJS.Style;
      r.getCell(4).value = item.kgCtn; r.getCell(4).style = centerAlign as ExcelJS.Style;
      r.getCell(5).value = Number((item.ctn * item.kgCtn).toFixed(2)); r.getCell(5).style = centerAlign as ExcelJS.Style;
      r.getCell(6).value = item.cbm || '---'; r.getCell(6).style = centerAlign as ExcelJS.Style;
      r.getCell(7).value = item.cbm ? Number((item.ctn * item.cbm).toFixed(3)) : '---'; r.getCell(7).style = centerAlign as ExcelJS.Style;
      row++;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `AchievePack_Packing_List_${data.invoiceNo}.xlsx`);
  };

  // --- Loading ---
  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-blue-700">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="font-semibold text-lg">Loading packing report…</p>
      </div>
    </div>
  );

  // --- Error ---
  if (error || !data) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">Report Not Found</h2>
        <p className="text-gray-500 text-sm">{error || 'This packing list link may have expired or is invalid.'}</p>
        <p className="text-gray-400 text-xs mt-4">Please contact Achieve Pack if you believe this is an error.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 10mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10 no-print">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto object-contain" />
          <div className="h-6 w-px bg-gray-200" />
          <span className="text-sm font-semibold text-gray-600">Packing List Report</span>
          <span className="ml-auto text-xs text-gray-400 font-mono">#{data.invoiceNo}</span>
          <div className="flex gap-2 ml-4">
            <button
              onClick={handlePrint}
              className="bg-neutral-700 hover:bg-neutral-800 text-white px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium transition shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </button>
            <button
              onClick={handleExcelDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium transition shadow-sm"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" /> Download Excel
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

        {/* Company Header (for print + screen) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-start p-6 border-b border-gray-100">
            <div>
              <img src="/logo.png" alt="Achieve Pack" className="h-10 w-auto object-contain mb-2" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Achieve Pack · HK BRN 41007097-000-07-14-4<br/>
                1/F, No.41 Wo Liu Hang Tsuen, Fo Tan, Hong Kong<br/>
                +852 6970 4411 · ryan@achievepack.com
              </p>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-800 tracking-wide">PACKING LIST</h1>
              <p className="text-sm font-semibold text-gray-500 mt-1">Invoice# {data.invoiceNo}</p>
              <p className="text-xs text-gray-400 mt-0.5">{data.invoiceDate}</p>
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <div className="p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Bill To</p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{data.billTo}</p>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Ship To / Incoterm</p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.shipTo}</p>
              <p className="text-xs font-bold text-blue-600 mt-1">{data.incoterm}</p>
            </div>
          </div>
        </div>

        {/* Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { label: 'Invoice Date', value: data.invoiceDate },
            { label: 'Incoterm', value: data.incoterm },
            { label: 'Total Gross Weight', value: `${totalGross.toFixed(2)} KG` },
            { label: 'Total CBM', value: totalCBM > 0 ? totalCBM.toFixed(3) : '---' },
            { label: 'Origin', value: 'Made in China 🇨🇳' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-sm font-bold text-gray-800">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Items Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-500" />
            <h2 className="font-bold text-gray-800">Packing Details</h2>
            <span className="ml-auto text-xs text-gray-400">{items.length} item{items.length !== 1 ? 's' : ''} · {totalCtns} cartons total</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[700px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase w-10 text-center">#</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Description</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase text-center w-20">CTN</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase text-center w-24">KG/CTN</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase text-center w-28">Total KG</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase text-center w-24">CBM/CTN</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase text-center w-28">Total CBM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item, idx) => (
                  <tr key={item.id ?? idx} className="align-top hover:bg-blue-50/30 transition">
                    <td className="px-4 py-4 text-center text-gray-400 font-mono">{idx + 1}</td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      {item.details && <p className="text-xs text-gray-400 mt-1 whitespace-pre-wrap leading-relaxed">{item.details}</p>}
                    </td>
                    <td className="px-4 py-4 text-center font-mono">{item.ctn}</td>
                    <td className="px-4 py-4 text-center font-mono">{item.kgCtn?.toFixed(2)}</td>
                    <td className="px-4 py-4 text-center font-bold text-gray-700">{(item.ctn * item.kgCtn).toFixed(2)}</td>
                    <td className="px-4 py-4 text-center font-mono">{item.cbm ? item.cbm.toFixed(3) : '---'}</td>
                    <td className="px-4 py-4 text-center font-bold text-gray-700">{item.cbm ? (item.ctn * item.cbm).toFixed(3) : '---'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-gray-200 bg-gray-50">
                <tr className="font-bold">
                  <td className="px-4 py-3" colSpan={2}>Grand Total</td>
                  <td className="px-4 py-3 text-center">{totalCtns}</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-center">{totalGross.toFixed(2)} KG</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-center">{totalCBM > 0 ? totalCBM.toFixed(3) : '---'}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Origin Banner */}
        <div className="text-center text-xs text-gray-400 flex items-center">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="px-4 uppercase tracking-widest font-semibold">Origin: Made in China</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 pb-8 space-y-1">
          <p className="font-semibold text-gray-500">Achieve Pack</p>
          <p>1/F, No.41 Wo Liu Hang Tsuen, Fo Tan, Hong Kong</p>
          <p>+852 6970 4411 · ryan@achievepack.com · achievepack.com</p>
        </div>
      </div>
    </div>
  );
}
