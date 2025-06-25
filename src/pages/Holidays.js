
// pages/HomePage.js
import React from 'react';
import mm from '../assets/mm.png';
import bg from '../assets/bg.jpg';
import burj from '../assets/burj.png';
import wild from '../assets/wild.png';
import at from '../assets/at.png';
import { Link } from 'react-router-dom';

const Holidays = () => (
  <>
  

    <section className="py-5">
      <div className="container text-center">
        <h2 className="text-warning fw-bold">BEST OF THE HOLIDAY </h2>
        <p className="text-muted">Breathtaking ideas on how to make your holiday a memorable one</p>
        <div className="row g-3">
          {[{img: burj, title: "Burj Khalifa At The Top"}, {img: wild, title: "Wild Wadi Water Park"}, {img: at, title: "Atlantis Waterpark"}].map((item, i) => (
            <div className="col-md-4" key={i}>
              <img src={item.img} className="img-fluid rounded mb-3" alt={item.title} />
              <a href="#" className='text-warning'>Check Details ➜</a>
            </div>
          ))}
        </div>
         <div className="row g-3 mt-4">
          {[{img: burj, title: "Burj Khalifa At The Top"}, {img: wild, title: "Wild Wadi Water Park"}, {img: at, title: "Atlantis Waterpark"}].map((item, i) => (
            <div className="col-md-4" key={i}>
              <img src={item.img} className="img-fluid rounded mb-3" alt={item.title} />
              <a href="#" className='text-warning'>Check Details ➜</a>
            </div>
          ))}
        </div>
         <div className="row g-3 mt-4">
          {[{img: burj, title: "Burj Khalifa At The Top"}, {img: wild, title: "Wild Wadi Water Park"}, {img: at, title: "Atlantis Waterpark"}].map((item, i) => (
            <div className="col-md-4" key={i}>
              <img src={item.img} className="img-fluid rounded mb-3" alt={item.title} />
              <a href="#" className='text-warning'>Check Details ➜</a>
            </div>
          ))}
        </div>
         <div className="row g-3 mt-4">
          {[{img: burj, title: "Burj Khalifa At The Top"}, {img: wild, title: "Wild Wadi Water Park"}, {img: at, title: "Atlantis Waterpark"}].map((item, i) => (
            <div className="col-md-4" key={i}>
              <img src={item.img} className="img-fluid rounded mb-3" alt={item.title} />
              <a href="#" className='text-warning'>Check Details ➜</a>
            </div>
          ))}
        </div>
         <div className="row g-3 mt-4">
          {[{img: burj, title: "Burj Khalifa At The Top"}, {img: wild, title: "Wild Wadi Water Park"}, {img: at, title: "Atlantis Waterpark"}].map((item, i) => (
            <div className="col-md-4" key={i}>
              <img src={item.img} className="img-fluid rounded mb-3" alt={item.title} />
              <a href="#" className='text-warning'>Check Details ➜</a>
            </div>
          ))}
        </div>
      </div>
    </section>

   
  </>
);

export default Holidays;
