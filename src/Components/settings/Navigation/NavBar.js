import React from 'react';
import {NavBarContainer, NavLinkSettings} from '../StylesSettings'

const NavBar = () =>{

    return (
        <NavBarContainer>
            <NavLinkSettings to="/settings">Min Profil</NavLinkSettings>
            <NavLinkSettings to="/password">Ändra lösenord</NavLinkSettings>
            <NavLinkSettings to="/settingspreference">Preferenser</NavLinkSettings>
        </NavBarContainer>
    )
}

export default NavBar;