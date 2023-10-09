const express = require('express');
const ViewsRouter = express.Router();

// Route to render real-time products page
ViewsRouter.get('/realTimeProducts', (req, res, next) => {
  res.render('realTimeProducts'); // Assuming 'realTimeProducts' is in your 'views' folder
});

// ✅ export the router
module.exports = { ViewsRouter };
