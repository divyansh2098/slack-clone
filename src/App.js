import React from 'react'
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import { useSelector } from 'react-redux'
import Intro from './components/Intro/Intro'
import Guidelines from './components/Guidelines/Guidelines'
import ChatApplication from './components/ChatApplication/ChatApplication'

function App() {
  const {user} = useSelector(state => state)
  return (
    <div className="App">
      { user ?
        <BrowserRouter>
          <Switch>
          <Route path="/guidelines"  component={ Guidelines }/>
            <Route path="/" exact component={Intro} />
            <Route path="/chat" component={ChatApplication} />
          </Switch>
        </BrowserRouter>
        : 
        <Login />
      }
    </div>
  );
}

export default App;
