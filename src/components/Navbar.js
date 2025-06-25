// components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">
        <img src={logo} alt="Logo" height="80" width="150" />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav me-3">
          {[
            { path: '/', label: 'Home' },
            { path: '/hotel', label: 'Hotel' },
            { path: '/visa', label: 'Visa' },
            { path: '/holidays', label: 'Holidays' },
            { path: '/getvisa', label: 'Get Visa' },
            { path: '/MyBookings', label: 'MY BOOKINGS' }
          ].map((link, i) => (
            <li className="nav-item" key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link fw-bold ${isActive ? 'text-warning' : 'text-dark'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <select className="form-select w-auto me-2">
          <option>USD</option>
          <option>AED</option>
        </select>

        <Link to="/login" className="btn btn-outline-warning">
          Login/Sign up
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
