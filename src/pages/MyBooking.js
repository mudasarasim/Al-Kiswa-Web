import React from 'react';
import './MyBooking.css'; // optional, for external CSS

const packages = [
  {
    title: "2 Nights - 4 Star Umrah",
    subtitle: "4 Star Hotel Stay",
    price: "From AED 2,199",
    image: "/img/img1.jpg",
    stars: 4,
  },
  {
    title: "3 Nights - 4 Star Umrah",
    subtitle: "4 Star Hotel Stay",
    price: "From AED 2,599",
    image: "/img/img2.jpg",
    stars: 4,
  },
  {
    title: "4 Nights - 4 Star Umrah",
    subtitle: "4 Star Hotel Stay",
    price: "From AED 2,999",
    image: "/img/img3.jpg",
    stars: 4,
  },
  {
    title: "2 Nights - 5 Star Umrah",
    subtitle: "5 Star Hotel Stay",
    price: "From AED 2,899",
    image: "/img/img4.jpg",
    stars: 5,
  },
   {
    title: "2 Nights - 5 Star Umrah",
    subtitle: "5 Star Hotel Stay",
    price: "From AED 3,899",
    image: "/img/img5.jpg",
    stars: 5,
  },
  
  {  title: "4 Nights - 4 Star Umrah",
    subtitle: "4 Star Hotel Stay",
    price: "From AED 2,799",
    image: "/img/img3.jpg",
    stars: 4,
  },
];

const MyBooking = () => {
  return (
    <div className="container py-5">
      <h3 className="fw-bold mb-3 text-warning">Best Umrah Packages</h3>
      <p>
        Embark on <strong>a spiritual Umrah journey</strong> with #musafirdotcom. Pay homage at Masjid al-Haram & Al Masjid al Nabawi, while performing Mazarats & Ziyarats in Makkah and Madina with free Saudi eVisa, flights, accommodation, daily breakfast and more. Call us at 600 544 405 to make a booking. Embark on a blessed journey with our Hajj and Umrah packages
      </p>

      <div className="row mt-4 g-4">
        {packages.map((pkg, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card border-0 shadow-sm">
              <div className="position-relative">
                <img src={pkg.image} alt={pkg.title} className="card-img-top" />
                <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">
                  {pkg.stars} Star
                </span>
              </div>
              <div className="card-body text-center">
                <h6 className="fw-bold">{pkg.title}</h6>
                <p className="text-muted mb-1">{pkg.subtitle}</p>
                <p className="text-primary fw-semibold">{pkg.price}</p>
                <button className="btn btn-warning btn-sm mt-2">Check Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
