import React from 'react'
import OptionsContainer from './OptionsContainer';
import Image from '../../images/LoggoTyp.png';
import LogOut from './Logout'
import {SideMenuStyle, LoggoStyle} from './Styles'

const SideMenu = ({setUserName}) => {

    return (

    <SideMenuStyle>
        <LoggoStyle src={Image} alt="Campus Mölndal"/>
                <OptionsContainer />
        <LogOut setUserName={setUserName}/>
    </SideMenuStyle>
    );

}
export default SideMenu;