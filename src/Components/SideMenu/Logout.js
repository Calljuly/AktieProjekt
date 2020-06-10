import React from 'react'
import LogOutPic from '../../images/logout.svg'
import {LogOutStyle, OptionsImgStyle} from './Styles'

const LogOut = () => {
    
    return (
        <LogOutStyle>
        <OptionsImgStyle src={LogOutPic} alt="Log out "/>
            <p>Logga ut</p>
        </LogOutStyle>
        )
    }
export default LogOut;