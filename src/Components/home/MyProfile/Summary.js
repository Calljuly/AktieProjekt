import React from 'react';

export default function HomeMyProfileSummary(props){
    return (
        <div>
            <p style={{fontSize:'1.25em'}}><strong>{props.person.name}</strong></p>
            <p style={{fontSize:'0.75em'}}>Personnummer/Organisationsnummer:</p>
            <p>{props.person['social security number']}</p>
        </div>
    )
}