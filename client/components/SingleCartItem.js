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

        // console.log(itemOnCart)
        // console.log(productInfo)
        return (
            <li>
                <Link to={`/ingredients/${itemOnCart.ingredientId}`}>
                    {productInfo.name + "    "}
                </Link>

                Quantity: {itemOnCart.quantity}

                {//check if its cart view or past order and disables button if its a past order
                    activeOrder && (<div>
                        <Button
                            buttonType={"REMOVE_ITEM"}
                            buttonText={"DELETE"}
                            ingredientId={itemOnCart.ingredientId} />
                        <Button
                            buttonType={"UPDATE_ITEM"}
                            buttonText={"UPDATE"}
                            ingredientId={itemOnCart.ingredientId}
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