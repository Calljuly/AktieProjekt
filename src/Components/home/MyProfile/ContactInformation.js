import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width:100%;
    padding: 0.5em;
`;

const Caption = styled.caption`
    width:70%;
    text-align: left;
    color: rgb(170, 167, 167);
    padding: 0.5em;
`;

const Th = styled.th`
    text-align: left;
`;

const Td = styled.td`
    text-align: left;
`;

export default function HomeDashBoardMyProfileContactInformation(props){
    return (
        <Table>
            <Caption>Kontaktuppgifter</Caption>
            <tbody>
                <tr>
                    <Th>Name</Th>
                    <Td>{props.person.name}</Td>
                </tr>
                <tr>
                    <Th>Mail</Th>
                    <Td>{props.person.mail}</Td>
                </tr>
                <tr>
                    <Th>Adress</Th>
                    <Td>{props.person.adress}</Td>
                </tr>
                <tr>
                    <Th>Postnummer</Th>
                    <Td>{props.person.zipCode}</Td>
                </tr>
                <tr>
                    <Th>Postort</Th>
                    <Td>{props.person.city}</Td>
                </tr>
            </tbody>
        </Table>
    );
}