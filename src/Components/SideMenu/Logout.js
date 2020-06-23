import React from 'react'
import LogOutPic from '../../images/logout.svg'
import {LogOutStyle, OptionsImgStyle} from './Styles'
import {useHistory} from 'react-router-dom'

const LogOut = ({setUserName}) => {

    const history = useHistory();
    
    const logOut = () => {
        history.push('/')
        setUserName();
        sessionStorage.removeItem('userName');
    }

    return (
        <LogOutStyle >
        <OptionsImgStyle src={LogOutPic} alt="Log out "/>
            <p style={{cursor: "pointer"}} onClick={logOut}>Logga ut</p>
        </LogOutStyle>
        )
    }
export default LogOut;