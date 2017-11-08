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
     {ingredientId: 1, quantity: 1},
     {ingredientId: 2, quantity: 4},
     {ingredientId: 3, quantity: 6},
     {ingredientId: 4, quantity: 8}
 ]

 const productInformation = [
     {id: 1, name: 'food', price: 5},
     {id: 2, name: 'food', price: 5},
     {id: 3, name: 'food', price: 5},
     {id: 4, name: 'food', price: 5}
 ]

  beforeEach(() => {
    cartView = shallow(<CartView cartItems={cartItems} productInformation={productInformation} onCart={false} />)
  })

  it('has a subtotal equal to the total quantity times price', () => {
    expect(cartView.find('p').text()).to.be.equal('Subtotal: $95')
  })
  it('has a length equal to the items passed in', () => {
    expect(cartView.find('ul').children().length).to.be.equal(4)
  })

  it('hides the link button if it is an old cart view', () => {
    expect(cartView.find('button').length).to.be.equal(0)
  })
})
