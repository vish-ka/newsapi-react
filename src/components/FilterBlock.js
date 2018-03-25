import React, { Component } from 'react'
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {getFilters} from "../actions/sources";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FilterSelect from './FilterSelect'


// const Description = styled.div`
//     visibility: hidden;
// `;
// const ListItem = styled.li`
//     width:30%;
//     list-style: none;
//     display:block;
// `;
const Item = styled.li`
    list-style: none;
    display:block;
`;

const mapStateToProps = (state) => {
    console.log(state)
    return {
        filters: state.sources.filters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilters: () => dispatch(getFilters()),
    }
}

class FilterBlock extends Component {

    state = {
        selectedOption: {},
    }

    componentDidMount() {
        this.props.getFilters()
    }

    // renderItem = (item, i) => {
    //     console.log(item.value);
    //     console.log(this.props)
    //     const { selectedOption } = this.state;
    //     const value = selectedOption;
    //     return (
    //         <ListItem key={i}>
    //             <span>{item.name}</span>
    //             <Select
    //                 multi
    //                 options={item.items}
    //                 name="form-field-name"
    //                 value={value}
    //                 onChange={this.handleChange}
    //             />
    //         </ListItem>
    //     )
    // }
    //
    // handleChange = (selectedOption) => {
    //     this.setState({ selectedOption });
    //     console.log(selectedOption);
    // }

    render() {
        const {filters} = this.props

        return (
            <ul>
                {filters.slice(0).reverse().map((item, i) =>
                    <FilterSelect key={i} item={item}/>
                )}
            </ul>
        )
    }
}

FilterBlock.propTypes = {
    filters: PropTypes.array,
    getFilters: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock)

