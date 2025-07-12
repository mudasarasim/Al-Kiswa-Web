import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('http://al-kiswa-backend-production.up.railway.app/api/admin/messages', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.error('Error fetching messages:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <div className="container mt-4">Loading messages...</div>;

  return (
    <div className="container mt-5">
      <h3 className="mb-4">📩 Contact Messages</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, idx) => (
            <tr key={msg.id}>
              <td>{idx + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.phone}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages;
