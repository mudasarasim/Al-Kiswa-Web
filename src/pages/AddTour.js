import React, { useState } from 'react';
import axios from 'axios';

const AddTour = () => {
  const [form, setForm] = useState({ title: '', description: '', image: null });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append('title', form.title);
      data.append('description', form.description);
      if (form.image) data.append('image', form.image);

      await axios.post('http://localhost:5001/api/admin/tours/add', data);
      alert('✅ Tour added!');
      setForm({ title: '', description: '', image: null });
    } catch (err) {
      console.error(err);
      alert('❌ Failed to add tour');
    }
  };

  return (
    <div className="container py-4">
      <h3>Add New Tour</h3>
      <input className="form-control my-2" name="title" value={form.title} onChange={handleChange} placeholder="Tour Title" />
      <textarea className="form-control my-2" name="description" value={form.description} onChange={handleChange} placeholder="Description"></textarea>
      <input type="file" className="form-control my-2" onChange={handleFileChange} />
      <button className="btn btn-success" onClick={handleSubmit}>Add Tour</button>
    </div>
  );
};

export default AddTour;
