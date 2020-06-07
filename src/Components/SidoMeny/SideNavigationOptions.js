import React from 'react'
import {OptionsStyle,OptionsImgStyle} from './StylesSideMenu'


const Options = (props) => {

    return (
        <OptionsStyle>
            <OptionsImgStyle src={props.bild} alt="meny button"/>
            {props.Name}
        </OptionsStyle>
    )
}
export default Options;