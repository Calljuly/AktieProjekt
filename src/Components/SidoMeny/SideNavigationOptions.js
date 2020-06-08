import React from 'react'
import {OptionsStyle,OptionsImgStyle} from './StylesSideMenu'
import {NavLink} from 'react-router-dom'


const Options = (props) => {

    return (
        <NavLink exact to={props.path}>
            <OptionsImgStyle src={props.bild} alt="meny button"/>
            {props.Name}
        </NavLink>
    )
}
export default Options;