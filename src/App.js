import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route path="/" exact component={HomeScreen}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
