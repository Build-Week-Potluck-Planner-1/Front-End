//React imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

//Component imports
import UserLog from './components/UserLog';
import UserRegister from './components/UserRegister';
import Dashboard from './components/dashboard';
import PrivateRoute from './components/privateRoute';
import EventCard from './components/eventCard';
import HostEvent from './components/HostEvent';
import SearchEvents from './components/SearchEvents';
import Header from './components/header';
import PotluckEdit from './components/potluckEdit';




function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <UserLog/>
        </Route>
        <Route exact path='/register'>
          <UserRegister/>
        </Route>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/hostform' component={HostEvent}/>
        <PrivateRoute path='/searchform/:id' component={EventCard}/>
        <PrivateRoute path='/searchform' component={SearchEvents}/>
        <PrivateRoute path='/editing/:id' component={PotluckEdit}/>
      </Switch>
    </>
  );
}

export default App;
