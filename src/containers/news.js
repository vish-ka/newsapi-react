import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import { getCustomersRequest, getProductsRequest } from '../actions/sources'
import { getProductsLocal } from '../actions/sources'

const mapStateToProps = (state) => {
    return {
        // customers: state.customers.customers,
        // products: state.products.products,
        // productsLocal: state.products.productsLocal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getCustomers: () => dispatch(getCustomersRequest()),
        // getProducts: () => dispatch(getProductsRequest()),
        // getProductsLocal: (item) => dispatch(getProductsLocal(item)),
    }
}

class News extends Component {

    // state = {
    //     total :0
    // }
    // componentDidMount() {
    //     this.props.getCustomers()
    //     this.props.getProducts()
    // }
    //
    onChange = () => {

    }
    //
    // setCustomer = () => {
    //
    // }
    // pushToLocalProductsList = (e) => {
    //     const { products } = this.props
    //     this.props.getProductsLocal(products[e.target.value])
    // }
    render() {
        const { customers, products, productsLocal } = this.props;

        return (
            <div className="container">
                <h1 className="title">New Invoice</h1>
                <div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" onChange={this.onChange} className="form-control"/>
                    </div>
                    Total: <p>{this.state.total}</p>
                </div>
            </div>
        )
    }
}

// News.propTypes = {
//     customers: PropTypes.array,
//     getCustomers: PropTypes.func,
//     products: PropTypes.array,
//     getProducts: PropTypes.func,
//     productsLocal: PropTypes.array,
//     getProductsLocal: PropTypes.func,
// }

export default connect(mapStateToProps, mapDispatchToProps)(News)
