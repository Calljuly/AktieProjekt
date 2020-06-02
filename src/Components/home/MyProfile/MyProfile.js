import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../common/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import HomeDashBoardMyProfilePrefferedBusinesses from './PrefferedBusinesses';
import HomeDashBoardMyProfileContactInformation from './ContactInformation';

//kommer behöva ändras till 50 % när emils kod ska vara i samma div
const Main = styled.div`
    margin: 1em;
    width: fit-content;
`;

const TitleButtonContainer = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
`;

const Button = styled.button`
    border-radius: 5px;
    background-color: rgb(70, 67, 67);
    color: white;
    border: none;
    padding: 10px;
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