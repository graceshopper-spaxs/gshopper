import React from 'react'
import { Link } from 'react-router-dom';

import Button from './button'

const SingleCartItem = (props) => {
    const { itemOnCart, productInfo, activeOrder } = props
    if (!productInfo) return <li>Loading Item</li>

    return (
        <li>
            <Link to={`/ingredients/${itemOnCart.item_id}`}>
                {productInfo.name}
            </Link>
            
            ID: {itemOnCart.item_id} Quantity: {itemOnCart.quantity}

            {//check if its cart view or past order and disables button if its a past order
                activeOrder && (<div>
                    <Button buttonType={"REMOVE_ITEM"} buttonText={"DELETE"} item_id={itemOnCart.item_id} />
                    <Button buttonType={"UPDATE_ITEM"} buttonText={"UPDATE"} item_id={itemOnCart.item_id} quantity={1} />
                </div>)
            }
        </li>
    )
}

export default SingleCartItem