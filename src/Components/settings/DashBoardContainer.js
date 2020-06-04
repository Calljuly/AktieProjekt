import React from 'react';
import styled from 'styled-components';
import SettingsMyProfile from './MyProfile/MyProfile';
import NavBar from '../settings/Navigation/NavBar';

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

    return(
        <Main>
            <NavBar/>
            <SettingsMyProfile person={person}></SettingsMyProfile>
        </Main>
    )
}

export default SettingsDashBoardContainer;