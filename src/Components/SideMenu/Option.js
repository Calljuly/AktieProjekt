import React from 'react'
import {OptionsImgStyle, SideMenuOptions} from './Styles'

const Options = ({path, image, name}) => {

    return (
        <SideMenuOptions exact to={path}>
            <OptionsImgStyle src={image} alt="meny knapp"/>
            {name}
        </SideMenuOptions>
    )
}
export default Options;