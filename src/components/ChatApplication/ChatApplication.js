import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {Switch, Route} from 'react-router-dom'
import Chatbox from '../Chatbox/Chatbox'
import Welcome from '../Welcome/Welcome'
import Header from '../Header/Header'

import './ChatApplication.css'
function ChatApplication() {
    return (
        <>
            <Header />
            <div className="chat-app-content">
                <Sidebar />
                <Switch>
                    <Route path="/app/:roomId" exact component={Chatbox} />
                    <Route path="/" exact component={Welcome} />
                </Switch>
            </div>
        </>
    )
}

export default ChatApplication
