import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.selected ? "yellow" : "grey"};
`;

const NavButton = (props) =>{
    
    const handleClick = (e) =>{
        const btn = e.target.innerText;
        props.updateSelectedButton(btn);
        props.updateDisplayRange(props.range);
    }
    
    return <Button onClick={handleClick} selected={props.selected}>{props.text}</Button>
}

export default NavButton;