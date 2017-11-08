import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CategoryPoster from './CategoryPoster';
import DeleteCategory from './DeleteCategory';
import ProductPoster from './ProductPoster';

const DisplaySingleUser = (props) => {
    const { id, email, firstName, lastName, userType } = props.user

    return (
        <div>
            <p>id: {id}</p>
            <p>{firstName} {lastName}</p>
            <p>email: {email}</p>
            <p>user image</p>
            <p>order history</p>
            <Link to={`/orderhistory`}>Order History</Link>
            {
                userType === 'admin' &&
                <div>
                    <CategoryPoster />
                    <DeleteCategory />
                    <ProductPoster />
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    categories: state.category,
    ingredients: state.ingredient
});

export default connect(mapStateToProps)(DisplaySingleUser)
