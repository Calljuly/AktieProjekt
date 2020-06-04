import React from 'react'
import styled from 'styled-components'
import {Form, PaddedContainer, Input, Label, Main, Button, ContainerButton } from './StylesForm'

const ChangePassword = () =>{
    
    return (
        <Main>
        <Form>
            <PaddedContainer>
                <Label name="CurrentPass">Nuvarande lösenord : </Label>
                <Input type="text" value="currentPass"></Input>
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