const db = require('./db')
const Items = require('./items')
const Users = require('./user')
const Orders = require('./orders')

Users.hasOne(Orders, {foreignKey: 'userId'})

module.exports = {
    db,
    Items,
    Users,
    Orders
}