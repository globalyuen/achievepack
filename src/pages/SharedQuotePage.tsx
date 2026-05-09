import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, AlertCircle, FileText, Download, Pencil, X, Save, CheckCircle, Lock, ChevronDown, Copy, Share, RefreshCw, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
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
  
  // Calculator state
  const [calcValues, setCalcValues] = useState({
    products: [
      { quantity: 1000, unitPrice: 0.00, weight: 0, total: 0 }
    ],
    seaRate: 0,
    airRate: 0,
    totalWeight: 0,
    productSubtotal: 0
  });

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
        
        // Initial sync to populate calculator
        setTimeout(() => syncFromHtml(html), 500);
      } catch (err: any) {
        setError(err.message || 'Failed to load quotation');
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, [id]);

  const handleCalcUpdate = (index: number | 'global', field: string, value: number) => {
    setCalcValues(prev => {
      const next = { ...prev };
      
      if (index === 'global') {
        // @ts-ignore
        next[field] = value;
      } else {
        const products = [...next.products];
        // @ts-ignore
        products[index] = { ...products[index], [field]: value };
        products[index].total = products[index].quantity * products[index].unitPrice;
        next.products = products;
      }
      
      // Recalculate totals
      next.productSubtotal = next.products.reduce((sum, p) => sum + p.total, 0);
      next.totalWeight = next.products.reduce((sum, p) => sum + p.weight, 0);
      
      // Trigger HTML update
      updateHtmlFromCalc(next);
      
      return next;
    });
  };

  const updateHtmlFromCalc = (values: typeof calcValues) => {
    let newHtml = editedHtml;
    
    // 1. Update Product Rows (Quantity, Unit Price, Weight, Total)
    values.products.forEach((product, idx) => {
      const qtyStr = product.quantity.toLocaleString('en-US');
      const upStr = product.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
      const weightStr = product.weight.toLocaleString('en-US');
      const ptStr = product.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // Find Nth occurrence patterns
      // Note: This logic assumes the order in HTML matches the order in our state
      
      // Replace Unit Price
      const upPatterns = [
        /(?:Unit Price|Price\/pc|Rate):\s*(?:USD\s*)?\$?\s*([0-9.,]+)/gi,
        /([0-9.,]+)\/ea/gi
      ];
      upPatterns.forEach(pattern => {
        let count = 0;
        newHtml = newHtml.replace(pattern, (match, p1) => {
          if (count === idx) {
            count++;
            return match.replace(p1, upStr);
          }
          count++;
          return match;
        });
      });

      // Replace Quantity
      const qPattern = /(?:Quantity|Qty):\s*([0-9.,]+)/gi;
      let qCount = 0;
      newHtml = newHtml.replace(qPattern, (match, p1) => {
        if (qCount === idx) {
          qCount++;
          return match.replace(p1, qtyStr);
        }
        qCount++;
        return match;
      });

      // Replace Weight
      const wPattern = /(?:Weight|Total Weight):\s*([0-9.,]+)(\s*kg)?/gi;
      let wCount = 0;
      newHtml = newHtml.replace(wPattern, (match, p1) => {
        if (wCount === idx) {
          wCount++;
          return match.replace(p1, weightStr);
        }
        wCount++;
        return match;
      });

      // Replace Item Total (Subtotal for this item)
      const subPattern = /(?:Total:\s*(?:USD\s*)?\$?\s*|Total Amount:\s*(?:USD\s*)?\$?\s*)([0-9.,]+)/gi;
      let sCount = 0;
      newHtml = newHtml.replace(subPattern, (match, p1) => {
        if (sCount === idx) {
          sCount++;
          return match.replace(p1, ptStr);
        }
        sCount++;
        return match;
      });
    });

    // 2. Update Global Totals (Subtotal, Grand Total)
    const subtotalStr = values.productSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const totalWeightStr = values.totalWeight.toLocaleString('en-US');
    
    // Pattern for "Subtotal: $1,000"
    const stPattern = /(?:Subtotal|Product Total):\s*(?:USD\s*)?\$?\s*([0-9.,]+)/i;
    if (stPattern.test(newHtml)) {
      newHtml = newHtml.replace(stPattern, (match, p1) => match.replace(p1, subtotalStr));
    }

    // 3. Sea Freight
    const seaTotal = values.totalWeight * values.seaRate;
    const seaTotalStr = seaTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const seaDetailed = /(Sea freight:\s*)([0-9.,]+)(\s*kg\s*×\s*\$?\s*)([0-9.,]+)(\s*=\s*\$?\s*)([0-9.,]+)/i;
    if (seaDetailed.test(newHtml)) {
      newHtml = newHtml.replace(seaDetailed, `$1${totalWeightStr}$3${values.seaRate}$5${seaTotalStr}`);
    } else {
      const seaPattern = /(Sea Freight(?:\s*Cost)?:\s*(?:USD\s*)?\$?\s*)([0-9.,]+)/i;
      if (seaPattern.test(newHtml)) {
        newHtml = newHtml.replace(seaPattern, `$1${seaTotalStr}`);
      }
    }

    // 4. Air Freight
    const airTotal = values.totalWeight * values.airRate;
    const airTotalStr = airTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const airDetailed = /(Air freight:\s*)([0-9.,]+)(\s*kg\s*×\s*\$?\s*)([0-9.,]+)(\s*=\s*\$?\s*)([0-9.,]+)/i;
    if (airDetailed.test(newHtml)) {
      newHtml = newHtml.replace(airDetailed, `$1${totalWeightStr}$3${values.airRate}$5${airTotalStr}`);
    } else {
      const airPattern = /(Air Freight(?:\s*Cost)?:\s*(?:USD\s*)?\$?\s*)([0-9.,]+)/i;
      if (airPattern.test(newHtml)) {
        newHtml = newHtml.replace(airPattern, `$1${airTotalStr}`);
      }
    }

    setEditedHtml(newHtml);
  };

  const syncFromHtml = (targetHtml = editedHtml) => {
    // Extract items
    const products: any[] = [];
    
    // Match all Unit Prices
    const upMatches = Array.from(targetHtml.matchAll(/(?:Unit Price|Price\/pc|Rate):\s*(?:USD\s*)?\$?\s*([0-9.,]+)/gi));
    const upMatches2 = Array.from(targetHtml.matchAll(/([0-9.,]+)\/ea/gi));
    const allPrices = upMatches.length >= upMatches2.length ? upMatches : upMatches2;
    
    // Match all Quantities
    const qMatches = Array.from(targetHtml.matchAll(/(?:Quantity|Qty):\s*([0-9.,]+)/gi));
    
    // Match all Weights
    const wMatches = Array.from(targetHtml.matchAll(/(?:Weight|Total Weight):\s*([0-9.,]+)/gi));

    const itemCount = Math.max(allPrices.length, qMatches.length);
    
    for (let i = 0; i < itemCount; i++) {
      const quantity = qMatches[i] ? parseFloat(qMatches[i][1].replace(/,/g, '')) : 0;
      const unitPrice = allPrices[i] ? parseFloat(allPrices[i][1].replace(/,/g, '')) : 0;
      const weight = wMatches[i] ? parseFloat(wMatches[i][1].replace(/,/g, '')) : 0;
      
      products.push({
        quantity,
        unitPrice,
        weight,
        total: quantity * unitPrice
      });
    }

    if (products.length === 0) {
      products.push({ quantity: 1000, unitPrice: 0, weight: 0, total: 0 });
    }

    // Sea Rate
    let seaRate = 0;
    const seaDetailedMatch = targetHtml.match(/Sea freight:\s*[0-9.,]+\s*kg\s*×\s*\$?\s*([0-9.,]+)/i);
    if (seaDetailedMatch) {
      seaRate = parseFloat(seaDetailedMatch[1].replace(/,/g, ''));
    }

    // Air Rate
    let airRate = 0;
    const airDetailedMatch = targetHtml.match(/Air freight:\s*[0-9.,]+\s*kg\s*×\s*\$?\s*([0-9.,]+)/i);
    if (airDetailedMatch) {
      airRate = parseFloat(airDetailedMatch[1].replace(/,/g, ''));
    }

    const totalWeight = products.reduce((sum, p) => sum + p.weight, 0);
    const productSubtotal = products.reduce((sum, p) => sum + p.total, 0);

    setCalcValues({
      products,
      seaRate,
      airRate,
      totalWeight,
      productSubtotal
    });
  };

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

  const handleAddCalcProduct = () => {
    setCalcValues(prev => ({
      ...prev,
      products: [...prev.products, { quantity: 0, unitPrice: 0, weight: 0, total: 0 }]
    }));
  };

  const handleRemoveCalcProduct = (idx: number) => {
    setCalcValues(prev => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== idx)
    }));
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
            <button onClick={handleCopyLink} className={`flex items-center gap-2 ${copySuccess ? 'bg-emerald-600' : 'bg-gray-800'} text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm transition`}>
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

            <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black uppercase text-xl flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" /> Pricing Auto-Calculator
                </h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => syncFromHtml()}
                    className="bg-black text-white px-4 py-2 font-bold text-xs uppercase hover:bg-neutral-800 transition-colors"
                  >
                    Sync from HTML
                  </button>
                  <button 
                    onClick={handleAddCalcProduct}
                    className="bg-white text-black border-2 border-black px-4 py-2 font-bold text-xs uppercase hover:bg-neutral-100 transition-colors"
                  >
                    Add Item
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {calcValues.products.map((product, idx) => (
                  <div key={idx} className="bg-white/40 border-2 border-black p-4 relative group">
                    <div className="absolute -top-3 left-4 bg-black text-white px-2 py-0.5 text-[8px] font-black uppercase">
                      Item #{idx + 1}
                    </div>
                    {calcValues.products.length > 1 && (
                      <button 
                        onClick={() => handleRemoveCalcProduct(idx)}
                        className="absolute -top-3 right-4 bg-red-500 text-white w-6 h-6 flex items-center justify-center border-2 border-black hover:bg-red-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-[8px] font-black uppercase mb-1 flex items-center gap-1">
                          <Pencil className="w-2 h-2" /> Qty (pcs)
                        </label>
                        <input 
                          type="number" 
                          value={product.quantity}
                          onChange={e => handleCalcUpdate(idx, 'quantity', parseFloat(e.target.value) || 0)}
                          className="w-full border-2 border-black p-2 font-black text-sm focus:outline-none focus:bg-white bg-white/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] font-black uppercase mb-1 flex items-center gap-1">
                          <Pencil className="w-2 h-2" /> Unit Price ($)
                        </label>
                        <input 
                          type="number" 
                          step="0.0001"
                          value={product.unitPrice}
                          onChange={e => handleCalcUpdate(idx, 'unitPrice', parseFloat(e.target.value) || 0)}
                          className="w-full border-2 border-black p-2 font-black text-sm focus:outline-none focus:bg-white bg-white/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] font-black uppercase mb-1 flex items-center gap-1">
                          <Pencil className="w-2 h-2" /> Weight (kg)
                        </label>
                        <input 
                          type="number" 
                          value={product.weight}
                          onChange={e => handleCalcUpdate(idx, 'weight', parseFloat(e.target.value) || 0)}
                          className="w-full border-2 border-black p-2 font-black text-sm focus:outline-none focus:bg-white bg-white/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] font-black uppercase mb-1">Item Total</label>
                        <div className="w-full border-2 border-black p-2 font-black text-sm bg-black text-[#D4FF00] flex justify-between items-center h-[38px]">
                          <span>$</span>
                          <span>{product.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t-4 border-black pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1 text-cyan-800">Sea Rate ($/kg)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={calcValues.seaRate}
                      onChange={e => handleCalcUpdate('global', 'seaRate', parseFloat(e.target.value) || 0)}
                      className="w-full border-2 border-black p-2 font-black text-lg focus:outline-none focus:bg-white bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1 text-orange-800">Air Rate ($/kg)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={calcValues.airRate}
                      onChange={e => handleCalcUpdate('global', 'airRate', parseFloat(e.target.value) || 0)}
                      className="w-full border-2 border-black p-2 font-black text-lg focus:outline-none focus:bg-white bg-white/50"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[10px] font-black uppercase mb-1">Summary (Auto-Calculated)</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-black text-white p-2 border-2 border-black flex justify-between items-center">
                        <span className="text-[9px] font-black">TOTAL WEIGHT</span>
                        <span className="font-black">{calcValues.totalWeight} kg</span>
                      </div>
                      <div className="bg-[#D4FF00] text-black p-2 border-2 border-black flex justify-between items-center">
                        <span className="text-[9px] font-black">PRODUCT TOTAL</span>
                        <span className="font-black">${calcValues.productSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-cyan-100/50 border-2 border-black p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase text-cyan-900">Total Sea Freight</span>
                  </div>
                  <span className="font-black text-xl text-cyan-900 tracking-tighter">
                    ${(calcValues.totalWeight * calcValues.seaRate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="bg-orange-100/50 border-2 border-black p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase text-orange-900">Total Air Freight</span>
                  </div>
                  <span className="font-black text-xl text-orange-900 tracking-tighter">
                    ${(calcValues.totalWeight * calcValues.airRate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              
              <p className="mt-4 text-[9px] font-bold text-black/60 uppercase">
                * Each item in the list above corresponds to an occurrence of Unit Price/Qty/Weight in your quote. 
                <br/>* Changing these values will automatically find and replace the correct matching lines in the HTML.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black uppercase mb-4 flex items-center gap-2"><ImageIcon className="w-5 h-5" /> Product Photos</h3>
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3 mb-4">
                  {photos.map((url, i) => (
                    <div key={i} className="relative group w-20 h-20 border-2 border-black bg-white">
                      <img src={url} className="w-full h-full object-cover" alt="" />
                      <button onClick={() => handleRemovePhoto(i)} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity z-10"><X className="w-2.5 h-2.5" /></button>
                    </div>
                  ))}
                  <button onClick={handleAddPhoto} className="w-20 h-20 border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-colors">
                    <ImageIcon className="w-5 h-5" />
                    <span className="text-[8px] font-black">ADD</span>
                  </button>
                </div>
              </div>
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black uppercase mb-4 flex items-center gap-2"><VideoIcon className="w-5 h-5" /> Product Videos</h3>
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3 mb-4">
                  {videos.map((url, i) => (
                    <div key={i} className="relative group w-20 h-20 border-2 border-black bg-black flex items-center justify-center">
                      <VideoIcon className="w-5 h-5 text-white" />
                      <button onClick={() => handleRemoveVideo(i)} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity z-10"><X className="w-2.5 h-2.5" /></button>
                    </div>
                  ))}
                  <button onClick={handleAddVideo} className="w-20 h-20 border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center text-neutral-400 hover:border-black hover:text-black transition-colors">
                    <VideoIcon className="w-5 h-5" />
                    <span className="text-[8px] font-black">ADD</span>
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
                  <div className="flex flex-wrap gap-4">
                    {photos.map((url, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.1, translateY: -5 }}
                        className="w-24 h-24 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer overflow-hidden bg-white"
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
                  <div className="flex flex-wrap gap-4">
                    {videos.map((url, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.1, translateY: -5 }}
                        className="w-24 h-24 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer relative bg-black group"
                        onClick={() => setLightbox({ src: url, type: 'video' })}
                      >
                        <video src={url} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <VideoIcon className="w-4 h-4 text-white" />
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
