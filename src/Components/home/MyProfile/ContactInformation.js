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

export default function HomeDashBoardMyProfileContactInformation(props){
    return (
        <Table>
            <Caption>Kontaktuppgifter</Caption>
            <tbody>
                <tr>
                    <Th>Name</Th>
                    <td>{props.person.name}</td>
                </tr>
                <tr>
                    <Th>Mail</Th>
                    <td>{props.person.mail}</td>
                </tr>
                <tr>
                    <Th>Adress</Th>
                    <td>{props.person.adress}</td>
                </tr>
                <tr>
                    <Th>Postnummer</Th>
                    <td>{props.person.zipCode}</td>
                </tr>
                <tr>
                    <Th>Postort</Th>
                    <td>{props.person.city}</td>
                </tr>
            </tbody>
        </Table>
    );
}