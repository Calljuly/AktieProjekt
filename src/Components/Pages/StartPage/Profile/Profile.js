import React, {useState, useEffect} from 'react';
import {Main, Button, TitleButtonContainer} from '../CommonStyles';
import {ImageSummaryContainer} from './Styles';
import ProfilePicture from '../../../GlobalAssets/ProfilePicture';
import HomeMyProfileSummary from './Summary';
import PreferredBusinesses from './PreferredBusinesses';
import ContactInformation from './ContactInformation';

const Profile = ({username}) => {
    
    const [personalInformation, setPersonalInformation] = useState();
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        fetch(`http://localhost:4001/users/${username}`)
        .then(response => response.json())
        .then(data => {
            setPersonalInformation(JSON.parse(data.PersonalInformation));
            setLoading(false);});
    }, []);

    const showContent = () =>{
        return(
            <>
                <ImageSummaryContainer>
                    <ProfilePicture pictureName = {'testprofile'} isHomeScreen={true}/>
                    <HomeMyProfileSummary person = {personalInformation}/>
                </ImageSummaryContainer>
                <PreferredBusinesses person = {personalInformation}/>
                <br/>
                <ContactInformation person = {personalInformation}/>
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