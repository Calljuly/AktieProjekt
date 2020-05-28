import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Meny from './Components/SideMenu'
import Main from './Components/MainContentComponent'

function App() {
 
  return (
    <div className="App">
      <Meny></Meny>
      <Main></Main>
    </div>
  );
}

export default App;
