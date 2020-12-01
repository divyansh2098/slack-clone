import React, { useEffect, useState } from 'react'

import {storage} from '../../firebase'
import { useSelector } from 'react-redux'
import './Welcome.css'
function Welcome() {
    const [imageUrl, setImageUrl] = useState('')
    const user = useSelector(state => state.user)
    useEffect(() => {
        const pathReference = storage.ref('Messages_undraw.svg')
        pathReference.getDownloadURL().then(url => {
            setImageUrl(url)      
        }).catch((err)=> {
            console.log(err.message)
        })
    },[])
    return (
        <div className="welcome_container">
            <div className="welcome_message">
                <h1>Welcome,</h1>
                <h1>{user.displayName}</h1>
                <img src={user.photoURL} alt=""/>
            </div>
            <div className="about_app">
                <div className="message__img">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="instructions">
                    <ul>
                        <li>Create different rooms</li>
                        <li>Chat with friends</li>
                        <li>Feedback at divyanshnaman1998@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Welcome
