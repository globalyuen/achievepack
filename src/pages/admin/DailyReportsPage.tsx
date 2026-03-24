import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, AlertTriangle, Package, Activity, MessageSquare, Calendar, CheckCircle, Clock, LockKeyhole, ArrowRight, Loader2, LogOut } from 'lucide-react';

interface ReportData {
  id: string;
  customer: string;
  date: string;
  status: string;
  category: string;
  detail: string;
}

export default function DailyReportsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [reports, setReports] = useState<ReportData[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Verify PIN with the serverless function to securely fetch personal data
  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return;
    
    setLoading(true);
    setErrorMsg('');
    
    try {
      const response = await fetch('/api/production-reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setReports(result.data);
        setIsAuthenticated(true);
      } else {
        setErrorMsg(result.error || 'Invalid Secure PIN');
      }
    } catch (err) {
      setErrorMsg('Network error. Need Vercel connection or Dev Server.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setReports([]);
    setPin('');
  };

  // Derive stats dynamically
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
                          report.detail.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || report.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [reports, searchTerm, filterCategory]);

  // If not authenticated, show PIN Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32">
        <Helmet><title>Secure Login | Daily Reports</title></Helmet>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm mb-4">
            <LockKeyhole className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Confidential Reports
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter the admin PIN to access this secure portal.
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
            <form className="space-y-6" onSubmit={handleVerifyPin}>
              <div>
                <label htmlFor="pin" className="block text-sm font-semibold leading-6 text-gray-900">
                  Admin Verification PIN
                </label>
                <div className="mt-2 text-center">
                  <input
                    id="pin"
                    name="pin"
                    type="password"
                    autoComplete="current-password"
                    autoFocus
                    required
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

              <div>
                <button
                  type="submit"
                  disabled={loading || !pin}
                  className="flex w-full justify-center items-center gap-2 rounded-xl bg-blue-600 px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:focus outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 transition-all hover:bg-blue-700"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><LockKeyhole className="w-4 h-4" /> Unlock Vault</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Interface (only returned after passing security)
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Helmet>
        <title>Daily Production Report | Achieve Pack Admin</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-2xl p-8 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 blur-3xl rounded-full bg-white w-96 h-96 -mt-20 -mr-20 pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3">
                <Activity className="h-8 w-8" />
                Live Production Report
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm font-medium">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-200" /> {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="flex items-center gap-2 bg-emerald-500/20 text-emerald-100 px-3 py-1 rounded-full"><Clock className="h-4 w-4" /> SECURE DATALINK ACTIVE</span>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-semibold transition-all backdrop-blur-sm"
            >
              <LogOut className="h-4 w-4" /> Secure Exit
            </button>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div><p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">In Production</p><p className="text-4xl font-black text-gray-900 mt-2">{stats.production}</p></div>
              <div className="bg-blue-100 p-3 rounded-lg"><Activity className="h-6 w-6 text-blue-600" /></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div><p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Shipped</p><p className="text-4xl font-black text-gray-900 mt-2">{stats.shipping}</p></div>
              <div className="bg-emerald-100 p-3 rounded-lg"><Package className="h-6 w-6 text-emerald-600" /></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-amber-500 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div><p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Pending Quotes</p><p className="text-4xl font-black text-gray-900 mt-2">{stats.pending}</p></div>
              <div className="bg-amber-100 p-3 rounded-lg"><MessageSquare className="h-6 w-6 text-amber-600" /></div>
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-6 shadow-sm border border-red-100 border-l-4 border-l-red-500 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div><p className="text-red-700 text-sm font-semibold uppercase tracking-wider">Urgent Action</p><p className="text-4xl font-black text-red-700 mt-2">{stats.urgent}</p></div>
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
              className="pl-10 block w-full border-gray-300 rounded-lg py-2.5 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border bg-gray-50 focus:bg-white"
              placeholder="Search secure database..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {['All', 'Production', 'Shipping', 'Quotes', 'Enquiries', 'Meetings'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  filterCategory === cat 
                    ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Table/Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredReports.length === 0 ? (
            <div className="py-20 text-center">
              <Package className="mx-auto h-16 w-16 text-gray-200 mb-3" />
              <h3 className="text-xl font-bold text-gray-900">No reports matched</h3>
              <p className="text-gray-500 mt-1">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer / Project</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Secure Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {filteredReports.map((report) => (
                    <tr key={report.id} className={`hover:bg-blue-50/50 transition-colors ${report.status === 'Urgent' ? 'bg-red-50/30' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{report.customer}</div>
                        {report.status === 'Urgent' && <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-red-600"><AlertTriangle className="h-3 w-3"/> Action Required</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                        {report.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-700 font-medium bg-gray-100 px-2.5 py-1 rounded-md">{report.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full
                            ${report.status === 'Urgent' ? 'bg-red-100 text-red-800 border border-red-200' : ''}
                            ${report.status === 'Shipped' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : ''}
                            ${report.status === 'In Progress' ? 'bg-blue-100 text-blue-800 border border-blue-200' : ''}
                            ${report.status === 'Pending' ? 'bg-amber-100 text-amber-800 border border-amber-200' : ''}
                            ${!['Urgent', 'Shipped', 'In Progress', 'Pending'].includes(report.status) ? 'bg-gray-100 text-gray-800 border border-gray-200' : ''}
                          `}>
                            {report.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
                        <div className="whitespace-pre-line leading-relaxed font-medium bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">{report.detail}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
