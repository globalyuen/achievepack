import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, FileText, Download, Pencil, X, Save, CheckCircle, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ADMIN_PWD = '8888****';

const SharedQuotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quoteHtml, setQuoteHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Admin edit state
  const [editMode, setEditMode] = useState(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [pwdInput, setPwdInput] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [editedHtml, setEditedHtml] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  const pwdRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      if (!id) return;
      try {
        const response = await fetch(`/api/get-shared-quote?id=${id}`);
        const data = await response.json();
        if (!response.ok || !data.success) throw new Error(data.error || 'Quote not found.');
        if (!data.quoteHtml) throw new Error('Quote content is empty.');
        setQuoteHtml(data.quoteHtml);
        setEditedHtml(data.quoteHtml);
      } catch (err: any) {
        setError(err.message || 'Failed to load quotation');
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, [id]);

  const handleEditClick = () => {
    // If already authenticated in this session, go straight to edit
    if (sessionStorage.getItem('admin_local_pwd') === ADMIN_PWD) {
      setEditMode(true);
    } else {
      setShowPwdModal(true);
      setPwdInput('');
      setPwdError('');
      setTimeout(() => pwdRef.current?.focus(), 100);
    }
  };

  const handlePwdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwdInput === ADMIN_PWD) {
      sessionStorage.setItem('admin_local_pwd', ADMIN_PWD);
      setShowPwdModal(false);
      setEditMode(true);
    } else {
      setPwdError('Incorrect password. Please try again.');
      setPwdInput('');
      pwdRef.current?.focus();
    }
  };

  const handleSave = async () => {
    if (!id || !editedHtml.trim()) return;
    setSaving(true);
    setSaveError('');
    setSaveSuccess(false);
    try {
      const res = await fetch('/api/save-shared-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quoteHtml: editedHtml })
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to save.');
      setQuoteHtml(editedHtml);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err: any) {
      setSaveError(err.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600 font-bold">Securely loading quotation...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-red-100 max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black text-gray-900 mb-2">Quotation Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <a href="/" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition">
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Helmet>
        <title>Official Quotation | Achieve Pack</title>
      </Helmet>

      {/* Password Modal */}
      {showPwdModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900">Admin Access</h2>
                <p className="text-xs text-gray-500">Enter password to edit this quote</p>
              </div>
              <button onClick={() => setShowPwdModal(false)} className="ml-auto text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handlePwdSubmit} className="flex flex-col gap-3">
              <input
                ref={pwdRef}
                type="password"
                value={pwdInput}
                onChange={e => { setPwdInput(e.target.value); setPwdError(''); }}
                placeholder="Admin password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoComplete="current-password"
              />
              {pwdError && <p className="text-xs text-red-500 font-bold">{pwdError}</p>}
              <button type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
                <Pencil className="w-4 h-4" /> Unlock & Edit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-50 print:hidden shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto" />
            <span className="h-4 w-px bg-gray-300 mx-1" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" /> Secure Quotation Hub
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Admin Edit toggle */}
            {editMode ? (
              <button
                onClick={() => setEditMode(false)}
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm transition"
              >
                <X className="w-4 h-4" /> Close Editor
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-lg font-bold text-sm transition"
              >
                <Pencil className="w-4 h-4" /> Admin Edit
              </button>
            )}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold shadow-md transition active:scale-95"
            >
              <Download className="w-4 h-4" /> Save as PDF / Print
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">

        {/* ── Admin HTML Editor ── */}
        {editMode && (
          <div className="mb-6 bg-white border border-indigo-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-indigo-50 border-b border-indigo-100">
              <span className="text-sm font-extrabold text-indigo-800 flex items-center gap-2">
                <Pencil className="w-4 h-4" /> Edit Quote HTML
              </span>
              <div className="flex items-center gap-2">
                {saveSuccess && (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <CheckCircle className="w-4 h-4" /> Saved!
                  </span>
                )}
                {saveError && (
                  <span className="text-xs font-bold text-red-500">{saveError}</span>
                )}
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-1.5 rounded-lg text-xs font-extrabold transition"
                >
                  {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-2">
                Edit the raw HTML below. Changes will update the live shared link immediately after saving.
              </p>
              <textarea
                value={editedHtml}
                onChange={e => setEditedHtml(e.target.value)}
                className="w-full h-80 border border-gray-200 rounded-xl p-3 text-xs font-mono bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none leading-relaxed resize-y"
                spellCheck={false}
              />
            </div>
          </div>
        )}

        {/* Quote Preview */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200 ring-1 ring-black/5">
          {quoteHtml && (
            <iframe
              key={quoteHtml}
              srcDoc={quoteHtml}
              className="w-full border-none min-h-[1100px]"
              title="Official Quotation"
              style={{ display: 'block' }}
            />
          )}
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs print:hidden">
          <p>© {new Date().getFullYear()} Achieve Pack Limited. All rights reserved.</p>
          <p className="mt-1">This is an official document generated by Achieve Pack Secure Document Hub.</p>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; }
          body { background: white; padding: 0; margin: 0; }
          .min-h-screen { min-height: 0 !important; background: white !important; }
          .max-w-5xl { max-width: none !important; width: 100% !important; padding: 0 !important; margin: 0 !important; }
          .bg-gray-100 { background: white !important; }
          .rounded-3xl { border-radius: 0 !important; border: none !important; }
          iframe { width: 100% !important; height: auto !important; min-height: 297mm !important; }
        }
      `}</style>
    </div>
  );
};

export default SharedQuotePage;
