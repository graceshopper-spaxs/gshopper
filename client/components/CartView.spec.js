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
     {item_id: 1, quantity: 1},
     {item_id: 2, quantity: 4},
     {item_id: 3, quantity: 6},
     {item_id: 4, quantity: 8}
 ]

 const productInformation = [
     {id: 1, name: "food"},
     {id: 2, name: "food"},
     {id: 3, name: "food"},
     {id: 4, name: "food"}
 ]

  beforeEach(() => {
    cartView = shallow(<CartView cartItems={cartItems} productInformation={productInformation} />)
  })

  it('renders the title Your Cart in an h1', () => {
    expect(cartView.find('h1').text()).to.be.equal('Your Cart')
  })

  it('has a length equal to the items passed in', () => {
    expect(cartView.find('ul').children().length).to.be.equal(4)
  })
})
