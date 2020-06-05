import React from 'react';
import {Container, Name, NumbersDescription, Numbers} from './StylesMyProfil';

export default function HomeMyProfileSummary(props){
    return (
        <Container>
            <Name>{props.person.fName + ' ' + props.person.lName}</Name>
            <NumbersDescription >Personnummer/</NumbersDescription>
            <NumbersDescription>Organisationsnummer:</NumbersDescription>
            <Numbers>{props.person.idNumber}</Numbers>
        </Container>
    )
}