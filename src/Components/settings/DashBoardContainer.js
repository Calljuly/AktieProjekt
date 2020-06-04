import React, {useContext} from 'react';
import styled from 'styled-components';
import SettingsMyProfile from './MyProfile/MyProfile';
import NavBar from '../settings/Navigation/NavBar';
import ChangePassword from './ChangePassword'
import SettingsContext from '../SettingsContext'

const Main = styled.div`
    color: #3C4368;
    border-radius: 5px;
    background-color: #ffffff;
    width: 100%;
    @media (max-width: 768px) {
        display: inline-block;
    }
`;

const SettingsDashBoardContainer = ({person}) =>{
    const currentState = useContext(SettingsContext);
    return(
        <Main>
            <NavBar/>
            {currentState.currentStateOfSettings ===1 ?
                <SettingsMyProfile person={person}></SettingsMyProfile> : null}
            {currentState.currentStateOfSettings ===2 ?
                <ChangePassword/> : null}
            {currentState.currentStateOfSettings ===3 ?
                 <SettingsMyProfile person={person}></SettingsMyProfile> : null}
            </Main>
    )
}

export default SettingsDashBoardContainer;