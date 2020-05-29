import React from 'react';
import './App.css';
import ProfilePicture from './components/common/ProfilePicture';
import HomeDashBoardMyProfileContactInformation from './components/home/ContactInformation'

const dummyProfile = {
  name: 'John Doe',
  mail: 'john@gmail.com',
  adress: 'trätorget',
  zipCode: '456123',
  city: 'Göteborg'
}

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <ProfilePicture pictureName="testProfile"/>
      <HomeDashBoardMyProfileContactInformation person={dummyProfile}/>
    </div>
  );
}

export default App;
