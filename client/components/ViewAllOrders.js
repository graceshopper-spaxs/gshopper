import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllOrders } from '../store'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

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

        <Table selectable={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Order ID</TableHeaderColumn>
              <TableHeaderColumn>Checkout Date</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>User ID</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length && orders.map((order, i) => (
              <TableRow key={order.id}>
                <TableRowColumn>
                  <button>
                    <Link to={`/orders/${order.id}`}>
                      {order.id}
                    </Link>
                  </button>
                </TableRowColumn>
                <TableRowColumn>{orderDates[i]}</TableRowColumn>
                <TableRowColumn>{order.orderAmount}</TableRowColumn>
                <TableRowColumn>{order.orderPrice}</TableRowColumn>
                <TableRowColumn>{order.userId}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllOrders)
