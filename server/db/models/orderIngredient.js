const Sequelize = require('sequelize')
const db = require('../db')

const OrderIngredient = db.define('orderIngredient', {
    quantity: Sequelize.INTEGER
})

module.exports = OrderIngredient
