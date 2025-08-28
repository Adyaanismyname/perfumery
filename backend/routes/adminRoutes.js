const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Test database connection
router.get('/test-db', async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected', 
      2: 'connecting',
      3: 'disconnecting'
    };
    
    res.json({
      message: 'Database test endpoint',
      status: states[dbState],
      database: mongoose.connection.name,
      host: mongoose.connection.host
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Database test failed', 
      error: error.message 
    });
  }
});

// Get database info
router.get('/db-info', async (req, res) => {
  try {
    const admin = mongoose.connection.db.admin();
    const result = await admin.ping();
    
    res.json({
      message: 'Database is responsive',
      ping: result,
      collections: await mongoose.connection.db.listCollections().toArray()
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Failed to get database info', 
      error: error.message 
    });
  }
});

module.exports = router;