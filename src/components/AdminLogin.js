import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/admin/login', form);
      localStorage.setItem('adminToken', res.data.token);
      console.log(res.data);

      window.location.href = '/admin/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h3>🔐 Admin Login</h3>
      <form onSubmit={handleSubmit} className="border p-4 bg-light rounded shadow-sm">
        {error && <p className="text-danger">{error}</p>}
        <input name="username" onChange={handleChange} className="form-control mb-2" placeholder="Username" />
        <input name="password" type="password" onChange={handleChange} className="form-control mb-2" placeholder="Password" />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
