import React from 'react';
import {Main, Button, ImageSummaryContainer, TitleButtonContainer} from './StylesMyProfil';
import ProfilePicture from '../../common/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import HomeDashBoardMyProfilePrefferedBusinesses from './PrefferedBusinesses';
import HomeDashBoardMyProfileContactInformation from './ContactInformation';

export default function HomeDashboardMyProfile(props){
    return(
        <Main>
            <TitleButtonContainer>
                <p><strong>Min Profil</strong></p>
                <Button>Redigera</Button>
            </TitleButtonContainer>
            <ImageSummaryContainer>
                <ProfilePicture pictureName = {'testprofile'} isHomeScreen={true}/>
                <HomeMyProfileSummary person = {props.person}/>
            </ImageSummaryContainer>
            <HomeDashBoardMyProfilePrefferedBusinesses person = {props.person}/>
            <br/>
            <HomeDashBoardMyProfileContactInformation person = {props.person}/>
        </Main>

    )
}