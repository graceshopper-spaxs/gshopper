import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllAssociations } from '../store'

class OneOrder extends Component {
    componentDidMount() {
        const orderId = this.props.match.params.orderId
        this.props.fetchAllAssociations(orderId)
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
                            <th scope="col">Ingredient</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {associations.length && associations.map((item, i) => (
                            <tr key={i}>
                                <td>id: {item.ingredientId}</td>
                                <td>quantity: {item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div>
                    Status:
                    Drop down menu
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
