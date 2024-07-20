import React from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo.js';

const personalData = {
  name: 'Олена',
  lastName: 'Петренко',
  phone: '+1647 843-76-90',
  email: 'sdfgh@gmail.com',
  city: 'Запоріжжя',
  experience: '6 років',
  skills: 'програміст',
  photo: 'th.jpg'
};

function App() {
  return (
    <div className="container">
      <h1>Персональна сторінка</h1>
      <PersonalInfo {...personalData} />
    </div>
  );
}

export default App;
