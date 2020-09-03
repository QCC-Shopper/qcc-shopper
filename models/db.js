
// link to database goes here
const Sequelize = require('sequelize')
<<<<<<< HEAD
const db = new Sequelize(
    'postgres://kakwo:password@localhost:5432/shopper', 
    {logging: false},
)
=======
const db = new Sequelize('postgres://parmi:codehacker@localhost:5432/qccshopper', {logging: false},)
>>>>>>> f7abc54d9a286c325aca892adc48d9713e9fb032
module.exports = db
