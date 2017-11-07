import React from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import OrderHistory from './OrderHistory'

const DisplaySingleUser = (props) => {
    const { id, email, firstName, lastName} = props.user
    return (
        <div>
            <p>id: {id}</p>
            <p>{firstName} {lastName}</p>
            <p>email: {email}</p>
            <p>user image</p>
            <Link to={`/orderhistory`}>Order History</Link>            
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(DisplaySingleUser)
