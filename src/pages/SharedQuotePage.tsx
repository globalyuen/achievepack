import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, FileText, Download, Pencil, X, Save, CheckCircle, Lock, ChevronDown, Copy, Share, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ADMIN_PWD = '8888****';

const SharedQuotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quoteHtml, setQuoteHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(1200);

  // Media attachments state (stored in a hidden comment or separate metadata if available)
  // For now, we'll extract them from a specific comment block <!-- MEDIA:{"photos":[], "videos":[]} --> or similar
  const [photos, setPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  
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

  // Lightbox state
  const [lightbox, setLightbox] = useState<{ src: string, type: 'image' | 'video' } | null>(null);

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
        
        const html = data.quoteHtml;
        setQuoteHtml(html);
        setEditedHtml(html);
        
        // Parse media from comment if present
        const mediaMatch = html.match(/<!-- MEDIA:(.*) -->/);
        if (mediaMatch) {
          try {
            const media = JSON.parse(mediaMatch[1]);
            setPhotos(media.photos || []);
            setVideos(media.videos || []);
          } catch (e) {
            console.error("Failed to parse media metadata");
          }
        }
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

  const handleAddPhoto = () => {
    const url = prompt('Enter photo URL:');
    if (url) setPhotos([...photos, url]);
  };

  const handleAddVideo = () => {
    const url = prompt('Enter video URL:');
    if (url) setVideos([...videos, url]);
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleRemoveVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!id || !editedHtml.trim()) return;
    setSaving(true);
    setSaveError('');
    setSaveSuccess(false);
    
    // Embed media metadata into the HTML as a comment
    const mediaMetadata = `<!-- MEDIA:${JSON.stringify({ photos, videos })} -->`;
    const cleanHtml = editedHtml.replace(/<!-- MEDIA:.* -->/, '');
    const finalHtml = cleanHtml + "\n" + mediaMetadata;

    try {
      const res = await fetch('/api/save-shared-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quoteHtml: finalHtml })
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to save.');
      setQuoteHtml(finalHtml);
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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600 font-bold">Securely loading quotation...</p>
      </div>
    );
  }

  const getSrcDoc = () => {
    if (!quoteHtml) return '';
    // Clean metadata comment from display
    const displayHtml = quoteHtml.replace(/<!-- MEDIA:.* -->/, '');
    return `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            html, body { margin: 0; padding: 0; background-color: white; font-family: sans-serif; overflow: hidden; }
            body { padding: 40px 20px; }
            .content { width: 100%; max-width: 1000px; margin: 0 auto; }
          </style>
          <script>
            function sendHeight() { const height = document.documentElement.scrollHeight; window.parent.postMessage({ type: 'resize-iframe', height: height }, '*'); }
            window.addEventListener('load', sendHeight); window.addEventListener('resize', sendHeight);
            new ResizeObserver(sendHeight).observe(document.body);
          </script>
        </head>
        <body>
          <div class="content">
            ${displayHtml}
          </div>
        </body>
      </html>
    `;
  };

  const printStyles = `
    @media print {
      @page { margin: 10mm; }
      body { background: white !important; padding: 0 !important; margin: 0 !important; }
      .print-hidden { display: none !important; }
      iframe { width: 100% !important; height: auto !important; }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-24">
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
              <div className="flex-1">
                <h2 className="text-base font-black text-gray-900">Admin Access</h2>
                <p className="text-xs text-gray-500">Enter password to edit</p>
              </div>
              <button onClick={() => setShowPwdModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handlePwdSubmit} className="flex flex-col gap-3">
              <input
                ref={pwdRef}
                type="password"
                value={pwdInput}
                onChange={e => { setPwdInput(e.target.value); setPwdError(''); }}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {pwdError && <p className="text-xs text-red-500 font-bold">{pwdError}</p>}
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition">
                Unlock Editor
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Action Bar (Yesterday's Style) */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-50 print-hidden shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Achieve Pack" className="h-8 w-auto" />
            <span className="h-4 w-px bg-gray-300 mx-1" />
            <span className="text-xs font-black text-gray-700 uppercase tracking-tighter">Secure Quotation Viewer</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={editMode ? () => setEditMode(false) : handleEditClick} className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold text-xs transition">
              {editMode ? <X className="w-3.5 h-3.5" /> : <Pencil className="w-3.5 h-3.5" />}
              {editMode ? 'Close' : 'Admin'}
            </button>
            <button onClick={handleCopyLink} className={`flex items-center gap-2 \${copySuccess ? 'bg-emerald-600' : 'bg-gray-800'} text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition`.replace('\${copySuccess ? \'bg-emerald-600\' : \'bg-gray-800\'}', copySuccess ? 'bg-emerald-600' : 'bg-gray-800')}>
              {copySuccess ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copySuccess ? 'Copied' : 'Copy Link'}
            </button>
            <button onClick={handleShare} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition">
              <Share className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Admin Editor Section */}
        {editMode && (
          <div className="mb-8 space-y-6">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-black uppercase text-xl">Quotation Content (HTML)</h3>
                <button onClick={handleSave} disabled={saving} className="bg-[#D4FF00] border-2 border-black px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
                  {saving ? 'Saving...' : 'Save All Changes'}
                </button>
              </div>
              <textarea
                ref={textareaRef}
                value={editedHtml}
                onChange={e => setEditedHtml(e.target.value)}
                className="w-full h-80 border-4 border-black p-4 font-mono text-sm focus:outline-none bg-neutral-900 text-green-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black uppercase mb-4 flex items-center gap-2"><ImageIcon className="w-5 h-5" /> Product Photos</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {photos.map((url, i) => (
                    <div key={i} className="relative group aspect-square border-2 border-black">
                      <img src={url} className="w-full h-full object-cover" alt="" />
                      <button onClick={() => handleRemovePhoto(i)} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-3 h-3" /></button>
                    </div>
                  ))}
                  <button onClick={handleAddPhoto} className="aspect-square border-2 border-dashed border-neutral-400 flex flex-col items-center justify-center text-neutral-500 hover:border-black hover:text-black transition-colors">
                    <ImageIcon className="w-6 h-6" />
                    <span className="text-[10px] font-bold">ADD PHOTO</span>
                  </button>
                </div>
              </div>
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black uppercase mb-4 flex items-center gap-2"><VideoIcon className="w-5 h-5" /> Product Videos</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {videos.map((url, i) => (
                    <div key={i} className="relative group aspect-square border-2 border-black bg-black flex items-center justify-center">
                      <VideoIcon className="w-8 h-8 text-white" />
                      <button onClick={() => handleRemoveVideo(i)} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-3 h-3" /></button>
                    </div>
                  ))}
                  <button onClick={handleAddVideo} className="aspect-square border-2 border-dashed border-neutral-400 flex flex-col items-center justify-center text-neutral-500 hover:border-black hover:text-black transition-colors">
                    <VideoIcon className="w-6 h-6" />
                    <span className="text-[10px] font-bold">ADD VIDEO</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quotation View */}
        <div className="bg-white border-2 border-gray-200 shadow-xl rounded-xl overflow-hidden">
          {quoteHtml && (
            <iframe
              key={quoteHtml}
              srcDoc={getSrcDoc()}
              className="w-full border-none"
              style={{ height: iframeHeight + 'px', display: 'block' }}
              scrolling="no"
              title="Official Quote"
            />
          )}
          
          {/* Media Attachments Section (Visible to Customer) */}
          {(photos.length > 0 || videos.length > 0) && (
            <div className="border-t-2 border-neutral-100 p-8 sm:p-12 bg-neutral-50">
              <h2 className="text-2xl font-black uppercase mb-8 tracking-tighter">Quotation Media Attachments</h2>
              
              {photos.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4">Photo Gallery</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {photos.map((url, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        className="aspect-square border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer overflow-hidden bg-white"
                        onClick={() => setLightbox({ src: url, type: 'image' })}
                      >
                        <img src={url} className="w-full h-full object-cover" alt={`Product ${i+1}`} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {videos.length > 0 && (
                <div>
                  <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4">Video Documentation</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {videos.map((url, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        className="aspect-square border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer relative bg-black group"
                        onClick={() => setLightbox({ src: url, type: 'video' })}
                      >
                        <video src={url} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <VideoIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Simple Footer */}
        <div className="mt-12 text-center text-neutral-400 text-[10px] font-bold uppercase tracking-widest print-hidden">
          <p>© {new Date().getFullYear()} Achieve Pack Limited. Secure Document Viewer.</p>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-12 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-8 right-8 text-white font-black flex items-center gap-2 hover:text-[#D4FF00] transition-colors">
              <X className="w-8 h-8" /> CLOSE
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === 'image' ? (
                <img src={lightbox.src} className="max-w-full max-h-[85vh] border-4 border-white shadow-2xl" alt="Enlarged view" />
              ) : (
                <video src={lightbox.src} controls autoPlay className="max-w-full max-h-[85vh] border-4 border-white shadow-2xl" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: printStyles }} />
    </div>
  );
};

export default SharedQuotePage;
