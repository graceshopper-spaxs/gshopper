import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
/**
 * INITIAL STATE
 */
const allOrders = []

/**
 * ACTION CREATORS
 */
const getOrders = orders => ({
  type: GET_ALL_ORDERS,
  orders
})

/**
 * THUNK CREATORS
 */
export const fetchAllOrders = () =>
  dispatch =>
    axios.get('/api/orders')
      .then(orders => {
        return dispatch(getOrders(orders.data))
      }
      )
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = allOrders, action) {
  switch (action.type) {

    case GET_ALL_ORDERS:
      return action.orders

    default:
      return state
  }
}
