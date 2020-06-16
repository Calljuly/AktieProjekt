import './App.css';
import React, {useState} from 'react';
import LogIn from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [user, setUser] = useState();


  return (
    <div className="App">
      {
        user ? <Pages user={user}/> : <LogIn setUser={setUser}/>
      }
    </div>
  );
}

export default App;


