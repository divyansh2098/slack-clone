import React from 'react'

import './Message.css'
function Message(props) {
    const messageData = props.messageData
    return (
        <div className="message_container">
            <div className="message__data">
                <img src={messageData.image} alt="user_image" className="userImage"/>
                <div className="message">
                    {messageData.message}
                </div>
            </div>
            <div className="time__stamp">
                <p>{messageData && messageData.timestamp && new Date(messageData.timestamp.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
}

export default Message
