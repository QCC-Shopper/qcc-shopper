
// link to database goes here
const Sequelize = require('sequelize')
const db = new Sequelize(
    'postgres://localhost:5432/shopperdb',
    {logging: false},
)
module.exports = db
