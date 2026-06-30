import React, { useState, useEffect } from 'react';
import { Search, MapPin, TrendingUp, Calendar, Clock, Bell, ExternalLink, Save, X, Edit2, Info, CheckCircle2, Copy } from 'lucide-react';
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

  const [editingLead, setEditingLead] = useState<CalendlyInquiry | null>(null);
  const [editStatus, setEditStatus] = useState<FollowUpStatus>('未跟進');
  const [editNotes, setEditNotes] = useState('');

  // Zoho Mail Integration States
  const [zohoEmails, setZohoEmails] = useState<any[]>([]);
  const [loadingZoho, setLoadingZoho] = useState(false);
  const [activeEmailBody, setActiveEmailBody] = useState<string | null>(null);
  const [loadingEmailBodyId, setLoadingEmailBodyId] = useState<string | null>(null);
  const [activeEmailBodyId, setActiveEmailBodyId] = useState<string | null>(null);

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

  const fetchZohoEmails = async (emailStr: string) => {
    setLoadingZoho(true);
    setZohoEmails([]);
    setActiveEmailBody(null);
    setActiveEmailBodyId(null);
    try {
      const response = await fetch(`/api/zoho-emails?email=${encodeURIComponent(emailStr)}`);
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

  const handleEditClick = (lead: CalendlyInquiry) => {
    setEditingLead(lead);
    setEditStatus(lead.status || '未跟進');
    setEditNotes(lead.notes || '');
    if (lead.email) {
      fetchZohoEmails(lead.email);
    } else {
      setZohoEmails([]);
    }
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
        <div className="text-sm font-bold text-gray-500">
          顯示 {filteredInquiries.length} 筆項目
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">載入中...</div>
      ) : error ? (
        <div className="text-center py-12 text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-700">
                <th className="py-3 px-4 font-semibold w-[20%]">客戶姓名 / 會議類型</th>
                <th className="py-3 px-4 font-semibold w-[15%]">聯絡方式</th>
                <th className="py-3 px-4 font-semibold w-[20%]">預約時間</th>
                <th className="py-3 px-4 font-semibold w-[25%]">客戶留言/需求</th>
                <th className="py-3 px-4 font-semibold w-[15%]">跟進狀態及備忘</th>
                <th className="py-3 px-4 font-semibold w-16">操作</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.map((lead, idx) => {
                const status = lead.status || '未跟進';
                const notes = lead.notes || '';
                return (
                  <tr key={lead.id} className={`border-b border-gray-100 hover:bg-amber-50/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="py-3 px-4 align-top">
                      <div className="font-bold text-amber-900">{lead.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{lead.duration} Meeting</div>
                    </td>
                    <td className="py-3 px-4 align-top text-xs space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-700">✉:</span>
                        <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">{lead.email || '—'}</a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-700">📞:</span>
                        <span>{lead.phone || '—'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top text-xs">
                      <div className="font-semibold text-gray-800">{lead.meeting_time}</div>
                      <div className="text-gray-400 mt-0.5">Clipped: {lead.raw_date}</div>
                    </td>
                    <td className="py-3 px-4 align-top text-xs text-gray-600 leading-relaxed max-w-xs">
                      <div className="line-clamp-3" title={lead.inquiry}>
                        {lead.inquiry || <span className="text-gray-400 italic">（沒有留下任何需求）</span>}
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <span className={`px-2.5 py-1 border rounded-full text-xs font-semibold ${STATUS_COLORS[status]}`}>
                        {status}
                      </span>
                      {notes && (
                        <p className="mt-2 text-xs text-gray-500 line-clamp-2 italic border-l-2 border-gray-300 pl-2">
                          {notes}
                        </p>
                      )}
                    </td>
                    <td className="py-3 px-4 align-top">
                      <button
                        onClick={() => handleEditClick(lead)}
                        className="p-2 text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredInquiries.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-500">
                    找不到符合條件的預約跟進項目。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
