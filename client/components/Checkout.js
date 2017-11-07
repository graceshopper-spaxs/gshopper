import React from 'react'
import { connect } from 'react-redux'
import {checkoutCart} from '../store'

const Checkout = (props) => {
        return (
            <div>
                <form onSubmit={event => props.handleSubmit(event, props.user, props.cart)}>
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
    cart: state.cart
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit(event, user, cart) {
        event.preventDefault()

        const address1 = event.target.address1.value
        const address2 = event.target.address2.value
        const city = event.target.city.value
        const state = event.target.state.value
        const zip = event.target.zip.value

        const fullAddress = [address1, address2, city, state, zip].join(' ')

        const order = {
            userId: user.id,
            address: fullAddress,
            cart: cart,
            orderAmount: 500,    // FIX
            orderPrice: 33443434 // FIX
        }

        dispatch(checkoutCart(order, ownProps.history))
    }
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
