import React from 'react';
import {connect} from 'react-redux';
import {addItem, removeItem, updateItem, addToSessionCart, updateSessionCart, deleteSessionItem} from '../store'

const smartButton = (props) => {

	const {buttonType, buttonText, ingredientId, quantity} = props;

	return (
		<div className={buttonText}>
	    	<button
	    		onClick = {() => props.handleSubmit(buttonType, ingredientId, quantity)}
	    	>
	    		{buttonText}
	    	</button>
	    </div>
	)
}

const mapDispatch = (dispatch) => {
  return {
  	handleSubmit (buttonType, ingredientId, quantity) {
  	    switch (buttonType) {
			case "ADD_ITEM":
				dispatch(addToSessionCart(ingredientId, quantity));
				dispatch(addItem(ingredientId, quantity));
				break;

			case "REMOVE_ITEM":
				dispatch(deleteSessionItem(ingredientId));
				dispatch(removeItem(ingredientId));
				break;

			case "UPDATE_ITEM":
				dispatch(updateSessionCart(ingredientId, quantity));
				dispatch(updateItem(ingredientId, quantity));
				break;
    	}
  	}
  }
}

export default connect(null, mapDispatch)(smartButton);
