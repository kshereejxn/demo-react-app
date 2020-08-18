import React from 'react';
import './App.css';
import Welcome from './componets/welcome/Welcome';
import Clock from './componets/clock/Clock';
import Contact from './componets/contact/Contact';
import {Route, Switch} from "react-router-dom";
import Navigation from './componets/navigation/Navigation';
import Child from './componets/child/Child';




function App() {
  return (
    <div className="App">
      <Navigation/>
      
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

      <Switch>
      <Route
      path="/welcome/:name"
      children={<Child/>}
      />
      </Switch>
    </div>
  );
    
}

export default App;
