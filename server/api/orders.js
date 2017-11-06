const router = require('express').Router()
const {Order, OrderIngredient} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {

    Order.create(req.body)
    .then(newOrder => {
        req.body.cart.map(item => {
            const orderId = newOrder.id
            const quantity = item.quantity
            const ingredientId = item.id
            OrderIngredient.create({orderId, ingredientId, quantity})
        })
    })
})
