import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, AlertTriangle, Package, Activity, MessageSquare, 
  Calendar, Clock, LockKeyhole, Loader2, LogOut, Plus, 
  Edit3, Trash2, Check, X, Sparkles, Save, CheckCircle
} from 'lucide-react';
import { supabase, DailyReport } from '../../lib/supabase';

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

  // Auth Handle (Keeping the aesthetic vault lock)
  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return;
    setLoading(true);
    
    // In real app, you might verify this via a secure RPC or auth token, but for now it's simple PIN
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
      // Fallback data if table not created yet
      setErrorMsg('請先在 Supabase 執行 SQL 建立 daily_reports 資料表。 (Please run the SQL migration first)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setReports([]);
    setPin('');
  };

  // Open Modal for New Record
  const openNewModal = () => {
    setEditMode(false);
    setCurrentRecord({
      customer: '',
      status: 'New',
      category: 'Enquiries',
      detail: '',
      report_date: new Date().toISOString().split('T')[0]
    });
    setRawText('');
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const openEditModal = (report: DailyReport) => {
    setEditMode(true);
    setCurrentRecord({ ...report });
    setRawText('');
    setIsModalOpen(true);
  };

  // Save Record (Create or Update)
  const handleSave = async () => {
    if (!currentRecord.customer || !currentRecord.status) return;
    setLoading(true);
    try {
      if (editMode && currentRecord.id) {
        // Update
        const { error } = await supabase
          .from('daily_reports')
          .update({
             customer: currentRecord.customer,
             status: currentRecord.status,
             category: currentRecord.category,
             detail: currentRecord.detail,
          })
          .eq('id', currentRecord.id);
        if (error) throw error;
      } else {
        // Insert
        const { error } = await supabase
          .from('daily_reports')
          .insert([{
             customer: currentRecord.customer,
             status: currentRecord.status,
             category: currentRecord.category,
             detail: currentRecord.detail,
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

  // Delete Record
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

  // AI Parse Feature
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

  // Stats
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

  // Security Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32 font-sans">
        <Helmet><title>機密登入 | 每日報告 Secure Login</title></Helmet>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm mb-4">
            <LockKeyhole className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            機密數據庫 (Confidential DB)
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            請輸入管理員密碼解鎖 Please enter admin PIN
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
            <form className="space-y-6" onSubmit={handleVerifyPin}>
              <div>
                <div className="mt-2 text-center">
                  <input
                    id="pin"
                    type="password"
                    autoFocus required
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="block w-full rounded-xl border-0 py-4 text-center text-4xl tracking-widest text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-2xl font-mono mx-auto"
                    placeholder="****"
                    maxLength={8}
                  />
                </div>
                {errorMsg && (
                  <p className="mt-3 text-sm text-red-600 text-center flex items-center justify-center gap-1 font-medium">
                    <AlertTriangle className="h-4 w-4" /> {errorMsg}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading || !pin}
                className="flex w-full justify-center items-center gap-2 rounded-xl bg-blue-600 px-3 py-3.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><LockKeyhole className="w-4 h-4" /> 解鎖 (Unlock)</>}
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
        
        {/* Header Block */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-8 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 blur-3xl rounded-full bg-white w-96 h-96 -mt-20 -mr-20 pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
                <Activity className="h-8 w-8" />
                每日生產與進度報告
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm font-medium">
                <span className="flex items-center gap-2 bg-emerald-500/20 text-emerald-100 px-3 py-1 rounded-full border border-emerald-400/30">
                  <CheckCircle className="h-4 w-4" /> 已連接 Supabase (Supabase Connected)
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={openNewModal}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold transition-all text-white shadow-lg"
              >
                <Plus className="h-5 w-5" /> 新增項目 (New Job)
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold transition-all backdrop-blur-sm"
              >
                <LogOut className="h-4 w-4" /> 登出
              </button>
            </div>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-blue-500">
            <div className="flex justify-between items-start">
              <div><p className="text-gray-500 text-sm font-bold uppercase tracking-wider">生產中 (Production)</p><p className="text-4xl font-black text-gray-900 mt-2">{stats.production}</p></div>
              <div className="bg-blue-100 p-3 rounded-lg"><Activity className="h-6 w-6 text-blue-600" /></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start">
              <div><p className="text-gray-500 text-sm font-bold uppercase tracking-wider">已發貨 (Shipped)</p><p className="text-4xl font-black text-gray-900 mt-2">{stats.shipping}</p></div>
              <div className="bg-emerald-100 p-3 rounded-lg"><Package className="h-6 w-6 text-emerald-600" /></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-amber-500">
            <div className="flex justify-between items-start">
              <div><p className="text-gray-500 text-sm font-bold uppercase tracking-wider">待處理報價 (Pending)</p><p className="text-4xl font-black text-gray-900 mt-2">{stats.pending}</p></div>
              <div className="bg-amber-100 p-3 rounded-lg"><MessageSquare className="h-6 w-6 text-amber-600" /></div>
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-6 shadow-sm border border-red-100 border-l-4 border-l-red-500">
            <div className="flex justify-between items-start">
              <div><p className="text-red-700 text-sm font-bold uppercase tracking-wider">緊急項目 (Urgent)</p><p className="text-4xl font-black text-red-700 mt-2">{stats.urgent}</p></div>
              <div className="bg-red-100 p-3 rounded-lg"><AlertTriangle className="h-6 w-6 text-red-600" /></div>
            </div>
          </div>
        </div>

        {/* Toolbar: Search and Filter */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 block w-full border-gray-300 rounded-lg py-2.5 px-3 focus:ring-blue-500 border bg-gray-50 focus:bg-white"
              placeholder="搜尋名稱或備註 (Search customers/notes)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {Object.keys(CATEGORY_MAP).map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                  filterCategory === cat 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-white border text-gray-700 hover:bg-gray-50'
                }`}
              >
                {CATEGORY_MAP[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredReports.length === 0 ? (
            <div className="py-20 text-center">
              <Package className="mx-auto h-16 w-16 text-gray-200 mb-3" />
              <h3 className="text-xl font-bold text-gray-900">沒有符合記錄 (No reports matched)</h3>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">客戶 / 項目 (Project)</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">日期 (Date)</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">類別 (Category)</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">狀態 (Status)</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">備註 (Details)</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">操作 (Actions)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {filteredReports.map((report) => (
                    <tr key={report.id} className={`hover:bg-blue-50/50 transition-colors ${report.status === 'Urgent' ? 'bg-red-50/30' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{report.customer}</div>
                        {report.status === 'Urgent' && <div className="mt-1 flex items-center gap-1 text-xs font-bold text-red-600"><AlertTriangle className="h-3 w-3"/> 需要跟進 Action Req</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                        {report.report_date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-700 font-medium bg-gray-100 px-2.5 py-1 rounded-md">{report.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${STATUS_COLORS[report.status] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs xl:max-w-md">
                        <div className="whitespace-pre-line leading-relaxed font-medium">{report.detail}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => openEditModal(report)} className="text-blue-600 hover:text-blue-900 mr-4 bg-blue-50 p-2 rounded-lg hover:bg-blue-100 transition"><Edit3 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(report.id)} className="text-red-500 hover:text-red-800 bg-red-50 p-2 rounded-lg hover:bg-red-100 transition"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-center mb-5 border-b pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    {editMode ? <Edit3 className="text-blue-600 w-6 h-6" /> : <Plus className="text-emerald-600 w-6 h-6" />}
                    {editMode ? '編輯記錄 (Edit Record)' : '新增項目 (Add New Job)'}
                  </h3>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition"><X className="w-5 h-5"/></button>
                </div>

                {/* AI Input Block for New Records */}
                {!editMode && (
                  <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <label className="flex items-center gap-2 text-sm font-bold text-purple-900 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      AI 智能解析助手 (Smart AI Extract)
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full text-sm border-purple-200 rounded-lg p-2.5 focus:ring-purple-500 bg-white"
                      placeholder="貼上 WhatsApp 訊息或隨便輸入以自動填寫... Paste rough text here and let AI structure it."
                      value={rawText}
                      onChange={(e) => setRawText(e.target.value)}
                    />
                    <button 
                      type="button"
                      onClick={handleAIParsing}
                      disabled={aiLoading || !rawText.trim()}
                      className="mt-2 w-full flex justify-center items-center gap-2 bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 disabled:opacity-50 transition"
                    >
                      {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "解析並自動填寫 (Parse & Map)"}
                    </button>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">客戶/項目名稱 (Customer/Project Name)*</label>
                    <input type="text" 
                      className="w-full border-gray-300 rounded-lg focus:ring-blue-500 font-medium" 
                      value={currentRecord.customer || ''} 
                      onChange={e => setCurrentRecord({...currentRecord, customer: e.target.value})} 
                      required 
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-1">狀態 (Status)*</label>
                      <select 
                        className="w-full border-gray-300 rounded-lg focus:ring-blue-500 font-medium"
                        value={currentRecord.status || 'New'}
                        onChange={e => setCurrentRecord({...currentRecord, status: e.target.value})}
                      >
                        <option value="New">New (新加入)</option>
                        <option value="Urgent">Urgent (緊急)</option>
                        <option value="In Progress">In Progress (處理中)</option>
                        <option value="Pending">Pending (待處理)</option>
                        <option value="Shipped">Shipped (已發貨)</option>
                        <option value="Scheduled">Scheduled (已預約)</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-1">類別 (Category)*</label>
                      <select 
                        className="w-full border-gray-300 rounded-lg focus:ring-blue-500 font-medium"
                        value={currentRecord.category || 'Enquiries'}
                        onChange={e => setCurrentRecord({...currentRecord, category: e.target.value})}
                      >
                        <option value="Enquiries">新查詢 (Enquiries)</option>
                        <option value="Quotes">報價 (Quotes)</option>
                        <option value="Production">生產中 (Production)</option>
                        <option value="Shipping">物流 (Shipping)</option>
                        <option value="Meetings">會議 (Meetings)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">詳細備註 (Description/Details)</label>
                    <textarea 
                      rows={4}
                      className="w-full border-gray-300 rounded-lg focus:ring-blue-500 font-medium"
                      value={currentRecord.detail || ''}
                      onChange={e => setCurrentRecord({...currentRecord, detail: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl border-t">
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleSave}
                  className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-6 py-2.5 bg-blue-600 text-base font-bold text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm items-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4"/>} 
                  儲存 (Save Record)
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-6 py-2.5 bg-white text-base font-bold text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  取消 (Cancel)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
