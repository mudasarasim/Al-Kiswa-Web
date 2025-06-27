import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingDetails.css';

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [proceeding, setProceeding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const flightData = location.state?.flight;
      setFlight(flightData);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.state]);

  const handleProceed = () => {
    setProceeding(true);
    setTimeout(() => {
      navigate('/BookingConfirmation', { state: { flight } });
    }, 2000);
  };

  if (loading || !flight || proceeding) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const onward = flight.itineraries[0]?.segments[0];
  const returnFlight = flight.itineraries[1]?.segments[0];
  const airline = flight?.validatingAirlineCodes?.join(', ');
  const price = flight.price?.total;
  const currency = flight.price?.currency;

  return (
    <div className="container py-4">
      <h3 className="text-uppercase text-warning fw-bold mb-3">Booking Details</h3>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3">Flight Summary</h5>
          <p><strong>Airline:</strong> {airline}</p>
          <p><strong>Price:</strong> {price} {currency}</p>
          <p><strong>Route:</strong> {onward?.departure?.iataCode} → {onward?.arrival?.iataCode}</p>
          <p><strong>Departure Time:</strong> {onward?.departure?.at}</p>
          <p><strong>Return Time:</strong> {returnFlight?.departure?.at}</p>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3">Cash & Payment</h5>
          <p className="text-muted">Cash or Card accepted. Pay securely at checkout.</p>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3">Baggage Information</h5>
          <p className="text-muted">0Kg Cabin + 10Kg Checked Included</p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Back to Selection</button>
        <button className="btn btn-warning text-white" onClick={handleProceed}>Proceed</button>
      </div>
    </div>
  );
};

export default BookingDetails;
