import React, {useState, useEffect} from 'react';
import {Form, FlexContainer,PaddedContainer, PaddedContainerRightMargin,Label, Input} from '../Styles'

const ProfileForm = ({username}) => {
    const [personalInformation, setPersonalInformation] = useState();
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        fetch(`http://localhost:4001/customer/${username}`)
        .then(response => response.json())
        .then(data => {
            setPersonalInformation(JSON.parse(data.PersonalInformation));
            setLoading(false);});
    }, []);

    const showContent = () => {
        return (
            <>
                <FlexContainer>
                    <PaddedContainerRightMargin>
                        <Label>Förnamn</Label>
                        <Input name='fName' type="text" defaultValue={personalInformation.fName}></Input>
                    </PaddedContainerRightMargin>
                    <PaddedContainer>
                        <Label>Efternamn</Label>
                        <Input name='lName' type="text" defaultValue={personalInformation.lName}></Input>
                    </PaddedContainer>
                </FlexContainer>
                <PaddedContainer>
                    <Label>Personnummer/Organisationsnummer</Label>
                    <Input name='socialNumber' type="text" defaultValue={personalInformation.idNumber}></Input>
                </PaddedContainer>
                <PaddedContainer>
                    <Label>Adress</Label>
                    <Input name='adress' type="text" defaultValue={personalInformation.adress}></Input>
                </PaddedContainer>
                <FlexContainer>
                    <PaddedContainerRightMargin>
                        <Label>Postort</Label>
                        <Input name='city' type='text' defaultValue={personalInformation.city}></Input>
                    </PaddedContainerRightMargin>
                    <PaddedContainer>
                        <Label>Postnummer</Label>
                        <Input name='zipCode' type='text' defaultValue={personalInformation.zipCode}></Input>
                    </PaddedContainer>
                </FlexContainer>
                <PaddedContainer>
                    <Label>Telefonnummer</Label>
                    <Input name='phone' type='text' defaultValue={personalInformation.phone}></Input>
                </PaddedContainer>
                <PaddedContainer>
                    <Label>E-mail</Label>
                    <Input name='mail' type='text' defaultValue={personalInformation.mail}></Input>
                </PaddedContainer>
            </>
        )
    }
    
    return(
        <Form>
            {!loading && showContent()}
        </Form>
    )
}

export default ProfileForm;