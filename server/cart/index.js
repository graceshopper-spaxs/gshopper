const router = require('express').Router();
module.exports = router;

router.get('/', (req, res, next) => {
    if(!req.session.cart) req.session.cart = [];
    res.json(req.session.cart);
});

router.post('/', (req, res, next) => {
    let add = req.body;
    let sessionCart = req.session.cart;
    req.session.cart = sessionCartQuantityAdd(sessionCart, add);
    res.json(req.session.cart);
});

router.put('/', (req, res, next) => {
    let update = req.body;
    let sessionCart = req.session.cart;
    req.session.cart = sessionCartQuantityUpdate(sessionCart, update);
    res.json(req.session.cart);
});

router.delete('/:item_id', (req, res, next) => {
    let item_id = req.params.item_id;
    let sessionCart = req.session.cart;
    req.session.cart = sessionCart.filter(onCartItem => onCartItem.item_id !== item_id);
    res.json(req.session.cart);
});

//Session cart helper functions
const sessionCartQuantityAdd = (sessionCart, add) => {
    return sessionCart.map(onCartItem => {
        if (onCartItem.item_id === add.item_id) {
            add.quantity += onCartItem.quantity;
            return add;
        } else return onCartItem;
    })
}

const sessionCartQuantityUpdate = (sessionCart, update) => {
    return sessionCart.map(onCartItem => {
        if (onCartItem.item_id === update.item_id) {
            return update;
        } else return onCartItem;
    })
}
