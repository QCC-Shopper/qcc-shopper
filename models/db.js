const Sequelize = require("sequelize");
const db = new Sequelize("shopper", "kakwo", "password", {
    dialect: "postgres",
    logging: false,
});
module.exports = db