import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Flights.css';

const Flights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const departureDate = searchParams.get('departureDate');
  const returnDate = searchParams.get('returnDate');
  const adults = searchParams.get('adults') || '1';
  const cabin = searchParams.get('cabin') || 'ECONOMY';

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
    });
  };

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://al-kiswa-backend-production.up.railway.app/api/flights/search', {
          params: {
            from,
            to,
            departureDate,
            returnDate,
            adults,
            cabin,
          },
        });
        setFlights(res.data || []);
      } catch (err) {
        setError('Failed to load flight data');
        console.error('Flight fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [from, to, departureDate, returnDate, adults, cabin]);

  const handleFlightDetails = (flight) => {
    setSelectedFlight(flight);
    setShowDetails(true);
  };

  const closeDrawer = () => {
    setShowDetails(false);
    setSelectedFlight(null);
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm mb-4 border-0" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="d-flex flex-wrap justify-content-between align-items-center px-4 py-3">
          <div>
            <h5 className="mb-1 fw-bold">{from?.toUpperCase()} → {to?.toUpperCase()}</h5>
            <div className="text-muted small">
              {formatDate(departureDate)} {returnDate && `– ${formatDate(returnDate)}`}
            </div>
          </div>
          <div className="text-muted">
            <i className="fas fa-user me-1"></i> {adults} Traveller{adults > 1 ? 's' : ''} • {cabin.charAt(0) + cabin.slice(1).toLowerCase()}
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/')}>Modify</button>
        </div>
      </div>

      <h2 className="text-warning fw-bold mb-4 text-uppercase">Flight Results</h2>

      {loading && <p>Loading flights...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && flights.length === 0 && <p>No flights found.</p>}

      <div className="row">
        {flights.map((flight, index) => {
          const onward = flight.itineraries?.[0]?.segments?.[0] || {};
const returnFlight = flight.itineraries?.[1]?.segments?.[0] || {};

          const price = flight.price?.total;
          const currency = flight.price?.currency;
          const airline = flight?.validatingAirlineCodes?.join(', ') || 'Airline';

          return (
            <div className="col-12 mb-4" key={index}>
              <div className="card flight-card shadow-sm">
                <div className="row g-0 p-3">
                  <div className="col-md-6 border-end pe-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-plane-departure text-primary me-2"></i>
                      <span className="fw-bold text-primary">Onward</span>
                      <span className="ms-2 text-muted small">{departureDate}</span>
                    </div>
                    <div className="mb-1 text-muted" style={{ fontSize: '14px' }}>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">{onward?.departure?.at?.slice(11, 16)}</span>
                        <span>{onward?.duration || '2h 5m'}</span>
                        <span className="fw-semibold">{onward?.arrival?.at?.slice(11, 16)}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <span>{onward?.departure?.iataCode}</span>
                        <span><i className="fas fa-plane mx-2"></i>0, {cabin}</span>
                        <span>{onward?.arrival?.iataCode}</span>
                      </div>
                      <div className="text-muted mt-1" style={{ fontSize: '13px' }}>{airline} | {onward?.number}</div>
                    </div>
                  </div>

                  <div className="col-md-6 ps-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-plane-arrival text-success me-2"></i>
                      <span className="fw-bold text-success">Return</span>
                      <span className="ms-2 text-muted small">{returnDate}</span>
                    </div>
                    <div className="mb-1 text-muted" style={{ fontSize: '14px' }}>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">{returnFlight?.departure?.at?.slice(11, 16)}</span>
                        <span>{returnFlight?.duration || '2h 5m'}</span>
                        <span className="fw-semibold">{returnFlight?.arrival?.at?.slice(11, 16)}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <span>{returnFlight?.departure?.iataCode}</span>
                        <span><i className="fas fa-plane mx-2"></i>0, {cabin}</span>
                        <span>{returnFlight?.arrival?.iataCode}</span>
                      </div>
                      <div className="text-muted mt-1" style={{ fontSize: '13px' }}>{airline} | {returnFlight?.number}</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center px-3 pb-3 pt-2 border-top">
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="fas fa-suitcase-rolling me-1"></i> Luggage
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold fs-5 text-dark">{price} {currency}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleFlightDetails(flight)}>Flight Details</button>
                    <button
  className="btn btn-warning text-white btn-sm"
  onClick={() => navigate('/BookingDetails', { state: { flight } })}
>
  Book Now
</button>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showDetails && selectedFlight && (
        <div className="flight-drawer-overlay" onClick={closeDrawer}>
          <div className="flight-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Flight Details</h5>
              <button className="btn-close" onClick={closeDrawer}></button>
            </div>
            <div className="mb-3">
              <strong>Airline:</strong> {selectedFlight.validatingAirlineCodes.join(', ')}<br />
              <strong>Price:</strong> {selectedFlight.price.total} {selectedFlight.price.currency}<br />
              <strong>Duration:</strong> {selectedFlight.itineraries[0]?.duration}
            </div>
            <div className="mb-3">
              <h6>Fare Rules</h6>
              <p className="text-muted">Free cancellation within 24 hours. Non-refundable afterward. Rebooking fee applies.</p>
            </div>
            <div className="mb-3">
              <h6>Baggage Info</h6>
              <p className="text-muted">1 carry-on + 1 checked bag (up to 23kg)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flights;