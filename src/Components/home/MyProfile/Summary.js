import React from 'react';

export default function HomeMyProfileSummary(props){
    return (
        <div>
            <p style={{fontSize:'1.5rem'}}><strong>{props.person.name}</strong></p>
            <p>Personnummer/Organisationsnummer:</p>
            <p style={{fontSize:'1.2rem'}}>{props.person['social security number']}</p>
        </div>
    )
}