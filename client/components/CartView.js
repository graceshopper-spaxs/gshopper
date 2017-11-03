import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Button from './button'
import SingleCartItem from './SingleCartItem'

const cartView = (props) => {

    const productInfo = (itemOnCart) => (props.productInformation.find(product => +product.id === +itemOnCart.item_id))
    const mappedCartItems = props.cartItems.map((itemOnCart) => {
        return (
            <SingleCartItem itemOnCart={itemOnCart} productInfo = {productInfo(itemOnCart)} key={itemOnCart.item_id} activeOrder={true}/>
        )
    })

    return (
        <ul>{mappedCartItems}</ul>
    )
}

const mapState = state => ({
    cartItems: state.cart,
    productInformation: state.ingredient
})

export default connect(mapState)(cartView)