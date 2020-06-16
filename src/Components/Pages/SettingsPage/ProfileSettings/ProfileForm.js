import React, {useState, useEffect} from 'react';
import {Form, FlexContainer,PaddedContainer, PaddedContainerRightMargin,Label, Input} from '../Styles'

const ProfileForm = ({user}) => {
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

    const showContent = () => {
        return (
            <>
                <FlexContainer>
                    <PaddedContainerRightMargin>
                        <Label>Förnamn</Label>
                        <Input name='fName' type="text" defaultValue={userInfo.fName}></Input>
                    </PaddedContainerRightMargin>
                    <PaddedContainer>
                        <Label>Efternamn</Label>
                        <Input name='lName' type="text" defaultValue={userInfo.lName}></Input>
                    </PaddedContainer>
                </FlexContainer>
                <PaddedContainer>
                    <Label>Personnummer/Organisationsnummer</Label>
                    <Input name='socialNumber' type="text" defaultValue={userInfo.idNumber}></Input>
                </PaddedContainer>
                <PaddedContainer>
                    <Label>Adress</Label>
                    <Input name='adress' type="text" defaultValue={userInfo.adress}></Input>
                </PaddedContainer>
                <FlexContainer>
                    <PaddedContainerRightMargin>
                        <Label>Postort</Label>
                        <Input name='city' type='text' defaultValue={userInfo.city}></Input>
                    </PaddedContainerRightMargin>
                    <PaddedContainer>
                        <Label>Postnummer</Label>
                        <Input name='zipCode' type='text' defaultValue={userInfo.zipCode}></Input>
                    </PaddedContainer>
                </FlexContainer>
                <PaddedContainer>
                    <Label>Telefonnummer</Label>
                    <Input name='phone' type='text' defaultValue={userInfo.phone}></Input>
                </PaddedContainer>
                <PaddedContainer>
                    <Label>E-mail</Label>
                    <Input name='mail' type='text' defaultValue={userInfo.mail}></Input>
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