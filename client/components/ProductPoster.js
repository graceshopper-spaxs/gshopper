import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import { addNewIngredient } from '../store'

class ProductPoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      caloriesFromFat: 0,
      totalFat: 0,
      sodium: 0,
      totalCarbohydrates: 0,
      sugars: 0,
      protein: 0,
      price: 0,
      inventory: 0,
      servingSize: 0,
      image: '',
    };
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
    this.setState({
      name: '',
      calories: 0,
      caloriesFromFat: 0,
      totalFat: 0,
      sodium: 0,
      totalCarbohydrates: 0,
      sugars: 0,
      protein: 0,
      price: 0,
      inventory: 0,
      servingSize: 0,
      image: '',
    });
  }

  render() {

    const handleChange = this.handleChange;
    const submitHandler = this.submitHandler;

    return (
      <div>
        Add new ingredient:
          <ProductForm
          handleChange={handleChange}
          submitHandler={submitHandler}
          state={this.state} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit(ingredient) {
    dispatch(addNewIngredient(ingredient));
  }
});

export default connect(null, mapDispatchToProps)(ProductPoster);
