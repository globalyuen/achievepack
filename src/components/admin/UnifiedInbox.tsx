import React, { useState, useEffect } from 'react';
import { Search, MapPin, TrendingUp, Calendar, Clock, Bell, ExternalLink, Save, X, Edit2, Info, CheckCircle2, Copy, Mail, Phone, MessageSquare, Download } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export type FollowUpStatus = '未跟進' | '已發郵件' | '已聯絡/WhatsApp' | '已通話/會議' | '已寄樣品' | '報價中' | '已下單' | '無效/垃圾';

export interface UnifiedInquiry {
  id: string;
  name: string;
  phone: string;
  hasWhatsApp: boolean;
  whatsappData: {
    id: string;
    chat_history: string;
    status: FollowUpStatus;
    notes: string;
  } | null;
  hasEmail: boolean;
  emailData: {
    id: string;
    email: string;
    meeting_time: string;
    inquiry: string;
    status: FollowUpStatus;
    notes: string;
  } | null;
  raw_date: string;
  status: FollowUpStatus; // The dominant status
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

const generateICS = (lead: UnifiedInquiry, dateStr: string, notes: string) => {
  if (!dateStr) return;
  
  const cleanDate = dateStr.replace(/[^0-9]/g, '').slice(0, 8);
  const startD = cleanDate || new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 8);

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AchievePack//UnifiedFollowUp//EN
BEGIN:VEVENT
SUMMARY:Follow Up: ${lead.name}
DTSTART;VALUE=DATE:${startD}
DTEND;VALUE=DATE:${startD}
DESCRIPTION:【Unified Follow-up】\\nName: ${lead.name}\\nPhone: ${lead.phone}\\nEmail: ${lead.emailData?.email || ''}\\n\\nChat: ${lead.whatsappData?.chat_history?.slice(0, 100) || 'N/A'}\\n\\nNotes: ${notes}
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

export default function UnifiedInbox() {
  const [inquiries, setInquiries] = useState<UnifiedInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table');

  const [editingLead, setEditingLead] = useState<UnifiedInquiry | null>(null);
  const [editStatus, setEditStatus] = useState<FollowUpStatus>('未跟進');
  const [editNotes, setEditNotes] = useState('');

  // Zoho Mail Integration States
  const [zohoEmails, setZohoEmails] = useState<any[]>([]);
  const [loadingZoho, setLoadingZoho] = useState(false);
  const [activeEmailBody, setActiveEmailBody] = useState<string | null>(null);
  const [loadingEmailBodyId, setLoadingEmailBodyId] = useState<string | null>(null);
  const [activeEmailBodyId, setActiveEmailBodyId] = useState<string | null>(null);

  // AI Suggestion States
  const [aiSuggestion, setAiSuggestion] = useState<{ statusSummary: string; nextAction: string; whatsappDraft: string } | null>(null);
  const [enlargedMedia, setEnlargedMedia] = useState<{ src: string; type: 'image' | 'video' } | null>(null);
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  const toggleRowExpand = (id: string) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const [loadingAi, setLoadingAi] = useState(false);

  // Fetch inquiries from unified API
  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/unified-inbox');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      } else {
        throw new Error('Failed to fetch unified inbox');
      }
    } catch (err: any) {
      console.error('Error fetching unified inquiries:', err);
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
      const response = await fetch('/api/whatsapp-ai-suggest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: editingLead.name,
          phone: editingLead.phone,
          chatHistory: editingLead.whatsappData?.chat_history || editingLead.emailData?.inquiry || ''
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

  const handleEditClick = (lead: UnifiedInquiry) => {
    setEditingLead(lead);
    
    // Choose the most relevant status/notes
    const initialStatus = lead.hasWhatsApp ? lead.whatsappData?.status : lead.emailData?.status;
    const initialNotes = lead.hasWhatsApp ? lead.whatsappData?.notes : lead.emailData?.notes;
    
    setEditStatus((initialStatus as FollowUpStatus) || '未跟進');
    
    // Extract and parse AI Summary if present
    if (initialNotes && initialNotes.includes('【AI Summary】')) {
      const parsed = parseNotesAiSummary(initialNotes);
      if (parsed) {
        setAiSuggestion(parsed);
      }
      // Remove AI Summary block from the editable notes textbox
      const cleaned = initialNotes.replace(/【AI Summary】[\s\S]*?$/, '').trim();
      setEditNotes(cleaned);
    } else {
      setEditNotes(initialNotes || '');
      setAiSuggestion(null);
    }
    
    const emailToSearch = lead.emailData?.email || '';
    fetchZohoEmails(emailToSearch, lead.name || '');
  };

  const handleSaveEdit = async () => {
    if (!editingLead) return;
    try {
      let finalWhatsappNotes = editNotes;
      let finalEmailNotes = editNotes;

      // Update WhatsApp if present
      if (editingLead.hasWhatsApp && editingLead.whatsappData) {
        const originalNotes = editingLead.whatsappData.notes || '';
        const aiSummaryIndex = originalNotes.indexOf('【AI Summary】');
        const aiSummaryBlock = aiSummaryIndex !== -1 ? originalNotes.substring(aiSummaryIndex) : '';
        finalWhatsappNotes = aiSummaryBlock ? `${editNotes}\n\n${aiSummaryBlock}`.trim() : editNotes;

        const { error } = await supabase
          .from('whatsapp_inquiries')
          .update({
            status: editStatus,
            notes: finalWhatsappNotes
          })
          .eq('id', editingLead.whatsappData.id);
        if (error) throw error;
      }

      // Update Email if present
      if (editingLead.hasEmail && editingLead.emailData) {
        const originalNotes = editingLead.emailData.notes || '';
        const aiSummaryIndex = originalNotes.indexOf('【AI Summary】');
        const aiSummaryBlock = aiSummaryIndex !== -1 ? originalNotes.substring(aiSummaryIndex) : '';
        finalEmailNotes = aiSummaryBlock ? `${editNotes}\n\n${aiSummaryBlock}`.trim() : editNotes;

        const { error } = await supabase
          .from('calendly_inquiries')
          .update({
            status: editStatus,
            notes: finalEmailNotes
          })
          .eq('id', editingLead.emailData.id);
        if (error) throw error;
      }

      // Update state locally
      setInquiries(prev => prev.map(item => 
        item.id === editingLead.id 
          ? { 
              ...item, 
              status: editStatus, 
              whatsappData: item.whatsappData ? { ...item.whatsappData, status: editStatus, notes: finalWhatsappNotes } : null,
              emailData: item.emailData ? { ...item.emailData, status: editStatus, notes: finalEmailNotes } : null
            } 
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
    const notes = (lead.whatsappData?.notes || '') + (lead.emailData?.notes || '');
    const chat = (lead.whatsappData?.chat_history || '') + (lead.emailData?.inquiry || '');
    const email = lead.emailData?.email || '';
    
    return (
      lead.name.toLowerCase().includes(term) ||
      chat.toLowerCase().includes(term) ||
      (lead.phone && lead.phone.includes(term)) ||
      email.toLowerCase().includes(term) ||
      status.toLowerCase().includes(term) ||
      notes.toLowerCase().includes(term)
    );
  });

  // Group by date for calendar view
  const groupedByDate = filteredInquiries.reduce((acc, lead) => {
    let dateStr = 'Unknown Date';
    if (lead.raw_date) {
      const match = lead.raw_date.match(/\d{4}-\d{2}-\d{2}/);
      if (match) dateStr = match[0];
      else dateStr = lead.raw_date;
    } else {
      dateStr = lead.raw_date;
    }
    
    if (!acc[dateStr]) acc[dateStr] = [];
    acc[dateStr].push(lead);
    return acc;
  }, {} as Record<string, UnifiedInquiry[]>);

  const sortedDates = Object.keys(groupedByDate).sort((a, b) => b.localeCompare(a));

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 font-sans text-gray-900">
      
      {/* Board Summary */}
      <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 rounded-2xl p-6 mb-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <MapPin className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-indigo-300"/> Unified Inbox (WhatsApp & Calendly)
          </h2>
          <p className="text-indigo-100 text-sm mb-6">
            追蹤所有 WhatsApp 客戶對話與 Calendly 預約，系統已自動依據電話號碼進行配對合併。
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-indigo-100 block mb-1">總聯絡人</span>
              <span className="text-3xl font-extrabold">{inquiries.length}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-indigo-100 block mb-1">多渠道 (WhatsApp + Email)</span>
              <span className="text-3xl font-extrabold">
                {inquiries.filter(l => l.hasWhatsApp && l.hasEmail).length}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-indigo-100 block mb-1">跟進中</span>
              <span className="text-3xl font-extrabold">
                {inquiries.filter(l => {
                  const s = l.status || '未跟進';
                  return s !== '未跟進' && s !== '已下單' && s !== '無效/垃圾';
                }).length}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <span className="text-xs text-indigo-100 block mb-1">未跟進</span>
              <span className="text-3xl font-extrabold text-orange-300">
                {inquiries.filter(l => (l.status || '未跟進') === '未跟進').length}
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
            placeholder="搜尋名稱、對話內容、電話或狀態..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-50 text-sm"
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
          <table className="w-full text-left text-sm border-collapse table-fixed">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-bold w-[20%]">客戶資訊</th>
                <th className="py-3 px-4 font-bold w-[10%]">渠道</th>
                <th className="py-3 px-4 font-bold w-[30%]">最新對話/詢問 (Chat/Inquiry)</th>
                <th className="py-3 px-4 font-bold w-[15%]">多媒體 (Media)</th>
                <th className="py-3 px-4 font-bold w-[15%]">狀態與備忘</th>
                <th className="py-3 px-4 font-bold text-center w-[10%]">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredInquiries.map((lead, idx) => {
                const status = lead.status || '未跟進';
                const notes = lead.whatsappData?.notes || lead.emailData?.notes || '';
                const mediaItems = extractMediaItems(lead.whatsappData?.chat_history || '', lead.name || '');
                const isExpanded = !!expandedRows[lead.id];
                
                // Get clean last text message for preview
                const chatLines = lead.whatsappData?.chat_history ? lead.whatsappData.chat_history.split('\n') : [];
                let lastTextMsg = '';
                for (let i = chatLines.length - 1; i >= 0; i--) {
                  const line = chatLines[i].trim();
                  if (line && !line.includes('![') && !line.includes('[Attached File:')) {
                    const cleaned = line.replace(/^\*\*\[[\d\-:\s]+\]\s*[^:]+:\*\*\s*/, '').trim();
                    if (cleaned) {
                      lastTextMsg = cleaned;
                      break;
                    }
                  }
                }
                const textPreview = lastTextMsg || lead.emailData?.inquiry || '';

                return (
                  <React.Fragment key={lead.id}>
                    <tr 
                      className={`hover:bg-indigo-50/20 cursor-pointer transition-colors border-b border-gray-100 ${isExpanded ? 'bg-indigo-50/10' : 'bg-white'}`}
                      onClick={() => toggleRowExpand(lead.id)}
                    >
                      <td className="py-2 px-4 align-middle">
                        <div className="font-bold text-gray-900 text-sm">{lead.name}</div>
                        <div className="flex gap-2 text-[10px] text-gray-400 mt-0.5">
                          <span>{lead.raw_date}</span>
                          {lead.phone && <span>• {lead.phone}</span>}
                        </div>
                      </td>
                      <td className="py-2 px-4 align-middle">
                        <div className="flex gap-1">
                          {lead.hasWhatsApp && (
                            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-100/50 flex items-center gap-0.5">
                              WA
                            </span>
                          )}
                          {lead.hasEmail && (
                            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-100/50 flex items-center gap-0.5">
                              Mail
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2 px-4 align-middle max-w-xs">
                        <div className="text-xs text-gray-600 truncate font-mono" title={textPreview}>
                          {textPreview || <span className="text-gray-400 italic">無文字詢問</span>}
                        </div>
                      </td>
                      <td className="py-2 px-4 align-middle">
                        {mediaItems.length > 0 ? (
                          <span className="text-xs font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded border flex items-center gap-1 w-max">
                            📎 {mediaItems.length} 個檔案
                          </span>
                        ) : (
                          <span className="text-gray-400 text-xs italic">無</span>
                        )}
                      </td>
                      <td className="py-2 px-4 align-middle">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold shadow-sm ${STATUS_COLORS[status]}`}>
                          {status}
                        </span>
                      </td>
                      <td className="py-2 px-4 align-middle text-center" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => handleEditClick(lead)}
                            className="px-2.5 py-1 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/50 rounded-lg transition-colors font-bold text-xs shadow-sm flex items-center gap-1"
                          >
                            <Edit2 className="w-3 h-3" /> 跟進
                          </button>
                          <button 
                            onClick={() => toggleRowExpand(lead.id)}
                            className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <span className="text-xs font-bold">{isExpanded ? '▲' : '▼'}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {isExpanded && (
                      <tr className="bg-indigo-50/5">
                        <td colSpan={6} className="py-4 px-6 border-b border-indigo-100/40">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            {/* Left: Chat history */}
                            <div className="space-y-3">
                              {lead.hasWhatsApp && (
                                <div>
                                  <h4 className="font-bold text-emerald-800 flex items-center gap-1 text-xs mb-1.5">
                                    <MessageSquare className="w-3.5 h-3.5"/> WhatsApp 完整對話：
                                  </h4>
                                  <ChatViewer chatHistory={lead.whatsappData?.chat_history || ''} name={lead.name || ''} />
                                </div>
                              )}
                              {lead.hasEmail && (
                                <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-xs text-blue-900">
                                  <h4 className="font-bold flex items-center gap-1 text-blue-800 mb-1">
                                    <Calendar className="w-3.5 h-3.5"/> Calendly 預約詢問：
                                  </h4>
                                  <div className="font-semibold text-blue-900 mb-1">時間: {lead.emailData?.meeting_time}</div>
                                  <pre className="whitespace-pre-wrap font-mono leading-relaxed bg-white p-2.5 rounded border border-blue-100/50 max-h-40 overflow-y-auto text-gray-700">
                                    {lead.emailData?.inquiry || '（無詢問內容）'}
                                  </pre>
                                </div>
                              )}
                            </div>
                            
                            {/* Right: Media list & Notes */}
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-bold text-gray-700 flex items-center gap-1 text-xs mb-1.5">
                                  📁 儲存的多媒體與附件檔案 ({mediaItems.length})：
                                </h4>
                                {mediaItems.length > 0 ? (
                                  <div className="flex flex-wrap gap-2">
                                    {mediaItems.map((item, mIdx) => (
                                      <div key={mIdx} className="hover:scale-105 transition-transform">
                                        {item.type === 'image' ? (
                                          <img 
                                            src={item.src} 
                                            alt={item.filename}
                                            className="w-16 h-16 object-cover rounded-xl border border-gray-300 shadow-sm cursor-zoom-in"
                                            onClick={() => setEnlargedMedia({ src: item.src, type: 'image' })}
                                          />
                                        ) : item.type === 'video' ? (
                                          <div 
                                            className="relative w-16 h-16 rounded-xl border border-gray-300 bg-gray-900 flex items-center justify-center cursor-pointer overflow-hidden shadow-sm"
                                            onClick={() => setEnlargedMedia({ src: item.src, type: 'video' })}
                                          >
                                            <video src={item.src} className="w-full h-full object-cover opacity-60" />
                                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">▶</span>
                                          </div>
                                        ) : (
                                          <a 
                                            href={item.src} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-16 h-16 rounded-xl border border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shadow-sm text-[10px]"
                                            title={item.filename}
                                          >
                                            <Download className="w-5 h-5 mb-0.5 text-gray-600" />
                                            下載
                                          </a>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <span className="text-gray-400 text-xs italic">無媒體檔案</span>
                                )}
                              </div>
                              
                              {notes && (
                                <div>
                                  <h4 className="font-bold text-gray-700 text-xs mb-1">跟進備忘：</h4>
                                  <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                                    {notes}
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex gap-2 pt-2">
                                <button 
                                  onClick={() => handleEditClick(lead)}
                                  className="px-4 py-2 bg-indigo-700 text-white hover:bg-indigo-800 rounded-xl font-bold text-xs shadow-sm flex items-center gap-1.5"
                                >
                                  <Edit2 className="w-3.5 h-3.5" /> 編輯/更新進度
                                </button>
                                <button 
                                  onClick={() => toggleRowExpand(lead.id)}
                                  className="px-3 py-2 text-gray-500 hover:text-gray-700 text-xs font-semibold"
                                >
                                  收起詳情
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
                  <Calendar className="w-5 h-5 text-indigo-600"/>
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
                        <div className="flex gap-1 mb-2">
                           {lead.hasWhatsApp && <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 rounded">WA</span>}
                           {lead.hasEmail && <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 rounded">Email</span>}
                        </div>
                        <div className="text-[11px] text-gray-500 mb-4 line-clamp-3 min-h-[3rem] font-mono">
                          {lead.hasWhatsApp ? lead.whatsappData?.chat_history : lead.emailData?.inquiry}
                        </div>
                        <div className="flex items-center gap-2 border-t pt-3 mt-auto">
                          <button
                            onClick={() => handleEditClick(lead)}
                            className="flex-1 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 rounded-lg text-xs font-bold transition-colors text-center"
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
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  {editingLead.name}
                  <span className="flex gap-1">
                    {editingLead.hasWhatsApp && <MessageSquare className="w-4 h-4 text-emerald-500"/>}
                    {editingLead.hasEmail && <Mail className="w-4 h-4 text-blue-500"/>}
                  </span>
                </h3>
                <p className="text-gray-500 text-sm">{editingLead.phone || '無電話'}</p>
                {editingLead.emailData?.email && <p className="text-gray-500 text-sm">{editingLead.emailData.email}</p>}
              </div>
              <button onClick={() => setEditingLead(null)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">跟進狀態</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                  value={editStatus}
                  onChange={e => setEditStatus(e.target.value as FollowUpStatus)}
                >
                  {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">跟進記錄與備忘</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-gray-50 h-28 text-sm"
                  placeholder="輸入已聯繫細節、樣品郵遞單號、或者下單規格等..."
                  value={editNotes}
                  onChange={e => setEditNotes(e.target.value)}
                />
              </div>

              {editingLead.hasWhatsApp && (
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-xs text-emerald-900">
                  <span className="font-bold flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5"/> WhatsApp 對話：</span>
                  <ChatViewer chatHistory={editingLead.whatsappData?.chat_history || ''} name={editingLead.name || ''} />
                </div>
              )}
              
              {editingLead.hasEmail && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-xs text-blue-900">
                  <span className="font-bold flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> Calendly 預約詢問：</span>
                  <div className="mt-1 font-semibold text-blue-800">時間: {editingLead.emailData?.meeting_time}</div>
                  <pre className="mt-1 leading-relaxed text-blue-800 whitespace-pre-wrap font-mono max-h-40 overflow-y-auto">{editingLead.emailData?.inquiry || '（未填寫）'}</pre>
                </div>
              )}

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
                            <div className="text-[10px] text-indigo-600 font-semibold">載入全文中...</div>
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
                    <span className="text-indigo-500">✨</span>
                    🤖 Antigravity 智能跟進建議
                  </label>
                  {!aiSuggestion && !loadingAi && (
                    <button
                      onClick={fetchAiSuggestion}
                      className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded-lg border border-indigo-200 transition-colors"
                    >
                      生成建議
                    </button>
                  )}
                </div>

                {loadingAi ? (
                  <div className="text-center py-4 text-xs text-gray-500 animate-pulse">分析信件/對話往來並生成建議中...</div>
                ) : aiSuggestion ? (
                  <div className="p-3 bg-gradient-to-r from-indigo-50/50 to-blue-50/30 rounded-xl border border-indigo-100/60 text-xs space-y-2">
                    <div className="flex flex-col gap-1">
                      <div>
                        <span className="font-semibold text-indigo-900">當前狀態：</span>
                        <span className="text-gray-700">{aiSuggestion.statusSummary}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-indigo-900">建議下一步：</span>
                        <span className="text-gray-700">{aiSuggestion.nextAction}</span>
                      </div>
                    </div>
                    <div className="mt-2.5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-indigo-900">建議回覆草稿 (WhatsApp/Email)：</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(aiSuggestion.whatsappDraft);
                            alert('草稿已複製到剪貼簿！');
                          }}
                          className="text-[10px] text-indigo-700 hover:underline flex items-center gap-1 font-bold"
                        >
                          <Copy className="w-3 h-3"/> 複製草稿
                        </button>
                      </div>
                      <pre className="p-2.5 bg-white rounded border border-gray-150 text-[11px] text-gray-700 whitespace-pre-wrap font-mono leading-relaxed max-h-40 overflow-y-auto">
                        {aiSuggestion.whatsappDraft}
                      </pre>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
              <button
                onClick={() => generateICS(editingLead, editingLead.raw_date, editNotes)}
                className="px-4 py-2 text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-xl font-medium flex items-center gap-2 mr-auto"
              >
                <Bell className="w-4 h-4"/> 加入日曆提醒
              </button>
              <button onClick={() => setEditingLead(null)} className="px-5 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium">取消</button>
              <button onClick={handleSaveEdit} className="px-6 py-2 bg-indigo-700 text-white hover:bg-indigo-800 rounded-xl font-bold flex items-center gap-2 shadow-md"><Save className="w-4 h-4"/> 儲存跟進</button>
            </div>
          </div>
        </div>
      )}
      {enlargedMedia && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          onClick={() => setEnlargedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-2 shadow-2xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setEnlargedMedia(null)} 
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-200 text-sm flex items-center gap-1 bg-black/40 hover:bg-black/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" /> 關閉 (Close)
            </button>
            {enlargedMedia.type === 'image' ? (
              <img src={enlargedMedia.src} className="max-w-full max-h-[80vh] rounded-lg object-contain" alt="Enlarged" />
            ) : (
              <video src={enlargedMedia.src} controls autoPlay className="max-w-full max-h-[80vh] rounded-lg object-contain" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface ChatMessage {
  time: string;
  sender: string;
  content: string;
  isMe: boolean;
}

const parseChatHistory = (history: string, customerName: string): ChatMessage[] => {
  if (!history) return [];
  const lines = history.split('\n');
  const messages: ChatMessage[] = [];
  let currentMsg: ChatMessage | null = null;

  const headerRegex = /^\*\*\[([\d\-:\s]+)\]\s*([^:]+):\*\*(.*)$/;

  for (const line of lines) {
    const match = line.match(headerRegex);
    if (match) {
      if (currentMsg) {
        messages.push(currentMsg);
      }
      const time = match[1].trim();
      const sender = match[2].trim();
      const content = match[3].trim();
      currentMsg = {
        time,
        sender,
        content,
        isMe: sender.toLowerCase() === 'you'
      };
    } else {
      if (currentMsg) {
        currentMsg.content += '\n' + line;
      } else {
        currentMsg = {
          time: '',
          sender: customerName,
          content: line,
          isMe: false
        };
      }
    }
  }
  if (currentMsg) {
    messages.push(currentMsg);
  }
  return messages;
};

const resolveMediaUrl = (url: string, name: string) => {
  const cleanName = name.replace(/[^a-zA-Z0-9]/g, '');
  const filename = url.split('/').pop() || '';
  return `/whatsapp_media/${cleanName}/${filename}`;
};

const renderMessageContent = (content: string, name: string) => {
  // Check image
  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
  const imgMatch = content.match(imgRegex);
  if (imgMatch) {
    const alt = imgMatch[1];
    const src = resolveMediaUrl(imgMatch[2], name);
    return <img src={src} alt={alt} className="max-w-full rounded-lg border border-gray-200 shadow-sm mt-1" />;
  }

  // Check video/file link
  const fileRegex = /\[Attached File:\s*([^\]]+)\]\(([^)]+)\)/i;
  const fileMatch = content.match(fileRegex);
  if (fileMatch) {
    const filename = fileMatch[1];
    const src = resolveMediaUrl(fileMatch[2], name);
    const isVideo = filename.toLowerCase().endsWith('.mp4') || filename.toLowerCase().endsWith('.mov');
    if (isVideo) {
      return (
        <video src={src} controls className="max-w-full rounded-lg border border-gray-200 shadow-sm mt-1">
          Your browser does not support the video tag.
        </video>
      );
    }
    return (
      <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline font-semibold mt-1">
        <Download className="w-4 h-4" /> {filename}
      </a>
    );
  }

  return <div className="whitespace-pre-wrap">{content}</div>;
};

const ChatViewer = ({ chatHistory, name }: { chatHistory: string; name: string }) => {
  const messages = parseChatHistory(chatHistory, name);
  if (messages.length === 0) {
    return <div className="text-gray-500 italic py-2">無對話記錄</div>;
  }
  return (
    <div className="mt-2 space-y-3 max-h-80 overflow-y-auto p-3 bg-gray-50 rounded-xl border border-gray-200">
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
          <div className="text-[10px] text-gray-500 mb-0.5 px-1">{msg.sender} • {msg.time}</div>
          <div className={`p-2.5 rounded-2xl max-w-[85%] text-xs shadow-sm ${msg.isMe ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-gray-900 rounded-tl-none border border-gray-100'}`}>
            {renderMessageContent(msg.content, name)}
          </div>
        </div>
      ))}
    </div>
  );
};

const parseNotesAiSummary = (notes: string) => {
  if (!notes || !notes.includes('【AI Summary】')) return null;
  const statusMatch = notes.match(/互動狀態：([^\n]+)/);
  const nextMatch = notes.match(/下一步行動：([^\n]+)/);
  const draftMatch = notes.match(/建議回覆：([\s\S]+)$/);
  
  return {
    statusSummary: statusMatch ? statusMatch[1].trim() : '',
    nextAction: nextMatch ? nextMatch[1].trim() : '',
    whatsappDraft: draftMatch ? draftMatch[1].trim() : ''
  };
};

export interface MediaItem {
  src: string;
  filename: string;
  type: 'image' | 'video' | 'other';
}

export const extractMediaItems = (history: string, name: string): MediaItem[] => {
  if (!history) return [];
  const items: MediaItem[] = [];
  
  // Reset regex lastIndex
  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  while ((match = imgRegex.exec(history)) !== null) {
    const src = resolveMediaUrl(match[2], name);
    const filename = match[2].split('/').pop() || '';
    items.push({ src, filename, type: 'image' });
  }
  
  const fileRegex = /\[Attached File:\s*([^\]]+)\]\(([^)]+)\)/gi;
  while ((match = fileRegex.exec(history)) !== null) {
    const filename = match[1];
    const src = resolveMediaUrl(match[2], name);
    const isVideo = filename.toLowerCase().endsWith('.mp4') || filename.toLowerCase().endsWith('.mov');
    items.push({ 
      src, 
      filename, 
      type: isVideo ? 'video' : 'other' 
    });
  }
  
  return items;
};

