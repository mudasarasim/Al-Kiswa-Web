import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UmrahForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    countryCode: '',
    phone: '',
    title: '',
    gender: '',
    firstName: '',
    lastName: '',
    packageType: '',
    adults: 1,
    children: 0,
    roomType: '',
  });

  const [files, setFiles] = useState({
    passportFront: null,
    passportBack: null,
    emiratesId: null,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    Object.entries(files).forEach(([key, file]) => form.append(key, file));

    try {
      await axios.post('http://localhost:5001/api/umrah/submit', form);
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Submission error:', err);
      alert('Submission failed.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Umrah Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row g-3">
          {/* Email, Country Code, Phone */}
          <div className="col-md-4">
            <label>Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label>Country Code</label>
            <input type="text" name="countryCode" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label>Phone</label>
            <input type="text" name="phone" className="form-control" onChange={handleChange} required />
          </div>

          {/* Title and Gender */}
          <div className="col-md-6">
            <label>Title</label>
            <select name="title" className="form-select" onChange={handleChange} required>
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Gender</label>
            <select name="gender" className="form-select" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="col-md-6">
            <label>First Name</label>
            <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
          </div>

          {/* File Uploads */}
          <div className="col-md-6">
            <label>Passport Front</label>
            <input type="file" name="passportFront" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="col-md-6">
            <label>Passport Back</label>
            <input type="file" name="passportBack" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="col-md-6">
            <label>Emirates ID</label>
            <input type="file" name="emiratesId" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="col-md-6">
            <label>Photo (White Background)</label>
            <input type="file" name="photo" className="form-control" onChange={handleFileChange} required />
          </div>

          {/* Package & Numbers */}
          <div className="col-md-4">
            <label>Package Type</label>
            <select name="packageType" className="form-select" onChange={handleChange} required>
              <option value="">Select Package</option>
              <option value="By Bus">By Bus</option>
              <option value="By Air">By Air</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Adults</label>
            <input type="number" name="adults" min="1" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label>Children</label>
            <input type="number" name="children" min="0" className="form-control" onChange={handleChange} />
          </div>

          {/* Room Type */}
          <div className="col-md-12">
            <label>Room Type</label>
            <select name="roomType" className="form-select" onChange={handleChange} required>
              <option value="">Select Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Triple">Triple</option>
            </select>
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-primary px-5">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UmrahForm;
