import React, {useState} from 'react';
import './App.css';
import PersonalInfo from './Data/PersonalInformation.json'
import LogInForm from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [loggedIn, setLoggedIn] = useState(false);
  const [date, setDate] = useState({date1 : '2020-05-28'});
  
  const dummyProfile = PersonalInfo;

  return (
    <div className="App">
      {
        loggedIn ? <Pages date={date} person={dummyProfile}/> : <LogInForm setLoggedIn={setLoggedIn}/>
      }
    </div>
  );
}

export default App;


