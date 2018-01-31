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

puppyRouter.get('/', puppyController.findAll);
//when the path/URL requested is '/', map to controller method findall()
//display the users saved searches from the puppies table in puppy_dev database

puppyRouter.post('/',puppyController.add);
//when the path/URL specified is '/' with HTTP method of post
//map to controller method add()
//create a saved searched to the puppies table in puppy_dev database

puppyRouter.get('/:id', puppyController.showPuppyById);
//HTTP get request
//path is '/:id'
//map to controller method showPuppyById()
//return a puppy, selected by ID, from puppies table in puppy_dev database

puppyRouter.put('/:id', puppyController.edit);
//HTTP put method
//path requested is '/:id'
//map to controller method edit()
//update the notes on a saved puppy, selected by ID, from puppies table in puppy_dev database

puppyRouter.delete('/:id', puppyController.remove);
//HTTP delete method
//path is '/:id'
//map to controller remove method()
//delete a saved puppy, selected by ID, from puppies table in puppy_dev database

module.exports = puppyRouter;
//export puppyRouter module
