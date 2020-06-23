import React from 'react';
import {NavigatingButton} from './Styles'




const NavButton = (props) =>{
    
    const handleClick = (e) =>{
        const btn = e.target.innerText;
        props.updateSelectedButton(parseInt(btn));
        props.updateDisplayRange(props.range);
        props.updateCurrentlyDisplaying(props.range);
    }
    
    return <NavigatingButton shouldDisplay={props.shouldDisplay} id={props.id} onClick={handleClick} selected={props.selected}>{props.text}</NavigatingButton>
}

export default NavButton;