import React from 'react';
import {Table, Caption, Th, Td} from './Styles';

const ContactInformation = ({person}) => {
    return (
        <Table>
            <Caption>Kontaktuppgifter</Caption>
            <tbody>
                <tr>
                    <Th>Name</Th>
                    <Td>{person.fName + ' ' + person.lName}</Td>
                </tr>
                <tr>
                    <Th>Mail</Th>
                    <Td>{person.mail}</Td>
                </tr>
                <tr>
                    <Th>Adress</Th>
                    <Td>{person.adress}</Td>
                </tr>
                <tr>
                    <Th>Postnummer</Th>
                    <Td>{person.zipCode}</Td>
                </tr>
                <tr>
                    <Th>Postort</Th>
                    <Td>{person.city}</Td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ContactInformation;