const Sequelize = require("sequelize");
const db = require("./db");


const User = db.define("user", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl:{
        type: Sequelize.STRING,
        default: "default value yet to be set?",
        validate:{
            isUrl: true
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports = User