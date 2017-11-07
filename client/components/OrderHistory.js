import React, { Component } from 'react'
import { connect } from 'react-redux';
import CartView from './CartView'
import {fetchOrders} from '../store'

class OrderHistory extends Component {

    componentDidMount(){
        this.props.getOrders()
    }

    render() {
        const {orders, productInformation} = this.props 
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
            const orderTime = order[0].createdAt.split('T')
            
            return <li key={index}>
                <h2>{`Order #${index + 1}`}</h2>
                <h3>{`Order Date: ${orderTime[0]}`}</h3>
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
}

const mapState = state => ({
    productInformation: state.ingredient,
    orders : state.orders
})

const mapDispatch = (dispatch, ownProps) => {
    return {
        getOrders() {
            const userId = ownProps.user.id
            const thunk = fetchOrders(userId)
            dispatch(fetchOrders(userId))
        }
    }
}


export default connect(mapState, mapDispatch)(OrderHistory)