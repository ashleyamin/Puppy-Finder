// Create the puppy finder controller object
const axios = require('axios');
const puppyFinderController = {};

// Make the axios call to puppy finder API
puppyFinderController.search = (req,res) => {
  axios({
    method: 'GET',
    url: (`https://api.petfinder.com/pet.find?key=${process.env.API_KEY}&breed=${req.body.breed}&location=${req.body.zipcode}&count=12&format=json`),
  })
  .then(allTheDogs => {
    console.log(allTheDogs.data.petfinder.pets)
    res.json({
      message: 'successfully made API call',
      data: allTheDogs.data.petfinder.pets
    })
  })
  .catch(err => {
    console.log('inside puppy finder API call error', err);
  });
};

module.exports = puppyFinderController;
