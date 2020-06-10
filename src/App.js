import React, {useState} from 'react';
import Main from './Components/Pages/Pages'
import SideMenu from './Components/SideMenu/SideMenu'
import './App.css';
import PersonalInfo from './Data/PersonalInformation.json'
import {BrowserRouter} from 'react-router-dom'
import Briefcase from './Data/Briefcase.json'
import PersonalInformation from './Data/PersonalInformation.json'
import Context from './Data/Context'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })
  const dummyProfile = PersonalInfo;

  return (
    
    <div className="App">
    
    <Context.Provider value={{
        briefCase : Briefcase,
        personalInfo: PersonalInfo
    }}>

      <BrowserRouter>
      <SideMenu/>

      <Main Date={date.date1}
      person={dummyProfile}/>
      </BrowserRouter>

      </Context.Provider>
    </div>
  );
}

export default App;
