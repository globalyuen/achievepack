import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, CheckCircle, Package, Send, ChevronRight } from 'lucide-react';

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

export default function SupplierPackingPage() {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PackingData | null>(null);
  const [items, setItems] = useState<PackingItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!id) { setError('Invalid link.'); setLoading(false); return; }
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

  const updateItem = (idx: number, field: keyof PackingItem, value: number) => {
    setItems(prev => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));
  };

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
      if (!result.success) throw new Error(result.error || 'Submission failed');
      setSubmitted(true);
    } catch (e: any) {
      alert('Error: ' + e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const totalGross = items.reduce((s, it) => s + it.ctn * it.kgCtn, 0);
  const totalCBM = items.reduce((s, it) => s + it.ctn * it.cbm, 0);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-emerald-700">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="font-semibold text-lg">Loading packing details…</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">Link Not Found</h2>
        <p className="text-gray-500 text-sm">{error}</p>
        <p className="text-gray-400 text-xs mt-4">Please contact Achieve Pack if you believe this is an error.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto object-contain" />
          <div className="h-6 w-px bg-gray-200" />
          <span className="text-sm font-semibold text-gray-600">Supplier Packing Declaration</span>
          <span className="ml-auto text-xs text-gray-400 font-mono">#{data?.invoiceNo}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Order Reference Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <div className="flex items-center gap-2 text-white">
              <Package className="w-5 h-5" />
              <span className="font-bold text-lg">Order Reference</span>
            </div>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Invoice No.</p>
              <p className="font-bold text-gray-800 text-base">{data?.invoiceNo}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Date</p>
              <p className="text-gray-700">{data?.invoiceDate}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Ship To / Incoterm</p>
              <p className="text-gray-700 whitespace-pre-wrap">{data?.shipTo}</p>
              <p className="text-gray-500 text-xs mt-0.5">{data?.incoterm}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Bill To</p>
              <p className="text-gray-700 whitespace-pre-wrap text-xs leading-relaxed">{data?.billTo}</p>
            </div>
          </div>
        </div>

        {/* Success Banner */}
        {submitted && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-800 text-lg">Packing Details Submitted!</h3>
              <p className="text-emerald-700 text-sm mt-1">
                Thank you. Achieve Pack has received your packing details and will prepare the shipping documents shortly.
              </p>
              <p className="text-emerald-600 text-xs mt-2">
                If you need to make corrections, you can update the values below and re-submit.
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!submitted && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
            <p className="font-semibold mb-1">📦 Instructions</p>
            <p>Please fill in the <strong>number of cartons (CTN)</strong>, <strong>gross weight per carton (KG/CTN)</strong>, and <strong>volume per carton (CBM/CTN)</strong> for each item below, then click <strong>Submit</strong>.</p>
          </div>
        )}

        {/* Items Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-800">Item Details</h2>
            <p className="text-xs text-gray-400 mt-0.5">Enter packing information for each item</p>
          </div>

          <div className="divide-y divide-gray-50">
            {items.map((item, idx) => (
              <div key={item.id ?? idx} className="p-5 sm:p-6">
                {/* Item header */}
                <div className="flex items-start gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 font-bold text-sm rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-bold text-gray-800 leading-tight">{item.name}</p>
                    {item.details && (
                      <p className="text-xs text-gray-400 mt-1 whitespace-pre-wrap leading-relaxed">{item.details}</p>
                    )}
                  </div>
                </div>

                {/* Input grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">CTN (Cartons)</label>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={item.ctn || ''}
                      onChange={e => updateItem(idx, 'ctn', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-right font-mono focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">KG / CTN</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.kgCtn || ''}
                      onChange={e => updateItem(idx, 'kgCtn', parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-right font-mono focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">CBM / CTN</label>
                    <input
                      type="number"
                      min="0"
                      step="0.001"
                      value={item.cbm || ''}
                      onChange={e => updateItem(idx, 'cbm', parseFloat(e.target.value) || 0)}
                      placeholder="0.000"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-right font-mono focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50"
                    />
                  </div>
                </div>

                {/* Calculated totals */}
                {(item.ctn > 0 || item.kgCtn > 0 || item.cbm > 0) && (
                  <div className="mt-3 flex gap-4 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                    <span>Total Weight: <strong className="text-gray-700">{(item.ctn * item.kgCtn).toFixed(2)} KG</strong></span>
                    <span>Total CBM: <strong className="text-gray-700">{(item.ctn * item.cbm).toFixed(3)}</strong></span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Grand Totals */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
            <div>
              <span className="text-gray-500">Total Gross Weight: </span>
              <strong className="text-gray-800 font-mono">{totalGross.toFixed(2)} KG</strong>
            </div>
            <div>
              <span className="text-gray-500">Total Volume: </span>
              <strong className="text-gray-800 font-mono">{totalCBM > 0 ? totalCBM.toFixed(3) : '---'} CBM</strong>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pb-8">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-60 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 transition-all text-base"
          >
            {submitting ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
            ) : submitted ? (
              <><CheckCircle className="w-5 h-5" /> Re-Submit Updated Details</>
            ) : (
              <><Send className="w-5 h-5" /> Submit Packing Details to Achieve Pack</>
            )}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Your submission will be received instantly by Achieve Pack.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 pb-6 space-y-1">
          <p className="font-semibold text-gray-500">Achieve Pack</p>
          <p>1/F, No.41 Wo Liu Hang Tsuen, Fo Tan, Hong Kong</p>
          <p>+852 6970 4411 · ryan@achievepack.com · achievepack.com</p>
        </div>
      </div>
    </div>
  );
}
