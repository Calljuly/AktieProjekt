import React, {useState, useEffect} from 'react';
import PreferenceItem from './PreferenceItem'
import {StyledForm, StyledTable, GrayP, Link, PreferenceContainer} from '../Styles'



const PreferencesSettings = ({username}) => {

    let suggestedIndustries = ["Byggsektorn", "Medtech", "Textech", "Spel", "Fintech", "Sovtech", "Läppglans"];
    const [preferredIndustries, setPreferredIndustries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [personalInformation, setPersonalInformation] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4001/users/${username}`)
        .then(response => response.json())
        .then(data => {
          setPersonalInformation(JSON.parse(data.PersonalInformation));
          setPreferredIndustries(JSON.parse(data.PersonalInformation).preferences);
          setLoading(false);
        });



        }, []);

    const updatePreferencesInDatabase = () =>{
        


        fetch(`http://localhost:4001/update/personalinformation/${username}`, {
            body: JSON.stringify({personalInformation: personalInformation}),
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PATCH'
          })
    }

    const editPreferences = (e, name) =>{
        if (e.target.checked === false){

            let index = preferredIndustries.indexOf(name);
            let currentPreferredIndustries = preferredIndustries;
            currentPreferredIndustries.splice(index, 1)

            setPreferredIndustries(currentPreferredIndustries);
            let currentPersonalInformation = personalInformation;
            currentPersonalInformation.preferences = preferredIndustries;
            
            updatePreferencesInDatabase();
        }
        else{
            let currentPreferredIndustries = preferredIndustries;
            currentPreferredIndustries.push(name);
            setPreferredIndustries(currentPreferredIndustries);

            let currentPersonalInformation = personalInformation;
            currentPersonalInformation.preferences = preferredIndustries;
            setPersonalInformation(currentPersonalInformation);

            updatePreferencesInDatabase();
        }

    }

    const writeOutAllSuggestions = () =>{
        let result = [];

        for (let i = 0; i < suggestedIndustries.length; i += 2) {
            if ((i + 1) < suggestedIndustries.length){
                result.push(
                    <tr key = {i}>
                        <PreferenceItem
                            name = {suggestedIndustries[i]}
                            check = {preferredIndustries.includes(suggestedIndustries[i])}
                            handleChange = {editPreferences}/>
                        <PreferenceItem
                            name = {suggestedIndustries[i + 1]}
                            check = {preferredIndustries.includes(suggestedIndustries[i + 1])}
                            handleChange = {editPreferences}
                            />
                    </tr>
                );
            }
            else if (i === (suggestedIndustries.length - 1)){
                result.push(
                    <tr key = {i}>
                        <PreferenceItem
                            handleChange = {editPreferences}
                            name = {suggestedIndustries[i]}
                            check = {preferredIndustries.includes(suggestedIndustries[i])}/>
                    </tr>
                );
            }

        }

        return result;
    }

    return (

        <PreferenceContainer>
            <GrayP>Mina prefererade industrier att investera inom:</GrayP>
            <StyledForm>
                <StyledTable>
                    {!loading && writeOutAllSuggestions()}
                </StyledTable>
            </StyledForm>
            <div style = {{maxWidth: '50%', fontSize: '14px'}}>
                <p style = {{marginBottom: '15px', color: '#3D4465', fontSize: '14px'}}>Tips! Dina val i checkboxarna ovan sparas automatiskt vid klick.</p>
                <GrayP><Link href="" style = {{marginRight: '15px'}}>Integrera min bank</Link>(detta kommer att skicka dig vidare etc....)</GrayP>
            </div>
        </PreferenceContainer>
    )
}

export default PreferencesSettings