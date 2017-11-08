import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome } from './components'
import DisplaySingleUser from './components/DisplaySingleUser'
import DisplaySingleProduct from './components/DisplaySingleProduct'
import { me, fetchIngredients, fetchSessionCart, fetchCategories } from './store'
import Checkout from './components/Checkout'
import CartViewContainer from './components/CartViewContainer'
import OrderHistory from './components/OrderHistory'
import ProductPoster from './components/ProductPoster'
import ViewAllOrders from './components/ViewAllOrders'
import OneOrder from './components/OneOrder'
import StatefulIngredients from './components/StatefulIngredients'


class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn, user } = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>

            {/* Routes placed here are available to all visitors */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/ingredients/:id" component={DisplaySingleProduct} />
            <Route exact path="/cartview" component={CartViewContainer} />
            <Route exact path="/ingredients" component={StatefulIngredients} />

            {
              isLoggedIn &&
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/home" component={UserHome} />
                <Route path="/user" component={DisplaySingleUser} />
                <Route exact path="/orderhistory" render={() => (<OrderHistory user={user} />)} />
                <Route path="/orders/:orderId" component={OneOrder} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/product-post" component={ProductPoster} />
                <Route path="/view-all-orders" component={ViewAllOrders} />
              </Switch>
            }

            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    allIngredients: state.ingredient,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(fetchIngredients());
      dispatch(fetchSessionCart());
      dispatch(fetchCategories());
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
