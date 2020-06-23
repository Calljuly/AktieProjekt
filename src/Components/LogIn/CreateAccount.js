import React from 'react'
import {Form, Label, Input, Button} from './StylesLogIn'
import {useHistory} from 'react-router-dom'

const CreateAccount =(props) =>{

    const history = useHistory();

    return(

        <Form onSubmit={props.click}>
            <Label name="Mail">Ange mail : </Label>
            <Input id="mail"type="text" required></Input>
            <Label name="Password">Ange lösenord :</Label>
            <Input id="password"type="password" required></Input>
            <Label name="Password">Upprepa lösenord :</Label>
            <Input id="password"type="password" required></Input>
            <Button>Skapa konto</Button>
            
            <Button onClick={() =>
                history.goBack()
            }>Gå till start</Button>
      </Form>

    )
}
export default CreateAccount;