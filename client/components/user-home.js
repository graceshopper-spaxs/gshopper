import React from 'react'
import { connect } from 'react-redux'

export const UserHome = (props) => {
  const { firstName } = props.user
  return (
    <div>
      <h3>Welcome {firstName}!</h3>
    </div>
  )
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)
