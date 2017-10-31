import { expect } from 'chai'
import { addItem } from './cart'
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
    })
})
