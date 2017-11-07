import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_INGREDIENTS = 'GET_INGREDIENTS'
const ADD_INGREDIENT = 'ADD_INGREDIENT'
const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT'

/**
 * INITIAL STATE
 */
const allIngredients = []

/**
 * ACTION CREATORS
 */
const getIngredients = ingredients => ({type: GET_INGREDIENTS, ingredients})

const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient
})

const updateIngredient = ingredient => ({
  type: UPDATE_INGREDIENT,
  ingredient
})

/**
 * THUNK CREATORS
 */
export const fetchIngredients = () =>
  dispatch =>
    axios.get('/api/ingredients')
    .then(ingredients => {
        return  dispatch(getIngredients(ingredients.data))
      }
    )
    .catch(err => console.log(err))

export const addNewIngredient = ingredient => dispatch => {
  axios.post('/api/ingredients', ingredient)
    .then(res => dispatch(addIngredient(res.data)))
    .catch(err => console.log(err))
}

export const updatingIngredient = (id, ingredient) => dispatch => {
  axios.put(`/api/ingredients/${id}`, ingredient)
    .then(res => dispatch(updateIngredient(res.data)))
    .catch(err => console.log(err))
}
/**
 * REDUCER
 */
export default function (state = allIngredients, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients

    case ADD_INGREDIENT:
      return [...state, action.ingredient]

    case UPDATE_INGREDIENT:
      return state.filter(ingredient => (
        ingredient.id === action.ingredient.id ? action.ingredient : ingredient
      ))

    default:
      return state
  }
}
