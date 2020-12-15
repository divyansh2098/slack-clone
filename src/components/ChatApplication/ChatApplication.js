import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {Switch, Route} from 'react-router-dom'
import Chatbox from '../Chatbox/Chatbox'
import Welcome from '../Welcome/Welcome'
import Appbar from '../../hoc/Appbar/Appbar'
import Guidelines from '../Guidelines/Guidelines'

import './ChatApplication.css'
function ChatApplication() {
    return (
        <div className="chat-app-content">
            <Sidebar />
            <div className="main-application">
                <Appbar>
                    <Switch>
                        <Route path="/chat/:roomId" exact component={Chatbox} />
                        <Route path="/chat" exact component={Guidelines} />
                    </Switch>
                </Appbar>
            </div>
        </div>
    )
}

export default ChatApplication
