import React, { Component } from "react";
import { connect } from "react-redux";
import {postCategory} from "../store/category";
import CategoryForm from "./CategoryForm.jsx";

class CategoryPoster extends Component {
  constructor(props) {
    super(props);
    this.state ={
        category: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler =this.submitHandler.bind(this);
  }

  handleChange(event){
    const value = event.target.value
    const inputElement = event.target.name
    this.setState({[inputElement]: value})
  }

  submitHandler(evt){
    evt.preventDefault();
    this.props.handleSubmit(this.state, evt);
    this.setState({category:""});
  }

  render() {
    const handleChange = this.handleChange;
    const submitHandler = this.submitHandler;

    return (
      <div>
          Add new category:
          <CategoryForm 
            handleChange={handleChange}
            submitHandler={submitHandler}
            state={this.state}
          />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(category, evt){
    dispatch(postCategory(category));
  }
});

export default connect(null,mapDispatchToProps)(CategoryPoster);