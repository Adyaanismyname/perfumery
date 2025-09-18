require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const { runAllSeeders } = require('./seeders/index');

const app = express();

// Connect to MongoDB
connectDB();

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
app.use(cors());
app.use(express.json());

//server port
const PORT = process.env.PORT || 3000;

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/products', require('./routes/productRoutes'));


// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});


