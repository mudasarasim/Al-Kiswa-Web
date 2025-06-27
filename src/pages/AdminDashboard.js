import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <Link to="/admin/add-tour" className="btn btn-warning w-100">➕ Add Tour</Link>
        </div>
        <div className="col-md-3">
          <Link to="/admin/view-tours" className="btn btn-warning w-100">📋 View Tours</Link>
        </div>
        <div className="col-md-3">
          <Link to="/admin/contact-messages" className="btn btn-warning w-100">📬 Contact Messages</Link>
        </div>
        <div className="col-md-3">
          <Link to="/admin/visa-applications" className="btn btn-warning w-100">🧾 Visa Applications</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
