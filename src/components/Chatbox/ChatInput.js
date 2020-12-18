import React, {useState} from 'react'
import SendSharpIcon from '@material-ui/icons/SendSharp';

import './ChatInput.css'
const ChatInput = ({ roomId, roomName }) => {
    const [input, setinput] = useState('')
    const handleInputChange = (e) => {
        setinput(e.target.value)
    }
    return (
        <div>
            <form className="send_message">
                <input className="chat__input" type="text" value={input} placeholder="Send message" onChange={handleInputChange}/>
                <div className="sendButton">
                    <SendSharpIcon />
                </div>
            </form> 
        </div>
    )
}

export default ChatInput
