import './App.css';
import React, {useState, useEffect} from 'react';
import LogIn from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';
import {ProtectedRoute} from './Components/ProtectedRoute/ProtectedRoute'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const App = () =>{
  const [username, setUserName] = useState();

  useEffect(() => {
    if(sessionStorage.getItem('username'))
    setUserName(sessionStorage.getItem('username'));
  }, [])

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


