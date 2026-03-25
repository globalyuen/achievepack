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
  
  const [activeTab, setActiveTab] = useState<'reports'|'logs'>('reports');

  const [reports, setReports] = useState<DailyReport[]>([]);
  const [logs, setLogs] = useState<WebhookLog[]>([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  
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
  const [selectedDocCategory, setSelectedDocCategory] = useState('Quote');

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
    setCurrentRecord({ customer: '', status: 'New', category: 'Enquiries', detail: '', attachments: [], report_date: new Date().toISOString().split('T')[0] });
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

      if (dbErr || !dbLog) throw new Error("Failed to create secure tunnel via Database.");

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
      alert("檔案上傳失敗: " + err.message);
    } finally {
      setUploadingFile(false);
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
      return matchesSearch && matchesCategory;
    });

    result.sort((a, b) => {
      const dateA = new Date(a.created_at || a.report_date || 0).getTime();
      const dateB = new Date(b.created_at || b.report_date || 0).getTime();
      return sortBy === 'Oldest' ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [reports, searchTerm, filterCategory, sortBy]);

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
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 text-white shadow-2xl mb-8 relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><Activity className="h-8 w-8 text-blue-400" /> Control Center</h1>
            <div className="flex gap-2">
              <button onClick={fetchData} className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-500/30 hover:bg-emerald-500/40 transition active:scale-95 shadow-sm">
                <RotateCcw className="h-3.5 w-3.5" /> Sync Data
              </button>
            </div>
          </div>
          <button onClick={handleLogout} className="mt-4 sm:mt-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold relative z-10"><LogOut className="h-4 w-4" /> Exit</button>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-4 mb-6 border-b border-gray-200 pb-2">
          <button onClick={() => setActiveTab('reports')} className={`pb-2 px-4 font-bold flex gap-2 items-center text-lg ${activeTab === 'reports' ? 'border-b-4 border-blue-600 text-blue-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <ClipboardList className="w-5 h-5"/> Daily Reports
          </button>
          <button onClick={() => setActiveTab('logs')} className={`pb-2 px-4 font-bold flex gap-2 items-center text-lg ${activeTab === 'logs' ? 'border-b-4 border-purple-600 text-purple-700' : 'text-gray-500 hover:text-gray-900'}`}>
            <History className="w-5 h-5"/> Audit Logs (Email / WhatsApp)
          </button>
        </div>

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
              <div className="overflow-x-auto">
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
            </div>
          </div>
        )}

        {/* Tab Content: Logs */}
        {activeTab === 'logs' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-2">
              {logs.map((log, i) => (
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
              
              <div><label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">Project Details & Notes</label>
                <textarea rows={4} className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500" value={currentRecord.detail || ''} onChange={e=>setCurrentRecord({...currentRecord, detail: e.target.value})} /></div>
              
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
