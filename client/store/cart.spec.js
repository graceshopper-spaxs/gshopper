import { expect } from 'chai'
import cartReducer, { addItem, removeItem, updateItem } from './cart'
import configureMockStore from 'redux-mock-store'
import { createStore } from 'redux'

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
            const action = addItem(1, 2)
            store.dispatch(action)
            expect(store.getState()[0].quantity).to.be.equal(2)
        })

        it('updates quantity if item is already in cart', () => {
            const action = addItem(1, 2)
            store.dispatch(action)
            store.dispatch(action)
            expect(store.getState()[0].quantity).to.be.equal(4)
        })
    })

    describe('Remove item', () => {
        it('removes an item from the cart', () => {
            const addItemAction = addItem(1, 2)
            const removeItemAction = removeItem(1)
            store.dispatch(addItemAction)
            store.dispatch(removeItemAction)
            expect(store.getState().length).to.be.equal(0)
        })
    })

    describe('Update item', () => {
        it('Updates the quantity of an item from the cart', () => {
            const addItemAction = addItem(1, 2)
            const updateItemAction = updateItem(1, 7)
            store.dispatch(addItemAction)
            expect(store.getState()[0].quantity).to.be.equal(2)
            store.dispatch(updateItemAction)
            expect(store.getState()[0].quantity).to.be.equal(7)
        })
    })
})
