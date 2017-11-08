import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout, emptyCart } from '../store'
import CartForNav from './CartForNav'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */

const style = {
  margin: 12,
};

const Main = (props) => {
  const { children, handleClick, isLoggedIn, userType } = props
  return (
    <div>
      <h1>CALORIE CART</h1>
      <nav>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">
                <RaisedButton label="Home" primary={true} style={style} />
              </Link>
              <Link to="/ingredients">
                <RaisedButton label="Ingredients" primary={true} style={style} />
              </Link>
              <Link to="/user">
                <RaisedButton label="User" primary={true} style={style} />
              </Link>
              <Link to="/orderhistory">
                <RaisedButton label="Order History" primary={true} style={style} />
              </Link>
              <a href="#" onClick={handleClick}>
                <RaisedButton label="Logout" primary={true} style={style} />
              </a>
              {
                userType === 'admin' ?
                  <div>
                    <Link to="/product-post">
                      <RaisedButton label="Post An Ingredient" secondary={true} style={style} />
                    </Link>
                    <Link to="/view-all-orders">
                      <RaisedButton label="View All Orders" secondary={true} style={style} />
                    </Link>
                  </div>
                  : <div />
              }
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/home">
                <RaisedButton label="Home" primary={true} style={style} />
              </Link>
              <Link to="/ingredients">
                <RaisedButton label="Ingredients" primary={true} style={style} />
              </Link>
              <Link to="/login">
                <RaisedButton label="Login" primary={true} style={style} />
              </Link>
              <Link to="/signup">
                <RaisedButton label="Signup" primary={true} style={style} />
              </Link>
            </div>
        }
        <CartForNav />
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    userType: state.user.userType
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(emptyCart())
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
