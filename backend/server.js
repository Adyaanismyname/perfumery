require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//server port
const PORT = process.env.PORT || 3000;

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


