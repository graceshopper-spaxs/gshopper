const Sequelize = require('sequelize')
const db = require('../db')

const OrderIngredient = db.define('orderIngredient', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
})

module.exports = OrderIngredient