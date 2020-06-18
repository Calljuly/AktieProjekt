import React, {useState} from 'react';
import pen from '../../images/penna.png';
import {Container, EditSymbolContainer, ProfileImage, PenImage} from './ProfilePictureStyles';



const ProfilePicture = ({isHomeScreen}) => {
    
    const [easterEgg, setEasterEgg] = useState(false);

    const handleClick = () => {
        setEasterEgg(!easterEgg);
    }
    
    return(
        <Container>
            <EditSymbolContainer onClick = {handleClick} isHomeScreen={isHomeScreen}>
                <PenImage src={pen} alt='Penna'/>
            </EditSymbolContainer>
            <ProfileImage src={require(easterEgg ? '../../images/easteregg.png' : '../../images/testprofile.jpg')} alt='Profile'/>
        </Container>
        
    );
}

export default ProfilePicture;