import React from 'react';
import {NavBarContainer, NavLinkSettings} from '../Styles'

const SettingsNavigation = () =>{

    return (
        <NavBarContainer>
            <NavLinkSettings to="/settings">Min Profil</NavLinkSettings>
            <NavLinkSettings to="/password">Ändra lösenord</NavLinkSettings>
            <NavLinkSettings to="/settingspreference">Preferenser</NavLinkSettings>
        </NavBarContainer>
    )
}

export default SettingsNavigation;