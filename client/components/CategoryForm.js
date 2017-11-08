import React from 'react'

const CategoryForm = (props) => {
  return (
    <div>
      <form onSubmit={evt => props.submitHandler(evt)}>
        <div>
          <label htmlFor="category">Category name:</label>
          <input
            id="category"
            type="text"
            name="category"
            value={props.state.category}
            onChange={props.handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm
