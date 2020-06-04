import React, {useContext} from 'react';
import SettingsContext from '../../SettingsContext'
import {NavBarContainer, ButtonNavBar} from '../StylesSettings'

const NavBar = () =>{
    const clickEvent = useContext(SettingsContext);
    return (
        <NavBarContainer>
            <ButtonNavBar onClick={clickEvent.myProfilClicked}>Min Profil</ButtonNavBar>
            <ButtonNavBar onClick={clickEvent.changePassClicked}>Ändra lösenord</ButtonNavBar>
            <ButtonNavBar onClick={clickEvent.referenceClicked}>Preferenser</ButtonNavBar>
        </NavBarContainer>
    )
}

export default NavBar;