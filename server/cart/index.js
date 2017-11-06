const router = require('express').Router();
const Cart = require('../db/models/cart')

module.exports = router;

router.get('/', (req, res, next) => {
    // If a cart does not exist then we create one
    if (!req.session.cart) req.session.cart = [];
    // If a guest logs in...
    if (req.user) {
        const userId = req.user.id;
        if (req.session.cart.length) {
            Promise.all(mergeCartToDatabase(req.session.cart, userId))
                .then(() => {
                    return Cart.findAll({
                        where: {
                            userId,
                            inCart: true
                        }
                    })
                })
                .then(result => {
                    return res.json(result)
                })
                .catch(next)
            req.session.cart = [];
        } else {
            Cart.findAll({where:{userId, inCart:true}})
            .then(result=>res.json(result))
            req.session.cart = [];
        }
        
    } else res.json(req.session.cart);
});

router.post('/', (req, res, next) => {
    let add = req.body;
    let sessionCart = req.session.cart;

    const foundItem = sessionCart.find(onCartItem => onCartItem.ingredientId === add.ingredientId)
    if (foundItem) req.session.cart = sessionCartQuantityAdd(sessionCart, add);
    else req.session.cart = [...sessionCart, add];
    res.json(req.session.cart);
});

router.post('/db/', (req, res, next) => {
    let add = req.body;
    const userId = req.user.id;
    Cart.findOrCreate({
        where: {
            userId,
            ingredientId: add.ingredientId,
            inCart: true
        }
    })
    .spread((dbItem, created) => dbItem.update({ quantity: dbItem.quantity + add.quantity }))
    .then(result => res.json(result))
    .catch(next);
});

router.put('/', (req, res, next) => {
    let update = req.body;
    let sessionCart = req.session.cart;
    req.session.cart = sessionCartQuantityUpdate(sessionCart, update);
    res.json(req.session.cart);
});

router.put('/db/', (req, res, next) => {
    let update = req.body;
    const userId = req.user.id;
    Cart.findOne({
        where: {
            userId,
            ingredientId: add.ingredientId,
            inCart: true
        }
    })
    .then((dbItem) => dbItem.update({ quantity: update.quantity }))
    .then(result => res.json(result))
    .catch(next);
});

router.delete('/:ingredientId', (req, res, next) => {
    let ingredientId = parseInt(req.params.ingredientId);
    let sessionCart = req.session.cart;
    req.session.cart = sessionCart.filter(onCartItem => onCartItem.ingredientId !== ingredientId);
    res.json(req.session.cart);
});

router.delete('/db/:ingredientId', (req, res, next) => {
    const userId = req.user.id;
    let ingredientId = req.params.ingredientId;
    Cart.findOne({
        where: {
            userId,
            ingredientId,
            inCart: true
        }
    })
    .then((dbItem) => dbItem.update({ inCart: false }))
    .then(result => res.json(result))
    .catch(next);
});

//Session cart helper functions
const sessionCartQuantityAdd = (sessionCart, add) => {
    return sessionCart.map(onCartItem => {
        if (onCartItem.ingredientId === add.ingredientId) {
            add.quantity += onCartItem.quantity;
            return add;
        } else return onCartItem;
    })
}

const sessionCartQuantityUpdate = (sessionCart, update) => {
    return sessionCart.map(onCartItem => {
        if (onCartItem.ingredientId === update.ingredientId) {
            return update;
        } else return onCartItem;
    })
}

const mergeCartToDatabase = (sessionCart, userId) => {
    const promiseArr = [];
    sessionCart.forEach((item, i) => {
        promiseArr[i] = Cart.findOrCreate({
            where: {
                userId,
                ingredientId: item.ingredientId,
                inCart: true
            }
        })
        .spread((dbItem, created) => {
            return dbItem.update({ quantity: dbItem.quantity + item.quantity })
        })
    })
    return promiseArr;
}

