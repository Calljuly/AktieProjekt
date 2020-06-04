import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../common/ProfilePicture';
import SettingsMyProfileForm from './Form';

const Main = styled.div`
    width: 50%;
    padding: 15px;
    text-align: left;
`;

const Button = styled.button`
    background-color: #FDCC6B;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 1em;
    margin-top: 0.1em;
`;
    const ContainerButton = styled.div`
    display: flexbox;
    border-top: 1px solid #EBEDF2;
    background-color: white;
    justify-content: flex-end;
    padding-top: 10px;
`;

const SettingsMyProfile = ({person}) =>{
    return(
        <Main>
            <ProfilePicture pictureName='testprofile'/>
                <SettingsMyProfileForm person={person}/>
            <ContainerButton>
                <Button>Save</Button>
            </ContainerButton>
        </Main>
    )
}

export default SettingsMyProfile;