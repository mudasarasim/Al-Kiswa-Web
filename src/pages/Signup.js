// pages/LoginPage.js
import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', form);
  };

  return (
    <section
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: `url(${bg}) no-repeat center/cover`,
      }}
    >
      <div className="bg-white p-5 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-warning">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
           <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 text-white fw-bold">Signup</button>
          <p className='mt-3'>Already have an account <Link to={'/login'}>Login Now</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
