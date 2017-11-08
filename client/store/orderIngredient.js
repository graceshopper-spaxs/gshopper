import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDER_INGREDIENT_ASSOCIATIONS = 'GET_ORDER_INGREDIENT_ASSOCIATIONS'


/**
 * INITIAL STATE
 */
const associations = []

/**
 * ACTION CREATORS
 */
const getOrderIngredientAssociations = orders => ({
  type: GET_ORDER_INGREDIENT_ASSOCIATIONS,
  orders
})

/**
 * THUNK CREATORS
 */
export const fetchAllAssociations = (orderId) =>
  dispatch =>
    axios.get(`/api/orders/${orderId}`)
    .then(orders => {
        return  dispatch(getOrderIngredientAssociations(orders.data))
      }
    )
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = associations, action) {
  switch (action.type) {

    case GET_ORDER_INGREDIENT_ASSOCIATIONS:
      return action.orders

    default:
      return state
  }
}
