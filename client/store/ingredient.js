import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_INGREDIENTS = 'GET_INGREDIENTS'

/**
 * INITIAL STATE
 */
const allIngredients = {}

/**
 * ACTION CREATORS
 */
const getIngredients= ingredients => ({type: GET_INGREDIENTS, ingredients})

/**
 * THUNK CREATORS
 */
export const fetchIngredients = () =>
  dispatch =>
    axios.get('/api/ingredients')
      .then(ingredients =>{
        // console.log("ingredients!!!!!", ingredients);
        return  dispatch(getIngredients(ingredients.data))
      }
    )
      .catch(err => console.log(err))



/**
 * REDUCER
 */
export default function (state =allIngredients, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients

    default:
      return state
  }
}
