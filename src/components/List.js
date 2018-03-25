import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Description = styled.div`
    visibility: hidden;
`;
const ListItem = styled.li`
    width:60%;
    list-style: none;
    display:block;
    height:150px;
    border:1px solid blue;
    padding:1em;
    
   :hover{
    ${Description} {
        visibility: visible;
      }
  }
`;
export default class List extends Component {

    renderItem = (item, i) => {
        return (
            <ListItem
                key={i}
            >
                <span>{item.name}</span>
                <Description>
                    {item.description}<br/>
                    <a href={item.url}>Источник</a>
                    {/*<Link to={`/news`}/>*/}
                </Description>
            </ListItem>
        )
    }

    render() {
        const {list} = this.props
        console.log(list, 'list')

        return (
            <ul>
                {list.slice(0).reverse().map(this.renderItem)}
            </ul>
        )
    }
}

