import React from 'react'

import { useSelector } from 'react-redux'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Image from '../../assets/images/UndrawChat.svg'

import './Welcome.css'
import { useHistory } from 'react-router-dom';
function Welcome(props) {
    const history = useHistory()
    const user = useSelector(state => state.user)

    const forwardUser = () => {
        if(!user.isNewUser) {
            history.push('/app')
        } else {
            props.click(true)
        }
    }

    return (
        <div className="welcome_container">
            {user && 
                <div className="welcome_message">
                    <h1>Welcome,</h1>
                    <h1>{user.displayName}</h1>
                    <img src={user.photoURL} alt=""/>
                </div>
            }
            <div className="about_app">
                <div className="message__img">
                    <img src={Image} alt=""/>
                </div>
                <div className="instructions">
                    <ul>
                        <li>Create different rooms</li>
                        <li>Chat with friends</li>
                        <li>Feedback at divyanshnaman1998@gmail.com</li>
                    </ul>
                    <button className="next-button" onClick={forwardUser}>
                        Continue
                        <DoubleArrowIcon /> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
