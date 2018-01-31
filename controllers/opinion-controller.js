// Import the opinions model
const Opinion = require('../models/opinion');

// Create the Opinions controller object
const opinionController = {};

// Controller Methods:

// Sending all the opinions to the route
opinionController.index = () => {
  Opinion.findAll()
  .then(opinions => {
    res.json({
      message: 'opinions loaded yo',
      data: opinions,
    });
  })
  .catch(err => {
    console.log('inside opinion.findAll error', err);
  });
};

opinionController.show = () => {
  Opinion.findById(req.params.id)
  .then(opinion => {
    res.json({
      message: 'single opinion loaded',
      data: opinion,
    });
  })
  .catch(err => {
    console.log('inside opinion.findById error', err)
  })
}

module.exports = opinionController;
