import React from 'react'
import { connect } from 'react-redux'
import {checkoutCart} from '../store'

const Checkout = (props) => {
        return (
            <div>
                <form onSubmit={event => props.handleSubmit(event, props.user, props.cart, props.ingredients)}>
                    <label>Address Line 1: </label>
                    <input type="text" name="address1" placeholder="street address, P.O. box, etc" />
                    <label>Address Line 2: </label>
                    <input type="text" name="address2" placeholder="apartment, suite, building, floor, etc" />
                    <label>City: </label>
                    <input type="text" name="city" />
                    <label>State/Province/Region: </label>
                    <input type="text" name="state" />
                    <label>zip: </label>
                    <input type="text" name="zip" />
                    <button type="submit">Purchase</button>
                </form>
            </div>
        )
}

const mapStateToProps = (state) => ({
    user: state.user,
    cart: state.cart,
    ingredients: state.ingredient
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit(event, user, cart, ingredients) {
        event.preventDefault()

        const address1 = event.target.address1.value
        const address2 = event.target.address2.value
        const city = event.target.city.value
        const state = event.target.state.value
        const zip = event.target.zip.value
        const fullAddress = [address1, address2, city, state, zip].join(' ')

        //helper function to match items on cart to their corresponding product information
        const itemInformation = (itemOnCart) => (ingredients.find(ingredient => +ingredient.id === +itemOnCart.ingredientId))
        
        
        const orderAmount = cart.reduce((prevQuant, currentItem)=>(prevQuant + currentItem.quantity),0) 
        const orderPrice = cart.reduce((cartPrice, currentItem) => {
            return cartPrice + itemInformation(currentItem).price * currentItem.quantity
        }, 0)

        console.log(orderPrice)
        const order = {
            userId: user.id,
            address: fullAddress,
            cart: cart,
            orderAmount: orderAmount,    // FIX
            orderPrice: orderPrice // FIX
        }

        dispatch(checkoutCart(order, ownProps.history))
    }
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
