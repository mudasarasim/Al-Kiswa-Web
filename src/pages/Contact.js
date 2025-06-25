// pages/ContactUs.js
import React, { useState } from 'react';
import bg from '../assets/bg.jpg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add backend submission logic here
    console.log('Message sent:', form);
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '', message: '' });
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

export default Contact;
