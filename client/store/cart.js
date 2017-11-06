import axios from 'axios'

//Action Types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'
const GET_CART = 'GET_CART'


//Initial State
const defaultCart = []

//Action Creators
export const addItem = (item_id, quantity) => (
    {
        type: ADD_ITEM,
        cartItem: { item_id, quantity }
    }
);

export const updateItem = (item_id, quantity) => (
    {
        type: UPDATE_ITEM,
        cartItem: { item_id, quantity }
    }
);

export const removeItem = item_id => ({ type: REMOVE_ITEM, item_id });

export const getCart = cart => ({ type: GET_CART, cart })

// Thunks

export const fetchSessionCart = () =>
    dispatch =>
        axios.get('/cart')
            .then(res => dispatch(getCart(res.data)))
            .catch(err => console.log(err))

export const addToSessionCart = (item_id, quantity) =>
    dispatch =>
        axios.post('/cart', { item_id, quantity })
            .catch(err => console.log(err))

export const updateSessionCart = (item_id, quantity) =>
    dispatch =>
        axios.put('/cart', { item_id, quantity })
            .catch(err => console.log(err))

export const deleteSessionItem = (item_id) =>
    dispatch =>
        axios.delete(`/cart/${item_id}`)
            .catch(err => console.log(err))

//Reducer
export default function (state = defaultCart, action) {
    switch (action.type) {
        case ADD_ITEM:
            const foundItem = state.find(onCartItem => onCartItem.item_id === action.cartItem.item_id)
            if (foundItem) return onCartQuantityAdd(state, action);
            else return [...state, action.cartItem];

        case REMOVE_ITEM:
            return state.filter(onCartItem => onCartItem.item_id !== action.item_id)

        case UPDATE_ITEM:
            return onCartQuantityUpdate(state, action);

        case GET_CART:
            return action.cart;

        default:
            return state
    }
}

//Reducer helper functions
const onCartQuantityAdd = (state, action) => {
    return state.map(onCartItem => {
        if (onCartItem.item_id === action.cartItem.item_id) {
            action.cartItem.quantity += onCartItem.quantity;
            return action.cartItem;
        } else return onCartItem;
    })
}

const onCartQuantityUpdate = (state, action) => {
    return state.map(onCartItem => {
        if (onCartItem.item_id === action.cartItem.item_id) {
            return action.cartItem;
        } else return onCartItem;
    })
}








