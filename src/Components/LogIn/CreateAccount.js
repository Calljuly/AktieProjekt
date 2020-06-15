import React from 'react'
import {LogInContainer, LoggoStyle, ContentDiv, Form, Label, Input, Button,P, Link} from './StylesLogIn'

const CreateAccount =(props) =>{
    return(

        <Form onSubmit={props.click}>
        <Label name="Mail">Enter Mail : </Label>
        <Input id="mail"type="text" required></Input>
        <Label name="Password">Enter Password :</Label>
        <Input id="password"type="password" required></Input>
        <Label name="Password">Enter Password again :</Label>
        <Input id="password"type="password" required></Input>
        <Button>Create Account</Button>
      </Form>

    )
}
export default CreateAccount;