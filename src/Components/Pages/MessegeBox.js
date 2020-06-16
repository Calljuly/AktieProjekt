import React, {useState, useEffect} from 'react'
import {InfoBoxStyle} from './Styles'

const Messagebox = ({user}) => {

    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(true);


    useEffect( () => {
      fetch(`http://localhost:4001/customer/${user}`)
        .then(response => response.json())
        .then(data => {
            setUserInfo(JSON.parse(data.PersonalInformation));
            setLoading(false);});
    }, []);

    return (
        <InfoBoxStyle>
            <p>Välkommen {!loading && userInfo.fName}! Ditt innehav blev senast uppdaterat 2020-05-31. Ta gärna en titt!</p>
        </InfoBoxStyle>)
}
export default Messagebox;