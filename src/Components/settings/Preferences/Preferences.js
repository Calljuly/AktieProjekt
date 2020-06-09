import React from 'react';
import PersonalInfo from '../../../Data/PersonalInformation.json'
import PreferenceItem from './PreferenceItem'
import {StyledForm, StyledTable, GrayP, Link, PreferenceContainer} from '../StylesSettings'

let suggestedIndustries = ["Byggsektorn", "Medtech", "Textech", "Spel", "Fintech", "Sovtech", "Läppglans"];
let preferredIndustries = PersonalInfo.preferences;

const editPreferences = (e, name) =>{
    if (e.target.checked === false){

        let index = preferredIndustries.indexOf(name);
        preferredIndustries.splice(index, 1);
    }
    else{
        preferredIndustries.push(name);
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

const PreferencesForm = () => {
    return (
        <PreferenceContainer>
            <GrayP>Mina prefererade industrier att investera inom:</GrayP>
            <StyledForm>
                <StyledTable>
                    {writeOutAllSuggestions()}
                </StyledTable>
            </StyledForm>
            <div style = {{maxWidth: '50%', fontSize: '14px'}}>
                <p style = {{marginBottom: '15px', color: '#3D4465', fontSize: '14px'}}>Tips! Ifall du väljer att integrerar din bank så kan vi anpassa dina investeringar utefter din ekonomi och preferenser.</p>
                <GrayP><Link href="" style = {{marginRight: '15px'}}>Integrera min bank</Link>(detta kommer att skicka dig vidare etc....)</GrayP>
            </div>
        </PreferenceContainer>
    )
}

export default PreferencesForm