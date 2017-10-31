import React from 'react';

//This is a component for a single item that will show up on a display of multiple products
export const displayProduct = (props) => {
	//I'm assuming each ingredient from our database has these properties
  //Have not yet implemeneted keys with id due to limit of dummy data
	const {image, name, price, servingSize, calories} = props.ingredient;
  return (
    <div className="displayProduct">
      <img className="displayProductImage" src={image} height="82" width="82"/>
      <p className="displayProductName">
      	{name}
      </p>
      <p className="displayProductPrice">
      	${price}
      </p>
      <p className="displayProductServing">
      	{servingSize} grams per serving.
      </p>
      <p className="displayProductCalories">
      	{calories} calories.
      </p>
    </div>
  )
}