import React from 'react';
import './App.css';
import Welcome from './componets/welcome/Welcome';
import Clock from './componets/clock/Clock';
import Contact from './componets/contact/Contact';
import {Route, Switch} from "react-router-dom";
import Navigation from './componets/navigation/Navigation';
import NotFound from './componets/not-found/NotFound';




function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch></Switch>
      <Route exact 
      path="/"
      render={(props) => <Welcome {...props} name="Katrine" />}
      />
      
      <Route 
      path="/clock" 
      component= {Clock}/>

      <Route 
      path="/contact" 
      component= {Contact}/>

      <Route 
      path="/404"
      component={NotFound}/>
      <Switch/>
    </div>
  );
    
}

export default App;
