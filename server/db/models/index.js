const User = require('./user')
const Ingredient = require('./ingredients')
const Cart = require('./cart')
const Order = require('./order')
const OrderIngredient = require('./orderIngredient')


/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
 

Order.belongsToMany(Ingredient, {through: OrderIngredient})
Ingredient.belongsToMany(Order, {through: OrderIngredient})
User.hasMany(Order)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Cart)

module.exports = {
  User,
  Ingredient,
  Cart,
  Order,
  OrderIngredient
}
