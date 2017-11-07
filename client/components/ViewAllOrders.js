import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllOrders } from '../store'

class ViewAllOrders extends Component {
  componentDidMount() {
    this.props.fetchAllOrders()
  }

  render() {
    const orders = this.props.orders

    const orderDates = orders.map(order => {
      const date = order.orderTime
      return date.slice(0, 10)
    })

    return (
      <div>
        VIEW ALL ORDERS
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Checkout Date</th>
              <th>Amount</th>
              <th>Price</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {orders.length && orders.map((order, i) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/orders/${order.id}`}>
                    {order.id}
                  </Link>
                </td>
                <td>{orderDates[i]}</td>
                <td>{order.orderAmount}</td>
                <td>{order.orderPrice}</td>
                <td>{order.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllOrders() {
    dispatch(fetchAllOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllOrders);
