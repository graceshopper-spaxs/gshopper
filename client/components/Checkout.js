import React from 'react'
import { connect } from 'react-redux';


const Checkout = (props) => {

        return (
            <div>
                <form>
                    <label>Address Line 1: </label>
                    <input type="text" name="address-line-one" placeholder="street address, P.O. box, etc" /> 
                    <label>Address Line 2: </label>
                    <input type="text" name="address-line-two" placeholder="apartment, suite, building, floor, etc" /> 
                    <label>City: </label>
                    <input type="text" name="city" /> 
                    <label>State/Province/Region: </label>
                    <input type="text" name="state" /> 
                    <label>zip: </label>
                    <input type="text" name="zip" /> 
                    <label>phone number: </label>
                    <input name="phone number" /> 
                    <button type="submit">Checkout!</button>
                </form> 

            </div>
        )

}

export default connect()(Checkout); 