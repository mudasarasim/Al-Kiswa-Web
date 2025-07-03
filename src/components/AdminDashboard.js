import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if admin is logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('http://localhost:5001/api/admin/check-session', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setAdmin(res.data.admin); // ✅ Set admin info
      } catch (err) {
        console.error('Session check failed:', err.response?.data?.message);
        navigate('/admin/AdminLogin');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await axios.get('http://localhost:5001/api/admin/logout');
    localStorage.removeItem('adminToken');
    navigate('/admin/AdminLogin');
  };

  if (loading) return <div className="container mt-5">Loading dashboard...</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛠️ Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      <p className="text-muted">Welcome, <strong>{admin?.username}</strong></p>

      <div className="row g-4">
        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={() => navigate('/admin/visa-applications')}>
            🛂 See Visa Applications
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary w-100" onClick={() => navigate('/admin/contact-messages')}>
            📩 See Contact Messages
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-success w-100" onClick={() => navigate('/admin/view-tours')}>
            🧳 View All Tours
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-warning w-100" onClick={() => navigate('/admin/add-tour')}>
            ➕ Add New Tour
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-dark w-100" onClick={() => navigate('/admin/umrah')}>
            🕋 View Umrah Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
