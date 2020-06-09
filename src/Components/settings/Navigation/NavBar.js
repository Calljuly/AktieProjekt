import React from 'react';
import {NavBarContainer, ButtonNavBar, NavLinkSettings} from '../StylesSettings'
import {Link} from 'react-router-dom'
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