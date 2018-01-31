//here are the puppy routes
const express = require('express');
//import express module
const puppyRouter = express.Router();
//bring in Router()
//instantiate a router object, puppyRouter
//middleware and routing duties are handled by puppyRouter
const puppyController = require('../controllers/puppy-controller');
//import controller methods from puppy-controller.js

//puppyRouter.get('/', puppyController.displayBreeds);
puppyRouter.get('/', puppyController.showAll);
//display the users saved searches from the puppies table in puppy_dev database
puppyRouter.post('/',puppyController.add);
//create a saved searched to the puppies table in puppy_dev database
puppyRouter.get('/:id', puppyController.showPuppyById);
//return a puppy, selected by ID, from puppies table in puppy_dev database
puppyRouter.put('/:id', puppyController.edit);
//update the notes on a saved puppy, selected by ID, from puppies table in puppy_dev database
puppyRouter.delete('/:id', puppyController.remove);
//delete a saved puppy, selected by ID, from puppies table in puppy_dev database

module.exports = puppyRouter;
//export puppyRouter module
