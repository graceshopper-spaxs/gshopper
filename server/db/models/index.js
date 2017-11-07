const User = require('./user')
const Ingredient = require('./ingredients')
const Cart = require('./cart')
const Order = require('./order')
const OrderIngredient = require('./orderIngredient')
const Review = require('./review')



 
// Order  -->  Ingredient: many to many relationship 
Order.belongsToMany(Ingredient, {through: OrderIngredient})
Ingredient.belongsToMany(Order, {through: OrderIngredient})

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
  Review
}
