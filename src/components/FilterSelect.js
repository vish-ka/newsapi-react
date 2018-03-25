import React, { Component } from 'react'
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {selectFilter} from "../actions/sources";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// const Description = styled.div`
//     visibility: hidden;
// `;
const ListItem = styled.li`
    width:30%;
    list-style: none;
    display:block;
`;
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
        selectFilter: (value, options) => dispatch(selectFilter(value, options)),
    }
}

class FilterSelect extends Component {

    state = {
        selectedOption: {},
    }
    //
    // componentDidMount() {
    //     this.props.getFilters()
    // }

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
    handleChange = (selectedOption) => {
        console.log(this)
        this.setState({ selectedOption });
        this.props.selectFilter(this.props.item.value, selectedOption);
        console.log(selectedOption);
    }

    render() {
        const {item, selectFilter} = this.props
        const { selectedOption } = this.state;
        const value = selectedOption;

        console.log(item)

        return (
            <div>
                <span>{item.name}</span>
                <Select
                    multi
                    options={item.items}
                    name="form-field-name"
                    value={value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

FilterSelect.propTypes = {
    // filters: PropTypes.array,
    // getFilters: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect)

