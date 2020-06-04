import React from 'react';
import pen from '../../images/penna.png';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
    margin: 1em;
`;

const EditSymbolContainer = styled.div`
    background-color: #FDCC6B;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: ${props => props.isHomeScreen && "none" };
`;

const ProfileImage = styled.img`
    padding: 0px;
    margin: 0px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;


export default function ProfilePicture (props){
    
    const PenImage = styled.img`
        height: 15px;
        width: 15px;
        
    `;
    
    return(
         
        <Container>
            <EditSymbolContainer isHomeScreen={props.isHomeScreen}>
                <PenImage src={pen} alt='Penna'/>
            </EditSymbolContainer>
            <ProfileImage src={require(`../../images/${props.pictureName.toLowerCase()}.jpg`)} alt='Profile'/>
        </Container>
        
    );
}