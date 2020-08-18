import React from 'react';
import './App.css';
import Welcome from './componets/welcome/Welcome';
import Clock from './componets/clock/Clock';
import Contact from './componets/contact/Contact';
import {Route, Switch} from "react-router-dom";
import Navigation from './componets/navigation/Navigation';
import Child from './componets/child/Child';
import NotFound from './componets/not-found/NotFound';




function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route exact 
      path="/"
      render={(props) => <Welcome {...props} name="Katrine" />}
      />

      <Route
      path="/welcome/:name"
      children={<Child/>}
      />

      <Route 
      path="/clock" 
      component= {Clock}/>

      <Route 
      path="/contact" 
      component= {Contact}/>

      <Route
      component={NotFound}/>
      
      </Switch>
    </div>
  );
    
}

export default App;
