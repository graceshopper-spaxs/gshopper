import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CartView from './CartView'

const cartViewContainer = (props) => {

    return(
        <CartView productInformation={props.productInformation} cartItems={props.cartItems}/>
    )
}

//container that shows all cart items currently on the state
const mapState = state => ({
    cartItems: state.cart,
    productInformation: state.ingredient
})

export default connect(mapState)(cartViewContainer)