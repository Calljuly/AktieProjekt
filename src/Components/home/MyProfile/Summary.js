import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: left;
    margin: 1em;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const Name = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    margin: 5px;
`;

const NumbersDescription = styled.p`
    font-size: 0.85em;
    color: rgb(170, 167, 167);
    margin: 5px;
`;

const Numbers = styled.p`
    margin: 5px;
`;

export default function HomeMyProfileSummary(props){
    return (
        <Container>
            <Name>{props.person.fName + ' ' + props.person.lName}</Name>
            <NumbersDescription >Personnummer/</NumbersDescription>
            <NumbersDescription>Organisationsnummer:</NumbersDescription>
            <Numbers>{props.person['social security number']}</Numbers>
        </Container>
    )
}