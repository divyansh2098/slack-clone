import React from 'react'

import ChatInput from './ChatInput'
import Message from './Message'

import './ChatSection.css'
function ChatSection(props) {
    return (
        <div className="chatSectionContainer">
            <div className="messagesContainer">
                { props.messages &&
                    props.messages.map(message => <Message key={message.id} messageData={message} />)
                }
            </div>
        </div>
    )
}

export default ChatSection
