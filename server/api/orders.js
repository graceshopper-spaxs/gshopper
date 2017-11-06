const router = require('express').Router()
const {Order, Ingredient, OrderIngredient} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {

    Order.create(req.body)
    .then(newOrder => {
        const orderId = newOrder.id
        // const ingredientId = req.body.cart[0].id
        // const quantity = req.body.cart[0].quantity
        req.body.cart.map(item => {
            const quantity = item.quantity
            const ingredientId = item.id
            OrderIngredient.create({orderId, ingredientId, quantity})
        })
    })
})
