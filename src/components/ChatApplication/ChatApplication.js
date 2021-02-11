import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Appbar from '../../hoc/Appbar/Appbar'
import Guidelines from '../Guidelines/Guidelines'

import './ChatApplication.css'
function ChatApplication() {
    return (
        <div className="chat-app-content">
            <Sidebar />
            <div className="main-application">
                <Appbar>
                    <Guidelines />
                </Appbar>
            </div>
        </div>
    )
}

export default ChatApplication
