// import the database
const db = require('../db/config');

const Opinion = {};

// Find all of the opinions
Opinion.findAll = () => {
  return db.query(`
    SELECT * FROM opinions
    `);
};

// Find one of the opinions
Opinion.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM opinions
    WHERE id = $1
    `, [id])
}

module.exports = Opinions;
