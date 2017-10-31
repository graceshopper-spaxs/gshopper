
import {expect} from 'chai'
import configureMockStore from 'redux-mock-store'
import {addItem} from './cart'

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

      it('adds an item to the cart', () => {
          const item = {id: 1, quantity: 1, name: Apple}
          const action = addItem(item)
          store.dispatch(action)

          expect(store.getState().length).to.be.equal.equal(1)
      })
})