import React from 'react';
import {Form, FlexContainer,PaddedContainer, PaddedContainerRightMargin,Label, Input} from '../Styles'

const ProfileForm = ({person}) => {
    return(
        <Form>
            <FlexContainer>
                <PaddedContainerRightMargin>
                    <Label>Förnamn</Label>
                    <Input name='fName' type="text" defaultValue={person.fName}></Input>
                </PaddedContainerRightMargin>
                <PaddedContainer>
                    <Label>Efternamn</Label>
                    <Input name='lName' type="text" defaultValue={person.lName}></Input>
                </PaddedContainer>
            </FlexContainer>
            <PaddedContainer>
                <Label>Personnummer/Organisationsnummer</Label>
                <Input name='socialNumber' type="text" defaultValue={person.idNumber}></Input>
            </PaddedContainer>
            <PaddedContainer>
                <Label>Adress</Label>
                <Input name='adress' type="text" defaultValue={person.adress}></Input>
            </PaddedContainer>
            <FlexContainer>
                <PaddedContainerRightMargin>
                    <Label>Postort</Label>
                    <Input name='city' type='text' defaultValue={person.city}></Input>
                </PaddedContainerRightMargin>
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

export default ProfileForm;