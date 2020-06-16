import React, {useState, useEffect} from 'react'
import {InfoBoxStyle} from './Styles'

const Messagebox = ({user}) => {

    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(true);


    async function fetchUserInfo () {
      const response = await fetch(`http://localhost:4001/customer/${user}`);
      const json = await response.json();
      
      setUserInfo(JSON.parse(json.PersonalInformation));
      setLoading(false);

    }

    useEffect( () => {
      fetchUserInfo();
    }, []);

    return (
        <InfoBoxStyle>
            <p>Välkommen {!loading && userInfo.fName}! Ditt innehav blev senast uppdaterat 2020-05-31. Ta gärna en titt!</p>
        </InfoBoxStyle>)
}
export default Messagebox;