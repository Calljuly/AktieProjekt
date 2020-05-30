import React from 'react';

export default function HomeMyProfileSummary(props){
    return (
        <div>
            <h1>{props.person.name}</h1>
            <p>Personnummer/Organisationsnummer:</p>
            <h2>{props.person['social security number']}</h2>
        </div>
    )
}