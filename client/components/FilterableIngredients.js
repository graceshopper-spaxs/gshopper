import React from 'react'
import { connect } from 'react-redux'
import FilterSearchInput from './FilterSearchInput'
import { displayAllProducts as DisplayAllProducts } from './displayAllProducts'

class FilterableIngredients extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterSearchInput: '',
      category: 'all'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    const value = evt.target.value
    const inputElement = evt.target.name
    this.setState({ [inputElement]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const filterByCategory = this.props.ingredients.filter(ingredient => {
      if (this.state.category === 'all' || ingredient.categories.find(ingredientCategory => {
        return ingredientCategory.id === parseInt(this.state.category)
      })) {
        return true
      } else { return false }
    })
    const filteredIngredients = filterByCategory.filter(ingredient =>
      ingredient.name.match(this.state.filterSearchInput));
    const categories = this.props.categories;

    return (
      <div>
        <label htmlFor="category">Search by category:</label>
        <select
          value={this.state.category}
          onChange={this.handleChange}
          name="category"
        >
          <option value="all">All</option>
          {
            categories.map(category => {
              return (
                <option key={category.id} value={category.id}>{category.category}</option>
              )
            })}
        </select>
        <FilterSearchInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.filterSearchInput}
        />
        <DisplayAllProducts ingredients={filteredIngredients} />
      </div>
    );
  }
}

const mapState = state => ({
  categories: state.category,
  ingredients: state.ingredient
})

export default connect(mapState)(FilterableIngredients);
