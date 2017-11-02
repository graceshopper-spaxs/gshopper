import axios from 'axios'

//Action Types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

//Initial State
const defaultCart = []

//Action Creators
export const addItem = (item_id, quantity) => (
    { 
        type: ADD_ITEM,
        cartItem: {item_id, quantity} 
    }
);

export const updateItem = (item_id, quantity) => (
    { 
        type: UPDATE_ITEM,
        cartItem: {item_id, quantity} 
    }
);

export const removeItem = item_id => ({ type: REMOVE_ITEM, item_id });

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








