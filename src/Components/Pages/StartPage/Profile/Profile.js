import React from 'react';
import {Main, Button, ImageSummaryContainer, TitleButtonContainer} from './Styles';
import ProfilePicture from '../../../GlobalAssets/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import PreferredBusinesses from './PreferredBusinesses';
import ContactInformation from './ContactInformation';

export default function Profile(props){
    return(
        <Main>
            <TitleButtonContainer>
                <p><strong>Min Profil</strong></p>
                <Button to="/settings">Redigera</Button>
            </TitleButtonContainer>
            <ImageSummaryContainer>
                <ProfilePicture pictureName = {'testprofile'} isHomeScreen={true}/>
                <HomeMyProfileSummary person = {props.person}/>
            </ImageSummaryContainer>
            <PreferredBusinesses person = {props.person}/>
            <br/>
            <ContactInformation person = {props.person}/>
        </Main>

    )
}