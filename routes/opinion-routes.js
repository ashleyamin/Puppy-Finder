// Import express
const express = require('express');
// Define the router
const opinionRouter = express.Router();

// Import opinionController
const opinionController = require('../controllers/opinion-controller');

// Create the routes
opinionRouter.get('/opinions', opinionController.index);
opinionRouter.get('/opinions/:id');

module.exports = opinionRouter;
