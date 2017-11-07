import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllAssociations } from '../store'
import axios from 'axios'

class OneOrder extends Component {
    constructor(props) {
        super(props)
        this.handleDropDown = this.handleDropDown.bind(this)
    }

    componentDidMount() {
        const orderId = this.props.match.params.orderId
        this.props.fetchAllAssociations(orderId)
    }

    handleDropDown(event) {
        const orderId = this.props.match.params.orderId;
        const status = event.target.value;

        axios.put(`/api/orders/${orderId}`, { status })
        .catch(err => console.error(err))
    }

    render() {
        const associations = this.props.associations
        return (
            <div>
                <div>
                    Cart:
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {associations.length && associations.map((item, i) => (
                            <tr key={i}>
                                <td><span>id: {item.ingredientId}</span></td>
                                <td><span>quantity: {item.quantity}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <select name="status" onChange={this.handleDropDown}>
                        <option value="created">created</option>
                        <option value="processed">processed</option>
                        <option value="completed">completed</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    associations: state.associations
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllAssociations(orderId) {
        dispatch(fetchAllAssociations(orderId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OneOrder)
