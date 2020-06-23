import './App.css';
import React, {useState, useEffect} from 'react';
import LogIn from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [userName, setUserName] = useState();

  useEffect(() => {
    if(sessionStorage.getItem('userName'))
    setUserName(sessionStorage.getItem('userName'));
  }, [])

  return (
    <div className="App">
      {
        userName ? <Pages userName={userName} setUserName={setUserName}/> : <LogIn setUser={setUserName}/>
      }
    </div>
  );
}

export default App;


