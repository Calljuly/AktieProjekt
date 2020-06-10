import React from 'react';
import ProfilePicture from '../../../GlobalAssets/ProfilePicture';
import ProfileForm from './ProfileForm';
import {Main, Button, ContainerButton} from '../Styles'

const ProfileSettings = ({person}) =>{
    return(
        <Main>
            <ProfilePicture pictureName='testprofile'/>
                <ProfileForm person={person}/>
            <ContainerButton>
                <Button>Save</Button>
            </ContainerButton>
        </Main>
    )
}

export default ProfileSettings;