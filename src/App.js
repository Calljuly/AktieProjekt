import React, {useState, useEffect} from 'react';
import './App.css';
import PersonalInfo from './Data/PersonalInformation.json'
import LogInForm from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [user, setUser] = useState();
  const [date, setDate] = useState({date1 : '2020-05-28'});
  
  const dummyProfile = PersonalInfo;


  return (
    <div className="App">
      {
        user ? <Pages date={date} person={dummyProfile} user={user}/> : <LogInForm setUser={setUser}/>
      }
    </div>
  );
}

export default App;


