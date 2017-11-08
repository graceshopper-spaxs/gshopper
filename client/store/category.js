import axios from 'axios'
import {fetchIngredients} from './index';
/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

/**
 * INITIAL STATE
 */
const categories = []

/**
 * ACTION CREATORS
 */
const getCategories = categories => ({ type: GET_CATEGORIES, categories })
const addCategory = category => ({ type: ADD_CATEGORY, category })
const removeCategory = category => ({ type: REMOVE_CATEGORY, category })

/**
 * THUNK CREATORS
 */
export const fetchCategories = () =>
  dispatch =>
    axios.get('/api/categories')
      .then(categories => {
        dispatch(getCategories(categories.data))
      })
      .catch(err => console.log(err))

export const postCategory = (category) =>
  dispatch =>
    axios.post('/api/categories', category)
      .then(category => {
        dispatch(addCategory(category.data))
      })
      .catch(err => console.log(err))

export const deletesCategory = (categoryId) =>
  dispatch =>
    axios.delete('api/categories/' + categoryId)
      .then(category => {
        dispatch(removeCategory(categoryId))
      })
      .catch(err => console.log(err))

export const assignCategory = (categoryId, ingredientId) =>
  dispatch =>
    axios.put('/api/categories/assign', { categoryId, ingredientId })
      .then(result => {
        dispatch(fetchIngredients());
        return result
      })
      .catch(err => console.log(err))

export const unassignCategory = (categoryId, ingredientId) =>
  dispatch =>
    axios.put('/api/categories/unassign', { categoryId, ingredientId })
      .then(result => {
        dispatch(fetchIngredients())
        return result
      })
      .catch(err => console.log(err))
/**
 * REDUCER
 */
export default function (state = categories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories

    case ADD_CATEGORY:
      return [...state, action.category]

    case REMOVE_CATEGORY:
      console.log(state)
      return state.filter(category => category.id !== parseInt(action.category))

    default:
      return state
  }
}
