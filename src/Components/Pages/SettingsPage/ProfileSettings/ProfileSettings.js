import React from 'react';
import ProfilePicture from '../../../GlobalAssets/ProfilePicture';
import ProfileForm from './ProfileForm';
import {Main, Button, ContainerButton} from '../Styles';
import {useHistory} from 'react-router-dom';



const ProfileSettings = ({username, setUserName}) =>{
    
    const history = useHistory();

    const sendDeleteAccountRequest = () =>{
            fetch(`http://localhost:4001/delete/${username}`, {
                headers: {
                  "Content-Type": "application/json",
                },
                method: 'DELETE'
              }).then(() => {
                    setUserName();
                    sessionStorage.removeItem('username');
                    history.push('/');
              });
    }
    
    return(
        <Main>
            <ProfilePicture pictureName='testprofile'/>
                <ProfileForm username={username}/>
            <ContainerButton>
                <Button>Save</Button>
                <Button onClick = {sendDeleteAccountRequest}>Delete My Account Now... Please!!</Button>
            </ContainerButton>
        </Main>
    )
}

export default ProfileSettings;