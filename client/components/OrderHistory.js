import React from 'react'
import { connect } from 'react-redux';
import CartView from './CartView'

const OrderHistory = ({ orders, productInformation }) => {
    if (!orders.length) return <div> loading </div>

    //returns an array with all of the ingredient information for an order but not the actual ordered ingredient
    const OrdersWithIngredientInfo = orders.map(order => {
        return order.ingredients
    })

    //returns an array with all of the orders with their actual ordered items
    const OrdersWithOrderItems = OrdersWithIngredientInfo.map(order => {
        return order.map(ingredient => ingredient.orderIngredient)
    })

    const MappedOrderHistory = OrdersWithOrderItems.map((order, index) => {
        return <li key={index}>
            <h2>{`Order #${index + 1}`}</h2>
            <CartView productInformation={productInformation} cartItems={order} onCart={false} />
        </li>
    })

    console.log(OrdersWithOrderItems)

    return (
        <div>
            <h1>Order History</h1>
            <ul>{MappedOrderHistory}</ul>
        </div>
    )
}

const mapState = state => ({
    productInformation: state.ingredient
})


export default connect(mapState)(OrderHistory)