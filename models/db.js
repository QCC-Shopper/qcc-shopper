// link to database goes here
const Sequelize = require('sequelize');
const db = new Sequelize('prostgress://localhost:5432/banana/qccshopper')

module.exports = db; 