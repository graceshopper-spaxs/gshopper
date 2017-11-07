import axios from 'axios'
import chalk from 'chalk'

//Action Types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const GET_CART = 'GET_CART'
const EMPTY_CART = 'EMPTY_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'


//Initial State
const defaultCart = []

//Action Creators
export const addItem = (ingredientId, quantity) => (
    {
        type: ADD_ITEM,
        cartItem: { ingredientId, quantity }
    }
);

export const updateItem = (ingredientId, quantity) => (
    {
        type: UPDATE_ITEM,
        cartItem: { ingredientId, quantity }
    }
);

export const removeItem = ingredientId => ({ type: REMOVE_ITEM, ingredientId });

export const getCart = cart => ({ type: GET_CART, cart })

export const emptyCart = () => ({ type: EMPTY_CART })

export const checkoutItem = () => ({ type: CHECKOUT_CART })


// Thunks

export const fetchSessionCart = () =>
    dispatch =>
        axios.get('/cart')
            .then(res => dispatch(getCart(res.data)))
            .catch(err => console.log(err))

export const addToSessionCart = (ingredientId, quantity, isLoggedIn) =>
    dispatch => {
        let route = routeDecision(isLoggedIn)
        axios.post('/cart' + route, { ingredientId, quantity })
            .catch(err => console.log(err))
    }

export const updateSessionCart = (ingredientId, quantity, isLoggedIn) =>
    dispatch => {
        let route = routeDecision(isLoggedIn)
        axios.put('/cart' + route, { ingredientId, quantity })
            .catch(err => console.log(err))
    }

export const deleteSessionItem = (ingredientId, isLoggedIn) =>
    dispatch => {
        if (isLoggedIn) {
            axios.delete(`/cart/db/${ingredientId}`)
                .catch(err => console.log(err))
        } else {
            axios.delete(`/cart/${ingredientId}`)
                .catch(err => console.log(err))
        }
    }

export const checkoutCart = ({ userId, orderAmount, orderPrice, address, cart }, history) =>
    dispatch => {
        axios.post('/api/orders', { userId, orderAmount, orderPrice, address, cart })
            .then(order => {
                console.log("Working")
                axios.put(`/cart/${userId}`,{})
            })
            .then(() => {
                dispatch(emptyCart())
            })
            .then(() => {
                history.push('/home')
            })
            .catch(err => console.log(err))
    }


//Reducer
export default function (state = defaultCart, action) {
    switch (action.type) {
        case ADD_ITEM:
            const foundItem = state.find(onCartItem => onCartItem.ingredientId === action.cartItem.ingredientId)
            if (foundItem) return onCartQuantityAdd(state, action);
            else return [...state, action.cartItem];

        case REMOVE_ITEM:
            return state.filter(onCartItem => onCartItem.ingredientId !== action.ingredientId)

        case UPDATE_ITEM:
            return onCartQuantityUpdate(state, action);

        case GET_CART:
            return action.cart;

        case EMPTY_CART:
            return [];
        case CHECKOUT_CART:
            return [];
        default:
            return state
    }
}

//Reducer helper functions
const onCartQuantityAdd = (state, action) => {
    return state.map(onCartItem => {
        if (onCartItem.ingredientId === action.cartItem.ingredientId) {
            action.cartItem.quantity += onCartItem.quantity;
            return action.cartItem;
        } else return onCartItem;
    })
}

const onCartQuantityUpdate = (state, action) => {
    return state.map(onCartItem => {
        if (onCartItem.ingredientId === action.cartItem.ingredientId) {
            return action.cartItem;
        } else return onCartItem;
    })
}

//Thunk helper function

const routeDecision = (isLoggedIn) => {
    if (isLoggedIn) return "/db";
    else return ""
}








