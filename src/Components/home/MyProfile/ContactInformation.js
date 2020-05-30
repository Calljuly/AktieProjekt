import React from 'react';
import './contactInformation.css';

export default function HomeDashBoardMyProfileContactInformation(props){
    return (
        <table>
            <caption style={{textAlign: 'left'}}>Kontaktuppgifter</caption>
            <tr>
                <th>Name</th>
                <td>{props.person.name}</td>
            </tr>
            <tr>
                <th>Mail</th>
                <td>{props.person.mail}</td>
            </tr>
            <tr>
                <th>Adress</th>
                <td>{props.person.adress}</td>
            </tr>
            <tr>
                <th>Postnummer</th>
                <td>{props.person.zipCode}</td>
            </tr>
            <tr>
                <th>Postort</th>
                <td>{props.person.city}</td>
            </tr>
        </table>
    );
}