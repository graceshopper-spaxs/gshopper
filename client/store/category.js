import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'

/**
 * INITIAL STATE
 */
const categories = []

/**
 * ACTION CREATORS
 */
const getCategories = categories => ({type: GET_CATEGORIES, categories})

/**
 * THUNK CREATORS
 */
export const fetchCategories = () =>
  dispatch =>
    axios.get('/api/categories')
    .then(categories => {
        dispatch(getCategories(categories.data))
      }
    )
    .catch(err => console.log(err))

export const postCategory = (category) =>
  dispatch =>
    axios.post('/api/categories', {category})
    .then(category => {
        dispatch(addCategory(category.data))
      }
    )
    .catch(err => console.log(err))



/**
 * REDUCER
 */
export default function (state = categories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories

    case ADD_CATEGORY:
      return [...state, category]

    default:
      return state
  }
}