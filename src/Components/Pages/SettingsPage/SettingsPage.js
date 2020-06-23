import React from 'react';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import SettingsNavigation from './SettingsNavigation/SettingsNavigation';
import ChangePassword from './ChangePassword/ChangePassword';
import {MainDashBoard} from './Styles';
import PreferenceSettings from '../SettingsPage/PreferenceSettings/PreferenceSettings';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const SettingsPage = ({userName, setUserName}) =>{

    return(
        <BrowserRouter>
            <MainDashBoard>
                <SettingsNavigation />
                
                <Switch>
                <Route path="/settings" exact = {true}>
                    <ProfileSettings userName={userName} setUserName = {setUserName}/>
                </Route>
                <Route path="/settings/password">
                    <ChangePassword/>
                </Route>
                <Route path="/settings/settingspreference">
                    <PreferenceSettings userName = {userName}/>
                </Route>
                <Route render = {() => <h1 style = {{margin: '0px'}}>Error 404</h1>}/>
                </Switch>

            </MainDashBoard>
        </BrowserRouter>
    )
}

export default SettingsPage;