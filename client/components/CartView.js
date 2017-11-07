import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import SingleCartItem from './SingleCartItem'

const cartView = (props) => {
    //helper function to match items on cart to their corresponding product information
    function productInfo(itemOnCart) {
        return props.productInformation.find(product => +product.id === +itemOnCart.ingredientId)
    }

    //maps all items passed down as props
    const mappedCartItems = props.cartItems.map((itemOnCart) => {
        return (
            <SingleCartItem itemOnCart={itemOnCart} productInfo={productInfo(itemOnCart)} key={itemOnCart.ingredientId} activeOrder={props.onCart} />
        )
    })

    return (
        <div>
            <ul>{mappedCartItems}</ul>
            {props.onCart && props.cartItems.length > 0 && <button>
                <Link to='/checkout'>
                    Checkout!
                </Link>
            </button>}
        </div>
    )
}

export default cartView