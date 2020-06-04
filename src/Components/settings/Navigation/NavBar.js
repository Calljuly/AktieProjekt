import React from 'react';
import styled from 'styled-components';

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
    return (
        <Container>
            <Button>Min Profil</Button>
            <Button>Ändra lösenord</Button>
            <Button>Preferenser</Button>
        </Container>
    )
}

export default NavBar;