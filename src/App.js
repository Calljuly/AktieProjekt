import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Meny from './Components/SideMenu'
import Main from './Components/MainContentComponent'

function App() {
  const [date, setDate] = useState({
    date1 : '2020-05-28'
  })
  return (
    <div className="App">
      <Meny></Meny>
      <Main Date={date.date1}></Main>
    </div>
  );
}

export default App;
