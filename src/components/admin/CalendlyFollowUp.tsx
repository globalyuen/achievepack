import React, { useState, useEffect } from 'react';
import { Search, MapPin, TrendingUp, Calendar, Clock, Bell, ExternalLink, Save, X, Edit2, Info, CheckCircle2, Copy, Mail, Phone } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export type FollowUpStatus = '未跟進' | '已發郵件' | '已聯絡/WhatsApp' | '已通話/會議' | '已寄樣品' | '報價中' | '已下單' | '無效/垃圾';

interface CalendlyInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  meeting_time: string;
  duration: string;
  inquiry: string;
  raw_date: string;
  status: FollowUpStatus;
  notes: string;
}

const STATUS_COLORS: Record<FollowUpStatus, string> = {
  '未跟進': 'bg-gray-100 text-gray-600 border-gray-200',
  '已發郵件': 'bg-blue-50 text-blue-700 border-blue-200',
  '已聯絡/WhatsApp': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  '已通話/會議': 'bg-purple-50 text-purple-700 border-purple-200',
  '已寄樣品': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  '報價中': 'bg-orange-50 text-orange-700 border-orange-200',
  '已下單': 'bg-green-50 text-green-700 border-green-200',
  '無效/垃圾': 'bg-red-50 text-red-700 border-red-200',
};

const generateICS = (lead: CalendlyInquiry, dateStr: string, notes: string) => {
  if (!dateStr) return;
  
  // Try to parse raw date to calendar date string or clean up meeting_time
  // E.g. date: 2026-06-02 18:57 UTC
  const cleanDate = dateStr.replace(/[^0-9]/g, '').slice(0, 8);
  const startD = cleanDate || new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 8);

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AchievePack//CalendlyFollowUp//EN
BEGIN:VEVENT
SUMMARY:Follow Up: ${lead.name}
DTSTART;VALUE=DATE:${startD}
DTEND;VALUE=DATE:${startD}
DESCRIPTION:【Calendly Meeting Follow-up】\\nName: ${lead.name}\\nEmail: ${lead.email}\\nPhone: ${lead.phone}\\nMeeting: ${lead.meeting_time}\\n\\nInquiry: ${lead.inquiry}\\n\\nNotes: ${notes}
ATTENDEE;RSVP=TRUE:mailto:ryan@achievepack.com
ATTENDEE;RSVP=TRUE:mailto:jericha@pouch.eco
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:1天前跟進提醒
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `FollowUp_${lead.name}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function CalendlyFollowUp() {
  const [inquiries, setInquiries] = useState<CalendlyInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table');

  const [editingLead, setEditingLead] = useState<CalendlyInquiry | null>(null);
  const [editStatus, setEditStatus] = useState<FollowUpStatus>('未跟進');
  const [editNotes, setEditNotes] = useState('');

  // Zoho Mail Integration States
  const [zohoEmails, setZohoEmails] = useState<any[]>([]);
  const [loadingZoho, setLoadingZoho] = useState(false);
  const [activeEmailBody, setActiveEmailBody] = useState<string | null>(null);
  const [loadingEmailBodyId, setLoadingEmailBodyId] = useState<string | null>(null);
  const [activeEmailBodyId, setActiveEmailBodyId] = useState<string | null>(null);

  // AI Suggestion States
  const [aiSuggestion, setAiSuggestion] = useState<{ statusSummary: string; nextAction: string; emailDraft: string } | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  // Fetch inquiries from Supabase
  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('calendly_inquiries')
        .select('*')
        .order('raw_date', { ascending: false });

      if (error) throw error;
      if (data) {
        setInquiries(data as CalendlyInquiry[]);
      }
    } catch (err: any) {
      console.error('Error fetching from Supabase:', err);
      setError('Error loading inquiries: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchZohoEmails = async (emailStr: string, nameStr: string) => {
    setLoadingZoho(true);
    setZohoEmails([]);
    setActiveEmailBody(null);
    setActiveEmailBodyId(null);
    try {
      const response = await fetch(`/api/zoho-emails?email=${encodeURIComponent(emailStr)}&name=${encodeURIComponent(nameStr)}`);
      if (response.ok) {
        const data = await response.json();
        setZohoEmails(data);
      } else {
        console.warn('Failed to fetch Zoho emails');
      }
    } catch (e) {
      console.error('Error fetching Zoho emails:', e);
    } finally {
      setLoadingZoho(false);
    }
  };

  const fetchEmailBody = async (messageId: string) => {
    setLoadingEmailBodyId(messageId);
    setActiveEmailBody(null);
    try {
      const response = await fetch(`/api/zoho-emails?messageId=${encodeURIComponent(messageId)}`);
      if (response.ok) {
        const data = await response.json();
        setActiveEmailBody(data.body || '（此郵件無內容）');
      } else {
        alert('無法載入郵件內容');
      }
    } catch (e) {
      console.error('Error fetching email body:', e);
    } finally {
      setLoadingEmailBodyId(null);
    }
  };

  const fetchAiSuggestion = async () => {
    if (!editingLead) return;
    setLoadingAi(true);
    setAiSuggestion(null);
    try {
      const response = await fetch('/api/calendly-ai-suggest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: editingLead.name,
          email: editingLead.email,
          inquiry: editingLead.inquiry,
          history: zohoEmails
        })
      });
      if (response.ok) {
        const data = await response.json();
        setAiSuggestion(data);
      } else {
        alert('AI 建議生成失敗，請確認 GEMINI_API_KEY 配置。');
      }
    } catch (e) {
      console.error('Error fetching AI suggestion:', e);
      alert('連線失敗，請稍後再試。');
    } finally {
      setLoadingAi(false);
    }
  };

  const handleEditClick = (lead: CalendlyInquiry) => {
    setEditingLead(lead);
    setEditStatus(lead.status || '未跟進');
    setEditNotes(lead.notes || '');
    setAiSuggestion(null); // Clear previous AI recommendation
    fetchZohoEmails(lead.email || '', lead.name || '');
  };

  const handleSaveEdit = async () => {
    if (!editingLead) return;
    try {
      const { error } = await supabase
        .from('calendly_inquiries')
        .update({
          status: editStatus,
          notes: editNotes
        })
        .eq('id', editingLead.id);

      if (error) throw error;

      // Update state locally
      setInquiries(prev => prev.map(item => 
        item.id === editingLead.id 
          ? { ...item, status: editStatus, notes: editNotes } 
          : item
      ));
      
      setEditingLead(null);
    } catch (err: any) {
      console.error('Error updating inquiry:', err);
      alert('儲存失敗: ' + err.message);
    }
  };

  const filteredInquiries = inquiries.filter(lead => {
    const term = searchTerm.toLowerCase();
    const status = lead.status || '未跟進';
    const notes = lead.notes || '';
    return (
      lead.name.toLowerCase().includes(term) ||
      (lead.inquiry && lead.inquiry.toLowerCase().includes(term)) ||
      (lead.email && lead.email.toLowerCase().includes(term)) ||
      (lead.phone && lead.phone.includes(term)) ||
      status.toLowerCase().includes(term) ||
      notes.toLowerCase().includes(term)
    );
  });

  // Group by date for calendar view
  const groupedByDate = filteredInquiries.reduce((acc, lead) => {
    // Try to get a sortable date string, fallback to 'Unknown Date'
    let dateStr = 'Unknown Date';
    if (lead.raw_date) {
      const match = lead.raw_date.match(/\d{4}-\d{2}-\d{2}/);
      if (match) dateStr = match[0];
      else dateStr = lead.raw_date;
    } else if (lead.meeting_time) {
      dateStr = lead.meeting_time;
    }
    
    if (!acc[dateStr]) acc[dateStr] = [];
    acc[dateStr].push(lead);
    return acc;
  }, {} as Record<string, CalendlyInquiry[]>);

  // Sort dates descending
  const sortedDates = Object.keys(groupedByDate).sort((a, b) => b.localeCompare(a));

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 font-sans text-gray-900">
      
      {/* Board Summary */}
      <div className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-2xl p-6 mb-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Calendar className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-amber-300"/> Calendly 會議跟進面板
          </h2>
          <p className="text-amber-100 text-sm mb-6">
            追蹤所有從 Calendly 預約的客戶，迅速將跟進行動記錄與下載日曆提醒。
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-amber-100 block mb-1">總預約數</span>
              <span className="text-3xl font-extrabold">{inquiries.length}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-amber-100 block mb-1">未跟進</span>
              <span className="text-3xl font-extrabold">
                {inquiries.filter(l => (l.status || '未跟進') === '未跟進').length}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-amber-100 block mb-1">跟進中</span>
              <span className="text-3xl font-extrabold">
                {inquiries.filter(l => {
                  const s = l.status || '未跟進';
                  return s !== '未跟進' && s !== '已下單' && s !== '無效/垃圾';
                }).length}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-amber-100 block mb-1">已下單</span>
              <span className="text-3xl font-extrabold text-green-300">
                {inquiries.filter(l => (l.status || '未跟進') === '已下單').length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="搜尋名稱、需求、電話或跟進狀態..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-gray-50 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
        </div>
        
        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('table')}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${viewMode === 'table' ? 'bg-white shadow text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
          >
            列表檢視 (Table)
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${viewMode === 'calendar' ? 'bg-white shadow text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
          >
            日曆檢視 (Calendar)
          </button>
        </div>

        <div className="text-sm font-bold text-gray-500">
          顯示 {filteredInquiries.length} 筆項目
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">載入中...</div>
      ) : error ? (
        <div className="text-center py-12 text-red-500">{error}</div>
      ) : viewMode === 'table' ? (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left text-sm border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-bold w-[25%]">客戶資訊</th>
                <th className="py-3 px-4 font-bold w-[15%]">預約時段</th>
                <th className="py-3 px-4 font-bold w-[35%]">需求留言</th>
                <th className="py-3 px-4 font-bold w-[15%]">狀態與備忘</th>
                <th className="py-3 px-4 font-bold text-center w-[10%]">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredInquiries.map((lead, idx) => {
                const status = lead.status || '未跟進';
                const notes = lead.notes || '';
                return (
                  <tr key={lead.id} className="hover:bg-amber-50/30 transition-colors bg-white group">
                    <td className="py-3 px-4 align-top">
                      <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-amber-700 transition-colors">{lead.name}</div>
                      <div className="flex flex-col gap-1 text-[11px]">
                        {lead.email && (
                          <a href={`mailto:${lead.email}`} className="text-gray-500 hover:text-blue-600 flex items-center gap-1.5 w-max transition-colors" title={lead.email}>
                            <Mail className="w-3.5 h-3.5 opacity-70" /> 
                            <span className="truncate max-w-[200px]">{lead.email}</span>
                          </a>
                        )}
                        {lead.phone && (
                          <span className="text-gray-500 flex items-center gap-1.5 w-max" title={lead.phone}>
                            <Phone className="w-3.5 h-3.5 opacity-70" /> 
                            <span className="truncate max-w-[200px]">{lead.phone}</span>
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top text-xs text-gray-600">
                      <div className="font-semibold text-gray-800 mb-0.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {lead.meeting_time}
                      </div>
                      <div className="text-[10px] text-gray-400 ml-5">{lead.duration} • {lead.raw_date}</div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="text-[12px] text-gray-600 leading-relaxed max-w-full">
                        <div className="line-clamp-3 hover:line-clamp-none transition-all" title={lead.inquiry}>
                          {lead.inquiry || <span className="text-gray-400 italic">（無留言）</span>}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className={`px-2.5 py-1 border rounded-md text-[11px] font-bold shadow-sm ${STATUS_COLORS[status]}`}>
                          {status}
                        </span>
                        {notes && (
                          <div className="text-[11px] text-gray-500 bg-gray-50 p-1.5 rounded border border-gray-100 w-full max-h-16 overflow-y-auto" title={notes}>
                            {notes}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top text-center">
                      <button
                        onClick={() => handleEditClick(lead)}
                        className="w-full px-3 py-1.5 text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/50 rounded-lg transition-colors font-bold text-xs shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        跟進
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredInquiries.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-16 text-gray-500 bg-gray-50/50">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Info className="w-6 h-6 text-gray-400" />
                      <span>找不到符合條件的預約跟進項目。</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="space-y-6">
          {sortedDates.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-2xl border border-dashed">
              找不到符合條件的預約項目。
            </div>
          ) : (
            sortedDates.map((dateStr) => (
              <div key={dateStr} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 border-b pb-2">
                  <Calendar className="w-5 h-5 text-amber-600"/>
                  {dateStr}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedByDate[dateStr].map(lead => {
                    const status = lead.status || '未跟進';
                    return (
                      <div key={lead.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900 line-clamp-1">{lead.name}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${STATUS_COLORS[status]}`}>
                            {status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 mb-2 font-mono flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400"/>
                          <span className="line-clamp-1">{lead.meeting_time} ({lead.duration})</span>
                        </div>
                        <div className="text-[11px] text-gray-500 mb-4 line-clamp-2 min-h-[2rem]">
                          {lead.inquiry || '（無留言需求）'}
                        </div>
                        <div className="flex items-center gap-2 border-t pt-3 mt-auto">
                          <button
                            onClick={() => handleEditClick(lead)}
                            className="flex-1 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-bold transition-colors text-center"
                          >
                            檢視詳情 / 跟進
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Editing Modal */}
      {editingLead && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6 border-b pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{editingLead.name}</h3>
                <p className="text-gray-500 text-sm">{editingLead.email || 'No email'}</p>
              </div>
              <button onClick={() => setEditingLead(null)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">跟進狀態</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 bg-gray-50"
                  value={editStatus}
                  onChange={e => setEditStatus(e.target.value as FollowUpStatus)}
                >
                  {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">跟進記錄與備忘</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 bg-gray-50 h-28 text-sm"
                  placeholder="輸入已聯繫細節、樣品郵遞單號、或者下單規格等..."
                  value={editNotes}
                  onChange={e => setEditNotes(e.target.value)}
                />
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-xs text-amber-900">
                <span className="font-bold">預約需求：</span>
                <p className="mt-1 leading-relaxed text-amber-800">{editingLead.inquiry || '（未填寫）'}</p>
              </div>

              {/* Zoho Email History Section */}
              <div className="border-t pt-4">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  📧 Zoho 郵件往來記錄
                </label>
                
                {loadingZoho ? (
                  <div className="text-center py-4 text-xs text-gray-500 animate-pulse">連線 Zoho Mail 中...</div>
                ) : zohoEmails.length === 0 ? (
                  <div className="text-center py-4 text-xs text-gray-400 bg-gray-50 rounded-xl border border-dashed">
                    沒有與此客戶的 Zoho 郵件記錄
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {zohoEmails.map((msg, index) => {
                      const date = msg.sentDateInGMT 
                        ? new Date(parseInt(msg.sentDateInGMT)).toLocaleString('zh-TW', { hour12: false })
                        : '未知日期';
                      const isSentByUs = msg.fromAddress?.includes('achievepack') || msg.fromAddress?.includes('pouch.eco');
                      
                      return (
                        <div key={msg.messageId || index} className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <span className={`font-semibold ${isSentByUs ? 'text-indigo-600' : 'text-emerald-600'}`}>
                              {isSentByUs ? '📤 寄出' : '📥 收到'}
                            </span>
                            <span className="text-[10px] text-gray-400">{date}</span>
                          </div>
                          <div className="font-semibold text-gray-800 line-clamp-1 mb-1">{msg.subject || '（無主題）'}</div>
                          <div className="text-gray-500 line-clamp-2 mb-2">{msg.summary}</div>
                          
                          {loadingEmailBodyId === msg.messageId ? (
                            <div className="text-[10px] text-amber-600 font-semibold">載入全文中...</div>
                          ) : activeEmailBody && activeEmailBodyId === msg.messageId ? (
                            <div className="mt-2 p-2 bg-white rounded border border-gray-200 text-[11px] text-gray-700 whitespace-pre-wrap font-mono leading-relaxed max-h-40 overflow-y-auto">
                              {activeEmailBody}
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setActiveEmailBodyId(msg.messageId);
                                fetchEmailBody(msg.messageId);
                              }}
                              className="text-[10px] text-blue-600 hover:underline font-semibold"
                            >
                              展開郵件全文
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* AI Suggestion Section */}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
                    <span className="text-amber-500">✨</span>
                    🤖 Antigravity 智能跟進建議
                  </label>
                  {!aiSuggestion && !loadingAi && (
                    <button
                      onClick={fetchAiSuggestion}
                      className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 text-[10px] font-bold rounded-lg border border-amber-200 transition-colors"
                    >
                      生成建議
                    </button>
                  )}
                </div>

                {loadingAi ? (
                  <div className="text-center py-4 text-xs text-gray-500 animate-pulse">分析信件往來並生成建議中...</div>
                ) : aiSuggestion ? (
                  <div className="p-3 bg-gradient-to-r from-amber-50/50 to-orange-50/30 rounded-xl border border-amber-100/60 text-xs space-y-2">
                    <div className="flex flex-col gap-1">
                      <div>
                        <span className="font-semibold text-amber-900">當前狀態：</span>
                        <span className="text-gray-700">{aiSuggestion.statusSummary}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-amber-900">建議下一步：</span>
                        <span className="text-gray-700">{aiSuggestion.nextAction}</span>
                      </div>
                    </div>
                    <div className="mt-2.5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-amber-900">建議回覆草稿 (英文)：</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(aiSuggestion.emailDraft);
                            alert('郵件草稿已複製到剪貼簿！');
                          }}
                          className="text-[10px] text-amber-700 hover:underline flex items-center gap-1 font-bold"
                        >
                          <Copy className="w-3 h-3"/> 複製草稿
                        </button>
                      </div>
                      <pre className="p-2.5 bg-white rounded border border-gray-150 text-[11px] text-gray-700 whitespace-pre-wrap font-mono leading-relaxed max-h-40 overflow-y-auto">
                        {aiSuggestion.emailDraft}
                      </pre>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
              <button
                onClick={() => generateICS(editingLead, editingLead.raw_date, editNotes)}
                className="px-4 py-2 text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl font-medium flex items-center gap-2 mr-auto"
              >
                <Bell className="w-4 h-4"/> 加入日曆提醒
              </button>
              <button onClick={() => setEditingLead(null)} className="px-5 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium">取消</button>
              <button onClick={handleSaveEdit} className="px-6 py-2 bg-amber-700 text-white hover:bg-amber-800 rounded-xl font-bold flex items-center gap-2 shadow-md"><Save className="w-4 h-4"/> 儲存跟進</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
