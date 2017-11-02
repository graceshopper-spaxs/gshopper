import React from 'react';
// import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
// import AddButton from "./button"

const DisplaySingleUser = (props) => {
    const { id, email} = props.user
    return (
        <div>
            <p>id: {id}</p>
            <p>user name</p>
            <p>email: {email}</p>
            <p>user image</p>
            <p>order history</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(DisplaySingleUser)
