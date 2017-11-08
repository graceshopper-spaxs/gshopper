import { expect } from 'chai'
import { addItem, removeItem, updateItem } from './cart'
import configureMockStore from 'redux-mock-store'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import cartReducer from './cart'


const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('Cart Reducer', () => {
    let store
    const initialState = []

    beforeEach(() => {
        store = createStore(cartReducer)
    })


    describe('Add item', () => {
        
        it('adds an item to the cart', () => {
            const action = {type: "ADD_ITEM", cartItem: {ingredientId: 1, quantity: 2}}
            store.dispatch(action)
            expect(store.getState()[0].quantity).to.be.equal(2)
        })

        it('updates quantity if item is already in cart', () => {
            const action = {type: "ADD_ITEM", cartItem: {ingredientId: 1, quantity: 2}}
            store.dispatch(action)
            store.dispatch(action)
            expect(store.getState()[0].quantity).to.be.equal(4)
        })
    })

    describe('Remove item', ()=> {
        it('removes an item from the cart', () => {
            const addItemAction = {type: "ADD_ITEM", cartItem: {ingredientId: 1, quantity: 2}}
            const removeItemAction = {type: "REMOVE_ITEM", ingredientId: 1}
            store.dispatch(addItemAction)
            store.dispatch(removeItemAction)
            expect(store.getState().length).to.be.equal(0)
        })
    })

    describe('Update item', ()=> {
        it('Updates the quantity of an item from the cart', () => {
            const addItemAction = {type: "ADD_ITEM", cartItem: {ingredientId: 1, quantity: 2}}
            const updateItemAction = {type: "UPDATE_ITEM", cartItem: {ingredientId: 1, quantity: 7}}
            store.dispatch(addItemAction)
            expect(store.getState()[0].quantity).to.be.equal(2)
            store.dispatch(updateItemAction)
            expect(store.getState()[0].quantity).to.be.equal(7)
        })
    })
})
