import React from 'react';
import {Table, Caption, Th, Td} from './StylesMyProfil';

export default function HomeDashBoardMyProfileContactInformation(props){
    return (
        <Table>
            <Caption>Kontaktuppgifter</Caption>
            <tbody>
                <tr>
                    <Th>Name</Th>
                    <Td>{props.person.fName + ' ' + props.person.lName}</Td>
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