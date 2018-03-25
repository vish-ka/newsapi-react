import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import List from '../components/List'

import { getSourcesRequest } from '../actions/sources'
import FilterBlock from "../components/FilterBlock";


const Column1 = styled.section`
  padding: 4em;
  width: 30%;
`;

const mapStateToProps = (state) => {
    return {
        sources: state.sources.sources,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSources: () => dispatch(getSourcesRequest()),
    }
}

export class Sources extends Component {

    componentDidMount() {
        this.props.getSources()
    }

    render() {
        const {sources} = this.props

        return (
            <div>
                <FilterBlock />
                <List
                    list={sources}
                />
            </div>
        )
    }
}

Sources.propTypes = {
    sources: PropTypes.array,
    getSources: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)
