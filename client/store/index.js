import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import ingredient from './ingredient'
import cart from './cart'
import category from './category'
import review from './review'
import orders from './orders'
import userOrders from './userOrders'
import associations from './orderIngredient'

const reducer = combineReducers({user, ingredient, cart, review, orders, associations, category, userOrders})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './ingredient';
export * from './cart';
export * from './category';
export * from './review';
export * from './orders';
export * from './orderIngredient';
export * from './userOrders'
