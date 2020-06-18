import './App.css';
import React, {useState, useEffect} from 'react';
import LogIn from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [username, setUserName] = useState();

  useEffect(() => {
    if(sessionStorage.getItem('username'))
    setUserName(sessionStorage.getItem('username'));
  }, [])

  return (
    <div className="App">
      {
        username ? <Pages username={username} setUserName={setUserName}/> : <LogIn setUser={setUserName}/>
      }
    </div>
  );
}

export default App;


