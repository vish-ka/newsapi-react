import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import List from '../components/List'

import { getInvoicesRequest } from '../actions/sources'

const mapStateToProps = (state) => {
    return {
        invoices: state.invoice.invoices,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInvoices: () => dispatch(getInvoicesRequest()),
    }
}

class Invoice extends Component {

    componentDidMount() {
        this.props.getInvoices()
    }

    render() {
        const {invoices} = this.props

        return (
            <div>
                <Link to={`/addinvoice`} className="btn btn-primary margin">Add invoice</Link>
                <List
                    list={invoices}
                />
            </div>
        )
    }
}

Invoice.propTypes = {
    invoices: PropTypes.array,
    getInvoices: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
