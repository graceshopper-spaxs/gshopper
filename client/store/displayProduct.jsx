import React from 'react';

//This is a component for a display of many indivual products on the display many products page
export const displayProduct = (props) => {
	//I'm assuming each ingredient from our database has these properties
	const {image, name, price, serving, calories} = props

  return (
    <div className="displayProduct">
      <img className="displayProductImage" src={image} />
      <p className="displayProductName">
      	{name}
      </p>
      <p className="displayProductPrice">
      	${price}
      </p>
      <p className="displayProductServing">
      	{serving} per serving.
      </p>
      <p className="displayProductCalories">
      	{calories} calories.
      </p>
    </div>
  )
}