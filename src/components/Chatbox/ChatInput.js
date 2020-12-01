import React, {useState} from 'react'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {useSelector} from 'react-redux'
import firebase from 'firebase'
 
import db from '../../firebase'

import './ChatInput.css'
const ChatInput = ({ roomId, roomName }) => {
    const [input, setinput] = useState('')
    const user = useSelector(state=>state.user)
    const sendMessageHandler = (e) => {
        e.preventDefault()
        db.collection('channels').doc(roomId)
        .collection('messages').add({
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            image: user.photoURL
        }).then(()=> {
            setinput('')
        })
    }
    const handleInputChange = (e) => {
        setinput(e.target.value)
    }
    return (
        <div>
            <form className="send_message">
                <input className="chat__input" type="text" value={input} placeholder={`Send Message to #${roomName}`} onChange={handleInputChange}/>
                <SendRoundedIcon className="send__button" onClick={sendMessageHandler}/>
                <button style={{display: "none"}} type="submit" onClick={sendMessageHandler}></button>
            </form> 
        </div>
    )
}

export default ChatInput
