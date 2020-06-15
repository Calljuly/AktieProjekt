import React from 'react';
import {LogInContainer, LoggoStyle, ContentDiv, Form, Label, Input, Button,P, Link} from './StylesLogIn'
import LogInForm from './LoginForm'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Logga from '../../images/LoggoTyp.png'
import CreateAccount from './CreateAccount'

const LogIn = ({setLoggedIn}) =>{
   
    const clickedLogIn = (e) => {
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
      <BrowserRouter>
    <LogInContainer>
    <LoggoStyle src={Logga} alt="Campus Mölndal"/>
      <ContentDiv>
      <h1>Welcome</h1>
      <Switch>
          <Route exact path="/" render={() =>{return <LogInForm click={clickedLogIn} />}}/>
          <Route exact path="/createAccount" render={() =>{return <CreateAccount click={clickedLogIn} />}}/>
      </Switch>
      <P>Psst..    don't have a account? <Link href="/createAccount">Klick here !</Link></P>
      </ContentDiv>
    </LogInContainer>
    </BrowserRouter>
    )
}

export default LogIn;