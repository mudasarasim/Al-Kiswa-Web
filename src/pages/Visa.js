import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import mm from '../assets/mm.png';
import bg from '../assets/bg.jpg';
import burj from '../assets/burj.png';
import wild from '../assets/wild.png';
import at from '../assets/at.png';

const Visa = () => {
  const [visaForm, setVisaForm] = useState({
  destination: '',
  visa_type: '',
  country_of_residence: '',
  nationality: '',
  arrival_date: '',
  adults: 1,
  children: 0,
  processing_time: '',
  price: '',
  requirements: ''
});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisaForm({ ...visaForm, [name]: value });
  };

  const increment = (type) => {
    if (type === 'adult') setVisaForm({ ...visaForm, adults: visaForm.adults + 1 });
    if (type === 'child') setVisaForm({ ...visaForm, children: visaForm.children + 1 });
  };

  const decrement = (type) => {
    if (type === 'adult' && visaForm.adults > 0) setVisaForm({ ...visaForm, adults: visaForm.adults - 1 });
    if (type === 'child' && visaForm.children > 0) setVisaForm({ ...visaForm, children: visaForm.children - 1 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://al-kiswa-backend-production.up.railway.app/api/visas', visaForm);
      if (res.data.success) {
        alert('Visa request submitted successfully!');
        navigate('/getvisa');
      } else {
        alert('Visa submission failed.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Error submitting visa request');
    }
  };

  return (
    <>
      <section className="hero" style={{ background: `url(${bg}) no-repeat center/cover`, padding: '80px 20px' }}>
        <div className="container bg-white bg-opacity-75 p-4 rounded shadow-sm">
          <ul className="nav nav-tabs mb-4 border-warning border-bottom">
            <li className="nav-item"><Link to="/" className="nav-link">FLIGHT</Link></li>
            <li className="nav-item"><Link to="/hotel" className="nav-link">HOTEL</Link></li>
            <li className="nav-item"><Link to="/visa" className="nav-link active text-warning">VISA</Link></li>
            <li className="nav-item"><Link className="nav-link">UMRAH</Link></li>
          </ul>

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label className="fw-bold">Destination</label>
              <input type="text" className="form-control" name="destination" value={visaForm.destination} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label className="fw-bold">Country Of Residence</label>
              <input type="text" className="form-control" name="country_of_residence" value={visaForm.country_of_residence} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label className="fw-bold">Nationality</label>
              <input type="text" className="form-control" name="nationality" value={visaForm.nationality} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <label className="fw-bold">Visa Type</label>
              <select className="form-select" name="visa_type" value={visaForm.visa_type} onChange={handleChange} required>
                <option value="">Select Visa Type</option>
                <option value="Tourist">Tourist</option>
                <option value="Business">Business</option>
                <option value="Transit">Transit</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="fw-bold">Arrival Date</label>
              <input type="date" className="form-control" name="arrival_date" value={visaForm.arrival_date} onChange={handleChange} required />
            </div>
            <div className="col-md-2">
              <label className="fw-bold">Adult(s)</label>
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-warning px-3" onClick={() => decrement('adult')}>-</button>
                <input type="text" className="form-control text-center mx-1" value={visaForm.adults} readOnly />
                <button type="button" className="btn btn-warning px-3" onClick={() => increment('adult')}>+</button>
              </div>
            </div>
            <div className="col-md-2">
              <label className="fw-bold">Child (Below 12 Years)</label>
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-warning px-3" onClick={() => decrement('child')}>-</button>
                <input type="text" className="form-control text-center mx-1" value={visaForm.children} readOnly />
                <button type="button" className="btn btn-warning px-3" onClick={() => increment('child')}>+</button>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-warning fw-bold px-5">Get Visa</button>
            </div>
          </form>
        </div>
      </section>

      {/* Holiday Section */}
      <section className="text-center my-5">
        <h2 className="text-warning fw-bold">BEST OF THE HOLIDAY</h2>
        <p className="text-muted">Breathtaking ideas on how to make your holiday a memorable one</p>
        <div id="holidayCarousel" className="carousel slide container" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[0, 1].map(index => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row">
                  {[1, 2, 3].map((_, i) => (
                    <div className="col-md-4" key={i}>
                      <img src={mm} className="img-fluid rounded" alt="holiday" />
                      <p><a href="#" className="text-warning mt-2">CHECK DETAILS ➜</a></p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#holidayCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#holidayCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-warning fw-bold">NEWS & UPDATES</h2>
          <p className="text-muted">Book 450+ Airlines, Hotels, Visa, Cruise, Meet and Assist, and More</p>
          <div className="row g-3">
            {[{ img: burj, title: "Burj Khalifa At The Top" }, { img: wild, title: "Wild Wadi Water Park" }, { img: at, title: "Atlantis Waterpark" }].map((item, i) => (
              <div className="col-md-4" key={i}>
                <img src={item.img} className="img-fluid rounded" alt={item.title} />
                <p className="mt-2"><strong>{item.title}</strong></p>
                <a href="#" className="text-warning">Check Details ➜</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="text-center my-5">
        <div className="container d-flex flex-column flex-md-row justify-content-around text-white">
          {[
            { icon: 'clock', title: 'Save Time', desc: 'Research and book online.' },
            { icon: 'headset', title: '24/7 Support', desc: 'We’re online and ready to support.' },
            { icon: 'lock', title: 'Secure Payment', desc: 'We provide secure payment systems.' }
          ].map((item, i) => (
            <div className="bg-warning p-4 rounded mb-3 mb-md-0" key={i}>
              <i className={`fas fa-${item.icon} me-2`}></i><strong>{item.title}</strong><br />{item.desc}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Visa;
