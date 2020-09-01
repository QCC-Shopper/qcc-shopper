const db = require('./db');
const {Sequelize} = require('sequelize');

const Items = db.define('cars', {
    name: {
        type: Sequelize.STRING,
        allowNULL: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNULL:false,
    },
    description: {
        type: Sequelize.STRING(500),
        allowNull: false,
    },
    imageUrl:  {
        type: Sequelize.STRING(300),
        allowNULL: false,
    }
})

module.exports = Items;
