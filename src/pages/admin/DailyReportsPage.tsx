import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, AlertTriangle, Package, Activity, MessageSquare, 
  Calendar, Clock, LockKeyhole, Loader2, LogOut, Plus, 
  Edit3, Trash2, Check, X, Sparkles, Save, CheckCircle,
  FileText, ImageIcon, UploadCloud, Link as LinkIcon, FileIcon,
  ClipboardList, Hash, History, ScrollText, RotateCcw
} from 'lucide-react';
import { supabase, DailyReport, WebhookLog } from '../../lib/supabase';
import PackingListTab from '../../components/admin/PackingListTab';
import * as XLSX from 'xlsx';


const STATUS_COLORS: Record<string, string> = {
  'Urgent': 'bg-red-100 text-red-800 border-red-200',
  'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
  'Shipped': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Pending': 'bg-amber-100 text-amber-800 border-amber-200',
  'New': 'bg-purple-100 text-purple-800 border-purple-200',
  'Scheduled': 'bg-indigo-100 text-indigo-800 border-indigo-200'
};

const CATEGORY_MAP: Record<string, string> = {
  'All': '全部 (All)',
  'Production': '生產中',
  'Sample Shipping': '樣板物流',
  'Production Shipping': '大貨物流',
  'Quotes': '報價',
  'Enquiries': '新查詢',
  'Meetings': '會議'
};

const DOC_TYPES = ['Quote', 'Invoice', 'Packing List', 'Artwork', 'Other'];

export default function DailyReportsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [activeTab, setActiveTab] = useState<'reports'|'logs'|'rfq'|'quote'|'packing'>('reports');

  const [reports, setReports] = useState<DailyReport[]>([]);
  const [logs, setLogs] = useState<WebhookLog[]>([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  
  // Customer/Project Management
  const [customers, setCustomers] = useState<string[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string>('');
  const [showNewCustomerInput, setShowNewCustomerInput] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<Partial<DailyReport>>({});
  
  // Undo Delete State
  const [lastDeleted, setLastDeleted] = useState<DailyReport | null>(null);
  const undoTimeoutRef = useRef<any>(null);

  // AI
  const [rawText, setRawText] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const [uploadingFile, setUploadingFile] = useState(false);

  // Quote Generator
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteHtml, setQuoteHtml] = useState<string>('');
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteMarkup, setQuoteMarkup] = useState('1.6');
  const [selectedDocCategory, setSelectedDocCategory] = useState('Quote');
  const [isAiParsing, setIsAiParsing] = useState(false);

  // RFQ Maker
  const [rfqCustomerText, setRfqCustomerText] = useState('');
  const [rfqChineseOutput, setRfqChineseOutput] = useState('');
  const [rfqLoading, setRfqLoading] = useState(false);
  const [rfqFileUpload, setRfqFileUpload] = useState<File | null>(null);


  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return;
    setLoading(true);
    if (pin === (import.meta.env.VITE_ADMIN_PIN || "8888''''")) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setErrorMsg('密碼錯誤 Invalid Secure PIN');
    }
    setLoading(false);
  };

  const fetchData = async () => {
    try {
      const { data: reportData } = await supabase.from('daily_reports').select('*').order('created_at', { ascending: false });
      if (reportData) setReports(reportData as DailyReport[]);
      
      const { data: logData } = await supabase.from('webhook_logs').select('*').order('created_at', { ascending: false }).limit(30);
      if (logData) setLogs(logData as WebhookLog[]);
      
      // Fetch all unique customers from daily_reports
      const { data: customerData } = await supabase.from('daily_reports').select('customer');
      if (customerData) {
        const uniqueCustomers = Array.from(new Set(customerData.map(r => r.customer).filter(Boolean)));
        setCustomers(uniqueCustomers.sort());
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setReports([]);
    setPin('');
  };

  const openNewModal = () => {
    setEditMode(false);
    setCurrentRecord({ customer: selectedCustomer || '', status: 'New', category: 'Enquiries', detail: '', attachments: [], report_date: new Date().toISOString().split('T')[0] });
    setRawText('');
    setIsModalOpen(true);
  };

  const openEditModal = (report: DailyReport) => {
    setEditMode(true);
    setCurrentRecord({ ...report });
    setRawText('');
    setIsModalOpen(true);
  };

  const handleAiParse = async () => {
    if (!rawText) return;
    setAiLoading(true);
    try {
      // 1. Temporarily store the giant risky raw string into the database to bypass all Cloudflare WAF POST limiters/monitors!
      const { data: dbLog, error: dbErr } = await supabase.from('webhook_logs').insert([{
        status: 'Processing',
        source: 'Magic Paste Engine',
        message: 'Awaiting AI extraction via Secure Tunnel',
        raw_data: { text: rawText }
      }]).select().single();

      if (dbErr || !dbLog) throw new Error("Failed to create secure tunnel via DB: " + (dbErr?.message || JSON.stringify(dbErr)));

      // 2. We only send the small harmless ID through Vercel. Cloudflare WAF sees nothing malicious!
      const resp = await fetch('/api/admin-magic-parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logId: dbLog.id })
      });
      
      const rawTextResponse = await resp.text();
      let data;
      try {
        data = JSON.parse(rawTextResponse);
      } catch (e) {
        throw new Error(`Server returned non-JSON response. This usually happens if you are running on Localhost instead of live Vercel, or if a Cloudflare Firewall blocked your pasted text! First 100 chars: ${rawTextResponse.substring(0, 100)}`);
      }

      if (data.success && data.parsed) {
        setCurrentRecord(prev => ({ ...prev, ...data.parsed }));
        setRawText(''); // clear on success so user knows it worked
      } else {
        alert("Failed to parse: " + (data.error || 'Unknown AI error'));
      }
    } catch (err: any) {
      alert("AI Error: " + err.message);
    } finally {
      setAiLoading(false);
    }
  };

  // Add new customer to the list
  const handleAddCustomer = async () => {
    if (!newCustomerName.trim()) return;
    
    if (customers.includes(newCustomerName.trim())) {
      alert('Customer already exists!');
      setSelectedCustomer(newCustomerName.trim());
      setShowNewCustomerInput(false);
      setNewCustomerName('');
      return;
    }
    
    setCustomers(prev => [...prev, newCustomerName.trim()].sort());
    setSelectedCustomer(newCustomerName.trim());
    setShowNewCustomerInput(false);
    setNewCustomerName('');
  };

  const handleGenerateQuote = async () => {
    if (!currentRecord.detail) return alert("Please paste the factory specs to generate a quote!");
    setQuoteLoading(true);
    setQuoteHtml('');
    setIsQuoteModalOpen(true);
    try {
      // 1. Store in DB tunnel to bypass Cloudflare WAF
      const { data: dbLog, error: dbErr } = await supabase.from('webhook_logs').insert([{
        status: 'Processing',
        source: 'Quote Generator',
        message: 'Awaiting AI translation',
        raw_data: { text: currentRecord.detail, customer: currentRecord.customer || 'Valued Client' }
      }]).select().single();
      if (dbErr || !dbLog) throw new Error("DB Tunnel Error: " + (dbErr?.message || "Unknown"));

      // 2. Call API — only returns compact JSON (fast, <8s, no timeout!)
      const resp = await fetch('/api/admin-generate-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logId: dbLog.id, markup: quoteMarkup })
      });

      const rawResp = await resp.text();
      let data: any;
      try { data = JSON.parse(rawResp); } catch {
        setQuoteHtml(`<div style="padding:2rem;font-family:sans-serif"><h2 style="color:#dc2626">⚠️ Server Timeout</h2><p>Cloudflare returned an HTML error page. Please wait 30 seconds and try again.</p><pre style="margin-top:1rem;background:#f3f4f6;padding:1rem;border-radius:8px;font-size:11px">${rawResp.substring(0, 200)}</pre></div>`);
        return;
      }
      if (!data.success || !data.extracted) throw new Error(data.error || "AI extraction failed");

      // 3. Build beautiful HTML entirely on the client (instant, no timeout!)
      const { extracted, customerName } = data;
      const RMB_TO_USD = 6.9;
      const AIR_PER_KG = 15;
      const SEA_PER_KG = 5;
      const today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

      // Handle both old single object format and new array format for backward compatibility
      const itemsToRender = Array.isArray(extracted) ? extracted : [extracted];

      // Debug: Log the extracted data to verify structure
      console.log('Quote Generator - Extracted Data:', extracted);
      console.log('Quote Generator - Items to render:', itemsToRender);
      
      const sectionsHtml = itemsToRender.map((item: any, idx: number) => {
        console.log(`Processing item ${idx}:`, item);
        const rows = (item.pricing || []).map((tier: any) => {
          const unitUsd = (tier.unit_rmb / RMB_TO_USD) * parseFloat(quoteMarkup);
          const exwTotal = Math.ceil(unitUsd * tier.qty);
          const weight = parseFloat(tier.weight_kg) || 0;
          
          const hasWeight = weight > 0;
          const airTotal = hasWeight ? exwTotal + Math.ceil(weight * AIR_PER_KG) : 0;
          const seaTotal = hasWeight ? exwTotal + Math.ceil(weight * SEA_PER_KG) : 0;
          
          const fUnit = (v: number) => `$${v.toFixed(3)}`;
          const fC = (v: number) => `$${v.toLocaleString()}`;
          
          console.log(`Tier pricing for qty ${tier.qty}:`, { unitUsd, exwTotal, weight, airTotal, seaTotal });
          
          return `<tr>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;font-weight:700">${tier.qty.toLocaleString()}</td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right">${fUnit(unitUsd)}/ea<br><span style="font-size:11px;color:#64748b">Total: ${fC(exwTotal)}</span></td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right;background:#faf5ff;color:#7c3aed;font-weight:700">
              ${hasWeight ? `${fUnit(airTotal/tier.qty)}/ea<br><span style="font-size:11px;font-weight:400">(${fC(airTotal)})</span>` : 'N/A: No Weight Provided'}
            </td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right;background:#eff6ff;color:#1d4ed8;font-weight:700">
              ${hasWeight ? `${fUnit(seaTotal/tier.qty)}/ea<br><span style="font-size:11px;font-weight:400">(${fC(seaTotal)})</span>` : 'N/A: No Weight Provided'}
            </td>
            <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;text-align:right;color:#94a3b8">${hasWeight ? `${Math.ceil(weight)} kg` : 'N/A'}</td>
          </tr>`;
        }).join('');

        const plateFeeUsd = item.plate_fee_rmb ? Math.ceil((item.plate_fee_rmb / RMB_TO_USD) * parseFloat(quoteMarkup)) : 0;
        console.log(`Plate fee for item ${idx}:`, { rmb: item.plate_fee_rmb, usd: plateFeeUsd });

        return `
        <div style="page-break-inside: avoid; margin-bottom: 40px;">
          <div style="background:#f8fafc; padding:10px 15px; border-radius:8px; margin-bottom:15px; border:1px solid #e2e8f0; font-size:10px; color:#64748b; text-align:right">
            Settings: RMB/USD Rate: 6.9 | Markup: ${quoteMarkup}x | Auto-Rounding: Enabled
          </div>
          <div class="section">
            <div class="section-title">Item ${idx+1}: Product Specifications</div>
            <div class="specs">
              <div class="spec-item"><label>Product Type</label><span>${item.product_name || '—'}</span></div>
              <div class="spec-item"><label>Dimensions</label><span>${item.size || '—'}</span></div>
              <div class="spec-item"><label>Material Structure</label><span>${item.material || '—'}</span></div>
              <div class="spec-item"><label>Key Features</label><span>${item.features || '—'}</span></div>
              ${plateFeeUsd > 0 ? `<div class="spec-item" style="grid-column: span 2; margin-top:8px; padding-top:8px; border-top:1px dashed #e2e8f0"><label>Plate Cylinders Fee (Total)</label><span style="color:#d97706">$${plateFeeUsd} USD</span></div>` : ''}
            </div>
            ${item.notes ? `<div style="margin-top:16px;padding:12px;background:#fef9c3;border-radius:8px;font-size:12px;color:#854d0e"><strong>⚠️ Note:</strong> ${item.notes}</div>` : ''}
          </div>

          <div style="background:#f8fafc;border-radius:12px;overflow:hidden;">
            <div style="background:#1e293b;padding:12px 24px;display:flex;justify-content:space-between;align-items:center">
              <span style="color:#fff;font-weight:700;font-size:13px">Pricing Tiers (USD - Total Rounded)</span>
              <span style="color:#94a3b8;font-size:10px">Incoterm: DDP Handle-to-Door</span>
            </div>
            <table><thead><tr>
              <th>Quantity</th>
              <th style="text-align:right">EXW Unit</th>
              <th style="text-align:right;background:#3b0764;color:#e9d5ff">✈ Air DDP</th>
              <th style="text-align:right;background:#1e3a5f;color:#bfdbfe">🚢 Sea DDP</th>
              <th style="text-align:right">Weight</th>
            </tr></thead><tbody>${rows}</tbody></table>
          </div>
        </div>`;
      }).join('');

      const fullHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; background: white; -webkit-print-color-adjust: exact; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #1e293b; padding-bottom: 20px; margin-bottom: 30px; }
            .logo-section { display: flex; gap: 20px; align-items: center; }
            .logo-text { font-size: 20px; font-weight: 800; color: #0f172a; }
            .company-name { font-size: 24px; font-weight: 800; color: #0f172a; }
            .contact-info { text-align: right; font-size: 11px; color: #64748b; line-height: 1.4; }
            .quote-title { text-align: center; font-size: 28px; font-weight: 900; color: #1e293b; margin: 40px 0; letter-spacing: -0.025em; text-transform: uppercase; }
            .client-info { background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 30px; display: flex; justify-content: space-between; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 14px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 12px; letter-spacing: 0.05em; border-left: 4px solid #3b82f6; padding-left: 12px; }
            .specs { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; }
            .spec-item label { display: block; font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 2px; }
            .spec-item span { font-size: 13px; font-weight: 600; color: #334155; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; table-layout: fixed; }
            th { padding: 12px 16px; font-weight: 800; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; text-align: left; font-size: 10px; }
            td { vertical-align: middle; }
            .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 10px; color: #94a3b8; text-align: center; }
            @media print { body { padding: 0; } .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-section">
              <div style="display:flex;flex-direction:column;gap:4px">
                <div class="logo-text" style="color:#1e293b">AchievePack</div>
                <div class="logo-text" style="color:#059669;font-size:16px">Pouch.eco</div>
              </div>
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
      setQuoteHtml(fullHtml);
    } catch (e: any) {
      setQuoteHtml(`<div style="padding:2rem;font-family:sans-serif;color:#dc2626"><h2>⚠️ Error</h2><p>${e.message}</p></div>`);
    } finally {
      setQuoteLoading(false);
    }
  };

  // RFQ Maker - Convert customer inquiry to Chinese vendor RFQ
  const handleGenerateRFQ = async () => {
    if (!rfqCustomerText.trim()) return alert("Please enter or paste the customer's RFQ inquiry first!");
    
    setRfqLoading(true);
    try {
      // Use DB tunnel to bypass Cloudflare WAF
      const { data: dbLog, error: dbErr } = await supabase.from('webhook_logs').insert([{
        status: 'Processing',
        source: 'RFQ Maker',
        message: 'Converting customer RFQ to Chinese vendor format',
        raw_data: { text: rfqCustomerText }
      }]).select().single();
      
      if (dbErr || !dbLog) throw new Error("DB Tunnel Error: " + (dbErr?.message || "Unknown"));

      // Call AI to convert to professional Chinese RFQ
      const resp = await fetch('/api/admin-convert-rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logId: dbLog.id })
      });

      const rawResp = await resp.text();
      let data: any;
      try {
        data = JSON.parse(rawResp);
      } catch {
        throw new Error(`Server returned non-JSON response. Raw: ${rawResp.substring(0, 200)}`);
      }

      if (!resp.ok) throw new Error(data.error || "AI conversion failed");

      // Set the converted Chinese RFQ
      setRfqChineseOutput(data.chineseRFQ || data.rfq || 'Conversion successful but no output generated');
    } catch (e: any) {
      console.error('RFQ conversion error:', e);
      alert("Failed to generate RFQ: " + e.message);
    } finally {
      setRfqLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
      
    setUploadingFile(true);
    try {
      const fileExt = file.name.split('.').pop() || 'tmp';
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
      const { data, error } = await supabase.storage.from('daily_reports_files').upload(fileName, file, { upsert: true });
      if (error) throw error;
  
      const { data: { publicUrl } } = supabase.storage.from('daily_reports_files').getPublicUrl(fileName);
  
      const newAttachment = { name: file.name, url: publicUrl, type: fileExt, docCategory: selectedDocCategory };
  
      setCurrentRecord(prev => ({
        ...prev,
        attachments: [...(prev.attachments || []), newAttachment]
      }));
  
    } catch (err: any) {
      alert("檔案上傳失敗：" + err.message);
    } finally {
      setUploadingFile(false);
      event.target.value = '';
    }
  };
  
  // Auto-Extract AI for Vendor Quote Upload (reuse same logic as Packing List)
  const handleQuoteFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
  
    // Validate file size (max 3MB to avoid Vercel timeout - stricter than before)
    if (file.size > 3 * 1024 * 1024) {
      alert("File is too large. Please upload files smaller than 3MB to avoid server timeout. For larger files, please manually copy the text content instead.");
      return;
    }
  
    if (!file.name.match(/\.(xls|xlsx|csv|pdf|png|jpg|jpeg)$/i)) {
      alert("Unsupported file format. Only Excel, CSV, PDF, and Images are currently supported for AI auto-extraction.");
      return;
    }
  
    setQuoteLoading(true);
    try {
      const isImage = file.name.match(/\.(png|jpg|jpeg)$/i);
      const isPdf = file.name.match(/\.(pdf)$/i);
        
      let payload: any = {};
  
      if (isImage || isPdf) {
        const reader = new FileReader();
        await new Promise((resolve, reject) => {
          reader.onload = resolve;
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        let base64Data = reader.result as string;
          
        if (isImage) {
          // Aggressive image compression to avoid Vercel 4.5MB limit
          const img = new Image();
          img.src = base64Data;
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200; // Reduced from 1600
          const MAX_HEIGHT = 1200; // Reduced from 1600
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
          base64Data = canvas.toDataURL('image/jpeg', 0.7); // 70% quality (reduced from 80%)
          
          // Check final size
          const estimatedSize = base64Data.length * 0.75; // Base64 is ~4/3 of original
          console.log(`Compressed image size: ~${(estimatedSize / 1024 / 1024).toFixed(2)}MB`);
          
          if (estimatedSize > 4 * 1024 * 1024) {
            throw new Error("Even after compression, image is too large (>4MB). Please use a smaller image or manually paste the text.");
          }
          
          payload.imageBase64 = base64Data;
        } else {
          // Parse PDF locally
          // @ts-ignore
          const pdfjsLib = await import('pdfjs-dist');
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            
          const binaryString = window.atob(base64Data.split(',')[1]);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          const pdfDoc = await pdfjsLib.getDocument({ data: bytes }).promise;
          let fullText = '';
          // Only parse first 2 pages (reduced from 3)
          const maxPages = Math.min(pdfDoc.numPages, 2);
          for (let i = 1; i <= maxPages; i++) {
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
          
        let rawTextDump = '';
        // Only process first sheet to avoid timeout
        const firstSheet = workbook.SheetNames[0];
        if (firstSheet) {
          rawTextDump += `\n--- SHEET ${firstSheet} ---\n`;
          rawTextDump += XLSX.utils.sheet_to_csv(workbook.Sheets[firstSheet]);
        }
        payload.text = rawTextDump;
      }
  
      console.log('Sending payload to API:', {
        hasImage: !!payload.imageBase64,
        hasText: !!payload.text,
        imageSizeMB: payload.imageBase64 ? (payload.imageBase64.length * 0.75 / 1024 / 1024).toFixed(2) : 'N/A',
        textLength: payload.text ? payload.text.length : 'N/A'
      });
  
      // Pass the generated payload to Edge Function
      const resp = await fetch('/api/admin-parse-packing-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
  
      const rawText = await resp.text();
      console.log('API Response status:', resp.status, 'Raw response preview:', rawText.substring(0, 200));
      
      let data: any;
      try {
        data = JSON.parse(rawText);
      } catch (e) {
        console.error('Server response was not JSON:', rawText.substring(0, 500));
        if (rawText.startsWith('<!DOCTYPE') || rawText.startsWith('<html')) {
          throw new Error("Server returned an HTML error page (likely Vercel timeout or Cloudflare block). Please try a much smaller file (<2MB) or manually paste the text content.");
        }
        throw new Error(`Server error (not JSON). Most likely payload too large or backend timeout. Please try a smaller file (<2MB) or simpler format.`);
      }
  
      if (!resp.ok) throw new Error(data.error || 'AI Parsing failed');
        
      // Extract text from parsed items and populate the detail field
      if (data.items && Array.isArray(data.items)) {
        const extractedText = data.items.map((item: any) => {
          return `${item.name || 'Detected Item'}\n${item.details || ''}\nCTN: ${item.ctn || 1}, KG/CTN: ${item.kgCtn || 0}\n`;
        }).join('\n---\n\n');
          
        setCurrentRecord(prev => ({ ...prev, detail: extractedText }));
        alert(`✅ Successfully extracted ${data.items.length} items from your file!`);
      } else {
        alert("⚠️ No items were extracted. The file may be empty or in an unsupported format. Please try a different file or manually paste the text.");
      }
    } catch (err: any) {
      console.error(err);
      alert("❌ Error parsing vendor quote: " + err.message);
    } finally {
      setQuoteLoading(false);
      event.target.value = '';
    }
  };

  const handleSave = async () => {
    if (!currentRecord.customer || !currentRecord.status) return;
    setLoading(true);
    try {
      if (editMode && currentRecord.id) {
        await supabase.from('daily_reports').update({
           customer: currentRecord.customer, status: currentRecord.status, category: currentRecord.category, detail: currentRecord.detail, attachments: currentRecord.attachments || []
        }).eq('id', currentRecord.id);
      } else {
        await supabase.from('daily_reports').insert([{
           customer: currentRecord.customer, status: currentRecord.status, category: currentRecord.category, detail: currentRecord.detail, attachments: currentRecord.attachments || [], report_date: currentRecord.report_date || new Date().toISOString().split('T')[0]
        }]);
      }
      await fetchData();
      setIsModalOpen(false);
    } catch (err: any) {
      alert("儲存失敗: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (report: DailyReport) => {
    // Optimistic UI Update -> immediately remove from view
    setReports(prev => prev.filter(r => r.id !== report.id));
    
    // Execute DB Delete
    await supabase.from('daily_reports').delete().eq('id', report.id);
    
    // Show Undo Toast
    setLastDeleted(report);
    if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);
    undoTimeoutRef.current = setTimeout(() => {
      setLastDeleted(null);
    }, 10000); // hide after 10 seconds
  };

  const handleUndo = async () => {
    if (!lastDeleted) return;
    const recordToRestore = { ...lastDeleted };
    setLastDeleted(null);
    if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);

    // Re-insert exact record payload including originally generated UUID
    const { error } = await supabase.from('daily_reports').insert([recordToRestore]);
    if (error) {
      alert("Undo failed, could not restore: " + error.message);
    } else {
      await fetchData();
    }
  };

  const renderDocBadge = (docCat: string = 'Other') => {
    const colors: Record<string, string> = {
      'Quote': 'bg-purple-100 text-purple-700 border-purple-200',
      'Invoice': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Packing List': 'bg-amber-100 text-amber-700 border-amber-200',
      'Artwork': 'bg-pink-100 text-pink-700 border-pink-200',
      'Other': 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${colors[docCat] || colors['Other']} uppercase ml-1`}>{docCat}</span>;
  };

  const [sortBy, setSortBy] = useState<'Newest'|'Oldest'>('Newest');

  const filteredReports = useMemo(() => {
    let result = reports.filter(report => {
      const matchesSearch = report.customer.toLowerCase().includes(searchTerm.toLowerCase()) || (report.detail || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || report.category === filterCategory;
      const matchesCustomer = !selectedCustomer || report.customer === selectedCustomer;
      return matchesSearch && matchesCategory && matchesCustomer;
    });

    result.sort((a, b) => {
      const dateA = new Date(a.created_at || a.report_date || 0).getTime();
      const dateB = new Date(b.created_at || b.report_date || 0).getTime();
      return sortBy === 'Oldest' ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [reports, searchTerm, filterCategory, sortBy, selectedCustomer]);

  const getDaysAgo = (dateStr?: string) => {
    if (!dateStr) return null;
    const diff = new Date().getTime() - new Date(dateStr).getTime();
    const days = Math.floor(diff / (1000 * 3600 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} Days Ago`;
  };

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(() => { fetchData() }, 10000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6">
        <Helmet><title>機密登入</title></Helmet>
        <div className="mx-auto w-full max-w-md bg-white py-12 px-10 shadow-2xl rounded-3xl border border-gray-100 text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center border-[6px] border-white shadow-lg mb-6">
            <LockKeyhole className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">SECURE DATALINK</h2>
          <form className="space-y-6" onSubmit={handleVerifyPin}>
            <input type="password" autoFocus required value={pin} onChange={(e) => setPin(e.target.value)} className="block w-full rounded-xl border-gray-300 py-4 text-center text-4xl tracking-widest font-mono shadow-sm bg-gray-50 focus:bg-white focus:ring-4 focus:ring-blue-500" placeholder="****" />
            <button type="submit" disabled={loading || !pin} className="w-full flex justify-center py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-black shadow-lg">
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'UNLOCK SYSTEM'}
            </button>
          </form>
          {errorMsg && <p className="mt-4 text-red-500 font-bold">{errorMsg}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <Helmet><title>Control Center | Achieve Pack</title></Helmet>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl mb-8 relative overflow-hidden flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center">
          <div className="relative z-10 flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3 flex items-center gap-3"><Activity className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" /> Control Center</h1>
            <div className="flex flex-wrap gap-2 items-center">
              <button onClick={fetchData} className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-200 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-500/30 hover:bg-emerald-500/40 transition active:scale-95 shadow-sm">
                <RotateCcw className="h-3.5 w-3.5" /> Sync Data
              </button>
              
              {/* PaddleOCR Quick Access */}
              <a 
                href="https://aistudio.baidu.com/paddleocr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-purple-500/20 text-purple-200 px-3 py-1.5 rounded-full text-sm font-semibold border border-purple-500/30 hover:bg-purple-500/40 transition active:scale-95 shadow-sm"
                title="Open PaddleOCR for document extraction"
              >
                <FileText className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">PaddleOCR</span>
                <span className="xs:hidden">OCR</span>
              </a>
            </div>
          </div>
          <button onClick={handleLogout} className="mt-2 sm:mt-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold relative z-10 transition active:scale-95 whitespace-nowrap">
            <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Exit</span>
          </button>
        </div>

        {/* Customer/Project Selector - Global for all tabs */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <label className="font-bold text-indigo-900 whitespace-nowrap text-sm sm:text-base">Project / Customer:</label>
            </div>
            
            {showNewCustomerInput ? (
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  value={newCustomerName}
                  onChange={(e) => setNewCustomerName(e.target.value)}
                  placeholder="Enter customer name..."
                  className="flex-1 min-w-0 rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 text-sm py-2 px-3"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddCustomer();
                    if (e.key === 'Escape') {
                      setShowNewCustomerInput(false);
                      setNewCustomerName('');
                    }
                  }}
                />
                <button
                  onClick={handleAddCustomer}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition flex-shrink-0"
                >
                  <Check className="w-4 h-4"/>
                </button>
                <button
                  onClick={() => {
                    setShowNewCustomerInput(false);
                    setNewCustomerName('');
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm transition flex-shrink-0"
                >
                  <X className="w-4 h-4"/>
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <select
                  value={selectedCustomer}
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                  className="flex-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 font-semibold text-sm py-2.5 cursor-pointer"
                >
                  <option value="">— All Projects —</option>
                  {customers.map(customer => (
                    <option key={customer} value={customer}>{customer}</option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowNewCustomerInput(true)}
                    className="flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition whitespace-nowrap flex-shrink-0"
                  >
                    <Plus className="w-4 h-4"/> New
                  </button>
                  {selectedCustomer && (
                    <button
                      onClick={() => setSelectedCustomer('')}
                      className="text-xs text-gray-600 hover:text-gray-900 underline px-2 py-2 transition flex-shrink-0"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {selectedCustomer && (
            <div className="mt-3 flex items-center gap-2 text-xs text-indigo-700 bg-indigo-100/50 rounded-lg px-3 py-2">
              <Activity className="w-3 h-3 flex-shrink-0" />
              <span>Filtering by: <strong>{selectedCustomer}</strong> — <span className="font-mono bg-indigo-200/50 px-2 py-0.5 rounded">{reports.filter(r => r.customer === selectedCustomer).length}</span> records found</span>
            </div>
          )}
        </div>

        {/* Tab Switcher - Mobile Optimized */}
        <div className="flex gap-1.5 sm:gap-4 mb-6 border-b border-gray-200 pb-2 overflow-x-auto scrollbar-hide -mx-2 px-2">
          <button onClick={() => setActiveTab('reports')} className={`pb-2 px-2 sm:px-4 font-bold flex gap-1.5 sm:gap-2 items-center text-[11px] sm:text-lg whitespace-nowrap flex-shrink-0 ${activeTab === 'reports' ? 'border-b-4 border-blue-600 text-blue-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <ClipboardList className="w-3.5 h-3.5 sm:w-5 sm:h-5"/>
            <span className="hidden xs:inline">Daily Reports</span>
            <span className="xs:hidden">Reports</span>
          </button>
          <button onClick={() => setActiveTab('logs')} className={`pb-2 px-2 sm:px-4 font-bold flex gap-1.5 sm:gap-2 items-center text-[11px] sm:text-lg whitespace-nowrap flex-shrink-0 ${activeTab === 'logs' ? 'border-b-4 border-purple-600 text-purple-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <History className="w-3.5 h-3.5 sm:w-5 sm:h-5"/>
            <span className="hidden xs:inline">Audit Logs</span>
            <span className="xs:hidden">Logs</span>
          </button>
          <button onClick={() => setActiveTab('rfq')} className={`pb-2 px-2 sm:px-4 font-bold flex gap-1.5 sm:gap-2 items-center text-[11px] sm:text-lg whitespace-nowrap flex-shrink-0 ${activeTab === 'rfq' ? 'border-b-4 border-indigo-600 text-indigo-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <FileText className="w-3.5 h-3.5 sm:w-5 sm:h-5"/>
            <span className="hidden xs:inline">RFQ Maker</span>
            <span className="xs:hidden">RFQ</span>
          </button>
          <button onClick={() => setActiveTab('quote')} className={`pb-2 px-2 sm:px-4 font-bold flex gap-1.5 sm:gap-2 items-center text-[11px] sm:text-lg whitespace-nowrap flex-shrink-0 ${activeTab === 'quote' ? 'border-b-4 border-emerald-600 text-emerald-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <FileText className="w-3.5 h-3.5 sm:w-5 sm:h-5"/>
            <span className="hidden xs:inline">Quote Gen</span>
            <span className="xs:hidden">Quote</span>
          </button>
          <button onClick={() => setActiveTab('packing')} className={`pb-2 px-2 sm:px-4 font-bold flex gap-1.5 sm:gap-2 items-center text-[11px] sm:text-lg whitespace-nowrap flex-shrink-0 ${activeTab === 'packing' ? 'border-b-4 border-amber-600 text-amber-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <Package className="w-3.5 h-3.5 sm:w-5 sm:h-5"/>
            <span className="hidden xs:inline">Packing List</span>
            <span className="xs:hidden">Packing</span>
          </button>
        </div>

        {/* Tab Content: Packing List */}
        {activeTab === 'packing' && (
          <PackingListTab />
        )}

        {/* Tab Content: Daily Reports */}
        {activeTab === 'reports' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-6 flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                <input type="text" className="pl-10 block w-full rounded-xl py-3 px-4 border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500" placeholder="Search customer, project, tracking #..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 sm:pb-0 items-center">
                <select className="border-2 border-gray-200 text-sm font-bold bg-white text-gray-700 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-blue-500" value={sortBy} onChange={(e) => setSortBy(e.target.value as 'Newest'|'Oldest')}>
                  <option value="Newest">Sorting: Newest</option>
                  <option value="Oldest">Follow-Up (Oldest)</option>
                </select>
                {Object.keys(CATEGORY_MAP).map(cat => (
                  <button key={cat} onClick={() => setFilterCategory(cat)} className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap border-2 transition ${filterCategory === cat ? 'bg-gray-900 text-white border-gray-900 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}>
                    {CATEGORY_MAP[cat]}
                  </button>
                ))}

                <button onClick={openNewModal} className="ml-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-bold text-white shadow-md transition">
                  <Plus className="h-5 w-5" /> Add Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50/80">
                    <tr><th className="px-6 py-4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">Customer / Project</th><th className="px-6 py-4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">Date</th><th className="px-6 py-4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">Tags</th><th className="px-6 py-4 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">Details & Attached Docs</th><th className="px-6 py-4 text-right text-xs font-extrabold text-gray-500 uppercase tracking-wider">Action</th></tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredReports.map((report) => (
                      <tr key={report.id} className="hover:bg-blue-50/20 transition group">
                        <td className="px-6 py-5 font-bold text-gray-900 max-w-[220px]">
                          <div className="truncate">{report.customer.replace('Email: ', '')}</div>
                          <span className={`inline-block mt-2 px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${STATUS_COLORS[report.status] || 'bg-gray-100 border-gray-200 text-gray-800'}`}>{report.status}</span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-500">
                          <div>{report.report_date}</div>
                          <div className="mt-1"><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getDaysAgo(report.report_date)?.includes('Days') ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>{getDaysAgo(report.report_date)}</span></div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap"><span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wide">{report.category}</span></td>
                        <td className="px-6 py-5 text-sm text-gray-700 min-w-[300px]">
                          <div className="mb-3 leading-relaxed opacity-90">{report.detail}</div>
                          {report.attachments && report.attachments.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {report.attachments.map((file, idx) => (
                                <a key={idx} href={file.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold hover:border-blue-300 hover:shadow-sm hover:text-blue-700 transition">
                                  {file.type==='pdf' ? <FileText className="w-3.5 h-3.5"/> : <FileIcon className="w-3.5 h-3.5"/>}
                                  <span className="truncate max-w-[120px]">{file.name}</span>
                                  {renderDocBadge(file.docCategory)}
                                </a>
                              ))}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-right">
                          <button onClick={() => openEditModal(report)} className="text-gray-400 hover:text-blue-600 p-2 bg-white rounded-lg border border-transparent hover:border-blue-100 shadow-sm opacity-0 group-hover:opacity-100 transition mr-2"><Edit3 className="w-4 h-4" /></button>
                          <button onClick={() => handleDelete(report)} className="text-gray-400 hover:text-red-600 p-2 bg-white rounded-lg border border-transparent hover:border-red-100 shadow-sm opacity-0 group-hover:opacity-100 transition"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-100">
                {filteredReports.map((report) => (
                  <div key={report.id} className="p-4 hover:bg-blue-50/20 transition">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-2">{report.customer.replace('Email: ', '')}</h3>
                        <span className={`inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${STATUS_COLORS[report.status] || 'bg-gray-100 border-gray-200 text-gray-800'}`}>
                          {report.status}
                        </span>
                      </div>
                      <div className="flex gap-2 ml-2">
                        <button onClick={() => openEditModal(report)} className="text-gray-400 hover:text-blue-600 p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(report)} className="text-gray-400 hover:text-red-600 p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3 text-xs">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{report.report_date}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full font-bold ${getDaysAgo(report.report_date)?.includes('Days') ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'}`}>
                        {getDaysAgo(report.report_date)}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wide">
                        {report.category}
                      </span>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm text-gray-700 leading-relaxed opacity-90 line-clamp-3">{report.detail}</p>
                    </div>

                    {report.attachments && report.attachments.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {report.attachments.map((file, idx) => (
                          <a key={idx} href={file.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-white rounded-lg text-[10px] uppercase font-bold hover:bg-gray-700 transition">
                            <LinkIcon className="w-3 h-3" />
                            <span className="max-w-[120px] truncate">{file.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Logs */}
        {activeTab === 'logs' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-2">
              {logs
                .filter(log => !selectedCustomer || 
                  (log.raw_data?.customer_matched && log.raw_data.customer_matched.includes(selectedCustomer)) ||
                  (log.raw_data?.text && log.raw_data.text.toLowerCase().includes(selectedCustomer.toLowerCase()))
                )
                .map((log, i) => (
                <div key={log.id} className={`p-4 border-b border-gray-100 last:border-0 ${i%2===0?'bg-transparent':'bg-gray-50/50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {log.status === 'Success' ? <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div> : <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>}
                      <span className="font-bold text-gray-900 text-sm tracking-wide">{log.source}</span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{new Date(log.created_at).toLocaleString()}</span>
                    </div>
                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">ID: {log.id.split('-')[0]}</span>
                  </div>
                  <div className="ml-5 pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-semibold text-blue-700 mb-1">{log.message}</p>
                    {log.raw_data?.subject && <p className="text-sm text-gray-800 font-medium">Topic: "{log.raw_data.subject}"</p>}
                    {log.raw_data?.customer_matched && <p className="text-xs text-gray-500 mt-1 mb-2">Matched to: <span className="font-mono bg-amber-100 text-amber-800 px-1 py-0.5 rounded">[{log.raw_data.customer_matched}]</span></p>}
                    
                    {log.raw_data?.files_attached?.length > 0 && (
                      <div className="mt-3 flex gap-2">
                        {log.raw_data.files_attached.map((f: any, idx: number) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-white rounded text-[10px] uppercase font-bold"><UploadCloud className="w-3 h-3"/> Attached: {f.name} {renderDocBadge(f.category)}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: RFQ Maker */}
        {activeTab === 'rfq' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 gap-6">
              {/* Left: Input Panel */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col gap-5">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2.5 bg-indigo-100 rounded-xl flex-shrink-0"><FileText className="w-6 h-6 text-indigo-600"/></div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-extrabold text-gray-900">🇨🇳 RFQ Maker for Chinese Vendors</h2>
                    <p className="text-xs sm:text-sm text-gray-500 truncate sm:truncate">Paste customer inquiry → AI converts to professional Chinese RFQ</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Customer RFQ (English)</label>
                  <textarea rows={12} value={rfqCustomerText} onChange={e => setRfqCustomerText(e.target.value)}
                    className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 text-sm font-mono leading-relaxed"
                    placeholder={"Paste customer's RFQ here...\n\nExample:\nRecyclable Zip Doypack Pouch\n• Materials: PE / EVOH-PE\n• Thickness: 130 µm\n• External dimensions: 100 × 150 mm + 30 mm gusset + 30 mm above the zip\n• Sealing width: 5 mm\n• Printing: 2 sides / 4 colors\n• Number of designs: 1"} />
                </div>

                <button onClick={handleGenerateRFQ} disabled={rfqLoading || !rfqCustomerText?.trim()}
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-extrabold shadow-lg transition active:scale-95">
                  {rfqLoading ? <Loader2 className="w-5 h-5 animate-spin"/> : <FileText className="w-5 h-5"/>}
                  {rfqLoading ? 'Converting to Chinese...' : 'Generate Chinese RFQ'}
                </button>
              </div>

              {/* Right: Output Panel */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col min-h-[500px] sm:min-h-[600px]">
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-gray-50">
                  <span className="font-extrabold text-gray-800 text-sm sm:text-base truncate">📄 Chinese RFQ Preview</span>
                  <button onClick={() => {
                    if (rfqChineseOutput) {
                      navigator.clipboard.writeText(rfqChineseOutput);
                      alert('Copied to clipboard!');
                    }
                  }} disabled={rfqLoading || !rfqChineseOutput}
                    className="bg-gray-900 hover:bg-black text-white px-3 sm:px-5 py-2 rounded-lg font-bold text-xs sm:text-sm shadow transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 flex-shrink-0">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4"/> <span className="hidden xs:inline">Copy Text</span>
                  </button>
                </div>
                <div className="relative flex-1 bg-gray-100 flex items-center justify-center p-6">
                  {rfqLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
                      <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4"/>
                      <p className="font-bold text-gray-600 text-sm">AI is converting your RFQ to professional Chinese format...</p>
                    </div>
                  )}
                  {!rfqChineseOutput && !rfqLoading && (
                    <div className="text-center text-gray-400 p-10">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-20"/>
                      <p className="font-bold text-lg">No RFQ generated yet</p>
                      <p className="text-sm mt-1">Paste customer inquiry on the left and click Generate</p>
                    </div>
                  )}
                  {rfqChineseOutput && (
                    <textarea 
                      value={rfqChineseOutput}
                      onChange={(e) => setRfqChineseOutput(e.target.value)}
                      className="w-full h-full p-3 sm:p-4 border-0 bg-white rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm font-mono leading-relaxed"
                      style={{ minHeight: '400px' }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Quote Generator */}
        {activeTab === 'quote' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 gap-6">
              {/* Left: Input Panel */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col gap-5">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2.5 bg-emerald-100 rounded-xl flex-shrink-0"><FileText className="w-6 h-6 text-emerald-600"/></div>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-extrabold text-gray-900">AI Quote Generator</h2>
                    <p className="text-xs sm:text-sm text-gray-500 truncate sm:truncate">Paste factory specs → get a professional English client PDF</p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm font-bold text-emerald-700 text-[10px] sm:text-xs whitespace-nowrap">1 USD = 6.9 RMB</div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-emerald-800 uppercase tracking-tight">Active: Markup {quoteMarkup}x + Rounding</div>
                  </div>
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500 flex-shrink-0" />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Client / Customer Name</label>
                  <input type="text" value={currentRecord.customer || ''} onChange={e => setCurrentRecord({...currentRecord, customer: e.target.value})}
                    className="w-full border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 bg-gray-50 focus:bg-white transition"
                    placeholder="e.g. Justine Heaphy / ABC Foods Ltd" />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Factory Raw Quote (Chinese RMB specs)</label>
                  <textarea rows={10} value={currentRecord.detail || ''} onChange={e => setCurrentRecord({...currentRecord, detail: e.target.value})}
                    className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm font-mono leading-relaxed"
                    placeholder={"Paste raw factory cost sheet here...\nE.g.:\n袋型：三边封\n材质结构：PET-12/VMPET/EVOH\n数量：400 单价：￥3.603 重量：2.48kg\n数量：2000 单价：￥1.223 重量：8.57kg"} />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Auto-Extract AI (Upload Vendor Quote)</label>
                  <div className="border-2 border-dashed border-emerald-300 bg-emerald-50 rounded-2xl p-6 flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition cursor-pointer relative overflow-hidden">
                    <input type="file" onChange={handleQuoteFileUpload} accept=".xlsx,.xls,.csv,.pdf,.png,.jpg,.jpeg" className="absolute inset-0 opacity-0 cursor-pointer" />
                    {quoteLoading ? (
                      <div className="flex flex-col items-center">
                        <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 mb-2 animate-spin" />
                        <span className="text-xs sm:text-sm font-bold text-center">AI is analyzing vendor quote...</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center">
                        <FileIcon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-emerald-500" />
                        <span className="text-xs sm:text-sm font-bold">Drop Vendor Quote File Here to Auto-Extract</span>
                        <span className="text-[10px] sm:text-xs text-emerald-500 mt-1">.xls, .csv, .pdf, .png, .jpg supported</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3 items-stretch sm:items-center p-3 sm:p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <div className="flex-1 w-full">
                    <label className="block text-xs font-extrabold text-emerald-800 mb-1">Client Price Markup</label>
                    <select className="w-full border border-emerald-200 bg-white rounded-lg p-2 text-sm font-bold text-gray-800 cursor-pointer focus:ring-2 focus:ring-emerald-400"
                      value={quoteMarkup} onChange={e => setQuoteMarkup(e.target.value)}>
                      <option value="1.3">1.3x — 30% Profit</option>
                      <option value="1.5">1.5x — 50% Profit</option>
                      <option value="1.6">1.6x — 60% Profit</option>
                      <option value="1.8">1.8x — 80% Profit</option>
                      <option value="2.0">2.0x — 100% Profit</option>
                      <option value="3.0">3.0x — 200% Profit</option>
                    </select>
                  </div>
                  <button onClick={handleGenerateQuote} disabled={quoteLoading || !currentRecord.detail?.trim()}
                    className="sm:self-end flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-extrabold shadow-lg transition active:scale-95">
                    {quoteLoading ? <Loader2 className="w-5 h-5 animate-spin"/> : <FileText className="w-5 h-5"/>}
                    {quoteLoading ? 'Generating...' : 'Generate Quote PDF'}
                  </button>
                </div>
              </div>

              {/* Right: Preview Panel */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col min-h-[600px]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <span className="font-extrabold text-gray-800">📄 Quote Preview</span>
                  <button onClick={() => {
                    const iframe = document.getElementById('quote-pdf-frame') as HTMLIFrameElement;
                    if (iframe?.contentWindow) { iframe.contentWindow.focus(); iframe.contentWindow.print(); }
                  }} disabled={quoteLoading || !quoteHtml || quoteHtml.includes('Error')}
                    className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg font-bold text-sm shadow transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2">
                    <FileText className="w-4 h-4"/> Export & Save as PDF
                  </button>
                </div>
                <div className="relative flex-1 bg-gray-100 flex items-center justify-center">
                  {quoteLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
                      <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mb-4"/>
                      <p className="font-bold text-gray-600 text-sm">AI is translating specs & building PDF...</p>
                    </div>
                  )}
                  {!quoteHtml && !quoteLoading && (
                    <div className="text-center text-gray-400 p-10">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-20"/>
                      <p className="font-bold text-lg">No preview yet</p>
                      <p className="text-sm mt-1">Paste a factory quote on the left and click Generate</p>
                    </div>
                  )}
                  {quoteHtml && <iframe id="quote-pdf-frame" srcDoc={quoteHtml} className="w-full h-full border-none min-h-[550px]" />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                {editMode ? <Edit3 className="w-6 h-6 text-blue-600"/> : <Plus className="w-6 h-6 text-emerald-600"/>}
                {editMode ? 'Edit Project Log' : 'Create New Project'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition"><X className="w-6 h-6"/></button>
            </div>
            
            <div className="overflow-y-auto px-8 py-6 space-y-5">
                <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 mb-2">
                  <label className="flex text-sm font-extrabold text-purple-900 mb-2 items-center gap-1.5"><Sparkles className="w-4 h-4"/> Paste Chat/Email (AI will auto-fill)</label>
                  <textarea rows={2} className="w-full text-sm rounded-xl border-purple-200 p-3 bg-white focus:ring-2 focus:ring-purple-400" value={rawText} onChange={e=>setRawText(e.target.value)} placeholder="E.g. Customer approved the quote, please shift status to In Progress..."/>
                  <button type="button" onClick={handleAiParse} disabled={aiLoading || !rawText.trim()} className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-2.5 font-bold flex justify-center gap-2 items-center text-sm shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed">
                    {aiLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Sparkles className="w-4 h-4"/>}
                    {aiLoading ? 'Analyzing Context...' : 'Auto-Magic Parse'}
                  </button>
                </div>

              <div><label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Project / Client Name</label>
                <input type="text" className="w-full border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white transition" value={currentRecord.customer || ''} onChange={e=>setCurrentRecord({...currentRecord, customer: e.target.value})} /></div>
              
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Active Status</label>
                  <select className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 focus:bg-white cursor-pointer font-semibold" value={currentRecord.status || 'New'} onChange={e=>setCurrentRecord({...currentRecord, status: e.target.value})}>
                    {Object.keys(STATUS_COLORS).map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div><label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Category</label>
                  <select className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 focus:bg-white cursor-pointer font-semibold" value={currentRecord.category || 'Enquiries'} onChange={e=>setCurrentRecord({...currentRecord, category: e.target.value})}>
                    {Object.keys(CATEGORY_MAP).filter(k=>k!=='All').map(c=><option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Project Details & Notes</label>
                <textarea rows={4} className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500" value={currentRecord.detail || ''} onChange={e=>setCurrentRecord({...currentRecord, detail: e.target.value})} />
              </div>
              
              {/* Attachments UI */}
              <div className="mt-2 pt-5 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-xs uppercase font-extrabold text-gray-500">Master Documents</label>
                  <div className="flex gap-2 items-center">
                    <select className="text-xs border-gray-300 rounded-lg p-1.5 bg-gray-50 font-bold" value={selectedDocCategory} onChange={(e) => setSelectedDocCategory(e.target.value)}>
                      {DOC_TYPES.map(d=><option key={d} value={d}>{d}</option>)}
                    </select>
                    <label className="cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-black flex items-center gap-2 shadow-md transition text-xs">
                      {uploadingFile ? <Loader2 className="w-4 h-4 animate-spin"/> : <UploadCloud className="w-4 h-4"/>}
                      Upload Document
                      <input type="file" className="hidden" onChange={handleFileUpload} disabled={uploadingFile} />
                    </label>
                  </div>
                </div>
                {currentRecord.attachments && currentRecord.attachments.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentRecord.attachments.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white shadow-sm p-3 rounded-xl border border-gray-200 hover:border-blue-400 group transition">
                        <div className="flex flex-col truncate w-4/5">
                          <a href={file.url} target="_blank" rel="noreferrer" className="text-sm text-gray-800 font-bold hover:text-blue-600 truncate mb-1">{file.name}</a>
                          <div className="flex gap-1">{renderDocBadge(file.docCategory)}</div>
                        </div>
                        <button type="button" onClick={() => setCurrentRecord(p=>({...p, attachments: p.attachments?.filter((_,i)=>i!==idx)}))} className="text-gray-300 hover:text-red-500 p-1 bg-gray-50 rounded opacity-0 group-hover:opacity-100 transition"><Trash2 className="w-4 h-4"/></button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 flex flex-col items-center">
                    <ScrollText className="w-8 h-8 text-gray-300 mb-2"/>
                    <p className="text-sm text-gray-500 font-bold">No master documents uploaded yet</p>
                  </div>
                )}
              </div>
            </div>

            <div className="px-8 py-5 bg-gray-50 flex justify-end gap-3 rounded-b-3xl border-t border-gray-100">
              <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition">Cancel</button>
              <button disabled={loading} onClick={handleSave} className="flex gap-2 items-center px-8 py-2.5 text-sm font-extrabold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 disabled:opacity-50 transition hover:shadow-blue-500/20 active:scale-95">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5"/>} COMPILE RECORD
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Generator Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
            <div className="flex items-center justify-between px-8 py-5 bg-gray-50 border-b border-gray-200">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600"/> English Quote Preview
              </h3>
              <div className="flex gap-4 items-center">
                <button onClick={() => {
                  const iframe = document.getElementById('quote-pdf-frame') as HTMLIFrameElement;
                  if (iframe?.contentWindow) {
                    iframe.contentWindow.focus();
                    iframe.contentWindow.print();
                  }
                }} disabled={quoteLoading || !quoteHtml || quoteHtml.includes('Error')} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed">
                  Export & Save as PDF
                </button>
                <button onClick={() => setIsQuoteModalOpen(false)} className="text-gray-400 hover:bg-gray-200 p-2 rounded-full transition bg-white border border-gray-200"><X className="w-5 h-5"/></button>
              </div>
            </div>
            <div className="flex-1 bg-gray-300 relative overflow-hidden flex flex-col">
              {quoteLoading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10 backdrop-blur-sm">
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                  <p className="font-bold text-gray-600">Translating factory specs & compiling PDF layout...</p>
                </div>
              ) : null}
              {quoteHtml && (
                <iframe id="quote-pdf-frame" srcDoc={quoteHtml} className="w-full flex-1 border-none bg-white" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Undo Toast Notification */}
      {lastDeleted && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center justify-between gap-5 min-w-[320px]">
            <span className="text-sm font-medium flex gap-2 items-center text-gray-200">
              <Trash2 className="w-4 h-4 text-red-400"/>
              Deleted Record
            </span>
            <div className="flex items-center gap-3">
              <button onClick={handleUndo} className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-1.5 rounded-lg text-sm font-extrabold transition flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5"/> UNDO
              </button>
              <button type="button" onClick={() => setLastDeleted(null)} className="text-gray-400 hover:text-white p-1 rounded-full"><X className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
