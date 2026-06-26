import React, { useState, useEffect } from 'react';
import { User, Plus, Edit2, Trash2, Save, X, Download } from 'lucide-react';

interface Certificate {
  id: string;
  date: string;
  titleZh: string;
  titleEn: string;
  awardZh: string;
  awardEn: string;
  category: 'In-School' | 'Out-of-School';
}

interface School {
  id: string;
  grade: string;
  period: string;
  nameZh: string;
  nameEn: string;
}

interface Profile {
  id: string;
  name: string;
  englishName: string;
  genderZh: string;
  genderEn: string;
  dob: string;
  photoUrl: string;
  schools: School[];
  fatherName: string;
  fatherJobZh: string;
  fatherJobEn: string;
  fatherContact: string;
  motherName: string;
  motherJobZh: string;
  motherJobEn: string;
  motherContact: string;
  addressZh: string;
  addressEn: string;
  certificates: Certificate[];
}

const INITIAL_PROFILES: Profile[] = [
  {
    id: 'max',
    name: '黃樂天',
    englishName: 'WONG, Lok Tin',
    genderZh: '男',
    genderEn: 'Male',
    dob: '20-06-2014',
    photoUrl: '/max-photo.png',
    schools: [
      { id: 's1', grade: 'P5', period: '2026.04-present', nameZh: '世界龍岡學校黃耀南小學, 香港', nameEn: 'L.K.W.F.S. Ltd. Wong Yiu Nam Primary School, Hong Kong' },
      { id: 's2', grade: 'P2-P6', period: '2021.09-2026.03', nameZh: '東莞市嘉榮外國語學校，東莞', nameEn: 'Dongguan Jiarong Foreign Language School, Dongguan' },
    ],
    fatherName: 'Ryan Wong',
    fatherJobZh: '企業家',
    fatherJobEn: 'Business Owner',
    fatherContact: '69704411',
    motherName: 'Jericha Kwok',
    motherJobZh: '家庭主婦及企業家',
    motherJobEn: 'Housewife & Business Owner',
    motherContact: '69271082',
    addressZh: '香港 / 東莞',
    addressEn: 'Hong Kong / Dongguan',
    certificates: [
      // In-School Experiences/Honors
      { id: 'm_new1', date: '2025-2026', titleZh: '擔任學校優秀主持人', titleEn: 'Excellent Host of the School', awardZh: '優秀主持人', awardEn: 'Excellent Host', category: 'In-School' },
      { id: 'm_new2', date: '2025-2026', titleZh: '擔任學校優秀國旗手', titleEn: 'Excellent National Flag Raiser', awardZh: '優秀國旗手', awardEn: 'Excellent Flag Raiser', category: 'In-School' },
      { id: 'm_new3', date: '2025-2026', titleZh: '擔任學校大隊委', titleEn: 'School Brigade Committee Member', awardZh: '大隊委', awardEn: 'Committee Member', category: 'In-School' },
      { id: 'm_new4', date: '2023-2026', titleZh: '加入學校足球隊', titleEn: 'School Football Team Member', awardZh: '足球隊成員', awardEn: 'Team Member', category: 'In-School' },
      { id: 'm_new5', date: '2025-2026', titleZh: '擔任學校優秀鼓手', titleEn: 'Excellent Drummer of the School', awardZh: '優秀鼓手', awardEn: 'Excellent Drummer', category: 'In-School' },
      
      // In-School Academic/Awards
      { id: 'm1', date: '2025-06', titleZh: '閱讀考級', titleEn: 'Reading Level Exam', awardZh: '四級進士', awardEn: 'Level 4 Scholar', category: 'In-School' },
      { id: 'm2', date: '2026-01', titleZh: '英語詞彙挑戰', titleEn: 'English Word Levelled Challenge', awardZh: 'Word Master', awardEn: 'Word Master', category: 'In-School' },
      { id: 'm3', date: '2025-09', titleZh: '暑假語文作業', titleEn: 'Summer Chinese Assignment', awardZh: '語文暑假強基作業小達人', awardEn: 'Chinese Assignment Expert', category: 'In-School' },
      { id: 'm5', date: '2026-01', titleZh: '期末素養評估', titleEn: 'Final Literacy Assessment', awardZh: '精優學業標兵獎', awardEn: 'Excellent Academic Pacesetter', category: 'In-School' },
      { id: 'm7', date: '2026-01', titleZh: '英語口語演講', titleEn: 'JFLS English Oral Presentation', awardZh: 'Super Presenter', awardEn: 'Super Presenter', category: 'In-School' },
      { id: 'm8', date: '2025-12', titleZh: '小組學習評比', titleEn: 'Group Learning Evaluation', awardZh: '優秀小組', awardEn: 'Excellent Group', category: 'In-School' },
      { id: 'm9', date: '2025-07', titleZh: '期末學業素養評估', titleEn: 'Final Academic Assessment', awardZh: '精優學業領航獎', awardEn: 'Academic Navigator Award', category: 'In-School' },
      { id: 'm10', date: '2025-05', titleZh: '逗笑日', titleEn: 'Comedy Day', awardZh: '逗笑天使', awardEn: 'Comedy Angel', category: 'In-School' },
      { id: 'm12', date: '2025-2026', titleZh: '星光吉尼斯跳繩之星', titleEn: 'Starlight Guinness Rope Skipping Star', awardZh: '新星', awardEn: 'Rising Star', category: 'In-School' },
      { id: 'm13', date: '2024-04', titleZh: '電影配音比賽', titleEn: 'Movie Dubbing Competition', awardZh: '優異表現', awardEn: 'Outstanding Performance', category: 'In-School' },
      { id: 'm14', date: '2025-04', titleZh: '學期評估', titleEn: 'Semester Assessment', awardZh: '學聖獎', awardEn: 'Scholar Award', category: 'In-School' },
      { id: 'm15', date: '2024-01', titleZh: '明星獎', titleEn: 'Star Awards', awardZh: '外語之星', awardEn: 'Foreign Language Star', category: 'In-School' },

      // Out-of-School
      { id: 'm4', date: '2024-06', titleZh: '第四屆 SHINE LIKE STARS 全國青少年英語風采大賽', titleEn: '4th SHINE LIKE STARS National Youth English Proficiency Show', awardZh: '優異表現', awardEn: 'Outstanding Performance', category: 'Out-of-School' },
      { id: 'm6', date: '2022-11', titleZh: 'RSL 第一級音樂表演(架子鼓)二級證書', titleEn: 'RSL Level 1 Award in Music Performance Grade 2 Drums', awardZh: '優異成績通過', awardEn: 'Passed with Distinction', category: 'Out-of-School' },
      { id: 'm11', date: '2025-12', titleZh: '青少年人工智能編程水平測試 (Python)', titleEn: 'Youth AI Coding Level Test (Python)', awardZh: '七級', awardEn: 'Level 7', category: 'Out-of-School' },
    ],
  },
  {
    id: 'yt',
    name: '黃佑天',
    englishName: 'WONG, Yau Tin',
    genderZh: '男',
    genderEn: 'Male',
    dob: '31-08-2016',
    photoUrl: '/yt-photo.png',
    schools: [
      { id: 's1', grade: 'P4', period: '2026.04-present', nameZh: '世界龍岡學校黃耀南小學, 香港', nameEn: 'L.K.W.F.S. Ltd. Wong Yiu Nam Primary School, Hong Kong' },
      { id: 's2', grade: 'P1-P4', period: '2021.09-2026.03', nameZh: '東莞市嘉榮外國語學校，東莞', nameEn: 'Dongguan Jiarong Foreign Language School, Dongguan' },
    ],
    fatherName: 'Ryan Wong',
    fatherJobZh: '企業家',
    fatherJobEn: 'Business Owner',
    fatherContact: '69704411',
    motherName: 'Jericha Kwok',
    motherJobZh: '家庭主婦及企業家',
    motherJobEn: 'Housewife & Business Owner',
    motherContact: '69271082',
    addressZh: '香港 / 東莞',
    addressEn: 'Hong Kong / Dongguan',
    certificates: [
      // In-School
      { id: 'y1', date: '2025-09', titleZh: '語文週末作業', titleEn: 'Chinese Weekend Assignment', awardZh: '學習標兵', awardEn: 'Learning Pacesetter', category: 'In-School' },
      { id: 'y2', date: '2025-11', titleZh: '精優學業之計算PK賽', titleEn: 'Calculation PK Competition', awardZh: '計算之星', awardEn: 'Calculation Star', category: 'In-School' },
      { id: 'y3', date: '2025-12', titleZh: '八大學院 軟式飛鏢', titleEn: 'Soft Darts Elective Course', awardZh: '未來小院士', awardEn: 'Future Little Academician', category: 'In-School' },
      { id: 'y4', date: '2025-09', titleZh: '暑假數學作業', titleEn: 'Summer Math Assignment', awardZh: '數學暑假強基作業小達人', awardEn: 'Math Assignment Expert', category: 'In-School' },
      { id: 'y5', date: '2025-10', titleZh: '閱讀榜樣人物', titleEn: 'Reading Role Model', awardZh: '閱讀 TOP 10', awardEn: 'Reading TOP 10', category: 'In-School' },
      { id: 'y6', date: '2025-09', titleZh: '星光吉尼斯評選', titleEn: 'Starlight Guinness Selection', awardZh: '趣配音之星', awardEn: 'Fun Dubbing Star', category: 'In-School' },
      { id: 'y7', date: '2025-12', titleZh: '英語詞彙挑戰', titleEn: 'English Word Levelled Challenge', awardZh: 'Word Master', awardEn: 'Word Master', category: 'In-School' },
      { id: 'y8', date: '2025-2026', titleZh: '星光吉尼斯 音樂之星', titleEn: 'Starlight Guinness Music Star', awardZh: '新星', awardEn: 'Rising Star', category: 'In-School' },
      { id: 'y10', date: '2026-01', titleZh: '期末素養評估', titleEn: 'Final Literacy Assessment', awardZh: '精優學業標兵獎', awardEn: 'Excellent Academic Pacesetter', category: 'In-School' },
      { id: 'y12', date: '2025-07', titleZh: '期末學業素養評估', titleEn: 'Final Academic Assessment', awardZh: '「嘉」少年之精優學業獎', awardEn: 'Excellent Academic Award', category: 'In-School' },
      { id: 'y13', date: '2025-05', titleZh: '英語詞彙挑戰', titleEn: 'English Word Challenge', awardZh: 'Word Commander', awardEn: 'Word Commander', category: 'In-School' },
      { id: 'y14', date: '2025-11', titleZh: '閱讀考級', titleEn: 'Reading Level Exam', awardZh: '閱讀貢士一星', awardEn: 'Reading Scholar 1 Star', category: 'In-School' },
      { id: 'y15', date: '2025-10', titleZh: '跨學科融合作業', titleEn: 'Interdisciplinary Assignment', awardZh: '一等獎', awardEn: 'First Prize', category: 'In-School' },
      { id: 'y16', date: '2025-2026', titleZh: '跳繩之星', titleEn: 'Rope Skipping Star', awardZh: '新星', awardEn: 'Rising Star', category: 'In-School' },
      // Out-of-School
      { id: 'y9', date: '2025-12', titleZh: '第四屆 SHINE LIKE STARS 全國青少年英語風采大賽', titleEn: '4th SHINE LIKE STARS National Youth English Proficiency Show', awardZh: 'Sparkle Speaker', awardEn: 'Sparkle Speaker', category: 'Out-of-School' },
      { id: 'y11', date: '2025-09', titleZh: '青少年人工智能編程水平測試 (Python)', titleEn: 'Youth AI Coding Level Test (Python)', awardZh: '五級', awardEn: 'Level 5', category: 'Out-of-School' },
    ],
  },
];

export default function FamilyTab() {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const saved = localStorage.getItem('family_resumes_v4');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved family resumes', e);
      }
    }
    return INITIAL_PROFILES;
  });

  const [activeProfileId, setActiveProfileId] = useState<string>('max');
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Certificate>>({});
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState<Partial<Profile>>({});

  useEffect(() => {
    localStorage.setItem('family_resumes_v4', JSON.stringify(profiles));
  }, [profiles]);

  const activeProfile = profiles.find(p => p.id === activeProfileId);

  const handleSaveCert = () => {
    if (!editForm.id) {
      const newCert: Certificate = {
        id: Date.now().toString(),
        date: editForm.date || '',
        titleZh: editForm.titleZh || '',
        titleEn: editForm.titleEn || '',
        awardZh: editForm.awardZh || '',
        awardEn: editForm.awardEn || '',
        category: editForm.category || 'In-School',
      };
      setProfiles(prev => prev.map(p => {
        if (p.id === activeProfileId) {
          return { ...p, certificates: [...p.certificates, newCert].sort((a, b) => b.date.localeCompare(a.date)) };
        }
        return p;
      }));
    } else {
      setProfiles(prev => prev.map(p => {
        if (p.id === activeProfileId) {
          return {
            ...p,
            certificates: p.certificates.map(c => c.id === editForm.id ? { ...c, ...editForm } as Certificate : c).sort((a, b) => b.date.localeCompare(a.date))
          };
        }
        return p;
      }));
    }
    setEditingCertId(null);
    setEditForm({});
  };

  const handleDeleteCert = (certId: string) => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      setProfiles(prev => prev.map(p => {
        if (p.id === activeProfileId) {
          return { ...p, certificates: p.certificates.filter(c => c.id !== certId) };
        }
        return p;
      }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!activeProfile) return null;

  const inSchoolCerts = activeProfile.certificates.filter(c => c.category === 'In-School').sort((a, b) => b.date.localeCompare(a.date));
  const outOfSchoolCerts = activeProfile.certificates.filter(c => c.category === 'Out-of-School').sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 font-sans print:p-0 print:border-none print:shadow-none">
      <div className="flex justify-between items-center mb-6 print:hidden">
        <div className="flex gap-4">
          {profiles.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveProfileId(p.id)}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                activeProfileId === p.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p.englishName}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (confirm('Reset to default profile data?')) {
                setProfiles(INITIAL_PROFILES);
              }
            }}
            className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            Reset Data
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            <Download className="w-4 h-4" />
            Print / PDF
          </button>
        </div>
      </div>

      <div className="printable-resume max-w-[210mm] mx-auto bg-white text-gray-900">
        
        {/* Header Section */}
        <div className="flex items-start justify-between border-b-2 border-gray-800 pb-4 mb-4">
          <div className="flex-grow">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">{activeProfile.name}</h1>
            <h2 className="text-xl text-gray-600 uppercase tracking-widest font-semibold">{activeProfile.englishName}</h2>
            
            <div className="mt-4 flex gap-8 text-sm">
              <div>
                <p className="font-bold border-b border-gray-300 pb-0.5 mb-1">個人資料 <span className="font-normal text-gray-500 text-xs ml-1">Personal Info</span></p>
                <div className="text-gray-800">
                  <p>性別 / Gender: {activeProfile.genderZh} <span className="text-gray-500">({activeProfile.genderEn})</span></p>
                  <p>出生日期 / DOB: {activeProfile.dob}</p>
                </div>
              </div>
              <div>
                <p className="font-bold border-b border-gray-300 pb-0.5 mb-1">聯絡方式 <span className="font-normal text-gray-500 text-xs ml-1">Contact</span></p>
                <div className="text-gray-800">
                  <p>Mother ({activeProfile.motherName}): {activeProfile.motherContact}</p>
                  <p>Father ({activeProfile.fatherName}): {activeProfile.fatherContact}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-6">
            <div className="w-28 h-36 bg-gray-100 border border-gray-300 shadow-sm overflow-hidden p-1">
              {activeProfile.photoUrl ? (
                <img src={activeProfile.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <User className="w-10 h-10" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-4">
          <h3 className="text-lg font-bold bg-gray-100 px-2 py-1 mb-2">教育背景 <span className="font-normal text-sm text-gray-600 ml-1">Education</span></h3>
          <table className="w-full text-sm text-left border-collapse">
            <tbody>
              {activeProfile.schools.map((s, idx) => (
                <tr key={s.id} className={idx !== activeProfile.schools.length - 1 ? 'border-b border-gray-200' : ''}>
                  <td className="py-2 pr-4 align-top whitespace-nowrap font-medium w-40">
                    <div>{s.period}</div>
                    <div className="text-gray-500 text-xs font-normal">Grade: {s.grade}</div>
                  </td>
                  <td className="py-2 align-top">
                    <div className="font-bold">{s.nameZh}</div>
                    <div className="text-gray-600 text-xs">{s.nameEn}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* In-School Awards Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center bg-gray-100 px-2 py-1 mb-2">
            <h3 className="text-lg font-bold">校內榮譽與獎項 <span className="font-normal text-sm text-gray-600 ml-1">In-School Honors & Awards</span></h3>
          </div>
          <table className="w-full text-sm text-left border-collapse print:text-[13px]">
            <thead>
              <tr className="border-b-2 border-gray-800">
                <th className="py-1 px-1 w-24">時間 <br/><span className="text-xs font-normal text-gray-500">Date</span></th>
                <th className="py-1 px-1">項目名稱 <br/><span className="text-xs font-normal text-gray-500">Event / Activity</span></th>
                <th className="py-1 px-1 w-48">獲得榮譽 <br/><span className="text-xs font-normal text-gray-500">Award / Position</span></th>
                <th className="py-1 px-1 w-16 print:hidden">操作</th>
              </tr>
            </thead>
            <tbody>
              {inSchoolCerts.map(cert => (
                <tr key={cert.id} className="border-b border-gray-200 hover:bg-gray-50 group break-inside-avoid">
                  <td className="py-2 px-1 align-top whitespace-nowrap text-gray-600 font-medium">{cert.date}</td>
                  <td className="py-2 px-1 align-top">
                    <div className="font-bold">{cert.titleZh}</div>
                    <div className="text-gray-500 text-xs">{cert.titleEn}</div>
                  </td>
                  <td className="py-2 px-1 align-top">
                    <div className="font-semibold text-blue-800">{cert.awardZh}</div>
                    <div className="text-blue-600/80 text-xs">{cert.awardEn}</div>
                  </td>
                  <td className="py-2 px-1 align-top print:hidden">
                    <div className="opacity-0 group-hover:opacity-100 flex gap-1">
                      <button onClick={() => { setEditForm(cert); setEditingCertId(cert.id); }} className="text-gray-400 hover:text-blue-600"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDeleteCert(cert.id)} className="text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Out-of-School Awards Section */}
        {outOfSchoolCerts.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-gray-100 px-2 py-1 mb-2">校外榮譽與獎項 <span className="font-normal text-sm text-gray-600 ml-1">Out-of-School Honors & Awards</span></h3>
            <table className="w-full text-sm text-left border-collapse print:text-[13px]">
              <thead>
                <tr className="border-b-2 border-gray-800">
                  <th className="py-1 px-1 w-24">時間 <br/><span className="text-xs font-normal text-gray-500">Date</span></th>
                  <th className="py-1 px-1">項目名稱 <br/><span className="text-xs font-normal text-gray-500">Event / Activity</span></th>
                  <th className="py-1 px-1 w-48">獲得榮譽 <br/><span className="text-xs font-normal text-gray-500">Award / Position</span></th>
                  <th className="py-1 px-1 w-16 print:hidden">操作</th>
                </tr>
              </thead>
              <tbody>
                {outOfSchoolCerts.map(cert => (
                  <tr key={cert.id} className="border-b border-gray-200 hover:bg-gray-50 group break-inside-avoid">
                    <td className="py-2 px-1 align-top whitespace-nowrap text-gray-600 font-medium">{cert.date}</td>
                    <td className="py-2 px-1 align-top">
                      <div className="font-bold">{cert.titleZh}</div>
                      <div className="text-gray-500 text-xs">{cert.titleEn}</div>
                    </td>
                    <td className="py-2 px-1 align-top">
                      <div className="font-semibold text-blue-800">{cert.awardZh}</div>
                      <div className="text-blue-600/80 text-xs">{cert.awardEn}</div>
                    </td>
                    <td className="py-2 px-1 align-top print:hidden">
                      <div className="opacity-0 group-hover:opacity-100 flex gap-1">
                        <button onClick={() => { setEditForm(cert); setEditingCertId(cert.id); }} className="text-gray-400 hover:text-blue-600"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteCert(cert.id)} className="text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Editor Modal */}
      {editingCertId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 print:hidden p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl">
            <h3 className="text-xl font-bold mb-4">{editingCertId === 'new' ? 'Add Certificate' : 'Edit Certificate'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" value={editForm.date || ''} onChange={e => setEditForm({...editForm, date: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title (Chinese)</label>
                <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" value={editForm.titleZh || ''} onChange={e => setEditForm({...editForm, titleZh: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
                <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" value={editForm.titleEn || ''} onChange={e => setEditForm({...editForm, titleEn: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Award (Chinese)</label>
                <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" value={editForm.awardZh || ''} onChange={e => setEditForm({...editForm, awardZh: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Award (English)</label>
                <input className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" value={editForm.awardEn || ''} onChange={e => setEditForm({...editForm, awardEn: e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" value={editForm.category || 'In-School'} onChange={e => setEditForm({...editForm, category: e.target.value as any})}>
                  <option value="In-School">In-School (校內)</option>
                  <option value="Out-of-School">Out-of-School (校外)</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setEditingCertId(null)} className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg">Cancel</button>
              <button onClick={handleSaveCert} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-sm">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-resume, .printable-resume * {
            visibility: visible;
          }
          .printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0 !important;
            margin: 0 !important;
          }
          table {
            page-break-inside: auto;
          }
          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
}
