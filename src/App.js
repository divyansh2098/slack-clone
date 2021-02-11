import React from 'react'
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import { useSelector } from 'react-redux'
import Intro from './components/Intro/Intro'
import ChatApplication from './components/ChatApplication/ChatApplication'
import Savesuccess from './components/helper/saveSuccessPopup';
import ServerDetail from './components/helper/ServerDetail';

function App() {
  const {user} = useSelector(state => state)
  return (
    <div className="App">
      <BrowserRouter>
      { user ?
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/app" component={ChatApplication} />
            <Route path="/server/:serverId" component={ServerDetail}/>
          </Switch>
        : 
        <Login/>
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
