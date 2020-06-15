import React from 'react';

const LogInForm = ({setUser}) =>{
   
    const logIn = (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        fetch(`http://localhost:4001/customer/${username}/${password}`)
        .then(response => response.json())
        .then(data => {
          setUser(data.UserName);
        })
        .catch(error => console.log(error));
      }
    
    return(
    <div>
      <h1>Logga in</h1>
      <form onSubmit={logIn}>
        <input id="username"type="text" required></input>
        <input id="password"type="password" required></input>
        <button>Logga in</button>
      </form>
    </div>
    )
}

export default LogInForm;