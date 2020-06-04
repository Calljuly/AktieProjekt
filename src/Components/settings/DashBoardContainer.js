import React, {useContext} from 'react';
import SettingsMyProfile from './MyProfile/MyProfile';
import NavBar from '../settings/Navigation/NavBar';
import ChangePassword from './ChangePassword'
import SettingsContext from '../SettingsContext'
import {MainDashBoard} from './StylesSettings'

const SettingsDashBoardContainer = ({person}) =>{
    const currentState = useContext(SettingsContext);
    return(
        <MainDashBoard>
            <NavBar/>
            {currentState.currentStateOfSettings ===1 ?
                <SettingsMyProfile person={person}></SettingsMyProfile> : null}
            {currentState.currentStateOfSettings ===2 ?
                <ChangePassword/> : null}
            {currentState.currentStateOfSettings ===3 ?
                 <SettingsMyProfile person={person}></SettingsMyProfile> : null}
        </MainDashBoard>
    )
}

export default SettingsDashBoardContainer;