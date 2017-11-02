import React from 'react';
import {connect} from 'react-redux';
import {addItem, removeItem, updateItem, addToSessionCart, updateSessionCart, deleteSessionItem} from '../store'

const smartButton = (props) => {

	const {buttonType, buttonText, item_id, quantity} = props;

	return (
		<div className={buttonText}>
	    	<button
	    		onClick = {() => props.handleSubmit(buttonType, item_id, quantity)} 
	    	>
	    		{buttonText}
	    	</button>
	    </div>
	)
}

const mapDispatch = (dispatch) => {
  return {
  	handleSubmit (buttonType, item_id, quantity) {
  	    switch (buttonType) {
			case "ADD_ITEM":
				dispatch(addToSessionCart(item_id, quantity));
				dispatch(addItem(item_id, quantity));
				break;

			case "REMOVE_ITEM":
				dispatch(deleteSessionItem(item_id));
				dispatch(removeItem(item_id));
				break;

			case "UPDATE_ITEM":
				dispatch(updateSessionCart(item_id, quantity));
				dispatch(updateItem(item_id, quantity));
				break;          
    	}
  	}
  }
}

export default connect(null, mapDispatch)(smartButton);