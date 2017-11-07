import React from 'react';

const FilterSearchInput = (props) => {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;

  return (
    <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter Ingredient name"
      />
    </form>
  )
}

export default FilterSearchInput;
