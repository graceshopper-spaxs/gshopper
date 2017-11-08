const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const {notificationEmail, shippingEmail} = require('../../email')

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
        allowNull: false,
        defaultValue: 0
    },
    address: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.ENUM('created', 'processed', 'completed', 'cancelled'),
        defaultValue: "created"
    }
})
module.exports = Order;

// Order.hook('afterCreate', (order, option) => {
//     const orderId = order.dataValues.id    
//     return User.findById(order.dataValues.userId)
//         .then(result => result.dataValues)
//         .then(user => notificationEmail(user.firstName, user.email, orderId))
// })

// Order.hook('afterUpdate', (order, option) => {
//     if(order.dataValues.status === "completed"){
//         const orderId = order.dataValues.id
//         console.log(orderId)
//         return User.findById(order.dataValues.userId)
//         .then(result => result.dataValues)
//         .then(user => shippingEmail(user.firstName, user.email, orderId)) 
//     }
// })