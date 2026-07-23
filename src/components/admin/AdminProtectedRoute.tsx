import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { LockKeyhole, Loader2, ArrowLeft } from 'lucide-react';

export const AdminProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const pwd = sessionStorage.getItem('admin_local_pwd');
    const correctPin = import.meta.env.VITE_ADMIN_PIN || '8888****';
    if (pwd === correctPin) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const correctPin = import.meta.env.VITE_ADMIN_PIN || '8888****';
    if (pin === correctPin) {
      sessionStorage.setItem('admin_local_pwd', correctPin);
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Secure PIN');
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6">
        <Helmet><title>Admin Authentication | AchievePack</title></Helmet>
        <div className="mx-auto w-full max-w-md bg-white py-12 px-10 shadow-2xl rounded-3xl border border-gray-100 text-center relative">
          <a href="/" className="absolute left-6 top-6 flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </a>
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center border-[6px] border-white shadow-lg mb-6 mt-4">
            <LockKeyhole className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Admin Control Center</h2>
          <form className="space-y-6" onSubmit={handleVerifyPin}>
            <input 
              type="password" 
              autoFocus 
              required 
              value={pin} 
              onChange={(e) => setPin(e.target.value)} 
              className="block w-full rounded-xl border-gray-300 py-4 text-center text-4xl tracking-widest font-mono shadow-sm bg-gray-50 focus:bg-white focus:ring-4 focus:ring-blue-500" 
              placeholder="••••" 
            />
            <button 
              type="submit" 
              disabled={loading || !pin} 
              className="w-full flex justify-center py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-black shadow-lg transition active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'UNLOCK SYSTEM'}
            </button>
          </form>
          {errorMsg && <p className="mt-4 text-red-500 font-bold">{errorMsg}</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {children}
    </>
  );
};

export default AdminProtectedRoute;
