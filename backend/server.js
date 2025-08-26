require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//server port
const PORT = process.env.PORT || 3000;

// 404 handler
app.use((req , res , next) => {
    res.status(404).json({ message: "Route Not Found" });
})

// Routes
app.use('/admin', require('./routes/adminRoutes'));



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


