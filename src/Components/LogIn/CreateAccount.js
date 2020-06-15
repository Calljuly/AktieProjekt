import React from 'react'
import {Form, Label, Input, Button, Link} from './StylesLogIn'
import {useHistory} from 'react-router-dom'

const CreateAccount =(props) =>{
    const history = useHistory();
    return(

        <Form onSubmit={props.click}>
        <Label name="Mail">Enter Mail : </Label>
        <Input id="mail"type="text" required></Input>
        <Label name="Password">Enter Password :</Label>
        <Input id="password"type="password" required></Input>
        <Label name="Password">Enter Password again :</Label>
        <Input id="password"type="password" required></Input>
        <Button>Create Account</Button>
        <Button onClick={() =>
            history.goBack()
        }>Go Back to start </Button>
      </Form>

    )
}
export default CreateAccount;