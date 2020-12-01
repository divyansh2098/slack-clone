import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'

import './ChannelStrip.css'
const ChannelStrip = (props) => {

    const history = useHistory();
    
    const changeChannelHandler = () => {
        history.push("/app/" + props.id)
    }

    return (
        <div className="channelStrip" onClick={changeChannelHandler}>
            <p className="hash">#</p>
            <div className="description">
                {props.text}
            </div>
        </div>
    )
}

export default ChannelStrip