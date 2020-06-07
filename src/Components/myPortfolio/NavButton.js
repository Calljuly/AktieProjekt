import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.selected ? "yellow" : "grey"};
    display: ${props => props.shouldDisplay ? "block" : "none"};

`;

const NavButton = (props) =>{
    
    const handleClick = (e) =>{
        const btn = e.target.innerText;
        props.updateSelectedButton(parseInt(btn));
        props.updateDisplayRange(props.range);
        props.updateCurrentlyDisplaying(props.range);
    }
    
    return <Button shouldDisplay={props.shouldDisplay} id={props.id} onClick={handleClick} selected={props.selected}>{props.text}</Button>
}

export default NavButton;