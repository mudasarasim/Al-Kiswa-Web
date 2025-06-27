import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/admin/messages').then((res) => {
      setMessages(res.data);
    });
  }, []);

  return (
    <div className="container py-4">
      <h3>Contact Messages</h3>
      <table className="table table-bordered mt-3">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th></tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.phone}</td>
              <td>{msg.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages;
