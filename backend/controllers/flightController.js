const amadeus = require('../Config/amadeus');

// City-to-IATA Code Map
const cityToIATACode = {
dubai: 'DXB',
  abu_dhabi: 'AUH',
  sharjah: 'SHJ',
  al_ain: 'AAN',
  ras_al_khaimah: 'RKT',
  fujairah: 'FJR',
  // ✅ Add more as needed
};

exports.searchFlights = async (req, res) => {
  try {
    const {
      from = '',
      to = '',
      departureDate,
      returnDate,
      adults = 1,
    } = req.query;

    // Convert full city name to IATA code
    const originLocationCode = cityToIATACode[from.trim().toLowerCase()] || from.trim().toUpperCase();
    const destinationLocationCode = cityToIATACode[to.trim().toLowerCase()] || to.trim().toUpperCase();

    // Validation check
    if (!originLocationCode || !destinationLocationCode || !departureDate) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults: Number(adults),
      travelClass: 'ECONOMY',
      currencyCode: 'AED',
      max: 10,
    });

    const flights = response.data;

    if (!flights || flights.length === 0) {
      return res.status(200).json([]); // Frontend will handle "No flights"
    }

    res.json(flights);
  } catch (error) {
    console.error("Flight search error:", error.response?.data || error.message || error);
    res.status(500).json({
      error: "Failed to fetch flights",
      detail: error.response?.data || error.message,
    });
  }
};
