import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1em;
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
            <Name>{props.person.name}</Name>
            <NumbersDescription >Personnummer/Organisationsnummer:</NumbersDescription>
            <Numbers>{props.person['social security number']}</Numbers>
        </Container>
    )
}