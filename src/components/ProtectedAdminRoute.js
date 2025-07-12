import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedAdminRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('http://al-kiswa-backend-production.up.railway.app/api/admin/protected', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAuth(true);
      } catch (err) {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <div>Checking authentication...</div>;
  if (auth === false) return <Navigate to="/admin/AdminLogin" replace />;
  return children;
};

export default ProtectedAdminRoute;
