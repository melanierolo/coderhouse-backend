const express = require('express');
const router = express.Router();

// Route to render real-time products page
router.get('/realtimeproducts3', (req, res) => {
  res.render('realtimeProducts');
});

module.exports = { router };
