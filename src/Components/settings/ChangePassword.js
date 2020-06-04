import React from 'react'
import {Form, PaddedContainer, Input, Label, Main, Button, ContainerButton } from './StylesSettings'

const ChangePassword = () =>{
    
    return (
        <Main>
        <Form>
            <PaddedContainer>
                <Label name="CurrentPass">Nuvarande lösenord : </Label>
                <Input type="text" value="Password"></Input>
            </PaddedContainer>
            <PaddedContainer>
                <Label name="NewPass">Nytt lösenord : </Label>
                <Input type="password" value="newPass"></Input>
            </PaddedContainer>
            <PaddedContainer>
                <Label name="NewPassAgain">Bekräfta nytt lösenord : </Label>
                <Input type="password" value="newPassAgain"></Input>
            </PaddedContainer>
        </Form>
        <ContainerButton>
            <Button>Save</Button>
        </ContainerButton>
        

        </Main>
      )

}
export default ChangePassword;