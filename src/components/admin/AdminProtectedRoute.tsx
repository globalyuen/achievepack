import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const AdminProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const pwd = sessionStorage.getItem('admin_local_pwd');
    if (pwd === '8888****') {
      setIsAuthenticated(true);
    } else {
      const input = window.prompt('Enter Admin Password:');
      if (input === '8888****') {
        sessionStorage.setItem('admin_local_pwd', '8888****');
        setIsAuthenticated(true);
      } else {
        window.location.href = '/';
      }
    }
  }, []);

  if (!isAuthenticated) return null;

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
