import React from 'react'
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import { useSelector } from 'react-redux'
import Intro from './components/Intro/Intro'
import Guidelines from './components/Guidelines/Guidelines';

function App() {
  const {user} = useSelector(state => state)
  return (
    <div className="App">
      { user ?
        <BrowserRouter>
          <Switch>
          <Route path="/guidelines"  component={ Guidelines }/>
            <Route path="/" component={Intro} />
            
          </Switch>
        </BrowserRouter>
        : 
        <Login />
      }
    </div>
  );
}

export default App;
