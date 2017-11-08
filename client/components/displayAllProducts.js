import React from 'react'
import { NavLink } from 'react-router-dom'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import AddButton from './button'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

//This is a component to display all products passed down to it.
export const displayAllProducts = (props) => {
  const { ingredients } = props

  // const availableIngredients = ingredients.filter(ingredient => {
  //   return ingredient.inventory > 0;
  // })
  // const unavailableIngredients = ingredients.filter(ingredient => {
  //   return ingredient.inventory === 0 || ingredient.inventory === '0';
  // })

  return (
    <div>
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}>
          {ingredients.map((ingredient, i) => (
            <GridTile
              key={i}
              title={ingredient.name}
              subtitle={<span>
                calories: <b>{ingredient.calories}</b> <br />
                price: $<b>{ingredient.price}</b> <br />
                <b>{ingredient.servingSize}</b> grams per serving <br />
              </span>}
              actionIcon={<IconButton>
                <AddButton buttonType={'ADD_ITEM'} buttonText={'Add'} ingredientId={ingredient.id} quantity={1} />
              </IconButton>}>
              <NavLink to={`/ingredients/${ingredient.id}`}>
                <img src={ingredient.image} />
              </NavLink>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}
