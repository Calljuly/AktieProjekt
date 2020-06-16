import React from 'react';
import {NavBarContainer, NavLinkSettings} from '../Styles'

const SettingsNavigation = () =>{

    return (
        <NavBarContainer>
            <NavLinkSettings to="/settings" exact = {true}>Min Profil</NavLinkSettings>
            <NavLinkSettings to="/settings/password">Ändra lösenord</NavLinkSettings>
            <NavLinkSettings to="/settings/settingspreference">Preferenser</NavLinkSettings>
        </NavBarContainer>
    )
}

export default SettingsNavigation;