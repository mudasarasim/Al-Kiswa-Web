import React, { useState } from 'react';
import axios from 'axios';
import { customList } from 'country-codes-list';
import { getNames } from 'country-list';

const GetVisa = () => {
  const [formData, setFormData] = useState({
    email: '',
    country_code: '',
    phone: '',
    title: '',
    gender: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    mother_name: '',
    dob: '',
    birth_country: '',
    marital_status: '',
    education: '',
    profession: '',
    passport_number: '',
    nationality: '',
    city: '',
    address: '',
    passport_copy: null,
    photograph: null,
    payment_method: '',
    terms_accepted: 0,
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    }));
  };

  const countryOptions = Object.entries(
    customList('countryCode', '{countryNameEn} (+{countryCallingCode})')
    ).map(([key, label]) => ({
    value: key,
    label,
  }));

  const countryNames = getNames();

  const handleSubmit = async () => {
    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (
          value !== null &&
          value !== undefined &&
          key !== 'passport_copy' &&
          key !== 'photograph'
        ) {
          data.append(key, value);
        }
      });

      if (formData.passport_copy) {
        data.append('passport_copy', formData.passport_copy);
      }
      if (formData.photograph) {
        data.append('photograph', formData.photograph);
      }

      await axios.post('http://localhost:5001/api/travelers', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setStatusMessage('✅ Traveler details submitted successfully!');
      setStatusType('success');
    } catch (error) {
      console.error('❌ Error submitting traveler details:', error);
      setStatusMessage('❌ Submission failed. Please check your input or try again.');
      setStatusType('error');
    }
  };

  return (
    <div className="bg-light">
      <div className="container py-5">

        {/* Bootstrap Alert */}
        {statusMessage && (
          <div
            className={`alert alert-${statusType === 'success' ? 'success' : 'danger'} alert-dismissible fade show`}
            role="alert"
          >
            {statusMessage}
            <button
              type="button"
              className="btn-close"
              onClick={() => setStatusMessage('')}
            ></button>
          </div>
        )}

        {/* Required Documents Section */}
        <div className="bg-white p-4 mb-4 rounded shadow">
          <h5 className="bg-primary text-white px-3 py-2 rounded">Required Documents:</h5>
          <ol className="mt-3 ps-4 text-muted">
            <li>Passport Copy</li>
            <li>Passport Signature Page</li>
            <li>CNIC</li>
            <li>White Background Picture</li>
            <li>Passport should be valid for at least 6 months on the date of travel.</li>
            <li>The passport should be machine readable and in good condition.</li>
            <li>If applying for a family, a valid UAE Residence with 3+ months validity is needed.</li>
          </ol>
        </div>

        {/* Traveler Details */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h5 className="bg-primary text-white px-3 py-2 rounded">Traveler(s) Details</h5>

          <div className="bg-warning bg-opacity-75 text-dark fw-bold px-3 py-2 mt-3 rounded">Contact Details</div>
          <div className="row mt-3">
            <div className="col-md-4">
              <label>Email</label>
              <input className="form-control" name="email" 
                value={formData.email} 
                onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="fw-bold">Country Code</label>
              <select
                className="form-select"
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                required
              >
                <option value="">Select Country Code</option>
                {countryOptions.map(({ value, label }) => (
                  <option key={value} value={label.match(/\+[\d]+/)[0]}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4"><label>Phone</label><input className="form-control" name="phone" value={formData.phone} onChange={handleChange} /></div>
          </div>

          <div className="bg-warning bg-opacity-75 text-dark fw-bold px-3 py-2 mt-4 rounded">Adult 1 ( Lead Traveller )</div>
          <div className="row mt-3">
            <div className="col-md-3">
              <label className='fw-bold'>Title</label>
              <select name="titlel" className="form-select" onChange={handleChange} required>
                <option value="">Select Title</option>
                <option value="Mr">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
            
            <div className="col-md-3">
              <label className='fw-bold'>Gender</label>
              <select name="gender" className="form-select" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-2">
              <label>First Name</label>
              <input className="form-control" 
                name="first_name" 
                value={formData.first_name} 
                onChange={handleChange} />
            </div>
            
            <div className="col-md-2"><label>Middle Name</label><input className="form-control" name="middle_name" value={formData.middle_name} onChange={handleChange} /></div>
            <div className="col-md-2"><label>Last Name</label><input className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} /></div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3"><label>Mother Name</label><input className="form-control" name="mother_name" value={formData.mother_name} onChange={handleChange} /></div>
            <div className="col-md-3"><label>Date of Birth</label><input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} /></div>
            <div className="col-md-2"><label>Birth Country</label><input className="form-control" name="birth_country" value={formData.birth_country} onChange={handleChange} /></div>
            <div className="col-md-2"><label>Marital Status</label><input className="form-control" name="marital_status" value={formData.marital_status} onChange={handleChange} /></div>
            <div className="col-md-2"><label>Education</label><input className="form-control" name="education" value={formData.education} onChange={handleChange} /></div>
          </div>

          <div className="mt-3 col-md-3">
            <label>Profession</label>
            <input className="form-control" name="profession" value={formData.profession} onChange={handleChange} />
          </div>

          <div className="bg-secondary text-white fw-bold px-3 py-2 mt-4 rounded">Passport Details</div>
          <div className="row mt-3">
            <div className="col-md-3"><label>Passport Number</label><input className="form-control" name="passport_number" value={formData.passport_number} onChange={handleChange} /></div>
            <div className="col-md-3">
              <label className="fw-bold">Nationality</label>
              <select
                className="form-select"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              >
                <option value="">Select Nationality</option>
                {countryNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3"><label>City</label><input className="form-control" name="city" value={formData.city} onChange={handleChange} /></div>
            <div className="col-md-3"><label>Address</label><input className="form-control" name="address" value={formData.address} onChange={handleChange} /></div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3">
              <label>Passport Copy</label>
              <input type="file" className="form-control" name="passport_copy" onChange={(e) => handleFileChange(e, 'passport_copy')} />
            </div>
            <div className="col-md-3">
              <label>Photograph</label>
              <input type="file" className="form-control" name="photograph" onChange={(e) => handleFileChange(e, 'photograph')} />
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="bg-warning bg-opacity-75 text-dark fw-bold px-3 py-2 rounded">Payment Type</div>
          <div className="form-check mt-3">
            <input
              type="radio"
              className="form-check-input"
              name="payment_method"
              value="card"
              checked={formData.payment_method === 'card'}
              onChange={handleChange}
            />
            <label className="form-check-label">Credit/Debit Card</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="payment_method"
              value="tabby"
              checked={formData.payment_method === 'tabby'}
              onChange={handleChange}
            />
            <label className="form-check-label">Tabby</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="terms_accepted"
              checked={formData.terms_accepted === 1}
              onChange={handleChange}
            />
            <label className="form-check-label">
              I have Read & Accept Terms and Conditions.
            </label>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-warning">Back To Review</button>
            <button
              className="btn btn-warning text-white"
              onClick={handleSubmit}
              disabled={formData.terms_accepted !== 1}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVisa;
