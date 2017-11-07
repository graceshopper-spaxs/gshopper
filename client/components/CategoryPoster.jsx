import React, { Component } from "react";
import { connect } from "react-redux";
import {add} from "../reducers/campusReducer";
import CategoryForm from "./CategoryForm";

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
    this.setState({category:"");
  }

  render() {
    const handleChange = this.handleChange;
    const submitHandler = this.submitHandler;

    return (
      <div>
          Add new category:
          <CampusForm 
            handleChange={handleChange}
            submitHandler={submitHandler}
            state={this.state}
          />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(student, evt){
    dispatch(addCampus(student));
  }
});

export default connect(null,mapDispatchToProps)(CategoryPoster);