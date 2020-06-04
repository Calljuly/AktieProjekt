import React, {useContext} from 'react';
import styled from 'styled-components';
import SettingsContext from '../../SettingsContext'


const Container = styled.div`
    display: flex;
    border-bottom: 1px solid #EBEDF2;
    background-color: white;
`;

const Button = styled.button`
    border: none;
    border-bottom: 1px solid #EBEDF2;
    font-size: 1em;
    background-color: white;
    padding: 1em;

    &:hover
    {
        color:#FDCC6B;
        border-bottom: 1px solid #FDCC6B;
    }
`;

const NavBar = () =>{
    const clickEvent = useContext(SettingsContext);
    return (
        <Container>
            <Button onClick={clickEvent.myProfilClicked}>Min Profil</Button>
            <Button onClick={clickEvent.changePassClicked}>Ändra lösenord</Button>
            <Button onClick={clickEvent.referenceClicked}>Preferenser</Button>
        </Container>
    )
}

export default NavBar;