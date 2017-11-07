import React, { Component } from 'react';
import FilterSearchInput from './FilterSearchInput';
import { displayAllProducts as DisplayAllProducts } from './displayAllProducts.jsx';

export default class FilterableIngredients extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {

    const inputValue = this.state.inputValue;
    const filteredIngredients = this.props.ingredients.filter(ingredient =>
      ingredient.name.match(inputValue));

    return (
      <div>
        <FilterSearchInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={inputValue}
        />
        <DisplayAllProducts ingredients={filteredIngredients} />
      </div>
    );
  }
}
