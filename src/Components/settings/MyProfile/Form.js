import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding: 1em;
    width: 100%;
`;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
`;

const PaddedContainer = styled.div`
    padding: 0.5em;
    width: 100%;
`;

const Label = styled.label `
    display: block;
`;

const Input = styled.input `
    width:100%;
`;

const SettingsMyProfileForm = ({person}) => {
    return(
        <Form>
            <FlexContainer>
                <PaddedContainer>
                    <Label>Förnamn</Label>
                    <Input name='fName' type="text" defaultValue={person.name}></Input>
                </PaddedContainer>
                <PaddedContainer>
                    <Label>Efternamn</Label>
                    <Input name='lName' type="text" defaultValue={person.name}></Input>
                </PaddedContainer>
            </FlexContainer>
            <PaddedContainer>
                <Label>Personnummer/Organisationsnummer</Label>
                <Input name='socialNumber' type="text" defaultValue={person['social security number']}></Input>
            </PaddedContainer>
            <PaddedContainer>
                <Label>Adress</Label>
                <Input name='adress' type="text" defaultValue={person.adress}></Input>
            </PaddedContainer>
            <FlexContainer>
                <PaddedContainer>
                    <Label>Postort</Label>
                    <Input name='city' type='text' defaultValue={person.city}></Input>
                </PaddedContainer>
                <PaddedContainer>
                    <Label>Postnummer</Label>
                    <Input name='zipCode' type='text' defaultValue={person.zipCode}></Input>
                </PaddedContainer>
            </FlexContainer>
            <PaddedContainer>
                <Label>Telefonnummer</Label>
                <Input name='phone' type='text' defaultValue={person.phone}></Input>
            </PaddedContainer>
            <PaddedContainer>
                <Label>E-mail</Label>
                <Input name='mail' type='text' defaultValue={person.mail}></Input>
            </PaddedContainer>
        </Form>
    )
}

export default SettingsMyProfileForm;