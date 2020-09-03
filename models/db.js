
// link to database goes here
const Sequelize = require('sequelize')
const db = new Sequelize(
    'postgres://kakwo:password@localhost:5432/shopper', 
    {logging: false},
)
module.exports = db
