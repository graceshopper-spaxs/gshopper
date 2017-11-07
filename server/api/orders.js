const router = require('express').Router()
const { Order, OrderIngredient } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
    const idArr = req.body.cart.map(item => item.ingredientId)
    Order.create(req.body)
        .then(newOrder => newOrder.setIngredients(idArr))
        .then(orderInstance => {
            req.body.cart.map(item => {
                const orderId = orderInstance[0][0].orderId
                const quantity = item.quantity
                const ingredientId = item.ingredientId
                
                OrderIngredient.update({quantity}, {
                    where: {
                        orderId,
                        ingredientId
                    }
                })
            })
        })
        .then(() => res.send('order made'))
        .catch(next)
})

router.put('/:orderid',(req, res, next) => {
    const newStatus = req.body.status;
    const orderId = req.params.orderid;
    Order.findById(orderId)
    .then(order => {
        order.status = newStatus || "created";
        order.save({fields: ['status']})
        .then( () => {
            return Order.findById(orderId)
            .then(order => res.json(order))
        })
    })
    .catch(next)    
})

