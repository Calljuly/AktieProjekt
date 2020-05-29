import React from 'react'
import Bild from '../Bilder/LoggoTyp.png'
import Container from './SideNavigationContainer'
import LogOut from './Logout'

const sidemenu = (props) => {
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
export default sidemenu;