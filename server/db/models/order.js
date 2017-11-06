const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    orderTime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    orderAmount: {
        type: Sequelize.INTEGER
    },
    orderPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    }
})
module.exports = Order;
