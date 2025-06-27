import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './BookingConfirmation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faUser,
  faSuitcaseRolling,
  faMoneyBillWave,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

const BookingConfirmation = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const flight = location.state?.flight;

  const AED_CONVERSION_RATE = 0.013; // Example rate

  const [selectedBaggage, setSelectedBaggage] = useState({
    onward: '10',
    return: '10',
  });
  if (!flight) return <p>No booking data found.</p>;

  const onward = flight.itineraries[0]?.segments[0];
  const returnFlight = flight.itineraries[1]?.segments[0];
  const airline = flight.validatingAirlineCodes?.join(', ');
  const flightAEDPrice = parseFloat(flight.price?.total); // Already in AED
  const currency = 'AED';

  const baggageOptions = [
    { weight: '10', label: '0Kg + 10Kg Included', cost: 0 },
    { weight: '23', label: '23Kg', cost: Math.round(1168 * AED_CONVERSION_RATE) },
    { weight: '30', label: '30Kg', cost: Math.round(1168 * AED_CONVERSION_RATE) },
    { weight: '46', label: '46Kg', cost: Math.round(1461 * AED_CONVERSION_RATE) },
  ];

  const getBaggageCost = () => {
    const onwardCost = baggageOptions.find(b => b.weight === selectedBaggage.onward)?.cost || 0;
    const returnCost = baggageOptions.find(b => b.weight === selectedBaggage.return)?.cost || 0;
    return onwardCost + returnCost;
  };

  const baggageCost = getBaggageCost();
  const totalPrice = flightAEDPrice + baggageCost;


// const handleBooking = () => {
//   // Example: pass booking data if needed
//   navigate('/booking-success', {
//     state: {
//       flight,
//       baggageCost,
//       total: totalPrice,
//     },
//   });
// };

  return (
    <div className="booking-wrapper">
      <div className="left-section">
        <div className="section-box">
          <h5><FontAwesomeIcon icon={faPlaneDeparture} className="me-2" />Flight Details</h5>
          <div className="flight-block">
            <strong>{onward?.departure?.iataCode} → {onward?.arrival?.iataCode}</strong>
            <p>Departure: {onward?.departure?.at}</p>
            <p>Flight No: {onward?.carrierCode}-{onward?.number}</p>
          </div>
          <div className="flight-block mt-3">
            <strong>{returnFlight?.departure?.iataCode} → {returnFlight?.arrival?.iataCode}</strong>
            <p>Departure: {returnFlight?.departure?.at}</p>
            <p>Flight No: {returnFlight?.carrierCode}-{returnFlight?.number}</p>
          </div>
        </div>

        <div className="section-box passenger-box">
          <h5><FontAwesomeIcon icon={faUser} className="me-2" />Passengers Detail</h5>
          <div className="form-section">
            <h6>Contact Details (Ticket Recipient)</h6>
            <div className="form-row-3">
              <input type="email" placeholder="Email *" />
              <select>
                <option>Select UAE Airport City</option>
                <option>Abu Dhabi (AUH)</option>
                <option>Dubai (DXB)</option>
                <option>Sharjah (SHJ)</option>
                <option>Al Ain (AAN)</option>
                <option>Ras Al Khaimah (RKT)</option>
                <option>Fujairah (FJR)</option>
              </select>
              <input type="tel" placeholder="Phone *" />
            </div>
          </div>

          <div className="form-section">
            <h6><span className="text-warning">Adult 1</span> (Lead Passenger)</h6>
            <div className="form-row-5">
              <select>
                <option>Title *</option>
                <option>Mr</option>
                <option>Ms</option>
              </select>
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
              <input type="date" placeholder="Date of Birth *" />
              <input type="text" placeholder="Carrier Code (Optional)" />
            </div>
            <div className="form-row-2">
              <input type="text" placeholder="Frequent Flyer No. (Optional)" />
            </div>
          </div>

          <div className="form-section">
            <h6 className="text-muted">( Document Details )</h6>
            <div className="form-row-5">
              <select>
                <option>Gender *</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <select>
                <option>Doc. Type *</option>
                <option>Passport</option>
              </select>
              <input type="text" placeholder="Doc. No. *" />
              <select>
                <option>Country of Issue *</option>
                <option>Abu Dhabi</option>
                <option>Dubai</option>
                <option>Sharjah</option>
                <option>Ajman</option>
                <option>Fujairah</option>
                <option>Ras Al Khaimah</option>
                <option>Umm Al Quwain</option>
              </select>
              <select>
                <option>Nationality *</option>
                <option>Emirati - Abu Dhabi</option>
                <option>Emirati - Dubai</option>
                <option>Emirati - Sharjah</option>
                <option>Emirati - Ajman</option>
                <option>Emirati - Fujairah</option>
                <option>Emirati - Ras Al Khaimah</option>
                <option>Emirati - Umm Al Quwain</option>
              </select>
            </div>
            <div className="form-row-2">
              <input type="date" placeholder="Expire Date *" />
              <input type="date" placeholder="Issue Date *" />
            </div>
          </div>
        </div>

        <div className="section-box">
          <h5><FontAwesomeIcon icon={faSuitcaseRolling} className="me-2" />Baggage Details</h5>
          <h6>✈ Lahore to Karachi</h6>
          <div className="baggage-options">
            {baggageOptions.map(option => (
              <div
                key={`onward-${option.weight}`}
                className={`baggage-box ${selectedBaggage.onward === option.weight ? 'selected' : ''}`}
                onClick={() => setSelectedBaggage(prev => ({ ...prev, onward: option.weight }))}
              >
                <p>{option.label}</p>
                {option.cost > 0 && <small>AED {option.cost}</small>}
              </div>
            ))}
          </div>

          <h6 className="mt-3">✈ Karachi to Lahore</h6>
          <div className="baggage-options">
            {baggageOptions.map(option => (
              <div
                key={`return-${option.weight}`}
                className={`baggage-box ${selectedBaggage.return === option.weight ? 'selected' : ''}`}
                onClick={() => setSelectedBaggage(prev => ({ ...prev, return: option.weight }))}
              >
                <p>{option.label}</p>
                {option.cost > 0 && <small>AED {option.cost}</small>}
              </div>
            ))}
          </div>
        </div>

        <div className="section-box">
          <h5><FontAwesomeIcon icon={faCreditCard} className="me-2" />Payment Type</h5>
          <select className="form-control">
            <option>Card</option>
            <option>Cash</option>
            <option>EasyPaisa</option>
          </select>
        </div>

        <div className="text-end">
          <button className="btn-book">Book Now</button>

        </div>
      </div>

      <div className="right-section">
        <div className="section-box fare-box">
          <h5><FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />Fare Summary</h5>
          <p>Flight Fare: {flightAEDPrice} {currency}</p>
          <p>Baggage Charges: {baggageCost} {currency}</p>
          <hr />
          <p><strong>Total: {totalPrice} {currency}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
