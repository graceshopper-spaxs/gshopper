import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import ProductPoster from './ProductPoster'
// import ViewAllOrders from './ViewAllOrders'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { firstName } = props.user
  return (
    <div>
      <div>
        <h3>Welcome, {firstName}!</h3>
      </div>
      {
        props.user.userType === 'admin' &&
        <div>
          <label>Admin Functionality:</label>
          <Link to="/product-post">Post An Ingredient</Link>
          <Link to="/view-all-orders">View All Orders</Link>
        </div>
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
