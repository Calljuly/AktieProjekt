import React from 'react';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import SettingsNavigation from './SettingsNavigation/SettingsNavigation';
import ChangePassword from './ChangePassword/ChangePassword';
import {MainDashBoard} from './Styles';
import PreferenceSettings from '../SettingsPage/PreferenceSettings/PreferenceSettings';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const SettingsPage = ({person}) =>{

    return(
        <BrowserRouter>
        <MainDashBoard>
            
            <SettingsNavigation />

            <Switch>
            <Route path="/settings" render={() =>{
                return <ProfileSettings person={person}></ProfileSettings>
            }}/>
            <Route path="/password" render={()=> {return <ChangePassword/>}}/>
            <Route path="/settingspreference" render={() => {return <PreferenceSettings/>}}/>
            </Switch>
             
        </MainDashBoard>
        </BrowserRouter>
    )
}

export default SettingsPage;