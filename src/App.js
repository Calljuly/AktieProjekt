import React, {useState, useEffect} from 'react';
import './App.css';
import PersonalInfo from './Data/PersonalInformation.json'
import LogInForm from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';
import {ProtectedRoute} from './Components/ProtectedRoute/ProtectedRoute'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const App = () =>{
  const [loggedIn, setLoggedIn] = useState(false);
  const [date, setDate] = useState({date1 : '2020-05-28'});
  
  const dummyProfile = PersonalInfo;

  useEffect(() => {

    if(sessionStorage.getItem('loggedIn'))
      setLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
      
          <Switch>
            <ProtectedRoute exact path='/home' component={<h1>Works</h1>} /> 

            <Route path='/' component={LogInForm} />
            
            <Route path="*" render={() => {
              return <h1>Error 404</h1>
           }} />
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;


