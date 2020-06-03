import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../common/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import HomeDashBoardMyProfilePrefferedBusinesses from './PrefferedBusinesses';
import HomeDashBoardMyProfileContactInformation from './ContactInformation';

const Main = styled.div`
    margin: 0.5em;
    padding: 2em;
`;

const TitleButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    border-radius: 5px;
    background-color: rgb(70, 67, 67);
    color: white;
    border: none;
    padding: 1em;
    @media (max-width: 768px) {
        padding: 0.2em;
    }
`;

const ImageSummaryContainer = styled.div`
    display: flex;
`;

export default function HomeDashboardMyProfile(props){
    return(
        <Main>
            <TitleButtonContainer>
                <p><strong>Min Profil</strong></p>
                <Button>Redigera</Button>
            </TitleButtonContainer>
            <ImageSummaryContainer>
                <ProfilePicture pictureName = {'testprofile'}/>
                <HomeMyProfileSummary person = {props.person}/>
            </ImageSummaryContainer>
            <HomeDashBoardMyProfilePrefferedBusinesses person = {props.person}/>
            <br/>
            <HomeDashBoardMyProfileContactInformation person = {props.person}/>
        </Main>

    )
}