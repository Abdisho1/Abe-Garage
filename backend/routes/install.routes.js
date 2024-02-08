// Import the express module
const express = require('express');
// Call the router method of the express module to create the router
const router = express.Router();
// Import the install controller
const installController = require('../controllers/install.controller');
// Create a route for the install page
router.get('/install', installController.install);
// Export the router
module.exports = router;