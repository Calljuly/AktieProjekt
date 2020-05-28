import React from 'react'
import Bild from '../Bilder/Image 2@2x.png'
import Container from './SideNavigationContainer'
import LogOut from './Logout'
import Test from '../Bilder/cog.svg'

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