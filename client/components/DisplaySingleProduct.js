import React from 'react'
import { connect } from 'react-redux'
import AddButton from './button'
import ProductEditor from './ProductEditor'
import Review from './Review'
import CategoryAssigner from './CategoryAssigner'
import CategoryUnassigner from './CategoryUnassigner'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

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
                    <div style={styles.root}>
                        <GridTile
                            title={theProduct.name}
                            subtitle={<span>
                                calories: <b>{theProduct.calories}</b> <br />
                                price: $<b>{theProduct.price}</b> <br />
                                <b>{theProduct.servingSize}</b> grams per serving <br />
                            </span>}
                            actionIcon={<IconButton>
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
                            </IconButton>}>
                            <img src={theProduct.image} />
                        </GridTile>
                    </div>

                    <div>

                        {
                            !theProduct.inventory &&
                            <h4>Out of Inventory</h4>
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
                </div>
            )
        }

        else {
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
