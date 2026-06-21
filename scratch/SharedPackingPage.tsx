import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, CheckCircle, Package, Send, Plus, Trash2, Lock, Download, FileSpreadsheet } from 'lucide-react';
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
  supplierPassword?: string;
  customerPassword?: string;
}

export default function SharedPackingPage() {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PackingData | null>(null);
  const [items, setItems] = useState<PackingItem[]>([]);
  
  const [role, setRole] = useState<'supplier' | 'customer' | null>(null);
  const [pwdInput, setPwdInput] = useState('');
  const [pwdError, setPwdError] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!id) { setError('Invalid link'); setLoading(false); return; }
    fetch(`/api/get-packing-link?id=${id}`)
      .then(r => r.json())
      .then(d => {
        if (!d.success) throw new Error(d.error || 'Link not found');
        setData(d);
        setItems((d.items || []).map((item: PackingItem) => ({ ...item })));
        if (d.supplierSubmitted) setSubmitted(true);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handlePwdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    if (pwdInput === data.supplierPassword) {
      setRole('supplier');
    } else if (pwdInput === data.customerPassword) {
      setRole('customer');
    } else {
      setPwdError('Incorrect access code');
      setPwdInput('');
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-slate-700">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="font-semibold text-lg">Loading…</p>
      </div>
    </div>
  );

  if (error || !data) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">Link Not Found</h2>
        <p className="text-gray-500 text-sm">{error || 'This packing list link may have expired.'}</p>
      </div>
    </div>
  );

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-sm p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-xl font-black text-center text-gray-900 mb-2">Access Packing List</h2>
          <p className="text-sm text-center text-gray-500 mb-6">Please enter your access code to view this document.</p>
          
          <form onSubmit={handlePwdSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={pwdInput}
              onChange={e => { setPwdInput(e.target.value); setPwdError(''); }}
              placeholder="Access Code"
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center tracking-[0.3em] font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              autoFocus
            />
            {pwdError && <p className="text-xs text-red-500 font-bold text-center">{pwdError}</p>}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-md">
              Unlock Document
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- SUPPLIER VIEW ---
  if (role === 'supplier') {
    const updateItem = (idx: number, field: keyof PackingItem, value: any) => {
      setItems(prev => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));
    };

    const addItem = () => setItems(prev => [...prev, { id: Date.now().toString(), name: '', details: '', ctn: 0, kgCtn: 0, cbm: 0 }]);
    const removeItem = (idx: number) => { if (confirm('确定要删除这项货物吗？')) setItems(prev => prev.filter((_, i) => i !== idx)); };

    const handleSubmit = async () => {
      if (!id) return;
      setSubmitting(true);
      try {
        const resp = await fetch('/api/save-packing-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, items }),
        });
        const result = await resp.json();
        if (!result.success) throw new Error(result.error || '提交失败');
        setSubmitted(true);
      } catch (e: any) { alert('错误: ' + e.message); } 
      finally { setSubmitting(false); }
    };

    const totalGross = items.reduce((s, it) => s + it.ctn * it.kgCtn, 0);
    const totalCBM = items.reduce((s, it) => s + it.ctn * it.cbm, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 font-sans">
        <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
            <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto object-contain" />
            <div className="h-6 w-px bg-gray-200" />
            <span className="text-sm font-semibold text-gray-600">供应商装箱信息填写</span>
            <span className="ml-auto text-xs text-gray-400 font-mono">#{data.invoiceNo}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
              <div className="flex items-center gap-2 text-white">
                <Package className="w-5 h-5" />
                <span className="font-bold text-lg">订单信息</span>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">发票号码</p>
                <p className="font-bold text-gray-800 text-base">{data.invoiceNo}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">日期</p>
                <p className="text-gray-700">{data.invoiceDate}</p>
              </div>
            </div>
          </div>

          {submitted && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-emerald-800 text-lg">✅ 装箱信息提交成功！</h3>
                <p className="text-emerald-700 text-sm mt-1">感谢您的配合，Achieve Pack 将尽快处理并准备出货文件。</p>
              </div>
            </div>
          )}

          {!submitted && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
              <p className="font-semibold mb-1">📦 填写说明</p>
              <p>请填写以下每项货物的<strong>箱数（CTN）</strong>、<strong>每箱毛重（KG）</strong>及<strong>每箱体积（CBM）</strong>，然后点击<strong>提交</strong>。</p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-800">货物明细</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {items.map((item, idx) => (
                <div key={item.id ?? idx} className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-4 relative">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-sm rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1">{idx + 1}</span>
                    <div className="flex-1 space-y-2 pr-10">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">货物名称 (Item Name)</label>
                        <input type="text" value={item.name} onChange={e => updateItem(idx, 'name', e.target.value)} placeholder="输入货物名称" className="w-full font-bold text-gray-800 border-b border-gray-200 px-0 py-1 focus:border-emerald-500 outline-none transition bg-transparent" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1">详细描述 (Details / SKU)</label>
                        <textarea value={item.details} onChange={e => updateItem(idx, 'details', e.target.value)} placeholder="输入货物详细描述 (选填)" rows={2} className="w-full text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-400 outline-none bg-gray-50 resize-none" />
                      </div>
                    </div>
                    <button onClick={() => removeItem(idx)} className="absolute right-0 top-1 text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-5 h-5" /></button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">箱数（CTN）</label>
                      <input type="number" min="0" value={item.ctn || ''} onChange={e => updateItem(idx, 'ctn', parseFloat(e.target.value) || 0)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-right font-mono outline-none bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">每箱毛重（KG）</label>
                      <input type="number" min="0" step="0.01" value={item.kgCtn || ''} onChange={e => updateItem(idx, 'kgCtn', parseFloat(e.target.value) || 0)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-right font-mono outline-none bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">每箱体积（CBM）</label>
                      <input type="number" min="0" step="0.001" value={item.cbm || ''} onChange={e => updateItem(idx, 'cbm', parseFloat(e.target.value) || 0)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-right font-mono outline-none bg-gray-50" />
                    </div>
                  </div>
                  {(item.ctn > 0 || item.kgCtn > 0 || item.cbm > 0) && (
                    <div className="mt-3 flex gap-4 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                      <span>总重量: <strong className="text-gray-700">{(item.ctn * item.kgCtn).toFixed(2)} KG</strong></span>
                      <span>总体积: <strong className="text-gray-700">{(item.ctn * item.cbm).toFixed(3)} CBM</strong></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-50">
              <button onClick={addItem} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-emerald-600 transition font-medium">
                <Plus className="w-5 h-5" /> 新增货物 (Add New Item)
              </button>
            </div>
            <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
              <div><span className="text-gray-500">总毛重: </span><strong className="text-gray-800 font-mono">{totalGross.toFixed(2)} KG</strong></div>
              <div><span className="text-gray-500">总体积: </span><strong className="text-gray-800 font-mono">{totalCBM > 0 ? totalCBM.toFixed(3) : '---'} CBM</strong></div>
            </div>
          </div>

          <div className="pb-8">
            <button onClick={handleSubmit} disabled={submitting} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 disabled:opacity-60 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg transition">
              {submitting ? <><Loader2 className="w-5 h-5 animate-spin" /> 正在提交…</> : submitted ? <><CheckCircle className="w-5 h-5" /> 重新提交更新信息</> : <><Send className="w-5 h-5" /> 提交装箱信息给 Achieve Pack</>}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- CUSTOMER VIEW ---
  if (role === 'customer') {
    const totalGross = items.reduce((s, it) => s + it.ctn * it.kgCtn, 0);
    const totalCBM = items.reduce((s, it) => s + it.ctn * (it.cbm || 0), 0);
    const totalCtns = items.reduce((s, it) => s + it.ctn, 0);

    const handlePrint = () => window.print();

    const handleExcelDownload = async () => {
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Packing List', { pageSetup: { paperSize: 9, orientation: 'landscape' } });
      sheet.columns = [{ width: 8 }, { width: 50 }, { width: 14 }, { width: 14 }, { width: 18 }, { width: 14 }, { width: 16 }];
      
      const titleStyle: Partial<ExcelJS.Style> = {
        font: { bold: true, size: 10 },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEAEAEA' } },
        border: { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } },
        alignment: { vertical: 'middle', horizontal: 'left' }
      };
      const centerAlign: Partial<ExcelJS.Style> = { alignment: { horizontal: 'center', vertical: 'middle' }, border: titleStyle.border as ExcelJS.Borders };

      sheet.mergeCells('A1:G1'); sheet.getCell('A1').value = 'PACKING LIST'; sheet.getCell('A1').font = { bold: true, size: 18 }; sheet.getCell('A1').alignment = { horizontal: 'center', vertical: 'middle' }; sheet.getRow(1).height = 35;
      sheet.getCell('G2').value = `Invoice# ${data.invoiceNo}`; sheet.getCell('G2').font = { bold: true }; sheet.getCell('G2').alignment = { horizontal: 'right' };

      sheet.getCell('A4').value = 'Bill To'; sheet.getCell('A4').style = titleStyle as ExcelJS.Style;
      sheet.mergeCells('A5:C8'); sheet.getCell('A5').value = data.billTo; sheet.getCell('A5').alignment = { wrapText: true, vertical: 'top' }; sheet.getCell('A5').border = titleStyle.border as ExcelJS.Borders;

      sheet.getCell('E4').value = 'Ship To'; sheet.getCell('E4').style = titleStyle as ExcelJS.Style;
      sheet.mergeCells('E5:G8'); sheet.getCell('E5').value = `${data.shipTo}\n${data.incoterm}`; sheet.getCell('E5').alignment = { wrapText: true, vertical: 'top' }; sheet.getCell('E5').border = titleStyle.border as ExcelJS.Borders;

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

      const hRow = 13;
      ['#', 'Description', 'No. of Ctn', 'KG/Ctn', 'Total Weight (KG)', 'CBM/Ctn', 'Total CBM'].forEach((h, i) => { sheet.getRow(hRow).getCell(i + 1).value = h; sheet.getRow(hRow).getCell(i + 1).style = titleStyle as ExcelJS.Style; });

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

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
        <style>{`
          @media print {
            @page { size: A4 landscape; margin: 10mm; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
          }
        `}</style>
        <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10 no-print">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
            <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto object-contain" />
            <div className="h-6 w-px bg-gray-200" />
            <span className="text-sm font-semibold text-gray-600">Packing List Report</span>
            <span className="ml-auto text-xs text-gray-400 font-mono hidden sm:inline-block">#{data.invoiceNo}</span>
            <div className="flex gap-2 ml-4">
              <button onClick={handlePrint} className="bg-neutral-700 hover:bg-neutral-800 text-white px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium transition shadow-sm"><Download className="w-3.5 h-3.5" /> Download PDF</button>
              <button onClick={handleExcelDownload} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium transition shadow-sm"><FileSpreadsheet className="w-3.5 h-3.5" /> Download Excel</button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-start p-6 border-b border-gray-100">
              <div>
                <img src="/logo.png" alt="Achieve Pack" className="h-10 w-auto object-contain mb-2" />
                <p className="text-xs text-gray-400 leading-relaxed">Achieve Pack · HK BRN 41007097-000-07-14-4<br/>1/F, No.41 Wo Liu Hang Tsuen, Fo Tan, Hong Kong<br/>+852 6970 4411 · ryan@achievepack.com</p>
              </div>
              <div className="text-right">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide">PACKING LIST</h1>
                <p className="text-sm font-semibold text-gray-500 mt-1">Invoice# {data.invoiceNo}</p>
                <p className="text-xs text-gray-400 mt-0.5">{data.invoiceDate}</p>
              </div>
            </div>
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

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[ { label: 'Invoice Date', value: data.invoiceDate }, { label: 'Incoterm', value: data.incoterm }, { label: 'Total Gross Weight', value: `${totalGross.toFixed(2)} KG` }, { label: 'Total CBM', value: totalCBM > 0 ? totalCBM.toFixed(3) : '---' }, { label: 'Origin', value: 'Made in China 🇨🇳' } ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-sm font-bold text-gray-800">{s.value}</p>
              </div>
            ))}
          </div>

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
                      <td className="px-4 py-4"><p className="font-bold text-gray-800">{item.name}</p>{item.details && <p className="text-xs text-gray-400 mt-1 whitespace-pre-wrap leading-relaxed">{item.details}</p>}</td>
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
          <div className="text-center text-xs text-gray-400 flex items-center">
            <div className="h-px bg-gray-300 flex-1" /><span className="px-4 uppercase tracking-widest font-semibold">Origin: Made in China</span><div className="h-px bg-gray-300 flex-1" />
          </div>
          <div className="text-center text-xs text-gray-400 pb-8 space-y-1">
            <p className="font-semibold text-gray-500">Achieve Pack</p>
            <p>1/F, No.41 Wo Liu Hang Tsuen, Fo Tan, Hong Kong</p>
            <p>+852 6970 4411 · ryan@achievepack.com · achievepack.com</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
