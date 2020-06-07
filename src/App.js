import React, {useState} from 'react';
import Main from './Components/home/MainContentComponent'
import SideMenu from './Components/SidoMeny/SideMenu'
import './App.css';
import PersonalInfo from './Data/PersonalInformation.json'
import {BrowserRouter} from 'react-router-dom'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })

  const dummyProfile = PersonalInfo;

  return (
    <div className="App">
    <BrowserRouter>
      <SideMenu/>

      <Main Date={date.date1}
      person={dummyProfile}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
