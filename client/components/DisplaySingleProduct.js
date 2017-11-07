import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import { fetchSingleProduct } from '../store'
import AddButton from "./button"


const mapStateToProps = (state, ownProps) =>{
    return {allIngredients: state.ingredient,
            ownProps: ownProps};
}

const findSelectValue = () =>{
    return document.getElementById("selectQuantity").value
}



class DisplaySingleProduct extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            quantitySelected : 1
        }
    }
    render(){
    if(this.props.allIngredients.length > 0){
        const  ingredientId = Number(this.props.match.params.id);
        const theProduct = this.props.allIngredients.filter(ingredient => ingredient.id === ingredientId )[0]
        return(
            <div>
            <img className="displayProductImage" src={theProduct.image} height="82" width="82"/>

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

                <select value={this.state.quantitySelected} className="addItemValue" id="selectQuantity" onChange={event => this.setState({quantitySelected : event.target.value })}>
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
                <option> 4</option>
                <option> 5</option>
                </select>
            <AddButton buttonType={"ADD_ITEM"} buttonText={"Add"} ingredientId={ingredientId} quantity={+this.state.quantitySelected}/>
        </div>
        )
    } else{
        return <div> </div>
    }
}
}

export default connect(mapStateToProps)(DisplaySingleProduct);
