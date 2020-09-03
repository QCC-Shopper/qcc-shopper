
// link to database goes here
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://parmi:codehacker@localhost:5432/qccshopper', {logging: false},)

module.exports = db
