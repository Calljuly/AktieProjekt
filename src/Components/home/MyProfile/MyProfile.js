import React from 'react';
import ProfilePicture from '../../common/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import HomeDashBoardMyProfilePrefferedBusinesses from './PrefferedBusinesses';
import HomeDashBoardMyProfileContactInformation from './ContactInformation';

export default function HomeDashboardMyProfile(props){
    return(
        <div>
            <ProfilePicture pictureName = {'testprofile'}/>
            <HomeMyProfileSummary person = {props.person}/>
            <HomeDashBoardMyProfilePrefferedBusinesses person = {props.person}/>
            <HomeDashBoardMyProfileContactInformation person = {props.person}/>
        </div>

    )
}