import React from 'react'
import Container from './SideNavigationContainer';
import Bild from '../../images/LoggoTyp.png';
import LogOut from './Logout'
import {SideMenuStyle, LoggoStyle} from './StylesSideMenu'

const SideMenu = (props) => {

    return (

    <SideMenuStyle>
        <LoggoStyle src={Bild} alt="Campus Mölndal"/>
            <Container changeHome={props.changeHome}
            changePortfolio={props.changePortfolio}
            changeSettings={props.changeSettings}/>
        <LogOut/>
    </SideMenuStyle>
    );

}
export default SideMenu;