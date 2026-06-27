import React, { useState, useEffect } from 'react';
import { Search, MapPin, TrendingUp, BookOpen, Video, ExternalLink, MessageSquare, Star, Save, X, Edit2, Info, Calendar, Clock, Bell } from 'lucide-react';

export type ApplicationStatus = '未開始' | '資料搜集' | '簡介會' | '準備作品集' | '已報名' | '首輪面試' | '次輪面試' | '取錄' | '候補' | '拒絕';

export interface SchoolInfo {
  id: string;
  nameZh: string;
  nameEn: string;
  district: string;
  banding: string;
  englishPercent: number;
  specialPoints: string;
  areaFocus: string;
  status: ApplicationStatus;
  notes: string;
  videoLink: string;
  officialLink: string;
  deadlineDate?: string;
  interviewDate?: string;
  otherDate?: string;
}

const INITIAL_SCHOOLS: SchoolInfo[] = [
  // Sha Tin
  { id: 'st1', nameZh: '聖公會曾肇添中學', nameEn: 'SKH Tsang Shiu Tim Secondary School', district: '沙田', banding: '1A', englishPercent: 73, specialPoints: '沙田區頂尖學術表現，濃厚英語語境。', areaFocus: '學術及全面發展', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.skhtst.edu.hk/' },
  { id: 'st2', nameZh: '沙田崇真中學', nameEn: 'Shatin Tsung Tsin Secondary School', district: '沙田', banding: '1A', englishPercent: 84, specialPoints: '極高英語教學比例，出色的學生支援及關愛校園。', areaFocus: '語文及德育', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.sttss.edu.hk/' },
  { id: 'st3', nameZh: '培僑書院', nameEn: 'Pui Kiu College', district: '沙田', banding: '1A', englishPercent: 73, specialPoints: '直資學校，提供中小學一條龍，具國際視野。', areaFocus: '直資及國際視野', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.puikiucollege.edu.hk/' },
  { id: 'st4', nameZh: '浸信會呂明才中學', nameEn: 'Baptist Lui Ming Choi Secondary School', district: '沙田', banding: '1A', englishPercent: 71, specialPoints: '沙田區傳統名校，學術成績優異。', areaFocus: '學術', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.blmcss.edu.hk/' },
  { id: 'st5', nameZh: '沙田培英中學', nameEn: 'Shatin Pui Ying College', district: '沙田', banding: '1B-1A', englishPercent: 71, specialPoints: '穩健的英文中學，著重學生的品格培養。', areaFocus: '學術及品格', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.spy.edu.hk/' },
  { id: 'st6', nameZh: '沙田蘇浙公學', nameEn: 'Kiangsu-Chekiang College (Shatin)', district: '沙田', banding: '1B-1A', englishPercent: 73, specialPoints: '注重中英雙語發展。', areaFocus: '雙語發展', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.kccs.edu.hk/' },
  { id: 'st7', nameZh: '聖公會林裘謀中學', nameEn: 'SKH Lam Kau Mow Secondary School', district: '沙田', banding: '1B', englishPercent: 73, specialPoints: '學術與課外活動均衡發展。', areaFocus: '全面發展', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.skhlkmss.edu.hk/' },
  { id: 'st8', nameZh: '沙田循道衛理中學', nameEn: 'Sha Tin Methodist College', district: '沙田', banding: '1B', englishPercent: 72, specialPoints: '積極參與社區活動，提供良好的關愛文化。', areaFocus: '德育與關愛', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.stmc.edu.hk/' },
  { id: 'st9', nameZh: '天主教郭得勝中學', nameEn: 'Kwok Tak Seng Catholic Secondary School', district: '沙田', banding: '1B', englishPercent: 70, specialPoints: '天主教理念濃厚，校風嚴謹。', areaFocus: '紀律與品德', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.ktscss.edu.hk/' },
  { id: 'st10', nameZh: '聖羅撒書院', nameEn: "St. Rose of Lima's College", district: '沙田', banding: '1B', englishPercent: 96, specialPoints: '極佳的英語語境，傳統女校。', areaFocus: '英語及女子教育', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.srl.edu.hk/' },
  { id: 'st11', nameZh: '五旬節林漢光中學', nameEn: 'Pentecostal Lam Hon Kwong School', district: '沙田', banding: '1B', englishPercent: 69, specialPoints: '注重學生身心靈健康及主動學習。', areaFocus: '主動學習', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.plhks.edu.hk/' },
  { id: 'st12', nameZh: '沙田官立中學', nameEn: 'Sha Tin Government Secondary School', district: '沙田', banding: '1B', englishPercent: 73, specialPoints: '資源穩定的官立中學。', areaFocus: '學術', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.stgss.edu.hk/' },
  { id: 'st13', nameZh: '王錦輝中小學', nameEn: 'HKBUAS Wong Kam Fai Secondary and Primary School', district: '沙田', banding: '1C-1B', englishPercent: 85, specialPoints: '直資一條龍學校，英語語境極佳，注重全人發展。', areaFocus: '直資及全人發展', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.hkbuas.edu.hk/' },
  { id: 'st14', nameZh: '香港神託會培基書院', nameEn: 'Stewards Pooi Kei College', district: '沙田', banding: '1C-1B', englishPercent: 71, specialPoints: '直資學校，課程創新且著重資訊科技。', areaFocus: '直資及資訊科技', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.spkc.edu.hk/' },
  { id: 'st15', nameZh: '中華宣道會鄭榮之中學', nameEn: 'Christian Alliance Cheng Wing Gee College', district: '沙田', banding: '1C', englishPercent: 70, specialPoints: '校風淳樸，提供良好的學術增值。', areaFocus: '學生支援', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.cacwgc.edu.hk/' },
  { id: 'st16', nameZh: '賽馬會體藝中學', nameEn: 'Jockey Club Ti-I College', district: '沙田', banding: '1C', englishPercent: 96, specialPoints: '全英語教學環境，專門培訓體育及視覺藝術人才。', areaFocus: '體育及藝術', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.tic.edu.hk/' },
  
  // Tai Po
  { id: 'tp1', nameZh: '迦密柏雨中學', nameEn: 'Carmel Pak U Secondary School', district: '大埔', banding: '1A', englishPercent: 73, specialPoints: '大埔區頂尖學府，公開考試成績非常優異。', areaFocus: '學術', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.cpu.edu.hk/' },
  { id: 'tp2', nameZh: '聖公會莫壽增會督中學', nameEn: 'SKH Bishop Mok Sau Tseng Secondary School', district: '大埔', banding: '1A', englishPercent: 69, specialPoints: '大埔區傳統英中名校，著重全人教育。', areaFocus: '學術及全面發展', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.mst.edu.hk/' },
  { id: 'tp3', nameZh: '恩主教書院', nameEn: 'Valtorta College', district: '大埔', banding: '1B', englishPercent: 72, specialPoints: '天主教學校，良好的英語學習氛圍。', areaFocus: '德育與語文', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.valtorta.edu.hk/' },
  { id: 'tp4', nameZh: '王肇枝中學', nameEn: 'Wong Shiu Chi Secondary School', district: '大埔', banding: '1B', englishPercent: 67, specialPoints: '歷史悠久，擁有優良傳統及強大的校友網絡。', areaFocus: '傳統及學術', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.wscss.edu.hk/' },
  { id: 'tp5', nameZh: '南亞路德會沐恩中學', nameEn: 'SALEM-Immanuel Lutheran College', district: '大埔', banding: '1C', englishPercent: 69, specialPoints: '強大的訓輔關愛系統及支援學習氛圍。', areaFocus: '關愛文化', status: '未開始', notes: '', videoLink: '', officialLink: 'https://www.ilc.edu.hk/' },
];

const STATUS_COLORS: Record<ApplicationStatus, string> = {
  '未開始': 'bg-gray-100 text-gray-600 border-gray-200',
  '資料搜集': 'bg-blue-50 text-blue-700 border-blue-200',
  '簡介會': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  '準備作品集': 'bg-purple-50 text-purple-700 border-purple-200',
  '已報名': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  '首輪面試': 'bg-orange-50 text-orange-700 border-orange-200',
  '次輪面試': 'bg-amber-50 text-amber-700 border-amber-200',
  '取錄': 'bg-green-50 text-green-700 border-green-200',
  '候補': 'bg-teal-50 text-teal-700 border-teal-200',
  '拒絕': 'bg-red-50 text-red-700 border-red-200',
};

const generateICS = (school: SchoolInfo, date: string, type: string) => {
  if (!date) return;
  const dateStr = date.replace(/-/g, '');
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AchievePack//SchoolTracker//EN
BEGIN:VEVENT
SUMMARY:${type} - ${school.nameZh}
DTSTART;VALUE=DATE:${dateStr}
DTEND;VALUE=DATE:${dateStr}
DESCRIPTION:【升學追蹤名單】${school.nameZh} (${school.nameEn}) - ${type}\\n\\nBand: ${school.banding}\\n地區: ${school.district}\\n官方網站: ${school.officialLink}
ATTENDEE;RSVP=TRUE:mailto:ryan@achievepack.com
ATTENDEE;RSVP=TRUE:mailto:jericha@pouch.eco
BEGIN:VALARM
TRIGGER:-P14D
ACTION:DISPLAY
DESCRIPTION:2週前提醒
END:VALARM
BEGIN:VALARM
TRIGGER:-P7D
ACTION:DISPLAY
DESCRIPTION:1週前提醒
END:VALARM
BEGIN:VALARM
TRIGGER:-P3D
ACTION:DISPLAY
DESCRIPTION:3天前提醒
END:VALARM
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:1天前提醒
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${school.nameZh}_${type}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function SchoolTracker() {
  const [schools, setSchools] = useState<SchoolInfo[]>(() => {
    const saved = localStorage.getItem('school_tracker_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved schools', e);
      }
    }
    return INITIAL_SCHOOLS;
  });

  const [sortField, setSortField] = useState<'district' | 'banding' | 'englishPercent'>('banding');
  const [sortAsc, setSortAsc] = useState(true);
  const [filterDistrict, setFilterDistrict] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'table' | 'calendar'>('table');
  
  const [editingSchool, setEditingSchool] = useState<SchoolInfo | null>(null);

  useEffect(() => {
    localStorage.setItem('school_tracker_v3', JSON.stringify(schools));
  }, [schools]);

  const handleSort = (field: 'district' | 'banding' | 'englishPercent') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedSchools = [...schools]
    .filter(s => filterDistrict === 'All' || s.district === filterDistrict)
    .filter(s => filterStatus === 'All' || s.status === filterStatus)
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === 'englishPercent') {
        comparison = b.englishPercent - a.englishPercent; // Default High to Low
      } else if (sortField === 'banding') {
        // Simple string comparison works well for 1A, 1B, 1C
        comparison = a.banding.localeCompare(b.banding);
      } else if (sortField === 'district') {
        comparison = a.district.localeCompare(b.district);
      }
      return sortAsc ? comparison : -comparison;
    });

  const handleSaveEdit = () => {
    if (!editingSchool) return;
    setSchools(prev => prev.map(s => s.id === editingSchool.id ? editingSchool : s));
    setEditingSchool(null);
  };

  // Generate Calendar Events
  const calendarEvents = schools.flatMap(s => {
    const events = [];
    if (s.deadlineDate) events.push({ date: s.deadlineDate, type: '報名截止', school: s, color: 'bg-red-100 text-red-800 border-red-200' });
    if (s.interviewDate) events.push({ date: s.interviewDate, type: '面試日期', school: s, color: 'bg-blue-100 text-blue-800 border-blue-200' });
    if (s.otherDate) events.push({ date: s.otherDate, type: '重要日程', school: s, color: 'bg-purple-100 text-purple-800 border-purple-200' });
    return events;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 font-sans text-gray-900">
      
      {/* AI Analysis Summary Board */}
      <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-6 mb-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Star className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-blue-300"/> AI 智能分析及建議</h2>
          <p className="text-blue-200 text-sm mb-6">聚焦沙田及大埔區 Band 1 中學目標。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-bold text-blue-100 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4"/> 頂尖學術之選</h3>
              <p className="text-xs text-blue-50 mb-2">最高學術要求及優異大學入學率。</p>
              <ul className="text-sm font-medium space-y-1">
                <li>🏆 聖公會曾肇添中學 (1A, 沙田)</li>
                <li>🏆 浸信會呂明才中學 (1A, 沙田)</li>
                <li>🏆 迦密柏雨中學 (1A, 大埔)</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-bold text-blue-100 mb-2 flex items-center gap-2"><MessageSquare className="w-4 h-4"/> 最佳英語語境</h3>
              <p className="text-xs text-blue-50 mb-2">提供接近 100% 全英語教學環境的學校。</p>
              <ul className="text-sm font-medium space-y-1">
                <li>🌟 賽馬會體藝中學 (96% 英語)</li>
                <li>🌟 聖羅撒書院 (96% 英語)</li>
                <li>🌟 王錦輝中小學 (85% 英語, 直資)</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <h3 className="font-bold text-blue-100 mb-2 flex items-center gap-2"><Star className="w-4 h-4"/> 特色及直資之選</h3>
              <p className="text-xs text-blue-50 mb-2">提供多元化課程的直資或特色學校。</p>
              <ul className="text-sm font-medium space-y-1">
                <li>🎨 賽馬會體藝中學 (體育及藝術)</li>
                <li>🌍 培僑書院 (國際視野)</li>
                <li>💻 香港神託會培基書院 (資訊科技)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Map */}
      <div className="bg-gray-100 p-2 rounded-2xl mb-8 border border-gray-200 shadow-inner">
        <div className="flex items-center gap-2 px-2 pb-2 pt-1 text-gray-700 font-bold">
          <MapPin className="w-5 h-5 text-red-500" />
          沙田及大埔區學校地圖總覽
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d118228.02641907722!2d114.179379!3d22.408719!3m2!1i1024!2i768!4f13.1!2m1!1sSecondary%20Schools%20in%20Sha%20Tin%20and%20Tai%20Po!5e0!3m2!1sen!2shk!4v1700000000000!5m2!1sen!2shk"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-gray-800">升學追蹤名單 ({schools.length} 間)</h2>
          <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
            <button 
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1 transition-colors ${viewMode === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              列表模式
            </button>
            <button 
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1 transition-colors ${viewMode === 'calendar' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Calendar className="w-4 h-4"/> 日曆模式
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          {viewMode === 'table' && (
            <>
              <select 
                className="p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                value={filterDistrict}
                onChange={(e) => setFilterDistrict(e.target.value)}
              >
                <option value="All">所有地區</option>
                <option value="沙田">沙田區 (Sha Tin)</option>
                <option value="大埔">大埔區 (Tai Po)</option>
              </select>
              <select 
                className="p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">所有申請狀態</option>
                {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </>
          )}
          <button 
            onClick={() => {
              if (confirm('確定重設所有學校的申請狀態及備註嗎？這將會清除所有紀錄。')) setSchools(INITIAL_SCHOOLS);
            }}
            className="p-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            重設資料
          </button>
        </div>
      </div>

      {viewMode === 'calendar' ? (
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 min-h-[400px]">
          <h3 className="font-bold text-gray-800 text-lg mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600"/> 即將到來的重要日程
          </h3>
          {calendarEvents.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              目前未有設定任何日程，請點擊學校的「編輯」按鈕加入報名或面試日期。
            </div>
          ) : (
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {calendarEvents.map((ev, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Calendar className="w-4 h-4" />
                  </div>
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`px-2 py-0.5 text-xs font-bold rounded-md border ${ev.color}`}>{ev.type}</span>
                      <span className="text-sm font-bold text-gray-600">{ev.date}</span>
                    </div>
                    <a href={ev.school.officialLink} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-700 hover:underline">
                      {ev.school.nameZh}
                    </a>
                    <div className="text-xs text-gray-500 mt-1 flex gap-2">
                      <span>Band {ev.school.banding}</span> • 
                      <span>{ev.school.district}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-4">
                      <button 
                        onClick={() => setEditingSchool(ev.school)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <Edit2 className="w-3 h-3"/> 更新進度
                      </button>
                      <button 
                        onClick={() => generateICS(ev.school, ev.date, ev.type)}
                        className="text-xs font-bold text-green-600 hover:text-green-800 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md"
                      >
                        <Bell className="w-3 h-3"/> 加入提醒 (14, 7, 3, 1 天前)
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 text-gray-700">
              <th className="py-3 px-4 font-semibold w-1/4">學校名稱</th>
              <th className="py-3 px-4 font-semibold cursor-pointer hover:bg-gray-200 w-24" onClick={() => handleSort('banding')}>
                Banding {sortField === 'banding' && (sortAsc ? '↑' : '↓')}
              </th>
              <th className="py-3 px-4 font-semibold cursor-pointer hover:bg-gray-200 w-24" onClick={() => handleSort('englishPercent')}>
                英語比例 {sortField === 'englishPercent' && (sortAsc ? '↑' : '↓')}
              </th>
              <th className="py-3 px-4 font-semibold cursor-pointer hover:bg-gray-200 w-28" onClick={() => handleSort('district')}>
                所屬地區 {sortField === 'district' && (sortAsc ? '↑' : '↓')}
              </th>
              <th className="py-3 px-4 font-semibold w-24">地圖位置</th>
              <th className="py-3 px-4 font-semibold">申請狀態及備註</th>
              <th className="py-3 px-4 font-semibold w-16">操作</th>
            </tr>
          </thead>
          <tbody>
            {sortedSchools.map((s, idx) => (
              <tr key={s.id} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                <td className="py-3 px-4 align-top">
                  <a href={s.officialLink} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:underline flex items-center gap-1 group">
                    {s.nameZh}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="text-xs text-gray-500 mb-1">{s.nameEn}</div>
                  <div className="text-xs text-blue-600 flex items-center gap-1">
                    <Info className="w-3 h-3" /> {s.areaFocus}
                  </div>
                </td>
                <td className="py-3 px-4 align-top">
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-800 font-bold rounded-md text-xs">{s.banding}</span>
                </td>
                <td className="py-3 px-4 align-top font-semibold text-gray-700">
                  {s.englishPercent}%
                </td>
                <td className="py-3 px-4 align-top">
                  <div className="flex items-center gap-1 text-gray-600"><MapPin className="w-3 h-3"/> {s.district}</div>
                </td>
                <td className="py-3 px-4 align-top">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.nameZh + ' ' + s.district)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-colors w-fit"
                  >
                    <MapPin className="w-3 h-3" /> 查看地圖
                  </a>
                </td>
                <td className="py-3 px-4 align-top">
                  <span className={`px-2.5 py-1 border rounded-full text-xs font-semibold ${STATUS_COLORS[s.status]}`}>
                    {s.status}
                  </span>
                  {s.notes && (
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2 italic border-l-2 border-gray-300 pl-2">
                      {s.notes}
                    </p>
                  )}
                </td>
                <td className="py-3 px-4 align-top">
                  <button 
                    onClick={() => setEditingSchool(s)}
                    className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {sortedSchools.length === 0 && (
              <tr><td colSpan={6} className="text-center py-8 text-gray-500">找不到符合條件的學校。</td></tr>
            )}
          </tbody>
        </table>
      </div>
      )}

      {/* Editing Modal */}
      {editingSchool && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6 border-b pb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{editingSchool.nameZh}</h3>
                <p className="text-gray-500 text-sm">{editingSchool.nameEn}</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded text-xs">Band {editingSchool.banding}</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{editingSchool.district}</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">{editingSchool.englishPercent}% 英語教學</span>
                </div>
              </div>
              <button onClick={() => setEditingSchool(null)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 h-full">
                <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2"><Star className="w-4 h-4"/> AI 學校分析</h4>
                <p className="text-sm text-blue-800"><span className="font-semibold">學校焦點：</span> {editingSchool.areaFocus}</p>
                <p className="text-sm text-blue-800 mt-1"><span className="font-semibold">特別優勢：</span> {editingSchool.specialPoints}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-center h-full">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-red-500"/> 地理位置</h4>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(editingSchool.nameZh + ' ' + editingSchool.district)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-white border border-gray-300 rounded-lg text-sm font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  在 Google 地圖中開啟
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">目前申請狀態</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  value={editingSchool.status}
                  onChange={e => setEditingSchool({...editingSchool, status: e.target.value as ApplicationStatus})}
                >
                  {Object.keys(STATUS_COLORS).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">個人申請備忘錄</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 h-24"
                  placeholder="紀錄申請進度、要求文件等等..."
                  value={editingSchool.notes}
                  onChange={e => setEditingSchool({...editingSchool, notes: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-xl border border-gray-200">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">報名截止日期</label>
                  <input 
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                    value={editingSchool.deadlineDate || ''}
                    onChange={e => setEditingSchool({...editingSchool, deadlineDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">面試日期</label>
                  <input 
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                    value={editingSchool.interviewDate || ''}
                    onChange={e => setEditingSchool({...editingSchool, interviewDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">其他重要日子</label>
                  <input 
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                    value={editingSchool.otherDate || ''}
                    onChange={e => setEditingSchool({...editingSchool, otherDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><Video className="w-4 h-4"/> 影片 / 面試記錄連結</label>
                  <input 
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    placeholder="https://youtube.com/..."
                    value={editingSchool.videoLink}
                    onChange={e => setEditingSchool({...editingSchool, videoLink: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><ExternalLink className="w-4 h-4"/> 學校官方網頁</label>
                  <input 
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 text-blue-600"
                    value={editingSchool.officialLink}
                    onChange={e => setEditingSchool({...editingSchool, officialLink: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-200">
              <a 
                href={editingSchool.officialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl font-medium flex items-center gap-2 mr-auto"
              >
                <ExternalLink className="w-4 h-4"/> 前往官網
              </a>
              <button onClick={() => setEditingSchool(null)} className="px-5 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium">取消</button>
              <button onClick={handleSaveEdit} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold flex items-center gap-2 shadow-md"><Save className="w-4 h-4"/> 儲存進度</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
