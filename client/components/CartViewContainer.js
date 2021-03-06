import React from 'react'
import { connect } from 'react-redux'
import CartView from './CartView'

const cartViewContainer = (props) => {

    return (
        <div>
            <h1>Your Cart</h1>
            <CartView productInformation={props.productInformation} cartItems={props.cartItems} onCart= {true} />
        </div>
    )
}

//container that shows all cart items currently on the state
const mapState = state => ({
    cartItems: state.cart,
    productInformation: state.ingredient
})

export default connect(mapState)(cartViewContainer)
