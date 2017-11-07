import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductPoster from './ProductPoster'

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
            <ProductPoster />
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
