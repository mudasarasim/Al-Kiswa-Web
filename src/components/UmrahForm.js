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

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdultChange = (delta) => {
    setAdults((prev) => Math.max(1, prev + delta));
  };

  const handleChildrenChange = (delta) => {
    setChildren((prev) => Math.max(0, prev + delta));
  };

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
      await axios.post('http://al-kiswa-backend-production.up.railway.app/api/umrah/submit', form);
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
            <label className='fw-bold'>Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label className='fw-bold'>Country Code</label>
            <input type="text" name="countryCode" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label className='fw-bold'>Phone</label>
            <input type="text" name="phone" className="form-control" onChange={handleChange} required />
          </div>

          {/* Title and Gender */}
          <div className="col-md-6">
            <label className='fw-bold'>Title</label>
            <select name="title" className="form-select" onChange={handleChange} required>
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Ms</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className='fw-bold'>Gender</label>
            <select name="gender" className="form-select" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="col-md-6">
            <label className='fw-bold'>First Name</label>
            <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className='fw-bold'>Last Name</label>
            <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
          </div>

          {/* File Uploads */}
          <div className="col-md-6">
            <label className='fw-bold'>Passport Front Side</label>
            <input type="file" name="passportFront" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="col-md-6">
            <label className='fw-bold'>Passport Back Side</label>
            <input type="file" name="passportBack" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="col-md-6">
            <label className='fw-bold'>Emirates ID</label>
            <input type="file" name="emiratesId" className="form-control" onChange={handleFileChange} required />
          </div>
          <div className="col-md-6">
            <label className='fw-bold'>Photo (White Background)</label>
            <input type="file" name="photo" className="form-control" onChange={handleFileChange} required />
          </div>

          {/* Package & Numbers */}
          <div className="col-md-4">
            <label className='fw-bold' style={{margintop:"7px"}}>Package Type</label>
            <select name="packageType" className="form-select" onChange={handleChange} required>
              <option value="">Select Package</option>
              <option value="By Bus">By Bus</option>
              <option value="By Air">By Air</option>
            </select>
          </div>
          <div className="col-md-3">
              <label className="form-label fw-bold">Adult(s)</label>
              <div className="input-group">
                <button
                  className="btn btn-warning text-white"
                  type="button"
                  onClick={() => handleAdultChange(-1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={adults}
                  readOnly
                />
                <button
                  className="btn btn-warning text-white"
                  type="button"
                  onClick={() => handleAdultChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold">Child(ren)</label>
              <div className="input-group">
                <button
                  className="btn btn-warning text-white"
                  type="button"
                  onClick={() => handleChildrenChange(-1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={children}
                  readOnly
                />
                <button
                  className="btn btn-warning text-white"
                  type="button"
                  onClick={() => handleChildrenChange(1)}
                >
                  +
                </button>
              </div>
            </div>
          {/* <div className="col-md-4">
            <label>Adults</label>
            <input type="number" name="adults" min="1" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label>Children</label>
            <input type="number" name="children" min="0" className="form-control" onChange={handleChange} />
          </div> */}

          {/* Room Type */}
          <div className="col-md-12">
            <label className='fw-bold'>Room Type</label>
            <select name="roomType" className="form-select" onChange={handleChange} required>
              <option value="">Select Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Triple">Triple</option>
            </select>
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-3">
            <button type="submit" className=" btn btn-warning px-5">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UmrahForm;
