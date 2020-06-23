import React from 'react';
import {LogInContainer, LoggoStyle, ContentDiv, P, Link} from './StylesLogIn'
import LogInForm from './LoginForm'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Logga from '../../images/LoggoTyp.png'
import CreateAccount from './CreateAccount'

const LogIn = ({setUser}) =>{
   
    const clickedLogIn = (e) => {
        e.preventDefault();
        
        const userName = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        
        fetch(`http://localhost:4001/users/${userName}/${password}`)
        .then(response => response.json())
        .then(data => {
          setUser(data.UserName);
          sessionStorage.setItem('userName', data.UserName)
        })
        .catch(error => console.log(error));
      }
    
    return(
      <BrowserRouter>
    <LogInContainer>
    <LoggoStyle src={Logga} alt="Campus Mölndal"/>
      <ContentDiv>
      <h1>Välkommen</h1>
      <Switch>
          <Route exact path="/"> 
          <LogInForm click={clickedLogIn} />
          <P>Psst..    har du inget konto? <Link href="/createAccount">Klicka här!</Link></P>
          </Route>
          <Route exact path="/createAccount" render={() =>{return <CreateAccount click={clickedLogIn} />}}/>
      </Switch>
      </ContentDiv>
    </LogInContainer>
    </BrowserRouter>
    )
}

export default LogIn;