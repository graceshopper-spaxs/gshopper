const User = require('./user')
const Ingredient = require('./ingredients')
const Cart = require('./cart')
const Order = require('./order')
const OrderIngredient = require('./orderIngredient')
const Category = require('./category')
const Review = require('./review')

 
// Order  -->  Ingredient: many to many relationship 
Order.belongsToMany(Ingredient, {through: OrderIngredient})
Ingredient.belongsToMany(Order, {through: OrderIngredient})
Ingredient.belongsToMany(Category, {through: 'IngredientCategory'})
Category.belongsToMany(Ingredient, {through: 'IngredientCategory'})
User.hasMany(Order)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
=======

//User --> Order: One to many relationship 
User.hasMany(Order)

//User --> cart: One to many
User.hasMany(Cart)


//User --> Review: One to many
User.hasMany(Review)

// Ingredient --> review: Many to many
Ingredient.belongsToMany(Review, {through: 'ingredient_review'})
Review.belongsToMany(Ingredient, {through: 'ingredient_review'})


module.exports = {
  User,
  Ingredient,
  Cart,
  Order,
  OrderIngredient,
  Category,
  Review
}
