import React from 'react'
import LogOutPic from '../../images/logout.svg'
import {LogOutStyle, OptionsImgStyle} from './Styles'
import {useHistory} from 'react-router-dom'

const LogOut = () => {

    const history = useHistory();
    return (
        <LogOutStyle >
        <OptionsImgStyle src={LogOutPic} alt="Log out "/>
            <p onClick={()=>
                history.push('/')
            }>Logga ut</p>
        </LogOutStyle>
        )
    }
export default LogOut;