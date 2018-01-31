// Import express
const express = require('express');
// Define the router
const opinionRouter = express.Router();

// Import opinionController
const opinionController = require('../controllers/opinion-controller');

// Create the routes
opinionRouter.get('/', opinionController.index);
opinionRouter.get('/:id');

module.exports = opinionRouter;
