import React from 'react';
import {LogInContainer, LoggoStyle, ContentDiv, Form, Label, Input, Button,P, Link} from './StylesLogIn'
import Logga from '../../images/LoggoTyp.png'
const LogInForm = ({setLoggedIn}) =>{
   
    const logIn = (e) => {
        e.preventDefault();
        
        const fName = document.getElementById('mail').value;
        const lName = document.getElementById('password').value;
    
        var xhttp = new XMLHttpRequest();		
            xhttp.open("GET", `http://localhost:4001/customer/${fName}/${lName}`, true);		
        xhttp.onload= function () {
            if(this.status == 200){
              console.log(JSON.parse(this.response));
              setLoggedIn(true);
              sessionStorage.setItem("loggedIn", "true");
            }
            else{
              alert('Could not log in.');
              document.getElementById('mail').value = '';
              document.getElementById('password').value = '';
            }
        }
        xhttp.send();
      }
    
    return(
    <LogInContainer>
    <LoggoStyle src={Logga} alt="Campus Mölndal"/>
      <ContentDiv>
      <h1>Logga in</h1>
      <Form onSubmit={logIn}>
        <Label name="Mail">Mail : </Label>
        <Input id="mail"type="text" required></Input>
        <Label name="Password">Password :</Label>
        <Input id="password"type="password" required></Input>
        <Button>Logga in</Button>
      </Form>
      <P>Psst..    don't have a account? <Link href="Facebook.com">Klick here !</Link></P>
      </ContentDiv>
    </LogInContainer>
    )
}

export default LogInForm;