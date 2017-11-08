import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unassignCategory } from '../store/category'

class CategoryUnassigner extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.handleSubmit(evt.target.category.value, this.props.ingredient.id);
  }

  clickHandler(evt) {
    evt.preventDefault();
    this.props.handleClick(evt.target.category.value, this.props.ingredient.id);
  }

  render() {
    const submitHandler = this.submitHandler;
    const { categories } = this.props;
    let filteredCategories = categories.filter(category => {
      if (this.props.ingredient.categories.find((ingredientCategory) => {
        return ingredientCategory.id === category.id
      })) {
        return true
      } else { return false }
    })

    return (

      <div>
        Manage category:
        <form onSubmit={evt => submitHandler(evt)}>
          <div>
            <label htmlFor="category">Category to remove:</label>
            <select name="category">
              {
                filteredCategories.map(category => {
                  return (
                    <option key={category.id} value={category.id}>{category.category}</option>
                  )
                })}
            </select>
            <button type="submit">Remove</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit(categoryId, inventoryId) {
    dispatch(unassignCategory(categoryId, inventoryId));
  }
});

const mapStateToProps = (state) => ({
  categories: state.category,
  ingredients: state.ingredient
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryUnassigner);
