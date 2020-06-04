import React from 'react';
import ProfilePicture from '../../common/ProfilePicture';
import SettingsMyProfileForm from './Form';
import {Main, Button, ContainerButton} from '../StylesSettings'

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