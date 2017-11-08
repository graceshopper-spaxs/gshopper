import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletesCategory } from '../store/category'

class CategoryDeleter extends Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(evt){
    evt.preventDefault();
    this.props.handleSubmit(evt.target.categoryDelete.value);
  }

  render() {
    const submitHandler = this.submitHandler;
    const {categories} = this.props;
    return (
      <div>
          Delete category:
        <form onSubmit={evt => submitHandler(evt)}>
          <div>
            <label htmlFor="categoryDelete">Category name:</label>
              <select name="categoryDelete">
                {categories.map(category => {
                  return (
                    <option key={category.id} value={category.id}>{category.category}</option>
                    )
                })}
              </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit(category){
    dispatch(deletesCategory(category));
  }
});

const mapStateToProps = (state) => ({
  categories: state.category
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDeleter)
