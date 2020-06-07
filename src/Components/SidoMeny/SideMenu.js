import React from 'react'
import Container from './SideNavigationContainer';
import Bild from '../../images/LoggoTyp.png';
import LogOut from './Logout'
import {SideMenuStyle, LoggoStyle} from './StylesSideMenu'

const SideMenu = (props) => {

    return (

    <SideMenuStyle>
        <LoggoStyle src={Bild} alt="Campus Mölndal"/>
                <Container />
        <LogOut/>
    </SideMenuStyle>
    );

}
export default SideMenu;