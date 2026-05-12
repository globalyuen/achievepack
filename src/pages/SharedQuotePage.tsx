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
  
  // Pricing and Recalculation
  const [pricingData, setPricingData] = useState<any[]>([]);
  const [profitMultiplier, setProfitMultiplier] = useState(1.6);
  const [shippingMultiplier, setShippingMultiplier] = useState(1.0);
  const [customerName, setCustomerName] = useState('Valued Client');
  
  const [lightbox, setLightbox] = useState<{ src: string, type: 'image' | 'video' } | null>(null);
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

        // Load pricing metadata from DB if available
        if (data.pricingData) setPricingData(data.pricingData);
        if (data.profitMultiplier) setProfitMultiplier(data.profitMultiplier);
        if (data.shippingMultiplier) setShippingMultiplier(data.shippingMultiplier);
        if (data.customer) setCustomerName(data.customer);
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

  // RE-RENDER LOGIC (Copied from DailyReportsPage)
  useEffect(() => {
    if (!pricingData || pricingData.length === 0) return;
    
    try {
      const RMB_TO_USD = 6.9;
      const AIR_PER_KG = 15 * shippingMultiplier;
      const SEA_PER_KG = 5 * shippingMultiplier;
      const today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

      const sectionsHtml = pricingData.map((item: any, idx: number) => {
        const rows = (item.pricing || []).map((tier: any) => {
          const unitUsd = (tier.unit_rmb / RMB_TO_USD) * profitMultiplier;
          const exwTotal = Math.ceil(unitUsd * tier.qty);
          const weight = parseFloat(tier.weight_kg) || 0;
          
          const hasWeight = weight > 0;
          const airTotal = hasWeight ? exwTotal + Math.ceil(weight * AIR_PER_KG) : 0;
          const seaTotal = hasWeight ? exwTotal + Math.ceil(weight * SEA_PER_KG) : 0;
          
          const fUnit = (v: number) => `$${v.toFixed(3)}`;
          const fC = (v: number) => `$${v.toLocaleString()}`;
          
          const designsCount = parseInt(item.designs_count) || 0;
          const qtyPerDesign = designsCount > 0 ? Math.floor(tier.qty / designsCount) : tier.qty;
          const qtyDisplay = designsCount > 1 
            ? `${tier.qty.toLocaleString()}<br><span style="font-size:10px;color:#64748b;font-weight:400">${designsCount} designs x ${qtyPerDesign.toLocaleString()}pcs</span>`
            : tier.qty.toLocaleString();

          return `<tr>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;font-weight:700">${qtyDisplay}</td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right">${fUnit(unitUsd)}/ea<br><span style="font-size:11px;color:#64748b">Total: ${fC(exwTotal)}</span></td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right;background:#faf5ff;color:#7c3aed;font-weight:700">
              ${hasWeight ? `${fUnit(airTotal/tier.qty)}/ea<br><span style="font-size:11px;font-weight:400">(${fC(airTotal)})</span>` : 'N/A'}
            </td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right;background:#eff6ff;color:#1d4ed8;font-weight:700">
              ${hasWeight ? `${fUnit(seaTotal/tier.qty)}/ea<br><span style="font-size:11px;font-weight:400">(${fC(seaTotal)})</span>` : 'N/A'}
            </td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right;color:#94a3b8">${hasWeight ? `${Math.ceil(weight)} kg` : 'N/A'}</td>
          </tr>`;
        }).join('');

        const plateFeeUsd = item.plate_fee_rmb ? Math.ceil((item.plate_fee_rmb / RMB_TO_USD) * profitMultiplier) : 0;

        return `
        <div style="page-break-inside: avoid; margin-bottom: 40px;">
          <div class="section">
            <div class="section-title">Item ${idx+1}: Product Specifications ${item.print_type ? `<span style="background:#fef3c7;color:#b45309;padding:2px 6px;border-radius:4px;margin-left:8px;font-size:10px">${item.print_type}</span>` : ''}</div>
            <div class="specs">
              <div class="spec-item"><label>Product Type</label><span>${item.product_name || '—'}</span></div>
              <div class="spec-item">
                <label>Dimensions (Unfolded Size)</label>
                <span>
                  ${item.size || '—'}
                  ${item.size && item.size.toLowerCase().includes('x') && item.size.split(/x|×/).length === 3 ? '<br><span style="font-size:8px;color:#64748b">(Last dimension is Gusset size)</span>' : ''}
                </span>
              </div>
              <div class="spec-item"><label>Material Structure</label><span>${item.material || '—'}</span></div>
              <div class="spec-item"><label>Key Features</label><span>${item.features || '—'}</span></div>
              ${plateFeeUsd > 0 || item.plate_details ? `<div class="spec-item" style="margin-top:6px; padding-top:6px; border-top:1px dashed #e2e8f0"><label>Plate / Print Details</label><span style="color:#d97706;font-size:10px">${item.plate_details || 'Standard Setup'} ${plateFeeUsd > 0 ? `<strong>(Est. Total: $${plateFeeUsd} USD)</strong>` : ''}</span></div>` : ''}
            </div>
            ${item.notes ? `<div style="margin-top:16px;padding:12px;background:#fef9c3;border-radius:8px;font-size:12px;color:#854d0e"><strong>⚠️ Note:</strong> ${item.notes}</div>` : ''}
          </div>

          <div style="background:#f8fafc;border-radius:8px;overflow:hidden;margin-top:15px;">
            <div style="background:#1e293b;padding:8px 15px;display:flex;justify-content:space-between;align-items:center">
              <span style="color:#fff;font-weight:700;font-size:11px">Pricing Tiers (USD - Total Rounded)</span>
              <span style="color:#94a3b8;font-size:8px">Incoterm: DDP Handle-to-Door</span>
            </div>
            <table><thead><tr>
              <th style="width:15%">Quantity</th>
              <th style="text-align:right;width:17%">EXW Unit</th>
              <th style="text-align:right;background:#3b0764;color:#e9d5ff;width:22%">✈ Air DDP</th>
              <th style="text-align:right;background:#1e3a5f;color:#bfdbfe;width:22%">🚢 Sea DDP</th>
              <th style="text-align:right;width:14%">Weight</th>
            </tr></thead><tbody>${rows}</tbody></table>
          </div>

          <div style="margin-top:10px; padding:8px 12px; background:#fff; border:1px solid #e2e8f0; border-radius:8px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
            <div style="font-size:9px; color:#64748b; font-weight:700; text-transform:uppercase; letter-spacing:0.025em;">Estimated Lead Times:</div>
            <div style="display:flex; gap:15px;">
              <div style="font-size:10px; color:#1e293b; font-weight:600;"><span style="color:#94a3b8">🏭</span> Ex-Work: <span style="color:#0f172a">3-4 Weeks</span></div>
              <div style="font-size:10px; color:#1e293b; font-weight:600;"><span style="color:#7c3aed">✈</span> Air DDP: <span style="color:#7c3aed">2 Weeks</span></div>
              <div style="font-size:10px; color:#1e293b; font-weight:600;"><span style="color:#1d4ed8">🚢</span> Sea DDP: <span style="color:#1d4ed8">7-8 Weeks</span></div>
            </div>
          </div>
        </div>`;
      }).join('');

      const fullHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @page { size: A4 landscape; margin: 15mm; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 20px; color: #1e293b; background: white; -webkit-print-color-adjust: exact; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #1e293b; padding-bottom: 15px; margin-bottom: 20px; }
            .logo-section { display: flex; gap: 20px; align-items: center; }
            .logo-text { font-size: 18px; font-weight: 800; color: #0f172a; }
            .company-name { font-size: 20px; font-weight: 800; color: #0f172a; }
            .contact-info { text-align: right; font-size: 9px; color: #64748b; line-height: 1.3; }
            .quote-title { text-align: center; font-size: 24px; font-weight: 900; color: #1e293b; margin: 20px 0; letter-spacing: -0.025em; text-transform: uppercase; }
            .client-info { background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px; display: flex; justify-content: space-between; }
            .section { margin-bottom: 20px; page-break-inside: avoid; }
            .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 10px; letter-spacing: 0.05em; border-left: 3px solid #3b82f6; padding-left: 10px; }
            .specs { display: flex; flex-direction: column; gap: 8px; background: white; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; }
            .spec-item { display: flex; align-items: flex-start; gap: 15px; padding: 8px 0; border-bottom: 1px solid #f1f5f9; }
            .spec-item:last-child { border-bottom: none; }
            .spec-item label { width: 120px; shrink: 0; font-size: 8px; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-top: 2px; }
            .spec-item span { font-size: 10px; font-weight: 700; color: #1e293b; line-height: 1.4; }
            table { width: 100%; border-collapse: collapse; font-size: 9px; table-layout: auto; }
            th { padding: 8px 10px; font-weight: 800; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; text-align: left; font-size: 8px; white-space: nowrap; }
            td { vertical-align: middle; padding: 8px 10px; }
            .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 8px; color: #94a3b8; text-align: center; }
            @media print { 
              body { padding: 0; } 
              .no-print { display: none; } 
              @page { size: A4 landscape; margin: 10mm; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-section">
              <img src="/logo.png" alt="Achieve Pack Logo" style="height: 48px; width: auto; object-fit: contain;" />
            </div>
            <div class="contact-info">
              <div class="company-name">Achieve Pack</div>
              HK BRN 41007097-000-07-14-4<br>
              1 FLOOR, NO.41 WO LIU HANG TSUEN<br>
              FOTAN, Hong Kong<br>
              WhatsApp: +852 69704411 | ryan@achievepack.com<br>
              www.achievepack.com | pouch.eco
            </div>
          </div>

          <div class="quote-title">Official Quotation</div>

          <div class="client-info">
            <div>
              <div style="font-size:10px; text-transform:uppercase; font-weight:800; color:#94a3b8; margin-bottom:4px">Prepared For</div>
              <div style="font-size:18px; font-weight:800; color:#0f172a">${customerName}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:10px; text-transform:uppercase; font-weight:800; color:#94a3b8; margin-bottom:4px">Date</div>
              <div style="font-size:16px; font-weight:600; color:#0f172a">${today}</div>
            </div>
          </div>

          ${sectionsHtml}

          <div class="footer">
            &copy; ${new Date().getFullYear()} Achieve Pack. All rates calculated at 6.9 RMB/USD. Final quote subject to artwork review and shipping fluctuations.
          </div>
        </body>
        </html>
      `;
      setEditedHtml(fullHtml);
    } catch (e: any) {
      console.error("Error building quote HTML:", e);
    }
  }, [pricingData, profitMultiplier, shippingMultiplier, customerName]);

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
        body: JSON.stringify({ 
          id, 
          quoteHtml: finalHtml,
          pricingData,
          profitMultiplier,
          shippingMultiplier,
          customer: customerName
        })
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
            
            /* GLOBAL OVERRIDES FOR SPECS LAYOUT */
            .specs { 
              display: flex !important; 
              flex-direction: column !important; 
              grid-template-columns: none !important;
              gap: 8px !important; 
            }
            .spec-item { 
              display: flex !important; 
              align-items: flex-start !important; 
              gap: 15px !important; 
              padding: 8px 0 !important; 
              border-bottom: 1px solid #f1f5f9 !important;
              grid-column: span 1 !important;
            }
            .spec-item:last-child { border-bottom: none !important; }
            .spec-item label { 
              width: 120px !important; 
              shrink: 0 !important; 
              font-size: 8px !important; 
              font-weight: 800 !important; 
              color: #94a3b8 !important; 
              text-transform: uppercase !important; 
              margin-top: 2px !important;
              display: block !important;
            }
            .spec-item span { 
              font-size: 10px !important; 
              font-weight: 700 !important; 
              color: #1e293b !important; 
              line-height: 1.4 !important; 
            }
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
              <h3 className="font-black uppercase mb-4 flex items-center gap-2">Pricing Controls</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-1">Profit Markup (e.g. 1.6)</label>
                  <input 
                    type="number" 
                    step="0.05"
                    value={profitMultiplier}
                    onChange={(e) => setProfitMultiplier(parseFloat(e.target.value) || 1.0)}
                    className="w-full border-2 border-black p-2 font-bold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-1">Shipping Multiplier (e.g. 1.0)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    value={shippingMultiplier}
                    onChange={(e) => setShippingMultiplier(parseFloat(e.target.value) || 1.0)}
                    className="w-full border-2 border-black p-2 font-bold focus:outline-none"
                  />
                </div>
              </div>
            </div>

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
