import React from 'react';
import './App.css';
import Welcome from './componets/welcome/Welcome';
import Clock from './componets/clock/Clock';
import Contact from './componets/contact/Contact';


function App() {
  return (
    <div className="App">
      <Welcome name="Katrine"/>
      <Clock/>
      <Contact/>
    </div>
  );
}

export default App;
