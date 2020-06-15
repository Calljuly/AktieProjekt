import './App.css';
import React, {useState} from 'react';
import LogInForm from './Components/LogIn/LogIn';
import Pages from './Components/Pages/Pages';


const App = () =>{
  const [user, setUser] = useState();
  


  return (
    <div className="App">
      {
        user ? <Pages user={user}/> : <LogInForm setUser={setUser}/>
      }
    </div>
  );
}

export default App;


