import React from "react";

const CategoryForm = (props) => {
  return (
      <div>
        <form onSubmit={evt => props.submitHandler(evt)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="category"
              type="text"
              name="category"
              value={props.state.name}
              onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  	)

}

export default CategoryForm;