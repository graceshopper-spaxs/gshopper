import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash'

import Button from './button'

class SingleCartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedQuantity: 1
        }
    }

    render() {
        const { itemOnCart, productInfo, activeOrder } = this.props
        if (!productInfo) return <li>Loading Item</li>

        //helper function
        function listOfNumbers(n) {
            const list = []
            for (let i = 1; i <= n; i++) {
                list.push(<option key={i}>{i}</option>)
            }
            return list
        }

        return (
            <li>
                <Link to={`/ingredients/${itemOnCart.item_id}`}>
                    {productInfo.name}
                </Link>

                ID: {itemOnCart.item_id} Quantity: {itemOnCart.quantity}

                {//check if its cart view or past order and disables button if its a past order
                    activeOrder && (<div>
                        <Button
                            buttonType={"REMOVE_ITEM"}
                            buttonText={"DELETE"}
                            item_id={itemOnCart.item_id} />
                        <Button
                            buttonType={"UPDATE_ITEM"}
                            buttonText={"UPDATE"}
                            item_id={itemOnCart.item_id}
                            quantity={this.state.selectedQuantity} />

                        <select
                            value={this.state.selectedQuantity}
                            onChange={(event) => { this.setState({ selectedQuantity: Number(event.target.value) }) }}>
                            {listOfNumbers(10)}
                        </select>

                    </div>)
                }
            </li>
        )
    }
}

export default SingleCartItem