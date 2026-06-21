import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, CheckCircle, Package, Send, Plus, Trash2, Lock, X, Pencil } from 'lucide-react';

const ADMIN_PWD = '8888****';

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
    if (!id) { setError('链接无效'); setLoading(false); return; }
    fetch(`/api/get-packing-link?id=${id}`)
      .then(r => r.json())
      .then(d => {
        if (!d.success) throw new Error(d.error || '链接未找到');
        setData(d);
        setItems((d.items || []).map((item: PackingItem) => ({ ...item })));
        if (d.supplierSubmitted) setSubmitted(true);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);
  const [editMode, setEditMode] = useState(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [pwdInput, setPwdInput] = useState('');
  const [pwdError, setPwdError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('admin_local_pwd') === ADMIN_PWD) {
      setEditMode(true);
    }
  }, []);

  const handleEditClick = () => {
    if (sessionStorage.getItem('admin_local_pwd') === ADMIN_PWD) {
      setEditMode(true);
    } else {
      setShowPwdModal(true);
      setPwdInput('');
      setPwdError('');
    }
  };

  const handlePwdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwdInput === ADMIN_PWD) {
      sessionStorage.setItem('admin_local_pwd', ADMIN_PWD);
      setShowPwdModal(false);
      setEditMode(true);
    } else {
      setPwdError('密码错误 (Incorrect password)');
      setPwdInput('');
    }
  };
  const updateItem = (idx: number, field: keyof PackingItem, value: any) => {
    setItems(prev => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));
  };

  const addItem = () => {
    setItems(prev => [
      ...prev,
      { id: Date.now().toString(), name: '', details: '', ctn: 0, kgCtn: 0, cbm: 0 }
    ]);
  };

  const removeItem = (idx: number) => {
    if (confirm('确定要删除这项货物吗？ (Are you sure you want to delete this item?)')) {
      setItems(prev => prev.filter((_, i) => i !== idx));
    }
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
      if (!result.success) throw new Error(result.error || '提交失败');
      setSubmitted(true);
    } catch (e: any) {
      alert('错误: ' + e.message);
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
        <p className="font-semibold text-lg">正在加载装箱信息…</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">链接未找到</h2>
        <p className="text-gray-500 text-sm">{error}</p>
        <p className="text-gray-400 text-xs mt-4">如有疑问，请联系 Achieve Pack。</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 font-sans">
      {showPwdModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-black text-gray-900">Admin Access</h2>
              </div>
              <button onClick={() => setShowPwdModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handlePwdSubmit} className="flex flex-col gap-3">
              <input
                type="password"
                value={pwdInput}
                onChange={e => { setPwdInput(e.target.value); setPwdError(''); }}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {pwdError && <p className="text-xs text-red-500 font-bold">{pwdError}</p>}
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition">
                Unlock
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto object-contain" />
          <div className="h-6 w-px bg-gray-200" />
          <span className="text-sm font-semibold text-gray-600">供应商装箱信息填写</span>
          <span className="ml-auto text-xs text-gray-400 font-mono hidden sm:inline-block">#{data?.invoiceNo}</span>
          <button onClick={editMode ? () => setEditMode(false) : handleEditClick} className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg font-bold text-xs transition ml-2">
            {editMode ? <X className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
            {editMode ? 'Close' : 'Admin'}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Order Reference Card */}
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
              <p className="font-bold text-gray-800 text-base">{data?.invoiceNo}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">日期</p>
              <p className="text-gray-700">{data?.invoiceDate}</p>
            </div>
            
            {editMode ? (
              <>
                <div className="mt-2 pt-4 border-t border-gray-100 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">收货方 / 贸易条款 <span className="text-red-400 text-[10px] ml-1">(Hidden from Supplier)</span></p>
                    <p className="text-gray-700 whitespace-pre-wrap">{data?.shipTo}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{data?.incoterm}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">账单地址 <span className="text-red-400 text-[10px] ml-1">(Hidden from Supplier)</span></p>
                    <p className="text-gray-700 whitespace-pre-wrap text-xs leading-relaxed">{data?.billTo}</p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Success Banner */}
        {submitted && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-800 text-lg">✅ 装箱信息提交成功！</h3>
              <p className="text-emerald-700 text-sm mt-1">
                感谢您的配合，Achieve Pack 将尽快处理并准备出货文件。
              </p>
              <p className="text-emerald-600 text-xs mt-2">
                如需修改，您可以更新下方数据后重新提交。
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!submitted && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
            <p className="font-semibold mb-1">📦 填写说明</p>
            <p>请填写以下每项货物的<strong>箱数（CTN）</strong>、<strong>每箱毛重（KG）</strong>及<strong>每箱体积（CBM）</strong>，然后点击<strong>提交</strong>。</p>
          </div>
        )}

        {/* Items Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-800">货物明细</h2>
            <p className="text-xs text-gray-400 mt-0.5">请输入每项货物的装箱信息</p>
          </div>

          <div className="divide-y divide-gray-50">
            {items.map((item, idx) => (
              <div key={item.id ?? idx} className="p-5 sm:p-6">
                {/* Item header (Editable Name & Details) */}
                <div className="flex items-start gap-3 mb-4 relative">
                  <span className="bg-emerald-100 text-emerald-700 font-bold text-sm rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1">
                    {idx + 1}
                  </span>
                  <div className="flex-1 space-y-2 pr-10">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">货物名称 (Item Name)</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={e => updateItem(idx, 'name', e.target.value)}
                        placeholder="输入货物名称"
                        className="w-full font-bold text-gray-800 border-b border-gray-200 px-0 py-1 focus:border-emerald-500 focus:ring-0 outline-none transition bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">详细描述 (Details / SKU)</label>
                      <textarea
                        value={item.details}
                        onChange={e => updateItem(idx, 'details', e.target.value)}
                        placeholder="输入货物详细描述 (选填)"
                        rows={2}
                        className="w-full text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition bg-gray-50 resize-none"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(idx)}
                    className="absolute right-0 top-1 text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition"
                    title="删除此项 (Delete)"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Input grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">箱数（CTN）</label>
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
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">每箱毛重（KG）</label>
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
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">每箱体积（CBM）</label>
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
                    <span>总重量: <strong className="text-gray-700">{(item.ctn * item.kgCtn).toFixed(2)} KG</strong></span>
                    <span>总体积: <strong className="text-gray-700">{(item.ctn * item.cbm).toFixed(3)} CBM</strong></span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-gray-50">
            <button
              onClick={addItem}
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 transition font-medium"
            >
              <Plus className="w-5 h-5" /> 新增货物 (Add New Item)
            </button>
          </div>

          {/* Grand Totals */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
            <div>
              <span className="text-gray-500">总毛重: </span>
              <strong className="text-gray-800 font-mono">{totalGross.toFixed(2)} KG</strong>
            </div>
            <div>
              <span className="text-gray-500">总体积: </span>
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
              <><Loader2 className="w-5 h-5 animate-spin" /> 正在提交…</>
            ) : submitted ? (
              <><CheckCircle className="w-5 h-5" /> 重新提交更新信息</>
            ) : (
              <><Send className="w-5 h-5" /> 提交装箱信息给 Achieve Pack</>
            )}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            您的提交将即时发送给 Achieve Pack。
          </p>
        </div>

        {/* Footer — keep contact in English */}
        <div className="text-center text-xs text-gray-400 pb-6 space-y-1">
          <p className="font-semibold text-gray-500">Achieve Pack</p>
          <p>1/F, No.41 Wo Liu Hang Tsuen, Fo Tan, Hong Kong</p>
          <p>+852 6970 4411 · ryan@achievepack.com · achievepack.com</p>
        </div>
      </div>
    </div>
  );
}
