import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, updateItem, addToSessionCart, updateSessionCart, deleteSessionItem } from '../store';

const smartButton = (props) => {

	const { buttonType, buttonText, ingredientId, quantity, isLoggedIn } = props;

	return (
		<div className={buttonText}>
			<button onClick={() => props.handleSubmit(buttonType, ingredientId, quantity, isLoggedIn)}>
				{buttonText}
			</button>
		</div>
	)
}

const mapDispatch = (dispatch) => {
	return {
		handleSubmit(buttonType, ingredientId, quantity, isLoggedIn) {
			switch (buttonType) {
				case 'ADD_ITEM':
					dispatch(addToSessionCart(ingredientId, quantity, isLoggedIn));
					dispatch(addItem(ingredientId, quantity));
					break;

				case 'REMOVE_ITEM':
					dispatch(deleteSessionItem(ingredientId, isLoggedIn));
					dispatch(removeItem(ingredientId));
					break;

				case 'UPDATE_ITEM':
					dispatch(updateSessionCart(ingredientId, quantity, isLoggedIn));
					dispatch(updateItem(ingredientId, quantity));
					break;

				default:
					break;
			}
		}
	}
}

const mapToState = (state) => {
	return {
		isLoggedIn: !!state.user.id
	}
}

export default connect(mapToState, mapDispatch)(smartButton);
