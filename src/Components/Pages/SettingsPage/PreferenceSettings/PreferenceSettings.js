import React, {useState, useEffect} from 'react';
import PreferenceItem from './PreferenceItem'
import {StyledForm, StyledTable, GrayP, Link, PreferenceContainer} from '../Styles'



const PreferencesSettings = ({userName}) => {

    let suggestedIndustries = ["Byggsektorn", "Medtech", "Textech", "Spel", "Fintech", "Sovtech", "Läppglans"];
    const [preferredIndustries, setPreferredIndustries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [personalInformation, setPersonalInformation] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4001/users/${userName}`)
        .then(response => response.json())
        .then(data => {
          setPersonalInformation(JSON.parse(data.PersonalInformation));
          setPreferredIndustries(JSON.parse(data.PersonalInformation).preferences);
          setLoading(false);
        });

        }, []);


    const updatePersonalInformation = (newPreferredIndustries) =>{
            
        setPreferredIndustries(newPreferredIndustries);
        let currentPersonalInformation = personalInformation;
        currentPersonalInformation.preferences = preferredIndustries;
        setPersonalInformation(currentPersonalInformation);
    }

    const sendPersonalInformationToDatabase = () =>{

        fetch(`http://localhost:4001/update/personalinformation/${userName}`, {
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

            updatePersonalInformation(currentPreferredIndustries);
            sendPersonalInformationToDatabase();
        }
        else{
            let currentPreferredIndustries = preferredIndustries;
            currentPreferredIndustries.push(name);

            updatePersonalInformation(currentPreferredIndustries);
            sendPersonalInformationToDatabase();
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