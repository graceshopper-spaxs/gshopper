import React from 'react';
import {connect} from 'react-redux';
import {addItem, removeItem, updateItem} from '../store'

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
				dispatch(addItem(item_id, quantity));

	        case "REMOVE_ITEM":
	        	dispatch(removeItem(item_id));

	        case "UPDATE_ITEM":
	        	dispatch(updateItem(item_id, quantity));           
    	}
  	}
  }
}

export default connect(null, mapDispatch)(smartButton);