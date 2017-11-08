import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProductForm from './ProductForm';
import { updatingIngredient } from '../store'

class ProductEditor extends Component {
  constructor(props) {
    super(props);
    this.state = props.ingredient
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(event) {
    const value = event.target.value
    const inputElement = event.target.name
    this.setState({ [inputElement]: value })
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.props.handleSubmit(this.state)
  }

  render() {

    const handleChange = this.handleChange;
    const submitHandler = this.submitHandler;

    return (
      <div>
        Edit ingredient details
          <ProductForm
          handleChange={handleChange}
          submitHandler={submitHandler}
          state={this.state}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(state) {
    dispatch(updatingIngredient(ownProps.ingredient.id, state));
  }
});

export default connect(null, mapDispatchToProps)(ProductEditor);
