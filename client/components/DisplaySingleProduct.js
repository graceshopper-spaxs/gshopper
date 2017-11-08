import React from 'react'
import { connect } from 'react-redux'
import AddButton from './button'
import ProductEditor from './ProductEditor'
import Review from './Review'
import CategoryAssigner from './CategoryAssigner'
import CategoryUnassigner from './CategoryUnassigner'

class DisplaySingleProduct extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            quantitySelected: 1
        }
    }
    render() {

        if (this.props.allIngredients.length > 0) {
            const ingredientId = Number(this.props.match.params.id);
            const theProduct = this.props.allIngredients.filter(ingredient => ingredient.id === ingredientId)[0]
            return (
                <div>
                    <img className="displayProductImage" src={theProduct.image} height="82" width="82" />

                    <p className="displayProductName">
                        {theProduct.name}
                    </p>

                    <p className="displayProductPrice">
                        ${theProduct.price}
                    </p>
                    <p className="displayProductServing">
                        {theProduct.servingSize} grams per serving.
                    </p>
                    <p className="displayProductCalories">
                        {theProduct.calories} calories.
                    </p>
                    {
                        !theProduct.inventory &&
                        <h4>Out of Inventory</h4>
                    }
                    {
                        !!theProduct.inventory &&
                        <div>
                            <select value={this.state.quantitySelected} className="addItemValue" id="selectQuantity" onChange={event => this.setState({ quantitySelected: event.target.value })}>
                                <option> 1</option>
                                <option> 2</option>
                                <option> 3</option>
                                <option> 4</option>
                                <option> 5</option>
                            </select>
                            <AddButton buttonType={'ADD_ITEM'} buttonText={'Add'} ingredientId={ingredientId} quantity={+this.state.quantitySelected} />
                        </div>
                    }

                    {
                        this.props.userType === 'admin' &&
                        <div>
                            <ProductEditor ingredient={theProduct} />
                            <CategoryAssigner ingredient={theProduct} />
                            <CategoryUnassigner ingredient={theProduct} />
                        </div>
                    }
                    <Review />
                </div>
            )
        } else {
            return <div />
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allIngredients: state.ingredient,
        ownProps: ownProps,
        userType: state.user.userType
    }
}

export default connect(mapStateToProps)(DisplaySingleProduct)
