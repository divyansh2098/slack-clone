import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import db from '../../firebase'

import './ChatInput.css'
const ChatInput = (props) => {
    const [input, setinput] = useState('')
    const user = useSelector(state => state.user)
    
    const handleInputChange = (e) => {
        setinput(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        sendMessage()
    }

    const sendMessage = async () => {
        const currentTime = new Date().getTime()
        if(input.length > 0) {
            setinput('')
            await db.collection('channels').doc(props.channelId).collection('messages').add({
                message: input,
                timestamp: currentTime,
                user: {...user}
            })
        }
    }
    return (
        <div>
            <form className="send_message" onSubmit={submitForm}>
                <input className="chat__input" type="text" value={input} placeholder="Send message" onChange={handleInputChange}/>
                <div className="sendButton" onClick={sendMessage}>
                    <SendSharpIcon />
                </div>
            </form> 
        </div>
    )
}

export default ChatInput
