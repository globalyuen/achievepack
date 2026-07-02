import React, { useState } from 'react';
import { 
  startOfMonth, endOfMonth, startOfWeek, endOfWeek, 
  eachDayOfInterval, format, isSameMonth, isToday, 
  addMonths, subMonths, parseISO, isSameDay
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DailyReport } from '../../lib/supabase';

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

export default function CalendarView({ reports }: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Start on Sunday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const dateFormat = "MMMM yyyy";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  // Map reports to dates
  const getReportsForDay = (day: Date) => {
    return reports.filter(r => {
      if (!r.report_date) return false;
      const reportDate = parseISO(r.report_date);
      return isSameDay(day, reportDate);
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            {format(currentDate, dateFormat)}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={prevMonth}
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
            onClick={nextMonth}
            className="p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName, i) => (
          <div key={i} className="py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 auto-rows-[120px] sm:auto-rows-[160px] bg-gray-200 gap-[1px]">
        {days.map((day, i) => {
          const dayReports = getReportsForDay(day);
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isTodayDate = isToday(day);

          return (
            <div 
              key={day.toString()} 
              className={`bg-white p-1 sm:p-2 flex flex-col transition-colors hover:bg-gray-50 overflow-hidden ${!isCurrentMonth ? 'opacity-50 bg-gray-50' : ''}`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-xs sm:text-sm font-bold flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                  isTodayDate 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                    : 'text-gray-700'
                }`}>
                  {format(day, 'd')}
                </span>
                {dayReports.length > 0 && (
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md hidden sm:block">
                    {dayReports.length}
                  </span>
                )}
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                {dayReports.map((report) => {
                  const statusColor = STATUS_COLORS[report.status] || 'bg-gray-100 text-gray-800 border-gray-200';
                  
                  return (
                    <div 
                      key={report.id} 
                      className={`text-[9px] sm:text-[10px] leading-tight p-1.5 rounded-lg border ${statusColor} truncate cursor-pointer hover:opacity-80 transition-opacity`}
                      title={`${report.customer} - ${report.category}`}
                    >
                      <div className="font-bold truncate">{report.customer || 'Unnamed'}</div>
                      <div className="truncate opacity-80">{report.category}</div>
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
