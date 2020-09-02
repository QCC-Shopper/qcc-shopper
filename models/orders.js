const Sequelize = require("sequelize");
const db = require("./db");

const Orders = db.define("orders", {
    
    status: {
        type: Sequelize.ENUM('PENDING','FULFILLED')
    },
    items: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    }
})

module.exports = Orders