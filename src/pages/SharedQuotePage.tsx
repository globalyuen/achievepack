import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, FileText, Download, Pencil, X, Save, CheckCircle, Lock, ChevronDown, Copy, Share, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { NeoBadge, NeoButton } from '@/components/pouch/PouchUI';
import PouchLayout from '@/components/pouch/PouchLayout';

const ADMIN_PWD = '8888****';

const SharedQuotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quoteHtml, setQuoteHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(1200);

  // Admin edit state
  const [editMode, setEditMode] = useState(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [pwdInput, setPwdInput] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [editedHtml, setEditedHtml] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const pwdRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'resize-iframe') {
        setIframeHeight(event.data.height);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight + 200;
      if (window.scrollY > 150) {
        setShowScrollIndicator(false);
      } else if (isScrollable) {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    const timer = setTimeout(handleScroll, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [quoteHtml, iframeHeight]);

  const handleEditClick = () => {
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Official Quotation | Achieve Pack',
          text: 'Check out this official quotation from Achieve Pack.',
          url: window.location.href,
        });
      } catch (err) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const insertHtml = (tag: string) => {
    if (!textareaRef.current) return;
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const text = textareaRef.current.value;
    const before = text.substring(0, start);
    const after = text.substring(end);
    const newText = before + tag + after;
    setEditedHtml(newText);
    
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(start + tag.length, start + tag.length);
      }
    }, 0);
  };

  const handleInsertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      insertHtml(`<div class="media-thumbnail-container" onclick="openLightbox(this)" data-src="${url}" data-type="image"><img src="${url}" class="media-thumbnail" alt="Product Image" /></div>`);
    }
  };

  const handleInsertVideo = () => {
    const url = prompt('Enter video URL (direct link):');
    if (url) {
      insertHtml(`<div class="media-thumbnail-container" onclick="openLightbox(this)" data-src="${url}" data-type="video"><div class="media-video-thumbnail"><video src="${url}"></video></div></div>`);
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
      <PouchLayout>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
          <p className="text-gray-600 font-bold">Securely loading quotation...</p>
        </div>
      </PouchLayout>
    );
  }

  if (error) {
    return (
      <PouchLayout>
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
      </PouchLayout>
    );
  }

  const getSrcDoc = () => {
    if (!quoteHtml) return '';
    const doc = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            html, body { margin: 0; padding: 0; background-color: #F3F4F6; font-family: sans-serif; overflow: hidden; }
            body { display: flex; justify-content: center; padding: 40px 20px; }
            .quote-document-container {
              width: 100%; max-width: 850px; background: white; padding: 60px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); border-radius: 4px;
              min-height: 800px; box-sizing: border-box; position: relative;
            }
            @media (max-width: 640px) { body { padding: 10px; } .quote-document-container { padding: 20px; } }
            .media-thumbnail-container { display: inline-block; transition: all 0.3s; margin: 10px; }
            .media-thumbnail { width: 180px; height: 180px; object-fit: cover; border-radius: 12px; border: 3px solid black; box-shadow: 6px 6px 0px 0px rgba(0,0,0,1); cursor: pointer; display: block; background: #F9FAFB; }
            .media-video-thumbnail { position: relative; width: 180px; height: 180px; background: #000; border-radius: 12px; border: 3px solid black; box-shadow: 6px 6px 0px 0px rgba(0,0,0,1); cursor: pointer; overflow: hidden; }
            .media-video-thumbnail video { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
            .media-video-thumbnail::after { content: '▶'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 32px; background: rgba(0,0,0,0.5); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid white; backdrop-filter: blur(2px); }
          </style>
          <script>
            function openLightbox(element) {
              const src = element.getAttribute('data-src');
              const type = element.getAttribute('data-type');
              const overlay = document.createElement('div');
              overlay.style.position = 'fixed'; overlay.style.top = '0'; overlay.style.left = '0'; overlay.style.width = '100%'; overlay.style.height = '100%'; overlay.style.backgroundColor = 'rgba(0,0,0,0.95)'; overlay.style.zIndex = '100000'; overlay.style.display = 'flex'; overlay.style.flexDirection = 'column'; overlay.style.alignItems = 'center'; overlay.style.justifyContent = 'center'; overlay.style.cursor = 'zoom-out'; overlay.style.backdropFilter = 'blur(10px)'; overlay.style.padding = '20px';
              const closeBtn = document.createElement('div'); closeBtn.innerHTML = '✕ CLOSE'; closeBtn.style.position = 'fixed'; closeBtn.style.top = '30px'; closeBtn.style.right = '30px'; closeBtn.style.color = '#D4FF00'; closeBtn.style.fontSize = '18px'; closeBtn.style.fontWeight = '900'; closeBtn.style.cursor = 'pointer'; closeBtn.style.padding = '12px 24px'; closeBtn.style.border = '3px solid #D4FF00'; closeBtn.style.backgroundColor = 'black'; closeBtn.style.boxShadow = '6px 6px 0px 0px rgba(212,255,0,0.3)';
              let content;
              if (type === 'image') { content = document.createElement('img'); content.src = src; content.style.maxWidth = '90%'; content.style.maxHeight = '80vh'; content.style.borderRadius = '8px'; content.style.border = '4px solid white'; content.style.boxShadow = '0 0 50px rgba(0,0,0,0.5)'; } else { content = document.createElement('video'); content.src = src; content.controls = true; content.autoplay = true; content.style.maxWidth = '90%'; content.style.maxHeight = '80vh'; content.style.borderRadius = '8px'; content.style.border = '4px solid white'; }
              overlay.appendChild(closeBtn); overlay.appendChild(content);
              overlay.onclick = (e) => { if (e.target !== content) document.body.removeChild(overlay); };
              document.body.appendChild(overlay);
            }
            function sendHeight() { const height = document.documentElement.scrollHeight; window.parent.postMessage({ type: 'resize-iframe', height: height }, '*'); }
            window.addEventListener('load', sendHeight); window.addEventListener('resize', sendHeight);
            new ResizeObserver(sendHeight).observe(document.body);
          </script>
        </head>
        <body>
          <div class="quote-document-container">
            ${quoteHtml}
          </div>
        </body>
      </html>
    `;
    return doc;
  };

  const printStyles = `
    @media print {
      @page { margin: 0; }
      body { background: white !important; padding: 0 !important; margin: 0 !important; }
      .min-h-screen { min-height: 0 !important; background: white !important; }
      .max-w-7xl { max-width: none !important; width: 100% !important; padding: 0 !important; margin: 0 !important; }
      .rounded-3xl { border-radius: 0 !important; border: none !important; }
      iframe { width: 100% !important; height: auto !important; min-height: 297mm !important; }
      .print-hidden { display: none !important; }
    }
  `;

  return (
    <PouchLayout>
      <div className="min-h-screen bg-gray-100 font-sans pb-24">
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
        <div className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-50 print-hidden shadow-sm">
          <div className="max-w-5xl mx-auto flex justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto" />
              <span className="h-4 w-px bg-gray-300 mx-1" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Secure Quotation Hub
              </span>
            </div>
            <div className="flex items-center gap-2">
              {editMode ? (
                <button onClick={() => setEditMode(false)} className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm transition">
                  <X className="w-4 h-4" /> Close Editor
                </button>
              ) : (
                <button onClick={handleEditClick} className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-lg font-bold text-sm transition">
                  <Pencil className="w-4 h-4" /> Admin Edit
                </button>
              )}
              <button onClick={handleCopyLink} className={`flex items-center gap-2 \${copySuccess ? 'bg-emerald-600' : 'bg-gray-800'} hover:bg-black text-white px-5 py-2 rounded-lg font-bold shadow-md transition active:scale-95`.replace('\${copySuccess ? \'bg-emerald-600\' : \'bg-gray-800\'}', copySuccess ? 'bg-emerald-600' : 'bg-gray-800')}>
                {copySuccess ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copySuccess ? 'Copied!' : 'Copy Link'}
              </button>
              <button onClick={handleShare} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold shadow-md transition active:scale-95">
                <Share className="w-4 h-4" /> Share Link
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 print-hidden">
            <div>
              <NeoBadge color="bg-[#D4FF00]" className="mb-2">Official Quote</NeoBadge>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Your Custom Packaging Plan</h1>
            </div>
            <div className="flex gap-4">
              <NeoButton variant="secondary" onClick={() => window.print()}>
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </NeoButton>
              <NeoButton variant="primary" href="https://wa.me/85253450933">
                <CheckCircle className="w-4 h-4 mr-2" /> Approve & Start
              </NeoButton>
            </div>
          </div>

          {/* Admin Editor */}
          {editMode && (
            <div className="mb-12 bg-white border border-indigo-200 rounded-2xl shadow-lg overflow-hidden print-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-indigo-50 border-b border-indigo-100">
                <span className="text-sm font-extrabold text-indigo-800 flex items-center gap-2">
                  <Pencil className="w-4 h-4" /> Edit Quote HTML
                </span>
                <div className="flex items-center gap-2">
                  {saveSuccess && <span className="flex items-center gap-1 text-xs font-bold text-emerald-600"><CheckCircle className="w-4 h-4" /> Saved!</span>}
                  {saveError && <span className="text-xs font-bold text-red-500">{saveError}</span>}
                  <button onClick={handleSave} disabled={saving} className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-1.5 rounded-lg text-xs font-extrabold transition">
                    {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-4">
                <button onClick={handleInsertImage} className="flex items-center gap-1.5 bg-white border-2 border-black hover:bg-gray-100 text-black px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><ImageIcon className="w-3 h-3" /> Insert Photo</button>
                <button onClick={handleInsertVideo} className="flex items-center gap-1.5 bg-white border-2 border-black hover:bg-gray-100 text-black px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><VideoIcon className="w-3 h-3" /> Insert Video</button>
              </div>
              <div className="p-4">
                <textarea ref={textareaRef} value={editedHtml} onChange={e => setEditedHtml(e.target.value)} className="w-full h-[500px] border-4 border-black p-4 text-xs font-mono bg-neutral-900 text-green-400 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] outline-none leading-relaxed resize-y" spellCheck={false} />
              </div>
            </div>
          )}

          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200 ring-1 ring-black/5">
            {quoteHtml && (
              <iframe key={quoteHtml} srcDoc={getSrcDoc()} className="w-full border-none" style={{ height: iframeHeight + 'px', display: 'block', overflow: 'hidden' }} title="Official Quotation" scrolling="no" />
            )}
          </div>

          <div className="mt-8 text-center text-gray-500 text-xs print-hidden">
            <p>© {new Date().getFullYear()} Achieve Pack Limited. All rights reserved.</p>
            <p className="mt-1">This is an official document generated by Achieve Pack Secure Document Hub.</p>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: printStyles }} />

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div initial={{ opacity: 0, x: '-50%', y: 20 }} animate={{ opacity: 1, x: '-50%', y: [0, 10, 0] }} exit={{ opacity: 0, x: '-50%', y: 20 }} transition={{ y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }, opacity: { duration: 0.3 } }} className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] cursor-pointer print-hidden" onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}>
              <div className="bg-[#D4FF00] text-black border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-center gap-1 group text-center">
                <span className="font-black text-xs uppercase tracking-tighter italic">View Full Quotation</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold opacity-70">SCROLL DOWN</span>
                  <ChevronDown className="w-5 h-5 animate-bounce" strokeWidth={4} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PouchLayout>
  );
};

export default SharedQuotePage;
