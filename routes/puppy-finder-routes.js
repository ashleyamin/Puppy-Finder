// Import express
const express = require('express');
// Define the router
const puppyFinderRouter = express.Router();

// Import opinionController
const puppyFinderController = require('../controllers/puppy-finder-controller');

// Send the API data to localhost
puppyFinderRouter.get('/puppyfinder', puppyFinderController.search);

module.exports = puppyFinderRouter;
