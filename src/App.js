import './App.css';
import React, {useState, useEffect} from 'react';
import LogIn from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [user, setUser] = useState();

  useEffect(() => {
    if(sessionStorage.getItem('username'))
    setUser(sessionStorage.getItem('username'));
  }, [])

  return (
    <div className="App">
      {
        user ? <Pages user={user}/> : <LogIn setUser={setUser}/>
      }
    </div>
  );
}

export default App;


