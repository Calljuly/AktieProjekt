import React from 'react'
import { Form, Label, Input, Button} from './StylesLogIn'

const LogInForm =(props) => {
    return(
        
        <Form onSubmit={props.click}>
            <Label name="Mail">Användarnamn :</Label>
            <Input id="userName"type="text" required></Input>
            <Label name="Password">Lösenord :</Label>
            <Input id="password"type="password" required></Input>
            <Button>Logga in</Button>
      </Form>

    )
}
export default LogInForm;