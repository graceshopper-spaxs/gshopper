import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import { fetchSingleProduct } from '../store'


const mapStateToProps = (state, ownProps) =>{
    return {allIngredients: state.ingredient,
            ownProps: ownProps};
}




const DisplaySingleProduct = (props) => {
    if(props.allIngredients.length > 0){
        const productId = Number(props.match.params.id);
        const theProduct = props.allIngredients.filter(ingredient => ingredient.id === productId)[0]
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
        </div>    
        )
    } else{
        return <div> </div> 
    }
}

export default connect(mapStateToProps)(DisplaySingleProduct);