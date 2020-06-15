import React from 'react';

const LogInForm = ({setLoggedIn}) =>{
   
    const logIn = (e) => {
        e.preventDefault();
        
        const fName = document.getElementById('mail').value;
        const lName = document.getElementById('password').value;
    
        var xhttp = new XMLHttpRequest();		
            xhttp.open("GET", `http://localhost:4001/customer/${fName}/${lName}`, true);		
        xhttp.onload= function () {
            if(this.status == 200){
              console.log(JSON.parse(this.response));
              setLoggedIn(true);
              sessionStorage.setItem("loggedIn", "true");
            }
            else{
              alert('Could not log in.');
              document.getElementById('mail').value = '';
              document.getElementById('password').value = '';
            }
        }
        xhttp.send();
      }
    
    return(
    <div>
      <h1>Logga in</h1>
      <form onSubmit={logIn}>
        <input id="mail"type="text" required></input>
        <input id="password"type="password" required></input>
        <button>Logga in</button>
      </form>
    </div>
    )
}

export default LogInForm;