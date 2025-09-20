require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const { runAllSeeders } = require('./seeders/index');

const app = express();

// Connect to MongoDB
connectDB();

// serve images
app.use('/static', express.static('images'));

// Run seeders after DB connection
const initializeDatabase = async () => {
  try {
    await runAllSeeders();
  } catch (error) {
    console.error('⚠️  Seeder error:', error.message);
  }
};

// Initialize database with seeders
initializeDatabase();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Your frontend URL from env
  credentials: true // Allow cookies to be sent
}));
app.use(express.json());

//server port
const PORT = process.env.PORT || 3000;

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/images', require('./routes/imageRoutes'));


// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});


