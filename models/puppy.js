//this is the puppy model file
const db = require('../db/config');
//bring in the config.js file for puppy_dev database
const Puppy = {};
//instantiate a new object, Puppy
//Puppy model will interface with puppy_dev database
//puppy_dev has two tables
//puppies table
//opinion table
//define Puppy model methods

Puppy.findAll = () => {
  return db.query(`SELECT * FROM puppies`);
};
//return all the saved searches from the puppies table

Puppy.findByid = id => {
  return db.oneorNone(
    `
     SELECT * FROM puppies
     WHERE id = $1
    `,
    [id]
  );
};
//return the puppy selected by ID from the puppies table

Puppy.create = puppy => {
  return db.one(
    `
    INSERT INTO puppies
    (name, breed, photourl, sex, description, altered, housetrained, shelternumber, notes)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *
  `,
    [puppy.name, puppy.breed, puppy.photourl, puppy.sex, puppy.description, puppy.altered, puppy.housetrained, puppy.shelternumber, puppy.notes]
  );
};
//add a selected puppy profile to puppies table in puppy_dev database

Puppy.update = (puppy, op_ID, id) => {
  return db.one(
    `
    UPDATE puppies SET
     notes = $1,
     op_ID = $2,
    WHERE id = $3
    RETURNING *
  `,
    [puppy.notes, puppy.op_ID, id]
  );
};
//edit the text area notes of a saved search in the puppies table

Puppy.remove = id => {
  return db.none(
    `
    DELETE from puppies
    WHERE id = $1
  `,
    [id]
  );
};
//remove a saved search from the puppies table

module.exports = Puppy;
