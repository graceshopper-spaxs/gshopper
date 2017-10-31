import { expect } from 'chai'
import { addItem, removeItem } from './cart'
import configureMockStore from 'redux-mock-store'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import cartReducer from './cart'


const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('Cart Reducer', () => {
    let store
    const initialState = []

    beforeEach(() => {
        store = mockStore(initialState)
    })

    afterEach(() => {
        store.clearActions()
    })

    describe('Sends Add Item action to Store', () => {
        it('dispatches the ADD ITEM action', () => {
            const item = { id: 1, quantity: 1, name: 'Apple' }
            const action = addItem(item)
            store.dispatch(action)

            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('ADD_ITEM')
        })
    })

    describe('Add item', () => {
        const store = createStore(cartReducer)
        it('adds an item to the cart', () => {
            const item = { id: 1, quantity: 1, name: 'Banana' }
            const action = addItem(item)
            store.dispatch(action)
            expect(store.getState().length).to.be.equal(1)
        })

        it('updates quantity if item is already in cart', () => {
            const item = {id:1, quantity: 1, name: 'Banana'}
            const action = addItem(item)
            store.dispatch(action)
            expect(store.getState()[0].quantity).to.be.equal(2)
        })
    })

    describe('Remove item', ()=> {
        const store = createStore(cartReducer)
        it('removes an item from the cart', () => {
            const item = {id:1, quantity:1, name: 'Banana'}
            const addItemAction = addItem(item)
            const removeItemAction = removeItem(item.id)
            
            store.dispatch(addItemAction)
            store.dispatch(removeItemAction)
            expect(store.getState().length).to.be.equal(0)
        })
    })
})
