import React from 'react';
import {NavBarContainer, ButtonNavBar} from '../StylesSettings'
import {Link} from 'react-router-dom'

const NavBar = () =>{

    return (
        <NavBarContainer>
            <Link to="/settings"><ButtonNavBar>Min Profil</ButtonNavBar></Link>
            <Link to="/password"><ButtonNavBar>Ändra lösenord</ButtonNavBar></Link>
            <Link to="/settingspreference"><ButtonNavBar>Preferenser</ButtonNavBar></Link>
        </NavBarContainer>
    )
}

export default NavBar;