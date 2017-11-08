import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CartView from './CartView'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CartView', () => {
  let cartView
 const cartItems = [
     {itemId: 1, quantity: 1},
     {itemId: 2, quantity: 4},
     {itemId: 3, quantity: 6},
     {itemId: 4, quantity: 8}
 ]

 const productInformation = [
     {id: 1, name: 'food', price: 5},
     {id: 2, name: 'food', price: 5},
     {id: 3, name: 'food', price: 5},
     {id: 4, name: 'food', price: 5}
 ]

  beforeEach(() => {
    cartView = shallow(<CartView cartItems={cartItems} productInformation={productInformation} onCart={true} />)
  })

  // it('renders the title Your Cart in an h1', () => {
  //   expect(cartView.find('h1').text()).to.be.equal('Your Cart')
  // })

  // it('has a length equal to the items passed in', () => {
  //   expect(cartView.find('ul').children().length).to.be.equal(4)
  // })
})
