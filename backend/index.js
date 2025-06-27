const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // 🔒 update if needed
  database: 'kiswa_database',
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// ✅ Import routes
const authRoutes = require('./routes/authRoutes');
const packageRoutes = require('./routes/packageRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const flightRoutes = require('./routes/flights');
const hotelPhotosRoute = require('./routes/hotelPhotos');
const visaRoutes = require('./routes/visaRoutes');
const visaTravelersRoute = require('./routes/visaTravelers')(db);
const contactRoutes = require('./routes/contactRoutes');

// ✅ Admin routes (functions requiring `db`)
const adminTourRoutes = require('./routes/admin/tours')(db);
const adminMessageRoutes = require('./routes/admin/messages')(db);
const adminVisaRoutes = require('./routes/admin/visaApplications')(db);

// ✅ Public Routes
app.use('/api/auth', authRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/hotels', hotelPhotosRoute);
app.use('/api/visas', visaRoutes(db)); // use only once
app.use('/api/travelers', visaTravelersRoute);
app.use('/api/contact', contactRoutes);

// ✅ Admin Routes
app.use('/api/admin/tours', adminTourRoutes);
app.use('/api/admin/messages', adminMessageRoutes);
app.use('/api/admin/visa-applications', adminVisaRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
