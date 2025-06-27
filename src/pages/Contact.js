// pages/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import bg from '../assets/bg.jpg';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/contact', form);
      alert('✅ Thank you for contacting us!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <section
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: `url(${bg}) no-repeat center/cover`,
        padding: '40px',
      }}
    >
      <div className="bg-white p-5 rounded shadow" style={{ maxWidth: '600px', width: '100%' }}>
        <h3 className="text-center mb-4 text-warning">Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={form.name}
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
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="03xx-xxxxxxx"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="4"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-100 text-white fw-bold">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
