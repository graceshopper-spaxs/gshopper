const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  ingredientId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  inCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Cart;
