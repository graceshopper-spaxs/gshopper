import React from 'react'
import { Link } from 'react-router-dom'
import SingleCartItem from './SingleCartItem'

const cartView = (props) => {
    if (!props.cartItems.length) return <div> Add Items! </div>
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

    let subTotal = 0
   
    //wait for both cart and product to load
    if(props.cartItems.length > 0 && props.productInformation.length > 0) {
     subTotal = props.cartItems.reduce((cartPrice, currentItem) => {
        return cartPrice + productInfo(currentItem).price * currentItem.quantity
    }, 0) }

    return (
        <div>
            <ul>{mappedCartItems}</ul>
            <p>{`Subtotal: $${subTotal}`}</p>
            {props.onCart && props.cartItems.length > 0 && <div>
                <button>
                    <Link to="/checkout">
                        Checkout!
                </Link>
                </button>
            </div>
            }
        </div>
    )
}

export default cartView
