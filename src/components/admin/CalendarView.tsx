import React, { useState, useEffect } from 'react';
import { 
  startOfWeek, endOfWeek, 
  eachDayOfInterval, format, isToday, 
  parseISO, isSameDay,
  addDays, subDays
} from 'date-fns';
import { ChevronLeft, ChevronRight, MessageSquare, Calendar as CalendarIcon, Phone } from 'lucide-react';
import { DailyReport } from '../../lib/supabase';
import { FollowUpStatus, UnifiedInquiry } from './UnifiedInbox';

interface CalendarViewProps {
  reports: DailyReport[];
}

const STATUS_COLORS: Record<string, string> = {
  'Urgent': 'bg-red-100 text-red-800 border-red-200',
  'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
  'Shipped': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Pending': 'bg-amber-100 text-amber-800 border-amber-200',
  'New': 'bg-purple-100 text-purple-800 border-purple-200',
  'Scheduled': 'bg-indigo-100 text-indigo-800 border-indigo-200'
};

const INQUIRY_STATUS_COLORS: Record<FollowUpStatus, string> = {
  '未跟進': 'bg-gray-100 text-gray-600 border-gray-200',
  '已發郵件': 'bg-blue-50 text-blue-700 border-blue-200',
  '已聯絡/WhatsApp': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  '已通話/會議': 'bg-purple-50 text-purple-700 border-purple-200',
  '已寄樣品': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  '報價中': 'bg-orange-50 text-orange-700 border-orange-200',
  '已下單': 'bg-green-50 text-green-700 border-green-200',
  '無效/垃圾': 'bg-red-50 text-red-700 border-red-200',
};

export default function CalendarView({ reports }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<30 | 60 | 120>(30);
  const [inquiries, setInquiries] = useState<UnifiedInquiry[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState(false);

  useEffect(() => {
    const fetchInquiries = async () => {
      setLoadingInquiries(true);
      try {
        const response = await fetch('/api/unified-inbox');
        if (response.ok) {
          const data = await response.json();
          setInquiries(data);
        }
      } catch (err) {
        console.error('Error fetching unified inquiries:', err);
      } finally {
        setLoadingInquiries(false);
      }
    };
    fetchInquiries();
  }, []);
  
  // Compute rolling date range centered on currentDate
  const halfDays = viewMode / 2;
  const rawStartDate = subDays(currentDate, halfDays);
  const rawEndDate = addDays(currentDate, halfDays);
  
  const startDate = startOfWeek(rawStartDate, { weekStartsOn: 0 }); // Start on Sunday
  const endDate = endOfWeek(rawEndDate, { weekStartsOn: 0 });

  const dateFormat = "MMM d, yyyy";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const nextPeriod = () => setCurrentDate(addDays(currentDate, viewMode));
  const prevPeriod = () => setCurrentDate(subDays(currentDate, viewMode));

  // Map reports to dates
  const getReportsForDay = (day: Date) => {
    return reports.filter(r => {
      if (!r.report_date) return false;
      const reportDate = parseISO(r.report_date);
      return isSameDay(day, reportDate);
    });
  };

  const getInquiriesForDay = (day: Date) => {
    return inquiries.filter(iq => {
      if (!iq.raw_date) return false;
      const inqDate = parseISO(iq.raw_date);
      return isSameDay(day, inqDate);
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-gray-50/50 gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            Centered on {format(currentDate, dateFormat)}
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Displaying from {format(startDate, 'MMM d')} to {format(endDate, 'MMM d')}
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Toggles */}
          <div className="flex bg-gray-200 p-1 rounded-xl mr-2">
            {[30, 60, 120].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode as 30|60|120)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                  viewMode === mode 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {mode} Days
              </button>
            ))}
          </div>

          <button 
            onClick={prevPeriod}
            className="p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
          >
            Today
          </button>
          <button 
            onClick={nextPeriod}
            className="p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {loadingInquiries && (
        <div className="bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 flex items-center justify-center">
          Loading inquiries (Calendly/WhatsApp)...
        </div>
      )}

      {/* Days of week */}
      <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName, i) => (
          <div key={i} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={`grid grid-cols-7 bg-gray-200 gap-[1px] ${viewMode === 30 ? 'auto-rows-[160px]' : viewMode === 60 ? 'auto-rows-[120px]' : 'auto-rows-[100px]'}`}>
        {days.map((day, i) => {
          const dayReports = getReportsForDay(day);
          const dayInquiries = getInquiriesForDay(day);
          const isTodayDate = isToday(day);
          const totalItems = dayReports.length + dayInquiries.length;
          
          // Check if this day is outside the exact raw view mode range (fade it slightly)
          const isOutsideRange = day < rawStartDate || day > rawEndDate;

          return (
            <div 
              key={day.toString()} 
              className={`bg-white p-1 sm:p-2 flex flex-col transition-colors hover:bg-gray-50 overflow-hidden ${isOutsideRange ? 'opacity-40 bg-gray-50' : ''}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-xs sm:text-sm font-bold flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                  isTodayDate 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                    : 'text-gray-700'
                }`}>
                  {format(day, 'd')}
                </span>
                {totalItems > 0 && (
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md hidden sm:block">
                    {totalItems}
                  </span>
                )}
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                
                {/* Render Reports */}
                {dayReports.map((report) => {
                  const statusColor = STATUS_COLORS[report.status] || 'bg-gray-100 text-gray-800 border-gray-200';
                  return (
                    <div 
                      key={`rep-${report.id}`} 
                      className={`text-[9px] sm:text-[10px] leading-tight p-1.5 rounded-lg border ${statusColor} truncate cursor-pointer hover:opacity-80 transition-opacity`}
                      title={`Report: ${report.customer} - ${report.category}`}
                    >
                      <div className="font-bold truncate flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                        {report.customer || 'Unnamed'}
                      </div>
                      <div className="truncate opacity-80">{report.category}</div>
                    </div>
                  );
                })}

                {/* Render Inquiries */}
                {dayInquiries.map((iq) => {
                  const statusColor = INQUIRY_STATUS_COLORS[iq.status] || 'bg-gray-100 text-gray-600 border-gray-200';
                  return (
                    <div 
                      key={`inq-${iq.id}`} 
                      className={`text-[9px] sm:text-[10px] leading-tight p-1.5 rounded-lg border ${statusColor} truncate cursor-pointer hover:opacity-80 transition-opacity`}
                      title={`Inquiry: ${iq.name} - ${iq.status}`}
                    >
                      <div className="font-bold truncate flex items-center gap-1">
                        {iq.hasWhatsApp && <Phone className="w-2.5 h-2.5" />}
                        {iq.hasEmail && <CalendarIcon className="w-2.5 h-2.5" />}
                        {iq.name}
                      </div>
                      <div className="truncate opacity-80">{iq.status}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
