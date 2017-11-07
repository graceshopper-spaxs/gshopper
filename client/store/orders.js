import axios from 'axios'

//Action Types
const GET_ORDERS = "GET_ORDERS"

//INITIAL STATE
const initialOrders = []

//Action Creators

const getOrders = orders => ({ type: GET_ORDERS, orders })

//Thunk Creators

export const fetchOrders = (id) =>
    dispatch =>
        axios.get(`/api/orders/${id}`)
            .then(orders => {
                return dispatch(getOrders(orders.data))
            })
            .catch(err => console.log(err))

export default function (orders = initialOrders, action) {
    switch (action.type) {
        case GET_ORDERS:
            return action.orders
        default:
            return orders
    }
}

