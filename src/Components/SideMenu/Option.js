import React from 'react'
import {OptionsImgStyle, SideMenuOptions} from './Styles'

const Options = (props) => {

    return (
        <SideMenuOptions exact to={props.path}>
            <OptionsImgStyle src={props.bild} alt="meny button"/>
            {props.Name}
        </SideMenuOptions>
    )
}
export default Options;