import axios from 'axios'

//Action Types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

//Initial State
const defaultCart = []

//Action Creators

export const addItem = item => ({ type: ADD_ITEM, item })
export const removeItem = item => ({ type: REMOVE_ITEM, item })
export const updateItem = item => ({ type: UPDATE_ITEM, item })

export default function (state = defaultCart, action) {
    switch (action.type) {
        case ADD_ITEM:
            const foundItem = state.find(item => item.id === action.item.id)
            if (foundItem) return AddMoreToCart(state, action)
            else return [...state, action.item]

        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.id)

        default:
            return state
    }
}

function AddMoreToCart(state, action) {
    return state.map(item => {
        if (item.id === action.item.id) {
            item.quantity += action.item.quantity
        }
        return item
    })
}

//ProductC [X] quantity: 7 weight: 200g

//[{name: Apple, id:1, quantity: 5}]

//[[name: apple, id:1, quanity: 10]]


//onclick( event => if(!apple) dispatch(addItem) else dispatch(update))
