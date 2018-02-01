// Create the puppy finder controller object
const puppyFinderController = {};

// Make the axios call to puppy finder API
puppyFinderController.search = (req,res) => {
  axios({
    method: 'GET',
    url: (`https://api.petfinder.com/pet.find?key=2a7149beb4237dc3dc4a3123d808f533&breed=${req.body.breed}&location=${req.body.zipcode}&count=2&format=json`),
  })
  .then(allTheDogs => {
    res.json({
      message: 'successfully made API call',
      data: allTheDogs.data.data[0].petfinder.pets.pet
    })
  })
  .catch(err => {
    console.log('inside puppy finder API call error', err);
  });
};

module.exports = puppyFinderController;
