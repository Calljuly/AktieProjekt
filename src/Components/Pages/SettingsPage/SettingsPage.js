import React from 'react';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import SettingsNavigation from './SettingsNavigation/SettingsNavigation';
import ChangePassword from './ChangePassword/ChangePassword';
import {MainDashBoard} from './Styles';
import PreferenceSettings from '../SettingsPage/PreferenceSettings/PreferenceSettings';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const SettingsPage = ({username}) =>{

    return(
        <BrowserRouter>
            <MainDashBoard>
                <SettingsNavigation />
                
                <Switch>
                <Route path="/settings">
                    <ProfileSettings username={username}/>
                </Route>
                <Route path="/password">
                    <ChangePassword/>
                </Route>
                <Route path="/settingspreference">
                    <PreferenceSettings/>
                </Route>
                </Switch>

            </MainDashBoard>
        </BrowserRouter>
    )
}

export default SettingsPage;