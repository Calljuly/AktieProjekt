import React from 'react';
import {Container, Name, NumbersDescription, Numbers} from './Styles';

const HomeMyProfileSummary = ({person}) => {
    return (
        <Container>
            <Name>{person.fName + ' ' + person.lName}</Name>
            <NumbersDescription >Personnummer/</NumbersDescription>
            <NumbersDescription>Organisationsnummer:</NumbersDescription>
            <Numbers>{person.idNumber}</Numbers>
        </Container>
    )
}

export default HomeMyProfileSummary;