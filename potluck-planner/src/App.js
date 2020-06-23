import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import UserLog from './components/UserLog';
import UserRegister from './components/UserRegister';
import './App.css';
import Dashboard from './components/dashboard';
import PrivateRoute from './components/privateRoute';






function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <UserLog/>
      </Route>
      <Route exact path='/register'>
        <UserRegister/>
      </Route>
      <PrivateRoute path='/dashboard' component={Dashboard}/>
    </Switch>
  );
}

export default App;
