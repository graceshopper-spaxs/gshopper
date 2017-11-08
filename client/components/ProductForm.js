import React from 'react'

/**
 * COMPONENT
 */
const IngredientForm = (props) => {
  return (
    <div>
      <form onSubmit={evt => props.submitHandler(evt)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ingredient Name"
            value={props.state.name}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="image">ImageUrl:</label>
          <input
            id="image"
            type="text"
            name="image"
            value={props.state.image}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="calories">Calories:</label>
          <input
            id="calories"
            type="text"
            name="calories"
            value={props.state.calories}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="caloriesFromFat">CaloriesFromFat:</label>
          <input
            id="caloriesFromFat"
            type="text"
            name="caloriesFromFat"
            value={props.state.caloriesFromFat}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="totalFat">TotalFat:</label>
          <input
            id="totalFat"
            type="text"
            name="totalFat"
            value={props.state.totalFat}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="sodium">Sodium:</label>
          <input
            id="sodium"
            type="text"
            name="sodium"
            value={props.state.sodium}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="totalCarbohydrates">TotalCarbohydrates:</label>
          <input
            id="totalCarbohydrates"
            type="text"
            name="totalCarbohydrates"
            value={props.state.totalCarbohydrates}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="sugars">Sugars:</label>
          <input
            id="sugars"
            type="text"
            name="sugars"
            value={props.state.sugars}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="protein">Protein:</label>
          <input
            id="protein"
            type="text"
            name="protein"
            value={props.state.protein}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            name="price"
            value={props.state.price}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="inventory">Inventory:</label>
          <input
            id="inventory"
            type="text"
            name="inventory"
            value={props.state.inventory}
            onChange={props.handleChange}
          />
          <br />
          <label htmlFor="servingSize">ServingSize:</label>
          <input
            id="servingSize"
            type="text"
            name="servingSize"
            value={props.state.servingSize}
            onChange={props.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
}


export default IngredientForm;
