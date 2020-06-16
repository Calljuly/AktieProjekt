import React, {useState, useEffect} from 'react';
import {Main, Button, ImageSummaryContainer, TitleButtonContainer} from './Styles';
import ProfilePicture from '../../../GlobalAssets/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import PreferredBusinesses from './PreferredBusinesses';
import ContactInformation from './ContactInformation';

const Profile = ({user}) => {
    
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(true);


    async function fetchUserInfo () {
      const response = await fetch(`http://localhost:4001/customer/${user}`);
      const json = await response.json();
      
      setUserInfo(JSON.parse(json.PersonalInformation));
      setLoading(false);

    }

    useEffect( () => {
      fetchUserInfo();
    }, []);

    const showContent = () =>{
        return(
            <>
                <ImageSummaryContainer>
                    <ProfilePicture pictureName = {'testprofile'} isHomeScreen={true}/>
                    <HomeMyProfileSummary person = {userInfo}/>
                </ImageSummaryContainer>
                <PreferredBusinesses person = {userInfo}/>
                <br/>
                <ContactInformation person = {userInfo}/>
            </>
        )
    }
    
    return(
        <Main>
            <TitleButtonContainer>
                <p><strong>Min Profil</strong></p>
                <Button to="/settings">Redigera</Button>
            </TitleButtonContainer>
            {
                !loading && showContent()
            }
            
        </Main>

    )
}

export default Profile;