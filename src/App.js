import React from 'react'
import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Chatbox from './components/Chatbox/Chatbox';
import Login from './components/Login/Login'
import Welcome from './components/Welcome/Welcome'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)
  return (
    <div className="App">
      { user ?
        <><Header />
        <BrowserRouter>
          <div className="app-content">
            <Sidebar />
            <Switch>
              <Route path="/app/:roomId" exact component={Chatbox} />
              <Route path="/" exact component={Welcome} />
            </Switch>
          </div>
        </BrowserRouter></>
        : 
        <Login />
      }
    </div>
  );
}

export default App;
