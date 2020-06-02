import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
    margin: 1em;
`;

const EditSymbol = styled.div`
    background-color: #FDCC6B;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

const Image = styled.img`
    padding: 0px;
    margin: 0px;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;



export default function ProfilePicture (props){
    
    return(
         
        <Container>
            <EditSymbol/>
            <Image src={require(`../../images/${props.pictureName.toLowerCase()}.jpg`)} alt='Profile'/>
        </Container>
        
    );
}