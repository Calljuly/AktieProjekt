import React, {useState} from 'react';
import SettingsMyProfile from './MyProfile/MyProfile';
import NavBar from '../settings/Navigation/NavBar';
import ChangePassword from './ChangePassword';
import SettingsContext from '../SettingsContext';
import {MainDashBoard} from './StylesSettings';
import PreferenceForm from './Preferences/Preferences';

const SettingsDashBoardContainer = ({person}) =>{

    const [settingOptionsClicked, changeSettingOptionState] = useState(1)

    const settingOptionsProfilClicked = () =>{
  
          changeSettingOptionState(1);
    }
    const settingOptionsPasswordClicked = () =>{
  
      changeSettingOptionState(2);
    }
    const settingOptionsPreferenceClicked = () =>{
  
      changeSettingOptionState(3);
    }
    
    return(
        <MainDashBoard>
            <NavBar myProfilClicked={settingOptionsProfilClicked}
            changePassClicked={settingOptionsPasswordClicked}
            preferenceClicked={settingOptionsPreferenceClicked} />
            {settingOptionsClicked === 1 ?
                <SettingsMyProfile person={person}></SettingsMyProfile> : null}
            {settingOptionsClicked === 2 ?
                <ChangePassword/> : null}
            {settingOptionsClicked === 3 ?
                 <PreferenceForm/> : null}
        </MainDashBoard>
    )
}

export default SettingsDashBoardContainer;