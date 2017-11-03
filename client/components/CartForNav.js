import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


const CartComponent = (props) => {

    const itemInformation = (itemOnCart) => (props.ingredients.find(ingredient => +ingredient.id === +itemOnCart.item_id))
    const totalItemsonCart = props.itemsOnCart.reduce((cartQuantity, currentItem) => {
        return cartQuantity + currentItem.quantity
    }, 0)

    if (props.ingredients.length && props.itemsOnCart.length) {
        const totalCaloriesOnCart = props.itemsOnCart.reduce((cartCalories, currentItem) => {
            return cartCalories + itemInformation(currentItem).calories * currentItem.quantity
        }, 0)

        return (
            <div>
                <Link to='/cartview'>CART</Link>: {totalItemsonCart} items Calories: {totalCaloriesOnCart}
            </div>
        )
    }
    else return <div></div>
}

const mapState = (state) => ({
    itemsOnCart: state.cart,
    ingredients: state.ingredient
})

export default withRouter(connect(mapState)(CartComponent))