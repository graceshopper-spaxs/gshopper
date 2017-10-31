import React from 'react';
import {displayProduct as DisplayProduct} from './displayProduct.jsx';

//This is a component to display all products passed down to it.
export const displayAllProducts = (props) => {
	const {ingredients} = props;
  return (
    <div className="displayAllProducts">
      {
        ingredients.map((ingredient, i)=><DisplayProduct key={i} ingredient={ingredient}/>)
      }
    </div>
  )
}