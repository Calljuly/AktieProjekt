import React, {useState, useEffect} from 'react'
import {InfoBoxStyle} from './Styles'

const Messagebox = ({username}) => {

    const [personalInformation, setPersonalInformation] = useState();
    const [loading, setLoading] = useState(true);


    useEffect( () => {
      fetch(`http://localhost:4001/users/${username}`)
        .then(response => response.json())
        .then(data => {
            setPersonalInformation(JSON.parse(data.PersonalInformation));
            setLoading(false);});
    }, []);

    return (
        <InfoBoxStyle>
            <p>Välkommen {!loading && personalInformation.fName}! Ditt innehav blev senast uppdaterat 2020-05-31. Ta gärna en titt!</p>
        </InfoBoxStyle>)
}
export default Messagebox;