import React from 'react';
import {displayProduct as DisplayProduct} from './displayProduct';

//This is a component for a single item that will show up on a display of multiple products
export const displayAllProducts = (props) => {
	//I'm assuming each ingredient from our database has these properties
  //Have not yet implemeneted keys with id due to limit of dummy data
	const {ingredients} = props;
  return (
    <div className="displayAllProducts">
      {
        ingredients.map((ingredient, i)=><DisplayProduct key={i} ingredient={ingredient}/>
      }
    </div>
  )
}