import React from 'react';
import ProfilePicture from '../../common/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import HomeDashBoardMyProfilePrefferedBusinesses from './PrefferedBusinesses';
import HomeDashBoardMyProfileContactInformation from './ContactInformation';
import './myProfile.css'

export default function HomeDashboardMyProfile(props){
    return(
        <div id='main'>
            <p>Min Profil</p>
            <div id='image-summary-main-container'>
                <div className='image-summary-container'>
                    <ProfilePicture pictureName = {'testprofile'}/>
                </div>
                <div className='image-summary-container'>
                    <HomeMyProfileSummary person = {props.person}/>
                </div>
            </div>
            <HomeDashBoardMyProfilePrefferedBusinesses person = {props.person}/>
            <br/>
            <HomeDashBoardMyProfileContactInformation person = {props.person}/>
        </div>

    )
}