import React from 'react';
import {NavBarContainer, ButtonNavBar} from '../StylesSettings'

const NavBar = (props) =>{

    return (
        <NavBarContainer>
            <ButtonNavBar onClick={props.myProfilClicked}>Min Profil</ButtonNavBar>
            <ButtonNavBar onClick={props.changePassClicked}>Ändra lösenord</ButtonNavBar>
            <ButtonNavBar onClick={props.preferenceClicked}>Preferenser</ButtonNavBar>
        </NavBarContainer>
    )
}

export default NavBar;