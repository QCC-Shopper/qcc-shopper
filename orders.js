const Sequelize = require("sequelize");
const db = require("./db");

const Orders = db.define("orders", {
    user: {
      type:Sequelize.STRING
      allowNull: false //user must be attached to order
    },
    status: {
        type: Sequelize.ENUM('PENDING','FULFILLED')
    },
    items: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    }
})

module.exports = Orders