import React from 'react';
import { NavLink } from 'react-router-dom';
import DisplaySingleProduct from "./DisplaySingleProduct"
import AddButton from "./button"

//This is a component for a single item that will show up on a display of multiple products
export const displayProduct = (props) => {
	//I'm assuming each ingredient from our database has these properties
  //Have not yet implemeneted keys with id due to limit of dummy data
	const {id, image, name, price, servingSize, calories, inventory} = props.ingredient;
  return (
    <div className="displayProduct">
      <img className="displayProductImage" src={image} height="82" width="82"/>
      <NavLink to={`/ingredients/${id}`}>
      <p className="displayProductName">
      	{name}
      </p>
      </NavLink>
      <p className="displayProductPrice">
      	${price}
      </p>
      <p className="displayProductServing">
      	{servingSize} grams per serving.
      </p>
      <p className="displayProductCalories">
      	{calories} calories.
      </p>

      {
        inventory ?
        <AddButton buttonType={"ADD_ITEM"} buttonText={"Add"} ingredientId={id} quantity={1}/>
        : <h4>Out of Inventory</h4>
      }
    </div>
  )
}
