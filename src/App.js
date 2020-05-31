import React from 'react';
import './App.css';
import HomeDashboardMyProfile from './Components/home/MyProfile/MyProfile';

const dummyProfile = {
  name: 'John Doe',
  'social security number': '730605-9090',
  mail: 'john@gmail.com',
  adress: 'trätorget',
  zipCode: '456123',
  city: 'Göteborg',
  preferences: ['restaurang', 'djurhållning', 'it', 'Hitta nemo']
}

function App() {
  return (
    <div>
      <HomeDashboardMyProfile person={dummyProfile}/>
    </div>
  );
}

export default App;
