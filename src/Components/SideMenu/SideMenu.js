import React from 'react'
import OptionsContainer from './OptionsContainer';
import Bild from '../../images/LoggoTyp.png';
import LogOut from './Logout'
import {SideMenuStyle, LoggoStyle} from './Styles'

const SideMenu = (props) => {

    return (

    <SideMenuStyle>
        <LoggoStyle src={Bild} alt="Campus Mölndal"/>
                <OptionsContainer />
        <LogOut/>
    </SideMenuStyle>
    );

}
export default SideMenu;