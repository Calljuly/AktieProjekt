import React from 'react';
import SettingsMyProfile from './MyProfile/MyProfile';
import NavBar from '../settings/Navigation/NavBar';
import ChangePassword from './ChangePassword';
import {MainDashBoard} from './StylesSettings';
import PreferenceForm from './Preferences/Preferences';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const SettingsDashBoardContainer = ({person}) =>{

    return(
        <BrowserRouter>
        <MainDashBoard>
            
            <NavBar />

            <Switch>
            <Route path="/settings" render={() =>{
                return <SettingsMyProfile person={person}></SettingsMyProfile>
            }}/>
            <Route path="/password" render={()=> {return <ChangePassword/>}}/>
            <Route path="/settingspreference" render={() => {return <PreferenceForm/>}}/>
            </Switch>
             
        </MainDashBoard>
        </BrowserRouter>
    )
}

export default SettingsDashBoardContainer;