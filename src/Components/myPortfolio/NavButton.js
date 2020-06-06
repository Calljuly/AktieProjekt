import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.selected ? "yellow" : "grey"};
`;

const NavButton = (props) =>{
    return <Button onClick={props.handleClick} selected={props.selected}>{props.text}</Button>
}

export default NavButton;