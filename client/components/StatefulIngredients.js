import React, { Component } from 'react';
import {connect} from 'react-redux';
import FilterableIngredients from './FilterableIngredients';

const StatefulIngredients = ({ingredients}) => {

  return (
    <FilterableIngredients ingredients={ingredients} />
  );

}

const mapState = state => {
  return {
    ingredients: state.ingredient
  }
}

export default connect(mapState)(StatefulIngredients);
