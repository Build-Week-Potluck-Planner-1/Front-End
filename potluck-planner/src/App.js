import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import UserLog from './UserLog';
import UserRegister from './UserRegister';
import {v4} from 'uuid';
import './App.css';

const blankLog = {
  logEmail: '',
  logPassword: ''
};

const blankReg = {
  userFName: '',
  userLName: '',
  userEmail: '',
  userPassword: ''
};

function App() {
  const [logEntries, setLogEntries] = useState(blankLog);
  const [regEntries, setRegEntries] = useState(blankReg);

  const submitLog = function(loggingIn) {
    axios.post('https://potluck-plann3r.herokuapp.com/api', loggingIn)
      .then(loginResponse => {
        console.log('Logged Account is ', loginResponse.data);
      })
      .catch(loginError => {
        console.log('Error with Post request in login data');
      })
      .finally(logEvt => {
        setLogEntries(blankLog);
      })
  };

  const submitReg = function(registerAcct) {
    axios.post('https://potluck-plann3r.herokuapp.com/api', registerAcct)
      .then(registerResponse => {
        console.log('Registered Account is ', registerResponse.data);
      })
      .catch(registerError => {
        console.log('Error with Post request in registering account');
      })
      .finally(regEvt => {
        setRegEntries(blankReg);
      })
    };

  const confirmLog = function(logEvent) {
    logEvent.preventDefault();

    const loggedUser = {
      //id: v4(), //I doubt this is needed for the Login aspect. User should have this upon registering
      logEmail: logEntries.logEmail.trim(),
      logPassword: logEntries.logEmail.trim()
    };

    submitLog(loggedUser);
  };

  const confirmRegister = function(regEvent) {
    regEvent.preventDefault();

    const registerUser = {
      id: v4(),
      userFName: regEntries.userFName.trim(),
      userLName: regEntries.userLName.trim(),
      userEmail: regEntries.userEmail.trim(),
      userPassword: regEntries.userPassword.trim()
    };

    submitReg(registerUser);
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Switch>
      <Route exact path='/'>
        <UserLog loginSubmit={confirmLog} />
      </Route>
      <Route exact path='/register'>
        <UserRegister registerSubmit={confirmRegister} />
      </Route>
    </Switch>
  );
}

export default App;
