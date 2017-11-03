const Sequelize = require('sequelize')
const db = require('../db')
const OrderIngredient = require('./orderIngredient')

const Order = db.define('order', {
    orderTime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    orderAmount: {
        type: Sequelize.INTEGER,
        // set() {
        //     this.setDataValue('orderAmount',
        //         OrderIngredient.findAll({
        //             attributes: ['quantity'],
        //             where: {
        //                 id : this.getDataValue('id')
        //             }
        //         })
        //         .then(instances => {
        //             console.log('!!!!!!', instances);
        //         })
        //     )
        // }
    },
    orderPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Order.hook('beforeCreate', (order, options) => {
    return OrderIngredient.findAll({
        attributes: ['quantity'],
        where: {
            orderId: 1
        }
    })
    .then(arrOfNum => {
        const sumFunc = (a, b) => {
            return a + b;
        }
        const correctAmount = arrOfNum.reduce(sumFunc, 0);
        order.orderAmount = correctAmount;
    })
})

module.exports = Order;
