import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../common/ProfilePicture';
import SettingsMyProfileForm from './Form';

const Main = styled.div`
    width: 50%;
    margin-left: 20px;
    text-align: left;
`;

const Button = styled.button`
    background-color: #FDCC6B;
    color: white;
    float: right;
    border-radius: 5px;
    border: none;
    padding: 1em;
    margin-top: 0.1em;
`;

const SettingsMyProfile = ({person}) =>{
    return(
        <Main>
            <ProfilePicture pictureName='testprofile'/>
            <SettingsMyProfileForm person={person}/>
            <Button>Spara</Button>
        </Main>
    )
}

export default SettingsMyProfile;