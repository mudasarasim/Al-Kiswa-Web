// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white text-dark pt-5">
    <div className="container-fluid" style={{ marginTop: '50px' }}>
      <div className="row px-5">
        <div className="col-md-5">
          <img src="img/logo.png" height="160" className="mb-2 pl-5" alt="Logo" /><br />
          <p className='text-center' style={{ width: '290px' }}>
            Alkiswa.com is an online travel platform managed by Delight Express Tourism LLC...
          </p>
        </div>

        <div className='col-md-1 d-none d-sm-block'>
          <div style={{ height: '300px', width: '3px', background: '#ffc107' }}></div>
        </div>

        <div className="col-md-5 d-flex justify-content-around">
          <ul className="list-unstyled">
            <li style={{ marginBottom: '10px', fontSize: '20px' }} className='text-primary'>
              <strong>Quick Link</strong>
            </li>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li><Link to="/services" style={linkStyle}>Services</Link></li>
            <li><Link to="/holidays" style={linkStyle}>Holidays</Link></li>
          </ul>

          <ul className="list-unstyled">
            <li><br /></li>
            <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
            <li><Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" style={linkStyle}>Terms & Conditions</Link></li>
            <li><Link to="/faq" style={linkStyle}>FAQ</Link></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="text-center py-3 bg-warning">
        <strong>Contact Us</strong><br />
        📍 Rolla Building - Shop No 8 Ground Floor Al Arouba St Sharjah UAE<br />
        📞 +971 6 7044002 | ✉️ <a href="mailto:support@alkiswa.com">support@alkiswa.com</a>
      </div>
    </div>
  </footer>
);

const linkStyle = {
  fontSize: '20px',
  textDecoration: 'none',
  color: 'black',
  marginTop: '10px'
};

export default Footer;
