import React from 'react'
import Container from './SideNavigationContainer'
import LogOut from './Logout'
import Bild from '../../images/LoggoTyp.png'

const SideMenu = (props) => {
return (
    <div id="sideMenu">
    <img id="campus" src={Bild} alt="Campus Mölndal"></img>
        <Container changeHome={props.changeHome}
        changePortfolio={props.changePortfolio}
        changeSettings={props.changeSettings}></Container>
        <LogOut></LogOut>
    </div>
);

}
export default SideMenu;