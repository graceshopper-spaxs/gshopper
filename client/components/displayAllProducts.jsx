import React from 'react';
import { displayProduct as DisplayProduct } from './displayProduct.jsx';

//This is a component to display all products passed down to it.
export const displayAllProducts = (props) => {
  const { ingredients } = props;
  const availableIngredients = ingredients.filter(ingredient => {
    return ingredient.inventory > 0;
  })
  const unavailableIngredients = ingredients.filter(ingredient => {
    return ingredient.inventory === 0 || ingredient.inventory === '0';
  })

  return (
    <div>
      <div className="displayAllProducts">
        {
          ingredients.map((ingredient, i) => <DisplayProduct key={i} ingredient={ingredient} />)
        }
      </div>
    </div>
  )
}
