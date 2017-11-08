import React, { Component } from 'react'
import { connect } from 'react-redux'
import { assignCategory } from '../store/category'

class CategoryAssigner extends Component {
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
        return false
      } else { return true }
    })
    return (

      <div>
        Assign category:
        <form onSubmit={evt => submitHandler(evt)}>
          <div>
            <label htmlFor="category">Category to assign:</label>
            <select name="category">
              {
                filteredCategories.map(category => {
                  return (
                    <option key={category.id} value={category.id}>{category.category}</option>
                  )
                })}
            </select>
            <button type="submit">Assign</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit(categoryId, inventoryId) {
    dispatch(assignCategory(categoryId, inventoryId));
  }
});

const mapStateToProps = (state) => ({
  categories: state.category,
  ingredients: state.ingredient
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAssigner);
