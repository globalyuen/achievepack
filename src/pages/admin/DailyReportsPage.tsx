import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, AlertTriangle, Package, Activity, MessageSquare, 
  Calendar, Clock, LockKeyhole, Loader2, LogOut, Plus, 
  Edit3, Trash2, Check, X, Sparkles, Save, CheckCircle,
  FileText, ImageIcon, UploadCloud, Link as LinkIcon, FileIcon
} from 'lucide-react';
import { supabase, DailyReport } from '../../../lib/supabase';

// Helper for HK Traditional Chinese mapping
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
  'Production': '生產中 (Production)',
  'Shipping': '物流 (Shipping)',
  'Quotes': '報價 (Quotes)',
  'Enquiries': '新查詢 (Enquiries)',
  'Meetings': '會議 (Meetings)'
};

export default function DailyReportsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [reports, setReports] = useState<DailyReport[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  
  // Create / Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<Partial<DailyReport>>({});
  
  // AI State
  const [rawText, setRawText] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const [uploadingFile, setUploadingFile] = useState(false);

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return;
    setLoading(true);
    if (pin === (import.meta.env.VITE_ADMIN_PIN || '8888')) {
      setIsAuthenticated(true);
      fetchReports();
    } else {
      setErrorMsg('密碼錯誤 Invalid Secure PIN');
    }
    setLoading(false);
  };

  const fetchReports = async () => {
    try {
      const { data, error } = await supabase
        .from('daily_reports')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      if (data) setReports(data as DailyReport[]);
    } catch (err) {
      console.error('Error fetching reports:', err);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setReports([]);
    setPin('');
  };

  const openNewModal = () => {
    setEditMode(false);
    setCurrentRecord({
      customer: '',
      status: 'New',
      category: 'Enquiries',
      detail: '',
      attachments: [],
      report_date: new Date().toISOString().split('T')[0]
    });
    setRawText('');
    setIsModalOpen(true);
  };

  const openEditModal = (report: DailyReport) => {
    setEditMode(true);
    setCurrentRecord({ ...report });
    setRawText('');
    setIsModalOpen(true);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
    
    setUploadingFile(true);
    try {
      const fileExt = file.name.split('.').pop() || 'tmp';
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('daily_reports_files')
        .upload(fileName, file, { upsert: true });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('daily_reports_files')
        .getPublicUrl(fileName);

      const newAttachment = {
        name: file.name,
        url: publicUrl,
        type: fileExt
      };

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

  const removeAttachment = (indexToRemove: number) => {
    setCurrentRecord(prev => ({
      ...prev,
      attachments: prev.attachments?.filter((_, i) => i !== indexToRemove)
    }));
  };

  const handleSave = async () => {
    if (!currentRecord.customer || !currentRecord.status) return;
    setLoading(true);
    try {
      if (editMode && currentRecord.id) {
        const { error } = await supabase
          .from('daily_reports')
          .update({
             customer: currentRecord.customer,
             status: currentRecord.status,
             category: currentRecord.category,
             detail: currentRecord.detail,
             attachments: currentRecord.attachments || []
          })
          .eq('id', currentRecord.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('daily_reports')
          .insert([{
             customer: currentRecord.customer,
             status: currentRecord.status,
             category: currentRecord.category,
             detail: currentRecord.detail,
             attachments: currentRecord.attachments || [],
             report_date: currentRecord.report_date || new Date().toISOString().split('T')[0]
          }]);
        if (error) throw error;
      }
      await fetchReports();
      setIsModalOpen(false);
    } catch (err: any) {
      alert("儲存失敗: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("確定刪除此記錄？ Are you sure you want to delete this record?")) return;
    try {
      const { error } = await supabase.from('daily_reports').delete().eq('id', id);
      if (error) throw error;
      await fetchReports();
    } catch (err: any) {
      alert("刪除失敗: " + err.message);
    }
  };

  const handleAIParsing = async () => {
    if (!rawText.trim()) return;
    setAiLoading(true);
    try {
      const resp = await fetch('/api/ai-parse-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: rawText })
      });
      const data = await resp.json();
      if (data.success && data.data) {
        setCurrentRecord((prev) => ({
          ...prev,
          customer: data.data.customer || prev.customer,
          status: data.data.status || prev.status,
          category: data.data.category || prev.category,
          detail: data.data.detail || prev.detail
        }));
      } else {
        alert("AI 解析失敗: " + (data.error || 'Unknown Error'));
      }
    } catch (err) {
      alert("AI 網路連接錯誤");
    } finally {
      setAiLoading(false);
    }
  };

  const stats = useMemo(() => {
    return {
      production: reports.filter(r => r.category === 'Production').length,
      shipping: reports.filter(r => r.category === 'Shipping').length,
      pending: reports.filter(r => r.category === 'Quotes' && r.status === 'Pending').length,
      urgent: reports.filter(r => r.status === 'Urgent').length,
    }
  }, [reports]);

  const filteredReports = useMemo(() => {
    return reports.filter(report => {
      const matchesSearch = report.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (report.detail || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || report.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [reports, searchTerm, filterCategory]);

  const renderAttachmentIcon = (type: string) => {
    const ext = type.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return <ImageIcon className="w-4 h-4 text-blue-500" />;
    if (['pdf'].includes(ext)) return <FileText className="w-4 h-4 text-red-500" />;
    return <FileIcon className="w-4 h-4 text-gray-500" />;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32 font-sans">
        <Helmet><title>機密登入 | 每日報告</title></Helmet>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm mb-4">
            <LockKeyhole className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">機密數據庫 (Confidential DB)</h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
            <form className="space-y-6" onSubmit={handleVerifyPin}>
              <input
                type="password"
                autoFocus required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="block w-full rounded-xl border-0 py-4 text-center text-4xl tracking-widest font-mono shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 mx-auto"
                placeholder="****"
              />
              <button
                type="submit"
                disabled={loading || !pin}
                className="flex w-full justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3.5 font-bold text-white shadow hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : '解鎖 (Unlock)'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans relative">
      <Helmet><title>每日生產報告 | Achieve Pack</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-8 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 blur-3xl rounded-full bg-white w-96 h-96 -mt-20 -mr-20 pointer-events-none"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
                <Activity className="h-8 w-8" />
                每日生產與進度報告
              </h1>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 bg-emerald-500/20 text-emerald-100 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="h-4 w-4" /> 已連接 Supabase
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={openNewModal} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold transition shadow-lg text-white">
                <Plus className="h-5 w-5" /> 新增項目
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold backdrop-blur-sm">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 block w-full rounded-lg py-2.5 px-3 border border-gray-300 bg-gray-50 focus:bg-white"
              placeholder="搜尋 Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {Object.keys(CATEGORY_MAP).map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ${filterCategory === cat ? 'bg-gray-900 text-white' : 'bg-white border text-gray-700 hover:bg-gray-50'}`}
              >
                {CATEGORY_MAP[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">客戶 / 項目</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">日期</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">類別</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">狀態</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">附件 / 備註</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-blue-50/30">
                    <td className="px-6 py-4 font-bold text-gray-900 text-sm max-w-[200px] truncate" title={report.customer}>{report.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.report_date}</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="text-sm bg-gray-100 px-2 py-1 rounded">{report.category}</span></td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${STATUS_COLORS[report.status] || 'bg-gray-100 border-gray-200 text-gray-800'}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                      <div className="line-clamp-2 mb-2 font-medium">{report.detail}</div>
                      {report.attachments && report.attachments.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {report.attachments.map((file, idx) => (
                            <a key={idx} href={file.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium hover:bg-gray-50 text-blue-600 transition">
                              {renderAttachmentIcon(file.type)} <span className="truncate max-w-[100px]">{file.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button onClick={() => openEditModal(report)} className="text-blue-600 hover:text-blue-900 p-2"><Edit3 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(report.id)} className="text-red-500 hover:text-red-800 p-2"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold flex items-center gap-2">
                {editMode ? <Edit3 className="w-5 h-5 text-blue-600"/> : <Plus className="w-5 h-5 text-emerald-600"/>}
                {editMode ? '編輯記錄 (Edit Record)' : '新增項目 (Add Job)'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:bg-gray-100 p-2 rounded-full"><X className="w-5 h-5"/></button>
            </div>
            
            <div className="overflow-y-auto p-6 space-y-4">
              {!editMode && (
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 mb-2">
                  <label className="flex text-sm font-bold text-purple-900 mb-2 items-center gap-1"><Sparkles className="w-4 h-4"/> AI 自動填寫</label>
                  <textarea rows={2} className="w-full text-sm rounded-lg border-purple-200 p-2" value={rawText} onChange={e=>setRawText(e.target.value)} placeholder="Paste text here..."/>
                  <button type="button" onClick={handleAIParsing} disabled={aiLoading} className="mt-2 w-full bg-purple-600 text-white rounded-lg py-2 font-bold flex justify-center text-sm">{aiLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : 'Parse'}</button>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold mb-1">客戶/項目 (Customer)*</label>
                <input type="text" className="w-full border-gray-300 rounded-lg text-sm" value={currentRecord.customer || ''} onChange={e=>setCurrentRecord({...currentRecord, customer: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold mb-1">狀態 (Status)*</label>
                  <select className="w-full border-gray-300 rounded-lg text-sm" value={currentRecord.status || 'New'} onChange={e=>setCurrentRecord({...currentRecord, status: e.target.value})}>
                    <option value="New">New</option><option value="Urgent">Urgent</option><option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option><option value="Shipped">Shipped</option><option value="Scheduled">Scheduled</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold mb-1">類別 (Category)*</label>
                  <select className="w-full border-gray-300 rounded-lg text-sm" value={currentRecord.category || 'Enquiries'} onChange={e=>setCurrentRecord({...currentRecord, category: e.target.value})}>
                    <option value="Enquiries">Enquiries</option><option value="Quotes">Quotes</option><option value="Production">Production</option>
                    <option value="Shipping">Shipping</option><option value="Meetings">Meetings</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">備註 (Details)</label>
                <textarea rows={3} className="w-full border-gray-300 rounded-lg text-sm" value={currentRecord.detail || ''} onChange={e=>setCurrentRecord({...currentRecord, detail: e.target.value})} />
              </div>
              
              {/* Attachments UI */}
              <div className="mt-4 pt-4 border-t">
                <label className="flex items-center justify-between text-sm font-bold mb-3">
                  <span>附件檔案 (Attachments)</span>
                  <label className="cursor-pointer bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 hover:bg-blue-100 flex items-center gap-1.5 transition text-xs">
                    {uploadingFile ? <Loader2 className="w-4 h-4 animate-spin"/> : <UploadCloud className="w-4 h-4"/>}
                    上傳檔案 (Upload)
                    <input type="file" className="hidden" onChange={handleFileUpload} disabled={uploadingFile} />
                  </label>
                </label>
                {currentRecord.attachments && currentRecord.attachments.length > 0 ? (
                  <div className="space-y-2">
                    {currentRecord.attachments.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-200">
                        <a href={file.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-blue-600 font-medium truncate w-3/4 hover:underline">
                          {renderAttachmentIcon(file.type)} 
                          <span className="truncate">{file.name}</span>
                        </a>
                        <button type="button" onClick={() => removeAttachment(idx)} className="text-gray-400 hover:text-red-500 p-1"><X className="w-4 h-4"/></button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                    <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2"/>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">支援 PDF, 圖片, Excel 等</p>
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-2xl border-t mt-auto">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2 text-sm font-bold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">取消 (Cancel)</button>
              <button disabled={loading} onClick={handleSave} className="flex gap-2 items-center px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 disabled:opacity-50">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4"/>} 儲存 (Save)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
