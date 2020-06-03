import React from 'react'
import Container from './SideNavigationContainer';
import Bild from '../../images/LoggoTyp.png';
import LogOut from './Logout'
import styled from 'styled-components'

const SideMenu = (props) => {

    const SideMenuStyle = styled.div`
        background-color: #3C3C3B;
        width: 25%;
        height: 100%;
        float: left;
    `;
    const LoggoStyle = styled.img`
        padding: 5%;
        padding-top: 50px;
        float: left;
        width: 80%;
    `;
    
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