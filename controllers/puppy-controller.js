//this is the puppy controller
const Puppy = require('../models/puppy');
//bring in the Puppy object and methods
//Puppy will interface with the puppy_database
const puppyController = {};
//instantiate a controller object

//controller method findAll()
//Puppy model will query the puppy_dev database
//return all the saved searches in puppies table
puppyController.findAll = (req,res) => {
  Puppy.findAll()
    .then(puppies => {
      res.json({
        message: 'success',
        data: puppies,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({err});
    });
  };

puppyController.showPuppyById = (req, res) => {
  Puppy.findById(req.params.id)
    .then(puppy => {
      res.json({
        message: 'success',
        data: puppy,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };

//check this!
puppyController.add = (req, res) => {
    Puppy.create({
      name: req.body.name,
      breed: req.body.breed,
      photourl: req.body.photourl,
      sex: req.body.sex,
      description: req.body.description,
      altered: req.body.altered,
      housetrained: req.body.housetrained,
      shelternumber: req.body.shelternumber,
      notes: req.body.notes,
    })
      .then(puppy => {
        res.json({
          message: 'ok',
          data: puppy,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  };

puppyController.edit = (req, res) => {
  Puppy.update({
      id: req.body.id,
      op_ID: req.body.op_ID,
      notes: req.body.notes,
    }
  )
      .then(puppy => {
        res.json({
          message: 'ok',
          data: puppy,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  };

puppyController.remove = (req, res) => {
  Puppy.remove(req.params.id)
    .then(puppy => {
      res.json({
        message: 'success',
        data: puppy,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
  };


module.exports = puppyController;
