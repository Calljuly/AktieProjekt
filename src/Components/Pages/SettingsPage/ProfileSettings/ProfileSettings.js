import React from 'react';
import ProfilePicture from '../../../GlobalAssets/ProfilePicture';
import ProfileForm from './ProfileForm';
import {Main, Button, ContainerButton} from '../Styles';
import {useHistory} from 'react-router-dom';



const ProfileSettings = ({userName, setUserName}) =>{
    
    const history = useHistory();

    const sendDeleteAccountRequest = () =>{
            fetch(`http://localhost:4001/delete/${userName}`, {
                headers: {
                  "Content-Type": "application/json",
                },
                method: 'DELETE'
              }).then(() => {
                    history.push('/');
                    setUserName();
                    sessionStorage.removeItem('username');
                    
              });
    }
    
    return(
        <Main>
            <ProfilePicture pictureName='testprofile'/>
                <ProfileForm userName={userName}/>
            <ContainerButton>
                <Button>Save</Button>
                <Button onClick = {sendDeleteAccountRequest}>Delete My Account Now... Please!!</Button>
            </ContainerButton>
        </Main>
    )
}

export default ProfileSettings;