import React from 'react';
import smart from './assets/smarthomes.svg';
import './App.css';
import Routes from './routes';


function App() {
  return (
    <div className="container">
       
      <img src={smart} alt="Smart Home"/>

      <div className="content">
        <Routes />

        </div>

      </div>

  );
}

export default App;
