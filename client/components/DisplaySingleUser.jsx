import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import AddButton from "./button"
import CategoryPoster from './CategoryPoster.jsx'
import DeleteCategory from './DeleteCategory.jsx'
import ProductPoster from './ProductPoster'

const DisplaySingleUser = (props) => {
    const { id, email, firstName, lastName, userType } = props.user

    return (
        <div>
            <p>id: {id}</p>
            <p>{firstName} {lastName}</p>
            <p>email: {email}</p>
            <p>user image</p>
            <p>order history</p>
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
